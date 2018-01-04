class MagicPanel extends eui.Component implements eui.UIComponent {
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
	public Gap: number = 50;

	private init() {
		var cell: SkillCell = null;
		var mIdx: number = (0);
		var skillIdx: number = (0);
		while (skillIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category == iData.iSkill.SkillCategory.MAGIC) {
				cell = new SkillCell(iGlobal.Player.skillList[skillIdx]);
				this.listSprite.addChild(cell);
				cell.y = this.Gap * mIdx;
				mIdx++;
			}
			skillIdx++;
		}
	}

	public update() {
		var sIdx: number = (0);
		while (sIdx < this.listSprite.numChildren) {
			((this.listSprite.getChildAt(sIdx) as SkillCell)).update();
			sIdx++;
		}
		this.addCell();
	}

	public addCell() {
		var cell: SkillCell = null;
		var mIdx: number = (0);
		var sIdx: number = (0);
		while (sIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[sIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[sIdx].skillData.category == iData.iSkill.SkillCategory.MAGIC) {
				mIdx++;
				if (mIdx > this.listSprite.numChildren) {
					cell = new SkillCell(iGlobal.Player.skillList[sIdx]);
					this.listSprite.addChild(cell);
					cell.y = this.Gap * (mIdx - 1);
				}
			}
			sIdx++;
		}
	}

}
