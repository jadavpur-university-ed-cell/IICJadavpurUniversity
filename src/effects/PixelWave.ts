export class PixelWave {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private cols = 0;
  private rows = 0;
  private time = 0;
  private scrollAmp = 0;
  private running = false;
  private rafId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.draw = this.draw.bind(this);
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.canvas.offsetWidth * dpr;
    this.canvas.height = this.canvas.offsetHeight * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.cols = Math.ceil(this.canvas.offsetWidth / 28);
    this.rows = Math.ceil(this.canvas.offsetHeight / 28);
  }

  private getBandColor(row: number): string {
    const t = row / (this.rows - 1);
    if (t < 0.25) return '#050507';
    else if (t < 0.5) return '#0055FF';
    else if (t < 0.75) return '#C8E558';
    else return '#F5F5F0';
  }

  private draw() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);

    for (let row = 0; row < this.rows; row++) {
      this.ctx.fillStyle = this.getBandColor(row);
      for (let col = 0; col < this.cols; col++) {
        const xOffset = Math.sin(this.time * 0.02 + col * 0.15) * (10 + this.scrollAmp);
        const x = col * 28 + xOffset;
        const y = row * 28;
        this.ctx.fillRect(x, y, 24, 24);
      }
    }

    this.time++;
    this.rafId = requestAnimationFrame(() => this.draw());
  }

  updateScrollAmplitude(scrollY: number) {
    const rect = this.canvas.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const viewportCenter = scrollY + window.innerHeight / 2;
    const distance = Math.abs(viewportCenter - sectionTop);
    this.scrollAmp = Math.max(0, 30 - distance * 0.02);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.draw();
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  destroy() {
    this.stop();
  }
}
