'use strict';
var _game, fireButton, attempted = false;

var Beam = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'beam', frame);

	_game = game;
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
	}
});

module.exports = Beam;
