'use strict';

var Gem = function(game, x, y, frame, color) {
	var name = 'gem' + color;

	Phaser.Sprite.call(this, game, x, y, name, frame);
	this.anchor.setTo(0.5, 0.5);
};

Gem.prototype = Object.create(Phaser.Sprite.prototype);
Gem.prototype.constructor = Gem;

Phaser.Utils.extend(true, Gem.prototype, {

});

module.exports = Gem;
