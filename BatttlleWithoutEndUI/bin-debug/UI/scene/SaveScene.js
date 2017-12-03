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
var SaveScene = (function (_super) {
    __extends(SaveScene, _super);
    function SaveScene() {
        return _super.call(this) || this;
    }
    SaveScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**添加到场景中*/
    SaveScene.prototype.onEnable = function () {
        this.raceBtn.addEventListener("touchTap", function () {
            App.runScene(SceneConst.RaceScene);
        }, this);
        this.mainBtn.addEventListener("touchTap", function () {
            App.runScene(SceneConst.MainScene);
        }, this);
    };
    /**从场景中移除*/
    SaveScene.prototype.onRemove = function () {
    };
    return SaveScene;
}(BaseScene));
__reflect(SaveScene.prototype, "SaveScene");
//# sourceMappingURL=SaveScene.js.map