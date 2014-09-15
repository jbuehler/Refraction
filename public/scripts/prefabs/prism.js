'use strict';
var Beam = require('./beam');
var position, _game;

var Prism = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'prism', frame);
	position = {
		x: x,
		y: y
	};

	_game = game;
	this.anchor.setTo(0.5, 0.5);

  game.physics.p2.enableBody(this);
  this.body.static = true;
  this.body.data.gravityScale = 0;
};

Prism.prototype = Object.create(Phaser.Sprite.prototype);
Prism.prototype.constructor = Prism;

Phaser.Utils.extend(true, Prism.prototype, {
	breakBeam: function(beam) {
		beam.body.velocity.setTo(0, 0);
		beam.destroy();
		var velocity = beam.body.velocity;

		// break beam into ring of colored beams
		for (var i = 0; i < 6; i ++) {
			var newBeam = new Beam(_game, null, position.x, position.y, velocity.x - i, velocity.y - i);
			newBeam.body.bounce.set(1);
			_game.add.existing(newBeam);
		}
	},

	checkBeamColor: function(beam) {
		if (beam.color !== 'white') {
			return false;
		}

		return true;
	}
});

module.exports = Prism;
