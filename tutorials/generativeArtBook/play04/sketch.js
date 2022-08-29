function setup() {
  var canvas = createCanvas(800, 800)
  colorMode(HSB)
  noLoop()
  noStroke()
}

function draw() {
  background(197, 31, 65)

  // Setup a grid so i can figure out the uppper and lower bounds
  // of where the points should go
  var columns = 20
  var rows = 20

  var columnWidth = 800 / columns
  var columnHeight = 800 / rows

  // Show the grid
  fill(18, 11, 18)
  //stroke( 90, 90, 90 )
  //rect( 0, 0, columnWidth, columnHeight )

  var allCoordinates = [];
  // Create a row
  for (i = 0; i < rows; i++) {
    // Create a column
    for (j = 0; j < columns; j++) {
      rect(j * columnWidth, i * columnHeight, columnWidth, columnHeight)
      //create my point
      var pointPositionX = random(j * columnWidth + columnWidth, j * columnWidth)
      var pointPositionY = random(i * columnHeight + columnHeight, i * columnHeight)

      allCoordinates.push([pointPositionX, pointPositionY])
      circle(pointPositionX, pointPositionY, 10)
    }
  }
  var whichRow = 1
  var l = 1
  while (l < allCoordinates.length) {

    //firstTriangle
    if (whichRow == 1 || whichRow == rows) {
      //don't do anything on the first and last row (thse need just one triangle)
    }
    else {
      if ((l + 1) % rows == 0 || l == 0) {
        console.log("it's the last item, do nothing")
      }
      else {
        //Triangle 1
        var colorChoices = [
          [45, 15, 75],
          [22, 42, 95],
          [5, 55, 75],
          [0, 61, 95]
        ]

        var randomColorChoice = Math.floor(random(0, 4))
        fill(colorChoices[randomColorChoice][0], colorChoices[randomColorChoice][1], Math.floor(random(50, 100)))
        //stroke( 200, 90, 90 )

        var currentPoint = l
        var nextPoint = l + 1
        var bottomPoint = l + rows
        var firstPointX = allCoordinates[currentPoint][0]
        var firstPointY = allCoordinates[currentPoint][1]
        var secondPointX = allCoordinates[nextPoint][0]
        var secondPointY = allCoordinates[nextPoint][1]
        var thirdPointX = allCoordinates[bottomPoint][0]
        var thirdPointY = allCoordinates[bottomPoint][1]
        triangle(firstPointX, firstPointY, secondPointX, secondPointY, thirdPointX, thirdPointY)

        //Triangle 2
        randomColorChoice = Math.floor(random(0, 4))
        fill(colorChoices[randomColorChoice][0], colorChoices[randomColorChoice][1], Math.floor(random(50, 100)))
        //stroke( 200, 90, 90 )

        var currentPoint = l
        var nextPoint = l - rows
        var bottomPoint = l + 1
        var firstPointX = allCoordinates[currentPoint][0]
        var firstPointY = allCoordinates[currentPoint][1]
        var secondPointX = allCoordinates[nextPoint][0]
        var secondPointY = allCoordinates[nextPoint][1]
        var thirdPointX = allCoordinates[bottomPoint][0]
        var thirdPointY = allCoordinates[bottomPoint][1]
        triangle(firstPointX, firstPointY, secondPointX, secondPointY, thirdPointX, thirdPointY)
      }
    }
    l++
    if (l % rows == 0) { whichRow++ }
  }
}