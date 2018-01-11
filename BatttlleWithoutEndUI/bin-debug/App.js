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
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.call(this) || this;
    }
    App.prototype.startUp = function () {
        this.registAllScene();
        App.SceneManager.runScene(SceneConst.BeginScene);
    };
    App.prototype.registAllScene = function () {
        var secen = App.SceneManager;
        secen.register(SceneConst.BeginScene, BeginScene);
        secen.register(SceneConst.SaveScene, SaveScene);
        secen.register(SceneConst.RaceScene, RaceScene);
        secen.register(SceneConst.MainScene, MainScene);
    };
    App.runScene = function (sceneId) {
        return App.SceneManager.runScene(sceneId);
    };
    Object.defineProperty(App, "LayerManager", {
        get: function () {
            return LayerManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        get: function () {
            return SceneManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return App;
}(SingleClass));
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map