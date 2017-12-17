module iData {
	export module iSkill {
		export module iBuff {
			export class BuffPoison extends iData.iSkill.iBuff.Buff {

				public constructor(param1:number)
				{
					super(param1);
					param1 = param1;
					this.name = "poison";
					this.count = param1;
				}

				public run():any
				{
					MainScene.battle.monsterHp = MainScene.battle.monsterHp - this.count;
					MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>毒</font>对" + MainScene.battle.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + this.count + "</font>伤害 ",iGlobal.Global.battle);
				}

				public combine(param1:iData.iSkill.iBuff.Buff):any
				{
					this.count = this.count + param1.count;
				}

			}
		}
	}
}
