import Painter from "../../personnel/Painter";
import p5 from "p5";
import Sun, { SunConfig } from "../../canvas/Sun";
import { getRandom } from "../../canvas/math";
import { ProjectPlan } from "../../types/Project";

export const NaturalStrings: ProjectPlan = (p5: p5) => {
  let painter: Painter;
  let sun: Sun;
  let config: SunConfig;

  p5.setup = () => {
    config = {
      sun: {
        span: p5.windowWidth / 3,
        limit: 1 / 6,
      },
      background: "#34252F",
      palette: ["#3B5249", "#519872", "#BEC5AD", "#A4B494"],
      count: 32,
    };

    const shapesSelector = [
      (start: number, end: number) => p5.rect(start, end, start / 5, end / 7),
      (start: number, end: number) => p5.ellipse(start, end, end / 5, end / 7),
      (start: number, end: number) => p5.line(start, end, end / 3, start / 3),
    ];

    const shapes: { [position: string]: number } = {};

    painter = new Painter(p5, config);
    sun = new Sun(painter, config, (color, start, end) => {
      p5.fill(color);
      p5.stroke(color);

      if (!shapes[`${start}_${end}`]) {
        shapes[`${start}_${end}`] = getRandom(1, 3);
      }
      shapesSelector[shapes[`${start}_${end}`] - 1](start, end);
    });
  };

  let swap = 1;
  p5.draw = () => {
    p5.background(config.background);

    sun.fillOneMoreItem();

    if (swap) {
      painter.rotateCounterClockwise();
    } else {
      painter.rotateClockwise();
    }
    if (p5.frameCount % 180 == 0) swap = 1 - swap;

    sun.render();
  };
};
