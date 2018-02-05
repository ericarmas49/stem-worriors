'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FogParticle = function () {
    function FogParticle(ctx, canvasWidth, canvasHeight, canvasHeightTop, canvasHeightBottom) {
        _classCallCheck(this, FogParticle);

        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = 0;
        this.y = 0;

        this.canvasHeightTop = canvasHeightTop;
        this.canvasHeightBottom = canvasHeightBottom;
    }

    FogParticle.prototype.setPosition = function setPosition(x, y) {
        this.x = x;
        this.y = y;
    };

    FogParticle.prototype.setVelocity = function setVelocity(x, y) {
        this.xVelocity = x;
        this.yVelocity = y;
    };

    FogParticle.prototype.setImage = function setImage(image) {
        this.image = image;
    };

    FogParticle.prototype.render = function render() {
        if (!this.image) return;

        this.ctx.drawImage(this.image, this.x - this.image.width / 2, this.y - this.image.height / 2, this.image.width, this.image.height);

        this.x -= this.xVelocity;
        this.y += this.yVelocity;

        // Check if has crossed the right edge
//        if (this.x >= this.canvasWidth + this.image.width / 2) {
        if (this.x <= -this.image.width / 2) {
//            this.xVelocity = -this.xVelocity;
//            this.x = this.canvasWidth;
//            this.x = -this.image.width;
            this.x = this.canvasWidth + this.image.width / 2;
        }
        // Check if has crossed the left edge
/*        else if (this.x <= 0) {
            this.xVelocity = -this.xVelocity;
            this.x = 0;
        }
*/

        // Check if has crossed the bottom edge
/*        if (this.y >= this.canvasHeight) {
            this.yVelocity = -this.yVelocity;
            this.y = this.canvasHeight;
        }
*/        // Check if has crossed the top edge
        if (this.y <= 0 - this.image.height) {
//            this.yVelocity = -this.yVelocity;
            this.y = this.canvasHeight + this.image.height;
        }
    };

    return FogParticle;
}();

var Fog = function () {
    function Fog() {
        var _this = this;

        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var selector = _ref.selector;
        var _ref$density = _ref.density;
        var density = _ref$density === undefined ? 50 : _ref$density;
        var _ref$velocity = _ref.velocity;
        var velocity = _ref$velocity === undefined ? 2 : _ref$velocity;
        var particle = _ref.particle;
        var bgi = _ref.bgi === undefined ? '' : _ref.bgi;
        var viewportTop = _ref.viewportTop === undefined ? 0 : _ref.viewportTop;
        var viewportBottom = _ref.viewportBottom === undefined ? 1 : _ref.viewportBottom;

        _classCallCheck(this, Fog);

        var canvas = document.querySelector(selector);
        var bcr = canvas.parentElement.getBoundingClientRect();
        this.ctx = canvas.getContext('2d');
        this.canvasWidth = canvas.width = bcr.width;
        this.canvasHeight = canvas.height = bcr.height;

        this.canvasHeightTop = this.canvasHeight * viewportTop;
        this.canvasHeightBottom = this.canvasHeight * viewportBottom;

        this.particleCount = density;
        this.maxVelocity = velocity;
        this.particle = particle;
        this.bgi = bgi;

        this._createParticles();
        this._setImage();

        if (!this.bgi) return;

        var img = new Image();
        img.onload = function () {
            var size = coverImg(img, _this.canvasWidth, _this.canvasHeight);
            _this.bgi = { img: img, w: size.w, h: size.h };
            _this._render();
        };
        img.src = this.bgi;
    }

    Fog.prototype._createParticles = function _createParticles() {
        this.particles = [];

        var random = function random(min, max) {
            return Math.random() * (max - min) + min;
        };

        for (var i = 0; i < this.particleCount; i++) {
            var particle = new FogParticle(this.ctx, this.canvasWidth, this.canvasHeight, this.canvasHeightTop, this.canvasHeightBottom);

            particle.setPosition(random(0, this.canvasWidth), random(this.canvasHeightTop, this.canvasHeightBottom));
            particle.setVelocity(random(0, this.maxVelocity), 0);

            this.particles.push(particle);
        }
    };

    Fog.prototype._setImage = function _setImage() {
        var _this2 = this;

        if (!this.particle) return;

        var img = new Image();
        img.onload = function () {
            return _this2.particles.forEach(function (p) {
                return p.setImage(img);
            });
        };
        img.src = this.particle;
    };

    Fog.prototype._render = function _render() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.particles.forEach(function (p) {
            return p.render();
        });

        requestAnimationFrame(this._render.bind(this));
    };

    return Fog;
}();

var coverImg = function coverImg(img, width, height) {
    var ratio = img.width / img.height;
    var w = width;
    var h = w / ratio;
    if (h < height) {
        h = height;
        w = h * ratio;
    }
    return { w: w, h: h };
};

var bgi = 'images/blank.png';

new Fog({
    selector: '.cloud-canvas',
    particle: 'images/cloud1.png',
    density: 10,
    velocity: 0.5,
    bgi: bgi,
    viewportTop: 0,
    viewportBottom: 0.5
});