// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../personnel/painter.mjs' or i... Remove this comment to see the full error message
import Painter from "../personnel/painter.mjs"
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../canvas/sun.mjs' or its corr... Remove this comment to see the full error message
import Sun from "../canvas/sun.mjs"

export const WildPhoenix = (p5: any) => {
  let painter: any
  let phoenix: any
  let phoenixConfig = {}
  let dust: any
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

    phoenix = new Sun(painter, phoenixConfig, (color: any, start: any, end: any) => {
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

    dust = new Sun(painter, dustConfig, (color: any, start: any, end: any) => {
      const d = p5.random(0, 1).toFixed()
      p5.fill(color)
      p5.stroke(color)
      p5.circle(start, end, d)
    })

    p5.frameRate(15)
  }

  p5.draw = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{}'.
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
