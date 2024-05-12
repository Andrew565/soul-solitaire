(function () {
  'use strict';

  var n=[{numberRank:0,nameRank:"Two",initial:"2",suit:"Clubs",name:"Two of Clubs"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Clubs",name:"Three of Clubs"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Clubs",name:"Four of Clubs"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Clubs",name:"Five of Clubs"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Clubs",name:"Six of Clubs"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Clubs",name:"Seven of Clubs"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Clubs",name:"Eight of Clubs"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Clubs",name:"Nine of Clubs"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Clubs",name:"Ten of Clubs"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Clubs",name:"Jack of Clubs"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Clubs",name:"Queen of Clubs"},{numberRank:11,nameRank:"King",initial:"K",suit:"Clubs",name:"King of Clubs"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Clubs",name:"Ace of Clubs"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Hearts",name:"Two of Hearts"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Hearts",name:"Three of Hearts"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Hearts",name:"Four of Hearts"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Hearts",name:"Five of Hearts"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Hearts",name:"Six of Hearts"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Hearts",name:"Seven of Hearts"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Hearts",name:"Eight of Hearts"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Hearts",name:"Nine of Hearts"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Hearts",name:"Ten of Hearts"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Hearts",name:"Jack of Hearts"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Hearts",name:"Queen of Hearts"},{numberRank:11,nameRank:"King",initial:"K",suit:"Hearts",name:"King of Hearts"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Hearts",name:"Ace of Hearts"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Spades",name:"Two of Spades"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Spades",name:"Three of Spades"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Spades",name:"Four of Spades"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Spades",name:"Five of Spades"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Spades",name:"Six of Spades"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Spades",name:"Seven of Spades"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Spades",name:"Eight of Spades"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Spades",name:"Nine of Spades"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Spades",name:"Ten of Spades"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Spades",name:"Jack of Spades"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Spades",name:"Queen of Spades"},{numberRank:11,nameRank:"King",initial:"K",suit:"Spades",name:"King of Spades"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Spades",name:"Ace of Spades"},{numberRank:0,nameRank:"Two",initial:"2",suit:"Diamonds",name:"Two of Diamonds"},{numberRank:1,nameRank:"Three",initial:"3",suit:"Diamonds",name:"Three of Diamonds"},{numberRank:2,nameRank:"Four",initial:"4",suit:"Diamonds",name:"Four of Diamonds"},{numberRank:3,nameRank:"Five",initial:"5",suit:"Diamonds",name:"Five of Diamonds"},{numberRank:4,nameRank:"Six",initial:"6",suit:"Diamonds",name:"Six of Diamonds"},{numberRank:5,nameRank:"Seven",initial:"7",suit:"Diamonds",name:"Seven of Diamonds"},{numberRank:6,nameRank:"Eight",initial:"8",suit:"Diamonds",name:"Eight of Diamonds"},{numberRank:7,nameRank:"Nine",initial:"9",suit:"Diamonds",name:"Nine of Diamonds"},{numberRank:8,nameRank:"Ten",initial:"10",suit:"Diamonds",name:"Ten of Diamonds"},{numberRank:9,nameRank:"Jack",initial:"J",suit:"Diamonds",name:"Jack of Diamonds"},{numberRank:10,nameRank:"Queen",initial:"Q",suit:"Diamonds",name:"Queen of Diamonds"},{numberRank:11,nameRank:"King",initial:"K",suit:"Diamonds",name:"King of Diamonds"},{numberRank:12,nameRank:"Ace",initial:"A",suit:"Diamonds",name:"Ace of Diamonds"}],m={numberRank:99,nameRank:"Joker",initial:"JO",suit:"Joker",name:"Joker (Plain)"},r={numberRank:99,nameRank:"Joker",initial:"JO",suit:"Joker",name:"Joker (Fancy)"};[...n,m,r];var e=class{drawPile;discardPile;constructor(a){this.drawPile=a,this.discardPile=[],this.shuffle(7);}shuffle(a){for(var u=this.drawPile.length,i=0;i<a;i++)for(let s of this.drawPile){let o=this.drawPile.indexOf(s),t=Math.floor(Math.random()*u);this.drawPile[o]=this.drawPile[t],this.drawPile[t]=s;}}addToBottomOfDiscardPile(a){this.discardPile.push(...a);}addToDiscardPile(a){this.addToTopOfDiscardPile(a);}addToTopOfDiscardPile(a){this.discardPile.unshift(...a);}drawFromDiscardPile(a){return this.discardPile.splice(0,a)}addToBottomOfDrawPile(a){this.drawPile.push(...a);}addToDrawPile(a){this.addToBottomOfDrawPile(a);}addToTopOfDrawPile(a){this.drawPile.unshift(...a);}drawFromDrawPile(a){return this.drawPile.splice(0,a)}};new e(n);

  /**
   * @typedef {Object} SoulCard
   * @prop {string} name
   * @prop {string} group
   * @prop {string} symbol
   * @prop {"Red" | "Black" | "Blue" } color
   * @prop {boolean} facingDown
   */

  /** @type {SoulCard[]} */
  const SoulCards = [
    {
      name: "Red Eternity",
      group: "Eternity",
      symbol: "∞",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Eternity",
      group: "Eternity",
      symbol: "∞",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Eternity",
      group: "Eternity",
      symbol: "∞",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Map",
      group: "Map",
      symbol: "⨳",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Map",
      group: "Map",
      symbol: "⨳",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Map",
      group: "Map",
      symbol: "⨳",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Medium",
      group: "Medium",
      symbol: "⊙",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Medium",
      group: "Medium",
      symbol: "⊙",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Medium",
      group: "Medium",
      symbol: "⊙",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Origin",
      group: "Origin",
      symbol: "▲",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Origin",
      group: "Origin",
      symbol: "▲",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Origin",
      group: "Origin",
      symbol: "▲",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Fire",
      group: "Fire",
      symbol: "☀︎",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Fire",
      group: "Fire",
      symbol: "☀︎",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Fire",
      group: "Fire",
      symbol: "☀︎",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Air",
      group: "Air",
      symbol: "☁︎",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Air",
      group: "Air",
      symbol: "☁︎",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Air",
      group: "Air",
      symbol: "☁︎",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Water",
      group: "Water",
      symbol: "≈",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Water",
      group: "Water",
      symbol: "≈",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Water",
      group: "Water",
      symbol: "≈",
      color: "Blue",
      facingDown: true,
    },
    {
      name: "Red Earth",
      group: "Earth",
      symbol: "⚘",
      color: "Red",
      facingDown: true,
    },
    {
      name: "Black Earth",
      group: "Earth",
      symbol: "⚘",
      color: "Black",
      facingDown: true,
    },
    {
      name: "Blue Earth",
      group: "Earth",
      symbol: "⚘",
      color: "Blue",
      facingDown: true,
    },
  ];

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var atoa$1 = function atoa (a, n) { return Array.prototype.slice.call(a, n); };

  var si = typeof setImmediate === 'function', tick;
  if (si) {
    tick = function (fn) { setImmediate(fn); };
  } else if (typeof process !== 'undefined' && process.nextTick) {
    tick = process.nextTick;
  } else {
    tick = function (fn) { setTimeout(fn, 0); };
  }

  var ticky$1 = tick;

  var ticky = ticky$1;

  var debounce$1 = function debounce (fn, args, ctx) {
    if (!fn) { return; }
    ticky(function run () {
      fn.apply(ctx || null, args || []);
    });
  };

  var atoa = atoa$1;
  var debounce = debounce$1;

  var emitter$1 = function emitter (thing, options) {
    var opts = options || {};
    var evt = {};
    if (thing === undefined) { thing = {}; }
    thing.on = function (type, fn) {
      if (!evt[type]) {
        evt[type] = [fn];
      } else {
        evt[type].push(fn);
      }
      return thing;
    };
    thing.once = function (type, fn) {
      fn._once = true; // thing.off(fn) still works!
      thing.on(type, fn);
      return thing;
    };
    thing.off = function (type, fn) {
      var c = arguments.length;
      if (c === 1) {
        delete evt[type];
      } else if (c === 0) {
        evt = {};
      } else {
        var et = evt[type];
        if (!et) { return thing; }
        et.splice(et.indexOf(fn), 1);
      }
      return thing;
    };
    thing.emit = function () {
      var args = atoa(arguments);
      return thing.emitterSnapshot(args.shift()).apply(this, args);
    };
    thing.emitterSnapshot = function (type) {
      var et = (evt[type] || []).slice(0);
      return function () {
        var args = atoa(arguments);
        var ctx = this || thing;
        if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
        et.forEach(function emitter (listen) {
          if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
          if (listen._once) { thing.off(type, listen); }
        });
        return thing;
      };
    };
    return thing;
  };

  var NativeCustomEvent = commonjsGlobal.CustomEvent;

  function useNative () {
    try {
      var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
      return  'cat' === p.type && 'bar' === p.detail.foo;
    } catch (e) {
    }
    return false;
  }

  /**
   * Cross-browser `CustomEvent` constructor.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
   *
   * @public
   */

  var customEvent$1 = useNative() ? NativeCustomEvent :

  // IE >= 9
  'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
    var e = document.createEvent('CustomEvent');
    if (params) {
      e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    } else {
      e.initCustomEvent(type, false, false, void 0);
    }
    return e;
  } :

  // IE <= 8
  function CustomEvent (type, params) {
    var e = document.createEventObject();
    e.type = type;
    if (params) {
      e.bubbles = Boolean(params.bubbles);
      e.cancelable = Boolean(params.cancelable);
      e.detail = params.detail;
    } else {
      e.bubbles = false;
      e.cancelable = false;
      e.detail = void 0;
    }
    return e;
  };

  var eventmap$1 = [];
  var eventname = '';
  var ron = /^on/;

  for (eventname in commonjsGlobal) {
    if (ron.test(eventname)) {
      eventmap$1.push(eventname.slice(2));
    }
  }

  var eventmap_1 = eventmap$1;

  var customEvent = customEvent$1;
  var eventmap = eventmap_1;
  var doc$1 = commonjsGlobal.document;
  var addEvent = addEventEasy;
  var removeEvent = removeEventEasy;
  var hardCache = [];

  if (!commonjsGlobal.addEventListener) {
    addEvent = addEventHard;
    removeEvent = removeEventHard;
  }

  var crossvent$1 = {
    add: addEvent,
    remove: removeEvent,
    fabricate: fabricateEvent
  };

  function addEventEasy (el, type, fn, capturing) {
    return el.addEventListener(type, fn, capturing);
  }

  function addEventHard (el, type, fn) {
    return el.attachEvent('on' + type, wrap(el, type, fn));
  }

  function removeEventEasy (el, type, fn, capturing) {
    return el.removeEventListener(type, fn, capturing);
  }

  function removeEventHard (el, type, fn) {
    var listener = unwrap(el, type, fn);
    if (listener) {
      return el.detachEvent('on' + type, listener);
    }
  }

  function fabricateEvent (el, type, model) {
    var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
    if (el.dispatchEvent) {
      el.dispatchEvent(e);
    } else {
      el.fireEvent('on' + type, e);
    }
    function makeClassicEvent () {
      var e;
      if (doc$1.createEvent) {
        e = doc$1.createEvent('Event');
        e.initEvent(type, true, true);
      } else if (doc$1.createEventObject) {
        e = doc$1.createEventObject();
      }
      return e;
    }
    function makeCustomEvent () {
      return new customEvent(type, { detail: model });
    }
  }

  function wrapperFactory (el, type, fn) {
    return function wrapper (originalEvent) {
      var e = originalEvent || commonjsGlobal.event;
      e.target = e.target || e.srcElement;
      e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
      e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
      e.which = e.which || e.keyCode;
      fn.call(el, e);
    };
  }

  function wrap (el, type, fn) {
    var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
    hardCache.push({
      wrapper: wrapper,
      element: el,
      type: type,
      fn: fn
    });
    return wrapper;
  }

  function unwrap (el, type, fn) {
    var i = find(el, type, fn);
    if (i) {
      var wrapper = hardCache[i].wrapper;
      hardCache.splice(i, 1); // free up a tad of memory
      return wrapper;
    }
  }

  function find (el, type, fn) {
    var i, item;
    for (i = 0; i < hardCache.length; i++) {
      item = hardCache[i];
      if (item.element === el && item.type === type && item.fn === fn) {
        return i;
      }
    }
  }

  var cache = {};
  var start = '(?:^|\\s)';
  var end = '(?:\\s|$)';

  function lookupClass (className) {
    var cached = cache[className];
    if (cached) {
      cached.lastIndex = 0;
    } else {
      cache[className] = cached = new RegExp(start + className + end, 'g');
    }
    return cached;
  }

  function addClass (el, className) {
    var current = el.className;
    if (!current.length) {
      el.className = className;
    } else if (!lookupClass(className).test(current)) {
      el.className += ' ' + className;
    }
  }

  function rmClass (el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
  }

  var classes$1 = {
    add: addClass,
    rm: rmClass
  };

  var emitter = emitter$1;
  var crossvent = crossvent$1;
  var classes = classes$1;
  var doc = document;
  var documentElement = doc.documentElement;

  function dragula (initialContainers, options) {
    var len = arguments.length;
    if (len === 1 && Array.isArray(initialContainers) === false) {
      options = initialContainers;
      initialContainers = [];
    }
    var _mirror; // mirror image
    var _source; // source container
    var _item; // item being dragged
    var _offsetX; // reference x
    var _offsetY; // reference y
    var _moveX; // reference move x
    var _moveY; // reference move y
    var _initialSibling; // reference sibling when grabbed
    var _currentSibling; // reference sibling now
    var _copy; // item used for copying
    var _renderTimer; // timer for setTimeout renderMirrorImage
    var _lastDropTarget = null; // last container item was over
    var _grabbed; // holds mousedown context until first mousemove

    var o = options || {};
    if (o.moves === void 0) { o.moves = always; }
    if (o.accepts === void 0) { o.accepts = always; }
    if (o.invalid === void 0) { o.invalid = invalidTarget; }
    if (o.containers === void 0) { o.containers = initialContainers || []; }
    if (o.isContainer === void 0) { o.isContainer = never; }
    if (o.copy === void 0) { o.copy = false; }
    if (o.copySortSource === void 0) { o.copySortSource = false; }
    if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
    if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
    if (o.direction === void 0) { o.direction = 'vertical'; }
    if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
    if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

    var drake = emitter({
      containers: o.containers,
      start: manualStart,
      end: end,
      cancel: cancel,
      remove: remove,
      destroy: destroy,
      canMove: canMove,
      dragging: false
    });

    if (o.removeOnSpill === true) {
      drake.on('over', spillOver).on('out', spillOut);
    }

    events();

    return drake;

    function isContainer (el) {
      return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }

    function events (remove) {
      var op = remove ? 'remove' : 'add';
      touchy(documentElement, op, 'mousedown', grab);
      touchy(documentElement, op, 'mouseup', release);
    }

    function eventualMovements (remove) {
      var op = remove ? 'remove' : 'add';
      touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
    }

    function movements (remove) {
      var op = remove ? 'remove' : 'add';
      crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
      crossvent[op](documentElement, 'click', preventGrabbed);
    }

    function destroy () {
      events(true);
      release({});
    }

    function preventGrabbed (e) {
      if (_grabbed) {
        e.preventDefault();
      }
    }

    function grab (e) {
      _moveX = e.clientX;
      _moveY = e.clientY;

      var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
      if (ignore) {
        return; // we only care about honest-to-god left clicks and touch events
      }
      var item = e.target;
      var context = canStart(item);
      if (!context) {
        return;
      }
      _grabbed = context;
      eventualMovements();
      if (e.type === 'mousedown') {
        if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
          item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
        } else {
          e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
        }
      }
    }

    function startBecauseMouseMoved (e) {
      if (!_grabbed) {
        return;
      }
      if (whichMouseButton(e) === 0) {
        release({});
        return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
      }

      // truthy check fixes #239, equality fixes #207, fixes #501
      if ((e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0)) &&
        (e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0))) {
        return;
      }

      if (o.ignoreInputTextSelection) {
        var clientX = getCoord('clientX', e) || 0;
        var clientY = getCoord('clientY', e) || 0;
        var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
        if (isInput(elementBehindCursor)) {
          return;
        }
      }

      var grabbed = _grabbed; // call to end() unsets _grabbed
      eventualMovements(true);
      movements();
      end();
      start(grabbed);

      var offset = getOffset(_item);
      _offsetX = getCoord('pageX', e) - offset.left;
      _offsetY = getCoord('pageY', e) - offset.top;

      classes.add(_copy || _item, 'gu-transit');
      renderMirrorImage();
      drag(e);
    }

    function canStart (item) {
      if (drake.dragging && _mirror) {
        return;
      }
      if (isContainer(item)) {
        return; // don't drag container itself
      }
      var handle = item;
      while (getParent(item) && isContainer(getParent(item)) === false) {
        if (o.invalid(item, handle)) {
          return;
        }
        item = getParent(item); // drag target should be a top element
        if (!item) {
          return;
        }
      }
      var source = getParent(item);
      if (!source) {
        return;
      }
      if (o.invalid(item, handle)) {
        return;
      }

      var movable = o.moves(item, source, handle, nextEl(item));
      if (!movable) {
        return;
      }

      return {
        item: item,
        source: source
      };
    }

    function canMove (item) {
      return !!canStart(item);
    }

    function manualStart (item) {
      var context = canStart(item);
      if (context) {
        start(context);
      }
    }

    function start (context) {
      if (isCopy(context.item, context.source)) {
        _copy = context.item.cloneNode(true);
        drake.emit('cloned', _copy, context.item, 'copy');
      }

      _source = context.source;
      _item = context.item;
      _initialSibling = _currentSibling = nextEl(context.item);

      drake.dragging = true;
      drake.emit('drag', _item, _source);
    }

    function invalidTarget () {
      return false;
    }

    function end () {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      drop(item, getParent(item));
    }

    function ungrab () {
      _grabbed = false;
      eventualMovements(true);
      movements(true);
    }

    function release (e) {
      ungrab();

      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
      var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
      if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
        drop(item, dropTarget);
      } else if (o.removeOnSpill) {
        remove();
      } else {
        cancel();
      }
    }

    function drop (item, target) {
      var parent = getParent(item);
      if (_copy && o.copySortSource && target === _source) {
        parent.removeChild(_item);
      }
      if (isInitialPlacement(target)) {
        drake.emit('cancel', item, _source, _source);
      } else {
        drake.emit('drop', item, target, _source, _currentSibling);
      }
      cleanup();
    }

    function remove () {
      if (!drake.dragging) {
        return;
      }
      var item = _copy || _item;
      var parent = getParent(item);
      if (parent) {
        parent.removeChild(item);
      }
      drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
      cleanup();
    }

    function cancel (revert) {
      if (!drake.dragging) {
        return;
      }
      var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
      var item = _copy || _item;
      var parent = getParent(item);
      var initial = isInitialPlacement(parent);
      if (initial === false && reverts) {
        if (_copy) {
          if (parent) {
            parent.removeChild(_copy);
          }
        } else {
          _source.insertBefore(item, _initialSibling);
        }
      }
      if (initial || reverts) {
        drake.emit('cancel', item, _source, _source);
      } else {
        drake.emit('drop', item, parent, _source, _currentSibling);
      }
      cleanup();
    }

    function cleanup () {
      var item = _copy || _item;
      ungrab();
      removeMirrorImage();
      if (item) {
        classes.rm(item, 'gu-transit');
      }
      if (_renderTimer) {
        clearTimeout(_renderTimer);
      }
      drake.dragging = false;
      if (_lastDropTarget) {
        drake.emit('out', item, _lastDropTarget, _source);
      }
      drake.emit('dragend', item);
      _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
    }

    function isInitialPlacement (target, s) {
      var sibling;
      if (s !== void 0) {
        sibling = s;
      } else if (_mirror) {
        sibling = _currentSibling;
      } else {
        sibling = nextEl(_copy || _item);
      }
      return target === _source && sibling === _initialSibling;
    }

    function findDropTarget (elementBehindCursor, clientX, clientY) {
      var target = elementBehindCursor;
      while (target && !accepted()) {
        target = getParent(target);
      }
      return target;

      function accepted () {
        var droppable = isContainer(target);
        if (droppable === false) {
          return false;
        }

        var immediate = getImmediateChild(target, elementBehindCursor);
        var reference = getReference(target, immediate, clientX, clientY);
        var initial = isInitialPlacement(target, reference);
        if (initial) {
          return true; // should always be able to drop it right back where it was
        }
        return o.accepts(_item, target, _source, reference);
      }
    }

    function drag (e) {
      if (!_mirror) {
        return;
      }
      e.preventDefault();

      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var x = clientX - _offsetX;
      var y = clientY - _offsetY;

      _mirror.style.left = x + 'px';
      _mirror.style.top = y + 'px';

      var item = _copy || _item;
      var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
      var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
      var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
      if (changed || dropTarget === null) {
        out();
        _lastDropTarget = dropTarget;
        over();
      }
      var parent = getParent(item);
      if (dropTarget === _source && _copy && !o.copySortSource) {
        if (parent) {
          parent.removeChild(item);
        }
        return;
      }
      var reference;
      var immediate = getImmediateChild(dropTarget, elementBehindCursor);
      if (immediate !== null) {
        reference = getReference(dropTarget, immediate, clientX, clientY);
      } else if (o.revertOnSpill === true && !_copy) {
        reference = _initialSibling;
        dropTarget = _source;
      } else {
        if (_copy && parent) {
          parent.removeChild(item);
        }
        return;
      }
      if (
        (reference === null && changed) ||
        reference !== item &&
        reference !== nextEl(item)
      ) {
        _currentSibling = reference;
        dropTarget.insertBefore(item, reference);
        drake.emit('shadow', item, dropTarget, _source);
      }
      function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
      function over () { if (changed) { moved('over'); } }
      function out () { if (_lastDropTarget) { moved('out'); } }
    }

    function spillOver (el) {
      classes.rm(el, 'gu-hide');
    }

    function spillOut (el) {
      if (drake.dragging) { classes.add(el, 'gu-hide'); }
    }

    function renderMirrorImage () {
      if (_mirror) {
        return;
      }
      var rect = _item.getBoundingClientRect();
      _mirror = _item.cloneNode(true);
      _mirror.style.width = getRectWidth(rect) + 'px';
      _mirror.style.height = getRectHeight(rect) + 'px';
      classes.rm(_mirror, 'gu-transit');
      classes.add(_mirror, 'gu-mirror');
      o.mirrorContainer.appendChild(_mirror);
      touchy(documentElement, 'add', 'mousemove', drag);
      classes.add(o.mirrorContainer, 'gu-unselectable');
      drake.emit('cloned', _mirror, _item, 'mirror');
    }

    function removeMirrorImage () {
      if (_mirror) {
        classes.rm(o.mirrorContainer, 'gu-unselectable');
        touchy(documentElement, 'remove', 'mousemove', drag);
        getParent(_mirror).removeChild(_mirror);
        _mirror = null;
      }
    }

    function getImmediateChild (dropTarget, target) {
      var immediate = target;
      while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
        immediate = getParent(immediate);
      }
      if (immediate === documentElement) {
        return null;
      }
      return immediate;
    }

    function getReference (dropTarget, target, x, y) {
      var horizontal = o.direction === 'horizontal';
      var reference = target !== dropTarget ? inside() : outside();
      return reference;

      function outside () { // slower, but able to figure out any position
        var len = dropTarget.children.length;
        var i;
        var el;
        var rect;
        for (i = 0; i < len; i++) {
          el = dropTarget.children[i];
          rect = el.getBoundingClientRect();
          if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
          if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
        }
        return null;
      }

      function inside () { // faster, but only available if dropped inside a child element
        var rect = target.getBoundingClientRect();
        if (horizontal) {
          return resolve(x > rect.left + getRectWidth(rect) / 2);
        }
        return resolve(y > rect.top + getRectHeight(rect) / 2);
      }

      function resolve (after) {
        return after ? nextEl(target) : target;
      }
    }

    function isCopy (item, container) {
      return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }
  }

  function touchy (el, op, type, fn) {
    var touch = {
      mouseup: 'touchend',
      mousedown: 'touchstart',
      mousemove: 'touchmove'
    };
    var pointers = {
      mouseup: 'pointerup',
      mousedown: 'pointerdown',
      mousemove: 'pointermove'
    };
    var microsoft = {
      mouseup: 'MSPointerUp',
      mousedown: 'MSPointerDown',
      mousemove: 'MSPointerMove'
    };
    if (commonjsGlobal.navigator.pointerEnabled) {
      crossvent[op](el, pointers[type], fn);
    } else if (commonjsGlobal.navigator.msPointerEnabled) {
      crossvent[op](el, microsoft[type], fn);
    } else {
      crossvent[op](el, touch[type], fn);
      crossvent[op](el, type, fn);
    }
  }

  function whichMouseButton (e) {
    if (e.touches !== void 0) { return e.touches.length; }
    if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
    if (e.buttons !== void 0) { return e.buttons; }
    var button = e.button;
    if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
      return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
    }
  }

  function getOffset (el) {
    var rect = el.getBoundingClientRect();
    return {
      left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
      top: rect.top + getScroll('scrollTop', 'pageYOffset')
    };
  }

  function getScroll (scrollProp, offsetProp) {
    if (typeof commonjsGlobal[offsetProp] !== 'undefined') {
      return commonjsGlobal[offsetProp];
    }
    if (documentElement.clientHeight) {
      return documentElement[scrollProp];
    }
    return doc.body[scrollProp];
  }

  function getElementBehindPoint (point, x, y) {
    point = point || {};
    var state = point.className || '';
    var el;
    point.className += ' gu-hide';
    el = doc.elementFromPoint(x, y);
    point.className = state;
    return el;
  }

  function never () { return false; }
  function always () { return true; }
  function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
  function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
  function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
  function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
  function isEditable (el) {
    if (!el) { return false; } // no parents were editable
    if (el.contentEditable === 'false') { return false; } // stop the lookup
    if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
  }

  function nextEl (el) {
    return el.nextElementSibling || manually();
    function manually () {
      var sibling = el;
      do {
        sibling = sibling.nextSibling;
      } while (sibling && sibling.nodeType !== 1);
      return sibling;
    }
  }

  function getEventHost (e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) {
      return e.targetTouches[0];
    }
    if (e.changedTouches && e.changedTouches.length) {
      return e.changedTouches[0];
    }
    return e;
  }

  function getCoord (coord, e) {
    var host = getEventHost(e);
    var missMap = {
      pageX: 'clientX', // IE8
      pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) {
      coord = missMap[coord];
    }
    return host[coord];
  }

  var dragula_1 = dragula;

  var dragula$1 = /*@__PURE__*/getDefaultExportFromCjs(dragula_1);

  /** @typedef {import("./soulCards").SoulCard} SoulCard */

  const soulDeck = new e(SoulCards);

  /** @type {{[x: string]: {cards: SoulCard[]}}} */
  const piles = {
    enchanter: { cards: [] },
    left: { cards: [] },
    middle: { cards: [] },
    right: { cards: [] },
    discard: { cards: soulDeck.discardPile },
  };

  let CommandManager;

  // Get templates for later
  const faceUpTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceUpCardTemplate"));
  const faceDownTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("faceDownCardTemplate"));
  const emptyTemplate = /** @type {HTMLTemplateElement} */ (document.getElementById("emptyCardTemplate"));

  function newGame() {
    // setup a new command manager for this game
    CommandManager = createCommandManager();

    // recall cards
    soulDeck.addToDrawPile(piles.enchanter.cards.splice(0));
    soulDeck.addToDrawPile(piles.left.cards.splice(0));
    soulDeck.addToDrawPile(piles.middle.cards.splice(0));
    soulDeck.addToDrawPile(piles.right.cards.splice(0));
    soulDeck.addToDrawPile(soulDeck.discardPile.splice(0));

    // flip all face down and then shuffle
    soulDeck.drawPile.forEach((card) => {
      card.facingDown = true;
    });
    soulDeck.shuffle(3);

    // deal cards to piles
    piles.enchanter.cards.push(...soulDeck.drawFromDrawPile(3));
    piles.left.cards.push(...soulDeck.drawFromDrawPile(6));
    piles.middle.cards.push(...soulDeck.drawFromDrawPile(6));
    piles.right.cards.push(...soulDeck.drawFromDrawPile(6));
    soulDeck.addToDiscardPile(soulDeck.drawFromDrawPile(3));

    // reveal top mirage cards and discarded cards
    /** @type {SoulCard} */ (piles.left.cards[0]).facingDown = false;
    /** @type {SoulCard} */ (piles.middle.cards[0]).facingDown = false;
    /** @type {SoulCard} */ (piles.right.cards[0]).facingDown = false;
    soulDeck.discardPile.forEach((card) => {
      /** @type {SoulCard} */ (card).facingDown = false;
    });

    // trigger display of cards
    renderCards();
  }

  document.getElementById("newGameButton")?.addEventListener("click", () => newGame());
  document.getElementById("undoButton")?.addEventListener("click", () => CommandManager.undo());
  document.getElementById("redoButton")?.addEventListener("click", () => CommandManager.redo());

  /**
   * @param {SoulCard} chosenCard
   * @param {number} index
   */
  function makeFaceUpCard(chosenCard, index) {
    // Clone Template
    const faceUpCard = /** @type {HTMLElement} */ (faceUpTemplate?.content.cloneNode(true));

    // Get main element and add color and index to it
    const cardEl = faceUpCard.querySelector(".soul-card");
    if (cardEl) {
      cardEl.classList.add(chosenCard.color);
      cardEl.setAttribute("style", `--index: ${index}`);
    }

    // Set card's symbol and name
    faceUpCard.querySelectorAll(".soul-card__symbol").forEach((symbolDiv) => {
      symbolDiv.innerHTML = chosenCard.symbol;
    });
    const name = faceUpCard.querySelector(".soul-card__name");
    const { color, group } = chosenCard;
    if (name) name.innerHTML = `${color}<br/>${group}`;

    return /** @type {Node} */ (faceUpCard);
  }

  /** @param {number} index */
  function makeFaceDownCard(index) {
    const faceDownCard = /** @type {HTMLElement} */ (faceDownTemplate?.content.cloneNode(true));
    const fdCardEl = faceDownCard.querySelector(".soul-card");
    if (fdCardEl) fdCardEl.setAttribute("style", `--index: ${index}`);
    return faceDownCard;
  }

  /** @param {number} index */
  function makeEmptyCard(index) {
    const emptyCard = /** @type {HTMLElement} */ (emptyTemplate?.content.cloneNode(true));
    const emptyCardEl = emptyCard.querySelector(".soul-card");
    if (emptyCardEl) emptyCardEl.setAttribute("style", `--index: ${index}`);
    return emptyCard;
  }

  function renderCards() {
    // for each of the mirage piles, render the cards with the last card on the bottom of the pile
    Object.entries(piles).forEach(([pileName, { cards }]) => {
      // If the pileName is "discard", sort the cards by group
      if (pileName === "discard") {
        // clone the pile so that we can maintain the undo functionality
        cards = [...cards];
        cards.sort((a, b) => {
          if (a.group < b.group) {
            return -1;
          } else if (a.group > b.group) {
            return 1;
          }
          return 0;
        });
      }

      // Make all of the cards
      const cardEls = /** @type {SoulCard[]} */ (cards).map((card, index) => {
        if (card.facingDown) {
          return makeFaceDownCard(index);
        } else {
          return makeFaceUpCard(card, index);
        }
      });
      
      const nextIndex = cardEls.length;
      const emptyCard = makeEmptyCard(nextIndex);
      cardEls.push(emptyCard);

      // Next, append cards to pile
      const pileEl = document.querySelector(`#${pileName}Pile.pile-cards`);
      pileEl?.replaceChildren(...cardEls);
    });
  }

  /**
   * @param {string} fromPile
   * @param {string} toPile
   */
  function shiftCards(fromPile, toPile) {
    // get top card from origin pile
    const topCard = piles[fromPile].cards.shift();

    // if card found, add it to destination pile and reveal next top card
    if (topCard) {
      // get next top card and reveal it (if there is one)
      if (piles[fromPile].cards.length) piles[fromPile].cards[0].facingDown = false;

      piles[toPile].cards.unshift(topCard);
    }

    // re-render cards
    renderCards();
  }

  // Find all three displayed card piles and set them up for discarding and shifting
  const displayedCardPiles = document.querySelectorAll("#cardPiles .card-pile");
  displayedCardPiles.forEach((pile) => {
    // get pile name
    const pileName = pile.id.replace("Pile", "");

    // get and setup discard button
    const discardButton = pile.querySelector(`button#${pileName}Discard`);
    if (discardButton) {
      discardButton.addEventListener("click", () => CommandManager.doShift(pileName, "discard"));
    }

    // get and setup shift button(s)
    const shiftButtons = pile.querySelectorAll(`button.shift-button`);
    shiftButtons.forEach((shiftButton) => {
      // get from pile and destination
      const { fromPile, toPile } = /** @type {HTMLElement} */ (shiftButton).dataset;
      if (fromPile && toPile) {
        shiftButton.addEventListener("click", () => CommandManager.doShift(fromPile, toPile));
      }
    });
  });

  function revealEnchanterCards() {
    // TODO: Re-write this to use the CommandManager
    let card = piles.enchanter.cards.shift();
    if (card) {
      card.facingDown = false;
      piles.left.cards.unshift(card);
    }

    card = piles.enchanter.cards.shift();
    if (card) {
      card.facingDown = false;
      piles.middle.cards.unshift(card);
    }

    card = piles.enchanter.cards.shift();
    if (card) {
      card.facingDown = false;
      piles.right.cards.unshift(card);
    }

    renderCards();
  }

  document.getElementById("enchanterReveal")?.addEventListener("click", () => revealEnchanterCards());

  // Function to create commandManagers, should be one per game to manage history (undo/redo)
  const createCommandManager = () => {
    /** @type {{fromPile: string, toPile: string}[]} */
    // @ts-ignore
    let history = [null];
    let position = 0;

    return {
      /**
       * @param {string} fromPile
       * @param {string} toPile
       */
      doShift(fromPile, toPile) {
        // If current position is anywhere other than the end of the history array, keep only the past history
        if (position < history.length - 1) {
          history = history.slice(0, position + 1);
        }

        history.push({ fromPile, toPile });
        position += 1;
        shiftCards(fromPile, toPile);
      },

      undo() {
        if (position > 0) {
          const { fromPile, toPile } = history[position];
          position -= 1;
          shiftCards(toPile, fromPile);
        }
      },

      redo() {
        if (position < history.length - 1) {
          position += 1;
          const { fromPile, toPile } = history[position];
          shiftCards(fromPile, toPile);
        }
      },
    };
  };

  /** Drag and drop stuff */
  const pileCardsEls = Array.from(document.getElementsByClassName("pile-cards"));
  console.log("pileCardsEls:", pileCardsEls);
  const drake = dragula$1(pileCardsEls);
  drake.on("drop", (_, target, source) => {
    const fromPile = source.id.replace("Pile", "");
    const toPile = target.id.replace("Pile", "");
    CommandManager.doShift(fromPile, toPile);
  });


  document.addEventListener("DOMContentLoaded", function () {
    newGame();
  });

})();
