'use strict';

var filter;

module.exports = {
	preload: function() {
		filter = require('../vendor/LightBeam.js');
	},

	create: function() {
		var menu = this.game.add.group();
		var startButton = this.game.add.button(this.game.width / 2, 300, 'startButton', this.startClick, this);
    startButton.anchor.setTo(0.5, 0.5);

    menu.add(startButton);

    var gameText = this.game.add.bitmapText(0, 100, 'kennyfont', 'To play, line up mirrors and \n reflect the light to collect \n items!', 12);
    gameText.multiLine = true;
		menu.add(gameText);

		var startText = this.game.add.bitmapText(startButton.width * 0.80, 300, 'kennyfont', 'Start', 18);
		menu.add(startText);

		this.addFilter();
  },

  addFilter: function() {
		filter = new Phaser.Filter.LightBeam(this.game);
		filter.alpha = 12.0;
		filter.red = 1.0;
		filter.green = 1.0;
		filter.blue = 2.0;
		filter.thickness = 270.0;
		filter.speed = 1.0;
  },

	update: function() {
		filter.update();
	},

  startClick: function() {
    this.game.state.start('one');
  }
};
