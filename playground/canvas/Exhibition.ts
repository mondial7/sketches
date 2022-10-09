import { ArtWork } from "../types/ArtWork";
import { ProjectPlan } from "../types/Project";
import { Renderer } from "../types/Renderer";

export class Exhibition {
  title: string;
  projectPlan: ProjectPlan;
  anchor: HTMLElement | undefined;

  private renderer: Renderer;

  constructor(artWork: ArtWork, anchor?: HTMLElement) {
    this.title = artWork.title;
    this.projectPlan = artWork.projectPlan;
    this.anchor = anchor;
    this.renderer = new Renderer(this.projectPlan, this.anchor);
  }

  render() {
    this.updateTitleDOM(this.title);
    this.renderer.render();
  }

  cleanUp() {
    this.renderer.remove();
  }

  private updateTitleDOM(title: string) {
    const titleElement = document.getElementById("title");
    if (titleElement) {
      titleElement.innerHTML = title;
    }
  }
}
