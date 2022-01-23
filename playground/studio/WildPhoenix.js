import Painter from "../canvas/painter.mjs"
import Sun from "../canvas/sun.mjs"

export const WildPhoenix = (p5) => {
  let painter
  let phoenix
  let phoenixConfig = {}
  let dust
  let dustConfig = {}

  p5.setup = () => {
    phoenixConfig = {
      sun: {
        span: p5.windowWidth/3,
        limit: 1/5
      },
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 128
    }

    painter = new Painter(p5, phoenixConfig)

    phoenix = new Sun(painter, phoenixConfig, (color, start, end) => {
      p5.stroke(color)
      p5.line(start, start, end, end)
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
      const d = p5.random(0, 1).toFixed()
      p5.fill(color)
      p5.stroke(color)
      p5.circle(start, end, d)
    })

    p5.frameRate(15)
  }

  p5.draw = () => {
    p5.background(dustConfig.background)
    
    phoenix.fillOneMoreItem()
    dust.fillOneMoreItem()

    p5.push()
    phoenix.render()
    p5.pop()
  
    painter.rotateCounterClockwise()
    dust.render()
  }
}
