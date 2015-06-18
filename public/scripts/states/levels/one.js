'use strict';

import MirrorGroup from '../../prefabs/mirrorGroup';
import Beam from '../../prefabs/beam';
import Prism from '../../prefabs/prism';

export default {
	create() {
		this.setupMirrors();
		this.setupBeam();
		// this.setupPrism();
	},

	update() {
		// mirrors.forEach(function(mirror) {
		// 	this.game.physics.arcade.collide(beam, mirror, this.collisionHandler, null, this);
		// }, this);

		// this.game.physics.arcade.overlap(beam, prism, prism.breakBeam, null, this);
	},

	setupMirrors() {
		this.mirrors = this.game.add.group();
		this.mirrorGroup = new MirrorGroup(this.game, this.mirrors);
		this.mirrorGroup.addMirror(100, 100);
	},

	setupBeam() {
		let beam = new Beam(this.game, this, this.game.width/2, this.game.height, -190, -1120);
		this.game.add.existing(beam);
	},

	setupPrism() {
		let prism = new Prism(this.game, 100, 210);
		this.game.add.existing(prism);
	},

	collisionHandler(beam, mirror) {
		if (mirror.body.touching.left) {
			console.log('test');
		}
	}
};
