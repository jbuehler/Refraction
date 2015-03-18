'use strict';

var Beam = function(game, frame, x, y, velocityX, velocityY) {
	Phaser.Sprite.call(this, game, x, y, 'beam', frame);
  this.game.physics.p2.enableBody(this);
  this.body.data.gravityScale = 0;

  var fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);

	this._velocityX = velocityX;
	this._velocityY = velocityY;

	this.events.onKilled.add(this.onKilled, this);

	this.trail = game.add.emitter(0, 0, 1000);
  this.trail.makeParticles('trail');
  this.trail.setRotation(0, 0);
  this.trail.gravity = 0;
  this.trail.setAlpha(1, 0, 6000);
  this.trail.setScale(1, 0, 1, 0, 6000);
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
	attempted: false,
	checkWorldBounds: true,
	outOfBoundsKill: true,
	scale: {
		x: 0.2,
		y: 0.2
	},

	fire: function() {
		if (this.attempted) {
			return;
		}

		this.attempted = true;
		this.body.velocity.x = this._velocityX;
		this.body.velocity.y = this._velocityY;
	},

	update: function() {
		this.trail.emitX = this.body.x;
    this.trail.emitY = this.body.y;
		this.trail.start(true, 3000, 8);
	},

	onKilled: function() {
		this.x = this.game.width/2;
		this.y = this.game.height;
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.exists = true;
    this.visible = true;
		this.attempted = false;
	}
});

module.exports = Beam;
