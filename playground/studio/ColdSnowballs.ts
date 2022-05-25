import Painter from "../personnel/Painter"
import Sun, {SunConfig, SunLightShape} from "../canvas/Sun"
import {ProjectPlan} from "../canvas/Project";
import {Renderer} from "../canvas/Renderer";

export const ColdSnowballs: ProjectPlan = (p5: Renderer) => {
  let frontLayer: Sun
  let backLayer: Sun
  let backLayerConfig: SunConfig

  p5.setup = () => {
    const frontLayerConfig: SunConfig = {
      sun: {
        span: p5.windowWidth/3,
        limit: 1/5
      },
      background: "none",
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 256
    }

    const painter = new Painter(p5, frontLayerConfig)
    const sunLightShape: SunLightShape = (color, start, end) => {
      p5.fill(color)
      p5.stroke(color)
      p5.rect(start, end, start, end);
    };

    frontLayer = new Sun(painter, frontLayerConfig, sunLightShape)

    backLayerConfig = {
      sun: {
        span: 0,
        limit: 1
      },
      background: "#0E181B",
      palette: ["#7785AC","#b1f8f2","#7785AC","#b1f8f2"],
      count: 512
    }
    backLayer = new Sun(painter, backLayerConfig, sunLightShape)
  }

  p5.draw = () => {
    p5.background(backLayerConfig.background)
    
    frontLayer.fillOneMoreItem()
    backLayer.fillOneMoreItem()

    p5.push()
    frontLayer.render()
    p5.pop()
  
    backLayer.render()
  }
}
