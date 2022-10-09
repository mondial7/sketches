import { getRandom } from "../canvas/math";
import { Project } from "../canvas/Project";
import { Exhibition } from "../canvas/Exhibition";
import { ArtWork } from "../canvas/ArtWork";

const projectToArtWorks = (project: Project): ArtWork[] => {
  return Object.entries(project).map(([title, projectPlan]) => ({
    title,
    projectPlan,
  }));
};

export default class Director {
  portfolio: Project[];
  exhibitions: Exhibition[];

  constructor(portfolio: Project[]) {
    this.portfolio = portfolio;
    this.exhibitions = [];
  }

  presentsNextProject() {
    this.closeStudio();
    this.prepareStudio();
    this.openStudio();
  }

  openStudio() {
    this.exhibitions.forEach((e) => e.render());
  }

  closeStudio() {
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
