const config = {
  width: 400,
  height: 400,
  centerX: 200,
  centerY: 200,
  palette: {
    background: "#123456",
    one: "#00ffff",
    two: "#ff0000",
    three: 100,
    four: "#ffff00"
  }
}

const randomAngle = () => {
  return random(0, 360).toFixed()
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

let suns = []
function setup() {
  createCanvas(config.width, config.height);
  suns = [
    {
      size: [40, 80],
      angle: randomAngle()
    },
    {
      size: [50, 90],
      angle: randomAngle()
    },
    {
      size: [60, 100],
      angle: randomAngle()
    }
  ]
}

function draw() {  
  background(config.palette.background);
  
  suns.forEach((sun) => {
    rotateFromTheMiddle(sun.angle)
    sunlights(sun.size[0], sun.size[1])
  })
}
