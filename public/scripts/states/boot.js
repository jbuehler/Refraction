'use strict';

module.exports = {
	preload: function() {
		this.ready = false;
		this.game.stage.backgroundColor = '#3266bb';
		this.onLoadComplete();

		this.load.image('mirror', 'public/images/scene/mirror.png');
		this.load.image('gemBlue', 'public/images/items/gemBlue.png');
		this.load.image('gemGreen', 'public/images/items/gemGreen.png');
		this.load.image('gemRed', 'public/images/items/gemRed.png');
		this.load.image('beam', 'public/images/scene/light.png');
		this.load.image('prism', 'public/images/HUD/star.png');
		this.load.image('trail', 'public/images/scene/light.png');

		this.load.image('startButton', 'public/images/HUD/startbutton.png');
		this.load.bitmapFont('kennyfont', 'public/images/HUD/kennyfont/kennyfont.png', 'public/images/HUD/kennyfont/kennyfont.fnt');
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
