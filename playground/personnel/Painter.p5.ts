import p5 from "p5";
import { RendererConfig } from "../types/Renderer";

export default class Painter {
  angle: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;

  constructor(private engine: p5, private config: RendererConfig) {
    this.angle = 0;
    this.width = this.engine.windowWidth;
    this.height = this.engine.windowHeight;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;

    this.initCanvas();
  }

  initCanvas() {
    this.engine.createCanvas(this.width, this.height);
    this.engine.angleMode(this.engine.DEGREES);

    if (this.config.background) {
      this.engine.background(this.config.background);
    }
  }

  rotate(angle: number) {
    this.engine.rotate(angle);
  }

  fromTheMiddle(callback: () => void) {
    this.engine.translate(this.centerX, this.centerY);
    callback();
    this.engine.translate(-this.centerX, -this.centerY);
  }

  rotateFromTheMiddle(angle: number) {
    this.fromTheMiddle(() => {
      this.rotate(angle);
    });
  }

  rotateCounterClockwise() {
    this.rotateFromTheMiddle(this.angle--);
  }

  rotateClockwise() {
    this.rotateFromTheMiddle(this.angle++);
  }
}
