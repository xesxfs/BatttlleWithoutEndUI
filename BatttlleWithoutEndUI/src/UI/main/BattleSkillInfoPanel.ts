class BattleSkillInfoPanel extends eui.Component implements eui.UIComponent {
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

	private att: eui.Label;
	private def: eui.Label;
	private GAP: number = 20;
	private yStart: number = -5;
	private xStart1: number = 5;
	private xStart2: number = 10;
	private attPanel: egret.Sprite;
	private defPanel: egret.Sprite;
	private panel: egret.Sprite;
	private bg: egret.Sprite;

	private init() {
		this.att = new eui.Label("攻击");
		this.def = new eui.Label("防御");
		this.bg = new egret.Sprite();
		this.addChild(this.bg);
		this.panel = new egret.Sprite();
		this.attPanel = new egret.Sprite();
		this.defPanel = new egret.Sprite();
		this.addChild(this.panel);
		this.update();
	}


	public update() {
		var curSpellChance: number = 0;
		var skillIndex: number = 0;
		var skillLab: eui.Label = null;
		this.remove();
		var skillList: Array<iData.iSkill.ActiveSkill> = iGlobal.Player.attackSkillList;
		var skillLength: number = skillList.length;
		if (skillLength > 0) {
			this.panel.addChild(this.att);
			this.att.x = this.xStart1;
			this.att.y = this.yStart;
			curSpellChance = iGlobal.Player.spellChance + 20 + skillLength * 5;
			if (curSpellChance > 95) {
				curSpellChance = 95;
			}
			skillIndex = 0;
			while (skillIndex < skillLength) {
				skillLab = new eui.Label(skillList[skillIndex].skillData.realName + "  " + (curSpellChance / skillLength * 100 >> 0) / 100 + "%");
				this.attPanel.addChild(skillLab);
				skillLab.y = this.GAP * skillIndex;
				skillIndex++;
			}
			this.panel.addChild(this.attPanel);
			this.attPanel.x = this.xStart2;
			this.attPanel.y = this.yStart + 30;
		}
		skillList = iGlobal.Player.defenceSkillList;
		skillLength = skillList.length;
		if (skillLength > 0) {
			this.panel.addChild(this.def);
			this.def.x = this.xStart1;
			this.def.y = this.attPanel.y + this.attPanel.height;
			curSpellChance = iGlobal.Player.spellChance + skillLength * 20;
			if (curSpellChance > 95) {
				curSpellChance = 95;
			}
			skillIndex = 0;
			while (skillIndex < skillLength) {
				skillLab = new eui.Label(skillList[skillIndex].skillData.realName + "  " + (curSpellChance / skillLength * 100 >> 0) / 100 + "%");
				this.defPanel.addChild(skillLab);
				skillLab.y = this.GAP * skillIndex;
				skillIndex++;
			}
			this.panel.addChild(this.defPanel);
			this.defPanel.x = this.xStart2;
			this.defPanel.y = this.def.y + 30;
		}
		// this.drawBg();
	}

	private remove() {
		if (this.panel.contains(this.att)) {
			this.panel.removeChild(this.att);
		}
		if (this.panel.contains(this.def)) {
			this.panel.removeChild(this.def);
		}
		this.attPanel.removeChildren();
		this.defPanel.removeChildren();
	}

	private drawBg() {
		this.bg.graphics.clear();
		this.bg.graphics.beginFill(16777215, 0);
		this.bg.graphics.drawRect(0, 0, 170, this.height);
		this.bg.graphics.endFill();
	}

}