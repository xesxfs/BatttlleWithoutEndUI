class BeginScene extends BaseScene {
	public constructor() {
		super();
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}
	private beginBtn: eui.Button;

	/**添加到场景中*/
	protected onEnable() {
		this.beginBtn.addEventListener("touchTap", () => {
			App.SceneManager.runScene(SceneConst.SaveScene);
		}, this);
	}

	/**从场景中移除*/
	protected onRemove() {

	}



}