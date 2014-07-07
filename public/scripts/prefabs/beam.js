'use strict';
var fireButton, attempted = false;

var Beam = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'beam', frame);

	this.checkWorldBounds = true;
  this.outOfBoundsKill = true;

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
	fire: function() {
		if (attempted) {
			return;
		}

		attempted = true;
		this.body.velocity.x = 20;
    this.body.velocity.y = 20;
	}
});

module.exports = Beam;
