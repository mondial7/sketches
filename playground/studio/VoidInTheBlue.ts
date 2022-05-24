import Painter from "../personnel/painter"
import Sun from "../canvas/sun"

export const VoidInTheBlue = (p5: any) => {
  let config = {}
  let painter: any
  let sun: any

  p5.setup = () => {
    config = {
      sun: {
        span: 0,
        limit: 1/2
      },
      background: "#0E181B",
      palette: ["#7785AC","#b1f8f2","#7785AC","#b1f8f2"],
      count: 256
    }

    painter = new Painter(p5, config)
    sun = new Sun(painter, config, (color: any, start: any, end: any) => {
      const d = p5.random(0, 1).toFixed()
      p5.fill(color)
      p5.stroke(color)
      p5.circle(start, end, d)
    })
  }

  p5.draw = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{}'.
    p5.background(config.background)
    sun.fillOneMoreItem()
    painter.rotateClockwise()
    sun.render()
  }
}
