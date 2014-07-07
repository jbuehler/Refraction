'use strict';
var _game, fireButton, attempted = false;

var Beam = function(game, x, y) {
	Phaser.BitmapData.call(this, game, 'beam', x, y);

	_game = game;
	this.context.fillStyle = 'rgb(255, 255, 255)';
  this.context.strokeStyle = 'rgb(255, 255, 255)';

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);
};

Beam.prototype = Object.create(Phaser.BitmapData.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
	update: function() {
		this.bitmap.context.clearRect(0, 0, _game.width, _game.height);
	},

	fire: function() {
		if (attempted) {
			return;
		}

		attempted = true;
		var ray = new Phaser.Line(100, _game.height, 100, 0);
	}
});

module.exports = Beam;
