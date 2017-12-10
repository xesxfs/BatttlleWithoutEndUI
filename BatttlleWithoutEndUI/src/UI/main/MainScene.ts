class MainScene extends BaseScene {
	public constructor() {
		super();
	}
	private allnfoPanel:AllInfoPanel;
	private testBtn:eui.Button;
	private c:number=0;

	protected childrenCreated(): void {
		this.testBtn.addEventListener("touchTap",()=>{
			this.allnfoPanel.addText("你好旅行者！！"+this.c++);
		},this)

	}

	/**添加到场景中*/
	protected onEnable() {

	}

	/**从场景中移除*/
	protected onRemove() {

	}

}