let config = {}

const rotateFromTheMiddle = (angle) => {
  translate(config.centerX, config.centerY)
  rotate(angle)
  translate(-config.centerX, -config.centerY)
}

const fromTheMiddle = (callback) => {
  push()
  translate(config.centerX, config.centerY)
  callback()
  pop()
}

const randomAngle = () => {
  return random(0, 360).toFixed()
}

const randomSunSize = () => {
  const safeSpan = config.span
  const breakPoint = config.width / 4
  const limitPoint = config.width / 2
  const start = random(safeSpan, breakPoint - safeSpan).toFixed()
  const end = random(breakPoint, limitPoint - safeSpan).toFixed()
  return [start, end]
}

const sunlights = (start, end) => {
  const drawShape = () => {
    const d = random(0, 1).toFixed()
    circle(start, end, d)
  }

  fromTheMiddle(() => {
    rotate(0)
    fill(config.palette.one)
    stroke(config.palette.one)
    drawShape()
  })

  fromTheMiddle(() => {
    rotate(PI/2)
    fill(config.palette.two)
    stroke(config.palette.two)
    drawShape()
  })

  fromTheMiddle(() => {
    rotate(PI)
    fill(config.palette.three)
    stroke(config.palette.three)
    drawShape()
  })

  fromTheMiddle(() => {
    rotate(PI*3/2)
    fill(config.palette.four)
    stroke(config.palette.four)
    drawShape()
  })
}


function setup() {
  config = {
    width: windowWidth,
    height: windowHeight,
    centerX: windowWidth / 2,
    centerY: windowHeight / 2,
    span: 0,
    palette: {
      background: "#123456",
      one: "#00ffff",
      two: "#ff0000",
      three: "#888888",
      four: "#ffff00"
    },
    items: [],
    count: 100
  }

  createCanvas(config.width, config.height);

  for(let i=0; i < config.count; i++) {
    config.items.push({
      size: randomSunSize(),
      angle: randomAngle()
    })
  }

  background(config.palette.background);
  
  config.items.forEach((sun) => {
    rotateFromTheMiddle(sun.angle)
    sunlights(sun.size[0], sun.size[1])
  })
}
