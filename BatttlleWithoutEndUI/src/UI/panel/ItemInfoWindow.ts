class ItemInfoWindow extends InfoWindow {
	private text: egret.TextField;
	public constructor(text: string) {
		super(0, 0);
		this.text = iGlobal.Global.getTextField(24);
		this.text.multiline = true;
		this.addChild(this.text);
		this.text.text = text;
	}

	public draw(width: number, height: number) {
		this.graphics.clear();
		this.text.width = 130;
		super.draw(130, this.text.textHeight + 5);
	}

	public set TEXT(txt: string) {
		this.text.text = txt;
		this.draw(0, 0);
	}


}