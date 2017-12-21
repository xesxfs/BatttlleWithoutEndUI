class RaceScene extends BaseScene {
	public constructor() {
		super();
	}
	private selectRaceBtn: eui.Button;
	private chosenRace:iData.Race=iData.RaceList.DWARF;
	private chosenAge:number = 10;

	protected childrenCreated(): void {
		this.selectRaceBtn.addEventListener("touchTap", () => {
			App.runScene(SceneConst.MainScene);
		}, this);

	}

	/**添加到场景中*/
	protected onEnable() {
		iGlobal.Player.burn(this.chosenAge,this.chosenRace);
	}

	/**从场景中移除*/
	protected onRemove() {

	}

}