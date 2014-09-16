'use strict';
var fireButton, _velocityX, _velocityY, trail, attempted = false;

var Beam = function(game, frame, x, y, velocityX, velocityY) {
	Phaser.Sprite.call(this, game, x, y, 'beam', frame);

	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;
  this.game.physics.p2.enableBody(this);
  this.body.data.gravityScale = 0;

  this.scale.x = 0.2;
  this.scale.y = 0.2;

  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	fireButton.onDown.add(this.fire, this);

	_velocityX = velocityX;
	_velocityY = velocityY;

	this.events.onKilled.add(this.onKilled, this);
	trail = game.add.emitter(0, 0, 1000);
  trail.makeParticles('trail');
  trail.setRotation(0, 0);
  trail.gravity = 0;
  trail.setAlpha(1, 0, 6000);
  trail.setScale(1, 0, 1, 0, 6000);
};

Beam.prototype = Object.create(Phaser.Sprite.prototype);
Beam.prototype.constructor = Beam;

Phaser.Utils.extend(true, Beam.prototype, {
	fire: function() {
		if (attempted) {
			return;
		}

		attempted = true;
		this.body.velocity.x = _velocityX;
		this.body.velocity.y = _velocityY;
	},

	update: function() {
		trail.emitX = this.body.x;
    trail.emitY = this.body.y;
		trail.start(true, 3000, 8);
	},

	onKilled: function() {
		this.x = this.game.width/2;
		this.y = this.game.height;
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.exists = true;
    this.visible = true;
		attempted = false;
	}
});

module.exports = Beam;
