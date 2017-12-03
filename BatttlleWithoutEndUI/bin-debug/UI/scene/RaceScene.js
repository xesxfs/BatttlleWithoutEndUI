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
var RaceScene = (function (_super) {
    __extends(RaceScene, _super);
    function RaceScene() {
        return _super.call(this) || this;
    }
    RaceScene.prototype.childrenCreated = function () {
    };
    /**添加到场景中*/
    RaceScene.prototype.onEnable = function () {
    };
    /**从场景中移除*/
    RaceScene.prototype.onRemove = function () {
    };
    return RaceScene;
}(BaseScene));
__reflect(RaceScene.prototype, "RaceScene");
//# sourceMappingURL=RaceScene.js.map