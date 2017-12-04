class RaceScene extends BaseScene {
	public constructor() {
		super();
	}
	private selectRaceBtn: eui.Button;

	protected childrenCreated(): void {
		this.selectRaceBtn.addEventListener("touchTap", () => {
			App.runScene(SceneConst.MainScene);
		}, this);

	}

	/**添加到场景中*/
	protected onEnable() {

	}

	/**从场景中移除*/
	protected onRemove() {

	}

}