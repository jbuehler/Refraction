'use strict';

var Mirror = require('./mirror');

var MirrorGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
};

MirrorGroup.prototype = Object.create(Phaser.Group.prototype);
MirrorGroup.prototype.constructor = MirrorGroup;

Phaser.Utils.extend(true, MirrorGroup.prototype, {
	addMirror: function(x, y) {
		var mirror = new Mirror(this.game, x, y, 0);
		this.add(mirror);
	}
});

module.exports = MirrorGroup;
