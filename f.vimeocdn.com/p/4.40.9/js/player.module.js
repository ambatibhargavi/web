/* VimeoPlayer - v4.40.9 - 2025-02-27 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    C as r,
    c as a,
    b as l,
    e as s,
    u as c,
    L as d,
    g as u,
    f as _,
    x as p,
    h as m,
    j as v,
    t as f,
    k as h,
    l as g,
    V as E,
    m as b,
    n as C,
    o as y,
    r as T,
    p as L,
    P as A,
    G as I,
    q as S,
    v as O,
    T as P,
    w as R,
    y as N,
    E as w,
    z as D,
    A as k,
    B as M,
    D as V,
    F as B,
    H as x,
    Q as U,
    S as H,
    I as F,
    J as G,
    K as W,
    R as Y,
    M as $,
    N as K,
    O as q,
    U as j,
    W as z,
    X,
    Y as Z,
    Z as Q,
    $ as J,
    a0 as ee,
    a1 as te,
    a2 as ne,
    a3 as ie,
    a4 as oe,
    a5 as re,
    a6 as ae,
    a7 as le,
    a8 as se,
    a9 as ce,
    aa as de,
    ab as ue,
    ac as _e,
    ad as pe,
    ae as me,
    af as ve,
    ag as fe,
    ah as he,
    ai as ge,
    aj as Ee,
    ak as be,
    al as Ce,
    am as ye,
    an as Te,
    ao as Le,
    ap as Ae,
    aq as Ie,
    ar as Se,
    as as Oe,
    at as Pe,
    au as Re,
    av as Ne,
    aw as we,
    ax as De,
    ay as ke,
    az as Me,
    aA as Ve,
    aB as Be,
    aC as xe,
    aD as Ue,
    aE as He,
    aF as Fe,
    aG as Ge,
    aH as We,
    aI as Ye,
    aJ as $e,
    aK as Ke,
    aL as qe,
    aM as je,
    aN as ze,
    aO as Xe,
    aP as Ze,
    aQ as Qe,
    aR as Je,
    aS as et,
    aT as tt,
    aU as nt,
    aV as it,
    aW as ot,
    aX as rt,
    aY as at,
    aZ as lt,
    a_ as st,
    a$ as ct,
    b0 as dt
} from "./vendor.module.js";
export {
    aa as BigScreen, b0 as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
let ut = {};

function _t(e = "", t = {}) {
    var n;
    if (null != (n = ut.en) && n[e] && (e = ut.en[e]), Object.keys(t).forEach((n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        })), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function pt(e) {
    let t, n, i;
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? (i = Math.floor(e / 1e3), t = Math.round(e % 1e3 / 100), i + "." + t + "K") : (n = Math.floor(e / 1e6), t = Math.round(e % 1e6 / 1e5), n + "." + t + "M")
}

function mt(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}

function vt(e) {
    return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, ((e, t) => String.fromCharCode("0x" + t)))
}
const ft = function(t) {
        const n = i => i.length >= t.length ? t.apply(this, i) : (...t) => n([].concat(e(i), t));
        return n([])
    }(((e, t) => Object.keys(e).every((n => e[n] === t[n])))),
    ht = (e = []) => ({
        get: t => t ? e.find(ft(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(ft(t)), 1).pop()
    });

function gt(e, t, n = document.styleSheets[0]) {
    try {
        n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
    } catch (De) {}
}

function Et(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function bt(e) {
    try {
        return new URL(e).origin
    } catch (De) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function Ct({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        l = n - i * a,
        s = i - n / a;
    if (l > 0 && l < o || s > 0 && s < o) {
        const e = n / (n - l),
            t = i / (i - s);
        r = St(Math.max(e, t), 3)
    }
    return {
        extraWidth: l,
        extraHeight: s,
        scaleFactor: r
    }
}

function yt(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function Tt(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let l = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        s = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${s},top=${l},${c}`)
}

function Lt(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work))|(videoji|videoshipinurl)\.(hk|cn))(?=$|\/)/.test(e)
    }(e) ? bt(e) : ""
}

function At(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.((vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)|(videoji|videoshipinurl)\.(hk|cn))\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = It(i),
        a = t(window.location.search),
        l = t(`${i}`.split("?")[1]),
        s = Object.assign(a, l, o);
    return n(`${e}/video/${r}/config`, s)
}

function It(e) {
    if (mt(e)) return parseInt(e, 10);
    const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
    if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
    return parseInt(t[2], 10)
}

function St(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Ot(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function Pt(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) Pt(e, i, t[i])
}

function Rt(e, t, n) {
    n.forEach((n => {
        e(n, ((...e) => {
            t.apply(void 0, [n].concat(e))
        }))
    }))
}

function Nt(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function wt(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce(((e, t) => (...n) => e(t.apply(void 0, n))))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (; null != (n = e) && n.parentElement && !Ot(e, t);) {
        var n;
        e = e.parentElement
    }
    return Ot(e, t) ? e : null
}));
let Dt = 0;

function kt(e = "p") {
    return `${e}${++Dt}`
}
const Mt = {
        _spatialUnsupported: kt(),
        _spatialFailure: kt()
    },
    Vt = "vimeo-logo",
    Bt = "video-title",
    xt = "video-byline",
    Ut = "video-portrait",
    Ht = "chapter-share-base",
    Ft = "anybody",
    Gt = "nobody",
    Wt = "password",
    Yt = "disable",
    $t = "ptv",
    Kt = "unlisted",
    qt = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    jt = {
        _seek: kt(),
        _changeVolume: kt(),
        _changeMuted: kt(),
        _showOverlay: kt(),
        _reset: kt(),
        _changeLoop: kt(),
        _changeQuality: kt(),
        _openVimeo: kt(),
        _changeColor: kt(),
        _disableVolume: kt(),
        _enableVolume: kt(),
        _disableCaptions: kt(),
        _enableCaptions: kt(),
        _forceFullscreen: kt(),
        _turnCaptionsOn: kt(),
        _turnCaptionsOff: kt(),
        _changeCaptionsStyles: kt(),
        _resetCaptionsStyles: kt(),
        _toggleNativeControls: kt(),
        _showOutro: kt(),
        _hideOutro: kt(),
        _setControlsVisibility: kt(),
        _overrideControlbarBehavior: kt(),
        _activatePictureInPicture: kt(),
        _deactivatePictureInPicture: kt(),
        _attachSpatialPlaybackEvents: kt(),
        _toggleSpatialPlayback: kt(),
        _revealSpatialControls: kt(),
        _setTime: kt(),
        _addCard: kt(),
        _removeCard: kt(),
        _changePlaybackRate: kt(),
        _destroy: kt(),
        _changeAudioTrack: kt(),
        _requestCompleteLiveSubtitles: kt(),
        _openRemoteComponent: kt(),
        _closeRemoteComponent: kt(),
        _updateLiveSubtitleRequests: kt(),
        _showVideoThumbnail: kt(),
        _hideVideoThumbnail: kt(),
        _showLocalAccessGate: kt()
    },
    zt = {
        _apiError: kt(),
        _error: kt(),
        _playRejected: kt(),
        _playResolved: kt(),
        _paused: kt(),
        _pausedForAd: kt(),
        _resumedAfterAd: kt(),
        _ended: kt(),
        _volumeChanged: kt(),
        _mutedChanged: kt(),
        _qualityChanged: kt(),
        _targetTimeReached: kt(),
        _cuepoint: kt(),
        _firstTimeUpdate: kt(),
        _playbackRateChanged: kt(),
        _nudgeAttempted: kt(),
        _showNudgeNotification: kt(),
        _nudgeEnded: kt(),
        _fragmentChanged: kt(),
        _fullscreenButtonPressed: kt(),
        _pauseButtonPressed: kt(),
        _playButtonPressed: kt(),
        _prefsButtonPressed: kt(),
        _ccButtonPressed: kt(),
        _chapterSeekAttempted: kt(),
        _chapterSeek: kt(),
        _chapterHoverStateOn: kt(),
        _chapterHoverStateOff: kt(),
        _chapterChanged: kt(),
        _scrubbingStarted: kt(),
        _scrubbingEnded: kt(),
        _volumeScrubbingStarted: kt(),
        _volumeScrubbingEnded: kt(),
        _controlBarVisibilityChanged: kt(),
        _toastVisibilityChanged: kt(),
        _sidedockVisibilityChanged: kt(),
        _menuVisibilityChanged: kt(),
        _captionsChanged: kt(),
        _cuePointAdded: kt(),
        _cuePointRemoved: kt(),
        _stereoscopicButtonPressed: kt(),
        _menuPanelOpened: kt(),
        _menuPanelClosed: kt(),
        _menuCentered: kt(),
        _badgePressed: kt(),
        _muteAutoplayed: kt(),
        _willEnterFullscreen: kt(),
        _didEnterFullscreen: kt(),
        _willExitFullscreen: kt(),
        _didExitFullscreen: kt(),
        _likeButtonPressed: kt(),
        _watchLaterButtonPressed: kt(),
        _shareButtonPressed: kt(),
        _embedButtonPressed: kt(),
        _vodButtonPressed: kt(),
        _collectionsButtonPressed: kt(),
        _followButtonPressed: kt(),
        _overlayOpened: kt(),
        _overlayClosed: kt(),
        _facebookButtonPressed: kt(),
        _twitterButtonPressed: kt(),
        _tumblrButtonPressed: kt(),
        _emailButtonPressed: kt(),
        _embedCodeCopied: kt(),
        _popupOpened: kt(),
        _debugButtonPressed: kt(),
        _popupClosed: kt(),
        _shareViewShown: kt(),
        _embedViewShown: kt(),
        _shareViewEnd: kt(),
        _embedViewEnd: kt(),
        _showAndroidVRDeepLink: kt(),
        _debugDataChange: kt(),
        _mousedOut: kt(),
        _mousedOver: kt(),
        _mouseTimeout: kt(),
        _liked: kt(),
        _unliked: kt(),
        _addedToWatchLater: kt(),
        _removedFromWatchLater: kt(),
        _userLogIn: kt(),
        _userLoggedIn: kt(),
        _userLoggedOut: kt(),
        _loginFailure: kt(),
        _colorChanged: kt(),
        _configChanged: kt(),
        _liveEventSettingsChanged: kt(),
        _passwordUnlocked: kt(),
        _privateUnlocked: kt(),
        _enteredTinyMode: kt(),
        _enteredMiniMode: kt(),
        _enteredNormalMode: kt(),
        _assetUrlsRefreshed: kt(),
        _embedSettingChanged: kt(),
        _createInteractiveChanged: kt(),
        _ottMetadataSet: kt(),
        _outroDisplayed: kt(),
        _outroHidden: kt(),
        _outroVideoPressed: kt(),
        _becameActive: kt(),
        _becameInactive: kt(),
        _tipped: kt(),
        _loadVideo: kt(),
        _swapVideo: kt(),
        _outroLinkPressed: kt(),
        _followed: kt(),
        _unfollowed: kt(),
        _outroImagePressed: kt(),
        _outroCtaPressed: kt(),
        _cardDisplayed: kt(),
        _cardPressed: kt(),
        _spaceChanged: kt(),
        _displayContextChanged: kt(),
        _titleModuleReady: kt(),
        _sidedockModuleReady: kt(),
        _controlBarModuleReady: kt(),
        _videoModuleReady: kt(),
        _notificationModuleReady: kt(),
        _statsModuleReady: kt(),
        _apiModuleReady: kt(),
        _ready: kt(),
        _notificationHidden: kt(),
        _alertVisibilityChanged: kt(),
        _airPlayAvailable: kt(),
        _airPlayNotAvailable: kt(),
        _airPlayActivated: kt(),
        _airPlayDeactivated: kt(),
        _airPlayButtonPressed: kt(),
        _adBuffering: kt(),
        _adComplete: kt(),
        _adClicked: kt(),
        _adError: kt(),
        _adPaused: kt(),
        _adResumed: kt(),
        _adStarted: kt(),
        _adSkipped: kt(),
        _allAdsCompleted: kt(),
        _logMetric: kt(),
        _interactiveReady: kt(),
        _interactiveHotspotClicked: kt(),
        _interactiveOverlayPanelClicked: kt(),
        _interactiveMarkerClicked: kt(),
        _interactiveSeekCall: kt(),
        _transcriptChanged: kt(),
        _rightContentAreaVisibilityChange: kt(),
        _rightContentAreaEnabled: kt(),
        _rightContentAreaDisabled: kt(),
        _transcriptNavActive: kt(),
        _transcriptSessionStarted: kt(),
        _transcriptKeyPressed: kt(),
        _aiWidgetKeyPressed: kt(),
        _qoeSurveyPresented: kt(),
        _parentUrlAvailable: kt(),
        _liveEventSafeToPlay: kt(),
        _startTimeUpdated: kt(),
        _endTimeUpdated: kt(),
        _remoteComponentMounted: kt(),
        _accessGateOpened: kt(),
        _accessGateClosed: kt(),
        _accessGateUnlocked: kt(),
        _eventedStoreCreated: kt(),
        _outroDataReceived: kt(),
        _videoThumbnailLoadComplete: kt(),
        _privateLoginStatusUpdated: kt()
    },
    Xt = {
        _seek: kt(),
        _play: kt(),
        _pause: kt(),
        _playbackRateChange: kt()
    },
    Zt = "done",
    Qt = "started",
    Jt = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    en = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9
    },
    tn = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        TOAST_VISIBILITY_CHANGED: "toastvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        PLAYER_LOGIN_SUCCESSFUL: "playerLoginSuccessful",
        PLAYER_LOGIN_FAILED: "playerLoginFailed",
        COMPONENT_VISIBILITY_CHANGE: "componentVisibilityChange",
        APP_BREAKPOINT_CHANGE: "appBreakpointChange",
        LOAD_VIDEO: "loadVideo"
    },
    nn = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    on = "4.40.9",
    rn = "PROD",
    an = !0 === o.iOS,
    ln = "chapter",
    sn = ["t", "start", "at"],
    cn = "vimeo_",
    dn = `${cn}t_`,
    un = "preact-menu",
    _n = "one",
    pn = "two",
    mn = "three",
    vn = "four",
    fn = {
        [_n]: "000000",
        [pn]: "00adef",
        [mn]: "ffffff",
        [vn]: "000000"
    },
    hn = {
        [_n]: "color_one",
        [pn]: "color_two",
        [mn]: "color_three",
        [vn]: "color_four"
    },
    gn = {
        [_n]: "colorOne",
        [pn]: "colorTwo",
        [mn]: "colorThree",
        [vn]: "colorFour"
    };
var En = function(e) {
    return e.POPUP = "popup", e.ON_SITE = "onsite", e
}(En || {});
const bn = 12e3,
    Cn = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144];
let yn = function(e) {
        return e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO = "vp-video", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_TELECINE = "vp-telecine", e.VP_OVERLAY_WRAPPER = "vp-overlay-wrapper", e.VP_CONTROLS = "vp-controls", e.VP_CHAPTER_BUTTON = "vp-chapter-button", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_PREFS = "vp-prefs", e.VP_INTERACTIVE_MARKER = "vp-interactive-marker", e.VP_PROGRESS = "vp-progress", e.VP_LIVE_STATUS = "vp-live-status", e.VP_LIVE_STATUS_CIRCLE = "vp-live-status-circle", e.VP_LIVE_VIEWER_COUNT = "vp-live-viewer-count", e.VP_PIP_OVERLAY = "vp-pip-overlay", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SPIN = "vp-spin", e.VP_TOOLTIP = "vp-tooltip", e.VP_SIDEDOCK = "vp-sidedock", e.VP_BADGE = "vp-badge", e.VP_TITLE = "vp-title", e.VP_UNMUTE = "vp-unmute", e.VP_ALERT = "vp-alert", e.VP_CAPTIONS_LINE = "vp-captions-line", e.VP_OUTRO_WRAPPER = "vp-outro-wrapper", e.VP_TARGET = "vp-target", e.VP_PREVIEW = "vp-preview", e.COMPASS_WRAPPER = "compass-wrapper", e.STEREOSCOPIC = "stereoscopic", e.VOD_BUTTON = "vod-button", e.VOD_ICON = "vod-icon", e.CC = "cc", e.AIRPLAY = "airplay", e.ON = "on", e.PIP = "pip", e.VOLUME = "volume", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.CUEPOINT = "cuepoint", e.THUMB_PREVIEW = "thumb-preview", e.THUMB = "thumb", e.COLLECTIONS_BUTTON = "collections-button", e.COLLECTIONS_ICON = "collections-icon", e.LIKE_BUTTON = "like-button", e.LIKE_ICON = "like-icon", e.WATCH_LATER_BUTTON = "watch-later-button", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.PIP_ICON = "pip-icon", e.SHOWFOCUS = "showfocus", e.ADS_WRAPPER = "vp-ads-wrapper", e.ADS_TAG = "vp-ads-tag", e.ADS_COUNTDOWN = "vp-ads-countdown", e.VIMEO_INTERACTIVE_OVERLAY = "vp-wirewax-overlay-view", e
    }({}),
    Tn = function(e) {
        return e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.TITLE_TAG = "titleTag", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background", e.REMOTE_ACCESS_GATE = "vp-remote-access-gate", e
    }({}),
    Ln = function(e) {
        return e.RIGHT_CONTENT_AREA = "right-content-area", e.NEW_WINDOW_DESCRIPTION = "new-window", e.VP_OVERLAY_LABELLEDBY = "overlay-labelledby", e
    }({}),
    An = function(e) {
        return e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e
    }({}),
    In = function(e) {
        return e.AI_WIDGET_ID = "ai-widget", e
    }({}),
    Sn = function(e) {
        return e.QOE_SURVEY_TEXT = "qoe-survey-text", e.REPLAY = "replay", e.BROADCAST_OVER = "broadcast-over", e
    }({}),
    On = function(e) {
        return e.TITLE_TEXT = "title-text", e
    }({}),
    Pn = function(e) {
        return e.TEXT_TRACK_ID_PREFIX = "telecine-track-", e
    }({}),
    Rn = function(e) {
        return e.COLLAPSE = "collapse-control-bar-button", e.CC = "cc-control-bar-button", e.PREFS = "prefs-control-bar-button", e.CHAPTERS = "chapters-control-bar-button", e.TRANSCRIPT = "transcript-control-bar-button", e.FULLSCREEN = "fullscreen-control-bar-button", e.PIP = "pip-control-bar-button", e
    }({}),
    Nn = function(e) {
        return e.FONT_FAMILY_ACCORDION = "font-family-accordion", e.EDGE_STYLE_ACCORDION = "edge-style-accordion", e.VP_CC_FONT_COLOR_LABEL = "vp-cc-font-color-label", e.VP_CC_BACKGROUND_COLOR_LABEL = "vp-cc-background-color-label", e.VP_CC_BACKGROUND_OPACITY_LABEL = "vp-cc-background-opacity-label", e.VP_CC_FONT_SIZE_LABEL = "vp-cc-font-size-label", e.VP_CC_FONT_OPACITY_LABEL = "vp-cc-font-opacity-label", e.VP_CC_FONT_EDGE_STYLE_LABEL = "vp-cc-font-edge-style-label", e.VP_CC_WINDOW_OPACITY_LABEL = "vp-cc-window-opacity-label", e.VP_CC_WINDOW_COLOR_LABEL = "vp-cc-window-color-label", e
    }({}),
    wn = function(e) {
        return e.SEARCH_INPUT = "search-input", e
    }({}),
    Dn = function(e) {
        return e.CONTENT_AREA_SIBLING_ELIGIBLE = "data-content-area-sibling-eligible", e
    }({}),
    kn = function(e) {
        return e.NOT_SUPPORTED = "not-supported", e.DRM_FAILURE = "drm-failure", e.DECODE = "decode", e.NETWORK = "network", e.UNKNOWN = "unknown", e.TELECINE_FILE_ERROR = "telecine-file-error", e.TELECINE_DOWNLOAD_ERROR = "telecine-download-error", e.MEDIA_URL_EXPIRED = "media-url-expired", e.SCANNER_ERROR = "scanner-error", e.ERROR = "error", e.LOAD_VIDEO_VIA_CONFIG = "load-video-via-config-error", e.LOCAL_ACCESS_GATE_ERROR = "local-access-gate-error", e
    }({});
const Mn = () => ({
        type: kn.NETWORK,
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    Vn = () => ({
        type: kn.ERROR,
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        modal: !0,
        final: !0
    });
var Bn = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        type: kn.NOT_SUPPORTED,
        title: "Unsupported viewing environment",
        message: `Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="${Ln.NEW_WINDOW_DESCRIPTION}">Help Center</a>.`,
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        type: kn.DRM_FAILURE,
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        type: kn.NOT_SUPPORTED,
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        type: kn.NOT_SUPPORTED,
        final: !1
    }),
    MediaDecodeError: () => ({
        type: kn.DECODE,
        final: !1
    }),
    MediaNetworkError: Mn,
    MediaUnknownError: () => ({
        type: kn.UNKNOWN,
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        type: kn.TELECINE_FILE_ERROR,
        final: !1
    }),
    DownloadError: () => ({
        type: kn.TELECINE_DOWNLOAD_ERROR,
        final: !1
    }),
    MediaUrlExpired: () => ({
        type: kn.MEDIA_URL_EXPIRED,
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        type: kn.SCANNER_ERROR,
        final: !1
    }),
    PlayerError: Vn
});
const xn = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" !== t.key && " " !== t.key || e(t)
        }
    }),
    Un = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function(e) {
        return o.clipboardAPI ? function(t, n) {
            try {
                var i = function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(navigator.clipboard.writeText(e), (function() {
                    return !0
                }))
            } catch (De) {
                return n()
            }
            return i && i.then ? i.then(void 0, n) : i
        }(0, (function(t) {
            return Hn(e)
        })) : Hn(e)
    }));

function Hn(e) {
    const t = document.createElement("textarea");
    t.value = e, document.body.appendChild(t), t.select();
    const n = document.execCommand("copy");
    return document.body.removeChild(t), n
}
const Fn = (e, t, n) => {
    var i;
    return null !== (i = t[n]) && void 0 !== i ? i : e[n]
};

function Gn(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const Wn = e => [en.main, en.privateUnlocked].includes(e),
    Yn = (e, t) => e && (e.contains(t.target) || e === t.target),
    $n = (...e) => e.reduce(((e, t) => t ? e ? `${e} ${t}` : t : e), null),
    Kn = (e = [], t) => e.map((e => (e.active = `${e.id}` === t, e))),
    qn = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = Et(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    jn = e => {
        let {
            clientX: t
        } = e;
        return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
    },
    zn = (e, t) => Math.max(e - t.startTime, 0),
    Xn = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : zn(e, t) / o
    },
    Zn = (e, t) => {
        const {
            startTime: n,
            endTime: i
        } = t;
        return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
    },
    Qn = (e, t = !0) => {
        const n = 100 * (t ? St(e, 2) : e);
        return `${Math.max(Math.min(n,100),0)}%`
    },
    Jn = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    ei = (e, t) => {
        const {
            duration: n
        } = t;
        return n * e || 0
    },
    ti = (e, t, n) => (n - t) * e + t,
    ni = (e, t, n) => (e - t) / (n - t),
    ii = (e, t) => e.filter((e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    }));
let oi = function(e) {
    return e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.SPATIAL_REDIRECT = "spatial-redirect", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive", e
}({});
const ri = e => e === oi.INTERACTIVE || e === oi.EMPTY,
    ai = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls,
    li = e => (Date.now() - e) / 1e3,
    si = e => Math.round(1e3 * e),
    ci = (e, t, n) => {
        const i = String(e);
        return new Array(t - i.length + 1).join(n || "0") + i
    },
    di = (e, t) => {
        const n = Math.ceil(e) < 0;
        e = Math.abs(e);
        var i = Math.floor(e / 3600 % 60),
            o = Math.floor(e / 60 % 60);
        if (e = Math.floor(e % 60), t) {
            var r = e + " second" + (1 === e ? "" : "s");
            return o > 0 && (r = o + " minute" + (1 === o ? "" : "s") + ", " + r), i > 0 && (r = i + " hour" + (1 === i ? "" : "s") + ", " + r), r
        }
        return (n ? "-" : "") + (i > 0 ? i + ":" : "") + ci(o, 2) + ":" + ci(e, 2)
    };
let ui = function(e) {
        return e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.TWO_OPACITY_NINETY = "--color-two-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty", e
    }({}),
    _i = function(e) {
        return e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED", e
    }({}),
    pi = function(e) {
        return e.LIGHT = "light", e.DARK = "dark", e
    }({});
const mi = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    vi = (e, t, n, i) => {
        let o;
        try {
            o = new r(e)
        } catch (s) {
            return ""
        }
        const l = (e => r.white.contrast(e).ratio >= 4.5 ? pi.DARK : pi.LIGHT)(o);
        return n && (o = a(l === pi.DARK ? r.white : r.black)), null == t || i && mi(e) ? mi(e) ? o.hexWithAlpha : o.hex : ("object" == typeof t && (t = t[l]), o.alpha = t, o.hexWithAlpha)
    },
    fi = e => e.map((([e, t]) => ((e, t) => e + ":" + t + ";")(e, t))).join("\n"),
    hi = () => {};

function gi(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Ei(e, t) {
    try {
        var n = e()
    } catch (De) {
        return t(De)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const bi = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}((function(e) {
    return Ei(e, (function(e) {
        return gi(new Promise((e => setTimeout(e, 1e3))), (function() {
            let t;
            if (e instanceof Error) {
                const n = e.message,
                    i = null == n ? void 0 : n.split(" ").find((e => e.includes("http")));
                t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
            }
            return Ei((function() {
                return gi(
                    import (t.href))
            }), (function() {
                throw e
            }))
        }))
    }))
}));
let Ci = function(e) {
        return e.CONNECTED = "CONNECTED", e.CONNECTING = "CONNECTING", e.NOT_CONNECTED = "NOT_CONNECTED", e.NOT_SETUP = "NOT_SETUP", e.NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE", e.SETUP_DONE = "SETUP_DONE", e
    }({}),
    yi = function(e) {
        return e.VimeoPlayer = "VimeoPlayer", e.BackgroundPlayer = "BackgroundPlayer", e.ChromelessPlayer = "ChromelessPlayer", e.BarebonePlayer = "BarebonePlayer", e
    }({}),
    Ti = function(e) {
        return e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny", e
    }({}),
    Li = function(e) {
        return e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR", e
    }({}),
    Ai = function(e) {
        return e[e.HAVE_NOTHING = 0] = "HAVE_NOTHING", e[e.HAVE_METADATA = 1] = "HAVE_METADATA", e[e.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e[e.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e[e.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA", e
    }({}),
    Ii = function(e) {
        return e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset", e
    }({}),
    Si = function(e) {
        return e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock", e
    }({}),
    Oi = function(e) {
        return e.MEDIA_SOURCE_SCANNER = "MediaSourceScanner", e.HLS_LIVE_SCANNER = "HLSLiveScanner", e
    }({}),
    Pi = function(e) {
        return e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer", e
    }({}),
    Ri = function(e) {
        return e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle", e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor", e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor", e
    }({}),
    Ni = function(e) {
        return e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T", e
    }({}),
    wi = function(e) {
        return e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.SINGLE_VIDEO_VIEW_RECIPIENT = "single_video_view_recipient", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page", e.LIVE_EVENT_SETTINGS_PAGE = "live_event_settings_page", e
    }({}),
    Di = function(e) {
        return e[e.CacheMiss = 0] = "CacheMiss", e[e.MidCacheHit = 1] = "MidCacheHit", e[e.EdgeCacheHit = 2] = "EdgeCacheHit", e
    }({});
const {
    VIMEO_URL: ki,
    SVV_RECIPIENT_URL: Mi,
    SVV_MANAGE_URL: Vi,
    CLIP_URL: Bi,
    PROFILE_URL: xi,
    VOD_URL: Ui,
    VOD_VIDEO_MANAGE_URL: Hi,
    NO_DESTINATION: Fi
} = {
    VIMEO_URL: "vimeoUrl",
    SVV_RECIPIENT_URL: "svvRecipientUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl",
    NO_DESTINATION: "noDestination"
}, Gi = {
    [Vt]: {
        viewer: {
            [Kt]: Bi,
            [Wt]: Bi,
            [Yt]: ki,
            [Gt]: Bi,
            [Ft]: Bi,
            [$t]: Ui,
            privateMode: ki
        },
        creator: {
            [Kt]: Vi,
            [Wt]: Vi,
            [Yt]: Vi,
            [Gt]: Vi,
            [Ft]: Vi,
            [$t]: Hi,
            privateMode: Vi
        }
    },
    [Bt]: {
        viewer: {
            [Kt]: Mi,
            [Wt]: Bi,
            [Yt]: xi,
            [Gt]: Vi,
            [Ft]: Bi,
            [$t]: Ui,
            privateMode: ki
        },
        creator: {
            [Kt]: Vi,
            [Wt]: Vi,
            [Yt]: Vi,
            [Gt]: Vi,
            [Ft]: Vi,
            [$t]: Hi,
            privateMode: Vi
        }
    },
    [Ut]: {
        viewer: {
            [Kt]: xi,
            [Wt]: xi,
            [Yt]: xi,
            [Gt]: xi,
            [Ft]: xi,
            [$t]: xi,
            privateMode: ki
        },
        creator: {
            [Kt]: xi,
            [Wt]: xi,
            [Yt]: xi,
            [Gt]: xi,
            [Ft]: xi,
            [$t]: Hi,
            privateMode: Vi
        }
    },
    [xt]: {
        viewer: {
            [Kt]: xi,
            [Wt]: xi,
            [Yt]: xi,
            [Gt]: xi,
            [Ft]: xi,
            [$t]: xi,
            privateMode: ki
        },
        creator: {
            [Kt]: xi,
            [Wt]: xi,
            [Yt]: xi,
            [Gt]: xi,
            [Ft]: xi,
            [$t]: Hi,
            privateMode: Vi
        }
    },
    [Ht]: {
        viewer: {
            [Kt]: Mi,
            [Wt]: Fi,
            [Yt]: Fi,
            [Gt]: Fi,
            [Ft]: Bi,
            [$t]: Ui,
            privateMode: Fi
        },
        creator: {
            [Kt]: Mi,
            [Wt]: Fi,
            [Yt]: Fi,
            [Gt]: Fi,
            [Ft]: Bi,
            [$t]: Ui,
            privateMode: Fi
        }
    }
};

function Wi(e = {}) {
    const t = {
        selectDestination(e) {
            const n = Gi[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            return t.isPrivateMode ? i.privateMode : i[t.videoPrivacy]
        },
        get [Bi]() {
            return no(t[ki], e)
        },
        get [Mi]() {
            var n, i;
            return oo(t[ki], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [Vi]() {
            var n;
            return io(t[ki], null == (n = e.video) ? void 0 : n.id)
        },
        get [ki]() {
            return `https://${e.vimeo_url}`
        },
        get [xi]() {
            var t;
            return null == (t = e.video) || null == (t = t.owner) ? void 0 : t.url
        },
        get [Ui]() {
            var t;
            return null == (t = e.video) || null == (t = t.vod) ? void 0 : t.url
        },
        get [Hi]() {
            var t;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(t=t.vod)?void 0:t.id}/settings/basic`
        },
        get [Fi]() {
            return ""
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !(null == (t = e.user) || !t.private_mode_enabled)
        },
        get isOwner() {
            var t, n;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (n = n.owner) ? void 0 : n.id)
        }
    };
    return t
}

function Yi(e, t) {
    let n = "";
    const i = Wi(t),
        o = i.selectDestination(e);
    return i[o] && (n = i[o]), n
}
const $i = /^(%20|\s)*(javascript|data)/im,
    Ki = /[^\x20-\x7E]/gim,
    qi = /^([^:]+):/gm,
    ji = [".", "/"];

function zi(e, t, n) {
    Xi(e, t) || ((e = "") => e.includes("?"))(e) && (e += `&${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function Xi(e, t) {
    return -1 !== (null == e ? void 0 : e.indexOf(`?${t}=`)) || -1 !== (null == e ? void 0 : e.indexOf(`&${t}=`))
}

function Zi(e) {
    return -1 !== e.indexOf("VideoController")
}

function Qi(e, t = window.location.href) {
    const n = Wi(e),
        i = -1 !== e.embed.context.indexOf("ClipController"),
        o = function(e, t) {
            const n = io(t),
                i = function(e) {
                    return `${e}/manage/showcases/`
                }(t);
            return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
        }(t, n.vimeoUrl),
        r = Zi(e.embed.context) && (-1 !== t.indexOf(n.svvRecipientUrl) || t === n.clipUrl);
    return function(e, t) {
        const n = function(e) {
                return `${e}/live/broadcaster/event/`
            }(t),
            i = function(e) {
                return `${e}/live/rtmp/event/`
            }(t);
        return -1 !== e.indexOf(n) || -1 !== e.indexOf(i)
    }(t, n.vimeoUrl) ? wi.LIVE_EVENT_SETTINGS_PAGE : o ? wi.SINGLE_VIDEO_VIEW_MANAGE : r ? wi.SINGLE_VIDEO_VIEW_RECIPIENT : i ? wi.CLIP_PAGE : wi.EMBEDDED_PAGE
}

function Ji(e, t, n) {
    if (!e) return "";
    const [i] = e.split("#");
    return `${i}#t=${t}&end=${n}`
}
const eo = e => {
        const t = e.match(qi);
        return null == t ? void 0 : t[0]
    },
    to = e => e ? decodeURI(encodeURI((e => {
        e = e.trim();
        const t = eo(e);
        return e && !t && (e = `https://${e}`), e
    })((e => {
        let t = e.replace(Ki, "");
        if ((e => ji.indexOf(e[0]) > -1)(t)) return t;
        const n = eo(t);
        return n && $i.test(n) ? "" : t
    })(e)))) : null,
    no = (e, t) => {
        var n, i;
        const o = null == (n = t.video) ? void 0 : n.id,
            r = null == (i = t.video) ? void 0 : i.unlisted_hash;
        return `${e}/${o}${r?"/"+r:""}`
    };

function io(e, t) {
    return `${e}/manage/videos/${null!=t?t:""}`
}
const oo = (e, t, n) => n ? `${e}/${t}/${n}` : `${e}/${t}`;

function ro(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const ao = l("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    lo = () => o.storageAccessAPI;
let so = function(e) {
        return e.started = "started", e.done = "done", e.error = "error", e
    }({}),
    co = function(e) {
        return e.pending = "pending", e.active = "active", e.started = "started", e.ended = "ended", e
    }({});

function uo(e) {
    var t;
    return e.video.ecdn ? e.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : s(e.embed.interactive) ? null != (t = e.request.flags) && t.ott ? "vimeo-ott-vod" : e.video.live_event ? "vimeo-live" : e.embed.context && -1 !== e.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.video.vod ? "vimeo-ondemand" : "vimeo-vod" : "vimeo-interactive-vod"
}
const _o = () => {
        const e = on,
            [t, n, i] = e.split(".");
        return {
            full: e,
            major: t,
            minor: n,
            patch: i
        }
    },
    po = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function mo() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : po && (e = "mobile"), e
}

function vo() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function fo(e) {
    var t;
    const {
        user: n,
        video: i
    } = e;
    let o = "viewer";
    return n.team_id && (o = n.id === n.team_origin_user_id ? "admin" : "contributor"), n.id === (null == (t = i.owner) ? void 0 : t.id) && (o = "owner"), o
}

function ho(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}

function go(e) {
    return (null == e ? void 0 : e.status) === co.ended ? "ended" : (null == e ? void 0 : e.status) === co.started ? "streaming" : (null == e ? void 0 : e.status) === co.pending ? "unavailable" : "unknown"
}

function Eo(e) {
    return e.live_event ? "live_event" : "other"
}

function bo(e) {
    var t;
    return null != e && e.length && (null == (t = e.find((e => e.is_current))) ? void 0 : t.id) || null
}

function Co(e) {
    return e === Si.PRIVACY_PUBLIC ? "public" : e === Si.PRIVACY_PASSWORD ? "password" : e === Si.PRIVACY_UNLISTED ? "unlisted" : e === Si.PRIVACY_HIDE_FROM_VIMEO ? "hide_from_vimeo" : "private"
}
var yo = function(e) {
    return e.Origin = "c=o", e.Peer = "c=p", e.ParentCache = "c=c", e.CloudWrapper = "c=w", e
}(yo || {});

function To(e) {
    const t = e.akamai_request_bc,
        n = e.x_cache;
    return t ? function(e) {
        return e.includes(yo.Origin) ? Di.CacheMiss : e.includes(yo.Peer) || e.includes(yo.ParentCache) || e.includes(yo.CloudWrapper) ? Di.MidCacheHit : Di.EdgeCacheHit
    }(t) : n ? function(e) {
        return "HIT" === e.substr(0, 3) ? Di.MidCacheHit : "HIT" === e.substr(-3) ? Di.EdgeCacheHit : Di.CacheMiss
    }(n) : Di.CacheMiss
}

function Lo(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Ao = (e, t) => e.split("/").slice(4).join("/"),
    Io = e => e.split("/")[4],
    So = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) ? Lo(i === _.MANIFEST || i === _.SEGMENT ? p(n, t) : null) : Lo(null)
        } catch (De) {
            return Promise.reject(De)
        }
    },
    Oo = () => {
        var e;
        const t = u(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    Po = () => {
        const e = u(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    Ro = e => {
        const t = {
            hive: Oo,
            kollective: Po
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    },
    No = ({
        newPriority: e,
        currentPriority: t,
        priorityOrder: n
    }) => {
        const i = n.indexOf(t),
            o = n.indexOf(e);
        return -1 === i || -1 === o || i > o
    },
    wo = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function(e) {
        return new Promise((t => {
            if (!o.intersectionObserver) return void t();
            const n = new IntersectionObserver((function(e) {
                const [i] = e;
                null != i && i.isIntersecting && (t(), n.disconnect())
            }), {
                threshold: .5
            });
            n.observe(e)
        }))
    }));

function Do(e) {
    return (null == e ? void 0 : e.parentElement) === document.body
}
const ko = () => {
    try {
        return window.self !== window.top
    } catch (De) {
        return !0
    }
};

function Mo(e, t) {
    const [n, i] = t;
    let o = i - n;
    for (var r, a = m(e); !(r = a()).done;) {
        const e = r.value,
            [t, a] = e,
            l = Math.max(n, t),
            s = Math.min(i, a);
        o -= Math.max(0, s - l)
    }
    return Math.max(o, 0)
}

function Vo(e) {
    return si(St(e, 3))
}
const Bo = e => {
        var t;
        const n = null == e || null == (t = e.ingest) ? void 0 : t.start_time;
        if (!n) return bn;
        const i = Date.now() - n,
            o = bn - i;
        return Math.min(Math.max(o, 0), bn)
    },
    xo = e => !!e && e.status === co.started && 0 === Bo(e);

function Uo(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function Ho(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (De) {}
    return null
}
let Fo = function(e) {
        return e.EMPTY = "empty", e.LEAD_CAPTURE_FORM = "lead_capture_form", e
    }({}),
    Go = function(e) {
        return e.BEFORE_VIDEO = "before_video", e.DURING_VIDEO = "during_video", e.AFTER_VIDEO = "after_video", e
    }({}),
    Wo = function(e) {
        return e.OPENED = "access_gate_opened", e.CLOSED = "access_gate_closed", e.ERROR = "access_gate_error", e
    }({});
const Yo = {
        [Fo.LEAD_CAPTURE_FORM]: [en.main, en.privateUnlocked]
    },
    $o = (Tn.REMOTE_ACCESS_GATE, (e, t) => {
        const i = t.vimeo_url;
        let o = {
            lc_param_session_id: t.request.session
        };
        return t.video.unlisted_hash && (o.lc_param_unlisted_hash = t.video.unlisted_hash), t.request.hashed_password && (o.lc_param_password = t.request.hashed_password), n(`https://${i}${e}`, o)
    }),
    Ko = (e, t, n = null) => e === Fo.LEAD_CAPTURE_FORM ? {
        purpose: e,
        url: $o(`/leadcapture/video/${t.video.id}/form`, t),
        title: "Lead Capture Form",
        gateId: n
    } : {
        purpose: Fo.EMPTY,
        url: "",
        title: "",
        gateId: n
    },
    qo = (e, t) => {
        if (e === Fo.LEAD_CAPTURE_FORM) {
            var n;
            let e = (e => "lc_" + e.video.id)(t),
                i = Ho(e);
            return i || (e = (e => {
                const {
                    id: t,
                    unlisted_hash: n
                } = e.video;
                return "lc_" + ((e, t = 0) => {
                    let n = 3735928559 ^ t,
                        i = 1103547991 ^ t;
                    for (let o, r = 0; r < e.length; r++) o = e.charCodeAt(r), n = Math.imul(n ^ o, 2654435761), i = Math.imul(i ^ o, 1597334677);
                    return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), (4294967296 * (2097151 & i) + (n >>> 0)).toString()
                })(n ? `${t}:${n}` : `${t}`)
            })(t), i = Ho(e), null !== (n = i) && void 0 !== n ? n : "")
        }
        return ""
    },
    jo = (e, t) => !!qo(e, t);

function zo(e) {
    var t;
    const n = qo(Fo.LEAD_CAPTURE_FORM, e);
    var i, o;
    return null != (t = e.user) && t.lead ? {
        leadUuid: (null == (i = e.user.lead) ? void 0 : i.id) || n,
        contentType: null == (o = e.user.lead) ? void 0 : o.type
    } : n ? {
        leadUuid: n
    } : {}
}
let Xo = function(e) {
    return e.NOT_LOGGED_IN = "not_logged_in", e.LOGGED_IN_STORAGE_ACCESS_REQUIRED = "logged_in_storage_access_required", e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED = "storage_access_granted_login_unconfirmed", e.ALL_ACCESS_ATTEMPTS_FAILED = "all_access_attempts_failed", e.LOGGED_IN_NO_ACCESS = "logged_in_no_access", e.LOGGED_IN_HAS_ACCESS = "logged_in_has_access", e
}({});
const Zo = {
    storageAccessRequired: lo,
    requestCookieAccess: e => new Promise(((t, n) => document.requestStorageAccess().then((() => {
        ao("User granted storage access"), t(!0)
    }), (() => {
        e(), ao("User storage access denied:"), t(!1)
    })).catch(n)))
};
const Qo = ["label"],
    Jo = "Hotspot",
    er = "Poll";

function tr(e, t, n) {
    return e / t * n
}

function nr(e = "") {
    try {
        const t = null == e ? void 0 : e.split(".")[1],
            n = JSON.parse(atob(t)).exp;
        return f(n) >= 0
    } catch (De) {
        throw new Error("Failed to parse PHP token.")
    }
}
const ir = (e, t) => !e.isLive() || t;
let or = function(e) {
        return e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl", e
    }({}),
    rr = function(e) {
        return e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom", e
    }({}),
    ar = function(e) {
        return e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom", e
    }({}),
    lr = function(e) {
        return e.LEFT = "left", e.RIGHT = "right", e
    }({}),
    sr = function(e) {
        return e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit", e
    }({}),
    cr = function(e) {
        return e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e
    }({}),
    dr = function(e) {
        return e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500", e
    }({}),
    ur = function(e) {
        return e.CUSTOM = "custom", e.WHITE = "white", e
    }({}),
    _r = function(e) {
        return e.SM = "sm", e.LG = "lg", e
    }({}),
    pr = function(e) {
        return e.FULL_CONTROLS = "full-controls", e.VOLUME_SLIDER = "volume-slider", e.PROGRESS_BAR = "progress-bar", e.SIDE_DOCK_MENU = "side-dock-menu", e
    }({});
const mr = (e, t, n) => {
    switch (e) {
        case pr.FULL_CONTROLS:
        case pr.VOLUME_SLIDER:
            return t !== Ti.MINI && t !== Ti.TINY && n !== or.XXS;
        case pr.PROGRESS_BAR:
            return t !== Ti.TINY;
        case pr.SIDE_DOCK_MENU:
            return t === Ti.MINI || t === Ti.TINY || n === or.XXS || n === or.XS;
        default:
            return !1
    }
};

function vr(e) {
    return 1 === e
}

function fr(e, t = new Date) {
    return e.getTime() - t.getTime()
}
const hr = !!window.DD_RUM && "function" == typeof window.DD_RUM.setViewContextProperty && "function" == typeof window.DD_RUM.setGlobalContextProperty && "function" == typeof window.DD_RUM.addError && "function" == typeof window.DD_RUM.addAction;
let gr = function(e) {
        return e.WEB_GLOBAL = "vimeo.web_global", e.COPY_VIDEO_EMBED_CODE = "workflow.copy_video_embed_code", e.PLAYER_PERFORMANCE_MEASUREMENT = "vimeo.player_performance_measurement", e.CHAPTER_SEGMENT_CLICK = "vimeo.chapter_segment_click", e.CLICK = "vimeo.click", e.TIMING_OBJECT_CONNECT = "vimeo.timing_object_connect", e.TIMING_OBJECT_DISCONNECT = "vimeo.timing_object_disconnect", e.EMBEDDED_TRANSCRIPT_CLICK = "vimeo.embedded_transcript_click", e.CLOSED_CAPTIONS_CLICK = "vimeo.closed_captions_click", e.MULTI_AUDIO_TRACK_CLICK = "vimeo.multi_audio_track_click", e.VIEW_PLAYER_CSAT_V1 = "vimeo.view_player_csat_v1", e.SELECT_THUMBS_UP_PLAYER_CSAT_V1 = "vimeo.select_thumbs_up_player_csat_v1", e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1 = "vimeo.select_thumbs_down_player_csat_v1", e.DISMISS_PLAYER_CSAT_V1 = "vimeo.dismiss_player_csat_v1", e.DVR_MODE_ENTERED = "vimeo.dvr_mode_entered", e.SEEK_BEHIND_LIVE_EDGE = "vimeo.seek_behind_live_edge", e.SKIP_TO_LIVE_CLICK = "vimeo.skip_to_live_click", e.SEEK_TO_LIVE_EDGE = "vimeo.seek_to_live_edge", e.PLAY_VIDEO = "vimeo.play_video", e.FINISH_VIDEO = "vimeo.finish_video", e.START_VIDEO_SCRUB = "vimeo.start_video_scrub", e.END_VIDEO_SCRUB = "vimeo.end_video_scrub", e.WATCH_VIDEO_HEARTBEAT = "vimeo.watch_video_heartbeat", e.EMBED_SEGMENT = "vimeo.embed_segment", e.PLAY_SEGMENT = "vimeo.play_segment", e.WATCH_FULL_VIDEO = "vimeo.watch_full_video", e.SEEK_INSIDE_SEGMENT = "vimeo.seek_inside_segment", e.SHARE_CHAPTER = "vimeo.share_chapter", e.CHAPTER_PLAYED = "vimeo.chapter_played", e.OPEN_AI_OPTIONS = "vimeo.open_ai_options", e.PROCESS_STEP = "vimeo.process_step", e.REMOTE_COMPONENT_LOADED = "vimeo.remote_component_loaded", e.REMOTE_COMPONENT_TIMEOUT = "vimeo.remote_component_timeout", e.REACH_TIME_ACTION = "vimeo.reach_time_action", e.VIEW_HOTSPOT = "vimeo.view_hotspot", e.CLICK_HOTSPOT = "vimeo.click_hotspot", e.VIEW_OVERLAY = "vimeo.view_overlay", e.CLOSE_OVERLAY = "vimeo.close_overlay", e.CLICK_OVERLAY = "vimeo.click_overlay", e.VIEW_POLL = "vimeo.view_poll", e.VOTE_POLL = "vimeo.vote_poll", e
    }({}),
    Er = function(e) {
        return e.TEAM = "team_context", e.ACTION = "action_context", e.VIEW = "view_context", e.WEB = "web_context", e.VIDEO = "video_context", e.PLAYER = "player_context", e.LIVE = "live_context", e.PRODUCT_ANALYTICS = "product_analytics_context", e.TARGET_TEAM = "target_team_context", e.USER_FACING_VIDEO_ANALYTICS = "user_facing_video_analytics_context", e.THIRD_PARTY_INTEGRATION = "third_party_integration_context", e
    }({}),
    br = function(e) {
        return e[e.WEB_GLOBAL = 5] = "WEB_GLOBAL", e[e.COPY_VIDEO_EMBED_CODE = 5] = "COPY_VIDEO_EMBED_CODE", e[e.PLAYER_PERFORMANCE_MEASUREMENT = 1] = "PLAYER_PERFORMANCE_MEASUREMENT", e[e.CHAPTER_SEGMENT_CLICK = 2] = "CHAPTER_SEGMENT_CLICK", e[e.CLICK = 83] = "CLICK", e[e.TIMING_OBJECT_CONNECT = 1] = "TIMING_OBJECT_CONNECT", e[e.TIMING_OBJECT_DISCONNECT = 1] = "TIMING_OBJECT_DISCONNECT", e[e.EMBEDDED_TRANSCRIPT_CLICK = 6] = "EMBEDDED_TRANSCRIPT_CLICK", e[e.CLOSED_CAPTIONS_CLICK = 2] = "CLOSED_CAPTIONS_CLICK", e[e.MULTI_AUDIO_TRACK_CLICK = 1] = "MULTI_AUDIO_TRACK_CLICK", e[e.PLAY_VIDEO = 2] = "PLAY_VIDEO", e[e.FINISH_VIDEO = 2] = "FINISH_VIDEO", e[e.START_VIDEO_SCRUB = 2] = "START_VIDEO_SCRUB", e[e.END_VIDEO_SCRUB = 1] = "END_VIDEO_SCRUB", e[e.WATCH_VIDEO_HEARTBEAT = 2] = "WATCH_VIDEO_HEARTBEAT", e[e.EMBED_SEGMENT = 1] = "EMBED_SEGMENT", e[e.PLAY_SEGMENT = 1] = "PLAY_SEGMENT", e[e.WATCH_FULL_VIDEO = 1] = "WATCH_FULL_VIDEO", e[e.SEEK_INSIDE_SEGMENT = 1] = "SEEK_INSIDE_SEGMENT", e[e.SHARE_CHAPTER = 1] = "SHARE_CHAPTER", e[e.CHAPTER_PLAYED = 1] = "CHAPTER_PLAYED", e[e.OPEN_AI_OPTIONS = 4] = "OPEN_AI_OPTIONS", e[e.PROCESS_STEP = 1] = "PROCESS_STEP", e[e.REMOTE_COMPONENT_LOADED = 1] = "REMOTE_COMPONENT_LOADED", e[e.REMOTE_COMPONENT_TIMEOUT = 1] = "REMOTE_COMPONENT_TIMEOUT", e[e.REACH_TIME_ACTION = 1] = "REACH_TIME_ACTION", e[e.VIEW_HOTSPOT = 1] = "VIEW_HOTSPOT", e[e.CLICK_HOTSPOT = 1] = "CLICK_HOTSPOT", e[e.VIEW_OVERLAY = 1] = "VIEW_OVERLAY", e[e.CLOSE_OVERLAY = 1] = "CLOSE_OVERLAY", e[e.CLICK_OVERLAY = 1] = "CLICK_OVERLAY", e[e.VIEW_POLL = 1] = "VIEW_POLL", e[e.VOTE_POLL = 1] = "VOTE_POLL", e[e.TEAM = 5] = "TEAM", e[e.ACTION = 5] = "ACTION", e[e.VIEW = 3] = "VIEW", e[e.WEB = 25] = "WEB", e[e.VIDEO = 10] = "VIDEO", e[e.PLAYER = 5] = "PLAYER", e[e.LIVE = 6] = "LIVE", e[e.PRODUCT_ANALYTICS = 41] = "PRODUCT_ANALYTICS", e[e.TARGET_TEAM = 6] = "TARGET_TEAM", e[e.USER_FACING_VIDEO_ANALYTICS = 2] = "USER_FACING_VIDEO_ANALYTICS", e[e.THIRD_PARTY_INTEGRATION = 5] = "THIRD_PARTY_INTEGRATION", e[e.DEFAULT = -1] = "DEFAULT", e
    }({});
const Cr = {
        [gr.WEB_GLOBAL]: br.WEB_GLOBAL,
        [gr.COPY_VIDEO_EMBED_CODE]: br.COPY_VIDEO_EMBED_CODE,
        [gr.PLAYER_PERFORMANCE_MEASUREMENT]: br.PLAYER_PERFORMANCE_MEASUREMENT,
        [gr.CHAPTER_SEGMENT_CLICK]: br.CHAPTER_SEGMENT_CLICK,
        [gr.CLICK]: br.CLICK,
        [gr.TIMING_OBJECT_CONNECT]: br.TIMING_OBJECT_CONNECT,
        [gr.TIMING_OBJECT_DISCONNECT]: br.TIMING_OBJECT_DISCONNECT,
        [gr.EMBEDDED_TRANSCRIPT_CLICK]: br.EMBEDDED_TRANSCRIPT_CLICK,
        [gr.CLOSED_CAPTIONS_CLICK]: br.CLOSED_CAPTIONS_CLICK,
        [gr.MULTI_AUDIO_TRACK_CLICK]: br.MULTI_AUDIO_TRACK_CLICK,
        [gr.VIEW_PLAYER_CSAT_V1]: br.DEFAULT,
        [gr.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: br.DEFAULT,
        [gr.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: br.DEFAULT,
        [gr.DISMISS_PLAYER_CSAT_V1]: br.DEFAULT,
        [gr.DVR_MODE_ENTERED]: br.DEFAULT,
        [gr.SEEK_BEHIND_LIVE_EDGE]: br.DEFAULT,
        [gr.SKIP_TO_LIVE_CLICK]: br.DEFAULT,
        [gr.SEEK_TO_LIVE_EDGE]: br.DEFAULT,
        [gr.PLAY_VIDEO]: br.PLAY_VIDEO,
        [gr.FINISH_VIDEO]: br.FINISH_VIDEO,
        [gr.START_VIDEO_SCRUB]: br.START_VIDEO_SCRUB,
        [gr.END_VIDEO_SCRUB]: br.END_VIDEO_SCRUB,
        [gr.WATCH_VIDEO_HEARTBEAT]: br.WATCH_VIDEO_HEARTBEAT,
        [gr.EMBED_SEGMENT]: br.EMBED_SEGMENT,
        [gr.PLAY_SEGMENT]: br.PLAY_SEGMENT,
        [gr.WATCH_FULL_VIDEO]: br.WATCH_FULL_VIDEO,
        [gr.SEEK_INSIDE_SEGMENT]: br.SEEK_INSIDE_SEGMENT,
        [gr.SHARE_CHAPTER]: br.SHARE_CHAPTER,
        [gr.CHAPTER_PLAYED]: br.CHAPTER_PLAYED,
        [gr.OPEN_AI_OPTIONS]: br.OPEN_AI_OPTIONS,
        [gr.PROCESS_STEP]: br.PROCESS_STEP,
        [gr.REMOTE_COMPONENT_LOADED]: br.REMOTE_COMPONENT_LOADED,
        [gr.REMOTE_COMPONENT_TIMEOUT]: br.REMOTE_COMPONENT_TIMEOUT,
        [gr.REACH_TIME_ACTION]: br.REACH_TIME_ACTION,
        [gr.VIEW_HOTSPOT]: br.VIEW_HOTSPOT,
        [gr.CLICK_HOTSPOT]: br.CLICK_HOTSPOT,
        [gr.VIEW_OVERLAY]: br.VIEW_OVERLAY,
        [gr.CLOSE_OVERLAY]: br.CLOSE_OVERLAY,
        [gr.CLICK_OVERLAY]: br.CLICK_OVERLAY,
        [gr.VIEW_POLL]: br.VIEW_POLL,
        [gr.VOTE_POLL]: br.VOTE_POLL,
        [Er.TEAM]: br.TEAM,
        [Er.ACTION]: br.ACTION,
        [Er.VIEW]: br.VIEW,
        [Er.WEB]: br.WEB,
        [Er.VIDEO]: br.VIDEO,
        [Er.PLAYER]: br.PLAYER,
        [Er.LIVE]: br.LIVE,
        [Er.PRODUCT_ANALYTICS]: br.PRODUCT_ANALYTICS,
        [Er.USER_FACING_VIDEO_ANALYTICS]: br.USER_FACING_VIDEO_ANALYTICS,
        [Er.TARGET_TEAM]: br.TARGET_TEAM,
        [Er.THIRD_PARTY_INTEGRATION]: br.THIRD_PARTY_INTEGRATION
    },
    yr = [Er.PLAYER, Er.VIDEO, Er.WEB, Er.TEAM],
    Tr = [Er.TEAM, Er.VIDEO, Er.LIVE, Er.PRODUCT_ANALYTICS, Er.USER_FACING_VIDEO_ANALYTICS, Er.TARGET_TEAM, Er.THIRD_PARTY_INTEGRATION],
    Lr = {
        [gr.VIEW_PLAYER_CSAT_V1]: [].concat(yr, [Er.VIEW]),
        [gr.SELECT_THUMBS_UP_PLAYER_CSAT_V1]: [].concat(yr, [Er.ACTION]),
        [gr.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1]: [].concat(yr, [Er.ACTION]),
        [gr.DISMISS_PLAYER_CSAT_V1]: [].concat(yr, [Er.ACTION]),
        [gr.DVR_MODE_ENTERED]: [].concat(yr, [Er.VIEW, Er.LIVE, Er.PRODUCT_ANALYTICS]),
        [gr.SEEK_BEHIND_LIVE_EDGE]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS]),
        [gr.SKIP_TO_LIVE_CLICK]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS]),
        [gr.SEEK_TO_LIVE_EDGE]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS]),
        [gr.PLAY_VIDEO]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS, Er.TARGET_TEAM, Er.USER_FACING_VIDEO_ANALYTICS]),
        [gr.FINISH_VIDEO]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS, Er.TARGET_TEAM, Er.USER_FACING_VIDEO_ANALYTICS]),
        [gr.START_VIDEO_SCRUB]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS, Er.TARGET_TEAM, Er.USER_FACING_VIDEO_ANALYTICS]),
        [gr.END_VIDEO_SCRUB]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS, Er.TARGET_TEAM, Er.USER_FACING_VIDEO_ANALYTICS]),
        [gr.WATCH_VIDEO_HEARTBEAT]: [].concat(yr, [Er.ACTION, Er.LIVE, Er.PRODUCT_ANALYTICS, Er.TARGET_TEAM, Er.USER_FACING_VIDEO_ANALYTICS]),
        [gr.WATCH_FULL_VIDEO]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS]),
        [gr.SEEK_INSIDE_SEGMENT]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS]),
        [gr.SHARE_CHAPTER]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS]),
        [gr.CHAPTER_PLAYED]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS]),
        [gr.EMBED_SEGMENT]: [].concat(yr, [Er.VIEW, Er.PRODUCT_ANALYTICS]),
        [gr.PLAY_SEGMENT]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS]),
        [gr.OPEN_AI_OPTIONS]: [Er.TEAM, Er.ACTION, Er.PRODUCT_ANALYTICS, Er.WEB, Er.VIDEO],
        [gr.PROCESS_STEP]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS]),
        [gr.REMOTE_COMPONENT_LOADED]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS, Er.THIRD_PARTY_INTEGRATION]),
        [gr.REMOTE_COMPONENT_TIMEOUT]: [].concat(yr, [Er.ACTION, Er.PRODUCT_ANALYTICS, Er.THIRD_PARTY_INTEGRATION]),
        [gr.REACH_TIME_ACTION]: [].concat(Tr, [Er.VIEW]),
        [gr.VIEW_HOTSPOT]: [].concat(Tr, [Er.VIEW]),
        [gr.CLICK_HOTSPOT]: [].concat(Tr, [Er.ACTION]),
        [gr.VIEW_OVERLAY]: [].concat(Tr, [Er.VIEW]),
        [gr.CLOSE_OVERLAY]: [].concat(Tr, [Er.ACTION]),
        [gr.CLICK_OVERLAY]: [].concat(Tr, [Er.ACTION]),
        [gr.VIEW_POLL]: [].concat(Tr, [Er.VIEW]),
        [gr.VOTE_POLL]: [].concat(Tr, [Er.ACTION])
    };
let Ar = function(e) {
    return e.WORKFLOW = "Workflow", e.PLAYBACK = "Playback", e
}({});

function Ir(t, n) {
    let i, r = null,
        a = null,
        l = null,
        s = null,
        c = 0,
        d = 0,
        u = [],
        _ = !1,
        p = !1,
        m = !1,
        v = 0,
        f = 0,
        C = g(),
        y = !0,
        T = !0;

    function L() {
        R(), n(gr.PLAY_VIDEO, t.config, N(gr.PLAY_VIDEO)), s = l
    }

    function A() {
        t.backbone.seeking || (_ = !1, S(), n(gr.FINISH_VIDEO, t.config, N(gr.FINISH_VIDEO)), T = !1, P())
    }

    function I() {
        _ && p && !m && (p = !1, R(), n(gr.END_VIDEO_SCRUB, t.config, N(gr.END_VIDEO_SCRUB)), s = l, O())
    }

    function S() {
        let e = v;
        (t.backbone.seeking || m) && (e = f), l = St(e, 3), c && (n(gr.WATCH_VIDEO_HEARTBEAT, t.config, function() {
            const e = N(gr.WATCH_VIDEO_HEARTBEAT);
            return h(h({}, e), {}, {
                log_view_time: c,
                log_view_time_excluding_repeats: Math.min(d, c),
                previous_log_end_time: s,
                is_first_log: y
            })
        }()), c = 0, d = 0, y = !1, s = l)
    }

    function O() {
        i || (i = setInterval(S, 1e4))
    }

    function P() {
        clearInterval(i), i = null
    }

    function R() {
        const e = St(si(t.currentTime), 3);
        r ? r++ : r = 1, a = e, l = e, c = 0, d = 0, f = e, C = g()
    }

    function N(e) {
        let n;
        switch (e) {
            case gr.FINISH_VIDEO:
                n = {
                    session_segment_id: r,
                    segment_start_time: a,
                    log_end_time: l,
                    is_first_log: T
                };
                break;
            case gr.PLAY_VIDEO:
                n = {
                    session_segment_id: r,
                    segment_start_time: a,
                    log_end_time: l,
                    video_duration_ms: Vo(t.config.video.duration)
                };
                break;
            default:
                n = {
                    session_segment_id: r,
                    segment_start_time: a,
                    log_end_time: l
                }
        }
        return n
    }
    t.events.on(E.PLAY, (function() {
        if (O(), !_)
            if (_ = !0, t.backbone.isLive()) {
                const e = ({
                    currentTime: n
                }) => {
                    0 !== n && (L(), t.events.off(E.TIME_UPDATE, e))
                };
                t.events.on(E.TIME_UPDATE, e)
            } else L()
    })), t.events.on(E.PAUSE, (function() {
        t.backbone.ended || t.backbone.seeking || m || (S(), P())
    })), t.events.on(E.SEEKING, (function() {
        _ && !p && (p = !0, S(), n(gr.START_VIDEO_SCRUB, t.config, N(gr.START_VIDEO_SCRUB)), P())
    })), t.events.on(E.SEEKED, b(I, 750)), t.events.on(E.ENDED, A), t.events.on(E.TIME_UPDATE, (function() {
        if (t.backbone.seeking) return;
        const n = si(St(t.currentTime, 3)),
            i = m ? f : n;
        let r = Math.round(i - f);
        const l = g();
        if (r = function(e, n, i) {
                const o = t.backbone.playbackRate || 1,
                    r = C || i,
                    a = Math.round((i - r) * o),
                    l = Math.max(a, 0),
                    s = Vo(t.config.video.duration);
                return !t.backbone.isLive() && s && n > s || l && e > 1.3 * l ? Math.min(e, l) : e
            }(r, i, l), r <= 0) return;
        v = i;
        const s = [a, i];
        if (c += r, o.iOS && t.backbone.isLive()) {
            d += St(Mo(u, s), 3);
            const t = function(e, t) {
                const [n, i] = t;
                return e.map(((e, t) => {
                    const [o, r] = e;
                    return n >= o && n <= r || i >= o && i <= r || o <= n && r >= i || n <= o && i >= r ? t : null
                })).filter((e => null !== e))
            }(u, s);
            u = function(t, n, i) {
                const [o, r] = n;
                let a;
                if (i.length) a = Math.min.apply(Math, e(i));
                else {
                    const e = t.findIndex((e => o < e[0]));
                    a = -1 === e ? t.length : e
                }
                const l = e(t),
                    s = [Math.min.apply(Math, [o].concat(e(i.map((e => t[e][0]))))), Math.max.apply(Math, [r].concat(e(i.map((e => t[e][1])))))];
                return l.splice(a, i.length, s), l
            }(u, s, t)
        } else {
            const e = t.backbone.played;
            d += St(Mo(u, s), 3), u = function(e) {
                const t = e.length,
                    n = [];
                for (let i = 0; i < t; i++) {
                    const t = e.start(i),
                        o = e.end(i);
                    n.push([si(St(t, 3)), si(St(o, 3))])
                }
                return n
            }(e)
        }
        f = i, C = l, t.config.embed.loop && function(e) {
            if (_ && e >= Vo(t.config.video.duration) - 300) {
                A();
                const e = () => {
                    t.currentTime >= 0 && (t.events.off(E.TIME_UPDATE, e), L())
                };
                t.events.on(E.TIME_UPDATE, e)
            }
        }(v)
    })), t.events.on(zt._scrubbingStarted, (function() {
        m = !0
    })), t.events.on(zt._scrubbingEnded, (function() {
        m = !1, p && I()
    })), t.events.on(zt._configChanged, (e => {
        e && (P(), r = null, a = null, l = null, s = null, c = 0, d = 0, u = [], _ = !1, p = !1, m = !1, v = 0, f = 0, C = g(), T = !0, y = !0)
    })), window.addEventListener("pagehide", (function() {
        S()
    }))
}
let Sr = {
        transcriptId: null,
        transcriptStartTime: null,
        transcriptDefaultLanguage: null,
        currentTime: null,
        leadUuid: null,
        contentType: null,
        playerBreakpoint: null,
        playerWidth: 0,
        playerHeight: 0
    },
    Or = function() {
        function e(e) {
            y(this, "player", void 0), this.player = e, this._configure(), this._setupEventListeners()
        }
        var t = e.prototype;
        return t._configure = function() {
            const e = this._getBPService(),
                t = Nr(gr.WEB_GLOBAL, this.player.config),
                n = new C.Configuration(e, t, null, this.player.config.request.urls.telemetry_base);
            C.BigPictureClient.configure(n)
        }, t._setupEventListeners = function() {
            Pr(h({
                playerBreakpoint: this.player.store.get("ui.player.breakpoint"),
                playerWidth: this.player.store.get("ui.player.width"),
                playerHeight: this.player.store.get("ui.player.height")
            }, zo(this.player.config))), this.player.events.on(E.TIME_UPDATE, (({
                currentTime: e
            }) => {
                Pr({
                    currentTime: e
                })
            })), this.player.events.on(zt._transcriptSessionStarted, (({
                id: e,
                startTime: t,
                defaultLanguage: n
            }) => {
                Pr({
                    transcriptId: e,
                    transcriptStartTime: t,
                    transcriptDefaultLanguage: n
                })
            })), this.player.events.on(zt._accessGateClosed, (e => {
                null != e && e.leadUuid && Pr({
                    leadUuid: e.leadUuid
                })
            })), this.player.events.on(zt._configChanged, (() => {
                Pr(h({}, zo(this.player.config)))
            })), this.player.store.watch("ui.player.breakpoint", (e => {
                Pr({
                    playerBreakpoint: e
                })
            })), this.player.store.watch("ui.player.width", (e => {
                Pr({
                    playerWidth: e
                })
            })), this.player.store.watch("ui.player.height", (e => {
                Pr({
                    playerHeight: e
                })
            }))
        }, t._getBPService = function() {
            let e;
            switch (this.player.config.request.urls.telemetry_base) {
                case C.Service.FRESNEL_PROD_CN:
                    e = C.Service.FRESNEL_PROD_CN;
                    break;
                case C.Service.EVENTS_PROD:
                    e = C.Service.EVENTS_PROD;
                    break;
                case C.Service.FRESNEL_PROD:
                    e = C.Service.FRESNEL_PROD;
                    break;
                default:
                    e = C.Service.FRESNEL_DEV
            }
            return e
        }, e
    }();

function Pr(e) {
    Object.assign(Sr, e)
}

function Rr(e) {
    return Cr[e]
}

function Nr(e, t, n = {}) {
    const i = function(e, t, n = {}) {
            let i = Object.assign({}, function(e, t) {
                var n, i, r, a, l;
                const {
                    user: s,
                    request: c,
                    video: d,
                    embed: u
                } = t;
                switch (e) {
                    case gr.WEB_GLOBAL:
                        return {
                            user: {
                                subscription_type: s.account_type || null,
                                is_mod: !!s.mod,
                                session_id: c.session || null,
                                teams: s.team_id ? [{
                                    team_id: s.team_id,
                                    team_role: fo(t)
                                }] : [],
                                user_id: s.id || null,
                                vuid: Ho("vuid") || null,
                                flags: c.flags ? Object.keys(c.flags) : null,
                                is_free_trial: !1
                            },
                            application: {
                                application: "vimeo",
                                vimeo_language: c.lang || "en",
                                product: uo(t),
                                build_environment: "production",
                                version: _o()
                            },
                            platform: {
                                device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                                screen: {
                                    dpi: screen.pixelDepth,
                                    height: screen.height,
                                    width: screen.width,
                                    size: `${screen.width} x ${screen.height}`
                                },
                                network: null,
                                platform: "web"
                            }
                        };
                    case gr.COPY_VIDEO_EMBED_CODE:
                        return {
                            hash: d.unlisted_hash,
                            height: d.height,
                            is_video_password_protected: d.privacy === Wt,
                            product: Ar.WORKFLOW,
                            sizing: u.playsinline ? "fixed" : "responsive",
                            video_embed_privacy: d.embed_permission,
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            width: d.width,
                            actor_resource_role: null,
                            actor_team_role: null,
                            entry_page: null,
                            is_preset_applied: null,
                            location: null,
                            page: null,
                            path: null,
                            team_owner_id: null,
                            team_size: null,
                            team_subscription_type: null,
                            upload_id: null,
                            video_app_id: null,
                            video_status: null,
                            video_type: null
                        };
                    case gr.PLAYER_PERFORMANCE_MEASUREMENT:
                        return {
                            module_player: !1,
                            device_type: mo(),
                            browser: Object.keys(o.browser).find((e => o.browser[e])) || "",
                            device_os: vo(),
                            iframed: ko(),
                            measurement_type: null,
                            measurement_value: null
                        };
                    case gr.CHAPTER_SEGMENT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: (null == (r = d.owner) ? void 0 : r.id) || 0,
                            is_creator_mode: !!s.owner,
                            chapter_seek_event_delta: null,
                            fragment_no_chapters_at_seek: null,
                            is_chapter_seek: null,
                            nearest_chapter_start_time: null,
                            seek_event_start_time: null,
                            total_no_chapters_at_seek: null
                        };
                    case gr.CLICK:
                        return {
                            page: Qi(t),
                            click_type: null,
                            copy: null,
                            device_type: null,
                            feature: null,
                            location: null,
                            name: null,
                            path: null,
                            target: null,
                            target_path: null,
                            type: null
                        };
                    case gr.EMBEDDED_TRANSCRIPT_CLICK:
                        return {
                            video_id: d.id,
                            team_owner_id: (null == (a = d.owner) ? void 0 : a.id) || 0,
                            total_clip_duration: St(d.duration, 2),
                            embedded_transcript_session_id: Sr.transcriptId,
                            session_duration: St(li(Sr.transcriptStartTime), 2),
                            default_transcript_language: Sr.transcriptDefaultLanguage,
                            video_timestamp: St(Sr.currentTime, 2) || 0,
                            copy: null,
                            current_transcript_language: null,
                            element: null,
                            location: null,
                            name: null
                        };
                    case gr.CLOSED_CAPTIONS_CLICK:
                        return {
                            video_id: d.id,
                            video_privacy: d.privacy,
                            final_action_reset_all: null,
                            has_changed_background: null,
                            has_changed_font: null,
                            has_changed_window: null,
                            has_clicked_background: null,
                            has_clicked_window: null,
                            has_clicked_customize: null,
                            has_clicked_font: null,
                            has_customized: null,
                            has_reset_all: null,
                            language_selected: null
                        };
                    case gr.MULTI_AUDIO_TRACK_CLICK:
                        return {
                            video_id: `${d.id||""}`,
                            video_privacy: d.privacy,
                            video_owner_id: `${null==(l=d.owner)?void 0:l.id}`,
                            page: Qi(t),
                            event_name: null,
                            has_selected_track: null,
                            initial_track: null,
                            track_selected: null
                        };
                    case gr.OPEN_AI_OPTIONS:
                        return {
                            if_uploader: !!s.owner,
                            value: null
                        };
                    case gr.REACH_TIME_ACTION:
                        return {
                            time_action_id: null
                        };
                    case gr.VIEW_HOTSPOT:
                        return {
                            hotspot_id: null
                        };
                    case gr.CLICK_HOTSPOT:
                        return {
                            hotspot_id: null,
                            overlay_id: null,
                            click_action_type: null,
                            clickout_id: null
                        };
                    case gr.VIEW_OVERLAY:
                        return {
                            overlay_id: null
                        };
                    case gr.CLOSE_OVERLAY:
                        return {
                            overlay_id: null,
                            dwell_time: null
                        };
                    case gr.CLICK_OVERLAY:
                        return {
                            overlay_id: null,
                            click_action_type: null,
                            clickout_id: null
                        };
                    case gr.VIEW_POLL:
                        return {
                            poll_id: null
                        };
                    case gr.VOTE_POLL:
                        return {
                            poll_id: null,
                            poll_option_id: null,
                            is_poll_option_correct: null
                        };
                    default:
                        return {}
                }
            }(e, t), n);
            return i
        }(e, t, n),
        r = Rr(e);
    return new C.Event(e, r, i)
}

function wr(e, t, n = {}, i = {}) {
    const r = Nr(e, t, n),
        a = function(e, t, n = {}) {
            const i = Lr[e];
            return i ? i.reduce(((e, i) => {
                var r;
                if (i === Er.LIVE && (null == (r = t.video) || !r.live_event_id)) return e;
                const a = Rr(i),
                    l = n[i] || {},
                    s = function(e, t, n = {}) {
                        let i = Object.assign({}, function(e, t) {
                            var n, i, r, a;
                            const {
                                embed: l,
                                user: s,
                                request: c,
                                video: d
                            } = t;
                            switch (e) {
                                case Er.TEAM:
                                    return {
                                        team_owner_id: s.team_origin_user_id,
                                        team_subscription_type: s.account_type,
                                        team_role: fo(t),
                                        team_id: s.team_id,
                                        joined_team_at: null,
                                        resource_permission_level: null,
                                        team_size: null
                                    };
                                case Er.WEB:
                                    return {
                                        location: "player",
                                        page_name: Qi(t),
                                        referrer: c.referrer,
                                        copy: null,
                                        path: null,
                                        referrer_page_name: null,
                                        target: null,
                                        target_path: null
                                    };
                                case Er.VIDEO:
                                    return {
                                        video_id: d.id,
                                        title: d.title,
                                        video_privacy: d.privacy,
                                        video_embed_privacy: d.embed_permission,
                                        content_rating: [`${null==(n=d.rating)?void 0:n.id}`],
                                        duration: Math.round(d.duration),
                                        resolution: `${d.width}x${d.height}`,
                                        video_height: d.height,
                                        video_width: d.width,
                                        orientation: ho(d.width, d.height),
                                        is_auto_cc_enabled: null,
                                        upload_method_api: null,
                                        upload_method_api_id: null,
                                        is_demo: null,
                                        video_owner_id: (null == (i = d.owner) ? void 0 : i.id) || 0,
                                        video_owner_account_type: (null == (r = d.owner) ? void 0 : r.account_type) || "",
                                        video_categories: null,
                                        has_embed_available: !!l.settings.embed,
                                        video_version_id: bo(null == (a = d.version) ? void 0 : a.available),
                                        embed_context: l.context
                                    };
                                case Er.PLAYER:
                                    return {
                                        player_session_id: c.session,
                                        total_video_duration: d.duration,
                                        video_timestamp: St(Sr.currentTime, 2) || 0,
                                        player_location: l.on_site ? "onsite" : "embed",
                                        player_breakpoint: Sr.playerBreakpoint,
                                        player_width: Math.floor(Sr.playerWidth),
                                        player_height: Math.floor(Sr.playerHeight)
                                    };
                                case Er.ACTION:
                                    return {
                                        feature: "player",
                                        action_type: o.touch ? "tap" : "click"
                                    };
                                case Er.VIEW:
                                    return {
                                        feature: "player",
                                        view_type: "impression"
                                    };
                                case Er.LIVE:
                                    return {
                                        recurring_live_event_id: `${d.live_event_id}`,
                                        live_event_id: null,
                                        live_status: go(null == d ? void 0 : d.live_event),
                                        live_production_method: null,
                                        encoder_type: null,
                                        audience_type: Eo(d),
                                        lead_source: null,
                                        event_privacy: Co(d.privacy),
                                        live_feature: null,
                                        is_guest_speaker: null
                                    };
                                case Er.PRODUCT_ANALYTICS:
                                    return {
                                        product: "viewer_experience",
                                        feature: "player",
                                        location: "player",
                                        modal_name: null,
                                        flow: null,
                                        element: null,
                                        copy: null,
                                        device_type: mo(),
                                        is_user_facing_data: null,
                                        entity_type: null
                                    };
                                case Er.TARGET_TEAM:
                                    return {
                                        is_team_member: !!s.team_id,
                                        team_owner_id: s.team_origin_user_id,
                                        team_subscription_type: s.account_type,
                                        team_role: fo(t),
                                        team_id: s.team_id,
                                        team_size: null,
                                        resource_permission_level: null,
                                        joined_team_at: null
                                    };
                                case Er.USER_FACING_VIDEO_ANALYTICS:
                                    const e = c.atid,
                                        [u, _] = e.split(".").map(Number);
                                    return {
                                        session_ts: _,
                                        session_id: u,
                                        lead_id: Sr.leadUuid,
                                        content_type: Sr.contentType,
                                        is_do_not_track: !!l.dnt,
                                        playback_route: "player_embed",
                                        is_session_live: null
                                    };
                                case Er.THIRD_PARTY_INTEGRATION:
                                    return {
                                        is_integration: !1,
                                        integration_id: null,
                                        integration_type: null,
                                        integration_name: null,
                                        app_id: null,
                                        managed_user_id: null,
                                        partner_bucket: null,
                                        is_partner: null
                                    };
                                default:
                                    return {}
                            }
                        }(e, t), n);
                        return i
                    }(i, t, l);
                return e[i] = new C.EventContext(i, a, s), e
            }), {}) : {}
        }(e, t, i);
    C.BigPictureClient.sendEventWithContexts(r, a)
}
const Dr = {
    product_analytics_context: {
        product: "analysis",
        feature: "interactive"
    }
};
let kr = function() {
    function e(e) {
        y(this, "_overlayOpenTime", void 0), y(this, "_config", void 0), this._config = e, this._overlayOpenTime = new Map
    }
    var t = e.prototype;
    return t._sendEvent = function(e, t = {}) {
        wr(e, this._config, t, Dr)
    }, t.sendReachTimeAction = function({
        timeActionId: e
    }) {
        this._sendEvent(gr.REACH_TIME_ACTION, {
            time_action_id: e
        })
    }, t.sendViewHotspot = function({
        hotspotId: e
    }) {
        this._sendEvent(gr.VIEW_HOTSPOT, {
            hotspot_id: e
        })
    }, t.sendClickHotspot = function({
        hotspotId: e,
        clickActionType: t,
        clickoutId: n,
        overlayId: i
    }) {
        this._sendEvent(gr.CLICK_HOTSPOT, {
            hotspot_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null,
            overlay_id: null != i ? i : null
        })
    }, t.sendViewOverlay = function({
        overlayId: e
    }) {
        this._overlayOpenTime.set(e, g()), this._sendEvent(gr.VIEW_OVERLAY, {
            overlay_id: e
        })
    }, t.sendCloseOverlay = function({
        overlayId: e
    }) {
        const t = this._overlayOpenTime.get(e),
            n = g() - t;
        this._sendEvent(gr.CLOSE_OVERLAY, {
            overlay_id: e,
            dwell_time: n
        })
    }, t.sendClickOverlay = function({
        overlayId: e,
        clickActionType: t,
        clickoutId: n
    }) {
        this._sendEvent(gr.CLICK_OVERLAY, {
            overlay_id: e,
            click_action_type: t,
            clickout_id: null != n ? n : null
        })
    }, t.sendViewPoll = function({
        pollId: e
    }) {
        this._sendEvent(gr.VIEW_POLL, {
            poll_id: e
        })
    }, t.sendVotePoll = function({
        pollId: e,
        pollOptionId: t,
        isPollOptionCorrect: n
    }) {
        this._sendEvent(gr.VOTE_POLL, {
            poll_id: e,
            poll_option_id: t,
            is_poll_option_correct: null != n ? n : null
        })
    }, e
}();

function Mr(e) {
    return Math.random() <= e
}

function Vr(e, t, n = .1) {
    Mr(n) && ((e, t = {}) => {
        if (hr && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1
            });
            window.DD_RUM.addError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", (e => {
    e.preventDefault(), e.reason && Vr(e.reason, {
        unhandled_rejection: 1
    })
}));
var Br = {
    setUp: function(e, t = yi.VimeoPlayer) {
        ((e, t = yi.VimeoPlayer) => {
            if (hr) {
                var n, i, o;
                const r = {
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: uo(e),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (n = e.video.live_event) ? void 0 : n.id,
                    rawUserAgent: navigator.userAgent,
                    background_mode: Number(1 === (null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.background)),
                    player_name: t,
                    owner_account_type: null == (o = e.video.owner) ? void 0 : o.account_type
                };
                if (e.request.ab_tests)
                    for (const t in e.request.ab_tests) {
                        const n = e.request.ab_tests[t];
                        r[`${t}_test`] = 1, r[`${t}_group`] = n.group;
                        for (const e in n.data) r[`${t}_data_${e}`] = n.data[e]
                    }
                e.user.logged_in && (r.userId = e.user.id);
                for (let e in r) window.DD_RUM.setGlobalContextProperty(e, r[e]);
                if (t) {
                    const e = `has${t}`;
                    window.DD_RUM.setViewContextProperty(e, 1)
                }
            }
        })(e, t)
    },
    captureException: Vr,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            hr && window.DD_RUM.addAction(e)
        })(e)
    }
};
let xr;

function Ur({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        a = {
            video: {},
            request: {},
            embed: {}
        };

    function l() {
        return n && n - 6e4 <= Date.now()
    }

    function s(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout((() => {
            "onLine" in navigator && !navigator.onLine || o || (o = d().catch(Br.captureException))
        }), 1e3 * e - 6e4 - 5e3), t
    }

    function c(e, i = {}) {
        var o, l;
        clearTimeout(r);
        const c = t;
        if (isNaN(e) && "string" != typeof e) {
            t = e, n = s(t.request.expires);
            let i = new URL(window.location.href);
            const o = i.searchParams.get("referrer"),
                r = i.searchParams.get("player_id");
            return o && (t.request.referrer = o, i.searchParams.delete("referrer")), r && (t.embed.player_id = r, i.searchParams.delete("player_id")), Promise.resolve({
                old: c,
                loaded: t
            })
        }
        Date.now(), a = L(a, t);
        const d = a.request.referrer;
        d && (i.referrer = d), i.s = a.request.signature, i.expires = a.request.expires, i.time = a.request.timestamp, xr || (xr = Lt(e));
        const u = At(xr || (null != (o = t) && o.player_url ? `https://${null==(l=t)?void 0:l.player_url}` : ""), e, i);
        return T(u, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then((e => (t = e, t.view !== en.error && (n = s(t.request.expires), a.request.session && t.video.id === a.video.id && (t.request.session = a.request.session), d && (t.request.referrer = d), a.embed.player_id && (t.embed.player_id = a.embed.player_id), a.embed.on_site && (t.embed.on_site = 1, t.embed.context = a.embed.context)), Date.now(), {
            old: c,
            loaded: t
        }))).catch((e => {
            Br.captureException(e)
        }))
    }

    function d() {
        var i;
        clearTimeout(r), Date.now();
        const a = null == (i = t) ? void 0 : i.request.referrer,
            {
                signature: l,
                session: c,
                timestamp: d,
                expires: u,
                atid: _
            } = t.request,
            p = t.request.ott_chromecast_token;
        let m = `https://${t.player_url}/video/${t.video.id}/config/request?atid=${_}&session=${c}&signature=${l}&time=${d}&expires=${u}`;
        return p && (m = `${m}&ott_chromecast_token=${p}`), a && (m += `${-1===m.indexOf("?")?"?":"&"}referrer=${encodeURIComponent(a)}`), T(m, {
            withCredentials: !0,
            retry: 3
        }).json().then((i => (t.request = i, a && (t.request.referrer = a), n = s(t.request.expires), Date.now(), o = null, e.fire(zt._assetUrlsRefreshed), t.request))).catch((t => {
            const n = Mn();
            throw e.fire(zt._error, n.type, n), t
        }))
    }
    return window.addEventListener("online", (() => {
        l() && (o = d().catch(Br.captureException))
    })), e.on(zt._error, (e => {
        o || "media-url-expired" !== e || (o = d().catch(Br.captureException))
    })), {
        get isExpired() {
            return l()
        },
        load: (e, t) => c(e, t),
        reload() {
            var e;
            return null != (e = t) && e.video.id ? c(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => l() ? (o || (o = d()), o) : Promise.resolve(t.request),
        refreshAssetUrls: () => d(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}
const Hr = (e, t, n) => {
        let i;
        try {
            i = new URL(e)
        } catch (De) {
            return null
        }
        const o = Array.isArray(t) ? t : [t],
            r = o.map((function(e) {
                return `${cn}${e}`
            })).concat(o),
            a = new URLSearchParams(i.hash.substring(1));
        let l = null;
        return r.some((e => {
            const t = `${e}_${n}`,
                i = a.get(t) || a.get(e);
            return !!i && (l = (e => {
                var t;
                let n, i = !1,
                    o = "0",
                    r = "0",
                    a = "0",
                    l = e;
                const s = l.startsWith("-");
                if (s && (l = l.substring(1)), n = l.match(/^(\d*\.?\d+)$/), null != (t = n) && t.length && (i = !0, a = n[0]), !1 === i && (n = l.match(/^(?:(\d*\.?\d+)h)?(?:(\d*\.?\d+)m)?(?:(\d*\.?\d+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = "0", r = "0", a = "0"] = n)), !1 === i && (n = l.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = "0", o = "0"] = l.split(":").reverse())), !i) return null;
                const c = 60 * Number(o) * 60 + 60 * Number(r) + Number(a);
                return s ? -c : c
            })(i), !0)
        })), l
    },
    Fr = (e, t, n) => -1 === e.indexOf("#") ? null : Hr(e, t, n);

function Gr(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Wr = $r((function(e) {
    return new Promise(((t, n) => {
        qr(e) ? t() : (e.events.once(E.LOADED_DATA, (() => {
            qr(e) && t()
        })), e.events.once(E.PLAYING, (() => {
            n("Video started playing before start time thumbnail could be shown")
        })))
    }))
}));

function Yr() {}

function $r(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}
const Kr = $r((function(e) {
    return function() {
        var t = function() {
            if (jr(e)) return function(e) {
                if (e && e.then) return e.then(Yr)
            }(function(e, t) {
                try {
                    var n = e()
                } catch (De) {
                    return t(De)
                }
                return n && n.then ? n.then(void 0, t) : n
            }((function() {
                return Gr(e.ready(), (function() {
                    return Gr(e.inView(), (function() {
                        return e.backbone.preload = "auto", Gr(Wr(e), (function() {
                            ! function(e) {
                                var t;
                                null == (t = e.backbone.element) || null == (t = t.classList) || t.remove("invisible"), e.events.fire(jt._hideVideoThumbnail)
                            }(e)
                        }))
                    }))
                }))
            }), (function(e) {})))
        }();
        if (t && t.then) return t.then(Yr)
    }()
}));

function qr(e) {
    return e.currentTime === e.startTime && e.backbone.readyState >= Ai.HAVE_CURRENT_DATA
}

function jr(e) {
    var t;
    const n = 1 === (null == e || null == (t = e.config) || null == (t = t.embed) ? void 0 : t.autoplay);
    return o.videoContentPreload && e.segmentedPlaybackEnabled && !n
}

function zr(e) {
    return !!jr(e) && e.backbone.readyState < Ai.HAVE_CURRENT_DATA
}
const Xr = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}((function(e) {
    const {
        events: t
    } = e;
    return new Promise((n => {
        t.on(zt._parentUrlAvailable, (function(i) {
            const {
                backbone: o
            } = e, {
                startTime: r,
                endTime: a
            } = function(e, t) {
                const {
                    video: n,
                    embed: i
                } = t.config, o = n.id, r = n.duration, a = i.chapters, l = ((e, t) => Fr(e, ln, t))(e, o);
                let s, c;
                return l ? (({
                    startTime: s,
                    endTime: c
                } = Qr(l, a)), ea(t, l)) : (s = ((e, t) => Fr(e, sn, t))(e, o), c = ((e, t) => Fr(e, "end", t))(e, o)), ({
                    startTime: s,
                    endTime: c
                } = Jr(s, c, r)), {
                    startTime: s,
                    endTime: c
                }
            }(i, e);
            n({
                startTime: r,
                endTime: a
            }), null !== r && o.currentTime !== r && t.fire(jt._setTime, r, r / o.duration)
        }))
    }))
}));

function Zr(e) {
    const {
        video: t,
        embed: n
    } = e.config;
    let i;
    if (null == t || !t.live_event) {
        let i = null,
            r = null;
        const a = ((e, t) => Hr(e, ln, t))(document.location.href, t.id);
        a ? (({
            startTime: i,
            endTime: r
        } = Qr(a, n.chapters)), ea(e, a)) : ({
            startTime: i,
            endTime: r
        } = function(e, t) {
            const n = document.location.href;
            let i = ((e, t) => Hr(e, sn, t))(n, e),
                o = ((e, t) => Hr(e, "end", t))(n, e);
            var r;
            return null !== i && function(e) {
                var t; - 1 !== e.indexOf("at=") && null != (t = history) && t.replaceState && history.replaceState("", "", window.location.pathname + window.location.search)
            }(null == (r = document) || null == (r = r.location) ? void 0 : r.hash), ({
                startTime: i,
                endTime: o
            } = Jr(i, o, t)), {
                startTime: i,
                endTime: o
            }
        }(t.id, t.duration)), o(i, r), null === i && null === r && function(e, t) {
            e && e.then || (e = Promise.resolve(e)), t && e.then(t)
        }(Xr(e), (function({
            startTime: e,
            endTime: t
        }) {
            o(e, t)
        }))
    }

    function o(o, r) {
        null !== o && (e.startTime = yt(o, 0, t.duration)), null !== r && (e.endTime = r, i = function({
            player: e,
            startTime: t,
            endTime: n,
            loop: i = !1
        }) {
            let o = !0,
                r = !1;
            const {
                events: a
            } = e;
            (function() {
                const i = n - t,
                    o = {
                        duration: i,
                        endTime: n,
                        startTime: t
                    },
                    r = {
                        get currentFragment() {
                            return o
                        },
                        firstFragmentDuration: i,
                        checkForNewFragment: hi,
                        reset: hi,
                        hibernate: hi,
                        wake: hi,
                        getFragmentFromTime: () => o
                    },
                    a = function(e, t) {
                        return [1e3 * e, 1e3 * t]
                    }(t, n);
                e.overrideFragmentsHandler(r, a)
            })(), Kr(e), a.on(E.TIME_UPDATE, l), a.on(zt._playButtonPressed, c), a.on(zt._configChanged, d), a.on(E.SEEKED, u), a.once(A, (function() {
                o && wr(gr.PLAY_SEGMENT, e.config, {
                    start_time: t,
                    end_time: n
                })
            }));
            return () => {
                o = !1, a.off(E.TIME_UPDATE, l), a.off(zt._playButtonPressed, c), a.off(zt._configChanged, d), a.off(E.SEEKED, u), e.restoreLastFragmentsHandler()
            };

            function l({
                currentTime: o
            }) {
                o >= n && (i ? s(t) : (e.backbone.pause(), a.fire(E.ENDED)))
            }

            function s(t) {
                r = !1, e.backbone.currentTime = t
            }

            function c() {
                e.backbone && (e.backbone.currentTime >= n || e.backbone.currentTime < t) && s(t)
            }

            function d(t) {
                t && (e.startTime = null, e.endTime = null)
            }

            function u() {
                o && r && wr(gr.SEEK_INSIDE_SEGMENT, e.config, {
                    start_time: t,
                    end_time: n
                }), r = !0
            }
        }({
            player: e,
            startTime: null != o ? o : 0,
            endTime: r,
            loop: n.loop
        }), e.ready().then((() => {
            wr(gr.EMBED_SEGMENT, e.config, {
                start_time: o,
                end_time: r
            })
        })).catch((e => {})))
    }
    return {
        clearSegmentedPlayback: () => null == i ? void 0 : i()
    }
}

function Qr(e, t) {
    const n = null == t ? void 0 : t.find((t => t.id === e));
    let i = {
        startTime: null,
        endTime: null
    };
    return n && (i = {
        startTime: n.timecode,
        endTime: null
    }), i
}

function Jr(e, t, n) {
    let i = e,
        o = t;
    return i && (i = Math.max(i, 0)), o && (o < 0 && (o = Math.max(0, n + o)), o = Math.min(o, n), i ? i > o && (i = null, o = null) : i = 0), {
        startTime: i,
        endTime: o
    }
}

function ea(e, t) {
    e.events.once(A, (() => {
        wr(gr.CHAPTER_PLAYED, e.config, {
            chapter_id: t
        })
    }))
}

function ta(e) {
    const t = !jr(e);

    function n(e) {
        if ("opacity" === e.propertyName) {
            const e = i();
            var t;
            e && (I(e).off("transitionend", n), null == e || null == (t = e.parentNode) || t.removeChild(e))
        }
    }

    function i() {
        return document.querySelector(".vp-placeholder")
    }
    return {
        hide: function() {
            if (t) {
                const e = i();
                e && (I(e).on("transitionend", n), e.classList.add("vp-placeholder-fadeout"))
            }
        }
    }
}
const na = "CAPTIONS_RESET",
    ia = "CAPTIONS_SET_FONT_SIZE",
    oa = "CAPTIONS_SET_FONT_FAMILY",
    ra = "CAPTIONS_SET_FONT_OPACITY",
    la = "CAPTIONS_SET_COLOR",
    sa = "CAPTIONS_SET_BACKGROUND_OPACITY",
    ca = "CAPTIONS_SET_BACKGROUND_COLOR",
    da = "CAPTIONS_SET_WINDOW_OPACITY",
    ua = "CAPTIONS_SET_WINDOW_COLOR",
    _a = "CAPTIONS_SET_EDGE_STYLE",
    pa = e => ({
        type: ia,
        payload: e
    }),
    ma = e => ({
        type: oa,
        payload: e
    }),
    va = e => ({
        type: ra,
        payload: e
    }),
    fa = e => ({
        type: la,
        payload: e
    }),
    ha = e => ({
        type: sa,
        payload: e
    }),
    ga = e => ({
        type: ca,
        payload: e
    }),
    Ea = e => ({
        type: da,
        payload: e
    }),
    ba = e => ({
        type: ua,
        payload: e
    }),
    Ca = e => ({
        type: _a,
        payload: e
    }),
    ya = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: ga
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: fa
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: pa
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: ma
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: va
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: Ca
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: ha
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: ba
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: Ea
        }
    }),
    Ta = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    },
    La = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let Aa = null;

function Ia(e) {
    const t = ya(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = Ho("player")
        } catch (De) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = Uo(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = Uo(n), i && function(t, n) {
            if (Aa) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    Aa.then((n => {
                        const i = bt(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    })).catch((t => {
                        Br.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    }))
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            La.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            La.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(La);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=Uo(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    return document.cookie = a, !0
                } catch (De) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        const o = !0;
        switch (t) {
            case "sync_quality":
                e.events.fire(jt._changeQuality, n, o);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(jt._changeVolume, n, o);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(jt._turnCaptionsOff, o);
                    break
                }
                e.events.fire(jt._turnCaptionsOn, n, o);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(zt._userLogIn) : !t && e.config.user.logged_in && e.events.fire(zt._userLoggedOut))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(zt._becameInactive)
        }
    }
    return e.events.on(zt._qualityChanged, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = Uo(t), n || r("volume", t, !1)
            };
            e.events.on(zt._volumeChanged, t), e.events.on(zt._mutedChanged, ((e, n) => {
                e && t(0, n)
            }))
        }(), e.events.on(zt._captionsChanged, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = Uo(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(jt._changeCaptionsStyles, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, Uo(n))
        })), e.events.on(jt._resetCaptionsStyles, (function() {
            e.store.dispatch({
                type: na
            }), Object.keys(t).forEach((e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            }))
        })), e.events.on(zt._transcriptChanged, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = Uo(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(jt._changeAudioTrack, (function(n, i) {
                e.config.request.cookie.audio_language = null != n && n.language ? Uo(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? Uo(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(zt._qoeSurveyPresented, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(zt._playButtonPressed, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(zt._becameActive))
        })), e.events.on([zt._pauseButtonPressed, zt._ended], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(zt._userLoggedIn, (function() {
            r("login", !0)
        })), n && !Aa && (Aa = function(t) {
            return new Promise(((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = bt(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout((() => {
                    i()
                }), 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            }))
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = bt(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    Br.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}
const Sa = {
        id: "7742C69E",
        name: "prod"
    },
    Oa = {
        id: "BA42D416",
        name: "prod"
    },
    Pa = {
        id: "78077C77",
        name: "prod"
    },
    Ra = "urn:x-cast:com.vimeo.cast.media",
    Na = {
        connected: kt(),
        disconnected: kt(),
        playing: kt(),
        paused: kt(),
        buffering: kt(),
        idle: kt(),
        ended: kt(),
        initialized: kt(),
        castStateChanged: kt(),
        sessionStateChanged: kt(),
        timeUpdated: kt(),
        mediaLoadedSuccess: kt(),
        mediaLoadedFailed: kt(),
        error: kt()
    };
let wa = function() {
        function e({
            core: e
        }) {
            this._core = e, this._onControlSeek = this.onControlSeek.bind(this), this._onPlayerMutedChanged = this.onPlayerMutedChanged.bind(this), this._onPlayerVolumeChanged = this.onPlayerVolumeChanged.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onCastStateChanged = this.onCastStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._onReceiverMutedChanged = this.onReceiverMutedChanged.bind(this), this._onReceiverVolumeChanged = this.onReceiverVolumeChanged.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = N(this._endVideo, 500), this._onOutroDisplayed = this.onOutroDisplayed.bind(this), this._onOutroHidden = this.onOutroHidden.bind(this), this.volumeLevel = null, this.mutedState = null
        }
        var t = e.prototype;
        return t.calculateStartTime = function(e = null) {
            let t = Number(e) || this._core.backbone.currentTime - 7;
            return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
        }, t.loadMedia = function({
            contentId: e,
            currentTime: t = null,
            duration: n = null,
            token: i = null,
            bypassToken: o = null,
            autoRequest: r = !1,
            autoCaption: a = !0,
            autoDisconnect: l = !0,
            tracks: s = []
        } = {}) {
            if (ka.isLoadingMedia) return Promise.resolve(!1);
            const c = this._core.config;
            e = e || c.video.id;
            const d = c.request,
                _ = d.drm;
            let p;
            if (_) {
                const t = u(d, "files.dash.default_cdn");
                e = u(d, `files.dash.cdns.${t}.url`), p = u(_, "cdms.widevine.license_url"), s = (d.text_tracks || []).map((e => {
                    const {
                        pathname: t,
                        search: n
                    } = S(e.url);
                    return h(h({}, e), {}, {
                        url: `https://player.vimeo.com${t}${n}`
                    })
                }))
            }
            const m = this.calculateStartTime(t);
            n = Number(n) || this.duration, i = i || c.user.vimeo_api_client_token, o = o || c.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
            const v = {
                contentId: e,
                duration: n,
                autoRequest: r,
                tracks: s,
                currentTime: m,
                requestCustomData: {
                    token: i,
                    bypassToken: o,
                    tokenType: "jwt"
                }
            };
            return this._core.config.request.ott_chromecast_token && (v.requestCustomData.ottChromecastToken = this._core.config.request.ott_chromecast_token), this._core.config.ottCastOptions && (v.ottCastOptions = this._core.config.ottCastOptions), (p ? this._getLicenseUrl(p).then((e => h(h({}, v), {}, {
                mediaCustomData: {
                    widevineLicenseServerURL: e
                }
            }))) : Promise.resolve(v)).then((e => ka.loadMedia(e))).then((() => (ka.fire(Na.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._core.events.fire(A), this._core.events.fire(jt._hideOutro), this._isOutroRendered = !1, a && this.onCaptionsChanged(this._core.backbone.enabledTextTrack), this._core.backbone.paused || this._core.backbone.pause(), !0))).catch((e => (ka.fire(Na.mediaLoadedFailed, e), l && this.endCurrentSession(), Promise.reject(e))))
        }, t._getLicenseUrl = function(e) {
            return new Promise(((t, n) => {
                const i = new XMLHttpRequest;
                i.open("GET", e), i.onload = () => {
                    const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                    if (i.status >= 200 && i.status < 300) try {
                        t(i.response)
                    } catch (De) {
                        n(e(De))
                    } else n(e(i.status))
                }, i.onerror = n, i.send()
            }))
        }, t.init = function() {
            this.removeInitListeners(), this.addInitListeners()
        }, t.addInitListeners = function() {
            this.addSessionStateListener(), this.addCastStateListener(), this.addIsConnectedListener()
        }, t.endCurrentSession = function(e = !0) {
            ka.castContext && ka.castContext.endCurrentSession(e)
        }, t.syncBackbone = function() {
            !this.isOutroRendered && this._core.backbone.paused && (this._core.backbone.currentTime = this.lastCurrentTime, this.syncTime())
        }, t.stopBackbone = function() {
            this._core.events.fire(jt._reset)
        }, t.storeBackboneData = function() {
            this.lastCurrentTime = this._core.backbone.currentTime
        }, t.applyBackboneData = function() {
            this.lastCurrentTime && (this._core.backbone.currentTime = this.lastCurrentTime)
        }, t.enableUI = function() {
            this._core.events.fire(jt._showVideoThumbnail), this._core.element.classList.add("is-casting")
        }, t.disableUI = function() {
            this.isOutroRendered || (this._core.events.fire(jt._hideVideoThumbnail), this._core.backbone.element.classList.remove("invisible")), this._core.element.classList.remove("is-casting")
        }, t.syncTime = function() {
            const e = this.lastCurrentTime / this.duration;
            ka.fire(Na.timeUpdated, {
                currentTime: this.lastCurrentTime,
                duration: this.duration,
                percent: e
            }), e > 0 && this._core.events.fire(E.TIME_UPDATE, {
                currentTime: this.lastCurrentTime,
                duration: this.duration,
                timeProgress: e
            })
        }, t._endVideo = function() {
            return this._isEndOfVideo = !0, this._core.events.fire(zt._ended), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch((() => {
                this.showOutro()
            })) : this.showOutro(), ka.fire(Na.ended), !0
        }, t.showOutro = function() {
            this.isOutroRendered || (this._isOutroRendered = !0, this._core.events.fire(jt._showOutro))
        }, t.dispose = function() {
            this.endCurrentSession(), this.removeAllRemoteListeners()
        }, t.onIsMediaLoadedChanged = function(e) {
            !1 === e.value ? this.isTimeEnded && this.endVideo() : this._core.backbone.paused || this._core.backbone.pause()
        }, t.onPlayerStateChanged = function(e) {
            switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
                case ka.PlayerState.PLAYING:
                    ka.fire(Na.playing);
                    break;
                case ka.PlayerState.PAUSED:
                    ka.fire(Na.paused);
                    break;
                case ka.PlayerState.BUFFERING:
                    ka.fire(Na.buffering);
                    break;
                case ka.PlayerState.IDLE:
                default:
                    ka.fire(Na.idle)
            }
        }, t.onReceiverVolumeChanged = function(e) {
            null === this.volumeLevel && (this.volumeLevel = ka.remotePlayer ? ka.remotePlayer.volumeLevel : 1), e.value !== this.volumeLevel && (this.volumeLevel = e.value, this._core.events.fire(jt._changeVolume, e.value, !1, !1))
        }, t.onReceiverMutedChanged = function(e) {
            null === this.mutedState && (this.mutedState = !!ka.remotePlayer && ka.remotePlayer.isMuted), this._core.events.fire(jt._changeMuted, e.value, !0)
        }, t.onPlayerMutedChanged = function(e) {
            ka.remotePlayer && ka.remotePlayerController && ka.remotePlayer.isMuted !== e && ka.remotePlayerController.muteOrUnmute()
        }, t.onPlayerVolumeChanged = function(e) {
            this._core.backbone.muted || ka.remotePlayer && ka.remotePlayerController && O(ka.remotePlayer.volumeLevel) !== O(e) && (ka.remotePlayer.volumeLevel = e, ka.remotePlayerController.setVolumeLevel())
        }, t.onCurrentTimeChanged = function(e) {
            this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
        }, t.onCaptionsChanged = function(e) {
            const t = ka.currentSession;
            t && t.sendMessage(Ra, {
                action: "setActiveByLanguage",
                value: null == e ? void 0 : e.language
            })
        }, t.onSessionStateChanged = function(e) {
            switch (e.sessionState) {
                case ka.SessionState.SESSION_STARTING:
                    this.addPreventLocalPlayerEvents();
                    break;
                case ka.SessionState.SESSION_RESUMED:
                case ka.SessionState.SESSION_STARTED:
                    this.loadMedia();
                    break;
                case ka.SessionState.SESSION_ENDING:
                case ka.SessionState.SESSION_ENDED:
                    break;
                case ka.SessionState.SESSION_START_FAILED:
                    this.removePreventLocalPlayerEvents()
            }
            ka.fire(Na.sessionStateChanged, e.sessionState)
        }, t.onCastStateChanged = function(e) {
            ka.fire(Na.castStateChanged)
        }, t.onIsConnectedChanged = function(e) {
            e.value ? this.onConnected() : this.onDisconnected()
        }, t.onConnected = function() {
            this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), ka.fire(Na.connected, ka.currentSessionObj)
        }, t.onDisconnected = function() {
            this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), ka.fire(Na.disconnected)
        }, t.onConfigChanged = function() {
            this.loadMedia()
        }, t.onReset = function() {
            this.loadMedia()
        }, t.onPlayOrPausePressed = function() {
            this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && ka.remotePlayerController.playOrPause(), this._core.events.halt()
        }, t.onControlSeek = function(e) {
            this.currentTime = e, this._core.events.halt()
        }, t.addSessionStateListener = function() {
            ka.castContext && ka.castContext.addEventListener(ka.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
        }, t.addCastStateListener = function() {
            ka.castContext && ka.castContext.addEventListener(ka.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)
        }, t.addMessageListener = function() {
            const e = ka.currentSession;
            e && e.addMessageListener(Ra, this._onMessageReceived)
        }, t.onMessageReceived = function(e, t) {
            "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), ka.fire(Na.error, new Error("Chromecast encountered an error and media finished."))))
        }, t.onOutroDisplayed = function() {
            this._isOutroRendered = !0
        }, t.onOutroHidden = function() {
            this._isOutroRendered = !1
        }, t.addIsConnectedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.addEventListener(ka.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
        }, t.addPreventLocalPlayerEvents = function() {
            this._core.events.prependOn([zt._playButtonPressed, zt._pauseButtonPressed, zt._scrubbingStarted, zt._scrubbingEnded, P.BUFFER_STARTED, P.BUFFER_ENDED, jt._seek, zt._mutedChanged, zt._volumeChanged, zt._captionsChanged, zt._configChanged, jt._reset], this._preventPlayerDefaultEvent)
        }, t.addRemotePlayerListenersOnIdle = function() {
            this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
        }, t.addLocalPlayerListeners = function() {
            this._core.events.prependOn(zt._playButtonPressed, this._onPlayOrPausePressed), this._core.events.prependOn(zt._pauseButtonPressed, this._onPlayOrPausePressed), this._core.events.prependOn(zt._scrubbingStarted, this._preventPlayerDefaultEvent), this._core.events.prependOn(zt._scrubbingEnded, this._preventPlayerDefaultEvent), this._core.events.prependOn(P.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.prependOn(P.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.prependOn(jt._seek, this._onControlSeek), this._core.events.prependOn(zt._mutedChanged, this._onPlayerMutedChanged), this._core.events.prependOn(zt._volumeChanged, this._onPlayerVolumeChanged), this._core.events.on(zt._captionsChanged, this._onCaptionsChanged), this._core.events.on(zt._configChanged, this._onConfigChanged), this._core.events.on(jt._reset, this._onReset), this._core.events.on(zt._outroDisplayed, this._onOutroDisplayed), this._core.events.on(zt._outroHidden, this._onOutroHidden)
        }, t.preventPlayerDefaultEvent = function() {
            this._core.events.halt()
        }, t.addCurrentTimeChangedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.addEventListener(ka.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
        }, t.addIsMediaLoadedChangedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.addEventListener(ka.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
        }, t.addPlayerStateChangedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.addEventListener(ka.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
        }, t.addVolumeLevelChangedListener = function() {
            ka.remotePlayerController && (ka.remotePlayerController.addEventListener(ka.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onReceiverVolumeChanged), ka.remotePlayerController.addEventListener(ka.RemotePlayerEventType.IS_MUTED_CHANGED, this._onReceiverMutedChanged))
        }, t.addRemotePlayerListenersOnPlaying = function() {
            this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
        }, t.removeRemotePlayerListenersOnIdle = function() {
            this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
        }, t.removeInitListeners = function() {
            ka.castContext && (ka.castContext.removeEventListener(ka.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), ka.castContext.removeEventListener(ka.CastContextEventType.CAST_STATE_CHANGED, this._onCastStateChanged)), ka.remotePlayerController && ka.remotePlayerController.removeEventListener(ka.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
        }, t.removeRemotePlayerListenersOnPlaying = function() {
            this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
        }, t.removeMessageListener = function() {
            const e = ka.currentSession;
            e && e.removeMessageListener(Ra, this._onMessageReceived)
        }, t.removeCurrentTimeChangedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.removeEventListener(ka.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
        }, t.removeIsMediaLoadedChangedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.removeEventListener(ka.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
        }, t.removePlayerStateChangedListener = function() {
            ka.remotePlayerController && ka.remotePlayerController.removeEventListener(ka.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
        }, t.removeVolumeLevelChangedListener = function() {
            ka.remotePlayerController && (ka.remotePlayerController.removeEventListener(ka.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onReceiverVolumeChanged), ka.remotePlayerController.removeEventListener(ka.RemotePlayerEventType.IS_MUTED_CHANGED, this._onReceiverMutedChanged))
        }, t.removePreventLocalPlayerEvents = function() {
            this._core.events.off([zt._playButtonPressed, zt._pauseButtonPressed, zt._scrubbingStarted, zt._scrubbingEnded, P.BUFFER_STARTED, P.BUFFER_ENDED, jt._seek, zt._mutedChanged, zt._volumeChanged, zt._captionsChanged, zt._configChanged, jt._reset], this._preventPlayerDefaultEvent)
        }, t.removeLocalPlayerListeners = function() {
            this._core.events.off(zt._playButtonPressed, this._onPlayOrPausePressed), this._core.events.off(zt._pauseButtonPressed, this._onPlayOrPausePressed), this._core.events.off(zt._scrubbingStarted, this._preventPlayerDefaultEvent), this._core.events.off(zt._scrubbingEnded, this._preventPlayerDefaultEvent), this._core.events.off(P.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._core.events.off(P.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._core.events.off(jt._seek, this._onControlSeek), this._core.events.off(zt._mutedChanged, this._onPlayerMutedChanged), this._core.events.off(zt._volumeChanged, this._onPlayerVolumeChanged), this._core.events.off(zt._captionsChanged, this._onCaptionsChanged), this._core.events.off(zt._configChanged, this._onConfigChanged), this._core.events.off(jt._reset, this._onReset)
        }, t.removeRemotePlayerListeners = function() {
            this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
        }, t.removeAllRemoteListeners = function() {
            this.removeRemotePlayerListeners(), this.removeInitListeners()
        }, R(e, [{
            key: "currentTime",
            get: function() {
                return this.lastCurrentTime || 0
            },
            set: function(e) {
                ka.remotePlayer && ka.remotePlayerController && (ka.remotePlayer.currentTime = e, ka.remotePlayerController.seek(), this.lastCurrentTime = e)
            }
        }, {
            key: "isTimeEnded",
            get: function() {
                return this.lastCurrentTime + .5 >= this.duration
            }
        }, {
            key: "isOutroRendered",
            get: function() {
                return this._isOutroRendered || !1
            }
        }, {
            key: "isLooped",
            get: function() {
                return this._core.config.embed.loop
            }
        }, {
            key: "isEndOfVideo",
            get: function() {
                return this._isEndOfVideo || !1
            }
        }, {
            key: "duration",
            get: function() {
                return this._core.config.video.duration
            }
        }, {
            key: "isPlayingOrPaused",
            get: function() {
                return ka.remotePlayer ? ka.remotePlayer.playerState === ka.PlayerState.PLAYING || ka.remotePlayer.playerState === ka.PlayerState.PAUSED : null
            }
        }, {
            key: "isIdle",
            get: function() {
                return ka.remotePlayer ? null === ka.remotePlayer.playerState || ka.remotePlayer.playerState === ka.PlayerState.IDLE : null
            }
        }, {
            key: "isMediaLoaded",
            get: function() {
                return !!ka.remotePlayer && ka.remotePlayer.isMediaLoaded
            }
        }])
    }(),
    Da = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        D(t, e);
        var n = t.prototype;
        return n.init = function({
            appId: t,
            chromecastPlayer: n = null
        } = {}) {
            var i, o;
            return t || (t = null != n && null != (i = n._core) && null != (i = i.config.request.flags) && i.ott ? null != n && null != (o = n._core) && o.config.ottCastOptions ? n._core.config.ottCastOptions.appId ? n._core.config.ottCastOptions.appId : Oa.id : Pa.id : Sa.id), this.chromecastPlayer = n, this.setup().then((n => (n && (e.prototype.init.call(this, {
                receiverApplicationId: t,
                autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
            }), this.chromecastPlayer && this.chromecastPlayer.init(), this.fire(Na.initialized)), n))).catch((e => (this.fire(Na.error, e), Promise.reject(e))))
        }, n.dispose = function() {
            this.chromecastPlayer = null
        }, R(t, [{
            key: "chromecastPlayer",
            get: function() {
                return this._chromecastPlayer
            },
            set: function(e) {
                if (e && !(e instanceof wa)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
                this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
            }
        }])
    }(k);
const ka = w.extend(new Da),
    Ma = "LIVE_UPDATE",
    Va = "LIVE_SET_START_TIME";

function Ba(e, t) {
    return Object.keys(t).reduce(((n, i) => (t[i] && "object" == typeof t[i] ? n[e(i)] = Ba(e, t[i]) : n[e(i)] = t[i], n)), {})
}

function xa(e) {
    return e.replace(/(_\w)/g, (e => e[1].toUpperCase()))
}

function Ua(e) {
    return Ba(xa, e)
}
const Ha = "CONFIG_LOAD",
    Fa = e => ({
        type: Ha,
        payload: h({}, Ua(e))
    });

function Ga(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case Ha:
            return n.video.liveEvent ? h(h({}, e), n.video.liveEvent) : null;
        case Ma:
            return h(h({}, e), n);
        case Va:
            return h(h({}, e), {}, {
                ingest: h(h({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return h(h({}, e), {}, {
                settings: h(h({}, e.settings), n)
            });
        default:
            return e
    }
}
const Wa = e => {
        var t;
        return !(null == (t = e.liveEvent) || !t.status)
    },
    Ya = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    $a = e => {
        var t;
        return (null == (t = e.liveEvent) || null == (t = t.ingest) ? void 0 : t.startTime) || null
    },
    Ka = e => {
        var t;
        return (null == (t = e.liveEvent) ? void 0 : t.status) === Qt
    },
    qa = e => {
        var t;
        return Wa(e) && "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    ja = e => {
        var t;
        return (null == (t = e.liveEvent) || null == (t = t.archive) ? void 0 : t.status) === Zt
    };
var za = Object.freeze({
    __proto__: null,
    default: Ga,
    liveExists: Wa,
    liveStatus: Ya,
    liveStartTime: $a,
    isLiveStarted: Ka,
    liveInProgress: qa,
    isLiveArchived: ja
});
const Xa = "interactive";

function Za() {}

function Qa(e, t, i) {
    const r = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t;
                    if (Cn.includes(null == e || null == (t = e.config) || null == (t = t.user) ? void 0 : t.id)) return function(e) {
                        if (!void 0) return e && e.then ? e.then(Za) : Promise.resolve()
                    }(ne(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.refreshAssetUrls()
            }))
        })),
        a = e.events;
    let l = e.backbone;
    const s = ya(),
        c = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad),
        d = (o.iOS >= 8 || an) && !o.iPad;
    let u = !1,
        _ = !1,
        p = !1,
        m = !1,
        v = null,
        f = !1,
        h = null,
        g = !1,
        b = !1,
        C = !1,
        y = !1,
        T = !1;

    function L(e) {
        l.element.classList.remove("invisible"), I()
    }

    function I() {
        let e = l.play();
        return T && (e = e.catch(S)), e.catch(R).then(N)
    }

    function S(e) {
        if (T = !1, O(e)) return a.fire(jt._changeMuted, !0, !0), l.play();
        throw e
    }

    function O(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function R(e) {
        return a.fire(zt._playRejected, e), new Promise((() => {}))
    }

    function N() {
        a.fire(zt._playResolved)
    }

    function w(e) {
        try {
            l.currentTime = e
        } catch (t) {}
    }

    function D() {
        m || f || u && l.paused && I()
    }

    function k() {
        var t, n;
        let i = "none";
        ("metadata" === (null == (t = e.config.request.flags) ? void 0 : t.preload_video) || c || o.iOS >= 8 || an) && (i = "metadata"), "auto" === (null == (n = e.config.request.flags) ? void 0 : n.preload_video) && (i = "metadata", "MediaSourceScanner" === l.currentScannerName && (i = "auto")), o.isGoogleBot && (i = "none"), l.preload = i, a.on(zt._mousedOver, (function() {
            var t;
            e.config.request && "metadata_on_hover" === (null == (t = e.config.request.flags) ? void 0 : t.preload_video) && !p && e.verifyConfig().then((() => (l.preload = "metadata", !0))).catch((e => {}))
        })), a.on(P.LOAD_SEGMENT_FAILED, (function(e) {
            Br.captureException(e)
        }))
    }

    function ie() {
        y = !1;
        const t = l.video;
        if (l.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (l.hasTextTrack(t)) {
                    const e = !0;
                    a.fire(jt._turnCaptionsOn, t, e)
                }
            } else a.on(P.TEXT_TRACKS_AVAILABLE, (() => {
                n(), i()
            })), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (l.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                a.fire(jt._turnCaptionsOn, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach((t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some((e => e.id === r));
                e.store.dispatch(i(a ? r : Ta[t]))
            }))
        }
    }

    function oe(e, t, n, i) {
        if (_) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), _ = !1
        }
    }

    function re() {
        e.startTime > 0 && a.fire(jt._setTime, e.startTime, e.startTime / l.duration)
    }

    function ae() {
        if (e.config.embed.autoplay) {
            var n, i;
            if (t.get(Wa) && !t.get(Ka)) return;
            if (t.get(Wa) && !xo(null == (n = e.config.video) ? void 0 : n.live_event)) return void setTimeout((function() {
                a.fire(zt._liveEventSafeToPlay), a.fire(zt._playButtonPressed)
            }), Bo(null == (i = e.config.video) ? void 0 : i.live_event));
            a.fire(zt._playButtonPressed)
        }
    }
    l.element.classList.add("invisible"), d && l.element.classList.add("hide-webkit-controls"), e.config.video.live_event && i.classList.add("live-background"), e.config.embed.transparent && i.classList.add("transparent"), t.watch(Ya, (function(e) {
            e === Qt && setTimeout((() => {
                ie(), l.element.classList.remove("invisible"), a.fire(zt._liveEventSafeToPlay), a.fire(zt._playButtonPressed)
            }), bn)
        })), t.watch(ja, r), t.watch("ui.video.scaleFactor", (e => {
            l.element.classList.toggle("vp-telecine-cover", e > 1)
        })),
        function t() {
            a.once(zt._swapVideo, t), l = e.backbone, Rt(l.on, a.fire, [M, V, B, x, A, U, H, F, G, W, Y, $, K, q.ACTIVATED, q.AVAILABLE, q.DEACTIVATED, q.UNAVAILABLE, j.ARCHIVE_DONE, j.EVENT_ACTIVE, j.EVENT_ENDED, j.EVENT_STARTED, j.STREAM_OFFLINE, j.STREAM_ONLINE, j.BUFFER_GAP_JUMP, j.BUFFER_GAP_JUMP_PREVENT, j.STALL_JUMP, j.SETTINGS_UPDATED, j.LOW_LATENCY_FALLBACK, j.LIVE_STATS_SUCCESS, j.LIVE_STATS_FAILURE, j.LATENCY_UPDATED, z.MEDIASESSION_PAUSE, z.MEDIASESSION_PLAY, z.MEDIASESSION_SEEK_BACKWARD, z.MEDIASESSION_SEEK_FORWARD, z.MEDIASESSION_SEEK_TO, P.AV_DURATION_MISMATCH, P.BANDWIDTH, P.BUFFER_ENDED, P.BUFFER_OCCUPANCY, P.BUFFER_STARTED, P.CHAPTER_CUES_UPDATED, P.CUE_POINT, P.CURRENT_FILE_CHANGE, P.DOWNLOAD_END, P.DOWNLOAD_TIMEOUT, P.DRM_AUTH_SUCCESS, P.DRM_KEY_SWITCH, P.DROPPED_FRAMES, P.MANIFEST_LOADED, P.MANIFEST_TIMEOUT, P.QUOTA_EXCEEDED_ERROR, P.SCANNER_CHANGE, P.STREAM_BUFFER_START, P.STREAM_CHANGE, P.STREAM_CHANGE_START, P.STREAM_TARGET_CHANGE, P.AVAILABLE_STREAMS_CHANGED, P.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, P.TEXT_TRACKS_AVAILABLE, P.DROPPED_FRAME_PERCENT_EXCEEDED, P.LOAD_SEGMENT_FAILED, P.AUDIO_TRACK_CHANGED, P.SEGMENT_CUES_LOADED, X.CAMERA_CHANGE, X.CAMERA_UPDATE, X.MOTION_END, X.MOTION_START, X.SPATIAL_UNSUPPORTED, X.WEBVR_ENTER, X.WEBVR_EXIT, X.WEBVR_HARDWARE_AVAILABLE, E.DURATION_CHANGE, E.ENDED, E.ERROR, E.LOAD_START, E.LOADED_DATA, E.LOADED_METADATA, E.PAUSE, E.PLAY, E.PLAYING, E.PROGRESS, E.RATE_CHANGE, E.RESIZE, E.SEEKED, E.SEEKING, E.STALLED, E.TIME_UPDATE, E.VOLUME_CHANGE, E.WAITING, E.ENTER_PICTURE_IN_PICTURE, E.LEAVE_PICTURE_IN_PICTURE, E.WEBKIT_BEGIN_FULLSCREEN, E.WEBKIT_END_FULLSCREEN])
        }(), Rt(ka.on, a.fire, [Na.connected, Na.disconnected]), k(), a.on(E.LOADED_METADATA, (function(t) {
            e.config.video.duration = l.duration, e.config.video.video_width = l.videoWidth, e.config.video.video_height = l.videoHeight
        })), a.on(E.DURATION_CHANGE, (function(t) {
            e.config.video.duration = l.duration
        })), a.on(P.SCANNER_CHANGE, (() => {
            k(), setTimeout((() => {
                a.fire(Z.settingVolume ? jt._enableVolume : jt._disableVolume), a.fire(Z.textTracks ? jt._enableCaptions : jt._disableCaptions)
            }), 0), Br.captureBreadcrumb(`Scanner changed to ${l.currentScannerName}`, {}, "video")
        })), a.on([j.EVENT_ACTIVE, j.EVENT_STARTED, j.EVENT_ENDED, j.ARCHIVE_DONE], (n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: Ma,
                payload: e
            }))(n))
        })), a.on(zt._playButtonPressed, (function() {
            e.displayContext !== e.backbone ? e.displayContext.play() : function() {
                var n;
                if (("disable" === e.config.video.privacy || !e.config.video.spatial || o.spatialPlayback || y) && l.element.classList.remove("invisible"), v) return a.fire(zt._error, null == (n = v) ? void 0 : n.type, v), void a.fire(jt._showVideoThumbnail);
                if (u = !0, f) a.fire(jt._showVideoThumbnail);
                else {
                    if (l.off(E.PLAY, L), c && (g = !0, a.fire(jt._forceFullscreen)), t.get(Ka) && (T = !0), !p) return !e.config.video.spatial || o.spatialPlayback || y ? void I().catch(console.error) : (y = !0, a.fire(jt._showOverlay, "spatial-redirect", "browser-support"), void a.once(E.PLAY, L));
                    p && D()
                }
            }()
        })).on(zt._pauseButtonPressed, (() => {
            u = !1, e.displayContext.pause()
        })).on(zt._becameInactive, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !l.paused && !e.config.embed.settings.background || u) && (u = !1, a.fire(zt._pauseButtonPressed))
        })), a.on(E.ERROR, (function(t) {
            if (O(t) && !T) {
                if (e.config.embed.autoplay = 0, l.pause(), e.startTime) return w(e.startTime), void a.fire(zt._paused, l.currentTime);
                if (0 === l.currentTime) return void a.fire(jt._reset);
                a.fire(zt._paused, l.currentTime)
            }
        })), a.on(E.PLAY, (function(e) {
            l.element.classList.remove("invisible")
        })), a.on(E.PAUSE, (function(e, t) {
            m || a.fire(zt._paused, e, t)
        })), a.on(E.TIME_UPDATE, (function({
            currentTime: e
        }) {})), a.on(E.ENDED, (function(t) {
            m || e.config.embed.loop || (g && a.fire(zt._fullscreenButtonPressed), u = !1, a.fire(zt._ended, t))
        })), a.on(P.DRM_AUTH_SUCCESS, (() => {
            _ = !0
        })), a.on(A, (() => {
            p = !0, a.once(E.TIME_UPDATE, (() => {
                a.fire(zt._firstTimeUpdate)
            }))
        })), a.on(P.BUFFER_STARTED, (() => {})),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                var r, l;
                if (t) return;
                if (o.name.includes(Q)) return;
                if (o.name === J) return void a.fire(jt._disableCaptions);
                Br.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let s = e.config.video.live_event ? .25 : .01;
                if (o.name === ee && !n) {
                    n = !0, s = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        a = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        _ = t.file_codecs,
                        p = e.config.video.file_codecs,
                        m = e.config.user.logged_in,
                        v = t.build.js;
                    Br.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: a,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: _,
                        video_file_codecs: p,
                        logged_in: m,
                        version: v
                    }, "MediaUrlBadRequest config", "error")
                }
                const c = "string" != typeof o.message ? o.name : o.message,
                    d = new Error(c);
                d.name = o.name;
                const u = "object" == typeof o.message ? o.message : null;
                Br.captureException(d, u, s);
                const _ = Bn[o.name];
                if ("function" == typeof _) {
                    if (v = _(), null != (r = v) && r.final && a.off(E.ERROR, i), o.name === te) {
                        let t = e.config.request.dynamic_drm_translation_map,
                            n = o.message.code;
                        v && t && n && t[n] && (v.title = t[n].title, v.message = t[n].msg), Br.captureBreadcrumb("DRM failure", o, "video")
                    }
                    a.fire(zt._error, null != (l = v) && l.deferred ? v.type : null, v, c)
                }
            }
            window.addEventListener("pagehide", (() => {
                t = !0
            }), !1), a.on(E.ERROR, i), a.on("test-error", i)
        }(), a.on(jt._changeLoop, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, l.loop = n
        })), a.fire(jt._changeLoop, e.config.embed.loop), a.on(zt._chapterSeekAttempted, ((t, n) => {
            e.events.fire(zt._chapterSeek, n), e.events.fire(jt._seek, t), p || a.fire(zt._playButtonPressed)
        })), a.on(zt._scrubbingStarted, (function() {
            f || (u = !l.paused, m = !0, l.pause())
        })), a.on(zt._scrubbingEnded, (function(e) {
            m = !1, p ? e || D() : a.fire(zt._playButtonPressed)
        })), a.on(jt._seek, (function(e) {
            f || a.fire(jt._setTime, e)
        })), a.on(jt._setTime, (function(t) {
            p || e.fragmentsHandler.checkForNewFragment(t, l.duration), w(t)
        })),
        function() {
            a.on(jt._changeVolume, (function(t, n, i, o = !0) {
                i && (t += l.volume), t = St(t = yt(t, 0, 1)), e.displayContext !== l && (e.displayContext.volume = t), l.volume = t, e.events.fire(zt._volumeChanged, t, n), l.muted && o && e.events.fire(jt._changeMuted, !1, n)
            })), a.on(jt._changeMuted, (function(t, n = !1) {
                l.muted = !!t, e.displayContext !== l && (e.displayContext.muted = t), e.events.fire(zt._mutedChanged, t, n)
            })), a.on(E.VOLUME_CHANGE, (() => {
                a.fire(zt._volumeChanged, l.volume, !0)
            }));
            const t = e.config.request.cookie.volume;
            a.fire(jt._changeVolume, t, !0), a.fire(jt._changeMuted, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            a.on(jt._changeQuality, (function(n, i) {
                (l.video.currentFile.mime === qt.dash || t.get(Ka)) && (i = !0), e = i, l.quality = n
            })), a.on(U, (function(t) {
                a.fire(zt._qualityChanged, t, e)
            }))
        }(),
        function() {
            let e = l.playbackRate;
            a.on(E.RATE_CHANGE, (function(t) {
                l.playbackRate !== e && (a.fire(zt._playbackRateChanged, l.playbackRate, e), e = l.playbackRate)
            })), a.on(jt._changePlaybackRate, (function(e) {
                l.playbackRate = e
            })), a.on(zt._loadVideo, (function() {
                try {
                    l.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                f = !0, h = e, e !== Xa && p && !C && (u = u || !l.paused, l.pause(), a.fire(zt._paused, l.currentTime))
            }

            function t() {
                const e = h === Fo.LEAD_CAPTURE_FORM && !p;
                f = !1, h = null, e ? a.fire(zt._playButtonPressed) : u && !C && (g || b || !c || a.fire(jt._forceFullscreen), D())
            }
            a.on(zt._overlayOpened, e), a.on(zt._accessGateOpened, e), a.on(zt._overlayClosed, t), a.on(zt._accessGateClosed, t), a.on(zt._menuVisibilityChanged, (function(n, i) {
                i && i !== un && i.isCentered() && (i.isVisible() ? e() : t())
            }))
        }(), a.on(zt._popupOpened, (function(e) {
            p && !C && (u = !l.paused, l.pause())
        })), a.on(zt._popupClosed, (function(e) {
            C || D()
        })), a.on(zt._didEnterFullscreen, (function(e, t) {
            l.element.classList.remove("hide-webkit-controls"), e && (b = !0), e || (p || o.browser.safari || (l.poster = (e => {
                const t = e.querySelector(`.${yn.VP_PREVIEW}`);
                return t && t.getAttribute("data-thumb") || ""
            })(i)), g = !0, setTimeout((() => {
                l.textTracks.forEach((e => {
                    "hidden" === e.mode && (e.mode = "showing")
                }))
            }), 500)), t || !o.windowsPhone || o.browser.edge || a.fire(jt._toggleNativeControls, !0)
        })), a.on(zt._didExitFullscreen, (function(t) {
            l.poster = "", t || l.pause(), p || e.segmentedPlaybackEnabled || l.element.classList.add("invisible"), g = !1, b = !1, d && l.element.classList.add("hide-webkit-controls"), l.textTracks.forEach((e => {
                "showing" === e.mode && (e.mode = "hidden")
            }))
        })), a.on(A, (function() {
            l.poster = ""
        })), a.on(jt._toggleNativeControls, (function(e) {
            if (e) return l.controls = !0, void i.classList.add("native-controls");
            l.controls = !1, i.classList.remove("native-controls")
        })), a.on(zt._assetUrlsRefreshed, (function() {
            ie()
        })), a.on(zt._configChanged, (function() {
            ie(), ae()
        })), a.on(jt._reset, (function() {
            if (e.segmentedPlaybackEnabled) re();
            else {
                const t = e.element.querySelector("[telecine-snapshot]");
                t && "none" !== t.style.display || (a.fire(jt._showVideoThumbnail), l.element.classList.add("invisible")), setTimeout((() => {
                    l.unload(), a.fire(zt._paused, l.currentTime), p = !1, u = !1, v = null
                }), 300)
            }
        })),
        function() {
            let t;
            a.on(jt._turnCaptionsOn, (function(n, i = !1) {
                t = i;
                try {
                    var o;
                    (null != (o = e.config.request.flags) && o.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && l.videoElement && l.videoElement.setAttribute("crossorigin", "anonymous"), l.enableTextTrack(n)
                } catch (r) {}
            })).on(jt._turnCaptionsOff, (function(n = !1) {
                var i;
                t = n, null != (i = e.config.request.flags) && i.ott && l.videoElement && l.videoElement.removeAttribute("crossorigin"), l.disableTextTrack()
            })).on(jt._requestCompleteLiveSubtitles, (function() {
                l.requestCompleteLiveSubtitles()
            })).on(jt._updateLiveSubtitleRequests, (function(e) {
                l.setCaptionsShouldLoad(e)
            })), a.on(M, (function(e, n) {
                e && l.enableTextTrack(e.id), a.fire(zt._captionsChanged, e, t || n)
            })), a.on(E.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = l.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), a.on(E.WEBKIT_END_FULLSCREEN, (function() {
                var t, n;
                null != (t = e.config.request.flags) && t.ott || null == (n = l.videoElement) || n.removeAttribute("crossorigin")
            }))
        }(), a.on(q.AVAILABLE, (function({
            type: t
        }) {
            e.config.request.drm || "AirPlay" !== t || a.fire(zt._airPlayAvailable)
        })), a.on(q.UNAVAILABLE, (function({
            type: t
        }) {
            e.config.request.drm || "AirPlay" !== t || a.fire(zt._airPlayNotAvailable)
        })), a.on(q.ACTIVATED, (function({
            type: e
        }) {
            C = !0, "AirPlay" === e && a.fire(zt._airPlayActivated)
        })), a.on(q.DEACTIVATED, (function({
            type: e
        }) {
            C = !1, "AirPlay" === e && a.fire(zt._airPlayDeactivated)
        })), a.on(zt._airPlayButtonPressed, (function() {
            l.showExternalDisplayPicker("AirPlay")
        })), a.on(jt._activatePictureInPicture, (() => {
            e.canPlayPictureInPicture && l.requestPictureInPicture()
        })), a.on(jt._deactivatePictureInPicture, (() => {
            l.pictureInPictureEnabled && l.exitPictureInPicture()
        })), ie(), o.spatialPlayback ? (a.fire(jt._attachSpatialPlaybackEvents), a.on([E.PLAY, E.SEEKED], (() => {
            a.fire(jt._revealSpatialControls)
        })), a.on(X.SPATIAL_UNSUPPORTED, (() => {
            p ? a.fire(Mt._spatialFailure, f) : a.once(zt._firstTimeUpdate, (() => {
                a.fire(Mt._spatialFailure, f)
            }))
        }))) : a.once(zt._firstTimeUpdate, (() => {
            e.config.video.spatial && a.fire(Mt._spatialUnsupported, f)
        })), window.addEventListener("beforeunload", (() => {
            const t = e.config.request.drm;
            t && oe(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), !1), a.on(zt._loadVideo, (() => {
            const t = e.config.request && e.config.request.drm;
            t && oe(t.hoover_url, t.user, t.asset, t.hoover_token)
        })), e.events.on(jt._destroy, (() => l.destroy())), "mediaSession" in navigator && (a.on(E.LOADED_METADATA, (() => (navigator.mediaSession.setActionHandler("play", (() => {
            I().then((() => l.fire(z.MEDIASESSION_PLAY))).catch(console.error)
        })), navigator.mediaSession.setActionHandler("pause", (() => {
            l.pause(), a.fire(z.MEDIASESSION_PAUSE)
        })), navigator.mediaSession.setActionHandler("seekto", (e => {
            l.currentTime = e.seekTime, a.fire(z.MEDIASESSION_SEEK_TO)
        })), navigator.mediaSession.setActionHandler("seekforward", (() => {
            l.currentTime = Math.min(l.duration, l.currentTime + 10), a.fire(z.MEDIASESSION_SEEK_FORWARD)
        })), void navigator.mediaSession.setActionHandler("seekbackward", (() => {
            l.currentTime = Math.max(0, l.currentTime - 10), a.fire(z.MEDIASESSION_SEEK_BACKWARD)
        }))))), a.on(E.PLAY, (() => (() => {
            const t = {
                title: e.config.video.title,
                artist: `from ${e.config.video.owner.name}`,
                artwork: [{
                    src: n(e.config.video.thumbnail_url, {
                        w: "640"
                    })
                }]
            };
            navigator.mediaSession.metadata = new MediaMetadata(t)
        })()))), e.ready().then((() => (setTimeout((() => ae()), 0), re(), null))).catch((e => {})), a.fire(zt._videoModuleReady)
}

function Ja(e) {
    return "dev" === e.request.build.js ? "dev" : on
}
const el = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    tl = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    nl = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    il = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    ol = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    rl = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    al = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    ll = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    sl = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    cl = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    };

function dl(e, t) {
    var n, i, r, a, l, s, c = 0,
        u = {},
        _ = new d,
        p = !1;

    function m() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function v() {
        const t = e.backbone.getEffectByName("ThreeSixtyEffect");
        return o.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
    }

    function f() {
        n = !1, i = e.backbone ? e.backbone.currentTime : 0, r = 0, a = 0, l = 0, s = !1
    }

    function g(t, n, i, o) {
        e.verifyConfig().then((() => {
            let r = n;
            r.signature = e.config.request.signature, r.session = e.config.request.session, r.time = e.config.request.timestamp, r.expires = e.config.request.expires;
            const a = JSON.stringify(r);
            if (null === r.sessionTime && (Br.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: r
                }), Br.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const l = e.config.request.urls.player_telemetry_url + t;
            return _.logRequestPromiseWithUrl(l, a, !i).then((t => {
                if (200 !== t.status && o < 2) {
                    if (410 === t.status) return void e.events.once(zt._assetUrlsRefreshed, (() => {
                        g(l, n, i, o + 1)
                    }));
                    setTimeout((() => {
                        g(l, n, i, o + 1)
                    }), 1e3)
                }
            })).catch((e => {
                throw e
            }))
        })).catch((e => {}))
    }

    function b(n, i, o) {
        const a = e.backbone.currentFile || {};
        let {
            id: l = 0,
            mime: s = qt.h264,
            metadata: {
                profile: c = -1
            } = {}
        } = a;
        s === qt.dash && ({
            id: l = 0,
            profile: c = -1
        } = u), e.performDelegateAction(cl, ((d, u = {}) => {
            let _ = t => {
                var d, _;
                let p = h(h({
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: u.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: null != (d = e.config.video.vod) && d.id ? e.config.video.vod.id : null,
                    vodSaleId: null != (_ = e.config.video.vod) && _.sale_id ? e.config.video.vod.sale_id : null,
                    sessionTime: St(r),
                    videoShape: e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0,
                    spatialPlayback: v(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                    teamId: e.config.user.team_id ? e.config.user.team_id : null,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: "html",
                    videoFileId: Number.isInteger(Number(l)) ? l : "0",
                    delivery: Jt[s],
                    profileId: c,
                    quality: a.metadata ? a.metadata.quality : null,
                    duration: St(e.config.video.duration),
                    seconds: St(i)
                }, t), {}, {
                    playbackRate: e.backbone.playbackRate,
                    build: Ja(e.config)
                }, zo(e.config));
                g(n, p, o)
            };
            const p = e.config.video.live_event ? 1 : 0;
            let m = t.get($a),
                f = {
                    isLive: p
                };
            if (p) {
                if (!m) return void T(`https://${e.config.vimeo_url}/live_event/status?clip_id=${e.config.video.id}`).json().then((e => (e && e.ingest && (t.dispatch((e => ({
                    type: Va,
                    payload: e
                }))(e.ingest.start_time)), m = t.get($a)), m && (f.liveStartTime = m), _(f), e))).catch((e => {}));
                f.liveStartTime = m
            }
            _(f)
        }))
    }

    function C() {
        !s && e.playLoggingEnabled && (s = !0, b("/log/play", e.backbone.currentTime))
    }

    function y(t = 0, i = !1, o = !0) {
        if (e.playLoggingEnabled && s && !p) {
            var r = m();
            o && a + 1e3 > r || (a = r, n || b("/log/partial", t, i))
        }
    }

    function L(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: null != (i = e.config.video.vod) && i.id ? e.config.video.vod.id : null,
            vodSaleId: null != (o = e.config.video.vod) && o.sale_id ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: St(e.config.video.duration),
            seconds: St(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Ja(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        g("/log/" + t, r)
    }
    return f(),
        function() {
            e.events.on(E.TIME_UPDATE, (function({
                currentTime: e,
                _duration: t,
                _timeProgress: o,
                playbackRate: a
            }) {
                var s = Math.floor(e);
                !n && l + 1e3 < m() && (e > i && !(0 !== e && 0 === i) && (r += (e - i) / a), i = e), s % 30 == 0 && y(e)
            })), e.events.on(zt._playbackRateChanged, (function(t, n) {
                L("playback_rate_change", {
                    oldPlaybackRate: n
                }), y(e.backbone.currentTime)
            })), e.events.once(A, (function() {
                t.get(Wa) && t.get(Ka) ? e.events.once(zt._firstTimeUpdate, (() => C())) : C()
            })), e.events.on(P.SCANNER_CHANGE, (function(t) {
                p = !0, e.events.once(A, (() => {
                    p = !1
                }))
            })), e.events.on(zt._paused, (function(t) {
                0 === e.backbone.duration && 0 === e.backbone.currentTime || e.backbone.ended || y(t)
            })), e.events.on(E.SEEKED, (function({
                currentTime: t
            }) {
                (e.backbone.isLive() || 0 !== e.backbone.duration || 0 !== e.backbone.currentTime) && (c = t, n || y(c))
            })), e.events.on(zt._scrubbingStarted, (function() {
                l = m(), n = !0
            })), e.events.on(zt._scrubbingEnded, (function() {
                i = e.backbone.currentTime, n = !1, y(i)
            })), e.events.on(zt._prefsButtonPressed, (function() {
                y(e.backbone.currentTime)
            })), e.events.on(zt._ended, (function() {
                e.backbone.isLive() || (r += e.config.video.duration - i), y(e.backbone.isLive() ? i : e.config.video.duration, !1, !1)
            })), e.events.on(P.STREAM_CHANGE, (function(e) {
                u = e
            }));
            let o = [],
                a = !1;

            function s() {
                let t = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                    n = 100,
                    i = Math.round(t.lat * n) / n,
                    l = Math.round(t.long * n) / n;
                const c = {
                    sessionTime: r,
                    videoTime: e.backbone.currentTime,
                    coordinates: {
                        lat: i,
                        lon: l
                    }
                };
                o.push(c), setTimeout((() => {
                    a && s()
                }), 1e3)
            }

            function d() {
                o.length && e.performDelegateAction(cl, ((t, n = {}) => {
                    var i, r;
                    g("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: null != (i = e.config.video.vod) && i.id ? e.config.video.vod.id : null,
                        vodSaleId: null != (r = e.config.video.vod) && r.sale_id ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Ja(e.config),
                        motionLog: JSON.stringify(o)
                    }, !1)
                }))
            }
            e.events.on(X.MOTION_START, (() => {
                a = !0, s()
            })), e.events.on(X.MOTION_END, (() => {
                a = !1, d()
            })), e.events.on(zt._loadVideo, (() => {
                d(), o = []
            })), window.addEventListener("pagehide", (function() {
                if (e.backbone && e.backbone.currentTime > 0) {
                    const t = !0,
                        n = !1;
                    y(e.backbone.currentTime, t, n), d()
                }
            }), !1)
        }(),
        function() {
            let t;
            [{
                type: "share_press",
                event: zt._shareButtonPressed
            }, {
                type: "facebook_press",
                event: zt._facebookButtonPressed
            }, {
                type: "twitter_press",
                event: zt._twitterButtonPressed
            }, {
                type: "tumblr_press",
                event: zt._tumblrButtonPressed
            }, {
                type: "email_press",
                event: zt._emailButtonPressed
            }, {
                type: "embed_press",
                event: zt._embedButtonPressed
            }, {
                type: "login_success",
                event: zt._userLoggedIn
            }, {
                type: "airplay",
                event: zt._airPlayActivated
            }, {
                type: "vod_press",
                event: zt._vodButtonPressed
            }, {
                type: "collection_press",
                event: zt._collectionsButtonPressed
            }].forEach((function(t) {
                e.events.on(t.event, function(e) {
                    return function() {
                        L(e)
                    }
                }(t.type))
            })), e.events.on(zt._outroDataReceived, (function(e) {
                t = e
            })).on(zt._outroDisplayed, (function() {
                var n, i = {
                    outroType: e.config.embed.outro,
                    ownerAccountType: e.config.video.owner.account_type,
                    playerWidth: e.element.clientWidth,
                    playerHeight: e.element.clientHeight
                };
                null != (n = t) && null != (n = n.videos) && n.length && (i.outroVideos = t.videos.map((e => e.id)).join(",")), L("outro_displayed", i)
            })).on(zt._outroVideoPressed, (function(t) {
                L("outro_video_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    videoId: t
                })
            })).on(zt._followButtonPressed, (function() {
                L("outro_follow_press", {
                    add: !e.config.user.following
                })
            })).on(zt._outroCtaPressed, (function(t) {
                L("outro_cta_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(zt._outroLinkPressed, (function(t) {
                L("outro_link_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(zt._outroImagePressed, (function(t) {
                L("outro_image_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    link: t
                })
            })).on(zt._likeButtonPressed, (function() {
                L("like_press", {
                    add: !e.config.user.liked
                })
            })).on(zt._watchLaterButtonPressed, (function() {
                L("watch_later_press", {
                    add: !e.config.user.watch_later
                })
            })).on(zt._popupOpened, (function(e) {
                0 === e.indexOf("login-") && L("login_attempt")
            })).on(zt._captionsChanged, (function(e, t) {
                t || (e ? L("text_track_change", {
                    textTrackLanguage: e.language,
                    textTrackKind: e.kind
                }) : L("text_track_change"))
            })).on(zt._badgePressed, (function(e) {
                1 !== e && 12 !== e || L("badge_press", {
                    badgeId: e
                })
            })).on(zt._cardPressed, (function(t) {
                L("card_press", {
                    ownerAccountType: e.config.video.owner.account_type,
                    cardId: t,
                    cardType: "link"
                })
            })).on(zt._cardDisplayed, (function(t, n) {
                e.config.embed.editor || L("card_displayed", {
                    ownerAccountType: e.config.video.owner.account_type,
                    cardId: t,
                    cardType: n.url ? "link" : "text"
                })
            }))
        }(), e.events.on(zt._configChanged, (function(e) {
            e && f()
        })), e.events.fire(zt._statsModuleReady), {}
}
const ul = {
    settings: {}
};

function _l(e = ul, {
    type: t,
    payload: n
}) {
    return t === Ha ? h(h({}, e), n.embed) : e
}
var pl = Object.freeze({
    __proto__: null,
    default: _l,
    transparent: e => e.embed.transparent
});

function ml(e = {}, {
    type: t,
    payload: n
}) {
    return t === Ha ? h(h({}, e), n.video) : e
}
const vl = e => e.video.height / e.video.width;
var fl = Object.freeze({
    __proto__: null,
    default: ml,
    ratio: vl
});
const hl = "CONTAINER_RESIZE",
    gl = "PLAYER_CONTAINER_RESIZE";

function El(e = {}, t) {
    return t.type === hl ? h(h({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var bl = Object.freeze({
    __proto__: null,
    default: El,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function Cl(e = {}, t) {
    return t.type === gl ? h(h({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var yl = Object.freeze({
    __proto__: null,
    default: Cl,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});
const Tl = "PREVIEW_SET_SIZE";

function Ll(e = {}, t) {
    return t.type === Tl ? h(h({}, e), {}, {
        width: t.payload.width,
        height: t.payload.height
    }) : e
}
var Al = Object.freeze({
    __proto__: null,
    default: Ll,
    scaleFactor: e => Ct({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: Ml.width(e),
        elementHeight: Ml.height(e)
    }).scaleFactor
});

function Il(e = Ta, t) {
    switch (t.type) {
        case na:
            return h(h({}, e), Ta);
        case ia:
            return h(h({}, e), {}, {
                fontSize: t.payload
            });
        case la:
            return h(h({}, e), {}, {
                color: t.payload
            });
        case oa:
            return h(h({}, e), {}, {
                fontFamily: t.payload
            });
        case ra:
            return h(h({}, e), {}, {
                fontOpacity: t.payload
            });
        case sa:
            return h(h({}, e), {}, {
                bgOpacity: t.payload
            });
        case ca:
            return h(h({}, e), {}, {
                bgColor: t.payload
            });
        case ua:
            return h(h({}, e), {}, {
                windowColor: t.payload
            });
        case da:
            return h(h({}, e), {}, {
                windowOpacity: t.payload
            });
        case _a:
            return h(h({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var Sl = Object.freeze({
    __proto__: null,
    default: Il,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * Ml.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const Ol = e => {
        const t = t => Math.min(e.height(t) / vl(t), e.width(t)),
            n = t => Math.min(e.width(t) * vl(t), e.height(t)),
            i = i => Ct({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            l = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            s = ie((e => ({
                width: r(e),
                height: a(e)
            }))),
            c = ie((e => ({
                ratio: vl(e),
                size: l(e)
            })));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: l,
            boundingRect: s,
            settings: c
        }
    },
    Pl = {
        xxs: 0,
        xs: 430,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    Rl = (e, t) => {
        const n = ie((n => ({
                width: e(n),
                height: t(n)
            }))),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = s(n.embed.settings.customLogo) && o < 300 || r < 169,
                    l = !s(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || l
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = s(t.embed.settings.customLogo) && n <= 375,
                    r = !s(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= Pl.xxs && n < Pl.xs
            },
            l = t => {
                const n = e(t);
                return n >= Pl.xs && n < Pl.sm
            },
            c = t => {
                const n = e(t);
                return n >= Pl.sm && n < Pl.md
            },
            d = t => {
                const n = e(t);
                return n >= Pl.md && n < Pl.lg
            },
            u = t => {
                const n = e(t);
                return n >= Pl.lg && n < Pl.xl
            },
            _ = t => {
                const n = e(t);
                return n >= Pl.xl && n < Pl.xxl
            },
            p = t => e(t) >= Pl.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: l,
                    sm: c,
                    md: d,
                    lg: u,
                    xl: _,
                    xxl: p
                };
                return Object.keys(Pl).find((n => t[n](e)))
            },
            xxl: p,
            xl: _,
            lg: u,
            md: d,
            sm: c,
            xs: l,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var Nl = Object.freeze({
    __proto__: null,
    scaleFactor: e => Ct({
        width: e.video.width,
        height: e.video.height,
        elementWidth: Ml.width(e),
        elementHeight: Ml.height(e)
    }).scaleFactor
});
const wl = e => Ml.isVerticalVideo(e) ? Ml.isTinyMode(e) : Ml.isMiniMode(e) || Ml.isTinyMode(e) || Ml.xs(e) || Ml.xxs(e);
var Dl = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && Ml.width(e) < 415,
    isMenuFullWidth: wl,
    isMenuVerticalVideoMode: e => !wl(e) && Ml.isVerticalVideo(e) && Ml.xxs(e) && Ml.height(e) > 300,
    doMenuItemsWrap: e => Ml.width(e) < 240
});

function kl(e = {}, t) {
    return {
        container: El(e.container, t),
        preview: Ll(e.preview, t),
        captions: Il(e.captions, t),
        playercontainer: Cl(e.playercontainer, t)
    }
}
const Ml = Rl((e => xl.width(e)), (e => xl.height(e))),
    Vl = Rl((e => Bl.width(e)), (e => Bl.height(e))),
    Bl = Ol(bl),
    xl = Ol(yl);
var Ul = Object.freeze({
    __proto__: null,
    default: kl,
    container: bl,
    player: Ml,
    appLayout: Bl,
    playerLayout: xl,
    preview: Al,
    video: Nl,
    controlbar: Dl,
    captions: Sl,
    playercontainer: yl,
    app: Vl
});

function Hl(e = {}, t) {
    const n = h(h({}, function(e = {}, t) {
        return t.type === Ha ? h(h({}, e), t.payload) : e
    }(e, t)), {}, {
        embed: _l(e.embed, t),
        video: ml(e.video, t),
        liveEvent: Ga(e.liveEvent, t)
    });
    return h(h({}, n), {}, {
        ui: kl(e.ui, t)
    })
}
var Fl = Object.freeze({
    __proto__: null,
    default: Hl,
    embed: pl,
    video: fl,
    liveEvent: za,
    ui: Ul
});
const Gl = function(e) {
    return (t, ...n) => (n.forEach((n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    })), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function Wl(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Yl() {}

function $l(e) {
    var t = e();
    if (t && t.then) return t.then(Yl)
}

function Kl(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}

function ql(e, t, n) {
    const i = Kl((function() {
            return $l((function() {
                if (!c()) return Wl(e.ready(), (function() {
                    s()
                }))
            }))
        })),
        o = Kl((function() {
            return $l((function() {
                if (!c()) return Wl(e.playbackEngineReady(), (function() {
                    s()
                }))
            }))
        })),
        r = c() ? n.parentElement : n,
        a = n.querySelector(".vp-video-wrapper"),
        l = b(s, 150);

    function s() {
        (function() {
            const {
                width: e,
                height: n
            } = Et(r), i = t.get("ui.app.width"), o = t.get("ui.app.height"), a = i > 0 && o > 0, l = e > 0 && n > 0;
            (c() || !a || l) && t.dispatch(((e, t) => ({
                type: hl,
                payload: {
                    width: e,
                    height: t
                }
            }))(e, n))
        })(),
        function() {
            const {
                width: e,
                height: n
            } = Et(a), i = t.get("ui.player.width"), o = t.get("ui.player.height"), r = i > 0 && o > 0, l = e > 0 && n > 0;
            (c() || !r || l) && t.dispatch(((e, t) => ({
                type: gl,
                payload: {
                    width: e,
                    height: t
                }
            }))(e, n))
        }()
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: i
    }) {
        c() && (r.classList.toggle("vp-center", "contain" === e), function(e) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map((t => e.style.removeProperty(t)))
        }(n), "contain" !== e ? i > 0 && Pt(n, {
            height: `calc(100% - ${i}px)`,
            bottom: i / 2 + "px"
        }) : Pt(n, i > 0 ? {
            maxWidth: `calc((100vh - ${i}px) / ${t})`,
            maxHeight: `calc(100vh - ${i}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: i / 2 + "px"
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new ae(l).observe(r), window.addEventListener("orientationchange", l), e.events.on(zt._didEnterFullscreen, l), e.events.on(zt._didExitFullscreen, l), e.events.on(zt._configChanged, l), s(), o(), i(), Wl()
}

function jl(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function zl(e) {
    const {
        videoObject: t
    } = Zl();
    null == e || !e.length || null != t && t.transcript || Xl({
        transcript: e.map((({
            text: e
        }) => e)).join(" ")
    })
}

function Xl(e) {
    const {
        videoObject: t,
        element: n
    } = Zl();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function Zl() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function Ql(e, t) {
    switch (e.view) {
        case en.privateLocked:
            throw new le("The video is private.", "PrivacyError", t);
        case en.privatePassword:
            throw new le("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case en.error:
            throw new le(e.message, "NotFoundError", t)
    }
}

function Jl(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}
const es = () => {};

function ts(e) {
    const t = e.events;
    let n, i, o, a = new w,
        l = !1,
        s = !1,
        c = null,
        d = !1,
        u = null,
        _ = null,
        p = !1,
        m = [];

    function v(t) {
        i !== t && (i = t, e.config.embed.api = t)
    }

    function f() {
        n && n.emit("exitFullscreen"), e.events.halt()
    }

    function g() {
        var t = St(e.config.request.cookie.volume);
        return 1 === i ? Math.round(100 * t) : t
    }

    function b(n, i, o, a = []) {
        const l = hn[i];
        let s = e.config.embed[l];
        s || i !== pn || (s = e.config.embed.color);
        let c = e.config.embed.settings[`force_${l}`];
        if (c || i !== pn || (c = e.config.embed.settings.color), c && !e.config.embed.on_site) throw new le(`The creator of the video has chosen to always use ${new r(s).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new r(n);
            t.fire(jt._changeColor, o.hex, i), a.forEach((function(t) {
                const n = hn[t],
                    i = e.config.embed[n];
                try {
                    new r(i).contrast(o).ratio
                } catch (De) {}
            }))
        } catch (De) {
            throw new le("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let C = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            wr(gr.TIMING_OBJECT_CONNECT, e.config)
        },
        notifyTimingObjectDisconnect() {
            wr(gr.TIMING_OBJECT_DISCONNECT, e.config)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t);
            const i = !0;
            t ? (e.events.prependOn(zt._fullscreenButtonPressed, f), n.listeners.exitFullscreen = !0, e.events.fire(zt._willEnterFullscreen), e.events.fire(zt._didEnterFullscreen, !0, i)) : (e.events.off(zt._fullscreenButtonPressed, f), n.listeners.exitFullscreen = !1, e.events.fire(zt._willExitFullscreen), e.events.fire(zt._didExitFullscreen, i))
        },
        on(e, t) {
            e in nn && (e = nn[e]);
            const i = Nt(tn);
            if (i.indexOf(e) < 0) throw new le(`“${e}” is not a valid event. Valid events are: ${i.join(", ")}.`, "TypeError", "on");
            t && a.on(e, t), n && (n.listeners[e] = !0), e === tn.LOADED && S()
        },
        off(e, t) {
            t && a.off(e, t), n && (n.listeners[e] = !1)
        },
        play: () => new Promise(((n, i) => {
            t.once(zt._playResolved, n), t.once(zt._playRejected, (e => {
                i(new le(e.message, e.name, "play"))
            })), Ql(e.config, "play"), t.fire(Xt._play), t.fire(zt._playButtonPressed)
        })),
        destroy() {
            t.fire(jt._destroy)
        },
        pause() {
            Ql(e.config, "pause"), t.fire(Xt._pause), t.fire(zt._pauseButtonPressed)
        },
        loadVideo(t) {
            const {
                id: i,
                url: o,
                params: r
            } = function(e) {
                if (!e) return {};
                if (mt(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!mt(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!i && !o) throw new le("The video id must be an integer.", "TypeError", "loadVideo");
            if (o && ! function(e, t) {
                    return null !== e.match(new RegExp(`^https?://${t.player_url}/video/([0-9]+)`)) || null !== e.match(new RegExp(`^https?://${t.vimeo_url}/([0-9]+)`))
                }(o, e.config)) throw new le("The url must be a valid Vimeo url.", "TypeError", "loadVideo");
            const a = function(e, t, n, i) {
                var o;
                if (t === e.video.id) return !0;
                const r = `^https?://${e.player_url}/video/${e.video.id}(/(config/?)?)?(\\?.*)?$`,
                    a = `^https?://${e.player_url}/video/([0-9]+)`;
                if (null != n && n.match(new RegExp(r))) return !0;
                const l = Xi(n || "", "s") || (null == i || null == (o = i.s) ? void 0 : o.length);
                return !(!n || null === n.match(new RegExp(a)) || !l)
            }(e.config, i, o, r) || !Do(e.element);
            return a ? e.loadVideoViaConfig(o || i, r).then((() => t)).catch((() => {
                throw Ql(e.config, "loadVideo"), new le("An error occurred loading the video.", "Error", "loadVideo")
            })) : (e.loadVideoViaIframe(o || i, r, n.listeners), es)
        },
        unload() {
            e.config.view !== en.main && e.config.view !== en.privateUnlocked || t.fire(jt._reset)
        },
        addCuePoint(n, i) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new le(`Cue point time must be positive number less than the duration of the video (${St(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(n, i);
                return setTimeout((() => {
                    t.fire(zt._cuePointAdded, o)
                }), 0), o.id
            } catch (De) {
                if ("CuePointsNotSupported" === De.name) throw new le("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new le("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(n) {
            const i = e.backbone.cuePoints.filter((e => e.id === n))[0];
            if (!i) throw new le(`Cue point “${n}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(i), setTimeout((() => {
                t.fire(zt._cuePointRemoved, i)
            }), 0)
        },
        enableTextTrack(n, o = null) {
            let r = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map((e => (e.language = e.lang, e)));
            const a = r.some((e => e.language.toLowerCase() === n.toLowerCase()));
            if (!a) throw new le(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const l = o ? `${n}.${o}` : n,
                {
                    track: s
                } = ((e, t = []) => {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter((e => r && e.language === n || e.language === o)).sort(((e, t) => {
                        const r = 2 * Number(e.language === o && e.kind === i) + 2 * Number(e.language === n) + 1 * Number(e.kind === i);
                        return 2 * Number(t.language === o && t.kind === i) + 2 * Number(t.language === n) + 1 * Number(t.kind === i) - r
                    }));
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                })(l, r);
            if (!s || o && s.kind !== o) throw new le(`There are no ${o} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return t.fire(jt._turnCaptionsOn, s.id), i < 3 ? null : new Promise((e => {
                t.once(zt._captionsChanged, (t => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                }))
            }))
        },
        disableTextTrack() {
            t.fire(jt._turnCaptionsOff)
        },
        toggleFullscreen(e) {
            const n = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise(((i, o) => {
                if (!de.element === e) {
                    const r = () => {
                            de.off("enter", r), i()
                        },
                        a = (t, i) => {
                            de.off("error", a);
                            const r = n[i] || n.not_supported;
                            o(new le(r.msg, r.name, (e ? "request" : "exit") + "Fullscreen"))
                        };
                    return de.on("enter", r), de.on("error", a), void t.fire(zt._fullscreenButtonPressed)
                }
                i()
            }))
        },
        requestFullscreen: () => C.toggleFullscreen(!0),
        exitFullscreen: () => C.toggleFullscreen(!1),
        get fullscreen() {
            return !!de.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new le("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: n => new Promise(((i, o) => {
            try {
                const o = Array.from(e.backbone.chapters);
                e.parentUrl = n,
                    function(e, t, n) {
                        const {
                            duration: i,
                            id: o,
                            privacy: r
                        } = e.video;
                        if (r !== Yt && r !== Ft && r !== Kt) return;
                        const a = function(e, t, n, i) {
                            if (t < 30 || 0 === i.length) return [];
                            const o = [];
                            return i.forEach(((r, a) => {
                                const {
                                    startTime: l,
                                    text: s
                                } = r;
                                if (l < t) {
                                    var c;
                                    const t = null == i || null == (c = i[a + 1]) ? void 0 : c.startTime,
                                        r = `${dn}${e}`,
                                        [d] = n.split("#"),
                                        u = `${d}#${r}=${l}`;
                                    o.push({
                                        "@type": "Clip",
                                        name: s,
                                        startOffset: l,
                                        endOffset: t,
                                        url: u
                                    })
                                }
                            })), o.length && (o[o.length - 1].endOffset = t), o
                        }(o, i, t, n);
                        Xl({
                            hasPart: a
                        })
                    }(e.config, n, o), t.fire(zt._parentUrlAvailable, n), i()
            } catch (r) {
                o(new le((null == r ? void 0 : r.message) || "", (null == r ? void 0 : r.name) || "", "appendVideoMetadata"))
            }
        })),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!ka.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            b(e, pn, "setColor")
        },
        set colorOne(e) {
            b(e, _n, "setColorOne", [pn, mn])
        },
        set colorTwo(e) {
            b(e, pn, "setColorTwo", [_n])
        },
        set colorThree(e) {
            b(e, mn, "setColorThree", [_n])
        },
        set colorFour(e) {
            b(e, vn, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map((e => ({
                time: e.time,
                data: e.data,
                id: e.id
            })))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(n) {
            if (n = parseFloat(n), isNaN(n) || n < 0 || n > e.config.video.duration) throw new le(`Seconds must be a positive number less than the duration of the video (${St(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return t.fire(Xt._seek), t.fire(jt._seek, n), t.fire(zt._mousedOver), i < 3 ? null : new Promise((e => {
                t.once(E.SEEKED, (({
                    currentTime: t
                }) => {
                    e(t)
                }))
            }))
        },
        get duration() {
            return St(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            t.fire(jt._changeLoop, e)
        },
        set muted(e) {
            t.fire(jt._changeMuted, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === g()
        },
        get paused() {
            return !e.backbone || !("paused" in e.backbone) || !!e.backbone.paused
        },
        get buffered() {
            return Jl(e.backbone.buffered)
        },
        get played() {
            return Jl(e.backbone.played)
        },
        get seekable() {
            return Jl(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(n) {
            if (!e.config.embed.settings.speed) throw new le("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(n) || n > 2) throw new le("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            t.fire(jt._changePlaybackRate, n)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map((e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === u ? "showing" : "disabled"
            })))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new le("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return g()
        },
        set volume(e) {
            if (e = parseFloat(e), 1 === i && (e /= 100), isNaN(e) || e < 0 || e > 1) throw new le("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            _ = e;
            var n = !0;
            Z.settingVolume || 0 !== e ? t.fire(jt._changeVolume, e, n) : t.fire(jt._changeMuted, !0, n)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!jl(e.config.video.owner)) throw new le("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map((e => e.id));
            if (!n.includes(t)) throw new le(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideoViaConfig(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(n) {
            e.config.user.liked !== n && t.fire(zt._likeButtonPressed, n)
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(n) {
            e.config.user.watch_later !== n && t.fire(zt._watchLaterButtonPressed, n)
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex((e => t === e.id));
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map(((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            })))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new le(`Chapter timecode must be positive number less than the duration of the video (${St(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (De) {
                if ("ChaptersNotSupported" === De.name) throw new le(De.message, "UnsupportedError", "_addChapter");
                throw new le("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (De) {
                throw new le("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new le("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (De) {
                if ("ChaptersNotSupported" === De.name) throw new le("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new le("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            t.fire(jt._addCard, e)
        },
        _removeCard(e) {
            t.fire(jt._removeCard, e)
        },
        _setOutro(n, i) {
            e.config.embed.outro !== n ? (t.fire(jt._hideOutro), setTimeout((() => {
                e.config.embed.outro = n, t.fire(jt._showOutro, n, i)
            }), 400)) : t.fire(jt._showOutro, n, i)
        },
        _hideOutro() {
            t.fire(jt._hideOutro)
        },
        _fireEvent(...e) {
            t.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(n) {
            e.config.video.live_event && (Object.keys(n).forEach((i => {
                let o = n[i];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[i] = o, t.fire(zt._liveEventSettingsChanged, i, o), t.fire(j.SETTINGS_UPDATED, i, o)
            })), t.fire(zt._configChanged, !1, e.config))
        },
        _setEmbedSettings(n) {
            Object.keys(n).forEach((i => {
                let r = n[i];
                r = "object" == typeof r ? r : Number(r), "badge" === i && (r ? r = o : o = e.config.embed.settings.badge), e.config.embed.settings[i] = r, t.fire(zt._embedSettingChanged, i, r)
            })), t.fire(zt._configChanged, !1, e.config)
        },
        _setEmbedSetting(n, i) {
            i = "object" == typeof i ? i : Number(i), "badge" === n && (i ? i = o : o = e.config.embed.settings.badge), e.config.embed.settings[n] = i, t.fire(zt._embedSettingChanged, n, i), t.fire(zt._configChanged, !1, e.config)
        },
        _setCreateInteractive(n, i) {
            e.config.embed.create_interactive = n, e.config.embed.interactive = i, t.fire(zt._createInteractiveChanged, n, e.config), t.fire(zt._configChanged, !1, e.config)
        },
        _setOTTVideoMetadata(n) {
            var i;
            null != (i = e.config.request.flags) && i.ott && (e.ottVideoMetadata = n, t.fire(zt._ottMetadataSet, n))
        },
        _toggleDebugPanel() {
            t.fire(zt._debugButtonPressed)
        },
        _overrideControlbarBehavior(e) {
            t.fire(jt._overrideControlbarBehavior, e)
        },
        _setControlbarVisibility(e) {
            t.fire(jt._setControlsVisibility, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new le("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new le("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (De) {
                throw new le(De.message, De.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new le("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new le("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new le("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new le("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (De) {
                throw new le(De.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = ka.currentSession;
            t && ue(e) && t.sendMessage(Ra, {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: ".vp-title",
                sidedock: ".vp-sidedock",
                controls: ".vp-controls",
                customLogo: ".custom-logo"
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = 10,
                o = {
                    get details() {
                        const e = Et(document.querySelector(".headers > h1")),
                            t = Et(document.querySelector(".sub-title")),
                            n = Et(document.querySelector(".vp-portrait")),
                            o = Math.max(e.width, t.width) + n.width,
                            r = Math.max(n.height, e.height + t.height);
                        return {
                            top: i,
                            left: i,
                            width: Math.max(200, o),
                            height: Math.max(60, r)
                        }
                    },
                    get sidedock() {
                        return {
                            top: i,
                            left: t - i - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = o.customLogo,
                            r = Math.max(60, e.height);
                        return {
                            height: r,
                            top: n - i - r,
                            left: i,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            o = e ? Et(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - i - o.height,
                            left: t - i - o.width,
                            width: o.width,
                            height: o.height
                        }
                    }
                };
            return o
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            C.on.apply(C, e)
        },
        removeEventListener(...e) {
            C.off.apply(C, e)
        },
        seekTo(e) {
            C.currentTime = e
        },
        changeColor(e) {
            C.color = e
        }
    };
    const y = {
        addCuePoint: ({
            time: e,
            data: t
        }) => C.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            C.enableTextTrack(e, t)
        }
    };

    function T(e, t) {
        n && n.emit(e, t), a.fire(e, t)
    }
    const L = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        T(e, i)
    };

    function A({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: St(e),
            percent: St(n),
            duration: St(t)
        }
    }

    function I(e) {
        return {
            playbackRate: e
        }
    }

    function S() {
        T(tn.LOADED, d ? null : (d = !0, {
            id: e.config.video.id
        }))
    }

    function O(e) {
        return c = e, R(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new le("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new le("There was an error loading the files for this video.", "FileError")
            }
            return new le("An error occurred during playback.", "PlaybackError")
        }(c))
    }

    function R(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            var e;
            let t = new URL(window.location.href);
            p = !!t.searchParams.get("fromLoadVideo"), m = (null == (e = t.searchParams.get("listeners")) ? void 0 : e.split(",")) || [], (p || m.length) && (t.searchParams.delete("fromLoadVideo"), t.searchParams.delete("listeners"))
        }(), e.config.embed.on_site || (v(e.config.embed.api), n = new se, n.configureClient(window.parent, "*"), n.filter((function() {
            return ce()
        })), n.listeners = Nt(tn).reduce(((e, t) => h(h({}, e), {}, {
            [t]: !1
        })), {}), m.length ? m.forEach((e => {
            n.listeners[e] = !0
        })) : (n.listeners[tn.READY] = !0, n.listeners[tn.ERROR] = !0), n.filter((e => n.listeners[e])), t.on(zt._remoteComponentMounted, ((e, t, i) => {
            n.addAllowedActor(e, null == t ? void 0 : t.contentWindow, i)
        }))),
        function() {
            if (!n) return;
            const t = Gl({}, C, y);
            n.extendMethods(t), n.hooks({
                logError(e) {
                    T(tn.ERROR, R(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (ue(e)) return v(3), e;
                    try {
                        const t = JSON.parse(e);
                        return v(2), t
                    } catch (t) {
                        return v(null), T(tn.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    null != (n = e.config.embed) && n.player_id && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === i && (t = function(e) {
                            if (e.event) {
                                for (const t in nn)
                                    if (nn[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), ue(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (De) {}
                    return t
                }
            })
        }(), t.on(P.BUFFER_STARTED, L(tn.BUFFER_START)), t.on(P.BUFFER_ENDED, L(tn.BUFFER_END)), t.on(P.CUE_POINT, L(tn.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), t.on(V, L(tn.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), t.on(zt._chapterChanged, L(tn.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex((e => t === e.id));
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), t.on(zt._ended, L(tn.ENDED, (function() {
            return s = !1, {
                seconds: St(e.config.video.duration),
                percent: 1,
                duration: St(e.config.video.duration)
            }
        }))), t.on(zt._paused, L(tn.PAUSE, (function(t) {
            return s = !1, {
                seconds: St(t),
                percent: St(t / e.config.video.duration),
                duration: St(e.config.video.duration)
            }
        }))), t.on(zt._playbackRateChanged, L(tn.PLAYBACK_RATE_CHANGE, I)), t.on(zt._playbackRateChanged, L(tn.RATE_CHANGE, I)), t.on(zt._captionsChanged, L(tn.TEXT_TRACK_CHANGE, (function(e) {
            u = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), t.on(zt._volumeChanged, L(tn.VOLUME_CHANGE, (function(e) {
            return {
                volume: St(e)
            }
        }))), t.on(zt._controlBarVisibilityChanged, L(tn.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(zt._toastVisibilityChanged, L(tn.TOAST_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), t.on(zt._configChanged, (function(e) {
            _ && setTimeout((function() {
                var e = !0;
                Z.settingVolume || 0 !== _ ? t.fire(jt._changeVolume, _, e) : t.fire(jt._changeMuted, !0, e)
            }), 0), e && S()
        })), t.on(zt._error, (function(e) {
            const t = O(e);
            l && T(tn.ERROR, t)
        })), t.on(zt._didEnterFullscreen, L(tn.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), t.on(zt._didExitFullscreen, L(tn.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), t.on(zt._qualityChanged, L(tn.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), t.on(zt._adStarted, L(tn.AD_STARTED)), t.on(zt._adComplete, L(tn.AD_COMPLETED)), t.on(zt._adError, L(tn.AD_ERROR)), t.on(zt._adSkipped, L(tn.AD_SKIPPED)), t.on(zt._allAdsCompleted, L(tn.AD_ALL_COMPLETED)), t.on(zt._adClicked, L(tn.AD_CLICKED)), t.on(zt._interactiveHotspotClicked, L(tn.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), t.on(zt._interactiveOverlayPanelClicked, L(tn.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), t.once(zt._ready, (function() {
            l = !0, p ? (S(), function(e, t) {
                n && n.emitMethodEvent(e, t)
            }(tn.LOAD_VIDEO, e.config.video.id)) : T(tn.READY), c && (T(tn.ERROR, O(c)), c = null)
        })), t.on(j.EVENT_ENDED, L(tn.LIVE_EVENT_ENDED)), t.on(j.EVENT_STARTED, L(tn.LIVE_EVENT_STARTED)), t.on(j.STREAM_OFFLINE, L(tn.LIVE_STREAM_OFFLINE)), t.on(j.STREAM_ONLINE, L(tn.LIVE_STREAM_ONLINE)), t.on(X.CAMERA_CHANGE, L(tn.CAMERA_CHANGE, (function(e) {
            return e
        }))), t.on(X.MOTION_END, L(tn.MOTION_END)), t.on(X.MOTION_START, L(tn.MOTION_START)), t.on(X.WEBVR_HARDWARE_AVAILABLE, L(tn.WEBVR_HARDWARE_AVAILABLE)), t.on(X.WEBVR_ENTER, L(tn.ENTER_WEBVR)), t.on(X.WEBVR_EXIT, L(tn.EXIT_WEBVR)), t.on(X.SPATIAL_UNSUPPORTED, L(tn.SPATIAL_UNSUPPORTED)), t.on(E.PLAY, L(tn.PLAY, (function(t) {
            return s ? null : (s = !0, {
                seconds: St(t),
                percent: St(t / e.config.video.duration),
                duration: St(e.config.video.duration)
            })
        }))), t.on(E.PLAYING, L(tn.PLAYING, (function() {
            return s ? {
                seconds: St(e.currentTime),
                percent: St(e.currentTime / e.config.video.duration),
                duration: St(e.config.video.duration)
            } : null
        }))), t.on(E.PROGRESS, L(tn.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let o = {
                seconds: St(e),
                percent: St(n),
                duration: St(t)
            };
            return i < 3 && (o.bytesLoaded = -1, o.bytesTotal = -1), o
        }))), t.on(E.SEEKING, L(tn.SEEKING, A)), t.on(E.SEEKED, L(tn.SEEKED, A)), t.on(E.TIME_UPDATE, L(tn.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: St(e),
                percent: St(n),
                duration: St(t)
            }
        }))), t.on(E.LOADED_METADATA, L(tn.LOADED_METADATA)), t.on(E.DURATION_CHANGE, L(tn.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), t.on(E.WAITING, L(tn.WAITING)), t.on(E.LOADED_DATA, L(tn.LOADED_DATA)), t.on(E.LOAD_START, L(tn.LOAD_START)), t.on(E.RESIZE, L(tn.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), t.on(E.ENTER_PICTURE_IN_PICTURE, L(tn.ENTER_PICTURE_IN_PICTURE)), t.on(E.LEAVE_PICTURE_IN_PICTURE, L(tn.LEAVE_PICTURE_IN_PICTURE)), t.on(Na.connected, L(tn.CHROMECAST_CONNECTED)), t.on(zt._airPlayAvailable, L(tn.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, (() => !0))), t.on(zt._airPlayNotAvailable, L(tn.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, (() => !1))), t.on(zt._airPlayActivated, L(tn.REMOTE_PLAYBACK_CONNECT)), t.on(zt._airPlayDeactivated, L(tn.REMOTE_PLAYBACK_DISCONNECT)), t.on(jt._reset, (function() {
            c = null, d = !1
        })), t.on(zt._spaceChanged, (function(e = {}) {
            n && (n.listeners[tn.SPACE_CHANGE] = !0, T(tn.SPACE_CHANGE, e))
        })), t.fire(zt._apiModuleReady), C
}
const ns = h(h({}, _e), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr"
});

function is(e) {
    return wt("av01", e) ? "AV1" : wt("dvh1", e) ? "HEVC_DVH1" : wt("hvc1", e) ? "HEVC" : wt("avc1", e) ? "AVC" : e || ""
}

function os(e) {
    return wt("mp4a", e) ? "AAC" : wt("opus", e) ? "OPUS" : e || ""
}

function rs(e, t) {
    var n;
    return null != e && null != (n = e.request) && null != (n = n.ab_tests) && n[t] ? e.request.ab_tests[t] : {}
}

function as(t, n) {
    const i = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const r = i.headers;
        return function(e, t) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(a) {
            if ("video" === e.type) {
                const r = t.backbone.representations.reverse(),
                    l = r[e.stream];
                if (!l) return;
                const s = function(e, n, i, o, r, a) {
                    const l = i.headers;
                    delete l[""];
                    let s = {};
                    Object.keys(l).forEach((e => {
                        const t = l[e],
                            n = e.replace(_, "_");
                        s[n] = t
                    }));
                    let c = a.slice();
                    return c.forEach((e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    })), {
                        host: Ee(n.data.url),
                        product: uo(t.config),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: c,
                        clip_id: t.config.video.id,
                        headers: s,
                        buffered: St(fe(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : ""
                    }
                }(e, n, i, a, l, r);
                let u = s;
                o && (u = be({
                    extraContext: o
                }, s)), t.events.fire(zt._logMetric, {
                    name: ns.CHUNK_DOWNLOADED,
                    data: u
                });
                const p = {
                    ak_reference_id: s.headers.akamai_grn || null,
                    akamai_edge_ip: s.headers.akamai_request_bc || null,
                    akamai_request_bc: s.headers.akamai_request_bc || null,
                    content_length: s.headers.content_length || null,
                    content_type: s.headers.content_type || null,
                    x_cache: s.headers.x_cache || null,
                    x_cache_hits: s.headers.x_cache_hits || null
                };
                s.headers = p, rs(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: c(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    new d(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", s, Ja(t.config)), Z += a.byteLength, J = s
            }
            "akamai-grn" in r && (U = r["akamai-grn"]),
                function({
                    headers: e,
                    url: t
                }) {
                    const n = To(e);
                    n === Di.CacheMiss ? H = {
                        url: t,
                        edge: !1,
                        tier1: !1,
                        tier2: !1
                    } : n === Di.MidCacheHit ? H = {
                        url: t,
                        edge: !1,
                        tier1: !0,
                        tier2: !1
                    } : n === Di.EdgeCacheHit && (H = {
                        url: t,
                        edge: !0,
                        tier1: !0,
                        tier2: !1
                    })
                }(i);
            let l = {};
            U && (l.akamai_reference_id = U), l.manifest_load_durations = t.backbone.manifestLoadDurations, l.successful_segment_count = t.backbone.successfulSegments.length, l.failed_segment_count = t.backbone.failedSegments.length, W = l
        }))
    }));
    let r, a, l;
    const s = new WeakMap,
        _ = new RegExp("-", "g");
    let p, m = null,
        v = null,
        f = !1,
        b = !1,
        C = !1,
        y = "auto",
        T = {},
        L = {},
        I = null,
        S = null,
        O = null,
        R = [],
        N = null,
        w = {},
        D = !1,
        k = !1,
        M = !1,
        V = 0,
        B = 0,
        x = 0,
        U = null,
        H = null,
        F = !1,
        W = null,
        Y = null,
        $ = null,
        K = !1,
        q = !1,
        Z = 0,
        Q = 0,
        J = null;

    function ee() {
        const e = s.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: a,
            _metricsBufferTracker: l
        } = e) : (l = new he, a = new me(t.backbone.videoElement, ne), te(), s.set(t.backbone.videoElement, {
            _videoMonitor: a,
            _metricsBufferTracker: l
        }))
    }

    function te() {
        const e = l;
        a.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(P.BUFFER_STARTED, (() => {
                    f && (K || F || (F = !0, e.trackBufferStart(a.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                })), t.events.on(P.BUFFER_ENDED, (() => {
                    f && F && (F = !1, e.trackBufferEnd(a.logBufferEnd, {
                        cdn_data: H
                    }), e.resetLastBufferTime())
                }))
            },
            addEventData(e) {
                const t = q;
                switch (q = !1, e) {
                    case ns.VIDEO_START_TIME:
                        return W;
                    case ns.VIDEO_SEEK:
                        const e = Y;
                        return Y = null, e;
                    case ns.VIDEO_PLAYED:
                    case ns.VIDEO_PAUSED:
                        return {
                            api_call: t
                        }
                }
                return null
            },
            customMinuteTracker: {
                shouldCount: () => {
                    var e;
                    return t.backbone.isLive() && (null == (e = t.config.video.live_event) ? void 0 : e.dvr) && !t.backbone.atLiveEdge
                },
                onCount: e => {
                    Q = e
                }
            }
        }), a.initHooks()
    }

    function ne(i, l = {}) {
        (function(e) {
            var n, i, o;
            switch (e) {
                case ns.VIDEO_SEEK:
                case ns.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (i = i.settings) ? void 0 : i.background);
                case ns.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (o = t.config.video.live_event) ? void 0 : o.low_latency;
                case ns.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === P.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return Mr(.1);
                default:
                    return !1
            }
        })(i) || (l = Object.assign(a ? a.globalProperties() : {}, Object.assign(function() {
            var e, i, r, a;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (e = e.owner) ? void 0 : e.id,
                product: uo(t.config),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Ja(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (i = t.config.user) ? void 0 : i.id,
                viewer_team_id: null == (r = t.config.user) ? void 0 : r.team_id,
                viewer_team_origin_user_id: null == (a = t.config.user) ? void 0 : a.team_origin_user_id,
                vuid: Ho("vuid"),
                fps: t.config.video.fps
            };
            var s;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), n.get(qa) && (l.live_session_id = null == (s = t.config.video.live_event) ? void 0 : s.id), l
        }(), function() {
            var n, i;
            const o = t.backbone.video ? t.backbone.video.currentFile : {},
                r = function() {
                    const n = {},
                        i = g(),
                        o = ge("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        l = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let s = [];
                    a && (s = u(t.config, "request.files.progressive") || u(t.config, "request.files.hls") || []), r && (s = u(t.config, "request.files.dash.streams", [])), l && (s = t.backbone.video.currentFile.mime === qt.dashMpd ? u(t.config, "request.files.dash.streams", []) : u(t.config, "request.files.hls.streams", []));
                    const c = Array.from(s).sort(o).map((e => e.profile));
                    let d = -1,
                        _ = 0,
                        p = null;
                    if (Object.keys(L).forEach((e => {
                            const t = c.indexOf(parseInt(e, 10));
                            t > d && (d = t);
                            const n = L[e].reduce(((e, t) => ((t.end || i) - t.start) / 1e3 + e), 0);
                            n > _ && (_ = n, p = e)
                        })), n.highest_profile = c[d], n.highest_available_profile = c[c.length - 1], n.most_used_profile = p, (r || l) && R) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(R))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(R))) / 1e3;
                        const t = R.reduce(((e, t) => e + t), 0);
                        n.average_speed = Math.round(t / R.length) / 1e3
                    }
                    return n
                }();
            let {
                mime: a = qt.h264,
                metadata: {
                    profile: l = null
                } = {}
            } = o, s = !1, c = !1;
            switch (a) {
                case qt.dash:
                    0 === o.restrictedStreamIndexes.length && (s = !0), u(t.config, "request.files.dash.separate_av") && (c = !0), l = T ? T.profile : null;
                    break;
                case qt.hls:
                    s = !0
            }
            let d = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio", "average") / 1e3,
                audio_provenance: ie(),
                auto: s,
                average_speed: r.average_speed || 0,
                cdn: o.metadata ? o.metadata.cdn : "akamai",
                delivery: "live" !== Jt[a] ? Jt[a] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : t.backbone.videoElement.webkitCurrentPlaybackTargetIsWireless ? "airplay" : null,
                dropped_frame_percent: x,
                event_time: m + ve(v),
                fullscreen: k,
                picture_in_picture: M,
                highest_available_profile: r.highest_available_profile ? String(r.highest_available_profile) : null,
                highest_profile: r.highest_profile ? String(r.highest_profile) : null,
                max_speed: isFinite(r.max_speed) ? r.max_speed : 0,
                mime: o.mime || null,
                min_speed: isFinite(r.min_speed) ? r.min_speed : 0,
                most_used_profile: r.most_used_profile ? String(r.most_used_profile) : null,
                profile_id: l ? String(l) : null,
                codec: is(null == t.backbone.getCurrentStream || null == (n = t.backbone.getCurrentStream("video")) ? void 0 : n.codecs),
                audio_codec: os(null == t.backbone.getCurrentStream || null == (i = t.backbone.getCurrentStream("audio")) ? void 0 : i.codecs),
                quality: T ? T.quality : null,
                quality_downswitch_count: B,
                quality_upswitch_count: V,
                separate_av: c,
                target_profile_id: $,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video", "average") / 1e3,
                video_duration: St(t.config.video.duration)
            };
            if (t.backbone.isLive()) {
                var _;
                void 0 !== t.backbone.latency && (d.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (d.is_low_latency = t.backbone.lowLatencyMode);
                const e = !(null == (_ = t.config.video.live_event) || !_.dvr);
                d.dvr = e, e && (d.in_dvr_mode = e && !t.backbone.atLiveEdge, d.dvr_minutes_watched = Q)
            }
            if (t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = Ro(e);
                d.ecdn = !0, d.ecdn_provider = e, d.ecdn_bytes_via_cdn = n, d.ecdn_bytes_via_peering = i, d.ecdn_peers = o
            }
            return d
        }(), function() {
            let e = {};
            if (t.config.request.ab_tests)
                for (const n in t.config.request.ab_tests) {
                    const i = t.config.request.ab_tests[n];
                    e[`${n}_test`] = 1, e[`${n}_group`] = i.group;
                    for (const t in i.data) e[`${n}_data_${t}`] = i.data[t]
                }
            return h(h({}, e), {}, {
                ab_tests: t.abTests
            })
        }()), l), l.name = i, t.events.fire(zt._logMetric, {
            name: i,
            data: l
        }), r.log(l).catch((e => {})))
    }

    function ie() {
        if (!t.config.request.audio_tracks) return null;
        let e = t.backbone.audioTracks.find((e => !!e.active));
        if (!e) return null;
        if (e.provenance) return e.provenance;
        const n = t.config.request.audio_tracks.filter((t => t.language === e.language));
        return 1 === n.length ? n[0].provenance : null
    }

    function oe(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        a.handleExternalError(i, t)
    }
    v = pe(), m = t.config.request.timestamp, r = new d(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(zt._error, oe), t.events.on(jt._reset, (function() {
        D = !1
    })), t.events.on(jt._seek, (function() {
        K = !0
    })), t.events.on(zt._didEnterFullscreen, (function() {
        k = !0, ne(ns.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(zt._didExitFullscreen, (function() {
        k = !1, ne(ns.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(E.ENTER_PICTURE_IN_PICTURE, (function() {
        M = !0, ne(ns.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(E.LEAVE_PICTURE_IN_PICTURE, (function() {
        M = !1, ne(ns.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(zt._configChanged, (function() {
        m = t.config.request.timestamp, v = pe(), f = !1, b = !1, C = !1, y = "auto", T = {}, L = {}, I = null, S = null, O = null, R = [], N = null, w = {}, D = !1, k = !1, V = 0, B = 0, x = 0, H = null, $ = null, Z = 0, Q = 0, a && (a.reset(), te())
    })), t.events.on(zt._nudgeAttempted, (function() {
        Y = {
            seek_type: "nudge"
        }
    })), t.events.on(zt._scrubbingStarted, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        Y = {
            seek_type: t
        }
    })), t.events.on(zt._chapterSeek, (function(e) {
        Y = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(zt._interactiveSeekCall, (function(e) {
        Y = {
            seek_type: e.type
        }
    })), t.events.on(zt._interactiveMarkerClicked, (function(e) {
        Y = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(A, (function() {
        D || ka.isCastConnected || (t.performDelegateAction(cl, ((e, t = {}) => {
            D = !0, p.then((() => a.logStartRequest())).catch((() => {}))
        })), rs(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                r = [{
                    uuid: c(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new d(e).logRequestPromiseWithUrl(e, JSON.stringify(r), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, Ja(t.config)))
    })), t.events.on(zt._overlayOpened, (function(e) {
        e === Xa && ne(ns.SLATE_DISPLAYED, {
            slate_type: Xa
        })
    })), t.events.on(zt._playbackRateChanged, (function(e, t) {
        ne(ns.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(jt._changeQuality, (function(e) {
        t.backbone.video.currentFile.mime === qt.dash && ("auto" === e || b ? "auto" === e && b && !C && (ne(ns.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: y,
            auto: 1
        }), C = !0) : (ne(ns.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), b = !0), y = e)
    })), t.events.on(jt._turnCaptionsOn, (function(e) {
        N !== e && (N = e, ne(ns.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(jt._turnCaptionsOff, (function() {
        N && (N = null, ne(ns.CAPTIONS_DISABLED))
    })), t.events.on(Na.connected, (function() {
        ne(ns.CHROMECAST_CONNECTED)
    })), t.events.on(Na.disconnected, (function() {
        ne(ns.CHROMECAST_DISCONNECTED)
    })), t.events.on(P.STREAM_CHANGE, (function(e, t, n, i) {
        var o;
        T = e;
        const r = e.profile ? e.profile : e.id,
            a = g();
        if (L[r] = L[r] || [], I) {
            const e = L[I].length - 1;
            L[I][e] && (L[I][e].end = a)
        }
        S && (n[t].bitrate > S ? V += 1 : B += 1), L[r].push({
            start: a
        }), w[r] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        };
        let l = {
            previous_audio_bitrate: O / 1e3,
            previous_video_bitrate: S / 1e3,
            previous_profile_id: String(I),
            reason: null == i ? void 0 : i.reasonForSwitch
        };
        r.toString() === (null == (o = J) ? void 0 : o.profile_id) && (J.headers.akamai_request_bc || J.headers.x_cache) && (l.cache_hit = To(J.headers)), ne(ns.VIDEO_STREAM_CHANGE, l), I = r, S = n[t].bitrate, O = n[t].audioBitrate
    })), t.events.on(P.STREAM_TARGET_CHANGE, (function(e) {
        e && ($ = String(e.profile || "") || null)
    })), t.events.on(E.PLAYING, (function() {
        K = !1
    })), t.events.once(zt._firstTimeUpdate, (function() {
        f = !0
    })), t.events.on(zt._adBuffering, (function() {
        ne(ns.AD_BUFFERING)
    })), t.events.on(zt._adComplete, (function() {
        ne(ns.AD_COMPLETE)
    })), t.events.on(zt._adClicked, (function() {
        ne(ns.AD_CLICKED)
    })), t.events.on(zt._adError, (function(e) {
        ne(ns.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(zt._adPaused, (function() {
        ne(ns.AD_PAUSED)
    })), t.events.on(zt._adResumed, (function() {
        ne(ns.AD_RESUMED)
    })), t.events.on(zt._adStarted, (function(e) {
        ne(ns.AD_STARTED, {
            startup_duration: e.time ? St(e.time / 1e3, 2) : null
        })
    })), t.events.on(zt._adSkipped, (function() {
        ne(ns.AD_SKIPPED)
    })), t.events.on(zt._pausedForAd, (function() {
        o.iPhone && a.setDisplayContext(1)
    })), t.events.on(zt._resumedAfterAd, (function() {
        o.iPhone && a.setDisplayContext(0)
    })), t.events.on(P.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        x = Math.round(100 * t) / 100
    })), t.events.on(P.BANDWIDTH, (function({
        speed: e
    }) {
        R.push(e), R.length > 500 && R.shift()
    })), t.events.on(P.MANIFEST_TIMEOUT, (function() {
        ne(ns.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(P.MANIFEST_LOADED, (function() {
        ne(ns.VIDEO_MANIFEST_LOADED)
    })), t.events.on(P.DOWNLOAD_END, i), t.events.on(P.DOWNLOAD_TIMEOUT, (function() {
        ne(ns.DOWNLOAD_TIMEOUT)
    })), t.events.on(P.DRM_KEY_SWITCH, (function() {
        ne(ns.DRM_KEY_SWITCH)
    })), t.events.on(P.SCANNER_CHANGE, (function() {
        H = null
    })), t.events.on(P.AV_DURATION_MISMATCH, (function(e) {
        ne(ns.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(P.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: P.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = St(fe(0, e), 2), t.bytes_loaded = Z, ne(ns.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(P.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: P.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        ne(ns.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(P.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach(((e, i) => {
            const o = n.reduce(((t, n) => (t.push(e[n]), t)), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: P.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            ne(ns.VIDEO_PLAYBACK_ERROR, r)
        }))
    })), t.events.on(z.MEDIASESSION_PLAY, (function() {
        ne(ns.MEDIASESSION_PLAY)
    })), t.events.on(z.MEDIASESSION_PAUSE, (function() {
        ne(ns.MEDIASESSION_PAUSE)
    })), t.events.on(z.MEDIASESSION_SEEK_FORWARD, (function() {
        ne(ns.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(z.MEDIASESSION_SEEK_BACKWARD, (function() {
        ne(ns.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(z.MEDIASESSION_SEEK_TO, (function() {
        ne(ns.MEDIASESSION_SEEK_TO)
    })), t.events.on(Xt._seek, (function() {
        Y = {
            seek_type: "api"
        }
    })), t.events.on(Xt._play, (function() {
        q = !0
    })), t.events.on(Xt._pause, (function() {
        q = !0
    })), t.events.on(X.WEBVR_ENTER, (function() {
        ne(ns.ENTER_WEBVR, !0)
    })), t.events.on(X.WEBVR_EXIT, (function() {
        ne(ns.EXIT_WEBVR, !0)
    })), t.events.on(j.STALL_JUMP, (function({
        msg: e
    }) {
        oe("livestall", {
            final: !1
        }, e)
    })), t.events.on(j.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        oe("livefallback", {
            final: !1
        }, e)
    })), p = new Promise((e => {
        var n;
        null != (n = t.backbone) && n.video && e(), t.events.on(G, e)
    })), p.then(ee).catch((() => {})), t.events.on(zt._swapVideo, ee)
}

function ls(e) {
    let t, i, o = e.config.ott || {};
    const r = o.analytics_url || "https://collector.vhx.tv/events.gif",
        a = new d(r),
        l = b((function() {
            u("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        s = b((function() {
            u("seeking")
        }), 500);

    function c() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function u(i, l) {
        (l = Object.assign({}, l, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: ka.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === l.timestamp && (l.timestamp = Math.round(.001 * Date.now()));
        const s = n(r, l);
        return a.logRequestPromiseWithUrl(s, {}, !0, "GET").catch((e => {}))
    }

    function _() {
        e.events.on(E.ENDED, p), e.events.on(E.ERROR, m), e.events.on(E.PAUSE, v), e.events.on(E.PLAY, f), e.events.on(E.TIME_UPDATE, l), e.events.on(E.SEEKING, s), e.events.on(E.SEEKED, h), e.events.on(E.WAITING, g), e.events.on(zt._didEnterFullscreen, C), e.events.on(zt._didExitFullscreen, y), e.events.on(zt._adComplete, T), e.events.on(zt._adClicked, L), e.events.on(zt._adError, A), e.events.on(zt._adStarted, I), e.events.on(zt._adSkipped, S)
    }

    function p() {
        l.cancel(), u("ended")
    }

    function m() {
        l.cancel(), u("error")
    }

    function v() {
        l.cancel(), u("pause")
    }

    function f() {
        if (!i) return i = !0, void u("firstplay");
        u("play")
    }

    function h() {
        s.cancel(), u("seeked")
    }

    function g() {
        u("waiting")
    }

    function C() {
        t = !0
    }

    function y() {
        t = !1
    }

    function T() {
        u(ns.AD_COMPLETE)
    }

    function L() {
        u(ns.AD_CLICKED)
    }

    function A() {
        u(ns.AD_ERROR)
    }

    function I() {
        u(ns.AD_STARTED)
    }

    function S() {
        u(ns.AD_SKIPPED)
    }
    e.events.on(zt._configChanged, c), c(), e.config.ott ? _() : new Promise((t => {
        e.ottVideoMetadata ? t() : e.events.on(zt._ottMetadataSet, (e => {
            t()
        }))
    })).then((() => {
        o = e.ottVideoMetadata, _()
    })).catch((e => {}))
}

function ss(e, t) {
    const n = new w;
    let i, r, a, l, s, c, d, u, _, p;

    function m() {
        var t, n;
        e.events.on(E.ERROR, O), e.events.on(A, P), e.events.on(q.ACTIVATED, S), i = document.querySelector(`.${yn.ADS_WRAPPER}`), i || (i = document.createElement("div"), i.classList.add(yn.ADS_WRAPPER), i.innerHTML = `\n                <div class="${yn.ADS_TAG} hidden">\n                    <span class="${yn.ADS_COUNTDOWN}"></span>\n                </div>\n            `, document.querySelector(".player").appendChild(i)), r = i.querySelector(`.${yn.ADS_TAG}`), a = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            autoplay: Boolean(null == (t = e.config) || null == (t = t.embed) ? void 0 : t.autoplay),
            muted: Boolean(null == (n = e.config) || null == (n = n.embed) ? void 0 : n.muted),
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, s = new Ce(i, a), s.on(ye.ADS_MANAGER_LOADED, (() => {
            s.on(ye.AD_BUFFERING, f), s.on(ye.AD_COMPLETE, g), s.on(ye.AD_CLICK, h), s.on(ye.AD_ERROR, b), s.on(ye.AD_STARTED, C), s.on(ye.AD_SKIPPED, y), s.on(ye.ALL_ADS_COMPLETED, T), s.on(ye.CONTENT_PAUSE_REQUESTED, L), s.on(ye.CONTENT_RESUME_REQUESTED, I), e.events.on(E.ENDED, N), e.store.watch("ui.player.width", x), e.events.on(zt._didEnterFullscreen, x, !0), e.events.on(zt._didExitFullscreen, x, !1), e.events.fire(zt._pausedForAd), s.isAutoPlayAllowed() && B()
        }))
    }

    function v() {
        r && (M(), r = null), s && (s.destroy(), s = null), d && (clearInterval(d), d = null), i = null, a = {}, l = null, c = !1, u = !1, _ = !1, p = !1, e.events.off(A, P), e.events.off(zt._didEnterFullscreen, x), e.events.off(zt._didExitFullscreen, x), e.events.off(q.ACTIVATED, S), e.events.off(E.ENDED, N), e.events.off(E.ERROR, O), e.events.off(E.PLAYING, R), e.store.unwatch("ui.player.width", x)
    }

    function f() {
        u && e.events.fire(zt._adBuffering)
    }

    function h() {
        e.events.fire(zt._adClicked)
    }

    function g() {
        o.iPhone && e.backbone.addVideoEventListeners(), d && clearInterval(d), u = !1, e.events.fire(zt._adComplete)
    }

    function b(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(zt._adError, n), "adPlayError" === n.errorType && e.events.fire(zt._resumedAfterAd)
    }

    function C(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let n = t.getAd();
        const r = n.getTraffickingParameters();
        n.isLinear() && "0" !== r.ad && (d = setInterval((() => {
            let e = "AD " + (e => {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            })(s.remainingTime);
            i.querySelector(`.${yn.ADS_COUNTDOWN}`).innerHTML = e
        }), 1e3), setTimeout(k, 1e3)), u = !0;
        let a = {
            type: n.isLinear() ? "linear" : "nonlinear"
        };
        l && (a.time = Date.now() - l, l = null), e.events.fire(zt._adStarted, a)
    }

    function y(t) {
        e.events.fire(zt._adSkipped, t)
    }

    function T(t) {
        c = !0, o.iPhone || v(), e.events.fire(zt._allAdsCompleted, t)
    }

    function L() {
        e.events.fire(zt._pausedForAd), l = Date.now(), p = !0, _ || (e.backbone.paused ? e.events.once(E.PLAYING, R) : e.backbone.pause())
    }

    function I() {
        M(), e.events.fire(zt._resumedAfterAd), o.iPhone && c && s.destroy(), _ || (e.events.off(E.PLAYING, R), D())
    }

    function S() {
        v()
    }

    function O(e) {
        e && ("NotAllowedError" === e.name || e.name)
    }

    function P() {}

    function R() {
        e.backbone.pause()
    }

    function N() {
        _ = !0, s.setContentComplete()
    }

    function D() {
        p = !1, e.backbone.play()
    }

    function k() {
        r = i.querySelector(`.${yn.ADS_TAG}`), r.classList.remove("hidden"), r.removeAttribute("hidden")
    }

    function M() {
        r.classList.add("hidden"), r.setAttribute("hidden", "")
    }

    function V() {
        const e = t.getBoundingClientRect();
        return {
            height: e.height,
            width: e.width
        }
    }

    function B() {
        const {
            width: t,
            height: n
        } = V();
        try {
            s.start(t, n)
        } catch (i) {
            _ && e.events.fire(zt._adComplete), p && D()
        }
    }

    function x(e) {
        const {
            width: t,
            height: n
        } = V();
        s.resize(t, n, e)
    }
    const U = {
        pause: () => (e.events.fire(zt._adPaused), s.pause()),
        play: () => (e.events.fire(zt._adResumed), B(), s.play()),
        get volume() {
            return s.volume
        },
        set volume(e) {
            s.volume = e
        },
        get muted() {
            return s.muted
        },
        set muted(e) {
            s.muted = e
        },
        events: n
    };
    return v(), m(), e.events.on(zt._configChanged, (() => {
        v(), m()
    })), U
}
const cs = "markers",
    ds = "dropped_frames",
    us = "total_frames",
    _s = "bandwidth",
    ps = "streams",
    ms = "files",
    vs = "video_dims",
    fs = "min_bandwidth",
    hs = "max_badwidth",
    gs = "buffer_occupancy",
    Es = "live_latency",
    bs = "scanner",
    Cs = "vr_headset",
    ys = ["clip_id", "profile_id", "player_size", ds, us, _s, cs, ps, ms, vs, fs, hs, gs, Es, bs, Cs];
let Ts = function() {
        function e(e) {
            this._core = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._core.events.fire(zt._debugDataChange)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._core.events.fire(zt._debugDataChange), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._core.events.fire(zt._debugDataChange), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = L({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            let n;
            return e === ns.CHUNK_DOWNLOADED ? (n = {}, n.host = t.host, n.duration = St(t.duration, 2), n.size = t.size, n.index = t.index, n.profile_id = t.profile_id, n.quality = t.quality, n.buffered = St(t.buffered, 2), n.ttfb = St(t.ttfb, 2), n.extraContext = t.extraContext, n.headers = Te(t.headers, ["x_cache", "akamai_request_bc", "akamai_grn", "content_type"]), n.cache_hit = To(n.headers), n) : e === ns.VIDEO_PLAYBACK_ERROR || e === ns.VIDEO_LOAD_FAILURE || e === ns.VIDEO_START_FAILURE || e === ns.VIDEO_READY ? t : void 0 !== t.autoplay && void 0 !== t.looping ? (n = {}, n.cdn = t.cdn, n.quality = t.quality, void 0 !== t.reason && (n.reason = t.reason), n) : t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._core.backbone.currentTime,
                o = Date.now(),
                r = St(fe(i, this._core.backbone.buffered), 2);
            this._addToSeries(cs, {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._core.events.on(zt._configChanged, (() => {
                this.reset()
            })), this._core.events.on(P.BANDWIDTH, this._onBandwidthChange.bind(this)), this._core.events.on(P.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._core.events.on(P.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._core.events.on(P.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._core.events.on(P.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._core.events.on(P.STREAM_CHANGE, this._onStreamChange.bind(this)), this._core.events.on(P.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._core.events.on(E.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._core.events.on(X.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._core.events.on(zt._logMetric, this._onLogMetric.bind(this)), this._core.events.on(j.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._core.events.on(j.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._core.events.on(j.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries(Cs, e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval((() => {
                const e = this._core.backbone.buffered,
                    t = this._core.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._core.backbone.latency;
                    this._setToSeries(Es, e)
                } else this._setToSeries(Es, 0)
            }), 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._core.store.watch("ui.player.boundingRect", (e => {
                const t = this.getCurrent(vs),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries(vs, n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            }))
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${St(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = ys.reduce(((e, t) => (e[t] = [], e)), {})
        }, t._setDefaults = function() {
            const e = this._core.backbone.currentFile;
            this._addToSeries(ms, e), this._addToSeries(bs, this._core.backbone.currentScannerName), "HLSLiveScanner" === this._core.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries(fs, 0), this._setToSeries(hs, 0);
            const t = this._core.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries(vs, n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries(_s, {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent(hs),
                i = this.getCurrent(fs);
            (!i || t < i) && this._setToSeries(fs, t), (!n || t > n) && this._setToSeries(hs, t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries(us, n), this._setToSeries(ds, t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._core.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const l = n[t],
                s = this._getResolutionString(l),
                c = is(l.codecs),
                d = null == (i = this._core.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = os(null == d ? void 0 : d.codecs),
                _ = `${c}${u?` / ${u}`:""}`,
                p = null == (o = this._core.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker("switchcomplete", `Completed switch to ${s}`), this._addToSeries(ps, {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${l.height}p`,
                avgBitrate: l.avg_bitrate,
                ambisonicConnected: null == p ? void 0 : p.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.avg_bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : l.channels) && void 0 !== r ? r : void 0,
                framerate: l.framerate,
                height: l.height,
                width: l.width,
                id: l.id,
                codec: _
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent(ms),
                t = this._core.backbone.currentFile;
            this._addToSeries(ms, t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? Jt[e.mime] : null,
                r = Jt[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries(gs, {
                videoTime: this._core.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent(bs),
                t = this._core.backbone.currentScannerName;
            this._setToSeries(bs, t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._core.events.fire(zt._debugDataChange)
        }, e
    }(),
    Ls = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._onReset = () => this.reset(), this._player.events.on(jt._reset, this._onReset)
        }, t._detachEventHandlers = function() {
            this._player.events.off(jt._reset, this._onReset)
        }, t.hibernate = function() {
            this._detachEventHandlers()
        }, t.wake = function() {
            this._attachEventHandlers()
        }, t._getFragment = function(e, t, n) {
            if (s(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex(((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                })),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                l = n[o + 1],
                c = r ? t : (l - 1) / 1e3;
            return {
                startTime: a,
                endTime: c,
                duration: c - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(zt._fragmentChanged)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(E.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !s(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(E.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, t.getFragmentFromTime = function(e) {
            var t;
            const n = null == (t = this._player.config.embed.interactive) ? void 0 : t.fragments,
                i = this._player.config.video.duration;
            return this._getFragment(e, i, n)
        }, R(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !s(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return s(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }])
    }();
var As = function(e) {
    return e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint", e
}(As || {});
const Is = 4e-4 / Object.keys(As).length,
    Ss = {};
let Os = function(e) {
        return e.PQ = "PQ", e.DV5 = "DV5", e.DV81 = "DV81", e.DV82 = "DV82", e.DV84 = "DV84", e.HDR10 = "HDR10", e.HDR10_PLUS = "HDR10_PLUS", e.HLG = "HLG", e
    }({}),
    Ps = function(e) {
        return e.KOLLECTIVE = "kollective", e.HIVE = "hive", e
    }({});
const Rs = {
    [Ps.KOLLECTIVE]: "Kollective",
    [Ps.HIVE]: "Hive"
};

function Ns({
    config: e,
    debugCollector: t,
    backbone: n
}) {
    var i, r, a, l, s;
    const c = e.request.session,
        d = t.getCurrent(Ii.FIELD_VIDEO_DIMS),
        u = t.getCurrent(Ii.FIELD_TOTAL_FRAMES) || 0,
        _ = t.getCurrent(Ii.FIELD_DROPPED_FRAMES) || 0,
        p = t.getCurrent(Ii.FIELD_FILES),
        m = t.getCurrent(Ii.FIELD_STREAMS),
        v = t.getCurrent(Ii.FIELD_SCANNERS),
        f = t.getCurrent(Ii.FIELD_BANDWIDTH),
        h = v === Oi.HLS_LIVE_SCANNER,
        g = v === Oi.MEDIA_SOURCE_SCANNER,
        E = Se(n.currentTime, n.buffered),
        b = n.currentTime + E,
        C = function(e) {
            if (!e) return null;
            const t = e.length;
            let n = 0,
                i = [];
            for (; n < t; n++) {
                const t = e.start(n),
                    o = e.end(n);
                i.push({
                    i: n,
                    start: t,
                    end: o
                })
            }
            return i
        }(n.buffered),
        y = n.bufferTarget,
        T = n.presentationDelay,
        L = e.embed.dnt || (null == (i = e.request.flags) ? void 0 : i.dnt),
        A = {
            isLive: h,
            isDash: g,
            embedSize: d,
            sessionId: c,
            testGroup: Object.keys(e.request.ab_tests).map((t => {
                var n;
                return `${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`
            })).join(", "),
            isDNTEnabled: L,
            totalFrames: u,
            droppedFrames: _,
            bufferTarget: y,
            presentationDelay: T,
            ua: null == (r = navigator) ? void 0 : r.userAgent,
            clipId: e.video.id,
            readyState: n.readyState,
            support: JSON.stringify(o),
            bufferEnd: St(b, 3),
            bufferAhead: St(E, 3),
            currentTime: St(n.currentTime, 3),
            clientIp: null == (a = e.request) || null == (a = a.client) ? void 0 : a.ip,
            playerVersion: Ja(e),
            bufferedRanges: JSON.stringify(C),
            brainDebug: JSON.stringify(n.brainDebug),
            codec: m ? m.codec : null,
            hideCloseButton: !!e.embed.settings.background,
            isCopyDisabled: !!L,
            vrHeadsetName: t.getCurrent(Ii.FIELD_VR_HEADSET),
            droppedFramesPercent: 0 !== u ? `${(_/u*100).toFixed(2)}%` : 0,
            resolution: m ? `${m.width}×${m.height}@${Math.round(m.framerate)} ${Math.round(m.avgBitrate/1e3).toLocaleString()} Kbps ${m.audioBitrate?` / ${Math.round(m.audioBitrate/1e3).toLocaleString()} Kbps`:""}` : null,
            payloadId: `${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,
            bandwidthKbps: f ? `${Math.floor(f.value/1e3).toLocaleString()} Kbps` : 0,
            bandwidthMinKbps: `${Math.floor(t.getCurrent(Ii.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
            bandwidthMaxKbps: `${Math.floor(t.getCurrent(Ii.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,
            separateAudioVideo: !(null == (l = e.request.files) || !l.dash || !e.request.files.dash.separate_av),
            bandwidthSeriesData: Ds(t)
        };
    null != m && m.audioChannels && (A.resolution += m.ambisonicConnected && m.ambisonicOrder ? ` ambisonic ${m.ambisonicOrder} (${m.audioChannels}ch)` : ` ${m.audioChannels}ch`), p && (A.delivery = p.mime), e.request.drm && Object.assign(A, {
        drmEnabled: !0
    });
    const I = null == (s = e.video.ecdn) ? void 0 : s.ecdn_provider;
    if (I) {
        const {
            ecdnBytesByCdn: e,
            ecdnBytesPeered: t,
            ecdnPeers: n
        } = Ro(I), i = {
            p2pSources: n.toString(),
            p2pOffload: `${ws(t,e)}%`,
            ecdnVendor: Rs[I]
        };
        Object.assign(A, i)
    }
    return h && Object.assign(A, function(e, t) {
        var n;
        const i = (null == (n = e.video.live_event) ? void 0 : n.id) || null;
        let o = "";
        try {
            var r;
            o = `${(null!==(r=t.getCurrent(Ii.FIELD_LIVE_LATENCY))&&void 0!==r?r:0).toFixed(2)}`
        } catch (De) {}
        return {
            liveLatency: o,
            liveSessionID: i
        }
    }(e, t)), A
}

function ws(e, t) {
    return 0 === e && 0 === t ? 0 : St(e / (t + e) * 100, 1)
}

function Ds(e) {
    const t = e.getSeries(Ii.FIELD_BANDWIDTH) || [],
        n = e.getCurrent(Ii.FIELD_MAX_BANDWIDTH) || 1;
    return {
        debugMarkers: e.getSeries(Ii.FIELD_MARKERS) || [],
        timeSeries: t,
        max: n
    }
}
let ks = function() {
    function e(e = (e, t) => e < t) {
        this._data = {}, this._sortedKeys = [], this._sort = e
    }
    var t = e.prototype;
    return t._insert = function(e) {
        var t = this._sortedKeys.length;
        if (0 === t) this._sortedKeys.push(e);
        else {
            for (var n = 0; n < t; n++)
                if (this._sort(e, this._sortedKeys[n])) {
                    this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e);
                    break
                }
            n === t && this._sortedKeys[n - 1] !== e && this._sortedKeys.splice(n, 0, e)
        }
    }, t._binarySearch = function(e, t, n, i) {
        if (i < n) return -1;
        let o = parseInt(n + (i - n) / 2, 10);
        return e[o] > t ? this._binarySearch(e, t, n, o - 1) : e[o] < t ? this._binarySearch(e, t, o + 1, i) : o
    }, t.delete = function(e) {
        const t = this._binarySearch(this._sortedKeys, e, 0, this._sortedKeys.length);
        if (-1 === t) throw new Error("key does not exist");
        this._sortedKeys.splice(t, 1), delete this._data[e]
    }, t.set = function(e, t) {
        return this._data[e] = t, this._insert(e), this
    }, t.get = function(e) {
        return this._data[e]
    }, t.keys = function() {
        return this._sortedKeys.slice()
    }, t.values = function() {
        return this.keys().map((e => this._data[e]))
    }, t.forEach = function(e) {
        const t = this._sortedKeys.length;
        for (let n = 0; n < t && !1 !== e(this._data[this._sortedKeys[n]], this._sortedKeys[n], this); n++);
    }, R(e, [{
        key: "size",
        get: function() {
            return this._sortedKeys.length
        }
    }])
}();
const Ms = {},
    Vs = e => {
        var t;
        const n = new ks;
        return null != (t = e.embed) && null != (t = t.cards) && t.length && e.embed.cards.forEach((e => {
            const t = e.url ? h(h({}, e), {}, {
                url: to(e.url)
            }) : e;
            n.set(e.timecode, Ua(t))
        })), n
    },
    Bs = e => {
        const {
            events: t,
            set: n
        } = e, i = function(e) {
            return {
                cardsMap: Vs(e.config),
                activeCard: null,
                hoveredCard: null,
                displayedCard: null,
                cardPressed: void 0
            }
        }(e), o = e => {
            const {
                hoveredCard: t,
                activeCard: n
            } = e, i = null !== t ? t : n;
            return {
                cards: h(h({}, e), {}, {
                    displayedCard: i
                })
            }
        }, r = e => {
            e && t.fire(zt._cardDisplayed, e.id, e)
        }, a = e => e.timecode;
        return t.on(zt._configChanged, ((e, t) => {
            n((e => {
                const n = h(h({}, e.cards), {}, {
                    cardsMap: Vs(t),
                    activeCard: null,
                    hoveredCard: null
                });
                return o(n)
            }))
        })), t.on(jt._addCard, (e => {
            n((t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.set(e.timecode, e), r(e);
                const i = h(h({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: e.timecode
                });
                return o(i)
            }))
        })), t.on(jt._removeCard, (e => {
            n((t => {
                let {
                    cardsMap: n
                } = t.cards;
                n.delete(e.timecode);
                const i = h(h({}, t.cards), {}, {
                    cardsMap: n,
                    activeCard: null,
                    hoveredCard: null
                });
                return o(i)
            }))
        })), t.on(E.TIME_UPDATE, (({
            currentTime: e
        }) => {
            n((t => {
                const n = ((e, t) => {
                        const {
                            cardsMap: n
                        } = e.cards;
                        let i = n.values().filter((e => ((e, t) => t >= a(e) && t < (e => a(e) + (e.displayTime || 6))(e))(e, t))).slice(-1)[0];
                        return (null == i ? void 0 : i.timecode) || null
                    })(t, e),
                    i = t.cards.cardsMap.get(n);
                if (n === t.cards.activeCard) return Ms;
                const l = h(h({}, t.cards), {}, {
                    activeCard: n
                });
                return r(i), o(l)
            }))
        })), t.on(zt._ended, (() => {
            n((e => {
                const t = h(h({}, e.cards), {}, {
                    activeCard: null,
                    hoveredCard: null
                });
                return o(t)
            }))
        })), {
            cards: i,
            setCards: (e, i) => {
                "cardPressed" !== e ? ((e, t) => {
                    n((n => {
                        const i = h(h({}, n.cards), {}, {
                            [e]: t
                        });
                        return o(i)
                    }))
                })(e, i) : t.fire(zt._cardPressed, i)
            }
        }
    };

function xs(e) {
    var t, n;
    const {
        config: i
    } = e, {
        title: r
    } = i.video, {
        title: a,
        portrait: l
    } = i.embed.settings, c = 0 === i.embed.on_site, d = i.embed.settings.spatial_label, u = !(!i.video.spatial || !d), _ = i.request.file_codecs || i.video.file_codecs, p = !s(_), m = i.request.hdr_formats || [], v = p && (null == (t = _.hevc) || null == (t = t.hdr) ? void 0 : t.length) > 0, f = m.includes(Os.HDR10_PLUS), g = m.includes(Os.DV84) || p && (null == (n = _.hevc) || null == (n = n.dvh1) ? void 0 : n.length) > 0, E = !!i.video.ai, b = i.video.channel_layout || "stereo", C = i.video.owner[o.devicePixelRatio > 1 ? "img_2x" : "img"], y = i.video.owner.name, T = Yi(Ut, i), L = Yi(xt, i);
    let A = Yi(Bt, i);
    const I = function(e) {
        let t = {
            displayByline: !1,
            displayBadge: !1
        };
        if (e.embed.settings.byline) {
            const {
                type: n,
                url: i
            } = e.embed.settings.byline_badge || {};
            Object.assign(t, {
                displayByline: !0,
                displayBadge: !e.video.live_event,
                bylineBadgeType: n,
                bylineBadgeUrl: i
            })
        }
        return t
    }(i);
    return e.segmentedPlaybackEnabled && (A = Ji(A, e.startTime, e.endTime)), h({
        ownerLinkUrl: T,
        titleLinkUrl: A,
        bylineLinkUrl: L,
        displayTitle: !!a,
        displayPortrait: !!l,
        ownerName: y,
        targetBlank: c,
        portraitImg: C,
        title: r,
        is360: u,
        hasAIContent: E,
        hasHDR: v,
        hasHDR10Plus: f,
        hasDolbyVision: g,
        channelLayout: b
    }, I)
}
const Us = 250;
let Hs;

function Fs(e) {
    var t;
    const {
        config: n,
        store: i
    } = e, {
        request: o,
        video: r
    } = n, a = Yi(Vt, e.config), l = null == (t = r.vod) ? void 0 : t.button_text, s = i.get("ui.player.breakpoint"), c = i.get("ui.player.mode"), d = mr(pr.FULL_CONTROLS, c, s);
    return {
        overrideBehavior: !1,
        trailerButtonText: l,
        vimeoLogoUrl: a,
        thumbnailPreview: o.thumb_preview,
        showAllControls: d,
        progressBarExpanded: !1,
        shouldRestoreButtonsDisplayed: !1
    }
}
let Gs = function(e) {
    return e.EMPTY = "empty", e.UNMUTE = "unmute", e.WATCH_FULL_VIDEO = "watchFullVideo", e.SPATIAL_INSTRUCTIONS_CLICK = "spatialInstructionsClick", e.SPATIAL_INSTRUCTIONS_ARROWS = "spatialInstructionsArrows", e
}({});
const Ws = [Gs.SPATIAL_INSTRUCTIONS_CLICK, Gs.SPATIAL_INSTRUCTIONS_ARROWS, Gs.WATCH_FULL_VIDEO, Gs.UNMUTE];

function Ys(e) {
    const {
        config: t
    } = e, {
        autoplay: n,
        settings: i
    } = t.embed;
    return {
        purpose: e.segmentedPlaybackEnabled && n && i.watch_full_video ? Gs.WATCH_FULL_VIDEO : Gs.EMPTY
    }
}

function $s({
    displayList: e,
    playback: t,
    embed: n
}) {
    const {
        outro: i,
        controlBar: o
    } = e, {
        isSegmentedPlaybackEnabled: r,
        paused: a,
        scrubbing: l
    } = t;
    return !!r && (!i && o && !(a && !l) && n.watchFullVideo)
}

function Ks(e) {
    const t = e.embed.access_gates;
    if (!t) return null;
    const n = t.find((e => e.placement === Go.BEFORE_VIDEO));
    return n ? jo(null == n ? void 0 : n.gate_type, e) ? null : ((e, t) => {
        const n = Yo[e];
        return !n || n.includes(t.view)
    })(null == n ? void 0 : n.gate_type, e) ? n : null : null
}
const qs = e => !e.title && !e.portrait && !e.byline,
    js = e => {
        var t;
        const {
            config: n,
            element: i,
            get: o
        } = e, {
            embed: r
        } = n, a = i.classList.contains("player-tiny"), l = Ys(e), s = (null == l ? void 0 : l.purpose) === Gs.WATCH_FULL_VIDEO;
        return !(a || null !== Ks(n) || (null == (t = o()) || null == (t = t.overlay) ? void 0 : t.purpose) === oi.INTERACTIVE || n.view && !Wn(n.view) || null != r && r.autoplay || qs(null == r ? void 0 : r.settings) || !ai(r) || s)
    },
    zs = e => {
        var t;
        const {
            config: n,
            get: i
        } = e, {
            view: r,
            video: a,
            embed: l,
            request: s
        } = n, {
            vod: c
        } = a, d = r !== en.main && r !== en.privateUnlocked, u = !!l.settings.instant_sidedock, _ = c && "purchase_options" in c && !!c.purchase_options.length, p = c && Gn(c.countries, s.country);
        return (null == (t = i()) || null == (t = t.overlay) ? void 0 : t.purpose) !== oi.INTERACTIVE && null === Ks(n) && !!ai(l) && !e.segmentedPlaybackEnabled && (o.touch || d || u || _ && p)
    },
    Xs = e => {
        var t, n;
        const {
            config: i,
            get: o
        } = e, {
            view: r,
            embed: a,
            request: l
        } = i;
        return !(null !== Ks(e.config) || (null == (t = o()) || null == (t = t.overlay) ? void 0 : t.purpose) === oi.INTERACTIVE || r && !Wn(r) || a.autoplay && null != (n = l.flags) && n.autohide_controls || !ai(a))
    },
    Zs = (e, t, n) => !(e && e === t) && !1 !== (null == n ? void 0 : n.final);

function Qs({
    get: e,
    set: t
}) {
    return {
        purpose: oi.EMPTY,
        spatialRedirectContext: null,
        overlayElementsUpdatedCount: 0,
        incrementOverlayElementsUpdatedCount: () => {
            t((t => ({
                overlay: h(h({}, t.overlay), {}, {
                    overlayElementsUpdatedCount: e().overlay.overlayElementsUpdatedCount + 1
                })
            })))
        }
    }
}

function Js(e) {
    return Object.values(oi).includes(e)
}
let ec = function(e) {
    return e.EMPTY = "empty", e.SPATIAL_UNSUPPORTED = "spatial-unsupported", e.SPATIAL_FAILURE = "spatial-failure", e
}({});
const tc = ({
    element: e,
    config: t
}) => {
    if (e.classList.contains("player-mini") || e.classList.contains("player-tiny")) return !1;
    const {
        embed: n
    } = t;
    return !(!n.settings.badge || n.autoplay && 16 !== n.settings.badge.id)
};
let nc = function(e) {
        return e.IDLE = "idle", e.LOADED = "loaded", e.ERROR = "error", e.LOADING = "loading", e
    }({}),
    ic = function(e) {
        return e.MAIN = "main", e.LANGUAGE = "language", e
    }({}),
    oc = function(e) {
        return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
    }({}),
    rc = function(e) {
        return e.PREV = "prev", e.NEXT = "down", e.FIRST = "first", e.LAST = "last", e
    }({});
const ac = "en",
    lc = e => e.replace(/<\/?[\w\s]*>|<.+[\W]>/g, ""),
    sc = {
        language: ac,
        id: "",
        label: "Transcript",
        rtl: !1
    },
    cc = (e, t) => {
        const {
            lang: n,
            cookie: i
        } = e.request, {
            captions: o,
            transcript: r
        } = i, [a] = (r || "").split("."), [l] = (o || "").split("."), s = r && t.find((e => e.language.includes(a))) || l && t.find((e => e.language.includes(l))) || n && t.find((e => n.includes(e.language))) || t.find((e => e.language.includes(ac))) || t[0] || sc;
        return s
    },
    dc = (e, t) => e.findIndex((e => e.startTime <= t && e.endTime > t)),
    uc = (e, t) => !!e.find((e => e.index === t)),
    _c = e => e ? e.endTime - e.startTime : 0;

function pc(e, t, n, i) {
    const r = ((e, t, n, i) => {
            let o;
            return o = t ? e.reduce(((e, n) => (n.startTime >= t.startTime && n.endTime <= t.endTime && e.push(h(h({}, n), {}, {
                startTimeDisplay: di(zn(n.startTime, t))
            })), e)), []) : (e => e.map((e => h(h({}, e), {}, {
                startTimeDisplay: di(e.startTime)
            }))))(n || i ? e.filter((e => {
                const t = !n || e.startTime >= n,
                    o = !i || e.startTime <= i;
                return t && o
            })) : e), o
        })((e => e.map(((e, t) => ({
            startTime: e.startTime,
            endTime: e.endTime,
            startTimeDisplay: "",
            text: lc(e.text),
            originalIndex: t
        }))))(e), !o.isGoogleBot && t, n, i),
        a = (e => e.map(((e, t, n) => {
            const i = n[t + 1];
            return i && i.startTime < e.endTime ? h(h({}, e), {}, {
                endTime: i.startTime
            }) : e
        })))(((e, t = 20, n = 20, i = 10) => {
            if (0 === e.length) return [];
            let o, r, a, l, s;
            return c(e[0]), e.reduce((function(a, l, s, u) {
                var _;
                const {
                    text: p,
                    endTime: m
                } = l, v = function(e, t) {
                    return e + 1 === t.length
                }(s, u);
                if (r += `${p} `, v) return d(m, a);
                const f = p.split(" "),
                    h = function(e) {
                        return function(e) {
                            return [".", "?", "!"].some((t => e.trim().endsWith(t)))
                        }(e[e.length - 1])
                    }(f);
                o += f.length;
                const g = o >= n,
                    E = o >= t && h,
                    b = function(e, t, n) {
                        return t - e > n
                    }(l.endTime, null == (_ = u[s + 1]) ? void 0 : _.startTime, i);
                return (g || E || b) && (a = d(m, a), c(e[s + 1])), a
            }), []).map(((e, t) => h(h({}, e), {}, {
                originalIndex: t
            })));

            function c(e) {
                e && (o = 0, r = "", a = e.startTime, l = e.originalIndex, s = e.startTimeDisplay)
            }

            function d(e, t) {
                return t.concat({
                    originalIndex: l,
                    text: r.trim(),
                    startTime: a,
                    startTimeDisplay: s,
                    endTime: e
                })
            }
        })(r));
    return a
}

function mc(e) {
    var t;
    return (null == (t = e[0]) ? void 0 : t.startTime) || 0
}

function vc(e) {
    var t;
    return (null == (t = e[e.length - 1]) ? void 0 : t.endTime) || 0
}
const fc = (e, t) => {
        let n = {
            index: 0,
            diff: 1 / 0
        };
        for (let i = 0; i < t.length; i++) {
            if (t[i].startTime <= e && t[i].endTime >= e) return i;
            const o = Math.abs(t[i].startTime - e),
                r = Math.abs(t[i].endTime - e),
                a = Math.min(o, r);
            a < n.diff && (n = {
                index: i,
                diff: a
            })
        }
        return n.index
    },
    hc = e => o.isGoogleBot || (null == e ? void 0 : e.config.embed.tq),
    gc = [oi.EMPTY, oi.HELP, oi.SHARE, oi.INTERACTIVE],
    Ec = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!n.settings.playbar) return !1;
        if (!ai(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return mr(pr.PROGRESS_BAR, o, i)
    },
    bc = e => {
        const t = hc(e);
        return o.isGoogleBot && t
    };
let Cc = function(e) {
    return e.IMAGE = "image", e.STATIC_IMAGE = "static-image", e.VOD = "vod", e.LINK = "link", e.NOTHING = "nothing", e.BLANK = "blank", e.SHARE = "share", e.TEXT = "text", e.BEGINNING = "beginning", e.VIDEOS = "videos", e.THREEVIDEOS = "threevideos", e.PROMOTED = "promoted", e.APP_REDIRECT = "app-redirect", e
}({});

function yc(e) {
    e((e => ({
        displayList: h(h({}, e.displayList), {}, {
            aiWidget: !1
        })
    })))
}
const Tc = ({
        config: e,
        store: t
    }) => {
        const {
            embed: n
        } = e;
        if (!ai(n)) return !1;
        const i = t.get("ui.player.breakpoint"),
            o = t.get("ui.player.mode");
        return mr(pr.FULL_CONTROLS, o, i)
    },
    Lc = e => {
        const {
            set: t,
            get: n
        } = e, i = function(e) {
            const t = zs(e),
                n = js(e),
                i = (e => Qs(e).purpose !== oi.EMPTY)(e),
                o = (({
                    store: e,
                    config: t,
                    events: n,
                    set: i
                }) => {
                    var o;
                    return n.on(zt._configChanged, ((e, t) => {
                        i((e => {
                            var n;
                            return {
                                displayList: h(h({}, e.displayList), {}, {
                                    cards: !(null == (n = t.embed) || null == (n = n.cards) || !n.length || e.appearance.isMenuBlockingUI)
                                })
                            }
                        }))
                    })), !(null == (o = t.embed) || null == (o = o.cards) || !o.length || e.get("ui.controlbar.isMenuFullWidth"))
                })(e),
                r = tc(e),
                a = Xs(e),
                l = Ec(e),
                s = bc(e),
                d = hc(e),
                u = function(e) {
                    const {
                        purpose: t
                    } = Ys(e);
                    return t !== Gs.EMPTY
                }(e),
                _ = (e => {
                    const {
                        config: t
                    } = e;
                    return null !== Ks(t)
                })(e),
                p = Tc(e),
                m = i || _;
            return (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                performDelegateAction: o
            }) => {
                const r = e => {
                    t().displayList.outro !== e && (e && (t().displayList.accessGate || t().displayList.ad || t().embed.background || t().embed.loop) || (e ? o(sl, (() => {
                        l(e)
                    })) : l(e)))
                };

                function a(e) {
                    e ? r(!1) : t().playback.ended && r(!0)
                }

                function l(t) {
                    e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            outro: t
                        })
                    }))), n.fire(t ? zt._outroDisplayed : zt._outroHidden)
                }
                n.on([E.PLAY, E.SEEKED, zt._scrubbingStarted, jt._hideOutro, jt._reset], (() => r(!1))), n.on(jt._showOutro, (() => r(!0))), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.ended
                }), (e => r(e))), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), a), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), a)
            })(e), (({
                store: e,
                config: t,
                set: n
            }) => {
                e.watch("ui.controlbar.isMenuFullWidth", (e => {
                    n((n => {
                        var i;
                        return {
                            displayList: h(h({}, n.displayList), {}, {
                                cards: !(null == (i = t.embed) || null == (i = i.cards) || !i.length || e)
                            })
                        }
                    }))
                }))
            })(e), (({
                set: e,
                events: t,
                store: n
            }) => {
                n.watch("ui.player.mode", (t => {
                    t === Ti.TINY && e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            debugPanel: !1
                        })
                    })))
                })), t.on(zt._debugButtonPressed, (() => {
                    e((e => n.get("ui.player.mode") === Ti.TINY ? Ms : {
                        displayList: h(h({}, e.displayList), {}, {
                            debugPanel: !e.displayList.debugPanel
                        })
                    }))
                }))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function r(e = {}) {
                    n().displayList.sideDock && t((t => {
                        const {
                            playback: n,
                            displayList: i,
                            appearance: r,
                            embed: a,
                            cards: l
                        } = t, {
                            fullPlayerElement: s,
                            alert: c,
                            menu: u,
                            toast: _
                        } = i, {
                            playInitiated: p,
                            targetTimeReached: m
                        } = n, {
                            forceExitedFullscreen: v
                        } = r, f = Fn(r, e, "mousedOverSidedock"), g = s || c || u && r.isMenuBlockingUI || !!l.displayedCard || _ && d();
                        return v ? Ms : p && m || g || a.autoHideControls ? f ? Ms : !r.externalDisplay && !r.pictureInPictureActive || g ? (o.fire(zt._sidedockVisibilityChanged, !1), {
                            appearance: h(h({}, t.appearance), {}, {
                                mousedOverSidedock: f
                            }),
                            displayList: h(h({}, t.displayList), {}, {
                                sideDock: !1
                            })
                        }) : Ms : Ms
                    }))
                }

                function a(e = {}) {
                    n().displayList.sideDock || t((t => {
                        const {
                            displayList: n,
                            appearance: i,
                            embed: r,
                            cards: a,
                            playback: l
                        } = t, {
                            menu: s,
                            fullPlayerElement: c,
                            alert: u,
                            toast: _
                        } = n, p = c || u || s && i.isMenuBlockingUI || !!a.displayedCard || _ && d();
                        return ai(r) ? p || l.isSegmentedPlaybackEnabled ? Ms : (o.fire(zt._sidedockVisibilityChanged, !0), {
                            appearance: h(h({}, t.appearance), {}, {
                                mousedOverSidedock: Fn(t.appearance, e, "mousedOverSidedock")
                            }),
                            displayList: h(h({}, t.displayList), {}, {
                                sideDock: !0
                            })
                        }) : Ms
                    }))
                }

                function l() {
                    return r({
                        mousedOverSidedock: !1
                    })
                }

                function s(e, t) {
                    e && t && l()
                }

                function c(e, t) {
                    !e && t && a()
                }

                function d() {
                    return [or.XXS, or.XS].includes(n().appearance.playerBreakpoint)
                }
                o.on([zt._mousedOut, zt._mouseTimeout, zt._nudgeAttempted], r), o.on([zt._mousedOver, zt._airPlayActivated, E.ENTER_PICTURE_IN_PICTURE], a), o.on(zt._configChanged, (function(n, i) {
                    const o = zs(h(h({}, e), {}, {
                        config: i
                    }));
                    t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            sideDock: o
                        })
                    })))
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }), (e => e && r())), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => !e && l())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.alert
                }), (e => e && r())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => e ? s(e, n().appearance.isMenuBlockingUI) : c(e, n().appearance.isMenuBlockingUI))), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }), (e => e ? s(n().displayList.menu, e) : c(n().displayList.menu, e))), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => e ? l() : a())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            sideDock: !1
                        })
                    }))) : n().displayList.sideDock || a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.cards) ? void 0 : t.displayedCard
                }), (e => e && l())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => e && d() && l())), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                }), (e => {
                    e ? l() : a()
                }))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o,
                    config: r
                } = e;

                function a() {
                    t((e => {
                        const {
                            appearance: t,
                            playback: n,
                            embed: i
                        } = e, {
                            externalDisplay: o
                        } = t, {
                            scrubbing: a,
                            paused: l
                        } = n, s = d(e), {
                            embed: c
                        } = r;
                        return ai(i) ? t.playerSizeMode === Ti.TINY || qs(c.settings) || s ? Ms : o ? {
                            displayList: h(h({}, e.displayList), {}, {
                                title: !0
                            })
                        } : !l || a ? Ms : {
                            displayList: h(h({}, e.displayList), {}, {
                                title: !0
                            })
                        } : Ms
                    }))
                }

                function l() {
                    t((e => {
                        const {
                            appearance: t,
                            playback: n
                        } = e, {
                            externalDisplay: i
                        } = t, {
                            playInitiated: o
                        } = n, r = d(e);
                        return t.playerSizeMode === Ti.TINY || r ? {
                            displayList: h(h({}, e.displayList), {}, {
                                title: !1
                            })
                        } : i || !o ? Ms : {
                            displayList: h(h({}, e.displayList), {}, {
                                title: !1
                            })
                        }
                    }))
                }

                function s(e, t) {
                    e && t && l()
                }

                function c(e, t) {
                    !e && t && a()
                }

                function d(e) {
                    const {
                        fullPlayerElement: t,
                        outro: n,
                        menu: i,
                        toast: o,
                        topCenterActionItem: r
                    } = e.displayList, {
                        isMenuBlockingUI: a
                    } = e.appearance;
                    return t || n || i && a || o || r
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }), (e => e && l())), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    e ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => {
                    e ? l() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }), (e => {
                    e ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }), (e => {
                    e ? l() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? l() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => e ? s(e, n().appearance.isMenuBlockingUI) : c(e, n().appearance.isMenuBlockingUI))), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.isMenuBlockingUI
                }), (e => e ? s(n().displayList.menu, e) : c(n().displayList.menu, e))), i((e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }), (e => {
                    [oi.NOT_SUPPORTED, oi.HELP, oi.EMPTY].includes(e) || l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }), (e => {
                    e === Ti.TINY ? l() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => e ? l() : a())), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.topCenterActionItem
                }), (e => e ? l() : a())), o.on(zt._ended, l).on(jt._reset, a).on(zt._configChanged, ((n, i) => {
                    t((t => ({
                        displayList: h(h({}, t.displayList), {}, {
                            title: js(h(h({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t((e => {
                    var t;
                    return null == e || null == (t = e.overlay) ? void 0 : t.purpose
                }), (t => (t => {
                    e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            overlay: t
                        })
                    })))
                })(!ri(t))))
            })(e), (({
                get: e,
                set: t,
                subscribe: n
            }) => {
                n((e => {
                    var t;
                    return null == e || null == (t = e.alert) ? void 0 : t.currentAlert
                }), (n => {
                    const i = e().displayList.alert;
                    if (!i && n === ec.EMPTY) return;
                    if (i && n !== ec.EMPTY) return;
                    const o = n !== ec.EMPTY;
                    t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            alert: o
                        })
                    })))
                }))
            })(e), (({
                events: e,
                subscribe: t,
                set: n,
                get: i
            }) => {
                function o() {
                    n((e => {
                        const {
                            menu: t
                        } = e.displayList;
                        return t ? {
                            displayList: h(h({}, e.displayList), {}, {
                                menu: !1
                            })
                        } : Ms
                    }))
                }
                e.on(jt._reset, o), t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (t => {
                    const n = t ? un : "";
                    e.fire(zt._menuVisibilityChanged, n)
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => {
                    var t, n, r, a;
                    return e && ((null == (t = i()) ? void 0 : t.appearance.appBreakpoint) === or.XS || (null == (n = i()) ? void 0 : n.appearance.appBreakpoint) === or.XXS || (null == (r = i()) ? void 0 : r.appearance.appSizeMode) === Ti.MINI || (null == (a = i()) ? void 0 : a.appearance.appSizeMode) === Ti.TINY) && o()
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint
                }), (e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === or.XS || e === or.XXS) && o()
                })), t((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.appSizeMode
                }), (e => {
                    var t;
                    return (null == (t = i()) ? void 0 : t.displayList.transcript) && (e === Ti.MINI || e === Ti.TINY) && o()
                }))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => e((e => ({
                    displayList: h(h({}, e.displayList), {}, {
                        ad: t
                    })
                })));
                t.on(zt._pausedForAd, (() => n(!0))), t.on([zt._resumedAfterAd, jt._reset], (() => n(!1)))
            })(e), (({
                set: e,
                get: t,
                config: n,
                events: i,
                subscribe: o,
                store: r,
                element: a
            }) => {
                let l = n;
                const s = (t = {}) => {
                        var n;
                        (16 !== (null == (n = l.embed) || null == (n = n.settings) || null == (n = n.badge) ? void 0 : n.id) || t.isStockBadgeBehavior) && e((e => ({
                            displayList: h(h({}, e.displayList), {}, {
                                badge: !1
                            })
                        })))
                    },
                    c = (t = {}) => {
                        var n;
                        (16 !== (null == (n = l.embed) || null == (n = n.settings) || null == (n = n.badge) ? void 0 : n.id) || t.isStockBadgeBehavior) && e((e => {
                            const {
                                appearance: t
                            } = e;
                            return [Ti.MINI, Ti.TINY].includes(t.playerSizeMode) ? Ms : l.embed.settings.badge ? {
                                displayList: h(h({}, e.displayList), {}, {
                                    badge: !0
                                }),
                                appearance: h(h({}, e.appearance), {}, {
                                    shouldRestoreBadge: !1
                                })
                            } : Ms
                        }))
                    };

                function d(t) {
                    e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            badge: tc({
                                config: t,
                                element: a
                            })
                        })
                    })))
                }
                i.on(zt._controlBarVisibilityChanged, (e => {
                    var t;
                    16 === (null == (t = l.embed) || null == (t = t.settings) || null == (t = t.badge) ? void 0 : t.id) && (e ? c({
                        isStockBadgeBehavior: !0
                    }) : s({
                        isStockBadgeBehavior: !0
                    }))
                })), i.on(zt._ended, s), i.on(zt._configChanged, ((e, t) => {
                    l = t, d(t)
                })), i.on(jt._reset, (() => {
                    d(l)
                })), r.watch("ui.player.mode", (n => {
                    n !== Ti.TINY && n !== Ti.MINI || !t().displayList.badge ? t().appearance.shouldRestoreBadge && c() : e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            badge: !1
                        }),
                        appearance: h(h({}, e.appearance), {}, {
                            shouldRestoreBadge: !0
                        })
                    })))
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    e ? c() : s()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                }), (e => e && s())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    (function(e) {
                        return [oi.NOT_SUPPORTED, oi.HELP, null].includes(e)
                    })(e) || s(), e || t().playback.playInitiated || c()
                }))
            })(e), (({
                set: e,
                subscribe: t
            }) => {
                t((e => {
                    var t;
                    return null == e || null == (t = e.notification) ? void 0 : t.currentNotification
                }), (t => {
                    (t => {
                        e((e => ({
                            displayList: h(h({}, e.displayList), {}, {
                                notification: t
                            })
                        })))
                    })(!!t)
                }))
            })(e), (({
                set: e,
                events: t
            }) => {
                const n = t => {
                    e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            pipOverlay: t
                        })
                    })))
                };
                t.on(E.ENTER_PICTURE_IN_PICTURE, (() => n(!0))), t.on(E.LEAVE_PICTURE_IN_PICTURE, (() => n(!1)))
            })(e), (e => {
                const {
                    set: t,
                    events: n,
                    config: i,
                    subscribe: o
                } = e;

                function r(e = {}) {
                    t((t => {
                        const {
                            controlBar: i,
                            embed: o,
                            playback: r,
                            displayList: a,
                            appearance: l
                        } = t, s = Fn(l, e, "mousedOverControlBar"), c = {
                            appearance: h(h({}, t.appearance), {}, {
                                mousedOverControlBar: s
                            })
                        };
                        return i.overrideBehavior || l.forceExitedFullscreen ? c : r.playInitiated && r.targetTimeReached || a.fullPlayerElement || o.autoHideControls || a.ad ? s ? c : !l.externalDisplay && !l.pictureInPictureActive || a.fullPlayerElement ? r.buffering || r.scrubbing ? c : (n.fire(zt._controlBarVisibilityChanged, !1), h(h({}, c), {}, {
                            displayList: h(h({}, t.displayList), {}, {
                                controlBar: !1
                            })
                        })) : c : c
                    }))
                }

                function a() {
                    t((e => {
                        const {
                            displayList: t,
                            controlBar: i,
                            embed: o
                        } = e;
                        return ai(o) ? i.overrideBehavior || t.fullPlayerElement ? Ms : (n.fire(zt._controlBarVisibilityChanged, !0), {
                            displayList: h(h({}, e.displayList), {}, {
                                controlBar: !0
                            })
                        }) : Ms
                    }))
                }

                function l() {
                    return r({
                        mousedOverControlBar: !1
                    })
                }

                function s(n) {
                    const i = Xs(h(h({}, e), {}, {
                        config: n
                    }));
                    t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            controlBar: i
                        })
                    })))
                }
                n.on([zt._mousedOver, zt._scrubbingStarted, jt._changeVolume, jt._reset], a), n.on(zt._mousedOut, l), n.on(zt._mouseTimeout, r), n.on(zt._configChanged, (function(e, t) {
                    s(t)
                })), n.on([j.STREAM_ONLINE, j.STREAM_OFFLINE, j.EVENT_ENDED], (function() {
                    s(i)
                })), n.on(jt._setControlsVisibility, (function(e) {
                    t((t => t.controlBar.overrideBehavior ? {
                        displayList: h(h({}, t.displayList), {}, {
                            controlBar: e
                        })
                    } : Ms))
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.externalDisplay
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.targetTimeReached
                }), (e => e && r())), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.fullscreen
                }), (e => {
                    e ? l() : a()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? r() : a()
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.menu
                }), (e => {
                    e && a()
                }))
            })(e), (e => {
                const {
                    get: t,
                    set: n,
                    events: i,
                    subscribe: o,
                    config: r
                } = e;

                function a() {
                    n((e => {
                        const {
                            transcript: t
                        } = e.displayList;
                        return t ? l(e, !1) : Ms
                    }))
                }

                function l(e, t) {
                    return {
                        displayList: h(h({}, e.displayList), {}, {
                            transcript: t
                        })
                    }
                }
                i.on(zt._configChanged, (() => {
                    n((t => l(t, hc(e))))
                })), i.on(zt._transcriptKeyPressed, (function() {
                    var e, i, o, a, l;
                    const s = null == (e = t()) || null == (e = e.overlay) ? void 0 : e.purpose,
                        c = null == (i = t().displayList) ? void 0 : i.transcript,
                        d = null == (o = t()) || null == (o = o.displayList) ? void 0 : o.outro,
                        u = null == (a = t()) || null == (a = a.displayList) ? void 0 : a.accessGate,
                        _ = null == (l = t()) || null == (l = l.captions) ? void 0 : l.textTracks,
                        p = !!c || !d && gc.includes(s) && !!_.length && !u;
                    t().embed.transcript && p && (n((e => h(h({}, e), {}, {
                        displayList: h(h({}, e.displayList), {}, {
                            transcript: !e.displayList.transcript
                        })
                    }))), wr(gr.EMBEDDED_TRANSCRIPT_CLICK, r, {
                        name: c ? "exit_embed_transcript" : "open_embed_transcript",
                        copy: null,
                        location: "keyboard_shortcut",
                        element: "",
                        current_transcript_language: ""
                    }))
                })), i.on(zt._rightContentAreaDisabled, a), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.outro
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.stereoscopicEnabled
                }), (e => e && a())), o((e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.overlay) && !gc.includes(null == e || null == (n = e.overlay) ? void 0 : n.purpose)
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), (e => e && a())), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => {
                    var n;
                    (({
                        events: e
                    }, t) => {
                        e.fire(jt._updateLiveSubtitleRequests, t)
                    })({
                        events: i
                    }, e);
                    const o = null == (n = t()) || null == (n = n.captions) ? void 0 : n.textTrackEls;
                    e && (({
                        config: e,
                        events: t
                    }, n) => {
                        var i;
                        const o = n.map((e => ({
                                id: e.id,
                                label: e.label,
                                language: e.srclang
                            }))),
                            r = (null == (i = cc(e, o)) ? void 0 : i.language) || "";
                        t.fire(zt._transcriptSessionStarted, {
                            id: c(),
                            startTime: Date.now(),
                            defaultLanguage: r
                        })
                    })({
                        config: r,
                        events: i
                    }, o)
                })), o((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.aiWidget
                }), (e => e && a()))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function r() {
                    t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            progressBar: !1
                        })
                    })))
                }

                function a() {
                    t((e => {
                        const {
                            appearance: t,
                            displayList: n,
                            embed: i,
                            controlBar: o
                        } = e, {
                            playerSizeMode: r,
                            playerBreakpoint: a
                        } = t;
                        return i.playbar ? n.ad ? Ms : mr(pr.PROGRESS_BAR, r, a) ? !o.showAllControls && n.controlBarButtons ? Ms : {
                            displayList: h(h({}, e.displayList), {}, {
                                progressBar: !0
                            })
                        } : Ms : Ms
                    }))
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                }), (e => {
                    e === Ti.TINY ? r() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.controlBarButtons
                }), (e => {
                    e && !n().controlBar.showAllControls ? r() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }), (e => {
                    !e && n().displayList.controlBarButtons ? r() : a()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? r() : a()
                })), o.on(zt._configChanged, ((n, i) => {
                    t((t => ({
                        displayList: h(h({}, t.displayList), {}, {
                            progressBar: Ec(h(h({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;

                function r(e) {
                    o.fire(zt._rightContentAreaVisibilityChange, e), n((t => ({
                        displayList: h(h({}, t.displayList), {}, {
                            rightContentArea: e
                        }),
                        appearance: h(h({}, t.appearance), {}, {
                            rightContentAreaAnimating: !0
                        })
                    }))), clearTimeout(a), a = setTimeout((function() {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                rightContentAreaAnimating: !1
                            })
                        })))
                    }), 400)
                }
                let a;
                t((e => {
                    var t, n;
                    return (null == e || null == (t = e.displayList) ? void 0 : t.transcript) || (null == e || null == (n = e.displayList) ? void 0 : n.aiWidget)
                }), (e => {
                    var t;
                    const n = null == (t = i()) || null == (t = t.displayList) ? void 0 : t.rightContentArea;
                    e && !n ? r(!0) : !e && n && r(!1)
                })), bc(e) && o.fire(zt._rightContentAreaVisibilityChange, !0)
            })(e), (({
                set: e,
                get: t,
                events: n,
                subscribe: i,
                config: o,
                backbone: r
            }) => {
                function a() {
                    e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            captions: !1
                        })
                    })))
                }

                function l() {
                    e((e => {
                        const {
                            appearance: t,
                            embed: n
                        } = e;
                        return n.cc ? t.pictureInPictureActive || n.background ? Ms : {
                            displayList: h(h({}, e.displayList), {}, {
                                captions: !0
                            })
                        } : (r.disableTextTrack(), Ms)
                    }))
                }
                n.on(A, l), n.on(E.ENTER_PICTURE_IN_PICTURE, a), n.on(E.LEAVE_PICTURE_IN_PICTURE, l), n.on(zt._ended, (() => {
                    o.embed.outro !== Cc.NOTHING && a()
                })), n.on(jt._reset, a), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                }), (e => {
                    e ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.paused
                }), (e => {
                    !e && l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.playback) ? void 0 : t.scrubbing
                }), (e => {
                    e && l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.ad
                }), (e => {
                    e ? a() : l()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.captions) ? void 0 : t.activeCues
                }), (e => {
                    var n;
                    e.length && null != (n = t()) && null != (n = n.playback) && n.playInitiated ? l() : a()
                }))
            })(e), (e => {
                const {
                    subscribe: t,
                    events: n
                } = e;
                t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.toast
                }), (e => n.fire(zt._toastVisibilityChanged, e)))
            })(e), (e => {
                const {
                    subscribe: t,
                    set: n,
                    get: i,
                    events: o
                } = e;
                t((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.transcript
                }), (e => e && yc(n))), o.on(jt._closeRemoteComponent, (e => {
                    e === In.AI_WIDGET_ID && yc(n)
                })), o.on(zt._aiWidgetKeyPressed, (() => {
                    const {
                        toggleDisplayList: e,
                        embed: t
                    } = i();
                    t.aiWidget && e("aiWidget")
                }))
            })(e), (e => {
                const {
                    set: t,
                    events: n
                } = e, i = e => {
                    t((t => ({
                        displayList: h(h({}, t.displayList), {}, {
                            accessGate: e
                        })
                    })))
                };
                n.on(zt._accessGateOpened, (() => {
                    i(!0)
                })), n.on(zt._accessGateClosed, (() => {
                    i(!1)
                }))
            })(e), (({
                set: e,
                get: t,
                subscribe: n
            }) => {
                function i() {
                    e((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            fullPlayerElement: t().displayList.accessGate || t().displayList.overlay
                        })
                    })))
                }
                n((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                }), (() => i())), n((e => {
                    var t;
                    return null == e || null == (t = e.displayList) ? void 0 : t.accessGate
                }), (() => i()))
            })(e), (e => {
                const {
                    set: t,
                    get: n,
                    subscribe: i,
                    events: o
                } = e;

                function r() {
                    t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            controlBarButtons: !1
                        })
                    })))
                }

                function a() {
                    ai(n().embed) && (n().controlBar.progressBarExpanded || t((e => ({
                        displayList: h(h({}, e.displayList), {}, {
                            controlBarButtons: !0
                        })
                    }))))
                }
                i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.showAllControls
                }), (e => {
                    e || n().controlBar.shouldRestoreButtonsDisplayed ? a() : r()
                })), i((e => {
                    var t;
                    return null == e || null == (t = e.controlBar) ? void 0 : t.progressBarExpanded
                }), (e => {
                    !e && n().controlBar.showAllControls ? a() : r()
                })), o.on(zt._configChanged, ((n, i) => {
                    t((t => ({
                        displayList: h(h({}, t.displayList), {}, {
                            controlBarButtons: Tc(h(h({}, e), {}, {
                                config: i
                            }))
                        })
                    })))
                }))
            })(e), {
                debugPanel: false,
                cards: o,
                sideDock: t,
                title: n,
                controlBar: a,
                outro: false,
                overlay: i,
                alert: false,
                menu: false,
                ad: false,
                badge: r,
                notification: false,
                nudgeNotification: false,
                pipOverlay: false,
                transcript: d,
                progressBar: l,
                rightContentArea: s,
                captions: false,
                toast: false,
                topCenterActionItem: u,
                aiWidget: false,
                accessGate: _,
                fullPlayerElement: m,
                controlBarButtons: p
            }
        }(e), o = (e, n) => {
            t((t => ({
                displayList: h(h({}, t.displayList), {}, {
                    [e]: n
                })
            })))
        };
        return {
            displayList: i,
            setDisplayList: o,
            toggleDisplayList: e => {
                const t = n().displayList[e];
                o(e, !t)
            }
        }
    };

function Ac(e) {
    const {
        config: t,
        store: i
    } = e, {
        video: o
    } = t, r = i.get("ui.player.width"), a = i.get("ui.player.height"), l = o.width, s = o.height, {
        videoHeight: c
    } = Ic(r, a, l, s), d = zr(e);
    return {
        playerBreakpoint: i.get("ui.player.breakpoint"),
        appBreakpoint: i.get("ui.app.breakpoint"),
        playerSizeMode: i.get("ui.player.mode"),
        appSizeMode: i.get("ui.app.mode"),
        transcriptNavActive: !1,
        fullscreen: !1,
        forceExitedFullscreen: !1,
        pictureInPictureActive: !1,
        externalDisplay: !1,
        mousedOverSidedock: !1,
        mousedOverControlBar: !1,
        isMenuBlockingUI: i.get("ui.controlbar.isMenuFullWidth"),
        isMenuVerticalVideoMode: i.get("ui.controlbar.isMenuVerticalVideoMode"),
        shouldRestoreBadge: !1,
        isVerticalVideo: i.get("ui.player.isVerticalVideo"),
        boundingClientRect: Et(e.element),
        isDisplayContextBackbone: e.displayContext === e.backbone,
        showAirPlayPicker: !1,
        shouldMenuItemsWrap: i.get("ui.controlbar.doMenuItemsWrap"),
        stereoscopicEnabled: !1,
        videoHeight: c,
        containerHeight: i.get("ui.container.height"),
        placeholderThumbnail: n(null == o ? void 0 : o.thumbnail_url, {
            mw: "80",
            q: "85"
        }),
        rightContentAreaAnimating: !1,
        isStartTimeThumbLoading: d
    }
}

function Ic(e, t, n, i) {
    const o = n / i,
        r = o > e / t;
    return {
        videoWidth: r ? e : Math.round(t * o),
        videoHeight: r ? Math.round(e / o) : t
    }
}
const Sc = (e, t) => {
        Oe((() => {
            const n = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                return function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t.playbackEngineReady(), (function() {
                    e()
                }))
            }));
            n()
        }))
    },
    Oc = e => ({
        onClick: t => {
            t.preventDefault(), t.stopPropagation(), e(t)
        },
        onKeyDown: t => {
            ["Enter", " "].includes(t.key) && (t.preventDefault(), t.stopPropagation(), e(t))
        }
    }),
    Pc = () => {
        const e = Hu((e => e.playback.paused)),
            t = Hu((e => e.playback.scrubbing)),
            n = Hu((e => e.playback.scrubbingByFrame)),
            i = Hu((e => e.playback.playInitiated)),
            o = Hu((e => e.chromecast.isChromecastPlaying)),
            r = Hu((e => e.chromecast.isChromecastConnected)),
            a = Hu((e => e.playback.buffering)),
            l = Hu((e => e.playback.isAdPlaying)),
            s = Hu((e => e.embed.isTrailer)),
            c = Hu((e => e.embed.autoPlay)),
            d = Hu((e => e.displayList.outro)),
            u = Hu((e => e.displayList.ad)),
            _ = s && !i;
        let p = Pi.PLAY;
        _ ? p = Pi.TRAILER : c && (p = Pi.PAUSE);
        const [m, v] = Pe(p);
        return r && v(o ? Pi.PAUSE : Pi.PLAY), u && v(l ? Pi.PAUSE : Pi.PLAY), Oe((() => {
            d ? v(Pi.REPLAY) : t && !d && v(e ? Pi.PLAY : Pi.PAUSE)
        }), [d]), Oe((() => {
            t && !n || a || _ || r || d || u || v(e ? Pi.PLAY : Pi.PAUSE)
        }), [e, a, _, r, d, u]), Oe((() => {
            i && v(Pi.PAUSE)
        }), [i]), {
            buttonState: m,
            setButtonState: v
        }
    };
let Rc = function(e) {
        return e.PREFS = "prefs", e.CHAPTERS = "chapters", e.CC = "cc", e.TRANSCRIPT = "transcript", e.SIDEDOCK = "sidedock", e
    }({}),
    Nc = function(e) {
        return e.EMPTY = "empty", e.PREFS = "prefs", e.QUALITY = "quality", e.SPEED = "speed", e.AUDIO = "audio", e.CHAPTERS = "chapters", e.LANGUAGES = "languages", e.CUSTOMIZE = "customize", e.FONT = "font", e.BACKGROUND = "background", e.WINDOW = "window", e.PREVIEW = "preview", e.TRANSCRIPT_SETTINGS = "transcriptSettings", e.TRANSCRIPT_LANGUAGES = "transcriptLanguages", e.SIDEDOCK = "sidedock", e
    }({}),
    wc = function(e) {
        return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
    }({});
const Dc = () => {
    const e = Hu((e => e.captions.textTracks)),
        t = Hu((e => e.playback.supportsTextTracks)),
        n = Hu((e => e.appearance.isDisplayContextBackbone)),
        i = Hu((e => e.displayList.ad)),
        o = Hu((e => e.embed.speedChangeEnabled)),
        r = Hu((e => e.playback.qualities)),
        a = Hu((e => e.embed.quality)),
        l = Hu((e => e.chromecast.isChromecastConnected)),
        s = Hu((e => e.chapters.chapters)),
        c = Hu((e => e.embed.transcript)),
        d = Hu((e => e.embed.cc)),
        u = Hu((e => e.embed.chapters)),
        _ = Hu((e => e.playback.isSegmentedPlaybackEnabled)),
        p = Hu((e => e.playback.audioTracks)),
        m = !(!a || null == r || !r.length),
        v = p.length > 1,
        f = t && !!e.length && n && !i && d,
        h = n && !!(o || m || v) && !l && !i,
        g = !(null == s || !s.length) && u && !i && !_,
        E = t && !!e.length && n && !i && c;
    return {
        [Rc.CC]: f,
        [Rc.PREFS]: h,
        [Rc.CHAPTERS]: g,
        [Rc.TRANSCRIPT]: E
    }
};
let kc = function(e) {
    return e.IDLE = "idle", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error", e
}({});

function Mc() {}
const Vc = e => {
        const [t, n] = Pe(kc.IDLE), i = Re(), o = Ne(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            if (null == i || !i.current) return function(e) {
                if (e && e.then) return e.then(Mc)
            }(function(t, o) {
                try {
                    var r = function() {
                        let t;
                        return n(kc.LOADING),
                            function(e, t) {
                                var n = e();
                                return n && n.then ? n.then(t) : t(n)
                            }((function() {
                                return function(e, t) {
                                    return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                                }(bi(e), (function(e) {
                                    t = e
                                }))
                            }), (function() {
                                i.current = t, n(kc.LOADED)
                            }))
                    }()
                } catch (De) {
                    return o()
                }
                return r && r.then ? r.then(void 0, o) : r
            }(0, (function(e) {
                n(kc.ERROR)
            })))
        })), [e]);
        return {
            readyState: t,
            load: o,
            module: (null == i ? void 0 : i.current) || null
        }
    },
    Bc = (e, t, n) => {
        Oe((() => {
            function i(n) {
                n.key !== e && n.code !== e || t(n)
            }

            function o(t) {
                t.key !== e && t.code !== e || !n || n(t)
            }
            return window.addEventListener("keydown", i), n && window.addEventListener("keyup", o), () => {
                window.removeEventListener("keydown", i), n && window.removeEventListener("keyup", o)
            }
        }), [t, n, e])
    },
    xc = "off",
    Uc = () => {
        const e = Hu((e => e.config));
        return Ne(((t, n, i = {}) => {
            wr(t, e, n, i)
        }), [e])
    };
let Hc = function(e) {
    return e[e.AUTO = 0] = "AUTO", e[e.BOTTOM = 1] = "BOTTOM", e[e.CENTER = 2] = "CENTER", e
}({});
const Fc = () => {
        const e = Hu((e => e.embed.playButtonPosition)),
            t = Hu((e => e.embed.playbar)),
            n = Hu((e => e.appearance.playerSizeMode)),
            i = Hu((e => e.appearance.isVerticalVideo)),
            {
                buttonState: o
            } = Pc(),
            r = n === Ti.TINY,
            a = n === Ti.MINI && i;
        return o === Pi.REPLAY ? Hc.BOTTOM : r || a || e === Hc.CENTER ? Hc.CENTER : e === Hc.BOTTOM || e !== Hc.AUTO || t ? Hc.BOTTOM : Hc.CENTER
    },
    Gc = () => {
        const e = Hu((e => e.playback.volume)),
            t = Hu((e => e.playback.muted)),
            n = Hu((e => e.setPlayback)),
            i = () => {
                n("muted", !1), e <= 0 && n("volume", 100)
            },
            o = () => {
                n("muted", !0)
            };
        return {
            mute: o,
            unmute: i,
            toggleMuted: () => {
                t || e <= 0 ? i() : o()
            }
        }
    },
    Wc = (e = 1e4) => {
        const [t, n] = Pe(!1), [i, o] = Pe(e), [r, a] = Pe(Date.now());
        return {
            hasError: t,
            componentTimeout: i,
            componentVersion: r,
            onError: () => {
                n(!0)
            },
            onReload: () => {
                n(!1), o(i + 1e3), a(Date.now())
            }
        }
    };
let Yc = function(e) {
    return e.VOLUME = "volume", e.CHROMECAST = "chromecast", e.AIRPLAY = "airplay", e.STEREOSCOPIC = "stereoscopic", e.PIP = "pip", e.FULLSCREEN = "fullscreen", e.VIMEO_LOGO = "vimeo_logo", e
}({});
const $c = e => {
        const t = Hu((e => e.appearance.playerSizeMode)),
            n = Hu((e => e.appearance.playerBreakpoint));
        return mr(e, t, n)
    },
    Kc = e => {
        let t = [];
        return (null != e && e.children ? Array.from(e.children) : []).forEach((e => {
            var n;
            const i = window.getComputedStyle(e);
            if (!i.display || "none" === i.display) return;
            const o = "none" !== i.pointerEvents;
            e.tabIndex > -1 && o && t.push(e), null != (n = e.children) && n.length && (t = t.concat(Kc(e)))
        })), t
    },
    qc = e => {
        document.body.classList.toggle(yn.SHOWFOCUS, e)
    };

function jc() {
    return document.activeElement
}

function zc(e) {
    return null == e ? void 0 : e.contains(jc())
}

function Xc(e, t) {
    let n = Kc(e),
        i = n.indexOf(jc()),
        o = "prev" === t ? i - 1 : i + 1,
        r = null;
    r = o >= n.length ? n[0] : o < 0 ? n[n.length - 1] : n[o], r && r.focus()
}
const Zc = ["s", "?"],
    Qc = ({
        parentRef: e,
        isActive: t,
        toggleKey: n,
        customKeyHandlers: i = {},
        onEscape: o = hi,
        onToggle: r = hi
    }) => {
        const a = Hu((e => e.config.view)),
            l = Hu((e => e.embed.controls)),
            s = Hu((e => e.embed.background)),
            c = Hu((e => e.embed.keyboard)),
            d = Hu((e => e.element)),
            u = Re(null),
            _ = Re(t),
            p = Re(null);

        function m(e) {
            0 !== e.detail && qc(!1)
        }

        function v(t = 0) {
            if (t >= 5) return;
            const n = Kc(e.current);
            n.length > 0 && (n[0].focus(), n[0] !== jc() && (clearTimeout(p.current), p.current = setTimeout((() => v(t + 1)), 100)))
        }

        function f() {
            u.current && (u.current.focus(), u.current = null)
        }

        function h() {
            var t;
            return null == e || null == (t = e.current) ? void 0 : t.contains(jc())
        }

        function g(e) {
            if (Zc.includes(e.key) || "Space" === e.code) return !0;
            if (e.ctrlKey || e.metaKey || e.altKey || "Shift" === e.key) return !0;
            if ("keydown" !== e.type) return !0;
            if (!l || s) return !0;
            const t = e.target || e.srcElement,
                n = d.contains(t),
                i = t.tagName;
            if ("INPUT" === i || "SELECT" === i || "TEXTAREA" === i || t.isContentEditable) {
                const t = !n,
                    i = n && "Escape" !== e.key && "Tab" !== e.key && e.shiftKey;
                if (t || i) return !0
            }
            return !Wn(a)
        }
        const E = Ne((a => {
            if (g(a)) return;
            "Escape" !== a.key ? qc(!0) : qc(!1);
            const l = a.key,
                s = {
                    Escape: () => {
                        null != e && e.current && (f(), null == o || o())
                    },
                    Tab: () => {
                        var n;
                        const i = a.shiftKey ? "prev" : "next",
                            o = "dialog" === (null == e || null == (n = e.current) || null == n.getAttribute ? void 0 : n.getAttribute("role"));
                        (t || h()) && o && (a.preventDefault(), Xc(e.current, i))
                    }
                };
            n && (s[n] = () => {
                null == r || r(!_.current)
            }), "function" == typeof s[l] && s[l](), "function" == typeof i[l] && i[l](a)
        }), [i, t, h, o, r, e, g, n]);
        return Oe((() => {
            t ? v() : f(), _.current = t
        }), [t]), Oe((() => (c && (document.addEventListener("click", m, !1), document.addEventListener("keydown", E, !1)), () => {
            document.removeEventListener("click", m, !1), document.removeEventListener("keydown", E, !1)
        })), [c, E]), {
            onFocus: function(t) {
                var n, i;
                (null == (n = e.current) ? void 0 : n.contains(jc())) && (null == (i = e.current) || !i.contains(t.relatedTarget)) && !u.current && (u.current = t.relatedTarget)
            },
            focusFirstItem: v
        }
    },
    Jc = e => {
        const t = Hu((e => e.appearance.appSizeMode)),
            n = Hu((e => e.appearance.appBreakpoint)),
            i = t === Ti.MINI || t === Ti.TINY || n === or.XXS || n === or.XS;
        return {
            role: i ? "dialog" : void 0,
            ariaModal: !!i || void 0,
            ariaHidden: !e || void 0
        }
    },
    ed = (e, t, n = 300) => {
        const i = N(t, n),
            o = Re(new ae(i));
        Oe((() => {
            const t = o.current,
                n = null == e ? void 0 : e.current;
            return n && t.observe(n), () => {
                n && t.unobserve(n)
            }
        }), [])
    };
let td = function(e) {
    return e.DOLBY_VISION = "dolbyVision", e.CLOSE = "close", e.PIP = "pip", e.AIRPLAY = "airPlay", e.ENTER_FULLSCREEN = "enterFullscreen", e.EXIT_FULLSCREEN = "exitFullscreen", e.GEAR = "gear", e.VIMEO = "vimeo", e.VIMEO_SMALL = "vimeoSmall", e.ENTER_PICTURE_IN_PICTURE = "enterPictureInPicture", e.EXIT_PICTURE_IN_PICTURE = "exitPictureInPicture", e.PAUSE = "pause", e.PLAY = "play", e.REPLAY = "replay", e.CHAPTERS = "chapters", e.POINT = "point", e.CC = "cc", e.CC_FILLED = "ccFilled", e.CHECKMARK = "checkmark", e.STEREOSCOPIC = "stereoscopic", e.PERSON_FILLED = "personFilled", e.CHEVRON_DOWN = "chevronDown", e.CHEVRON_RIGHT = "chevronRight", e.CLOCK = "clock", e.CLOCK_FILLED = "clockFilled", e.COLLECTIONS = "collections", e.DISMISS_X = "dismissX", e.HEART = "heart", e.HEART_FILLED = "heartFilled", e.HEART_WIDER_FILLED = "heartWiderFilled", e.HEART_WIDER_BROKEN_FILLED = "heartWiderBrokenFilled", e.ONDEMAND = "ondemand", e.PAPER_PLANE = "paperPlane", e.POP_OUT = "popOut", e.VOLUME_OFF_FILLED = "volumeOffFilled", e.VOLUME_ON_FILLED = "volumeOnFilled", e.FAST_FORWARD = "fastForward", e.INFO_CIRCLE = "infoCircle", e.TRANSCRIPT_ON = "transcriptOn", e.TRANSCRIPT_OFF = "transcriptOff", e.SEARCH = "search", e.CHEVRON_UP = "chevronUp", e.CLOSE_CIRCLE = "closeCircle", e.SPINNER = "spinner", e.SLIDERS = "sliders", e.SWITCH_CONTAINER = "switchContainer", e.SWITCH_CIRCLE = "switchCircle", e.WARN_CIRCLE = "warnCircle", e.THUMBS_UP = "thumbsUp", e.THUMBS_DOWN = "thumbsDown", e.THUMBS_UP_FILLED = "thumbsUpFilled", e.THUMBS_DOWN_FILLED = "thumbsDownFilled", e.LINK = "link", e.SPARKLE_TWO_STARS_FILLED = "sparkleTwoStarsFilled", e.WARN_TRIANGLE = "warnTriangle", e.VERTICAL_ELLIPSIS = "verticalEllipsis", e.PLUS_SYMBOL = "plusSymbol", e.FACEBOOK = "facebook", e.TUMBLR = "tumblr", e.EMAIL = "email", e.EMBED = "embed", e.PREVIOUS = "previous", e.TWITTER = "twitter", e.VOD = "vod", e.VOD_DOWNLOAD = "vodDownload", e.VOD_RENT = "vodRent", e.VOD_SUBSCRIBE = "vodSubscribe", e
}({});
const nd = () => {
        const e = Hu((e => e.toggleDisplayList));
        return {
            label: "Ask Vimeo AI",
            enabled: Hu((e => e.embed.aiWidget)),
            onSelect: () => e("aiWidget"),
            icon: td.SPARKLE_TWO_STARS_FILLED
        }
    },
    id = () => {
        const e = Hu((e => e.setUser));
        return {
            label: "Add to collections",
            enabled: Hu((e => e.embed.collections)),
            onSelect: () => e("collected", !0),
            icon: td.COLLECTIONS
        }
    },
    {
        Provider: od,
        useStore: rd
    } = ke(),
    ad = ({
        player: e,
        children: t
    }) => (we((e => {})), De(od, {
        createStore: () => Me(((t, n) => {
            const {
                config: i,
                events: o,
                uuid: r,
                element: a,
                store: l,
                loadVideoViaIframe: s,
                loadVideoViaConfig: c,
                performDelegateAction: d
            } = e, u = {
                set: t,
                get: n,
                events: o,
                store: l,
                get config() {
                    return e.config
                }
            };
            return h(h(h(h(h(h(h({
                config: i,
                element: a,
                uuid: r,
                view: i.view,
                events: o,
                performDelegateAction: d,
                loadVideoViaIframe: s,
                loadVideoViaConfig: c
            }, (e => {
                const t = h(h({}, function() {
                    const t = Ks(e.config),
                        n = (null == t ? void 0 : t.gate_type) || Fo.EMPTY;
                    return Ko(n, e.config, null == t ? void 0 : t.gate_id)
                }()), {}, {
                    accessGateLoaded: !1,
                    accessGateReady: !1,
                    setAccessGateLoaded: function() {
                        e.set((e => ({
                            accessGate: h(h({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateLoaded: !0
                            })
                        })))
                    },
                    setAccessGateReady: function() {
                        e.set((e => ({
                            accessGate: h(h({}, null == e ? void 0 : e.accessGate), {}, {
                                accessGateReady: !0
                            })
                        }))), n(Wo.OPENED)
                    },
                    closeAccessGate: o,
                    sendGateBPEvent: n
                });

                function n(t, n) {
                    var i;
                    null != (i = e.config.embed.access_gates) && i.length && wr(gr.PROCESS_STEP, e.config, {
                        process_name: "access_gate",
                        step_name: t,
                        status: t === Wo.ERROR ? "fail" : "success",
                        error: (null == n ? void 0 : n.message) || null,
                        error_code: "number" == typeof(null == n ? void 0 : n.code) ? `${n.code}` : null
                    })
                }

                function i(t, n = null) {
                    const i = Ko(t, e.config, n);
                    e.set((e => ({
                        accessGate: h(h({}, null == e ? void 0 : e.accessGate), i)
                    }))), e.events.fire(zt._accessGateOpened, i.purpose)
                }

                function o(t) {
                    e.set((t => ({
                        accessGate: h(h({}, null == t ? void 0 : t.accessGate), {}, {
                            accessGateLoaded: !1,
                            accessGateReady: !1
                        }, Ko(Fo.EMPTY, e.config))
                    }))), e.events.fire(zt._accessGateClosed, t), n(Wo.CLOSED)
                }

                function r() {
                    var t, n;
                    const r = e.config.embed.access_gates;
                    null != r && r.length && r.forEach((t => {
                        ! function(t) {
                            const {
                                gate_type: n,
                                placement: o,
                                timecode: r,
                                gate_id: a
                            } = t;

                            function l({
                                currentTime: t
                            }) {
                                t >= r && (i(n, a), e.events.off(E.TIME_UPDATE, l))
                            }

                            function s() {
                                i(n, a), e.events.off(zt._ended, s)
                            }
                            jo(n, e.config) || (o === Go.DURING_VIDEO && e.events.on(E.TIME_UPDATE, l), o === Go.AFTER_VIDEO && e.events.on(zt._ended, s), e.events.on(zt._configChanged, (function() {
                                e.events.off(E.TIME_UPDATE, l), e.events.off(zt._ended, s)
                            })))
                        }(t)
                    }));
                    const a = Ks(e.config),
                        l = null == (t = e.get()) || null == (t = t.accessGate) ? void 0 : t.gateId,
                        s = (null == (n = e.get()) || null == (n = n.accessGate) ? void 0 : n.purpose) || Fo.EMPTY,
                        c = null == a ? void 0 : a.gate_id,
                        d = (null == a ? void 0 : a.gate_type) || Fo.EMPTY,
                        u = l !== c || s !== d;
                    s !== Fo.EMPTY && u && o(), d !== Fo.EMPTY && c && u && (i(d, c), e.events.once(zt._ready, (() => {
                        e.events.fire(zt._accessGateOpened, d)
                    })))
                }
                return r(), e.events.on(zt._configChanged, (function() {
                    r()
                })), {
                    accessGate: t
                }
            })(u)), ld(u)), cd(u)), _d(u)), pd(u)), fd(u)), yd(u))
        })),
        children: t
    })),
    ld = e => {
        const t = sd(e),
            {
                set: n,
                events: i
            } = e;
        return i.on(jt._reset, (() => {
            n((() => ({
                colors: sd(e)
            })))
        })), i.on(jt._changeColor, ((e, t) => {
            const i = vi(e);
            if (!i) return;
            const o = gn[t];
            n((e => ({
                colors: h(h({}, e.colors), {}, {
                    [o]: i
                })
            })))
        })), {
            colors: t
        }
    };

function sd(e) {
    const {
        embed: t
    } = e.config;
    return {
        colorOne: vi(t.color_one) || vi(fn[_n]),
        colorTwo: vi(t.color_two) || vi(t.color) || vi(fn[pn]),
        colorThree: vi(t.color_three) || vi(fn[mn]),
        colorFour: vi(t.color_four) || vi(fn[vn])
    }
}
const cd = e => {
    const t = dd(e),
        {
            set: n,
            events: i
        } = e;
    return i.on(zt._configChanged, (() => {
        n((() => ({
            embed: dd(e)
        })))
    })), {
        embed: t
    }
};

function dd(e) {
    const {
        config: t
    } = e;
    return {
        playerUrl: t.player_url,
        referrer: t.request.referrer,
        transparent: !!t.embed.transparent,
        videoId: t.video.id,
        vimeoUrl: t.vimeo_url,
        onsite: !!t.embed.on_site
    }
}
let ud = function(e) {
    return e.EMPTY = "empty", e.PRIVATE_LOCKED = "private-locked", e.PASSWORD = "password", e.ERROR = "error", e
}({});
const _d = e => {
        const {
            get: t,
            set: n,
            events: i
        } = e;

        function o() {
            n((() => ({
                error: {
                    type: null,
                    title: null,
                    message: null
                }
            })))
        }
        return i.on(zt._error, ((e, i) => {
            var o;
            const r = null == (o = t()) || null == (o = o.error) ? void 0 : o.type;
            Zs(r, e, i) && n((() => ({
                error: {
                    type: e,
                    title: null == i ? void 0 : i.title,
                    message: null == i ? void 0 : i.message
                }
            })))
        })), i.on(jt._showLocalAccessGate, ((e, t) => {
            e !== ud.ERROR || n((() => ({
                error: {
                    type: kn.LOCAL_ACCESS_GATE_ERROR,
                    title: t.title,
                    message: t.message
                }
            })))
        })), i.on(jt._showOverlay, (e => {
            e === oi.ERROR && n((() => ({
                error: {
                    type: kn.LOAD_VIDEO_VIA_CONFIG,
                    title: "Sorry",
                    message: "There was a problem. Please try again."
                }
            })))
        })), i.on(zt._overlayClosed, o), i.on(zt._assetUrlsRefreshed, (() => {
            var e;
            const n = Mn();
            (null == (e = t()) || null == (e = e.error) ? void 0 : e.type) === n.type && o()
        })), {
            error: {
                type: null,
                title: null,
                message: null
            }
        }
    },
    pd = e => {
        const {
            set: t,
            events: n
        } = e, i = {
            purpose: md(e.config.view)
        };
        return n.on(zt._configChanged, (function() {
            t((() => ({
                localAccessGate: {
                    purpose: md(e.config.view)
                }
            })))
        })), n.on(jt._showLocalAccessGate, (e => {
            t((t => ({
                localAccessGate: h(h({}, t.localAccessGate), {}, {
                    purpose: e
                })
            })))
        })), {
            localAccessGate: i
        }
    };

function md(e) {
    return e === en.error ? ud.ERROR : e === en.privateLocked ? ud.PRIVATE_LOCKED : e === en.privatePassword ? ud.PASSWORD : ud.EMPTY
}
const vd = [en.main, en.privateUnlocked],
    fd = e => {
        const {
            set: t,
            events: n
        } = e, i = hd(e);
        return n.on(zt._privateLoginStatusUpdated, (e => {
            t((t => ({
                login: h(h({}, t.login), {}, {
                    status: e
                })
            })))
        })), n.on(zt._userLoggedIn, (() => {
            t((() => ({
                login: hd(e)
            })))
        })), n.on(zt._configChanged, (() => {
            t((() => ({
                login: hd(e)
            })))
        })), {
            login: i
        }
    };

function hd(e) {
    return {
        status: gd(e)
    }
}

function gd(e) {
    const {
        config: t
    } = e;
    return t.user.logged_in ? vd.includes(t.view) ? Xo.LOGGED_IN_HAS_ACCESS : Xo.LOGGED_IN_NO_ACCESS : Xo.NOT_LOGGED_IN
}

function Ed(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function bd({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const l = parseInt(e, 10),
        s = parseInt(t, 10);
    return 0 === l || isNaN(l) || (r ? a.w = l : a.mw = l), 0 === s || isNaN(s) || (r ? a.h = s : a.mh = s), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Cd(e, t = 0) {
    return function(e) {
        return new Promise(((t, n) => {
            const i = new Image;

            function o() {
                Br.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        }))
    }(e).catch((n => (Br.captureException(n, {
        extra: {
            imageUrl: e
        }
    }), t > 0 ? Cd(e, t - 1) : new Promise((() => {})))))
}
const yd = e => {
    const {
        set: t,
        get: n,
        events: i,
        store: r
    } = e, a = (e, n) => {
        t((t => ({
            videoThumbnail: h(h({}, t.videoThumbnail), {}, {
                [e]: n
            })
        })))
    }, l = () => a("isDisplayed", !0), s = () => a("isDisplayed", !1);

    function c() {
        return !!e.config.video.thumbnail_url
    }

    function d() {
        return r.get(Wa) && !r.get(Ka) || !e.config.embed.autoplay || ka.isCastConnected
    }

    function u() {
        return Ed(r.get("ui.player.width") * o.devicePixelRatio, r.get("ui.player.height") * o.devicePixelRatio)
    }
    const _ = (e = "") => (i.fire(zt._videoThumbnailLoadComplete, e), Promise.resolve());

    function p() {
        if (!c()) return _();
        const {
            width: t,
            height: n
        } = u(), i = bd({
            width: t,
            height: n,
            baseUrl: e.config.video.thumbnail_url
        });
        a("width", t);
        const o = Cd(i, 3).then((e => (e && r.dispatch(((e, t) => ({
            type: Tl,
            payload: {
                width: e,
                height: t
            }
        }))(e.width, e.height)), d() && (a("thumbnailUrl", i), l()), e)));
        if (!d()) return _(i);
        const s = new Promise((e => {
            setTimeout(e, 2e3)
        }));
        return Promise.race([o, s]).catch((e => {})).finally((() => {
            _(i)
        }))
    }

    function m() {
        var e, t;
        if (null == (e = n()) || null == (e = e.videoThumbnail) || !e.isDisplayed) return;
        const {
            width: i
        } = u();
        i <= (null == (t = n()) || null == (t = t.videoThumbnail) ? void 0 : t.width) || 0 === i || p()
    }
    i.on(jt._showVideoThumbnail, l), i.on(jt._hideVideoThumbnail, s), i.on(zt._configChanged, p), i.on(zt._didEnterFullscreen, m), i.on([P.BUFFER_ENDED, E.PLAYING], s), r.watch("ui.player.width", N(m, 150)), r.watch("ui.preview.scaleFactor", (e => {
        a("shouldCoverBackground", e > 1)
    }));
    const {
        width: v,
        height: f
    } = u();
    return {
        videoThumbnail: {
            thumbnailUrl: c() ? bd({
                width: v,
                height: f,
                baseUrl: e.config.video.thumbnail_url
            }) : "",
            width: v,
            isDisplayed: !1,
            shouldCoverBackground: r.get("ui.preview.scaleFactor") > 1
        },
        setVideoThumbnail: a
    }
};
let Td = function(e) {
        return e.PRIVATE_LOCKED = "private-locked", e.LOGIN_LIKE = "login-like", e.LOGIN_WATCH_LATER = "login-watch-later", e.PURCHASE = "purchase", e
    }({}),
    Ld = function(e) {
        return e.LIKES = "likes", e.WATCH_LATER = "watchlater", e.FOLLOWING = "following", e
    }({});

function Ad() {}
const Id = () => {
        const e = rd((e => e.events)),
            t = rd((e => e.embed.videoId)),
            n = rd((e => e.embed.playerUrl)),
            i = rd((e => e.performDelegateAction)),
            o = Hu((e => e.user.loggedIn)),
            r = Hu((e => e.user.liked)),
            a = Hu((e => e.user.isClipOwner)),
            l = Hu((e => e.embed.like)),
            s = Hu((e => e.user.persistUserAction)),
            c = r ? "Unlike" : "Like",
            d = o ? c : "Like (this opens in a new window)",
            u = r ? td.HEART_FILLED : td.HEART,
            {
                openLoginPopup: _
            } = kd({
                url: `https://${n}/video/${t}/login/like`,
                context: Td.LOGIN_LIKE
            }),
            p = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                if (e.fire(zt._likeButtonPressed), !a) return function(e, t) {
                    var n = function() {
                        if (!o) return function(e, t) {
                            return function(e, t, n) {
                                if (n) return t ? t(e()) : e();
                                try {
                                    var i = Promise.resolve(e());
                                    return t ? i.then(t) : i
                                } catch (De) {
                                    return Promise.reject(De)
                                }
                            }(e, Ad, t)
                        }(_)
                    }();
                    return n && n.then ? n.then(t) : t()
                }(0, (function() {
                    r ? i(tl, (() => {
                        s(Ld.LIKES, "DELETE"), e.fire(zt._unliked)
                    })) : i(el, (() => {
                        s(Ld.LIKES, "PUT"), e.fire(zt._liked)
                    }))
                }))
            }));
        return {
            label: c,
            ariaLabel: d,
            enabled: l,
            onSelect: p,
            icon: u
        }
    },
    Sd = () => {
        const e = Hu((e => e.setOverlay)),
            t = Hu((e => e.embed.share));
        return {
            label: Hu((e => e.embed.embedOnlyShare)) ? "Embed" : "Share",
            enabled: t,
            onSelect: () => e("purpose", oi.SHARE),
            icon: td.PAPER_PLANE
        }
    },
    Od = () => {
        const e = Hu((e => e.vod.vodButtonVisible)),
            t = Hu((e => e.vod.vodLabel));
        return {
            label: t,
            enabled: !(!e || !t),
            onSelect: xd(),
            icon: td.ONDEMAND
        }
    };

function Pd() {}
const Rd = () => {
    const e = rd((e => e.events)),
        t = rd((e => e.embed.videoId)),
        n = rd((e => e.embed.playerUrl)),
        i = rd((e => e.performDelegateAction)),
        o = Hu((e => e.embed.privacy)),
        r = Hu((e => e.embed.videoUrl)),
        a = Hu((e => e.user.watchLater)),
        l = Hu((e => e.user.loggedIn)),
        s = Hu((e => e.user.persistUserAction)),
        c = Hu((e => e.embed.watchLater)),
        d = Hu((e => e.user.watchLater)),
        u = d ? "Remove from Watch Later" : "Add to Watch Later",
        _ = l ? u : "Add to Watch Later (this opens in a new window)",
        p = d ? td.CLOCK_FILLED : td.CLOCK,
        {
            openLoginPopup: m
        } = kd({
            url: `https://${n}/video/${t}/login/watch-later`,
            context: Td.LOGIN_WATCH_LATER
        }),
        v = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            if (e.fire(zt._watchLaterButtonPressed), r || o === Kt) return function(e, t) {
                var n = function() {
                    if (!l) return function(e, t) {
                        return function(e, t, n) {
                            if (n) return t ? t(e()) : e();
                            try {
                                var i = Promise.resolve(e());
                                return t ? i.then(t) : i
                            } catch (De) {
                                return Promise.reject(De)
                            }
                        }(e, Pd, t)
                    }(m)
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                a ? i(il, (() => {
                    s(Ld.WATCH_LATER, "DELETE"), e.fire(zt._removedFromWatchLater)
                })) : i(nl, (() => {
                    s(Ld.WATCH_LATER, "PUT"), e.fire(zt._addedToWatchLater)
                }))
            }))
        }));
    return {
        label: u,
        ariaLabel: _,
        enabled: c,
        onSelect: v,
        icon: p
    }
};
let Nd = function(e) {
    return e.VOD = "vod", e.LIKE = "like", e.WATCH_LATER = "watch_later", e.COLLECTIONS = "collections", e.SHARE = "share", e.AI = "ai", e
}({});
const wd = () => ({
    [Nd.VOD]: Od(),
    [Nd.LIKE]: Id(),
    [Nd.WATCH_LATER]: Rd(),
    [Nd.COLLECTIONS]: id(),
    [Nd.SHARE]: Sd(),
    [Nd.AI]: nd()
});
let Dd = null;
const kd = ({
    url: e,
    context: t,
    delegateArg: n
}) => {
    const i = rd((e => e.events)),
        o = rd((e => e.embed.onsite)),
        r = rd((e => e.loadVideoViaIframe)),
        a = rd((e => e.performDelegateAction));
    return {
        openLoginPopup: () => new Promise((l => {
            switch (t) {
                case Td.PRIVATE_LOCKED:
                    a(al, (() => {
                        Dd = Tt(e, "login", {
                            width: 670,
                            height: 545,
                            scrollbars: "yes",
                            resizable: "yes",
                            toolbar: "no"
                        })
                    }));
                    break;
                case Td.LOGIN_LIKE:
                case Td.LOGIN_WATCH_LATER:
                    a(al, (() => {
                        Dd = Tt(e, "login", {
                            width: 670,
                            height: 545
                        })
                    })), i.fire(zt._popupOpened, t);
                    break;
                case Td.PURCHASE:
                    a(ol, (() => {
                        Dd = Tt(e, "purchase", {
                            width: 790,
                            height: 670
                        })
                    }), n), i.fire(zt._popupOpened, t)
            }
            window.confirmLoginAction = function(e, t) {
                i.fire(zt._userLogIn, t), i.once(zt._userLoggedIn, l)
            }, window.closePopup = function() {
                if (Dd) {
                    try {
                        Dd.close(), i.fire(zt._popupClosed, t), i.once(zt._userLoggedIn, l)
                    } catch (De) {}
                    Dd = null
                }
            }, o || (window.confirmPurchase = function(e, t, n) {
                if (t) return r(e), void l();
                n && i.fire(zt._playButtonPressed)
            })
        }))
    }
};

function Md(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Vd(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}

function Bd() {}
const xd = e => {
        const t = Vd((function() {
                return function() {
                    var e = function() {
                        if (!ko()) return function(e) {
                            if (e && e.then) return e.then(Bd)
                        }(function(e, t) {
                            try {
                                var n = e()
                            } catch (De) {
                                return t(De)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return Md(m(l), (function() {
                                _("paused", !1)
                            }))
                        }), (function(e) {
                            Br.captureException(e), v("purpose", oi.ERROR)
                        })));
                        p(l)
                    }();
                    if (e && e.then) return e.then(Bd)
                }()
            })),
            n = rd((e => e.events)),
            i = rd((e => e.embed.videoId)),
            o = rd((e => e.embed.referrer)),
            r = rd((e => e.embed.playerUrl)),
            a = Hu((e => e.vod.productId)),
            l = Hu((e => e.vod.featureId)),
            s = Hu((e => e.vod.isFeature)),
            c = Hu((e => e.vod.purchased)),
            d = Hu((e => e.vod.url)),
            u = Hu((e => e.vod.isComingSoon)),
            _ = Hu((e => e.setPlayback)),
            p = rd((e => e.loadVideoViaIframe)),
            m = rd((e => e.loadVideoViaConfig)),
            v = Hu((e => e.setOverlay)),
            f = (() => {
                const e = Fu().getState,
                    t = rd((e => e.embed.onsite));
                return function(n) {
                    if (!n) return;
                    const i = n.indexOf("#") > -1,
                        o = e().playback.currentTime,
                        r = e().playback.duration,
                        a = e().playback.paused,
                        l = e().setPlayback;
                    !i && o > 0 && o < r - 30 && !a && (n += `#at=${Math.floor(o)}`), t ? window.location.href = n : (window.open(n), l("paused", !0))
                }
            })(),
            h = e || a;
        let g = `https://${r}/video/${l||i}/purchase/vod`;
        h && (g += `/${h}`), g += `?referrer=${encodeURIComponent(o||"")}`;
        const {
            openLoginPopup: E
        } = kd({
            url: g,
            context: Td.PURCHASE,
            delegateArg: [h]
        });
        return Vd((function() {
            return n.fire(zt._vodButtonPressed, h), c ? !s && l ? void t() : void _("paused", !1) : u ? void f(d) : (E(), Md())
        }))
    },
    Ud = (e, t) => {
        const [n, i] = Pe(e), o = Re([e]), r = Re(null);
        return Oe((() => {
            t ? clearTimeout(r.current) : r.current = setTimeout((() => {
                o.current = [e], i(e)
            }), Us)
        }), [e, t]), {
            panel: n,
            setPanel: e => {
                e !== n && (o.current.push(e), i(e))
            },
            goToPreviousPanel: () => {
                if (o.current.length > 1) {
                    o.current.pop();
                    const e = o.current[o.current.length - 1];
                    i(e)
                }
            }
        }
    };

function Hd(e) {
    var t, n, i, r, a, l, s;
    const {
        config: c,
        events: d,
        parentUrl: u,
        backbone: _
    } = e, {
        embed: p,
        request: m,
        video: v
    } = c, f = !!p.autoplay, g = !(!p.autoplay || null == (t = m.flags) || !t.autohide_controls), E = !!p.settings.playbar, b = !!p.settings.like, C = !!p.settings.share, y = !(null == (n = p.settings.share) || !n.embed_only), T = !!p.settings.collections, L = !!p.settings.watch_later, A = !(null == (i = p.settings) || !i.watch_trailer || p.autoplay || !p.on_site), I = ir(_, null == (r = v.live_event) ? void 0 : r.dvr), S = !!(p.settings.speed && I && Z.settingPlaybackRate), O = !!p.keyboard, P = !!p.settings.logo, R = !!p.settings.volume, N = !!p.settings.fullscreen, w = !(null == (a = v.live_event) || null == (a = a.settings) || !a.hide_live_label), D = !(null == (l = v.live_event) || !l.show_viewer_count), k = !!p.settings.custom_logo, M = function(e) {
        var t;
        const {
            config: n
        } = e;
        let i = {
            customLogoUrl: null,
            customLogoImg: null,
            customLogoSticky: !1,
            customLogoWidth: null,
            customLogoHeight: null
        };
        if (null == (t = n.embed.settings.custom_logo) || !t.img) return i;
        const r = n.embed.settings.custom_logo;
        let a = r.img;
        return o.devicePixelRatio >= 2 && (a = a.replace(/(mw|mh)=(\d+)/g, (function(e, t, n) {
            return t + "=" + 2 * parseInt(n, 10)
        }))), i = {
            customLogoUrl: to(r.url),
            customLogoImg: a,
            customLogoSticky: r.sticky,
            customLogoWidth: r.width,
            customLogoHeight: r.height
        }, i
    }(e), V = !!p.settings.background, B = 0 !== p.settings.controls, x = !!p.transparent, U = Fd(e), H = !!p.settings.audio_tracks, F = !!p.settings.airplay, G = !!p.settings.chapters, W = !!p.settings.chromecast, Y = !!p.settings.cc, $ = !!p.settings.quality, K = p.settings.play_button_position, q = !!p.settings.watch_full_video, j = !!p.settings.ask_ai, z = !!v.spatial && !!p.settings.spatial_compass, X = v.unlisted_hash, Q = !!c.embed.settings.badge, J = p.tq || "", ee = !!p.persistent_logo, te = m.ai_widget_signature, ne = 0 !== p.unmute_button, ie = !!p.settings.pip, oe = p.loop, re = Zi(p.context), ae = Boolean("public" === v.embed_permission && p.settings.embed), le = v.share_url, se = `https://${c.player_url}/video/${v.id}/share`, ce = v.embed_code, de = v.url, ue = v.privacy, _e = 1 === (c.embed.dnt || (null == (s = c.request.flags) ? void 0 : s.dnt)), pe = function(e) {
        return Object.keys(e).reduce(((t, n) => h(h({}, t), {}, {
            [n]: vr(e[n])
        })), {})
    }(c.request.flags), me = c.vimeo_api_url, ve = c.embed.cards, fe = !!U || !!j;
    return fe && d.fire(zt._rightContentAreaEnabled), {
        autoPlay: f,
        autoHideControls: g,
        playbar: E,
        like: b,
        share: C,
        embedOnlyShare: y,
        collections: T,
        watchLater: L,
        isTrailer: A,
        speedChangeEnabled: S,
        keyboard: O,
        showVimeoLogo: P,
        volume: R,
        fullscreen: N,
        hideLiveLabel: w,
        showViewerCount: D,
        customLogo: k,
        customLogoFields: M,
        background: V,
        controls: B,
        transparent: x,
        transcript: U,
        rightContentAreaEnabled: fe,
        multipleAudioTracks: H,
        airplay: F,
        chapters: G,
        cc: Y,
        chromecast: W,
        quality: $,
        playButtonPosition: K,
        parentUrl: u,
        watchFullVideo: q,
        aiWidget: j,
        compass: z,
        videoUnlistedHash: X,
        badge: Q,
        transcriptQuery: J,
        persistentLogo: ee,
        aiWidgetSignature: te,
        unmuteButton: ne,
        pip: ie,
        loop: oe,
        svvContext: re,
        allowEmbedShare: ae,
        shareUrl: le,
        embedCode: ce,
        videoUrl: de,
        playerShareUrl: se,
        privacy: ue,
        doNotTrack: _e,
        flags: pe,
        vimeoApiUrl: me,
        cards: ve
    }
}

function Fd(e) {
    const {
        embed: t,
        video: n
    } = e.config, i = n.live_event, o = !i || i.archive.status === so.done || i.dvr;
    return !!t.settings.transcript && o
}
const Gd = [{
        id: .5,
        label: "0.5x"
    }, {
        id: .75,
        label: "0.75x"
    }],
    Wd = {
        id: 1,
        label: "Normal"
    },
    Yd = [{
        id: 1.25,
        label: "1.25x"
    }, {
        id: 1.5,
        label: "1.5x"
    }, {
        id: 2,
        label: "2x"
    }],
    $d = [Wd].concat(Yd),
    Kd = [].concat(Gd, [Wd], Yd),
    qd = [].concat(Gd, [Wd]);

function jd(e) {
    var t;
    const {
        config: n,
        backbone: i
    } = e, r = zd(e), a = !!o.airPlay, l = n.embed.quality ? Kn(i.qualities, n.embed.quality) : i.qualities, s = Xd(i.qualities, n.embed.quality), c = Qd(n);
    return {
        playInitiated: !1,
        targetTimeReached: !1,
        scrubbing: !1,
        scrubbingByFrame: !1,
        paused: !n.embed.autoplay || (null == (t = n.video.live_event) || null == (t = t.archive) ? void 0 : t.status) === so.done,
        buffering: !1,
        loadedTime: 0,
        currentTime: i.currentTime,
        liveEdgeTime: i.liveEdgeTime,
        atLiveEdge: i.atLiveEdge,
        liveTailTime: i.liveTailTime,
        hasFragments: c,
        currentFragment: e.fragmentsHandler.currentFragment,
        duration: n.video.duration,
        qualities: l,
        currentQuality: s,
        playbackRates: r,
        loadedMetadata: i.readyState >= 1,
        loadedData: i.readyState > 1,
        canPlayPictureInPicture: e.canPlayPictureInPicture,
        supportsAirPlay: a,
        supportsTextTracks: Z.textTracks,
        supportsStereoscopic: Zd(e),
        isAdPlaying: !1,
        supportsSettingVolume: Z.settingVolume,
        volume: i.volume,
        muted: i.muted || !!n.embed.muted,
        audioTracks: i.audioTracks,
        isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
        startTime: e.startTime,
        endTime: e.endTime,
        ended: i.ended,
        hasFirstTimeUpdate: !1
    }
}

function zd(e) {
    var t;
    const {
        backbone: n,
        config: i
    } = e;
    let o = [];
    if (ir(n, null == (t = i.video.live_event) ? void 0 : t.dvr) && Z.settingPlaybackRate && i.embed.settings.speed) {
        const e = function(e, t) {
            return e ? $d : t ? qd : Kd
        }(n.atLiveTail, n.atLiveEdge);
        o = Kn(e, `${n.playbackRate}`)
    }
    return o
}

function Xd(e, t) {
    var n;
    if (t) {
        var i;
        const n = "string" == typeof t ? t : t.quality || `${t.height}p`,
            o = null == e || null == (i = e.find((e => e.id === n))) ? void 0 : i.label;
        if (o) return o
    }
    return null == e || null == (n = e.find((e => e.active))) ? void 0 : n.label
}

function Zd(e) {
    const {
        config: t
    } = e;
    return "disable" !== t.video.privacy && (o.webvr || o.stereoscopic) && t.video.spatial && rs(t, "webvr").group
}

function Qd(e) {
    var t;
    return !s(null == (t = e.embed.interactive) ? void 0 : t.fragments)
}

function Jd(e) {
    const {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    } = e;
    return {
        atLiveEdge: t,
        liveEdgeTime: n,
        liveTailTime: i
    }
}

function eu() {}

function tu({
    config: e,
    get: t
}) {
    const {
        user: n,
        video: i
    } = e, o = n.id, r = jl(i.owner), a = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (De) {
                return Promise.reject(De)
            }
        }
    }((function(n, i, o = null) {
        const r = t().user.vimeoApiClientToken,
            a = t().user.vimeoApiInteractionTokens,
            l = t().embed.videoUnlistedHash;
        return function(e) {
            if (e && e.then) return e.then(eu)
        }(function(s, c) {
            try {
                var d = function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(t().updatePhpTokens(), (function() {
                    const s = n === Ld.FOLLOWING ? t().user.ownerId : e.video.id;
                    let c;
                    r && (n === Ld.LIKES ? c = a.likes : n === Ld.WATCH_LATER ? c = a.watch_later : n === Ld.FOLLOWING && (c = a.following));
                    const d = `?auth=${c}`,
                        u = l && n !== Ld.FOLLOWING ? `:${l}` : "",
                        _ = `https://${t().embed.vimeoApiUrl}/users/${t().user.id}/${n}/${s}${u}${d}`;
                    return function(e) {
                        return e && e.then ? e.then(eu) : Promise.resolve()
                    }((null != o ? o : T)(_, {
                        jwt: r,
                        method: i
                    }))
                }))
            } catch (De) {
                return c(De)
            }
            return d && d.then ? d.then(void 0, c) : d
        }(0, (function(e) {
            Br.captureException(e, {
                extra: {
                    action: n,
                    method: i
                }
            })
        })))
    }));
    return {
        id: o,
        liked: !!n.liked,
        loggedIn: n.logged_in,
        isClipOwner: o === i.owner.id,
        watchLater: !!n.watch_later,
        ownerName: i.owner.name,
        ownerId: i.owner.id,
        following: !!n.following,
        collected: !1,
        shared: !1,
        isPayingOwner: r,
        vimeoBucketedLiveClientToken: n.vimeo_bucketed_live_client_token,
        vimeoApiInteractionTokens: n.vimeo_api_interaction_tokens,
        vimeoApiClientToken: n.vimeo_api_client_token,
        persistUserAction: a
    }
}
const nu = {
    isVOD: !1,
    vodButtonVisible: !1
};

function iu(e) {
    const {
        video: t,
        embed: n,
        user: i,
        request: o
    } = e.config;
    let r = h({}, nu);
    if (t.vod) {
        const e = !0,
            a = t.vod.is_coming_soon,
            l = "ondemand.main" === n.context || "Vimeo\\Controller\\OnDemandController.main" === n.context,
            s = t.vod && i.purchased,
            c = t.vod.countries,
            d = o.country,
            u = t.vod.purchase_options || [];
        let _ = n.settings.vod && Gn(c, d);
        _ && a && l && (_ = !1);
        const [p] = u;
        let m = null;
        p && (m = ou(o.dynamic_translation_map, "label_string", o.currency, p)), r.isVOD = e, r.vodLabel = m, r.purchased = !!s, r.productId = null == p ? void 0 : p.product_id, r.isExpiring = !(null == p || !p.expiring), r.isPreorder = void 0 !== t.vod.is_preorder ? !!t.vod.is_preorder : !!t.vod.date_available, r.isComingSoon = !!t.vod.is_coming_soon, r.vodButtonVisible = _, r.purchaseOptions = u.map((e => h(h({}, e), {}, {
            formattedLabel: ou(o.dynamic_translation_map, "outro_string", o.currency, e)
        }))), r.title = t.vod.feature_title, r.url = t.vod.url, r.releaseDate = t.vod.date_available_formatted_datetime || t.vod.date_available, r.isFeature = !!t.vod.is_feature, r.featureId = t.vod.feature_id, r.isAvailableInCountry = !c || 0 === c.length || -1 !== c.indexOf(d)
    }
    return r
}

function ou(e, t, n, i) {
    var o = i[t];
    return o ? (o = function(e, t, n) {
        let i = n.USD;
        return t in n && (i = n[t]), -1 !== e.indexOf("${price}") ? e.replace("${price}", i) : -1 !== e.indexOf("{PRICE}") ? e.replace("{PRICE}", i) : e
    }(o = function(e, t) {
        return void 0 !== e && void 0 !== e[t] ? e[t] : t
    }(e, o), n, i.prices), i.expires_in_duration_str && (o = o.replace("{TIME}", i.expires_in_duration_str)), i.available_on_formatted && (o = o.replace("{DATE}", i.available_on_formatted)), o) : null
}

function ru({
    config: e
}) {
    const {
        badge: t
    } = e.embed.settings;
    let n = o.devicePixelRatio > 1 ? "img_2x" : "img";
    return o.svg && t.svg && (n = "svg"), {
        link: t.link,
        img: t[n],
        margin: t.margin || !1,
        width: t.width,
        height: t.height,
        name: t.name,
        shadow: !!t.shadow,
        id: t.id
    }
}

function au(e) {
    const t = Yi(Ht, e.config),
        n = ko() ? t : window.location.href;
    return {
        chapters: lu(e),
        chapterShareBaseUrl: n,
        activeCueId: null
    }
}

function lu(e) {
    const t = Array.from(e.backbone.chapters),
        n = e.config.embed.chapters || [];
    return t.map((e => {
        const t = n.find((t => t.timecode === e.startTime));
        return {
            cueId: e.id,
            startTime: e.startTime,
            endTime: e.endTime,
            text: e.text,
            chapterId: null == t ? void 0 : t.id,
            clipId: null == t ? void 0 : t.clip_id,
            timecode: null == t ? void 0 : t.timecode,
            title: null == t ? void 0 : t.title
        }
    }))
}
let su = function(e) {
    return e.RTL = "rtl", e.LTR = "ltr", e
}({});
const cu = {
    black: "#000",
    red: "#f00",
    yellow: "#ff0",
    green: "#0f0",
    blue: "#00f",
    white: "#fff",
    cyan: "#0ff",
    magenta: "#f0f"
};

function du(e) {
    var t, n, i;
    const {
        backbone: o,
        config: r
    } = e, a = o.enabledTextTrack, l = o.textTracks, s = !!r.video.live_event, {
        textTracks: c,
        activeTextTrackId: d,
        language: u,
        direction: _
    } = uu(l, s, a), p = _u(e), m = (null == l || null == (t = l.filter((e => e.trackElement))) ? void 0 : t.map((e => e.trackElement))) || [], v = 1 === (null == r || null == (n = r.request) || null == (n = n.flags) ? void 0 : n.ott) || "dev" === (null == r || null == (i = r.request) || null == (i = i.build) ? void 0 : i.js) || "gedevplayer.vimeows.com" === (null == r ? void 0 : r.player_url), f = (l || []).reduce(((e, t) => t.rtl ? e.concat(t.id) : e), []);
    return h({
        textTracks: c,
        textTrackEls: m,
        activeTextTrackId: d,
        requiresCrossOrigin: v,
        activeCues: [],
        language: u,
        direction: _,
        rtlTracks: f
    }, p)
}

function uu(e, t, n) {
    const i = "off";
    let o = [],
        r = mu(n);
    return null != e && e.length && (r || (r = i), o.push({
        label: "Off",
        id: i,
        active: r === i
    }), e.forEach((e => {
        let n = "CC" === e.label.substring(e.label.length - 2),
            i = "captions" !== e.kind || n ? "" : " CC",
            a = t ? "Display Captions" : e.label + i;
        const l = mu(e),
            s = {
                label: a,
                id: l,
                active: r === l
            };
        o.push(s)
    }))), {
        textTracks: o,
        activeTextTrackId: r,
        language: null == n ? void 0 : n.language,
        direction: pu(n)
    }
}

function _u(e) {
    const {
        store: t
    } = e, n = ya();
    return Object.keys(n).forEach((e => {
        const i = t.get(`ui.captions.${e}`);
        n[e] = i
    })), n
}

function pu(e) {
    return e ? e.rtl ? su.RTL : su.LTR : null
}

function mu(e) {
    return e ? "" !== e.id ? `${e.id}` : `${e.language}.${e.kind}` : ""
}

function vu(e) {
    var t, n;
    const {
        config: i
    } = e, o = i.video.live_event, r = null == o ? void 0 : o.status, a = !!r, l = null == o || null == (t = o.archive) ? void 0 : t.status, s = hu(r), c = fu(l), d = s.isStarted && xo(o), u = null == o || null == (n = o.ingest) ? void 0 : n.scheduled_start_time, _ = null == o ? void 0 : o.settings.event_schedule;
    return h(h(h({
        isLiveEvent: a,
        isPlayable: d
    }, s), c), {}, {
        dvrEnabled: null == o ? void 0 : o.dvr,
        viewerCount: pt(0),
        liveStatsRequestSucceeded: null,
        isOnline: null,
        liveEventSchedule: u,
        showEventSchedule: _
    })
}

function fu(e) {
    return {
        isArchived: e === Zt
    }
}

function hu(e) {
    return {
        isStarted: e === co.started,
        isEnded: e === co.ended,
        isPending: e === co.pending,
        isActive: e === co.active
    }
}

function gu(e, t) {
    let n;
    return function(i) {
        if (void 0 !== n) return n;
        if (t in window) return n = Promise.resolve(window[t]), n;
        const o = function(e) {
            switch (e.player_url) {
                case "player.vimeo.com":
                    return rn;
                case "master.playerci.vimeows.com":
                case "player-backend-ci.vimeows.com":
                    return "CI";
                case "player2.vimeo.dev":
                    return "DEV";
                default:
                    return
            }
        }(i) === rn ? "https://embedder-sdk.wirewax.com" : "https://embedder-sdk.wirewax.tv";
        return n = Be(`${o}/${e}`, !0).then((() => window[t])), n
    }
}
const Eu = gu("latest/wirewax-embedder-sdk@beta.umd.js", "WIREWAX"),
    bu = gu("latest-create/create-interactive-plugin@beta.umd.js", "CREATE_INTERACTIVE_PLUGIN");

function Cu() {}

function yu(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}

function Tu(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Lu(e, t) {
    const n = yu((function() {
            return function(e, n) {
                try {
                    var a = function() {
                        u("loading");
                        const e = function(e) {
                            const {
                                interactive_id: t,
                                interactive_params: n,
                                create_interactive: i
                            } = e.embed;
                            return i.has_create_interactive ? {
                                vidDataURL: i.viddata_url,
                                metricsClient: new kr(e)
                            } : {
                                vidId: t,
                                interactiveParams: n
                            }
                        }(i);
                        return Tu(function(e) {
                            return e.embed.create_interactive.has_create_interactive ? bu(e) : Eu(e)
                        }(i), (function(n) {
                            const a = n;
                            if (u("loaded"), !l) return s = a(t, e), Tu(s.ready(), (function() {
                                if (u("initialized"), l) return u("destroyed"), void s.destroy();
                                const e = s.getInteractiveData("hotspots"),
                                    t = s.getInteractiveData("polls");
                                o().setInteractive("hotspots", e), o().setInteractive("polls", t), d = function(e) {
                                    const t = () => o().backbone.play(),
                                        n = () => o().backbone.pause(),
                                        i = e => r.fire(zt._interactiveHotspotClicked, e),
                                        a = e => r.fire(zt._interactiveOverlayPanelClicked, e),
                                        l = ({
                                            seekTo: e,
                                            seekType: t
                                        }) => {
                                            r.fire(zt._interactiveSeekCall, {
                                                type: t
                                            }), o().backbone.currentTime = e
                                        },
                                        s = e => {
                                            e.overlayOnDisplay ? (r.fire(zt._overlayOpened, oi.INTERACTIVE), o().setInteractive("active", !0)) : (r.fire(zt._overlayClosed, oi.INTERACTIVE), o().setInteractive("active", !1))
                                        };
                                    return e.on("play", t), e.on("pause", n), e.on("hotspotClick", i), e.on("overlayPanelClick", a), e.on("seeked", l), e.on("toggleOverlay", s), () => {
                                        e.off("play", t), e.off("pause", n), e.off("hotspotClick", i), e.off("overlayPanelClick", a), e.off("seeked", l), e.off("toggleOverlay", s)
                                    }
                                }(s), c = function(e) {
                                    function t() {
                                        _(e), e.play()
                                    }

                                    function n() {
                                        p(), e.pause()
                                    }

                                    function i() {
                                        e.setCurrentTime(o().playback.currentTime)
                                    }

                                    function a() {
                                        e.setEnded(!0), e.setCurrentTime(o().backbone.duration)
                                    }

                                    function l() {
                                        u("destroyed"), e.destroy(), s()
                                    }

                                    function s() {
                                        p(), r.off(E.PLAY, t), r.off(E.PAUSE, n), r.off(E.SEEKED, i), r.off(E.ENDED, a)
                                    }
                                    return r.on(E.PLAY, t), r.on(E.PAUSE, n), r.on(E.SEEKED, i), r.on(E.ENDED, a), r.once(zt._firstTimeUpdate, t), l
                                }(s), i.embed.autoplay && (_(s), s.play())
                            }));
                            u("destroyed")
                        }))
                    }()
                } catch (De) {
                    return n()
                }
                return a && a.then ? a.then(void 0, n) : a
            }(0, (function(e) {
                u("error")
            }))
        })),
        {
            config: i,
            get: o,
            events: r
        } = e;
    let a, l = !1,
        s = null,
        c = null,
        d = null;
    return {
        load: yu((function() {
            if (!l) return function(e, t) {
                return function(e, t, n) {
                    if (n) return t ? t(e()) : e();
                    try {
                        var i = Promise.resolve(e());
                        return t ? i.then(t) : i
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }(e, Cu, t)
            }(n)
        })),
        destroy() {
            l = !0, null == d || d(), null == c || c()
        }
    };

    function u(e) {
        o().setInteractive("embedderStateHistory", o().interactive.embedderStateHistory.concat(e))
    }

    function _(e) {
        cancelAnimationFrame(a), a = requestAnimationFrame((() => {
            e.setCurrentTime(o().backbone.currentTime), _(e)
        }))
    }

    function p() {
        cancelAnimationFrame(a)
    }
}

function Au() {}
const Iu = e => {
    const t = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            return function() {
                var t = function() {
                    if (function() {
                            var e, t, n;
                            return !(null != (e = i()) && null != (e = e.interactive) && e.destroyed) && (null == (t = i()) || null == (t = t.interactive) ? void 0 : t.enabled) && !(null == (n = i().interactive) || !n.instanceId) && !o.browser.ie
                        }()) {
                        const t = Lu(e, i().interactive.instanceId);
                        return s("embedderManager", t),
                            function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(t.load(), (function() {
                                s("ready", !0)
                            }))
                    }
                }();
                if (t && t.then) return t.then(Au)
            }()
        })),
        {
            set: n,
            get: i,
            events: r,
            subscribe: a
        } = e,
        l = Su(e),
        s = (e, t) => {
            n((n => ({
                interactive: h(h({}, n.interactive), {}, {
                    [e]: t
                })
            })))
        },
        c = () => {
            d(), n((() => ({
                interactive: Su(e)
            })))
        };

    function d() {
        var e;
        s("destroyed", !0);
        const t = null == (e = i().interactive) ? void 0 : e.embedderManager;
        t && (t.destroy(), s("embedderManager", null), s("instanceId", null))
    }
    return r.on(zt._configChanged, (e => {
        e && c()
    })), r.on(zt._createInteractiveChanged, c), r.on(jt._destroy, d), a((e => {
        var t;
        return null == e || null == (t = e.interactive) ? void 0 : t.instanceId
    }), t), {
        interactive: l,
        setInteractive: s
    }
};

function Su(e) {
    const {
        config: t
    } = e, {
        interactive: n
    } = t.embed, i = !(null == n || !n.markers);
    return {
        hotspots: [],
        polls: [],
        enabled: !s(n),
        showMarkers: i,
        instanceId: null,
        active: !1,
        embedderManager: null,
        ready: !1,
        destroyed: !1,
        embedderStateHistory: []
    }
}
let Ou = function(e) {
    return e.EMPTY = "empty", e.QOE_SURVEY = "qoe_survey", e.SKIP_TO_LIVE = "skip_to_live", e.BROADCAST_OVER = "broadcast_over", e
}({});
const Pu = [Ou.QOE_SURVEY, Ou.BROADCAST_OVER, Ou.SKIP_TO_LIVE];

function Ru(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Nu = Du((function(e, t) {
        var n;
        const {
            width: i,
            height: r
        } = t().appearance.boundingClientRect;
        let a = Object.assign({}, e);
        if (null != e && e.img_base && (a.imageUrl = function(e, t, n) {
                const {
                    width: i,
                    height: r
                } = Ed(t * o.devicePixelRatio, n * o.devicePixelRatio);
                return bd({
                    baseUrl: e,
                    width: i,
                    height: r
                })
            }(e.img_base, i, r)), (null == a || null == (n = a.videos) ? void 0 : n.length) > 0) {
            const e = t().user.ownerId,
                n = t().user.ownerName,
                o = Math.round(i / a.videos.length),
                l = Math.round(r / a.videos.length);
            a.videos = a.videos.map(function(e, t, n, i) {
                return o => {
                    const {
                        owner: r
                    } = o, a = Object.assign({}, o);
                    return r.id !== e && (a.byline = "from " + t), o.thumbnail_base && (a.thumbnail = bd({
                        baseUrl: o.thumbnail_base,
                        width: n,
                        height: i
                    })), a
                }
            }(e, n, o, l))
        }
        return a
    })),
    wu = function(e, t) {
        return Ru(Nu(e, t), (function(e) {
            return null != e && e.url && (e.url = to(e.url)), null != e && e.url2 && (e.url2 = to(e.url2)), e
        }))
    };

function Du(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}

function ku() {}
const Mu = e => {
    const {
        set: t,
        get: i,
        events: o,
        subscribe: r,
        config: a
    } = e, l = (e, n) => {
        t((t => ({
            outro: h(h({}, t.outro), {}, {
                [e]: n
            })
        })))
    };
    o.on(zt._configChanged, ((e, n) => {
        n.embed.outro !== i().outro.purpose && t((e => ({
            outro: h(h({}, e.outro), {}, {
                outroData: null,
                fetchingOutroData: !1,
                purpose: n.embed.outro
            })
        })))
    })), o.on(jt._showOutro, Du((function(e, t) {
        let n = !1;
        l("purpose", e);
        const o = !(null == t || !t.data);
        return function(r, a) {
            var s = function() {
                if (o) return Ru(wu(t.data, i), (function(t) {
                    l("outroData", t), _(e, t), n = !0
                }))
            }();
            return s && s.then ? s.then(a) : a(s)
        }(0, (function(t) {
            if (n) return t;
            e === i().outro.purpose && i().outro.outroData || u(e)
        }))
    }))), r((e => {
        var t;
        return null == e || null == (t = e.displayList) ? void 0 : t.outro
    }), c), r((e => {
        var t;
        return null == e || null == (t = e.displayList) ? void 0 : t.overlay
    }), c), r((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.currentTime
    }), d), r((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.ended
    }), d), r((e => {
        var t;
        return null == e || null == (t = e.playback) ? void 0 : t.ended
    }), (function(e) {
        e && i().outro.purpose === Cc.BEGINNING && o.fire(jt._reset)
    }));
    const s = function({
        config: e
    }) {
        let {
            outro: t
        } = e.embed;
        return t !== Cc.THREEVIDEOS && t !== Cc.PROMOTED || (t = Cc.VIDEOS), {
            purpose: t,
            active: !1,
            outroData: null,
            fetchingOutroData: !1
        }
    }(e);

    function c() {
        const e = i().displayList.outro && !i().displayList.overlay;
        e !== i().outro.active && l("active", e)
    }

    function d() {
        const e = i().outro.fetchingOutroData,
            t = i().playback.currentTime >= (i().playback.isSegmentedPlaybackEnabled ? i().playback.endTime - i().playback.startTime : i().playback.duration) - 10,
            n = null !== i().outro.outroData,
            o = i().embed.background;
        e || !t || n || o || u(i().outro.purpose)
    }

    function u(e) {
        const t = Du((function() {
            return function(e) {
                if (e && e.then) return e.then(ku)
            }(function(t, n) {
                try {
                    var r = function(e, t) {
                        try {
                            var n = e()
                        } catch (De) {
                            return t(De)
                        }
                        return n && n.then ? n.then(void 0, t) : n
                    }((function() {
                        return l("fetchingOutroData", !0), Ru(T(m, {
                            withCredentials: !0,
                            retry: 3
                        }), (function(t) {
                            return Ru(t.json(), (function(t) {
                                return Ru(wu(t.data, i), (function(t) {
                                    return Ru(function(e) {
                                        const t = function(e) {
                                            var t;
                                            let n = [];
                                            return null != e && e.imageUrl && n.push(e.imageUrl), (null == e || null == (t = e.videos) ? void 0 : t.length) > 0 && n.concat(e.videos.map((e => e.thumbnail))), n
                                        }(e);
                                        return Promise.all(t.map((e => Cd(e))))
                                    }(t), (function() {
                                        o.fire(zt._outroDataReceived, t), l("outroData", t), _(e, t)
                                    }))
                                }))
                            }))
                        }))
                    }), (function(e) {}))
                } catch (De) {
                    return n(!0, De)
                }
                return r && r.then ? r.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, r)
            }(0, (function(e, t) {
                return l("fetchingOutroData", !1),
                    function(e, t) {
                        if (e) throw t;
                        return t
                    }(e, t)
            })))
        }));
        if (i().outro.fetchingOutroData) return;
        const {
            player_url: r
        } = a, {
            id: s,
            unlisted_hash: c
        } = a.video, {
            on_site: d
        } = a.embed, u = `https://${r}/video/${s}/outro`, p = {
            on_site: d ? 1 : 0,
            type: e
        };
        c && (p.h = c);
        const m = n(u, p);
        t()
    }

    function _(e, t) {
        var n;
        [Cc.VIDEOS, Cc.THREEVIDEOS].includes(e) && t.following && (null == (n = i()) || n.setUser("following", !!t.following))
    }
    return {
        outro: s,
        setOutro: l
    }
};
let Vu = function(e) {
    return e.LikedAdded = "liked-added", e.LikeRemoved = "like-removed", e.WatchLaterAdded = "watch-later-added", e.WatchLaterRemoved = "watch-later-removed", e
}({});

function Bu(e) {
    const {
        config: t
    } = e;
    return {
        supportsChromecast: ro(t),
        isChromecastConnected: !1,
        isChromecastPlaying: !1,
        isChromecastBuffering: !1,
        isChromecastReady: xu(),
        receiverFriendlyName: null
    }
}

function xu() {
    return ka.castState !== Ci.NOT_SETUP && ka.castState !== Ci.NO_DEVICES_AVAILABLE
}
const {
    Provider: Uu,
    useStore: Hu,
    useStoreApi: Fu
} = ke(), Gu = ({
    player: e,
    children: t
}) => {
    const [n, i] = Pe(!1);
    return Sc((() => i(!0)), e), n ? De(Uu, {
        createStore: () => Me(xe(((t, n, {
            subscribe: i
        }) => {
            const r = h(h({
                    set: t,
                    get: n,
                    subscribe: i
                }, e), {}, {
                    get backbone() {
                        return e.backbone
                    },
                    get displayContext() {
                        return e.displayContext
                    },
                    get config() {
                        return e.config
                    },
                    get fragmentsHandler() {
                        return e.fragmentsHandler
                    },
                    get startTime() {
                        return e.startTime
                    },
                    set startTime(t) {
                        e.startTime = t
                    },
                    get endTime() {
                        return e.endTime
                    },
                    set endTime(t) {
                        e.endTime = t
                    },
                    get segmentedPlaybackEnabled() {
                        return e.segmentedPlaybackEnabled
                    },
                    get canPlayPictureInPicture() {
                        return e.canPlayPictureInPicture
                    },
                    get parentUrl() {
                        return e.parentUrl
                    },
                    set parentUrl(t) {
                        e.parentUrl = t
                    }
                }),
                {
                    config: l,
                    backbone: s,
                    element: c,
                    expose: d,
                    verifyConfig: u,
                    events: _,
                    updatePhpTokens: p
                } = e,
                m = h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h(h({}, (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = Ns(e);
                    return n.on(zt._debugDataChange, (() => {
                        t((() => ({
                            debug: Ns(e)
                        })))
                    })), {
                        debug: i
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o
                    } = e, r = Fs(e), a = (e, n) => {
                        t((t => ({
                            controlBar: h(h({}, t.controlBar), {}, {
                                [e]: n
                            })
                        })))
                    };

                    function l() {
                        const e = mr(pr.FULL_CONTROLS, n().appearance.playerSizeMode, n().appearance.playerBreakpoint);
                        a("showAllControls", e)
                    }
                    return i.on(zt._configChanged, (() => {
                        t((() => ({
                            controlBar: Fs(e)
                        })))
                    })), i.on(jt._overrideControlbarBehavior, (e => {
                        a("overrideBehavior", e)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.appearance) ? void 0 : t.playerSizeMode
                    }), l), o((e => {
                        var t;
                        return null == e || null == (t = e.appearance) ? void 0 : t.playerBreakpoint
                    }), l), {
                        controlBar: r,
                        setControlBar: a
                    }
                })(r)), Lc(r)), (e => {
                    const {
                        store: t,
                        set: n,
                        events: i,
                        element: o,
                        backbone: r,
                        config: a
                    } = e, l = Ac(e), s = (e, t) => n((n => ({
                        appearance: h(h({}, n.appearance), {}, {
                            [e]: t
                        })
                    })));
                    return t.watch("ui.player.breakpoint", (e => s("playerBreakpoint", e))), t.watch("ui.player.mode", (e => s("playerSizeMode", e))), t.watch("ui.app.breakpoint", (e => s("appBreakpoint", e))), t.watch("ui.app.mode", (e => s("appSizeMode", e))), t.watch("ui.controlbar.isMenuFullWidth", (e => s("isMenuBlockingUI", e))), t.watch("ui.player.isVerticalVideo", (e => {
                        s("isVerticalVideo", e)
                    })), t.watch("ui.controlbar.isMenuVerticalVideoMode", (e => s("isMenuVerticalVideoMode", e))), t.watch("ui.player.width", (() => {
                        s("boundingClientRect", Et(o))
                    })), t.watch("ui.controlbar.doMenuItemsWrap", (e => {
                        s("shouldMenuItemsWrap", e)
                    })), t.watch("ui.player.width", (e => {
                        const {
                            videoHeight: n
                        } = Ic(e, t.get("ui.player.height"), a.video.width, a.video.height);
                        s("videoHeight", n)
                    })), t.watch("ui.player.height", (e => {
                        const {
                            videoHeight: n
                        } = Ic(t.get("ui.player.width"), e, a.video.width, a.video.height);
                        s("videoHeight", n)
                    })), t.watch("ui.container.height", (e => {
                        s("containerHeight", e)
                    })), i.on(zt._willEnterFullscreen, (() => s("fullscreen", !0))), i.on(zt._didExitFullscreen, (e => {
                        n((t => {
                            const n = {
                                fullscreen: !1,
                                forceExitedFullscreen: t.appearance.forceExitedFullscreen
                            };
                            return e || (n.forceExitedFullscreen = !0), {
                                appearance: h(h({}, t.appearance), n)
                            }
                        }))
                    })), i.on(E.WEBKIT_END_FULLSCREEN, (() => {
                        s("fullscreen", !1)
                    })), i.on(zt._airPlayActivated, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                showAirPlayPicker: !0
                            })
                        })))
                    })), i.on(zt._airPlayDeactivated, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                showAirPlayPicker: !1
                            })
                        })))
                    })), i.on(jt._reset, (() => {
                        n((() => ({
                            appearance: Ac(e)
                        })))
                    })), i.on(zt._airPlayActivated, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                externalDisplay: !0
                            })
                        })))
                    })), i.on(zt._airPlayDeactivated, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                externalDisplay: !1
                            })
                        })))
                    })), i.on(E.ENTER_PICTURE_IN_PICTURE, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                pictureInPictureActive: !0
                            })
                        })))
                    })), i.on(E.LEAVE_PICTURE_IN_PICTURE, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                pictureInPictureActive: !1
                            })
                        })))
                    })), i.on(X.WEBVR_ENTER, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                stereoscopicEnabled: !0
                            })
                        })))
                    })), i.on(X.WEBVR_EXIT, (() => {
                        n((e => ({
                            appearance: h(h({}, e.appearance), {}, {
                                stereoscopicEnabled: !1
                            })
                        })))
                    })), i.on(E.LOADED_DATA, (() => {
                        n((t => ({
                            appearance: h(h({}, t.appearance), {}, {
                                isStartTimeThumbLoading: zr(e)
                            })
                        })))
                    })), {
                        appearance: l,
                        setAppearance: (e, t) => {
                            "fullscreen" !== e ? "pictureInPictureActive" !== e ? "showAirPlayPicker" !== e ? ("stereoscopicEnabled" === e && i.fire(zt._stereoscopicButtonPressed), "transcriptNavActive" === e && i.fire(zt._transcriptNavActive, t), s(e, t)) : i.fire(zt._airPlayButtonPressed) : i.fire(r.pictureInPictureActive ? jt._deactivatePictureInPicture : jt._activatePictureInPicture) : i.fire(zt._fullscreenButtonPressed)
                        }
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i,
                        get: o
                    } = e, r = Hd(e);
                    return n.on(zt._configChanged, (() => {
                        t((() => ({
                            embed: Hd(e)
                        })))
                    })), n.on(zt._parentUrlAvailable, (function(e) {
                        e && t((t => ({
                            embed: h(h({}, t.embed), {}, {
                                parentUrl: e
                            })
                        })))
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isArchived
                    }), (i => {
                        var r;
                        const a = Fd(e),
                            l = null == (r = o()) || null == (r = r.embed) ? void 0 : r.transcript;
                        i && a && !l && (n.fire(zt._rightContentAreaEnabled), t((e => ({
                            embed: h(h({}, e.embed), {}, {
                                rightContentAreaEnabled: !0,
                                transcript: !0
                            })
                        }))))
                    })), {
                        embed: r
                    }
                })(r)), Bs(r)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = () => {
                        clearTimeout(Hs), Hs = setTimeout((() => {
                            n((e => ({
                                displayList: h(h({}, e.displayList), {}, {
                                    nudgeNotification: !1
                                })
                            }))), t.fire(zt._nudgeEnded)
                        }), 1050)
                    }, o = e => {
                        i(), n((t => ({
                            displayList: h(h({}, t.displayList), {}, {
                                nudgeNotification: !0
                            }),
                            nudge: e
                        })))
                    };
                    return t.on(zt._showNudgeNotification, (({
                        direction: e,
                        time: t
                    }) => {
                        o({
                            direction: e,
                            time: t
                        })
                    })), {
                        nudge: {
                            direction: null,
                            time: null
                        },
                        setNudge: (e, t) => {
                            i(), n((n => ({
                                nudge: h(h({}, n.nudge), {}, {
                                    [e]: t
                                })
                            })))
                        },
                        setNudgeProperties: o
                    }
                })(r)), (e => {
                    const {
                        events: t,
                        set: n,
                        get: i,
                        backbone: o,
                        subscribe: r,
                        config: a
                    } = e, l = (e, t) => {
                        n((n => ({
                            playback: h(h({}, n.playback), {}, {
                                [e]: t
                            })
                        })))
                    }, s = jd(e);
                    return t.on(jt._reset, (() => {
                        n((() => ({
                            playback: jd(e)
                        })))
                    })), t.on(zt._configChanged, (t => {
                        t && n((() => ({
                            playback: jd(e)
                        })))
                    })), t.on(A, (() => l("playInitiated", !0))), t.once(zt._firstTimeUpdate, (() => l("hasFirstTimeUpdate", !0))), t.on(E.PLAY, (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                scrubbing: !1,
                                scrubbingByFrame: !1,
                                paused: !1,
                                playInitiated: !0,
                                ended: !1
                            })
                        })))
                    })), t.on(zt._playButtonPressed, (() => l("paused", !1))), t.on([E.PAUSE, zt._paused, zt._pauseButtonPressed], (() => l("paused", !0))), t.on(zt._targetTimeReached, (() => l("targetTimeReached", !0))), t.on(P.BUFFER_STARTED, (() => l("buffering", !0))), t.on(P.BUFFER_ENDED, (() => l("buffering", !1))), t.on(zt._scrubbingStarted, (e => {
                        l("scrubbing", !0), "keyboard" === (null == e ? void 0 : e.seekType) && null != e && e.isFrameByFrame && l("scrubbingByFrame", !0)
                    })), t.on(zt._scrubbingEnded, (() => {
                        l("scrubbing", !1), l("scrubbingByFrame", !1)
                    })), t.on(jt._setTime, (e => {
                        n((t => {
                            const n = t.liveEvent.dvrEnabled ? t.playback.liveTailTime : 0,
                                i = t.liveEvent.dvrEnabled ? t.playback.liveEdgeTime : t.playback.duration,
                                o = yt(e, n, i);
                            return {
                                playback: h(h({}, t.playback), {}, {
                                    currentTime: o
                                })
                            }
                        }))
                    })), t.on(E.TIME_UPDATE, (({
                        currentTime: t,
                        timeProgress: i,
                        liveEdgeTime: o,
                        atLiveEdge: r,
                        liveTailTime: a,
                        atLiveTail: l
                    }) => {
                        n((n => {
                            const s = Math.min(St(100 * i), 100);
                            t = t || n.playback.duration * s || 0;
                            const c = zd(e);
                            return {
                                playback: h(h({}, n.playback), {}, {
                                    currentTime: t,
                                    liveEdgeTime: o,
                                    atLiveEdge: r,
                                    liveTailTime: a,
                                    atLiveTail: l,
                                    playbackRates: c
                                })
                            }
                        }))
                    })), t.on(zt._ended, (() => {
                        const e = i().liveEvent.dvrEnabled && !i().playback.atLiveEdge,
                            t = i().liveEvent.dvrEnabled && i().playback.atLiveEdge;
                        e || n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                ended: !0,
                                currentTime: t ? 0 : e.playback.currentFragment.duration
                            })
                        })))
                    })), t.on(E.PROGRESS, (({
                        loaded: e
                    }) => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                loadedTime: e
                            })
                        })))
                    })), t.on([zt._fragmentChanged, E.DURATION_CHANGE], (() => {
                        const t = i().playback.currentFragment;
                        if (!Ve(t, e.fragmentsHandler.currentFragment)) {
                            const t = Qd(e.config);
                            n((n => ({
                                playback: h(h({}, n.playback), {}, {
                                    hasFragments: t,
                                    currentFragment: e.fragmentsHandler.currentFragment
                                })
                            })))
                        }
                    })), t.on(E.LOADED_METADATA, (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                loadedMetadata: !0
                            })
                        })))
                    })), t.on(E.LOADED_DATA, (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                loadedData: !0
                            })
                        })))
                    })), t.on([P.STREAM_CHANGE, W], (e => {
                        const t = {
                            currentQuality: Xd(o.qualities, e)
                        };
                        i().liveEvent.isLiveEvent && Object.assign(t, {
                            qualities: o.qualities
                        }), n((e => ({
                            playback: h(h({}, e.playback), t)
                        })))
                    })), t.on(zt._qualityChanged, (e => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                qualities: o.qualities,
                                currentQuality: Xd(o.qualities, e)
                            })
                        })))
                    })), t.on(P.AUDIO_TRACK_CHANGED, (() => l("audioTracks", o.audioTracks))), t.once(x, (() => l("canPlayPictureInPicture", e.canPlayPictureInPicture))), t.on(zt._airPlayAvailable, (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                supportsAirPlay: !0
                            })
                        })))
                    })), t.on(zt._airPlayNotAvailable, (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                supportsAirPlay: !1
                            })
                        })))
                    })), t.on(zt._playbackRateChanged, (() => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                playbackRates: zd(e)
                            })
                        })))
                    })), t.on(zt._volumeChanged, (e => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                volume: e,
                                muted: o.muted
                            })
                        })))
                    })), t.on(zt._mutedChanged, (e => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                muted: e
                            })
                        })))
                    })), t.on(P.AVAILABLE_STREAMS_CHANGED, (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                qualities: o.qualities,
                                currentQuality: Xd(o.qualities)
                            })
                        })))
                    })), t.on([zt._adClicked, zt._adPaused, zt._adComplete, zt._adError, zt._adSkipped, zt._allAdsCompleted], (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                isAdPlaying: !1
                            })
                        })))
                    })), t.on([zt._adStarted, zt._adResumed], (() => {
                        n((e => ({
                            playback: h(h({}, e.playback), {}, {
                                isAdPlaying: !0
                            })
                        })))
                    })), t.on([zt._startTimeUpdated, zt._endTimeUpdated], (() => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                isSegmentedPlaybackEnabled: e.segmentedPlaybackEnabled,
                                startTime: e.startTime,
                                endTime: e.endTime
                            })
                        })))
                    })), t.on(j.LATENCY_UPDATED, (function() {
                        n((e => e.playback.paused || e.playback.buffering ? e.playback.scrubbing ? Ms : {
                            playback: h(h({}, e.playback), Jd(o))
                        } : Ms))
                    })), t.on(P.SCANNER_CHANGE, (function() {
                        n((e => ({
                            playback: h(h({}, e.playback), Jd(o))
                        })))
                    })), r((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                    }), (e => !e && i().liveEvent.dvrEnabled && !i().liveEvent.isArchived && wr(gr.DVR_MODE_ENTERED, a))), r((e => {
                        var t;
                        return null == e || null == (t = e.embed) ? void 0 : t.pip
                    }), (() => {
                        n((t => ({
                            playback: h(h({}, t.playback), {}, {
                                canPlayPictureInPicture: e.canPlayPictureInPicture
                            })
                        })))
                    })), {
                        playback: s,
                        clearSegment: () => {
                            e.startTime = null, e.endTime = null
                        },
                        setPlayback: (e, r, a) => {
                            if ("paused" !== e) {
                                if ("qualities" === e) return t.fire(jt._changeQuality, r), void n((e => {
                                    const t = Kn(e.playback.qualities, r);
                                    return {
                                        playback: h(h({}, e.playback), {}, {
                                            qualities: t,
                                            currentQuality: Xd(t)
                                        })
                                    }
                                }));
                                if ("playbackRates" === e) return t.fire(jt._changePlaybackRate, r), void n((e => {
                                    const t = Kn(e.playback.playbackRates, r);
                                    return {
                                        playback: h(h({}, e.playback), {}, {
                                            playbackRates: t
                                        })
                                    }
                                }));
                                if ("scrubbing" !== e)
                                    if ("currentTime" !== e)
                                        if ("volume" !== e)
                                            if ("muted" !== e)
                                                if ("audioTracks" !== e) l(e, r);
                                                else {
                                                    const e = o.audioTracks.find((e => e.id === `${r}`));
                                                    e && (o.enableAudioTrack(e), t.fire(jt._changeAudioTrack, e))
                                                }
                                else t.fire(jt._changeMuted, r);
                                else t.fire(jt._changeVolume, r);
                                else switch (null == a ? void 0 : a.seekType) {
                                    case "interactive-marker":
                                        t.fire(jt._seek, r), t.fire(zt._playButtonPressed), t.fire(zt._interactiveMarkerClicked, {
                                            type: "interactive-marker",
                                            action: null == a ? void 0 : a.action
                                        });
                                        break;
                                    case "nudge":
                                        t.fire(zt._nudgeAttempted), t.fire(jt._seek, r), i().playback.playInitiated || t.fire(zt._playButtonPressed);
                                        break;
                                    default:
                                        t.fire(jt._seek, r)
                                } else r ? t.fire(zt._scrubbingStarted) : t.fire(zt._scrubbingEnded)
                            } else !1 === r ? t.fire(zt._playButtonPressed) : t.fire(zt._pauseButtonPressed)
                        }
                    }
                })(r)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = (e, t) => {
                        n((n => ({
                            user: h(h({}, n.user), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return t.on(zt._liked, (() => i("liked", !0))), t.on(zt._unliked, (() => i("liked", !1))), t.on(zt._addedToWatchLater, (() => i("watchLater", !0))), t.on(zt._removedFromWatchLater, (() => i("watchLater", !1))), t.on(zt._configChanged, ((e, t) => {
                        n((() => ({
                            user: tu({
                                config: t
                            })
                        })))
                    })), t.on(zt._userLoggedIn, (() => {
                        n((() => ({
                            user: tu(e)
                        })))
                    })), t.on(zt._unfollowed, (() => i("following", !1))), t.on(zt._followed, (() => i("following", !0))), {
                        user: tu(e),
                        setUser: (n, o) => {
                            if ("collected" !== n)
                                if ("shared" !== n) i(n, o);
                                else {
                                    const {
                                        share: n
                                    } = e.config.embed.settings, i = null != n && n.embed_only ? zt._embedButtonPressed : zt._shareButtonPressed;
                                    t.fire(i)
                                }
                            else t.fire(zt._collectionsButtonPressed)
                        }
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o
                    } = e, r = iu(e);

                    function a(e) {
                        e && n().vod.vodButtonVisible ? t((e => ({
                            vod: h(h({}, e.vod), {}, {
                                vodButtonVisible: !1
                            })
                        }))) : e || !n().vod.isVOD || n().vod.vodButtonVisible || t((e => ({
                            vod: h(h({}, e.vod), {}, {
                                vodButtonVisible: !0
                            })
                        })))
                    }
                    return o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.fullPlayerElement
                    }), (e => {
                        a(e)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.ad
                    }), (e => a(e))), i.on(zt._configChanged, ((n, i) => {
                        t((() => ({
                            vod: iu(h(h({}, e), {}, {
                                config: i
                            }))
                        })))
                    })), {
                        vod: r,
                        setVod: (e, n) => {
                            t((t => ({
                                vod: h(h({}, t.vod), {}, {
                                    [e]: n
                                })
                            })))
                        }
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i
                    } = e, r = Qs(e);
                    let a = null;
                    const l = (e, i) => {
                        if ("purpose" !== e) t((t => ({
                            overlay: h(h({}, t.overlay), {}, {
                                [e]: i
                            })
                        })));
                        else {
                            const e = n().overlay.purpose === i ? oi.EMPTY : i;
                            t((t => ({
                                overlay: h(h({}, t.overlay), {}, {
                                    purpose: e
                                })
                            })))
                        }
                    };
                    return i.on(zt._overlayOpened, ((e, t) => {
                        t || (n().overlay.purpose === e ? i.fire(zt._overlayClosed) : l("purpose", e))
                    })), i.on(zt._overlayClosed, (() => {
                        a = null, l("purpose", oi.EMPTY)
                    })), i.on(jt._showOverlay, ((e, t, o) => {
                        o || (e === oi.SPATIAL_REDIRECT && l("spatialRedirectContext", t), n().displayList.accessGate || i.fire(zt._overlayOpened, e))
                    })), i.on(zt._error, ((e, t) => {
                        Zs(a, e, t) && (a = e, l("purpose", oi.ERROR))
                    })), i.on(zt._assetUrlsRefreshed, (() => {
                        a === kn.NETWORK && (a = null, l("purpose", oi.EMPTY))
                    })), o.stereoscopic && i.on(zt._showAndroidVRDeepLink, (() => {
                        l("spatialRedirectContext", "headset"), l("purpose", oi.SPATIAL_REDIRECT)
                    })), {
                        overlay: r,
                        setOverlay: (e, t) => {
                            ("purpose" !== e || Js(t)) && ("purpose" === e && t === oi.EMPTY || t === oi.INTERACTIVE ? i.fire(zt._overlayClosed) : ("purpose" === e && Js(t) && (i.fire(jt._showOverlay, t, {}, !0), i.fire(zt._overlayOpened, t, !0)), l(e, t)))
                        }
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i
                    } = e, o = xs(e);
                    return n.on(zt._configChanged, ((n, i) => {
                        t((() => ({
                            title: xs(h(h({}, e), {}, {
                                config: i
                            }))
                        })))
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                    }), (n => {
                        let i = Yi(Bt, e.config);
                        n && (i = Ji(i, e.startTime, e.endTime)), t((e => ({
                            title: h(h({}, e.title), {}, {
                                titleLinkUrl: i
                            })
                        })))
                    })), {
                        title: o
                    }
                })(r)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = ru(e);
                    return t.on(zt._configChanged, ((e, t) => {
                        n((() => ({
                            badge: ru({
                                config: t
                            })
                        })))
                    })), {
                        badge: i,
                        setBadge: (e, i) => {
                            "id" !== e ? ((e, t) => {
                                n((n => ({
                                    badge: h(h({}, n.badge), {}, {
                                        [e]: t
                                    })
                                })))
                            })(e, i) : t.fire(zt._badgePressed, i)
                        }
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        events: n
                    } = e, i = (e, n) => {
                        t((t => ({
                            chapters: h(h({}, t.chapters), {}, {
                                [e]: n
                            })
                        })))
                    }, o = au(e), r = ({
                        backbone: e
                    }) => {
                        if (e.chaptersTrack) {
                            const t = () => n.fire(zt._chapterChanged, null == e ? void 0 : e.currentChapterID);
                            e.chaptersTrack.addEventListener("cuechange", t)
                        }
                    };
                    return r(e), n.on(zt._chapterChanged, (e => {
                        t((t => ({
                            chapters: h(h({}, t.chapters), {}, {
                                activeCueId: e
                            })
                        })))
                    })), n.on(P.CHAPTER_CUES_UPDATED, (() => i("chapters", lu(e)))), n.on(zt._configChanged, (() => {
                        t((() => ({
                            chapters: au(e)
                        }))), r(e)
                    })), {
                        chapters: o,
                        setChapters: i
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        backbone: o
                    } = e, r = ya(), l = e => {
                        var i;
                        const r = uu(o.textTracks, null == (i = n()) || null == (i = i.liveEvent) ? void 0 : i.isLiveEvent, e);
                        t((e => ({
                            captions: h(h({}, e.captions), r)
                        })))
                    }, s = du(e);
                    return i.on(zt._captionsChanged, (e => {
                        l(e)
                    })), i.on(P.TEXT_TRACKS_AVAILABLE, (() => {
                        l()
                    })), i.on(zt._configChanged, (() => {
                        t((() => ({
                            captions: du(e)
                        })))
                    })), i.on(V, ((e, n = []) => {
                        o.enabledTextTrack && "disabled" !== (null == e ? void 0 : e.mode) && t((e => ({
                            captions: h(h({}, e.captions), {}, {
                                activeCues: a(n)
                            })
                        })))
                    })), i.on(jt._turnCaptionsOff, (() => {
                        t((e => ({
                            captions: h(h({}, e.captions), {}, {
                                activeCues: []
                            })
                        })))
                    })), {
                        captions: s,
                        setCaptions: (n, o) => {
                            if ("activeTextTrackId" === n) return "off" !== o && o ? void i.fire(jt._turnCaptionsOn, o) : void i.fire(jt._turnCaptionsOff);
                            if (Ri.hasOwnProperty(n)) {
                                const a = r[n];
                                return i.fire(jt._changeCaptionsStyles, a, o), void t((t => ({
                                    captions: h(h({}, t.captions), _u(e))
                                })))
                            }((e, n) => {
                                t((t => ({
                                    captions: h(h({}, t.captions), {}, {
                                        [e]: n
                                    })
                                })))
                            })(n, o)
                        },
                        resetCaptionsStyles: () => {
                            i.fire(jt._resetCaptionsStyles), t((t => ({
                                captions: h(h({}, t.captions), _u(e))
                            })))
                        }
                    }
                })(r)), (e => {
                    const {
                        events: t,
                        set: n,
                        subscribe: i
                    } = e, r = vu(e), a = (e, t) => {
                        n((n => ({
                            liveEvent: h(h({}, n.liveEvent), {}, {
                                [e]: t
                            })
                        })))
                    };
                    t.on(zt._configChanged, (() => {
                        n((() => ({
                            liveEvent: vu(e)
                        })))
                    }));
                    const {
                        EVENT_ACTIVE: l,
                        EVENT_PENDING: s,
                        EVENT_STARTED: c,
                        EVENT_ENDED: d
                    } = j, u = {
                        [l]: co.active,
                        [s]: co.pending,
                        [c]: co.started,
                        [d]: co.ended
                    };
                    Object.keys(u).forEach((e => t.on(e, (() => n((t => ({
                        liveEvent: h(h({}, t.liveEvent), hu(u[e]))
                    })))))));
                    const {
                        ARCHIVE_STARTED: _,
                        ARCHIVE_DONE: p,
                        ARCHIVE_ERROR: m
                    } = j, v = {
                        [_]: so.started,
                        [p]: so.done,
                        [m]: so.error
                    };
                    return Object.keys(v).forEach((e => t.on(e, (() => n((t => ({
                        liveEvent: h(h({}, t.liveEvent), fu(v[e]))
                    }))))))), t.on(j.LIVE_STATS_SUCCESS, (({
                        viewerCount: e
                    }) => {
                        n((t => ({
                            liveEvent: h(h({}, t.liveEvent), {}, {
                                viewerCount: pt(e),
                                liveStatsRequestSucceeded: !0
                            })
                        })))
                    })), t.on(j.LIVE_STATS_FAILURE, (() => {
                        a("liveStatsRequestSucceeded", !1)
                    })), t.on(j.STREAM_ONLINE, (() => {
                        a("isOnline", !0)
                    })), t.on(j.STREAM_OFFLINE, (() => {
                        a("isOnline", !1), o.iOS && de.element && (t.fire(zt._willExitFullscreen), de.exit())
                    })), t.on(zt._liveEventSafeToPlay, (() => {
                        a("isPlayable", !0)
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isStarted
                    }), (e => !e && a("isPlayable", !1))), {
                        liveEvent: r,
                        setLiveEvent: a
                    }
                })(r)), Iu(r)), (e => {
                    const {
                        set: t,
                        events: n,
                        config: i
                    } = e;
                    return n.on(zt._configChanged, (() => {
                        t((() => ({
                            cuePoints: {
                                cuePoints: []
                            }
                        })))
                    })), i.embed.on_site && (n.on(zt._cuePointAdded, (e => {
                        t((t => {
                            const n = t.cuePoints.cuePoints.concat(e);
                            return {
                                cuePoints: h(h({}, t.cuePoints), {}, {
                                    cuePoints: n
                                })
                            }
                        }))
                    })), n.on(zt._cuePointRemoved, (e => {
                        t((t => {
                            const n = t.cuePoints.cuePoints.filter((t => t.id !== e.id));
                            return {
                                cuePoints: h(h({}, t.cuePoints), {}, {
                                    cuePoints: n
                                })
                            }
                        }))
                    }))), {
                        cuePoints: {
                            cuePoints: []
                        },
                        setCuePoints: (e, n) => {
                            t((t => ({
                                cuePoints: h(h({}, t.cuePoints), {}, {
                                    [e]: n
                                })
                            })))
                        }
                    }
                })(r)), (e => {
                    const {
                        set: t,
                        get: n,
                        events: i,
                        subscribe: o,
                        element: r,
                        config: a
                    } = e, l = {
                        purpose: Ou.EMPTY
                    };
                    let s = function(e) {
                        const {
                            request: t,
                            video: n,
                            embed: i
                        } = e.config, {
                            qoe_survey_forced: o,
                            ott: r
                        } = t.flags, {
                            qoe_survey_vote: a
                        } = t.cookie, {
                            duration: l,
                            live_event: s
                        } = n;
                        return !(!o && (l < 60 && !s || !ai(i) || r || li(7776e6) < a / 1e3 || !(Math.random() < .005)))
                    }(e);
                    const c = (e, i) => {
                            ai(a.embed) && No({
                                newPriority: i,
                                currentPriority: n().toast.purpose,
                                priorityOrder: Pu
                            }) && t((t => ({
                                toast: h(h({}, t.toast), {}, {
                                    [e]: i
                                })
                            })))
                        },
                        d = () => {
                            s && No({
                                newPriority: Ou.QOE_SURVEY,
                                currentPriority: n().toast.purpose,
                                priorityOrder: Pu
                            }) && (e => {
                                if (!e) return !1;
                                const t = e.getBoundingClientRect(),
                                    n = t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth),
                                    i = "visible" === document.visibilityState;
                                return n && i
                            })(r) && (c("purpose", Ou.QOE_SURVEY), i.fire(zt._qoeSurveyPresented), s = !1)
                        };

                    function u() {
                        t((e => {
                            const {
                                liveEvent: t,
                                toast: n,
                                playback: i,
                                displayList: o
                            } = e;
                            return t.dvrEnabled && n.purpose !== Ou.SKIP_TO_LIVE ? i.atLiveEdge ? Ms : t.isPlayable ? i.paused && !i.scrubbing ? Ms : o.controlBar ? {
                                toast: {
                                    purpose: Ou.SKIP_TO_LIVE
                                }
                            } : Ms : Ms : Ms
                        }))
                    }

                    function _() {
                        t((e => e.toast.purpose !== Ou.SKIP_TO_LIVE ? Ms : {
                            toast: {
                                purpose: Ou.EMPTY
                            }
                        }))
                    }
                    return o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.playInitiated
                    }), (e => {
                        var t, i;
                        const o = function(e, t) {
                            return t ? 6e5 : Math.round(.4 * e * 1e3)
                        }(null == (t = n()) || null == (t = t.playback) ? void 0 : t.duration, null == (i = n()) || null == (i = i.liveEvent) ? void 0 : i.isLiveEvent);
                        e && o && setTimeout(d, o)
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.atLiveEdge
                    }), (e => {
                        e ? _() : u()
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                    }), (e => e && void t((e => e.liveEvent.dvrEnabled && e.liveEvent.isEnded ? {
                        toast: {
                            purpose: Ou.BROADCAST_OVER
                        }
                    } : Ms)))), o((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.paused
                    }), (e => {
                        n().liveEvent.isEnded || n().playback.scrubbing || (e ? _() : u())
                    })), o((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                    }), (e => e ? u() : _())), {
                        toast: l,
                        setToast: c,
                        closeToast: () => {
                            c("purpose", Ou.EMPTY)
                        }
                    }
                })(r)), (e => {
                    const {
                        get: t,
                        set: n,
                        subscribe: i,
                        config: r,
                        backbone: a
                    } = e, l = Ys(e), s = (e, i) => {
                        ai(r.embed) && No({
                            newPriority: i,
                            currentPriority: t().topCenterActionItem.purpose,
                            priorityOrder: Ws
                        }) && n((t => ({
                            topCenterActionItem: h(h({}, t.topCenterActionItem), {}, {
                                [e]: i
                            })
                        })))
                    }, c = e => {
                        e && t().topCenterActionItem.purpose !== e || s("purpose", Gs.EMPTY)
                    }, d = () => c(Gs.UNMUTE), u = () => s("purpose", Gs.WATCH_FULL_VIDEO), _ = () => c(Gs.WATCH_FULL_VIDEO);
                    return i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.loadedData
                    }), (e => {
                        if (!e) return;
                        const n = t(),
                            i = n.embed.autoPlay || n.liveEvent.isLiveEvent,
                            o = 0 === n.playback.volume || n.playback.muted,
                            r = ai(n.embed),
                            l = a.hasAudio || n.liveEvent.isLiveEvent;
                        o && i && r && l && n.embed.unmuteButton && s("purpose", Gs.UNMUTE)
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.volume
                    }), (e => e > 0 && d())), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.muted
                    }), (e => !e && d())), i((e => {
                        var t;
                        return null == e || null == (t = e.liveEvent) ? void 0 : t.isEnded
                    }), (e => e && d())), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.isSegmentedPlaybackEnabled
                    }), (() => {
                        $s(t()) ? u() : _()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.controlBar
                    }), (() => {
                        $s(t()) ? u() : _()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.outro
                    }), (() => {
                        $s(t()) ? u() : _()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.paused
                    }), (() => {
                        $s(t()) ? u() : _()
                    })), i((e => {
                        var t;
                        return null == e || null == (t = e.playback) ? void 0 : t.hasFirstTimeUpdate
                    }), (e => {
                        if (r.video.spatial && e) {
                            const e = t().embed.cards;
                            if ((null == e ? void 0 : e.length) && e[0].timecode < 15) return;
                            setTimeout((() => {
                                s("purpose", Gs.SPATIAL_INSTRUCTIONS_CLICK), setTimeout((() => c()), 3e3)
                            }), 7e3), o.android || setTimeout((() => {
                                s("purpose", Gs.SPATIAL_INSTRUCTIONS_ARROWS), setTimeout((() => c()), 3e3)
                            }), 14e3)
                        }
                    })), {
                        topCenterActionItem: l,
                        setTopCenterActionItem: s,
                        closeTopCenterActionItem: c
                    }
                })(r)), (e => {
                    const {
                        events: t,
                        set: n
                    } = e, i = (e, t) => {
                        n((n => ({
                            spatial: h(h({}, n.spatial), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return t.on(X.WEBVR_ENTER, (() => {
                        i("webVRActive", !0)
                    })), t.on(X.WEBVR_EXIT, (() => {
                        i("webVRActive", !1)
                    })), t.on(X.CAMERA_UPDATE, (e => {
                        n((t => ({
                            spatial: h(h({}, t.spatial), {}, {
                                latitude: e.pitch,
                                longitude: e.yaw
                            })
                        })))
                    })), {
                        spatial: function(e) {
                            const {
                                spatial: t
                            } = e.config.video;
                            return {
                                webVRActive: !1,
                                longitude: 0,
                                latitude: 0,
                                fieldOfView: t ? t.fov : 0
                            }
                        }(e),
                        setSpatial: i
                    }
                })(r)), Mu(r)), (e => {
                    const {
                        set: t,
                        events: n,
                        subscribe: i,
                        get: o
                    } = e, r = (e, n) => {
                        t((t => ({
                            alert: h(h({}, t.alert), {}, {
                                [e]: n
                            })
                        })))
                    }, a = e => {
                        t((t => {
                            const n = t.embed.background;
                            return t.displayList.overlay || n ? Ms : {
                                alert: h(h({}, t.alert), {}, {
                                    currentAlert: e
                                })
                            }
                        }))
                    };
                    return n.on(Mt._spatialUnsupported, (() => a(ec.SPATIAL_UNSUPPORTED))), n.on(Mt._spatialFailure, (() => a(ec.SPATIAL_FAILURE))), i((e => {
                        var t;
                        return null == e || null == (t = e.displayList) ? void 0 : t.overlay
                    }), (e => {
                        e && o().alert.currentAlert !== ec.EMPTY && r("currentAlert", ec.EMPTY)
                    })), {
                        alert: {
                            currentAlert: ec.EMPTY
                        },
                        setAlert: r
                    }
                })(r)), (e => {
                    const {
                        get: t,
                        set: n,
                        events: i
                    } = e, o = (e, t) => {
                        n((n => ({
                            notification: h(h({}, n.notification), {}, {
                                [e]: t
                            })
                        })))
                    };
                    return i.on([zt._notificationHidden, jt._reset], (() => o("currentNotification", null))), i.on([zt._liked, zt._unliked], (() => {
                        const e = t().user.liked;
                        o("currentNotification", e ? Vu.LikedAdded : Vu.LikeRemoved)
                    })), i.on([zt._addedToWatchLater, zt._removedFromWatchLater], (() => {
                        const e = t().user.watchLater;
                        o("currentNotification", e ? Vu.WatchLaterAdded : Vu.WatchLaterRemoved)
                    })), {
                        notification: {
                            currentNotification: null
                        },
                        setNotification: o
                    }
                })(r)), (e => {
                    const {
                        set: t
                    } = e, n = (e, n) => {
                        t((t => ({
                            chromecast: h(h({}, t.chromecast), {}, {
                                [e]: n
                            })
                        })))
                    }, i = Bu(e);
                    return ka.on([Na.initialized, Na.castStateChanged], (() => {
                        n("isChromecastReady", xu())
                    })), ka.on(Na.buffering, (() => {
                        n("isChromecastBuffering", !0)
                    })), ka.on(Na.error, (() => {
                        n("supportsChromecast", !1)
                    })), ka.on(Na.connected, (e => {
                        t((t => {
                            var n;
                            return {
                                chromecast: h(h({}, t.chromecast), {}, {
                                    isChromecastConnected: !0,
                                    receiverFriendlyName: null == e || null == (n = e.receiver) ? void 0 : n.friendlyName
                                })
                            }
                        }))
                    })), ka.on(Na.disconnected, (() => {
                        t((() => ({
                            chromecast: Bu(e)
                        })))
                    })), ka.on(Na.playing, (() => {
                        t((e => ({
                            chromecast: h(h({}, e.chromecast), {}, {
                                isChromecastPlaying: !0,
                                isChromecastBuffering: !1
                            })
                        })))
                    })), ka.on([Na.error, Na.idle, Na.paused, Na.ended, Na.disconnected], (() => {
                        t((e => ({
                            chromecast: h(h({}, e.chromecast), {}, {
                                isChromecastPlaying: !1,
                                isChromecastBuffering: !1
                            })
                        })))
                    })), {
                        chromecast: i
                    }
                })(r)), {}, {
                    config: l,
                    backbone: s,
                    element: c,
                    name: (null == d ? void 0 : d.name) || yi.VimeoPlayer,
                    verifyConfig: u,
                    events: _,
                    subscribe: i,
                    updatePhpTokens: p
                });
            return _.fire(zt._eventedStoreCreated, m), m
        }))),
        children: t
    }) : null
}, Wu = e => `opacity ${e}ms ease-out`, Yu = ({
    children: e,
    visible: t,
    duration: n = 250,
    styleOverrides: i = {},
    onFaded: o,
    delay: r = 0,
    fadeIn: a = !0,
    fadeOut: l = !0
}) => {
    const s = Hu((e => e.embed.background || !e.embed.controls || e.displayList.accessGate)),
        c = Wu(n),
        d = {
            enter: {
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: c,
                transitionDelay: `${r}ms`
            },
            enterDone: {
                opacity: 1
            },
            exit: {
                opacity: 1
            },
            exitActive: {
                opacity: 0,
                transition: c,
                transitionDelay: `${r}ms`
            },
            exitDone: s ? {
                display: "none"
            } : {
                overflow: "hidden",
                opacity: 0,
                pointerEvents: "none"
            }
        };
    return Object.keys(i).forEach((e => {
        e in d && Object.assign(d[e], i[e])
    })), a || delete d.enter, l || delete d.exit, De(Ue, { in: t,
        duration: n,
        styles: d,
        alwaysMounted: !0,
        onExited: () => {
            o && o()
        },
        children: e
    })
};
const $u = ({
    children: e,
    text: t
}) => {
    const n = Re(t),
        [i, r] = Pe(!1),
        [a, l] = Pe(!1),
        s = () => {
            a || l(!0)
        },
        c = () => {
            i && (s(), r(!1))
        },
        d = () => {
            i || o.touch || (s(), r(!0))
        },
        u = Ne((() => {
            a && l(!1)
        }), [a]),
        _ = {
            className: "LabeledButton_module_box__2e0341f7",
            onMouseEnter: d,
            onMouseLeave: c,
            onFocus: d,
            onBlur: c
        },
        p = h({
            className: "LabeledButton_module_labeledButton__2e0341f7"
        }, xn((t => {
            c(), e.props.onClick && e.props.onClick(t)
        }))),
        m = `${Wu(Us)} transform 250 ease-out`,
        v = {
            visible: i,
            styleOverrides: {
                enterActive: {
                    transform: "translateX(0)",
                    transition: m
                },
                exitActive: {
                    transform: "translateX(5px)",
                    transition: m
                }
            }
        };
    return n.current !== t && (a ? v.onFaded = u : n.current = t), De("div", h(h({}, _), {}, {
        children: [De(Yu, h(h({}, v), {}, {
            children: De("label", h(h({}, p), {}, {
                role: "presentation",
                "aria-hidden": "true",
                children: De("span", {
                    children: n.current
                })
            }))
        })), e]
    }))
};
const Ku = ["href", "children", "element", "className", "targetBlank"],
    qu = He(((e, t) => {
        let {
            href: n,
            children: i,
            element: o = "div",
            className: r = "",
            targetBlank: a = !0
        } = e, l = v(e, Ku);
        const s = Fe(o, h(h({}, l), {}, {
            className: r
        }), i);
        return n ? De("a", h(h(h({
            href: n,
            className: $n("Link_module_link__13523a65", r),
            ref: t,
            "aria-describedby": Ln.NEW_WINDOW_DESCRIPTION
        }, a ? {
            target: "_blank",
            rel: "noopener"
        } : {}), l), {}, {
            children: i
        })) : s
    })),
    ju = ["direction"],
    zu = ["fill"],
    Xu = {
        [td.CLOSE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [td.AIRPLAY]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                "data-airplay-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"
                })
            }))
        },
        [td.DOLBY_VISION]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 844 126",
                "aria-labelledby": "dv-logo-title"
            }, t), {}, {
                children: [De("title", {
                    id: "dv-logo-title",
                    children: "Dolby Vision"
                }), De("path", {
                    d: "M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })]
            }))
        },
        [td.PIP]: e => {
            let {
                direction: t = "enter"
            } = e, n = v(e, ju);
            return De("svg", h(h({
                className: yn.PIP_ICON,
                viewBox: "0 0 16 12"
            }, n), {}, {
                children: [De("polygon", {
                    className: yn.FILL,
                    points: "6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"
                }), De("rect", {
                    className: yn.FILL,
                    x: "7",
                    y: "7",
                    width: "9",
                    height: "5"
                }), De("polyline", {
                    className: yn.FILL,
                    transform: "enter" === t ? "translate(4, 4) rotate(180) translate(-4, -4)" : "",
                    points: "5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"
                })]
            }))
        },
        [td.ENTER_FULLSCREEN]: () => De("svg", {
            className: Tn.ENTER_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-enter-fullscreen": !0,
            children: De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"
            })
        }),
        [td.EXIT_FULLSCREEN]: () => De("svg", {
            className: Tn.EXIT_FULLSCREEN_ICON,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            "data-exit-fullscreen": !0,
            children: [De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"
            }), De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"
            }), De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"
            }), De("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"
            })]
        }),
        [td.GEAR]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"
                })
            }))
        },
        [td.VIMEO]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "54",
                height: "18",
                viewBox: "0 0 54 18",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"
                })
            }))
        },
        [td.VIMEO_SMALL]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"
                })
            }))
        },
        [td.ENTER_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                "data-enter-pip": !0,
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",
                    fill: "white"
                })
            }))
        },
        [td.EXIT_PICTURE_IN_PICTURE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-exit-pip": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"
                })
            }))
        },
        [td.PAUSE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-pause-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: yn.FILL,
                    d: "M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"
                })
            }))
        },
        [td.PLAY]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                "data-play-icon": !0
            }, t), {}, {
                children: De("path", {
                    d: "M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",
                    className: yn.FILL
                })
            }))
        },
        [td.REPLAY]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    className: yn.FILL,
                    d: "M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"
                })
            }))
        },
        [td.CHAPTERS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"
                })
            }))
        },
        [td.POINT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("circle", {
                    className: yn.FILL,
                    cx: "4",
                    cy: "4",
                    r: "4"
                })
            }))
        },
        [td.CC]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24",
                "data-cc-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"
                })
            }))
        },
        [td.CC_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24",
                "data-cc-filled-icon": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"
                })
            }))
        },
        [td.CHECKMARK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",
                    fill: "white"
                })
            }))
        },
        [td.STEREOSCOPIC]: () => De("svg", {
            viewBox: "0 0 64 64",
            children: De("path", {
                d: "M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"
            })
        }),
        [td.PERSON_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fill: "white",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"
                })
            }))
        },
        [td.CHEVRON_DOWN]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.CHEVRON_RIGHT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.CLOCK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"
                })
            }))
        },
        [td.CLOCK_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"
                })
            }))
        },
        [td.COLLECTIONS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.DISMISS_X]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
                    fill: "#1A2E3B",
                    fillRule: "evenodd"
                })
            }))
        },
        [td.HEART]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.HEART_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.HEART_WIDER_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 110 81"
            }, t), {}, {
                children: De("path", {
                    d: "M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.HEART_WIDER_BROKEN_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 110 81"
            }, t), {}, {
                children: De("path", {
                    d: "M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.ONDEMAND]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: De("path", {
                    d: "M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.PAPER_PLANE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 18.1 20.95"
            }, t), {}, {
                children: De("path", {
                    d: "M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.POP_OUT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 20 20"
            }, t), {}, {
                children: [De("path", {
                    d: "M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",
                    fill: "#1a2e3b"
                }), De("path", {
                    d: "M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",
                    fill: "#1a2e3b"
                })]
            }))
        },
        [td.VOLUME_OFF_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
                })
            }))
        },
        [td.VOLUME_ON_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"
                })
            }))
        },
        [td.FAST_FORWARD]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
                })
            }))
        },
        [td.INFO_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",
                    fill: "white"
                })
            }))
        },
        [td.TRANSCRIPT_ON]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"
                })
            }))
        },
        [td.TRANSCRIPT_OFF]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"
                })
            }))
        },
        [td.SEARCH]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    className: yn.FILL,
                    d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"
                })
            }))
        },
        [td.CHEVRON_UP]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",
                    fill: "#1a2e3b"
                })
            }))
        },
        [td.CLOSE_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",
                    fill: "#fff",
                    fillRule: "evenodd"
                })
            }))
        },
        [td.SPINNER]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 48 48",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-spinner": !0
            }, t), {}, {
                children: [De("circle", {
                    "data-spinner-trace": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                }), De("circle", {
                    "data-spinner-circle": !0,
                    cx: "24",
                    cy: "24",
                    r: "22",
                    stroke: "white"
                })]
            }))
        },
        [td.SLIDERS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"
                })
            }))
        },
        [td.SWITCH_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                    fill: "white"
                })
            }))
        },
        [td.SWITCH_CONTAINER]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "32",
                height: "16",
                viewBox: "0 0 32 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                "data-toggle-container": !0
            }, t), {}, {
                children: De("rect", {
                    width: "32",
                    height: "16",
                    rx: "8",
                    fill: "#2F8363"
                })
            }))
        },
        [td.WARN_CIRCLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
                    fill: "white"
                })
            }))
        },
        [td.THUMBS_UP]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",
                    fill: "white"
                })
            }))
        },
        [td.THUMBS_DOWN]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",
                    fill: "white"
                })
            }))
        },
        [td.THUMBS_UP_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",
                    fill: "white"
                })
            }))
        },
        [td.THUMBS_DOWN_FILLED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",
                    fill: "white"
                })
            }))
        },
        [td.LINK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    className: yn.FILL,
                    d: "M11.2929 8.46447C10.9024 8.07395 10.9024 7.44078 11.2929 7.05026L13.4142 4.92894C14.9763 3.36684 17.509 3.36684 19.0711 4.92894C20.6332 6.49103 20.6332 9.02369 19.0711 10.5858L16.9498 12.7071C16.5593 13.0976 15.9261 13.0976 15.5356 12.7071C15.145 12.3166 15.145 11.6834 15.5356 11.2929L17.6569 9.17158C18.4379 8.39053 18.4379 7.1242 17.6569 6.34315C16.8758 5.5621 15.6095 5.5621 14.8285 6.34315L12.7071 8.46447C12.3166 8.85499 11.6834 8.85499 11.2929 8.46447ZM8.46443 11.2929C8.07391 10.9024 7.44074 10.9024 7.05022 11.2929L4.9289 13.4142C3.3668 14.9763 3.3668 17.509 4.9289 19.0711C6.49099 20.6332 9.02365 20.6332 10.5858 19.0711L12.7071 16.9497C13.0976 16.5592 13.0976 15.9261 12.7071 15.5355C12.3165 15.145 11.6834 15.145 11.2929 15.5355L9.17154 17.6569C8.39049 18.4379 7.12416 18.4379 6.34311 17.6569C5.56206 16.8758 5.56206 15.6095 6.34311 14.8284L8.46443 12.7071C8.85495 12.3166 8.85495 11.6834 8.46443 11.2929ZM9.87874 12.7071C9.48821 13.0976 9.48821 13.7308 9.87874 14.1213C10.2693 14.5118 10.9024 14.5118 11.293 14.1213L14.1214 11.2929C14.5119 10.9024 14.5119 10.2692 14.1214 9.87868C13.7309 9.48816 13.0977 9.48816 12.7072 9.87868L9.87874 12.7071Z"
                })
            }))
        },
        [td.SPARKLE_TWO_STARS_FILLED]: e => {
            let {
                fill: t
            } = e, n = v(e, zu);
            const i = {};
            return t && (i.fill = t), De("svg", h(h({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none"
            }, n), {}, {
                children: [De("path", {
                    style: i,
                    "data-shape": "smallStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 20.861 4.11 L 21.903 4.472 L 21.899 4.474 C 22.105 4.546 22.214 4.771 22.144 4.978 C 22.105 5.095 22.013 5.186 21.896 5.224 L 20.859 5.585 C 20.401 5.745 20.047 6.099 19.887 6.557 L 19.526 7.599 C 19.452 7.806 19.225 7.914 19.018 7.842 C 18.901 7.802 18.811 7.709 18.774 7.592 L 18.414 6.555 C 18.257 6.099 17.899 5.741 17.443 5.583 L 16.4 5.222 C 16.112 5.121 16.041 4.746 16.272 4.546 C 16.314 4.511 16.362 4.484 16.414 4.468 L 17.445 4.11 C 17.902 3.951 18.255 3.597 18.415 3.139 L 18.779 2.097 C 18.877 1.809 19.25 1.736 19.45 1.965 C 19.486 2.005 19.513 2.053 19.529 2.104 L 19.889 3.139 C 20.048 3.597 20.402 3.951 20.86 4.11 L 20.861 4.11 Z"
                }), De("path", {
                    style: i,
                    "data-shape": "largeStar",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M 15.732 10.906 L 18.352 11.817 L 18.354 11.815 C 18.734 11.949 18.935 12.364 18.804 12.745 C 18.73 12.96 18.56 13.127 18.344 13.197 L 15.732 14.107 C 14.507 14.528 13.545 15.49 13.122 16.714 L 12.212 19.336 C 12.077 19.712 11.669 19.912 11.289 19.789 C 11.069 19.718 10.897 19.545 10.828 19.324 L 9.922 16.716 C 9.499 15.492 8.538 14.531 7.314 14.108 L 4.697 13.2 C 4.165 13.02 4.027 12.331 4.449 11.96 C 4.521 11.897 4.606 11.848 4.697 11.817 L 7.314 10.907 C 8.538 10.485 9.5 9.524 9.922 8.3 L 10.832 5.677 C 10.894 5.495 11.026 5.346 11.198 5.262 C 11.594 5.068 12.069 5.265 12.213 5.681 L 13.123 8.3 C 13.545 9.524 14.508 10.486 15.732 10.907 L 15.732 10.906 Z"
                })]
            }))
        },
        [td.WARN_TRIANGLE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "36",
                height: "32.326",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "287.915 380.297 36 32.326"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "white",
                    d: "M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"
                })
            }))
        },
        [td.VERTICAL_ELLIPSIS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "4",
                height: "19",
                viewBox: "0 0 4 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    d: "M2 4.5C2.39556 4.5 2.78224 4.3827 3.11114 4.16294C3.44004 3.94318 3.69639 3.63082 3.84776 3.26537C3.99914 2.89992 4.03874 2.49778 3.96157 2.10982C3.8844 1.72186 3.69392 1.36549 3.41421 1.08579C3.13451 0.806082 2.77814 0.615601 2.39018 0.53843C2.00222 0.46126 1.60009 0.500867 1.23463 0.652242C0.869182 0.803617 0.556825 1.05996 0.337062 1.38886C0.117299 1.71776 1.07779e-06 2.10444 1.07779e-06 2.5C1.07779e-06 3.03043 0.210715 3.53914 0.585788 3.91421C0.960861 4.28929 1.46957 4.5 2 4.5ZM2 14.5C1.60444 14.5 1.21776 14.6173 0.888861 14.8371C0.559963 15.0568 0.303617 15.3692 0.152242 15.7346C0.000866562 16.1001 -0.0387401 16.5022 0.0384303 16.8902C0.115601 17.2781 0.306083 17.6345 0.585788 17.9142C0.865493 18.1939 1.22186 18.3844 1.60982 18.4616C1.99778 18.5387 2.39992 18.4991 2.76537 18.3478C3.13082 18.1964 3.44318 17.94 3.66294 17.6111C3.8827 17.2822 4 16.8956 4 16.5C4 15.9696 3.78929 15.4609 3.41421 15.0858C3.03914 14.7107 2.53043 14.5 2 14.5ZM2 7.5C1.60444 7.5 1.21776 7.6173 0.888861 7.83706C0.559963 8.05682 0.303617 8.36918 0.152242 8.73463C0.000866562 9.10009 -0.0387401 9.50222 0.0384303 9.89018C0.115601 10.2781 0.306083 10.6345 0.585788 10.9142C0.865493 11.1939 1.22186 11.3844 1.60982 11.4616C1.99778 11.5387 2.39992 11.4991 2.76537 11.3478C3.13082 11.1964 3.44318 10.94 3.66294 10.6111C3.8827 10.2822 4 9.89556 4 9.5C4 8.96957 3.78929 8.46086 3.41421 8.08579C3.03914 7.71071 2.53043 7.5 2 7.5Z"
                })
            }))
        },
        [td.PLUS_SYMBOL]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMidYMid"
            }, t), {}, {
                children: De("path", {
                    d: "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                })
            }))
        },
        [td.FACEBOOK]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 64 64"
            }, t), {}, {
                children: De("path", {
                    d: "M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"
                })
            }))
        },
        [td.TUMBLR]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 12 20"
            }, t), {}, {
                children: De("path", {
                    d: "M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"
                })
            }))
        },
        [td.EMAIL]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 72 72"
            }, t), {}, {
                children: [De("path", {
                    d: "M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"
                }), De("path", {
                    d: "M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"
                }), De("path", {
                    d: "M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"
                }), De("path", {
                    d: "M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"
                })]
            }))
        },
        [td.EMBED]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 55 48"
            }, t), {}, {
                children: [De("polygon", {
                    points: "16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"
                }), De("polygon", {
                    points: "42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"
                }), De("polygon", {
                    points: "24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"
                })]
            }))
        },
        [td.PREVIOUS]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 27 48",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    d: "M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"
                })
            }))
        },
        [td.TWITTER]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                viewBox: "0 0 24 24"
            }, t), {}, {
                children: De("path", {
                    d: "M17.751 3h3.067l-6.7 7.658L22 21.078h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L2 3h6.328l4.37 5.777L17.75 3Zm-1.076 16.243h1.7L7.404 4.739H5.58l11.094 14.504Z"
                })
            }))
        },
        [td.VOD]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "21",
                height: "23",
                viewBox: "0 0 21 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z",
                    fill: "white"
                })
            }))
        },
        [td.VOD_DOWNLOAD]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z",
                    fill: "white"
                }), De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z",
                    fill: "white"
                })]
            }))
        },
        [td.VOD_RENT]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z",
                    fill: "white"
                }), De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z",
                    fill: "white"
                })]
            }))
        },
        [td.VOD_SUBSCRIBE]: e => {
            let t = Object.assign({}, (Ge(e), e));
            return De("svg", h(h({
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), {}, {
                children: [De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z",
                    fill: "white"
                }), De("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13 20v-8l8 4",
                    fill: "white"
                })]
            }))
        }
    },
    Zu = ["name", "className"],
    Qu = e => {
        let {
            name: t,
            className: n
        } = e, i = v(e, Zu);
        const o = Xu[t];
        return o && De(o, h({
            className: n
        }, i))
    };
const Ju = He((({
        isMenuDisplayed: e,
        isMenuBlockingUI: t,
        setMenuDisplayed: n = hi,
        panel: i,
        buttonRef: o,
        progressBarAndButtonsRef: r,
        panelContent: a,
        headerContent: l,
        toggleKey: s,
        className: c,
        id: d,
        type: u,
        resizeDependencies: _,
        ariaLabel: p,
        onBack: m = hi
    }, v) => {
        const f = Re(null);
        v = v || f;
        const g = Re(null),
            E = Re(null),
            b = Re(null),
            C = Re(null),
            [y, T] = Pe({
                height: "auto"
            }),
            [L, A] = Pe({}),
            [I, S] = Pe(!1),
            [O, P] = Pe(!1),
            R = Hu((e => e.appearance.isMenuBlockingUI));
        t = void 0 === t ? R : t;
        const w = Hu((e => e.appearance.isMenuVerticalVideoMode)),
            D = Hu((e => e.appearance.boundingClientRect)),
            k = Hu((e => e.appearance.playerBreakpoint)),
            M = Hu((e => e.displayList.controlBar)),
            {
                isAccordionToggling: V
            } = We(e_),
            {
                onFocus: B,
                focusFirstItem: x
            } = (({
                parentRef: e,
                isActive: t,
                toggleKey: n,
                onEscape: i = hi,
                onToggle: o = hi,
                onBack: r = hi
            }) => {
                const a = Ne((t => {
                        zc(e.current) && (t.preventDefault(), Xc(e.current, "prev"))
                    }), [e]),
                    l = Ne((t => {
                        zc(e.current) && (t.preventDefault(), Xc(e.current, "next"))
                    }), [e]),
                    s = Ne((t => {
                        if (zc(e.current)) {
                            const e = t.target,
                                n = e.getAttribute("aria-haspopup"),
                                i = e.getAttribute("aria-expanded");
                            "true" === n && "true" === i ? e.click() : r(t)
                        }
                    }), [e, r]),
                    c = Ne((t => {
                        if (zc(e.current)) {
                            const e = t.target,
                                n = e.getAttribute("aria-haspopup"),
                                i = e.getAttribute("aria-expanded");
                            "true" === n && "false" === i && e.click()
                        }
                    }), [e]);
                return Qc({
                    parentRef: e,
                    isActive: t,
                    toggleKey: n,
                    onEscape: i,
                    onToggle: o,
                    customKeyHandlers: {
                        ArrowUp: a,
                        ArrowDown: l,
                        ArrowLeft: s,
                        ArrowRight: c
                    }
                })
            })({
                parentRef: E,
                isActive: e,
                toggleKey: s,
                onEscape: () => {
                    n(!1)
                },
                onToggle: e => {
                    n(e)
                },
                onBack: m
            });
        Oe((() => {
            e && x()
        }), [i]);
        const U = e => {
                const t = window.getComputedStyle(e);
                return parseFloat(t.fontSize)
            },
            H = () => {
                S(!1), cancelAnimationFrame(null == C ? void 0 : C.current)
            },
            F = () => {
                var n;
                if (!(null == (n = v) ? void 0 : n.current) || !e) return;
                if (t) return P(!1), void T((e => h(h({}, e), {}, {
                    height: "100%"
                })));
                let i = "auto";
                const o = Et(v.current),
                    r = U(v.current),
                    a = o.bottom - v.current.scrollHeight,
                    l = Math.max(D.top, 0) - a;
                if (l > 0) {
                    let e = v.current.scrollHeight - l - r;
                    i = e / r + "em"
                }
                T((e => h(h({}, e), {}, {
                    height: i
                }))), P(l > 0)
            },
            G = () => {
                if (null == E || !E.current) return;
                if (t) return void A({});
                if (!e) return void A({
                    height: "0"
                });
                const n = U(E.current),
                    i = (E.current.scrollHeight + 16) / n + "em";
                A({
                    height: i
                })
            },
            W = () => {
                F(), I && (C.current = requestAnimationFrame(W))
            },
            Y = () => {
                H(), G(), F()
            },
            $ = N((i => {
                var r;
                null != (r = v) && r.current && null != o && o.current && e && (o.current.contains(i.target) || v.current.contains(i.target) || !document.contains(i.target) || t || n(!1))
            }), 200),
            K = N((() => {
                t || n(!1)
            }), 200);
        Oe((() => (document.addEventListener("click", $, !1), window.addEventListener("blur", K, !1), () => {
            document.removeEventListener("click", $, !1), window.removeEventListener("blur", K, !1)
        })), [v, o, e]), Oe((() => ((() => {
            var n;
            const i = (null == (n = v) ? void 0 : n.current) && (null == o ? void 0 : o.current) && (null == r ? void 0 : r.current) && e,
                a = w && k === or.XXS && (null == D ? void 0 : D.width);
            if (!i) return;
            if (t) return void T((e => h(h({}, e), {}, {
                right: ""
            })));
            if (a) {
                const e = D.width - 16 + "px";
                return void T((t => h(h({}, t), {}, {
                    width: e,
                    right: ""
                })))
            }
            const l = Et(o.current),
                s = Et(v.current.parentElement),
                c = Et(r.current),
                d = Et(v.current);
            let u = -8 - c.right + s.right;
            const _ = l.right - l.width / 2 + d.width / 2 + 8;
            _ < c.right && (u = s.right - _);
            const p = U(v.current);
            T((e => h(h({}, e), {}, {
                right: u / p + "em"
            })))
        })(), !e || t ? Y() : (G(), S(!0), W()), () => {
            H()
        })), [e, i, null == D ? void 0 : D.width, t, k, _]), Oe((() => {
            M || n(!1)
        }), [M]), Oe((() => {
            null != g && g.current && (V ? t ? F() : (A((e => h(h({}, e), {}, {
                height: "auto"
            }))), S(!0), W()) : t ? (S(!1), Y()) : (G(), W()))
        }), [V]);
        const q = $n(yn.VP_MENU, "Menu_module_menu__3018d705", c, O && "Menu_module_scroll__3018d705", t && "Menu_module_fullWidth__3018d705", w && "Menu_module_verticalVideo__3018d705");
        return De(Yu, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: De("div", {
                id: d,
                className: q,
                ref: v,
                style: y,
                onTransitionEnd: e => {
                    e.target === (null == g ? void 0 : g.current) && "height" === e.propertyName && (F(), H())
                },
                onFocus: B,
                "data-menu": u || !0,
                children: [l && De("div", {
                    ref: b,
                    children: l
                }), De("div", {
                    ref: g,
                    className: "Menu_module_menuBody__3018d705",
                    style: L,
                    children: De("div", {
                        className: "Menu_module_menuPanel__3018d705",
                        ref: E,
                        role: "menu",
                        "aria-label": p,
                        children: a
                    })
                })]
            })
        })
    })),
    e_ = Ye({
        isAccordionToggling: !1,
        activeAccordion: "",
        setAccordionToggling: () => {},
        setActiveAccordion: () => {}
    }),
    t_ = ({
        children: e
    }) => {
        const [t, n] = Pe(!1), [i, o] = Pe(""), r = {
            isAccordionToggling: t,
            activeAccordion: i,
            setAccordionToggling: n,
            setActiveAccordion: o
        };
        return De(e_.Provider, {
            value: r,
            children: e
        })
    };
const n_ = ({
    buffer: e = !1
}) => De("div", {
    className: "Divider_module_divider__74e2aa5b " + (e ? "Divider_module_buffer__74e2aa5b" : "")
});
const i_ = ({
    onBack: e = null,
    title: t,
    isMenuBlockingUI: n,
    setMenuDisplayed: i = hi,
    hasCloseButton: o = !0,
    onClose: r = () => i(!1),
    size: a = cr.MD
}) => {
    var l;
    const s = Hu((e => e.appearance.isMenuBlockingUI));
    n = null !== (l = n) && void 0 !== l ? l : s;
    const c = $n("MenuHeader_module_menuHeader__c10a9277", n && "MenuHeader_module_fullWidth__c10a9277", e && "MenuHeader_module_hasBack__c10a9277", !o && "MenuHeader_module_hideCloseButton__c10a9277");
    return De("div", {
        className: c,
        children: [De("header", {
            className: "MenuHeader_module_header__c10a9277",
            children: [De("div", {
                className: "MenuHeader_module_backButtonWrapper__c10a9277",
                children: De(R_, {
                    className: "MenuHeader_module_backButton__c10a9277",
                    onClick: e,
                    "aria-label": "Back",
                    color: ar.ALTERNATIVE,
                    icon: De(Qu, {
                        name: td.CHEVRON_RIGHT
                    }),
                    iconSize: rr.MD
                })
            }), De(T_, {
                size: a,
                className: "MenuHeader_module_title__c10a9277",
                color: ur.WHITE,
                element: "h1",
                children: t
            }), De("div", {
                className: "MenuHeader_module_closeButtonWrapper__c10a9277",
                children: De(R_, {
                    className: "MenuHeader_module_closeButton__c10a9277",
                    "aria-label": "Close menu",
                    onClick: r,
                    color: ar.ALTERNATIVE,
                    icon: De(Qu, {
                        name: td.DISMISS_X
                    }),
                    iconSize: rr.MD
                })
            })]
        }), De(n_, {})]
    })
};
const o_ = ["className", "id", "active", "withActive", "onSelect", "onMouseEnter", "onMouseLeave", "element", "styled", "children", "role"],
    r_ = e => {
        let {
            className: t,
            id: n,
            active: i,
            withActive: o = !0,
            onSelect: r,
            onMouseEnter: a,
            onMouseLeave: l,
            element: s = "div",
            styled: c = !0,
            children: d,
            role: u = "menuitemradio"
        } = e, _ = v(e, o_);
        const {
            onClick: p,
            onKeyDown: m
        } = Oc(r), f = $n("MenuOption_module_option__828f05b2", o && "MenuOption_module_withActive__828f05b2", c && "MenuOption_module_styled__828f05b2", t), g = h({
            className: f,
            role: u,
            "aria-checked": i,
            "aria-selected": i,
            "data-id": n,
            "data-menu-option": !0,
            tabIndex: 0,
            onClick: p,
            onKeyDown: m,
            onMouseDown: e => e.preventDefault(),
            onMouseEnter: a,
            onMouseLeave: l
        }, _);
        return Fe(s, g, d)
    };
const a_ = ({
    className: e,
    onSelect: t,
    label: n,
    value: i,
    id: o,
    isAccordion: r = !1,
    hasPopup: a = !1,
    isOpened: l = !1,
    size: s = wc.MEDIUM,
    role: c = "menuitem"
}) => {
    let d, u = cr.MD;
    s === wc.LARGE ? (u = cr.LG, d = cr.MD) : r && (u = cr.SM);
    const _ = {};
    return a && Object.assign(_, {
        "aria-haspopup": "true",
        "aria-expanded": l
    }), De(r_, h(h({
        className: $n("MenuItem_module_optionButton__14a7084a", s === wc.SMALL && "MenuItem_module_small__14a7084a", e),
        onSelect: t,
        id: o,
        withActive: !1,
        role: c,
        "data-menu-item": !0
    }, _), {}, {
        children: [De(T_, {
            size: u,
            weight: r ? dr.BOLD : dr.NORMAL,
            className: "MenuItem_module_label__14a7084a",
            color: ur.WHITE,
            children: n
        }), i && De(T_, {
            weight: dr.NORMAL,
            size: d,
            className: "MenuItem_module_value__14a7084a",
            color: ur.WHITE,
            children: i
        }), De("div", {
            className: $n("MenuItem_module_icon__14a7084a", l && "MenuItem_module_open__14a7084a"),
            children: De(Qu, {
                name: r ? td.CHEVRON_DOWN : td.CHEVRON_RIGHT
            })
        })]
    }))
};
const l_ = cr.MD,
    s_ = cr.SM,
    c_ = ({
        onSelect: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i,
        active: o,
        id: r,
        ordered: a = !1,
        index: l,
        isAccordion: s = !1,
        tabIndex: c,
        icon: d = null,
        role: u = "menuitemradio",
        hidden: _
    }) => {
        const p = $n("MenuOptionListItem_module_listItem__2a2a4b59", a && "MenuOptionListItem_module_ordered__2a2a4b59", o && "MenuOptionListItem_module_active__2a2a4b59", s && "MenuOptionListItem_module_accordion__2a2a4b59");
        return De(r_, {
            className: p,
            onSelect: e,
            onMouseEnter: t,
            onMouseLeave: n,
            active: o,
            id: r,
            tabIndex: c,
            role: u,
            hidden: _,
            children: [d && De("div", {
                className: "MenuOptionListItem_module_icon__2a2a4b59",
                children: De(Qu, {
                    name: d
                })
            }), a && !d && De("div", {
                className: "MenuOptionListItem_module_number__2a2a4b59",
                children: l
            }), !a && !d && De("div", {
                className: "MenuOptionListItem_module_check__2a2a4b59 " + (o ? "MenuOptionListItem_module_activeCheck__2a2a4b59" : ""),
                children: De(Qu, {
                    name: td.CHECKMARK
                })
            }), De(T_, {
                className: "MenuOptionListItem_module_text__2a2a4b59",
                weight: dr.NORMAL,
                size: s ? s_ : l_,
                color: ur.WHITE,
                children: i
            }), a && o && De("div", {
                className: "MenuOptionListItem_module_point__2a2a4b59",
                children: De(Qu, {
                    name: td.POINT
                })
            })]
        })
    },
    d_ = ({
        items: e,
        onSelect: t,
        onMenuOptionMouseEnter: n,
        onMenuOptionMouseLeave: i,
        ordered: o = !1,
        isAccordion: r = !1,
        listItemTabIndex: a = 0,
        hidden: l,
        itemComponent: s
    }) => {
        const c = e.map((e => {
            const c = {
                key: e.id,
                id: e.id,
                active: e.active,
                label: e.label,
                onSelect: t,
                onMouseEnter: n,
                onMouseLeave: i,
                ordered: o,
                isAccordion: r,
                tabIndex: a,
                icon: e.icon,
                hidden: l
            };
            return s ? s(h(h({}, c), e)) : De(c_, h({}, c))
        }));
        return De($e, {
            children: c
        })
    };
const u_ = ({
    id: e,
    label: t,
    items: n = [],
    onSelect: i
}) => {
    var o;
    const r = Re(null),
        a = Re(null),
        {
            setAccordionToggling: l,
            activeAccordion: s,
            setActiveAccordion: c
        } = We(e_),
        [d, u] = Pe(!1),
        [_, p] = Pe({}),
        m = null == (o = n.find((e => e.active))) ? void 0 : o.label,
        v = (e = void 0) => {
            const n = void 0 !== e ? e : !d;
            u(n), l(!0), n && c(t)
        },
        f = e => {
            e.target === a.current && "height" === e.propertyName && l(!1)
        },
        h = e => {
            null != r && r.current && !r.current.contains(e.target) && r.current !== e.target && v(!1)
        };
    return Oe((() => (document.addEventListener("click", h), document.addEventListener("transitionend", f), () => {
        c(""), document.removeEventListener("click", h), document.removeEventListener("transitionend", f)
    })), []), Oe((() => {
        p((() => {
            let e = {};
            if (d && null != a && a.current) {
                const t = window.getComputedStyle(a.current),
                    n = parseFloat(t.fontSize);
                e = {
                    height: a.current.scrollHeight / n + "em"
                }
            }
            return e
        })())
    }), [d, a]), Oe((() => {
        s && s !== t && v(!1)
    }), [s]), n.length && De("div", {
        className: "Accordion_module_accordion__2cb96b8e",
        role: "group",
        ref: r,
        "aria-controls": e,
        children: [De(a_, {
            label: t,
            value: m,
            onSelect: () => v(),
            isAccordion: !0,
            hasPopup: !0,
            isOpened: d,
            role: "button"
        }), De("div", {
            className: "Accordion_module_content__2cb96b8e",
            "aria-hidden": !d,
            ref: a,
            style: _,
            role: "menu",
            id: e,
            "aria-label": t,
            children: De(d_, {
                items: n,
                onSelect: i,
                isAccordion: !0,
                listItemTabIndex: d ? 0 : -1,
                hidden: !d || void 0
            })
        })]
    })
};
const __ = ({
        id: e,
        label: t,
        className: n = ""
    }) => De("div", {
        className: `MenuFieldLabel_module_menuField__832e2f60 ${n}`,
        "aria-hidden": !0,
        children: De(T_, {
            id: e,
            className: "MenuFieldLabel_module_label__832e2f60",
            color: ur.WHITE,
            children: t
        })
    }),
    p_ = ({
        labelId: e,
        items: t = [],
        label: n,
        onSelect: i
    }) => {
        const o = Hu((e => e.appearance.shouldMenuItemsWrap));
        return De($e, {
            children: [De(__, {
                label: n,
                id: e
            }), De("ul", {
                className: "ButtonRow_module_buttonRow__ed961dd7 " + (o ? "ButtonRow_module_wrap__ed961dd7" : ""),
                role: "radiogroup",
                "aria-labelledby": e,
                children: t.map((e => De(r_, {
                    element: "li",
                    className: "ButtonRow_module_filledButton__ed961dd7 " + (e.active ? "ButtonRow_module_active__ed961dd7" : ""),
                    active: e.active,
                    id: e.id,
                    onSelect: i,
                    styled: !1,
                    role: "radio",
                    children: De(T_, {
                        className: "ButtonRow_module_label__ed961dd7",
                        color: ur.WHITE,
                        children: e.label
                    })
                }, e.id)))
            })]
        })
    };
const m_ = ({
    labelId: e,
    items: t = [],
    label: n,
    onSelect: i
}) => {
    const o = Hu((e => e.appearance.shouldMenuItemsWrap));
    return De($e, {
        children: [De(__, {
            label: n,
            id: e
        }), De("ul", {
            className: "ColorSwabs_module_colorSwabs__ee1dd808 " + (o ? "ColorSwabs_module_wrap__ee1dd808" : ""),
            role: "radiogroup",
            "aria-labelledby": e,
            children: t.map((e => De(r_, {
                id: e.id,
                element: "li",
                className: "ColorSwabs_module_colorSwab__ee1dd808 " + (e.active ? "ColorSwabs_module_active__ee1dd808" : ""),
                active: e.active,
                "aria-label": e.label,
                onSelect: i,
                styled: !1,
                role: "radio",
                children: De("div", {
                    className: "ColorSwabs_module_inner__ee1dd808",
                    style: {
                        backgroundColor: e.id
                    }
                })
            }, e.id)))
        })]
    })
};
let v_ = function(e) {
    return e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e
}({});
const f_ = {
        onPointerDown: e => e.preventDefault()
    },
    h_ = ({
        children: t,
        tooltipContent: n,
        className: i = "",
        containerEl: r,
        position: a,
        margin: l,
        visible: s = null,
        preventFocusOnClick: c = !1,
        id: d = null,
        animating: u = !1
    }) => {
        var _, p, m;
        const [v, f] = Pe(!1), g = () => f(!0), E = () => f(!1), b = null !== s, C = s || v, y = g_("onPointerEnter", t, (e => {
            "mouse" === e.pointerType && g()
        })), T = g_("onPointerLeave", t, E), L = g_("onFocus", t, (() => {
            o.touch && !document.body.classList.contains(yn.SHOWFOCUS) || g()
        })), A = g_("onBlur", t, E);
        Bc("Escape", E);
        let I = null == t ? void 0 : t.ref;
        const S = Re(null);
        I = I || S;
        const O = Re(null),
            P = $n("Tooltip_module_tooltipContainer__d9b61844", null == t || null == (_ = t.props) ? void 0 : _.className, b && s && "Tooltip_module_forceVisible__d9b61844"),
            R = h(h({}, null == t ? void 0 : t.props), {}, {
                className: P,
                ref: I,
                onPointerEnter: y,
                onPointerLeave: T,
                onFocus: L,
                onBlur: A,
                "aria-labelledby": null != d ? d : null,
                "data-touch-device": o.touch.toString()
            });
        c && Object.assign(R, f_);
        const N = (({
                tooltipEl: e,
                wrappedEl: t,
                visible: n,
                containerEl: i,
                position: o = v_.TOP,
                margin: r = 0,
                animating: a = !1
            }) => {
                const l = Re(null),
                    [s, c] = Pe({
                        top: null,
                        bottom: null,
                        left: o === v_.LEFT ? "auto" : "50%",
                        right: o === v_.LEFT ? `calc(100% + ${r}px)` : "auto"
                    }),
                    d = Hu((e => e.element)),
                    u = Ne((() => {
                        const i = {};
                        if (e && t && n) {
                            const {
                                left: n,
                                right: a
                            } = d.getBoundingClientRect(), {
                                left: l,
                                right: s,
                                width: c
                            } = t.getBoundingClientRect(), {
                                width: u
                            } = e.getBoundingClientRect();
                            if (o === v_.TOP || o === v_.BOTTOM) {
                                const e = (u - c) / 2,
                                    t = l - e,
                                    o = s + e,
                                    d = Math.max(n + r - t, 0),
                                    _ = Math.max(o + r - a, 0);
                                Object.assign(i, {
                                    left: `calc(50% + ${d-_}px)`
                                })
                            }
                        }
                        return i
                    }), [r, d, o, e, n, t]),
                    _ = Ne((() => {
                        const t = {};
                        if (e && i && n) {
                            const {
                                bottom: e
                            } = i.getBoundingClientRect(), {
                                top: n
                            } = d.getBoundingClientRect();
                            if (o === v_.BOTTOM) {
                                const i = e - n - r;
                                isNaN(i) || Object.assign(t, {
                                    top: `${i}px`
                                })
                            }
                        }
                        return t
                    }), [i, r, d, o, e, n]),
                    p = Ne((() => {
                        c((e => {
                            const t = h(h(h({}, e), u()), _());
                            return Ve(t, e) ? e : t
                        }))
                    }), [u, _]);
                return Oe((() => (a ? function e() {
                    p(), l.current = requestAnimationFrame(e)
                }() : (cancelAnimationFrame(l.current), p()), () => {
                    cancelAnimationFrame(l.current)
                })), [a, p]), s
            })({
                tooltipEl: null == O ? void 0 : O.current,
                wrappedEl: null == (p = I) ? void 0 : p.current,
                containerEl: null == r ? void 0 : r.current,
                position: a,
                margin: l,
                visible: b && s || v,
                animating: u
            }),
            w = $n("Tooltip_module_tooltip__d9b61844", yn.VP_TOOLTIP, i, a === v_.LEFT && "Tooltip_module_tooltipLeft__d9b61844"),
            D = De(Yu, {
                visible: C,
                children: De("span", {
                    id: d,
                    ref: O,
                    style: N,
                    className: w,
                    "aria-hidden": "true",
                    children: n
                })
            }),
            k = Ke(null == t || null == (m = t.props) ? void 0 : m.children),
            M = [D].concat(e(k));
        return qe(t, R, M)
    };

function g_(e, t, n) {
    return i => {
        var o;
        null != t && null != (o = t.props) && o[e] && t.props[e](i), n(i)
    }
}
var E_ = {
    text: "Text_module_text__705900fc",
    sm: "Text_module_sm__705900fc",
    md: "Text_module_md__705900fc",
    lg: "Text_module_lg__705900fc",
    xl: "Text_module_xl__705900fc",
    bpxxs_fontsm: "Text_module_bpxxs_fontsm__705900fc",
    bpxxs_fontmd: "Text_module_bpxxs_fontmd__705900fc",
    bpxxs_fontlg: "Text_module_bpxxs_fontlg__705900fc",
    bpxxs_fontxl: "Text_module_bpxxs_fontxl__705900fc",
    bpxs_fontsm: "Text_module_bpxs_fontsm__705900fc",
    bpxs_fontmd: "Text_module_bpxs_fontmd__705900fc",
    bpxs_fontlg: "Text_module_bpxs_fontlg__705900fc",
    bpxs_fontxl: "Text_module_bpxs_fontxl__705900fc",
    bpsm_fontsm: "Text_module_bpsm_fontsm__705900fc",
    bpsm_fontmd: "Text_module_bpsm_fontmd__705900fc",
    bpsm_fontlg: "Text_module_bpsm_fontlg__705900fc",
    bpsm_fontxl: "Text_module_bpsm_fontxl__705900fc",
    bpmd_fontsm: "Text_module_bpmd_fontsm__705900fc",
    bpmd_fontmd: "Text_module_bpmd_fontmd__705900fc",
    bpmd_fontlg: "Text_module_bpmd_fontlg__705900fc",
    bpmd_fontxl: "Text_module_bpmd_fontxl__705900fc",
    bplg_fontsm: "Text_module_bplg_fontsm__705900fc",
    bplg_fontmd: "Text_module_bplg_fontmd__705900fc",
    bplg_fontlg: "Text_module_bplg_fontlg__705900fc",
    bplg_fontxl: "Text_module_bplg_fontxl__705900fc",
    bpxl_fontsm: "Text_module_bpxl_fontsm__705900fc",
    bpxl_fontmd: "Text_module_bpxl_fontmd__705900fc",
    bpxl_fontlg: "Text_module_bpxl_fontlg__705900fc",
    bpxl_fontxl: "Text_module_bpxl_fontxl__705900fc",
    bpxxl_fontsm: "Text_module_bpxxl_fontsm__705900fc",
    bpxxl_fontmd: "Text_module_bpxxl_fontmd__705900fc",
    bpxxl_fontlg: "Text_module_bpxxl_fontlg__705900fc",
    bpxxl_fontxl: "Text_module_bpxxl_fontxl__705900fc",
    bold: "Text_module_bold__705900fc",
    normal: "Text_module_normal__705900fc",
    medium: "Text_module_medium__705900fc",
    white: "Text_module_white__705900fc"
};
const b_ = {
        [cr.SM]: "sm",
        [cr.MD]: "md",
        [cr.LG]: "lg",
        [cr.XL]: "xl"
    },
    C_ = {
        [dr.BOLD]: E_.bold,
        [dr.NORMAL]: E_.normal,
        [dr.NUM_500]: E_.medium
    },
    y_ = {
        [ur.WHITE]: E_.white
    },
    T_ = ({
        element: e = "span",
        children: t,
        size: n = cr.SM,
        sizeMap: i,
        weight: o = dr.BOLD,
        color: r = ur.CUSTOM,
        className: a = "",
        id: l = "",
        ariaHidden: s = !1,
        role: c,
        containsMarkup: d = !1
    }) => {
        let u = [];
        i ? Object.keys(i).forEach((e => {
            const t = b_[i[e]];
            u.push(E_[`bp${e}_font${t}`])
        })) : u.push(E_[b_[n]]);
        const _ = {
            className: $n.apply(void 0, [E_.text].concat(u, [C_[o], y_[r], a])),
            id: l,
            ariaHidden: s,
            role: c
        };
        return d && (_.dangerouslySetInnerHTML = {
            __html: t
        }), Fe(e, _, t)
    },
    L_ = e => De(qu, {
        className: e.classNames,
        href: e.url,
        tabIndex: e.url ? "0" : "-1",
        style: e.style,
        children: De("img", {
            className: e.imgClassNames,
            src: e.img,
            alt: e.imgAlt
        })
    });
var A_ = {
    roundedBox: "shared_module_roundedBox__fd03e359",
    hidden: "shared_module_hidden__fd03e359",
    focusable: "shared_module_focusable__fd03e359",
    focusableButton: "shared_module_focusableButton__fd03e359",
    focusableCircle: "shared_module_focusableCircle__fd03e359",
    focusableMarker: "shared_module_focusableMarker__fd03e359",
    visuallyHidden: "shared_module_visuallyHidden__fd03e359"
};
const I_ = ["children", "className", "color", "size", "focusable", "icon", "iconPosition", "iconSize", "type", "style", "tabIndex"],
    S_ = {
        [ar.PRIMARY]: "Button_module_primary__779846a6",
        [ar.ALTERNATIVE]: "Button_module_alternative__779846a6"
    },
    O_ = {
        [rr.MD]: "Button_module_md__779846a6",
        [rr.SM]: "Button_module_sm__779846a6",
        [rr.XS]: "Button_module_xs__779846a6"
    },
    P_ = {
        [rr.MD]: "Button_module_iconMd__779846a6",
        [rr.SM]: "Button_module_iconSm__779846a6"
    },
    R_ = He(((e, t) => {
        let {
            children: n,
            className: i,
            color: o = ar.CUSTOM,
            size: r = rr.CUSTOM,
            focusable: a = !0,
            icon: l,
            iconPosition: s = lr.LEFT,
            iconSize: c = rr.CUSTOM,
            type: d,
            style: u = {},
            tabIndex: _ = 0
        } = e, p = v(e, I_);
        const m = $n("Button_module_button__779846a6", a && A_.focusable, S_[o], O_[r], l && "Button_module_icon__779846a6", l && P_[c], Tn.EXCLUDE_GLOBAL_BUTTON_STYLES, i);
        return De("button", h(h({
            className: m,
            ref: t,
            type: d || sr.BUTTON,
            style: u,
            tabIndex: _
        }, p), {}, {
            children: [s === lr.LEFT && l, n && De("span", {
                className: "Button_module_buttonChildren__779846a6",
                children: n
            }), s === lr.RIGHT && l]
        }))
    }));
const N_ = ["Shift", "Tab"],
    w_ = o.iOS ? "SearchInput_module_mobileSafari__abea22b4" : "",
    D_ = He((({
        onChange: e,
        onEnter: t,
        onSearchIterate: n,
        value: i,
        numSearchResults: o,
        ariaControls: r,
        disabled: a,
        placeholder: l,
        searchItemIterator: s
    }, c) => {
        var d;
        const u = {
                defaultPlaceholder: "Search",
                clearResults: "Clear Search Results",
                previousResult: "Previous search result",
                nextResult: "Next search result",
                noResults: "No results",
                numberResults: 1 === o ? o + " result" : o + " results"
            },
            [_, p] = Pe(!1),
            [m, v] = Pe(!1),
            f = Re(null),
            g = i.length > 0,
            E = (() => {
                const [e, t] = Pe(!1);
                return Bc("Shift", (() => {
                    t(!0)
                }), (() => {
                    t(!1)
                })), e
            })();
        let b = l;
        o && _ && (b = u.numberResults), !o && i && _ && (b = u.noResults);
        const [C, y] = Pe(u.nextResult), [T, L] = Pe(u.previousResult);
        l = null !== (d = l) && void 0 !== d ? d : u.defaultPlaceholder, Oe((function() {
            return clearTimeout(f.current), f.current = setTimeout((() => {
                p(!0)
            }), 1e3), () => clearTimeout(f.current)
        }), [i]);
        const A = () => {
                null != c && c.current && (null == c.current.focus || c.current.focus())
            },
            I = () => {
                e && e(""), t && t(""), A()
            },
            S = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = s < o - 1 ? s + 1 : 0, o && y("Result " + (t + 1) + " of " + o), n && n(t)
            },
            O = e => {
                let t;
                null == e || e.preventDefault(), null == e || e.stopPropagation(), t = s > 0 ? s - 1 : o - 1, o && L("Result " + (t + 1) + " of " + o), n && n(t)
            },
            P = $n("SearchInput_module_inputForm__abea22b4", g && "SearchInput_module_active__abea22b4"),
            R = $n("SearchInput_module_searchButton__abea22b4", A_.focusableButton),
            N = 0 !== o && Number.isInteger(s) ? `${s+1}/${o}` : "0/0";
        return De("form", {
            className: P,
            role: "search",
            "data-component-type": "SearchInput",
            "data-focused": `${m}`,
            "data-disabled": `${a}`,
            onReset: () => I(),
            onSubmit: e => {
                e.preventDefault(), t && t(i), E ? O() : S()
            },
            onClick: A,
            children: [!g && De("div", h(h({
                "data-icon": "search",
                className: "SearchInput_module_searchIcon__abea22b4"
            }, xn(A)), {}, {
                children: De(Qu, {
                    name: td.SEARCH,
                    "aria-hidden": "true"
                })
            })), De("input", {
                "aria-live": "polite",
                type: "text",
                ref: c,
                className: w_,
                onFocus: () => v(!0),
                onBlur: () => v(!1),
                onKeyDown: e => {
                    N_.includes(e.key) || e.stopPropagation()
                },
                "aria-controls": r,
                onInput: t => {
                    t.preventDefault(), e && e(t.target.value), p(!1)
                },
                value: i,
                "aria-describedby": "searchResultsStatus",
                disabled: a,
                id: wn.SEARCH_INPUT
            }), !g && De("label", {
                htmlFor: wn.SEARCH_INPUT,
                className: "SearchInput_module_label__abea22b4",
                children: l
            }), i && De("span", {
                id: "searchResultsStatus",
                "aria-live": "polite",
                className: A_.visuallyHidden,
                children: b
            }), g && De($e, {
                children: [Number.isInteger(s) && De("div", {
                    "data-purpose": "search-item",
                    className: "SearchInput_module_searchItem__abea22b4",
                    "aria-hidden": "true",
                    children: N
                }), De(R_, h(h({
                    "aria-live": "polite"
                }, xn(O)), {}, {
                    "data-purpose": "decrement-search",
                    "aria-label": T,
                    icon: De(Qu, {
                        name: td.CHEVRON_UP
                    }),
                    iconSize: rr.SM,
                    className: R,
                    disabled: a || !o,
                    onBlur: () => {
                        L(u.previousResult)
                    }
                })), De(R_, h(h({
                    "aria-live": "polite"
                }, xn(S)), {}, {
                    "aria-label": C,
                    "data-purpose": "increment-search",
                    icon: De(Qu, {
                        name: td.CHEVRON_DOWN
                    }),
                    iconSize: rr.SM,
                    className: R,
                    disabled: a || !o,
                    onBlur: () => {
                        y(u.nextResult)
                    }
                })), De(R_, h(h({}, xn(I)), {}, {
                    "data-icon": "close",
                    "data-purpose": "close",
                    "aria-label": u.clearResults,
                    icon: De(Qu, {
                        name: td.CLOSE_CIRCLE,
                        "data-icon": "close"
                    }),
                    iconSize: rr.SM,
                    type: sr.RESET,
                    className: R,
                    disabled: a
                }))]
            })]
        })
    }));
const k_ = ["className", "size"],
    M_ = e => {
        let {
            className: t = "",
            size: n = _r.SM
        } = e, i = v(e, k_);
        const o = $n(yn.VP_SPIN, n === _r.LG && "Spinner_module_lg__c0a9f13b", n === _r.SM && "Spinner_module_sm__c0a9f13b", t);
        return De(Qu, h({
            "data-component-type": "spinner",
            name: td.SPINNER,
            className: `Spinner_module_spinner__c0a9f13b ${o}`
        }, i))
    };
const V_ = ({
    cues: e,
    language: t,
    direction: n,
    className: i,
    fontSize: o,
    fontFamily: a,
    fontOpacity: l,
    color: s,
    windowOpacity: c,
    windowColor: d,
    bgOpacity: u,
    bgColor: _,
    edgeStyle: p,
    height: m,
    style: v = {}
}) => {
    const f = ya(),
        g = (e, t) => {
            const n = new r(cu[e] || e);
            return n.alpha = t / 100, n.rgba
        },
        E = h(h(h(h(h({}, {
            fontSize: `${(e=>Math.max(10,Math.round(.045*m*e)))(o)}px`
        }), (() => {
            const e = ((e, t) => f.fontFamily.items.find((e => e.id === t)))(0, a);
            return {
                fontVariant: "small_capitals" === e.id ? "small-caps" : "initial",
                fontFamily: e.value
            }
        })()), {
            color: g(s, l)
        }), (() => {
            const e = "0, 0, 0, " + Number(l) / 100;
            let t;
            switch (p) {
                case "shadow":
                    t = `2px 2px 2px rgba(${e})`;
                    break;
                case "outline":
                    t = `1px 0px 1px rgba(${e}), 0px 1px 1px rgba(${e}), -1px 0px 1px rgba(${e}), 0px -1px 1px rgba(${e})`;
                    break;
                case "raised":
                    t = `rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;
                    break;
                case "depressed":
                    t = `rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;
                    break;
                default:
                    t = "none"
            }
            return {
                textShadow: t
            }
        })()), v),
        b = h({}, {
            backgroundColor: g(d, c)
        }),
        C = h({}, {
            background: g(_, u)
        }),
        y = $n(yn.VP_CAPTIONS, "CaptionsRenderer_module_captions__f2659eec", i),
        T = (() => {
            let t = [];
            return e.forEach((e => {
                const n = e.html.split(/<br\s?\/?>/i).filter(Boolean);
                t = t.concat(n)
            })), t
        })();
    return De("div", {
        className: y,
        "aria-live": "assertive",
        lang: t,
        dir: n,
        style: E,
        children: De("span", {
            className: "CaptionsRenderer_module_captionsWindow__f2659eec",
            style: b,
            children: T.map((e => De("span", {
                className: `CaptionsRenderer_module_captionsLine__f2659eec ${yn.VP_CAPTIONS_LINE}`,
                style: C,
                dangerouslySetInnerHTML: {
                    __html: e
                }
            }, e)))
        })
    })
};
const B_ = He((({
    children: e,
    className: t,
    style: n,
    role: i = "dialog",
    ariaLabelledby: o
}, r) => De("div", {
    role: i,
    "aria-labelledby": o,
    className: `ToastBase_module_toast__fb6cbe17 ${t||""}`,
    ref: r,
    style: n,
    children: e
})));
const x_ = () => De("div", {
    className: "ToastDivider_module_divider__b81b458b"
});
const U_ = ["tooltipLabel", "icon", "onClick", "containerRef", "fullToast", "className", "onMouseEnter", "onMouseLeave"],
    H_ = e => {
        let {
            tooltipLabel: t,
            icon: n,
            onClick: i,
            containerRef: o,
            fullToast: r,
            className: a,
            onMouseEnter: l,
            onMouseLeave: s
        } = e, c = v(e, U_);
        const d = Hu((e => e.appearance.playerBreakpoint)),
            u = ["xl", "xxl"].includes(d) ? 16 : 8,
            _ = $n("ToastButton_module_toastButton__a3f96132", r && "ToastButton_module_fullToast__a3f96132", a);
        return t ? De(h_, {
            tooltipContent: t,
            position: v_.BOTTOM,
            containerEl: o,
            margin: u,
            children: De(R_, h({
                color: r ? ar.PRIMARY : ar.ALTERNATIVE,
                icon: n,
                onClick: i,
                onMouseEnter: l,
                onMouseLeave: s,
                className: _
            }, c))
        }) : De(R_, h({
            color: r ? ar.PRIMARY : ar.ALTERNATIVE,
            icon: n,
            onClick: i,
            onMouseEnter: l,
            onMouseLeave: s,
            className: _
        }, c))
    },
    F_ = {
        [or.XXS]: cr.MD,
        [or.LG]: cr.LG,
        [or.XXL]: cr.XL
    },
    G_ = ({
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        label: i
    }) => De(H_, {
        fullToast: !0,
        onClick: e,
        onMouseEnter: t,
        onMouseLeave: n,
        children: De(T_, {
            sizeMap: F_,
            children: i
        })
    });
const W_ = ({
    transitionTime: e,
    delay: t = 400,
    ariaLabelledby: n
}) => {
    const i = `width ${e-t}ms linear`,
        [o, r] = Pe({});
    return Oe((() => {
        const e = setTimeout((() => {
            r({
                transition: i,
                width: "100%"
            })
        }), t);
        return () => {
            clearTimeout(e)
        }
    }), [r, i, t]), De("div", {
        className: "ToastProgress_module_progressWrapper__c722ee37",
        role: "progressbar",
        "aria-labelledby": n,
        children: De("div", {
            className: "ToastProgress_module_progress__c722ee37",
            style: o
        })
    })
};
const Y_ = ({
    id: e,
    children: t,
    className: n
}) => {
    const i = $n("ToastMessage_module_label__bad39dc9", n);
    return De(T_, {
        id: e,
        weight: dr.NORMAL,
        className: i,
        color: ur.WHITE,
        sizeMap: {
            [or.XXS]: cr.SM,
            [or.SM]: cr.MD,
            [or.XL]: cr.LG,
            [or.XXL]: cr.XL
        },
        children: t
    })
};
const $_ = ({
        onClick: e,
        describedBy: t,
        selected: n
    }) => De(H_, {
        className: "CloseToastButton_module_close__cfcb6e11 " + (n ? "CloseToastButton_module_selected__cfcb6e11" : ""),
        icon: De(Qu, {
            name: td.DISMISS_X
        }),
        onClick: e,
        "aria-label": "Close",
        "aria-describedby": t
    }),
    K_ = ({
        children: e,
        targetContent: t,
        onContentChange: n = hi,
        delay: i = 250,
        styleOverrides: o,
        fadeIn: r = !0,
        fadeOut: a = !0
    }) => {
        const l = Re(null),
            [s, c] = Pe(t),
            d = t !== s,
            u = d && !s,
            _ = !d && !!t;
        return clearTimeout(l.current), u ? (c(t), n(t)) : d && (l.current = setTimeout((function() {
            c(t), n(t)
        }), i)), De(Yu, {
            fadeIn: r,
            fadeOut: a,
            visible: _,
            duration: i,
            styleOverrides: o,
            children: null == e ? void 0 : e(s)
        })
    };
let q_ = function(e) {
    return e.LOAD_TIMEOUT = "Load timeout", e
}({});
const j_ = 1e3,
    z_ = 100 * Math.random() <= 100,
    X_ = [tn.PLAYER_LOGIN_SUCCESSFUL, tn.PLAYER_LOGIN_FAILED, tn.COMPONENT_VISIBILITY_CHANGE, tn.APP_BREAKPOINT_CHANGE],
    Z_ = e => {
        const {
            id: t,
            url: n,
            title: i,
            visible: o,
            userLoggedIn: r,
            appBreakpoint: a,
            config: l,
            onIframeLoad: s = hi,
            onError: c = hi,
            onRemoteComponentReady: d = hi,
            waitForReady: u = !1,
            isAnimating: _ = !1,
            timeout: p = j_,
            className: m
        } = e, v = Re(!1), [f, g] = Pe(!1), [E, b] = Pe(!1), C = Re(se()), y = Re(null), T = Re(null), L = $n("RemoteComponent_module_remoteComponent__c2722e03", E && "RemoteComponent_module_loaded__c2722e03", m), A = Re(Date.now()), I = () => {
            u && b(!0), d()
        };
        Oe((function() {
            y.current && function(e, t, n) {
                const {
                    url: i,
                    onPlay: o = hi,
                    onPause: r = hi,
                    onSeek: a = hi,
                    onClose: l = hi,
                    onRemoteComponentReady: s = hi,
                    onError: c = hi
                } = e, d = bt(i);
                t.configureClient(n.contentWindow, d), t.extendMethods({
                    play: o,
                    pause: r,
                    set currentTime(e) {
                        a(e)
                    },
                    closeRemoteComponent: l,
                    remoteComponentReady: s,
                    reportRemoteComponentError: c
                }), X_.forEach((function(e) {
                    t.listeners[e] = !0
                }))
            }(h(h({}, e), {}, {
                onRemoteComponentReady: I
            }), C.current, y.current), clearTimeout(T.current), T.current = setTimeout((() => {
                v.current || ((e => {
                    v.current = !1, g(!0), c(e)
                })({
                    message: q_.LOAD_TIMEOUT,
                    code: 408
                }), wr(gr.REMOTE_COMPONENT_TIMEOUT, l, {
                    component_url: n,
                    component_timeout: p
                }))
            }), p)
        }), []), Oe((function() {
            r && C.current.emit(tn.PLAYER_LOGIN_SUCCESSFUL)
        }), [r]), Oe((function() {
            o || document.activeElement !== y.current || y.current.blur(), _ || C.current.emit(tn.COMPONENT_VISIBILITY_CHANGE, o)
        }), [o, _]), Oe((function() {
            C.current.emit(tn.APP_BREAKPOINT_CHANGE, a)
        }), [a]), Oe((function() {
            A.current = Date.now()
        }), [n]);
        const S = $n("RemoteComponent_module_spinner__c2722e03", !E && !f && "RemoteComponent_module_visible__c2722e03");
        return De($e, {
            children: [De(M_, {
                className: S
            }), De("iframe", {
                id: t,
                ref: y,
                onLoad: () => {
                    f || (clearTimeout(T.current), v.current = !0, s(), z_ && wr(gr.REMOTE_COMPONENT_LOADED, l, {
                        component_url: n,
                        component_load_time: Date.now() - A.current
                    }), u || b(!0))
                },
                title: i,
                src: n,
                className: L
            })]
        })
    },
    Q_ = ["onPlay", "onPause", "onSeek", "url", "visible"],
    J_ = e => {
        const {
            onPlay: t,
            onPause: n,
            onSeek: i,
            url: o,
            visible: r
        } = e, a = v(e, Q_), l = Hu((e => e.setPlayback)), s = Hu((e => e.config)), c = Hu((e => e.user.loggedIn)), d = Hu((e => e.appearance.appBreakpoint)), u = rd((e => e.colors.colorOne)), _ = rd((e => e.colors.colorTwo)), p = rd((e => e.colors.colorThree)), m = rd((e => e.colors.colorFour)), [f, g] = Pe(ep(o, E()));

        function E() {
            return {
                loggedIn: c,
                appBreakpoint: d,
                visible: r,
                colorOne: u,
                colorTwo: _,
                colorThree: p,
                colorFour: m
            }
        }
        return Oe((function() {
            g(ep(o, E()))
        }), [o]), De(Z_, h({
            userLoggedIn: c,
            onPlay: () => {
                l("paused", !1), null == t || t()
            },
            onPause: () => {
                l("paused", !0), null == n || n()
            },
            onSeek: e => {
                l("currentTime", e), null == i || i(e)
            },
            appBreakpoint: d,
            url: f,
            visible: r,
            config: s
        }, a))
    };

function ep(e, t) {
    const i = Object.keys(t).filter((e => void 0 !== t[e])),
        o = Te(t, i);
    return n(e, o)
}
const tp = ({
    playerBreakpoint: e
}) => {
    const t = [or.XS, or.XXS].includes(e),
        n = t ? td.VIMEO_SMALL : td.VIMEO,
        i = t ? "data-vimeo-small-icon" : "data-vimeo-icon";
    return De(Qu, {
        name: n,
        "aria-hidden": !0,
        [i]: !0
    })
};
const np = ({
    url: e,
    className: t
}) => {
    const n = {
            backgroundImage: `url(${e})`
        },
        i = $n("Image_module_image__2d6414b2", t);
    return De("div", {
        className: i,
        style: n
    })
};
var ip = "shared_module_shareTitle__b1d5c277",
    op = "shared_module_shareFootnote__b1d5c277";
const rp = ["embedCode", "onClick"],
    ap = e => {
        let {
            embedCode: t,
            onClick: n
        } = e, i = v(e, rp);
        const [o, r] = Pe(!1), a = Re(null);
        return De(R_, h(h({
            onClick: () => {
                r(!0), Un(t), n(), clearTimeout(a.current), a.current = setTimeout((function() {
                    r(!1)
                }), 2e3)
            },
            className: "CopyEmbedCodeButton_module_copyEmbedCodeButton__ac44b4e7"
        }, i), {}, {
            children: o ? "Copied!" : "Copy"
        }))
    },
    lp = ({
        visible: e
    }) => {
        const t = Hu((e => e.embed.allowEmbedShare)),
            n = Hu((e => e.embed.embedCode)),
            i = Hu((e => e.embed.videoUrl)),
            o = Hu((e => e.displayList.outro)),
            r = Hu((e => e.embed.embedOnlyShare)),
            a = Re(null),
            l = Uc(),
            s = {
                title: "Embed",
                subtitle: "Add this video to your site with the embed code below.",
                customize: `<a href="${i}#embed" target="_blank" rel="noopener" aria-describedby="${Ln.NEW_WINDOW_DESCRIPTION}">Customize this embed</a> on Vimeo`
            },
            c = $n("EmbedShare_module_embedShareContainer__fb691e4b", r && "EmbedShare_module_embedOnlyShare__fb691e4b", !e && "EmbedShare_module_hidden__fb691e4b"),
            d = Ne((e => {
                const t = o ? "end_screen" : "share_overlay";
                l(gr.COPY_VIDEO_EMBED_CODE, {
                    location: `player_embed_${t}_${e}`,
                    path: window.location.pathname
                })
            }), [o, l]);
        return Oe((() => {
            a.current && a.current.setSelectionRange(0, n.length)
        }), [n]), t && De(Ue, {
            duration: 200,
            alwaysMounted: !0,
            in: e,
            styles: sp(),
            children: De("section", {
                className: c,
                children: De("div", {
                    children: [De(T_, {
                        element: "h1",
                        color: ur.WHITE,
                        size: cr.XL,
                        className: ip,
                        children: s.title
                    }), De(T_, {
                        element: "p",
                        color: ur.WHITE,
                        className: "EmbedShare_module_embedShareSubtitle__fb691e4b",
                        size: cr.MD,
                        containsMarkup: !0,
                        children: s.subtitle
                    }), De("div", {
                        className: "EmbedShare_module_embedShareEmbedCode__fb691e4b",
                        children: [De("div", {
                            children: De("input", {
                                onClick: e => {
                                    e.currentTarget.select()
                                },
                                onCut: () => d("keyboard"),
                                onCopy: () => d("keyboard"),
                                className: "EmbedShare_module_embedInput__fb691e4b",
                                readOnly: !0,
                                "aria-readonly": "true",
                                value: n,
                                ref: a
                            })
                        }), De(ap, {
                            embedCode: n,
                            onClick: () => d("button")
                        })]
                    }), De(T_, {
                        element: "p",
                        size: cr.MD,
                        className: `${op} EmbedShare_module_shareFootnote__fb691e4b`,
                        containsMarkup: !0,
                        children: s.customize
                    })]
                })
            })
        })
    };

function sp() {
    const e = {
            transform: "translateX(125%)",
            opacity: 0
        },
        t = {
            transform: "translateX(-17%)",
            opacity: 1
        };
    return {
        enter: h({
            visibility: "hidden"
        }, e),
        enterActive: h({
            transition: "200ms",
            visibility: "visible"
        }, t),
        enterDone: {
            transform: "translateX(-17%)"
        },
        exit: h({}, t),
        exitActive: h(h({}, e), {}, {
            transition: "200ms"
        }),
        exitDone: {
            visibility: "hidden"
        }
    }
}
const cp = {
        facebook: td.FACEBOOK,
        twitter: td.TWITTER,
        tumblr: td.TUMBLR,
        email: td.EMAIL,
        embed: td.EMBED
    },
    dp = {
        facebook: zt._facebookButtonPressed,
        twitter: zt._twitterButtonPressed,
        tumblr: zt._tumblrButtonPressed,
        email: zt._emailButtonPressed,
        embed: zt._embedButtonPressed
    },
    up = {
        facebook: "Share on Facebook",
        twitter: "Share on Twitter",
        tumblr: "Share on Tumblr",
        email: "Share via Email",
        embed: "Get embed code"
    },
    _p = He((({
        destination: e,
        onClick: t
    }, i) => {
        const o = Hu((e => e.title.title)),
            r = Hu((e => e.title.ownerName)),
            a = Hu((e => e.embed.shareUrl)),
            l = Hu((e => e.embed.videoUrl)),
            s = Hu((e => e.embed.playerShareUrl)),
            c = Hu((e => e.embed.videoUnlistedHash)),
            d = Hu((e => e.events)),
            u = {
                emailSubject: "Check out “" + o + "” from " + r + " on Vimeo",
                emailBody: "Check out “" + o + "” from " + r + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + a + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com."
            },
            _ = Ne((e => "email" === e ? `mailto:?subject=${encodeURIComponent(u.emailSubject)}&body=${encodeURIComponent(u.emailBody)}` : "embed" === e ? `${l}#share` : n(`${s}/${e}`, c ? {
                h: c
            } : {})), [s, c, l, u.emailBody, u.emailSubject]),
            p = Ne((n => {
                n.preventDefault(), d.fire(dp[e], _(e)), t(e, n.currentTarget.href)
            }), [d, t]);
        return De(qu, {
            ref: i,
            className: "SocialShareLink_module_shareButton__5552a811",
            role: "button",
            href: _(e),
            onClick: p,
            ariaLabel: up[e],
            children: De(Qu, {
                name: cp[e]
            })
        })
    }));
var pp = "SocialShare_module_shareButtonItem__8480906e";
const mp = ({
    visible: e,
    onEmbedClick: t
}) => {
    const n = Hu((e => e.embed.allowEmbedShare)),
        i = Hu((e => e.embed.shareUrl)),
        o = Re(null),
        r = Re(null),
        a = $n("SocialShare_module_shareButtons__8480906e"),
        l = $n("SocialShare_module_socialShareContainer__8480906e", !e && "SocialShare_module_hidden__8480906e"),
        s = (e, n) => {
            "embed" !== e ? "email" !== e ? Tt(n, e, {
                width: 600,
                height: 600
            }) : window.top.location = n : null == t || t()
        };
    return De(Ue, {
        duration: 200,
        alwaysMounted: !0,
        in: e,
        styles: vp(),
        children: De("section", {
            className: l,
            children: [De(T_, {
                element: "h1",
                color: ur.WHITE,
                size: cr.XL,
                className: ip,
                children: "Share"
            }), De("ul", {
                className: a,
                children: [De("li", {
                    className: pp,
                    children: De(_p, {
                        destination: "facebook",
                        onClick: s,
                        ref: o
                    })
                }), De("li", {
                    className: pp,
                    children: De(_p, {
                        destination: "twitter",
                        onClick: s
                    })
                }), De("li", {
                    className: pp,
                    children: De(_p, {
                        destination: "tumblr",
                        onClick: s
                    })
                }), i && De("li", {
                    className: pp,
                    children: De(_p, {
                        destination: "email",
                        onClick: s
                    })
                })]
            }), n && De("ul", {
                className: a,
                children: De("li", {
                    className: pp,
                    children: De(_p, {
                        onClick: s,
                        destination: "embed",
                        ref: r
                    })
                })
            }), i && De("p", {
                className: op,
                children: De(qu, {
                    className: "SocialShare_module_clipUrl__8480906e",
                    href: i,
                    children: i
                })
            })]
        })
    })
};

function vp() {
    const e = {
            transform: "translateX(-125%)",
            opacity: 0
        },
        t = {
            transform: "translateX(0)",
            opacity: 1
        };
    return {
        enter: h({
            visibility: "hidden"
        }, e),
        enterActive: h({
            transition: "200ms",
            visibility: "visible"
        }, t),
        exit: h({}, t),
        exitActive: h(h({}, e), {}, {
            transition: "200ms"
        }),
        exitDone: {
            visibility: "hidden"
        }
    }
}
const fp = ({
    onEmbedShareVisibilityChange: e
}) => {
    const t = Hu((e => e.embed.embedOnlyShare)),
        [n, i] = Pe(t),
        o = $n("Share_module_backButton__248d76cb", n && "Share_module_visible__248d76cb");
    return Oe((function() {
        t !== n && i(t)
    }), [t]), Oe((function() {
        null == e || e()
    }), [n]), De($e, {
        children: [De("div", {
            className: "Share_module_shareWrapper__248d76cb",
            children: [De(mp, {
                visible: !n,
                onEmbedClick: () => i(!0)
            }), De(lp, {
                visible: n
            })]
        }), !t && De(R_, h(h({
            className: o,
            onClick: () => i(!1),
            "aria-label": "Back",
            tabIndex: n ? 0 : -1
        }, f_), {}, {
            children: De(Qu, {
                className: "Share_module_backButtonIcon__248d76cb",
                name: td.PREVIOUS
            })
        }))]
    })
};
const hp = {
        enter: {
            opacity: 0,
            animation: "wiggle 300ms linear 1"
        },
        enterActive: {
            opacity: 1,
            transition: "opacity 300ms",
            animation: "wiggle 300ms linear 1"
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: "opacity 300ms"
        },
        exitDone: {
            display: "none"
        }
    },
    gp = ({
        message: e,
        visible: t,
        wrapperEl: n
    }) => {
        const [i, o] = Pe(t), r = n && Et(n);
        return Oe((() => {
            let e;
            return clearTimeout(e), t ? (o(!0), e = setTimeout((() => {
                o(!1)
            }), 5e3)) : o(!1), () => clearTimeout(e)
        }), [t]), De(Ue, { in: i,
            styles: hp,
            children: De("div", {
                className: "ValidationBubble_module_validationBubble__74475ac4",
                style: {
                    top: (null == r ? void 0 : r.height) + 4 + "px"
                },
                children: De(T_, {
                    weight: dr.BOLD,
                    className: "ValidationBubble_module_message__74475ac4",
                    children: e
                })
            })
        })
    };
const Ep = () => {
    const e = rd((e => e.error.title)),
        t = rd((e => e.error.message));
    return De("div", {
        className: "Error_module_error__b5478ed7",
        "aria-live": "assertive",
        role: "alert",
        "data-error": !0,
        children: [e && De(T_, {
            element: "h1",
            className: "Error_module_header__b5478ed7",
            weight: dr.BOLD,
            children: e
        }), t && De(T_, {
            className: "Error_module_description__b5478ed7",
            weight: dr.NORMAL,
            containsMarkup: !0,
            children: t
        })]
    })
};
const bp = He(((e, t) => {
    const n = Hu((e => e.setOverlay)),
        i = xn((e => {
            e.preventDefault(), n("purpose", oi.EMPTY)
        }));
    return De("button", h(h(h({
        ref: t,
        className: `CloseOverlayButton_module_closeOverlayButton__bc0b3ddc ${A_.focusableButton}`,
        "aria-label": "Close overlay"
    }, f_), i), {}, {
        "data-close-overlay": !0,
        children: De(Qu, {
            name: td.CLOSE
        })
    }))
}));
const Cp = ({
        children: e,
        visible: t,
        style: n
    }) => {
        const i = Re(null),
            o = Re(null),
            r = Hu((e => e.setOverlay)),
            a = Hu((e => e.overlay.purpose)),
            l = Hu((e => e.overlay.overlayElementsUpdatedCount)),
            s = Ke(e).length > 0,
            {
                onFocus: c,
                focusFirstItem: d
            } = Qc({
                parentRef: o,
                isActive: t && s,
                onEscape: () => r("purpose", oi.EMPTY)
            }),
            u = $n("OverlayBase_module_overlay__b0cfa26d", t && "OverlayBase_module_visible__b0cfa26d");
        return Oe((function() {
            d()
        }), [l]), Oe((function() {
            !ri(a) && t && d()
        }), [a, t]), De("div", {
            ref: o,
            onFocus: c,
            className: "OverlayBase_module_overlayWrapper__b0cfa26d " + (t ? "" : "OverlayBase_module_hidden__b0cfa26d"),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": Ln.VP_OVERLAY_LABELLEDBY,
            "data-content-area-sibling-eligible": !0,
            style: n,
            "data-overlay": !0,
            children: [De("div", {
                className: "OverlayBase_module_overlayCell__b0cfa26d",
                children: De("div", {
                    className: u,
                    children: e
                })
            }), De("nav", {
                className: "OverlayBase_module_overlayNav__b0cfa26d",
                children: De(bp, {
                    ref: i
                })
            })]
        })
    },
    yp = ["on", "label", "icon", "onClick", "className", "children"],
    Tp = He(((e, t) => {
        let {
            on: n,
            label: i,
            icon: o,
            onClick: r,
            className: a = "",
            children: l
        } = e, s = v(e, yp);
        const c = Hu((e => e.displayList.sideDock));
        return De(R_, h(h({
            tabIndex: c ? 0 : -1,
            ref: t,
            size: rr.SM,
            color: ar.PRIMARY,
            icon: o,
            iconSize: rr.SM,
            "aria-label": i,
            onClick: r,
            className: $n(n && yn.ON, a)
        }, s), {}, {
            children: l
        }))
    })),
    Lp = () => {
        const {
            enabled: e,
            icon: t,
            label: n,
            onSelect: i
        } = id();
        return e && De($u, {
            text: n,
            children: De(Tp, {
                label: n,
                className: yn.COLLECTIONS_BUTTON,
                onClick: i,
                icon: De(Qu, {
                    name: t,
                    className: yn.COLLECTIONS_ICON,
                    focusable: "false"
                })
            })
        })
    },
    Ap = () => {
        const e = Hu((e => e.user.liked)),
            {
                label: t,
                ariaLabel: n,
                enabled: i,
                icon: o,
                onSelect: r
            } = Id();
        return i && De($u, {
            text: t,
            children: De(Tp, {
                label: n,
                className: yn.LIKE_BUTTON,
                on: e,
                icon: De(Qu, {
                    name: o,
                    className: yn.LIKE_ICON,
                    focusable: "false"
                }),
                "data-like-button": !0,
                onClick: r
            })
        })
    };
const Ip = () => {
    const {
        label: e,
        icon: t,
        onSelect: n,
        enabled: i
    } = Sd();
    return i && De($u, {
        text: e,
        children: De(Tp, {
            label: e,
            "data-share-button": !0,
            onClick: n,
            icon: De(Qu, {
                name: t,
                className: "share-icon ShareButton_module_shareIcon__e4957da4",
                focusable: "false"
            })
        })
    })
};
const Sp = () => {
        const e = Hu((e => e.vod.purchased)),
            t = Hu((e => e.vod.isExpiring)),
            {
                onSelect: n,
                enabled: i,
                icon: o,
                label: r
            } = Od(),
            a = xn(n);
        return i && De("div", h(h({}, a), {}, {
            className: "VODButton_module_vodButtonContainer__33b65469 " + (t ? "VODButton_module_expiring__33b65469" : ""),
            "data-vod-expiring": t,
            "data-vod-purchased": e,
            "data-vod-button": !0,
            children: De(R_, {
                size: rr.SM,
                color: ar.PRIMARY,
                iconPosition: lr.RIGHT,
                className: $n(yn.VOD_BUTTON, "VODButton_module_vodButton__33b65469", e && yn.ON),
                "data-vod-button": !0,
                icon: De(Qu, {
                    name: o,
                    className: $n(yn.VOD_ICON, "VODButton_module_icon__33b65469"),
                    "data-vod-icon": !0
                }),
                iconSize: rr.SM,
                children: De("span", {
                    "data-vod-button-label": !0,
                    children: r
                })
            })
        }))
    },
    Op = () => {
        const e = Hu((e => e.user.watchLater)),
            {
                enabled: t,
                label: n,
                ariaLabel: i,
                onSelect: o,
                icon: r
            } = Rd();
        return t && De($u, {
            text: n,
            children: De(Tp, {
                label: i,
                className: yn.WATCH_LATER_BUTTON,
                on: e,
                onClick: o,
                icon: De(Qu, {
                    name: r,
                    className: yn.WATCH_LATER_ICON,
                    focusable: "false"
                }),
                "data-watch-later-button": !0
            })
        })
    };
var Pp = "AIButton_module_button__51e5bbdf";
const Rp = () => {
        const [e, t] = Pe(!1), [n, i] = Pe(!1), o = Re(null), r = Hu((e => e.displayList.aiWidget)), a = Re(null), l = Re(!1), {
            label: s,
            onSelect: c,
            enabled: d,
            icon: u
        } = nd(), _ = r ? [In.AI_WIDGET_ID, Ln.RIGHT_CONTENT_AREA].join(" ") : Ln.RIGHT_CONTENT_AREA;
        Oe((() => {
            function e() {
                document.activeElement.id === In.AI_WIDGET_ID && (l.current = !0)
            }
            return window.addEventListener("blur", e), () => {
                window.removeEventListener("blur", e)
            }
        }), []), Bc("Tab", (e => {
            const t = document.activeElement === document.body;
            var n;
            l.current && t && (e.preventDefault(), l.current = !1, null == (n = a.current) || n.focus())
        }));
        const p = () => {
                clearTimeout(o.current), t(!1), i(!0)
            },
            m = () => {
                clearTimeout(o.current), i(!1), t(!0), o.current = setTimeout((function() {
                    t(!1)
                }), 420)
            },
            v = $n(Pp, n && "AIButton_module_transitionIn__51e5bbdf", e && "AIButton_module_transitionOut__51e5bbdf"),
            f = {
                backgroundColor: "rgb(0,0,0,0.9)",
                transitionProperty: n || e ? "background-position" : "none"
            };
        return d && De($e, {
            children: [De("style", {
                children: `\n                    .${Pp} {\n                        --shimmer-speed-in: 450ms;\n                        --shimmer-speed-out: 420ms;\n                    }\n                `
            }), De($u, {
                text: s,
                children: De(Tp, h({
                    label: s,
                    "data-ai-button": !0,
                    onClick: c,
                    ref: a,
                    className: v,
                    "aria-expanded": r,
                    "aria-controls": _,
                    "aria-haspopup": "true",
                    onFocus: p,
                    onBlur: m,
                    onPointerEnter: e => {
                        "mouse" === e.pointerType && p()
                    },
                    onPointerLeave: e => {
                        "mouse" === e.pointerType && m()
                    },
                    style: f,
                    icon: De(Qu, {
                        fill: "#fff",
                        name: u,
                        focusable: "false",
                        className: "AIButton_module_icon__51e5bbdf"
                    })
                }, f_))
            })]
        })
    },
    Np = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t
    }) => {
        const n = wd(),
            i = "More options",
            o = Object.keys(n).filter((e => n[e].enabled)).map((e => {
                const t = n[e];
                return {
                    id: e,
                    label: t.label,
                    icon: t.icon
                }
            }));
        return De(Ju, {
            type: Rc.SIDEDOCK,
            ariaLabel: i,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: Nc.SIDEDOCK,
            panelContent: De(d_, {
                items: o,
                onSelect: e => {
                    const t = e.currentTarget.dataset.id;
                    (0, n[t].onSelect)(e)
                }
            }),
            headerContent: De(i_, {
                title: i,
                onClose: () => t(!1),
                isMenuBlockingUI: !0
            }),
            isMenuBlockingUI: !0
        })
    },
    wp = ({
        onClick: e
    }) => {
        const t = wd(),
            n = "More options";
        return Object.values(t).filter((e => e.enabled)).length ? De($u, {
            text: n,
            children: De(Tp, {
                label: n,
                onClick: e,
                icon: De(Qu, {
                    name: td.VERTICAL_ELLIPSIS,
                    focusable: "false"
                })
            })
        }) : null
    },
    Dp = () => {
        const e = Hu((e => e.displayList.sideDock)),
            t = Hu((e => e.appearance.fullscreen)),
            n = Hu((e => e.displayList.outro)),
            i = Hu((e => e.vod.purchased)),
            o = Hu((e => e.displayList.menu)),
            r = Hu((e => e.setAppearance)),
            a = Hu((e => e.setDisplayList)),
            l = Od(),
            s = $c(pr.SIDE_DOCK_MENU),
            [c, d] = Pe(!1),
            u = e => {
                a("menu", e), d(e)
            };
        o || d(!1);
        const _ = {
            className: $n(yn.VP_SIDEDOCK, "SideDock_module_root__0918b45a", e && "SideDock_module_visible__0918b45a", n && "SideDock_module_outroVisible__0918b45a", t && "SideDock_module_fullscreen__0918b45a"),
            onPointerEnter: () => r("mousedOverSidedock", !0),
            onMouseEnter: () => r("mousedOverSidedock", !0),
            onPointerLeave: () => r("mousedOverSidedock", !1),
            onMouseLeave: () => r("mousedOverSidedock", !1)
        };
        return De(t_, {
            children: [De("div", h(h({}, _), {}, {
                "data-sidedock": !0,
                children: [l.enabled && !i && De(Sp, {}), De(Yu, {
                    visible: e,
                    children: De("div", {
                        className: "SideDock_module_sidedockInner__0918b45a",
                        "data-sidedock-inner": !0,
                        children: s ? De(wp, {
                            onClick: () => u(!0)
                        }) : De($e, {
                            children: [l.enabled && i && De(Sp, {}), De(Ap, {}), De(Op, {}), De(Lp, {}), De(Ip, {}), De(Rp, {})]
                        })
                    })
                })]
            })), s && De(Np, {
                isMenuDisplayed: c,
                setMenuDisplayed: u
            })]
        })
    };
let kp = function(e) {
        return e.MARKER_SEEKED = "seeked", e.MARKER_ENDED = "ended", e.MARKER_UPSWITCH = "upswitch", e.MARKER_DOWNSWITCH = "downswitch", e.MARKER_SWITCH_COMPLETE = "switchcomplete", e.MARKER_RESIZE = "resize", e.MARKER_SCANNER_CHANGE = "scannerchange", e.MARKER_FILE_CHANGE = "filechange", e.MARKER_STALLED = "stalled", e.MARKER_BUFFER_GAP_JUMP = "buffergapjump", e.MARKER_BUFFER_GAP_JUMP_PREVENT = "buffergapjumpprevent", e.MARKER_STALL_JUMP = "stalljump", e
    }({}),
    Mp = function(e) {
        return e.MARKER_SEEKED = "#0088cc", e.MARKER_ENDED = "#503873", e.MARKER_UPSWITCH = "#5a9e02", e.MARKER_DOWNSWITCH = "#d93636", e.MARKER_RESIZE = "#FF8A00", e.MARKER_SCANNER_CHANGE = "#e9ff00", e.MARKER_FILE_CHANGE = "#b5d3e2", e.MARKER_STALLED = "#f44283", e
    }({});
const Vp = Object.entries(kp).reduce(((e, [t, n]) => (e[n] = Mp[t], e)), {}),
    Bp = ({
        max: e = 1,
        timeSeries: t = [],
        debugMarkers: n = []
    }) => {
        const i = t.length,
            o = i < 100 ? 0 : i - 100,
            r = t[o],
            a = t[i - 1],
            l = r ? r.time : 0,
            s = a ? a.time : 0,
            c = t.slice(o).map((t => {
                let n = (t.time - l) / (s - l) * 250,
                    i = 14 - 14 * t.value / e;
                return isNaN(i) && (i = 0), isNaN(n) && (n = 0), `${n},${function(e){return Math.min(Math.max(e,0),14)}(i)}`
            })).join(" ");
        return De("svg", {
            width: 250,
            height: 14,
            viewBox: "0 0 250 14",
            children: [De("g", {
                children: De("polyline", {
                    stroke: "white",
                    fill: "none",
                    points: c
                })
            }), De("g", {
                children: !!n.length && n.filter((e => e.t >= l && e.t <= s)).map(((e, t) => {
                    let n = (e.t - l) / (s - l) * 250;
                    return isNaN(n) && (n = 0), De("g", {
                        children: De("line", {
                            className: "BandwidthSeriesDisplay_module_marker__e795ff85",
                            x1: n,
                            y1: "0",
                            x2: n,
                            y2: 14,
                            strokeWidth: "1",
                            stroke: Vp[e.type]
                        })
                    }, `${e.t}-${t}`)
                }))
            })]
        })
    };
const xp = ({
        title: e = "",
        value: t
    }) => De("div", {
        children: [De("dt", {
            children: e
        }), De("dd", {
            children: t
        })]
    }),
    Up = ({
        payloadId: e,
        showSessionId: t
    }) => {
        const n = Hu((e => e.debug.codec)),
            i = Hu((e => e.debug.isLive)),
            o = Hu((e => e.debug.isDash)),
            r = Hu((e => e.debug.delivery)),
            a = Hu((e => e.debug.resolution)),
            l = Hu((e => e.debug.embedSize)),
            s = Hu((e => e.debug.drmEnabled)),
            c = Hu((e => e.debug.sessionId)),
            d = Hu((e => e.debug.ecdnVendor)),
            u = Hu((e => e.debug.p2pSources)),
            _ = Hu((e => e.debug.p2pOffload)),
            p = Hu((e => e.debug.totalFrames)),
            m = Hu((e => e.debug.liveLatency)),
            v = Hu((e => e.debug.currentTime)),
            f = Hu((e => e.debug.bufferEnd)),
            g = Hu((e => e.debug.bufferAhead)),
            E = Hu((e => e.debug.bufferTarget)),
            b = Hu((e => e.debug.presentationDelay)),
            C = Hu((e => e.debug.droppedFrames)),
            y = Hu((e => e.debug.vrHeadsetName)),
            T = Hu((e => e.debug.liveSessionID)),
            L = Hu((e => e.debug.bandwidthKbps)),
            A = Hu((e => e.debug.bandwidthMinKbps)),
            I = Hu((e => e.debug.bandwidthMaxKbps)),
            S = Hu((e => e.debug.separateAudioVideo)),
            O = Hu((e => e.debug.bandwidthSeriesData)),
            P = Hu((e => e.debug.droppedFramesPercent)),
            R = Hu((e => e.debug.clipId)),
            {
                max: N,
                debugMarkers: w,
                timeSeries: D
            } = O;
        return De("dl", {
            className: "DebugValues_module_values__54d9bb7b",
            children: [R && De("div", h(h({}, xn((() => {
                Un(`${R}`)
            }))), {}, {
                children: [De("dt", {
                    children: "Clip ID:"
                }), De("br", {}), De("dd", {
                    className: "DebugValues_module_clipId__54d9bb7b",
                    children: R
                })]
            })), !!r && De(xp, {
                title: "Delivery:",
                value: r
            }), !!n && De(xp, {
                title: "Codec:",
                value: n
            }), !!a && De(xp, {
                title: "Playing:",
                value: a
            }), !!l && De(xp, {
                title: "Embed Size:",
                value: l
            }), o && De(xp, {
                title: "Separate AV:",
                value: `${S}`
            }), (o || i) && De(xp, {
                title: "Dropped Frames:",
                value: `${C} / ${p} - ${P}`
            }), !!y && De(xp, {
                title: "VR Hardware:",
                value: y
            }), !!d && De($e, {
                children: [De(xp, {
                    title: "eCDN Vendor:",
                    value: d
                }), De(xp, {
                    title: "Peers - P2P Delivery:",
                    value: `${u} - ${_}`
                })]
            }), s && De(xp, {
                title: "DRM:",
                value: s
            }), i && De($e, {
                children: [!!T && De(xp, {
                    title: "Live Session ID:",
                    value: T
                }), De(xp, {
                    title: "Live Latency / Target:",
                    value: `${m} / ${b}`
                })]
            }), De(xp, {
                title: "Playhead / Buffer End:",
                value: `${v} / ${f}`
            }), !!E && De(xp, {
                title: "Buffer Ahead / Target:",
                value: `${g} / ${E}`
            }), (o || i) && De($e, {
                children: [De(xp, {
                    title: "Bandwidth:",
                    value: L
                }), De("div", {
                    className: "DebugValues_module_bandwidthMinMax__54d9bb7b",
                    children: ["(", De("b", {
                        className: "DebugValues_module_bandwidthMin__54d9bb7b",
                        children: A
                    }), De("b", {
                        className: "DebugValues_module_bandwidthMax__54d9bb7b",
                        children: I
                    }), ")"]
                }), De("div", {
                    className: "DebugValues_module_timeSeries__54d9bb7b",
                    children: De(Bp, {
                        max: N,
                        debugMarkers: w,
                        timeSeries: D
                    })
                })]
            }), c && t && De("div", {
                children: [De("dt", {
                    children: "Key:"
                }), De("br", {}), De("dd", {
                    className: "DebugValues_module_sessionId__54d9bb7b",
                    children: c
                })]
            }), e && De("div", {
                children: [De("dt", {
                    children: "Debug Key:"
                }), De("br", {}), De("dd", {
                    className: "DebugValues_module_payloadId__54d9bb7b",
                    children: e
                })]
            })]
        })
    };
var Hp = "DebugPanel_module_button__f18a1b0a";
const Fp = ["bandwidthSeriesData"];

function Gp() {}
let Wp;
const Yp = He((({
        onCopyFailed: e,
        labelResetDelay: t,
        className: n
    }, i) => {
        const [o, r] = Pe(!1), a = Hu((e => e.debug)), {
            bandwidthSeriesData: l
        } = a, s = v(a, Fp), c = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            const n = {
                version: 2,
                tpl: s,
                mark: l.debugMarkers
            };
            return clearTimeout(Wp),
                function(e) {
                    if (e && e.then) return e.then(Gp)
                }(function(o, a) {
                    try {
                        var l = function() {
                            const o = btoa(JSON.stringify(n));
                            return function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(Un(o), (function(n) {
                                n ? (r(!0), Wp = setTimeout((() => {
                                    clearTimeout(Wp), r(!1)
                                }), t)) : e(), i.current.focus()
                            }))
                        }()
                    } catch (De) {
                        return a()
                    }
                    return l && l.then ? l.then(void 0, a) : l
                }(0, (function(t) {
                    e()
                })))
        }));
        return De(R_, {
            ref: i,
            className: n,
            onClick: c,
            children: o ? "Copied" : "Copy Debug Payload"
        })
    })),
    $p = ["bandwidthSeriesData"];
let Kp;

function qp() {}
const jp = ({
        onSendSuccess: e,
        labelResetDelay: t,
        className: n
    }) => {
        const {
            player_url: i,
            request: o
        } = Hu((e => e.config)), [r, a] = Pe(!1), [l, s] = Pe(!1), c = Hu((e => e.debug)), {
            bandwidthSeriesData: d
        } = c, u = v(c, $p), {
            signature: _,
            expires: p,
            timestamp: m
        } = o, f = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            const {
                clipId: n,
                payloadId: o
            } = u, r = `https://${i}/debug_payload/${n}/${o}?s=${_}&expires=${p}&time=${m}`, l = {
                version: 2,
                tpl: u,
                mark: d.debugMarkers
            };
            return clearTimeout(Kp),
                function(e) {
                    if (e && e.then) return e.then(qp)
                }(function(t, n) {
                    try {
                        var i = function(e, t) {
                            try {
                                var n = e()
                            } catch (De) {
                                return t(De)
                            }
                            return n && n.then ? n.then(void 0, t) : n
                        }((function() {
                            return function(e, t) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(je({
                                url: r,
                                method: "post",
                                json: l,
                                timeout: 1e4
                            }).json(), (function({
                                ID: t
                            }) {
                                e(t), a(!0)
                            }))
                        }), (function() {
                            s(!0)
                        }))
                    } catch (De) {
                        return n(!0, De)
                    }
                    return i && i.then ? i.then(n.bind(null, !1), n.bind(null, !0)) : n(!1, i)
                }(0, (function(e, n) {
                    return Kp = setTimeout((() => {
                            clearTimeout(Kp), a(!1), s(!1)
                        }), t),
                        function(e, t) {
                            if (e) throw t;
                            return t
                        }(e, n)
                })))
        }));
        let h = "Send Debug Payload";
        return r ? h = "Sent" : l && (h = "Something Went Wrong"), De(R_, {
            className: n,
            onClick: f,
            children: h
        })
    },
    zp = () => {
        const e = Hu((e => e.name)),
            t = Hu((e => e.appearance.playerBreakpoint)),
            n = Hu((e => e.displayList.debugPanel)),
            i = Hu((e => e.setDisplayList)),
            o = Hu((e => e.debug.isDNTEnabled)),
            r = Hu((e => e.debug.hideCloseButton)),
            a = Hu((e => e.debug.isCopyDisabled)),
            [l, s] = Pe(void 0),
            [c, d] = Pe(!1),
            u = Re(null),
            _ = Re(null),
            p = Re(null),
            m = e => i("debugPanel", e),
            v = !r && e !== yi.ChromelessPlayer,
            f = !a && e !== yi.ChromelessPlayer,
            g = $n("DebugPanel_module_root__f18a1b0a", A_.roundedBox, (t === or.XS || t === or.XXS) && "DebugPanel_module_smallPlayer__f18a1b0a"),
            {
                onFocus: E
            } = Qc({
                parentRef: u,
                isActive: n,
                onEscape: () => {
                    m(!1)
                }
            });
        return n && De("div", {
            ref: u,
            className: g,
            role: "dialog",
            "aria-label": "Debug log",
            onFocus: E,
            children: [De(Up, {
                payloadId: l,
                showSessionId: c
            }), f && De("div", {
                className: "DebugPanel_module_buttonWrapper__f18a1b0a",
                children: [De(Yp, {
                    labelResetDelay: 1500,
                    onCopyFailed: () => d(!0),
                    className: Hp,
                    ref: p
                }), De(jp, {
                    labelResetDelay: 1500,
                    onSendSuccess: e => s(e),
                    className: Hp
                })]
            }), v && De("button", h(h({}, xn((() => m(!1)))), {}, {
                className: "DebugPanel_module_closeButton__f18a1b0a",
                "aria-label": "Close stats debug panel",
                ref: _,
                children: De(Qu, {
                    name: td.DISMISS_X
                })
            })), !!o && "No Debug Key available as Do Not Track is enabled."]
        })
    };
const Xp = () => {
    const {
        link: e,
        img: t,
        margin: n,
        width: i,
        height: o,
        name: r,
        id: a
    } = Hu((e => e.badge)), l = Hu((e => e.setBadge)), s = Hu((e => e.displayList.badge)), c = r + " Badge", d = {};
    return n && Object.assign(d, {
        margin: n
    }), De(Yu, {
        visible: s,
        children: De("div", {
            className: `${yn.VP_BADGE} Badge_module_badge__7943985c`,
            style: d,
            "data-badge": !0,
            children: De(qu, {
                href: e,
                onClick: () => l("id", a),
                targetBlank: !0,
                className: `Badge_module_badgeLink__7943985c ${A_.focusable}`,
                children: De("img", {
                    src: t,
                    width: i,
                    height: o,
                    alt: c
                })
            })
        })
    })
};
const Zp = ({
    clip: e,
    is360: t,
    hasHDRNot10Plus: n,
    hasHDR10Plus: i,
    hasDolbyVision: o,
    hasAIContent: r,
    hasSurroundSound: a,
    hasAmbosonic: l,
    channelLayout: s,
    className: c
}) => {
    const d = $n("TitleTags_module_tag__68bba8ae", c);
    return De("div", {
        className: "TitleTags_module_tagWrapper__68bba8ae",
        children: [e && De("span", {
            className: d,
            children: "Clip"
        }), t && De("span", {
            className: d,
            children: l ? "360 ambisonic" : "360"
        }), n && De("span", {
            className: d,
            children: "HDR"
        }), i && De("span", {
            className: d,
            children: "HDR10+"
        }), o && De("span", {
            className: `${d} TitleTags_module_dolbyVisionTag__68bba8ae`,
            children: De(Qu, {
                name: td.DOLBY_VISION
            })
        }), r && De(qu, {
            href: "https://help.vimeo.com/hc/en-us/articles/25551485186833/",
            className: `${d} TitleTags_module_aiTag__68bba8ae`,
            "data-ai-content-tag": "true",
            children: "Includes AI"
        }), a && De("span", {
            className: d,
            children: s
        })]
    })
};
const Qp = () => {
    const e = Hu((e => e.title.displayTitle)),
        t = Hu((e => e.title.displayPortrait)),
        n = Hu((e => e.title.ownerLinkUrl)),
        i = Hu((e => e.title.targetBlank)),
        o = Hu((e => e.title.portraitImg)),
        r = Hu((e => e.title.titleLinkUrl)),
        a = Hu((e => e.title.title)),
        l = Hu((e => e.title.ownerName)),
        s = Hu((e => e.title.is360)),
        c = Hu((e => e.title.hasHDR)),
        d = Hu((e => e.title.hasHDR10Plus)),
        u = Hu((e => e.title.hasDolbyVision)),
        _ = Hu((e => e.title.channelLayout)),
        p = Hu((e => e.title.bylineLinkUrl)),
        m = Hu((e => e.title.displayByline)),
        v = Hu((e => e.title.hasAIContent)),
        f = "5.1" === _ || "7.1" === _,
        g = _.startsWith("ambisonic"),
        E = Hu((e => e.displayList.title)),
        b = Hu((e => e.embed.badge)),
        C = Hu((e => e.displayList.badge)),
        [y, T] = Pe(t && !C),
        L = {
            is360: s,
            hasHDRNot10Plus: c && !d,
            hasHDR10Plus: d,
            hasDolbyVision: u,
            hasAIContent: v,
            hasSurroundSound: f,
            clip: Hu((e => e.playback.isSegmentedPlaybackEnabled))
        },
        A = Object.values(L).some(Boolean);
    return Oe((() => {
        let e;
        return !C && t ? e = setTimeout((() => T(!0)), Us) : T(!1), () => clearTimeout(e)
    }), [C, t]), De($e, {
        children: [b && De(Xp, {}), De(Yu, {
            visible: E,
            children: De("div", {
                className: `${yn.VP_TITLE} Title_module_title__c87a7c0c`,
                role: "presentation",
                children: De("header", {
                    className: "Title_module_header__c87a7c0c",
                    role: "presentation",
                    children: [y && De("div", {
                        className: "Title_module_portrait__c87a7c0c",
                        children: De(qu, {
                            href: n,
                            targetBlank: i,
                            variant: "minimal",
                            className: $n("Title_module_portraitLink__c87a7c0c", A_.focusableCircle),
                            tabIndex: E ? 0 : -1,
                            children: De("img", {
                                src: o,
                                alt: "Link to video owner's profile",
                                width: "60",
                                height: "60",
                                "data-trackClick": Ut
                            })
                        })
                    }), De("div", {
                        className: "Title_module_headers__c87a7c0c",
                        children: [e && De("div", {
                            className: "Title_module_titleWrapper__c87a7c0c",
                            children: [De(qu, {
                                href: r,
                                targetBlank: i,
                                "data-track-click": Bt,
                                variant: "minimal",
                                className: $n("Title_module_titleLink__c87a7c0c", A_.focusable),
                                tabIndex: E ? 0 : -1,
                                "aria-labelledby": On.TITLE_TEXT
                            }), De("div", {
                                className: "Title_module_textAndTagsWrapper__c87a7c0c",
                                "data-title-tags": !!A || void 0,
                                children: [De(T_, {
                                    id: On.TITLE_TEXT,
                                    className: $n("Title_module_titleText__c87a7c0c"),
                                    children: a
                                }), De(Zp, h(h({}, L), {}, {
                                    hasAmbosonic: g,
                                    channelLayout: _,
                                    className: "Title_module_titleTag__c87a7c0c"
                                }))]
                            })]
                        }), m && De(qu, {
                            href: p,
                            targetBlank: i,
                            variant: "minimal",
                            className: $n("Title_module_subtitle__c87a7c0c", A_.focusable),
                            tabIndex: E ? 0 : -1,
                            children: De(T_, {
                                children: l
                            })
                        })]
                    })]
                })
            })
        })]
    })
};
var Jp = "Card_module_text__449914f1";
const em = ({
    id: e,
    timecode: t,
    className: n,
    teaser: i,
    url: o,
    imageUrl: r,
    headline: a,
    inView: l
}) => {
    const s = Hu((e => e.appearance.isVerticalVideo)),
        c = Hu((e => e.setCards)),
        d = Hu((e => e.setPlayback)),
        u = () => {
            c("hoveredCard", null), c("cardPressed", e), o && d("paused", !0)
        },
        _ = $n("Card_module_card__449914f1", n, l && "Card_module_active__449914f1", r && "Card_module_hasThumbnail__449914f1", s && "Card_module_vertical__449914f1");
    return De("div", {
        className: _,
        onMouseEnter: () => c("hoveredCard", t),
        onMouseLeave: () => c("hoveredCard", null),
        onClick: u,
        onKeyUp: e => {
            "Enter" === e.key && u()
        },
        role: "link",
        tabIndex: -1,
        "aria-hidden": !l,
        children: De(qu, {
            href: o,
            className: "Card_module_inner__449914f1",
            tabIndex: l ? 0 : -1,
            children: [!!r && De("div", {
                className: "Card_module_imageWrap__449914f1",
                children: De("img", {
                    className: "Card_module_image__449914f1",
                    src: r,
                    alt: ""
                })
            }), De("div", {
                className: "Card_module_body__449914f1",
                children: [De(T_, {
                    size: cr.MD,
                    className: $n(Jp, "Card_module_title__449914f1"),
                    color: ur.WHITE,
                    children: a
                }), !!i && De(T_, {
                    weight: dr.NORMAL,
                    element: "p",
                    className: `${Jp} Card_module_detail__449914f1`,
                    color: ur.WHITE,
                    children: i
                })]
            }), !!o && De("div", {
                className: "Card_module_popOutWrapper__449914f1",
                children: De(Qu, {
                    name: td.POP_OUT,
                    className: "Card_module_popOut__449914f1"
                })
            })]
        })
    })
};
const tm = () => {
    const e = Hu((e => e.cards.cardsMap)),
        t = Hu((e => e.cards.displayedCard)),
        n = Hu((e => e.displayList.cards)),
        i = Hu((e => e.displayList.fullPlayerElement)),
        o = e => t === e && !i;
    return n && De("div", {
        className: "Cards_module_cardsWrapper__9492d3ed",
        children: e.values().map((e => De(em, {
            id: e.id,
            timecode: e.timecode,
            className: e.className,
            teaser: e.teaser,
            url: e.url,
            imageUrl: e.imageUrl,
            headline: e.headline,
            inView: o(e.timecode)
        }, e.id)))
    })
};
const nm = ({
    show: e
}) => {
    const {
        buffering: t,
        currentTime: n,
        loadedTime: i,
        currentFragment: o
    } = Hu((e => e.playback)), r = Xn(n, o), a = Xn(i, o);
    return e && De("div", {
        className: "TinyProgressBar_module_tinyBar__71fa705b",
        children: De("svg", {
            className: "TinyProgressBar_module_tinyBarSVG__71fa705b",
            width: "100%",
            height: "100%",
            viewBox: "0 0 70 40",
            focusable: "false",
            children: [De("defs", {
                children: [De("clipPath", {
                    id: "rounded-border",
                    children: De("rect", {
                        height: "100%",
                        width: "100%",
                        x: "0",
                        y: "0",
                        rx: "5"
                    })
                }), De("pattern", {
                    id: "tiny-buffer",
                    "data-tiny-buffer-pattern": !0,
                    className: "TinyProgressBar_module_bufferPattern__71fa705b",
                    patternUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    children: [De("line", {
                        x1: "5",
                        y1: "-1",
                        x2: "-5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), De("line", {
                        x1: "10",
                        y1: "-1",
                        x2: "0",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    }), De("line", {
                        x1: "15",
                        y1: "-1",
                        x2: "5",
                        y2: "10",
                        strokeWidth: "2",
                        strokeLinecap: "butt"
                    })]
                })]
            }), De("g", {
                clipPath: "url(#rounded-border)",
                children: t ? De("rect", {
                    className: "TinyProgressBar_module_buffer__71fa705b",
                    height: "3",
                    width: "110%",
                    x: "0",
                    y: "37",
                    fill: "url(#tiny-buffer)"
                }) : De($e, {
                    children: [De("rect", {
                        className: "TinyProgressBar_module_loaded__71fa705b",
                        "data-tiny-loaded": !0,
                        height: "3",
                        width: Qn(a),
                        x: "0",
                        y: "37"
                    }), De("rect", {
                        className: "TinyProgressBar_module_played__71fa705b",
                        "data-tiny-played": !0,
                        height: "3",
                        width: Qn(r),
                        x: "0",
                        y: "37"
                    })]
                })
            })]
        })
    })
};
var im = "PlayButton_module_trailer__d1afd73a",
    om = "PlayButton_module_progressExpanded__d1afd73a";
const rm = ({
    className: e,
    controlBarVisibilityHandlers: t
}) => {
    const n = Hu((e => e.displayList.controlBar)),
        i = Hu((e => e.liveEvent.isLiveEvent)),
        o = Hu((e => e.liveEvent.isPlayable)),
        r = Hu((e => e.liveEvent.isArchived)),
        a = Hu((e => e.liveEvent.isEnded)),
        l = Hu((e => e.liveEvent.dvrEnabled)),
        s = Hu((e => e.setPlayback)),
        c = Hu((e => e.controlBar.trailerButtonText)),
        d = Hu((e => e.embed.playbar)),
        u = Hu((e => e.appearance.playerSizeMode)),
        _ = Hu((e => e.controlBar.progressBarExpanded)),
        {
            buttonState: p,
            setButtonState: m
        } = Pc(),
        v = Fc(),
        f = !i || o || r || l && a,
        h = u === Ti.TINY || !d,
        g = p === Pi.TRAILER,
        E = {
            [Pi.PLAY]: {
                icon: td.PLAY,
                onClick: () => {
                    s("paused", !1), m(Pi.PAUSE)
                },
                label: "Play",
                className: "PlayButton_module_playIcon__d1afd73a"
            },
            [Pi.PAUSE]: {
                icon: td.PAUSE,
                onClick: () => {
                    s("paused", !0), m(Pi.PLAY)
                },
                label: "Pause",
                className: "PlayButton_module_pauseIcon__d1afd73a"
            },
            [Pi.REPLAY]: {
                icon: td.REPLAY,
                onClick: () => {
                    s("paused", !1), m(Pi.PAUSE)
                },
                label: "Play",
                className: "PlayButton_module_replayIcon__d1afd73a"
            },
            [Pi.TRAILER]: {
                icon: td.PLAY,
                onClick: () => {
                    s("paused", !1)
                },
                label: "Play",
                className: "PlayButton_module_trailerIcon__d1afd73a"
            }
        }[p],
        b = v === Hc.CENTER,
        C = $n("PlayButton_module_playButtonWrapper__d1afd73a", b && "PlayButton_module_center__d1afd73a", g && im, _ && !b && om),
        y = $n("PlayButton_module_playButton__d1afd73a", g && im, A_.focusable, _ && !b && om, e);
    return f && De(Yu, {
        visible: n,
        children: De("div", {
            className: C,
            children: De(h_, {
                id: "play-button-tooltip",
                tooltipContent: E.label,
                className: "Tooltip_module_playTooltip__d9b61844 " + (g ? "Tooltip_module_trailerPlayTooltip__d9b61844" : ""),
                children: De(R_, {
                    className: y,
                    onClick: E.onClick,
                    icon: De(Qu, {
                        className: E.className,
                        name: E.icon
                    }),
                    onTouchStart: t.onTouchStart,
                    onTouchEnd: t.onTouchEnd,
                    onMouseEnter: t.onMouseEnter,
                    onMouseLeave: t.onMouseLeave,
                    "data-play-button": !0,
                    children: [De(nm, {
                        show: h
                    }), g && De("span", {
                        className: "PlayButton_module_text__d1afd73a",
                        children: c || "Watch Trailer"
                    })]
                })
            })
        })
    })
};
var am = "ControlBarButton_module_controlBarButton__179d9b92";
const lm = e => {
        const t = Hu((e => e.displayList.menu));
        return (o.touch || t) && Object.assign(e, {
            visible: !1
        }), De(h_, h({}, e))
    },
    sm = ["className", "icon", "children", "tooltipLabel", "hasTooltip", "animating", "id"],
    cm = He(((e, t) => {
        let {
            className: n = "",
            icon: i,
            children: o,
            tooltipLabel: r,
            hasTooltip: a = !0,
            animating: l = !1,
            id: s
        } = e, c = v(e, sm);
        const d = Hu((e => e.appearance.playerBreakpoint)),
            u = Hu((e => e.displayList.controlBarButtons)),
            _ = $n(am, A_.focusable, n),
            p = ["xl", "xxl"].includes(d) ? 16 : 8,
            m = u ? 0 : -1;
        return a ? De(lm, {
            id: s ? `${s}-tooltip` : null,
            tooltipContent: r,
            margin: p,
            animating: l,
            children: De(R_, h(h({
                id: s,
                ref: t,
                className: _,
                icon: i,
                tabIndex: m
            }, c), {}, {
                children: o
            }))
        }) : De(R_, h({
            ref: t,
            className: _,
            icon: i,
            tabIndex: m
        }, c))
    }));
const dm = ({
    onFocus: e,
    ariaHidden: t
}) => {
    const n = Hu((e => e.appearance.fullscreen)),
        i = Hu((e => e.setAppearance)),
        o = $n(yn.FULLSCREEN, "FullscreenButton_module_fullscreen__81b38f0e"),
        r = n ? "Exit full screen" : "Fullscreen",
        a = n ? td.EXIT_FULLSCREEN : td.ENTER_FULLSCREEN;
    return De(cm, {
        id: Rn.FULLSCREEN,
        onClick: () => i("fullscreen", !n),
        onFocus: e,
        className: o,
        icon: De(Qu, {
            name: a
        }),
        tooltipLabel: r,
        "data-fullscreen-button": !0,
        "aria-hidden": t
    })
};
const um = He((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const {
            onClick: r,
            onKeyDown: a
        } = Oc((() => t(!e)));
        return De(cm, {
            id: Rn.PREFS,
            ref: o,
            className: `${yn.VP_PREFS} PrefsButton_module_prefsButton__cdff1984`,
            "aria-expanded": e,
            "aria-haspopup": "true",
            "aria-hidden": i,
            icon: De(Qu, {
                name: td.GEAR,
                className: "PrefsButton_module_gearIcon__cdff1984"
            }),
            onClick: r,
            onKeyDown: a,
            onFocus: n,
            tooltipLabel: "Settings",
            "data-prefs-button": !0
        })
    })),
    _m = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = Hu((e => e.appearance.pictureInPictureActive)),
            i = Hu((e => e.setAppearance)),
            o = n ? "Exit Picture-in-Picture" : "Picture-in-Picture",
            r = n ? td.EXIT_PICTURE_IN_PICTURE : td.ENTER_PICTURE_IN_PICTURE;
        return De(cm, {
            id: Rn.PIP,
            className: yn.PIP,
            icon: De(Qu, {
                name: r,
                className: n ? yn.ON : ""
            }),
            onClick: () => i("pictureInPictureActive", !n),
            onFocus: e,
            tooltipLabel: o,
            "data-pip-button": !0,
            "aria-hidden": t
        })
    },
    pm = He((({
        onFocus: e,
        ariaHidden: t
    }, n) => {
        const i = Hu((e => e.playback.volume)),
            o = Hu((e => e.playback.muted)),
            r = o ? "Unmute" : "Mute",
            {
                toggleMuted: a
            } = Gc();
        return De(cm, {
            ref: n,
            onClick: a,
            onFocus: e,
            icon: De(Qu, !o && i > 0 ? {
                name: td.VOLUME_ON_FILLED,
                "data-volume-icon": !0
            } : {
                name: td.VOLUME_OFF_FILLED,
                "data-volume-muted-icon": !0
            }),
            "aria-label": r,
            "aria-hidden": t,
            "aria-keyshortcuts": "m",
            "data-volume-button": !0,
            hasTooltip: !1
        })
    }));
const mm = () => {
        const e = Hu((e => e.controlBar.vimeoLogoUrl)),
            t = Hu((e => e.appearance.playerBreakpoint));
        return De(qu, {
            className: $n("VimeoLogoLink_module_vimeoLogo__7428a3b3", A_.focusable),
            href: e,
            "data-vimeo-logo": !0,
            "aria-label": "Watch on Vimeo",
            children: De(tp, {
                playerBreakpoint: t
            })
        })
    },
    vm = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = Hu((e => e.appearance.showAirPlayPicker)),
            i = Hu((e => e.setAppearance)),
            o = n ? "Turn off AirPlay" : "Choose an AirPlay device";
        return De(cm, {
            onClick: () => i("showAirPlayPicker", !n),
            onFocus: e,
            className: yn.AIRPLAY,
            "aria-label": o,
            "aria-hidden": t,
            tooltipLabel: "AirPlay",
            "data-airplay-button": !0,
            icon: De(Qu, {
                name: td.AIRPLAY,
                className: n ? yn.ON : ""
            })
        })
    },
    fm = He((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const {
            onClick: r,
            onKeyDown: a
        } = Oc((() => t(!e)));
        return De(cm, {
            ref: o,
            className: yn.VP_CHAPTER_BUTTON,
            onClick: r,
            onKeyDown: a,
            onFocus: n,
            "aria-expanded": e,
            "aria-haspopup": "true",
            "aria-hidden": i,
            icon: De(Qu, {
                name: td.CHAPTERS
            }),
            tooltipLabel: "Chapters",
            "data-chapter-button": !0,
            id: Rn.CHAPTERS
        })
    })),
    hm = He((({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        onFocus: n,
        ariaHidden: i
    }, o) => {
        const r = Hu((e => e.captions.activeTextTrackId)),
            {
                onClick: a,
                onKeyDown: l
            } = Oc((() => t(!e))),
            s = r && "off" !== r ? td.CC_FILLED : td.CC;
        return De(cm, {
            id: Rn.CC,
            ref: o,
            className: yn.CC,
            "aria-haspopup": "true",
            "aria-expanded": e,
            "aria-hidden": i,
            icon: De(Qu, {
                name: s
            }),
            onClick: a,
            onKeyDown: l,
            onFocus: n,
            tooltipLabel: "CC/Subtitles",
            "data-cc-button": !0
        })
    })),
    gm = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = Hu((e => e.setAppearance)),
            i = Hu((e => e.appearance.stereoscopicEnabled)),
            o = i ? "Disable stereoscopic playback" : "Enable stereoscopic playback";
        return De(cm, {
            className: yn.STEREOSCOPIC,
            onClick: () => n("stereoscopicEnabled", !i),
            onFocus: e,
            "aria-label": o,
            "aria-hidden": t,
            icon: De(Qu, {
                name: td.STEREOSCOPIC
            }),
            tooltipLabel: "Stereoscopic",
            "data-stereoscopic-button": !0
        })
    };
const Em = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = $n(Tn.EXCLUDE_GLOBAL_BUTTON_STYLES, "ChromecastButton_module_chromecastButton__a2d33bfd", am, A_.focusable, yn.VP_CAST_BUTTON);
        return (() => {
            const [e, t] = Pe(!1);
            Oe((() => {
                setTimeout((() => t(!0)), 500)
            }), [])
        })(), De(h_, {
            id: "chromecast-control-bar-button-tooltip",
            tooltipContent: "GoogleCast",
            children: De("button", {
                className: n,
                is: "google-cast-button",
                "data-chromecast-button": !0,
                onFocus: e,
                "aria-hidden": t
            })
        })
    },
    bm = ({
        onFocus: e,
        ariaHidden: t
    }) => {
        const n = Uc(),
            i = Hu((e => e.displayList.transcript)),
            o = Hu((e => e.toggleDisplayList)),
            r = "Transcript",
            {
                onClick: a,
                onKeyDown: l
            } = Oc((() => {
                o("transcript"), n(gr.EMBEDDED_TRANSCRIPT_CLICK, {
                    name: i ? "exit_embed_transcript" : "open_embed_transcript",
                    copy: r,
                    location: "control_bar",
                    element: "transcript_button",
                    current_transcript_language: ""
                })
            })),
            s = De(Qu, {
                name: i ? td.TRANSCRIPT_ON : td.TRANSCRIPT_OFF
            }),
            c = i ? [An.TRANSCRIPT_VIEWER, Ln.RIGHT_CONTENT_AREA].join(" ") : Ln.RIGHT_CONTENT_AREA;
        return De(cm, {
            id: Rn.TRANSCRIPT,
            onClick: a,
            onKeyDown: l,
            onFocus: e,
            icon: s,
            tooltipLabel: r,
            "aria-controls": c,
            "aria-expanded": i,
            "aria-haspopup": "true",
            "aria-hidden": t
        })
    };
const Cm = () => {
    const e = Hu((e => e.displayList.controlBarButtons)),
        t = Hu((e => e.setDisplayList)),
        n = Re(e),
        [i, o] = Pe(!1),
        r = Hu((e => e.setControlBar));
    Oe((() => {
        e !== n.current && o(!0), n.current = e
    }), [e]);
    const a = e ? "Hide controls" : "Show controls",
        l = $n("CollapseButton_module_collapseButton__4f243c31", e && "CollapseButton_module_expanded__4f243c31");
    return De(cm, {
        id: Rn.COLLAPSE,
        onClick: () => {
            const n = !e;
            r("shouldRestoreButtonsDisplayed", n), t("controlBarButtons", n)
        },
        onTransitionEnd: e => {
            "transform" === e.propertyName && o(!1)
        },
        tooltipLabel: a,
        animating: i,
        tabIndex: 0,
        icon: De(Qu, {
            "data-collapse-icon": !0,
            name: td.CHEVRON_RIGHT,
            className: l
        })
    })
};
var ym = "CustomLogo_module_progressExpanded__a7229b47";
const Tm = ({
        className: e
    }) => {
        const t = Hu((e => e.displayList.controlBar)),
            n = Hu((e => e.displayList.accessGate)),
            i = Hu((e => e.appearance.playerSizeMode)) === Ti.TINY,
            o = Hu((e => e.embed.customLogo)),
            r = Hu((e => e.displayList.ad)),
            {
                customLogoUrl: a,
                customLogoImg: l,
                customLogoSticky: s
            } = Hu((e => e.embed.customLogoFields)),
            c = Hu((e => e.user.ownerName)),
            d = Hu((e => e.controlBar.progressBarExpanded)),
            u = o && !i && !r,
            _ = !n && (s || t),
            p = $n(yn.CUSTOM_LOGO, "CustomLogo_module_customLogo__a7229b47", a ? "CustomLogo_module_link__a7229b47" : "", A_.focusable, e, d && ym),
            m = $n("CustomLogo_module_customLogoImg__a7229b47", d && ym);
        return u && De(Yu, {
            visible: !!_,
            children: De(L_, {
                classNames: p,
                imgClassNames: m,
                url: a,
                img: l,
                imgAlt: c
            })
        })
    },
    Lm = ({
        className: e,
        marker: t
    }) => {
        const n = Hu((e => e.setPlayback)),
            i = Hu((e => e.playback.currentFragment)),
            o = (t.startTime - i.startTime) / i.duration * 100,
            r = e => n("currentTime", e.path[0].dataset.time),
            a = "Seek to " + Math.round(100 * t.startTime) / 100 + " seconds.";
        return De("div", {
            id: `cuepoint-${t.id}`,
            className: e,
            style: {
                left: `${o}%`
            },
            "data-time": t.startTime,
            role: "button",
            "aria-label": a,
            tabIndex: 0,
            onClick: r,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && r(e)
            },
            "data-cue-point-marker": !0
        })
    };
const Am = () => {
    const e = Hu((e => e.playback.currentFragment)),
        t = Hu((e => e.cuePoints.cuePoints)),
        n = Hu((e => e.displayList.progressBar)),
        i = $n("CuePointMarkers_module_cuePoints__cc046812", A_.focusableMarker, yn.CUEPOINT),
        o = t.filter((t => e.startTime <= t.time && t.time <= e.endTime)).map((e => ({
            id: e.id,
            startTime: e.time
        }))),
        r = !!o.length && n;
    return De($e, {
        children: r && o.map((e => De(Lm, {
            className: i,
            marker: e
        }, e.startTime)))
    })
};
const Im = () => {
    const e = Hu((e => e.playback.currentTime)),
        t = Hu((e => e.playback.currentFragment)),
        n = Hu((e => e.liveEvent.isLiveEvent)),
        i = Hu((e => e.liveEvent.isArchived)),
        o = Hu((e => e.playback.liveEdgeTime)),
        r = Hu((e => e.playback.liveTailTime)),
        a = Hu((e => e.playback.atLiveEdge)),
        l = Hu((e => e.displayList.progressBar)),
        s = zn(e, t),
        c = {
            progressBar: "Progress Bar",
            ariaTextVOD: di(s) + " of " + di(t.duration),
            ariaTextLiveEdge: "Live time at " + di(o),
            ariaTextLiveDVR: di(Math.abs(o - s)) + " behind Live"
        };
    let d = c.ariaTextVOD,
        u = 0,
        _ = t.duration;
    return n && !i && (d = a ? c.ariaTextLiveEdge : c.ariaTextLiveDVR, u = Math.round(r), _ = Math.round(o)), De("div", {
        className: `FocusTarget_module_focusTarget__00a969cc ${A_.focusable}`,
        role: "slider",
        "aria-label": c.progressBar,
        "aria-valuemin": u,
        "aria-valuemax": _,
        "aria-valuenow": Math.round(s),
        "aria-valuetext": d,
        tabIndex: l ? 0 : -1,
        "data-progress-bar-focus-target": !0
    })
};
const Sm = ({
        marker: e,
        setTabFocused: t,
        setHoverFocused: n
    }) => {
        const i = Hu((e => e.setPlayback)),
            o = Hu((e => e.playback.currentFragment)),
            r = (e.start - o.startTime) / o.duration,
            a = {
                visibleLabel: e.visibleLabel,
                ariaLabel: e.ariaLabel,
                id: e.id,
                start: e.start,
                left: r
            },
            l = $n("InteractiveMarker_module_interactiveMarker__2cec5fab", yn.VP_INTERACTIVE_MARKER, A_.focusableMarker);

        function s(e) {
            i("currentTime", e.path[0].dataset.time, {
                action: e.type,
                seekType: "interactive-marker"
            })
        }
        return De("div", {
            className: l,
            role: "button",
            style: {
                left: Qn(r, !1)
            },
            "aria-label": e.ariaLabel,
            "data-time": e.start,
            tabIndex: 0,
            onClick: s,
            onKeyUp: e => {
                ["Space", "Enter"].includes(e.code) && s(e)
            },
            onMouseEnter: () => n(a),
            onMouseLeave: () => n(null),
            onFocus: () => t(a),
            onBlur: () => t(null),
            "data-hotspot-marker": !0
        })
    },
    Om = ({
        markers: e,
        setHoverFocused: t,
        setTabFocused: n
    }) => {
        const i = Hu((e => e.displayList.progressBar));
        return De($e, {
            children: i && e.map((e => De(Sm, {
                marker: e,
                setTabFocused: n,
                setHoverFocused: t
            }, e.start)))
        })
    };
const Pm = ({
        time: e,
        left: t,
        visible: n = !0,
        disabled: i = !1
    }) => De(Yu, {
        visible: n,
        children: De("div", {
            className: "Timecode_module_timecodeContainer__2fac2855",
            role: "presentation",
            style: {
                left: t
            },
            "aria-hidden": "true",
            "data-progress-bar-timecode-container": !0,
            children: De("div", {
                className: "Timecode_module_timecode__2fac2855 " + (i ? "Timecode_module_disabled__2fac2855" : ""),
                "data-progress-bar-timecode": !0,
                children: di(e)
            })
        })
    }),
    Rm = () => {
        const e = Hu((e => e.playback.currentTime)),
            t = Hu((e => e.playback.liveEdgeTime)),
            n = Hu((e => e.playback.liveTailTime)),
            i = Hu((e => e.playback.atLiveEdge)),
            o = Hu((e => e.playback.currentFragment)),
            r = Hu((e => e.playback.playInitiated)),
            a = Hu((e => e.playback.paused)),
            l = Hu((e => e.playback.buffering)),
            s = Hu((e => e.displayList.progressBar)),
            c = Hu((e => e.liveEvent.isLiveEvent)),
            d = Hu((e => e.liveEvent.dvrEnabled)),
            u = Hu((e => e.liveEvent.isEnded)),
            _ = Hu((e => e.liveEvent.isArchived)),
            [p, m] = Pe(c ? t : o.duration),
            v = c && !_ ? 1 : 0,
            [f, h] = Pe(v);
        Oe((() => {
            const a = zn(e, o);
            if (c)
                if (d) {
                    if (d) {
                        const a = u && !r && 0 === e,
                            l = _ && 0 !== o.duration;
                        a ? (m(o.duration), h(0)) : l ? (m(e), h(e / o.duration)) : i ? (h(1), m(e)) : (h(ni(e, n, t)), m(e - t))
                    }
                } else _ && (r || 0 !== e) ? (h(Xn(e, o)), m(a)) : _ ? (m(o.duration), h(v)) : (h(1), m(e));
            else r || 0 !== a ? (h(Xn(e, o)), m(a)) : (m(o.duration), h(v))
        }), [e, r, o, c, u, _, t, i]);
        const g = (!c || _ || d && 0 !== t || !a && !l && 0 !== t) && !isNaN(p) && s;
        return De(Pm, {
            time: p,
            left: Qn(f, !1),
            disabled: c && !d,
            visible: g
        })
    };
var Nm = "ThumbnailPreview_module_text__a900d8d1";
const wm = {
        xs: 120,
        md: 160,
        xl: 200
    },
    Dm = ({
        visible: e = !1,
        mousePercent: t = 0,
        progressBarWidth: n,
        isMousedOverProgress: i = !1,
        tabOrHoverFocusedMarker: o = null
    }) => {
        const r = Hu((e => e.displayList.menu)),
            a = Hu((e => e.playback.currentFragment)),
            l = Hu((e => e.playback.duration)),
            s = Hu((e => e.playback.liveEdgeTime)),
            c = Hu((e => e.playback.liveTailTime)),
            d = Hu((e => e.liveEvent.isLiveEvent)),
            u = Hu((e => e.liveEvent.dvrEnabled)),
            _ = Hu((e => e.liveEvent.isArchived)),
            p = Hu((e => e.appearance.boundingClientRect)),
            m = Hu((e => e.appearance.isVerticalVideo)),
            v = Hu((e => e.appearance.playerBreakpoint)),
            f = Hu((e => e.verifyConfig)),
            g = Hu((e => e.chapters.chapters)),
            E = Hu((e => e.embed.chapters)),
            b = Hu((e => e.controlBar.thumbnailPreview)),
            C = Hu((e => e.playback.isSegmentedPlaybackEnabled)),
            [y, T] = Pe({
                width: 0,
                height: 0,
                backgroundImage: "",
                backgroundSize: "",
                backgroundPosition: ""
            }),
            [L, A] = Pe(!1),
            I = p.height > 300 && n >= 185,
            S = 0 !== s && !isNaN(s);
        let O = I && !r && (!d || u && S) && e;
        const [P, R] = Pe(0);
        i ? R(t) : o ? R(o.left) : O = !1;
        const N = Jn(P, a);
        let w;
        w = u ? _ && 0 !== a.duration ? ei(P, a) : ((e, t, n) => ti(e, t, n) - n)(P, c, s) : ei(P, a), isNaN(w) && (O = !1);
        let D = "";
        if (g.length && E && !C) {
            const e = g.find((e => e.startTime <= N && e.endTime >= N));
            D = (null == e ? void 0 : e.text) || ""
        }
        const k = (null == o ? void 0 : o.visibleLabel) || "",
            M = (e => {
                switch (e) {
                    case or.XL:
                    case or.XXL:
                        return "xl";
                    case or.SM:
                    case or.MD:
                    case or.LG:
                        return "md";
                    default:
                        return "xs"
                }
            })(v),
            V = ((e, t) => wm[e] * (t ? 9 / 16 : 1))(M, m),
            B = V / (null == b ? void 0 : b.frame_width);
        return Oe((() => {
            !L && I && e && b && f().then((() => Cd(b.url).then((() => {
                A(!0), T({
                    width: b.frame_width * B,
                    height: b.frame_height * B,
                    backgroundImage: `url(${b.url})`,
                    backgroundSize: `${b.width*B}px ${b.height*B}px`,
                    backgroundPosition: ""
                })
            })))).catch((() => {}))
        }), [e, L, I, b, B, f]), Oe((() => {
            A(!1)
        }), [b]), Oe((() => {
            b && T((e => h(h({}, e), {}, {
                width: b.frame_width * B,
                height: b.frame_height * B,
                backgroundSize: `${b.width*B}px ${b.height*B}px`
            })))
        }), [v]), Oe((() => {
            if (b && I) {
                let e = 0,
                    t = 0;
                if (b) {
                    const n = l / b.frames,
                        i = Math.min(b.frames - 1, Math.ceil(N / n)),
                        o = i % b.columns,
                        r = Math.floor(i / b.columns);
                    e = -o * b.frame_width * B, t = -r * b.frame_height * B
                }
                T((n => h(h({}, n), {}, {
                    backgroundPosition: `${e}px ${t}px`
                })))
            }
        }), [P, p, b, I, l, B, N]), De(Yu, {
            visible: O,
            children: De("div", {
                className: `${yn.THUMB_PREVIEW} ThumbnailPreview_module_thumbnailPreview__a900d8d1`,
                role: "presentation",
                "aria-hidden": "true",
                style: {
                    left: Qn(P, !1),
                    maxWidth: V
                },
                children: [!!y.backgroundImage && L && De("div", {
                    className: `${yn.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__a900d8d1`,
                    style: {
                        width: `${y.width}px`,
                        height: `${y.height}px`,
                        backgroundImage: y.backgroundImage,
                        backgroundSize: y.backgroundSize,
                        backgroundPosition: y.backgroundPosition
                    }
                }), De("div", {
                    className: "ThumbnailPreview_module_thumbnailPreviewText__a900d8d1",
                    children: [k && De("span", {
                        className: Nm,
                        children: k
                    }), k && D && De("span", {
                        className: "ThumbnailPreview_module_separator__a900d8d1"
                    }), D && De("span", {
                        className: Nm,
                        children: D
                    }), De("span", {
                        className: "ThumbnailPreview_module_time__a900d8d1",
                        children: di(w)
                    })]
                })]
            })
        })
    };
const km = ({
    segment: e,
    isExpanded: t
}) => {
    const n = Hu((e => e.playback.currentFragment)),
        i = Hu((e => e.playback.loadedTime)),
        o = Hu((e => e.playback.currentTime)),
        r = Hu((e => e.playback.liveEdgeTime)),
        a = Hu((e => e.playback.liveTailTime)),
        l = Hu((e => e.playback.atLiveEdge)),
        s = Hu((e => e.liveEvent.isLiveEvent)),
        c = Hu((e => e.liveEvent.dvrEnabled)),
        d = Hu((e => e.liveEvent.isPlayable)),
        u = Hu((e => e.liveEvent.isArchived)),
        _ = Hu((e => e.liveEvent.isEnded)),
        p = Hu((e => e.playback.playInitiated)),
        m = s && !u,
        v = 0 !== r && !isNaN(r);
    let f, h;
    const g = s ? 1 : ((e, t) => (e.endTime - e.startTime) / t.duration)(e, n);
    if (s)
        if (c) {
            if (c) {
                const t = _ && !p && 0 === o,
                    s = u && 0 !== n.duration;
                t ? (f = 0, h = 0) : s ? (f = Zn(i, e), h = Zn(o, e)) : l ? (f = 1, h = 1) : (f = ni(i, a, r), h = ni(o, a, r))
            }
        } else u ? (f = Zn(i, e), h = Zn(o, e)) : (f = d ? 1 : 0, h = 0);
    else f = Zn(i, e), h = Zn(o, e);
    const E = Qn(g, !1),
        b = Qn(h, !1),
        C = Qn(f),
        y = $n("ChapterSegment_module_chapterWrapper__7241288a", m && (!c || !v) && "ChapterSegment_module_disabled__7241288a", t && "ChapterSegment_module_expanded__7241288a"),
        T = e.startTime === n.startTime ? 0 : 2;
    return De("div", {
        className: y,
        style: {
            width: `calc(${E} - ${T}px)`
        },
        children: De("div", {
            className: "ChapterSegment_module_chapter__7241288a",
            children: [De("div", {
                className: "ChapterSegment_module_loaded__7241288a " + (n.duration < 60 ? "ChapterSegment_module_shortVideo__7241288a" : ""),
                style: {
                    width: C
                },
                "data-progress-bar-loaded": !0
            }), De("div", {
                className: "ChapterSegment_module_played__7241288a",
                style: {
                    width: b
                },
                "data-progress-bar-played": !0
            })]
        })
    })
};
const Mm = ({
    hoveredChapterId: e
}) => {
    const t = Hu((e => e.playback.currentFragment)),
        n = Hu((e => e.chapters.chapters)),
        i = Hu((e => e.embed.chapters)),
        o = Hu((e => e.appearance.playerBreakpoint)),
        r = Hu((e => e.playback.isSegmentedPlaybackEnabled)),
        a = Hu((e => e.controlBar.progressBarExpanded));
    let l;
    return l = o === or.XXS || !i || r ? [{
        startTime: t.startTime,
        endTime: t.endTime
    }] : ((e, t) => {
        const n = ii(e, t);
        let i = [];
        return 0 === n.length ? i.push({
            startTime: t.startTime,
            endTime: t.endTime
        }) : n.forEach(((e, o) => {
            let r = e.startTime,
                a = e.endTime;
            0 === o && e.startTime > t.startTime && i.push({
                startTime: t.startTime,
                endTime: e.startTime
            }), 0 === o && e.startTime < t.startTime && (r = t.startTime), o === n.length - 1 && e.endTime > t.endTime && (a = t.endTime), i.push({
                startTime: r,
                endTime: a,
                chapterId: e.startTime
            })
        })), i
    })(n, t), De("div", {
        className: "ChapterSegments_module_chapterSegmentsWrapper__e2d21102",
        children: l.map((t => De(km, {
            segment: t,
            isExpanded: a || t.chapterId === e
        }, t.startTime)))
    })
};
const Vm = "scrubbing",
    Bm = ({
        hoveredChapterId: t
    }) => {
        const n = Hu((e => e.chapters.chapters)),
            i = Hu((e => e.embed.chapters)),
            r = Hu((e => e.playback.currentFragment)),
            a = Hu((e => e.playback.liveEdgeTime)),
            l = Hu((e => e.playback.liveTailTime)),
            s = Hu((e => e.liveEvent.isLiveEvent)),
            c = Hu((e => e.liveEvent.isArchived)),
            d = Hu((e => e.liveEvent.dvrEnabled)),
            u = Hu((e => e.playback.atLiveEdge)),
            _ = Hu((e => e.controlBar.progressBarExpanded)),
            p = Hu((e => e.displayList.progressBar)),
            m = Hu((e => e.setControlBar)),
            f = Hu((e => e.setPlayback)),
            g = Hu((e => e.element)),
            E = Hu((e => e.interactive.hotspots)),
            b = Hu((e => e.interactive.polls)),
            C = Hu((e => e.interactive.showMarkers)),
            y = Uc(),
            [T, L] = Pe(!1),
            [A, I] = Pe(!1),
            [S, O] = Pe(0),
            [P, R] = Pe(null),
            [N, w] = Pe(null),
            [D, k] = Pe(null),
            M = Re(null),
            V = Re(null),
            B = Re(!1),
            x = Re(!1),
            U = Re(!1),
            H = Re(null),
            F = Re(null),
            [G, W] = Pe(qn(null == H ? void 0 : H.current)),
            Y = Re(G);

        function $() {
            const e = qn(null == H ? void 0 : H.current);
            W(e), Y.current = e
        }
        const K = G.rightOffsetValue - G.leftOffsetValue;
        ed(H, (() => {
            $()
        }));
        const q = Re(u),
            j = Re(c);
        Oe((() => {
            q.current = u, j.current = c
        }), [u, c]);
        const z = (e, t = 3) => St(yt((e - Y.current.leftOffsetValue) / (Y.current.rightOffsetValue - Y.current.leftOffsetValue), 0, 1), t),
            X = e => {
                e ? g.classList.add(Vm) : g.classList.remove(Vm)
            };

        function Z(e) {
            const {
                clientX: t
            } = e, n = z(t);
            O(n)
        }

        function Q(e) {
            if (2 === (null == e ? void 0 : e.button) || null != e && e.ctrlKey) return;
            if (f("scrubbing", !0), X(!0), "pointerdown" === e.type || "MSPointerDown" === e.type) {
                R(e.pointerId);
                try {
                    e.target.msSetPointerCapture ? e.target.msSetPointerCapture(P) : e.target.setPointerCapture(P)
                } catch (De) {}
                document.addEventListener("pointermove", J), document.addEventListener("pointerup", ee)
            } else "touchstart" === e.type ? (document.addEventListener("touchmove", J), document.addEventListener("touchend", ee), clearTimeout(M.current), clearTimeout(V.current), M.current = setTimeout((() => {
                m("progressBarExpanded", !0), U.current || (B.current = !0)
            }), Us)) : (document.addEventListener("mousemove", J), document.addEventListener("mouseup", ee));
            const t = jn(e),
                o = z(t),
                s = !d || c && 0 !== r.duration ? Jn(o, r) : ti(o, l, a);
            f("currentTime", s), (e => {
                if (!n.length || !i) return;
                const t = ((e, t) => t.reduce(((t, n) => {
                    if (null === t) return n;
                    const i = n.startTime - e,
                        o = t.startTime - e;
                    return Math.abs(i) > Math.abs(o) ? t : n
                }), null))(e, n);
                if (!t) return;
                const o = t.startTime,
                    a = e - o,
                    l = Math.abs(a) <= 5,
                    s = ii(n, r);
                y(gr.CHAPTER_SEGMENT_CLICK, {
                    seek_event_start_time: e,
                    is_chapter_seek: l,
                    nearest_chapter_start_time: o,
                    chapter_seek_event_delta: a,
                    total_no_chapters_at_seek: n.length,
                    fragment_no_chapters_at_seek: s.length
                })
            })(s)
        }

        function J(e) {
            if (P && P !== e.pointerId || !1 === e.isPrimary) return;
            if (B.current) return;
            const t = jn(e),
                n = z(t),
                i = !d || c && 0 !== r.duration ? Jn(n, r) : ti(n, l, a);
            f("currentTime", i), O(n)
        }

        function ee(e) {
            const t = e.type;
            "pointerup" === t || "MSPointerUp" === t ? (document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", ee), R(null)) : "touchend" === t ? (document.removeEventListener("touchmove", J), document.removeEventListener("touchend", ee), B.current = !1, clearTimeout(M.current), clearTimeout(V.current), U.current ? V.current = setTimeout((() => {
                x.current = !0, m("progressBarExpanded", !1)
            }), Us) : (x.current = !0, m("progressBarExpanded", !1))) : (document.removeEventListener("mousemove", J), document.removeEventListener("mouseup", ee)), f("scrubbing", !1), X(!1), d && !j.current && y(q.current ? gr.SEEK_TO_LIVE_EDGE : gr.SEEK_BEHIND_LIVE_EDGE)
        }
        Oe((() => () => {
            document.removeEventListener("touchmove", J), document.removeEventListener("touchend", ee), document.removeEventListener("mousemove", J), document.removeEventListener("mouseup", ee), document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", ee)
        }), []);
        let te = {};
        (!s || d && a || c) && (te = o.pointerEvents ? {
            onPointerDown: Q
        } : {
            onTouchStart: Q,
            onMouseDown: Q
        });
        const ne = function({
                hotspots: t = [],
                polls: n = [],
                fragment: i,
                progressBarWidth: o
            }) {
                const r = function(t, n) {
                    return [].concat(e(t.map((e => ({
                        id: e.hotspotId,
                        label: Jo,
                        start: e.start,
                        visibleLabel: e.name,
                        ariaLabel: e.name,
                        name: e.name
                    })))), e(n.map((e => ({
                        id: e.pollId,
                        label: er,
                        name: e.questionText,
                        visibleLabel: e.questionText,
                        ariaLabel: e.questionText,
                        start: e.start
                    })))))
                }(t, n);
                let a, l = 1,
                    s = [],
                    c = [];
                return r.sort(((e, t) => e.start - t.start)).reduce(((e, t) => {
                    let {
                        label: n
                    } = t, r = v(t, Qo);
                    if (!(i.startTime <= r.start && r.start <= i.endTime)) return e;
                    if (n === Jo ? r.visibleLabel = "Hotspot: " + r.name : n === er && (r.visibleLabel = "Poll: " + r.name), r.ariaLabel = r.visibleLabel, r.leftPositionInProgressBar = function(e) {
                            return (e - i.startTime) / i.duration * 100
                        }(r.start), n === er ? s.push(r.name) : n === Jo && c.push(r.name), !e.length) return function(e, t, n) {
                        return e.push(t), a = n, e
                    }(e, r, n);
                    const d = e.length - 1,
                        u = function(e, t, n, i) {
                            const o = tr(e, n, i),
                                r = tr(t, n, i);
                            return Math.floor(r - o)
                        }(e[d].start - i.startTime, r.start - i.startTime, i.duration, o);
                    return !isNaN(u) && u <= 5 ? (l += 1, n !== a ? function(e, t) {
                        a = "Hotspots & Polls", e[t].visibleLabel = "Hotspots & Polls", e[t].name = "Hotspots & Polls", e[t].ariaLabel = c.length + " hotspots: " + c.join(", ") + "; " + s.length + " polls: " + s.join(", ")
                    }(e, d) : n === Jo ? function(e, t, n) {
                        e[t].visibleLabel = l + " hotspots", e[t].name += `, ${n.name}`, e[t].ariaLabel = l + " hotspots: " + e[t].name
                    }(e, d, r) : n === er && function(e, t, n) {
                        e[t].visibleLabel = l + " polls", e[t].name += `, ${n.name}`, e[t].ariaLabel = l + " polls: " + e[t].name
                    }(e, d, r)) : isNaN(u) || function(e, t, n) {
                        l = 1, e.push(t), a = n, s = [], c = []
                    }(e, r, n), e
                }), [])
            }({
                hotspots: E,
                polls: b,
                fragment: r,
                progressBarWidth: K
            }),
            ie = !!ne.length && C,
            oe = $n("ProgressBar_module_progressBarContainer__8f93bbb9", !p && "ProgressBar_module_progressHidden__8f93bbb9", _ && "ProgressBar_module_progressExpanded__8f93bbb9"),
            re = $n(yn.VP_PROGRESS, "ProgressBar_module_progressBar__8f93bbb9");
        return De("div", {
            className: oe,
            ref: F,
            onTransitionEnd: function(e) {
                e.target === (null == F ? void 0 : F.current) && "flex-shrink" === e.propertyName && (B.current ? U.current = !0 : x.current && (U.current = !1), B.current = !1, x.current = !1)
            },
            children: De("div", h(h({
                className: re,
                "data-progress-bar": !0,
                ref: H,
                onMouseEnter: e => {
                    $(), Z(e), I(!0)
                },
                onMouseMove: e => {
                    Z(e), L(!1), w(null)
                },
                onMouseLeave: () => I(!1),
                onFocus: () => L(!0),
                onBlur: () => L(!1),
                role: "presentation"
            }, te), {}, {
                children: [De(Im, {}), De(Mm, {
                    hoveredChapterId: t
                }), De(Am, {}), ie && De(Om, {
                    markers: ne,
                    setTabFocused: w,
                    setHoverFocused: k
                }), De(Dm, {
                    visible: A || T,
                    mousePercent: S,
                    isMousedOverProgress: A,
                    progressBarWidth: K,
                    tabOrHoverFocusedMarker: N || D
                }), De(Rm, {})]
            }))
        })
    };
const xm = ({
        setMenuDisplayed: e
    }) => {
        const t = Hu((e => e.setDisplayList));
        return De(R_, {
            className: "DebugPanelButton_module_debugPanelButton__9c678770",
            onClick: () => {
                e(!1), t("debugPanel", !0)
            },
            icon: De(Qu, {
                className: "DebugPanelButton_module_debugPanelButtonIcon__9c678770",
                name: td.INFO_CIRCLE
            }),
            color: ar.ALTERNATIVE,
            iconSize: rr.XS,
            "aria-haspopup": "dialog",
            children: De(T_, {
                size: cr.SM,
                weight: dr.NORMAL,
                children: "Debug log"
            })
        })
    },
    Um = {
        [Nc.EMPTY]: () => De($e, {}),
        [Nc.PREFS]: ({
            setPanel: e,
            setMenuDisplayed: t
        }) => {
            const n = Hu((e => e.embed.speedChangeEnabled)),
                i = Hu((e => e.embed.multipleAudioTracks)),
                r = Hu((e => e.embed.quality)),
                a = Hu((e => e.playback.qualities)),
                l = Hu((e => e.playback.currentQuality)),
                s = Hu((e => e.playback.playbackRates)),
                c = Hu((e => e.playback.audioTracks)),
                d = r && (null == a ? void 0 : a.length) > 0,
                u = i && (null == c ? void 0 : c.length) > 1,
                _ = (e = []) => {
                    var t;
                    return null == (t = e.find((e => e.active))) ? void 0 : t.label
                },
                p = _(s),
                m = {
                    quality: {
                        label: "Quality",
                        value: "Auto" === l ? "Auto" : l,
                        onSelect: () => e(Nc.QUALITY),
                        hasPopup: !0
                    },
                    speed: {
                        label: "Speed",
                        value: "Normal" === p ? "Normal" : p,
                        onSelect: () => e(Nc.SPEED),
                        hasPopup: !0
                    },
                    audio: {
                        label: "Audio",
                        value: _(c),
                        onSelect: () => e(Nc.AUDIO),
                        hasPopup: !0
                    }
                };
            return De($e, {
                children: [d && De(a_, h({}, m.quality)), n && De(a_, h({}, m.speed)), u && De(a_, h({}, m.audio)), o.touch && De($e, {
                    children: [De(n_, {
                        buffer: !0
                    }), De(xm, {
                        setMenuDisplayed: t
                    })]
                })]
            })
        },
        [Nc.QUALITY]: () => {
            const {
                qualities: e
            } = Hu((e => e.playback)), t = Hu((e => e.setPlayback)), n = e.map((e => h(h({}, e), {}, {
                label: "Auto" === e.label ? "Auto" : e.label
            })));
            return De(d_, {
                items: n,
                onSelect: e => t("qualities", e.currentTarget.dataset.id)
            })
        },
        [Nc.SPEED]: () => {
            const {
                playbackRates: e
            } = Hu((e => e.playback)), t = Hu((e => e.setPlayback)), n = e.map((e => h(h({}, e), {}, {
                label: "Normal" === e.label ? "Normal" : e.label
            })));
            return De(d_, {
                items: n,
                onSelect: e => t("playbackRates", e.currentTarget.dataset.id)
            })
        },
        [Nc.AUDIO]: () => {
            var e;
            const t = Hu((e => e.playback.audioTracks)),
                n = Hu((e => e.setPlayback)),
                i = Uc(),
                o = Re(!1),
                r = Re(null == (e = t.find((e => e.enabled))) ? void 0 : e.label);
            return Oe((() => (i(gr.MULTI_AUDIO_TRACK_CLICK, {
                event_name: "audio_menu_opened",
                has_selected_track: o.current,
                initial_track: r.current
            }), () => {
                i(gr.MULTI_AUDIO_TRACK_CLICK, {
                    event_name: "audio_menu_closed",
                    has_selected_track: o.current,
                    initial_track: r.current
                })
            })), [i]), De(d_, {
                items: t,
                onSelect: e => {
                    n("audioTracks", e.currentTarget.dataset.id), o.current = !0, i(gr.MULTI_AUDIO_TRACK_CLICK, {
                        event_name: "select_audio_track",
                        track_selected: e.currentTarget.innerText,
                        has_selected_track: o.current,
                        initial_track: r.current
                    })
                }
            })
        }
    },
    Hm = {
        [Nc.EMPTY]: () => De($e, {}),
        [Nc.QUALITY]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Quality",
            onBack: e,
            setMenuDisplayed: t
        }),
        [Nc.SPEED]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Speed",
            onBack: e,
            setMenuDisplayed: t
        }),
        [Nc.PREFS]: ({
            setMenuDisplayed: e
        }) => Hu((e => e.appearance.isMenuBlockingUI)) && De(i_, {
            title: "Settings",
            setMenuDisplayed: e
        }),
        [Nc.AUDIO]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Audio",
            onBack: e,
            setMenuDisplayed: t
        })
    },
    Fm = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i
    }) => {
        const o = Nc.PREFS,
            {
                panel: r,
                setPanel: a,
                goToPreviousPanel: l
            } = Ud(o, e),
            s = Hu((e => e.playback.playbackRates)),
            c = (e => Um[e] || Um[Nc.EMPTY])(r),
            d = (e => Hm[e] || Hm[Nc.EMPTY])(r),
            u = r === Nc.SPEED ? s.length : null;
        return De(Ju, {
            ariaLabel: "Settings",
            type: Rc.PREFS,
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: r,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: Ni.PrefsMenu,
            panelContent: De(c, {
                setPanel: a,
                setMenuDisplayed: t
            }),
            headerContent: De(d, {
                setPanel: a,
                setMenuDisplayed: t
            }),
            resizeDependencies: u,
            onBack: l
        })
    },
    Gm = ({
        setMenuDisplayed: e
    }) => Hu((e => e.appearance.isMenuBlockingUI)) && De(i_, {
        title: "Chapters",
        setMenuDisplayed: e
    });
const Wm = ({
    linkUrl: e,
    hoverStyles: t,
    chapterId: n,
    ariaDescribedBy: i
}) => {
    const r = Re(null),
        a = Re(null),
        [l, s] = Pe(!1),
        c = $n(o.touch && "CopyLinkButton_module_touchDevice__b24b40c0", "CopyLinkButton_module_copyLinkButton__b24b40c0", t),
        d = () => {
            clearTimeout(r.current), clearTimeout(a.current)
        },
        u = Uc(),
        _ = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function(t) {
            return t.preventDefault(), t.stopPropagation(),
                function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(Un(e), (function() {
                    u(gr.SHARE_CHAPTER, {
                        chapter_id: n
                    }), s(!0), d(), r.current = setTimeout((() => s(!1)), 2e3)
                }))
        }));
    return De(h_, {
        id: "copy-link-button-tooltip",
        tooltipContent: l || o.touch ? De("span", {
            className: "CopyLinkButton_module_linkCopied__b24b40c0",
            children: [De(Qu, {
                name: td.CHECKMARK,
                className: "CopyLinkButton_module_linkCopiedIcon__b24b40c0"
            }), "Link copied"]
        }) : "Copy link",
        visible: l,
        position: v_.LEFT,
        margin: 4,
        preventFocusOnClick: !0,
        children: De(R_, {
            icon: De("div", {
                className: "CopyLinkButton_module_shareIconContainer__b24b40c0",
                children: De(Qu, {
                    name: td.LINK
                })
            }),
            iconSize: rr.MD,
            className: c,
            onMouseLeave: () => {
                d(), a.current = setTimeout((() => s(!1)), 150)
            },
            onClick: _,
            role: "menuitem",
            "aria-describedby": i
        })
    })
};
var Ym = "ChaptersPanelMenuOption_module_active__15af45db";
const $m = ({
        startTime: e,
        id: t,
        chapterId: n,
        active: i,
        label: o,
        onMouseEnter: r,
        onMouseLeave: a,
        onSelect: l
    }) => {
        const {
            onClick: s,
            onKeyDown: c
        } = Oc(l), d = $n("ChaptersPanelMenuOption_module_chapterListItem__15af45db", i && Ym), u = $n(i && Ym, "ChaptersPanelMenuOption_module_chapterListButton__15af45db", Tn.EXCLUDE_GLOBAL_BUTTON_STYLES), _ = Hu((e => e.embed.parentUrl)), p = Hu((e => e.chapters.chapterShareBaseUrl)), m = Hu((e => e.debug.clipId)), v = _ ? function(e, t, n) {
            const [i] = n.split("#");
            return `${i}#vimeo_chapter_${e}=${t}`
        }(m, n, _) : function(e, t) {
            if (!t) return "";
            const [n] = t.split("#");
            return `${n}#chapter=${e}`
        }(n, p);
        return De("div", {
            className: d,
            children: [De("button", h(h({
                id: t,
                role: "menuitem",
                "data-id": t,
                "data-testid": "chapter-list-item-button",
                tabIndex: 0,
                className: u,
                onClick: s,
                onKeyDown: c,
                onMouseEnter: r,
                onMouseLeave: a
            }, f_), {}, {
                children: De("div", {
                    className: "ChaptersPanelMenuOption_module_chapterInfoContainer__15af45db",
                    children: [De("div", {
                        className: "ChaptersPanelMenuOption_module_chapterTitleText__15af45db",
                        children: o
                    }), De("div", {
                        className: "ChaptersPanelMenuOption_module_chapterStartTime__15af45db",
                        children: di(e)
                    })]
                })
            })), v && De(Wm, {
                linkUrl: v,
                chapterId: n,
                hoverStyles: "ChaptersPanelMenuOption_module_copyLinkButton__15af45db",
                ariaDescribedBy: t
            })]
        }, t)
    },
    Km = ({
        setMenuDisplayed: e,
        onMenuOptionMouseEnter: t,
        onMenuOptionMouseLeave: n
    }) => {
        const i = Hu((e => e.events)),
            o = Hu((e => e.chapters.chapters)),
            r = Hu((e => e.chapters.activeCueId)),
            a = o.map((e => ({
                label: e.text,
                id: e.cueId,
                active: e.cueId === r,
                startTime: e.startTime,
                chapterId: e.chapterId
            })));
        return De(d_, {
            items: a,
            onSelect: t => {
                const n = t.currentTarget.dataset.id;
                "string" == typeof n && i.fire(zt._chapterSeekAttempted, parseFloat(n) + .001, "menu"), e(!1)
            },
            onMenuOptionMouseEnter: t,
            onMenuOptionMouseLeave: n,
            itemComponent: $m
        })
    },
    qm = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        onMenuOptionMouseEnter: o,
        onMenuOptionMouseLeave: r
    }) => De(Ju, {
        ariaLabel: "Chapters",
        type: Rc.CHAPTERS,
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        panel: Nc.CHAPTERS,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        panelContent: De(Km, {
            setMenuDisplayed: t,
            onMenuOptionMouseEnter: o,
            onMenuOptionMouseLeave: r
        }),
        headerContent: De(Gm, {
            setMenuDisplayed: t
        })
    });
const jm = ({
    updateMetricsPayload: e
}) => {
    const t = Hu((e => e.resetCaptionsStyles));
    return De(R_, h(h({
        className: `${Tn.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__33762fc2 ${A_.focusable}`,
        withActive: !1,
        styled: !1,
        role: "menuitem"
    }, xn((() => {
        t(), e({
            has_reset_all: !0,
            final_action_reset_all: !0
        })
    }))), {}, {
        children: De("span", {
            children: "Reset all"
        })
    }))
};
const zm = () => {
        const e = Hu((e => e.captions.fontSize)),
            t = Hu((e => e.captions.fontFamily)),
            n = Hu((e => e.captions.fontOpacity)),
            i = Hu((e => e.captions.color)),
            o = Hu((e => e.captions.bgColor)),
            r = Hu((e => e.captions.bgOpacity)),
            a = Hu((e => e.captions.windowOpacity)),
            l = Hu((e => e.captions.windowColor)),
            s = Hu((e => e.captions.edgeStyle)),
            c = Hu((e => e.appearance.videoHeight));
        return De("div", {
            className: "PreviewWindow_module_previewWindow__13200e2c",
            role: "menuitem",
            children: De("div", {
                className: "PreviewWindow_module_checkeredBackground__13200e2c",
                children: De(V_, {
                    cues: [{
                        html: "This is a preview\n of a caption"
                    }],
                    fontSize: e,
                    fontFamily: t,
                    fontOpacity: n,
                    color: i,
                    bgColor: o,
                    bgOpacity: r,
                    windowOpacity: a,
                    windowColor: l,
                    edgeStyle: s,
                    height: c
                })
            })
        })
    },
    Xm = ({
        setPanel: e
    }) => {
        const t = Hu((e => e.appearance.isMenuBlockingUI)),
            n = Hu((e => e.appearance.isMenuVerticalVideoMode));
        return (t || n) && De($e, {
            children: [De(n_, {}), De(a_, {
                label: "Preview",
                onSelect: () => e(Nc.PREVIEW),
                hasPopup: !0
            })]
        })
    },
    Zm = {
        [Nc.EMPTY]: () => De($e, {}),
        [Nc.LANGUAGES]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = Hu((e => e.captions.textTracks)),
                i = Hu((e => e.setCaptions)),
                o = {
                    customize: {
                        label: "Customize",
                        onSelect: () => {
                            e(Nc.CUSTOMIZE), t({
                                has_clicked_customize: !0
                            })
                        },
                        hasPopup: !0
                    }
                };
            return De($e, {
                children: [De(d_, {
                    items: n,
                    onSelect: e => {
                        i("activeTextTrackId", e.currentTarget.dataset.id)
                    }
                }), De(n_, {
                    buffer: !0
                }), De(a_, h({}, o.customize)), De(Xm, {
                    setPanel: e
                })]
            })
        },
        [Nc.CUSTOMIZE]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = {
                font: {
                    label: "Font",
                    onSelect: () => {
                        e(Nc.FONT), t({
                            has_clicked_font: !0
                        })
                    },
                    size: wc.SMALL,
                    hasPopup: !0
                },
                background: {
                    label: "Background",
                    onSelect: () => {
                        e(Nc.BACKGROUND), t({
                            has_clicked_background: !0
                        })
                    },
                    size: wc.SMALL,
                    hasPopup: !0
                },
                window: {
                    label: "Window",
                    onSelect: () => {
                        e(Nc.WINDOW), t({
                            has_clicked_window: !0
                        })
                    },
                    size: wc.SMALL,
                    hasPopup: !0
                }
            };
            return De($e, {
                children: [De(a_, h({}, n.font)), De(a_, h({}, n.background)), De(a_, h({}, n.window)), De(jm, {
                    updateMetricsPayload: t
                }), De(Xm, {
                    setPanel: e
                })]
            })
        },
        [Nc.FONT]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = Hu((e => e.setCaptions)),
                i = Hu((e => e.captions.fontSize)),
                o = Hu((e => e.captions.fontFamily)),
                r = Hu((e => e.captions.fontOpacity)),
                a = Hu((e => e.captions.color)),
                l = Hu((e => e.captions.edgeStyle)),
                s = ya(),
                c = () => t({
                    has_changed_font: !0,
                    has_customized: !0,
                    final_action_reset_all: !1
                }),
                d = {
                    fontFamily: {
                        label: s.fontFamily.title,
                        items: Kn(s.fontFamily.items, o),
                        onSelect: e => {
                            n("fontFamily", e.currentTarget.dataset.id), c()
                        },
                        id: Nn.FONT_FAMILY_ACCORDION
                    },
                    color: {
                        label: s.color.title,
                        labelId: Nn.VP_CC_FONT_COLOR_LABEL,
                        items: Kn(s.color.items, a),
                        onSelect: e => {
                            n("color", e.currentTarget.dataset.id), c()
                        }
                    },
                    fontSize: {
                        label: s.fontSize.title,
                        labelId: Nn.VP_CC_FONT_SIZE_LABEL,
                        items: Kn(s.fontSize.items, `${i}`),
                        onSelect: e => {
                            n("fontSize", e.currentTarget.dataset.id), c()
                        }
                    },
                    fontOpacity: {
                        label: s.fontOpacity.title,
                        labelId: Nn.VP_CC_FONT_OPACITY_LABEL,
                        items: Kn(s.fontOpacity.items, r),
                        onSelect: e => {
                            n("fontOpacity", e.currentTarget.dataset.id), c()
                        }
                    },
                    edgeStyle: {
                        label: s.edgeStyle.title,
                        labelId: Nn.VP_CC_FONT_EDGE_STYLE_LABEL,
                        items: Kn(s.edgeStyle.items, l),
                        onSelect: e => {
                            n("edgeStyle", e.currentTarget.dataset.id), c()
                        },
                        id: Nn.FONT_FAMILY_ACCORDION
                    }
                };
            return De($e, {
                children: [De(u_, h({}, d.fontFamily)), De(m_, h({}, d.color)), De(p_, h({}, d.fontSize)), De(p_, h({}, d.fontOpacity)), De(u_, h({}, d.edgeStyle)), De(jm, {
                    updateMetricsPayload: t
                }), De(Xm, {
                    setPanel: e
                })]
            })
        },
        [Nc.BACKGROUND]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = Hu((e => e.setCaptions)),
                i = Hu((e => e.captions.bgColor)),
                o = Hu((e => e.captions.bgOpacity)),
                r = ya(),
                a = () => t({
                    has_changed_background: !0,
                    final_action_reset_all: !1,
                    has_customized: !0
                }),
                l = {
                    bgColor: {
                        label: r.bgColor.title,
                        labelId: Nn.VP_CC_BACKGROUND_COLOR_LABEL,
                        items: Kn(r.bgColor.items, i),
                        onSelect: e => {
                            n("bgColor", e.currentTarget.dataset.id), a()
                        }
                    },
                    bgOpacity: {
                        label: r.bgOpacity.title,
                        labelId: Nn.VP_CC_BACKGROUND_OPACITY_LABEL,
                        items: Kn(r.bgOpacity.items, o),
                        onSelect: e => {
                            n("bgOpacity", e.currentTarget.dataset.id), a()
                        }
                    }
                };
            return De($e, {
                children: [De(m_, h({}, l.bgColor)), De(p_, h({}, l.bgOpacity)), De(jm, {
                    updateMetricsPayload: t
                }), De(Xm, {
                    setPanel: e
                })]
            })
        },
        [Nc.WINDOW]: ({
            setPanel: e,
            updateMetricsPayload: t
        }) => {
            const n = Hu((e => e.setCaptions)),
                i = Hu((e => e.captions.windowOpacity)),
                o = Hu((e => e.captions.windowColor)),
                r = ya(),
                a = () => t({
                    has_changed_window: !0,
                    final_action_reset_all: !1,
                    has_customized: !0
                }),
                l = {
                    windowColor: {
                        label: r.windowColor.title,
                        labelId: Nn.VP_CC_WINDOW_COLOR_LABEL,
                        items: Kn(r.windowColor.items, o),
                        onSelect: e => {
                            n("windowColor", e.currentTarget.dataset.id), a()
                        }
                    },
                    windowOpacity: {
                        label: r.windowOpacity.title,
                        labelId: Nn.VP_CC_WINDOW_OPACITY_LABEL,
                        items: Kn(r.windowOpacity.items, i),
                        onSelect: e => {
                            n("windowOpacity", e.currentTarget.dataset.id), a()
                        }
                    }
                };
            return De($e, {
                children: [De(m_, h({}, l.windowColor)), De(p_, h({}, l.windowOpacity)), De(jm, {
                    updateMetricsPayload: t
                }), De(Xm, {
                    setPanel: e
                })]
            })
        },
        [Nc.PREVIEW]: ({
            updateMetricsPayload: e
        }) => De($e, {
            children: [De(zm, {}), De(jm, {
                updateMetricsPayload: e
            })]
        })
    },
    Qm = {
        [Nc.EMPTY]: () => De($e, {}),
        [Nc.LANGUAGES]: ({
            setMenuDisplayed: e
        }) => Hu((e => e.appearance.isMenuBlockingUI)) && De(i_, {
            title: "CC/Subtitles",
            setMenuDisplayed: e
        }),
        [Nc.CUSTOMIZE]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Customize",
            onBack: e,
            setMenuDisplayed: t
        }),
        [Nc.FONT]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Font",
            onBack: e,
            setMenuDisplayed: t
        }),
        [Nc.BACKGROUND]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Background",
            onBack: e,
            setMenuDisplayed: t
        }),
        [Nc.WINDOW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Window",
            onBack: e,
            setMenuDisplayed: t
        }),
        [Nc.PREVIEW]: ({
            onBack: e,
            setMenuDisplayed: t
        }) => De(i_, {
            title: "Preview",
            onBack: e,
            setMenuDisplayed: t
        })
    },
    Jm = ({
        isMenuDisplayed: e,
        setMenuDisplayed: t,
        buttonRef: n,
        progressBarAndButtonsRef: i,
        updateMetricsPayload: o
    }) => {
        const r = Nc.LANGUAGES,
            {
                panel: a,
                setPanel: l,
                goToPreviousPanel: s
            } = Ud(r, e),
            c = (e => Zm[e] || Zm[Nc.EMPTY])(a),
            d = (e => Qm[e] || Qm[Nc.EMPTY])(a);
        return De(Ju, {
            type: Rc.CC,
            ariaLabel: "CC/Subtitles",
            isMenuDisplayed: e,
            setMenuDisplayed: t,
            panel: a,
            buttonRef: n,
            progressBarAndButtonsRef: i,
            toggleKey: Ni.CCMenu,
            onBack: s,
            panelContent: De(c, {
                setPanel: l,
                setMenuDisplayed: t,
                onBack: s,
                updateMetricsPayload: o
            }),
            headerContent: De(d, {
                setPanel: l,
                setMenuDisplayed: t,
                onBack: s
            })
        })
    };
const ev = ({
    buttonProperties: e = {}
}) => {
    const t = Re(null),
        n = Re(null),
        i = Hu((e => e.setPlayback)),
        r = Hu((e => e.setDisplayList)),
        a = Hu((e => e.playback.volume)),
        l = Hu((e => e.playback.muted)) ? 0 : a,
        s = Hu((e => e.playback.supportsSettingVolume)),
        c = Hu((e => e.displayList.controlBar)),
        [d, u] = Pe(!1),
        _ = 100 * l,
        [p, m] = Pe(!1),
        [v, f] = Pe(!1),
        g = $c(pr.VOLUME_SLIDER) && s,
        E = d && g,
        b = Math.round(100 * l) + "% volume";
    Oe((() => {
        c || u(!1)
    }), [c]);
    const C = e => {
            O(e)
        },
        y = () => {
            u(!0), r("menu", !1)
        },
        T = e => {
            Yn(t.current, e) || Yn(null == n ? void 0 : n.current, e) || u(!1), m(!1), document.removeEventListener("mouseup", T), document.removeEventListener("mousemove", C), document.removeEventListener("pointerup", T), document.removeEventListener("pointermove", C)
        },
        L = e => {
            m(!0), O(e), o.pointerEvents ? (document.addEventListener("pointerup", T), document.addEventListener("pointermove", C)) : (document.addEventListener("mouseup", T), document.addEventListener("mousemove", C))
        },
        A = () => {
            p || u(!1)
        },
        I = () => f(!0),
        S = () => f(!1);

    function O(e) {
        let n = e.clientY;
        e.targetTouches && e.targetTouches.length && (n = e.targetTouches[0].clientY, e.preventDefault());
        const o = function(e) {
            const n = Et(t.current).top,
                i = Et(t.current).bottom;
            return yt((i - e) / (i - n), 0, 100)
        }(n);
        i("volume", o)
    }
    const P = $n("VolumeControl_module_volumeControl__a0c94891", yn.VOLUME, A_.focusable),
        R = $n("VolumeControl_module_volumeBar__a0c94891", v || p ? "VolumeControl_module_mouseEnteredSlider__a0c94891" : ""),
        N = !g || e.ariaHidden || void 0,
        w = o.pointerEvents ? {
            onPointerEnter: y,
            onPointerLeave: A
        } : {
            onMouseEnter: y,
            onMouseLeave: A
        },
        D = o.pointerEvents ? {
            onPointerDown: L,
            onPointerEnter: I,
            onPointerLeave: S
        } : {
            onMouseDown: L,
            onMouseEnter: I,
            onMouseLeave: S
        };
    return De("div", h(h({
        className: "VolumeControl_module_volumeControlContainer__a0c94891"
    }, w), {}, {
        "data-volume-control-container": !0,
        children: [De(pm, h({
            ref: n
        }, e)), De(Yu, {
            visible: E,
            children: De("div", h(h({
                role: "slider",
                className: P,
                ref: t,
                tabIndex: g ? 0 : -1,
                "aria-label": "Volume (use up/down arrow keys to change)",
                "aria-valuenow": 100 * l,
                "aria-valuetext": b,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-hidden": N,
                onBlur: () => {
                    p || u(!1)
                },
                onFocus: () => {
                    u(!0), r("menu", !1)
                },
                onTouchMove: O
            }, D), {}, {
                "data-volume-control": !0,
                children: De("div", {
                    className: R,
                    children: [De("div", {
                        className: "VolumeControl_module_volumeBarFill__a0c94891",
                        style: {
                            height: `${_}%`
                        }
                    }), De("div", {
                        className: "VolumeControl_module_sliderHandle__a0c94891",
                        style: {
                            bottom: `${_}%`
                        }
                    })]
                })
            }))
        })]
    }))
};
var tv = "ControlBarButtonsAndMenus_module_progressHidden__83ef5043",
    nv = "ControlBarButtonsAndMenus_module_buttonsHidden__83ef5043",
    iv = "ControlBarButtonsAndMenus_module_collapsingEnabled__83ef5043",
    ov = "ControlBarButtonsAndMenus_module_canScroll__83ef5043";
const rv = [Yc.VIMEO_LOGO],
    av = ({
        menuProps: e
    }) => {
        const t = Hu((e => e.appearance.isMenuBlockingUI)),
            n = Hu((e => e.appearance.isMenuVerticalVideoMode)),
            i = Hu((e => e.controlBar.showAllControls)),
            r = Hu((e => e.displayList.controlBarButtons)),
            a = Hu((e => e.displayList.progressBar)),
            l = Hu((e => e.controlBar.progressBarExpanded)),
            s = Dc(),
            c = (() => {
                const e = Hu((e => e.playback.canPlayPictureInPicture)),
                    t = Hu((e => e.embed.fullscreen)),
                    n = Hu((e => e.embed.showVimeoLogo)),
                    i = Hu((e => e.embed.volume)),
                    r = Hu((e => e.appearance.fullscreen)),
                    a = Hu((e => e.embed.airplay)),
                    l = Hu((e => e.playback.supportsAirPlay)),
                    s = Hu((e => e.embed.chromecast)),
                    c = Hu((e => e.chromecast.supportsChromecast)),
                    d = Hu((e => e.chromecast.isChromecastReady)),
                    u = Hu((e => e.appearance.stereoscopicEnabled)),
                    _ = Hu((e => e.playback.supportsStereoscopic)),
                    p = Hu((e => e.displayList.ad)),
                    m = Hu((e => e.playback.loadedMetadata)),
                    v = Hu((e => {
                        var t;
                        return null == (t = e.interactive.hotspots) ? void 0 : t.length
                    })),
                    f = Hu((e => e.interactive.enabled)),
                    h = Hu((e => e.interactive.ready)),
                    g = Hu((e => e.liveEvent.isLiveEvent)),
                    E = Hu((e => e.liveEvent.isArchived)),
                    b = !!f && (!h || v),
                    C = l && m && !p && !b && a,
                    y = s && c && d && !p && !b && (!g || E),
                    T = u && _ && !p,
                    L = e && !p,
                    A = (t || r) && !(o.iOS && v),
                    I = n && !p;
                return {
                    [Yc.AIRPLAY]: C,
                    [Yc.CHROMECAST]: y,
                    [Yc.FULLSCREEN]: A,
                    [Yc.PIP]: L,
                    [Yc.STEREOSCOPIC]: T,
                    [Yc.VIMEO_LOGO]: I,
                    [Yc.VOLUME]: i
                }
            })(),
            d = Re(),
            u = Re(),
            _ = Re(r),
            p = Re(i),
            m = Object.keys(c).filter((e => c[e])),
            v = Object.keys(s).filter((e => s[e])),
            f = !!m.length || !!v.length,
            g = m.concat(v).filter((e => !rv.includes(e))),
            E = g.length > 0,
            b = g.length > 1,
            [C, y] = Pe(!1),
            T = () => {
                if (p.current) return void y(!1);
                const e = d.current,
                    t = u.current,
                    n = null == e ? void 0 : e.children;
                if (!t || null == n || !n.length || !_.current) return;
                const i = t.clientWidth,
                    o = Array.from(n).reduce(((e, t) => e + t.clientWidth + 4), 4);
                y(i < o)
            };
        ed(d, T, 100), Oe((() => {
            _.current = r, p.current = i
        }), [r, i]), Oe((() => {
            T()
        }), [m.length, v.length]);
        const L = !t && !n,
            A = !i && b && C,
            I = !i && b,
            S = !r && b,
            O = !a && !S && E,
            P = c[Yc.VIMEO_LOGO],
            R = $n("ControlBarButtonsAndMenus_module_wrapper__83ef5043", S && nv, !a && tv, l && "ControlBarButtonsAndMenus_module_progressExpanded__83ef5043"),
            N = $n("ControlBarButtonsAndMenus_module_collapsibleWrapper__83ef5043", S && nv, !a && tv, I && iv, A && ov, O && "ControlBarButtonsAndMenus_module_buttonsOnly__83ef5043", P && "ControlBarButtonsAndMenus_module_vimeoLogoEnabled__83ef5043"),
            w = $n("ControlBarButtonsAndMenus_module_collapsibleContent__83ef5043", S && nv, I && iv, A && ov);
        if (!f) return null;
        const D = {
            onFocus: e => {
                const t = null == e ? void 0 : e.target;
                if (!t || !r || i || !d.current || !u.current || !C) return;
                const n = Et(t),
                    o = Et(u.current);
                if (n.left > o.left && n.right < o.right) return;
                const a = n.right - o.width;
                d.current.scrollTo({
                    top: 0,
                    left: a,
                    behavior: "smooth"
                })
            }
        };
        return S && (D.ariaHidden = !0), De("div", {
            className: R,
            children: [I && De(Cm, {}), De("div", {
                className: N,
                ref: u,
                onKeyDown: e => {
                    "ArrowLeft" !== e.code && "ArrowRight" !== e.code || e.preventDefault()
                },
                role: "none",
                children: De("div", {
                    className: w,
                    ref: d,
                    role: "none",
                    children: [c[Yc.VOLUME] && De(ev, {
                        buttonProperties: D
                    }), s[Rc.CC] && De(hm, h(h({}, e[Rc.CC]), {}, {
                        ref: e[Rc.CC].buttonRef
                    }, D)), L && s[Rc.CC] && De(Jm, h({}, e[Rc.CC])), s[Rc.TRANSCRIPT] && De(bm, h({}, D)), s[Rc.PREFS] && De(um, h(h({}, e[Rc.PREFS]), {}, {
                        ref: e[Rc.PREFS].buttonRef
                    }, D)), L && s[Rc.PREFS] && De(Fm, h({}, e[Rc.PREFS])), s[Rc.CHAPTERS] && De(fm, h(h({}, e[Rc.CHAPTERS]), {}, {
                        ref: e[Rc.CHAPTERS].buttonRef
                    }, D)), L && s[Rc.CHAPTERS] && De(qm, h({}, e[Rc.CHAPTERS])), c[Yc.CHROMECAST] && De(Em, h({}, D)), c[Yc.AIRPLAY] && De(vm, h({}, D)), c[Yc.STEREOSCOPIC] && De(gm, h({}, D)), c[Yc.PIP] && De(_m, h({}, D)), c[Yc.FULLSCREEN] && De(dm, h({}, D))]
                })
            }), P && De(mm, {})]
        })
    },
    lv = ({
        menuProps: e
    }) => {
        const t = Dc(),
            n = Hu((e => e.appearance.isMenuBlockingUI)),
            i = Hu((e => e.appearance.isMenuVerticalVideoMode));
        return (n || i) && De($e, {
            children: [t[Rc.CC] && De(Jm, h({}, e[Rc.CC])), t[Rc.PREFS] && De(Fm, h({}, e[Rc.PREFS])), t[Rc.CHAPTERS] && De(qm, h({}, e[Rc.CHAPTERS]))]
        })
    },
    sv = () => {
        const e = Re(null),
            t = Hu((e => e.displayList.controlBar)),
            n = Hu((e => e.displayList.outro)),
            i = Hu((e => e.playback.playInitiated)),
            o = Hu((e => e.embed.isTrailer)),
            r = Hu((e => e.displayList.controlBarButtons)),
            a = Hu((e => e.controlBar.showAllControls)),
            l = Hu((e => e.embed.playbar)),
            s = (() => {
                const e = Hu((e => e.setAppearance)),
                    [t, n] = Pe(!1);
                return {
                    onMouseEnter: () => {
                        t || e("mousedOverControlBar", !0), n(!1)
                    },
                    onMouseLeave: () => {
                        t || e("mousedOverControlBar", !1), n(!1)
                    },
                    onTouchStart: () => {
                        e("mousedOverControlBar", !0), n(!0)
                    },
                    onTouchEnd: () => {
                        e("mousedOverControlBar", !1), n(!0)
                    }
                }
            })(),
            c = Fc() === Hc.CENTER,
            d = o && !i,
            u = $c(pr.PROGRESS_BAR) && l,
            [_, p] = Pe(null),
            m = (({
                setHoveredChapterId: e,
                progressBarAndButtonsRef: t
            }) => {
                const n = Hu((e => e.displayList.menu)),
                    i = Hu((e => e.setDisplayList)),
                    o = Re(null),
                    r = Re(null),
                    a = Re(null),
                    {
                        sendBPClosedCaptionsClickEvent: l,
                        updateCCMetricsPayload: s,
                        resetCCMetricsPayload: c
                    } = (() => {
                        const e = Hu((e => e.captions.language)),
                            t = Hu((e => e.captions.fontSize)),
                            n = Hu((e => e.captions.fontOpacity)),
                            i = Hu((e => e.captions.fontFamily)),
                            o = Hu((e => e.captions.color)),
                            r = Hu((e => e.captions.edgeStyle)),
                            a = Hu((e => e.captions.bgColor)),
                            l = Hu((e => e.captions.bgOpacity)),
                            s = Hu((e => e.captions.windowColor)),
                            c = Hu((e => e.captions.windowOpacity)),
                            d = Re({
                                fontSize: t,
                                fontOpacity: n,
                                fontColor: o,
                                fontFamily: i,
                                edgeStyle: r,
                                bgColor: a,
                                bgOpacity: l,
                                windowColor: s,
                                windowOpacity: c
                            }),
                            u = Re({
                                language_selected: e || xc,
                                has_clicked_customize: !1,
                                has_customized: !1,
                                has_clicked_font: !1,
                                has_changed_font: !1,
                                has_clicked_background: !1,
                                has_changed_background: !1,
                                has_clicked_window: !1,
                                has_changed_window: !1,
                                has_reset_all: !1,
                                final_action_reset_all: !1
                            }),
                            _ = Ne((e => {
                                u.current = h(h({}, u.current), e)
                            }), []),
                            p = Uc();
                        return Oe((function() {
                            _({
                                language_selected: e || xc
                            })
                        }), [e, _]), Oe((function() {
                            const e = t !== d.current.fontSize || o !== d.current.fontColor || i !== d.current.fontFamily || n !== d.current.fontOpacity || r !== d.current.edgeStyle || a !== d.current.bgColor || l !== d.current.bgOpacity || s !== d.current.windowColor || c !== d.current.windowOpacity;
                            _({
                                has_customized: e
                            })
                        }), [t, n, o, i, r, a, l, s, c, _]), {
                            sendBPClosedCaptionsClickEvent: () => p(gr.CLOSED_CAPTIONS_CLICK, u.current),
                            updateCCMetricsPayload: _,
                            resetCCMetricsPayload: () => {
                                u.current = {
                                    language_selected: e || xc,
                                    has_clicked_customize: !1,
                                    has_customized: !1,
                                    has_clicked_font: !1,
                                    has_changed_font: !1,
                                    has_clicked_background: !1,
                                    has_changed_background: !1,
                                    has_clicked_window: !1,
                                    has_changed_window: !1,
                                    has_reset_all: !1,
                                    final_action_reset_all: !1
                                }, d.current = {
                                    fontSize: t,
                                    fontOpacity: n,
                                    fontColor: o,
                                    fontFamily: i,
                                    edgeStyle: r,
                                    bgColor: a,
                                    bgOpacity: l,
                                    windowColor: s,
                                    windowOpacity: c
                                }
                            }
                        }
                    })(),
                    [d, u] = Pe(!1),
                    [_, p] = Pe(!1),
                    [m, v] = Pe(!1),
                    f = e => t => {
                        e === p && _ && !t && (l(), c()), e(t), i("menu", t), e !== u && u(!1), e !== p && p(!1), e !== v && v(!1)
                    };
                n || (u(!1), p(!1), v(!1));
                const g = f(u),
                    E = f(v),
                    b = f(p),
                    C = {
                        [Rc.CC]: {
                            isMenuDisplayed: _,
                            setMenuDisplayed: b,
                            buttonRef: a,
                            progressBarAndButtonsRef: t,
                            updateMetricsPayload: s
                        },
                        [Rc.PREFS]: {
                            isMenuDisplayed: d,
                            setMenuDisplayed: g,
                            buttonRef: o,
                            progressBarAndButtonsRef: t
                        },
                        [Rc.CHAPTERS]: {
                            isMenuDisplayed: m,
                            setMenuDisplayed: E,
                            buttonRef: r,
                            progressBarAndButtonsRef: t,
                            onMenuOptionMouseEnter: t => {
                                var n;
                                return e(parseInt(null == t || null == (n = t.currentTarget) || null == (n = n.dataset) ? void 0 : n.id, 10))
                            },
                            onMenuOptionMouseLeave: () => e(null)
                        }
                    };
                return C
            })({
                setHoveredChapterId: p,
                progressBarAndButtonsRef: e
            }),
            v = $n("ControlBar_module_controlBarWrapper__293a16b4", c && "ControlBar_module_centerPlayButton__293a16b4"),
            f = $n(yn.VP_CONTROLS, "ControlBar_module_controls__293a16b4", d && "ControlBar_module_trailer__293a16b4"),
            g = $n("ControlBar_module_progressBarAndButtons__293a16b4", !u && "ControlBar_module_progressBarDisabled__293a16b4", a && "ControlBar_module_showAllControls__293a16b4", r && !a && "ControlBar_module_buttonsExpanded__293a16b4");
        return De(t_, {
            children: [De("div", {
                className: v,
                children: [De(rm, {
                    controlBarVisibilityHandlers: s
                }), De(Yu, {
                    visible: t,
                    children: De("div", h(h({
                        className: f
                    }, s), {}, {
                        "data-control-bar": !0,
                        children: !n && !d && De("div", {
                            className: g,
                            ref: e,
                            children: [u && De(Bm, {
                                hoveredChapterId: _
                            }), De(av, {
                                menuProps: m
                            })]
                        })
                    }))
                }), De(Tm, {})]
            }), De(lv, {
                menuProps: m
            })]
        })
    },
    cv = ({
        styles: e
    }) => De(Qu, {
        name: td.HEART_WIDER_FILLED,
        style: e
    }),
    dv = ({
        styles: e
    }) => De(Qu, {
        name: td.HEART_WIDER_BROKEN_FILLED,
        style: e
    });
var uv = "AnimatedClock_module_hands__167fcd36",
    _v = "AnimatedClock_module_reverse__167fcd36";
const pv = ({
        style: e,
        animateDirection: t = "forward"
    }) => {
        const n = $n(uv, "AnimatedClock_module_hour__167fcd36", "reverse" === t && _v),
            i = $n(uv, "AnimatedClock_module_minute__167fcd36", "reverse" === t && _v);
        return De("svg", {
            viewBox: "0 0 20 20",
            style: e,
            children: [De("polyline", {
                className: n,
                points: "9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68"
            }), De("polyline", {
                className: i,
                points: "14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65"
            }), De("circle", {
                className: "AnimatedClock_module_circle__167fcd36",
                cx: "10",
                cy: "10",
                r: "8",
                strokeWidth: "2"
            })]
        })
    },
    mv = ({
        styles: e
    }) => De(pv, {
        style: e
    }),
    vv = ({
        styles: e
    }) => De(pv, {
        animateDirection: "reverse",
        style: e
    });
const fv = () => {
    const e = Re(null),
        t = Hu((e => e.displayList.menu)),
        n = Hu((e => e.notification.currentNotification)),
        i = Hu((e => e.setNotification)),
        {
            width: o,
            height: r
        } = Hu((e => e.appearance.boundingClientRect)),
        a = $c(pr.SIDE_DOCK_MENU);
    return De(K_, {
        fadeIn: !1,
        onContentChange: function(t) {
            null !== t && (clearTimeout(e.current), e.current = setTimeout((() => {
                i("currentNotification", null)
            }), 750))
        },
        targetContent: n,
        children: e => {
            const n = $n("Notification_module_root__c083c238", null !== e && "Notification_module_active__c083c238", a && t && "Notification_module_behindSideDock__c083c238"),
                i = function(e, t, n) {
                    const i = e === Vu.WatchLaterAdded || e === Vu.WatchLaterRemoved ? .5 : .4,
                        o = n > t ? t : n;
                    return {
                        width: `${Math.round(o*i*1.6)}px`,
                        height: `${Math.round(o*i)}px`
                    }
                }(e, o, r);
            return De("div", {
                className: n,
                children: [e === Vu.LikedAdded && De(cv, {
                    styles: i
                }), e === Vu.LikeRemoved && De(dv, {
                    styles: i
                }), e === Vu.WatchLaterAdded && De(mv, {
                    styles: i
                }), e === Vu.WatchLaterRemoved && De(vv, {
                    styles: i
                })]
            })
        }
    })
};
let hv = function(e) {
    return e.Backward = "backward", e.Forward = "forward", e
}({});
const gv = () => {
    const e = Hu((e => e.displayList.nudgeNotification)),
        t = Hu((e => e.nudge.direction)),
        n = Hu((e => e.nudge.time));
    return De(Yu, {
        visible: e,
        children: De("div", {
            "aria-hidden": "true",
            className: `NudgeNotification_module_nudge__24f10a71 ${t===hv.Backward&&"NudgeNotification_module_nudgeBackward__24f10a71"}`,
            children: De("div", {
                className: "NudgeNotification_module_nudgeInfo__24f10a71",
                children: [De("div", {
                    className: "NudgeNotification_module_nudgeIcon__24f10a71",
                    children: De(Qu, {
                        name: td.FAST_FORWARD
                    })
                }), De("div", {
                    className: "NudgeNotification_module_nudgeTime__24f10a71",
                    children: n ? n + " seconds" : ""
                })]
            })
        })
    })
};
var Ev = "NudgeArea_module_nudgeArea__7d84d7de";
let bv;
const Cv = () => {
        const e = Re(Fu().getState().playback.currentFragment),
            t = Re(Fu().getState().playback.currentTime),
            n = Re(Fu().getState().playback.liveEdgeTime),
            i = Re(Fu().getState().playback.liveTailTime);
        Fu().subscribe((t => e.current = t.playback.currentFragment)), Fu().subscribe((e => t.current = e.playback.currentTime)), Fu().subscribe((e => n.current = e.playback.liveEdgeTime)), Fu().subscribe((e => i.current = e.playback.liveTailTime));
        const r = Hu((e => e.displayList.fullPlayerElement)),
            a = Hu((e => e.displayList.ad)),
            l = Hu((e => e.liveEvent.isLiveEvent)),
            s = Hu((e => e.liveEvent.dvrEnabled)),
            c = Hu((e => e.liveEvent.isArchived)),
            d = l && !c && !s,
            u = Hu((e => e.embed.background)),
            _ = Hu((e => e.embed.controls)),
            p = Hu((e => e.displayList.outro)),
            m = Hu((e => e.config.video.spatial)),
            v = !(!o.spatialPlayback || !m),
            f = o.touch && !r && !a && !d && !u && _ && !p && !v,
            h = Hu((e => e.setPlayback)),
            g = Hu((e => e.setNudgeProperties)),
            [E, b] = Pe({
                left: 0,
                right: 0
            }),
            C = o => r => {
                let a;
                r.preventDefault(), o === hv.Forward ? (a = E.left + 1, b({
                    left: a,
                    right: 0
                })) : (a = E.right + 1, b({
                    left: 0,
                    right: a
                })), clearTimeout(bv), bv = setTimeout(y, 250), a >= 2 && function(o, r) {
                    let a, s;
                    l ? (a = i.current, s = n.current) : ({
                        startTime: a,
                        endTime: s
                    } = e.current);
                    let c = 0;
                    c = o === hv.Forward ? t.current + 10 : t.current - 10, c < a ? c = a : c >= s ? c = s - .001 : g({
                        direction: o,
                        time: 10 + 10 * (r - 2)
                    }), h("currentTime", c, {
                        seekType: "nudge"
                    })
                }(o, a)
            };

        function y() {
            b({
                left: 0,
                right: 0
            })
        }
        return f && De($e, {
            children: [De("div", {
                className: `${Ev} NudgeArea_module_nudgeBackwardArea__7d84d7de`,
                onTouchEnd: C(hv.Backward)
            }), De("div", {
                className: `${Ev} NudgeArea_module_nudgeForwardArea__7d84d7de`,
                onTouchEnd: C(hv.Forward)
            })]
        })
    },
    yv = ({
        element: e,
        children: t
    }) => ze(De($e, {
        children: t
    }), e);
var Tv = "HelpOverlay_module_hideOnSmall__079276a9",
    Lv = "HelpOverlay_module_arrow__079276a9";
const Av = () => {
        const e = rd((e => e.embed.onsite)),
            t = Hu((e => e.embed.like)),
            n = Hu((e => e.embed.watchLater)),
            i = Hu((e => e.embed.share)),
            o = Hu((e => e.embed.transcript)),
            r = Hu((e => e.embed.aiWidget)),
            a = [{
                key: "↑",
                text: "Volume up",
                className: `${Lv} ${Tv}`
            }, {
                key: "↓",
                text: "Volume down",
                className: `${Lv} ${Tv}`
            }, {
                key: "→",
                text: "Scrub forward",
                className: `${Lv} ${Tv}`
            }, {
                key: "←",
                text: "Scrub backwards",
                className: `${Lv} ${Tv}`
            }, {
                key: "X",
                text: "Like",
                ignore: !t
            }, {
                key: "S",
                text: "Share",
                ignore: !i
            }, {
                key: "W",
                text: "Watch Later",
                ignore: !n
            }, {
                key: "C",
                text: "Toggle Captions"
            }, {
                key: "H",
                text: "Toggle Preferences Menu"
            }, {
                key: "F",
                text: "Toggle fullscreen"
            }, {
                key: "⇧T",
                text: "Toggle Transcript",
                ignore: !o
            }, {
                key: "⇧A",
                text: "Toggle Vimeo AI",
                ignore: !r
            }, {
                key: "V",
                text: "View on Vimeo",
                ignore: e
            }, {
                key: "J",
                text: "Scrub backwards"
            }, {
                key: "K",
                text: "Play/Pause"
            }, {
                key: "L",
                text: "Scrub forward"
            }, {
                key: "M",
                text: "Toggle Mute"
            }];
        return De($e, {
            children: [De("h1", {
                id: Ln.VP_OVERLAY_LABELLEDBY,
                children: "Keyboard Shortcuts"
            }), De("div", {
                className: "HelpOverlay_module_keysWrapper__079276a9",
                "data-help-keys": !0,
                children: a.map((e => !e.ignore && De("div", {
                    className: `HelpOverlay_module_keyWrapper__079276a9 ${e.className||""}`,
                    children: [De("div", {
                        className: "HelpOverlay_module_keySymbol__079276a9",
                        children: e.key
                    }), De("div", {
                        className: "HelpOverlay_module_keyText__079276a9",
                        children: e.text
                    })]
                })))
            })]
        })
    },
    Iv = () => {
        const e = Hu((e => e.overlay.incrementOverlayElementsUpdatedCount));
        return De(fp, {
            onEmbedShareVisibilityChange: e
        })
    };
const Sv = [Yt, Kt],
    Ov = () => {
        const e = rd((e => e.embed.onsite)),
            t = rd((e => e.embed.videoId)),
            n = Hu((e => e.overlay.spatialRedirectContext)),
            i = {
                title: "headset" === n ? "Headset viewing isn’t currently supported in your mobile browser." : null,
                buttonText: "Watch in the Vimeo app",
                lowerText: "browser-support" === n ? "360 not supported in this browser" : null
            },
            o = Hu((e => e.embed.doNotTrack)),
            r = Hu((e => !Sv.includes(e.embed.privacy))),
            a = Hu((e => e.embed.shareUrl));
        return De($e, {
            children: [De(Yu, {
                visible: !0,
                children: De("div", {
                    className: "SpatialRedirectOverlay_module_background__43dc92f8"
                })
            }), "headset" === n && De("div", {
                className: "SpatialRedirectOverlay_module_title__43dc92f8",
                children: i.title
            }), r && De(R_, {
                className: "SpatialRedirectOverlay_module_button__43dc92f8",
                onClick: () => {
                    const n = o ? a : function(e) {
                        return `https://vimeo.page.link/?link=https%3A%2F%2Fvimeo.com%2F${e}%3Futm_source%3Dvimeo%26utm_campaign%3Dmobileweb%26utm_content%3Dplayer-button-360video&apn=com.vimeo.android.videoapp&ibi=com.vimeo&isi=425194759&utm_source=vimeo&utm_campaign=mobileweb&utm_content=player-button&ct=360video&pt=417731&efr=1`
                    }(t);
                    window.open(n, e && "_blank", e ? "noopener" : "")
                },
                children: i.buttonText
            }), "browser-support" === n && De("div", {
                className: "SpatialRedirectOverlay_module_lowerText__43dc92f8",
                children: i.lowerText
            })]
        })
    },
    Pv = () => {
        const e = Hu((e => e.overlay.purpose)),
            t = Hu((e => e.displayList.overlay)),
            n = Hu((e => e.setDisplayList)),
            i = ri(e) ? null : e;
        return De(K_, {
            onContentChange: e => {
                n("overlay", !(null === e || e === oi.EMPTY))
            },
            styleOverrides: {
                exitDone: {
                    display: "block",
                    visibility: "hidden"
                }
            },
            targetContent: i,
            children: n => De(Cp, {
                visible: n === e && t,
                children: [n === oi.ERROR && De(Ep, {}), n === oi.HELP && De(Av, {}), n === oi.SHARE && De(Iv, {}), n === oi.SPATIAL_REDIRECT && De(Ov, {})]
            })
        })
    };
const Rv = () => {
    const {
        pipOverlay: e
    } = Hu((e => e.displayList));
    return De(Yu, {
        visible: e,
        children: De("div", {
            className: `${yn.VP_PIP_OVERLAY} PipOverlay_module_overlay__8ff12d1a`,
            "aria-hidden": "true",
            children: [De(Qu, {
                name: td.PIP
            }), De("div", {
                className: "PipOverlay_module_title__8ff12d1a",
                children: "Playing in picture-in-picture"
            })]
        })
    })
};
let Nv = function(e) {
    return e.PLAYER_UI = "player_ui", e.TITLE = "title", e
}({});
const wv = () => {
    const e = Hu((e => e.liveEvent.isLiveEvent)),
        t = Hu((e => e.liveEvent.isPlayable)),
        n = Hu((e => e.playback.paused)),
        i = Hu((e => e.liveEvent.isEnded)),
        o = e && !i,
        r = Hu((e => e.displayList.controlBar)),
        a = Hu((e => e.displayList.topCenterActionItem)),
        l = Hu((e => e.displayList.title)),
        s = Hu((e => e.displayList.toast)),
        c = Hu((e => e.playback.atLiveEdge));
    return !!o && De(Yu, {
        visible: (r || a) && !(l || s) && t && !n && c,
        children: De("div", {
            className: "LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__62de121d",
            "aria-hidden": "true",
            children: [De(Vv, {
                context: Nv.PLAYER_UI
            }), De(Fv, {
                context: Nv.PLAYER_UI
            })]
        })
    })
};
var Dv = "LiveStatusLabel_module_offline__103db393",
    kv = "LiveStatusLabel_module_live__103db393";
const Mv = {
        [Nv.PLAYER_UI]: "LiveStatusLabel_module_playerUI__103db393",
        [Nv.TITLE]: "LiveStatusLabel_module_title__103db393"
    },
    Vv = ({
        className: e,
        context: t
    }) => {
        const n = Hu((e => e.embed.hideLiveLabel)),
            i = Hu((e => e.liveEvent.isLiveEvent)),
            o = Hu((e => e.liveEvent.isPlayable)),
            r = Hu((e => e.liveEvent.isArchived)),
            a = Mv[t],
            l = $n(yn.VP_LIVE_STATUS, "LiveStatusLabel_module_liveStatusLabel__103db393", a, e),
            s = $n(yn.VP_LIVE_STATUS_CIRCLE, "LiveStatusLabel_module_liveStatusCircle__103db393", o ? kv : Dv),
            c = $n("LiveStatusLabel_module_liveStatusText__103db393", o ? kv : Dv);
        return i && !r && !n && De("div", {
            className: l,
            "data-live-status-label": !0,
            children: [De("div", {
                className: s
            }), De("span", {
                className: c,
                children: "LIVE"
            })]
        })
    };

function Bv(e, t) {
    try {
        var n = e()
    } catch (De) {
        return t(De)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const xv = {
    [Nv.PLAYER_UI]: "LiveViewerCounter_module_playerUI__ac542125",
    [Nv.TITLE]: "LiveViewerCounter_module_title__ac542125"
};

function Uv() {}

function Hv(e) {
    if (e && e.then) return e.then(Uv)
}
const Fv = ({
        className: e = "",
        context: t
    }) => {
        const n = rd((e => e.embed.videoId)),
            i = rd((e => e.config.vimeo_api_url)),
            o = Hu((e => e.events)),
            r = Hu((e => e.updatePhpTokens)),
            a = Hu((e => e.liveEvent.isPlayable)),
            l = Hu((e => e.embed.showViewerCount)),
            s = Hu((e => e.liveEvent.viewerCount)),
            c = Hu((e => e.liveEvent.liveStatsRequestSucceeded)),
            d = Hu((e => e.liveEvent.isStarted)),
            u = Hu((e => e.liveEvent.isOnline)),
            _ = Hu((e => e.embed.privacy)),
            p = Hu((e => e.embed.videoUnlistedHash)),
            m = Hu((e => e.user.vimeoBucketedLiveClientToken)),
            v = d && l && u,
            f = xv[t],
            h = $n(yn.VP_LIVE_VIEWER_COUNT, "LiveViewerCounter_module_liveViewerCounter__ac542125", f, e),
            g = Ne(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                let e = `${n}`;
                _ === Si.PRIVACY_UNLISTED && p && (e += `:${p}`);
                const t = `https://${i}/videos/${e}/stats/live`,
                    a = {
                        jwt_token: m
                    };
                return Hv(Bv((function() {
                    return function(e, t) {
                        try {
                            var n = Promise.resolve(e());
                            return t ? n.then(t) : n
                        } catch (De) {
                            return Promise.reject(De)
                        }
                    }(r, (function() {
                        return Hv(Bv((function() {
                            return function(e, t) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(T({
                                url: t,
                                searchParams: a
                            }).json(), (function(e) {
                                e.viewers && o.fire(j.LIVE_STATS_SUCCESS, {
                                    viewerCount: e.viewers.current
                                })
                            }))
                        }), (function() {
                            o.fire(j.LIVE_STATS_FAILURE)
                        })))
                    }))
                }), (function(e) {
                    o.fire(j.LIVE_STATS_FAILURE)
                })))
            })), [o, r, n, i, m, _, p]);
        return Oe((() => {
            if (v) {
                g();
                const e = setInterval(g, 3e4);
                return () => clearInterval(e)
            }
            return () => {}
        }), [v, g]), a && l && c && De("div", {
            className: h,
            "data-live-viewer-counter": !0,
            children: [De(Qu, {
                className: "LiveViewerCounter_module_liveViewerCounterIcon__ac542125",
                name: td.PERSON_FILLED
            }), De("span", {
                className: "LiveViewerCounter_module_liveViewerCountValue__ac542125",
                "data-live-viewer-count": !0,
                children: s
            })]
        })
    },
    Gv = {
        [pi.LIGHT]: _i.EIGHTY,
        [pi.DARK]: _i.TWENTY
    },
    Wv = "transparent !important",
    Yv = () => {
        const e = rd((e => e.uuid)),
            t = rd((e => e.view)),
            n = rd((e => e.embed.transparent)),
            i = rd((e => e.colors.colorOne)),
            o = rd((e => e.colors.colorTwo)),
            r = rd((e => e.colors.colorThree)),
            a = rd((e => e.colors.colorFour)),
            l = [
                [ui.ONE, vi(i, _i.ONE_HUNDRED)],
                [ui.TWO, vi(o, _i.ONE_HUNDRED)],
                [ui.THREE, vi(r, _i.ONE_HUNDRED)],
                [ui.FOUR, vi(a, _i.ONE_HUNDRED, !1, !0)],
                [ui.ONE_MONOCHROME, vi(i, _i.ONE_HUNDRED, !0)],
                [ui.TWO_MONOCHROME, vi(o, _i.ONE_HUNDRED, !0)],
                [ui.ONE_OPACITY_NINETY, vi(i, _i.NINETY, !1, !0)],
                [ui.TWO_OPACITY_NINETY, vi(o, _i.NINETY, !1, !0)],
                [ui.THREE_OPACITY_TWENTY, vi(r, _i.TWENTY)],
                [ui.ONE_MONOCHROME_OPACITY_TWENTY, vi(i, _i.TWENTY, !0)],
                [ui.TWO_MONOCHROME_OPACITY_TWENTY, vi(o, _i.TWENTY, !0)],
                [ui.ONE_MONOCHROME_OPACITY_SIXTY, vi(i, _i.SIXTY, !0)],
                [ui.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY, vi(i, Gv, !0)],
                [ui.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY, vi(o, Gv, !0)]
            ];
        let s, c;
        return [en.privateLocked, en.privatePassword].includes(t) ? (s = "#000 !important", c = Wv) : n ? (s = Wv, c = Wv) : (s = `var(${ui.FOUR})`, c = `var(${ui.FOUR})`), De("style", {
            type: "text/css",
            "data-player-colors": e,
            children: [`.player-${e} {\n                ${fi(l)}\n            }`, `.player-${e} {\n                background-color: ${s};\n            }`, `.player-${e} .${yn.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]
        })
    };
const $v = () => {
    const e = Hu((e => e.embed.rightContentAreaEnabled)),
        t = Hu((e => e.displayList.rightContentArea)),
        n = Hu((e => e.appearance.rightContentAreaAnimating));
    let i = Hu((e => e.element));
    const r = {
            transcript: {
                component: tf,
                displayed: Hu((e => e.displayList.transcript))
            },
            aiWidget: {
                component: Cf,
                displayed: Hu((e => e.displayList.aiWidget))
            }
        },
        a = o.isGoogleBot && r.transcript.displayed;
    var l;
    a && (i = null == (l = i) ? void 0 : l.parentElement);
    const s = $n("RightContentArea_module_rightContentArea__98a162b1", t && "RightContentArea_module_visible__98a162b1", ko && "RightContentArea_module_iframeEmbed__98a162b1", a && "RightContentArea_module_googleBot__98a162b1"),
        c = Object.keys(r).some((e => {
            var t;
            return null == (t = r[e]) ? void 0 : t.displayed
        })),
        d = !t && n,
        u = d ? 400 : void 0,
        _ = d || c && t && !n ? void 0 : 0,
        p = {
            exitDone: {
                visibility: "hidden",
                display: "block"
            }
        };
    return e && ze(De("div", {
        id: Ln.RIGHT_CONTENT_AREA,
        className: s,
        "aria-hidden": !t,
        children: Object.keys(r).map((function(e) {
            var t, n;
            const i = null == (t = r[e]) ? void 0 : t.component,
                o = null == (n = r[e]) ? void 0 : n.displayed;
            return i ? De(Yu, {
                duration: _,
                visible: o,
                delay: u,
                styleOverrides: p,
                children: De(i, {})
            }, e) : null
        }))
    }), i)
};
const Kv = () => {
    const [e, t] = Pe(!1), n = Hu((e => e.appearance.placeholderThumbnail)), i = Hu((e => e.appearance.appSizeMode)), r = Hu((e => e.appearance.appBreakpoint)), a = Hu((e => e.embed.rightContentAreaEnabled)), l = Hu((e => e.displayList.rightContentArea)), s = Hu((e => e.appearance.rightContentAreaAnimating)), c = Hu((e => e.element)), d = a && (l || s), u = r === or.XS || r === or.XXS || i === Ti.MINI || i === Ti.TINY, _ = $n("ContentAreaBackground_module_img__5e37c38e", e && "ContentAreaBackground_module_loaded__5e37c38e"), p = u ? {
        visible: l,
        duration: 400
    } : {
        visible: d,
        duration: 0
    };
    return o.isGoogleBot ? null : ze(De(Yu, h(h({}, p), {}, {
        children: De("div", {
            className: "ContentAreaBackground_module_imgContainer__5e37c38e",
            children: De("img", {
                onLoad: () => t(!0),
                alt: "video thumbnail",
                className: _,
                src: n
            })
        })
    })), null == c ? void 0 : c.querySelector(`.${Tn.CONTENT_AREA_BACKGROUND_CONTAINER}`))
};
Xe(".TranscriptError_lazy_module_refresh__eeacf550{border:none;padding:4px 12px;gap:4px;height:32px;background:hsla(0,0%,100%,.1);border-radius:4px}.TranscriptError_lazy_module_icon__eeacf550{width:40px;height:40px}", {});
const {
    Provider: qv,
    useStore: jv
} = ke(), zv = {
    timecodeDisplayed: !0,
    selectedSettingsMenu: ic.MAIN,
    settingsDisplayed: !1,
    currentSearchResultIndex: 0,
    searchTerms: {
        terms: "",
        timestamp: null
    },
    searchResults: [],
    transcriptDisabled: !1,
    autofollowEnabled: !0
}, Xv = ({
    children: e
}) => {
    const t = Hu((e => e.subscribe)),
        n = Hu((e => e.captions.textTrackEls)),
        i = Hu((e => e.captions.rtlTracks)),
        o = Hu((e => e.config)),
        r = Hu((e => e.events)),
        a = Hu((e => e.displayList.transcript)),
        l = Hu((e => e.displayList.fullPlayerElement)),
        s = Hu((e => e.appearance.appBreakpoint)),
        c = Hu((e => e.appearance.appSizeMode)),
        d = Uc(),
        u = ((e, t) => e.map((e => {
            const n = e.id.replace(Pn.TEXT_TRACK_ID_PREFIX, ""),
                i = t.includes(n);
            return {
                id: e.id,
                label: e.label,
                language: e.srclang,
                rtl: i
            }
        })))(n, i),
        _ = cc(o, u),
        p = Re(null == _ ? void 0 : _.language);
    return De(qv, {
        createStore: () => Me(((e, n) => {
            const i = (t, n) => e((e => h(h({}, e), {}, {
                    [t]: n
                }))),
                o = zv.selectedSettingsMenu,
                m = e => i("selectedSettingsMenu", e),
                v = zv.settingsDisplayed,
                f = t => {
                    var i, o;
                    const a = {};
                    if (t !== (null == (i = n()) ? void 0 : i.settingsDisplayed)) {
                        var l;
                        a.settingsDisplayed = t;
                        const e = null == (l = n()) || null == (l = l.selectedTrack) ? void 0 : l.language;
                        t ? d(gr.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "open_embed_transcript_setting",
                            copy: "settings",
                            location: "player_embedded_transcript",
                            element: "embedded_transcript_settings_menu",
                            current_transcript_language: e
                        }) : t || e === p.current || (d(gr.EMBEDDED_TRANSCRIPT_CLICK, {
                            name: "change_language_settings",
                            copy: e,
                            location: "player_embedded_transcript_settings",
                            element: "language_select_panel",
                            current_transcript_language: e
                        }), p.current = e)
                    }(null == (o = n()) ? void 0 : o.settingsDisplayed) && !t && (a.selectedSettingsMenu = zv.selectedSettingsMenu), Object.keys(a).length && e((e => h(h({}, e), a)));
                    const s = t ? un : "";
                    r.fire(zt._menuVisibilityChanged, s)
                },
                g = zv.timecodeDisplayed,
                E = zv.currentSearchResultIndex,
                b = e => i("currentSearchResultIndex", e),
                C = zv.searchResults,
                y = e => {
                    0 === e.length && i("currentSearchResultIndex", 0), i("searchResults", e)
                },
                T = zv.searchTerms,
                L = e => i("searchTerms", e),
                A = !a || l,
                I = Zv(s, c),
                S = zv.autofollowEnabled;

            function O() {
                L(zv.searchTerms), y(zv.searchResults), b(zv.currentSearchResultIndex)
            }
            return t((e => {
                var t;
                return null == e || null == (t = e.displayList) ? void 0 : t.transcript
            }), (e => {
                e || (f(zv.settingsDisplayed), m(zv.selectedSettingsMenu))
            })), t((e => {
                var t, n;
                return {
                    transcriptVisible: null == e || null == (t = e.displayList) ? void 0 : t.transcript,
                    overlayVisible: null == e || null == (n = e.displayList) ? void 0 : n.fullPlayerElement
                }
            }), (({
                transcriptVisible: e,
                fullPlayerElement: t
            }) => {
                i("transcriptDisabled", !(e && !t))
            })), t((e => {
                var t, n;
                return {
                    breakpoint: null == e || null == (t = e.appearance) ? void 0 : t.appBreakpoint,
                    sizeMode: null == e || null == (n = e.appearance) ? void 0 : n.appSizeMode
                }
            }), (({
                breakpoint: t,
                sizeMode: i
            }) => {
                const o = Zv(t, i);
                o !== n().transcriptSizeMode && e((e => h(h({}, e), {}, {
                    transcriptSizeMode: o
                })))
            })), t((e => {
                var t, n;
                return {
                    outroDisplayed: null == e || null == (t = e.displayList) ? void 0 : t.outro,
                    animationActive: null == e || null == (n = e.appearance) ? void 0 : n.rightContentAreaAnimating
                }
            }), (({
                outroDisplayed: e,
                animationActive: t
            }) => {
                e && !t && O()
            })), {
                timecodeDisplayed: g,
                searchTerms: T,
                setSearchTerms: L,
                resetSearchTerms: () => L(zv.searchTerms),
                currentSearchResultIndex: E,
                setCurrentSearchResultIndex: b,
                settingsDisplayed: v,
                setSettingsDisplayed: f,
                selectedTrack: _,
                availableTracks: u,
                setSelectedTrack: e => {
                    const t = u.find((t => t.id === e));
                    i("selectedTrack", t), O(), r.fire(zt._transcriptChanged, t)
                },
                selectedSettingsMenu: o,
                setSelectedSettingsMenu: m,
                searchResults: C,
                setSearchResults: y,
                toggleTimecodeDisplayed: () => {
                    var e;
                    return i("timecodeDisplayed", !(null != (e = n()) && e.timecodeDisplayed))
                },
                toggleSettingsDisplayed: () => {
                    var e;
                    return f(!(null != (e = n()) && e.settingsDisplayed))
                },
                transcriptDisabled: A,
                transcriptSizeMode: I,
                autoFollowEnabled: S,
                setAutoFollowEnabled: e => i("autoFollowEnabled", e)
            }
        })),
        children: e
    })
};

function Zv(e, t) {
    const n = e === or.XS || e === or.XXS,
        i = t === Ti.MINI || t === Ti.TINY;
    return n || i ? oc.SMALL : e === or.XL || e === or.XXL ? oc.LARGE : oc.MEDIUM
}
const Qv = ({
    onClose: e
}) => {
    const t = $n(Tn.EXCLUDE_GLOBAL_BUTTON_STYLES, "ContentAreaCloseButton_module_closeContentAreaButton__22a1987e", A_.focusableButton),
        n = "Close";
    let i = rr.MD;
    const r = Hu((e => e.appearance.appBreakpoint)),
        a = Hu((e => e.displayList.rightContentArea));
    r !== or.XL && r !== or.XXL || (i = rr.CUSTOM);
    const {
        onClick: l,
        onKeyDown: s
    } = xn(e), c = De(R_, {
        onClick: l,
        onKeyDown: s,
        size: i,
        icon: De(Qu, {
            name: td.CLOSE,
            focusable: "false"
        }),
        "aria-label": n,
        disabled: !a,
        color: ar.CUSTOM,
        className: t
    });
    return o.touch ? c : De(h_, {
        tooltipContent: n,
        className: "ContentAreaCloseButton_module_tooltip__22a1987e",
        children: c
    })
};
const Jv = ({
        message: e,
        icon: t,
        componentType: n,
        children: i,
        onClose: o
    }) => De("div", {
        className: "ContentAreaMessage_module_container__7df41131",
        "data-component-type": n,
        children: [De(Qv, {
            onClose: o
        }), t || De(Qu, {
            name: td.INFO_CIRCLE,
            className: "ContentAreaMessage_module_icon__7df41131"
        }), De(T_, {
            size: cr.MD,
            weight: dr.NORMAL,
            className: "ContentAreaMessage_module_messageText__7df41131",
            children: e
        }), i]
    }),
    ef = ({
        onRetry: e
    }) => {
        const t = Uc(),
            n = jv((e => e.selectedTrack)),
            i = Hu((e => e.setDisplayList)),
            o = "Refresh",
            r = De(Qu, {
                name: td.WARN_CIRCLE,
                className: "TranscriptError_lazy_module_icon__eeacf550"
            });
        return De(Jv, {
            message: "There was a problem loading the transcript.",
            onClose: () => i("transcript", !1),
            componentType: "transcript-error",
            icon: r,
            children: De(R_, {
                className: "TranscriptError_lazy_module_refresh__eeacf550",
                color: ar.PRIMARY,
                onClick: () => {
                    e(), t(gr.EMBEDDED_TRANSCRIPT_CLICK, {
                        name: "click_refresh_error",
                        copy: o,
                        location: "player_embedded_transcript_error",
                        element: "refresh_transcript_button",
                        current_transcript_language: null == n ? void 0 : n.language
                    })
                },
                "data-component-type": "retry-request",
                children: De(T_, {
                    size: cr.MD,
                    weight: dr.BOLD,
                    color: ur.WHITE,
                    children: o
                })
            })
        })
    };
const tf = ({
    style: e = {}
}) => {
    const t = Re(!0),
        n = Hu((e => e.displayList.transcript)),
        {
            module: i,
            load: o,
            readyState: r
        } = Vc(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (De) {
                    return Promise.reject(De)
                }
            }
        }((function() {
            return import ("./Transcript.lazy.module.js")
        }))),
        a = null == i ? void 0 : i.Transcript,
        l = Hu((e => e.embed.transcript));
    if (n && t.current && (o(), t.current = !1), !l || r !== kc.LOADED && !n) return null;
    const s = $n(!n && "TranscriptLoader_module_hidden__48b2f57a");
    return De("div", {
        style: e,
        className: s,
        children: [r === kc.LOADING && De(M_, {}), r === kc.ERROR && De(ef, {
            onRetry: o
        }), r === kc.LOADED && De(a, {})]
    })
};
let nf;
const of = () => {
    const e = Hu((e => e.playback.buffering)),
        t = Hu((e => e.chromecast.isChromecastBuffering)),
        n = Hu((e => e.chromecast.isChromecastConnected)),
        i = Hu((e => e.displayList.progressBar)),
        [o, r] = Pe(!1);
    return e || t ? nf = setTimeout((() => {
        r(!0)
    }), 600) : (clearTimeout(nf), r(!1)), i && De($e, {
        children: [De(Yu, {
            visible: n || o,
            styleOverrides: {
                enterActive: {
                    opacity: .4
                },
                exit: {
                    opacity: .4
                },
                exitDone: {
                    display: "none"
                }
            },
            children: De("div", {
                className: "BufferHandler_module_shade__a4e303c9",
                "data-shade": !0
            })
        }), De(Yu, {
            visible: o,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: De(M_, {
                size: _r.LG
            })
        })]
    })
};
const rf = () => {
    const e = Hu((e => e.captions.activeCues)),
        t = Hu((e => e.captions.language)),
        n = Hu((e => e.captions.direction)),
        i = Hu((e => e.displayList.captions)),
        o = Hu((e => e.displayList.controlBar)),
        r = Hu((e => e.displayList.progressBar)),
        a = Hu((e => e.appearance.fullscreen)),
        l = Hu((e => e.embed.rightContentAreaEnabled)),
        s = Hu((e => e.captions.fontSize)),
        c = Hu((e => e.captions.fontFamily)),
        d = Hu((e => e.captions.fontOpacity)),
        u = Hu((e => e.captions.color)),
        _ = Hu((e => e.captions.bgColor)),
        p = Hu((e => e.captions.bgOpacity)),
        m = Hu((e => e.captions.windowOpacity)),
        v = Hu((e => e.captions.windowColor)),
        f = Hu((e => e.captions.edgeStyle)),
        h = Hu((e => e.appearance.videoHeight)),
        g = Hu((e => e.appearance.containerHeight)),
        E = rd((e => e.embed.transparent));
    let b = null,
        C = {};
    !a && E || h < g - 58 && (b = `translateY(-${(g-h)/2}px)`, C.transform = b);
    const y = $n("Captions_module_captions__0d35c569", !i && "Captions_module_hide__0d35c569", o && !b && "Captions_module_withControls__0d35c569", !r && "Captions_module_noPlaybar__0d35c569", a && "Captions_module_fullscreen__0d35c569", l && "Captions_module_contentAreaSibling__0d35c569");
    return De(V_, {
        cues: e,
        language: t,
        direction: n,
        className: y,
        fontSize: s,
        fontFamily: c,
        fontOpacity: d,
        color: u,
        bgColor: _,
        bgOpacity: p,
        windowOpacity: m,
        windowColor: v,
        edgeStyle: f,
        height: h,
        style: C
    })
};
var af = "QoESurvey_module_selected__32b208ff";
let lf;
const sf = ({
        containerRef: e
    }) => {
        const t = Hu((e => e.closeToast)),
            [n, i] = Pe(!1),
            [o, r] = Pe(!1),
            [a, l] = Pe(!1),
            s = Uc();
        Oe((() => {
            s(gr.VIEW_PLAYER_CSAT_V1), lf = setTimeout(t, 1e4)
        }), [s, t]);
        const c = "Good",
            d = "Poor";
        return De($e, {
            children: [De(W_, {
                transitionTime: 1e4,
                ariaLabelledby: Sn.QOE_SURVEY_TEXT
            }), De(Y_, {
                id: Sn.QOE_SURVEY_TEXT,
                children: "How's the viewing experience?"
            }), De(H_, {
                className: `QoESurvey_module_thumbsUp__32b208ff ${n?af:""}`,
                tooltipLabel: c,
                "aria-label": c,
                "aria-describedby": Sn.QOE_SURVEY_TEXT,
                icon: De(Qu, {
                    name: n ? td.THUMBS_UP_FILLED : td.THUMBS_UP
                }),
                onClick: () => {
                    n || o || a || (s(gr.SELECT_THUMBS_UP_PLAYER_CSAT_V1), i(!0), clearTimeout(lf), setTimeout(t, 200))
                },
                containerRef: e
            }), De(H_, {
                className: `QoESurvey_module_thumbsDown__32b208ff ${o?af:""}`,
                tooltipLabel: d,
                "aria-label": d,
                "aria-describedby": Sn.QOE_SURVEY_TEXT,
                icon: De(Qu, {
                    name: o ? td.THUMBS_DOWN_FILLED : td.THUMBS_DOWN
                }),
                onClick: () => {
                    n || o || a || (s(gr.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1), r(!0), clearTimeout(lf), setTimeout(t, 200))
                },
                containerRef: e
            }), De(x_, {}), De($_, {
                onClick: () => {
                    n || o || a || (s(gr.DISMISS_PLAYER_CSAT_V1), l(!0), clearTimeout(lf), t())
                },
                describedBy: Sn.QOE_SURVEY_TEXT,
                selected: a
            })]
        })
    },
    cf = () => {
        const e = Hu((e => e.playback.liveEdgeTime)),
            t = Hu((e => e.setPlayback)),
            n = Uc();
        return De(G_, {
            onClick: () => {
                t("atLiveEdge", !0), t("currentTime", e), n(gr.SKIP_TO_LIVE_CLICK)
            },
            label: "Skip to live"
        })
    },
    df = () => {
        const e = Hu((e => e.closeToast));
        return De($e, {
            children: [De(Y_, {
                id: Sn.BROADCAST_OVER,
                children: "The live broadcast is over"
            }), De(x_, {}), De($_, {
                onClick: e,
                describedBy: Sn.BROADCAST_OVER
            })]
        })
    };
const uf = {
        [Ou.QOE_SURVEY]: Sn.QOE_SURVEY_TEXT,
        [Ou.BROADCAST_OVER]: Sn.BROADCAST_OVER
    },
    _f = () => {
        const e = Re(null),
            t = Hu((e => e.toast.purpose)),
            n = Hu((e => e.appearance.fullscreen)),
            i = Hu((e => e.setDisplayList)),
            r = uf[t],
            a = "translateY(" + (n && o.iPadOS ? "calc(36px + 16px)" : "0") + ")",
            l = "translateY(calc(-100% - 16px))",
            s = "transform 400 ease-in-out",
            c = {
                enter: {
                    transform: l,
                    opacity: 1
                },
                enterActive: {
                    transition: s,
                    transform: a
                },
                enterDone: {
                    transform: a
                },
                exit: {
                    transform: a
                },
                exitActive: {
                    transition: s,
                    transform: l,
                    opacity: 1
                },
                exitDone: {
                    transform: l,
                    display: "none"
                }
            };
        return De(K_, {
            targetContent: t !== Ou.EMPTY ? t : null,
            onContentChange: e => {
                i("toast", !!e)
            },
            delay: 400,
            styleOverrides: c,
            children: t => De(B_, {
                className: "Toasts_module_toasts__25d07d44",
                ref: e,
                ariaLabelledby: r,
                children: [t === Ou.QOE_SURVEY && De(sf, {
                    containerRef: e
                }), t === Ou.SKIP_TO_LIVE && De(cf, {}), t === Ou.BROADCAST_OVER && De(df, {})]
            })
        })
    };
const pf = ({
        text: e
    }) => De("div", {
        className: "SpatialInstructions_module_instructions__4867d5d0",
        children: De(T_, {
            size: cr.MD,
            weight: dr.NORMAL,
            children: e
        })
    }),
    mf = () => {
        const e = Hu((e => e.liveEvent.isLiveEvent)) ? "Unmute broadcast" : "Unmute",
            {
                unmute: t
            } = Gc();
        return De(G_, {
            onClick: t,
            label: e
        })
    },
    vf = () => {
        const e = Hu((e => e.setAppearance)),
            t = Hu((e => e.clearSegment)),
            n = Hu((e => e.playback.startTime)),
            i = Hu((e => e.playback.endTime)),
            o = Uc();
        return De(G_, {
            onMouseEnter: () => e("mousedOverControlBar", !0),
            onMouseLeave: () => e("mousedOverControlBar", !1),
            onClick: () => {
                o(gr.WATCH_FULL_VIDEO, {
                    start_time: n,
                    end_time: i
                }), t()
            },
            label: "Watch full video"
        })
    };
const ff = o.android ? "Look around" : "Click and drag to look around",
    hf = o.android ? "Look around" : "Use arrow keys to see more",
    gf = () => {
        const e = Hu((e => e.topCenterActionItem.purpose)),
            t = Hu((e => e.setDisplayList));
        return De(K_, {
            targetContent: e !== Gs.EMPTY ? e : null,
            onContentChange: e => {
                t("topCenterActionItem", !!e)
            },
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: e => De(B_, {
                className: "TopCenterActionItems_module_topCenterActionItems__2bfde47f",
                children: [e === Gs.UNMUTE && De(mf, {}), e === Gs.WATCH_FULL_VIDEO && De(vf, {}), e === Gs.SPATIAL_INSTRUCTIONS_CLICK && De(pf, {
                    text: ff
                }), e === Gs.SPATIAL_INSTRUCTIONS_ARROWS && De(pf, {
                    text: hf
                })]
            })
        })
    };
const Ef = ({
    onReload: e
}) => {
    const t = Hu((e => e.setDisplayList)),
        n = $n(Tn.EXCLUDE_GLOBAL_BUTTON_STYLES, "AIWidgetError_module_reload__7c52451c");
    return De(Jv, {
        message: "Unable to load Vimeo AI",
        componentType: "ai-error",
        onClose: () => t("aiWidget", !1),
        children: De(R_, {
            className: n,
            size: rr.CUSTOM,
            onClick: e,
            "data-component-type": "reload-ai",
            children: De(T_, {
                size: cr.MD,
                weight: dr.BOLD,
                children: "Try again"
            })
        })
    })
};
const bf = "Ask Vimeo AI",
    Cf = ({
        style: e = {}
    }) => {
        const t = Hu((e => e.displayList.aiWidget)),
            i = rd((e => e.embed.vimeoUrl)),
            o = rd((e => e.embed.videoId)),
            r = rd((e => e.embed.onsite)),
            a = Hu((e => e.embed.videoUnlistedHash)),
            l = Hu((e => e.setDisplayList)),
            s = Hu((e => e.appearance.rightContentAreaAnimating)),
            c = Hu((e => e.embed.aiWidgetSignature)),
            d = Uc(),
            u = Jc(t),
            [_, p] = Pe(!1),
            m = $n("AIWidget_module_aiWidget__9bd9d0b8", !t && "AIWidget_module_hidden__9bd9d0b8"),
            v = {
                transparentBackground: !r
            };
        c && (v.guestSignature = c);
        const f = n(`https://${i}/ai-player/${o}${a?`/${a}`:""}`, v),
            {
                componentVersion: g,
                hasError: E,
                componentTimeout: b,
                onError: C,
                onReload: y
            } = Wc(),
            T = Ne((() => {
                const e = {
                    [Er.WEB]: {
                        page_name: "player"
                    },
                    [Er.PRODUCT_ANALYTICS]: {
                        copy: bf,
                        feature: "ai",
                        product: "ai",
                        element: "icon"
                    }
                };
                d(gr.OPEN_AI_OPTIONS, {}, e)
            }), [d]);
        return Oe((() => {
            t && (T(), _ || p(!0))
        }), [t]), De("div", h(h({
            className: m,
            style: e,
            "aria-label": "Ask Vimeo AI"
        }, u), {}, {
            children: [E && De(Ef, {
                onReload: y
            }), !E && _ && De(J_, {
                id: In.AI_WIDGET_ID,
                url: f,
                title: bf,
                onError: C,
                timeout: b,
                visible: t,
                onClose: () => {
                    l("aiWidget", !1)
                },
                isAnimating: s,
                waitForReady: !0
            }, g)]
        }))
    },
    yf = () => {
        const e = Re(!0),
            {
                module: t,
                load: n,
                readyState: i
            } = Vc(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                return import ("./Compass.lazy.module.js")
            }))),
            o = null == t ? void 0 : t.Compass,
            r = Hu((e => e.playback.playInitiated)),
            a = Hu((e => e.embed.compass));
        return a && r && e.current && (n(), e.current = !1), !a || i !== kc.LOADED && !r ? null : De(o, {})
    };
const Tf = () => {
    const e = Hu((e => e.embed.persistentLogo)),
        t = Hu((e => e.appearance.playerBreakpoint));
    return e && De("div", {
        className: "PersistentLogo_module_persistentLogo__e4ddb428",
        tabIndex: -1,
        "aria-hidden": "true",
        "data-persistent-logo": !0,
        children: De(tp, {
            playerBreakpoint: t
        })
    })
};
const Lf = ({
    children: e,
    shade: t,
    hideOnTiny: n
}) => {
    const i = Hu((e => e.appearance.playerSizeMode)),
        o = $n("OutroContentWrapper_module_outroContent__1c499014", t && "OutroContentWrapper_module_outroShade__1c499014", i === Ti.TINY && n && "OutroContentWrapper_module_hidden__1c499014");
    return De("div", {
        className: o,
        children: e
    })
};
const Af = () => {
    const e = Hu((e => e.outro.outroData));
    return De(Lf, {
        hideOnTiny: !0,
        shade: !0,
        children: De("div", {
            className: "TextOutro_module_textWrapper__eb1c7bb7",
            children: e && De("div", {
                className: "TextOutro_module_text__eb1c7bb7",
                dangerouslySetInnerHTML: {
                    __html: e.text
                }
            })
        })
    })
};
const If = ({
        url: e
    }) => {
        const t = {};
        return e && (t.backgroundImage = `url(${e})`), De("div", {
            className: "OutroContentBackground_module_background__fad7b858",
            style: t
        })
    },
    Sf = () => {
        const e = Hu((e => e.outro.outroData));
        return e && De($e, {
            children: [De(If, {
                url: null == e ? void 0 : e.imageUrl
            }), De(Lf, {
                shade: !0,
                hideOnTiny: !0,
                children: De(fp, {})
            })]
        })
    };
const Of = () => {
    const e = Hu((e => e.events)),
        t = Hu((e => e.outro.outroData)),
        n = {};
    return null != t && t.imageUrl && (n.backgroundImage = `url(${t.imageUrl})`), De($e, {
        children: [De(Yu, {
            visible: !0,
            children: De("div", {
                className: "LinkOutro_module_linkBackground__1d6e5c98",
                style: n
            })
        }), De(Lf, {
            shade: !0,
            children: De("div", {
                className: "LinkOutro_module_linkWrapper__1d6e5c98",
                children: t && De($e, {
                    children: [t.title && De("h1", {
                        className: "LinkOutro_module_title__1d6e5c98",
                        children: t.title
                    }), t.description && De("p", {
                        className: "LinkOutro_module_description__1d6e5c98",
                        children: t.description
                    }), t.text && t.url && De("div", {
                        className: "LinkOutro_module_buttonWrap__1d6e5c98",
                        children: De(qu, {
                            href: t.url,
                            className: "LinkOutro_module_button__1d6e5c98",
                            onClick: () => e.fire(zt._outroCtaPressed, null == t ? void 0 : t.url),
                            children: De("span", {
                                children: t.text
                            })
                        })
                    }), t.text2 && t.url2 && De(qu, {
                        href: t.url2,
                        className: "LinkOutro_module_link__1d6e5c98",
                        onClick: () => e.fire(zt._outroLinkPressed, null == t ? void 0 : t.url2),
                        children: De("span", {
                            children: t.text2
                        })
                    })]
                })
            })
        })]
    })
};
const Pf = () => {
    const e = Hu((e => e.outro.outroData)),
        t = function(e) {
            const t = Hu((e => e.events));
            return Ne((function() {
                t.fire(zt._outroImagePressed, e)
            }), [e, t])
        }(null == e ? void 0 : e.url);
    return e && De(Lf, {
        children: null != e && e.url ? De(qu, {
            href: e.url,
            className: "ImageOutro_module_imageOutroLink__7a84ec40",
            onClick: t,
            targetBlank: !0,
            children: De(Rf, {
                url: e.imageUrl,
                altText: null == e ? void 0 : e.alt_text
            })
        }) : De(Rf, {
            url: e.imageUrl,
            altText: null == e ? void 0 : e.alt_text
        })
    })
};

function Rf({
    url: e,
    altText: t
}) {
    return De("div", h({
        role: "img",
        className: "ImageOutro_module_imageOutro__7a84ec40",
        style: {
            backgroundImage: `url(${e})`
        }
    }, t ? {
        ariaLabel: t
    } : {}))
}
const Nf = () => De($e, {
    children: [De(If, {}), De(Lf, {
        shade: !0
    }), ";"]
});
const wf = ({
    videos: e
}) => {
    const t = rd((e => e.loadVideoViaIframe)),
        n = rd((e => e.embed.onsite)),
        i = Hu((e => e.events)),
        o = Hu((e => e.user.isPayingOwner)),
        r = Hu((e => e.embed.svvContext)),
        a = e => n => {
            i.fire(zt._outroVideoPressed, e.id), o && !r && (n.preventDefault(), t(e.id, {
                autoplay: !0
            }))
        },
        l = $n("VideosList_module_videoLink__e7886b41", A_.focusable);
    return e.length && De("ul", {
        className: "VideosList_module_videosList__e7886b41",
        "data-num-videos": e.length,
        children: e.map((e => De("li", {
            children: De(qu, h(h({
                className: l,
                targetBlank: !n,
                href: e.url,
                onClick: a(e)
            }, f_), {}, {
                children: [De(np, {
                    url: e.thumbnail,
                    className: "VideosList_module_videoThumbnail__e7886b41"
                }), De("header", {
                    className: "VideosList_module_videoHeader__e7886b41",
                    children: [De(T_, {
                        className: "VideosList_module_videoTitle__e7886b41",
                        weight: dr.BOLD,
                        element: "h1",
                        size: cr.MD,
                        color: ur.WHITE,
                        children: e.title
                    }), e.byline && De(T_, {
                        className: "VideosList_module_videoByline__e7886b41",
                        element: "h2",
                        children: e.byline
                    })]
                })]
            }))
        }, e.id)))
    })
};
var Df = "FollowButton_module_icon__9a75dd35";
const kf = () => {
    const [e, t] = Pe(!1), n = Hu((e => e.events)), i = Hu((e => e.user.following)), o = Hu((e => e.user.loggedIn)), r = Hu((e => e.user.isClipOwner)), a = Hu((e => e.user.persistUserAction));
    let l = "Follow";
    const s = i && e,
        c = i && !e;
    s && (l = "Unfollow"), c && (l = "Following");
    const d = $n(Df, "FollowButton_module_check__9a75dd35"),
        u = $n(Df, "FollowButton_module_close__9a75dd35"),
        _ = $n("FollowButton_module_followButton__9a75dd35", c && "FollowButton_module_following__9a75dd35");
    return De("div", {
        onMouseEnter: () => i && t(!0),
        onMouseLeave: () => t(!1),
        className: "FollowButton_module_followButtonContainer__9a75dd35",
        children: De(R_, {
            className: _,
            onClick: () => {
                if (o && !r) {
                    if (n.fire(zt._followButtonPressed), i) return a(Ld.FOLLOWING, "DELETE"), void n.fire(zt._unfollowed);
                    a(Ld.FOLLOWING, "PUT"), n.fire(zt._followed)
                }
            },
            children: [!i && De(Qu, {
                className: Df,
                name: td.PLUS_SYMBOL
            }), c && De(Qu, {
                className: d,
                name: td.CHECKMARK
            }), s && De(Qu, {
                className: u,
                name: td.CLOSE
            }), De("span", {
                className: "FollowButton_module_followButtonText__9a75dd35",
                children: l
            })]
        })
    })
};
const Mf = ({
    titleMarkup: e
}) => {
    const t = Hu((e => !e.user.isClipOwner));
    return De("div", {
        className: "VideosHeader_module_videosHeaderWrapper__82d8877c",
        children: De("header", {
            className: "VideosHeader_module_videosHeader__82d8877c",
            children: [De(T_, {
                className: "VideosHeader_module_videosTitle__82d8877c",
                size: cr.LG,
                element: "h1",
                containsMarkup: !0,
                children: e
            }), t && De(kf, {})]
        })
    })
};
const Vf = () => {
    var e;
    const t = Hu((e => e.outro.outroData));
    return (null == t || null == (e = t.videos) ? void 0 : e.length) > 0 && De($e, {
        children: [De(If, {
            url: t.imageUrl
        }), De(Lf, {
            shade: !0,
            children: De("div", {
                className: "VideosOutro_module_videosOutro__aa31a3f4",
                children: [De(Mf, {
                    titleMarkup: t.context
                }), De(wf, {
                    videos: t.videos
                })]
            })
        })]
    })
};

function Bf({
    children: e,
    url: t,
    onClick: n,
    type: i = "purchase-item"
}) {
    const o = $n("VODButton_module_VODButton__3dccb3f8", "watch" === i && "VODButton_module_watch__3dccb3f8");
    return De(qu, h(h({
        className: o,
        role: "button",
        href: t
    }, xn(n)), {}, {
        children: e
    }))
}
const xf = () => {
        const e = Hu((e => e.vod.url)),
            t = Hu((e => e.setDisplayList)),
            n = Hu((e => e.vod.isPreorder)),
            i = (Hu((e => e.vod.releaseDate)), n ? "Watch on {releaseDate}" : "Watch Now"),
            o = xd();
        return De(Bf, {
            url: e,
            type: "watch",
            onClick: e => {
                n || (e.preventDefault(), t("outro", !1), o(e))
            },
            children: i
        })
    },
    Uf = () => {
        const e = Hu((e => e.vod.isComingSoon)),
            t = Hu((e => e.vod.isPreorder)),
            n = Hu((e => e.vod.releaseDate));
        let i = "Coming soon to Vimeo On Demand.";
        return e && n && (i = "Coming soon to Vimeo On Demand on " + n + "."), t && (i = "Pre-order now. Watch on " + n + "."), De("p", {
            children: i
        })
    };
const Hf = e => {
    const t = function({
        type: e
    }) {
        switch (e) {
            case "buy":
                return td.VOD_DOWNLOAD;
            case "rent":
                return td.VOD_RENT;
            case "subscribe":
                return td.VOD_SUBSCRIBE;
            default:
                return td.VOD
        }
    }(e);
    return De("div", {
        className: "VODIcon_module_VODIconContainer__f6dd6c94",
        children: De(Qu, {
            className: "VODIcon_module_VODIcon__f6dd6c94",
            name: t
        })
    })
};
const Ff = ({
    product_id: e,
    formattedLabel: t,
    type: n
}) => {
    const i = Hu((e => e.vod.url)),
        o = xd(e);
    return De("li", {
        className: "PurchaseOptionItem_module_purchaseOptionItem__9ee33594",
        children: De(Bf, {
            url: `${i}#buy=${e}`,
            onClick: e => {
                e.preventDefault(), o(e)
            },
            children: [De(Hf, {
                type: n
            }), De("p", {
                className: "PurchaseOptionItem_module_label__9ee33594",
                children: t
            })]
        })
    })
};
const Gf = () => {
        const e = Hu((e => e.vod.purchaseOptions));
        return De("ul", {
            className: "PurchaseOptions_module_purchaseOptions__2aad36ed",
            children: e.map(((e, t) => De(Ff, h({}, e), `${e.type}-${t}`)))
        })
    },
    Wf = () => {
        const e = Hu((e => e.vod.isComingSoon)),
            t = Hu((e => e.vod.isPreorder));
        return De($e, {
            children: [!e && De(Gf, {}), (t || e) && De(Uf, {})]
        })
    };
const Yf = () => {
        const e = Hu((e => e.vod.url)),
            t = Hu((e => e.vod.title)),
            n = Hu((e => e.vod.isAvailableInCountry)),
            i = Hu((e => e.vod.purchased)),
            o = Hu((e => e.outro.outroData));
        return o && De($e, {
            children: [(null == o ? void 0 : o.imageUrl) && De(If, {
                url: null == o ? void 0 : o.imageUrl
            }), De(Lf, {
                shade: !0,
                children: De("div", {
                    className: "VODOutro_module_VODOutroContainer__e53bfe58",
                    children: [De("h1", {
                        "aria-describedby": "new-window",
                        className: "VODOutro_module_VODHeader__e53bfe58",
                        children: De(qu, {
                            href: e,
                            children: t
                        })
                    }), n && De(i ? xf : Wf, {})]
                })
            })]
        })
    },
    $f = () => {
        const e = Hu((e => e.displayList.outro)),
            t = Hu((e => e.outro.active)),
            n = Hu((e => e.outro.purpose)),
            i = $n("Outro_module_outroWrapper__552ef1cd", yn.VP_OUTRO_WRAPPER, !t && "Outro_module_inactive__552ef1cd");
        return De(Yu, {
            visible: e,
            styleOverrides: {
                exitDone: {
                    display: "none"
                }
            },
            children: De("div", {
                className: i,
                "data-content-area-sibling-eligible": !0,
                children: De("div", {
                    className: "Outro_module_outro__552ef1cd",
                    role: "dialog",
                    children: [n === Cc.TEXT && De(Af, {}), n === Cc.SHARE && De(Sf, {}), n === Cc.VIDEOS && De(Vf, {}), n === Cc.LINK && De(Of, {}), n === Cc.IMAGE && De(Pf, {}), n === Cc.NOTHING && De(Nf, {}), n === Cc.VOD && De(Yf, {})]
                })
            })
        })
    };
const Kf = ({
    text: e
}) => De("h3", {
    children: [De(Qu, {
        name: td.WARN_TRIANGLE,
        className: "Warning_module_warningIcon__d2643ae4"
    }), De("span", {
        dangerouslySetInnerHTML: {
            __html: e
        }
    })]
});

function qf() {
    const e = `See a <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="${Ln.NEW_WINDOW_DESCRIPTION}">list of browsers</a> that support 360 viewing.`;
    return De(Kf, {
        text: e
    })
}

function jf() {
    const e = `Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/12425909164561-Watch-360-videos#h_01FRKB6NKKXE9WTVX8P5C64D69" target="_blank" rel="noopener" aria-describedby="${Ln.NEW_WINDOW_DESCRIPTION}">supported browsers and settings</a>.`;
    return De(Kf, {
        text: e
    })
}
const zf = ({
        visible: e,
        children: t,
        duration: n,
        onComplete: i
    }) => De(Ue, { in: e,
        duration: n,
        styles: {
            enter: {
                transform: "translateY(-100%)",
                transition: `transform ${n}ms linear, opacity ${n}ms`,
                opacity: 0
            },
            enterActive: {
                opacity: 1,
                transition: `transform ${n}ms cubic-bezier(0, 1.14, 0.57, 1.21), opacity ${n}ms`,
                transform: "translateY(0)",
                animationName: "bounce",
                animationDelay: n,
                animationDuration: "0.5s",
                animationFillMode: "forwards"
            },
            enterDone: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exit: {
                opacity: 1,
                transform: "translateY(0)"
            },
            exitActive: {
                animationFillMode: "none",
                opacity: 0,
                transform: "translateY(-100%)",
                transition: `transform ${2*n}ms linear, opacity ${2*n}ms linear`
            },
            exitDone: {
                display: "none"
            }
        },
        onExited: i,
        children: t
    }),
    Xf = () => {
        const e = Hu((e => e.displayList.alert)),
            t = Re(null),
            n = Hu((e => e.setAlert)),
            i = Hu((e => e.setDisplayList)),
            o = Hu((e => e.alert.currentAlert)),
            r = Ne((() => i("alert", !1)), [i]),
            a = Ne((() => n("currentAlert", ec.EMPTY)), [n]);
        return Oe((function() {
            e && (clearTimeout(t.current), t.current = setTimeout(r, 1e3))
        }), [e, o]), De(zf, {
            visible: e,
            duration: 100,
            onComplete: a,
            children: De("div", {
                className: "Alert_module_alert__bde6a4f3",
                role: "alert",
                hidden: !e,
                children: [De(R_, {
                    onClick: r,
                    icon: De(Qu, {
                        name: td.CLOSE,
                        className: "Alert_module_closeIcon__bde6a4f3"
                    }),
                    "aria-label": "Close alert",
                    className: "Alert_module_close__bde6a4f3"
                }), o === ec.SPATIAL_UNSUPPORTED && De(qf, {}), o === ec.SPATIAL_FAILURE && De(jf, {})]
            })
        })
    };
const Zf = "opacity 250ms ease-out",
    Qf = {
        enter: {
            opacity: 0
        },
        enterActive: {
            opacity: 1,
            transition: Zf
        },
        enterDone: {
            opacity: 1
        },
        exit: {
            opacity: 1
        },
        exitActive: {
            opacity: 0,
            transition: Zf
        },
        exitDone: {
            display: "none"
        }
    },
    Jf = Object.values(q_),
    eh = () => {
        const e = rd((e => e.element)),
            t = rd((e => e.accessGate.purpose)),
            n = rd((e => e.accessGate.url)),
            i = rd((e => e.accessGate.title)),
            o = rd((e => e.accessGate.accessGateReady)),
            r = rd((e => e.accessGate.accessGateLoaded)),
            a = rd((e => e.accessGate.closeAccessGate)),
            l = rd((e => e.accessGate.setAccessGateReady)),
            s = rd((e => e.accessGate.setAccessGateLoaded)),
            c = rd((e => e.accessGate.sendGateBPEvent)),
            d = rd((e => e.config)),
            [u, _] = Pe(!1),
            [p, m] = Pe(!1),
            v = t !== Fo.EMPTY,
            f = u && p && v,
            h = u && v && !r,
            g = f && o,
            E = $n(Tn.REMOTE_ACCESS_GATE, "RemoteAccessGate_module_accessGate__82178468", h && "RemoteAccessGate_module_waitingToDisplay__82178468", g && "RemoteAccessGate_module_visible__82178468"),
            {
                componentVersion: b,
                hasError: C,
                componentTimeout: y,
                onError: T,
                onReload: L
            } = Wc();
        return Oe((() => {
            _(!0)
        }), []), Oe((() => {
            const t = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (De) {
                        return Promise.reject(De)
                    }
                }
            }((function() {
                return function(e, t) {
                    return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                }(wo(e), (function() {
                    m(!0)
                }))
            }));
            p || t()
        }), [p, e]), De(Ue, { in: f,
            styles: Qf,
            duration: 250,
            children: De("div", {
                className: "RemoteAccessGate_module_accessGateWrapper__82178468",
                children: [C && De(th, {
                    onReload: L
                }), !C && f && De(Z_, {
                    visible: g,
                    id: t,
                    url: n,
                    title: i,
                    className: E,
                    timeout: y,
                    waitForReady: !0,
                    onClose: a,
                    onError: e => {
                        Jf.includes(null == e ? void 0 : e.message) && T(), c(Wo.ERROR, e)
                    },
                    config: d,
                    onRemoteComponentReady: l,
                    onIframeLoad: s
                }, b)]
            })
        })
    };
const th = ({
    onReload: e
}) => {
    const t = $n(Tn.EXCLUDE_GLOBAL_BUTTON_STYLES, "RemoteAccessGateError_module_reload__765f151c");
    return De("div", {
        className: "RemoteAccessGateError_module_container__765f151c",
        "data-component-type": "access-gate",
        children: [De(Qu, {
            name: td.INFO_CIRCLE,
            className: "RemoteAccessGateError_module_icon__765f151c",
            "aria-hidden": "true"
        }), De(T_, {
            size: cr.LG,
            weight: dr.NORMAL,
            className: "RemoteAccessGateError_module_messageText__765f151c",
            role: "alert",
            children: "Unable to load registration form"
        }), De(R_, {
            className: t,
            size: rr.CUSTOM,
            onClick: e,
            "data-component-type": "reload-access-gate",
            children: De(T_, {
                size: cr.MD,
                weight: dr.BOLD,
                children: "Try again"
            })
        })]
    })
};
const nh = () => {
    const e = rd((e => e.login.status)),
        t = rd((e => e.embed.videoId)),
        n = rd((e => e.embed.vimeoUrl)),
        {
            loginText: i,
            buttonTarget: o
        } = ((e = Xo.NOT_LOGGED_IN) => {
            const t = {
                loginText: lo() ? {
                    title: "Sign in to Vimeo to watch this video",
                    subtitle: "You may need to allow cookies first. If asked, select <b>Allow</b> to continue.",
                    buttonText: "Sign in"
                } : {
                    title: "Sign in to Vimeo",
                    subtitle: "This video is private. Sign in to watch.",
                    buttonText: "Sign in"
                },
                buttonTarget: En.POPUP
            };
            switch (e) {
                case Xo.LOGGED_IN_NO_ACCESS:
                    t.loginText = {
                        title: "Private Video",
                        subtitle: "Sorry, you don’t have permission to watch.",
                        buttonText: null
                    };
                    break;
                case Xo.LOGGED_IN_STORAGE_ACCESS_REQUIRED:
                    t.loginText = {
                        title: "Allow cookies",
                        subtitle: "Your browser will ask if you want to allow cookies. Select <b>Allow</b> to continue.",
                        buttonText: "Continue"
                    };
                    break;
                case Xo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:
                    t.loginText = {
                        title: "Continue to sign in",
                        subtitle: "You may now sign in to watch this video.",
                        buttonText: "Continue"
                    };
                    break;
                case Xo.ALL_ACCESS_ATTEMPTS_FAILED:
                    t.loginText = {
                        title: "Video unavailable",
                        subtitle: "Try watching on vimeo.com.",
                        buttonText: "Watch on Vimeo"
                    }, t.buttonTarget = En.ON_SITE
            }
            return t
        })(e),
        {
            loginHandler: r
        } = (() => {
            const e = rd((e => e.events)),
                t = rd((e => e.embed.videoId)),
                n = Re(null),
                {
                    openLoginPopup: i
                } = kd({
                    url: `/video/${t}/login/private`,
                    context: Td.PRIVATE_LOCKED
                });
            return Oe((() => {
                n.current = function({
                    events: e,
                    dependencies: t = Zo
                }) {
                    const n = {
                            onLoginRequested: function(t) {
                                c = t, !i() || a ? (d(), u()) : (l++, o(d).then((t => t ? (a = !0, r || u(), void e.fire(zt._userLogIn, "private")) : void(v(1) ? p(Xo.ALL_ACCESS_ATTEMPTS_FAILED) : u()))).catch((e => {})))
                            }
                        },
                        {
                            storageAccessRequired: i,
                            requestCookieAccess: o
                        } = t;
                    let r = !1,
                        a = !1,
                        l = 0,
                        s = 0,
                        c = hi;

                    function d() {
                        r = !0, c()
                    }

                    function u() {
                        e.once(zt._loginFailure, _)
                    }

                    function _() {
                        s++;
                        const e = m();
                        v() ? p(Xo.ALL_ACCESS_ATTEMPTS_FAILED) : p(!e && r ? Xo.LOGGED_IN_STORAGE_ACCESS_REQUIRED : Xo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)
                    }

                    function p(t) {
                        e.fire(zt._privateLoginStatusUpdated, t)
                    }

                    function m() {
                        return l >= 2
                    }

                    function v(e = 2) {
                        const t = !i() && r && s > 0,
                            n = s >= e,
                            o = m();
                        return n && o || t
                    }
                    return n
                }({
                    events: e
                })
            }), [e]), {
                loginHandler: () => {
                    n.current && n.current.onLoginRequested(i)
                }
            }
        })(),
        a = e === Xo.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED || e === Xo.ALL_ACCESS_ATTEMPTS_FAILED;
    return De("div", {
        className: "PrivateGate_module_privateGateWrapper__57f31972",
        "data-private-gate": !0,
        children: [De(T_, {
            element: "h1",
            className: "PrivateGate_module_header__57f31972",
            children: i.title
        }), De(T_, {
            className: "PrivateGate_module_subtitle__57f31972",
            weight: dr.NORMAL,
            containsMarkup: !0,
            "data-private-text": !0,
            children: i.subtitle
        }), e !== Xo.LOGGED_IN_NO_ACCESS && De(R_, {
            role: a ? "link" : void 0,
            color: ar.PRIMARY,
            className: $n("PrivateGate_module_login__57f31972", "PrivateGate_module_loginButton__57f31972", A_.focusableButton),
            "aria-describedby": a ? Ln.NEW_WINDOW_DESCRIPTION : void 0,
            onClick: () => {
                if (o === En.POPUP) return void r();
                const e = `https://${n}/${t}`;
                window.open(e, "_blank")
            },
            children: i.buttonText
        })]
    })
};

function ih(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const oh = lh((function(e, i) {
    const o = new URLSearchParams({
            password: window.btoa(vt(e))
        }),
        r = n(i, t(window.location.search));
    return ih(je(r, {
        method: "post",
        body: o.toString(),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include"
    }), (function(e) {
        return ih(e.json(), (function(t) {
            if (!e.ok || !1 === t) throw new Error("Password submission failed");
            return t
        }))
    }))
}));

function rh() {}

function ah(e) {
    var t = e();
    if (t && t.then) return t.then(rh)
}

function lh(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (De) {
            return Promise.reject(De)
        }
    }
}
const sh = () => {
        const e = rd((e => e.events)),
            t = rd((e => e.embed.playerUrl)),
            n = rd((e => e.embed.referrer)),
            i = rd((e => e.embed.videoId)),
            o = Re(null),
            r = Re(null),
            a = Re(null),
            [l, s] = Pe(!1),
            [c, d] = Pe("There is an error with this input."),
            [u, _] = Pe(!1),
            p = `https://${t}/video/${i}/check-password?referrer=${n}`,
            m = "Enter password",
            v = $n("PasswordGate_module_submitPassword__0e9743ae", u && "PasswordGate_module_loading__0e9743ae"),
            f = () => {
                const e = a.current;
                e.focus(), _(!1), s(!0), e.value.length ? d("The password you entered is incorrect. Please try again.") : d("Please enter the password.")
            },
            h = lh((function(t) {
                return t.preventDefault(), d(""), s(!1), ah((function() {
                    if (a.current.checkValidity()) return _(!0), ah((function() {
                        if (a.current.checkValidity()) return function(e) {
                            if (e && e.then) return e.then(rh)
                        }(function(n, i) {
                            try {
                                var o = ih(oh(a.current.value, p), (function(t) {
                                    t && e.fire(zt._passwordUnlocked, t)
                                }))
                            } catch (t) {
                                return i()
                            }
                            return o && o.then ? o.then(void 0, i) : o
                        }(0, (function() {
                            f()
                        })))
                    }));
                    f()
                }))
            }));
        return De("div", {
            className: "PasswordGate_module_passwordGateWrapper__0e9743ae",
            "data-password-gate": !0,
            children: [De(T_, {
                className: "PasswordGate_module_header__0e9743ae",
                element: "h1",
                children: "Password required"
            }), De(T_, {
                className: "PasswordGate_module_subtitle__0e9743ae",
                weight: dr.NORMAL,
                containsMarkup: !0,
                "data-private-text": !0,
                children: "If you have access, enter the password to watch."
            }), De("form", {
                className: "PasswordGate_module_form__0e9743ae",
                ref: o,
                noValidate: !0,
                onSubmit: h,
                children: [De(gp, {
                    message: c,
                    visible: l,
                    wrapperEl: a.current
                }), De("input", {
                    className: "PasswordGate_module_passwordInput__0e9743ae",
                    placeholder: m,
                    required: !0,
                    "aria-required": "true",
                    "aria-label": m,
                    "aria-invalid": l ? "true" : "false",
                    ref: a,
                    onInput: () => s(!1),
                    minLength: 1,
                    type: "password"
                }), De(R_, {
                    className: v,
                    onClick: h,
                    ref: r,
                    disabled: l,
                    focusable: !1,
                    "data-submit-password": !0,
                    children: "Submit"
                })]
            })]
        })
    },
    ch = () => {
        const e = rd((e => e.localAccessGate.purpose));
        return e !== ud.EMPTY && De("div", {
            className: "LocalAccessGate_module_localAccessGateWrapper__0fb7e183",
            children: [e === ud.PASSWORD && De(sh, {}), e === ud.PRIVATE_LOCKED && De(nh, {}), e === ud.ERROR && De(Ep, {})]
        })
    };

function dh() {
    const e = Hu((e => e.setInteractive)),
        t = Hu((e => e.interactive.instanceId)),
        n = Hu((e => e.interactive.active)),
        i = Hu((e => e.interactive.enabled)),
        o = $n("VimeoInteractive_module_container__211f1fff", n && "VimeoInteractive_module_active__211f1fff");
    return i ? t ? De("div", {
        children: De("div", {
            id: t,
            className: o
        }, t)
    }) : (e("instanceId", `vp-vimeo-interactive-instance-${Math.random().toString(36).substring(2)}`), null) : null
}
const uh = () => {
        const e = rd((e => e.videoThumbnail.isDisplayed)),
            t = rd((e => e.videoThumbnail.thumbnailUrl)),
            n = rd((e => e.videoThumbnail.shouldCoverBackground)),
            i = {
                backgroundImage: `url(${t})`
            },
            o = $n(yn.VP_PREVIEW, "VideoThumbnail_module_videoThumbnail__d1b35579", n && "VideoThumbnail_module_cover__d1b35579");
        return e && t && De("div", {
            className: o,
            style: i,
            "data-thumb": t
        })
    },
    _h = () => De("span", {
        id: Ln.NEW_WINDOW_DESCRIPTION,
        hidden: !0,
        children: "(opens a new window)"
    });
var ph = "LiveStatusAlerts_module_schedule__cf2b4eb9";
const mh = () => {
    const e = Hu((e => e.liveEvent.isLiveEvent)),
        t = Hu((e => e.liveEvent.isOnline)),
        n = Hu((e => e.liveEvent.liveEventSchedule)),
        i = Hu((e => e.liveEvent.isPending)),
        o = Hu((e => e.liveEvent.isActive)),
        r = Hu((e => e.liveEvent.isEnded)),
        a = Hu((e => e.liveEvent.isArchived)),
        l = Hu((e => e.liveEvent.dvrEnabled)),
        s = Hu((e => e.liveEvent.showEventSchedule)),
        c = Hu((e => e.playback.currentTime)),
        d = Hu((e => e.playback.atLiveEdge)),
        u = Hu((e => e.config.request.lang)),
        _ = Hu((e => e.element)),
        [p, m] = Pe(null),
        [v, f] = Pe(null),
        [h, g] = Pe(new Date),
        E = Re(null),
        b = Ze((() => new Date(n)), [n]),
        C = r && l && 0 !== c || !1 === t && !d,
        y = null === t,
        T = r && !C && !a,
        L = !1 === t && !C;
    return Oe((() => (y && s ? (i || o) && n ? fr(b, h) > 0 ? (m("time"), f(function(e, t, n = new Date) {
        const i = fr(t),
            o = Math.ceil(i / 1e3).toFixed(0),
            r = Math.ceil(i / 6e4).toFixed(0),
            a = Math.ceil(i / 36e5).toFixed(0),
            l = Math.ceil(i / 864e5).toFixed(0),
            s = n.toDateString() === t.toDateString();
        if (parseInt(l, 10) > 1 || !s) return ("This event is scheduled for\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(t) + "\nat " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(t)).split("\n");
        if (parseInt(a, 10) > 1 && s) return ("This event is scheduled for\nToday\nat " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(t)).split("\n");
        let c;
        const d = parseInt(r, 10) > 1;
        return c = d ? "minutes" : parseInt(o, 10) > 1 ? "seconds" : "second", ("This event will start in\n" + (d ? r : o) + " " + c).split("\n")
    }(u, b, h)), E.current = setInterval((() => {
        g(new Date)
    }), 1e3)) : (m("text"), f("This event hasn't started yet")) : (i || o) && (m("text"), f("This event hasn't started yet")) : T ? (m("text"), f("Live event ended")) : L ? (m("text"), f("Live stream offline")) : (m(null), f(null)), () => {
        E.current && (clearInterval(E.current), E.current = null)
    })), [i, o, r, a, t, C, n, u, b, h, y, s, T, L]), e && p && v && ze(De("div", {
        className: "LiveStatusAlerts_module_eventTextWrapper__cf2b4eb9",
        "data-live-status-alerts": !0,
        children: ["text" === p && De("span", {
            className: ph,
            children: v
        }), "time" === p && De("div", {
            className: ph,
            "data-live-event-schedule": !0,
            children: [De("span", {
                className: "LiveStatusAlerts_module_scheduleTitle__cf2b4eb9",
                children: v[0]
            }), De("span", {
                className: "LiveStatusAlerts_module_scheduleBody__cf2b4eb9",
                children: v[1]
            }), De("span", {
                className: "LiveStatusAlerts_module_scheduleFooter__cf2b4eb9",
                children: v[2]
            })]
        })]
    }), _)
};
const vh = () => {
    const e = Hu((e => e.chromecast.isChromecastConnected)),
        t = Hu((e => e.chromecast.receiverFriendlyName)),
        n = Hu((e => e.playback.ended));
    return e && !n && De("div", {
        className: "ChromecastText_module_wrapper__5708223b",
        children: De("span", {
            className: "ChromecastText_module_text__5708223b",
            children: `Casting on ${t}`
        })
    })
};

function fh(e, t) {
    const n = t.querySelector(`.${yn.VP_PLAYER_UI_CONTAINER}`),
        i = t.querySelector(`.${yn.VP_PLAYER_UI_OVERLAYS}`),
        o = t.querySelector(`.${yn.VP_VIDEO_WRAPPER}`);
    Qe(De(ad, {
        player: e,
        children: [De(Yv, {}), De(eh, {}), De(ch, {}), De(yv, {
            element: o,
            children: De(uh, {})
        }), De(Gu, {
            player: e,
            children: [De(gv, {}), De(Rv, {}), De(yv, {
                element: i,
                children: [De(gf, {}), De(_f, {}), De(wv, {}), De(Qp, {}), De(Dp, {}), De(zp, {}), De(tm, {}), De(fv, {}), De(Pv, {}), De(sv, {}), De(Cv, {}), De( of , {}), De(rf, {}), De(yf, {}), De($f, {}), De(Xf, {}), De(dh, {}), De(vh, {})]
            }), De(mh, {}), De(Tf, {}), De(Kv, {}), De($v, {})]
        }), De(_h, {})]
    }), n)
}

function hh(e, t) {
    const n = t.querySelector(`.${yn.VP_PLAYER_UI_OVERLAYS}`),
        i = t.querySelector(`.${yn.VP_VIDEO_WRAPPER}`);
    Qe(De(ad, {
        player: e,
        children: [De(Yv, {}), De(yv, {
            element: i,
            children: De(uh, {})
        }), De(Gu, {
            player: e,
            children: De(zp, {})
        }), De(_h, {})]
    }), n)
}
let gh = 0;

function Eh(e = "b") {
    return `${e}${++gh}`
}
Eh(), Eh(), Eh(), Eh(), Eh(), Eh(), Eh(), Eh();
const bh = Eh(),
    Ch = Eh(),
    yh = Eh(),
    Th = Eh(),
    Lh = Eh(),
    Ah = Eh(),
    Ih = Eh(),
    Sh = Eh(),
    Oh = Eh(),
    Ph = Eh(),
    Rh = Eh(),
    Nh = Eh(),
    wh = Eh(),
    Dh = Eh();
var kh = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: bh,
        TELECINE_READY: Ch,
        TELECINE_VIDEO_INIT: yh,
        PLAY_INITIATED: Th,
        QUALITY_CHANGED: Lh,
        FORCED_QUALITY: Ah,
        CUE_CHANGED: Ih,
        CAPTIONS_CHANGED: Sh,
        SPATIAL_PLAYBACK_TOGGLED: Oh,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: Ph,
        HLS_QUALITY_CHANGED: Rh,
        REQUEST_COMPLETE_LIVE_SUBTITLES: Nh,
        COMPLETE_LIVE_SUBTITLES_LOADED: wh,
        COMPLETE_LIVE_SUBTITLES_ERROR: Dh
    }),
    Mh = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
h(h(h(h(h(h(h(h({}, E), P), Je), Mh), X), q), z), kh), h(h({}, Je), Mh);
let Vh = function() {
        function e() {}
        return e.init = function(e) {
            this.configurePictureInPicture(e.config, e.backbone), e.backbone.on(bh, ((t, n) => {
                this.getPipSetting(n) !== this.getPipSetting(t) && this.configurePictureInPicture(t, e.backbone)
            }))
        }, e.getPipSetting = function(e) {
            var t;
            return null == (t = e.embed) || null == (t = t.settings) ? void 0 : t.pip
        }, e.configurePictureInPicture = function(e, t) {
            var n, i, o, r;
            t.disablePictureInPicture = !(null === (n = null == (i = e.embed) || null == (i = i.settings) ? void 0 : i.pip) || void 0 === n || n), t.autoPictureInPicture = !(null !== (o = null == (r = e.embed) || null == (r = r.settings) ? void 0 : r.auto_pip) && void 0 !== o && !o)
        }, e
    }(),
    Bh = function(e) {
        Vh.init(e)
    };
const xh = [],
    Uh = `\n    <div class="${Tn.CONTENT_AREA_BACKGROUND_CONTAINER}" aria-hidden="true"></div>\n        <div class="${yn.VP_VIDEO_WRAPPER}" ${Dn.CONTENT_AREA_SIBLING_ELIGIBLE} aria-hidden="true">\n            <div class="${yn.VP_VIDEO}">\n                <div class="${yn.VP_TELECINE}"></div>\n            </div>\n        </div>\n        <div class="${yn.VP_TARGET}" ${Dn.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n        <div class="${yn.VP_PLAYER_UI_CONTAINER}" ${Dn.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n        <div class="${yn.VP_PLAYER_UI_OVERLAYS}" ${Dn.CONTENT_AREA_SIBLING_ELIGIBLE}></div>\n    </div>\n`;

function Hh({
    element: n,
    delegate: i = {},
    cssLoadedPromise: r = Promise.resolve(null),
    name: a = null
}) {
    et.set(Br);
    let s = !1;
    const _ = tt(Hl, it((e => (...t) => {
            const n = e.apply(void 0, t),
                i = ht();

            function o(e, t) {
                return (e = [].concat(e)).map((e => t(n.createGetter(e))))
            }
            return h(h({}, n), {}, {
                watch: function(e, t) {
                    return o(e, (e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    }))
                },
                unwatch: function(e, t) {
                    return o(e, (e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    }))
                }
            })
        }), function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const r = ie((e => {
                    if (oe(e)) return e;
                    const t = u(o(), e);
                    return oe(t) ? t : t => u(t, e)
                }));
                return h(h({}, i), {}, {
                    getSelectors: o,
                    createGetter: r,
                    get: function(e, t) {
                        let n = (e = r(e))(i.getState());
                        return void 0 !== t && (n = re(n, t)), n
                    }
                })
            }
        }(Fl), nt.apply(void 0, []))),
        p = new Map,
        m = new w,
        v = new Ur({
            events: m
        }),
        f = c();
    n.classList.add(`player-${f}`), n.classList.add("loading"), n.id || (n.id = `player${f}`), n.innerHTML = Uh;
    const g = n.querySelector(".vp-telecine");
    if (o.iOS) {
        const e = document.createElement("video");
        g.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (De) {
            Br.captureException(De)
        }
    }
    let b, C, y, L, A, I, S, O = null,
        P = null,
        R = null,
        N = null,
        D = null,
        k = null,
        M = [],
        V = null,
        B = null,
        U = null,
        H = null,
        F = null,
        G = !1,
        W = !1,
        Y = null,
        $ = null,
        K = {};
    const q = new Promise(((e, t) => {
        I = e, S = t, G = !0
    })).then((() => (G = !1, m.fire(zt._ready), null)));
    let j, z;
    const X = new Promise(((e, t) => {
        j = e, z = t, W = !0
    })).then((() => (W = !1, null)));
    let Z = ((e, t, n, i = !0) => new Promise(((o, r) => {
            e.on(t, (e => {
                o(e)
            })), "number" == typeof n && setTimeout((() => {
                i ? r() : o(null)
            }), n)
        })))(m, zt._videoThumbnailLoadComplete),
        Q = {
            get config() {
                return v.config
            },
            set config(e) {
                v.config = e
            },
            get delegate() {
                return i
            },
            set delegate(e) {
                i = e
            },
            ready(e) {
                if (!e) return q;
                q.then((() => e())).catch((e => {
                    Br.captureException(e)
                }))
            },
            playbackEngineReady(e) {
                if (!e) return X;
                X.then((() => e())).catch((e => {
                    Br.captureException(e)
                }))
            },
            get sessionId() {
                return v.config.request.session
            },
            get name() {
                return a
            },
            get parentUrl() {
                return H
            },
            set parentUrl(e) {
                H = e
            },
            destroy() {
                (G || W) && (S("Cancelling ready promise for player initialization."), z("Cancelling playback engine ready promise for player initialization.")), m.fire(jt._destroy)
            }
        };

    function J(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), at(lt(i.request.flags.disable_mms)), null != (t = i.request) && t.urls.js && st(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== en.main && i.view !== en.privateUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, null != (o = history) && o.replaceState && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== en.main && i.view !== en.privateUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            null != e && e.embed && null != t && t.embed && [
                ["color", pn],
                ["color_one", _n],
                ["color_two", pn],
                ["color_three", mn],
                ["color_four", vn]
            ].forEach((([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && m.fire(jt._changeColor, t.embed[n], i)
            }))
        }(n, i), N && N.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return C = null, L = O, m.fire(jt._reset), _.dispatch(Fa(i)), m.fire(zt._configChanged, r, i), e
    }

    function ee() {
        var e;
        null == (e = P) || e.hide(), n.classList.remove("loading"), I()
    }

    function te(e) {
        return r.then((() => {
            if (le(e), m.fire(jt._hideVideoThumbnail), "function" != typeof K.authorizationHandler) throw new Error("Config was not authorized.");
            return K.authorizationHandler(ee)
        })).then((e => (v.config = e, C = null, _.dispatch(Fa(v.config)), m.fire(jt._reset), m.fire(zt._configChanged, !0, v.config), e)))
    }

    function ne() {
        s || (m.on(zt._userLogIn, (function(e) {
            v.reload().then((t => v.config.user.logged_in ? (m.fire(zt._userLoggedIn, e), "private" === e && m.fire(zt._privateUnlocked, t.loaded), t) : (m.fire(zt._loginFailure), t))).catch((e => {
                Br.captureException(e)
            }))
        })), m.on(zt._userLoggedOut, (() => {
            v.reload().catch((e => {
                Br.captureException(e)
            }))
        })), s = !0)
    }

    function ae(e) {
        ! function(e) {
            xh.forEach((t => {
                const n = t(e.config);
                n && e.addABTest(n)
            }))
        }(e), F = Zr(e), ne(),
            function(e) {
                P = new ta(e), O = new rt(g, v.config), L = O, V = new Ts(e), new Qa(e, _, n.querySelector(".vp-video-wrapper")), se(e), e.doNotTrackEnabled || (v.config.request.urls.test_imp && function(e, t) {
                        if (!e.config.request.ab_tests) return;
                        const n = new d(t);
                        for (const i in e.config.request.ab_tests) {
                            const t = e.config.request.ab_tests[i];
                            if (!t.track) continue;
                            const o = {
                                session_id: e.config.request.session,
                                test_id: i,
                                test_group: String(t.group)
                            };
                            n.log(o, !0, !1).catch((e => {}))
                        }
                    }(e, `${v.config.request.urls.test_imp}?beacon=1`), new as(e, _), new Or(e), new dl(e, _), new ls(e), new Ir(e, wr), function(e) {
                        function t(t) {
                            return function({
                                value: n
                            }) {
                                Ss[t] || (Ss[t] = !0, function(t, n) {
                                    wr(gr.PLAYER_PERFORMANCE_MEASUREMENT, e.config, {
                                        measurement_type: t,
                                        measurement_value: n
                                    })
                                }(t, n))
                            }
                        }
                        Math.random() <= Is && (Le(t(As.FIRST_INPUT_DELAY)), Ae(t(As.CUMULATIVE_LAYOUT_SHIFT)), Ie(t(As.LARGEST_CONTENTFUL_PAINT)))
                    }(e)), N = new Ia(e),
                    function(e) {
                        if (!ro(e.config)) return;
                        const t = new wa({
                            core: e
                        });
                        ka.init({
                            chromecastPlayer: t
                        }), ka.on([Na.error, Na.mediaLoadedFailed], (e => {
                            Br.captureException(e)
                        }))
                    }(e), le(e)
            }(e), new Bh(e)
    }

    function le(e) {
        R || (R = new ts(e), Gl(Q, R), ct.set(Br))
    }

    function se(e) {
        const t = v.config.request.ads;
        t && (t.adcode && t.adunit || t.adurl) && (D = new ss(e, n.querySelector(".vp-video-wrapper")), m.on(zt._pausedForAd, (() => {
            L = D, m.fire(zt._displayContextChanged)
        })), m.on(zt._resumedAfterAd, (() => {
            L = O, m.fire(zt._displayContextChanged)
        })), ka && (ka.on(Na.connected, (() => {
            D.toggleCastingState(!0)
        })), ka.on(Na.disconnected, (() => {
            D.toggleCastingState(!1)
        }))))
    }

    function ce(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = At(Lt(e), e, t)), n
    }
    const de = {
        get store() {
            return _
        },
        get config() {
            return v.config
        },
        get element() {
            return n
        },
        get events() {
            return m
        },
        get uuid() {
            return f
        },
        get expose() {
            return Q
        },
        get backbone() {
            return O
        },
        get adHandler() {
            return D
        },
        get displayContext() {
            return L
        },
        get doNotTrackEnabled() {
            var e;
            return v.config.embed.dnt || (null == (e = v.config.request.flags) ? void 0 : e.dnt)
        },
        get playLoggingEnabled() {
            var e;
            return v.config.embed.log_plays && (null == (e = v.config.request.flags) ? void 0 : e.plays)
        },
        get canPlayPictureInPicture() {
            var e;
            const t = !1 !== o.pictureInPictureSupportType,
                n = o.spatialPlayback && (null == (e = v.config.video) ? void 0 : e.spatial),
                i = (o.iOS >= 17 || o.browser.safari) && O.readyState < 2;
            i && O.once(E.LOADED_DATA, (() => m.fire(x)));
            const r = 1 === v.config.embed.settings.pip;
            return t && !i && !n && r
        },
        get currentTime() {
            return ka.isCastConnected ? ka.chromecastPlayer.currentTime : O.currentTime
        },
        get debugCollector() {
            return V
        },
        overrideFragmentsHandler(e, t) {
            var n;
            null == (n = B) || n.hibernate(), b = v.config.embed.interactive, U = B, B = e, v.config.embed.interactive = v.config.embed.interactive || {
                markers: 0
            }, v.config.embed.interactive.fragments = t, m.fire(zt._fragmentChanged)
        },
        restoreLastFragmentsHandler() {
            var e;
            B = U, null == (e = B) || e.wake(), v.config.embed.interactive && (v.config.embed.interactive = b), m.fire(zt._fragmentChanged)
        },
        get fragmentsHandler() {
            return B
        },
        get ottVideoMetadata() {
            return k
        },
        set ottVideoMetadata(e) {
            k = e
        },
        get startTime() {
            return Y
        },
        set startTime(e) {
            var t;
            null !== Y && null === e && null === $ && (null == (t = F) || t.clearSegmentedPlayback()), Y = e, m.fire(zt._startTimeUpdated, Y)
        },
        get endTime() {
            return $
        },
        set endTime(e) {
            var t;
            null !== $ && null === e && null === Y && (null == (t = F) || t.clearSegmentedPlayback()), $ = e, m.fire(zt._endTimeUpdated, $)
        },
        get segmentedPlaybackEnabled() {
            return null !== Y && null !== $
        },
        get abTests() {
            return M
        },
        inView: () => wo(n),
        addABTest(e) {
            l("A/B Test", "color: white; background-color: blue")(`Test: ${e.test}, Group: ${e.group}`), M.push(e)
        },
        init: (e, t) => y || (B = new Ls(de), new ql(de, _, n), K = t, y = v.load(e).then((e => a === yi.ChromelessPlayer ? (new hh(de, n), e) : (new fh(de, n), e))).then(J).catch((e => (ne(), te(de)))).then((() => "function" == typeof K.initializationHandler ? Promise.resolve(t.initializationHandler()) : null)).then((() => (ae(de), j(), "function" == typeof K.postInitializationHandler ? Promise.resolve(t.postInitializationHandler()) : null))).then((() => Promise.all([Z, r]))).then(ee).then((() => (Br.setUp(de.config, a || yi.VimeoPlayer), null))).catch((e => {
            Br.captureException(e)
        })), y),
        loadVideoViaIframe(e, n = {}, i = {}) {
            let o = [],
                r = n;
            for (const t in i) !0 === i[t] && o.push(t);
            o.length && (r.listeners = o.join(",")), r.fromLoadVideo = 1, r.referrer = v.config.request.referrer;
            const a = t(window.location.search),
                l = t(`${e}`.split("?")[1]);
            r = Object.assign(a, l, r);
            const s = ot(r),
                c = It(e);
            window.location.replace(`https://${v.config.player_url}/video/${c}?${s}`)
        },
        loadVideoViaConfig(e, t) {
            if (A === e && C) return C;
            if (m.fire(jt._hideVideoThumbnail), null != t && t.video_version) {
                let e = v.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map((e => e.id)), -1 === e.indexOf(t.video_version)) return Promise.reject("Invalid version id specified")
            }
            m.fire(zt._loadVideo), A = e, n.classList.add("loading");
            const i = ce(e, t),
                o = p.get(i);
            return e = o ? o._config.loaded : e, C = v.load(e, t).then((e => {
                if (o) {
                    const e = O.element;
                    O = o._backbone, O.element.style.visibility = "visible", e.parentNode.replaceChild(O.element, e), m.fire(zt._swapVideo)
                }
                return e = J(e), D || se(de), e
            })).catch((e => te(de))).then((() => Promise.resolve(Z))).then(ee), C
        },
        preloadVideo(e, t, n) {
            const i = ce(t, n),
                o = p.get(i);
            return o ? Promise.resolve(o) : new Ur({
                events: m
            }).load(t, n).then((t => {
                t.loaded.preload = !0;
                const n = O.element.cloneNode(!1);
                n.style.visibility = "hidden", O.element.parentNode.insertBefore(n, O.element);
                const o = new rt(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return p.set(i, r), r
            }))
        },
        performDelegateAction(t, n = () => {}, o = []) {
            var r, a;
            let l;
            var s;
            null != (r = i) && r[t.will] && (l = (s = i)[t.will].apply(s, [v.config.video.id].concat(e(o))), !1 === l) || (n.apply(void 0, [v.config.video.id].concat(e(o), [l])), null != (a = i) && a[t.did] && i[t.did]())
        },
        ready: () => q,
        playbackEngineReady: () => X,
        verifyConfig: () => v.verify(),
        refreshAssetUrls: () => v.refreshAssetUrls().then((e => {
            const t = h(h({}, v.config), {}, {
                request: e
            });
            return J({
                old: v.config,
                loaded: t
            })
        })).catch((e => te(de))),
        updatePhpTokens: () => new Promise(((e, t) => {
            if (function(e) {
                    const {
                        vimeo_api_client_token: t,
                        vimeo_api_interaction_tokens: {
                            likes: n,
                            watch_later: i,
                            following: o
                        } = {},
                        vimeo_live_client_token: r,
                        vimeo_bucketed_live_client_token: a
                    } = e;
                    return t && nr(t) || n && nr(n) || i && nr(i) || o && nr(o) || r && nr(r) || a && nr(a)
                }(v.config.user)) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = v.config.request, a = `https://${v.config.player_url}/video/${v.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                T(a, {
                    withCredentials: !0
                }).json().then((t => (v.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, v.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, v.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, v.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e()))).catch((e => {
                    Br.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                }))
            } else e()
        }))
    };
    return de
}

function Fh(e, t, n) {
    var i, r = 2e3,
        a = 4500,
        l = null,
        s = o.touch ? a : r,
        c = !0,
        d = !0,
        u = !1,
        _ = null,
        p = !1,
        m = null,
        v = null,
        f = !0,
        h = !1,
        g = !1,
        b = !1,
        C = !1,
        y = !1;
    let T, L;
    var S = n.querySelector(".vp-target"),
        O = n.querySelector(".vp-controls");
    let R = n.querySelector('button[class*="_playButton_"]');
    var N = n.querySelector(".vp-title"),
        w = n.querySelector(".vp-video");
    let D = n.querySelector(".vp-sidedock"),
        k = n.querySelectorAll(".vp-menu"),
        M = n.querySelector(`.${yn.VP_ADS_WRAPPER}`),
        V = n.querySelector(".compass-wrapper");
    const B = e.config.embed.autoplay && (null == (i = e.config.request.flags) ? void 0 : i.autohide_controls),
        x = o.touch ? 300 : 0;
    let U = null;
    const F = rs(e.config, "webvr").group || !1;

    function G() {
        clearTimeout(l), l = null
    }

    function W() {
        v !== un && (v && v.isNewMenu && v.isFullwidth() || y && (clearTimeout(l), l = setTimeout((() => $(!1, !0)), s)))
    }

    function Y() {
        de.element && de.element.classList.contains("js-player-fullscreen") && (u || (n.classList.add("player-cursor-hide"), d = !0, u = !0))
    }

    function $(t, i) {
        var r, a, l;
        if (v === un && i) return;
        if (v && v.isNewMenu && v.isFullwidth()) return;
        if (!h && !f && !n.classList.contains("player-ad")) return;
        if (b) return;
        G(), O = Q(), R = J(), D = Z(), k = n.querySelectorAll(".vp-menu");
        const s = document.activeElement && document.body.classList.contains("showfocus") && ((null == (r = D) ? void 0 : r.contains(document.activeElement)) || (null == (a = O) ? void 0 : a.contains(document.activeElement)) || (null == (l = R) ? void 0 : l.contains(document.activeElement))),
            u = document.activeElement && v === un && Array.from(k).find((e => null == e ? void 0 : e.contains(document.activeElement)));
        s || u || (e.events.fire(t ? zt._mousedOut : zt._mouseTimeout), d = !0, o.spatialPlayback && e.config.video.spatial || (S.classList.add("hidden"), S.setAttribute("hidden", "")), c = !0, Y())
    }

    function K() {
        W(), C || h && f && !n.classList.contains("player-ad") || (e.events.fire(zt._mousedOver), S.classList.remove("hidden"), S.removeAttribute("hidden"))
    }

    function q() {
        h || f ? n.removeAttribute("tabindex") : h || f || g || n.setAttribute("tabindex", "0")
    }

    function j() {
        e.events.on([E.TIME_UPDATE, E.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === l && (e.events.fire(zt._targetTimeReached), e.events.off([E.TIME_UPDATE, E.SEEKED], t))
        }))
    }

    function z() {
        e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing")
    }

    function Z() {
        return D || (D = n.querySelector(".vp-sidedock"), D)
    }

    function Q() {
        return O || (O = n.querySelector(".vp-controls"))
    }

    function J() {
        return R || (R = n.querySelector('button[class*="_playButton_"]'), R)
    }
    return function() {
            var t = !0;

            function i() {
                K()
            }

            function l(i) {
                var a;
                if (s = r, d) d = !1;
                else if (void 0 === T || void 0 === L || i.screenX !== T || i.screenY !== L)
                    if (T = i.screenX, L = i.screenY, u && (n.classList.remove("player-cursor-hide"), u = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                        if (t = !0, o.spatialPlayback && null != (a = e.config.video) && a.spatial) {
                            const t = Et(e.element),
                                n = i.clientX - t.left,
                                o = i.clientY - t.top,
                                r = 180,
                                a = o > e.element.clientHeight - 55,
                                l = n > e.element.clientWidth - 45 && o < r;
                            if (p || !a && !l) return
                        }
                        c && K(), W()
                    } else G(), Y(), t && ($(!0), t = !1)
            }

            function _(e) {
                var t;
                M = M || (M = n.querySelector(`.${yn.VP_ADS_WRAPPER}`), M), null != (t = M) && t.contains(e.target) || $(!0)
            }

            function m(e) {
                var t, i, o, r;
                O = Q(), D = Z(), R = J(), V = V || (V = n.querySelector(".compass-wrapper"), V);
                var a = (null == (t = O) ? void 0 : t.contains(e.target)) || (null == (i = D) ? void 0 : i.contains(e.target)) || (null == (o = R) ? void 0 : o.contains(e.target));
                let l = null == (r = V) ? void 0 : r.contains(e.target);
                h && f || l ? a || !h && !f || $(!0) : (clearTimeout(U), U = setTimeout(K, x))
            }

            function v(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return l(e)
            }
            o.pointerEvents ? I(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return s = r, i();
                s = a, m(e)
            })).on("pointermove", v).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return _(e)
            })) : I(n).on("touchmove", (function() {
                s = a, W()
            })).on("touchend", m).on("mouseenter", i).on("mousemove", l).on("mouseleave", _), e.events.on(zt._didEnterFullscreen, (function() {
                o.pointerEvents ? I(de.element).on("pointermove", v) : I(de.element).on("mousemove", l)
            })), e.events.on(zt._didExitFullscreen, (function() {
                o.pointerEvents ? I(de.element).off("pointermove", v) : I(de.element).off("mousemove", l)
            }))
        }(), e.events.on(E.PLAY, (function(e) {
            B || 0 === e || K()
        })).on(zt._paused, K).on([P.BUFFER_ENDED, E.SEEKED, zt._scrubbingEnded, zt._volumeChanged, zt._menuPanelOpened], W).on(A, (function() {
            y = !0
        })), e.events.on(zt._menuVisibilityChanged, (function(e) {
            e && W()
        })), e.events.on(zt._overlayOpened, q).on(zt._accessGateOpened, q).on(zt._controlBarVisibilityChanged, (function(e) {
            f = e, q()
        })).on(zt._sidedockVisibilityChanged, (function(e) {
            h = e, q()
        })), e.events.on(zt._outroDisplayed, (function() {
            b = !0, K()
        })).on(zt._outroHidden, (function() {
            b = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(zt._menuVisibilityChanged, (function(e, t) {
                v = e === un ? e : e ? t : null
            })), I(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (v) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return D = Z(), N = N || (N = n.querySelector(".vp-title")), (e.classList.contains("vp-title") || e.classList.contains("vp-target") || (null == (t = N) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || w.contains(e)) && !(null != (i = D) && i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const l = y && o.spatialPlayback && e.config.video.spatial && _;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!l) {
                        if (y && t) return;
                        return void e.events.fire(zt._playButtonPressed)
                    }
                }
                1 == ++r && setTimeout((function() {
                    if (l) {
                        let t = m && m.x === i.clientX && m.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? zt._playButtonPressed : zt._pauseButtonPressed), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(Wa) && !t.get(Ka) && !t.get(ja)) return;
                        e.events.fire(e.backbone.paused ? zt._playButtonPressed : zt._pauseButtonPressed)
                    } else e.events.fire(zt._fullscreenButtonPressed);
                    r = 0
                }), 200)
            })), I(n).on("mousedown", ".vp-video-wrapper", (function(e) {
                var t;
                if (!i) return S.classList.remove("hidden"), S.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), S.dispatchEvent(t)), !1
            })).on("contextmenu", ".vp-video", (function(e) {
                return S.classList.remove("hidden"), S.removeAttribute("hidden"), !1
            })), e.events.on(jt._toggleNativeControls, (function(e) {
                if (e) return i = !0, void S.classList.add("hidden");
                i = !1, S.classList.remove("hidden")
            }))
        }(),
        function() {
            function t() {
                g = !0, n.removeAttribute("tabindex")
            }

            function i() {
                g = !1, q()
            }
            var r, a;
            o.touch || (I(n).on("focus", "a, button, input, [tabindex]", (function(e) {
                a = this, clearTimeout(r), r = null, document.activeElement === this && K()
            })), I(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (r = setTimeout($, 50))
            })), n.addEventListener("focus", (function() {
                K(), a && a.focus()
            }), !1), e.events.on(zt._overlayOpened, t), e.events.on(zt._overlayClosed, i), e.events.on(zt._accessGateOpened, t), e.events.on(zt._accessGateClosed, i))
        }(), e.events.on(zt._didEnterFullscreen, (function(e) {
            Y(), _ && _.adjustRenderSize(), b && K()
        })).on(zt._didExitFullscreen, (function(e) {
            c = !0, _ && _.adjustRenderSize(), e ? $() : (K(), G())
        })), j(), e.events.on(jt._reset, (function() {
            c = !0, d = !0, f = !0, h = !1, C = !1, y = !1, j(), G()
        })), e.events.on(jt._attachSpatialPlaybackEvents, (function() {
            const t = e => (...t) => {
                    _ && e.apply(void 0, t)
                },
                i = t((t => {
                    const n = e.element.classList.contains("webvr");
                    _ && n && _.toggleVR()
                })),
                r = t((t => {
                    _.isVRPresenting ? setTimeout((() => {
                        e.events.fire(X.WEBVR_ENTER)
                    }), 100) : setTimeout((() => {
                        e.events.fire(X.WEBVR_EXIT)
                    }), 100)
                }));
            e.events.on(jt._revealSpatialControls, t((() => {
                e.element.classList.contains("webvr") || e.element.classList.add("grabbable")
            }))), e.events.on(zt._ended, t((() => {
                z(), o.webvr && _.isVRPresenting && F && _.toggleVR()
            }))), e.events.on(A, t((() => {
                e.config.video.spatial || z()
            }))), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(zt._stereoscopicButtonPressed, t((() => {
                o.webvr && _.hasVRHeadset && F ? _.toggleVR() : e.events.fire(zt._showAndroidVRDeepLink)
            }))), e.events.on(X.WEBVR_HARDWARE_AVAILABLE, t((e => {
                const t = n.querySelector(".stereoscopic");
                t && t.classList.contains("off") && F && t.classList.remove("off")
            }))), e.events.on(X.WEBVR_ENTER, t((t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), _.isUserInteracting = !1
            }))), e.events.on(X.WEBVR_EXIT, t((t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), _.isUserInteracting = !0
            }))));
            let a = null;
            const l = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p || n || (p = !0, t.preventDefault(), e.element.classList.add("grabbing"), m = {
                        x: t.clientX,
                        y: t.clientY
                    }, _.makeContact(m))
                })),
                s = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && _.move({
                        x: t.clientX,
                        y: t.clientY
                    })
                })),
                c = t((t => {
                    const n = e.element.classList.contains("webvr");
                    p && !n && (e.element.classList.remove("grabbing"), _.releaseContact(!1), p = !1)
                })),
                d = t((t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (_.isUserInteracting || (_.isUserInteracting = !0), null !== a && clearTimeout(a), a = setTimeout((() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), _.isUserInteracting = !1
                    }), 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), _.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                })),
                u = t((e => {
                    p || (p = !0, _.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                })),
                v = t((e => {
                    p && (e.preventDefault(), _.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                })),
                f = t((e => {
                    _.releaseContact(!0), p = !1
                })),
                h = t((e => {
                    _.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                })),
                g = t((t => {
                    p = !1, e.element.classList.remove("grabbing"), _.abandonMotion()
                }));
            e.events.on(A, (() => {
                o.android && _ && window.addEventListener("deviceorientation", h, !1)
            })), e.events.once(A, (() => {
                e.store.watch("ui.player.boundingRect", (() => {
                    _ && _.adjustRenderSize(), p = !1
                })), o.pointerEvents ? (I(S).on("pointerdown", l), window.addEventListener("pointermove", s), window.addEventListener("pointerup", c), window.addEventListener("pointerleave", g)) : (I(S).on("mousedown", l).on("wheel", d), S.addEventListener("touchstart", u, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", v, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", f, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", s), window.addEventListener("mouseup", c), window.addEventListener("mouseleave", g))
            }))
        })), e.events.on(H, (e => {
            z(), _ = e
        })), e.events.on(zt._nudgeAttempted, (() => {
            C = !0, clearTimeout(U), U = null
        })), e.events.on(zt._nudgeEnded, (() => {
            C = !1
        })), {}
}
const Gh = ["a", ".button-link", ".menu li:hover", ".menu li.active", ".vp-share-footnote a:hover"],
    Wh = ["a:hover", ".button-link:hover"],
    Yh = [".controls-outro a:hover .fill"],
    $h = [".vp-share-buttons li", "button.vp-share-embedCopy", ".vp-chapters-active-indicator"],
    Kh = [".vp-share-footnote--embed a", "button.vp-share-embedCopy"],
    qh = ['.vp-share-wrapper a[role="button"] .fill'],
    jh = [".vp-share-button .fill"],
    zh = [".vp-share-button .fill"];

function Xh(e, {
    uuid: t,
    id: n,
    isMobileDevice: i
}) {
    var o = null;

    function a(e, o) {
        var r = `.player-${t} `,
            a = r + e.join("," + r);
        if (o) {
            var l = `${n} `;
            a += `,${l}${e.join(","+l)}`
        }
        return i && (a = a.replace(/:hover/g, ":active")), a.replace(/ &/g, "")
    }
    return e.events.on(jt._changeColor, ((n, i) => {
        let l;
        const s = hn[i],
            c = fn[i];
        try {
            l = new r(n)
        } catch (u) {
            l = new r(c)
        }
        if (i === pn) {
            let n = function(e) {
                o ? function() {
                    for (; o.cssRules.length > 0;) o.deleteRule(0)
                }() : function() {
                    var e = document.createElement("style");
                    e.setAttribute("data-player", t), document.querySelector("head").appendChild(e), o = e.sheet
                }();
                var n = e.complement,
                    i = new r(30, 30, 30, .9);
                i.contrast(n).ratio < 3 && n.lighten(5, 3, i);
                var l, s = e.lightness < 40 ? e.clone().lighten(15, 3, e) : e.clone().darken(15, 3, e),
                    c = r.white.contrast(e).ratio < 4.5 ? r.black : r.white;
                return gt(a(Gh), "color:" + e.hex, o), gt(a(Yh), "fill:" + e.hex, o), gt(a($h), "background-color:" + e.hex, o), gt(a(Wh), "color:" + n.hex, o), e.luminance > .95 && (n = e.clone().darken(15, 3, e), gt(a(Kh), "color:" + n.hex, o), gt(a(qh), "fill:" + n.hex, o), s = n.clone().darken(15, 3, n)), e.yiq > 175 && e.luminance < .95 && (l = s.clone().darken(15, 3, s), gt(a(jh), "fill:" + s.hex, o)), gt(a(zh), "fill:" + c.hex, o), {
                    main: e.hex,
                    selected: s.hex,
                    sidedockHover: l ? s.hex : e.luminance > .95 ? n.hex : r.white.hex,
                    sidedockSelected: e.luminance > .95 ? n.hex : e.hex,
                    sidedockSelectedHover: l ? l.hex : s.hex
                }
            }(l);
            e.config._colors = n
        }
        const d = mi(n) ? l.hexWithAlpha : l.hex;
        e.config.embed[s] = d.replace("#", "")
    })), e.events.fire(jt._changeColor, e.config.embed.color_one, _n), e.events.fire(jt._changeColor, e.config.embed.color_two || e.config.embed.color, pn), e.events.fire(jt._changeColor, e.config.embed.color_three, mn), e.events.fire(jt._changeColor, e.config.embed.color_four, vn), {}
}
const Zh = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        74: "j",
        75: "k",
        76: "l"
    },
    Qh = {
        106: "j",
        107: "k",
        108: "l"
    },
    Jh = ["up", "down", "left", "right"],
    eg = ["right", "l"],
    tg = ["left", "j"],
    ng = "scrub",
    ig = [ng],
    og = [An.TRANSCRIPT_LIST];

function rg(e, t, n) {
    var i = !!e.config.embed.on_site,
        r = n.querySelector(".volume"),
        a = !1;
    let l;
    var s = null,
        c = !1,
        d = e.config.video.fps / 5,
        u = d,
        _ = 0,
        p = !1,
        m = b(T, 80),
        v = 5;
    const f = o.spatialPlayback && e.config.video.spatial;

    function h(n) {
        var i;
        return !t.get(Wa) || !(ig.includes(n) && (null == (i = e.config.video.live_event) || !i.dvr)) && (t.get(Ka) || t.get(ja))
    }

    function g(t) {
        return "d" === t || !i && (e.config.view === en.main || e.config.view === en.privateUnlocked)
    }

    function E(e) {
        return "number" != typeof e.which && (e.which = e.keyCode), e
    }

    function C(e) {
        if (!e) return "";
        if ("keypress" === e.type) {
            var t = String.fromCharCode(e.which);
            return e.shiftKey || (t = t.toLowerCase()), t
        }
        return e.which in Zh ? Zh[e.which] : String.fromCharCode(e.which).toLowerCase()
    }

    function y(t) {
        if (e.config.embed.settings.background) return !0;
        var n = t.target || t.srcElement;
        return "INPUT" === n.tagName || "SELECT" === n.tagName || "TEXTAREA" === n.tagName || n.isContentEditable
    }

    function T(n, i) {
        var o, r;
        const a = eg.includes(n);
        if (!h(ng)) return;
        if (null != (o = e.backbone) && null != (o = o.telecine) && o.ended && a) return;
        if (null != (r = e.config.video.live_event) && r.dvr && a && e.backbone.atLiveEdge) return;
        p || (i && !e.backbone.paused && e.events.fire(zt._pauseButtonPressed), e.events.fire(zt._scrubbingStarted, {
                seekType: "keyboard",
                isFrameByFrame: i
            }), p = !0),
            function(n) {
                var i = n,
                    o = Math.ceil(d),
                    r = Math.ceil(function() {
                        const n = t.get(Wa) ? e.backbone.liveEdgeTime - e.backbone.liveTailTime : e.config.video.duration;
                        return Math.max(d, .618 * n)
                    }() - d);
                u = function(e, t, n) {
                    return e /= 100, n * (--e * e * e + 1) + t
                }(i, o, r)
            }(_), 1 == ++_ && (u = e.config.video.fps * v);
        const l = i ? 1 : u,
            s = a ? l : -l,
            c = e.currentTime * e.config.video.fps;
        ! function(n, i) {
            let o, r;
            t.get(Wa) ? (o = e.backbone.liveTailTime, r = e.backbone.liveEdgeTime) : (o = e.fragmentsHandler.currentFragment.startTime, r = e.fragmentsHandler.currentFragment.endTime);
            let a = n / e.config.video.fps;
            a < o ? a = o : a >= r ? a = r - .001 : e.events.fire(zt._showNudgeNotification, {
                direction: a - e.currentTime > 0 ? "forward" : "backward",
                time: 1 !== _ || i ? null : v
            }), e.events.fire(jt._seek, a)
        }((a ? Math.ceil(c) : Math.floor(c)) + s, i)
    }

    function L(e) {
        if (s === un) return !1;
        var t = s.getTabIndexItems(),
            n = t.indexOf(document.activeElement),
            i = "up" === e ? n - 1 : n + 1,
            o = null;
        return !(o = i >= t.length ? t[0] : i < 0 ? t[t.length - 1] : t[i]) || (o.focus(), !1)
    }

    function A() {
        if (s) return !0;
        if (!h("play/pause")) return !0;
        if (!document.activeElement || document.activeElement === document.body) {
            const t = e.backbone.paused ? zt._playButtonPressed : zt._pauseButtonPressed;
            return e.events.fire(t), !1
        }
    }

    function I() {
        const t = e.backbone.muted,
            n = e.backbone.volume;
        return t ? (e.events.fire(jt._changeMuted, !1), 0 === n && e.events.fire(jt._changeVolume, 1)) : t || 0 !== n ? !t && n > 0 && e.events.fire(jt._changeMuted, !0) : e.events.fire(jt._changeVolume, 1), !1
    }

    function S() {
        return s !== un && (s ? (s.element.contains(document.activeElement) && s.button.focus(), s.hide(), !1) : !a && void 0)
    }

    function O() {
        return !c && (s === un || (s ? !s.element.contains(document.activeElement) || L("up") : f ? (e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"), !1) : !(!e.config.embed.on_site || !document.activeElement || n.contains(document.activeElement)) || (e.events.fire(jt._changeVolume, .05, !1, !0), !1)))
    }

    function P() {
        return !c && (s === un || (s ? !s.element.contains(document.activeElement) || L("down") : f ? (e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"), !1) : !(!e.config.embed.on_site || !document.activeElement || n.contains(document.activeElement)) || (e.events.fire(jt._changeVolume, -.05, !1, !0), !1)))
    }

    function R(t, n) {
        const i = Jh.includes(n);
        if (s === un) return !0;
        if (e.displayContext === e.adHandler) return !0;
        if (s) return !s.element.contains(document.activeElement) || !i || L("left" === n ? "up" : "down");
        if (a && l !== oi.HELP) return !0;
        if (f && i) return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n), !1;
        if (document.activeElement && document.activeElement === r && i) {
            var o = "left" === n ? -.05 : .05;
            return e.events.fire(jt._changeVolume, o, !1, !0), !1
        }
        t.shiftKey || 0 === _ ? T(n, t.shiftKey) : m(n, t.shiftKey)
    }
    return function() {
            function t(e) {
                a = !0, l = e, e !== oi.NOT_SUPPORTED && e !== Fo.LEAD_CAPTURE_FORM || (i = !0)
            }

            function n() {
                a = !1, l = null
            }
            e.events.on(zt._overlayOpened, t), e.events.on(zt._accessGateOpened, t), e.events.on(zt._overlayClosed, n), e.events.on(zt._accessGateClosed, n)
        }(), e.events.on(zt._menuVisibilityChanged, (function(e, t) {
            s = e ? t || e : null
        })), e.events.on(zt._transcriptNavActive, (function(e) {
            c = e
        })), e.events.on(zt._configChanged, (function(e) {
            e && (i = !1)
        })),
        function() {
            const {
                like: t,
                watch_later: n,
                share: i
            } = e.config.embed.settings, o = {
                c: [zt._ccButtonPressed, !0],
                h: [zt._prefsButtonPressed, !0],
                T: zt._transcriptKeyPressed,
                f: zt._fullscreenButtonPressed,
                d: zt._debugButtonPressed,
                A: zt._aiWidgetKeyPressed,
                k: A,
                j: R,
                l: R,
                m: I,
                space: A,
                up: O,
                down: P,
                left: R,
                right: R,
                esc: S,
                "?": [jt._showOverlay, oi.HELP]
            };

            function r(t) {
                E(t);
                const n = C(t);
                if (function(e) {
                        return !(e.ctrlKey || e.metaKey || e.altKey || "keypress" === e.type && e.charCode in Qh || (e.which in Zh ? "keydown" !== e.type : "keypress" !== e.type))
                    }(t) && !y(t) && g(n) && n in o) {
                    if ("function" == typeof o[n]) {
                        if (!1 === o[n](t, n)) {
                            var i;
                            if (t.preventDefault(), og.includes(null == (i = t.target) ? void 0 : i.id)) return;
                            t.stopPropagation()
                        }
                        return
                    }
                    if (!1 === function(t) {
                            return t = Array.isArray(t) ? t : [t], e.events.fire.apply(null, t), !1
                        }(o[n])) {
                        var r;
                        if (t.preventDefault(), og.includes(null == (r = t.target) ? void 0 : r.id)) return;
                        t.stopPropagation()
                    }
                }
            }
            e.config.embed.on_site || (o.v = jt._openVimeo), t && (o.x = zt._likeButtonPressed), n && (o.w = zt._watchLaterButtonPressed), i && (o.s = zt._shareButtonPressed), e.config.embed.keyboard && (document.addEventListener("keydown", r, !1), document.addEventListener("keypress", r, !1), document.addEventListener("keyup", (function(t) {
                if (s !== un && (E(t), !y(t) && g())) {
                    var n = C(t);
                    f && Jh.includes(n) ? e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(n) : h(ng) && (tg.includes(n) || eg.includes(n)) && function(t) {
                        m.cancel(), u = d, _ = 0;
                        var n = t.shiftKey;
                        e.events.fire(zt._scrubbingEnded, n), p = !1
                    }(t)
                }
            }), !1))
        }(), e.events.on(zt._becameActive, (function() {
            i = !1
        })).on(zt._becameInactive, (function() {
            i = !0
        })), e.config.embed.on_site && document.querySelector(".player") === n && (i = !1),
        function() {
            let e, t = !1;
            document.body.addEventListener("keyup", (e => {
                9 !== e.which || document.body.classList.contains("showfocus") || document.body.classList.add("showfocus")
            })), document.body.addEventListener("keydown", (n => {
                32 !== n.which && 13 !== n.which || (t = !0, clearTimeout(e), e = setTimeout((() => {
                    t = !1
                }), 200))
            })), document.body.addEventListener("click", (e => {
                t || document.body.classList.remove("showfocus")
            }))
        }(), e.events.on(jt._destroy, (() => {
            i = !0
        })), {
            pause: function() {
                i = !0
            },
            unpause: function() {
                i = !1
            }
        }
}

function ag(e, t, n, i) {
    const r = function(e) {
            if (!0 === e) return Promise.resolve(null);
            let t = !1;
            return new Promise((n => {
                e.link.addEventListener("load", (() => {
                    if (!t) {
                        t = !0;
                        const i = (new Date).getTime() - e.startTime;
                        setTimeout((() => n(i)), 100)
                    }
                }), !1)
            }))
        }(n),
        a = new Hh({
            element: e,
            delegate: i,
            cssLoadedPromise: r
        }),
        l = a.store;
    e.classList.add("js-player-fullscreen");
    let s = a.expose,
        c = null,
        d = null,
        u = null,
        _ = null,
        p = null,
        m = null,
        v = null;
    const f = e.querySelector(".vp-controls"),
        h = {
            tiny: zt._enteredTinyMode,
            mini: zt._enteredMiniMode,
            normal: zt._enteredNormalMode,
            none: zt._enteredNormalMode
        };

    function g(t) {
        t && void 0 !== h[t] && (a.events.fire(h[t]), e.classList.toggle("player-normal", "normal" === t), e.classList.toggle("player-mini", "mini" === t), e.classList.toggle("player-tiny", "tiny" === t))
    }

    function E(t) {
        t && void 0 !== h[t] && (e.classList.toggle("app-normal", "normal" === t), e.classList.toggle("app-mini", "mini" === t), e.classList.toggle("app-tiny", "tiny" === t))
    }

    function b(t) {
        Object.keys(Pl).forEach((n => e.classList.toggle(`player-${n}`, t === n)))
    }

    function C(t) {
        Object.keys(Pl).forEach((n => e.classList.toggle(`app-${n}`, t === n)))
    }

    function y() {
        const t = a.config.embed.settings;
        e.classList.toggle("with-fullscreen", !!t.fullscreen);
        const n = t.custom_logo;
        e.classList.toggle("with-custom-logo", !!n), e.classList.toggle("with-sticky-custom-logo", n && n.sticky), e.classList.toggle("hide-controls-mode", !!t.background || 0 === t.controls), e.classList.toggle("touch-support", o.touch), e.classList.toggle("is-google-bot", o.isGoogleBot)
    }

    function T(e, t = a.config.video.url) {
        if (!(!t || e && e.metaKey)) {
            if (-1 === t.indexOf("#") && a.backbone.currentTime > 0 && a.backbone.currentTime < a.config.video.duration - 30 && !a.backbone.paused && (t += `#at=${Math.floor(a.backbone.currentTime)}`), !a.config.embed.on_site) return window.open(t),
                function(e) {
                    if (e && e.detail > 0) try {
                        document.activeElement.blur()
                    } catch (De) {}
                }(e), a.events.fire(zt._pauseButtonPressed), !1;
            window.location = t
        }
    }

    function L() {
        p || (g(l.get("ui.player.mode")), p = l.watch("ui.player.mode", g)), m || (g(l.get("ui.app.mode")), m = l.watch("ui.app.mode", E))
    }

    function A() {
        u || (b(l.get("ui.player.breakpoint")), u = l.watch("ui.player.breakpoint", b)), _ || (C(l.get("ui.app.breakpoint")), _ = l.watch("ui.app.breakpoint", C))
    }

    function S() {
        y(), v = new Promise((e => {
                let t = null;
                const n = () => {
                    clearTimeout(t), window.innerWidth > 0 && window.innerHeight > 0 ? e() : t = setTimeout(n, 250)
                };
                a.events.once(zt._ready, n), a.events.once(zt._error, n)
            })), a.events.on(zt._collectionsButtonPressed, (() => {
                a.performDelegateAction(ll, (() => {
                    a.config.video.vod && a.config.video.vod.url ? T(null, `${a.config.video.vod.url}#collections`) : a.config.video.url && T(null, `${a.config.video.url}#collections`)
                }))
            })), a.events.on(zt._shareButtonPressed, (() => {
                const e = a.config.embed.settings.share && a.config.embed.settings.share.embed_only,
                    t = () => {
                        a.events.fire(jt._showOverlay, "share", e)
                    };
                de.element ? t() : a.performDelegateAction(rl, t)
            })), a.events.on(zt._embedButtonPressed, (() => {
                a.config.embed.settings.share.embed_only && a.performDelegateAction(rl, (() => {
                    a.events.fire(jt._showOverlay, "share", !0)
                }))
            })), a.events.on(zt._pausedForAd, (() => {
                e.classList.add("player-ad")
            })), a.events.on([zt._resumedAfterAd, jt._reset], (() => {
                e.classList.remove("player-ad")
            })),
            function() {
                const t = function() {
                    return function(e, t) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(v, (function() {
                        const t = function() {
                            const {
                                width: t,
                                height: n
                            } = Et(e), i = "10px";
                            return po ? n <= 200 ? i : t < 450 ? "12px" : t <= 1024 ? "11px" : i : i
                        }();
                        f && (f.style.fontSize = t);
                        const n = e.querySelector(".vp-sidedock");
                        n && (n.style.fontSize = t)
                    }))
                };
                a.events.on(zt._didEnterFullscreen, t), a.events.on(zt._didExitFullscreen, t), window.addEventListener("orientationchange", t), po && (e.classList.add("mobile"), t())
            }(), L(), A(),
            function() {
                function t() {
                    let t = e;
                    if (i && i.getFullscreenElement && "function" == typeof i.getFullscreenElement) {
                        const n = i.getFullscreenElement();
                        n && n instanceof HTMLElement && n.contains(e) && n.classList.contains("js-player-fullscreen") && (t = n)
                    }
                    return t
                }
                a.config.embed.fullscreen = !0, o.iPad && e.classList.add("no-fullscreen-api-support");
                const n = a.config.embed.playsinline && (o.iOS >= 10 || an),
                    r = o.iPad || n;
                de.enabled || r || (e.classList.add("no-fullscreen-support"), o.iOS || (a.config.embed.fullscreen = !1));
                let l = !1,
                    s = !1;
                a.events.on(jt._forceFullscreen, (function() {
                    de.enabled || de.videoEnabled(e) ? (a.events.fire(zt._willEnterFullscreen), s = !1, de.request(t())) : a.events.fire(jt._toggleNativeControls, !0)
                })), a.events.on(zt._fullscreenButtonPressed, (function() {
                    if (a.backbone.pictureInPictureActive && a.backbone.exitPictureInPicture(), de.element) a.events.fire(zt._willExitFullscreen), de.exit();
                    else {
                        const {
                            HAVE_CURRENT_DATA: e
                        } = a.backbone.videoElement;
                        o.fullscreenRequiresDataLoaded && a.backbone.readyState < e && a.backbone.play(), a.events.fire(zt._willEnterFullscreen), s = !0, de.request(t())
                    }
                }));
                var c = de.onenter,
                    d = de.onexit;
                if (de.onenter = function(e) {
                        null !== document.webkitFullScreenElement && (l || (t().contains(e) ? function(e) {
                            l || (l = !0, a.events.fire(zt._didEnterFullscreen, t() === e, s))
                        }(e) : "function" == typeof c && c(e)))
                    }, de.onexit = function() {
                        document.webkitFullScreenElement || (l ? l && (l = !1, a.events.fire(zt._didExitFullscreen, s), s || a.events.fire(jt._toggleNativeControls, !1), s = !1) : "function" == typeof d && d())
                    }, I(e).on("click", "a", (function(e) {
                        de.element === t() && de.exit()
                    })), I(e).on("gestureend", (function(e) {
                        e.scale > 1 && a.events.fire(zt._fullscreenButtonPressed)
                    })), "undefined" != typeof MSGesture) {
                    var u = 1,
                        _ = new MSGesture;
                    _.target = e, I(e).on("pointerdown", (function(e) {
                        _.addPointer(e.pointerId)
                    })).on(["MSGestureChange"], (function(e) {
                        u *= e.scale
                    })).on(["MSGestureEnd"], (function() {
                        (!l && u >= 2 || l && u < 1) && a.events.fire(zt._fullscreenButtonPressed), u = 1
                    }))
                }
            }(),
            function() {
                const t = Yi(Vt, a.config);
                ! function(e, t, n, i) {
                    var o = !1;
                    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
                    var r = function(e) {
                            var t = !0;
                            if (e.changedTouches) {
                                var r = e.changedTouches[0].pageX - window.pageXOffset,
                                    a = e.changedTouches[0].pageY - window.pageYOffset,
                                    l = document.elementFromPoint(r, a);
                                null !== l && this.contains(l) && (t = n.call(this, e))
                            }
                            return "function" == typeof i && i.call(this, e), o = !0, t
                        },
                        a = function(e) {
                            if (!o) return n.call(this, e);
                            o = !1
                        };
                    (t = "function" == typeof t ? null : t) ? I(e).on("click", t, a).on("touchend", t, r): I(e).on("click", a).on("touchend", r)
                }(e, "a[data-clip-link]", (e => T(e, t))), a.events.on(jt._openVimeo, T)
            }(), a.events.on(zt._configChanged, (() => {
                y()
            }))
    }

    function O() {
        d || (d = new rg(a, l, e), Object.defineProperties(s, {
            pauseKeyboard: {
                enumerable: !0,
                value: d.pause
            },
            unpauseKeyboard: {
                enumerable: !0,
                value: d.unpause
            }
        }))
    }

    function P() {
        c || (c = new Xh(a, {
            uuid: a.uuid,
            id: e.id,
            isMobileDevice: !1
        }))
    }
    const R = "right-content-area-open",
        N = "right-content-area-supported",
        w = "[data-content-area-sibling-eligible]",
        D = "content-area-sibling-enabled";
    let k;

    function M(e = 400) {
        var t;
        k && clearTimeout(k), null == (t = a.element) || null == (t = t.classList) || t.add("animating"), k = setTimeout((() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.remove("animating")
        }), e)
    }
    const V = {
        initializationHandler: () => (P(), a.events.on(zt._rightContentAreaVisibilityChange, (e => {
            e && !a.element.classList.contains(R) ? (M(), a.element.classList.add(R)) : !e && a.element.classList.contains(R) && (M(), a.element.classList.remove(R))
        })), a.events.on(zt._rightContentAreaEnabled, (() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.add(N), Array.from(a.element.querySelectorAll(w)).forEach((e => {
                var t;
                return null == e || null == (t = e.classList) ? void 0 : t.add(D)
            }))
        })), a.events.on(zt._rightContentAreaDisabled, (() => {
            var e;
            null == (e = a.element) || null == (e = e.classList) || e.remove(N), Array.from(a.element.querySelectorAll(w)).forEach((e => {
                var t;
                return null == e || null == (t = e.classList) ? void 0 : t.remove(D)
            }))
        })), new Fh(a, l, e), O(), S(), Promise.resolve()),
        postInitializationHandler: () => Promise.resolve(),
        authorizationHandler(e) {
            A(), L(), e(), P(), O();
            let t = "Error",
                n = "Unhandled video privacy";
            switch (a.config.view) {
                case en.privatePassword:
                    return new Promise((e => {
                        a.events.once(zt._passwordUnlocked, (t => {
                            e(t)
                        }))
                    }));
                case en.privateLocked:
                    let e;
                    return e = a.config.user.logged_in ? Promise.reject() : new Promise(((e, t) => {
                        a.events.once(zt._privateUnlocked, (n => {
                            n.view !== en.privateLocked ? e(n) : t()
                        }))
                    })), e;
                case en.error:
                    t = a.config.title, n = a.config.message
            }
            return a.config.view !== en.main && a.config.view !== en.privateUnlocked && a.events.fire(jt._showLocalAccessGate, "error", {
                title: t,
                message: n
            }), Promise.reject()
        }
    };
    return a.init(t, V).catch((t => {
        Br.captureException(t), P(), e.classList.remove("loading");
        const n = Vn();
        a.events.fire(zt._error, n.type, n)
    })), s
}
window.requestModule = window.requestModule || dt, window.BigScreen = window.BigScreen || de;
export {
    ef as $, a_ as A, R_ as B, Tn as C, ac as D, T_ as E, Yu as F, dr as G, d_ as H, Qu as I, i_ as J, Nc as K, yn as L, wc as M, Ju as N, fc as O, Rn as P, D_ as Q, Jv as R, ic as S, h_ as T, Do as U, zl as V, ag as VimeoPlayer, rr as W, Oc as X, Xv as Y, rd as Z, Jc as _, $n as a, t_ as a0, M_ as a1, Io as a2, So as a3, Ao as a4, v_ as b, xn as c, td as d, nc as e, Li as f, zi as g, jt as h, vc as i, mc as j, jv as k, An as l, A_ as m, hi as n, rc as o, pc as p, Bc as q, Uc as r, dc as s, _t as t, Hu as u, _c as v, uc as w, gr as x, oc as y, cr as z
};