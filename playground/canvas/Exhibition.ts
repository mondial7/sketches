import p5 from "p5";
import { ArtWork } from "../types/ArtWork";
import { ProjectPlan } from "../types/Project";
import { Renderer } from "../types/Renderer";

export class Exhibition {
  title: string;
  projectPlan: ProjectPlan;
  anchor: HTMLElement | undefined;

  private renderer: Renderer | undefined;

  constructor(artWork: ArtWork, anchor?: HTMLElement) {
    this.title = artWork.title;
    this.projectPlan = artWork.projectPlan;
    this.anchor = anchor;
  }

  render() {
    this.renderer = new p5(this.projectPlan, this.anchor);
  }

  cleanUp() {
    this.renderer?.remove();
  }
}