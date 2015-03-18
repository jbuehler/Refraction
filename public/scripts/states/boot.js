'use strict';

module.exports = {
	preload: function() {
		this.ready = false;
		this.game.stage.backgroundColor = '#3266bb';
		this.onLoadComplete();

		this.load.image('mirror', 'images/mirror.png');
		this.load.image('gemBlue', 'images/gemBlue.png');
		this.load.image('gemGreen', 'images/gemGreen.png');
		this.load.image('gemRed', 'images/gemRed.png');
		this.load.image('beam', 'images/light.png');
		this.load.image('prism', 'images/star.png');
		this.load.image('trail', 'images/light.png');

		this.load.image('startButton', 'images/startbutton.png');
		this.load.bitmapFont('kennyfont', 'images/kennyfont.png', 'images/kennyfont.fnt');
	},

	create: function() {
		this.game.physics.startSystem(Phaser.Physics.P2JS);
		this.game.physics.p2.restitution = 0.8;
	},

	update: function() {
		if (this.ready) {
			this.game.state.start('menu');
		}
	},

	onLoadComplete: function() {
		this.ready = true;
	}
};
