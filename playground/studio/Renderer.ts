import { ProjectPlan } from "../types/Project";
import { RenderingEngine } from "../types/RenderingEngine";
import p5 from "p5";

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