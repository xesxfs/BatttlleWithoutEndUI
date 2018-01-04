class PassivePanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}
	public listSprite: eui.Group;
	private Gap: number = 50;

	private init() {
		var cell: SkillCell = null;
		var pIdx: number = (0);
		var idx: number = (0);
		while (idx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[idx] instanceof iData.iSkill.PassiveSkill)) {
				cell = new SkillCell(iGlobal.Player.skillList[idx]);
				this.listSprite.addChild(cell);
				cell.y = this.Gap * pIdx;
				pIdx++;
			}
			idx++;
		}
	}

	public update() {
		var idx: number = (0);
		while (idx < this.listSprite.numChildren) {
			((this.listSprite.getChildAt(idx) as SkillCell)).update();
			idx++;
		}
		this.addCell();
	}

	public addCell(): any {
		var cell: SkillCell = null;
		var pIdx: number = (0);
		var sIdx: number = (0);
		while (sIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[sIdx] instanceof iData.iSkill.PassiveSkill)) {
				pIdx++;
				if (pIdx > this.listSprite.numChildren) {
					cell = new SkillCell(iGlobal.Player.skillList[sIdx]);
					this.listSprite.addChild(cell);
					cell.y = this.Gap * (pIdx - 1);
				}
			}
			sIdx++;
		}
	}

}