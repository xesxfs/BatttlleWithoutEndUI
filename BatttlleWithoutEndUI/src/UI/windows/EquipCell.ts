class EquipCell extends ButtonCell {
	private infoWindow: ItemInfoWindow;
	public equip: iData.iItem.Equipment;
	public position: string;
	private SIZE: number = 80;

	public constructor(data: iData.iItem.Equipment = null, pos: string = "") {
		super();
		var icon: egret.Bitmap = null;
		this.infoWindow = iGlobal.Global.itemInfoWindow;
		this.position = pos;
		this.equip = data;
		var bsp: egret.Sprite = new egret.Sprite();
		bsp.graphics.beginFill(16777215);
		bsp.graphics.drawCircle(40, 40, 39);
		bsp.graphics.endFill();
		this.before.addChild(bsp);
		if (data == null) {
			icon = new egret.Bitmap(RES.getRes("mc_mode"));
		}
		else {
			if ((this.equip instanceof iData.iItem.Weapon)) {
				icon = new egret.Bitmap(RES.getRes("mc_" + this.equip.type));
			}
			else {
				icon = new egret.Bitmap(RES.getRes("mc_" + this.equip.position + "_" + this.equip.type));
			}
			// _loc4_["transform"].colorTransform = new egret.ColorTransform(0, 0, 0, 1, this.equip.getColorInHex() >> 16, this.equip.getColorInHex() >> 8 & 255, this.equip.getColorInHex() & 255);
			if (this.equip.level >= 7) {
				bsp.filters = [new egret.GlowFilter(16711680, 0.66, this.equip.level + 3, this.equip.level + 3)];
			}
		}
		this.before.addChild(icon);
		icon.width = this.SIZE;
		icon.height = this.SIZE;
		if (data == null) {
			icon = new egret.Bitmap(RES.getRes("mc_mode"));
		}
		else {
			if ((this.equip instanceof iData.iItem.Weapon)) {
				icon = new egret.Bitmap(RES.getRes("mc_" + this.equip.type));
			}
			else {
				icon = new egret.Bitmap(RES.getRes("mc_" + this.equip.position + "_" + this.equip.type));
			}
			// this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
		}
		this.after.addChild(icon);
		icon.width = this.SIZE;
		icon.height = this.SIZE;
		// this.downFunction = flash.bind(this.setBefore, this);
		// this.addEventListener(egret.TouchEvent.TOUCH_MOVE, flash.bind(this.onMouseMove, this), null);
	}

	// public onMouseMove(param1: flash.MouseEvent) {
	// 	var _loc2_: egret.Point = flash.localToGlobal(this, new egret.Point(this["mouseX"] + 15, this["mouseY"] + 15));
	// 	this.infoWindow.x = _loc2_.x;
	// 	this.infoWindow.y = _loc2_.y;
	// 	if (_loc2_.x + 135 > iGlobal.Global.stage.stageWidth) {
	// 		this.infoWindow.x = this.infoWindow.x - 135;
	// 	}
	// }

	public setBefore() {
		super.setBefore();
		iGlobal.Global.hideItemInfoWindow();
	}

	public setAfter() {
		super.setAfter();
		if (this.equip) {
			iGlobal.Global.setItemInfoWindow(this.equip.getDescription());
		}
	}
}
