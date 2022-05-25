import p5 from "p5";
import { getRandom } from "../canvas/math"
import {Renderer} from "../canvas/Renderer";
import {Project, ProjectPlan} from "../canvas/Project";

export default class Director {
  portfolio: Project[]
  expositions: Renderer[]

  constructor(projects: Project[]) {
    this.portfolio = Array.from(projects)
    this.expositions = []

    this.presentsNextExposition()
  }

  presentsNextExposition() {
    this.cleanUpTheStudio()

    const nextExpositionIndex = getRandom(1, this.portfolio.length)-1
    const nextExposition = this.portfolio[nextExpositionIndex]

    this.openTheExposition(nextExposition)
  }

  openTheExposition(exposition: Project) {
    Object.entries(exposition).forEach(([title, projectPlan]: [string, ProjectPlan], i) => {
      const node = document.getElementById(`layer-${i + 1}`);
      const exposition: Renderer = new p5(projectPlan, node ?? undefined);
      this.expositions.push(exposition)
      const titleElement = document.getElementById("title");
      if (titleElement) {
        titleElement.innerHTML = title
      }
    })
  }

  cleanUpTheStudio() {
    this.expositions.forEach(e => e.remove())
  }
}