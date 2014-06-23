'use strict';

var ready = false;

module.exports = {
	preload: function() {
		this.game.stage.backgroundColor = '#3266bb';
		this.onLoadComplete();

		this.load.image('mirror', 'images/mirror.png');
		this.load.image('startButton', 'images/startbutton.png');
		this.load.bitmapFont('kennyfont', 'images/kennyfont.png', 'images/kennyfont.fnt');
	},

	create: function() {
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
