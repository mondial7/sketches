import {getRandom} from "./math"
import Painter from "../personnel/Painter";
import {RendererConfig} from "../types/Renderer";

export interface SunConfig extends RendererConfig {
  palette: string[];
  count: number;
  sun: {
    limit: number;
    span: number;
    breakPoint?: number;
  }
}

export type SunLightShape = (color: string, start: number, end: number) => void;

interface LayoutHandler {
  fillOneMoreItem: () => void;
  render: () => void;
}

export default class Sun implements LayoutHandler {
  items: {
    size: [number, number];
    angle: number;
  }[]

  constructor(private painter: Painter, private config: SunConfig, private sunLightShape: SunLightShape) {
    this.items = []
  }

  fillOneMoreItem() {
    if (this.items.length >= this.config.count) {
      return
    }

    this.items.push({
      size: this._randomSize(),
      angle: this._randomAngle()
    })
  }

  _randomAngle() {
    return getRandom(0, 360)
  }

  _randomSize(): [number, number] {
    const safeSpan = this.config.sun.span
    const limitPoint = this.painter.width * this.config.sun.limit
    const breakPoint = this.painter.width * (this.config.sun.breakPoint || 1 / 4)
    const start = getRandom(safeSpan, breakPoint - safeSpan)
    const end = getRandom(breakPoint, limitPoint - safeSpan)
    return [start, end]
  }

  render() {
    this.items.forEach((setup) => {
      this.painter.rotateFromTheMiddle(setup.angle);

      [0, 90, 180, 270].forEach((cardinalAngle, i) => {
        this.painter.rotateFromTheMiddle(cardinalAngle)
        this.painter.fromTheMiddle(() => {
          this.sunLightShape(this.config.palette[i], setup.size[0], setup.size[1])
        })
      })
    })
  }
}