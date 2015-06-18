'use strict';

import Mirror from './mirror';

class MirrorGroup extends Phaser.Group {
	constructor(game, parent) {
		super(game, parent);
	}

	addMirror(x, y) {
		var mirror = new Mirror(this.game, x, y, 0);
		this.add(mirror);
	}
}

module.exports = MirrorGroup;
