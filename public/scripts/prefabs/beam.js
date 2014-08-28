'use strict';
var fireButton, _velocityX, _velocityY, trail, attempted = false;

var Beam = function(game, frame, x, y, velocityX, velocityY) {
	Phaser.Sprite.call(this, game, x, y, 'beam', frame);

	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;
  this.game.physics.arcade.enableBody(this);
  this.body.bounce.set(1);

  this.scale.x = 0.2;
  this.scale.y = 0.2;

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);

	_velocityX = velocityX;
	_velocityY = velocityY;

	trail = this.game.add.bitmapData(this.game.width, this.game.height);
	trail.ctx.beginPath();
	trail.ctx.strokeStyle = 'white';
	this.game.add.sprite(0, 0, trail);

	this.events.onKilled.add(this.onKilled, this);
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
	fire: function() {
		if (attempted) {
			return;
		}

		attempted = true;
		this.body.velocity.setTo(_velocityX, _velocityY);
	},

	update: function() {
		trail.ctx.lineTo(this.body.x, this.body.y);
    trail.ctx.lineWidth = 2;
    trail.ctx.stroke();
    trail.dirty = true;
	},

	onKilled: function() {
		this.x = this.game.width/2;
		this.y = this.game.height;
		this.body.velocity.setTo(0, 0);
		this.exists = true;
    this.visible = true;
		attempted = false;
	}
});

module.exports = Beam;
