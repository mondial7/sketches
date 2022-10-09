import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import Sun, { SunConfig, SunLightShape } from "./Sun";
import Painter from "../../studio/Painter.p5";
import { RenderingEngine } from "../../types/RenderingEngine";

class p5Mock {
  createCanvas = jest.fn();
  angleMode = jest.fn();
  background = jest.fn();
  translate = jest.fn();
  rotate = jest.fn();
}

jest.mock("./math", () => ({
  getRandom: () => 32,
}));

describe("Sun", () => {
  let sun: Sun;
  let sunLightShape: SunLightShape; // jest.Mock<SunLightShape>
  let painter: Painter;

  beforeEach(() => {
    const config: SunConfig = {
      background: "none",
      sun: {
        limit: 1,
        span: 0,
      },
      count: 2,
      palette: [],
    };
    const rendererMock = new p5Mock() as unknown as RenderingEngine;
    painter = new Painter(rendererMock, config);
    sunLightShape = jest.fn();
    sun = new Sun(painter, config, sunLightShape);
  });

  it("should not render any ray of sunlight", () => {
    sun.render();

    expect(sunLightShape).toHaveBeenCalledTimes(0);
  });

  it("should render 1 set of sunlight rays", () => {
    sun.fillOneMoreItem();
    sun.render();

    expect(sunLightShape).toHaveBeenCalledTimes(4);
  });

  it("should render 2 sets of sunlight rays", () => {
    sun.fillOneMoreItem();
    sun.fillOneMoreItem();
    sun.render();

    expect(sunLightShape).toHaveBeenCalledTimes(8);
  });

  it("should not render any sunlight rays when the count is passed", () => {
    sun.fillOneMoreItem();
    sun.fillOneMoreItem();
    sun.fillOneMoreItem();
    sun.render();

    expect(sunLightShape).toHaveBeenCalledTimes(8);
  });

  describe("when we render one set of rays", () => {
    beforeEach(() => {
      jest.spyOn(painter, "rotateFromTheMiddle");

      sun.fillOneMoreItem();
      sun.render();
    });

    it("should place them in cardinal directions", () => {
      expect(painter.rotateFromTheMiddle).toHaveBeenCalledWith(0);
      expect(painter.rotateFromTheMiddle).toHaveBeenCalledWith(90);
      expect(painter.rotateFromTheMiddle).toHaveBeenCalledWith(180);
      expect(painter.rotateFromTheMiddle).toHaveBeenCalledWith(270);
    });

    it("should first set an initial rotation angle", () => {
      expect(painter.rotateFromTheMiddle).toHaveBeenCalledTimes(5);
      expect(painter.rotateFromTheMiddle).toHaveBeenNthCalledWith(1, 32);
    });
  });
});
