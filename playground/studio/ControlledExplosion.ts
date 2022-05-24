// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../personnel/painter.mjs' or i... Remove this comment to see the full error message
import Painter from "../personnel/painter.mjs"
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../canvas/sun.mjs' or its corr... Remove this comment to see the full error message
import Sun from "../canvas/sun.mjs"

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
