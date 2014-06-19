'use strict';

var Mirror = require('./mirror');

var MirrorGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
};

MirrorGroup.prototype = Object.create(Phaser.Group.prototype);
MirrorGroup.prototype.constructor = MirrorGroup;

Phaser.Utils.extend(true, MirrorGroup.prototype, {
	rotateMirror: function() {
		var newAngle = this.angle - 40;
		this.game.add.tween(this).to({angle: newAngle}, 100).start();
	}
});

module.exports = MirrorGroup;
