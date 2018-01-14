class PeopleModel extends ButtonCell {
	public age: number = 0;
	public bg: BasicCell;
	public bg2: BasicCell;
	public p: egret.Sprite;
	public p2: egret.Sprite;

	public constructor(param1: number) {
		super("egret.Sprite", "egret.Sprite");
		this.touchEnabled = true;
		param1 = (param1);
		this.age = (param1);
		this.bg = new BasicCell(50, 100);
		this.bg2 = new BasicCell(50, 100);
		// this.bg2["transform"].colorTransform = new egret.ColorTransform(0.9, 0.7, 0, 0.95);
		this.init();
	}

	private init() {
		this.before.addChild(this.bg);
		this.after.addChild(this.bg2);
		this.p = new egret.Sprite();
		this.p2 = new egret.Sprite();
		this.before.addChild(this.p);
		this.after.addChild(this.p2);
		this.drawPeople(this.p, 7631988);
		this.drawPeople(this.p2, 16777215);
	}

	private drawPeople(param1: egret.Sprite, param2: number): any {
		param2 = (param2);
		var _loc3_: number = (this.age - 10);
		param1.y = 15 - _loc3_ * 3;
		param1.graphics.beginFill(param2, 1);
		param1.graphics.drawCircle(25, 30, 10);
		param1.graphics.drawRect(15, 40, 20, 30 + _loc3_);
		param1.graphics.drawRect(15, 70 + _loc3_, 5, 8 + _loc3_ * 2);
		param1.graphics.drawRect(30, 70 + _loc3_, 5, 8 + _loc3_ * 2);
		param1.graphics.drawRect(9, 40, 5, 15 + _loc3_ * 2);
		param1.graphics.drawRect(36, 40, 5, 15 + _loc3_ * 2);
		param1.graphics.endFill();
	}

	public setBefore() {
		super.setBefore();
		this.filters = [];
	}

	public setDown() {
		super.setDown();
		this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
	}
}