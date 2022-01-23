const ControlledExplosion = (p5) => {
  let config = {}

  const rotateFromTheMiddle = (angle) => {
    p5.translate(config.centerX, config.centerY)
    p5.rotate(angle)
    p5.translate(-config.centerX, -config.centerY)
  }

  const fromTheMiddle = (callback) => {
    p5.push()
    p5.translate(config.centerX, config.centerY)
    callback()
    p5.pop()
  }

  const randomAngle = () => {
    return p5.random(0, 360).toFixed()
  }

  const randomSunSize = () => {
    const safeSpan = config.span
    const breakPoint = config.width / 4
    const limitPoint = config.width / 3
    const start = p5.random(safeSpan, breakPoint - safeSpan).toFixed()
    const end = p5.random(breakPoint, limitPoint - safeSpan).toFixed()
    return [start, end]
  }

  const sunlights = (start, end) => {
    const drawShape = (color) => {
      p5.stroke(color)
      p5.line(start, start, end, end) 
    }

    fromTheMiddle(() => {
      p5.rotate(0)
      drawShape(config.palette.one)
    })

    fromTheMiddle(() => {
      p5.rotate(90)
      drawShape(config.palette.two)
    })

    fromTheMiddle(() => {
      p5.rotate(180)
      drawShape(config.palette.three)
    })

    fromTheMiddle(() => {
      p5.rotate(270)
      drawShape(config.palette.four)
    })
  }


  p5.setup = () => {
    config = {
      width: p5.windowWidth,
      height: p5.windowHeight,
      centerX: p5.windowWidth / 2,
      centerY: p5.windowHeight / 2,
      span: 30,
      palette: {
        one: "#1F363D",
        two: "#1F363D",
        three: "#EDAE49",
        four: "#FE4A49"
      },
      items: [],
      count: 256
    }

    p5.createCanvas(config.width, config.height);
    p5.angleMode(p5.DEGREES)
  }

  let angle = 0
  p5.draw = () => {
    p5.clear()

    rotateFromTheMiddle(angle--)

    if (config.items.length < config.count) {
      config.items.push({
        size: randomSunSize(),
        angle: randomAngle()
      })
    }

    config.items.forEach((sun) => {
      rotateFromTheMiddle(sun.angle)
      sunlights(sun.size[0], sun.size[1])
    })
  }
}

new p5(ControlledExplosion, 'controlledExplosion')