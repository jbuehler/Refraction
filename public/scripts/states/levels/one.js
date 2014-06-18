'use strict';

var Mirror = require('../../prefabs/mirror');
var mirror, mirrorGroup;

module.exports = {
	create: function() {
		this.setupMirrors();
	},

	setupMirrors: function() {
		mirror = new Mirror(this.game, 100, 100, this);
		mirrorGroup = this.game.add.group();

		mirrorGroup.add(mirror);
	}
};
