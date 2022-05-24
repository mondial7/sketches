import Painter from "../personnel/painter"
import Sun from "../canvas/sun"

export const ColdSnowballs = (p5: any) => {
  let painter
  let phoenix: any
  let phoenixConfig = {}
  let dust: any
  let dustConfig: any = {}

  const drawLettersOf = () => (color: any, start: any, end: any) => {
    p5.fill(color)
    p5.stroke(color)
    p5.rect(start, end, start, end);
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
    phoenix = new Sun(painter, phoenixConfig, drawLettersOf())

    dustConfig = {
      sun: {
        span: 0,
        limit: 1
      },
      background: "#0E181B",
      palette: ["#7785AC","#b1f8f2","#7785AC","#b1f8f2"],
      count: 512
    }

    dust = new Sun(painter, dustConfig, drawLettersOf())
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
