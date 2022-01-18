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
    const x1 = start, y1 = start, x2 = end, y2 = end

    fromTheMiddle(() => {
      p5.rotate(0)
      p5.stroke(config.palette.one)
      p5.line(x1, y1, x2, y2) 
    })

    fromTheMiddle(() => {
      p5.rotate(p5.PI/2)
      p5.stroke(config.palette.two)
      p5.line(x1, y1, x2, y2)
    })

    fromTheMiddle(() => {
      p5.rotate(p5.PI)
      p5.stroke(config.palette.three)
      p5.line(x1, y1, x2, y2)
    })

    fromTheMiddle(() => {
      p5.rotate(p5.PI*3/2)
      p5.stroke(config.palette.four)
      p5.line(x1, y1, x2, y2)
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
        one: "#00ffff",
        two: "#ff0000",
        three: "#888888",
        four: "#ffff00"
      },
      items: [],
      count: 69
    }

    p5.createCanvas(config.width, config.height);

    for(let i=0; i < config.count; i++) {
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