import Painter from "../personnel/painter"
import Sun from "../canvas/sun"

export const ControlledExplosion = (p5: any) => {
  let config = {}
  let painter: any
  let sun: any

  p5.setup = () => {
    config = {
      sun: {
        span: 32,
        limit: 1/3
      },
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 256
    }

    painter = new Painter(p5, config)
    sun = new Sun(painter, config, (color: any, start: any, end: any) => {
      p5.stroke(color)
      p5.line(start, start, end, end)
    })
  }

  p5.draw = () => {
    p5.clear()
    sun.fillOneMoreItem()
    painter.rotateCounterClockwise()
    sun.render()
  }
}
