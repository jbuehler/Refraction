'use strict';

var Mirrors = require('../../prefabs/mirrorGroup');
var Beam = require('../../prefabs/beam');
var Prism = require('../../prefabs/prism');

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
		this.mirrors = this.game.add.group();
		this.mirrorGroup = new Mirrors(this.game, this.mirrors);
		this.mirrorGroup.addMirror(100, 100);
	},

	setupBeam: function() {
		var beam = new Beam(this.game, this, this.game.width/2, this.game.height, -190, -1120);
		this.game.add.existing(beam);
	},

	setupPrism: function() {
		var prism = new Prism(this.game, 100, 210);
		this.game.add.existing(prism);
	},

	collisionHandler: function(beam, mirror) {
		if (mirror.body.touching.left) {
			console.log('test');
		}
	}
};
