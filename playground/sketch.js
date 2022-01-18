const config = {
  width: 400,
  height: 400,
  palette: {
    background: "#123456",
    primary: "#00ffff",
    secondary: "#ff0000"
  }
}

const fromTheMiddle = (callback) => {
  push()
  translate(config.width / 2, config.height / 2)
  callback()
  pop()
}

function setup() {
  createCanvas(config.width, config.height);
}

let count = 0

function draw() {  
  background(config.palette.background);
  count++

  fromTheMiddle(() => {
    rotate(0 + count)
    stroke(config.palette.primary)
    line(50, 50, 100, 100)  
  })

  fromTheMiddle(() => {
    rotate(PI/2  + count)
    stroke(config.palette.secondary)
    line(50, 50, 100, 100)
  })

  fromTheMiddle(() => {
    rotate(PI  + count)
    stroke(100)
    line(50, 50, 100, 100)  
  })

  fromTheMiddle(() => {
    rotate(PI*1.5  + count)
    stroke("#ffff00")
    line(50, 50, 100, 100)
  })
}
