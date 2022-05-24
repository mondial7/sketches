import p5 from "p5";
import { getRandom } from "../canvas/math.mjs"

export default class Director {
  constructor(projects) {
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

  openTheExposition(exposition) {
    Object.entries(exposition).forEach(([title, expo], i) => {
      const node = document.getElementById(`layer-${i + 1}`);
      const instance = new p5(expo, node);
      this.expositions.push(instance)
      document.getElementById("title").innerText = title
    })
  }

  cleanUpTheStudio() {
    this.expositions.forEach(e => e.remove())
  }
}