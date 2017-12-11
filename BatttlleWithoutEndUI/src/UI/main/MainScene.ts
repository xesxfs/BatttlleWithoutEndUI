class MainScene extends BaseScene {
	public constructor() {
		super();
	}
	private allnfoPanel: AllInfoPanel;
	private testBtn: eui.Button;
	private c: number = 0;
	private htlmStr = `<font color=0x336699 strokecolor=0x6699cc stroke=2>{%s}</font>`;

	protected childrenCreated(): void {
		this.testBtn.addEventListener("touchTap", () => {
			this.allnfoPanel.addText(this.htlmStr.replace("{%s}", "你好旅行者！！" + this.c++));
		}, this)

	}

	/**添加到场景中*/
	protected onEnable() {

	}

	/**从场景中移除*/
	protected onRemove() {

	}

}