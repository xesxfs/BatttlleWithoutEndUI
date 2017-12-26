class EquipmentItem extends eui.Component implements eui.UIComponent {

	public constructor(equip: iData.iItem.Equipment) {
		super();
		this.equip = equip;
	}
	public equip: iData.iItem.Equipment;
	public text: eui.Label;
	public equipButton: eui.Button;
	public moneyButton: eui.Button;
	public downFunction: Function;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}



	private init() {
		if (!this.equip) return;
		this.addEventListener("touchTap", this.onclick, this);
		this.text.textFlow = iGlobal.Global.htmlParse.parser(this.equip.getNameHTML());
		if (this.equip.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parser(this.text.textFlow + (" +" + this.equip.level));
		}
	}

	private onEquipDown() {
		iGlobal.Player.removeItem(this.equip);
		iGlobal.Player.equip(this.equip);
		this.remove();
	}

	private onMoneyDown() {
		iGlobal.Player.removeItem(this.equip);
		iGlobal.Player.addMoney(this.equip.getMoney());
		this.remove();
	}

	private onclick(e: egret.TouchEvent) {
		switch (e.target) {
			case this.equipButton:
				this.onEquipDown();
				break;
			case this.moneyButton:
				this.onMoneyDown();
				break;
			default:
				this.downFunction();
		}

	}

	public remove() {
		this.removeEventListener("touchTap", this.onclick, this);
		this.parent && this.parent.removeChild(this);
		MainScene.otherPanel.itemWindow.updateList();
		MainScene.otherPanel.itemWindow.updateBagText();
		this.downFunction = null;
	}

}