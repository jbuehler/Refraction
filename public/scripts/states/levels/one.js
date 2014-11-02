'use strict';

var Mirrors = require('../../prefabs/mirrorGroup'),
	Beam = require('../../prefabs/beam'),
	Prism = require('../../prefabs/prism');

var mirrorGroup, mirrors, beam, prism;

module.exports = {
	create: function() {
		this.setupMirrors();
		this.setupBeam();
		// this.setupPrism();
	},

	update: function() {
		// mirrors.forEach(function(mirror) {
		// 	this.game.physics.arcade.collide(beam, mirror, this.collisionHandler, null, this);
		// }, this);

		// this.game.physics.arcade.overlap(beam, prism, prism.breakBeam, null, this);
	},

	setupMirrors: function() {
		mirrors = this.game.add.group();
		mirrorGroup = new Mirrors(this.game, mirrors);
		mirrorGroup.addMirror(100, 100);
	},

	setupBeam: function() {
		beam = new Beam(this.game, this, this.game.width/2, this.game.height, -190, -1120);
		this.game.add.existing(beam);
	},

	setupPrism: function() {
		prism = new Prism(this.game, 100, 210);
		this.game.add.existing(prism);
	},

	collisionHandler: function(beam, mirror) {
		if (mirror.body.touching.left) {
			console.log('test');
		}
	}
};
