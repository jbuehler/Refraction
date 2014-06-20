'use strict';

var Mirrors = require('../../prefabs/mirrorGroup');
var mirrorGroup, mirrors;

module.exports = {
	create: function() {
		this.setupMirrors();
	},

	setupMirrors: function() {
		mirrors = this.game.add.group();
		mirrorGroup = new Mirrors(this.game, mirrors);
		mirrorGroup.addMirror(100, 100);
	}
};
