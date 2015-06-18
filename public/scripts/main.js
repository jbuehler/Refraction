'use strict';

window.onload = () => {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'refraction');

  game.state.add('boot', require('./states/boot'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('one', require('./states/levels/one'));

  game.state.start('boot');
};
