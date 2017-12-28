class TitleCell extends eui.Component implements eui.UIComponent {
	public constructor(title: iData.iPlayer.Title) {
		super();
		this.title = title;

	}
	public title: iData.iPlayer.Title;
	public text: eui.Label;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.setInfo();
		this.setListener();
	}
	private setInfo() {
		if (!this.title) return;
		this.text.text = this.title.realName;
		this.text.x = 10;
		this.text.y = 10;

	}
	private setListener() {
		if (this.title.isGot) {
			this.addEventListener("touchTap", this.onMouseDown, this);
		}
	}
	private setBg() {
		if (this.title.isGot) {
			// this.["transform"].colorTransform = new egret.ColorTransform();
		}
		else {
			// this.bg["transform"].colorTransform = new egret.ColorMatrixFilter(0, 0, 0, 0.8, 200, 200, 200);
		}
	}
	private onMouseDown(e: egret.TouchEvent) {
		iGlobal.Player.setTitle(this.title);
	}

}