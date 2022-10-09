import { getRandom } from "../canvas/math";
import { Project } from "../types/Project";
import { Exhibition } from "../canvas/Exhibition";
import { ArtWork } from "../types/ArtWork";

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

    nextProject.getArtWorks().forEach((artWork: ArtWork, i) => {
      const anchor = this.getLayerNode(i);

      const exhibition = new Exhibition(artWork, anchor);
      this.exhibitions.push(exhibition);
    });
  }

  private getLayerNode(i: number): HTMLElement | undefined {
    return document.getElementById(`layer-${i + 1}`) ?? undefined;
  }
}
