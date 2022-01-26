import Painter from "../canvas/painter.mjs"
import Sun from "../canvas/sun.mjs"
import { getRandom } from "../canvas/math.mjs"

export const NaturalStrings = (p5) => {
  let painter
  let phoenix
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
      (start, end) => p5.rect(start, end, start / 5, end / 7),
      (start, end) => p5.ellipse(start, end, end / 5, end / 7),
      (start, end) => p5.line(start, end, end/3, start/3)
    ];

    const shapes = {}

    painter = new Painter(p5, phoenixConfig)
    phoenix = new Sun(painter, phoenixConfig, (color, start, end) => {
      p5.fill(color)
      p5.stroke(color)

      if (!shapes[`${start}_${end}`]) {
        shapes[`${start}_${end}`] = getRandom(1, 3)
      }
      shapesSelector[shapes[`${start}_${end}`]-1](start, end)
    })
  }

  let swap = 1
  p5.draw = () => {
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
