'use strict';

var Mirrors = require('../../prefabs/mirrorGroup');
var mirrorGroup;

module.exports = {
	create: function() {
		this.setupMirrors();
	},

	setupMirrors: function() {
		var mirrors = new Mirrors();
		mirrors.addMirror(100, 100);
	}
};
