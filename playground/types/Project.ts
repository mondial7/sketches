import { RenderingEngine } from "./Renderer";
import { ArtWork } from "./ArtWork";

export type ProjectPlan = (renderer: RenderingEngine) => void;
export type ProjectDraft = { [title: string]: ProjectPlan };

export class Project {
  private artWorks: ArtWork[] = [];

  constructor(projectDraft: ProjectDraft) {
    this.artWorks = Object.entries(projectDraft).map(
      ([title, projectPlan]) => new ArtWork(title, projectPlan)
    );
  }

  getArtWorks(): ArtWork[] {
    return this.artWorks;
  }
}
