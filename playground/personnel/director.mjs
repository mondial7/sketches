import { getRandom } from "../canvas/math.mjs"

export default class Director {
  constructor(projects) {
    this.portfolio = projects.map(this.toProjectPieces)
    this.expositions = []

    this.presentsNextExposition()
  }

  presentsNextExposition() {
    this.cleanUpTheStudio()

    const nextExpositionDirection = getRandom(1, this.portfolio.length)-1
    const nextExposition = this.portfolio[nextExpositionDirection]

    this.openTheExpo(nextExposition)
  }

  openTheExpo(exposition) {
    Object.entries(exposition).forEach(([layer, expo]) => {
      this.expositions.push(new p5(expo, layer))
    })
  }

  cleanUpTheStudio() {
    this.expositions.forEach(e => e.remove())
  }

  toProjectPieces (project) {
    const compositeProject = {}
    
    if (project instanceof Array) {
      project.forEach((piece, i) => {
        compositeProject[`layer-${i+1}`] = piece
      })
    } else {
      compositeProject['layer-1'] = project
    }
    
    return compositeProject
  }
}