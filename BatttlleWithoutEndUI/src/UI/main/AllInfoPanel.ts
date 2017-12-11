class AllInfoPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}
	private list: Array<eui.Label>;
	private textGroup: eui.Group;
	private textScroller: eui.Scroller;
	private originHeight: number;
	private limit: number = 100;
	private htmlParse: egret.HtmlTextParser;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	private init() {
		this.htmlParse = new egret.HtmlTextParser();
		this.list = [];
		this.validateNow();
		this.originHeight = this.textGroup.height;
	}

	public addText(info: string) {
		if (this.list.length >= this.limit) {
			let lab = this.list.shift();
			this.textGroup.removeChild(lab);
		}
		let date = new Date();
		let time = "[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "]";
		let txtLab = new eui.Label();
		// this.htmlParse.parse(time+info);
		// txtLab.size = 18;
		txtLab.textFlow = this.htmlParse.parser(time + info);
		txtLab.textColor = 0x000000
		this.textGroup.addChild(txtLab);
		this.list.push(txtLab);
		this.tidy();
	}

	private tidy() {
		let length = this.list.length;
		let i = 0;
		let lastY = 0;
		while (i < length) {
			this.list[i].x = 10;
			lastY = this.list[i].y = i * this.list[i].height;
			// console.log("this.list[i].y:", this.list[i].y);
			i++;
		}
		if (lastY >= this.originHeight && length < this.limit) {
			this.textScroller.viewport.scrollV += 30;

		}
		console.log("this.textGroup.height:", this.textGroup.height, " lastY:", lastY);
		console.log("list:", length);
	}

}