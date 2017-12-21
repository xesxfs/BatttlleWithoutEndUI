class ItemWindow extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();

	}

	public orderValue: eui.Label;
	public orderType: eui.Label;
	public textBag: eui.Label;
	public text: eui.Label;
	public money: eui.Label;
	public soundsBox: eui.CheckBox;
	public autoBox: eui.CheckBox;
	public forgeButton: eui.Button;




	public removeCurrentItem(): any {
		this.onItemChange();
	}

	private checkIfinBag() {
		// var _loc1_: number = iGlobal.Player.itemList.length;
		// var _loc2_: number = 0;
		// while (_loc2_ < _loc1_) {
		// 	if (this.panel.selectCell) {
		// 		if (iGlobal.Player.itemList[_loc2_] == this.panel.selectCell.equip) {
		// 			return;
		// 		}
		// 	}
		// 	_loc2_++;
		// }
		// this.panel.selectCell = null;
	}

	private setAutoInfo(): any {
		var _loc1_: number = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
		if (_loc1_ > 13) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+7");
		}
		else if (_loc1_ > 9) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+5");
		}
		else if (_loc1_ > 5) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+3");
		}
		else if (_loc1_ > 1) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+1");
		}
		else {
			this.autoBox.visible = false;
		}
	}

	private onItemChange(param1: egret.Event = null) {
		var _loc3_: egret.Sprite = <any>null;
		var _loc4_: number = 0;
		this.checkIfinBag();
		this.setAutoInfo();
		// if (!this.panel.selectCell) {
		// this.item_mc.visible = false;
		this.text.text = ("");
		this.money.text = ("");
		this.forgeButton.touchEnabled = false;
		this.forgeButton.touchChildren = false;
		// return;
		// }
		this.forgeButton.touchEnabled = true;
		this.forgeButton.touchChildren = true;
		// var _loc2_: iData.iItem.Equipment = this.panel.selectCell.equip;
		// if (_loc2_ instanceof iData.iItem.Weapon) {
		// 	_loc3_ = new (egret.getDefinitionByName("mc_" + _loc2_.type))();
		// }
		// else {
		// 	_loc3_ = new (egret.getDefinitionByName("mc_" + _loc2_.position + "_" + _loc2_.type))();
		// }
		// if (this.item_mc.numChildren > 0) {
		// 	_loc4_ = flash.checkInt(this.item_mc.numChildren);
		// 	while (_loc4_ > 0) {
		// 		this.item_mc.removeChildAt(0);
		// 		_loc4_--;
		// 	}
		// }
		// this.item_mc.addChild(_loc3_);
		_loc3_.width = 50;
		_loc3_.height = 50;
		// this.item_mc.visible = true;
		this.text.text = (this.getSuccessRate() + "%");
		// if (!this.panel.selectCell.equip.canLevelup()) {
		// 	this.forgeButton.touchEnabled = false;
		// 	this.forgeButton.touchChildren = false;
		// 	this.money.text=("<font color=\'#ff4040\'>$" + this.getMoney() + "</font>");
		// }
		// else {
		// 	this.money.text=("$" + this.getMoney());
		// }
	}

	private setBagText() {
		var _self__: any = this;
		var valueDown: Function = <any>null;
		var typeDown: Function = <any>null;
		valueDown = function (): any {
			var itemSort: Function = null;
			itemSort = function (param1: iData.iItem.Equipment, param2: iData.iItem.Equipment): number {
				if (param1.getMoney() < param2.getMoney()) {
					return 1;
				}
				if (param1.getMoney() > param2.getMoney()) {
					return -1;
				}
				return 0;
			};
			// iGlobal.Player.itemList.sort(itemSort);
			_self__.panel.update();
			_self__.updateBagText();
		};
		typeDown = function (): any {
			var itemSort: Function = <any>null;
			itemSort = function (param1: iData.iItem.Equipment, param2: iData.iItem.Equipment): number {
				if (param1.sortWeight < param2.sortWeight) {
					return -1;
				}
				if (param1.sortWeight > param2.sortWeight) {
					return 1;
				}
				return 0;
			};
			// iGlobal.Player.itemList.sort(itemSort);
			_self__.panel.update();
			_self__.updateBagText();
		};
		// var bag: egret.Sprite = new iPanel.iCell.BasicCell(200, 40);
		// this.addChild(bag);
		// bag.x = 0;
		// bag.y = 0;
		// this.textBag.width = 200;
		// this.textBag.htmlText = "<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>";
		// bag.addChild(this.textBag);
		// var value: iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton = new iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton("价值", "按价值排列");
		// bag.addChild(value);
		// value.x = 5;
		// value.y = 0;
		// value.downFunction = valueDown;
		// var type: iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton = new iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton("类型", "按类型排列");
		// bag.addChild(type);
		// type.x = 160;
		// type.y = 0;
		// type.downFunction = typeDown;
	}

	public updateBagText(param1: egret.Event = null): any {
		this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
	}

	private setForge() {
		var _self__: any = this;
		var autoDown: Function = <any>null;
		var autoUp: Function = <any>null;
		var soundsDown: Function = <any>null;
		var soundsUp: Function = <any>null;
		var onDown: Function = <any>null;
		autoDown = function (): any {
			_self__.autoEnhance = true;
		};
		autoUp = function (): any {
			_self__.autoEnhance = false;
		};
		soundsDown = function (): any {
			iGlobal.Global.sound_toggle = true;
		};
		soundsUp = function (): any {
			iGlobal.Global.sound_toggle = false;
		};
		onDown = function (): any {
			if (<any>!_self__.panel.selectCell) {
				return;
			}
			var _loc1_: number = 0;
			var _loc2_: number = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
			if (_loc2_ > 13) {
				_loc1_ = 7;
			}
			else if (_loc2_ > 9) {
				_loc1_ = 5;
			}
			else if (_loc2_ > 5) {
				_loc1_ = (3);
			}
			else if (_loc2_ > 1) {
				_loc1_ = (1);
			}
			if (_self__.autoEnhance && _self__.panel.selectCell.equip.level < _loc1_) {
				while (_self__.panel.selectCell.equip.level < _loc1_) {
					if (<any>!_self__.panel.selectCell) {
						break;
					}
					if (iGlobal.Player.gold < _self__.getMoney()) {
						break;
					}
					forging();
				}
			}
			else {
				forging();
			}
			this["setBefore"]();
			// iGlobal.Player.save();
		};
		var forging: Function = <any>function (): any {
			var _loc2_: number = (0);
			var _loc3_: number = (0);
			// var _loc4_: flash.Sound = <any>null;
			// if (<any>!_self__.panel.selectCell) {
			// 	return;
			// }
			iGlobal.Player.loseMoney(_self__.getMoney());
			var _loc1_: boolean = <any>false;
			if (Math.random() * 100 < _self__.getSuccessRate()) {
				_self__.panel.selectCell.equip.levelup();
				iData.iPlayer.TitleList.updateTitleInfo("forge", _self__.panel.selectCell.equip.level);
				iData.iPlayer.TitleList.updateTitleInfo("fail", 0, -1);
				// if (iGlobal.Global.kongregate) {
				// 	iGlobal.Global.kongregate.stats.submit("Forge", _self__.panel.selectCell.equip.level);
				// }
			}
			else {
				_loc2_ = (iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level);
				_loc3_ = (50);
				if (_loc2_ > 13) {
					if (Math.random() * 100 >= _loc3_) {
						if (_self__.panel.selectCell.equip.level < 7) {
							_self__.panel.selectCell.equip.setLevel(0);
						}
						else {
							_loc1_ = true;
						}
					}
				}
				else if (_loc2_ > 9) {
					if (Math.random() * 100 < _loc3_) {
						_self__.panel.selectCell.equip.setLevel(_self__.panel.selectCell.equip.level - 1);
					}
					else if (_self__.panel.selectCell.equip.level < 5) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else {
						_loc1_ = true;
					}
				}
				else if (_loc2_ > 5) {
					if (Math.random() * 100 < _loc3_) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else if (_self__.panel.selectCell.equip.level < 3) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else {
						_loc1_ = true;
					}
				}
				else if (_loc2_ > 1) {
					if (_self__.panel.selectCell.equip.level < 1) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else {
						_loc1_ = true;
					}
				}
				else {
					_loc1_ = true;
				}
				iData.iPlayer.TitleList.updateTitleInfo("fail", 0, 1);
			}
			if (<any>!_loc1_) {
				_self__.panel.selectCell.update();
				_self__.onItemChange();
				//MainScene.allInfoPanel.addText("你获得了" + _self__.panel.selectCell.equip.getNameHTML() + "<font color=\'" + flash.bind(_self__.panel.selectCell.equip.getColor, _self__.panel.selectCell.equip) + "\'>+" + _self__.panel.selectCell.equip.level + "!");
			}
			else {
				if (_self__.panel.selectCell.equip.level > 8 || _self__.panel.selectCell.equip.quality >= 4) {
					if (iGlobal.Global.sound_toggle) {
						// _loc4_ = new yell_sound();
						// _loc4_.play();
					}
				}
				iGlobal.Player.removeItem(_self__.panel.selectCell.equip);
				// MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>强化</font>" + _self__.panel.selectCell.equip.getNameHTML() + "<font color=\'" + flash.bind(_self__.panel.selectCell.equip.getColor, _self__.panel.selectCell.equip) + "\'>+" + (_self__.panel.selectCell.equip.level + 1) + " <font color=\'#ff4040\'>失败. 物品消失!</font>");
				_self__.panel.selectCell = null;
				_self__.panel.update();
				_self__.onItemChange();
				_self__.updateBagText();
			}
		};
		// var c: iPanel.iCell.BasicCell = new iPanel.iCell.BasicCell(200, 135);
		// this.addChild(c);
		// c.x = 0;
		// c.y = 405;
		// this.autoBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("自动+7", 16, false);
		// c.addChild(this.autoBox);
		// this.autoBox.x = 70;
		// this.autoBox.y = 100;
		// this.autoEnhance = false;
		// this.setAutoInfo();
		// this.autoBox.downFunction = autoDown;
		// this.autoBox.upFunction = autoUp;
		// var soundsBox: any = <any>new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("音效", 16);
		// c.addChild(soundsBox);
		// soundsBox.x = 70;
		// soundsBox.y = 80;
		// soundsBox.downFunction = soundsDown;
		// soundsBox.upFunction = soundsUp;
		// this.forgeButton = new iPanel.iScene.iPanel.iWindow.iItem.ForgeButton();
		// c.addChild(this.forgeButton);
		// this.forgeButton.x = 140;
		// this.forgeButton.y = 75;
		// this.forgeButton.downFunction = onDown;
		// var s_text: iPanel.iCell.StringCell = new iPanel.iCell.StringCell("成功率", 130, 24);
		// c.addChild(s_text);
		// s_text.x = 10;
		// s_text.y = 35;
		// this.text = new iPanel.iCell.StringCell("", 100, 24);
		// c.addChild(this.text);
		// this.text.x = 100;
		// this.text.y = 35;
		// var m_text: iPanel.iCell.StringCell = new iPanel.iCell.StringCell("费用", 130, 24);
		// c.addChild(m_text);
		// m_text.x = 10;
		// m_text.y = 5;
		// this.money = new iPanel.iCell.StringCell("", 100, 24);
		// c.addChild(this.money);
		// this.money.x = 60;
		// this.money.y = 5;
		// this.item_mc = new egret.Sprite();
		// c.addChild(this.item_mc);
		// this.item_mc.x = 10;
		// this.item_mc.y = 75;
	}

	public addOneItem(): any {
		// this.panel.addOneCell();
		this.updateBagText();
	}

	private getSuccessRate(): number {
		// // var _loc1_: number = (this.panel.selectCell.equip.level + 1);
		// var _loc2_: number = iGlobal.Player.luck / 20 + Math.pow(Math.E, -_loc1_ / 5) * 100 + iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
		// _loc2_ = (_loc2_ * 100 >> 0) / 100;
		// if (_loc2_ > 100 - _loc1_ * 3) {
		// 	_loc2_ = 100 - _loc1_ * 3;
		// }
		// return _loc2_;
		return;
	}

	private getMoney(): number {
		// var _loc1_: number = (this.panel.selectCell.equip.getMoney() * Math.pow(1.2, this.panel.selectCell.equip.level + 1));
		// return _loc1_;
		return;
	}

}