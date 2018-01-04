class SkillCell extends eui.Component implements eui.UIComponent {
	public constructor(skill: iData.iSkill.Skill) {
		super();
		this.skill = skill;
	}
	private skill: iData.iSkill.Skill;
	public text: eui.Label;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.setInfo();
	}

	public update() {

	}

	public setInfo() {
		this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
	}

}