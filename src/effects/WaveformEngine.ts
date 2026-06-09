const BAR_COUNT = 48;
const BAR_WIDTH = 4;
const BAR_GAP = 2;
const BAR_MAX_HEIGHT = 120;
const GLOW_RADIUS = 100;

interface Bar {
  current: number;
  target: number;
  noise: number;
}

interface Mouse {
  x: number;
  y: number;
  active: boolean;
}

export class WaveformEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private bars: Bar[];
  private mouse: Mouse;
  private running = false;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.bars = Array.from({ length: BAR_COUNT }, () => ({
      current: 0,
      target: 0,
      noise: 0,
    }));
    this.mouse = { x: -1000, y: -1000, active: false };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.draw = this.draw.bind(this);

    canvas.addEventListener('mousemove', this.handleMouseMove);
    canvas.addEventListener('mouseleave', this.handleMouseLeave);
    canvas.addEventListener('click', this.handleClick);
  }

  private handleMouseMove(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
    this.mouse.active = true;
  }

  private handleMouseLeave() {
    this.mouse.active = false;
  }

  private handleClick() {
    this.pulse();
  }

  private initAudio() {
    if (this.audioContext) return;

    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 128;

    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = 55;

    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 0;

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.analyser);
    this.oscillator.start();

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount) as Uint8Array;
  }

  private pulse() {
    this.bars.forEach((bar) => {
      bar.target = Math.random() * BAR_MAX_HEIGHT;
    });
  }

  private getGradient(ctx: CanvasRenderingContext2D, x: number, y: number, height: number) {
    const gradient = ctx.createLinearGradient(x, y + height, x, y);
    gradient.addColorStop(0, '#C8E558');
    gradient.addColorStop(1, '#0055FF');
    return gradient;
  }

  private draw(timestamp: number) {
    if (!this.running) return;
    requestAnimationFrame(this.draw);

    const w = this.canvas.width;
    const h = this.canvas.height;

    this.ctx.clearRect(0, 0, w, h);

    if (this.dataArray && this.analyser) {
      (this.analyser as any).getByteFrequencyData(this.dataArray);
    }

    const totalBarWidth = BAR_COUNT * (BAR_WIDTH + BAR_GAP) - BAR_GAP;
    const startX = (w - totalBarWidth) / 2;
    const baseLine = h - 32;

    for (let i = 0; i < BAR_COUNT; i++) {
      let targetHeight = 0;

      if (this.dataArray) {
        const dataIndex = Math.floor((i / BAR_COUNT) * this.dataArray.length);
        targetHeight = (this.dataArray[dataIndex] / 255) * BAR_MAX_HEIGHT * 0.6;
      } else {
        targetHeight = BAR_MAX_HEIGHT * 0.15;
      }

      targetHeight += Math.sin(timestamp * 0.002 + i * 0.3) * 8;
      this.bars[i].noise = (Math.random() - 0.5) * 3;
      this.bars[i].current += (targetHeight - this.bars[i].current) * 0.12;

      let barHeight = Math.max(2, this.bars[i].current + this.bars[i].noise);
      const x = startX + i * (BAR_WIDTH + BAR_GAP);
      const y = baseLine - barHeight;

      if (this.mouse.active) {
        const dx = x + BAR_WIDTH / 2 - this.mouse.x;
        const dy = baseLine - barHeight / 2 - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < GLOW_RADIUS) {
          const proximity = 1 - dist / GLOW_RADIUS;
          barHeight += proximity * 20;
          this.ctx.shadowColor = 'rgba(0, 85, 255, 0.4)';
          this.ctx.shadowBlur = proximity * 12;
        } else {
          this.ctx.shadowColor = 'transparent';
          this.ctx.shadowBlur = 0;
        }
      } else {
        this.ctx.shadowColor = 'transparent';
        this.ctx.shadowBlur = 0;
      }

      this.ctx.fillStyle = this.getGradient(this.ctx, x, y, barHeight);

      const r = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(x + r, y);
      this.ctx.lineTo(x + BAR_WIDTH - r, y);
      this.ctx.quadraticCurveTo(x + BAR_WIDTH, y, x + BAR_WIDTH, y + r);
      this.ctx.lineTo(x + BAR_WIDTH, y + barHeight - r);
      this.ctx.quadraticCurveTo(x + BAR_WIDTH, y + barHeight, x + BAR_WIDTH - r, y + barHeight);
      this.ctx.lineTo(x + r, y + barHeight);
      this.ctx.quadraticCurveTo(x, y + barHeight, x, y + barHeight - r);
      this.ctx.lineTo(x, y + r);
      this.ctx.quadraticCurveTo(x, y, x + r, y);
      this.ctx.closePath();
      this.ctx.fill();
    }

    this.ctx.shadowColor = 'transparent';
    this.ctx.shadowBlur = 0;
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  start() {
    this.running = true;
    this.initAudio();
    this.draw(0);
  }

  stop() {
    this.running = false;
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }

  destroy() {
    this.stop();
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('mouseleave', this.handleMouseLeave);
    this.canvas.removeEventListener('click', this.handleClick);
  }
}
