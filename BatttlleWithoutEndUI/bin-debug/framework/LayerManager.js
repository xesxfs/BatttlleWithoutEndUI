var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    LayerManager.prototype.init = function () {
        this.rootLayer = new eui.UILayer();
        this.rootLayer.percentWidth = 100;
        this.rootLayer.percentHeight = 100;
        this.rootLayer.touchEnabled = false;
        egret.MainContext.instance.stage.addChild(this.rootLayer);
        this.sceneLayer = new eui.UILayer();
        this.sceneLayer.touchEnabled = false;
        this.rootLayer.addChild(this.sceneLayer);
        this.popLayer = new eui.UILayer();
        this.popLayer.touchEnabled = false;
        this.rootLayer.addChild(this.popLayer);
        this.msgLayer = new eui.UILayer();
        this.msgLayer.touchEnabled = false;
        this.rootLayer.addChild(this.msgLayer);
    };
    return LayerManager;
}(SingleClass));
__reflect(LayerManager.prototype, "LayerManager");
//# sourceMappingURL=LayerManager.js.map