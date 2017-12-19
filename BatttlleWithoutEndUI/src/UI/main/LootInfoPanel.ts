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

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public update() {

	}

}