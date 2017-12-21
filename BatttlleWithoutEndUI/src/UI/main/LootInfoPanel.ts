class LootInfoPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	public basic: number = 0;
	public magic: number = 0;
	public rare: number = 0;
	public perfect: number = 0;
	public epic: number = 0;
	public legendary: number = 0;
	public money: number = 0;
	public exp: number = 0;

	public money_c: eui.Label;
	public exp_c: eui.Label;
	public basic_c: eui.Label;
	public magic_c: eui.Label;
	public rare_c: eui.Label;
	public perfect_c: eui.Label;
	public epic_c: eui.Label;
	public legendary_c: eui.Label;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public reset() {
		this.money = 0;
		this.exp = 0;
		this.basic = 0;
		this.magic = 0;
		this.rare = 0;
		this.perfect = 0;
		this.epic = 0;
		this.legendary = 0;
	}

	public update() {
		this.money_c.text = (this.money + "");
		this.exp_c.text = (this.exp + "");
		this.basic_c.text = (this.basic + "");
		this.magic_c.text = (this.magic + "");
		this.rare_c.text = (this.rare + "");
		this.perfect_c.text = (this.perfect + "");
		this.epic_c.text = (this.epic + "");
		this.legendary_c.text = (this.legendary + "");
	}


}