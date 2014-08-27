'use strict';

var ready = false;

module.exports = {
	preload: function() {
		this.game.stage.backgroundColor = '#3266bb';
		this.onLoadComplete();

		this.load.image('mirror', 'images/mirror.png');
		this.load.image('gemBlue', 'images/gemBlue.png');
		this.load.image('gemGreen', 'images/gemGreen.png');
		this.load.image('gemRed', 'images/gemRed.png');
		this.load.image('beam', 'images/light.png');
		this.load.image('prism', 'images/HUD/star.png');

		this.load.image('startButton', 'images/startbutton.png');
		this.load.bitmapFont('kennyfont', 'images/kennyfont.png', 'images/kennyfont.fnt');
	},

	create: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	update: function() {
		if (ready) {
			this.game.state.start('menu');
		}
	},

	onLoadComplete: function() {
		ready = true;
	}
};
