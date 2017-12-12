class MainScene extends BaseScene {
	public constructor() {
		super();
	}
	private allnfoPanel: AllInfoPanel;
	private testBtn: eui.Button;

	public itemBtn: eui.Button;
	public equipBtn: eui.Button;
	public petBtn: eui.Button;
	public skillBtn: eui.Button;
	public titleBtn: eui.Button;
	public systemBtn: eui.Button;
	public otherBtn: eui.Button;
	public menuBtnsGroup: eui.Group;
	private otherView: eui.ViewStack;

	private c: number = 0;
	private htlmStr = `<font color=0x336699 strokecolor=0x6699cc stroke=2>{%s}</font>`;

	protected childrenCreated(): void {
		this.init();
	}

	private init() {
		this.menuBtnsGroup.addEventListener("touchTap", this.onMenusBtn, this);
		this.otherView.selectedIndex = 0;
		this.testBtn.addEventListener("touchTap", () => {
			this.allnfoPanel.addText(this.htlmStr.replace("{%s}", "你好旅行者！！" + this.c++));
		}, this)

	}

	/**添加到场景中*/
	protected onEnable() {

	}


	private onMenusBtn(e: egret.TouchEvent) {
		if (e.target instanceof eui.Button) {
			this.otherView.selectedIndex = parseInt(e.target.name);
		}

	}

	/**从场景中移除*/
	protected onRemove() {

	}

}