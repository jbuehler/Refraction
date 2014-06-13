'use strict';

window.onload = function () {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'refraction');

  game.state.add('boot', require('./states/boot'));

  game.state.start('boot');
};
