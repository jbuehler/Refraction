'use strict';

var Gem = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'gem', frame);
	this.anchor.setTo(0.5, 0.5);
};

Gem.prototype = Object.create(Phaser.Sprite.prototype);
Gem.prototype.constructor = Gem;

Phaser.Utils.extend(true, Gem.prototype, {

});

module.exports = Gem;
