class RaceButton extends ButtonCell {
	private PX: number = 50;
	private bg: egret.Sprite;
	private count: number = 0;
	public race: iData.Race;
	private text: egret.TextField;
	public constructor(b: string, a: string, race: iData.Race) {
		super("egret.Sprite", "egret.Sprite");
		this.touchEnabled = true;
		let bsp = RES.getRes(b);
		bsp && (bsp = new egret.Bitmap(bsp)) && this.before.addChild(bsp);
		let asp = RES.getRes(a);
		asp && (asp = new egret.Bitmap(asp)) && this.after.addChild(asp);
		this.bg = new egret.Sprite();
		this.race = race;
		this.addChild(this.bg);
		this.before.width = this.PX;
		this.before.height = this.PX;
		this.after.height = this.PX;
		this.after.width = this.PX;
		this.setText();
	}

	private setText() {
		this.text = iGlobal.Global.getTextField(32, 16777215);
		this.text.width = 200;
		this.text.text = this.race.name.toUpperCase();
		this.addChild(this.text);
		this.text.x = 100;
		this.text.y = 5;
		this.text.visible = false;
	}

	public setAfter() {
		super.setAfter();
		this.addEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
	}

	private overAnimation(param1: egret.Event) {
		if (this.count <= 10) {
			this.bg.graphics.clear();
			this.bg.graphics.beginFill(16777215, 0.95);
			this.bg.graphics.drawRect(0 - this.count, 0 - this.count, this.PX + this.count * 2, this.PX + this.count * 2);
			this.bg.graphics.endFill();
			this.bg.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
			// this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.01 * this.count, 1 - 0.03 * this.count, 1 - 0.1 * this.count, 0.1 * this.count);
		}
		if (this.count > 10) {
			this.bg.graphics.clear();
			this.bg.graphics.beginFill(16777215, 0.95);
			this.bg.graphics.drawRect(-10, -10, this.PX + 20 + 20 * (this.count - 10), this.PX + 20);
			this.bg.graphics.endFill();
			this.bg.filters = [new egret.GlowFilter(5066061, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1)];
			// this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 0.95);
			this.text.visible = true;
			this.text.alpha = (this.count - 10) * 0.1;
			this.text.filters = [new egret.GlowFilter(16777215, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1)];
		}
		this.count++;
		if (this.count > 20) {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
		}
	}

	public setBefore() {
		super.setBefore();
		// this.bg.graphics.clear();
		// this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
		// this.count = (0);
		// this.filters = [];
		// this.text.visible = false;
	}

	public setDown() {
		super.setDown();
		this.filters = [new egret.GlowFilter(10027008, 0.66, 23, 23)];
	}
}