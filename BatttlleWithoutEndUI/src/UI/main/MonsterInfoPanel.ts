class MonsterInfoPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}
	public mname: eui.Label;
	public title: eui.Label;
	public hp: eui.ProgressBar;
	public cp: eui.Label;

	private buffSprite: egret.Sprite;
	private bossIcon: egret.Sprite;
	public RED: string = "#ff4040";
	public BLUE: string = "#4a60d7";
	public YELLOW: string = "#FFA640";
	public GREEN: string = "#7AEE3C";
	public BROWN: string = "#bf7130";
	public PURPLE: string = "#BC38d3";
	public PINK: string = "#EE6b9c";

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}
	public update() {
		this.setCpRatioTitleAndName();
		this.setTitle();
		this.cp.text = (MainScene.battle.monster.CP + "");
		this.updateHp();
		this.updateBuff();
		this.updateBoss();
	}

	private updateBoss(): any {
		if (MainScene.battle.monster instanceof iData.iMonster.Boss) {
			// this.bossIcon.visible = true;
			return;
		}
		// this.bossIcon.visible = false;
	}

	public updateHp() {
		this.hp.maximum = MainScene.battle.monster.hp;
		this.hp.value = MainScene.battle.monsterHp;
	}

	private setCpRatioTitleAndName(): any {
		var _loc2_: string = null;
		var _loc3_: string = null;
		var _loc1_: number = MainScene.battle.monster.CP / iGlobal.Player.combatPower;
		if (_loc1_ < 0.8) {
			_loc2_ = this.PINK;
			_loc3_ = "非常弱小的";
		}
		else if (_loc1_ < 1) {
			_loc2_ = this.PURPLE;
			_loc3_ = "弱小的";
		}
		else if (_loc1_ < 1.4) {
			_loc2_ = this.BROWN;
			_loc3_ = "普通的";
		}
		else if (_loc1_ < 2) {
			_loc2_ = this.GREEN;
			_loc3_ = "强大的";
		}
		else if (_loc1_ < 3) {
			_loc2_ = this.YELLOW;
			_loc3_ = "厉害的";
		}
		else {
			_loc2_ = this.RED;
			_loc3_ = "BOSS";
		}
		var _loc4_: string = "<font color=\'" + _loc2_ + "\'>" + _loc3_ + "</font> " + MainScene.battle["monster"].data.realName;
		this.mname.textFlow = iGlobal.Global.htmlParse.parse(_loc4_);
	}

	private setTitle(): any {
		if (MainScene.battle["monster"].title) {
			this.title.text = (MainScene.battle["monster"].title.name);
			// this.title.setInfo(MainScene.battle["monster"].title.description);
			this.title.visible = true;
		}
		else {
			this.title.text = ("");
			this.title.visible = false;
		}
	}

	public updateBuff(): any {
		var _loc3_: egret.Sprite = <any>null;
		if (this.contains(this.buffSprite)) {
			this.removeChild(this.buffSprite);
		}
		this.buffSprite = new egret.Sprite();
		this.addChild(this.buffSprite);
		// this.buffSprite.x = this.beginX;
		// this.buffSprite.y = this.beginY + 50;
		// var _loc1_: Array<iData.iSkill.iBuff.Buff> = <any>iPanel.iScene.MainScene.battle["monster"].buffList;
		// var _loc2_: number = flash.checkInt(0);
		// while (_loc2_ < _loc1_.length) {
		// 	_loc3_ = new (<any>flash.getDefinitionByName("buff_" + _loc1_[_loc2_].name))();
		// 	_loc3_.width = 30;
		// 	_loc3_.height = 30;
		// 	this.buffSprite.addChild(_loc3_);
		// 	_loc3_.x = _loc2_ * 40;
		// 	_loc2_++;
		// }
	}

}