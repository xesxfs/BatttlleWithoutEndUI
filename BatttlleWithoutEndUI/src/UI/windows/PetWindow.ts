class PetWindow extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	public textBag: eui.Label;
	private Gap: number = 50;
	public selectCell: PetCell;
	public petGroups: eui.Group;



	protected childrenCreated(): void {
		super.childrenCreated();
	}

	private updateBagText(param1: egret.Event = null) {
		this.textBag.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>");
	}

	private setBagText() {
		this.textBag.width = 200;
		this.textBag.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>");
	}


	private updateList() {
		var petCell: PetCell = null;
		var length: number = iGlobal.Player.petList.length;
		var index: number = (0);
		this.petGroups.removeChildren();
		while (index < length) {
			petCell = new PetCell(iGlobal.Player.petList[index]);
			petCell.y = index * this.Gap;
			index++;
			this.petGroups.addChild(petCell);
		}
	}

	public update() {
		this.updateList();
		this.updateBagText();
	}

}