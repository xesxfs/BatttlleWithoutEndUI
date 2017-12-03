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
var BeginScene = (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        return _super.call(this) || this;
    }
    BeginScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**添加到场景中*/
    BeginScene.prototype.onEnable = function () {
        this.beginBtn.addEventListener("touchTap", function () {
            App.SceneManager.runScene(SceneConst.SaveScene);
        }, this);
    };
    /**从场景中移除*/
    BeginScene.prototype.onRemove = function () {
    };
    return BeginScene;
}(BaseScene));
__reflect(BeginScene.prototype, "BeginScene");
//# sourceMappingURL=BeginScene.js.map