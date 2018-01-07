class SkillCell extends eui.Component implements eui.UIComponent {
	public constructor(skill: iData.iSkill.Skill) {
		super();
		this.skill = skill;
	}
	private skill: iData.iSkill.Skill;
	public text: eui.Label;
	public lvupButton: eui.Button;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.setInfo();
		this.lvupButton.addEventListener("touchTap", this.onlevelUpDown, this);
		this.update();

	}

	public update() {
		this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
		if (this.skill.canLevelup()) {
			this.lvupButton.visible = true;
		}
		else {
			this.lvupButton.visible = false;
		}
	}

	public setInfo() {
		this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
	}


	private onlevelUpDown() {
		// if (flash.As3is(param1.target, doubleCircle) || flash.As3is(param1.target, mc_lvup)) {
		// 	return;
		// }
		// this["setBefore"]();
		this.skill.levelup();
		MainScene.otherPanel.skillWindow.passivePanel.update();
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