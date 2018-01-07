class CombatPanel extends eui.Component implements eui.UIComponent {
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

	public init() {
		var cell: ActiveSkillCell = null;
		var combatIdx: number = 0;
		var skillIdx: number = 0;
		while (skillIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category != iData.iSkill.SkillCategory.MAGIC) {
				cell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
				this.listSprite.addChild(cell);
				cell.y = this.Gap * combatIdx;
				combatIdx++;
			}
			skillIdx++;
		}
	}


	public update() {
		var idx: number = 0;
		while (idx < this.listSprite.numChildren) {
			(this.listSprite.getChildAt(idx) as ActiveSkillCell).update();
			idx++;
		}
		this.addCell();
	}

	public addCell() {
		var skillCell: ActiveSkillCell = null;
		var combatIdx: number = 0;
		var skillIdx: number = (0);
		while (skillIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category != iData.iSkill.SkillCategory.MAGIC) {
				combatIdx++;
				if (combatIdx > this.listSprite.numChildren) {
					skillCell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
					this.listSprite.addChild(skillCell);
					skillCell.y = this.Gap * (combatIdx - 1);
				}
			}
			skillIdx++;
		}
	}

}