function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Sun {
  constructor(painter, drawShape, config) {
    this.painter = painter
    this.drawShape = drawShape
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
    const breakPoint = this.config.width / 4
    const limitPoint = this.config.width / 3
    const start = getRandom(safeSpan, breakPoint - safeSpan)
    const end = getRandom(breakPoint, limitPoint - safeSpan)
    return [start, end]
  }

  _renderSunlightSet(start, end) {
    [0, 90, 180, 270].forEach((angle, i) => {
      this.painter.fromTheMiddle(() => {
        this.painter.rotate(angle)
        this.drawShape(this.config.palette[i], start, end)
      })
    })
  }

  render() {
    this.items.forEach((setup) => {
      this.painter.rotateFromTheMiddle(setup.angle)
      this._renderSunlightSet(setup.size[0], setup.size[1])
    })
  }
}

class Painter {
  constructor(engine, config) {
    this.engine = engine
    this.config = config
    
    this.angle = 0
    this.centerX = this.config.width / 2
    this.centerY = this.config.height / 2
  }

  fromTheMiddle(callback) {
    this.engine.push()
    this.engine.translate(this.centerX, this.centerY)
    callback()
    this.engine.pop()
  }

  rotateFromTheMiddle(angle) {
    this.engine.translate(this.centerX, this.centerY)
    this.engine.rotate(angle)
    this.engine.translate(-this.centerX, -this.centerY)
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

  this.drawShape = (color, start, end) => {
    p5.stroke(color)
    p5.line(start, start, end, end)
  }

  p5.setup = () => {
    config = {
      width: p5.windowWidth,
      height: p5.windowHeight,
      span: 250,
      palette: ["#EDAE49","#FE4A49","#EDAE49","#FE4A49"],
      count: 256
    }

    p5.createCanvas(config.width, config.height);
    p5.angleMode(p5.DEGREES)

    painter = new Painter(p5, config)
    sun = new Sun(painter, drawShape, config)
  }

  p5.draw = () => {
    p5.clear()
    sun.fillOneMoreItem()
    painter.rotateClockwise()
    sun.render()
  }
}

new p5(ControlledExplosion, 'controlledExplosion')