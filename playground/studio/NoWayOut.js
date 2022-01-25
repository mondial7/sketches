import Painter from "../canvas/painter.mjs"
import Sun from "../canvas/sun.mjs"

export const NoWayOut = (p5) => {
  let painter
  let phoenix
  let phoenixConfig = {}
  let dust
  let dustConfig = {}

  p5.setup = () => {
    phoenixConfig = {
      sun: {
        span: p5.windowWidth/2,
        limit: 1/7
      },
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 256
    }

    painter = new Painter(p5, phoenixConfig)
    phoenix = new Sun(painter, phoenixConfig, (color, start, end) => {
      p5.fill(color)
      p5.rect(start, end, start/3, end/3);
    })

    dustConfig = {
      sun: {
        span: 0,
        limit: 1
      },
      background: "#0E181B",
      palette: ["#7785AC","#b1f8f2","#7785AC","#b1f8f2"],
      count: 256
    }

    dust = new Sun(painter, dustConfig, (color, start, end) => {
      p5.push()
      p5.fill(color)
      p5.scale(0.5)
      p5.triangle(start, end, start/2, end/2, start/3, end);
      p5.pop()
    })
  }

  p5.draw = () => {
    p5.background(dustConfig.background)
    
    phoenix.fillOneMoreItem()
    dust.fillOneMoreItem()

    p5.push()
    phoenix.render()
    p5.pop()
    
    painter.rotateClockwise()
    dust.render()
  }
}
