'use strict';
var fireButton, _velocityX, _velocityY, trail, attempted = false;

var Beam = function(game, frame, velocityX, velocityY) {
	Phaser.Sprite.call(this, game, game.width/2, game.height, 'beam', frame);

	this.checkWorldBounds = true;
  this.game.physics.arcade.enableBody(this);
  this.body.bounce.set(1);

  this.scale.x = 0.2;
  this.scale.y = 0.2;

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);

	_velocityX = velocityX;
	_velocityY = velocityY;

	trail = this.game.add.bitmapData(this.game.width, this.game.height);
	trail.context.fillStyle = '#ffffff';
	this.game.add.sprite(0, 0, trail);
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
	fire: function() {
		if (attempted) {
			return;
		}

		attempted = true;
		this.body.velocity.x = _velocityX;
    this.body.velocity.y = _velocityY;
	},

	update: function() {
		trail.context.fillRect(this.x, this.y, 2, 2);
		trail.dirty = false;
	}
});

module.exports = Beam;
