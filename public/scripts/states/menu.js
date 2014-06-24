'use strict';

module.exports = {
	create: function() {
		var menu = this.game.add.group();
		var startButton = this.game.add.button(this.game.width / 2, 300, 'startButton', this.startClick, this);
    startButton.anchor.setTo(0.5, 0.5);

    menu.add(startButton);

    var gameText = this.game.add.bitmapText(0, 100, 'kennyfont', 'To play, line up mirrors and reflect the light to collect items!', 12);
    gameText.multiLine = true;
		menu.add(gameText);

		var startText = this.game.add.bitmapText(startButton.width * 0.80, 300, 'kennyfont', 'Start', 18);
		menu.add(startText);
  },
  startClick: function() {
    this.game.state.start('one');
  }
};
