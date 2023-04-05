parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }
            ,
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    }
    ,
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }
        , {}]
    }
    ;
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f,
    i)
        throw i;
    return f
}({
    "QcRT": [function(require, module, exports) {
        function t(t) {
            throw new Error('"' + t + '" is read-only')
        }
        !function() {
            "use strict";
            function i(t, e) {
                if (i.instance_)
                    return i.instance_;
                i.instance_ = this,
                this.outerContainerEl = document.querySelector(t),
                this.containerEl = null,
                this.snackbarEl = null,
                this.touchController = null,
                this.config = e || i.config,
                this.dimensions = i.defaultDimensions,
                this.canvas = null,
                this.canvasCtx = null,
                this.tRex = null,
                this.distanceMeter = null,
                this.distanceRan = 0,
                this.highestScore = parseInt(localStorage.getItem("highScore"), 10) || 0,
                console.log(this.highestScore),
                this.syncHighestScore = !0,
                this.time = 0,
                this.runningTime = 0,
                this.msPerFrame = 1e3 / s,
                this.currentSpeed = this.config.SPEED,
                this.obstacles = [],
                this.activated = !1,
                this.playing = !1,
                this.crashed = !1,
                this.paused = !1,
                this.inverted = !1,
                this.invertTimer = 0,
                this.resizeTimerId_ = null,
                this.bdayFlashTimer = null,
                this.playCount = 0,
                this.audioBuffer = null,
                this.soundFx = {},
                this.audioContext = null,
                this.images = {},
                this.imagesLoaded = 0,
                this.pollingGamepads = !1,
                this.gamepadIndex = void 0,
                this.previousGamepad = null,
                this.isDisabled() ? this.setupDisabledRunner() : this.loadImages()
            }
            window.Runner = i;
            var s = 60
              , e = window.devicePixelRatio > 1
              , n = /CriOS/.test(window.navigator.userAgent)
              , h = /Android/.test(window.navigator.userAgent) || n;
            function o(t, i) {
                return Math.floor(Math.random() * (i - t + 1)) + t
            }
            function a(t) {
                for (var i = t.length / 4 * 3, s = atob(t), e = new ArrayBuffer(i), n = new Uint8Array(e), h = 0; h < i; h++)
                    n[h] = s.charCodeAt(h);
                return n.buffer
            }
            function r() {
                return n ? (new Date).getTime() : performance.now()
            }
            function c(t, i, s, e) {
                this.canvas = t,
                this.canvasCtx = t.getContext("2d"),
                this.canvasDimensions = e,
                this.textImgPos = i,
                this.restartImgPos = s,
                this.draw()
            }
            function d(t, i) {
                return new g(t.x + i.x,t.y + i.y,t.width,t.height)
            }
            function l(t, i, s) {
                t.save(),
                t.strokeStyle = "#f00",
                t.strokeRect(i.x, i.y, i.width, i.height),
                t.strokeStyle = "#0f0",
                t.strokeRect(s.x, s.y, s.width, s.height),
                t.restore()
            }
            function u(t, i) {
                var s = !1
                  , e = (t.x,
                t.y,
                i.x);
                i.y;
                return t.x < e + i.width && t.x + t.width > e && t.y < i.y + i.height && t.height + t.y > i.y && (s = !0),
                s
            }
            function g(t, i, s, e) {
                this.x = t,
                this.y = i,
                this.width = s,
                this.height = e
            }
            function T(t, s, e, n, h, a, r) {
                this.canvasCtx = t,
                this.spritePos = e,
                this.typeConfig = s,
                this.gapCoefficient = h,
                this.size = o(1, T.MAX_OBSTACLE_LENGTH),
                this.dimensions = n,
                this.remove = !1,
                this.xPos = n.WIDTH + (r || 0),
                this.yPos = 0,
                this.width = 0,
                this.collisionBoxes = [],
                this.gap = 0,
                this.speedOffset = 0,
                this.imageSprite = "SNACK" == this.typeConfig.type ? i.bdayImageSprite : i.imageSprite,
                this.currentFrame = 0,
                this.timer = 0,
                this.init(a)
            }
            function m(t, e) {
                this.canvas = t,
                this.canvasCtx = t.getContext("2d"),
                this.imageSprite = i.imageSprite,
                this.spritePos = e,
                this.xPos = 0,
                this.yPos = 0,
                this.xInitialPos = 0,
                this.groundYPos = 0,
                this.currentFrame = 0,
                this.currentAnimFrames = [],
                this.blinkDelay = 0,
                this.blinkCount = 0,
                this.animStartTime = 0,
                this.timer = 0,
                this.msPerFrame = 1e3 / s,
                this.config = m.config,
                this.status = m.status.WAITING,
                this.jumping = !1,
                this.ducking = !1,
                this.jumpVelocity = 0,
                this.reachedMinHeight = !1,
                this.speedDrop = !1,
                this.jumpCount = 0,
                this.jumpspotX = 0,
                this.bdayModeActive = !1,
                this.flashing = !1,
                this.init()
            }
            function f(t, s, e) {
                this.canvas = t,
                this.canvasCtx = t.getContext("2d"),
                this.image = i.imageSprite,
                this.spritePos = s,
                this.x = 0,
                this.y = 5,
                this.currentDistance = 0,
                this.maxScore = 0,
                this.highScore = ["10", "11", ""],
                this.container = null,
                this.digits = [],
                this.achievement = !1,
                this.defaultString = "",
                this.flashTimer = 0,
                this.flashIterations = 0,
                this.invertTrigger = !1,
                this.flashingRafId = null,
                this.highScoreBounds = {},
                this.highScoreFlashing = !1,
                this.config = f.config,
                this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS,
                this.init(e),
                this.setHighScore(parseInt(window.localStorage.getItem("highScore"), 10) || 0)
            }
            function p(t, s, e, n) {
                this.canvas = t,
                this.canvasCtx = this.canvas.getContext("2d"),
                this.spritePos = s,
                this.containerWidth = e,
                this.xPos = e,
                this.yPos = 0,
                this.remove = !1,
                this.cloudGap = o(p.config.MIN_CLOUD_GAP, p.config.MAX_CLOUD_GAP),
                this.isBalloon = n,
                this.imageSprite = n ? i.bdayImageSprite : i.imageSprite,
                this.init()
            }
            function I(t, i, s) {
                this.spritePos = i,
                this.canvas = t,
                this.canvasCtx = t.getContext("2d"),
                this.xPos = s - 50,
                this.yPos = 30,
                this.currentPhase = 0,
                this.opacity = 0,
                this.containerWidth = s,
                this.stars = [],
                this.drawStars = !1,
                this.placeStars()
            }
            function E(t, i) {
                this.spritePos = i,
                this.canvas = t,
                this.canvasCtx = t.getContext("2d"),
                this.sourceDimensions = {},
                this.dimensions = E.dimensions,
                this.sourceXPos = [this.spritePos.x, this.spritePos.x + this.dimensions.WIDTH],
                this.xPos = [],
                this.yPos = 0,
                this.bumpThreshold = .5,
                this.setSourceDimensions(),
                this.draw()
            }
            function S(t, i, s, e) {
                this.canvas = t,
                this.canvasCtx = this.canvas.getContext("2d"),
                this.config = S.config,
                this.dimensions = s,
                this.gapCoefficient = e,
                this.obstacles = [],
                this.obstacleHistory = [],
                this.horizonOffsets = [0, 0],
                this.cloudFrequency = this.config.CLOUD_FREQUENCY,
                this.spritePos = i,
                this.nightMode = null,
                this.bdayModeActive = !1,
                this.clouds = [],
                this.cloudSpeed = this.config.BG_CLOUD_SPEED,
                this.horizonLine = null,
                this.init()
            }
            i.config = {
                ACCELERATION: .001,
                BG_CLOUD_SPEED: .2,
                BOTTOM_PAD: 10,
                CANVAS_IN_VIEW_OFFSET: -10,
                BOTTOM_PAD_BDAY: 26,
                BDAY_FLASH_DURATION: 1e3,
                BDAY_Y_POS_ADJUST: 16,
                CLEAR_TIME: 3e3,
                CLOUD_FREQUENCY: .5,
                GAMEOVER_CLEAR_TIME: 750,
                GAP_COEFFICIENT: .6,
                GRAVITY: .6,
                INITIAL_JUMP_VELOCITY: 12,
                INVERT_FADE_DURATION: 12e3,
                INVERT_DISTANCE: 700,
                MAX_BLINK_COUNT: 3,
                MAX_CLOUDS: 6,
                MAX_OBSTACLE_LENGTH: 3,
                MAX_OBSTACLE_DUPLICATION: 2,
                MAX_SPEED: 13,
                MIN_JUMP_HEIGHT: 35,
                MOBILE_SPEED_COEFFICIENT: 1.2,
                RESOURCE_TEMPLATE_ID: "audio-resources",
                SPEED: 6,
                SPEED_DROP_COEFFICIENT: 3,
                ARCADE_MODE_INITIAL_TOP_POSITION: 35,
                ARCADE_MODE_TOP_POSITION_PERCENT: .1
            },
            i.defaultDimensions = {
                WIDTH: 600,
                HEIGHT: 150
            },
            i.classes = {
                ARCADE_MODE: "arcade-mode",
                CANVAS: "runner-canvas",
                CONTAINER: "runner-container",
                CRASHED: "crashed",
                ICON: "icon-offline",
                INVERTED: "inverted",
                SNACKBAR: "snackbar",
                SNACKBAR_SHOW: "snackbar-show",
                TOUCH_CONTROLLER: "controller"
            },
            i.spriteDefinition = {
                LDPI: {
                    BALLOON: {
                        x: 417,
                        y: 29
                    },
                    CACTUS_LARGE: {
                        x: 332,
                        y: 2
                    },
                    CACTUS_SMALL: {
                        x: 228,
                        y: 2
                    },
                    CLOUD: {
                        x: 86,
                        y: 2
                    },
                    HORIZON: {
                        x: 2,
                        y: 54
                    },
                    MOON: {
                        x: 484,
                        y: 2
                    },
                    PTERODACTYL: {
                        x: 134,
                        y: 2
                    },
                    RESTART: {
                        x: 2,
                        y: 2
                    },
                    TEXT_SPRITE: {
                        x: 655,
                        y: 2
                    },
                    TREX: {
                        x: 848,
                        y: 2
                    },
                    TREX_BDAY: {
                        x: 0,
                        y: 0
                    },
                    SNACK: {
                        x: 384,
                        y: 22
                    },
                    STAR: {
                        x: 645,
                        y: 2
                    }
                },
                HDPI: {
                    BALLOON: {
                        x: 834,
                        y: 58
                    },
                    CACTUS_LARGE: {
                        x: 652,
                        y: 2
                    },
                    CACTUS_SMALL: {
                        x: 446,
                        y: 2
                    },
                    CLOUD: {
                        x: 166,
                        y: 2
                    },
                    HORIZON: {
                        x: 2,
                        y: 104
                    },
                    MOON: {
                        x: 954,
                        y: 2
                    },
                    PTERODACTYL: {
                        x: 260,
                        y: 2
                    },
                    RESTART: {
                        x: 2,
                        y: 2
                    },
                    TEXT_SPRITE: {
                        x: 1294,
                        y: 2
                    },
                    TREX: {
                        x: 1678,
                        y: 2
                    },
                    TREX_BDAY: {
                        x: 0,
                        y: 0
                    },
                    SNACK: {
                        x: 768,
                        y: 44
                    },
                    STAR: {
                        x: 1276,
                        y: 2
                    }
                }
            },
            i.sounds = {
                BUTTON_PRESS: "offline-sound-press",
                HIT: "offline-sound-hit",
                SCORE: "offline-sound-reached"
            },
            i.keycodes = {
                JUMP: {
                    38: 1,
                    32: 1,
                    87: 1
                },
                DUCK: {
                    40: 1,
                    83: 1
                },
                RESTART: {
                    13: 1,
                    32: 1
                }
            },
            i.events = {
                ANIM_END: "webkitAnimationEnd",
                CLICK: "click",
                KEYDOWN: "keydown",
                KEYUP: "keyup",
                POINTERDOWN: "pointerdown",
                POINTERUP: "pointerup",
                RESIZE: "resize",
                TOUCHEND: "touchend",
                TOUCHSTART: "touchstart",
                VISIBILITY: "visibilitychange",
                BLUR: "blur",
                FOCUS: "focus",
                LOAD: "load",
                GAMEPADCONNECTED: "gamepadconnected"
            },
            i.prototype = {
                isDisabled: function() {
                    return !1
                },
                updateConfigSetting: function(t, i) {
                    if (t in this.config && void 0 !== i)
                        switch (this.config[t] = i,
                        t) {
                        case "GRAVITY":
                        case "MIN_JUMP_HEIGHT":
                        case "SPEED_DROP_COEFFICIENT":
                            this.tRex.config[t] = i;
                            break;
                        case "INITIAL_JUMP_VELOCITY":
                            this.tRex.setJumpVelocity(i);
                            break;
                        case "SPEED":
                            this.setSpeed(i)
                        }
                },
                loadImages: function() {
                    e ? (i.imageSprite = document.getElementById("offline-resources-2x"),
                    i.bdayImageSprite = document.getElementById("offline-resources-bday-2x"),
                    this.spriteDef = i.spriteDefinition.HDPI) : (i.imageSprite = document.getElementById("offline-resources-1x"),
                    i.bdayImageSprite = document.getElementById("offline-resources-bday-1x"),
                    this.spriteDef = i.spriteDefinition.LDPI),
                    i.imageSprite.complete ? this.init() : i.imageSprite.addEventListener(i.events.LOAD, this.init.bind(this))
                },
                loadSounds: function() {
                    if (!n) {
                        this.audioContext = new AudioContext;
                        var t = document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;
                        for (var s in i.sounds) {
                            var e = t.getElementById(i.sounds[s]).src
                              , h = a(e = e.substr(e.indexOf(",") + 1));
                            this.audioContext.decodeAudioData(h, function(t, i) {
                                this.soundFx[t] = i
                            }
                            .bind(this, s))
                        }
                    }
                },
                setSpeed: function(t) {
                    var i = t || this.currentSpeed;
                    if (this.dimensions.WIDTH < 600) {
                        var s = i * this.dimensions.WIDTH / 600 * this.config.MOBILE_SPEED_COEFFICIENT;
                        this.currentSpeed = s > i ? i : s
                    } else
                        t && (this.currentSpeed = t)
                },
                init: function() {
                    var t, s, e, n, h, o = this;
                    this.adjustDimensions(),
                    this.setSpeed(),
                    this.containerEl = document.createElement("div"),
                    this.containerEl.className = i.classes.CONTAINER,
                    this.canvas = (t = this.containerEl,
                    s = this.dimensions.WIDTH,
                    e = this.dimensions.HEIGHT,
                    n = i.classes.PLAYER,
                    (h = document.createElement("canvas")).className = n ? i.classes.CANVAS + " " + n : i.classes.CANVAS,
                    h.width = s,
                    h.height = e,
                    t.appendChild(h),
                    h),
                    this.canvasCtx = this.canvas.getContext("2d"),
                    this.canvasCtx.fillStyle = "#f7f7f7",
                    this.canvasCtx.fill(),
                    i.updateCanvasScaling(this.canvas),
                    this.horizon = new S(this.canvas,this.spriteDef,this.dimensions,this.config.GAP_COEFFICIENT),
                    this.distanceMeter = new f(this.canvas,this.spriteDef.TEXT_SPRITE,this.dimensions.WIDTH),
                    this.tRex = new m(this.canvas,this.spriteDef.TREX),
                    this.outerContainerEl.appendChild(this.containerEl),
                    this.startListening(),
                    this.update(),
                    window.addEventListener(i.events.RESIZE, this.debounceResize.bind(this));
                    var a = window.matchMedia("(prefers-color-scheme: dark)");
                    this.isDarkMode = a && a.matches,
                    a.addListener(function(t) {
                        o.isDarkMode = t.matches
                    })
                },
                createTouchController: function() {
                    this.touchController = document.createElement("div"),
                    this.touchController.className = i.classes.TOUCH_CONTROLLER,
                    this.touchController.addEventListener(i.events.TOUCHSTART, this),
                    this.touchController.addEventListener(i.events.TOUCHEND, this),
                    this.outerContainerEl.appendChild(this.touchController)
                },
                debounceResize: function() {
                    this.resizeTimerId_ || (this.resizeTimerId_ = setInterval(this.adjustDimensions.bind(this), 250))
                },
                adjustDimensions: function() {
                    clearInterval(this.resizeTimerId_),
                    this.resizeTimerId_ = null;
                    var t = window.getComputedStyle(this.outerContainerEl)
                      , s = Number(t.paddingLeft.substr(0, t.paddingLeft.length - 2));
                    this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - 2 * s,
                    this.isArcadeMode() && (this.dimensions.WIDTH = Math.min(600, this.dimensions.WIDTH),
                    this.activated && this.setArcadeModeContainerScale()),
                    this.canvas && (this.canvas.width = this.dimensions.WIDTH,
                    this.canvas.height = this.dimensions.HEIGHT,
                    i.updateCanvasScaling(this.canvas),
                    this.distanceMeter.calcXPos(this.dimensions.WIDTH),
                    this.clearCanvas(),
                    this.horizon.update(0, 0, !0),
                    this.tRex.update(0),
                    this.playing || this.crashed || this.paused ? (this.containerEl.style.width = this.dimensions.WIDTH + "px",
                    this.containerEl.style.height = this.dimensions.HEIGHT + "px",
                    this.distanceMeter.update(0, Math.ceil(this.distanceRan)),
                    this.stop()) : this.tRex.draw(0, 0),
                    this.crashed && this.gameOverPanel && (this.gameOverPanel.updateDimensions(this.dimensions.WIDTH),
                    this.gameOverPanel.draw()))
                },
                playIntro: function() {
                    if (this.activated || this.crashed)
                        this.crashed && this.restart();
                    else {
                        this.playingIntro = !0,
                        this.tRex.playingIntro = !0;
                        var t = "@-webkit-keyframes intro { from { width:" + m.config.WIDTH + "px }to { width: " + this.dimensions.WIDTH + "px }}";
                        document.styleSheets[0].insertRule(t, 0),
                        this.containerEl.addEventListener(i.events.ANIM_END, this.startGame.bind(this)),
                        this.containerEl.style.webkitAnimation = "intro .4s ease-out 1 both",
                        this.containerEl.style.width = this.dimensions.WIDTH + "px",
                        this.setPlayStatus(!0),
                        this.activated = !0
                    }
                },
                startGame: function() {
                    this.isArcadeMode() && this.setArcadeMode(),
                    this.runningTime = 0,
                    this.playingIntro = !1,
                    this.tRex.playingIntro = !1,
                    this.containerEl.style.webkitAnimation = "",
                    this.playCount++,
                    document.addEventListener(i.events.VISIBILITY, this.onVisibilityChange.bind(this)),
                    window.addEventListener(i.events.BLUR, this.onVisibilityChange.bind(this)),
                    window.addEventListener(i.events.FOCUS, this.onVisibilityChange.bind(this))
                },
                clearCanvas: function() {
                    this.canvasCtx.clearRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT)
                },
                isCanvasInView: function() {
                    return this.containerEl.getBoundingClientRect().top > i.config.CANVAS_IN_VIEW_OFFSET
                },
                update: function() {
                    this.updatePending = !1;
                    var s = r()
                      , e = s - (this.time || s);
                    if (null != this.bdayFlashTimer && (this.bdayFlashTimer <= 0 ? (this.bdayFlashTimer = null,
                    this.tRex.setFlashing(!1),
                    this.tRex.enableBdayMode(this.spriteDef.TREX_BDAY)) : (this.bdayFlashTimer -= e,
                    this.tRex.update(e),
                    e = 0)),
                    this.time = s,
                    this.playing) {
                        this.clearCanvas(),
                        this.tRex.jumping && this.tRex.updateJump(e),
                        this.runningTime += e;
                        var n = this.runningTime > this.config.CLEAR_TIME;
                        if (1 !== this.tRex.jumpCount || this.playingIntro || (this.playIntro(),
                        console.log(this)),
                        this.playingIntro)
                            this.horizon.update(0, this.currentSpeed, n);
                        else {
                            var h = this.isDarkMode ^ this.inverted;
                            e = this.activated ? e : 0,
                            this.horizon.update(e, this.currentSpeed, n, this.inverted, h)
                        }
                        var o = n && function(t, s, e) {
                            i.defaultDimensions.WIDTH,
                            t.xPos;
                            var n = new g(s.xPos + 1,s.yPos + 1,s.config.WIDTH - 2,(s.bdayModeActive ? s.config.HEIGHT_BDAY : s.config.HEIGHT) - 2)
                              , h = new g(t.xPos + 1,t.yPos + 1,t.typeConfig.width * t.size - 2,t.typeConfig.height - 2);
                            e && l(e, n, h);
                            if (u(n, h))
                                for (var o = t.collisionBoxes, a = s.ducking ? m.collisionBoxes.DUCKING : m.collisionBoxes.RUNNING, r = 0; r < a.length; r++)
                                    for (var c = 0; c < o.length; c++) {
                                        var T = d(a[r], n)
                                          , f = d(o[c], h)
                                          , p = u(T, f);
                                        if (s.bdayModeActive && (T.y += i.config.BDAY_Y_POS_ADJUST),
                                        e && l(e, T, f),
                                        p)
                                            return [T, f]
                                    }
                        }(this.horizon.obstacles[0], this.tRex);
                        if (i.isBdayModeEnabled() && o && "SNACK" == this.horizon.obstacles[0].typeConfig.type && (this.horizon.enableBdayMode(),
                        this.tRex.setFlashing(!0),
                        t("collision"),
                        o = !1,
                        this.bdayFlashTimer = this.config.BDAY_FLASH_DURATION),
                        o ? this.gameOver() : (this.distanceRan += this.currentSpeed * e / this.msPerFrame,
                        this.currentSpeed < this.config.MAX_SPEED && (this.currentSpeed += this.config.ACCELERATION)),
                        this.distanceMeter.update(e, Math.ceil(this.distanceRan)) && this.playSound(this.soundFx.SCORE),
                        this.invertTimer > this.config.INVERT_FADE_DURATION)
                            this.invertTimer = 0,
                            this.invertTrigger = !1,
                            this.invert(!1);
                        else if (this.invertTimer)
                            this.invertTimer += e;
                        else {
                            var a = this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));
                            a > 0 && (this.invertTrigger = !(a % this.config.INVERT_DISTANCE),
                            this.invertTrigger && 0 === this.invertTimer && (this.invertTimer += e,
                            this.invert(!1)))
                        }
                    }
                    (this.playing || !this.activated && this.tRex.blinkCount < i.config.MAX_BLINK_COUNT) && (this.tRex.update(e),
                    this.scheduleNextUpdate())
                },
                handleEvent: function(t) {
                    return function(i, s) {
                        switch (i) {
                        case s.KEYDOWN:
                        case s.TOUCHSTART:
                        case s.POINTERDOWN:
                            this.onKeyDown(t);
                            break;
                        case s.KEYUP:
                        case s.TOUCHEND:
                        case s.POINTERUP:
                            this.onKeyUp(t);
                            break;
                        case s.GAMEPADCONNECTED:
                            this.onGamepadConnected(t)
                        }
                    }
                    .bind(this)(t.type, i.events)
                },
                startListening: function() {
                    document.addEventListener(i.events.KEYDOWN, this),
                    document.addEventListener(i.events.KEYUP, this),
                    this.containerEl.addEventListener(i.events.TOUCHSTART, this),
                    document.addEventListener(i.events.POINTERDOWN, this),
                    document.addEventListener(i.events.POINTERUP, this),
                    this.isArcadeMode() && window.addEventListener(i.events.GAMEPADCONNECTED, this)
                },
                stopListening: function() {
                    document.removeEventListener(i.events.KEYDOWN, this),
                    document.removeEventListener(i.events.KEYUP, this),
                    this.touchController && (this.touchController.removeEventListener(i.events.TOUCHSTART, this),
                    this.touchController.removeEventListener(i.events.TOUCHEND, this)),
                    this.containerEl.removeEventListener(i.events.TOUCHSTART, this),
                    document.removeEventListener(i.events.POINTERDOWN, this),
                    document.removeEventListener(i.events.POINTERUP, this),
                    this.isArcadeMode() && window.removeEventListener(i.events.GAMEPADCONNECTED, this)
                },
                onKeyDown: function(t) {
                    h && this.playing && t.preventDefault(),
                    this.isCanvasInView() ? this.crashed || this.paused ? this.playing && i.keycodes.DUCK[t.keyCode] && (t.preventDefault(),
                    this.tRex.jumping ? this.tRex.setSpeedDrop() : this.tRex.jumping || this.tRex.ducking || this.tRex.setDuck(!0)) : ((i.keycodes.JUMP[t.keyCode] || t.type === i.events.TOUCHSTART) && (t.preventDefault(),
                    this.playing || (this.touchController || t.type !== i.events.TOUCHSTART || this.createTouchController(),
                    this.loadSounds(),
                    this.setPlayStatus(!0),
                    this.update())),
                    this.tRex.jumping || this.tRex.ducking || (this.playSound(this.soundFx.BUTTON_PRESS),
                    this.tRex.startJump(this.currentSpeed))) : n && this.crashed && t.type === i.events.TOUCHSTART && t.currentTarget === this.containerEl && this.handleGameOverClicks(t)
                },
                onKeyUp: function(t) {
                    var s = String(t.keyCode)
                      , e = i.keycodes.JUMP[s] || t.type === i.events.TOUCHEND || t.type === i.events.POINTERUP;
                    if (this.isRunning() && e)
                        this.tRex.endJump();
                    else if (i.keycodes.DUCK[s])
                        this.tRex.speedDrop = !1,
                        this.tRex.setDuck(!1);
                    else if (this.crashed) {
                        var n = r() - this.time;
                        this.isCanvasInView() && (i.keycodes.RESTART[s] || this.isLeftClickOnCanvas(t) || n >= this.config.GAMEOVER_CLEAR_TIME && i.keycodes.JUMP[s]) && this.handleGameOverClicks(t)
                    } else
                        this.paused && e && (this.tRex.reset(),
                        this.play())
                },
                onGamepadConnected: function(t) {
                    this.pollingGamepads || this.pollGamepadState()
                },
                pollGamepadState: function() {
                    var t = navigator.getGamepads();
                    this.pollActiveGamepad(t),
                    this.pollingGamepads = !0,
                    requestAnimationFrame(this.pollGamepadState.bind(this))
                },
                pollForActiveGamepad: function(t) {
                    for (var i = 0; i < t.length; ++i)
                        if (t[i] && t[i].buttons.length > 0 && t[i].buttons[0].pressed)
                            return this.gamepadIndex = i,
                            void this.pollActiveGamepad(t)
                },
                pollActiveGamepad: function(t) {
                    if (void 0 !== this.gamepadIndex) {
                        var i = t[this.gamepadIndex];
                        if (!i)
                            return this.gamepadIndex = void 0,
                            void this.pollForActiveGamepad(t);
                        this.pollGamepadButton(i, 0, 38),
                        i.buttons.length >= 2 && this.pollGamepadButton(i, 1, 40),
                        i.buttons.length >= 10 && this.pollGamepadButton(i, 9, 13),
                        this.previousGamepad = i
                    } else
                        this.pollForActiveGamepad(t)
                },
                pollGamepadButton: function(t, s, e) {
                    var n = t.buttons[s].pressed
                      , h = !1;
                    if (this.previousGamepad && (h = this.previousGamepad.buttons[s].pressed),
                    n !== h) {
                        var o = new KeyboardEvent(n ? i.events.KEYDOWN : i.events.KEYUP,{
                            keyCode: e
                        });
                        document.dispatchEvent(o)
                    }
                },
                handleGameOverClicks: function(t) {
                    t.preventDefault(),
                    this.distanceMeter.hasClickedOnHighScore(t) && this.highestScore ? this.distanceMeter.isHighScoreFlashing() ? (this.saveHighScore(0, !0),
                    this.distanceMeter.resetHighScore()) : this.distanceMeter.startHighScoreFlashing() : (this.distanceMeter.cancelHighScoreFlashing(),
                    this.restart())
                },
                isLeftClickOnCanvas: function(t) {
                    return null != t.button && t.button < 2 && t.type === i.events.POINTERUP && t.target === this.canvas
                },
                scheduleNextUpdate: function() {
                    this.updatePending || (this.updatePending = !0,
                    this.raqId = requestAnimationFrame(this.update.bind(this)))
                },
                isRunning: function() {
                    return !!this.raqId
                },
                saveHighScore: function(t, i) {
                    console.log(t),
                    this.highestScore = Math.ceil(t),
                    this.distanceMeter.setHighScore(this.highestScore),
                    this.syncHighestScore && window.localStorage && (i ? window.localStorage.setItem("highScore", "0") : window.localStorage.setItem("highScore", String(this.highestScore)))
                },
                gameOver: function() {
                    var t;
                    this.playSound(this.soundFx.HIT),
                    t = 200,
                    window.navigator.vibrate && window.navigator.vibrate(t),
                    this.stop(),
                    this.crashed = !0,
                    this.distanceMeter.achievement = !1,
                    this.tRex.update(100, m.status.CRASHED),
                    this.gameOverPanel ? this.gameOverPanel.draw() : this.canvas && (this.gameOverPanel = new c(this.canvas,this.spriteDef.TEXT_SPRITE,this.spriteDef.RESTART,this.dimensions)),
                    console.log(this.distanceRan, this.highestScore),
                    this.distanceRan > this.highestScore && this.saveHighScore(this.distanceRan),
                    this.time = r()
                },
                stop: function() {
                    this.setPlayStatus(!1),
                    this.paused = !0,
                    cancelAnimationFrame(this.raqId),
                    this.raqId = 0
                },
                play: function() {
                    this.crashed || (this.setPlayStatus(!0),
                    this.paused = !1,
                    this.tRex.update(0, m.status.RUNNING),
                    this.time = r(),
                    this.update())
                },
                restart: function() {
                    this.raqId || (this.playCount++,
                    this.runningTime = 0,
                    this.setPlayStatus(!0),
                    this.paused = !1,
                    this.crashed = !1,
                    this.distanceRan = 0,
                    this.setSpeed(this.config.SPEED),
                    this.time = r(),
                    this.containerEl.classList.remove(i.classes.CRASHED),
                    this.clearCanvas(),
                    this.distanceMeter.reset(),
                    this.horizon.reset(),
                    this.tRex.reset(),
                    this.playSound(this.soundFx.BUTTON_PRESS),
                    this.invert(!0),
                    this.bdayFlashTimer = null,
                    this.update())
                },
                setPlayStatus: function(t) {
                    this.touchController && this.touchController.classList.toggle(HIDDEN_CLASS, !t),
                    this.playing = t
                },
                isArcadeMode: function() {
                    return !0
                },
                setArcadeMode: function() {
                    document.body.classList.add(i.classes.ARCADE_MODE),
                    this.setArcadeModeContainerScale()
                },
                setArcadeModeContainerScale: function() {
                    var t = window.innerHeight
                      , s = t / this.dimensions.HEIGHT
                      , e = window.innerWidth / this.dimensions.WIDTH
                      , n = Math.max(1, Math.min(s, e))
                      , h = this.dimensions.HEIGHT * n
                      , o = Math.ceil(Math.max(0, (t - h - i.config.ARCADE_MODE_INITIAL_TOP_POSITION) * i.config.ARCADE_MODE_TOP_POSITION_PERCENT)) * window.devicePixelRatio;
                    this.containerEl.style.transform = "scale(" + n + ") translateY(" + o + "px)"
                },
                onVisibilityChange: function(t) {
                    document.hidden || document.webkitHidden || "blur" === t.type || "visible" !== document.visibilityState ? this.stop() : this.crashed || (this.tRex.reset(),
                    this.play())
                },
                playSound: function(t) {
                    if (t) {
                        var i = this.audioContext.createBufferSource();
                        i.buffer = t,
                        i.connect(this.audioContext.destination),
                        i.start(0)
                    }
                },
                invert: function(t) {
                    var s = document.firstElementChild;
                    t ? (s.classList.toggle(i.classes.INVERTED, !1),
                    this.invertTimer = 0,
                    this.inverted = !1) : this.inverted = s.classList.toggle(i.classes.INVERTED, this.invertTrigger)
                }
            },
            i.updateCanvasScaling = function(t, i, s) {
                var e = t.getContext("2d")
                  , n = Math.floor(window.devicePixelRatio) || 1
                  , h = Math.floor(e.webkitBackingStorePixelRatio) || 1
                  , o = n / h;
                if (n !== h) {
                    var a = i || t.width
                      , r = s || t.height;
                    return t.width = a * o,
                    t.height = r * o,
                    t.style.width = a + "px",
                    t.style.height = r + "px",
                    e.scale(o, o),
                    !0
                }
                return 1 === n && (t.style.width = t.width + "px",
                t.style.height = t.height + "px"),
                !1
            }
            ,
            i.isBdayModeEnabled = function() {
                return !1
            }
            ,
            c.dimensions = {
                TEXT_X: 0,
                TEXT_Y: 13,
                TEXT_WIDTH: 191,
                TEXT_HEIGHT: 11,
                RESTART_WIDTH: 36,
                RESTART_HEIGHT: 32
            },
            c.prototype = {
                updateDimensions: function(t, i) {
                    this.canvasDimensions.WIDTH = t,
                    i && (this.canvasDimensions.HEIGHT = i)
                },
                draw: function() {
                    var t = c.dimensions
                      , s = this.canvasDimensions.WIDTH / 2
                      , n = t.TEXT_X
                      , h = t.TEXT_Y
                      , o = t.TEXT_WIDTH
                      , a = t.TEXT_HEIGHT
                      , r = Math.round(s - t.TEXT_WIDTH / 2)
                      , d = Math.round((this.canvasDimensions.HEIGHT - 25) / 3)
                      , l = t.TEXT_WIDTH
                      , u = t.TEXT_HEIGHT
                      , g = t.RESTART_WIDTH
                      , T = t.RESTART_HEIGHT
                      , m = s - t.RESTART_WIDTH / 2
                      , f = this.canvasDimensions.HEIGHT / 2;
                    e && (h *= 2,
                    n *= 2,
                    o *= 2,
                    a *= 2,
                    g *= 2,
                    T *= 2),
                    n += this.textImgPos.x,
                    h += this.textImgPos.y,
                    this.canvasCtx.drawImage(i.imageSprite, n, h, o, a, r, d, l, u),
                    this.canvasCtx.drawImage(i.imageSprite, this.restartImgPos.x, this.restartImgPos.y, g, T, m, f, t.RESTART_WIDTH, t.RESTART_HEIGHT)
                }
            },
            T.MAX_GAP_COEFFICIENT = 1.5,
            T.MAX_OBSTACLE_LENGTH = 3,
            T.prototype = {
                init: function(t) {
                    if (this.cloneCollisionBoxes(),
                    this.size > 1 && this.typeConfig.multipleSpeed > t && (this.size = 1),
                    this.width = this.typeConfig.width * this.size,
                    Array.isArray(this.typeConfig.yPos)) {
                        var i = h ? this.typeConfig.yPosMobile : this.typeConfig.yPos;
                        this.yPos = i[o(0, i.length - 1)]
                    } else
                        this.yPos = this.typeConfig.yPos;
                    this.draw(),
                    this.size > 1 && (this.collisionBoxes[1].width = this.width - this.collisionBoxes[0].width - this.collisionBoxes[2].width,
                    this.collisionBoxes[2].x = this.width - this.collisionBoxes[2].width),
                    this.typeConfig.speedOffset && (this.speedOffset = Math.random() > .5 ? this.typeConfig.speedOffset : -this.typeConfig.speedOffset),
                    this.gap = this.getGap(this.gapCoefficient, t)
                },
                draw: function() {
                    var t = this.typeConfig.width
                      , s = this.typeConfig.height;
                    e && (t *= 2,
                    s *= 2);
                    var n = t * this.size * (.5 * (this.size - 1)) + this.spritePos.x;
                    this.currentFrame > 0 && (n += t * this.currentFrame),
                    this.canvasCtx.drawImage(i.imageSprite, n, this.spritePos.y, t * this.size, s, this.xPos, this.yPos, this.typeConfig.width * this.size, this.typeConfig.height)
                },
                update: function(t, i) {
                    this.remove || (this.typeConfig.speedOffset && (i += this.speedOffset),
                    this.xPos -= Math.floor(i * s / 1e3 * t),
                    this.typeConfig.numFrames && (this.timer += t,
                    this.timer >= this.typeConfig.frameRate && (this.currentFrame = this.currentFrame === this.typeConfig.numFrames - 1 ? 0 : this.currentFrame + 1,
                    this.timer = 0)),
                    this.draw(),
                    this.isVisible() || (this.remove = !0))
                },
                getGap: function(t, i) {
                    var s = Math.round(this.width * i + this.typeConfig.minGap * t);
                    return o(s, Math.round(s * T.MAX_GAP_COEFFICIENT))
                },
                isVisible: function() {
                    return this.xPos + this.width > 0
                },
                cloneCollisionBoxes: function() {
                    for (var t = this.typeConfig.collisionBoxes, i = t.length - 1; i >= 0; i--)
                        this.collisionBoxes[i] = new g(t[i].x,t[i].y,t[i].width,t[i].height)
                }
            },
            T.types = [{
                type: "CACTUS_SMALL",
                width: 17,
                height: 35,
                yPos: 105,
                multipleSpeed: 4,
                minGap: 120,
                minSpeed: 0,
                collisionBoxes: [new g(0,7,5,27), new g(4,0,6,34), new g(10,4,7,14)]
            }, {
                type: "CACTUS_LARGE",
                width: 25,
                height: 50,
                yPos: 90,
                multipleSpeed: 7,
                minGap: 120,
                minSpeed: 0,
                collisionBoxes: [new g(0,12,7,38), new g(8,0,7,49), new g(13,10,10,38)]
            }, {
                type: "PTERODACTYL",
                width: 46,
                height: 40,
                yPos: [100, 75, 50],
                yPosMobile: [100, 50],
                multipleSpeed: 999,
                minSpeed: 8.5,
                minGap: 150,
                collisionBoxes: [new g(15,15,16,5), new g(18,21,24,6), new g(2,14,4,3), new g(6,10,4,7), new g(10,8,6,9)],
                numFrames: 2,
                frameRate: 1e3 / 6,
                speedOffset: .8
            }, {
                type: "SNACK",
                width: 33,
                height: 42,
                yPos: 85,
                multipleSpeed: 999,
                minGap: 999,
                minSpeed: 0,
                collisionBoxes: [new g(0,0,40,40)]
            }],
            m.config = {
                DROP_VELOCITY: -5,
                FLASH_OFF: 175,
                FLASH_ON: 100,
                GRAVITY: .6,
                HEIGHT: 47,
                HEIGHT_BDAY: 63,
                HEIGHT_DUCK: 25,
                INIITAL_JUMP_VELOCITY: -10,
                INTRO_DURATION: 1500,
                MAX_JUMP_HEIGHT: 30,
                MIN_JUMP_HEIGHT: 30,
                SPEED_DROP_COEFFICIENT: 3,
                SPRITE_WIDTH: 262,
                START_X_POS: 50,
                WIDTH: 44,
                WIDTH_DUCK: 59
            },
            m.collisionBoxes = {
                DUCKING: [new g(1,18,55,25)],
                RUNNING: [new g(22,0,17,16), new g(1,18,30,9), new g(10,35,14,8), new g(1,24,29,5), new g(5,30,21,4), new g(9,34,15,4)]
            },
            m.status = {
                CRASHED: "CRASHED",
                DUCKING: "DUCKING",
                JUMPING: "JUMPING",
                RUNNING: "RUNNING",
                WAITING: "WAITING"
            },
            m.BLINK_TIMING = 7e3,
            m.animFrames = {
                WAITING: {
                    frames: [44, 0],
                    msPerFrame: 1e3 / 3
                },
                RUNNING: {
                    frames: [88, 132],
                    msPerFrame: 1e3 / 12
                },
                CRASHED: {
                    frames: [220],
                    msPerFrame: 1e3 / 60
                },
                JUMPING: {
                    frames: [0],
                    msPerFrame: 1e3 / 60
                },
                DUCKING: {
                    frames: [264, 323],
                    msPerFrame: 125
                }
            },
            m.prototype = {
                init: function() {
                    this.groundYPos = i.defaultDimensions.HEIGHT - this.config.HEIGHT - i.config.BOTTOM_PAD,
                    this.yPos = this.groundYPos,
                    this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT,
                    this.draw(0, 0),
                    this.update(0, m.status.WAITING)
                },
                enableBdayMode: function(t) {
                    this.bdayModeActive = !0,
                    this.spritePos = t,
                    this.imageSprite = i.bdayImageSprite,
                    this.groundYPos = i.defaultDimensions.HEIGHT - this.config.HEIGHT - i.config.BOTTOM_PAD_BDAY,
                    this.yPos -= i.config.BDAY_Y_POS_ADJUST
                },
                setFlashing: function(t) {
                    this.flashing = t
                },
                setJumpVelocity: function(t) {
                    this.config.INIITAL_JUMP_VELOCITY = -t,
                    this.config.DROP_VELOCITY = -t / 2
                },
                update: function(t, i) {
                    this.timer += t,
                    i && (this.status = i,
                    this.currentFrame = 0,
                    this.msPerFrame = m.animFrames[i].msPerFrame,
                    this.currentAnimFrames = m.animFrames[i].frames,
                    i === m.status.WAITING && (this.animStartTime = r(),
                    this.setBlinkDelay())),
                    this.playingIntro && this.xPos < this.config.START_X_POS && (this.xPos += Math.round(this.config.START_X_POS / this.config.INTRO_DURATION * t),
                    this.xInitialPos = this.xPos),
                    this.status === m.status.WAITING ? this.blink(r()) : this.draw(this.currentAnimFrames[this.currentFrame], 0),
                    !this.flashing && this.timer >= this.msPerFrame && (this.currentFrame = this.currentFrame == this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1,
                    this.timer = 0),
                    this.speedDrop && this.yPos === this.groundYPos && (this.speedDrop = !1,
                    this.setDuck(!0))
                },
                draw: function(t, s) {
                    var n = t
                      , h = s
                      , o = this.ducking && this.status !== m.status.CRASHED ? this.config.WIDTH_DUCK : this.config.WIDTH
                      , a = this.bdayModeActive ? this.config.HEIGHT_BDAY : this.config.HEIGHT
                      , r = a;
                    e && (n *= 2,
                    h *= 2,
                    o *= 2,
                    a *= 2),
                    n += this.spritePos.x,
                    h += this.spritePos.y,
                    this.flashing && (this.timer < this.config.FLASH_ON ? this.canvasCtx.globalAlpha = .5 : this.timer > this.config.FLASH_OFF && (this.timer = 0)),
                    this.ducking && this.status !== m.status.CRASHED ? this.canvasCtx.drawImage(i.imageSprite, n, h, o, a, this.xPos, this.yPos, this.config.WIDTH_DUCK, r) : (this.ducking && this.status === m.status.CRASHED && this.xPos++,
                    this.canvasCtx.drawImage(i.imageSprite, n, h, o, a, this.xPos, this.yPos, this.config.WIDTH, r)),
                    this.canvasCtx.globalAlpha = 1
                },
                setBlinkDelay: function() {
                    this.blinkDelay = Math.ceil(Math.random() * m.BLINK_TIMING)
                },
                blink: function(t) {
                    t - this.animStartTime >= this.blinkDelay && (this.draw(this.currentAnimFrames[this.currentFrame], 0),
                    1 === this.currentFrame && (this.setBlinkDelay(),
                    this.animStartTime = t,
                    this.blinkCount++))
                },
                startJump: function(t) {
                    this.jumping || (this.update(0, m.status.JUMPING),
                    this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - t / 10,
                    this.jumping = !0,
                    this.reachedMinHeight = !1,
                    this.speedDrop = !1)
                },
                endJump: function() {
                    this.reachedMinHeight && this.jumpVelocity < this.config.DROP_VELOCITY && (this.jumpVelocity = this.config.DROP_VELOCITY)
                },
                updateJump: function(t, i) {
                    var s = t / m.animFrames[this.status].msPerFrame;
                    this.speedDrop ? this.yPos += Math.round(this.jumpVelocity * this.config.SPEED_DROP_COEFFICIENT * s) : this.yPos += Math.round(this.jumpVelocity * s),
                    this.jumpVelocity += this.config.GRAVITY * s,
                    (this.yPos < this.minJumpHeight || this.speedDrop) && (this.reachedMinHeight = !0),
                    (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) && this.endJump(),
                    this.yPos > this.groundYPos && (this.reset(),
                    this.jumpCount++)
                },
                setSpeedDrop: function() {
                    this.speedDrop = !0,
                    this.jumpVelocity = 1
                },
                setDuck: function(t) {
                    t && this.status !== m.status.DUCKING ? (this.update(0, m.status.DUCKING),
                    this.ducking = !0) : this.status === m.status.DUCKING && (this.update(0, m.status.RUNNING),
                    this.ducking = !1)
                },
                reset: function() {
                    this.xPos = this.xInitialPos,
                    this.yPos = this.groundYPos,
                    this.jumpVelocity = 0,
                    this.jumping = !1,
                    this.ducking = !1,
                    this.update(0, m.status.RUNNING),
                    this.midair = !1,
                    this.speedDrop = !1,
                    this.jumpCount = 0
                }
            },
            f.dimensions = {
                WIDTH: 10,
                HEIGHT: 13,
                DEST_WIDTH: 11
            },
            f.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120],
            f.config = {
                MAX_DISTANCE_UNITS: 5,
                ACHIEVEMENT_DISTANCE: 100,
                COEFFICIENT: .025,
                FLASH_DURATION: 250,
                FLASH_ITERATIONS: 3,
                HIGH_SCORE_HIT_AREA_PADDING: 4
            },
            f.prototype = {
                init: function(t) {
                    var i = "";
                    this.calcXPos(t),
                    this.maxScore = this.maxScoreUnits;
                    for (var s = 0; s < this.maxScoreUnits; s++)
                        this.draw(s, 0),
                        this.defaultString += "0",
                        i += "9";
                    this.maxScore = parseInt(i, 10)
                },
                calcXPos: function(t) {
                    this.x = t - f.dimensions.DEST_WIDTH * (this.maxScoreUnits + 1)
                },
                draw: function(t, i, s) {
                    var n = f.dimensions.WIDTH
                      , h = f.dimensions.HEIGHT
                      , o = f.dimensions.WIDTH * i
                      , a = 0
                      , r = t * f.dimensions.DEST_WIDTH
                      , c = this.y
                      , d = f.dimensions.WIDTH
                      , l = f.dimensions.HEIGHT;
                    if (e && (n *= 2,
                    h *= 2,
                    o *= 2),
                    o += this.spritePos.x,
                    a += this.spritePos.y,
                    this.canvasCtx.save(),
                    s) {
                        var u = this.x - 2 * this.maxScoreUnits * f.dimensions.WIDTH;
                        this.canvasCtx.translate(u, this.y)
                    } else
                        this.canvasCtx.translate(this.x, this.y);
                    this.canvasCtx.drawImage(this.image, o, a, n, h, r, c, d, l),
                    this.canvasCtx.restore()
                },
                getActualDistance: function(t) {
                    return t ? Math.round(t * this.config.COEFFICIENT) : 0
                },
                update: function(t, i) {
                    var s = !0
                      , e = !1;
                    if (this.achievement)
                        this.flashIterations <= this.config.FLASH_ITERATIONS ? (this.flashTimer += t,
                        this.flashTimer < this.config.FLASH_DURATION ? s = !1 : this.flashTimer > 2 * this.config.FLASH_DURATION && (this.flashTimer = 0,
                        this.flashIterations++)) : (this.achievement = !1,
                        this.flashIterations = 0,
                        this.flashTimer = 0);
                    else if ((i = this.getActualDistance(i)) > this.maxScore && this.maxScoreUnits == this.config.MAX_DISTANCE_UNITS ? (this.maxScoreUnits++,
                    this.maxScore = parseInt(this.maxScore + "9", 10)) : this.distance = 0,
                    i > 0) {
                        i % this.config.ACHIEVEMENT_DISTANCE == 0 && (this.achievement = !0,
                        this.flashTimer = 0,
                        e = !0);
                        var n = (this.defaultString + i).substr(-this.maxScoreUnits);
                        this.digits = n.split("")
                    } else
                        this.digits = this.defaultString.split("");
                    if (s)
                        for (var h = this.digits.length - 1; h >= 0; h--)
                            this.draw(h, parseInt(this.digits[h], 10));
                    return this.drawHighScore(),
                    e
                },
                drawHighScore: function() {
                    this.canvasCtx.save(),
                    this.canvasCtx.globalAlpha = .8;
                    for (var t = this.highScore.length - 1; t >= 0; t--)
                        this.draw(t, parseInt(this.highScore[t], 10), !0);
                    this.canvasCtx.restore()
                },
                setHighScore: function(t) {
                    t = this.getActualDistance(t);
                    var i = (this.defaultString + t).substr(-this.maxScoreUnits);
                    this.highScore = ["10", "11", ""].concat(i.split(""))
                },
                hasClickedOnHighScore: function(t) {
                    var i = 0
                      , s = 0;
                    if (t.touches) {
                        var e = this.canvas.getBoundingClientRect();
                        i = t.touches[0].clientX - e.left,
                        s = t.touches[0].clientY - e.top
                    } else
                        i = t.offsetX,
                        s = t.offsetY;
                    return this.highScoreBounds = this.getHighScoreBounds(),
                    i >= this.highScoreBounds.x && i <= this.highScoreBounds.x + this.highScoreBounds.width && s >= this.highScoreBounds.y && s <= this.highScoreBounds.y + this.highScoreBounds.height
                },
                getHighScoreBounds: function() {
                    return {
                        x: this.x - 2 * this.maxScoreUnits * f.dimensions.WIDTH - f.config.HIGH_SCORE_HIT_AREA_PADDING,
                        y: this.y,
                        width: f.dimensions.WIDTH * (this.highScore.length + 1) + f.config.HIGH_SCORE_HIT_AREA_PADDING,
                        height: f.dimensions.HEIGHT + 2 * f.config.HIGH_SCORE_HIT_AREA_PADDING
                    }
                },
                flashHighScore: function() {
                    var t = r()
                      , i = t - (this.frameTimeStamp || t)
                      , s = !0;
                    this.frameTimeStamp = t,
                    this.flashIterations > 2 * this.config.FLASH_ITERATIONS ? this.cancelHighScoreFlashing() : (this.flashTimer += i,
                    this.flashTimer < this.config.FLASH_DURATION ? s = !1 : this.flashTimer > 2 * this.config.FLASH_DURATION && (this.flashTimer = 0,
                    this.flashIterations++),
                    s ? this.drawHighScore() : this.clearHighScoreBounds(),
                    this.flashingRafId = requestAnimationFrame(this.flashHighScore.bind(this)))
                },
                clearHighScoreBounds: function() {
                    this.canvasCtx.save(),
                    this.canvasCtx.fillStyle = "#fff",
                    this.canvasCtx.rect(this.highScoreBounds.x, this.highScoreBounds.y, this.highScoreBounds.width, this.highScoreBounds.height),
                    this.canvasCtx.fill(),
                    this.canvasCtx.restore()
                },
                startHighScoreFlashing: function() {
                    this.highScoreFlashing = !0,
                    this.flashHighScore()
                },
                isHighScoreFlashing: function() {
                    return this.highScoreFlashing
                },
                cancelHighScoreFlashing: function() {
                    this.flashingRafId && cancelAnimationFrame(this.flashingRafId),
                    this.flashIterations = 0,
                    this.flashTimer = 0,
                    this.highScoreFlashing = !1,
                    this.clearHighScoreBounds(),
                    this.drawHighScore()
                },
                resetHighScore: function() {
                    this.setHighScore(0),
                    this.cancelHighScoreFlashing()
                },
                reset: function() {
                    this.update(0, 0),
                    this.achievement = !1
                }
            },
            p.config = {
                HEIGHT: 14,
                HEIGHT_BALLOON: 34,
                MAX_CLOUD_GAP: 300,
                MAX_SKY_LEVEL: 30,
                MIN_CLOUD_GAP: 100,
                MIN_SKY_LEVEL: 71,
                WIDTH: 46,
                WIDTH_BALLOON: 16
            },
            p.prototype = {
                init: function() {
                    this.yPos = o(p.config.MAX_SKY_LEVEL, p.config.MIN_SKY_LEVEL),
                    this.draw()
                },
                draw: function() {
                    this.canvasCtx.save();
                    var t = this.isBalloon ? p.config.WIDTH_BALLOON : p.config.WIDTH
                      , s = this.isBalloon ? p.config.HEIGHT_BALLOON : p.config.HEIGHT
                      , n = t
                      , h = s;
                    e && (t *= 2,
                    s *= 2),
                    this.canvasCtx.drawImage(i.imageSprite, this.spritePos.x, this.spritePos.y, t, s, this.xPos, this.yPos, n, h),
                    this.canvasCtx.restore()
                },
                update: function(t) {
                    this.remove || (this.xPos -= Math.ceil(t),
                    this.draw(),
                    this.isVisible() || (this.remove = !0))
                },
                isVisible: function() {
                    return this.xPos + p.config.WIDTH > 0
                }
            },
            I.config = {
                FADE_SPEED: .035,
                HEIGHT: 40,
                MOON_SPEED: .25,
                NUM_STARS: 2,
                STAR_SIZE: 9,
                STAR_SPEED: .3,
                STAR_MAX_Y: 70,
                WIDTH: 20
            },
            I.phases = [140, 120, 100, 60, 40, 20, 0],
            I.prototype = {
                update: function(t, i) {
                    if (t && 0 === this.opacity && (this.currentPhase++,
                    this.currentPhase >= I.phases.length && (this.currentPhase = 0)),
                    t && (this.opacity < 1 || 0 === this.opacity) ? this.opacity += I.config.FADE_SPEED : this.opacity > 0 && (this.opacity -= I.config.FADE_SPEED),
                    this.opacity > 0) {
                        if (this.xPos = this.updateXPos(this.xPos, I.config.MOON_SPEED),
                        this.drawStars)
                            for (var s = 0; s < I.config.NUM_STARS; s++)
                                this.stars[s].x = this.updateXPos(this.stars[s].x, I.config.STAR_SPEED);
                        this.draw()
                    } else
                        this.opacity = 0,
                        this.placeStars();
                    this.drawStars = !0
                },
                updateXPos: function(t, i) {
                    return t < -I.config.WIDTH ? t = this.containerWidth : t -= i,
                    t
                },
                draw: function() {
                    var t = 3 === this.currentPhase ? 2 * I.config.WIDTH : I.config.WIDTH
                      , s = I.config.HEIGHT
                      , n = this.spritePos.x + I.phases[this.currentPhase]
                      , h = t
                      , o = I.config.STAR_SIZE
                      , a = i.spriteDefinition.LDPI.STAR.x;
                    if (e && (t *= 2,
                    s *= 2,
                    n = this.spritePos.x + 2 * I.phases[this.currentPhase],
                    o *= 2,
                    a = i.spriteDefinition.HDPI.STAR.x),
                    this.canvasCtx.save(),
                    this.canvasCtx.globalAlpha = this.opacity,
                    this.drawStars)
                        for (var r = 0; r < I.config.NUM_STARS; r++)
                            this.canvasCtx.drawImage(i.imageSprite, a, this.stars[r].sourceY, o, o, Math.round(this.stars[r].x), this.stars[r].y, I.config.STAR_SIZE, I.config.STAR_SIZE);
                    this.canvasCtx.drawImage(i.imageSprite, n, this.spritePos.y, t, s, Math.round(this.xPos), this.yPos, h, I.config.HEIGHT),
                    this.canvasCtx.globalAlpha = 1,
                    this.canvasCtx.restore()
                },
                placeStars: function() {
                    for (var t = Math.round(this.containerWidth / I.config.NUM_STARS), s = 0; s < I.config.NUM_STARS; s++)
                        this.stars[s] = {},
                        this.stars[s].x = o(t * s, t * (s + 1)),
                        this.stars[s].y = o(0, I.config.STAR_MAX_Y),
                        this.stars[s].sourceY = e ? i.spriteDefinition.HDPI.STAR.y + 2 * I.config.STAR_SIZE * s : i.spriteDefinition.LDPI.STAR.y + I.config.STAR_SIZE * s
                },
                reset: function() {
                    this.currentPhase = 0,
                    this.opacity = 0,
                    this.update(!1)
                }
            },
            E.dimensions = {
                WIDTH: 600,
                HEIGHT: 12,
                YPOS: 127
            },
            E.prototype = {
                setSourceDimensions: function() {
                    for (var t in E.dimensions)
                        e ? "YPOS" !== t && (this.sourceDimensions[t] = 2 * E.dimensions[t]) : this.sourceDimensions[t] = E.dimensions[t],
                        this.dimensions[t] = E.dimensions[t];
                    this.xPos = [0, E.dimensions.WIDTH],
                    this.yPos = E.dimensions.YPOS
                },
                getRandomType: function() {
                    return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0
                },
                draw: function() {
                    this.canvasCtx.drawImage(i.imageSprite, this.sourceXPos[0], this.spritePos.y, this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT, this.xPos[0], this.yPos, this.dimensions.WIDTH, this.dimensions.HEIGHT),
                    this.canvasCtx.drawImage(i.imageSprite, this.sourceXPos[1], this.spritePos.y, this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT, this.xPos[1], this.yPos, this.dimensions.WIDTH, this.dimensions.HEIGHT)
                },
                updateXPos: function(t, i) {
                    var s = t
                      , e = 0 === t ? 1 : 0;
                    this.xPos[s] -= i,
                    this.xPos[e] = this.xPos[s] + this.dimensions.WIDTH,
                    this.xPos[s] <= -this.dimensions.WIDTH && (this.xPos[s] += 2 * this.dimensions.WIDTH,
                    this.xPos[e] = this.xPos[s] - this.dimensions.WIDTH,
                    this.sourceXPos[s] = this.getRandomType() + this.spritePos.x)
                },
                update: function(t, i) {
                    var e = Math.floor(i * (s / 1e3) * t);
                    this.xPos[0] <= 0 ? this.updateXPos(0, e) : this.updateXPos(1, e),
                    this.draw()
                },
                reset: function() {
                    this.xPos[0] = 0,
                    this.xPos[1] = E.dimensions.WIDTH
                }
            },
            S.config = {
                BG_CLOUD_SPEED: .2,
                BUMPY_THRESHOLD: .3,
                CLOUD_FREQUENCY: .5,
                HORIZON_HEIGHT: 16,
                MAX_CLOUDS: 6
            },
            S.prototype = {
                init: function() {
                    this.addCloud(),
                    this.horizonLine = new E(this.canvas,this.spritePos.HORIZON),
                    this.nightMode = new I(this.canvas,this.spritePos.MOON,this.dimensions.WIDTH)
                },
                enableBdayMode: function() {
                    this.bdayModeActive = !0,
                    this.removeFirstObstacle()
                },
                update: function(t, i, s, e) {
                    this.runningTime += t,
                    this.horizonLine.update(t, i),
                    this.nightMode.update(e),
                    this.updateClouds(t, i),
                    s && this.updateObstacles(t, i)
                },
                updateClouds: function(t, i) {
                    var s = this.cloudSpeed / 1e3 * t * i
                      , e = this.clouds.length;
                    if (e) {
                        for (var n = e - 1; n >= 0; n--)
                            this.clouds[n].update(s);
                        var h = this.clouds[e - 1];
                        e < this.config.MAX_CLOUDS && this.dimensions.WIDTH - h.xPos > h.cloudGap && this.cloudFrequency > Math.random() && this.addCloud(),
                        this.clouds = this.clouds.filter(function(t) {
                            return !t.remove
                        })
                    } else
                        this.addCloud()
                },
                updateObstacles: function(t, i) {
                    for (var s = this.obstacles.slice(0), e = 0; e < this.obstacles.length; e++) {
                        var n = this.obstacles[e];
                        n.update(t, i),
                        n.remove && s.shift()
                    }
                    if (this.obstacles = s,
                    this.obstacles.length > 0) {
                        var h = this.obstacles[this.obstacles.length - 1];
                        h && !h.followingObstacleCreated && h.isVisible() && h.xPos + h.width + h.gap < this.dimensions.WIDTH && (this.addNewObstacle(i),
                        h.followingObstacleCreated = !0)
                    } else
                        this.addNewObstacle(i)
                },
                removeFirstObstacle: function() {
                    this.obstacles.shift()
                },
                addNewObstacle: function(t) {
                    var s = o(0, i.isBdayModeEnabled() && !this.bdayModeActive ? T.types.length - 1 : T.types.length - 2)
                      , e = T.types[s];
                    if (this.duplicateObstacleCheck(e.type) || t < e.minSpeed)
                        this.addNewObstacle(t);
                    else {
                        var n = this.spritePos[e.type];
                        this.obstacles.push(new T(this.canvasCtx,e,n,this.dimensions,this.gapCoefficient,t,e.width)),
                        this.obstacleHistory.unshift(e.type),
                        this.obstacleHistory.length > 1 && this.obstacleHistory.splice(i.config.MAX_OBSTACLE_DUPLICATION)
                    }
                },
                duplicateObstacleCheck: function(t) {
                    for (var s = 0, e = 0; e < this.obstacleHistory.length; e++)
                        s = this.obstacleHistory[e] === t ? s + 1 : 0;
                    return s >= i.config.MAX_OBSTACLE_DUPLICATION
                },
                reset: function() {
                    this.obstacles = [],
                    this.horizonLine.reset(),
                    this.nightMode.reset()
                },
                resize: function(t, i) {
                    this.canvas.width = t,
                    this.canvas.height = i
                },
                addCloud: function() {
                    var t = this.bdayModeActive && o(0, 1) > 0 ? this.spritePos.BALLOON : this.spritePos.CLOUD;
                    this.clouds.push(new p(this.canvas,t,this.dimensions.WIDTH,t == this.spritePos.BALLOON))
                }
            },
            new i("#game",{
                ACCELERATION: .001,
                BG_CLOUD_SPEED: .2,
                BOTTOM_PAD: 10,
                BOTTOM_PAD_BDAY: 26,
                BDAY_FLASH_DURATION: 1e3,
                BDAY_Y_POS_ADJUST: 16,
                CLEAR_TIME: 3e3,
                CLOUD_FREQUENCY: .5,
                GAMEOVER_CLEAR_TIME: 750,
                GAP_COEFFICIENT: .6,
                GRAVITY: .6,
                INITIAL_JUMP_VELOCITY: 12,
                INVERT_FADE_DURATION: 12e3,
                INVERT_DISTANCE: 700,
                MAX_BLINK_COUNT: 3,
                MAX_CLOUDS: 6,
                MAX_OBSTACLE_LENGTH: 3,
                MAX_OBSTACLE_DUPLICATION: 2,
                MAX_SPEED: 13,
                MIN_JUMP_HEIGHT: 35,
                MOBILE_SPEED_COEFFICIENT: 1.2,
                RESOURCE_TEMPLATE_ID: "audio-resources",
                SPEED: 6,
                SPEED_DROP_COEFFICIENT: 3,
                ARCADE_MODE_INITIAL_TOP_POSITION: 35,
                ARCADE_MODE_TOP_POSITION_PERCENT: .1
            })
        }(),
        "serviceWorker"in navigator && (navigator.serviceWorker.controller || navigator.serviceWorker.register("https://offline-dino-game.firebaseapp.com/sw.js", {
            scope: "./"
        }));
        var i = function(t) {
            var i, s = function(s) {
                i && (i.prompt(),
                i.userChoice.then(function(s) {
                    i = null,
                    t.classList.remove("available")
                }).catch(function(s) {
                    i = null,
                    t.classList.remove("available")
                }))
            };
            window.addEventListener("beforeinstallprompt", function(s) {
                return (i = s).preventDefault(),
                t.classList.add("available"),
                !1
            }),
            window.addEventListener("appinstalled", function(s) {
                i = null,
                t.classList.remove("available")
            }),
            t.addEventListener("click", s.bind(this)),
            t.addEventListener("touchend", s.bind(this))
        }
          , s = document.getElementById("installer")
          , e = new i(s);
    }
    , {
        "./sw.js": [["sw.js", "NqYy"], "NqYy"]
    }]
}, {}, ["QcRT"], null)
