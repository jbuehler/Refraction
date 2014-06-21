'use strict';

module.exports = {
	create: function() {
		var startButton = this.game.add.button(this.game.width / 2, 300, 'startButton', this.startClick, this);
    startButton.anchor.setTo(0.5, 0.5);
  },
  startClick: function() {
    this.game.state.start('one');
  }
};
