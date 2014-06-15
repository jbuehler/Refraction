'use strict';

var Mirror = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'mirror', frame);
	this.anchor.setTo(0.5, 0.5);

	this.inputEnabled = true;
	this.events.onInputDown.add(this.rotateMirror, this);
};

Mirror.prototype = Object.create(Phaser.Sprite.prototype);
Mirror.prototype.constructor = Mirror;

Phaser.Utils.extend(true, Mirror.prototype, {
	rotateMirror: function() {
		console.log('rotate!');
	}
});

module.exports = Mirror;
