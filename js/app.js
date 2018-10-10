// Enemies our player must avoid
let Enemy = function(x,y,speed) {
  this.x=x;
  this.y=y;
  this.speed=spped;
  this.height=40;
  this.width=60;
  this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
  this.x=this.x+this.speed*dt;

  if (this.x > 500) {
        this.x = 0;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x,y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let Player=function(x,y){
  this.x=x;
  this.y=y;
  this.sprite='images/char-pink-girl.png';
  this.height=40;
  this.width=70;
  this.score=0;
  this.lives=5;
};

Player.prototype.render = function(x, y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction === "up") {
        this.y = this.y - 83;
    } else if (direction === "down") {
        this.y = this.y + 83;
    } else if (direction === "left") {
        this.x = this.x - 101;
    } else if (direction === "right") {
        this.x = this.x + 101;
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
