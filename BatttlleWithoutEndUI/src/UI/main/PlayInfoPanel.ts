class PlayInfoPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}
	public pname: eui.Label;
	public race: eui.Label;
	public str: eui.Label;
	public attack: eui.Label;
	public age: eui.Label;
	public dex: eui.Label;
	public balance: eui.Label;
	public lv: eui.Label;
	public intelligence: eui.Label;
	public crit: eui.Label;
	public gold: eui.Label;
	public cp: eui.Label;
	public pro_ignore: eui.Label;
	public hp: eui.ProgressBar;
	public exp: eui.ProgressBar;
	public ap: eui.Label;
	public protection: eui.Label;
	public will: eui.Label;
	public crit_mul: eui.Label;
	public mp: eui.ProgressBar;
	public luck: eui.Label;
	public defence: eui.Label;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.update();
	}

	public update() {
		if (iGlobal.Player.title) {
			this.pname.text = iGlobal.Player.title.realName + "" + iGlobal.Player.playerName;
		}
		else {
			this.pname.text = iGlobal.Player.playerName;
		}
		this.race.text = iGlobal.Player.race.name.toUpperCase();
		this.age.text = iGlobal.Player.age + "";

		this.lv.text = iGlobal.Player.lv + "";
		if (iGlobal.Player.str < iGlobal.Player.basicStr) {
			this.str.textFlow = iGlobal.Global.htmlParse.parser(
				this.redText(iGlobal.Player.str + "") + "<font size=\'12\'>(" + iGlobal.Player.basicStr + ")</font>");
		}
		else {
			this.str.textFlow = iGlobal.Global.htmlParse.parser(this.greenText(iGlobal.Player.str + "") + "<font size=\'12\'>(" + iGlobal.Player.basicStr + ")</font>");
		}
		if (iGlobal.Player.dex < iGlobal.Player.basicDex) {
			this.dex.textFlow = iGlobal.Global.htmlParse.parser(this.redText(iGlobal.Player.dex + "") + "<font size=\'12\'>(" + iGlobal.Player.basicDex + ")</font>");
		}
		else {
			this.dex.textFlow = iGlobal.Global.htmlParse.parser(this.greenText(iGlobal.Player.dex + "") + "<font size=\'12\'>(" + iGlobal.Player.basicDex + ")</font>");
		}
		if (iGlobal.Player.intelligence < iGlobal.Player.basicInt) {
			this.intelligence.textFlow = iGlobal.Global.htmlParse.parser(this.redText(iGlobal.Player.intelligence + "") + "<font size=\'12\'>(" + iGlobal.Player.basicInt + ")</font>");
		}
		else {
			this.intelligence.textFlow = iGlobal.Global.htmlParse.parser(this.greenText(iGlobal.Player.intelligence + "") + "<font size=\'12\'>(" + iGlobal.Player.basicInt + ")</font>");
		}
		if (iGlobal.Player.will < iGlobal.Player.basicWill) {
			this.will.textFlow = iGlobal.Global.htmlParse.parser(this.redText(iGlobal.Player.will + "") + "<font size=\'12\'>(" + iGlobal.Player.basicWill + ")</font>");
		}
		else {
			this.will.textFlow = iGlobal.Global.htmlParse.parser(this.greenText(iGlobal.Player.will + "") + "<font size=\'12\'>(" + iGlobal.Player.basicWill + ")</font>");
		}
		if (iGlobal.Player.luck < iGlobal.Player.basicLuck) {
			this.luck.textFlow = iGlobal.Global.htmlParse.parser(this.redText(iGlobal.Player.luck + "") + "<font size=\'12\'>(" + iGlobal.Player.basicLuck + ")</font>");
		}
		else {
			this.luck.textFlow = iGlobal.Global.htmlParse.parser(this.greenText(iGlobal.Player.luck + "") + "<font size=\'12\'>(" + iGlobal.Player.basicLuck + ")</font>");
		}
		if (iGlobal.Player.attMin > iGlobal.Player.attMax) {
			this.attack.textFlow = iGlobal.Global.htmlParse.parser(iGlobal.Player.attMax + "~" + iGlobal.Player.attMin + "");
		}
		else {
			this.attack.textFlow = iGlobal.Global.htmlParse.parser(iGlobal.Player.attMin + "~" + iGlobal.Player.attMax + "");
		}
		this.balance.text = (iGlobal.Player.balance + "");
		this.crit.text = (iGlobal.Player.crit + "");
		this.defence.text = (iGlobal.Player.defence + "");
		this.protection.text = (iGlobal.Player.protection + "");
		// this.protection.text = (this.caculatePro() + "%");
		this.gold.text = (iGlobal.Player.gold + "");
		this.ap.text = (iGlobal.Player.ap + "");
		this.cp.text = ((iGlobal.Player.combatPower * 100 >> 0) / 100 + "");
		this.crit_mul.text = (iGlobal.Player.crit_mul + "%");
		this.pro_ignore.text = (iGlobal.Player.protectionIgnore + "");
		this.upDateHpAndMp();

	}

	private caculatePro(): number {
		return iGlobal.Player.protection * 6 / (iGlobal.Player.protection * 6 + 100) * 100;
	}

	public upDateHpAndMp() {
		if (MainScene.battle) {
			this.hp.value = MainScene.battle.playerHp;
			this.mp.value = MainScene.battle.playerMp;
		}
		this.hp.maximum = iGlobal.Player.hp;
		this.mp.maximum = iGlobal.Player.mp;
	}

	public upDateExp() {
		this.exp.value = iGlobal.Player.xp;
		this.exp.maximum = iGlobal.Player.getLevelExp();
	}

	public timeToGrowup(): string {
		/***计算有几个20分钟 */
		var perMinute: number = Math.round(iGlobal.Player.caculate % 2400);
		/**减去多余 */
		perMinute = Math.round(2400 - perMinute);
		var _loc2_: number = Math.round(perMinute / 120);
		var _loc3_: number = Math.round((perMinute - _loc2_ * 120) / 2);
		return _loc2_ + ":" + _loc3_;
	}
	private greenText(param1: string): string {
		return "<font color=\'#e3b20a\'>" + param1 + "</font>";
	}

	private redText(param1: string): string {
		return "<font color=\'#ff4040\'>" + param1 + "</font>";
	}

}