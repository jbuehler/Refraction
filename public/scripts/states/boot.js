'use strict';

var ready = false;

module.exports = {
	preload: function() {
		this.game.stage.backgroundColor = '#3266bb';
		this.onLoadComplete();

		this.load.image('mirror', 'images/mirror.png');
	},

	create: function() {
	},

	update: function() {
		if (ready) {
			this.game.state.start('one');
		}
	},

	onLoadComplete: function() {
		ready = true;
	}
};
