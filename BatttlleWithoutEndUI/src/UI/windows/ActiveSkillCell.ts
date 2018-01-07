class ActiveSkillCell extends eui.Component implements eui.UIComponent {
	public constructor(skill: iData.iSkill.Skill) {
		super();
		this.skill = skill;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	private skill: iData.iSkill.Skill;
	public text: eui.Label;


	protected childrenCreated(): void {
		super.childrenCreated();
		this.setInfo();
		this.addEventListener("touchTap", this.onMouseDown, this);
	}

	public update() {

	}

	public setInfo() {
		this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
	}


	private onMouseDown() {
		// if (flash.As3is(param1.target, doubleCircle) || flash.As3is(param1.target, mc_lvup)) {
		// 	return;
		// }
		if (iGlobal.Player.isSkillEquiped(this.skill)) {
			iGlobal.Player.unequipSkill(this.skill);
		}
		else {
			iGlobal.Player.equipSkill(this.skill);
		}
		this.updateEquip();
	}

	public updateEquip() {
		// if (iGlobal.Player.isSkillEquiped(this.skill)) {
		// 	this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 1, 0, 0, 0, 0);
		// 	this.mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		// 	this.text["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		// }
		// else {
		// 	this.bg["transform"].colorTransform = new flash.ColorTransform();
		// 	this.mc["transform"].colorTransform = new flash.ColorTransform();
		// 	this.text["transform"].colorTransform = new flash.ColorTransform();
		// }
	}

}