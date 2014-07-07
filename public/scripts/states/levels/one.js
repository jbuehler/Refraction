'use strict';

var Mirrors = require('../../prefabs/mirrorGroup'),
	Beam = require('../../prefabs/beam');

var mirrorGroup, mirrors, beam;

module.exports = {
	create: function() {
		this.setupMirrors();
		this.setupBeam();
	},

	setupMirrors: function() {
		mirrors = this.game.add.group();
		mirrorGroup = new Mirrors(this.game, mirrors);
		mirrorGroup.addMirror(100, 100);
	},

	setupBeam: function() {
		beam = new Beam(this.game, this, 2, -1120);
		this.game.add.existing(beam);
	}
};
