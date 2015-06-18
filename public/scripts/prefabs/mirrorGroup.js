'use strict';

import Mirror from './mirror';

export class MirrorGroup extends Phaser.Group {
	constructor(game, parent) {
		super(game, parent);
	}

	addMirror(x, y) {
		let mirror = new Mirror(this.game, x, y, 0);
		this.add(mirror);
	}
};
