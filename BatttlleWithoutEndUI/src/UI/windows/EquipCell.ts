class EquipCell extends egret.Sprite {
	public constructor(equip: iData.iItem.Equipment = null, position: string = "") {
		super();
		this.equip = equip;
		this.position = position;
		this.init();
	}

	public equip: iData.iItem.Equipment;
	public position: string;
	private SIZE: number = 80;


	private init() {
		var _loc4_: egret.Bitmap = null;
		var _loc3_: egret.Sprite = new egret.Sprite();
		_loc3_.graphics.beginFill(16777215);
		_loc3_.graphics.drawCircle(40, 40, 39);
		_loc3_.graphics.endFill();
		// this.before.addChild(_loc3_);
		_loc4_ = new egret.Bitmap(RES.getRes("mc_mode_png"));
		if (this.equip == null) {
			_loc4_ = new egret.Bitmap(RES.getRes("mc_mode_png"));
		}
		else {
			if ((this.equip instanceof iData.iItem.Weapon)) {
				// _loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
			}
			else {
				// _loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
			}
			// _loc4_["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, this.equip.getColorInHex() >> 16, this.equip.getColorInHex() >> 8 & 255, this.equip.getColorInHex() & 255);
			if (this.equip.level >= 7) {
				// _loc3_.filters = [new flash.GlowFilter(16711680, 0.66, this.equip.level + 3, this.equip.level + 3)];
			}
		}
		this.addChild(_loc4_);
		_loc4_.width = this.SIZE;
		_loc4_.height = this.SIZE;
		if (this.equip == null) {
			// _loc4_ = new mc_mode();
		}
		else {
			if ((this.equip instanceof iData.iItem.Weapon)) {
				// _loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
			}
			else {
				// _loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
			}
			// this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
		}
		// this.after.addChild(_loc4_);
		_loc4_.width = this.SIZE;
		_loc4_.height = this.SIZE;
		// this.downFunction = flash.bind(this.setBefore, this);
		// this.addEventListener(egret.TouchEvent.TOUCH_MOVE, flash.bind(this.onMouseMove, this), null);
	}
}