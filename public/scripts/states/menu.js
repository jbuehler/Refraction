'use strict';

module.exports = {
	create: function() {
		var startButton = this.game.add.button(this.game.width / 2, 300, 'startButton', this.startClick, this);
    startButton.anchor.setTo(0.5, 0.5);

    var gameText = this.game.add.bitmapText(this.game.width, 180, 'kennyfont', 'To play, line up mirrors and reflect the light to collect items!', 18);
		this.add(gameText);

		var starText = this.game.add.bitmapText(startButton.width * 0.90, 300, 'kennyfont', 'Start', 18);
		this.add(starText);
  },
  startClick: function() {
    this.game.state.start('one');
  }
};
