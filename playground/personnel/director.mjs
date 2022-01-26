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
      this.expositions.push(new p5(expo, `layer-${i+1}`))
      document.getElementById("title").innerText = title
    })
  }

  cleanUpTheStudio() {
    this.expositions.forEach(e => e.remove())
  }
}