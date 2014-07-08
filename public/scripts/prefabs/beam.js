'use strict';
var fireButton, _velocityX, _velocityY, attempted = false;

var Beam = function(game, frame, velocityX, velocityY) {
	Phaser.Sprite.call(this, game, game.width/2, game.height, 'beam', frame);

	this.checkWorldBounds = true;
  this.game.physics.arcade.enableBody(this);
  this.scale.x = 0.2;
  this.scale.y = 0.2;

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);

	_velocityX = velocityX;
	_velocityY = velocityY;
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
	}
});

module.exports = Beam;
