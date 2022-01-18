const config = {
  width: 400,
  height: 400,
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
  translate(config.width / 2, config.height / 2)
  rotate(angle)
  translate(-config.width / 2, -config.height / 2)
}

const fromTheMiddle = (callback) => {
  push()
  translate(config.width / 2, config.height / 2)
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

function setup() {
  createCanvas(config.width, config.height);
}

function draw() {  
  background(config.palette.background);

  
  for(let i=0; i<3; i++) {
    rotateFromTheMiddle(randomAngle())
    sunlights(50, 100)
  }
}
