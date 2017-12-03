class SaveScene extends BaseScene {
	public constructor() {
		super();
	}

	private raceBtn: eui.Button;
	private mainBtn: eui.Button;

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	/**添加到场景中*/
	protected onEnable() {
		this.raceBtn.addEventListener("touchTap", () => {
			App.runScene(SceneConst.RaceScene);
		}, this);
		this.mainBtn.addEventListener("touchTap", () => {
			App.runScene(SceneConst.MainScene);
		}, this);
	}

	/**从场景中移除*/
	protected onRemove() {

	}

}