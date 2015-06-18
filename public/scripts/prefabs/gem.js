'use strict';

class Gem extends Phaser.Sprite {
	constructor(game, x, y, frame, color) {
		var name = 'gem' + color;
		super(game, x, y, name, frame);
		this.anchor.setTo(0.5, 0.5);
	}
}

module.exports = Gem;
