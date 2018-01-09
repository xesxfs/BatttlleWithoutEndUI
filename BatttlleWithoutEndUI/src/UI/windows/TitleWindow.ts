class TitleWindow extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	public titelGroup: eui.Group;
	private Gap: number = 50;

	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}

	private init() {
		this.titelGroup.removeChildren();
		var titleCell: TitleCell = null;
		var titleList: Array<iData.iPlayer.Title> = iData.iPlayer.TitleList.list;
		var length: number = titleList.length;
		var index: number = 0;
		while (index < length) {
			titleCell = new TitleCell(titleList[index]);
			titleCell.y = this.Gap * index;
			index++;
			this.titelGroup.addChild(titleCell);
		}
	}

	public update() {

	}

}