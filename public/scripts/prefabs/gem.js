'use strict';

export class Gem extends Phaser.Sprite {
	constructor(game, x, y, frame, color) {
		let name = 'gem' + color;
		super(game, x, y, name, frame);
		this.anchor.setTo(0.5, 0.5);
	}
};
