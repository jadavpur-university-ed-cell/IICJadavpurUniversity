export class OrganicDotGrid {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;
  private time = 0;
  private dpr = 1;
  private running = false;
  private rafId = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.dpr = window.devicePixelRatio || 1;
    this.resize();
    this.draw = this.draw.bind(this);
  }

  resize() {
    this.width = this.canvas.offsetWidth;
    this.height = this.canvas.offsetHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  private getWaveElevation(x: number, y: number, t: number): number {
    const nx = x / this.width;
    const ny = y / this.height;
    let elevation = Math.sin(nx * 4 + t) * Math.cos(ny * 4 + t) * 15;
    elevation += Math.sin(nx * 8 - t * 1.5) * Math.cos(ny * 6 + t) * 8;
    elevation += Math.sin((nx + ny) * 3 + t * 0.5) * 12;
    return elevation;
  }

  private getScale(x: number, y: number, t: number): number {
    const distFromCenter = Math.sqrt(
      Math.pow(x / this.width - 0.5, 2) + Math.pow(y / this.height - 0.5, 2)
    );
    const ripple = Math.sin(distFromCenter * 15 - t * 1.2);
    return 1.0 + ripple * 0.3;
  }

  private draw() {
    if (!this.running) return;

    this.ctx.fillStyle = '#F5F5F0';
    this.ctx.fillRect(0, 0, this.width, this.height);

    const spacing = 64;
    const offsetX = (this.width % spacing) / 2;
    const offsetY = (this.height % spacing) / 2;
    this.ctx.fillStyle = '#050507';

    for (let y = offsetY; y < this.height; y += spacing) {
      const rowPhase = Math.sin(y * 0.01 + this.time * 0.5);
      const rowOffset = rowPhase * 20;

      for (let x = offsetX; x < this.width; x += spacing) {
        const posX = x + rowOffset;
        const elevation = this.getWaveElevation(posX, y, this.time * 0.02);
        const screenY = y - elevation;
        const scale = this.getScale(posX, y, this.time * 0.03);
        const radius = 2 * scale;
        const opacity = 0.2 + (elevation / 30) * 0.3;

        this.ctx.globalAlpha = Math.max(0.05, Math.min(0.5, opacity));
        this.ctx.beginPath();
        this.ctx.arc(posX, screenY, radius, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    this.ctx.globalAlpha = 1;
    this.time++;
    this.rafId = requestAnimationFrame(() => this.draw());
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
