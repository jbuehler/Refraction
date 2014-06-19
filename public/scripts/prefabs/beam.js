'use strict';

var Beam = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'beam', frame);
	this.anchor.setTo(0.5, 0.5);
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
});

module.exports = Beam;
