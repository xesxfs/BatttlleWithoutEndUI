class BasicCell extends egret.Sprite {
	public constructor(width: number, height: number) {
		super();
		width = Math.round(width);
		height = Math.round(height);
		this.draw(width, height);
	}

	public draw(width: number, height: number) {
		width = Math.round(width);
		height = Math.round(height);
		this.graphics.beginFill(16777215, 0.95);
		this.graphics.drawRect(0, 0, width, height);
		this.graphics.endFill();
	}
}