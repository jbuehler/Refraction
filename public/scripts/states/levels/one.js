'use strict';

var Mirrors = require('../../prefabs/mirrorGroup');
var Beam = require('../../prefabs/beam');
var Prism = require('../../prefabs/prism');

module.exports = {
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
		this.mirrorGroup = new Mirrors(this.game, this.mirrors);
		this.mirrorGroup.addMirror(100, 100);
	},

	setupBeam() {
		var beam = new Beam(this.game, this, this.game.width/2, this.game.height, -190, -1120);
		this.game.add.existing(beam);
	},

	setupPrism() {
		var prism = new Prism(this.game, 100, 210);
		this.game.add.existing(prism);
	},

	collisionHandler(beam, mirror) {
		if (mirror.body.touching.left) {
			console.log('test');
		}
	}
};
