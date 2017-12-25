class EquipmentItem extends eui.Component implements eui.UIComponent {

	public constructor(equip: iData.iItem.Equipment) {
		super();
		this.equip = equip;
	}
	public equip: iData.iItem.Equipment;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}



	private init() {

	}

}