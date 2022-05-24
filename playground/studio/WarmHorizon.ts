// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../personnel/painter.mjs' or i... Remove this comment to see the full error message
import Painter from "../personnel/painter.mjs"
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../canvas/sun.mjs' or its corr... Remove this comment to see the full error message
import Sun from "../canvas/sun.mjs"

export const WarmHorizon = (p5: any) => {
  let painter: any
  let phoenix: any
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
    phoenix = new Sun(painter, phoenixConfig, (color: any, start: any, end: any) => {
      p5.fill(color)
      p5.stroke(color)
      p5.ellipse(start, end, end / 5, end / 7);
    })
  }

  p5.draw = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{}'.
    p5.background(phoenixConfig.background)
    
    phoenix.fillOneMoreItem()
    
    painter.rotateCounterClockwise()
    phoenix.render()
  }
}
