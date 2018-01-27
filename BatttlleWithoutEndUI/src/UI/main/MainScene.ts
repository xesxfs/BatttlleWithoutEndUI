class MainScene extends BaseScene {
	public constructor() {
		super();
		this.skinName = "MainSceneSkin";
	}
	public static allInfoPanel: AllInfoPanel;
	public static playerInfoPanel: PlayerInfoPanel;
	public static monsterInfoPanel: MonsterInfoPanel;
	public static petInfoPanel: PetInfoPanel;
	public static battleSkillPanel: BattleSkillPanel;
	public static lootPanel: LootPanel;
	public static otherPanel: OtherPanel;

	public allInfoPanel: AllInfoPanel;
	public playerInfoPanel: PlayerInfoPanel;
	public monsterInfoPanel: MonsterInfoPanel;
	public petInfoPanel: PetInfoPanel;
	public battleSkillPanel: BattleSkillPanel;
	public lootPanel: LootPanel;
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



	protected childrenCreated(): void {
		this.init();
	}

	private init() {
		iGlobal.Global.init(this.stage);
		this.menuBtnsGroup.addEventListener("touchTap", this.onMenusBtn, this);
		this.setPlayerInfo();
		this.setMonsterInfo();
		this.setPetInfo();
		this.setBattleSkillPanel();
		this.setAllInfoPanel();
		this.setLootPanel();

		this.setBattle();
		this.setOther();
		iGlobal.Global.shopPanel = new ShopPanel();
		iGlobal.Global.helpPanel = new HelpPanel();
		iGlobal.Global.specialShopPanel = new SpecialShopPanel();
	}

	private setBattle() {
		MainScene.battle = new iData.Battle();
		MainScene.battle.init();
	}


	private setPlayerInfo() {
		MainScene.playerInfoPanel = new PlayerInfoPanel();
		this.addChildAt(MainScene.playerInfoPanel, 0);
		MainScene.playerInfoPanel.x = 10;
		MainScene.playerInfoPanel.y = 10;
	}

	private setMonsterInfo() {
		MainScene.monsterInfoPanel = new MonsterInfoPanel();
		this.addChildAt(MainScene.monsterInfoPanel, 0);
		MainScene.monsterInfoPanel.x = 400;
		MainScene.monsterInfoPanel.y = 10;
	}

	private setPetInfo() {
		MainScene.petInfoPanel = new PetInfoPanel();
		this.addChildAt(MainScene.petInfoPanel, 0);
		MainScene.petInfoPanel.x = 400;
		MainScene.petInfoPanel.y = 150;
	}

	private setOther() {
		MainScene.otherPanel = new OtherPanel();
		this.addChild(MainScene.otherPanel);
		MainScene.otherPanel.x = this.stage.stageWidth;
		// this.stage.stageWidth
		// this.stage.width;
		MainScene.otherPanel.y = (this.stage.height - MainScene.otherPanel.height) >> 1;
	}

	private setBattleSkillPanel() {
		MainScene.battleSkillPanel = new BattleSkillPanel();
		this.addChildAt(MainScene.battleSkillPanel, 0);
		MainScene.battleSkillPanel.x = 415;
		MainScene.battleSkillPanel.y = 235;
	}

	private setAllInfoPanel() {
		MainScene.allInfoPanel = new AllInfoPanel();
		this.addChildAt(MainScene.allInfoPanel, 0);
		MainScene.allInfoPanel.x = 10;
		MainScene.allInfoPanel.y = 235;
	}

	private setLootPanel() {
		MainScene.lootPanel = new LootPanel();
		this.addChildAt(MainScene.lootPanel, 0);
		MainScene.lootPanel.x = 415;
		MainScene.lootPanel.y = 405;
	}


	/**添加到场景中*/
	protected onEnable() {

	}


	private onMenusBtn(e: egret.TouchEvent) {
		if (e.target instanceof eui.Button) {
			// this.otherView.selectedIndex = parseInt(e.target.name);
			// MainScene.otherPanel.onSelect(parseInt(e.target.name));
			// this.otherInfoGroup.x = (this.width - this.menuBtnsGroup.width);
			this.addChild(this.otherInfoGroup);
		}

	}

	/**从场景中移除*/
	protected onRemove() {

	}

}