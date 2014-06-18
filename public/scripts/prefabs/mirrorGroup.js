'use strict';

var Mirror = require('./mirror');

var MirrorGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
};

MirrorGroup.prototype = Object.create(Phaser.Group.prototype);
MirrorGroup.prototype.constructor = MirrorGroup;

module.exports = MirrorGroup;
