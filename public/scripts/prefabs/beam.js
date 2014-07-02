'use strict';

var Beam = function(game, x, y) {
	Phaser.BitmapData.call(this, game, 'beam', x, y);

	this.context.fillStyle = 'rgb(255, 255, 255)';
  this.context.strokeStyle = 'rgb(255, 255, 255)';
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
});

module.exports = Beam;
