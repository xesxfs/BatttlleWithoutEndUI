class PetInfoPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}
	public petname: eui.Label;
	public lv: eui.Label;
	public exp: eui.ProgressBar;
	public hp: eui.ProgressBar;


	public update() {
		if (MainScene.battle.pet) {
			this.petname.text = (MainScene.battle.pet.realName);
			this.updateLv();
			this.updateHp();
			this.updateExp();
		}
		else {
			this.petname.text = ("");
			this.lv.text = ("");
			this.hp.value = 0;
			this.hp.maximum = 1;
			this.exp.value = 0;
			this.exp.maximum = 1;
		}
	}

	public updateHp() {
		if (MainScene.battle.pet) {
			this.hp.value = MainScene.battle.petHp;
			this.hp.maximum = MainScene.battle.pet.hp;
		}
	}

	public updateExp() {
		if (MainScene.battle.pet) {
			this.exp.value = MainScene.battle.pet.exp;
			this.exp.maximum = MainScene.battle.pet.getLevelExp();
		}
	}

	public updateLv() {
		if (MainScene.battle.pet) {
			this.lv.text = (MainScene.battle.pet.level + "");
		}
	}

}