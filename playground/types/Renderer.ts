import p5 from "p5";
import { ProjectPlan } from "./Project";

export type RendererConfig = {
  background: string
}

export type RenderingEngine = p5

export class Renderer {
  static readonly instance: Renderer
  private renderingEngine: RenderingEngine | undefined;

  constructor(private readonly projectPlan: ProjectPlan, private readonly anchor?: HTMLElement) {}

  render(): void {
    this.renderingEngine = new p5(this.projectPlan, this.anchor)
  }

  remove(): void {
    this.renderingEngine?.remove()
  }
}