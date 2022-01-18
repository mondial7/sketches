const config = {
  width: 400,
  height: 400,
  centerX: 200,
  centerY: 200,
  span: 10,
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
  const limitPoint = config.width / 3
  const start = random(safeSpan, breakPoint - safeSpan).toFixed()
  const end = random(breakPoint, limitPoint - safeSpan).toFixed()
  return [start, end]
}

const sunlights = (start, end) => {
  const x1 = start, y1 = start, x2 = end, y2 = end

  fromTheMiddle(() => {
    rotate(0)
    stroke(config.palette.one)
    line(x1, y1, x2, y2) 
  })

  fromTheMiddle(() => {
    rotate(PI/2)
    stroke(config.palette.two)
    line(x1, y1, x2, y2)
  })

  fromTheMiddle(() => {
    rotate(PI)
    stroke(config.palette.three)
    line(x1, y1, x2, y2)
  })

  fromTheMiddle(() => {
    rotate(PI*3/2)
    stroke(config.palette.four)
    line(x1, y1, x2, y2)
  })
}


function setup() {
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
