'use strict';

exports.__esModule = true;
exports.Video = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _Box = require('../Box');

var _Button = require('../Button');

var _Menu = require('../Menu');

var _Meter = require('../Meter');

var _Stack = require('../Stack');

var _Text = require('../Text');

var _hocs = require('../hocs');

var _utils = require('../../utils');

var _StyledVideo = require('./StyledVideo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Split the volume control into 6 segments. Empirically determined.
var VOLUME_STEP = 0.166667;

var formatTime = function formatTime(time) {
  var minutes = Math.round(time / 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var seconds = Math.round(time) % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
};

var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

var Video = function (_Component) {
  _inherits(Video, _Component);

  Video.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef;
    var videoRef = prevState.videoRef;

    var nextVideoRef = forwardRef || videoRef;
    if (nextVideoRef !== videoRef) {
      return { videoRef: nextVideoRef };
    }
    return null;
  };

  function Video(props) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      captions: [],
      scrubberRef: _react2.default.createRef(),
      videoRef: _react2.default.createRef()
    };
    _this.hasPlayed = false;

    _this.injectUpdateVideoEvents = function () {
      return videoEvents.reduce(function (previousValue, currentValue) {
        var nextValue = _extends({}, previousValue);
        nextValue[currentValue] = function (e) {
          if (currentValue in _this.props && typeof _this.props[currentValue] === 'function') {
            _this.props[currentValue](e);
          }
          _this.update();
        };

        return nextValue;
      }, {});
    };

    _this.update = function () {
      var videoRef = _this.state.videoRef;

      var video = (0, _reactDom.findDOMNode)(videoRef.current);
      // Set flag for Video first play
      if (!_this.hasPlayed && !video.paused && !video.loading || video.currentTime) {
        _this.hasPlayed = true;
      }

      var interacting = _this.state.interacting;
      if (video.ended) {
        interacting = false;
      }

      _this.setState({
        duration: video.duration,
        currentTime: video.currentTime,
        // buffered: video.buffered,
        // paused: video.paused,
        // muted: video.muted,
        volume: video.volume,
        // ended: video.ended,
        // readyState: video.readyState,
        interacting: interacting,
        // computed values
        // hasPlayed: this.hasPlayed,
        playing: !video.paused && !video.loading,
        // percentageBuffered: video.buffered.length &&
        //   (video.buffered.end(video.buffered.length - 1) /
        //   video.duration) * 100,
        percentagePlayed: video.currentTime / video.duration * 100
        // loading: video.readyState < video.HAVE_ENOUGH_DATA,
      });
    };

    _this.play = function () {
      var videoRef = _this.state.videoRef;

      (0, _reactDom.findDOMNode)(videoRef.current).play();
    };

    _this.pause = function () {
      var videoRef = _this.state.videoRef;

      (0, _reactDom.findDOMNode)(videoRef.current).pause();
    };

    _this.scrub = function (event) {
      var _this$state = _this.state,
          duration = _this$state.duration,
          scrubberRef = _this$state.scrubberRef;

      if (scrubberRef.current) {
        var scrubberRect = (0, _reactDom.findDOMNode)(scrubberRef.current).getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        _this.setState({ scrubTime: duration * percent });
      }
    };

    _this.seek = function (event) {
      var _this$state2 = _this.state,
          duration = _this$state2.duration,
          scrubberRef = _this$state2.scrubberRef,
          videoRef = _this$state2.videoRef;

      if (scrubberRef.current) {
        var scrubberRect = (0, _reactDom.findDOMNode)(scrubberRef.current).getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        (0, _reactDom.findDOMNode)(videoRef.current).currentTime = duration * percent;
      }
    };

    _this.unmute = function () {
      var videoRef = _this.state.videoRef;

      (0, _reactDom.findDOMNode)(videoRef.current).muted = false;
    };

    _this.mute = function () {
      var videoRef = _this.state.videoRef;

      (0, _reactDom.findDOMNode)(videoRef.current).muted = true;
    };

    _this.louder = function () {
      var videoRef = _this.state.videoRef;

      (0, _reactDom.findDOMNode)(videoRef.current).volume += VOLUME_STEP;
    };

    _this.quieter = function () {
      var videoRef = _this.state.videoRef;

      (0, _reactDom.findDOMNode)(videoRef.current).volume -= VOLUME_STEP;
    };

    _this.fullscreen = function () {
      var videoRef = _this.state.videoRef;

      var video = (0, _reactDom.findDOMNode)(videoRef.current);
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else {
        console.warn('Your browser doesn\'t support fullscreen.');
      }
    };

    _this.interactionStart = function () {
      _this.setState({ interacting: true });
      clearTimeout(_this.interactionTimer);
      _this.interactionTimer = setTimeout(_this.interactionStop, 3000);
    };

    _this.interactionStop = function () {
      var focus = _this.state.focus;

      if (!focus && !_this.unmounted) {
        _this.setState({ interacting: false });
      }
    };

    _this.restate = function () {
      var _this$state3 = _this.state,
          captions = _this$state3.captions,
          height = _this$state3.height,
          videoRef = _this$state3.videoRef,
          width = _this$state3.width;

      var video = (0, _reactDom.findDOMNode)(videoRef.current);

      if (video.videoHeight) {
        // set the size based on the video aspect ratio
        var rect = video.getBoundingClientRect();
        var ratio = rect.width / rect.height;
        var videoRatio = video.videoWidth / video.videoHeight;
        if (videoRatio > ratio) {
          var nextHeight = rect.width / videoRatio;
          if (nextHeight !== height) {
            _this.setState({ height: nextHeight, width: undefined });
          }
        } else {
          var nextWidth = rect.height * videoRatio;
          if (nextWidth !== width) {
            _this.setState({ height: undefined, width: nextWidth });
          }
        }
      }

      // remember the state of the text tracks for subsequent rendering
      var textTracks = video.textTracks;
      if (textTracks.length > 0) {
        if (textTracks.length === 1) {
          var active = textTracks[0].mode === 'showing';
          if (!captions || !captions[0] || captions[0].active !== active) {
            _this.setState({ captions: [{ active: active }] });
          }
        } else {
          var nextCaptions = [];
          var set = false;
          for (var i = 0; i < textTracks.length; i += 1) {
            var track = textTracks[i];
            var _active = track.mode === 'showing';
            nextCaptions.push({ label: track.label, active: _active });
            if (!captions || !captions[i] || captions[i].active !== _active) {
              set = true;
            }
          }
          if (set) {
            _this.setState({ captions: nextCaptions });
          }
        }
      }
    };

    _this.update = (0, _utils.throttle)(_this.update, 100, _this);
    _this.mediaEventProps = _this.injectUpdateVideoEvents();
    return _this;
  }

  Video.prototype.componentDidMount = function componentDidMount() {
    var mute = this.props.mute;
    var videoRef = this.state.videoRef;

    var video = (0, _reactDom.findDOMNode)(videoRef.current);

    if (mute) {
      this.mute();
    }

    // hide all captioning to start with
    var textTracks = video.textTracks;
    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = 'hidden';
    }

    this.restate();
  };

  Video.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.autoPlay && !prevProps.autoPlay) {
      // Caller wants the video to play now.
      this.play();
    }
    this.restate();
  };

  Video.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
  };

  Video.prototype.showCaptions = function showCaptions(index) {
    var videoRef = this.state.videoRef;

    var textTracks = (0, _reactDom.findDOMNode)(videoRef.current).textTracks;
    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = i === index ? 'showing' : 'hidden';
    }
    // Using forceUpdate to force redraw of controls when changing captions
    this.forceUpdate();
  };

  Video.prototype.renderControls = function renderControls() {
    var _this2 = this;

    var _props = this.props,
        controls = _props.controls,
        theme = _props.theme;
    var _state = this.state,
        captions = _state.captions,
        currentTime = _state.currentTime,
        duration = _state.duration,
        interacting = _state.interacting,
        percentagePlayed = _state.percentagePlayed,
        playing = _state.playing,
        scrubberRef = _state.scrubberRef,
        scrubTime = _state.scrubTime,
        volume = _state.volume;

    var over = controls === 'over';
    var background = over && (theme.video.controls && theme.video.controls.background || { color: 'dark-2', opacity: 'strong' });
    var iconColor = over && (theme.video.icons.color || 'light-1');

    var formattedTime = formatTime(scrubTime || currentTime || duration);

    var Icons = {
      ClosedCaption: theme.video.icons.closedCaption,
      Configure: theme.video.icons.configure,
      FullScreen: theme.video.icons.fullScreen,
      Pause: theme.video.icons.pause,
      Play: theme.video.icons.play,
      ReduceVolume: theme.video.icons.reduceVolume,
      Volume: theme.video.icons.volume
    };

    var captionControls = captions.map(function (caption) {
      return {
        icon: caption.label ? undefined : _react2.default.createElement(Icons.ClosedCaption, { color: iconColor }),
        label: caption.label,
        active: caption.active,
        onClick: function onClick() {
          return _this2.showCaptions(caption.active ? -1 : 0);
        }
      };
    });

    return _react2.default.createElement(
      _StyledVideo.StyledVideoControls,
      {
        over: over,
        active: !this.hasPlayed || controls === 'below' || over && interacting
      },
      _react2.default.createElement(
        _Box.Box,
        {
          direction: 'row',
          align: 'center',
          justify: 'between',
          background: background
        },
        _react2.default.createElement(_Button.Button, {
          icon: playing ? _react2.default.createElement(Icons.Pause, { color: iconColor }) : _react2.default.createElement(Icons.Play, { color: iconColor }),
          hoverIndicator: 'background',
          onClick: playing ? this.pause : this.play
        }),
        _react2.default.createElement(
          _Box.Box,
          { direction: 'row', align: 'center', flex: true },
          _react2.default.createElement(
            _Box.Box,
            { flex: true },
            _react2.default.createElement(
              _Stack.Stack,
              null,
              _react2.default.createElement(_Meter.Meter, {
                'aria-label': 'Video progress',
                background: over && (theme.video.scrubber && theme.video.scrubber.track.color || 'dark-3'),
                size: 'full',
                thickness: 'small',
                values: [{ value: percentagePlayed || 0 }]
              }),
              _react2.default.createElement(_StyledVideo.StyledVideoScrubber, {
                ref: scrubberRef,
                tabIndex: 0,
                role: 'button',
                value: scrubTime ? Math.round(scrubTime / duration * 100) : undefined,
                onMouseMove: this.scrub,
                onMouseLeave: function onMouseLeave() {
                  return _this2.setState({ scrubTime: undefined });
                },
                onClick: this.seek,
                theme: theme
              })
            )
          ),
          _react2.default.createElement(
            _Box.Box,
            { pad: { horizontal: 'small' } },
            _react2.default.createElement(
              _Text.Text,
              { margin: 'none' },
              formattedTime
            )
          )
        ),
        _react2.default.createElement(_Menu.Menu, {
          icon: _react2.default.createElement(Icons.Configure, { color: iconColor }),
          dropAlign: { bottom: 'top', right: 'right' },
          dropBackground: background,
          items: [{
            icon: _react2.default.createElement(Icons.Volume, { color: iconColor }),
            onClick: volume <= 1 - VOLUME_STEP ? this.louder : undefined,
            close: false
          }, {
            icon: _react2.default.createElement(Icons.ReduceVolume, { color: iconColor }),
            onClick: volume >= VOLUME_STEP ? this.quieter : undefined,
            close: false
          }].concat(captionControls, [{
            icon: _react2.default.createElement(Icons.FullScreen, { color: iconColor }),
            onClick: this.fullscreen
          }])
        })
      )
    );
  };

  Video.prototype.render = function render() {
    var _props2 = this.props,
        autoPlay = _props2.autoPlay,
        children = _props2.children,
        controls = _props2.controls,
        loop = _props2.loop,
        theme = _props2.theme,
        rest = _objectWithoutProperties(_props2, ['autoPlay', 'children', 'controls', 'loop', 'theme']);

    var _state2 = this.state,
        height = _state2.height,
        videoRef = _state2.videoRef,
        width = _state2.width;


    var controlsElement = controls ? this.renderControls() : undefined;

    var mouseEventListeners = void 0;
    if (controls === 'over') {
      mouseEventListeners = {
        onMouseEnter: this.interactionStart,
        onMouseMove: this.interactionStart,
        onTouchStart: this.interactionStart
      };
    }

    var style = void 0;
    if (rest.fit === 'contain' && controls === 'over') {
      // constrain the size to fit the aspect ratio so the controls overlap correctly
      if (width) {
        style = { width: width };
      } else if (height) {
        style = { height: height };
      }
    }

    return _react2.default.createElement(
      _StyledVideo.StyledVideoContainer,
      _extends({}, mouseEventListeners, { theme: theme, style: style }),
      _react2.default.createElement(
        _StyledVideo.StyledVideo,
        _extends({}, rest, {
          ref: videoRef,
          theme: theme
        }, this.mediaEventProps, {
          autoPlay: autoPlay || false,
          loop: loop || false
        }),
        children
      ),
      controlsElement
    );
  };

  return Video;
}(_react.Component);

Video.defaultProps = {
  controls: 'over'
};


var VideoDoc = void 0;
if (process.env.NODE_ENV !== 'production') {
  VideoDoc = require('./doc').doc(Video); // eslint-disable-line global-require
}
var VideoWrapper = (0, _recompose.compose)(_hocs.withTheme, _hocs.withForwardRef)(VideoDoc || Video);

exports.Video = VideoWrapper;