import Painter from "../canvas/painter.mjs"
import Sun from "../canvas/sun.mjs"

export const NakedContent = (p5) => {
  let painter
  let phoenix
  let phoenixConfig = {}
  let dust
  let dustConfig = {}

  const drawPicker = (words) => (color, start, end) => {
    const letter = words[start % words.length]
    p5.fill(color)
    p5.text(letter, start, end);
  }

  p5.setup = () => {
    phoenixConfig = {
      sun: {
        span: p5.windowWidth/3,
        limit: 1/5
      },
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 256
    }

    painter = new Painter(p5, phoenixConfig)
    phoenix = new Sun(painter, phoenixConfig, drawPicker('phoenix'.split('')))

    dustConfig = {
      sun: {
        span: 0,
        limit: 1
      },
      background: "#0E181B",
      palette: ["#7785AC","#b1f8f2","#7785AC","#b1f8f2"],
      count: 512
    }

    dust = new Sun(painter, dustConfig, drawPicker('void'.split('')))
  }

  p5.draw = () => {
    p5.background(dustConfig.background)
    
    phoenix.fillOneMoreItem()
    dust.fillOneMoreItem()

    p5.push()
    phoenix.render()
    p5.pop()
  
    dust.render()
  }
}
