class MainScene extends BaseScene {
	public constructor() {
		super();
	}
	public static allInfoPanel: AllInfoPanel;
	public static playerInfoPanel: PlayInfoPanel;
	public static monsterInfoPanel: MonsterInfoPanel;
	public static petInfoPanel: PetInfoPanel;
	public static battleSkillPanel: BattleSkillPanel;
	public static lootPanel: LootInfoPanel;
	public static otherPanel: OtherPanel;

	public allInfoPanel: AllInfoPanel;
	public playerInfoPanel: PlayInfoPanel;
	public monsterInfoPanel: MonsterInfoPanel;
	public petInfoPanel: PetInfoPanel;
	public battleSkillPanel: BattleSkillPanel;
	public lootPanel: LootInfoPanel;
	public otherPanel: OtherPanel;

	public static battle: iData.Battle;

	private testBtn: eui.Button;

	public itemBtn: eui.Button;
	public equipBtn: eui.Button;
	public petBtn: eui.Button;
	public skillBtn: eui.Button;
	public titleBtn: eui.Button;
	public systemBtn: eui.Button;
	public otherBtn: eui.Button;
	public menuBtnsGroup: eui.Group;
	public otherInfoGroup: eui.Group;
	// private otherView: eui.ViewStack;


	protected childrenCreated(): void {
		this.init();
	}

	private init() {
		iGlobal.Global.init(this.stage);
		this.menuBtnsGroup.addEventListener("touchTap", this.onMenusBtn, this);
		MainScene.allInfoPanel = this.allInfoPanel;
		MainScene.playerInfoPanel = this.playerInfoPanel;
		MainScene.lootPanel = this.lootPanel;
		MainScene.petInfoPanel = this.petInfoPanel;
		MainScene.monsterInfoPanel = this.monsterInfoPanel;
		MainScene.battleSkillPanel = this.battleSkillPanel;
		MainScene.otherPanel = this.otherPanel;
		this.setBattle();
		iGlobal.Global.shopPanel = new ShopPanel();
		iGlobal.Global.helpPanel = new HelpPanel();
		iGlobal.Global.specialShopPanel = new SpecialShopPanel();
	}

	private setBattle() {
		MainScene.battle = new iData.Battle();
		MainScene.battle.init();
	}

	/**添加到场景中*/
	protected onEnable() {

	}


	private onMenusBtn(e: egret.TouchEvent) {
		if (e.target instanceof eui.Button) {
			// this.otherView.selectedIndex = parseInt(e.target.name);
			this.otherPanel.onSelect(parseInt(e.target.name));
			this.otherInfoGroup.x = (this.width - this.menuBtnsGroup.width) >> 1;
		}

	}

	/**从场景中移除*/
	protected onRemove() {

	}

}