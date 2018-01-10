
class MapCell extends ButtonCell {


	private text: string;

	private map: iData.iMap.Map;

	private infoWindow: ItemInfoWindow;

	public constructor(data: iData.iMap.MapData) {
		super("egret.Sprite", "egret.Sprite");
		this.infoWindow = iGlobal.Global.itemInfoWindow;
		this.map = new iData.iMap.Map(data);
		// this.before.addChild(new map_icon());
		// this.after.addChild(new map_icon());
		// this.after.transform.colorTransform = new ColorTransform(0, 0, 0, 1, 227, 178, 10);
		this.x = data.x;
		this.y = data.y;
		this.setText();
		this.downFunction = this.down;
		this.addEventListener("touchBegin", this.onMouseMove, this);
	}

	public onMouseMove(e: egret.TouchEvent): void {
		var _loc2_: egret.Point = this.localToGlobal(e.localX + 15, e.localY + 15);
		this.infoWindow.x = _loc2_.x;
		this.infoWindow.y = _loc2_.y;
		if (_loc2_.x + 135 > this.stage.stageWidth) {
			this.infoWindow.x = this.infoWindow.x - 135;
		}
		if (_loc2_.y + this.infoWindow.height > this.stage.stageHeight) {
			this.infoWindow.y = this.infoWindow.y - this.infoWindow.height;
		}
	}

	public onMouseOver(e: egret.TouchEvent): void {
		super.onMouseOver(e);
		iGlobal.Global.setItemInfoWindow(this.text);
	}

	public onMouseOut(e: egret.TouchEvent): void {
		super.onMouseOut(e);
		iGlobal.Global.hideItemInfoWindow();
	}

	public setBefore(): void {
		super.setBefore();
	}

	public setAfter(): void {
		super.setAfter();
	}

	private setText(): void {
		this.text = "<p align=\'center\'>" + this.map.mapData.realName + "</p>";
		this.text = this.text + ("<p align=\'center\'>平均战斗力: " + (this.map.averageCp >> 0) + "</p>");
	}

	private down() {
		iGlobal.Global.map = this.map;
		if (MainScene.lootPanel) {
			MainScene.lootPanel.reset();
		}
		if (MainScene.battle) {
			MainScene.battle.boss = null;
			MainScene.battle.init();
		}
		if (MainScene.otherPanel) {
			MainScene.otherPanel.otherWindow.mapPanel.visible = false;
		}
	}
}