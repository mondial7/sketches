import Painter from "../../studio/Painter.p5";
import p5 from "p5";
import Sun, { SunConfig } from "../../layouts/p5/Sun";
import { ProjectPlan } from "../../types/Project";

export const NoWayOut: ProjectPlan = (p5: p5) => {
  let painter: Painter;
  let frontLayer: Sun;
  let backLayer: Sun;
  let backLayerConfig: SunConfig;

  p5.setup = () => {
    const phoenixConfig: SunConfig = {
      sun: {
        span: p5.windowWidth / 2,
        limit: 1 / 7,
      },
      background: "none",
      palette: ["#EDAE49", "#FE4A49", "#EDAE49", "#FE4A49"],
      count: 256,
    };

    painter = new Painter(p5, phoenixConfig);
    frontLayer = new Sun(painter, phoenixConfig, (color, start, end) => {
      p5.fill(color);
      p5.rect(start, end, start / 3, end / 3);
    });

    backLayerConfig = {
      sun: {
        span: 0,
        limit: 1,
      },
      background: "#0E181B",
      palette: ["#7785AC", "#b1f8f2", "#7785AC", "#b1f8f2"],
      count: 256,
    };

    backLayer = new Sun(painter, backLayerConfig, (color, start, end) => {
      p5.push();
      p5.fill(color);
      p5.scale(0.5);
      p5.triangle(start, end, start / 2, end / 2, start / 3, end);
      p5.pop();
    });
  };

  p5.draw = () => {
    p5.background(backLayerConfig.background);

    frontLayer.fillOneMoreItem();
    backLayer.fillOneMoreItem();

    p5.push();
    frontLayer.render();
    p5.pop();

    painter.rotateClockwise();
    backLayer.render();
  };
};
