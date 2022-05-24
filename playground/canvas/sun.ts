import { getRandom } from "./math"
import Painter from "../personnel/painter";

export default class Sun {
  items: any[]

  constructor(private painter: Painter, private config: any, private sunLightShape: any) {
    this.items = []
  }

  fillOneMoreItem() {
    if (this.items.length >= this.config.count) {
      return
    }

    this.items.push({
      size: this._randomSize(),
      angle: this.painter.getRandomAngle()
    })
  }

  _randomSize() {
    const safeSpan = this.config.sun.span
    const limitPoint = this.painter.width * this.config.sun.limit
    const breakPoint = this.painter.width * (this.config.sun.breakPoint || 1/4)
    const start = getRandom(safeSpan, breakPoint - safeSpan)
    const end = getRandom(breakPoint, limitPoint - safeSpan)
    return [start, end]
  }

  render() {
    this.items.forEach((setup) => {
      this.painter.rotateFromTheMiddle(setup.angle)
      this._renderSunlightSet(setup.size[0], setup.size[1])
    })
  }

  _renderSunlightSet(start: number, end: number) {
    [0, 90, 180, 270].forEach((cardinalAngle, i) => {
      this.painter.rotateFromTheMiddle(cardinalAngle)
      this.painter.fromTheMiddle(() => {
        this.sunLightShape(this.config.palette[i], start, end)
      })
    })
  }
}