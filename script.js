var canvasEl = document.getElementById("myCanvas");
var ctx = canvasEl.getContext("2d");

var innerCanvasEl = document.getElementById("snakeCanvas");

var snakeCtx = innerCanvasEl.getContext("2d");
wholeBg();
createFood();

function Rectangle(x, y, color){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.color = color;
    this.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

function checkBg(x,y,color){
    for (var i = x; i < canvasEl.width; i += 40){
        for(var j = y; j < canvasEl.height; j += 40){
            var rectangle = new Rectangle(i, j, color)
        rectangle.draw()
        }
      }
}

function wholeBg(){
    checkBg(0,0,"blue")
    checkBg(0,20,"lightgray")
    checkBg(20,0,"lightgray")
    checkBg(20,20,"blue")
}

function createFood(){
    var x = Math.floor(Math.random() * 881 + 20);
    while (!(x%20 == 0)){
        x = Math.floor(Math.random() * 881 + 20);
    }

    var y = Math.floor(Math.random() * 501 + 20);
    while (!(y%20 == 0)){
        y = Math.floor(Math.random() * 501 + 20);
    }
    
    var rectangle = new Rectangle(x-20, y-20, "red");
    rectangle.draw();
}

var snakeLength = 5;
var snake = [  {x: 400, y: 240},  {x: 380, y: 240},  {x: 360, y: 240},  {x: 340, y: 240},  {x: 320, y: 240}];

function drawSnakePart(snakePart) 
{  
    snakeCtx.fillStyle = 'yellow';  
    snakeCtx.strokestyle = 'darkblue';
    snakeCtx.fillRect(snakePart.x, snakePart.y, 20, 20);  
    snakeCtx.strokeRect(snakePart.x, snakePart.y, 20, 20);
}

function drawSnake(){
    snake.forEach(drawSnakePart);
}

drawSnake()


var dx = 20;
var dy = 0;

function move_snake() 
{  
  var head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  snake.pop();
}


function main() {
    setTimeout(function onTick() {
    clear_board() 
    move_snake();
    drawSnake();
    // Call main again
    main();
  }, 100)
}

// draw a border around the canvas
function clear_board() {

// Draw a "filled" rectangle to cover the entire canvas
snakeCtx.clearRect(0, 0, 900, 520);
// snakeCtx.fillRect(0, 0, innerCanvasEl.width, innerCanvasEl.height);
// // Draw a "border" around the entire canvas
// snakeCtx.strokeRect(0, 0, innerCanvasEl.width, innerCanvasEl.height);
}

main();


