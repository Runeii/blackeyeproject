function setupCanvas (cjs, an) {
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.webFontTxtInst = {}
  var loadedTypekitCount = 0
  var loadedGoogleCount = 0
  var gFontsUpdateCacheList = []
  var tFontsUpdateCacheList = []
  lib.ssMetadata = []

  lib.updateListCache = function (cacheList) {
    for (var i = 0; i < cacheList.length; i++) {
      if (cacheList[i].cacheCanvas) {
        cacheList[i].updateCache()
      }
    }
  }

  lib.addElementsToCache = function (textInst, cacheList) {
    var cur = textInst
    while (cur != null && cur !== exportRoot) {
      if (cacheList.indexOf(cur) !== -1) {
        break
      }
      cur = cur.parent
    }
    if (cur !== exportRoot) {
      var cur2 = textInst
      var index = cacheList.indexOf(cur)
      while (cur2 != null && cur2 !== cur) {
        cacheList.splice(index, 0, cur2)
        cur2 = cur2.parent
        index++
      }
    } else {
      cur = textInst
      while (cur != null && cur !== exportRoot) {
        cacheList.push(cur)
        cur = cur.parent
      }
    }
  }

  lib.gfontAvailable = function (family, totalGoogleCount) {
    lib.properties.webfonts[family] = true
    var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || []
    for (var f = 0; f < txtInst.length; ++f) { lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList) }

    loadedGoogleCount++
    if (loadedGoogleCount === totalGoogleCount) {
      lib.updateListCache(gFontsUpdateCacheList)
    }
  }

  lib.tfontAvailable = function (family, totalTypekitCount) {
    lib.properties.webfonts[family] = true
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || []
    for (var f = 0; f < txtInst.length; ++f) { lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList) }

    loadedTypekitCount++
    if (loadedTypekitCount === totalTypekitCount) {
      lib.updateListCache(tFontsUpdateCacheList)
    }
  }
  // symbols:
  // helper functions:

  function mcSymbolClone () {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop))
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }

  function getMCSymbolPrototype (symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mcSymbolClone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }

  (lib.V2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AgiBvIhbjdIBIAAIA1CIIA3iIIBHAAIhbDdg')
    this.shape.setTransform(52.3, 54, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBDhDBfAAQBfAABEBDQBDBEAABeQAABghDBDQhEBDhfAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.V2, new cjs.Rectangle(0, 0, 105.7, 105.7), null);

  (lib.V = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AgiBvIhbjdIBIAAIA1CHIA3iHIBHAAIhbDdg')
    this.shape.setTransform(52.3, 54, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBDhDBfAAQBfAABEBDQBDBEAABeQAABghDBDQhEBDhfAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.V, new cjs.Rectangle(0, 0, 105.7, 105.7), null);

  (lib.Group_2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE3Mn0NCk7g')
    this.shape.setTransform(1843.3, 1631.9)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE4Mn0NCk7g')
    this.shape_1.setTransform(1828.4, 1563.8)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE3Mn0NCk8g')
    this.shape_2.setTransform(1813.4, 1495.8)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik7IBEE2Mn0NCk7g')
    this.shape_3.setTransform(1798.5, 1427.8)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik6IBEE2Mn0NCk7g')
    this.shape_4.setTransform(1783.5, 1359.7)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_5.setTransform(1768.6, 1291.7)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik7IBEE2Mn0NCk7g')
    this.shape_6.setTransform(1753.6, 1223.7)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE3Mn0NCk8g')
    this.shape_7.setTransform(1738.7, 1155.6)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE4Mn0NCk7g')
    this.shape_8.setTransform(1723.7, 1087.6)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE4Mn0NCk7g')
    this.shape_9.setTransform(1708.8, 1019.6)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_10.setTransform(1693.8, 951.5)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_11.setTransform(1678.9, 883.5)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_12.setTransform(1663.9, 815.5)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_13.setTransform(1649, 747.5)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_14.setTransform(1634, 679.4)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_15.setTransform(1619.1, 611.4)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_16.setTransform(1604.1, 543.4)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0, 0, 3447.5, 2175.2), null);

  (lib.Group_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape.setTransform(1843.3, 1631.8)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_1.setTransform(1828.3, 1563.8)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_2.setTransform(1813.4, 1495.8)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_3.setTransform(1798.4, 1427.8)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_4.setTransform(1783.5, 1359.7)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_5.setTransform(1768.5, 1291.7)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_6.setTransform(1753.6, 1223.7)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBEE3Mn0NCk8g')
    this.shape_7.setTransform(1738.7, 1155.6)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBEE3Mn0NCk8g')
    this.shape_8.setTransform(1723.7, 1087.6)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBEE4Mn0NCk7g')
    this.shape_9.setTransform(1708.8, 1019.6)

    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBEE3Mn0NCk8g')
    this.shape_10.setTransform(1693.8, 951.5)

    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics.f('#97CFEC').s().p('Ej6pBQCMH0Oik7IBFE3Mn0OCk8g')
    this.shape_11.setTransform(1678.9, 883.5)

    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBFE3Mn0OCk8g')
    this.shape_12.setTransform(1663.9, 815.5)

    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik7IBFE2Mn0OCk7g')
    this.shape_13.setTransform(1649, 747.5)

    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_14.setTransform(1634, 679.4)

    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_15.setTransform(1619.1, 611.4)

    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#97CFEC').s().p('Ej6oBQCMH0Nik7IBEE3Mn0NCk8g')
    this.shape_16.setTransform(1604.1, 543.4)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 3447.4, 2175.2), null);

  (lib.Group = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape.setTransform(1738.7, 1155.7)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_1.setTransform(1723.7, 1087.7)

    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_2.setTransform(1708.8, 1019.6)

    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE3Mn0NCk8g')
    this.shape_3.setTransform(1693.8, 951.6)

    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#97CFEC').s().p('Ej6oBQDMH0Nik8IBEE4Mn0NCk7g')
    this.shape_4.setTransform(1678.9, 883.6)

    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBEE3Mn0NCk8g')
    this.shape_5.setTransform(1664, 815.5)

    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#97CFEC').s().p('Ej6pBQCMH0Oik7IBEE3Mn0NCk8g')
    this.shape_6.setTransform(1649, 747.5)

    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBEE3Mn0NCk8g')
    this.shape_7.setTransform(1634.1, 679.5)

    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBFE3Mn0OCk8g')
    this.shape_8.setTransform(1619.1, 611.4)

    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#97CFEC').s().p('Ej6pBQDMH0Oik8IBFE3Mn0OCk8g')
    this.shape_9.setTransform(1604.2, 543.4)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 3342.8, 1699.1), null);

  (lib.S = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('Ag9BjQghgVgFgqIBCAAQAFAYAhAAQAXAAAAgNQAAgKgSgEIgjgJQghgJgPgOQgQgPgBgaQAAgjAagUQAZgTAnAAQAiAAAaAOQAiATAEAqIhCAAQgFgWgXABQgWAAAAAOQABALARAEIAjAIQAfAJAPANQATAPgBAbQAAAjgaATQgaAUgrAAQgnAAgagQg')
    this.shape.setTransform(51.5, 53.8, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBDhDBfAAQBfAABEBDQBDBEAABeQAABfhDBEQhEBDhfAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.S, new cjs.Rectangle(0, 0, 105.7, 105.7), null);

  (lib.O = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AhUBSQgighAAgxQAAgwAighQAhghAzAAQA0AAAiAhQAhAhAAAwQAAAxghAhQgiAhg0AAQgzAAghghgAglglQgOAQAAAVQAAAXAOAPQAPAQAWAAQAXAAAPgQQAOgQAAgWQAAgVgOgQQgPgPgXAAQgVAAgQAPg')
    this.shape.setTransform(53.6, 53.8, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBEhDBeAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.O, new cjs.Rectangle(0, 0, 105.6, 105.7), null);

  (lib.L2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AhUBuIAAjbIBBAAIAACjIBoAAIAAA4g')
    this.shape.setTransform(54.7, 53.8, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBDhDBfAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.L2, new cjs.Rectangle(0, 0, 105.6, 105.7), null);

  (lib.L1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AhUBuIAAjbIBBAAIAACjIBoAAIAAA4g')
    this.shape.setTransform(54.7, 53.8, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBDhDBfAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.L1, new cjs.Rectangle(0, 0, 105.6, 105.7), null);

  (lib.E = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AhUBuIAAjbICpAAIAAA3IhoAAIAAAdIBZAAIAAAzIhZAAIAAAeIBoAAIAAA2g')
    this.shape.setTransform(52.5, 53.8, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('Al0F1QibiZAAjbQAAjaCbibQCZibDbAAQDbAACaCbQCbCbAADaQAADaibCaQiaCbjbAAQjZAAibibg')
    this.shape_1.setTransform(52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.E, new cjs.Rectangle(0, 0, 105.7, 105.7), null);

  (lib.A = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#162639').s().p('AA2BuIgMgfIhTAAIgMAfIhFAAIBbjbIA/AAIBbDbgAgWAaIAtAAIgXg+g')
    this.shape.setTransform(52.6, 53.7, 2.294, 2.294)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#FFFFFF').s().p('AiiCjQhDhDAAhgQAAheBDhEQBEhDBeAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg')
    this.shape_1.setTransform(52.8, 52.8, 2.294, 2.294)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.A, new cjs.Rectangle(0, 0, 105.6, 105.7), null);

  (lib.ClipGroup = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 2 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    mask.graphics.p('Ei6hCcyMAAAk5jMF1EAAAMAAAE5jg')
    mask.setTransform(1872.5, 1848.6)

    // Layer 3
    this.instance = new lib.Group()
    this.instance.parent = this
    this.instance.setTransform(2223.8, 3147.4, 1, 1, 0, 0, 0, 1671.4, 849.5)
    this.instance.alpha = 0.539

    this.instance_1 = new lib.Group_1()
    this.instance_1.parent = this
    this.instance_1.setTransform(1999.6, 2238.8, 1, 1, 0, 0, 0, 1723.7, 1087.6)
    this.instance_1.alpha = 0.539

    this.instance_2 = new lib.Group_2()
    this.instance_2.parent = this
    this.instance_2.setTransform(1723.7, 1087.6, 1, 1, 0, 0, 0, 1723.7, 1087.6)
    this.instance_2.alpha = 0.539

    var maskedShapeInstanceList = [this.instance, this.instance_1, this.instance_2]

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_2}, {t: this.instance_1}, {t: this.instance}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(678.7, 845.2, 2387.7, 2006.8), null);

  (lib.Symbol1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // Layer 1
    this.instance = new lib.ClipGroup()
    this.instance.parent = this
    this.instance.setTransform(2011.5, 464.2, 0.3, 0.402, 0, 0, 0, 1947.7, 1998.6)

    this.shape = new cjs.Shape()
    this.shape.graphics.f('#6FBEDC').s().p('Ei6hCcyMAAAk5jMF1EAAAMAAAE5jg')
    this.shape.setTransform(1989, 403.8, 0.3, 0.402)

    this.instance_1 = new lib.ClipGroup()
    this.instance_1.parent = this
    this.instance_1.setTransform(381.1, 464.2, 0.3, 0.402, 0, 0, 0, 1947.7, 1998.6)

    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#6FBEDC').s().p('Ei6hCcyMAAAk5jMF1EAAAMAAAE5jg')
    this.shape_1.setTransform(358.6, 403.8, 0.3, 0.402)

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.instance_1}, {t: this.shape}, {t: this.instance}]}).wait(1))
  }).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-203.8, -340.1, 2800.3, 1608.4), null);

  // stage content:
  (lib.LoveLAVSLogo = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {})

    // S
    this.instance = new lib.S()
    this.instance.parent = this
    this.instance.setTransform(1132.2, 284, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({regY: 52.9, scaleX: 0.9, scaleY: 0.9, y: 284.1}, 10, cjs.Ease.quadIn).to({regY: 52.8, scaleX: 1, scaleY: 1, y: 284}, 10, cjs.Ease.quadOut).wait(120))

    // V
    this.instance_1 = new lib.V()
    this.instance_1.parent = this
    this.instance_1.setTransform(1017.4, 284, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleX: 0.9, scaleY: 0.9}, 10, cjs.Ease.quadIn).to({scaleX: 1, scaleY: 1}, 10, cjs.Ease.quadOut).wait(123))

    // A
    this.instance_2 = new lib.A()
    this.instance_2.parent = this
    this.instance_2.setTransform(902.6, 284, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({regY: 52.9, scaleX: 0.9, scaleY: 0.9, y: 284.1}, 10, cjs.Ease.quadIn).to({regY: 52.8, scaleX: 1, scaleY: 1, y: 284}, 10, cjs.Ease.quadOut).wait(126))

    // L1
    this.instance_3 = new lib.L1()
    this.instance_3.parent = this
    this.instance_3.setTransform(787.8, 284, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({scaleX: 0.91, scaleY: 0.91}, 10, cjs.Ease.quadIn).to({scaleX: 1, scaleY: 1}, 10, cjs.Ease.quadOut).wait(129))

    // E
    this.instance_4 = new lib.E()
    this.instance_4.parent = this
    this.instance_4.setTransform(1132.2, 166.1, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({regY: 52.9, scaleX: 0.9, scaleY: 0.9, y: 166.2}, 10, cjs.Ease.quadIn).to({regY: 52.8, scaleX: 1, scaleY: 1, y: 166.1}, 10, cjs.Ease.quadOut).wait(123))

    // V2
    this.instance_5 = new lib.V2()
    this.instance_5.parent = this
    this.instance_5.setTransform(1017.4, 166.1, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({regY: 52.9, scaleX: 0.9, scaleY: 0.9, y: 166.2}, 10, cjs.Ease.quadIn).to({regY: 52.8, scaleX: 1, scaleY: 1, y: 166.1}, 10, cjs.Ease.quadOut).wait(126))

    // O
    this.instance_6 = new lib.O()
    this.instance_6.parent = this
    this.instance_6.setTransform(902.6, 166.1, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({scaleX: 0.9, scaleY: 0.9}, 10, cjs.Ease.quadIn).to({scaleX: 1, scaleY: 1}, 10, cjs.Ease.quadOut).wait(129))

    // L2
    this.instance_7 = new lib.L2()
    this.instance_7.parent = this
    this.instance_7.setTransform(787.8, 166.1, 1, 1, 0, 0, 0, 52.8, 52.8)

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX: 0.91, scaleY: 0.91}, 10, cjs.Ease.quadIn).to({scaleX: 1, scaleY: 1}, 10, cjs.Ease.quadOut).wait(132))

    // wave
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#216EB1').s().p('EjKABmoQizhYAGiVQAFhvB6jLQAjg6BOh7QBGhxAqhQQB4joAAi6QAAjBhBiXQgnhahoiRQhniQgnhbQhBiXAAjBQAAjBBBiWQAnhbBniQQBoiRAnhaQBBiXAAjBQAAjBhBiXQgnhahoiRQhniQgnhbQhBiXAAjBQAAjBBBiXQAnhaBniRQBoiQAnhbQBBiWAAjBQAAjBhBiXQgnhahoiRQhniQgnhaQhBiXAAjBQAAjBBBiXQAnhaBniRQBoiQAnhbQBBiXAAjBQAAjBhBiWQgnhbhoiQQhniRgnhaQhBiXAAjBQAAjBBBiXQAnhaBniRQBoiRAnhaQBBiXAAjBQAAjBhBiXQgnhahoiRQhniQgnhbQhBiXAAjBQAAiagajNQgXi4AFg/QAHhsBHhPQBNhVC8heQGJjCDrhWQDshVDUgZQCngUEwAGQI7AMB8AAQGGAAEvBAQC2AnElBoQEjBnC3AnQEvBBGFAAQGGAAEvhBQC2gnEkhnQElhoC2gnQEvhAGFAAQGGAAEvBAQC3AnEkBoQEkBnC2AnQEwBBGFAAQGFAAEwhBQC2gnEkhnQEkhoC2gnQEwhAGFAAQGFAAEwBAQC2AnEjBoQEkBnC2AnQEwBBGFAAQGFAAEwhBQC2gnEkhnQEkhoC2gnQEwhAGFAAQGFAAEwBAQC2AnEkBoQEkBnC2AnQEwBBGFAAQGFAAEwhBQC2gnEkhnQEkhoC2gnQEwhAGFAAQF+AAFABeQB5AkCKA5QBRAhCYBDQEYB3DQAgQEvAuGEhKQGAhIFqigQBlgsCvhWQCkhRBOghQEFhvDeAHQETAKFtC1QCyBYgFCVQgFBvh7DLIhwC1QhHBxgpBQQh4DpAAC5QAADBBBCXQAnBbBnCQQBoCRAnBaQBACXAADBQAADBhACXQgnBahoCRQhnCRgnBaQhBCXAADBQAADBBBCWQAnBbBnCQQBoCRAnBaQBACXAADBQAADBhACXQgnBahoCRQhnCRgnBaQhBCXAADBQAADBBBCXQAnBaBnCQQBoCQAnBbQBACWAADBQAADBhACXQgnBbhoCQQhnCRgnBaQhBCXAADBQAADBBBCXQAnBaBnCRQBoCRAnBaQBACXAADBQAADBhACWQgnBbhoCQQhnCRgnBaQhBCXAADBQAADBBBCXQAnBbBnCQQBoCRAnBaQBACXAADBQAACaAaDOQAYC3gFBAQgIBshGBOQhNBWi8BdQmKDDjqBVQjsBWjUAZQinAUkwgHQo/gLh5AAQmFAAkwhBQi2gnkkhnQkjhoi3gnQkvhBmGAAQmFAAkwBBQi2AnkkBoQkjBni3AnQkvBBmGAAQmEAAkxhBQi2gnkkhnQkjhoi3gnQkvhBmGAAQmEAAkxBBQi2AnkkBoQkkBni2AnQkwBBmFAAQmFAAkwhBQi2gnkkhnQkjhoi2gnQkwhBmFAAQmFAAkwBBQi2AnkkBoQkkBni2AnQkwBBmFAAQmFAAkwhBQi2gnkkhnQkkhoi2gnQkwhBmFAAQmFAAkwBBQi2AnkkBoQkkBni2AnQkwBBmFAAQmFAAkwhBQi2gnkkhnQkkhoi3gnQkvhBmGAAQl4AAlcCHQh7AvieBPQirBZhSApQklCRjbAPQgeACgfAAQkRAAlBigg')
    this.shape.setTransform(960, 225, 0.655, 0.737)

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(153))

    // strip
    this.instance_8 = new lib.Symbol1()
    this.instance_8.parent = this
    this.instance_8.setTransform(943.6, 164, 1, 1, 0, 0, 0, 1196.3, 464.1)

    this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y: 399}, 152).wait(1))
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(503.5, -415.2, 2800.3, 1608.4)
  // library properties:
  lib.properties = {
    id: '0F6C79055B984AF48AD9DC2B9D694B14',
    width: 1920,
    height: 450,
    fps: 24,
    color: '#3063AD',
    opacity: 1.00,
    webfonts: {},
    manifest: [],
    preloads: []
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
  p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false }
  p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000) }
  p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000 }

  p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000 }

  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }

  an.compositions = an.compositions || {}
  an.compositions['0F6C79055B984AF48AD9DC2B9D694B14'] = {
    getStage: function () { return exportRoot.getStage() },
    getLibrary: function () { return lib },
    getSpriteSheet: function () { return ss },
    getImages: function () { return img }
  }

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }

  an.getComposition = function (id) {
    return an.compositions[id]
  }
}
var createjs, AdobeAn, exportRoot

var script = document.createElement('script')
script.src = 'https://code.createjs.com/createjs-2015.11.26.min.js'
script.onload = function () {
  setupCanvas(createjs = createjs || {}, AdobeAn = AdobeAn || {})

  var canvas, stage, exportRoot, animContainer, domOverlayContainer, fnStartAnimation
  function lavsInit () {
    canvas = document.getElementById('canvas')
    animContainer = document.getElementById('animationContainer')
    domOverlayContainer = document.getElementById('domOverlayContainer')
    var comp = AdobeAn.getComposition('0F6C79055B984AF48AD9DC2B9D694B14')
    // var lib = comp.getLibrary()
    handleComplete({}, comp)
  }
  function handleComplete (evt, comp) {
    // This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary()
    // var ss = comp.getSpriteSheet()
    var preloaderDiv = document.getElementById('_preload_div_')
    preloaderDiv.style.display = 'none'
    canvas.style.display = 'block'
    exportRoot = new lib.LoveLAVSLogo()
    stage = new lib.Stage(canvas)
    stage.addChild(exportRoot)
    // Registers the "tick" event listener.
    fnStartAnimation = function () {
      createjs.Ticker.setFPS(lib.properties.fps)
      createjs.Ticker.addEventListener('tick', stage)
    }
    // Code to support hidpi screens and responsive scaling.
    function makeResponsive (isResp, respDim, isScale, scaleType) {
      var lastW = 1
      var lastH = 1
      var lastS = 1
      window.addEventListener('resize', resizeCanvas)
      resizeCanvas()
      function resizeCanvas () {
        var w = lib.properties.width
        var h = lib.properties.height
        var iw = window.innerWidth
        var ih = window.innerHeight
        var pRatio = window.devicePixelRatio || 1
        var xRatio = iw / w
        var yRatio = ih / h
        var sRatio = 1
        if (isResp) {
          if ((respDim === 'width' && lastW === iw) || (respDim === 'height' && lastH === ih)) {
            sRatio = lastS
          } else if (!isScale) {
            if (iw < w || ih < h) { sRatio = Math.min(xRatio, yRatio) }
          } else if (scaleType === 1) {
            sRatio = Math.min(xRatio, yRatio)
          } else if (scaleType === 2) {
            sRatio = Math.max(xRatio, yRatio)
          }
        }
        canvas.width = w * pRatio * sRatio
        canvas.height = h * pRatio * sRatio
        canvas.style.width = animContainer.style.width = domOverlayContainer.style.width = preloaderDiv.style.width = w * sRatio + 'px'
        canvas.style.height = animContainer.style.height = domOverlayContainer.style.height = preloaderDiv.style.height = h * sRatio + 'px'
        stage.scaleX = pRatio * sRatio
        stage.scaleY = pRatio * sRatio
        lastW = iw; lastH = ih; lastS = sRatio
      }
    }
    makeResponsive(true, 'both', true, 1)
    AdobeAn.compositionLoaded(lib.properties.id)
    fnStartAnimation()
  }

  lavsInit()
}

document.head.appendChild(script) // or something of the likes
