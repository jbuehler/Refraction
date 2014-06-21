'use strict';

var ready = false;

module.exports = {
	preload: function() {
		this.game.stage.backgroundColor = '#3266bb';
		this.onLoadComplete();

		this.load.image('mirror', 'images/mirror.png');
		this.load.image('startButton', 'images/startbutton.png');
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
