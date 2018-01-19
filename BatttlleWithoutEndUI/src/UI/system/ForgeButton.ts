class ForgeButton extends ButtonCell {
	private R: number = 50;
	public constructor() {
		super();
		let bitmapData = RES.getRes("mc_forge");
		let bf = new egret.Bitmap(bitmapData);
		let af = new egret.Bitmap(bitmapData);
		this.before.addChild(bf);
		this.after.addChild(af);
		this.before.height = this.R;
		this.before.width = this.R;
		this.after.height = this.R;
		this.after.width = this.R;

	}
}