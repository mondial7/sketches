function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Sun {
  constructor(painter, config, sunLightShape) {
    this.painter = painter
    this.sunLightShape = sunLightShape
    this.config = config
    this.items = []
  }

  fillOneMoreItem() {
    if (this.items.length >= this.config.count) {
      return
    }

    this.items.push({
      size: this._randomSize(),
      angle: this.painter.getRandomAngle()
    })
  }

  _randomSize() {
    const safeSpan = this.config.span
    const breakPoint = this.painter.width / 4
    const limitPoint = this.painter.width / 3
    const start = getRandom(safeSpan, breakPoint - safeSpan)
    const end = getRandom(breakPoint, limitPoint - safeSpan)
    return [start, end]
  }

  render() {
    this.items.forEach((setup) => {
      this.painter.rotateFromTheMiddle(setup.angle)
      this._renderSunlightSet(setup.size[0], setup.size[1])
    })
  }

  _renderSunlightSet(start, end) {
    [0, 90, 180, 270].forEach((cardinalAngle, i) => {
      this.painter.rotateFromTheMiddle(cardinalAngle)
      this.painter.fromTheMiddle(() => {
        this.sunLightShape(this.config.palette[i], start, end)
      })
    })
  }
}

class Painter {
  constructor(engine, config) {
    this.engine = engine
    this.config = config
    
    this.angle = 0
    this.width = this.engine.windowWidth
    this.height = this.engine.windowHeight
    this.centerX = this.width / 2
    this.centerY = this.height / 2
 
    this.initCanvas()
  }

  initCanvas() {
    this.engine.createCanvas(this.width, this.height)
    this.engine.angleMode(this.engine.DEGREES)
  }

  fromTheMiddle(callback) {
    this.engine.translate(this.centerX, this.centerY)
    callback()
    this.engine.translate(-this.centerX, -this.centerY)
  }

  rotateFromTheMiddle(angle) {
    this.fromTheMiddle(() => {
      this.engine.rotate(angle)
    })
  }

  getRandomAngle() {
    return getRandom(0, 360)
  }

  rotateClockwise() {
    this.rotateFromTheMiddle(this.angle--)
  }

  rotate(angle) {
    this.engine.rotate(angle)
  }
}

const ControlledExplosion = (p5) => {
  let config = {}
  let painter
  let sun

  p5.setup = () => {
    config = {
      span: 32,
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 256
    }

    painter = new Painter(p5, config)
    sun = new Sun(painter, config, (color, start, end) => {
      p5.stroke(color)
      p5.line(start, start, end, end)
    })
  }

  p5.draw = () => {
    p5.clear()
    sun.fillOneMoreItem()
    painter.rotateClockwise()
    sun.render()
  }
}

new p5(ControlledExplosion, 'controlledExplosion')