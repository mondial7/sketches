import Painter from "../personnel/Painter"
import Sun, {SunConfig} from "../canvas/Sun"
import {ProjectPlan} from "../canvas/Project";
import {Renderer} from "../canvas/Renderer";

export const WarmHorizon: ProjectPlan = (p5: Renderer) => {
  let painter: Painter
  let sun: Sun
  let config: SunConfig

  p5.setup = () => {
    config = {
      sun: {
        span: p5.windowWidth / 3,
        limit: 1/2
      },
      background: "#0E181B",
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 124
    }

    painter = new Painter(p5, config)
    sun = new Sun(painter, config, (color, start, end) => {
      p5.fill(color)
      p5.stroke(color)
      p5.ellipse(start, end, end / 5, end / 7);
    })
  }

  p5.draw = () => {
    p5.background(config.background)
    
    sun.fillOneMoreItem()
    
    painter.rotateCounterClockwise()
    sun.render()
  }
}
