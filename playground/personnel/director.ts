import p5 from "p5";
import { getRandom } from "../canvas/math"

export default class Director {
  portfolio: any[]
  expositions: any[]

  constructor(projects: any) {
    this.portfolio = Array.from(projects)
    this.expositions = []

    this.presentsNextExposition()
  }

  presentsNextExposition() {
    this.cleanUpTheStudio()

    const nextExpositionDirection = getRandom(1, this.portfolio.length)-1
    const nextExposition = this.portfolio[nextExpositionDirection]

    this.openTheExposition(nextExposition)
  }

  openTheExposition(exposition: any) {
    Object.entries(exposition).forEach(([title, expo]: [string, any], i) => {
      const node = document.getElementById(`layer-${i + 1}`);
      const instance = new p5(expo, node ?? undefined);
      this.expositions.push(instance)
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