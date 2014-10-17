'use strict';

var Mirror = require('./mirror'), game, mirrorArray, _game;

var MirrorGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);

	this.game.input.onDown.add(this.click, this);
	game = this.game;
	mirrorArray = [];
  _game = game;
};

MirrorGroup.prototype = Object.create(Phaser.Group.prototype);
MirrorGroup.prototype.constructor = MirrorGroup;

Phaser.Utils.extend(true, MirrorGroup.prototype, {
	addMirror: function(x, y) {
		var mirror = new Mirror(this.game, x, y, game);
		this.add(mirror);
		mirrorArray.push(mirror);
	},

	click: function(pointer) {
		var mirrorClicked = _game.physics.p2.hitTest(pointer.position, mirrorArray);
		if (mirrorClicked.length === 0) { return; }

		mirrorClicked[0].body.rotateLeft(2);
	}
});

module.exports = MirrorGroup;
