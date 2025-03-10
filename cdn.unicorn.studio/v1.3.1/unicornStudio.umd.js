(function(b, k) {
    typeof exports == "object" && typeof module < "u" ? k(exports) : typeof define == "function" && define.amd ? define(["exports"], k) : (b = typeof globalThis < "u" ? globalThis : b || self, k(b.UnicornStudio = {}))
})(this, function(b) {
    "use strict";
    var Bt = Object.defineProperty;
    var Nt = (b, k, g) => k in b ? Bt(b, k, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: g
    }) : b[k] = g;
    var O = (b, k, g) => (Nt(b, typeof k != "symbol" ? k + "" : k, g), g);
    let k = 0;

    function g() {
        if (!(k > 100)) {
            if (k === 100) console.warn("Curtains: too many warnings thrown, stop logging.");
            else {
                const n = Array.prototype.slice.call(arguments);
                console.warn.apply(console, n)
            }
            k++
        }
    }

    function z() {
        const n = Array.prototype.slice.call(arguments);
        console.error.apply(console, n)
    }

    function he() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, n => {
            let e = Math.random() * 16 | 0;
            return (n === "x" ? e : e & 3 | 8).toString(16).toUpperCase()
        })
    }

    function B(n) {
        return (n & n - 1) === 0
    }

    function Oe(n, e, t) {
        return (1 - t) * n + t * e
    }
    let Ue = class {
        constructor(e) {
            if (this.type = "Scene", !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                z(this.type + ": Renderer WebGL context is undefined", e);
                return
            }
            this.renderer = e, this.gl = e.gl, this.initStacks()
        }
        initStacks() {
            this.stacks = {
                pingPong: [],
                renderTargets: [],
                opaque: [],
                transparent: [],
                renderPasses: [],
                scenePasses: []
            }
        }
        resetPlaneStacks() {
            this.stacks.pingPong = [], this.stacks.renderTargets = [], this.stacks.opaque = [], this.stacks.transparent = [];
            for (let e = 0; e < this.renderer.planes.length; e++) this.addPlane(this.renderer.planes[e])
        }
        resetShaderPassStacks() {
            this.stacks.scenePasses = [], this.stacks.renderPasses = [];
            for (let e = 0; e < this.renderer.shaderPasses.length; e++) this.renderer.shaderPasses[e].index = e, this.renderer.shaderPasses[e]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[e]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[e]);
            this.stacks.scenePasses.length === 0 && (this.renderer.state.scenePassIndex = null)
        }
        addToRenderTargetsStack(e) {
            const t = this.renderer.planes.filter(i => i.type !== "PingPongPlane" && i.target && i.uuid !== e.uuid);
            let s = -1;
            if (e.target._depth) {
                for (let i = t.length - 1; i >= 0; i--)
                    if (t[i].target.uuid === e.target.uuid) {
                        s = i + 1;
                        break
                    }
            } else s = t.findIndex(i => i.target.uuid === e.target.uuid);
            s = Math.max(0, s), t.splice(s, 0, e), e.target._depth ? (t.sort((i, r) => i.index - r.index), t.sort((i, r) => r.renderOrder - i.renderOrder)) : (t.sort((i, r) => r.index - i.index), t.sort((i, r) => i.renderOrder - r.renderOrder)), t.sort((i, r) => i.target.index - r.target.index), this.stacks.renderTargets = t
        }
        addToRegularPlaneStack(e) {
            const t = this.renderer.planes.filter(i => i.type !== "PingPongPlane" && !i.target && i._transparent === e._transparent && i.uuid !== e.uuid);
            let s = -1;
            for (let i = t.length - 1; i >= 0; i--)
                if (t[i]._geometry.definition.id === e._geometry.definition.id) {
                    s = i + 1;
                    break
                }
            return s = Math.max(0, s), t.splice(s, 0, e), t.sort((i, r) => i.index - r.index), t
        }
        addPlane(e) {
            if (e.type === "PingPongPlane") this.stacks.pingPong.push(e);
            else if (e.target) this.addToRenderTargetsStack(e);
            else if (e._transparent) {
                const t = this.addToRegularPlaneStack(e);
                t.sort((s, i) => i.relativeTranslation.z - s.relativeTranslation.z), t.sort((s, i) => i.renderOrder - s.renderOrder), this.stacks.transparent = t
            } else {
                const t = this.addToRegularPlaneStack(e);
                t.sort((s, i) => i.renderOrder - s.renderOrder), this.stacks.opaque = t
            }
        }
        removePlane(e) {
            e.type === "PingPongPlane" ? this.stacks.pingPong = this.stacks.pingPong.filter(t => t.uuid !== e.uuid) : e.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter(t => t.uuid !== e.uuid) : e._transparent ? this.stacks.transparent = this.stacks.transparent.filter(t => t.uuid !== e.uuid) : this.stacks.opaque = this.stacks.opaque.filter(t => t.uuid !== e.uuid)
        }
        setPlaneRenderOrder(e) {
            if (e.type === "ShaderPass") this.sortShaderPassStack(e._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
            else if (e.type === "PingPongPlane") return;
            if (e.target) e.target._depth ? (this.stacks.renderTargets.sort((t, s) => t.index - s.index), this.stacks.renderTargets.sort((t, s) => s.renderOrder - t.renderOrder)) : (this.stacks.renderTargets.sort((t, s) => s.index - t.index), this.stacks.renderTargets.sort((t, s) => t.renderOrder - s.renderOrder)), this.stacks.renderTargets.sort((t, s) => t.target.index - s.target.index);
            else {
                const t = e._transparent ? this.stacks.transparent : this.stacks.opaque,
                    s = this.stacks.scenePasses.find((i, r) => i._isScenePass && !i._depth && r === 0);
                !this.renderer.depth || s ? (t.sort((i, r) => r.index - i.index), e._transparent && t.sort((i, r) => i.relativeTranslation.z - r.relativeTranslation.z), t.sort((i, r) => i.renderOrder - r.renderOrder)) : (t.sort((i, r) => i.index - r.index), e._transparent && t.sort((i, r) => r.relativeTranslation.z - i.relativeTranslation.z), t.sort((i, r) => r.renderOrder - i.renderOrder))
            }
        }
        addShaderPass(e) {
            e._isScenePass ? (this.stacks.scenePasses.push(e), this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(e), this.sortShaderPassStack(this.stacks.renderPasses))
        }
        removeShaderPass(e) {
            this.resetShaderPassStacks()
        }
        sortShaderPassStack(e) {
            e.sort((t, s) => t.index - s.index), e.sort((t, s) => t.renderOrder - s.renderOrder)
        }
        enableShaderPass() {
            this.stacks.scenePasses.length && this.stacks.renderPasses.length === 0 && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
        }
        drawRenderPasses() {
            this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
            for (let e = 0; e < this.stacks.renderPasses.length; e++) this.stacks.renderPasses[e]._startDrawing(), this.renderer.clearDepth()
        }
        drawScenePasses() {
            for (let e = 0; e < this.stacks.scenePasses.length; e++) this.stacks.scenePasses[e]._startDrawing()
        }
        drawPingPongStack() {
            for (let e = 0; e < this.stacks.pingPong.length; e++) {
                const t = this.stacks.pingPong[e];
                t && t._startDrawing()
            }
        }
        drawStack(e) {
            for (let t = 0; t < this.stacks[e].length; t++) {
                const s = this.stacks[e][t];
                s && s._startDrawing()
            }
        }
        draw() {
            this.drawPingPongStack(), this.enableShaderPass(), this.drawStack("renderTargets"), this.drawRenderPasses(), this.renderer.setBlending(!1), this.drawStack("opaque"), this.stacks.transparent.length && (this.renderer.setBlending(!0), this.drawStack("transparent")), this.drawScenePasses()
        }
    };
    class Ve {
        constructor() {
            this.geometries = [], this.clear()
        }
        clear() {
            this.textures = [], this.programs = []
        }
        getGeometryFromID(e) {
            return this.geometries.find(t => t.id === e)
        }
        addGeometry(e, t, s) {
            this.geometries.push({
                id: e,
                vertices: t,
                uvs: s
            })
        }
        isSameShader(e, t) {
            return e.localeCompare(t) === 0
        }
        getProgramFromShaders(e, t) {
            return this.programs.find(s => this.isSameShader(s.vsCode, e) && this.isSameShader(s.fsCode, t))
        }
        addProgram(e) {
            this.programs.push(e)
        }
        getTextureFromSource(e) {
            const t = typeof e == "string" ? e : e.src;
            return this.textures.find(s => s.source && s.source.src === t)
        }
        addTexture(e) {
            this.getTextureFromSource(e.source) || this.textures.push(e)
        }
        removeTexture(e) {
            this.textures = this.textures.filter(t => t.uuid !== e.uuid)
        }
    }
    class We {
        constructor() {
            this.clear()
        }
        clear() {
            this.queue = []
        }
        add(e, t = !1) {
            const s = {
                callback: e,
                keep: t,
                timeout: null
            };
            return s.timeout = setTimeout(() => {
                this.queue.push(s)
            }, 0), s
        }
        execute() {
            this.queue.map(e => {
                e.callback && e.callback(), clearTimeout(this.queue.timeout)
            }), this.queue = this.queue.filter(e => e.keep)
        }
    }
    class Be {
        constructor({
            alpha: e,
            antialias: t,
            premultipliedAlpha: s,
            depth: i,
            failIfMajorPerformanceCaveat: r,
            preserveDrawingBuffer: a,
            stencil: h,
            container: o,
            pixelRatio: l,
            renderingScale: d,
            production: c,
            onError: f,
            onSuccess: u,
            onContextLost: p,
            onContextRestored: m,
            onDisposed: w,
            onSceneChange: R
        }) {
            this.type = "Renderer", this.alpha = e, this.antialias = t, this.premultipliedAlpha = s, this.depth = i, this.failIfMajorPerformanceCaveat = r, this.preserveDrawingBuffer = a, this.stencil = h, this.container = o, this.pixelRatio = l, this._renderingScale = d, this.production = c, this.onError = f, this.onSuccess = u, this.onContextLost = p, this.onContextRestored = m, this.onDisposed = w, this.onSceneChange = R, this.initState(), this.canvas = document.createElement("canvas");
            const _ = {
                alpha: this.alpha,
                premultipliedAlpha: this.premultipliedAlpha,
                antialias: this.antialias,
                depth: this.depth,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                stencil: this.stencil
            };
            if (this.gl = this.canvas.getContext("webgl2", _), this._isWebGL2 = !!this.gl, this.gl || (this.gl = this.canvas.getContext("webgl", _) || this.canvas.getContext("experimental-webgl", _)), this.gl) this.onSuccess && this.onSuccess();
            else {
                this.production || g(this.type + ": WebGL context could not be created"), this.state.isActive = !1, this.onError && this.onError();
                return
            }
            this.initRenderer()
        }
        initState() {
            this.state = {
                isActive: !0,
                isContextLost: !0,
                drawingEnabled: !0,
                forceRender: !1,
                currentProgramID: null,
                currentGeometryID: null,
                forceBufferUpdate: !1,
                depthTest: null,
                blending: null,
                cullFace: null,
                frameBufferID: null,
                scenePassIndex: null,
                activeTexture: null,
                unpackAlignment: null,
                flipY: null,
                premultiplyAlpha: null
            }
        }
        initCallbackQueueManager() {
            this.nextRender = new We
        }
        initRenderer() {
            this.planes = [], this.renderTargets = [], this.shaderPasses = [], this.state.isContextLost = !1, this.state.maxTextureSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), this.initCallbackQueueManager(), this.setBlendFunc(), this.setDepthFunc(), this.setDepthTest(!0), this.cache = new Ve, this.scene = new Ue(this), this.getExtensions(), this._contextLostHandler = this.contextLost.bind(this), this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1), this._contextRestoredHandler = this.contextRestored.bind(this), this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
        }
        getExtensions() {
            this.extensions = [], this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"), this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"), this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"), this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"), this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"), this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"), this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
        }
        contextLost(e) {
            this.state.isContextLost = !0, this.state.isActive && (e.preventDefault(), this.nextRender.add(() => this.onContextLost && this.onContextLost()))
        }
        restoreContext() {
            this.state.isActive && (this.initState(), this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (!this.gl && !this.production ? g(this.type + ": Could not restore the context because the context is not defined") : !this.extensions.WEBGL_lose_context && !this.production && g(this.type + ": Could not restore the context because the restore context extension is not defined"), this.onError && this.onError()))
        }
        isContextexFullyRestored() {
            let e = !0;
            for (let t = 0; t < this.renderTargets.length; t++) {
                this.renderTargets[t].textures[0]._canDraw || (e = !1);
                break
            }
            if (e)
                for (let t = 0; t < this.planes.length; t++)
                    if (this.planes[t]._canDraw) {
                        for (let s = 0; s < this.planes[t].textures.length; s++)
                            if (!this.planes[t].textures[s]._canDraw) {
                                e = !1;
                                break
                            }
                    } else {
                        e = !1;
                        break
                    }
            if (e)
                for (let t = 0; t < this.shaderPasses.length; t++)
                    if (this.shaderPasses[t]._canDraw) {
                        for (let s = 0; s < this.shaderPasses[t].textures.length; s++)
                            if (!this.shaderPasses[t].textures[s]._canDraw) {
                                e = !1;
                                break
                            }
                    } else {
                        e = !1;
                        break
                    }
            return e
        }
        contextRestored() {
            this.getExtensions(), this.setBlendFunc(), this.setDepthFunc(), this.setDepthTest(!0), this.cache.clear(), this.scene.initStacks();
            for (let t = 0; t < this.renderTargets.length; t++) this.renderTargets[t]._restoreContext();
            for (let t = 0; t < this.planes.length; t++) this.planes[t]._restoreContext();
            for (let t = 0; t < this.shaderPasses.length; t++) this.shaderPasses[t]._restoreContext();
            const e = this.nextRender.add(() => {
                this.isContextexFullyRestored() && (e.keep = !1, this.state.isContextLost = !1, this.onContextRestored && this.onContextRestored(), this.onSceneChange(), this.needRender())
            }, !0)
        }
        setPixelRatio(e) {
            this.pixelRatio = e
        }
        setSize() {
            if (!this.gl) return;
            const e = this.container.getBoundingClientRect();
            this._boundingRect = {
                width: e.width * this.pixelRatio,
                height: e.height * this.pixelRatio,
                top: e.top * this.pixelRatio,
                left: e.left * this.pixelRatio
            }, this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px", this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px", this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale), this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
        }
        resize() {
            for (let e = 0; e < this.planes.length; e++) this.planes[e]._canDraw && this.planes[e].resize();
            for (let e = 0; e < this.shaderPasses.length; e++) this.shaderPasses[e]._canDraw && this.shaderPasses[e].resize();
            for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e].resize();
            this.needRender()
        }
        clear() {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
        }
        clearDepth() {
            this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
        }
        clearColor() {
            this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        }
        bindFrameBuffer(e, t) {
            let s = null;
            e ? (s = e.index, s !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer), this.gl.viewport(0, 0, e._size.width, e._size.height), e._shouldClear && !t && this.clear())) : this.state.frameBufferID !== null && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)), this.state.frameBufferID = s
        }
        setDepthTest(e) {
            e && !this.state.depthTest ? (this.state.depthTest = e, this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e, this.gl.disable(this.gl.DEPTH_TEST))
        }
        setDepthFunc() {
            this.gl.depthFunc(this.gl.LEQUAL)
        }
        setBlending(e = !1) {
            e && !this.state.blending ? (this.state.blending = e, this.gl.enable(this.gl.BLEND)) : !e && this.state.blending && (this.state.blending = e, this.gl.disable(this.gl.BLEND))
        }
        setBlendFunc() {
            this.gl.enable(this.gl.BLEND), this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }
        setFaceCulling(e) {
            if (this.state.cullFace !== e)
                if (this.state.cullFace = e, e === "none") this.gl.disable(this.gl.CULL_FACE);
                else {
                    const t = e === "front" ? this.gl.FRONT : this.gl.BACK;
                    this.gl.enable(this.gl.CULL_FACE), this.gl.cullFace(t)
                }
        }
        useProgram(e) {
            (this.state.currentProgramID === null || this.state.currentProgramID !== e.id) && (this.gl.useProgram(e.program), this.state.currentProgramID = e.id)
        }
        removePlane(e) {
            this.gl && (this.planes = this.planes.filter(t => t.uuid !== e.uuid), this.scene.removePlane(e), e = null, this.gl && this.clear(), this.onSceneChange())
        }
        removeRenderTarget(e) {
            if (!this.gl) return;
            let t = this.planes.find(s => s.type !== "PingPongPlane" && s.target && s.target.uuid === e.uuid);
            for (let s = 0; s < this.planes.length; s++) this.planes[s].target && this.planes[s].target.uuid === e.uuid && (this.planes[s].target = null);
            this.renderTargets = this.renderTargets.filter(s => s.uuid !== e.uuid);
            for (let s = 0; s < this.renderTargets.length; s++) this.renderTargets[s].index = s;
            e = null, this.gl && this.clear(), t && this.scene.resetPlaneStacks(), this.onSceneChange()
        }
        removeShaderPass(e) {
            this.gl && (this.shaderPasses = this.shaderPasses.filter(t => t.uuid !== e.uuid), this.scene.removeShaderPass(e), e = null, this.gl && this.clear(), this.onSceneChange())
        }
        enableDrawing() {
            this.state.drawingEnabled = !0
        }
        disableDrawing() {
            this.state.drawingEnabled = !1
        }
        needRender() {
            this.state.forceRender = !0
        }
        render() {
            this.gl && (this.clear(), this.state.currentGeometryID = null, this.scene.draw())
        }
        deletePrograms() {
            for (let e = 0; e < this.cache.programs.length; e++) {
                const t = this.cache.programs[e];
                this.gl.deleteProgram(t.program)
            }
        }
        dispose() {
            if (!this.gl) return;
            for (this.state.isActive = !1; this.planes.length > 0;) this.removePlane(this.planes[0]);
            for (; this.shaderPasses.length > 0;) this.removeShaderPass(this.shaderPasses[0]);
            for (; this.renderTargets.length > 0;) this.removeRenderTarget(this.renderTargets[0]);
            let e = this.nextRender.add(() => {
                this.planes.length === 0 && this.shaderPasses.length === 0 && this.renderTargets.length === 0 && (e.keep = !1, this.deletePrograms(), this.clear(), this.canvas.removeEventListener("webgllost", this._contextLostHandler, !1), this.canvas.removeEventListener("webglrestored", this._contextRestoredHandler, !1), this.gl && this.extensions.WEBGL_lose_context && this.extensions.WEBGL_lose_context.loseContext(), this.canvas.width = this.canvas.width, this.gl = null, this.container.removeChild(this.canvas), this.container = null, this.canvas = null, this.onDisposed && this.onDisposed())
            }, !0)
        }
    }
    class Ne {
        constructor({
            xOffset: e = 0,
            yOffset: t = 0,
            lastXDelta: s = 0,
            lastYDelta: i = 0,
            shouldWatch: r = !0,
            onScroll: a = () => {}
        } = {}) {
            this.xOffset = e, this.yOffset = t, this.lastXDelta = s, this.lastYDelta = i, this.shouldWatch = r, this.onScroll = a, this.handler = this.scroll.bind(this, !0), this.shouldWatch && window.addEventListener("scroll", this.handler, {
                passive: !0
            })
        }
        scroll() {
            this.updateScrollValues(window.pageXOffset, window.pageYOffset)
        }
        updateScrollValues(e, t) {
            const s = this.xOffset;
            this.xOffset = e, this.lastXDelta = s - this.xOffset;
            const i = this.yOffset;
            this.yOffset = t, this.lastYDelta = i - this.yOffset, this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
        }
        dispose() {
            this.shouldWatch && window.removeEventListener("scroll", this.handler, {
                passive: !0
            })
        }
    }
    class He {
        constructor({
            container: e,
            alpha: t = !0,
            premultipliedAlpha: s = !1,
            antialias: i = !0,
            depth: r = !0,
            failIfMajorPerformanceCaveat: a = !0,
            preserveDrawingBuffer: h = !1,
            stencil: o = !1,
            autoResize: l = !0,
            autoRender: d = !0,
            watchScroll: c = !0,
            pixelRatio: f = window.devicePixelRatio || 1,
            renderingScale: u = 1,
            production: p = !1
        } = {}) {
            this.type = "Curtains", this._autoResize = l, this._autoRender = d, this._watchScroll = c, this.pixelRatio = f, u = isNaN(u) ? 1 : parseFloat(u), this._renderingScale = Math.max(.25, Math.min(1, u)), this.premultipliedAlpha = s, this.alpha = t, this.antialias = i, this.depth = r, this.failIfMajorPerformanceCaveat = a, this.preserveDrawingBuffer = h, this.stencil = o, this.production = p, this.errors = !1, e ? this.setContainer(e) : this.production || g(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
        }
        setContainer(e) {
            if (e)
                if (typeof e == "string")
                    if (e = document.getElementById(e), e) this.container = e;
                    else {
                        let t = document.createElement("div");
                        t.setAttribute("id", "curtains-canvas"), document.body.appendChild(t), this.container = t, this.production || g('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                    }
            else e instanceof Element && (this.container = e);
            else {
                let t = document.createElement("div");
                t.setAttribute("id", "curtains-canvas"), document.body.appendChild(t), this.container = t, this.production || g('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
            }
            this._initCurtains()
        }
        _initCurtains() {
            this.planes = [], this.renderTargets = [], this.shaderPasses = [], this._initRenderer(), this.gl && (this._initScroll(), this._setSize(), this._addListeners(), this.container.appendChild(this.canvas), this._animationFrameID = null, this._autoRender && this._animate())
        }
        _initRenderer() {
            this.renderer = new Be({
                alpha: this.alpha,
                antialias: this.antialias,
                premultipliedAlpha: this.premultipliedAlpha,
                depth: this.depth,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                stencil: this.stencil,
                container: this.container,
                pixelRatio: this.pixelRatio,
                renderingScale: this._renderingScale,
                production: this.production,
                onError: () => this._onRendererError(),
                onSuccess: () => this._onRendererSuccess(),
                onContextLost: () => this._onRendererContextLost(),
                onContextRestored: () => this._onRendererContextRestored(),
                onDisposed: () => this._onRendererDisposed(),
                onSceneChange: () => this._keepSync()
            }), this.gl = this.renderer.gl, this.canvas = this.renderer.canvas
        }
        restoreContext() {
            this.renderer.restoreContext()
        }
        _animate() {
            this.render(), this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
        }
        enableDrawing() {
            this.renderer.enableDrawing()
        }
        disableDrawing() {
            this.renderer.disableDrawing()
        }
        needRender() {
            this.renderer.needRender()
        }
        nextRender(e, t = !1) {
            return this.renderer.nextRender.add(e, t)
        }
        clear() {
            this.renderer && this.renderer.clear()
        }
        clearDepth() {
            this.renderer && this.renderer.clearDepth()
        }
        clearColor() {
            this.renderer && this.renderer.clearColor()
        }
        isWebGL2() {
            return this.gl ? this.renderer._isWebGL2 : !1
        }
        render() {
            this.renderer.nextRender.execute(), !(!this.renderer.state.drawingEnabled && !this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1), this._onRenderCallback && this._onRenderCallback(), this.renderer.render())
        }
        _addListeners() {
            this._resizeHandler = null, this._autoResize && (this._resizeHandler = this.resize.bind(this, !0), window.addEventListener("resize", this._resizeHandler, !1))
        }
        setPixelRatio(e, t) {
            this.pixelRatio = parseFloat(Math.max(e, 1)) || 1, this.renderer.setPixelRatio(e), this.resize(t)
        }
        _setSize() {
            this.renderer.setSize(), this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset, this._scrollManager.yOffset = window.pageYOffset)
        }
        getBoundingRect() {
            return this.renderer._boundingRect
        }
        resize(e) {
            this.gl && (this._setSize(), this.renderer.resize(), this.nextRender(() => {
                this._onAfterResizeCallback && e && this._onAfterResizeCallback()
            }))
        }
        _initScroll() {
            this._scrollManager = new Ne({
                xOffset: window.pageXOffset,
                yOffset: 0,
                lastXDelta: 0,
                lastYDelta: 0,
                shouldWatch: this._watchScroll,
                onScroll: (e, t) => this._updateScroll(e, t)
            })
        }
        _updateScroll(e, t) {
            for (let s = 0; s < this.planes.length; s++) this.planes[s].watchScroll && this.planes[s].updateScrollPosition(e, t);
            this.renderer.needRender(), this._onScrollCallback && this._onScrollCallback()
        }
        updateScrollValues(e, t) {
            this._scrollManager.updateScrollValues(e, t)
        }
        getScrollDeltas() {
            return {
                x: this._scrollManager.lastXDelta,
                y: this._scrollManager.lastYDelta
            }
        }
        getScrollValues() {
            return {
                x: this._scrollManager.xOffset,
                y: this._scrollManager.yOffset
            }
        }
        _keepSync() {
            this.planes = this.renderer.planes, this.shaderPasses = this.renderer.shaderPasses, this.renderTargets = this.renderer.renderTargets
        }
        lerp(e, t, s) {
            return Oe(e, t, s)
        }
        onAfterResize(e) {
            return e && (this._onAfterResizeCallback = e), this
        }
        onError(e) {
            return e && (this._onErrorCallback = e), this
        }
        _onRendererError() {
            setTimeout(() => {
                this._onErrorCallback && !this.errors && this._onErrorCallback(), this.errors = !0
            }, 0)
        }
        onSuccess(e) {
            return e && (this._onSuccessCallback = e), this
        }
        _onRendererSuccess() {
            setTimeout(() => {
                this._onSuccessCallback && this._onSuccessCallback()
            }, 0)
        }
        onContextLost(e) {
            return e && (this._onContextLostCallback = e), this
        }
        _onRendererContextLost() {
            this._onContextLostCallback && this._onContextLostCallback()
        }
        onContextRestored(e) {
            return e && (this._onContextRestoredCallback = e), this
        }
        _onRendererContextRestored() {
            this._onContextRestoredCallback && this._onContextRestoredCallback()
        }
        onRender(e) {
            return e && (this._onRenderCallback = e), this
        }
        onScroll(e) {
            return e && (this._onScrollCallback = e), this
        }
        dispose() {
            this.renderer.dispose()
        }
        _onRendererDisposed() {
            this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID), this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1), this._scrollManager && this._scrollManager.dispose()
        }
    }
    class Ge {
        constructor(e, t, s) {
            if (this.type = "Uniforms", !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                z(this.type + ": Renderer WebGL context is undefined", e);
                return
            }
            if (this.renderer = e, this.gl = e.gl, this.program = t, this.uniforms = {}, s)
                for (const i in s) {
                    const r = s[i];
                    this.uniforms[i] = {
                        name: r.name,
                        type: r.type,
                        value: r.value.clone && typeof r.value.clone == "function" ? r.value.clone() : r.value,
                        update: null
                    }
                }
        }
        handleUniformSetting(e) {
            switch (e.type) {
                case "1i":
                    e.update = this.setUniform1i.bind(this);
                    break;
                case "1iv":
                    e.update = this.setUniform1iv.bind(this);
                    break;
                case "1f":
                    e.update = this.setUniform1f.bind(this);
                    break;
                case "1fv":
                    e.update = this.setUniform1fv.bind(this);
                    break;
                case "2i":
                    e.update = this.setUniform2i.bind(this);
                    break;
                case "2iv":
                    e.update = this.setUniform2iv.bind(this);
                    break;
                case "2f":
                    e.update = this.setUniform2f.bind(this);
                    break;
                case "2fv":
                    e.update = this.setUniform2fv.bind(this);
                    break;
                case "3i":
                    e.update = this.setUniform3i.bind(this);
                    break;
                case "3iv":
                    e.update = this.setUniform3iv.bind(this);
                    break;
                case "3f":
                    e.update = this.setUniform3f.bind(this);
                    break;
                case "3fv":
                    e.update = this.setUniform3fv.bind(this);
                    break;
                case "4i":
                    e.update = this.setUniform4i.bind(this);
                    break;
                case "4iv":
                    e.update = this.setUniform4iv.bind(this);
                    break;
                case "4f":
                    e.update = this.setUniform4f.bind(this);
                    break;
                case "4fv":
                    e.update = this.setUniform4fv.bind(this);
                    break;
                case "mat2":
                    e.update = this.setUniformMatrix2fv.bind(this);
                    break;
                case "mat3":
                    e.update = this.setUniformMatrix3fv.bind(this);
                    break;
                case "mat4":
                    e.update = this.setUniformMatrix4fv.bind(this);
                    break;
                default:
                    this.renderer.production || g(this.type + ": This uniform type is not handled : ", e.type)
            }
        }
        setInternalFormat(e) {
            e.value.type === "Vec2" ? (e._internalFormat = "Vec2", e.lastValue = e.value.clone()) : e.value.type === "Vec3" ? (e._internalFormat = "Vec3", e.lastValue = e.value.clone()) : e.value.type === "Mat4" ? (e._internalFormat = "Mat4", e.lastValue = e.value.clone()) : e.value.type === "Quat" ? (e._internalFormat = "Quat", e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array", e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat", e.lastValue = e.value) : (e._internalFormat = "float", e.lastValue = e.value)
        }
        setUniforms() {
            if (this.uniforms)
                for (const e in this.uniforms) {
                    let t = this.uniforms[e];
                    t.location = this.gl.getUniformLocation(this.program, t.name), t._internalFormat || this.setInternalFormat(t), t.type || (t._internalFormat === "Vec2" ? t.type = "2f" : t._internalFormat === "Vec3" ? t.type = "3f" : t._internalFormat === "Mat4" ? t.type = "mat4" : t._internalFormat === "array" ? t.value.length === 4 ? (t.type = "4f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 4f (array of 4 floats) uniform type")) : t.value.length === 3 ? (t.type = "3f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 3f (array of 3 floats) uniform type")) : t.value.length === 2 && (t.type = "2f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 2f (array of 2 floats) uniform type")) : t._internalFormat === "mat" ? t.value.length === 16 ? (t.type = "mat4", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a mat4 (4x4 matrix array) uniform type")) : t.value.length === 9 ? (t.type = "mat3", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a mat3 (3x3 matrix array) uniform type")) : t.value.length === 4 && (t.type = "mat2", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (t.type = "1f", this.renderer.production || g(this.type + ": No uniform type declared for " + t.name + ", applied a 1f (float) uniform type"))), this.handleUniformSetting(t), t.update && t.update(t)
                }
        }
        updateUniforms() {
            if (this.uniforms)
                for (const e in this.uniforms) {
                    const t = this.uniforms[e];
                    let s = !1;
                    t._internalFormat === "Vec2" || t._internalFormat === "Vec3" || t._internalFormat === "Quat" ? t.value.equals(t.lastValue) || (s = !0, t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (s = !0, t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (s = !0, t.lastValue = t.value), s && t.update && t.update(t)
                }
        }
        setUniform1i(e) {
            this.gl.uniform1i(e.location, e.value)
        }
        setUniform1iv(e) {
            this.gl.uniform1iv(e.location, e.value)
        }
        setUniform1f(e) {
            this.gl.uniform1f(e.location, e.value)
        }
        setUniform1fv(e) {
            this.gl.uniform1fv(e.location, e.value)
        }
        setUniform2i(e) {
            e._internalFormat === "Vec2" ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
        }
        setUniform2iv(e) {
            e._internalFormat === "Vec2" ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
        }
        setUniform2f(e) {
            e._internalFormat === "Vec2" ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
        }
        setUniform2fv(e) {
            e._internalFormat === "Vec2" ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
        }
        setUniform3i(e) {
            e._internalFormat === "Vec3" ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
        }
        setUniform3iv(e) {
            e._internalFormat === "Vec3" ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
        }
        setUniform3f(e) {
            e._internalFormat === "Vec3" ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
        }
        setUniform3fv(e) {
            e._internalFormat === "Vec3" ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
        }
        setUniform4i(e) {
            e._internalFormat === "Quat" ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
        }
        setUniform4iv(e) {
            e._internalFormat === "Quat" ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
        }
        setUniform4f(e) {
            e._internalFormat === "Quat" ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
        }
        setUniform4fv(e) {
            e._internalFormat === "Quat" ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
        }
        setUniformMatrix2fv(e) {
            this.gl.uniformMatrix2fv(e.location, !1, e.value)
        }
        setUniformMatrix3fv(e) {
            this.gl.uniformMatrix3fv(e.location, !1, e.value)
        }
        setUniformMatrix4fv(e) {
            e._internalFormat === "Mat4" ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
        }
    }
    const ee = `
precision mediump float;
`.replace(/\n/g, ""),
        fe = `
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;
`.replace(/\n/g, ""),
        te = `
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
`.replace(/\n/g, ""),
        je = (ee + fe + te + `
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    vTextureCoord = aTextureCoord;
    vVertexPosition = aVertexPosition;
    
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}
`).replace(/\n/g, ""),
        Xe = (ee + te + `
void main() {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`).replace(/\n/g, ""),
        Ye = (ee + fe + te + `
void main() {
    vTextureCoord = aTextureCoord;
    vVertexPosition = aVertexPosition;
    
    gl_Position = vec4(aVertexPosition, 1.0);
}
`).replace(/\n/g, ""),
        qe = (ee + te + `
uniform sampler2D uRenderTexture;

void main() {
    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);
}
`).replace(/\n/g, "");
    let pe = 0;
    class ge {
        constructor(e, {
            parent: t,
            vertexShader: s,
            fragmentShader: i
        } = {}) {
            if (this.type = "Program", !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                z(this.type + ": Renderer WebGL context is undefined", e);
                return
            }
            this.renderer = e, this.gl = this.renderer.gl, this.parent = t, this.defaultVsCode = this.parent.type === "Plane" ? je : Ye, this.defaultFsCode = this.parent.type === "Plane" ? Xe : qe, s ? this.vsCode = s : (!this.renderer.production && this.parent.type === "Plane" && g(this.parent.type + ": No vertex shader provided, will use a default one"), this.vsCode = this.defaultVsCode), i ? this.fsCode = i : (this.renderer.production || g(this.parent.type + ": No fragment shader provided, will use a default one"), this.fsCode = this.defaultFsCode), this.compiled = !0, this.setupProgram()
        }
        createShader(e, t) {
            const s = this.gl.createShader(t);
            if (this.gl.shaderSource(s, e), this.gl.compileShader(s), !this.renderer.production && !this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
                const i = t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
                let a = this.gl.getShaderSource(s).split(`
`);
                for (let h = 0; h < a.length; h++) a[h] = h + 1 + ": " + a[h];
                return a = a.join(`
`), g(this.type + ": Errors occurred while compiling the", i, `:
`, this.gl.getShaderInfoLog(s)), z(a), g(this.type + ": Will use a default", i), this.createShader(t === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, t)
            }
            return s
        }
        useNewShaders() {
            this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER), (!this.vertexShader || !this.fragmentShader) && (this.renderer.production || g(this.type + ": Unable to find or compile the vertex or fragment shader"))
        }
        setupProgram() {
            let e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
            e ? (this.vertexShader = e.vertexShader, this.fragmentShader = e.fragmentShader, this.activeUniforms = e.activeUniforms, this.activeAttributes = e.activeAttributes, this.createProgram()) : (this.useNewShaders(), this.compiled && (this.createProgram(), this.renderer.cache.addProgram(this)))
        }
        createProgram() {
            if (pe++, this.id = pe, this.program = this.gl.createProgram(), this.gl.attachShader(this.program, this.vertexShader), this.gl.attachShader(this.program, this.fragmentShader), this.gl.linkProgram(this.program), !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
                g(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)), g(this.type + ": Will use default vertex and fragment shaders"), this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER), this.createProgram();
                return
            }
            if (this.gl.deleteShader(this.vertexShader), this.gl.deleteShader(this.fragmentShader), !this.activeUniforms || !this.activeAttributes) {
                this.activeUniforms = {
                    textures: [],
                    textureMatrices: []
                };
                const e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
                for (let s = 0; s < e; s++) {
                    const i = this.gl.getActiveUniform(this.program, s);
                    i.type === this.gl.SAMPLER_2D && this.activeUniforms.textures.push(i.name), i.type === this.gl.FLOAT_MAT4 && i.name !== "uMVMatrix" && i.name !== "uPMatrix" && this.activeUniforms.textureMatrices.push(i.name)
                }
                this.activeAttributes = [];
                const t = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
                for (let s = 0; s < t; s++) {
                    const i = this.gl.getActiveAttrib(this.program, s);
                    this.activeAttributes.push(i.name)
                }
            }
        }
        createUniforms(e) {
            this.uniformsManager = new Ge(this.renderer, this.program, e), this.setUniforms()
        }
        setUniforms() {
            this.renderer.useProgram(this), this.uniformsManager.setUniforms()
        }
        updateUniforms() {
            this.renderer.useProgram(this), this.uniformsManager.updateUniforms()
        }
    }
    class $e {
        constructor(e, {
            program: t = null,
            width: s = 1,
            height: i = 1
        } = {}) {
            if (this.type = "Geometry", !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                z(this.type + ": Renderer WebGL context is undefined", e);
                return
            }
            this.renderer = e, this.gl = this.renderer.gl, this.definition = {
                id: s * i + s,
                width: s,
                height: i
            }, this.setDefaultAttributes(), this.setVerticesUVs()
        }
        restoreContext(e) {
            this.program = null, this.setDefaultAttributes(), this.setVerticesUVs(), this.setProgram(e)
        }
        setDefaultAttributes() {
            this.attributes = {
                vertexPosition: {
                    name: "aVertexPosition",
                    size: 3,
                    isActive: !1
                },
                textureCoord: {
                    name: "aTextureCoord",
                    size: 3,
                    isActive: !1
                }
            }
        }
        setVerticesUVs() {
            const e = this.renderer.cache.getGeometryFromID(this.definition.id);
            e ? (this.attributes.vertexPosition.array = e.vertices, this.attributes.textureCoord.array = e.uvs) : (this.computeVerticesUVs(), this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
        }
        setProgram(e) {
            this.program = e, this.initAttributes(), this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(), this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(), this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)), this.initializeBuffers()
        }
        initAttributes() {
            for (const e in this.attributes) {
                if (this.attributes[e].isActive = this.program.activeAttributes.includes(this.attributes[e].name), !this.attributes[e].isActive) return;
                this.attributes[e].location = this.gl.getAttribLocation(this.program.program, this.attributes[e].name), this.attributes[e].buffer = this.gl.createBuffer(), this.attributes[e].numberOfItems = this.definition.width * this.definition.height * this.attributes[e].size * 2
            }
        }
        computeVerticesUVs() {
            this.attributes.vertexPosition.array = [], this.attributes.textureCoord.array = [];
            const e = this.attributes.vertexPosition.array,
                t = this.attributes.textureCoord.array;
            for (let s = 0; s < this.definition.height; s++) {
                const i = s / this.definition.height;
                for (let r = 0; r < this.definition.width; r++) {
                    const a = r / this.definition.width;
                    t.push(a), t.push(i), t.push(0), e.push((a - .5) * 2), e.push((i - .5) * 2), e.push(0), t.push(a + 1 / this.definition.width), t.push(i), t.push(0), e.push((a + 1 / this.definition.width - .5) * 2), e.push((i - .5) * 2), e.push(0), t.push(a), t.push(i + 1 / this.definition.height), t.push(0), e.push((a - .5) * 2), e.push((i + 1 / this.definition.height - .5) * 2), e.push(0), t.push(a), t.push(i + 1 / this.definition.height), t.push(0), e.push((a - .5) * 2), e.push((i + 1 / this.definition.height - .5) * 2), e.push(0), t.push(a + 1 / this.definition.width), t.push(i), t.push(0), e.push((a + 1 / this.definition.width - .5) * 2), e.push((i - .5) * 2), e.push(0), t.push(a + 1 / this.definition.width), t.push(i + 1 / this.definition.height), t.push(0), e.push((a + 1 / this.definition.width - .5) * 2), e.push((i + 1 / this.definition.height - .5) * 2), e.push(0)
                }
            }
        }
        initializeBuffers() {
            if (this.attributes) {
                for (const e in this.attributes) {
                    if (!this.attributes[e].isActive) return;
                    this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[e].array), this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
                }
                this.renderer.state.currentGeometryID = this.definition.id
            }
        }
        bindBuffers() {
            if (this._vao) this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
            else
                for (const e in this.attributes) {
                    if (!this.attributes[e].isActive) return;
                    this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
                }
            this.renderer.state.currentGeometryID = this.definition.id
        }
        draw() {
            this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
        }
        dispose() {
            this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao));
            for (const e in this.attributes) {
                if (!this.attributes[e].isActive) return;
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW), this.gl.deleteBuffer(this.attributes[e].buffer)
            }
            this.attributes = null, this.renderer.state.currentGeometryID = null
        }
    }
    class N {
        constructor(e = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) {
            this.type = "Mat4", this.elements = e
        }
        setFromArray(e) {
            for (let t = 0; t < this.elements.length; t++) this.elements[t] = e[t];
            return this
        }
        copy(e) {
            const t = e.elements;
            return this.elements[0] = t[0], this.elements[1] = t[1], this.elements[2] = t[2], this.elements[3] = t[3], this.elements[4] = t[4], this.elements[5] = t[5], this.elements[6] = t[6], this.elements[7] = t[7], this.elements[8] = t[8], this.elements[9] = t[9], this.elements[10] = t[10], this.elements[11] = t[11], this.elements[12] = t[12], this.elements[13] = t[13], this.elements[14] = t[14], this.elements[15] = t[15], this
        }
        clone() {
            return new N().copy(this)
        }
        multiply(e) {
            const t = this.elements,
                s = e.elements;
            let i = new N;
            return i.elements[0] = s[0] * t[0] + s[1] * t[4] + s[2] * t[8] + s[3] * t[12], i.elements[1] = s[0] * t[1] + s[1] * t[5] + s[2] * t[9] + s[3] * t[13], i.elements[2] = s[0] * t[2] + s[1] * t[6] + s[2] * t[10] + s[3] * t[14], i.elements[3] = s[0] * t[3] + s[1] * t[7] + s[2] * t[11] + s[3] * t[15], i.elements[4] = s[4] * t[0] + s[5] * t[4] + s[6] * t[8] + s[7] * t[12], i.elements[5] = s[4] * t[1] + s[5] * t[5] + s[6] * t[9] + s[7] * t[13], i.elements[6] = s[4] * t[2] + s[5] * t[6] + s[6] * t[10] + s[7] * t[14], i.elements[7] = s[4] * t[3] + s[5] * t[7] + s[6] * t[11] + s[7] * t[15], i.elements[8] = s[8] * t[0] + s[9] * t[4] + s[10] * t[8] + s[11] * t[12], i.elements[9] = s[8] * t[1] + s[9] * t[5] + s[10] * t[9] + s[11] * t[13], i.elements[10] = s[8] * t[2] + s[9] * t[6] + s[10] * t[10] + s[11] * t[14], i.elements[11] = s[8] * t[3] + s[9] * t[7] + s[10] * t[11] + s[11] * t[15], i.elements[12] = s[12] * t[0] + s[13] * t[4] + s[14] * t[8] + s[15] * t[12], i.elements[13] = s[12] * t[1] + s[13] * t[5] + s[14] * t[9] + s[15] * t[13], i.elements[14] = s[12] * t[2] + s[13] * t[6] + s[14] * t[10] + s[15] * t[14], i.elements[15] = s[12] * t[3] + s[13] * t[7] + s[14] * t[11] + s[15] * t[15], i
        }
        getInverse() {
            const e = this.elements,
                t = new N,
                s = t.elements;
            let i = e[0],
                r = e[1],
                a = e[2],
                h = e[3],
                o = e[4],
                l = e[5],
                d = e[6],
                c = e[7],
                f = e[8],
                u = e[9],
                p = e[10],
                m = e[11],
                w = e[12],
                R = e[13],
                _ = e[14],
                x = e[15],
                y = i * l - r * o,
                v = i * d - a * o,
                P = i * c - h * o,
                S = r * d - a * l,
                D = r * c - h * l,
                C = a * c - h * d,
                E = f * R - u * w,
                M = f * _ - p * w,
                I = f * x - m * w,
                H = u * _ - p * R,
                G = u * x - m * R,
                j = p * x - m * _,
                A = y * j - v * G + P * H + S * I - D * M + C * E;
            return A ? (A = 1 / A, s[0] = (l * j - d * G + c * H) * A, s[1] = (a * G - r * j - h * H) * A, s[2] = (R * C - _ * D + x * S) * A, s[3] = (p * D - u * C - m * S) * A, s[4] = (d * I - o * j - c * M) * A, s[5] = (i * j - a * I + h * M) * A, s[6] = (_ * P - w * C - x * v) * A, s[7] = (f * C - p * P + m * v) * A, s[8] = (o * G - l * I + c * E) * A, s[9] = (r * I - i * G - h * E) * A, s[10] = (w * D - R * P + x * y) * A, s[11] = (u * P - f * D - m * y) * A, s[12] = (l * M - o * H - d * E) * A, s[13] = (i * H - r * M + a * E) * A, s[14] = (R * v - w * S - _ * y) * A, s[15] = (f * S - u * v + p * y) * A, t) : null
        }
        scale(e) {
            let t = this.elements;
            return t[0] *= e.x, t[1] *= e.x, t[2] *= e.x, t[3] *= e.x, t[4] *= e.y, t[5] *= e.y, t[6] *= e.y, t[7] *= e.y, t[8] *= e.z, t[9] *= e.z, t[10] *= e.z, t[11] *= e.z, this
        }
        compose(e, t, s) {
            let i = this.elements;
            const r = t.elements[0],
                a = t.elements[1],
                h = t.elements[2],
                o = t.elements[3],
                l = r + r,
                d = a + a,
                c = h + h,
                f = r * l,
                u = r * d,
                p = r * c,
                m = a * d,
                w = a * c,
                R = h * c,
                _ = o * l,
                x = o * d,
                y = o * c,
                v = s.x,
                P = s.y,
                S = s.z;
            return i[0] = (1 - (m + R)) * v, i[1] = (u + y) * v, i[2] = (p - x) * v, i[3] = 0, i[4] = (u - y) * P, i[5] = (1 - (f + R)) * P, i[6] = (w + _) * P, i[7] = 0, i[8] = (p + x) * S, i[9] = (w - _) * S, i[10] = (1 - (f + m)) * S, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
        }
        composeFromOrigin(e, t, s, i) {
            let r = this.elements;
            const a = t.elements[0],
                h = t.elements[1],
                o = t.elements[2],
                l = t.elements[3],
                d = a + a,
                c = h + h,
                f = o + o,
                u = a * d,
                p = a * c,
                m = a * f,
                w = h * c,
                R = h * f,
                _ = o * f,
                x = l * d,
                y = l * c,
                v = l * f,
                P = s.x,
                S = s.y,
                D = s.z,
                C = i.x,
                E = i.y,
                M = i.z,
                I = (1 - (w + _)) * P,
                H = (p + v) * P,
                G = (m - y) * P,
                j = (p - v) * S,
                A = (1 - (u + _)) * S,
                ze = (R + x) * S,
                Le = (m + y) * D,
                ke = (R - x) * D,
                De = (1 - (u + w)) * D;
            return r[0] = I, r[1] = H, r[2] = G, r[3] = 0, r[4] = j, r[5] = A, r[6] = ze, r[7] = 0, r[8] = Le, r[9] = ke, r[10] = De, r[11] = 0, r[12] = e.x + C - (I * C + j * E + Le * M), r[13] = e.y + E - (H * C + A * E + ke * M), r[14] = e.z + M - (G * C + ze * E + De * M), r[15] = 1, this
        }
    }
    class L {
        constructor(e = 0, t = e) {
            this.type = "Vec2", this._x = e, this._y = t
        }
        get x() {
            return this._x
        }
        get y() {
            return this._y
        }
        set x(e) {
            const t = e !== this._x;
            this._x = e, t && this._onChangeCallback && this._onChangeCallback()
        }
        set y(e) {
            const t = e !== this._y;
            this._y = e, t && this._onChangeCallback && this._onChangeCallback()
        }
        onChange(e) {
            return e && (this._onChangeCallback = e), this
        }
        set(e, t) {
            return this._x = e, this._y = t, this
        }
        add(e) {
            return this._x += e.x, this._y += e.y, this
        }
        addScalar(e) {
            return this._x += e, this._y += e, this
        }
        sub(e) {
            return this._x -= e.x, this._y -= e.y, this
        }
        subScalar(e) {
            return this._x -= e, this._y -= e, this
        }
        multiply(e) {
            return this._x *= e.x, this._y *= e.y, this
        }
        multiplyScalar(e) {
            return this._x *= e, this._y *= e, this
        }
        copy(e) {
            return this._x = e.x, this._y = e.y, this
        }
        clone() {
            return new L(this._x, this._y)
        }
        sanitizeNaNValuesWith(e) {
            return this._x = isNaN(this._x) ? e.x : parseFloat(this._x), this._y = isNaN(this._y) ? e.y : parseFloat(this._y), this
        }
        max(e) {
            return this._x = Math.max(this._x, e.x), this._y = Math.max(this._y, e.y), this
        }
        min(e) {
            return this._x = Math.min(this._x, e.x), this._y = Math.min(this._y, e.y), this
        }
        equals(e) {
            return this._x === e.x && this._y === e.y
        }
        normalize() {
            let e = this._x * this._x + this._y * this._y;
            return e > 0 && (e = 1 / Math.sqrt(e)), this._x *= e, this._y *= e, this
        }
        dot(e) {
            return this._x * e.x + this._y * e.y
        }
    }
    class T {
        constructor(e = 0, t = e, s = e) {
            this.type = "Vec3", this._x = e, this._y = t, this._z = s
        }
        get x() {
            return this._x
        }
        get y() {
            return this._y
        }
        get z() {
            return this._z
        }
        set x(e) {
            const t = e !== this._x;
            this._x = e, t && this._onChangeCallback && this._onChangeCallback()
        }
        set y(e) {
            const t = e !== this._y;
            this._y = e, t && this._onChangeCallback && this._onChangeCallback()
        }
        set z(e) {
            const t = e !== this._z;
            this._z = e, t && this._onChangeCallback && this._onChangeCallback()
        }
        onChange(e) {
            return e && (this._onChangeCallback = e), this
        }
        set(e, t, s) {
            return this._x = e, this._y = t, this._z = s, this
        }
        add(e) {
            return this._x += e.x, this._y += e.y, this._z += e.z, this
        }
        addScalar(e) {
            return this._x += e, this._y += e, this._z += e, this
        }
        sub(e) {
            return this._x -= e.x, this._y -= e.y, this._z -= e.z, this
        }
        subScalar(e) {
            return this._x -= e, this._y -= e, this._z -= e, this
        }
        multiply(e) {
            return this._x *= e.x, this._y *= e.y, this._z *= e.z, this
        }
        multiplyScalar(e) {
            return this._x *= e, this._y *= e, this._z *= e, this
        }
        copy(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this
        }
        clone() {
            return new T(this._x, this._y, this._z)
        }
        sanitizeNaNValuesWith(e) {
            return this._x = isNaN(this._x) ? e.x : parseFloat(this._x), this._y = isNaN(this._y) ? e.y : parseFloat(this._y), this._z = isNaN(this._z) ? e.z : parseFloat(this._z), this
        }
        max(e) {
            return this._x = Math.max(this._x, e.x), this._y = Math.max(this._y, e.y), this._z = Math.max(this._z, e.z), this
        }
        min(e) {
            return this._x = Math.min(this._x, e.x), this._y = Math.min(this._y, e.y), this._z = Math.min(this._z, e.z), this
        }
        equals(e) {
            return this._x === e.x && this._y === e.y && this._z === e.z
        }
        normalize() {
            let e = this._x * this._x + this._y * this._y + this._z * this._z;
            return e > 0 && (e = 1 / Math.sqrt(e)), this._x *= e, this._y *= e, this._z *= e, this
        }
        dot(e) {
            return this._x * e.x + this._y * e.y + this._z * e.z
        }
        applyMat4(e) {
            const t = this._x,
                s = this._y,
                i = this._z,
                r = e.elements;
            let a = r[3] * t + r[7] * s + r[11] * i + r[15];
            return a = a || 1, this._x = (r[0] * t + r[4] * s + r[8] * i + r[12]) / a, this._y = (r[1] * t + r[5] * s + r[9] * i + r[13]) / a, this._z = (r[2] * t + r[6] * s + r[10] * i + r[14]) / a, this
        }
        applyQuat(e) {
            const t = this._x,
                s = this._y,
                i = this._z,
                r = e.elements[0],
                a = e.elements[1],
                h = e.elements[2],
                o = e.elements[3],
                l = o * t + a * i - h * s,
                d = o * s + h * t - r * i,
                c = o * i + r * s - a * t,
                f = -r * t - a * s - h * i;
            return this._x = l * o + f * -r + d * -h - c * -a, this._y = d * o + f * -a + c * -r - l * -h, this._z = c * o + f * -h + l * -a - d * -r, this
        }
        project(e) {
            return this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix), this
        }
        unproject(e) {
            return this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(e.worldMatrix), this
        }
    }
    const oe = new L,
        Qe = new T,
        Ze = new N;
    class q {
        constructor(e, {
            isFBOTexture: t = !1,
            fromTexture: s = !1,
            loader: i,
            sampler: r,
            floatingPoint: a = "none",
            premultiplyAlpha: h = !1,
            anisotropy: o = 1,
            generateMipmap: l = null,
            wrapS: d,
            wrapT: c,
            minFilter: f,
            magFilter: u
        } = {}) {
            if (this.type = "Texture", e = e && e.renderer || e, !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                e.production || z(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined");
                return
            }
            if (this.renderer = e, this.gl = this.renderer.gl, this.uuid = he(), this._globalParameters = {
                    unpackAlignment: 4,
                    flipY: !t,
                    premultiplyAlpha: !1,
                    shouldPremultiplyAlpha: h,
                    floatingPoint: a,
                    type: this.gl.UNSIGNED_BYTE,
                    internalFormat: this.gl.RGBA,
                    format: this.gl.RGBA
                }, this.parameters = {
                    anisotropy: o,
                    generateMipmap: l,
                    wrapS: d || this.gl.CLAMP_TO_EDGE,
                    wrapT: c || this.gl.CLAMP_TO_EDGE,
                    minFilter: f || this.gl.LINEAR,
                    magFilter: u || this.gl.LINEAR,
                    _shouldUpdate: !0
                }, this._initState(), this.sourceType = t ? "fbo" : "empty", this._useCache = !0, this._samplerName = r, this._sampler = {
                    isActive: !1,
                    isTextureBound: !1,
                    texture: this.gl.createTexture()
                }, this._textureMatrix = {
                    matrix: new N,
                    isActive: !1
                }, this._size = {
                    width: 1,
                    height: 1
                }, this.scale = new L(1), this.scale.onChange(() => this.resize()), this.offset = new L, this.offset.onChange(() => this.resize()), this._loader = i, this._sourceLoaded = !1, this._uploaded = !1, this._willUpdate = !1, this.shouldUpdate = !1, this._forceUpdate = !1, this.userData = {}, this._canDraw = !1, s) {
                this._copyOnInit = !0, this._copiedFrom = s;
                return
            }
            this._copyOnInit = !1, this._initTexture()
        }
        _initState() {
            this._state = {
                anisotropy: 1,
                generateMipmap: !1,
                wrapS: null,
                wrapT: null,
                minFilter: null,
                magFilter: this.gl.LINEAR
            }
        }
        _initTexture() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.sourceType === "empty" && (this._globalParameters.flipY = !1, this._updateGlobalTexParameters(), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), this._canDraw = !0)
        }
        _restoreFromTexture() {
            this._copyOnInit || this._initTexture(), this._parent && (this._setTextureUniforms(), this._setSize()), this.copy(this._copiedFrom), this._canDraw = !0
        }
        _restoreContext() {
            if (this._canDraw = !1, this._sampler.texture = this.gl.createTexture(), this._sampler.isActive = !1, this._sampler.isTextureBound = !1, this._textureMatrix.isActive = !1, this._initState(), this._state.generateMipmap = !1, this.parameters._shouldUpdate = !0, !this._copiedFrom) this._initTexture(), this._parent && this._setParent(), this.source && (this.setSource(this.source), this.sourceType === "image" ? this.renderer.cache.addTexture(this) : this.needUpdate()), this._canDraw = !0;
            else {
                const e = this.renderer.nextRender.add(() => {
                    this._copiedFrom._canDraw && (this._restoreFromTexture(), e.keep = !1)
                }, !0)
            }
        }
        addParent(e) {
            if (!e || e.type !== "Plane" && e.type !== "PingPongPlane" && e.type !== "ShaderPass" && e.type !== "RenderTarget") {
                this.renderer.production || g(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent");
                return
            }
            this._parent = e, this.index = this._parent.textures.length, this._parent.textures.push(this), this._setParent()
        }
        _setParent() {
            if (this._sampler.name = this._samplerName || "uSampler" + this.index, this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index, this._parent._program) {
                if (!this._parent._program.compiled) {
                    this.renderer.production || g(this.type + ": Unable to create the texture because the program is not valid");
                    return
                }
                if (this._setTextureUniforms(), this._copyOnInit) {
                    const e = this.renderer.nextRender.add(() => {
                        this._copiedFrom._canDraw && this._copiedFrom._uploaded && (this.copy(this._copiedFrom), e.keep = !1)
                    }, !0);
                    return
                }
                this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
                    width: this._parent._boundingRect.document.width,
                    height: this._parent._boundingRect.document.height
                }, this._setSize()
            } else this._parent.type === "RenderTarget" && (this._size = {
                width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
                height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
            }, this._upload(), this._updateTexParameters(), this._canDraw = !0)
        }
        hasParent() {
            return !!this._parent
        }
        _setTextureUniforms() {
            const e = this._parent._program.activeUniforms;
            for (let t = 0; t < e.textures.length; t++) e.textures[t] === this._sampler.name && (this._sampler.isActive = !0, this.renderer.useProgram(this._parent._program), this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name), e.textureMatrices.find(i => i === this._textureMatrix.name) && (this._textureMatrix.isActive = !0, this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name)), this.gl.uniform1i(this._sampler.location, this.index))
        }
        copy(e) {
            if (!e || e.type !== "Texture") {
                this.renderer.production || g(this.type + ": Unable to set the texture from texture:", e);
                return
            }
            this._globalParameters = Object.assign({}, e._globalParameters), this._state = Object.assign({}, e._state), this.parameters.generateMipmap = e.parameters.generateMipmap, this._state.generateMipmap = null, this._size = e._size, !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(), this._sourceLoaded = e._sourceLoaded, !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(), this._uploaded = e._uploaded, this.sourceType = e.sourceType, this.source = e.source, this._videoFrameCallbackID = e._videoFrameCallbackID, this._sampler.texture = e._sampler.texture, this._copiedFrom = e, this._parent && this._parent._program && (!this._canDraw || !this._textureMatrix.matrix) && (this._setSize(), this._canDraw = !0), this._updateTexParameters(), this.renderer.needRender()
        }
        setSource(e) {
            this._sourceLoaded || this.renderer.nextRender.add(() => this._onSourceLoadedCallback && this._onSourceLoadedCallback());
            const t = e.tagName.toUpperCase() === "IMG" ? "image" : e.tagName.toLowerCase();
            if ((t === "video" || t === "canvas") && (this._useCache = !1), this._useCache) {
                const s = this.renderer.cache.getTextureFromSource(e);
                if (s && s.uuid !== this.uuid) {
                    this._uploaded || (this.renderer.nextRender.add(() => this._onSourceUploadedCallback && this._onSourceUploadedCallback()), this._uploaded = !0), this.copy(s), this.resize();
                    return
                }
            }
            if (this.sourceType === "empty" || this.sourceType !== t)
                if (t === "video") this._willUpdate = !1, this.shouldUpdate = !0;
                else if (t === "canvas") this._willUpdate = !0, this.shouldUpdate = !0;
            else if (t === "image") this._willUpdate = !1, this.shouldUpdate = !1;
            else {
                this.renderer.production || g(this.type + ": this HTML tag could not be converted into a texture:", e.tagName);
                return
            }
            this.source = e, this.sourceType = t, this._size = {
                width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                height: this.source.naturalHeight || this.source.height || this.source.videoHeight
            }, this._sourceLoaded = !0, this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.resize(), this._globalParameters.flipY = !0, this._globalParameters.premultiplyAlpha = this._globalParameters.shouldPremultiplyAlpha, this.sourceType === "image" && (this.parameters.generateMipmap = this.parameters.generateMipmap || this.parameters.generateMipmap === null, this.parameters._shouldUpdate = this.parameters.generateMipmap, this._state.generateMipmap = !1, this._upload()), this.renderer.needRender()
        }
        _updateGlobalTexParameters() {
            this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment), this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment), this.renderer.state.flipY !== this._globalParameters.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY), this.renderer.state.flipY = this._globalParameters.flipY), this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha), this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha), this._globalParameters.floatingPoint === "half-float" ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || g(this.type + ": could not use half-float textures because the extension is not available") : this._globalParameters.floatingPoint === "float" && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || g(this.type + ": could not use float textures because the extension is not available"))
        }
        _updateTexParameters() {
            this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(), this.parameters.wrapS !== this._state.wrapS && (!this.renderer._isWebGL2 && (!B(this._size.width) || !B(this._size.height)) && (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || g(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, `
gl.CLAMP_TO_EDGE wrapping will be used instead`), this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS), this._state.wrapS = this.parameters.wrapS), this.parameters.wrapT !== this._state.wrapT && (!this.renderer._isWebGL2 && (!B(this._size.width) || !B(this._size.height)) && (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || g(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, `
gl.CLAMP_TO_EDGE wrapping will be used instead`), this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT), this._state.wrapT = this.parameters.wrapT), this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (!this.renderer._isWebGL2 && (!B(this._size.width) || !B(this._size.height)) ? this.parameters.generateMipmap = !1 : this.gl.generateMipmap(this.gl.TEXTURE_2D), this._state.generateMipmap = this.parameters.generateMipmap), this.parameters.minFilter !== this._state.minFilter && (!this.renderer._isWebGL2 && (!B(this._size.width) || !B(this._size.height)) && (this.parameters.minFilter = this.gl.LINEAR), !this.parameters.generateMipmap && this.parameters.generateMipmap !== null && (this.parameters.minFilter = this.gl.LINEAR), this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || g(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, `
gl.LINEAR filtering will be used instead`), this.parameters.minFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter), this._state.minFilter = this.parameters.minFilter), this.parameters.magFilter !== this._state.magFilter && (!this.renderer._isWebGL2 && (!B(this._size.width) || !B(this._size.height)) && (this.parameters.magFilter = this.gl.LINEAR), this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || g(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, `
gl.LINEAR filtering will be used instead`), this.parameters.magFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter), this._state.magFilter = this.parameters.magFilter);
            const e = this.renderer.extensions.EXT_texture_filter_anisotropic;
            if (e && this.parameters.anisotropy !== this._state.anisotropy) {
                const t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)), this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy), this._state.anisotropy = this.parameters.anisotropy
            }
        }
        setWrapS(e) {
            this.parameters.wrapS !== e && (this.parameters.wrapS = e, this.parameters._shouldUpdate = !0)
        }
        setWrapT(e) {
            this.parameters.wrapT !== e && (this.parameters.wrapT = e, this.parameters._shouldUpdate = !0)
        }
        setMinFilter(e) {
            this.parameters.minFilter !== e && (this.parameters.minFilter = e, this.parameters._shouldUpdate = !0)
        }
        setMagFilter(e) {
            this.parameters.magFilter !== e && (this.parameters.magFilter = e, this.parameters._shouldUpdate = !0)
        }
        setAnisotropy(e) {
            e = isNaN(e) ? this.parameters.anisotropy : e, this.parameters.anisotropy !== e && (this.parameters.anisotropy = e, this.parameters._shouldUpdate = !0)
        }
        needUpdate() {
            this._forceUpdate = !0
        }
        _videoFrameCallback() {
            if (this._willUpdate = !0, this.source) this.source.requestVideoFrameCallback(() => this._videoFrameCallback());
            else {
                const e = this.renderer.nextRender.add(() => {
                    this.source && (e.keep = !1, this.source.requestVideoFrameCallback(() => this._videoFrameCallback()))
                }, !0)
            }
        }
        _upload() {
            this._updateGlobalTexParameters(), this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : this.sourceType === "fbo" && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null), this._uploaded || (this.renderer.nextRender.add(() => this._onSourceUploadedCallback && this._onSourceUploadedCallback()), this._uploaded = !0)
        }
        _getSizes() {
            if (this.sourceType === "fbo") return {
                parentWidth: this._parent._boundingRect.document.width,
                parentHeight: this._parent._boundingRect.document.height,
                sourceWidth: this._parent._boundingRect.document.width,
                sourceHeight: this._parent._boundingRect.document.height,
                xOffset: 0,
                yOffset: 0
            };
            const e = this._parent.scale ? oe.set(this._parent.scale.x, this._parent.scale.y) : oe.set(1, 1),
                t = this._parent._boundingRect.document.width * e.x,
                s = this._parent._boundingRect.document.height * e.y,
                i = this._size.width,
                r = this._size.height,
                a = i / r,
                h = t / s;
            let o = 0,
                l = 0;
            return h > a ? l = Math.min(0, s - t * (1 / a)) : h < a && (o = Math.min(0, t - s * a)), {
                parentWidth: t,
                parentHeight: s,
                sourceWidth: i,
                sourceHeight: r,
                xOffset: o,
                yOffset: l
            }
        }
        setScale(e) {
            if (!e.type || e.type !== "Vec2") {
                this.renderer.production || g(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e);
                return
            }
            e.sanitizeNaNValuesWith(this.scale).max(oe.set(.001, .001)), e.equals(this.scale) || (this.scale.copy(e), this.resize())
        }
        setOffset(e) {
            if (!e.type || e.type !== "Vec2") {
                this.renderer.production || g(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale);
                return
            }
            e.sanitizeNaNValuesWith(this.offset), e.equals(this.offset) || (this.offset.copy(e), this.resize())
        }
        _setSize() {
            if (this._parent && this._parent._program) {
                const e = this._getSizes();
                this._updateTextureMatrix(e)
            }
        }
        resize() {
            this.sourceType === "fbo" ? (this._size = {
                width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
                height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
            }, this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
                width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                height: this.source.naturalHeight || this.source.height || this.source.videoHeight
            }), this._setSize()
        }
        _updateTextureMatrix(e) {
            const t = Qe.set(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
            t.x /= this.scale.x, t.y /= this.scale.y, this._textureMatrix.matrix = Ze.setFromArray([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]), this._updateMatrixUniform()
        }
        _updateMatrixUniform() {
            this._textureMatrix.isActive && (this.renderer.useProgram(this._parent._program), this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements))
        }
        _onSourceLoaded(e) {
            this.setSource(e), this.sourceType === "image" && this.renderer.cache.addTexture(this)
        }
        _bindTexture() {
            this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.renderer.state.activeTexture = this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this._sampler.isTextureBound || (this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this._sampler.isTextureBound && this.renderer.needRender()))
        }
        _draw() {
            this._sampler.isActive && (this._bindTexture(), this.sourceType === "video" && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0), (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1, this._upload()), this.sourceType === "video" && (this._willUpdate = !1), this._forceUpdate = !1), this.parameters._shouldUpdate && (this._updateTexParameters(), this.parameters._shouldUpdate = !1)
        }
        onSourceLoaded(e) {
            return e && (this._onSourceLoadedCallback = e), this
        }
        onSourceUploaded(e) {
            return e && (this._onSourceUploadedCallback = e), this
        }
        _dispose(e = !1) {
            var s;
            this.sourceType === "video" || this.sourceType === "image" && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this), this.source = null) : this.sourceType === "canvas" && this.source && (this.source.width = (s = this.source) == null ? void 0 : s.width, this.source = null), this._parent = null, this.gl && !this._copiedFrom && (e || this.sourceType !== "image" || !this.renderer.state.isActive) && (this._canDraw = !1, this.renderer.cache.removeTexture(this), this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.deleteTexture(this._sampler.texture))
        }
    }
    class Je {
        constructor(e, t = "anonymous") {
            if (this.type = "TextureLoader", e = e && e.renderer || e, !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                z(this.type + ": Renderer WebGL context is undefined", e);
                return
            }
            this.renderer = e, this.gl = this.renderer.gl, this.crossOrigin = t, this.elements = []
        }
        _addElement(e, t, s, i) {
            const r = {
                source: e,
                texture: t,
                load: this._sourceLoaded.bind(this, e, t, s),
                error: this._sourceLoadError.bind(this, e, i)
            };
            return this.elements.push(r), r
        }
        _sourceLoadError(e, t, s) {
            t && t(e, s)
        }
        _sourceLoaded(e, t, s) {
            t._sourceLoaded || (t._onSourceLoaded(e), this._parent && (this._increment && this._increment(), this.renderer.nextRender.add(() => this._parent._onLoadingCallback && this._parent._onLoadingCallback(t))), s && s(t))
        }
        _getSourceType(e) {
            let t;
            return typeof e == "string" ? e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/) !== null ? t = "image" : e.match(/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/) !== null && (t = "video") : e.tagName.toUpperCase() === "IMG" ? t = "image" : e.tagName.toUpperCase() === "VIDEO" ? t = "video" : e.tagName.toUpperCase() === "CANVAS" && (t = "canvas"), t
        }
        _createImage(e) {
            if (typeof e == "string" || !e.hasAttribute("crossOrigin")) {
                const t = new Image;
                return t.crossOrigin = this.crossOrigin, typeof e == "string" ? t.src = e : (t.src = e.src, e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))), t
            } else return e
        }
        _createVideo(e) {
            if (typeof e == "string" || e.getAttribute("crossOrigin") === null) {
                const t = document.createElement("video");
                return t.crossOrigin = this.crossOrigin, typeof e == "string" ? t.src = e : (t.src = e.src, e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))), t
            } else return e
        }
        loadSource(e, t, s, i) {
            switch (this._getSourceType(e)) {
                case "image":
                    this.loadImage(e, t, s, i);
                    break;
                case "video":
                    this.loadVideo(e, t, s, i);
                    break;
                case "canvas":
                    this.loadCanvas(e, t, s);
                    break;
                default:
                    this._sourceLoadError(e, i, "this source could not be converted into a texture: " + e);
                    break
            }
        }
        loadSources(e, t, s, i) {
            for (let r = 0; r < e.length; r++) this.loadSource(e[r], t, s, i)
        }
        loadImage(e, t = {}, s, i) {
            const r = this.renderer.cache.getTextureFromSource(e);
            let a = Object.assign({}, t);
            if (this._parent && (a = Object.assign(a, this._parent._texturesOptions)), a.loader = this, r) {
                a.sampler = typeof e != "string" && e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : a.sampler, a.fromTexture = r;
                const d = new q(this.renderer, a);
                this._sourceLoaded(r.source, d, s), this._parent && this._addToParent(d, r.source, "image");
                return
            }
            const h = this._createImage(e);
            a.sampler = h.hasAttribute("data-sampler") ? h.getAttribute("data-sampler") : a.sampler;
            const o = new q(this.renderer, a),
                l = this._addElement(h, o, s, i);
            h.complete ? this._sourceLoaded(h, o, s) : h.decode ? h.decode().then(this._sourceLoaded.bind(this, h, o, s)).catch(() => {
                h.addEventListener("load", l.load, !1), h.addEventListener("error", l.error, !1)
            }) : (h.addEventListener("load", l.load, !1), h.addEventListener("error", l.error, !1)), this._parent && this._addToParent(o, h, "image")
        }
        loadImages(e, t, s, i) {
            for (let r = 0; r < e.length; r++) this.loadImage(e[r], t, s, i)
        }
        loadVideo(e, t = {}, s, i) {
            const r = this._createVideo(e);
            r.preload = !0, r.muted = !0, r.loop = !0, r.setAttribute("playsinline", ""), r.crossOrigin = this.crossOrigin;
            let a = Object.assign({}, t);
            this._parent && (a = Object.assign(t, this._parent._texturesOptions)), a.loader = this, a.sampler = r.hasAttribute("data-sampler") ? r.getAttribute("data-sampler") : a.sampler;
            const h = new q(this.renderer, a),
                o = this._addElement(r, h, s, i);
            r.addEventListener("canplaythrough", o.load, !1), r.addEventListener("error", o.error, !1), r.readyState >= r.HAVE_FUTURE_DATA && s && this._sourceLoaded(r, h, s), r.load(), this._addToParent && this._addToParent(h, r, "video"), "requestVideoFrameCallback" in HTMLVideoElement.prototype && (o.videoFrameCallback = h._videoFrameCallback.bind(h), h._videoFrameCallbackID = r.requestVideoFrameCallback(o.videoFrameCallback))
        }
        loadVideos(e, t, s, i) {
            for (let r = 0; r < e.length; r++) this.loadVideo(e[r], t, s, i)
        }
        loadCanvas(e, t = {}, s) {
            let i = Object.assign({}, t);
            this._parent && (i = Object.assign(t, this._parent._texturesOptions)), i.loader = this, i.sampler = e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : i.sampler;
            const r = new q(this.renderer, i);
            this._addElement(e, r, s, null), this._sourceLoaded(e, r, s), this._parent && this._addToParent(r, e, "canvas")
        }
        loadCanvases(e, t, s) {
            for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, s)
        }
        _removeSource(e) {
            const t = this.elements.find(s => s.texture.uuid === e.uuid);
            t && (e.sourceType === "image" ? t.source.removeEventListener("load", t.load, !1) : e.sourceType === "video" && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID), t.source.removeEventListener("canplaythrough", t.load, !1), t.source.pause(), t.source.removeAttribute("src"), t.source.load()), t.source.removeEventListener("error", t.error, !1))
        }
    }
    class Ke extends Je {
        constructor(e, t, {
            sourcesLoaded: s = 0,
            sourcesToLoad: i = 0,
            complete: r = !1,
            onComplete: a = () => {}
        } = {}) {
            super(e, t.crossOrigin), this.type = "PlaneTextureLoader", this._parent = t, this._parent.type !== "Plane" && this._parent.type !== "PingPongPlane" && this._parent.type !== "ShaderPass" && (g(this.type + ": Wrong parent type assigned to this loader"), this._parent = null), this.sourcesLoaded = s, this.sourcesToLoad = i, this.complete = r, this.onComplete = a
        }
        _setLoaderSize(e) {
            this.sourcesToLoad = e, this.sourcesToLoad === 0 && (this.complete = !0, this.renderer.nextRender.add(() => this.onComplete && this.onComplete()))
        }
        _increment() {
            this.sourcesLoaded++, this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0, this.renderer.nextRender.add(() => this.onComplete && this.onComplete()))
        }
        _addSourceToParent(e, t) {
            if (t === "image") {
                const s = this._parent.images;
                !s.find(r => r.src === e.src) && s.push(e)
            } else if (t === "video") {
                const s = this._parent.videos;
                !s.find(r => r.src === e.src) && s.push(e)
            } else if (t === "canvas") {
                const s = this._parent.canvases;
                !s.find(r => r.isSameNode(e)) && s.push(e)
            }
        }
        _addToParent(e, t, s) {
            this._addSourceToParent(t, s), this._parent && e.addParent(this._parent)
        }
    }
    class et {
        constructor(e, t = "Mesh", {
            vertexShaderID: s,
            fragmentShaderID: i,
            vertexShader: r,
            fragmentShader: a,
            uniforms: h = {},
            widthSegments: o = 1,
            heightSegments: l = 1,
            renderOrder: d = 0,
            depthTest: c = !0,
            cullFace: f = "back",
            texturesOptions: u = {},
            crossOrigin: p = "anonymous"
        } = {}) {
            if (this.type = t, e = e && e.renderer || e, (!e || e.type !== "Renderer") && (z(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", e), setTimeout(() => {
                    this._onErrorCallback && this._onErrorCallback()
                }, 0)), this.renderer = e, this.gl = this.renderer.gl, !this.gl) {
                this.renderer.production || z(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"), setTimeout(() => {
                    this._onErrorCallback && this._onErrorCallback()
                }, 0);
                return
            }
            this._canDraw = !1, this.renderOrder = d, this._depthTest = c, this.cullFace = f, this.cullFace !== "back" && this.cullFace !== "front" && this.cullFace !== "none" && (this.cullFace = "back"), this.textures = [], this._texturesOptions = Object.assign({
                premultiplyAlpha: !1,
                anisotropy: 1,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, u), this.crossOrigin = p, !r && s && document.getElementById(s) && (r = document.getElementById(s).innerHTML), !a && i && document.getElementById(i) && (a = document.getElementById(i).innerHTML), this._initMesh(), o = parseInt(o), l = parseInt(l), this._geometry = new $e(this.renderer, {
                width: o,
                height: l
            }), this._program = new ge(this.renderer, {
                parent: this,
                vertexShader: r,
                fragmentShader: a
            }), this._program.compiled ? (this._program.createUniforms(h), this.uniforms = this._program.uniformsManager.uniforms, this._geometry.setProgram(this._program), this.renderer.onSceneChange()) : this.renderer.nextRender.add(() => this._onErrorCallback && this._onErrorCallback())
        }
        _initMesh() {
            this.uuid = he(), this.loader = new Ke(this.renderer, this, {
                sourcesLoaded: 0,
                initSourcesToLoad: 0,
                complete: !1,
                onComplete: () => {
                    this._onReadyCallback && this._onReadyCallback(), this.renderer.needRender()
                }
            }), this.images = [], this.videos = [], this.canvases = [], this.userData = {}, this._canDraw = !0
        }
        _restoreContext() {
            this._canDraw = !1, this._matrices && (this._matrices = null), this._program = new ge(this.renderer, {
                parent: this,
                vertexShader: this._program.vsCode,
                fragmentShader: this._program.fsCode
            }), this._program.compiled && (this._geometry.restoreContext(this._program), this._program.createUniforms(this.uniforms), this.uniforms = this._program.uniformsManager.uniforms, this._programRestored())
        }
        setRenderTarget(e) {
            if (!e || e.type !== "RenderTarget") {
                this.renderer.production || g(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e);
                return
            }
            this.type === "Plane" && this.renderer.scene.removePlane(this), this.target = e, this.type === "Plane" && this.renderer.scene.addPlane(this)
        }
        setRenderOrder(e = 0) {
            e = isNaN(e) ? this.renderOrder : parseInt(e), e !== this.renderOrder && (this.renderOrder = e, this.renderer.scene.setPlaneRenderOrder(this))
        }
        createTexture(e = {}) {
            const t = new q(this.renderer, Object.assign(e, this._texturesOptions));
            return t.addParent(this), t
        }
        addTexture(e) {
            if (!e || e.type !== "Texture") {
                this.renderer.production || g(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture");
                return
            }
            e.addParent(this)
        }
        loadSources(e, t = {}, s, i) {
            for (let r = 0; r < e.length; r++) this.loadSource(e[r], t, s, i)
        }
        loadSource(e, t = {}, s, i) {
            this.loader.loadSource(e, Object.assign(t, this._texturesOptions), r => {
                s && s(r)
            }, (r, a) => {
                this.renderer.production || g(this.type + ": this HTML tag could not be converted into a texture:", r.tagName), i && i(r, a)
            })
        }
        loadImage(e, t = {}, s, i) {
            this.loader.loadImage(e, Object.assign(t, this._texturesOptions), r => {
                s && s(r)
            }, (r, a) => {
                this.renderer.production || g(this.type + `: There has been an error:
`, a, `
while loading this image:
`, r), i && i(r, a)
            })
        }
        loadVideo(e, t = {}, s, i) {
            this.loader.loadVideo(e, Object.assign(t, this._texturesOptions), r => {
                s && s(r)
            }, (r, a) => {
                this.renderer.production || g(this.type + `: There has been an error:
`, a, `
while loading this video:
`, r), i && i(r, a)
            })
        }
        loadCanvas(e, t = {}, s) {
            this.loader.loadCanvas(e, Object.assign(t, this._texturesOptions), i => {
                s && s(i)
            })
        }
        loadImages(e, t = {}, s, i) {
            for (let r = 0; r < e.length; r++) this.loadImage(e[r], t, s, i)
        }
        loadVideos(e, t = {}, s, i) {
            for (let r = 0; r < e.length; r++) this.loadVideo(e[r], t, s, i)
        }
        loadCanvases(e, t = {}, s) {
            for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, s)
        }
        playVideos() {
            for (let e = 0; e < this.textures.length; e++) {
                const t = this.textures[e];
                if (t.sourceType === "video") {
                    const s = t.source.play();
                    s !== void 0 && s.catch(i => {
                        this.renderer.production || g(this.type + ": Could not play the video : ", i)
                    })
                }
            }
        }
        _draw() {
            this.renderer.setDepthTest(this._depthTest), this.renderer.setFaceCulling(this.cullFace), this._program.updateUniforms(), this._geometry.bindBuffers(), this.renderer.state.forceBufferUpdate = !1;
            for (let e = 0; e < this.textures.length; e++)
                if (this.textures[e]._draw(), this.textures[e]._sampler.isActive && !this.textures[e]._sampler.isTextureBound) return;
            this._geometry.draw(), this.renderer.state.activeTexture = null, this._onAfterRenderCallback && this._onAfterRenderCallback()
        }
        onError(e) {
            return e && (this._onErrorCallback = e), this
        }
        onLoading(e) {
            return e && (this._onLoadingCallback = e), this
        }
        onReady(e) {
            return e && (this._onReadyCallback = e), this
        }
        onRender(e) {
            return e && (this._onRenderCallback = e), this
        }
        onAfterRender(e) {
            return e && (this._onAfterRenderCallback = e), this
        }
        remove() {
            this._canDraw = !1, this.target && this.renderer.bindFrameBuffer(null), this._dispose(), this.type === "Plane" ? this.renderer.removePlane(this) : this.type === "ShaderPass" && (this.target && (this.target._shaderPass = null, this.target.remove(), this.target = null), this.renderer.removeShaderPass(this))
        }
        _dispose() {
            if (this.gl) {
                this._geometry && this._geometry.dispose(), this.target && this.type === "ShaderPass" && (this.renderer.removeRenderTarget(this.target), this.textures.shift());
                for (let e = 0; e < this.textures.length; e++) this.textures[e]._dispose();
                this.textures = []
            }
        }
    }
    const me = new L,
        tt = new L;
    class st extends et {
        constructor(e, t, s = "DOMMesh", {
            widthSegments: i,
            heightSegments: r,
            renderOrder: a,
            depthTest: h,
            cullFace: o,
            uniforms: l,
            vertexShaderID: d,
            fragmentShaderID: c,
            vertexShader: f,
            fragmentShader: u,
            texturesOptions: p,
            crossOrigin: m
        } = {}) {
            d = d || t && t.getAttribute("data-vs-id"), c = c || t && t.getAttribute("data-fs-id"), super(e, s, {
                widthSegments: i,
                heightSegments: r,
                renderOrder: a,
                depthTest: h,
                cullFace: o,
                uniforms: l,
                vertexShaderID: d,
                fragmentShaderID: c,
                vertexShader: f,
                fragmentShader: u,
                texturesOptions: p,
                crossOrigin: m
            }), this.gl && (this.htmlElement = t, (!this.htmlElement || this.htmlElement.length === 0) && (this.renderer.production || g(this.type + ": The HTML element you specified does not currently exists in the DOM")), this._setDocumentSizes())
        }
        _setDocumentSizes() {
            let e = this.htmlElement.getBoundingClientRect();
            this._boundingRect || (this._boundingRect = {}), this._boundingRect.document = {
                width: e.width * this.renderer.pixelRatio,
                height: e.height * this.renderer.pixelRatio,
                top: e.top * this.renderer.pixelRatio,
                left: e.left * this.renderer.pixelRatio
            }
        }
        getBoundingRect() {
            return {
                width: this._boundingRect.document.width,
                height: this._boundingRect.document.height,
                top: this._boundingRect.document.top,
                left: this._boundingRect.document.left,
                right: this._boundingRect.document.left + this._boundingRect.document.width,
                bottom: this._boundingRect.document.top + this._boundingRect.document.height
            }
        }
        resize() {
            this._setDocumentSizes(), this.type === "Plane" && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._setWorldSizes(), this._applyWorldPositions());
            for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
            this.renderer.nextRender.add(() => this._onAfterResizeCallback && this._onAfterResizeCallback())
        }
        mouseToPlaneCoords(e) {
            const t = this.scale ? this.scale : tt.set(1, 1),
                s = me.set((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2),
                i = {
                    width: this._boundingRect.document.width * t.x / this.renderer.pixelRatio,
                    height: this._boundingRect.document.height * t.y / this.renderer.pixelRatio,
                    top: (this._boundingRect.document.top + s.y) / this.renderer.pixelRatio,
                    left: (this._boundingRect.document.left + s.x) / this.renderer.pixelRatio
                };
            return me.set((e.x - i.left) / i.width * 2 - 1, 1 - (e.y - i.top) / i.height * 2)
        }
        onAfterResize(e) {
            return e && (this._onAfterResizeCallback = e), this
        }
    }
    class it {
        constructor({
            fov: e = 50,
            near: t = .1,
            far: s = 150,
            width: i,
            height: r,
            pixelRatio: a = 1
        } = {}) {
            this.position = new T, this.projectionMatrix = new N, this.worldMatrix = new N, this.viewMatrix = new N, this._shouldUpdate = !1, this.setSize(), this.setPerspective(e, t, s, i, r, a)
        }
        setFov(e) {
            e = isNaN(e) ? this.fov : parseFloat(e), e = Math.max(1, Math.min(e, 179)), e !== this.fov && (this.fov = e, this.setPosition(), this._shouldUpdate = !0), this.setCSSPerspective()
        }
        setNear(e) {
            e = isNaN(e) ? this.near : parseFloat(e), e = Math.max(e, .01), e !== this.near && (this.near = e, this._shouldUpdate = !0)
        }
        setFar(e) {
            e = isNaN(e) ? this.far : parseFloat(e), e = Math.max(e, 50), e !== this.far && (this.far = e, this._shouldUpdate = !0)
        }
        setPixelRatio(e) {
            e !== this.pixelRatio && (this._shouldUpdate = !0), this.pixelRatio = e
        }
        setSize(e, t) {
            (e !== this.width || t !== this.height) && (this._shouldUpdate = !0), this.width = e, this.height = t
        }
        setPerspective(e, t, s, i, r, a) {
            this.setPixelRatio(a), this.setSize(i, r), this.setFov(e), this.setNear(t), this.setFar(s), this._shouldUpdate && this.updateProjectionMatrix()
        }
        setPosition() {
            this.position.set(0, 0, 1), this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]), this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
        }
        setCSSPerspective() {
            this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / Math.tan(this.fov * .5 * Math.PI / 180)
        }
        getScreenRatiosFromFov(e = 0) {
            const t = this.position.z;
            e < t ? e -= t : e += t;
            const s = this.fov * Math.PI / 180,
                i = 2 * Math.tan(s / 2) * Math.abs(e);
            return {
                width: i * this.width / this.height,
                height: i
            }
        }
        updateProjectionMatrix() {
            const e = this.width / this.height,
                t = this.near * Math.tan(Math.PI / 180 * .5 * this.fov),
                s = 2 * t,
                i = e * s,
                r = -.5 * i,
                a = r + i,
                h = t - s,
                o = 2 * this.near / (a - r),
                l = 2 * this.near / (t - h),
                d = (a + r) / (a - r),
                c = (t + h) / (t - h),
                f = -(this.far + this.near) / (this.far - this.near),
                u = -2 * this.far * this.near / (this.far - this.near);
            this.projectionMatrix.setFromArray([o, 0, 0, 0, 0, l, 0, 0, d, c, f, -1, 0, 0, u, 0])
        }
        forceUpdate() {
            this._shouldUpdate = !0
        }
        cancelUpdate() {
            this._shouldUpdate = !1
        }
    }
    class se {
        constructor(e = new Float32Array([0, 0, 0, 1]), t = "XYZ") {
            this.type = "Quat", this.elements = e, this.axisOrder = t
        }
        setFromArray(e) {
            return this.elements[0] = e[0], this.elements[1] = e[1], this.elements[2] = e[2], this.elements[3] = e[3], this
        }
        setAxisOrder(e) {
            switch (e = e.toUpperCase(), e) {
                case "XYZ":
                case "YXZ":
                case "ZXY":
                case "ZYX":
                case "YZX":
                case "XZY":
                    this.axisOrder = e;
                    break;
                default:
                    this.axisOrder = "XYZ"
            }
            return this
        }
        copy(e) {
            return this.elements = e.elements, this.axisOrder = e.axisOrder, this
        }
        clone() {
            return new se().copy(this)
        }
        equals(e) {
            return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
        }
        setFromVec3(e) {
            const t = e.x * .5,
                s = e.y * .5,
                i = e.z * .5,
                r = Math.cos(t),
                a = Math.cos(s),
                h = Math.cos(i),
                o = Math.sin(t),
                l = Math.sin(s),
                d = Math.sin(i);
            return this.axisOrder === "XYZ" ? (this.elements[0] = o * a * h + r * l * d, this.elements[1] = r * l * h - o * a * d, this.elements[2] = r * a * d + o * l * h, this.elements[3] = r * a * h - o * l * d) : this.axisOrder === "YXZ" ? (this.elements[0] = o * a * h + r * l * d, this.elements[1] = r * l * h - o * a * d, this.elements[2] = r * a * d - o * l * h, this.elements[3] = r * a * h + o * l * d) : this.axisOrder === "ZXY" ? (this.elements[0] = o * a * h - r * l * d, this.elements[1] = r * l * h + o * a * d, this.elements[2] = r * a * d + o * l * h, this.elements[3] = r * a * h - o * l * d) : this.axisOrder === "ZYX" ? (this.elements[0] = o * a * h - r * l * d, this.elements[1] = r * l * h + o * a * d, this.elements[2] = r * a * d - o * l * h, this.elements[3] = r * a * h + o * l * d) : this.axisOrder === "YZX" ? (this.elements[0] = o * a * h + r * l * d, this.elements[1] = r * l * h + o * a * d, this.elements[2] = r * a * d - o * l * h, this.elements[3] = r * a * h - o * l * d) : this.axisOrder === "XZY" && (this.elements[0] = o * a * h - r * l * d, this.elements[1] = r * l * h - o * a * d, this.elements[2] = r * a * d + o * l * h, this.elements[3] = r * a * h + o * l * d), this
        }
    }
    const rt = new L,
        at = new T,
        nt = new T,
        ht = new T,
        ot = new T,
        lt = new T,
        dt = new T,
        U = new T,
        V = new T,
        _e = new se,
        ct = new T(.5, .5, 0),
        ut = new T,
        ft = new T,
        pt = new T,
        gt = new T,
        mt = new L;
    class xe extends st {
        constructor(e, t, {
            widthSegments: s,
            heightSegments: i,
            renderOrder: r,
            depthTest: a,
            cullFace: h,
            uniforms: o,
            vertexShaderID: l,
            fragmentShaderID: d,
            vertexShader: c,
            fragmentShader: f,
            texturesOptions: u,
            crossOrigin: p,
            alwaysDraw: m = !1,
            visible: w = !0,
            transparent: R = !1,
            drawCheckMargins: _ = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            autoloadSources: x = !0,
            watchScroll: y = !0,
            fov: v = 50
        } = {}) {
            super(e, t, "Plane", {
                widthSegments: s,
                heightSegments: i,
                renderOrder: r,
                depthTest: a,
                cullFace: h,
                uniforms: o,
                vertexShaderID: l,
                fragmentShaderID: d,
                vertexShader: c,
                fragmentShader: f,
                texturesOptions: u,
                crossOrigin: p
            }), this.gl && (this.index = this.renderer.planes.length, this.target = null, this.alwaysDraw = m, this._shouldDraw = !0, this.visible = w, this._transparent = R, this.drawCheckMargins = _, this.autoloadSources = x, this.watchScroll = y, this._updateMVMatrix = !1, this.camera = new it({
                fov: v,
                width: this.renderer._boundingRect.width,
                height: this.renderer._boundingRect.height,
                pixelRatio: this.renderer.pixelRatio
            }), this._program.compiled && (this._initPlane(), this.renderer.scene.addPlane(this), this.renderer.planes.push(this)))
        }
        _programRestored() {
            this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]), this._initMatrices(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._setWorldSizes(), this._applyWorldPositions(), this.renderer.scene.addPlane(this);
            for (let e = 0; e < this.textures.length; e++) this.textures[e]._parent = this, this.textures[e]._restoreContext();
            this._canDraw = !0
        }
        _initPlane() {
            this._initTransformValues(), this._initPositions(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._initSources()
        }
        _initTransformValues() {
            this.rotation = new T, this.rotation.onChange(() => this._applyRotation()), this.quaternion = new se, this.relativeTranslation = new T, this.relativeTranslation.onChange(() => this._setTranslation()), this._translation = new T, this.scale = new T(1), this.scale.onChange(() => {
                this.scale.z = 1, this._applyScale()
            }), this.transformOrigin = new T(.5, .5, 0), this.transformOrigin.onChange(() => {
                this._setWorldTransformOrigin(), this._updateMVMatrix = !0
            })
        }
        resetPlane(e) {
            this._initTransformValues(), this._setWorldTransformOrigin(), e !== null && e ? (this.htmlElement = e, this.resize()) : !e && !this.renderer.production && g(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
        }
        removeRenderTarget() {
            this.target && (this.renderer.scene.removePlane(this), this.target = null, this.renderer.scene.addPlane(this))
        }
        _initPositions() {
            this._initMatrices(), this._setWorldSizes(), this._applyWorldPositions()
        }
        _initMatrices() {
            const e = new N;
            this._matrices = {
                world: {
                    matrix: e
                },
                modelView: {
                    name: "uMVMatrix",
                    matrix: e,
                    location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
                },
                projection: {
                    name: "uPMatrix",
                    matrix: e,
                    location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
                },
                modelViewProjection: {
                    matrix: e
                }
            }
        }
        _setPerspectiveMatrix() {
            this.camera._shouldUpdate && (this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.projection.location, !1, this._matrices.projection.matrix.elements)), this.camera.cancelUpdate()
        }
        setPerspective(e, t, s) {
            this.camera.setPerspective(e, t, s, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio), this.renderer.state.isContextLost && this.camera.forceUpdate(), this._matrices.projection.matrix = this.camera.projectionMatrix, this.camera._shouldUpdate && (this._setWorldSizes(), this._applyWorldPositions(), this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective), this._updateMVMatrix = this.camera._shouldUpdate
        }
        _setMVMatrix() {
            this._updateMVMatrix && (this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin), this._matrices.world.matrix.scale({
                x: this._boundingRect.world.width,
                y: this._boundingRect.world.height,
                z: 1
            }), this._matrices.modelView.matrix.copy(this._matrices.world.matrix), this._matrices.modelView.matrix.elements[14] -= this.camera.position.z, this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix), this.alwaysDraw || this._shouldDrawCheck(), this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.modelView.location, !1, this._matrices.modelView.matrix.elements)), this._updateMVMatrix = !1
        }
        _setWorldTransformOrigin() {
            this._boundingRect.world.transformOrigin = new T((this.transformOrigin.x * 2 - 1) * this._boundingRect.world.width, -(this.transformOrigin.y * 2 - 1) * this._boundingRect.world.height, this.transformOrigin.z)
        }
        _documentToWorldSpace(e) {
            return nt.set(e.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -(e.y * this.renderer.pixelRatio / this.renderer._boundingRect.height) * this._boundingRect.world.ratios.height, e.z)
        }
        _setWorldSizes() {
            const e = this.camera.getScreenRatiosFromFov();
            this._boundingRect.world = {
                width: this._boundingRect.document.width / this.renderer._boundingRect.width * e.width / 2,
                height: this._boundingRect.document.height / this.renderer._boundingRect.height * e.height / 2,
                ratios: e
            }, this._setWorldTransformOrigin()
        }
        _setWorldPosition() {
            const e = {
                    x: this._boundingRect.document.width / 2 + this._boundingRect.document.left,
                    y: this._boundingRect.document.height / 2 + this._boundingRect.document.top
                },
                t = {
                    x: this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left,
                    y: this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top
                };
            this._boundingRect.world.top = (t.y - e.y) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height, this._boundingRect.world.left = (e.x - t.x) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width
        }
        setScale(e) {
            if (!e.type || e.type !== "Vec2") {
                this.renderer.production || g(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e);
                return
            }
            e.sanitizeNaNValuesWith(this.scale).max(rt.set(.001, .001)), (e.x !== this.scale.x || e.y !== this.scale.y) && (this.scale.set(e.x, e.y, 1), this._applyScale())
        }
        _applyScale() {
            for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
            this._updateMVMatrix = !0
        }
        setRotation(e) {
            if (!e.type || e.type !== "Vec3") {
                this.renderer.production || g(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", e);
                return
            }
            e.sanitizeNaNValuesWith(this.rotation), e.equals(this.rotation) || (this.rotation.copy(e), this._applyRotation())
        }
        _applyRotation() {
            this.quaternion.setFromVec3(this.rotation), this._updateMVMatrix = !0
        }
        setTransformOrigin(e) {
            if (!e.type || e.type !== "Vec3") {
                this.renderer.production || g(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", e);
                return
            }
            e.sanitizeNaNValuesWith(this.transformOrigin), e.equals(this.transformOrigin) || (this.transformOrigin.copy(e), this._setWorldTransformOrigin(), this._updateMVMatrix = !0)
        }
        _setTranslation() {
            let e = at.set(0, 0, 0);
            this.relativeTranslation.equals(e) || (e = this._documentToWorldSpace(this.relativeTranslation)), this._translation.set(this._boundingRect.world.left + e.x, this._boundingRect.world.top + e.y, this.relativeTranslation.z / this.camera.CSSPerspective), this._updateMVMatrix = !0
        }
        setRelativeTranslation(e) {
            if (!e.type || e.type !== "Vec3") {
                this.renderer.production || g(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", e);
                return
            }
            e.sanitizeNaNValuesWith(this.relativeTranslation), e.equals(this.relativeTranslation) || (this.relativeTranslation.copy(e), this._setTranslation())
        }
        _applyWorldPositions() {
            this._setWorldPosition(), this._setTranslation()
        }
        updatePosition() {
            this._setDocumentSizes(), this._applyWorldPositions()
        }
        updateScrollPosition(e, t) {
            (e || t) && (this._boundingRect.document.top += t * this.renderer.pixelRatio, this._boundingRect.document.left += e * this.renderer.pixelRatio, this._applyWorldPositions())
        }
        _getIntersection(e, t) {
            let s = t.clone().sub(e),
                i = e.clone();
            for (; i.z > -1;) i.add(s);
            return i
        }
        _getNearPlaneIntersections(e, t, s) {
            const i = this._matrices.modelViewProjection.matrix;
            if (s.length === 1) s[0] === 0 ? (t[0] = this._getIntersection(t[1], U.set(.95, 1, 0).applyMat4(i)), t.push(this._getIntersection(t[3], V.set(-1, -.95, 0).applyMat4(i)))) : s[0] === 1 ? (t[1] = this._getIntersection(t[0], U.set(-.95, 1, 0).applyMat4(i)), t.push(this._getIntersection(t[2], V.set(1, -.95, 0).applyMat4(i)))) : s[0] === 2 ? (t[2] = this._getIntersection(t[3], U.set(-.95, -1, 0).applyMat4(i)), t.push(this._getIntersection(t[1], V.set(1, .95, 0).applyMat4(i)))) : s[0] === 3 && (t[3] = this._getIntersection(t[2], U.set(.95, -1, 0).applyMat4(i)), t.push(this._getIntersection(t[0], V.set(-1, .95, 0).applyMat4(i))));
            else if (s.length === 2) s[0] === 0 && s[1] === 1 ? (t[0] = this._getIntersection(t[3], U.set(-1, -.95, 0).applyMat4(i)), t[1] = this._getIntersection(t[2], V.set(1, -.95, 0).applyMat4(i))) : s[0] === 1 && s[1] === 2 ? (t[1] = this._getIntersection(t[0], U.set(-.95, 1, 0).applyMat4(i)), t[2] = this._getIntersection(t[3], V.set(-.95, -1, 0).applyMat4(i))) : s[0] === 2 && s[1] === 3 ? (t[2] = this._getIntersection(t[1], U.set(1, .95, 0).applyMat4(i)), t[3] = this._getIntersection(t[0], V.set(-1, .95, 0).applyMat4(i))) : s[0] === 0 && s[1] === 3 && (t[0] = this._getIntersection(t[1], U.set(.95, 1, 0).applyMat4(i)), t[3] = this._getIntersection(t[2], V.set(.95, -1, 0).applyMat4(i)));
            else if (s.length === 3) {
                let r = 0;
                for (let a = 0; a < e.length; a++) s.includes(a) || (r = a);
                t = [t[r]], r === 0 ? (t.push(this._getIntersection(t[0], U.set(-.95, 1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], V.set(-1, .95, 0).applyMat4(i)))) : r === 1 ? (t.push(this._getIntersection(t[0], U.set(.95, 1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], V.set(1, .95, 0).applyMat4(i)))) : r === 2 ? (t.push(this._getIntersection(t[0], U.set(.95, -1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], V.set(1, -.95, 0).applyMat4(i)))) : r === 3 && (t.push(this._getIntersection(t[0], U.set(-.95, -1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], V.set(-1 - .95, 0).applyMat4(i))))
            } else
                for (let r = 0; r < e.length; r++) t[r][0] = 1e4, t[r][1] = 1e4;
            return t
        }
        _getWorldCoords() {
            const e = [ht.set(-1, 1, 0), ot.set(1, 1, 0), lt.set(1, -1, 0), dt.set(-1, -1, 0)];
            let t = [],
                s = [];
            for (let o = 0; o < e.length; o++) {
                const l = e[o].applyMat4(this._matrices.modelViewProjection.matrix);
                t.push(l), Math.abs(l.z) > 1 && s.push(o)
            }
            s.length && (t = this._getNearPlaneIntersections(e, t, s));
            let i = 1 / 0,
                r = -1 / 0,
                a = 1 / 0,
                h = -1 / 0;
            for (let o = 0; o < t.length; o++) {
                const l = t[o];
                l.x < i && (i = l.x), l.x > r && (r = l.x), l.y < a && (a = l.y), l.y > h && (h = l.y)
            }
            return {
                top: h,
                right: r,
                bottom: a,
                left: i
            }
        }
        _computeWebGLBoundingRect() {
            const e = this._getWorldCoords();
            let t = {
                top: 1 - (e.top + 1) / 2,
                right: (e.right + 1) / 2,
                bottom: 1 - (e.bottom + 1) / 2,
                left: (e.left + 1) / 2
            };
            t.width = t.right - t.left, t.height = t.bottom - t.top, this._boundingRect.worldToDocument = {
                width: t.width * this.renderer._boundingRect.width,
                height: t.height * this.renderer._boundingRect.height,
                top: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
                left: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
                right: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + t.width * this.renderer._boundingRect.width,
                bottom: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + t.height * this.renderer._boundingRect.height
            }
        }
        getWebGLBoundingRect() {
            if (this._matrices.modelViewProjection)(!this._boundingRect.worldToDocument || this.alwaysDraw) && this._computeWebGLBoundingRect();
            else return this._boundingRect.document;
            return this._boundingRect.worldToDocument
        }
        _getWebGLDrawRect() {
            return this._computeWebGLBoundingRect(), {
                top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
                right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
                bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
                left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
            }
        }
        _shouldDrawCheck() {
            const e = this._getWebGLDrawRect();
            Math.round(e.right) <= this.renderer._boundingRect.left || Math.round(e.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(e.bottom) <= this.renderer._boundingRect.top || Math.round(e.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1, this.renderer.nextRender.add(() => this._onLeaveViewCallback && this._onLeaveViewCallback())) : (this._shouldDraw || this.renderer.nextRender.add(() => this._onReEnterViewCallback && this._onReEnterViewCallback()), this._shouldDraw = !0)
        }
        isDrawn() {
            return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
        }
        enableDepthTest(e) {
            this._depthTest = e
        }
        _initSources() {
            let e = 0;
            if (this.autoloadSources) {
                const t = this.htmlElement.getElementsByTagName("img"),
                    s = this.htmlElement.getElementsByTagName("video"),
                    i = this.htmlElement.getElementsByTagName("canvas");
                t.length && this.loadImages(t), s.length && this.loadVideos(s), i.length && this.loadCanvases(i), e = t.length + s.length + i.length
            }
            this.loader._setLoaderSize(e), this._canDraw = !0
        }
        _startDrawing() {
            this._canDraw && (this._onRenderCallback && this._onRenderCallback(), this.target ? this.renderer.bindFrameBuffer(this.target) : this.renderer.state.scenePassIndex === null && this.renderer.bindFrameBuffer(null), this._setPerspectiveMatrix(), this._setMVMatrix(), (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
        }
        mouseToPlaneCoords(e) {
            if (_e.setAxisOrder(this.quaternion.axisOrder), _e.equals(this.quaternion) && ct.equals(this.transformOrigin)) return super.mouseToPlaneCoords(e); {
                const t = {
                        x: 2 * (e.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio)) - 1,
                        y: 2 * (1 - e.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
                    },
                    s = this.camera.position.clone(),
                    i = ut.set(t.x, t.y, -.5);
                i.unproject(this.camera), i.sub(s).normalize();
                const r = ft.set(0, 0, -1);
                r.applyQuat(this.quaternion).normalize();
                const a = gt.set(0, 0, 0),
                    h = r.dot(i);
                if (Math.abs(h) >= 1e-4) {
                    const o = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix),
                        l = this._boundingRect.world.transformOrigin.clone().add(this._translation),
                        d = pt.set(this._translation.x - l.x, this._translation.y - l.y, this._translation.z - l.z);
                    d.applyQuat(this.quaternion), l.add(d);
                    const c = r.dot(l.clone().sub(s)) / h;
                    a.copy(s.add(i.multiplyScalar(c))), a.applyMat4(o)
                } else a.set(1 / 0, 1 / 0, 1 / 0);
                return mt.set(a.x, a.y)
            }
        }
        onReEnterView(e) {
            return e && (this._onReEnterViewCallback = e), this
        }
        onLeaveView(e) {
            return e && (this._onLeaveViewCallback = e), this
        }
    }
    class le {
        constructor(e, {
            shaderPass: t,
            depth: s = !1,
            clear: i = !0,
            maxWidth: r,
            maxHeight: a,
            minWidth: h = 1024,
            minHeight: o = 1024,
            texturesOptions: l = {}
        } = {}) {
            if (this.type = "RenderTarget", e = e && e.renderer || e, !e || e.type !== "Renderer") z(this.type + ": Renderer not passed as first argument", e);
            else if (!e.gl) {
                e.production || z(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined");
                return
            }
            this.renderer = e, this.gl = this.renderer.gl, this.index = this.renderer.renderTargets.length, this._shaderPass = t, this._depth = s, this._shouldClear = i, this._maxSize = {
                width: r ? Math.min(this.renderer.state.maxTextureSize / 4, r) : this.renderer.state.maxTextureSize / 4,
                height: a ? Math.min(this.renderer.state.maxTextureSize / 4, a) : this.renderer.state.maxTextureSize / 4
            }, this._minSize = {
                width: h * this.renderer.pixelRatio,
                height: o * this.renderer.pixelRatio
            }, l = Object.assign({
                sampler: "uRenderTexture",
                isFBOTexture: !0,
                premultiplyAlpha: !1,
                anisotropy: 1,
                generateMipmap: !1,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, l), this._texturesOptions = l, this.userData = {}, this.uuid = he(), this.renderer.renderTargets.push(this), this.renderer.onSceneChange(), this._initRenderTarget()
        }
        _initRenderTarget() {
            this._setSize(), this.textures = [], this._createFrameBuffer()
        }
        _restoreContext() {
            this._setSize(), this._createFrameBuffer()
        }
        _setSize() {
            this._shaderPass && this._shaderPass._isScenePass ? this._size = {
                width: this.renderer._boundingRect.width,
                height: this.renderer._boundingRect.height
            } : this._size = {
                width: Math.min(this._maxSize.width, Math.max(this._minSize.width, this.renderer._boundingRect.width)),
                height: Math.min(this._maxSize.height, Math.max(this._minSize.height, this.renderer._boundingRect.height))
            }
        }
        resize() {
            this._shaderPass && (this._setSize(), this.textures[0].resize(), this.renderer.bindFrameBuffer(this, !0), this._depth && this._bindDepthBuffer(), this.renderer.bindFrameBuffer(null))
        }
        _bindDepthBuffer() {
            this._depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._size.width, this._size.height), this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this._depthBuffer))
        }
        _createFrameBuffer() {
            this._frameBuffer = this.gl.createFramebuffer(), this.renderer.bindFrameBuffer(this, !0), this.textures.length ? (this.textures[0]._parent = this, this.textures[0]._restoreContext()) : new q(this.renderer, this._texturesOptions).addParent(this), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0]._sampler.texture, 0), this._depth && (this._depthBuffer = this.gl.createRenderbuffer(), this._bindDepthBuffer()), this.renderer.bindFrameBuffer(null)
        }
        getTexture() {
            return this.textures[0]
        }
        remove() {
            if (this._shaderPass) {
                this.renderer.production || g(this.type + ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:", this._shaderPass);
                return
            }
            this._dispose(), this.renderer.removeRenderTarget(this)
        }
        _dispose() {
            this._frameBuffer && (this.gl.deleteFramebuffer(this._frameBuffer), this._frameBuffer = null), this._depthBuffer && (this.gl.deleteRenderbuffer(this._depthBuffer), this._depthBuffer = null), this.textures[0]._dispose(), this.textures = []
        }
    }
    class _t extends xe {
        constructor(e, t, {
            sampler: s = "uPingPongTexture",
            widthSegments: i,
            heightSegments: r,
            renderOrder: a,
            depthTest: h,
            cullFace: o,
            uniforms: l,
            vertexShaderID: d,
            fragmentShaderID: c,
            vertexShader: f,
            fragmentShader: u,
            texturesOptions: p,
            crossOrigin: m,
            alwaysDraw: w,
            visible: R,
            transparent: _,
            drawCheckMargins: x,
            autoloadSources: y,
            watchScroll: v,
            fov: P
        } = {}) {
            if (h = !1, y = !1, super(e, t, {
                    widthSegments: i,
                    heightSegments: r,
                    renderOrder: a,
                    depthTest: h,
                    cullFace: o,
                    uniforms: l,
                    vertexShaderID: d,
                    fragmentShaderID: c,
                    vertexShader: f,
                    fragmentShader: u,
                    texturesOptions: p,
                    crossOrigin: m,
                    alwaysDraw: w,
                    visible: R,
                    transparent: _,
                    drawCheckMargins: x,
                    autoloadSources: y,
                    watchScroll: v,
                    fov: P
                }), !this.gl) return;
            this.renderer.scene.removePlane(this), this.type = "PingPongPlane", this.renderer.scene.addPlane(this), this.readPass = new le(e, {
                depth: !1,
                clear: !1,
                texturesOptions: p
            }), this.writePass = new le(e, {
                depth: !1,
                clear: !1,
                texturesOptions: p
            }), this.createTexture({
                sampler: s
            });
            let S = 0;
            this.readPass.getTexture().onSourceUploaded(() => {
                S++, this._checkIfReady(S)
            }), this.writePass.getTexture().onSourceUploaded(() => {
                S++, this._checkIfReady(S)
            }), this.setRenderTarget(this.readPass), this._onRenderCallback = () => {
                this.readPass && this.writePass && this.textures[0] && this.textures[0]._uploaded && this.setRenderTarget(this.writePass), this._onPingPongRenderCallback && this._onPingPongRenderCallback()
            }, this._onAfterRenderCallback = () => {
                this.readPass && this.writePass && this.textures[0] && this.textures[0]._uploaded && this._swapPasses(), this._onPingPongAfterRenderCallback && this._onPingPongAfterRenderCallback()
            }
        }
        _checkIfReady(e) {
            e === 2 && this.renderer.nextRender.add(() => {
                this.textures[0].copy(this.target.getTexture())
            })
        }
        _swapPasses() {
            const e = this.readPass;
            this.readPass = this.writePass, this.writePass = e, this.textures[0].copy(this.readPass.getTexture())
        }
        getTexture() {
            return this.textures[0]
        }
        onRender(e) {
            return e && (this._onPingPongRenderCallback = e), this
        }
        onAfterRender(e) {
            return e && (this._onPingPongAfterRenderCallback = e), this
        }
        remove() {
            this.target = null, this.renderer.bindFrameBuffer(null), this.writePass && (this.writePass.remove(), this.writePass = null), this.readPass && (this.readPass.remove(), this.readPass = null), super.remove()
        }
    }
    const xt = (n, e, t, s, i) => {
            var r = Math.PI / 180 * i,
                a = Math.cos(r),
                h = Math.sin(r),
                o = a * (t - n) + h * (s - e) + n,
                l = a * (s - e) - h * (t - n) + e;
            return [+o.toFixed(1), +l.toFixed(1)]
        },
        X = (n, e) => {
            const t = e || 1,
                s = Math.min(...n.map(l => l[0])),
                i = Math.max(...n.map(l => l[0])),
                r = Math.min(...n.map(l => l[1])),
                a = Math.max(...n.map(l => l[1])),
                h = Math.abs(i - s),
                o = Math.abs(a - r);
            return {
                width: Math.round(h / t),
                height: Math.round(o / t),
                aspectRatio: h / t / (o / t),
                center: {
                    x: Math.round((h / 2 + s) / t),
                    y: Math.round((o / 2 + r) / t)
                },
                corners: [
                    [s, r],
                    [i, r],
                    [i, a],
                    [s, a]
                ]
            }
        },
        ye = (n, e, t) => {
            let s;
            const i = X(t);
            if (e.fill.length > 1) {
                let r = e.gradientAngle ? +e.gradientAngle * 2 * Math.PI : 0,
                    a = i.center.x,
                    h = i.center.y;
                e.gradientType === "radial" && (s = n.createRadialGradient(a, h, Math.max(i.width, i.height) * .7, a, h, 0));
                const o = Math.cos(r) * i.width,
                    l = Math.sin(r) * i.height;
                if (e.gradientType === "linear" && (s = n.createLinearGradient(a - o / 2, h - l / 2, a + o / 2, h + l / 2)), e.gradientType === "conic") {
                    s = n.createConicGradient(-Math.PI + r, a, h);
                    const d = [...e.fill, ...e.fill.slice().reverse()];
                    d.forEach((c, f) => {
                        s.addColorStop(f * (1 / (d.length - 1)), c)
                    })
                } else e.fill.forEach((d, c) => {
                    s.addColorStop(c * (1 / (e.fill.length - 1)), d)
                })
            } else s = e.fill[0];
            return s
        };
    let ie, J, be, de = !1;
    typeof document.hidden < "u" ? (ie = "hidden", J = "visibilitychange") : typeof document.msHidden < "u" ? (ie = "msHidden", J = "msvisibilitychange") : typeof document.webkitHidden < "u" && (ie = "webkitHidden", J = "webkitvisibilitychange");

    function we(n, e) {
        let t;
        return function(...s) {
            clearTimeout(t), t = setTimeout(() => {
                n.apply(this, s)
            }, e)
        }
    }
    const ve = () => {
        var n = new Date().getTime(),
            e = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var s = Math.random() * 16;
            return n > 0 ? (s = (n + s) % 16 | 0, n = Math.floor(n / 16)) : (s = (e + s) % 16 | 0, e = Math.floor(e / 16)), (t === "x" ? s : s & 3 | 8).toString(16)
        })
    };

    function W(n) {
        return n && typeof n == "string" && (n = JSON.parse(n)), Object.values(n)
    }

    function $(n, e, t) {
        for (let s = 0; s < t; s++) n = (n + e) / 2;
        return +((n + e) / 2).toFixed(4)
    }

    function yt(n) {
        const e = X(n.coords),
            t = n.getPositionOffset();
        let s = n.coords.map(([i, r]) => xt(e.center.x, e.center.y, i, r, -n.rotation * 360));
        return s = s.map(([i, r]) => [Math.round(i + t.x), Math.round(r + t.y)]), s
    }

    function Q(n, e) {
        const t = n[0] / n[1],
            s = Math.sqrt(t * (3e5 * (e || 1)));
        return [s, s / t]
    }

    function re() {
        return /Android|iPhone/i.test(navigator.userAgent)
    }

    function Z(n) {
        const e = "trackMouse" in n && n.trackMouse > 0 || "axisTilt" in n && n.axisTilt > 0 || "trackMouseMove" in n && n.trackMouseMove > 0;
        let t = n.states && [...n.states.appear, ...n.states.scroll, ...n.states.hover].length,
            s = n.layerType === "effect" && (n.animating || n.type === "mouse");
        return e || s || t
    }

    function bt(n, e, t) {
        const s = [];
        return n.forEach(i => {
            switch (i.layerType) {
                case "text":
                    s.push(new Ct(i, e, null, t).unpackage());
                    break;
                case "image":
                    s.push(new At(i, e, t).unpackage());
                    break;
                case "fill":
                    s.push(new Se(i, e, t).unpackage());
                    break;
                case "shape":
                    s.push(new Et(i, e, t).unpackage());
                    break;
                case "effect":
                    s.push(new Se(i, e, t).unpackage());
                    break
            }
        }), s
    }

    function wt(n, e) {
        const t = document.createElement("a");
        t.href = "https://unicorn.studio?utm_source=public-url", t.style = "position: absolute; display: flex; bottom: 30px; left: 0; width: 190px; margin: 0 auto; right: 0rem; padding: 10px; border-radius: 6px; background-color: rgba(255, 255, 255, 1); box-shadow: 0 3px 9px 0 rgba(0, 0, 0, .2); z-index: 99999999; box-sizing: border-box;", t.target = "_blank";
        const s = document.createElement("img");
        s.src = "https://assets.unicorn.studio/media/made_in_us_small_web.svg", s.alt = "Made in unicorn.studio", s.style = "width: 170px; height: auto;", t.appendChild(s), e.appendChild(t)
    }

    function vt(n, e) {
        const s = Q([e.offsetWidth || n.width, e.offsetHeight || n.height])[0] / e.offsetWidth,
            i = n.getPositionOffset(),
            r = document.createElement("div");
        r.setAttribute("data-us-text", "loading"), r.setAttribute("data-us-project", n.local.sceneId), r.style.width = n.width / s + "px", r.style.height = n.height / s + "px", r.style.top = i.y / s + e.offsetTop + "px", r.style.left = i.x / s + e.offsetLeft + "px", r.style.fontSize = n.fontSize / s + "px", r.style.lineHeight = n.lineHeight / s + "px", r.style.letterSpacing = n.letterSpacing / s + "px", r.style.fontFamily = n.fontFamily, r.style.fontWeight = n.fontWeight, r.style.textAlign = n.textAlign, r.style.wordBreak = "break-word", r.style.transform = `rotateZ(${Math.round(n.rotation*360)}deg)`, r.style.color = "transparent", r.style.zIndex = 2, r.innerText = n.textContent, e.appendChild(r)
    }
    let K;

    function Pe() {
        b.scenes.forEach((n, e) => {
            document.body.contains(n.element) || (n.curtain.dispose(), b.scenes.splice(e, 1))
        })
    }

    function ce() {
        cancelAnimationFrame(K);
        const n = b.scenes.filter(t => t.getAnimatingEffects().length),
            e = t => {
                const s = n.filter(i => i.isInView && i.initialized);
                b.scenes.forEach(i => {
                    i.rendering = s.includes(i)
                }), s.length ? (Ft(), s.forEach(i => {
                    t - i.lastTime >= i.frameDuration && (i.updateMouseTrail(), i.curtain.render(), i.lastTime = t)
                }), K = requestAnimationFrame(e)) : cancelAnimationFrame(K)
            };
        n.length && (K = requestAnimationFrame(e))
    }

    function Pt(n, e) {
        return new Promise(t => {
            const s = setInterval(() => {
                n.local[e] && (clearInterval(s), t())
            }, 20)
        })
    }

    function F(n, e, t) {
        return n + (e - n) * t
    }

    function Te(n) {
        switch (n) {
            case "linear":
                return e => e;
            case "easeInQuad":
                return e => e * e;
            case "easeOutQuad":
                return e => 1 - (1 - e) * (1 - e);
            case "easeInOutQuad":
                return e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
            case "easeInCubic":
                return e => e * e * e;
            case "easeInOutCubic":
                return e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
            case "easeOutCubic":
                return e => 1 - Math.pow(1 - e, 3);
            case "easeInQuart":
                return e => e * e * e * e;
            case "easeOutQuart":
                return e => 1 - Math.pow(1 - e, 4);
            case "easeInOutQuart":
                return e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2;
            case "easeInQuint":
                return e => e * e * e * e * e;
            case "easeOutQuint":
                return e => 1 - Math.pow(1 - e, 5);
            case "easeInOutQuint":
                return e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2;
            case "easeOutElastic":
                return e => {
                    const t = 2 * Math.PI / 3;
                    return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * t) + 1
                };
            case "easeInElastic":
                return e => {
                    const t = 2 * Math.PI / 3;
                    return e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * t)
                };
            case "easeInOutElastic":
                return e => {
                    const t = 2 * Math.PI / 4.5;
                    return e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * t)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * t) / 2 + 1
                };
            case "easeInSine":
                return e => 1 - Math.cos(e * Math.PI / 2);
            case "easeOutSine":
                return e => Math.sin(e * Math.PI / 2);
            case "easeInOutSine":
                return e => -(Math.cos(Math.PI * e) - 1) / 2;
            case "easeInCirc":
                return e => 1 - Math.sqrt(1 - Math.pow(e, 2));
            case "easeOutCirc":
                return e => Math.sqrt(1 - Math.pow(e - 1, 2));
            case "easeInOutCirc":
                return e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
            case "easeInExpo":
                return e => e === 0 ? 0 : Math.pow(2, 10 * e - 10);
            case "easeOutExpo":
                return e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
            case "easeInOutExpo":
                return e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
            default:
                return e => e
        }
    }

    function Y(n, e) {
        let t = n;
        return n.type === "Vec2" ? (t = new L(n._x, n._y), e && (t.y = 1 - t.y)) : n.type === "Vec3" ? t = new T(n._x, n._y, n._z) : t = n, t
    }
    class Tt {
        constructor({
            prop: e,
            value: t,
            transition: s,
            uniformData: i
        }) {
            this.prop = e, this.transition = s, this.complete = !1, this.progress = 0, this.initialStateSet = !1, this.uniformData = i, this.value = Y(t, this.prop === "pos")
        }
        initializeState(e, t) {
            if (t !== void 0 && (typeof t == "object" ? (this.endVal = Y(t, this.prop === "pos"), this.startVal = Y(this.value, this.prop === "pos")) : this.endVal = t), e) {
                if (typeof this.value == "object") {
                    let r;
                    this.value.type === "Vec2" ? r = new L(this.value._x, this.value._y) : this.value.type === "Vec3" && (r = new T(this.value._x, this.value._y, this.value._z)), e.value = r
                } else e.value = this.value;
                this.initialStateSet = !0
            }
        }
        updateEffect(e) {
            const t = typeof this.value == "object";
            if (this.complete || !e.userData.createdAt || !this.initialStateSet) return !1;
            const s = performance.now(),
                i = e.uniforms[this.prop],
                r = Te(this.transition.ease),
                a = e.userData.createdAt + this.transition.delay,
                h = Math.max(0, Math.min(1, (s - a) / this.transition.duration));
            let o = this.value;
            if (h > 0 && h <= 1) {
                let l = r(h);
                t ? (i.value.x = F(o.x, this.endVal.x, l), this.prop === "pos" ? i.value.y = F(1 - o.y, this.endVal.y, l) : i.value.y = F(o.y, this.endVal.y, l), o.type === "Vec3" && (i.value.z = F(o.z, this.endVal.z, l))) : i.value = F(o, this.endVal, l)
            } else t ? i.value = Y(this.value, this.prop === "pos") : i.value = this.value;
            return h >= 1 && (this.complete = !0, this.progress = 0), this.lastTick = s, !0
        }
        resetState() {
            this.progress = 0, this.complete = !1, this.initialStateSet = !1
        }
    }
    class Rt {
        constructor({
            prop: e,
            value: t,
            range: s,
            offset: i,
            momentum: r,
            uniformData: a,
            mode: h = "scrollIntoView",
            delta: o = .01,
            absScrollValue: l = !0
        }) {
            O(this, "type", "scroll");
            this.prop = e, this.progress = 0, this.momentum = r, this.range = s, this.offset = i, this.mode = h, this.delta = o, this.lastScrollTop = 0, this.absScrollValue = l, this.uniformData = a, this.value = Y(t, this.prop === "pos")
        }
        updateEffect(e, t, {
            top: s,
            height: i,
            isFixed: r
        }) {
            if (t === void 0) return !1;
            this.startVal || (typeof this.value == "object" ? this.startVal = Y(t, this.prop === "pos") : this.startVal = t);
            const a = typeof this.value == "object",
                h = e.uniforms[this.prop],
                o = window.innerHeight,
                l = window.scrollY || window.pageYOffset;
            if (r && (s -= l), this.mode === "scrollIntoView") {
                const d = s + l - o * this.offset,
                    c = d + (o + i) * this.range;
                let f = (l - d) / (c - d),
                    u = this.value;
                if (!h) return !1;
                let p = Math.max(0, Math.min(1, f));
                return this.lastTick !== void 0 && (p = $(p, this.lastTick, this.momentum * 2)), this.lastTick !== void 0 && Math.abs(this.lastTick - p) < .001 ? !1 : (a ? (h.value.x = F(this.startVal.x, u.x, p), this.prop === "pos" ? h.value.y = F(1 - this.startVal.y, u.y, p) : h.value.y = F(this.startVal.y, u.y, p), this.startVal.type === "Vec3" && (h.value.z = F(this.startVal.z, u.z, p))) : h.value = F(this.startVal, u, p), this.lastTick = p, !0)
            } else if (this.mode === "whileScrolling") {
                const d = l - this.lastScrollTop;
                this.lastScrollTop = l;
                let c = d * this.delta,
                    f = this.value;
                if (this.absScrollValue && (c = Math.abs(c)), this.lastTick !== void 0 && (c = $(c, this.lastTick, this.momentum * 2), Math.abs(c) < .001)) return !1;
                a ? (h.value.x = F(t.x, f.x, c), h.value.y = F(t.y, f.y, c), t.type === "Vec3" && (h.value.z = F(t.z, f.z, c))) : h.value = F(t, f, c), this.lastTick = c
            }
            return !0
        }
        resetState() {
            this.lastTick = void 0
        }
    }
    class St {
        constructor({
            prop: e,
            value: t,
            transition: s,
            uniformData: i
        }) {
            O(this, "type", "hover");
            this.prop = e, this.transition = s, this.progress = 0, this.rawProgress = 0, this.lastProgress = null, this.value = Y(t, this.prop === "pos"), this.uniformData = i
        }
        updateEffect(e, t, s) {
            if (t === void 0) return !1;
            const i = typeof this.value == "object";
            let r = performance.now(),
                a, h = !1;
            s === null ? (h = !0, a = this.lastTick || r, this.lastProgress = this.rawProgress) : a = s + this.transition.delay;
            const o = e.uniforms[this.prop],
                l = Math.max(0, Math.min(1, (r - a) / this.transition.duration));
            let d = h ? this.rawProgress - l : this.lastProgress + l;
            this.rawProgress = Math.max(0, Math.min(1, d)), this.progress = Te(this.transition.ease)(this.rawProgress);
            const c = () => {
                i ? (o.value.x = F(t.x, this.value.x, this.progress), this.prop === "pos" ? o.value.y = F(t.y, 1 - this.value.y, this.progress) : o.value.y = F(t.y, this.value.y, this.progress), this.value.type === "Vec3" && (o.value.z = F(t.z, this.value.z, this.progress))) : o.value = F(t, this.value, this.progress)
            };
            return o ? !s && this.progress === 0 ? (this.lastProgress !== this.progress && c(), !1) : (!s && this.transition.forwardsOnly && (this.progress = 0, this.rawProgress = 0), c(), this.lastTick = r, this.lastEnterTime = s, this.progress > 0 && this.progress < 1) : !1
        }
        resetState() {
            this.progress = 0
        }
    }

    function Mt(n) {
        return n.forEach(e => {
            var t, s;
            for (let i in e.props)((t = e.props[i]) == null ? void 0 : t.type) === "Vec2" ? e.props[i] = new L(e.props[i]._x, e.props[i]._y) : ((s = e.props[i]) == null ? void 0 : s.type) === "Vec3" ? e.props[i] = new T(e.props[i]._x, e.props[i]._y, e.props[i]._z) : typeof e.props[i] == "object" && (e.props[i] = W(e.props[i]))
        }), n
    }
    class Re {
        constructor(e, t) {
            O(this, "local", {
                id: "",
                projectId: ""
            });
            this.visible = e.visible !== void 0 ? e.visible : !e.hidden || !0, this.locked = e.locked || !1, this.aspectRatio = e.aspectRatio || 1, this.breakpoints = Mt(e.breakpoints || []), this.local.sceneId = t, this.local.id = ve()
        }
        state() {
            return b.scenes.find(e => e.id === this.local.sceneId) || this.initOptions
        }
        getIndex() {
            return this.state().layers.map(e => e.local.id).indexOf(this.local.id)
        }
        getPlane() {
            return this.state().curtain.planes.find(e => e.type !== "PingPongPlane" && e.userData.id === this.local.id)
        }
        getPlanes() {
            return this.state().curtain.planes.filter(e => e.type !== "PingPongPlane" && e.userData.id === this.local.id)
        }
        getMaskedItem() {
            return this.mask ? this.state().layers.filter(e => e.visible && !e.parentLayer)[this.getIndex() - 1] : !1
        }
        getChildEffectItems() {
            if (this.effects && this.effects.length) {
                const e = this.state().layers.filter(s => this.effects.includes(s.parentLayer));
                return this.effects.map(s => e.find(i => i.parentLayer === s)).filter(s => s !== void 0)
            } else return []
        }
        setBreakpointValues() {
            const e = window.innerWidth,
                t = this.breakpoints.sort((r, a) => a.min - r.min),
                s = {};
            if (t.length === 1 && t[0].name === "Desktop") return;
            if (t.length >= 1 && !t.find(r => r.name === "Desktop")) throw new Error("Malfored breakpoint data, missing Desktop");
            for (let r = t.length - 1; r >= 0; r--) {
                const a = t[r];
                if (a.max === null || e <= a.max)
                    for (let h in a.props) s.hasOwnProperty(h) || (s[h] = a.props[h])
            }
            const i = this.breakpoints.find(r => r.name === "Desktop");
            if (i)
                for (let r in i.props) s.hasOwnProperty(r) || (s[r] = i.props[r]);
            for (let r in s)
                if (this.hasOwnProperty(r)) {
                    let a = s[r];
                    a.type ? (this[r].x = a._x, this[r].y = a._y, a._z !== void 0 && (this[r].z = a._z)) : this[r] = a
                }
            this.local.bpProps = s
        }
    }
    let ue = class extends Re {
        constructor(t, s, i) {
            super(t, s);
            O(this, "isElement", !0);
            this.initOptions = i, this.opacity = t.opacity || 1, this.displace = t.displace || 0, this.trackMouse = t.trackMouse || 0, this.axisTilt = t.axisTilt || 0, this.bgDisplace = t.bgDisplace || 0, this.dispersion = t.dispersion || 0, this.mouseMomentum = t.mouseMomentum || 0, this.blendMode = t.blendMode || "NORMAL", this.compiledFragmentShaders = t.compiledFragmentShaders || [], this.compiledVertexShaders = t.compiledVertexShaders || []
        }
        createLocalCanvas() {
            const t = this.state(),
                s = document.createElement("canvas"),
                i = t.dpi * t.scale;
            s.width = t.element.offsetWidth * i, s.height = t.element.offsetHeight * i;
            const a = Q([t.element.offsetWidth, t.element.offsetHeight])[0] / t.element.offsetWidth,
                h = s.getContext("2d");
            h.scale(i / a, i / a), this.local.canvas = s, this.local.ctx = h
        }
        resize() {
            const t = this.state();
            if (this.local.canvas) {
                const s = +t.dpi * t.scale,
                    r = Q([t.element.offsetWidth, t.element.offsetHeight])[0] / t.element.offsetWidth;
                this.local.canvas.width = t.canvasWidth, this.local.canvas.height = t.canvasHeight, this.local.ctx.scale(s / r, s / r)
            }
        }
        getPositionOffset() {
            const t = this.state(),
                s = t.canvasWidth / t.canvasHeight,
                i = this.aspectRatio / s,
                r = t.canvasWidth * Math.sqrt(i),
                a = t.canvasHeight / Math.sqrt(i),
                o = Q([t.element.offsetWidth, t.element.offsetHeight])[0] / t.element.offsetWidth;
            let l = (t.canvasWidth * o - r * o) / (t.dpi * 2),
                d = (t.canvasHeight * o - a * o) / (t.dpi * 2);
            this.layerType === "image" && (l += r * o / (t.dpi * 2), d += a * o / (t.dpi * 2));
            let c = this.translateX + l,
                f = this.translateY + d;
            return {
                x: c,
                y: f,
                offX: l,
                offY: d
            }
        }
    };
    class Et extends ue {
        constructor(t, s, i) {
            super(t, s);
            O(this, "layerType", "shape");
            O(this, "isElement", !0);
            this.initOptions = i;
            let r = this.default(t || {});
            for (let a in r) this[a] = r[a];
            this.breakpoints.length && this.setBreakpointValues(), Object.keys(t).length && this.createLocalCanvas()
        }
        default (t) {
            return {
                blendMode: t.blendMode || "NORMAL",
                borderRadius: t.borderRadius || 0,
                coords: t.coords || [],
                displace: t.displace || 0,
                dispersion: t.dispersion || 0,
                bgDisplace: t.bgDisplace || 0,
                effects: t.effects || [],
                fill: t.fill || ["#777777"],
                fitToCanvas: t.fitToCanvas || !1,
                gradientAngle: t.gradientAngle || t.gradAngle || 0,
                gradientType: t.gradientType || t.gradType || "linear",
                mask: t.mask || 0,
                numSides: t.numSides || 3,
                opacity: t.opacity || 1,
                rotation: t.rotation || 0,
                translateX: t.translateX || 0,
                translateY: t.translateY || 0,
                type: t.type || "rectangle",
                stroke: t.stroke || ["#000000"],
                strokeWidth: t.strokeWidth || 0,
                width: t.width || null,
                height: t.height || null
            }
        }
        unpackage() {
            return this.fill = W(this.fill), this.stroke = W(this.stroke), this.coords = W(this.coords), this.coords.length && (!this.width || !this.height) && (this.width = [this.coords[0][0], this.coords[1][0]], this.height = [this.coords[1][1], this.coords[2][1]]), this.effects = W(this.effects), this.render(), this
        }
        render() {
            let t;
            if (this.fitToCanvas) {
                const s = this.state(),
                    r = Q([s.element.offsetWidth, s.element.offsetHeight])[0] / s.element.offsetWidth,
                    a = s.dpi * s.scale;
                let h = s.canvasWidth * r / a,
                    o = s.canvasHeight * r / a;
                this.coords = [
                    [0, 0],
                    [h, 0],
                    [h, o],
                    [0, o]
                ], t = this.coords
            } else this.coords = [
                [this.width[0], this.height[0]],
                [this.width[1], this.height[0]],
                [this.width[1], this.height[1]],
                [this.width[0], this.height[1]]
            ], t = yt(this);
            if (this.local.ctx.beginPath(), this.type === "rectangle") {
                const s = X(this.coords);
                let i = this.borderRadius * Math.min(s.width, s.height) / 2;
                const r = (h, o, l) => {
                        const d = Math.cos(l),
                            c = Math.sin(l);
                        return [h * d - o * c, h * c + o * d]
                    },
                    a = this.rotation * 2 * Math.PI;
                if (t.length) {
                    this.local.ctx.beginPath();
                    let h = [-1, 1, -1, 1];
                    if (!this.fitToCanvas) {
                        let o = this.coords[0][0] < this.coords[1][0],
                            l = this.coords[0][1] > this.coords[2][1];
                        o && (h = [-1, -1, -1, -1]), l && (h = [1, 1, 1, 1]), o && l && (h = [1, -1, 1, -1])
                    }
                    for (let o = 0; o < t.length; o++) {
                        const [l, d] = t[o], [c, f] = t[(o + 1) % t.length], u = (o + 1) * Math.PI / 2 + a, [p, m] = r(i, 0, u);
                        let w = h[o];
                        this.local.ctx.lineTo(l - p * w, d - m * w), this.local.ctx.arcTo(l, d, c, f, i)
                    }
                    this.local.ctx.closePath(), this.local.ctx.stroke()
                }
            } else if (this.type === "circle") {
                let s = X(t);
                const i = X(this.coords);
                this.local.ctx.ellipse(s.center.x, s.center.y, i.width / 2, i.height / 2, this.rotation * Math.PI * 2, 0, 2 * Math.PI)
            } else if (this.type === "polygon") {
                const s = this.numSides;
                if (t.length >= 2) {
                    const i = X(t),
                        r = X(this.coords),
                        a = this.coords[0][1] > this.coords[2][1],
                        h = i.center.y,
                        o = i.center.x,
                        l = (u, p, m, w, R) => {
                            const _ = Math.cos(m),
                                x = Math.sin(m);
                            u -= w, p -= R;
                            const y = u * _ - p * x,
                                v = u * x + p * _;
                            return u = y + w, p = v + R, [u, p]
                        },
                        d = (this.rotation + (a ? .5 : 0)) * 2 * Math.PI,
                        c = r.width / Math.sqrt(3) * .86,
                        f = r.height / Math.sqrt(3) * .86;
                    this.local.ctx.beginPath();
                    for (let u = 0; u < s; u++) {
                        const m = -Math.PI / 2 + 2 * Math.PI * u / s;
                        let w = o + c * Math.cos(m),
                            R = h + f * Math.sin(m);
                        [w, R] = l(w, R, d, o, h), u === 0 ? this.local.ctx.moveTo(w, R) : this.local.ctx.lineTo(w, R)
                    }
                    this.local.ctx.closePath()
                }
            }
            this.local.ctx.fillStyle = ye(this.local.ctx, this, t), this.local.ctx.clearRect(0, 0, this.state().canvasWidth, this.state().canvasHeight), this.local.ctx.fill(), this.strokeWidth && (this.local.ctx.strokeStyle = this.stroke[0], this.local.ctx.lineWidth = this.strokeWidth, this.local.ctx.stroke())
        }
    }
    class Se extends Re {
        constructor(t, s, i) {
            super(t, s);
            O(this, "layerType", "effect");
            this.initOptions = i, this.type = t.type || "sine", this.speed = t.speed || .5, this.data = t.data || {}, this.parentLayer = t.parentLayer || !1, this.animating = t.animating || !1, this.isMask = t.isMask || 0, this.texture = t.texture || null, this.mouseMomentum = t.mouseMomentum || 0, this.compiledFragmentShaders = t.compiledFragmentShaders || [], this.compiledVertexShaders = t.compiledVertexShaders || [], this.states = {
                appear: t.states && t.states.appear ? t.states.appear.map(r => new Tt(r)) : [],
                scroll: t.states && t.states.scroll ? t.states.scroll.map(r => new Rt(r)) : [],
                hover: t.states && t.states.hover ? t.states.hover.map(r => new St(r)) : []
            };
            for (let r in t) this[r] || (this[r] = t[r]);
            this.breakpoints.length && this.setBreakpointValues()
        }
        unpackage() {
            for (let t in this) this[t] && this[t].type && (this[t].type === "Vec2" ? this[t] = new L(this[t]._x, this[t]._y) : this[t].type === "Vec3" && (this[t] = new T(this[t]._x, this[t]._y, this[t]._z)));
            return this
        }
        getParent() {
            return this.state().layers.filter(t => t.effects && t.effects.length).find(t => t.effects.includes(this.parentLayer))
        }
    }
    class At extends ue {
        constructor(t, s, i) {
            super(t, s);
            O(this, "layerType", "image");
            O(this, "isElement", !0);
            this.initOptions = i;
            let r = this.default(t || {});
            for (let a in r) this[a] = r[a];
            this.breakpoints.length && this.setBreakpointValues(), Object.keys(t).length && (this.createLocalCanvas(), this.loadImage())
        }
        default (t) {
            return {
                bgDisplace: t.bgDisplace || 0,
                dispersion: t.dispersion || 0,
                effects: t.effects || [],
                size: t.size || .25,
                rotation: t.rotation || t.angle || 0,
                height: t.height || 50,
                fitToCanvas: t.fitToCanvas || !1,
                displace: t.displace || 0,
                repeat: t.repeat || 0,
                mask: t.mask || 0,
                rotation: t.rotation || 0,
                scaleX: t.scaleX || 1,
                scaleY: t.scaleY || 1,
                src: t.src || "",
                speed: t.speed || .5,
                translateX: t.translateX || 0,
                translateY: t.translateY || 0,
                width: t.width || 50
            }
        }
        unpackage() {
            return this.effects = W(this.effects), this
        }
        loadImage() {
            const t = new Image;
            t.crossOrigin = "Anonymous", t.addEventListener("load", () => {
                this.local.img = t, this.width = t.width, this.height = t.height, this.render = this.renderImage, this.render(), this.local.loaded = !0, this.local.fullyLoaded = !0, this.getPlane() ? this.getPlane().textures.filter(s => s.sourceType === "canvas").forEach(s => {
                    s.needUpdate(), s.shouldUpdate = !1
                }) : this.rendering || this.state().curtain.render()
            }, !1), t.src = this.src
        }
        getRelativeScale() {
            return Math.min(1080 / this.width, 1080 / this.height)
        }
        renderImage() {
            const t = this.getPositionOffset(),
                s = this.state();
            let i = t.x,
                r = t.y;
            const a = this.rotation * 360 * (Math.PI / 180),
                h = this.getRelativeScale();
            let o = this.width * h * this.scaleX,
                l = this.height * h * this.scaleY;
            const d = s.dpi * s.scale;
            if (this.local.ctx.clearRect(0, 0, s.canvasWidth, s.canvasHeight), this.fitToCanvas) {
                const f = Q([s.element.offsetWidth, s.element.offsetHeight])[0] / s.element.offsetWidth;
                let u = this.width / this.height,
                    p = s.canvasWidth * f / d,
                    m = s.canvasHeight * f / d;
                p / m < u ? (l = m, o = m * u) : (o = p, l = p / u), i = p / 2, r = m / 2, this.local.ctx.save(), this.local.ctx.translate(i, r), this.local.ctx.drawImage(this.local.img, -o / 2, -l / 2, o, l), this.local.ctx.restore()
            } else this.local.ctx.save(), this.local.ctx.translate(i, r), this.local.ctx.rotate(a), this.local.ctx.scale(this.size, this.size), this.local.ctx.drawImage(this.local.img, -o / 2, -l / 2, o, l), this.local.ctx.restore()
        }
        render() {}
    }
    class Ct extends ue {
        constructor(t, s, i, r) {
            super(t, s);
            O(this, "layerType", "text");
            O(this, "isElement", !0);
            O(this, "justCreated", !1);
            this.initOptions = r;
            let a = this.default(t || {});
            for (let h in a) this[h] = a[h];
            this.breakpoints.length && this.setBreakpointValues(), this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), vt(this, r.element), Object.keys(t).length && this.createLocalCanvas(), this.loadFont()
        }
        default (t) {
            return {
                bgDisplace: t.bgDisplace || 0,
                dispersion: t.dispersion || 0,
                effects: t.effects || [],
                fill: t.fill || ["#ffffff"],
                highlight: t.highlight || ["transparent"],
                fontSize: t.fontSize || 24,
                fontCSS: t.fontCSS || null,
                lineHeight: t.lineHeight || 25,
                letterSpacing: t.letterSpacing || 0,
                mask: t.mask || 0,
                fontFamily: t.fontFamily || "arial",
                fontStyle: t.fontStyle || "normal",
                fontWeight: t.fontWeight || "normal",
                textAlign: t.textAlign || "left",
                textContent: t.textContent || "",
                gradientAngle: t.gradientAngle || t.gradAngle || 0,
                gradientType: t.gradientType || t.gradType || "linear",
                coords: t.coords || [],
                rotation: t.rotation || 0,
                translateX: t.translateX || 0,
                translateY: t.translateY || 0,
                width: t.width || 200,
                height: t.height || 50
            }
        }
        unpackage() {
            return this.fill = W(this.fill), this.highlight = W(this.highlight), this.coords = W(this.coords), this.effects = W(this.effects), this
        }
        loadFont() {
            const t = this.fontFamily,
                s = this.fontStyle.includes("italic") ? "italic" : "normal",
                i = isNaN(parseInt(this.fontStyle)) ? 400 : parseInt(this.fontStyle);
            let r = this.fontCSS.src.split(" ").join("%20");
            const a = new FontFace(t, `url(${r})`, {
                style: s,
                weight: i
            });
            document.fonts.add(a), a.load().then(() => {
                this.handleFontLoaded()
            }).catch(h => {
                console.error(h)
            })
        }
        handleFontLoaded() {
            this.local.loaded = !0, this.render(), this.state().id && this.getPlane() && this.getPlane().textures.filter(t => t.sourceType === "canvas").forEach(t => {
                t.needUpdate(), t.shouldUpdate = !1, this.rendering || this.state().curtain.render()
            })
        }
        render() {
            if (!this.local.loaded) return;
            const t = this.getPositionOffset();
            let s = t.x,
                i = t.y,
                r = 0,
                a = this.width,
                h = this.height,
                o = this.fontSize > 0 ? this.fontSize : 0,
                l = this.lineHeight > 0 ? this.lineHeight : 0,
                d = this.fontStyle.includes("italic") ? "italic" : "normal",
                c = "400";
            this.local.textBoxPos = {
                x: s,
                y: i
            }, this.local.ctx.clearRect(0, 0, this.state().canvasWidth, this.state().canvasHeight), this.local.ctx.font = `${d} ${c} ${o}px/${l}px ${this.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial`, this.isSafari || (this.local.ctx.textAlign = this.textAlign, this.local.ctx.letterSpacing = this.letterSpacing + "px");
            const f = this.local.ctx.measureText("m").width;
            a = Math.max(a, f), this.local.ctx.save(), this.local.ctx.translate(s + a / 2, i + h / 2), this.local.ctx.rotate(this.rotation * 360 * Math.PI / 180), this.local.ctx.translate(-(s + a / 2), -(i + h / 2)), this.textAlign === "center" && (s += a / 2), this.textAlign === "right" && (s += a), this.local.ctx.fillStyle = ye(this.local.ctx, this, this.coords);
            const u = (_, x, y, v, P, S, D) => {
                    let C = x.split("").reduce((M, I, H) => M + _.measureText(I).width + (H < x.length - 1 ? P : 0), 0),
                        E;
                    if (S === "center" ? E = y + (D - C) / 2 - D / 2 : E = y, S === "right")
                        for (let M = x.length - 1; M >= 0; M--) {
                            const I = x[M];
                            E -= _.measureText(I).width, _.fillText(I, E, v), M > 0 && (E -= P)
                        } else
                            for (let M = 0; M < x.length; M++) _.fillText(x[M], E, v), E += _.measureText(x[M]).width + P
                },
                p = (_, x) => {
                    let y = i + l * x + l / 2 + o / 3;
                    this.isSafari ? u(this.local.ctx, _, s, y, this.letterSpacing, this.textAlign, a) : this.local.ctx.fillText(_, s, y)
                },
                m = this.textContent ? this.textContent.split(`
`) : [""];
            let w = m.length;
            const R = (_, x, y) => x.split("").reduce((P, S, D) => (P += _.measureText(S).width, D < x.length - 1 && (P += y), P), 0);
            for (let _ = 0; _ < w; _++) {
                let x = "",
                    y = m[_].split(/(\s|\n)/);
                for (let v = 0; v < y.length; v++) {
                    const P = y[v],
                        S = x + P;
                    if ((this.isSafari && this.letterSpacing ? R(this.local.ctx, S, this.letterSpacing) : this.local.ctx.measureText(S).width) > a || P === `
`) {
                        if (x !== "") m[_] = x.trim(), v !== y.length - 1 ? (m.splice(_ + 1, 0, y.slice(v).join("")), w++) : P !== `
` && m.push(P);
                        else {
                            let C = P,
                                E = _;
                            for (; C.length > 0;) {
                                let M = "";
                                for (let I = 0; I < C.length && (this.local.ctx.measureText(M + C[I]).width <= a || I == 0); I++) M += C[I];
                                C = C.slice(M.length), m[E] = M.trim(), C.length > 0 && (m.splice(E + 1, 0, C), E++, w++)
                            }
                            y.slice(v + 1).length > 0 && (m[E] += y.slice(v + 1).join(""))
                        }
                        break
                    } else x = S;
                    v === y.length - 1 && (m[_] = x.trim())
                }
            }
            m.forEach((_, x) => {
                p(_, r), x < m.length - 1 && r++
            }), this.local.ctx.translate(-(s + a / 2), -(i + h / 2)), this.local.ctx.restore(), this.height = this.lineHeight * r + this.lineHeight
        }
    }

    function Me() {
        document[ie] ? cancelAnimationFrame(K) : ce()
    }

    function Ee() {
        b.scenes.forEach(n => {
            n.refresh()
        })
    }
    let Ae = window.scrollY;

    function Ce(n) {
        const e = b.scenes.filter(i => i.getAnimatingEffects().length),
            t = b.scenes.filter(i => i.rendering);
        e.length && !t.length && ce();
        const s = performance.now();
        t.forEach(i => {
            if (!i.lastCheckTime || s - i.lastCheckTime > 64) {
                let r = i.element.getBoundingClientRect();
                i.lastBbox && (Math.abs(r.top - i.lastBbox.top) < 1 ? (i.fixedCounter = (i.fixedCounter || 0) + 1, i.fixedCounter > 3 && (i.isFixed = !0)) : i.fixedCounter = 0), i.lastBbox = r, i.lastCheckTime = s
            }
            i.isFixed || (i.mouse.movePos.y += (window.scrollY - Ae) / 2)
        }), Ae = window.scrollY
    }

    function Ft() {
        b.scenes.forEach(n => {
            if (n.isInView && n.curtain.planes.find(e => e.uniforms.mousePos) && !(re() && n.interactivity && n.interactivity.mouse && n.interactivity.mouse.disableMobile)) {
                n.mouse.pos.y = n.mouse.movePos.y, n.mouse.pos.x = n.mouse.movePos.x, n.mouse.lastPos.x = n.mouse.pos.x, n.mouse.lastPos.y = n.mouse.pos.y;
                let e = n.isFixed ? n.element.offsetTop : n.bbox.top + n.scrollY,
                    t = n.isFixed ? n.element.offsetLeft : n.bbox.left;
                n.mouse.page.x > t && n.mouse.page.y > e && n.mouse.page.x < n.lastBbox.width + t && n.mouse.page.y < n.lastBbox.height + e ? n.mouse.enterTime || (n.mouse.enterTime = performance.now()) : n.mouse.enterTime = null
            }
        })
    }

    function Fe(n) {
        b.scenes.filter(e => e.isInView).forEach(e => {
            e.mouse.page.x = 99999999999, e.mouse.page.y = 99999999999, e.mouse.enterTime = null
        })
    }

    function ae(n) {
        b.scenes.filter(e => e.isInView).forEach(e => {
            let t = e.bbox,
                s, i;
            n.targetTouches ? (s = n.targetTouches[0].pageX, i = n.targetTouches[0].pageY) : (s = n.pageX, i = n.pageY), e.isFixed && (e.scrollY = 0, n.targetTouches ? i = n.targetTouches[0].clientY : i = n.clientY);
            const r = {
                    x: t.left / 2,
                    y: (t.top + e.scrollY) / 2
                },
                a = s / 2 - r.x,
                h = i / 2 - r.y;
            e.mouse.page.x = s, e.mouse.page.y = i, e.mouse.movePos.x = a, e.mouse.movePos.y = h
        }), be = !0
    }
    b.scenes = [];
    class It {
        constructor(e) {
            O(this, "scrollY", 0);
            this.id = e.id, this.projectId = e.projectId, this.canvasWidth = e.width || e.element.offsetWidth || window.innerWidth, this.canvasHeight = e.height || e.element.offsetHeight || window.innerHeight, this.curtain = void 0, this.curtainRafId = void 0, this.dpi = +e.dpi || Math.min(1.5, window.devicePixelRatio), this.element = e.element, this.fps = e.fps || 60, this.name = e.name, this.iframe = e.iframe || !1, this.frameDuration = Math.floor(1e3 / (e.fps || 60)), this.layers = e.layers, this.lazyLoad = e.lazyLoad, this.initialized = !1, this.lasTick = null, this.isInView = this.iframe || !1, this.lastTime = 0, this.rendering = !1, this.bbox = {}, this.isFixed = window.getComputedStyle(this.element).position === "fixed", this.interactivity = {
                mouse: {
                    disableMobile: !1
                }
            }, this.mouse = {
                downPos: {
                    x: 0,
                    y: 0
                },
                movePos: {
                    x: window.innerWidth / 4,
                    y: window.innerHeight / 4
                },
                lastPos: {
                    x: window.innerWidth / 4,
                    y: window.innerHeight / 4
                },
                delta: {
                    x: 0,
                    y: 0
                },
                page: {
                    x: 0,
                    y: 0
                },
                dragging: !1,
                trail: [],
                recordTrail: !1,
                enterTime: null,
                pos: {
                    x: window.innerWidth / 4,
                    y: window.innerHeight / 4
                }
            }, this.renderingScale = e.renderingScale || 1, this.scale = e.scale || 1, this.split = !1, this.versionId = "", e.width && e.height && (this.element.style.width = e.width + "px", this.element.style.height = e.height + "px"), this.bbox = this.element.getBoundingClientRect(), this.lastBbox = this.bbox, this.createCurtains(), this.setCanvasScale()
        }
        preloadCanvasTexture(e, t) {
            e.loadCanvas(t.local.canvas, {
                sampler: "uTexture",
                premultiplyAlpha: !0
            }, s => {
                t.preloadedCanvasTexture = s
            }, s => {
                console.error("Error loading canvas texture:", s)
            })
        }
        setCanvasScale() {
            this.canvasWidth = this.element.offsetWidth * this.dpi * this.scale, this.canvasHeight = this.element.offsetHeight * this.dpi * this.scale
        }
        destroy() {
            this.element && (this.element.removeAttribute("data-us-initialized"), this.element.removeAttribute("data-scene-id"), b.scenes = b.scenes.filter(e => e.id !== this.id)), this.curtain.dispose()
        }
        resize() {
            this.setCanvasScale(), this.layers.filter(e => e.isElement).forEach(e => {
                e.resize(), e.getPlane() && e.getPlane().textures.filter(t => t.sourceType === "canvas").forEach(t => {
                    t.needUpdate()
                })
            }), this.layers.filter(e => e.render).forEach(e => {
                e.render()
            }), this.curtain.resize(), this.bbox = this.element.getBoundingClientRect()
        }
        refresh() {
            this.initialized = !1, this.curtain.planes.forEach(e => e.type !== "PingPongPlane" && e.remove()), this.layers.forEach(e => {
                var t, s;
                (t = e.states) == null || t.scroll.forEach(i => i.resetState()), (s = e.states) == null || s.appear.forEach(i => i.disabled = !0), e.breakpoints.length && e.setBreakpointValues()
            }), this.lazyLoad = !0, requestAnimationFrame(() => {
                this.resize(), this.isInView && (this.scrollY = window.scrollY || window.pageYOffset, this.initializePlanes())
            })
        }
        updateMouseTrail() {
            be && (this.mouse.trail.unshift([this.mouse.pos.x / (this.bbox.width * .5), 1 - this.mouse.pos.y / (this.bbox.height * .5)]), this.mouse.trail.length > 4 && this.mouse.trail.pop())
        }
        getAnimatingEffects() {
            return this.layers.filter(e => Z(e) && e.visible)
        }
        createCurtains() {
            this.curtain = new He({
                container: this.element,
                premultipliedAlpha: !0,
                antialias: !1,
                autoRender: !1,
                autoResize: !1,
                watchScroll: !1,
                renderingScale: Math.min(Math.max(.25, this.renderingScale), 1),
                production: !0,
                pixelRatio: this.dpi
            }), this.curtain.onContextLost(() => {
                this.curtain.restoreContext()
            }), this.scrollY = window.scrollY || window.pageYOffset, document.querySelectorAll(`[data-us-text="loading"][data-us-project="${this.id}"]`).forEach(e => {
                e.style.position = "absolute"
            })
        }
        renderNFrames(e, t) {
            let s = 0;
            const i = () => {
                this.curtain.render(), s < e ? (s++, requestAnimationFrame(i)) : t && t()
            };
            this.rendering || i()
        }
        setInteractiveParams(e, t) {
            let s = {
                mouse: {
                    disableMobile: !1
                }
            };
            t && t.mouse && "disableMobile" in t.mouse && (s.mouse.disableMobile = t.mouse.disableMobile), e && e.interactivity && e.interactivity.mouse && "disableMobile" in e.interactivity.mouse && (s.mouse.disableMobile = e.interactivity.mouse.disableMobile), this.interactivity = s
        }
        getSplitOrderedItems() {
            let e = this.getOrderedItems(),
                t = 0,
                s = e[t];
            if (s) {
                let i = s.parentLayer ? s.getParent() : null,
                    r = i && Z(i),
                    a = i && i.effects && i.effects.length && i.getChildEffectItems().filter(h => Z(h)).length;
                for (; s && !Z(s) && !r && !a;) t++, s = e[t], s && (i = s.parentLayer ? s.getParent() : null, r = i && Z(i), a = i && i.effects && i.effects.length && i.getChildEffectItems().filter(h => Z(h)).length);
                return {
                    static: this.getOrderedItems().splice(0, t),
                    dynamic: this.getOrderedItems().splice(t)
                }
            } else return {
                static: [],
                dynamic: []
            }
        }
        initializePlanes(e) {
            this.initializing = !0, this.handleItemPlanes(() => {
                this.handlePlaneCreation(), e && e(this)
            })
        }
        getPassPlane(e, t) {
            return this.curtain.planes.find(s => s.userData.id === e.local.id && s.userData.passIndex === t)
        }
        getRenderTargets() {
            return this.curtain.renderTargets.filter(e => e.userData.id)
        }
        getPlanes() {
            return this.curtain.planes.filter(e => e.type !== "PingPongPlane")
        }
        removeUnusedPlanes() {
            this.curtain.planes.forEach(e => {
                e.remove()
            }), this.curtain.renderTargets.forEach(e => {
                e.remove()
            })
        }
        getPlaneParams(e, t) {
            var h, o, l;
            let s = ["noise", "noiseField", "sine", "ripple", "bulge"].includes(e.type) ? 500 : 1;
            const i = {
                resolution: {
                    name: "uResolution",
                    type: "2f",
                    value: new L(this.canvasWidth, this.canvasHeight)
                },
                mousePos: {
                    name: "uMousePos",
                    type: "2f",
                    value: new L(.5)
                },
                time: {
                    name: "uTime",
                    type: "1f",
                    value: 0
                },
                dpi: {
                    name: "uDpi",
                    type: "1f",
                    value: this.dpi * +this.renderingScale
                }
            };
            if (e.isElement && (i.sampleBg = {
                    name: "uSampleBg",
                    type: "1i",
                    value: 1
                }), e.type === "mouse" && (i.previousMousePos = {
                    name: "uPreviousMousePos",
                    type: "2f",
                    value: new L(.5)
                }), e.states && [...e.states.appear, ...e.states.scroll, ...e.states.hover].forEach(d => {
                    i[d.prop] || d.uniformData && (i[d.prop] = d.uniformData, i[d.prop].value = d.value)
                }), (h = e.data) != null && h.uniforms)
                for (let d in e.data.uniforms) {
                    let c = e.data.uniforms[d];
                    i[d] = e.data.uniforms[d], ((o = c.value) == null ? void 0 : o.type) === "Vec3" ? i[d].value = new T(c.value._x, c.value._y, c.value._z) : ((l = c.value) == null ? void 0 : l.type) === "Vec2" ? i[d].value = new L(c.value._x, c.value._y) : typeof c.value == "object" && (i[d].value = W(c.value))
                }
            let r = e.compiledFragmentShaders[t] || e.compiledFragmentShaders[0],
                a = e.compiledVertexShaders[t] || e.compiledVertexShaders[0];
            return {
                fragmentShader: r,
                vertexShader: a,
                widthSegments: s,
                heightSegments: s,
                texturesOptions: {
                    floatingPoint: re() ? "none" : "half-float",
                    premultiplyAlpha: !0
                },
                uniforms: i
            }
        }
        createPlane(e, t, s) {
            var a, h;
            let i;
            e.isElement ? i = this.getPlaneParams(e) : i = this.getPlaneParams(e, s ? s.index : null), i.watchScroll = !1, (a = e.data) != null && a.downSample && !s || s != null && s.downSample ? (this.curtain.renderer._renderingScale = this.scale * .5, this.curtain.renderer.setSize()) : (this.curtain.renderer._renderingScale = this.scale, this.curtain.renderer.setSize());
            const r = new xe(this.curtain, this.curtain.container, i);
            if (!r) throw new Error("Unable to create plane");
            return r.textures.length = 0, r.userData.id = e.local.id, r.userData.layerType = e.layerType, r.userData.type = e.type, (e.texture || (h = e.data) != null && h.texture) && (r.userData.textureLoaded = !1), r.setRenderOrder(t), r
        }
        createPingPongPlane(e, t, s) {
            let i = this.getPlaneParams(e, 1),
                r = this.curtain.planes.find(a => a.type === "PingPongPlane" && a.userData.id === e.local.id);
            if (r ? r.setRenderOrder(t) : (r = new _t(this.curtain, this.curtain.container, i), r.userData.id = e.local.id, r.userData.pingpong = !0, r.setRenderOrder(t), this.setInitialEffectPlaneUniforms(r, e, e.getParent(), s), r.onReady(() => {
                    r.userData.isReady = !0
                }).onRender(() => {
                    this.setEffectPlaneUniforms(r, e)
                })), !!r) return r
        }
        createEffectPlane(e, t, s) {
            const i = this.createPlane(e, t, s),
                r = e.getParent();
            s ? (i.userData.passIndex = s.index, i.userData.downSample = s.downSample, i.userData.includeBg = s.includeBg, i.userData.length = e.data.passes.length, Object.entries(s).forEach(([a, h]) => {
                i.uniforms[a] && (i.uniforms[a].value = h)
            })) : i.userData.downSample = e.data.downSample, this.setInitialEffectPlaneUniforms(i, e, r, s), i.onReady(() => {
                i.userData.isReady = !0
            }).onRender(() => this.setEffectPlaneUniforms(i, e))
        }
        createElementPlane(e, t) {
            const s = this.createPlane(e, t);
            this.preloadCanvasTexture(s, e), this.setInitialElementPlaneUniforms(s, e), s.onReady(() => {
                s.userData.isReady = !0
            }).onRender(() => this.setElementPlaneUniforms(s, e))
        }
        handleEffectPlane(e, t, s) {
            var h;
            const i = "passIndex" in s ? this.getPassPlane(e, s.passIndex) : e.getPlane();
            let r = this.getRenderTargets()[t - 1],
                a = this.curtain.planes.find(o => o.type === "PingPongPlane" && o.userData.id === e.local.id);
            if (!i) return !1;
            a && i.createTexture({
                sampler: "uPingPongTexture",
                fromTexture: a.getTexture()
            }), r ? i.createTexture({
                sampler: "uTexture",
                fromTexture: r.getTexture()
            }) : i.createTexture({
                sampler: "uTexture"
            }), s.passIndex > 0 && i && this.getRenderTargets()[t - (1 + s.passIndex)] && i.createTexture({
                sampler: "uBgTexture",
                fromTexture: this.getRenderTargets()[t - (1 + s.passIndex)].getTexture()
            }), [e.texture, (h = e.data) == null ? void 0 : h.texture].filter(o => o == null ? void 0 : o.src).forEach(o => {
                i.loadImage(o.src, {
                    sampler: o.sampler,
                    premultipliedAlpha: !1
                }, l => {
                    i.userData.textureLoaded = !0
                })
            })
        }
        handleElementPlane(e, t) {
            const s = e.getPlane(),
                i = e.getChildEffectItems(),
                r = this.layers.filter(l => !l.parentLayer);
            let a = this.getRenderTargets()[t - 1],
                h = r[r.indexOf(e) - 2],
                o;
            if (e.mask && h && (o = h.local.lastTarget), i.length || (s.textures.length = 0), a && i.length && s ? s.createTexture({
                    sampler: "uTexture",
                    premultipliedAlpha: !0,
                    fromTexture: a.getTexture()
                }) : s && s.addTexture(e.preloadedCanvasTexture), a) {
                if (i.length) {
                    let l = i.reduce((d, c) => d + c.getPlanes().length, 0);
                    a = this.getRenderTargets()[t - (1 + l)]
                }
                a && (s.createTexture({
                    sampler: "uBgTexture",
                    premultipliedAlpha: !0,
                    fromTexture: a.getTexture()
                }), o && e.mask && s.createTexture({
                    sampler: "uPreviousLayerTexture",
                    premultipliedAlpha: !0,
                    fromTexture: o.getTexture()
                }))
            }
        }
        handleChildEffectPlane(e, t, s) {
            var f;
            const i = "passIndex" in s ? this.getPassPlane(e, s.passIndex) : e.getPlane(),
                r = e.getParent();
            let a = this.getRenderTargets()[t - 1],
                h = this.curtain.planes.find(u => u.type === "PingPongPlane" && u.userData.id === e.local.id),
                o = r.effects.filter(u => {
                    if (this.layers.find(p => p.parentLayer === u)) return this.layers.find(p => p.parentLayer === u).visible
                }),
                l = o.indexOf(e.parentLayer),
                d = o.at(-1) === o[l],
                c = s.passIndex === s.length;
            h && e.type === "mouse" && i.createTexture({
                sampler: "uPingPongTexture",
                fromTexture: h.getTexture()
            }), i && a && (l || s.passIndex > 0) ? (e.isMask && (!s.length || d && c) && i.addTexture(r.preloadedCanvasTexture), i.createTexture({
                sampler: "uTexture",
                premultipliedAlpha: !0,
                fromTexture: a.getTexture()
            })) : i && e.isMask ? (d && c && i.addTexture(r.preloadedCanvasTexture), a && i.createTexture({
                sampler: "uTexture",
                premultipliedAlpha: !0,
                fromTexture: a.getTexture()
            })) : i && i.addTexture(r.preloadedCanvasTexture), i.userData.includeBg && i.createTexture({
                sampler: "uBgTexture",
                fromTexture: r.preloadedCanvasTexture
            }), e.type === "custom" && i.createTexture({
                sampler: "uCustomTexture",
                premultipliedAlpha: !0,
                fromTexture: this.getRenderTargets()[t]
            }), [e.texture, (f = e.data) == null ? void 0 : f.texture].filter(u => u == null ? void 0 : u.src).forEach(u => {
                i.loadImage(u.src, {
                    sampler: u.sampler,
                    premultipliedAlpha: !1
                }, p => {
                    i.userData.textureLoaded = !0
                })
            })
        }
        createPlanes() {
            this.getOrderedItems().forEach((e, t) => {
                e.getPlanes().length ? e.getPlanes().forEach(s => s.setRenderOrder(t)) : e.isElement ? this.createElementPlane(e, t) : this.createEffectPlanes(e, t)
            })
        }
        createEffectPlanes(e, t) {
            const s = e.data;
            s.passes && s.passes.length ? (this.createEffectPlane(e, t, {
                index: 0,
                length: s.passes.length + 1,
                downSample: s.downSample
            }), s.passes.forEach((i, r) => {
                this.createEffectPlane(e, t, {
                    index: r + 1,
                    length: s.passes.length + 1,
                    downSample: i.downSample,
                    [i.prop]: i.value,
                    includeBg: i.includeBg
                })
            })) : (this.createEffectPlane(e, t), e.type === "mouse" && this.createPingPongPlane(e, t))
        }
        createTextures() {
            const e = this.getPlanes().filter(s => s.visible).sort((s, i) => s.renderOrder - i.renderOrder),
                t = e.length;
            for (let s = 0; s < t; s++) {
                const i = e[s];
                let r = this.layers.find(a => a.local.id === i.userData.id);
                s < t - 1 && this.assignRenderTargetToPlane(e, s, r, i), this.handleTextures(r, s, i.userData), r.local.lastTarget = i.target
            }
        }
        assignRenderTargetToPlane(e, t, s, i) {
            let r = this.getTextureParams(e, t, s),
                a = this.getRenderTargets()[t] || new le(this.curtain, r);
            a.userData.id = i.userData.id, i.setRenderTarget(a)
        }
        handleTextures(e, t, s) {
            e.isElement ? this.handleElementPlane(e, t) : e.parentLayer ? this.handleChildEffectPlane(e, t, s) : this.handleEffectPlane(e, t, s)
        }
        handleItemPlanes(e) {
            this.createPlanes(), this.createTextures(), this.checkIfReady(e)
        }
        isNotReady(e) {
            const t = this.layers.find(h => h.local.id === e.userData.id),
                s = t.layerType === "image" && !t.local.loaded,
                i = t.layerType === "text" && !t.local.loaded,
                r = "textureLoaded" in e.userData && !e.userData.textureLoaded;
            return s || i || r || !e.userData.isReady
        }
        checkIfReady(e) {
            const t = () => {
                this.curtain.planes.filter(s => this.isNotReady(s)).length ? (this.curtain.render(), requestAnimationFrame(t)) : e()
            };
            t()
        }
        setInitialEffectPlaneUniforms(e, t, s, i) {
            if (!e.userData.initialUniformsSet || !e.userData.isReady) {
                for (let r in e.uniforms) t.local.bpProps && r in t.local.bpProps ? r === "pos" ? (e.uniforms[r].value.x = t.local.bpProps[r].x, e.uniforms[r].value.y = 1 - t.local.bpProps[r].y) : e.uniforms[r].value = t.local.bpProps[r] : r in t && (e.uniforms[r].value = t[r]);
                s && i && i.index < i.length - 1 && e.uniforms.isMask && (e.uniforms.isMask.value = 0), t.states && t.states.appear.length && t.states.appear.filter(r => !r.disabled).forEach(r => {
                    e.uniforms[r.prop] && r.initializeState(e.uniforms[r.prop], t[r.prop])
                }), s && t.isMask && !t.mouseMomentum && (t.mouseMomentum = s.mouseMomentum), e.userData.initialUniformsSet = !0
            }
        }
        handleStateEffects(e, t) {
            if (this.isInView && !e.userData.createdAt && (e.userData.createdAt = performance.now()), !t.states || ![...t.states.appear, ...t.states.scroll, ...t.states.hover].length) return !1;
            t.states.appear.forEach(s => {
                s.updateEffect(e)
            }), t.states.scroll.forEach(s => {
                var i, r;
                s.updateEffect(e, t[s.prop], {
                    top: this.isFixed ? 0 : (i = this.lastBbox) == null ? void 0 : i.top,
                    height: (r = this.lastBbox) == null ? void 0 : r.height,
                    isFixed: this.isFixed
                })
            }), t.states.hover.forEach(s => {
                s.updateEffect(e, t[s.prop], this.mouse.enterTime)
            })
        }
        setInitialElementPlaneUniforms(e, t) {
            e.uniforms.resolution.value.x = this.curtain.canvas.width, e.uniforms.resolution.value.y = this.curtain.canvas.height, e.uniforms.sampleBg && (e.renderOrder - t.effects.length === 0 ? e.uniforms.sampleBg.value = 0 : e.uniforms.sampleBg.value = 1)
        }
        setElementPlaneUniforms(e, t) {
            let s = this.element.offsetWidth * .5,
                i = this.element.offsetHeight * .5;
            if (e.uniforms.mousePos) {
                let r = this.mouse.pos.x,
                    a = this.mouse.pos.y,
                    h = r / s,
                    o = 1 - a / i;
                if (t.mouseMomentum && t.type !== "mouse") {
                    t.local.lastMousePos || (t.local.lastMousePos = {
                        x: h,
                        y: o
                    });
                    let l = t.local.lastMousePos.x * s,
                        d = (1 - t.local.lastMousePos.y) * i;
                    r = $(r, l, t.mouseMomentum * 2), a = $(a, d, t.mouseMomentum * 2), t.local.lastMousePos.x = r / s, t.local.lastMousePos.y = 1 - a / i
                }
                e.uniforms.mousePos.value.x = r / s, e.uniforms.mousePos.value.y = 1 - a / i
            }
        }
        setEffectPlaneUniforms(e, t) {
            t.animating && e.uniforms.time && (e.uniforms.time.value += (t.speed || 1) * 60 / this.fps), this.handleStateEffects(e, t);
            let s = this.bbox.width / 2,
                i = this.bbox.height / 2;
            if (e.uniforms.mousePos) {
                let r = this.mouse.pos.x,
                    a = this.mouse.pos.y;
                if (t.mouseMomentum && t.type !== "mouse") {
                    t.local.lastMousePos || (t.local.lastMousePos = {
                        x: r / s,
                        y: 1 - a / i
                    });
                    let h = t.local.lastMousePos.x * s,
                        o = (1 - t.local.lastMousePos.y) * i;
                    r = $(r, h, t.mouseMomentum * 2), a = $(a, o, t.mouseMomentum * 2), t.local.lastMousePos.x = r / s, t.local.lastMousePos.y = 1 - a / i
                }
                e.uniforms.mousePos.value.x = r / s, e.uniforms.mousePos.value.y = 1 - a / i
            }
            e.uniforms.previousMousePos && (this.mouse.trail.length > 2 ? (e.uniforms.previousMousePos.value.x = this.mouse.trail.at(2)[0], e.uniforms.previousMousePos.value.y = this.mouse.trail.at(2)[1]) : (e.uniforms.previousMousePos.value.x = e.uniforms.mousePos.value.x, e.uniforms.previousMousePos.value.y = e.uniforms.mousePos.value.y)), e.uniforms.resolution.value.x = this.curtain.canvas.width, e.uniforms.resolution.value.y = this.curtain.canvas.height
        }
        getOrderedItems() {
            let e = [];
            return this.layers.filter(t => !t.parentLayer && t.visible).forEach(t => {
                t.effects && t.effects.length && e.push(...t.getChildEffectItems()), e.push(t)
            }), e
        }
        getTextureParams(e, t, s) {
            var h;
            const r = e[t].userData.downSample ? .5 : 1,
                a = {
                    maxWidth: this.curtain.canvas.width,
                    maxHeight: this.curtain.canvas.height,
                    depth: ((h = s == null ? void 0 : s.data) == null ? void 0 : h.depth) || (s == null ? void 0 : s.type) === "bulge"
                };
            return r && (a.maxWidth = this.canvasWidth * r, a.maxHeight = this.canvasHeight * r), a
        }
        handlePlaneCreation() {
            this.initialized = !0, this.initializing = !1, this.rendering || this.renderNFrames(2), this.removePlanes(), ce()
        }
        async removePlanes() {
            const e = this.getSplitOrderedItems();
            e.dynamic.length || e.static.pop();
            for (const t of e.static) {
                const s = t.layerType === "text" && !t.local.loaded,
                    i = t.layerType === "image" && !t.local.fullyLoaded;
                (s || i) && await Pt(t, s ? "loaded" : "fullyLoaded");
                const r = t.getPlanes();
                for (const a of r) a.remove(), a.uuid, r.at(-1).uuid
            }
        }
    }

    function zt(n) {
        return typeof HTMLElement == "object" ? n instanceof HTMLElement : n && typeof n == "object" && n !== null && n.nodeType === 1 && typeof n.nodeName == "string"
    }

    function Lt() {
        window.addEventListener("mousemove", ae), window.addEventListener("touchmove", ae), window.addEventListener("scroll", Ce), window.addEventListener("routeChange", Pe), document.addEventListener("mouseleave", Fe), re() || window.addEventListener("resize", we(Ee, 200)), document.addEventListener(J, Me, !1), de = !0
    }

    function kt() {
        window.removeEventListener("mousemove", ae), window.removeEventListener("touchmove", ae), window.removeEventListener("scroll", Ce), window.removeEventListener("routeChange", Pe), document.removeEventListener("mouseleave", Fe), re() || window.removeEventListener("resize", we(Ee, 200)), document.removeEventListener(J, Me, !1), de = !1
    }

    function Dt(n, e, t) {
        return {
            canvasWidth: n.offsetWidth * t,
            canvasHeight: n.offsetHeight * t,
            scale: e,
            dpi: t,
            element: n
        }
    }

    function Ot() {
        b.scenes.forEach(n => {
            n.destroy()
        }), b.scenes.length = 0
    }

    function Ut(n, e, t, s, i) {
        let r;
        if (t) {
            if (r = t, document.getElementById(t)) {
                let a = JSON.parse(document.getElementById(t).innerText);
                if (a.options && a.history) return a;
                s(new Error(`Did not find valid JSON inside ${t}`))
            }
        } else {
            let a = "https://storage.googleapis.com/unicornstudio-production";
            i || e != null && e.includes("production=true") ? (a = "https://assets.unicorn.studio", e = `v=${Date.now()}`) : e != null && e.includes("update=") || (e = `v=${Date.now()}`), r = `${a}/embeds/${n}${e?"?"+e:""}`
        }
        return fetch(r).then(a => a.json()).then(a => a).catch(a => console.error("Error fetching data:", a))
    }
    let ne;

    function Vt() {
        ne || (ne = new IntersectionObserver(n => {
            n.forEach(e => {
                const t = e.target.getAttribute("data-scene-id"),
                    s = b.scenes.find(i => i.id === t);
                s && (e.isIntersecting ? (s.isInView = !0, s.lazyLoad && !s.initialized && !s.initializing && s.initializePlanes()) : s.isInView = !1)
            })
        }, {
            threshold: 0
        }))
    }

    function Ie(n) {
        n.iframe || Vt();
        let e = n.projectId ? n.projectId.split("?")[0] : null,
            t = n.projectId ? n.projectId.split("?")[1] : null;
        return new Promise((s, i) => {
            Ut(e, t, n.filePath, i, n.production).then(r => {
                r || i(new Error(`Unable to fetch embed/file with id '${n.projectId}'`));
                const a = r.options || {},
                    h = zt(n.element) ? n.element : document.getElementById(n.elementId);
                if (!h) {
                    i(new Error(`Couldn't find an element with id '${n.elementId}' on the page.`));
                    return
                }
                const o = ve();
                h.setAttribute("data-scene-id", o);
                const l = bt(r.history, o, Dt(h, n.scale || a.scale || 1, n.dpi || Math.min(1.5, window.devicePixelRatio))),
                    d = new It({
                        id: o,
                        fps: n.fps || a.fps || 60,
                        dpi: n.dpi,
                        name: a.name,
                        iframe: n.iframe,
                        projectId: e || n.filePath.split(".")[0],
                        renderingScale: n.scale || a.scale || 1,
                        element: h,
                        lazyLoad: n.lazyLoad,
                        width: n.width,
                        height: n.height
                    });
                if (n.altText && (d.curtain.canvas.innerText = n.altText), n.ariaLabel && d.curtain.canvas.setAttribute("aria-label", n.ariaLabel), d.curtain.canvas.setAttribute("role", "image"), (a.freePlan || a.includeLogo) && wt(o, h), a.freePlan && console.log("Made with unicorn.studio"), b.scenes.push(d), d.layers = l, d.mouse.recordTrail = !!d.layers.find(c => c.type == "mouse"), d.setInteractiveParams(n, a), !d.lazyLoad) {
                    const c = d.bbox,
                        f = c.top >= 0 && c.left >= 0 && c.bottom <= (window.innerHeight || document.documentElement.clientHeight) && c.right <= (window.innerWidth || document.documentElement.clientWidth);
                    d.isInView = d.isFixed || f, d.initializePlanes()
                }
                de || Lt(), ne && ne.observe(d.element), s(d)
            }).catch(r => {
                console.log(r), i(r)
            })
        })
    }

    function Wt() {
        return new Promise((n, e) => {
            const t = [...document.querySelectorAll("[data-us-project]"), ...document.querySelectorAll("[data-us-project-src]")];
            [...t].filter(s => !s.getAttribute("data-us-initialized")).forEach((s, i) => {
                const r = s.getAttribute("data-us-project"),
                    a = s.getAttribute("data-us-project-src"),
                    h = s.getAttribute("data-us-dpi"),
                    o = s.getAttribute("data-us-scale"),
                    l = s.getAttribute("data-us-lazyload"),
                    d = s.getAttribute("data-us-production"),
                    c = s.getAttribute("data-us-fps"),
                    f = s.getAttribute("data-us-altText") || s.getAttribute("data-us-alttext"),
                    u = s.getAttribute("data-us-ariaLabel") || s.getAttribute("data-us-arialabel"),
                    p = s.getAttribute("data-us-disableMobile") || s.getAttribute("data-us-disablemobile");
                s.setAttribute("data-us-initialized", !0), Ie({
                    projectId: r,
                    filePath: a,
                    element: s,
                    dpi: +h,
                    scale: +o,
                    production: d,
                    fps: +c,
                    lazyLoad: l,
                    altText: f,
                    ariaLabel: u,
                    interactivity: p ? {
                        mouse: {
                            disableMobile: !0
                        }
                    } : null
                }).then(m => {
                    i === t.length - 1 && n(b.scenes)
                })
            })
        })
    }
    b.addScene = Ie, b.destroy = Ot, b.init = Wt, b.unbindEvents = kt, Object.defineProperty(b, Symbol.toStringTag, {
        value: "Module"
    })
});