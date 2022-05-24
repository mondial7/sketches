import Painter from "../personnel/painter.mjs"
import Sun from "../canvas/sun.mjs"

export const WarmHorizon = (p5) => {
  let painter
  let phoenix
  let phoenixConfig = {}

  p5.setup = () => {
    phoenixConfig = {
      sun: {
        span: p5.windowWidth / 3,
        limit: 1/2
      },
      background: "#0E181B",
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 124
    }

    painter = new Painter(p5, phoenixConfig)
    phoenix = new Sun(painter, phoenixConfig, (color, start, end) => {
      p5.fill(color)
      p5.stroke(color)
      p5.ellipse(start, end, end / 5, end / 7);
    })
  }

  p5.draw = () => {
    p5.background(phoenixConfig.background)
    
    phoenix.fillOneMoreItem()
    
    painter.rotateCounterClockwise()
    phoenix.render()
  }
}
