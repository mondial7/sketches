import Painter from "../personnel/Painter"
import Sun, {SunConfig, SunLightShape} from "../canvas/Sun"
import {ProjectPlan} from "../types/Project";
import {Renderer} from "../types/Renderer";

export const NakedContent: ProjectPlan = (p5: Renderer) => {
  let phoenix: Sun
  let backLayer: Sun
  let backLayerConfig: SunConfig

  const drawPicker: (words: string[]) => SunLightShape = (words) => (color, start, end) => {
    const letter = words[start % words.length]
    p5.fill(color)
    p5.text(letter, start, end);
  }

  p5.setup = () => {
    const phoenixConfig: SunConfig = {
      sun: {
        span: p5.windowWidth / 3,
        limit: 1 / 5
      },
      background: "none",
      palette: ["#EDAE49", "#FE4A49", "#EDAE49", "#FE4A49"],
      count: 256
    };
    const painter: Painter = new Painter(p5, phoenixConfig);
    phoenix = new Sun(painter, phoenixConfig, drawPicker('phoenix'.split('')))

    backLayerConfig = {
      sun: {
        span: 0,
        limit: 1
      },
      background: "#0E181B",
      palette: ["#7785AC","#b1f8f2","#7785AC","#b1f8f2"],
      count: 512
    }

    backLayer = new Sun(painter, backLayerConfig, drawPicker('void'.split('')))
  }

  p5.draw = () => {
    p5.background(backLayerConfig.background)
    
    phoenix.fillOneMoreItem()
    backLayer.fillOneMoreItem()

    p5.push()
    phoenix.render()
    p5.pop()
  
    backLayer.render()
  }
}
