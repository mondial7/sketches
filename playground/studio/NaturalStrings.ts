import Painter from "../personnel/painter"
import Sun from "../canvas/sun"
import { getRandom } from "../canvas/math"

export const NaturalStrings = (p5: any) => {
  let painter: any
  let phoenix: any
  let phoenixConfig = {}

  p5.setup = () => {
    phoenixConfig = {
      sun: {
        span: p5.windowWidth / 3,
        limit: 1/6
      },
      background: "#34252F",
      palette: ["#3B5249","#519872","#BEC5AD","#A4B494"],
      count: 32
    }

    const shapesSelector = [
      (start: any, end: any) => p5.rect(start, end, start / 5, end / 7),
      (start: any, end: any) => p5.ellipse(start, end, end / 5, end / 7),
      (start: any, end: any) => p5.line(start, end, end/3, start/3)
    ];

    const shapes = {}

    painter = new Painter(p5, phoenixConfig)
    phoenix = new Sun(painter, phoenixConfig, (color: any, start: any, end: any) => {
      p5.fill(color)
      p5.stroke(color)

      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      if (!shapes[`${start}_${end}`]) {
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        shapes[`${start}_${end}`] = getRandom(1, 3)
      }
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      shapesSelector[shapes[`${start}_${end}`]-1](start, end)
    })
  }

  let swap = 1
  p5.draw = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{}'.
    p5.background(phoenixConfig.background)
    
    phoenix.fillOneMoreItem()

    if (swap) {
      painter.rotateCounterClockwise()
    } else {
      painter.rotateClockwise()
    }
    if (p5.frameCount % 180 == 0) swap = 1-swap

    phoenix.render()
  }
}
