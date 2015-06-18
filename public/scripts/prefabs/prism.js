'use strict';

import Beam from './beam';

class Prism extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'prism', frame);

		this.position = {
			x: x,
			y: y
		};

		this.game = game;
		this.anchor.setTo(0.5, 0.5);

	  game.physics.p2.enableBody(this);
	  this.body.static = true;
	  this.body.data.gravityScale = 0;
	}

	breakBeam(beam) {
		beam.body.velocity.setTo(0, 0);
		beam.destroy();
		var velocity = beam.body.velocity;

		// break beam into ring of colored beams
		for (var i = 0; i < 6; i ++) {
			var newBeam = new Beam(this.game, null, this.position.x, this.position.y, velocity.x - i, velocity.y - i);
			newBeam.body.bounce.set(1);
			this.game.add.existing(newBeam);
		}
	}

	checkBeamColor(beam) {
		if (beam.color !== 'white') {
			return false;
		}

		return true;
	}
}

module.exports = Prism;
