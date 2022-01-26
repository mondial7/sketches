import { getRandom } from "../canvas/math.mjs"

export default class Painter {
  constructor(engine, config) {
    this.engine = engine
    this.config = config
    
    this.angle = 0
    this.width = this.engine.windowWidth
    this.height = this.engine.windowHeight
    this.centerX = this.width / 2
    this.centerY = this.height / 2
 
    this.initCanvas()
  }

  initCanvas() {
    this.engine.createCanvas(this.width, this.height)
    this.engine.angleMode(this.engine.DEGREES)
  
    if (this.config.background) {
      this.engine.background(this.config.background);
    }
  }

  getRandomAngle() {
    return getRandom(0, 360)
  }

  rotate(angle) {
    this.engine.rotate(angle)
  }

  fromTheMiddle(callback) {
    this.engine.translate(this.centerX, this.centerY)
    callback()
    this.engine.translate(-this.centerX, -this.centerY)
  }

  rotateFromTheMiddle(angle) {
    this.fromTheMiddle(() => {
      this.rotate(angle)
    })
  }

  rotateCounterClockwise() {
    this.rotateFromTheMiddle(this.angle--)
  }

  rotateClockwise() {
    this.rotateFromTheMiddle(this.angle++)
  }
}