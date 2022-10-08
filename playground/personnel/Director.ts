import p5 from "p5";
import { getRandom } from "../canvas/math";
import { Renderer } from "../canvas/Renderer";
import { Project, ProjectPlan } from "../canvas/Project";

type ArtWork = {
  title: string;
  projectPlan: ProjectPlan;
};

const projectToArtWorks = (project: Project): ArtWork[] => {
  return Object.entries(project).map(([title, projectPlan]) => ({
    title,
    projectPlan,
  }));
};

class Exhibition {
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

export default class Director {
  portfolio: Project[];
  exhibitions: Exhibition[];

  constructor(portfolio: Project[]) {
    this.portfolio = portfolio;
    this.exhibitions = [];
    this.presentsNextProject();
  }

  presentsNextProject() {
    this.closeStudio();
    this.prepareStudio();
    this.openStudio();
  }

  private openStudio() {
    this.exhibitions.forEach((e) => e.render());
  }

  private closeStudio() {
    this.exhibitions.forEach((e) => e.cleanUp());
    this.exhibitions = [];
  }

  private prepareStudio() {
    const nextProjectIndex = getRandom(1, this.portfolio.length) - 1;
    const nextProject = this.portfolio[nextProjectIndex];

    const artWorks: ArtWork[] = projectToArtWorks(nextProject);
    artWorks.forEach((artWork: ArtWork, i) => {
      this.appendTitle(artWork.title);
      const anchor = this.getLayerNode(i);

      const exhibition = new Exhibition(artWork, anchor);
      this.exhibitions.push(exhibition);
    });
  }

  private appendTitle(title: string) {
    const titleElement = document.getElementById("title");
    if (titleElement) {
      titleElement.innerHTML = title;
    }
  }

  private getLayerNode(i: number): HTMLElement | undefined {
    return document.getElementById(`layer-${i + 1}`) ?? undefined;
  }
}
