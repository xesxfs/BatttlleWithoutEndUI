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
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        return _super.call(this) || this;
    }
    /**
 * 显示
 * @lock 是否锁定屏幕(增加半透明黑色背景)
 * @click 是否点击空白处可关闭弹框
 */
    BasePanel.prototype.show = function (lock, click) {
        if (lock === void 0) { lock = true; }
        if (click === void 0) { click = true; }
        // App.PopUpManager.addPopUp(this, lock, click);
    };
    /**隐藏*/
    BasePanel.prototype.hide = function () {
        // App.PopUpManager.removePopUp(this);
    };
    return BasePanel;
}(BaseUI));
__reflect(BasePanel.prototype, "BasePanel");
