'use strict';

var Mirror = require('./mirror'), game;

var MirrorGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
  game.physics.arcade.enableBody(this);
  this.physicsBodyType = Phaser.Physics.ARCADE;

  game = game;
};

MirrorGroup.prototype = Object.create(Phaser.Group.prototype);
MirrorGroup.prototype.constructor = MirrorGroup;

Phaser.Utils.extend(true, MirrorGroup.prototype, {
	addMirror: function(x, y) {
		var mirror = new Mirror(this.game, x, y, game);
		this.add(mirror);
	}
});

module.exports = MirrorGroup;
