import Painter from "../canvas/painter.mjs"
import Sun from "../canvas/sun.mjs"

export const ControlledExplosion = (p5) => {
  let config = {}
  let painter
  let sun

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
    sun = new Sun(painter, config, (color, start, end) => {
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
