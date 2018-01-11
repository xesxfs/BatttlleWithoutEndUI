class ShopPanel extends BasicCell {
	private gap: number = 50;
	private startX1: number = 50;
	private startY1: number = 110;
	private startX2: number = 250;
	private itemPanel: egret.Sprite;
	private time: StringCell;
	private gold: StringCell;
	public constructor() {
		super(550, 500);
		this.graphics.lineStyle(2, 7631988);
		this.graphics.drawRect(0, 0, 550, 500);
		this.init();
	}

	private init() {
		var _self_: any = undefined;
		var hideDown: Function = null;
		hideDown = function (): any {
			_self_.visible = false;
			this["setBefore"]();
		};
		this.time = new StringCell("1200", 100, 32);
		this.addChild(this.time);
		this.time.x = 450;
		this.time.y = 460;
		this.gold = new StringCell("金钱", 200, 32);
		this.addChild(this.gold);
		this.gold.x = 30;
		this.gold.y = 460;
		var title: StringCell = new StringCell("商店", 300, 54);
		this.addChild(title);
		title.x = 200;
		title.y = 10;
		var equip_text: StringCell = new StringCell("出售", 100, 32);
		this.addChild(equip_text);
		equip_text.x = 100;
		equip_text.y = 70;
		var gamble_text: StringCell = new StringCell("赌博", 100, 32);
		this.addChild(gamble_text);
		gamble_text.x = 350;
		gamble_text.y = 70;
		this.itemPanel = new egret.Sprite();
		this.addChild(this.itemPanel);
		this.itemPanel.x = this.startX1;
		this.itemPanel.y = this.startY1;
		this.updateTime();
		var hide: FlickerButton = new FlickerButton("退出", 100, 48);
		this.addChild(hide);
		hide.x = 420;
		hide.y = 10;
		hide.downFunction = hideDown;
		_self_ = this;
		this.updateShop();
	}

	public updateTime() {
		var _loc1_: number = (iGlobal.Player.caculate % 600);
		_loc1_ = (600 - _loc1_);
		var _loc2_: number = (_loc1_ / 120);
		var _loc3_: number = ((_loc1_ - _loc2_ * 120) / 2);
		this.time.setText(_loc2_ + ":" + _loc3_);
		this.gold.setText("金钱: " + iGlobal.Player.gold);
	}

	public updateMoneyButton() {
		var _loc2_: any = undefined;
		var _loc1_: number = (0);
		while (_loc1_ < this.itemPanel.numChildren) {
			_loc2_ = this.itemPanel.getChildAt(_loc1_);
			// if ((_loc2_ instanceof GambleCell)) {
			// 	((_loc2_ instanceof GambleCell)).updateMoneyButton();
			// }
			// else {
			// 	((_loc2_ instanceof ShopCell)).updateMoneyButton();
			// }
			_loc1_++;
		}
	}

	public updateShop() {
		// var _loc1_: number = (0);
		// var _loc2_: number = <any>NaN;
		// var _loc3_: iData.iItem.EquipmentData = <any>null;
		// var _loc4_: iData.iItem.Equipment = <any>null;
		// var _loc5_: ShopCell = <any>null;
		// var _loc6_: GambleCell = <any>null;
		// _loc1_ = (this.itemPanel.numChildren - 1);
		// while (_loc1_ >= 0) {
		// 	this.itemPanel.removeChildAt(_loc1_);
		// 	_loc1_--;
		// }
		// _loc1_ = (0);
		// while (_loc1_ < 7) {
		// 	_loc2_ = Math.random() * 3 * (1 + iGlobal.Player.luck / 400) * (1 + iGlobal.Player.combatPower / 1000);
		// 	_loc3_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
		// 	if ((_loc3_ instanceof iData.iItem.WeaponData)) {
		// 		_loc4_ = new iData.iItem.Weapon(_loc3_ , _loc2_);
		// 	}
		// 	else {
		// 		_loc4_ = new iData.iItem.Equipment(_loc3_, _loc2_);
		// 	}
		// 	_loc5_ = new ShopCell(_loc4_);
		// 	this.itemPanel.addChild(_loc5_);
		// 	_loc5_.x = 0;
		// 	_loc5_.y = _loc1_ * this.gap;
		// 	_loc1_++;
		// }
		// _loc1_ = (0);
		// while (_loc1_ < 7) {
		// 	_loc2_ = Math.random() * 6 * (1 + iGlobal.Player.luck / 200) * (1 + iGlobal.Player.combatPower / 700);
		// 	_loc3_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
		// 	if ((_loc3_ instanceof iData.iItem.WeaponData)) {
		// 		_loc4_ = new iData.iItem.Weapon(_loc3_, _loc2_);
		// 	}
		// 	else {
		// 		_loc4_ = new iData.iItem.Equipment(_loc3_, _loc2_);
		// 	}
		// 	_loc6_ = new GambleCell(_loc4_);
		// 	this.itemPanel.addChild(_loc6_);
		// 	_loc6_.x = this.startX2;
		// 	_loc6_.y = _loc1_ * this.gap;
		// 	_loc1_++;
		// }
	}


}