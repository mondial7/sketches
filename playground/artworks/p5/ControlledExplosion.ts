import Painter from "../../studio/Painter.p5";
import p5 from "p5";
import Sun, { SunConfig } from "../../layouts/p5/Sun";
import { ProjectPlan } from "../../types/Project";

export const ControlledExplosion: ProjectPlan = (p5: p5) => {
  let painter: Painter;
  let sun: Sun;

  p5.setup = () => {
    const config: SunConfig = {
      sun: {
        span: 32,
        limit: 1 / 3,
      },
      background: "none",
      palette: ["#EDAE49", "#FE4A49", "#EDAE49", "#FE4A49"],
      count: 256,
    };

    painter = new Painter(p5, config);
    sun = new Sun(painter, config, (color, start, end) => {
      p5.stroke(color);
      p5.line(start, start, end, end);
    });
  };

  p5.draw = () => {
    p5.clear(0, 0, 0, 0);
    sun.fillOneMoreItem();
    painter.rotateCounterClockwise();
    sun.render();
  };
};
