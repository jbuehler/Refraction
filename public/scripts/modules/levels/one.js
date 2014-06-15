'use strict';

var Mirror = require('../prefabs/mirror');
var mirror;

module.exports = {
	create: function() {
		mirror = new Mirror(this.game, 100, 100, this);
	}
};
