import Painter from "../../studio/Painter.p5";
import p5 from "p5";
import Sun, { SunConfig } from "../../layouts/p5/Sun";
import { ProjectPlan } from "../../types/Project";

export const VoidInTheBlue: ProjectPlan = (p5: p5) => {
  let painter: Painter;
  let sun: Sun;
  let config: SunConfig;

  p5.setup = () => {
    config = {
      sun: {
        span: 0,
        limit: 1 / 2,
      },
      background: "#0E181B",
      palette: ["#7785AC", "#b1f8f2", "#7785AC", "#b1f8f2"],
      count: 256,
    };

    painter = new Painter(p5, config);
    sun = new Sun(painter, config, (color, start, end) => {
      const d = p5.random(0, 1).toFixed();
      p5.fill(color);
      p5.stroke(color);
      p5.circle(start, end, +d);
    });
  };

  p5.draw = () => {
    p5.background(config.background);
    sun.fillOneMoreItem();
    painter.rotateClockwise();
    sun.render();
  };
};
