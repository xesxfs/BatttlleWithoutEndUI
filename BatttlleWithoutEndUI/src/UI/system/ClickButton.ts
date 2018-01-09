class ClickButton extends ButtonCell {
	private FIX: number = 20;
	public constructor(icon: string, fix: number) {
		super("egret.Sprite", "egret.Sprite");
		fix = (fix);
		this.FIX = (fix);
		// var _loc3_: egret.Sprite = <any>new doubleCircle();
		// _loc3_.width = this.FIX;
		// _loc3_.height = this.FIX;
		// _loc3_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		// this.before.addChild(_loc3_);
		var bf = new egret.Bitmap(RES.getRes(icon));
		this.before.addChild(bf);
		// this.setMcPosition(_loc4_);
		// var _loc5_: egret.Sprite = <any>new doubleCircle();
		// _loc5_.width = this.FIX;
		// _loc5_.height = this.FIX;
		// this.after.addChild(_loc5_);
		var af = new egret.Bitmap(RES.getRes(icon));
		// _loc6_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);	
		egret.ColorMatrixFilter
		this.after.addChild(af);
		var colorMatrix = [
			0.3, 0.6, 0, 0, 0,
			0.3, 0.6, 0, 0, 0,
			0.3, 0.6, 0, 0, 0,
			0, 0, 0, 1, 0
		];
		var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		this.after.filters = [colorFlilter];

	}

	public setDown() {
		super.setDown();
		this.setBefore();
	}

}