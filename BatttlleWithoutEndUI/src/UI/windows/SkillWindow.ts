class SkillWindow extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	public combat: eui.Button;
	public magic: eui.Button;
	public passive: eui.Button;

	public combatPanel: CombatPanel;
	public magicPanel: MagicPanel;
	public passivePanel: PassivePanel;

	public panelsGroup: eui.Group;
	public gap: number = 50;





	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	private init() {
		this.combatPanel = new CombatPanel();
		this.magicPanel = new MagicPanel();
		this.passivePanel = new PassivePanel();
		this.combat.addEventListener("touchTap", this.onCombat, this);
		this.passive.addEventListener("touchTap", this.onPassive, this);
		this.magic.addEventListener("touchTap", this.onMagic, this);
		this.removes();
	}

	private onCombat() {
		this.removes();
		this.panelsGroup.addChild(this.combatPanel);
	}

	private onMagic() {
		this.removes();
		this.panelsGroup.addChild(this.magicPanel);
	}

	private onPassive() {
		this.removes();
		this.panelsGroup.addChild(this.passivePanel);
	}

	private removes() {
		this.panelsGroup.removeChildren();
	}

}