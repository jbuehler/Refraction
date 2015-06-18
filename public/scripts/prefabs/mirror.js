'use strict';

class Mirror extends Phaser.Sprite {
	constructor(game, x, y, frame) {
		super(game, x, y, 'mirror', frame);
		this.anchor.setTo(0.5, 0.5);
	  game.physics.p2.enableBody(this);
	  this.body.data.gravityScale = 0;
	  this.body.static = true;

		this.inputEnabled = true;
		this.events.onInputDown.add(this.rotateMirror, this);
	}

	rotateMirror() {
		this.body.rotation = this.body.rotation - Math.PI/20;
	}
}

module.exports = Mirror;
