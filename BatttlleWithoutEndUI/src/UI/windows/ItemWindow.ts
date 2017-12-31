class ItemWindow extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.itemsGroup.removeChildren();
		this.setForge();
		// this.itemsGroup.addEventListener("touchTap", this.onItemChange, this);
	}

	public orderValue: eui.Label;
	public orderType: eui.Label;
	public textBag: eui.Label;
	public text: eui.Label;
	public money: eui.Label;
	public soundsBox: eui.CheckBox;
	public autoBox: eui.CheckBox;
	public forgeButton: eui.Button;
	private selectCell: EquipmentItem;
	public itemsGroup: eui.Group;
	private equipmentItems: Array<EquipmentItem> = [];
	private Gap: number = 100;




	public removeCurrentItem() {
		this.onItemChange();
	}

	private checkIfinBag() {
		var length: number = iGlobal.Player.itemList.length;
		var index: number = 0;
		while (index < length) {
			if (this.selectCell) {
				if (iGlobal.Player.itemList[index] == this.selectCell.equip) {
					return;
				}
			}
			index++;
		}
		this.selectCell = null;
	}

	private setAutoInfo() {
		var level: number = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
		if (level > 13) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+7");
		}
		else if (level > 9) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+5");
		}
		else if (level > 5) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+3");
		}
		else if (level > 1) {
			this.autoBox.visible = true;
			this.autoBox.label = ("自动+1");
		}
		else {
			this.autoBox.visible = false;
		}
	}

	private onItemChange() {
		// console.log(e.currentTarget);
		var _loc3_: egret.Sprite = null;
		var _loc4_: number = 0;
		this.checkIfinBag();
		this.setAutoInfo();
		if (!this.selectCell) {
			// this.item_mc.visible = false;
			this.text.text = ("");
			this.money.text = ("");
			this.forgeButton.touchEnabled = false;
			this.forgeButton.touchChildren = false;
			return;
		}
		this.forgeButton.touchEnabled = true;
		this.forgeButton.touchChildren = true;
		var selectEquip: iData.iItem.Equipment = this.selectCell.equip;
		if (selectEquip instanceof iData.iItem.Weapon) {
			// _loc3_ = new (egret.getDefinitionByName("mc_" + selectEquip.type))();
		}
		else {
			// _loc3_ = new (egret.getDefinitionByName("mc_" + selectEquip.position + "_" + selectEquip.type))();
		}
		// if (this.item_mc.numChildren > 0) {
		// 	_loc4_ = flash.checkInt(this.item_mc.numChildren);
		// 	while (_loc4_ > 0) {
		// 		this.item_mc.removeChildAt(0);
		// 		_loc4_--;
		// 	}
		// }
		// this.item_mc.addChild(_loc3_);
		// _loc3_.width = 50;
		// _loc3_.height = 50;
		// this.item_mc.visible = true;
		this.text.text = (this.getSuccessRate() + "%");
		if (!this.selectCell.equip.canLevelup()) {
			this.forgeButton.touchEnabled = false;
			this.forgeButton.touchChildren = false;
			this.money.textFlow = iGlobal.Global.htmlParse.parse("<font color=\'#ff4040\'>$" + this.getMoney() + "</font>");
		}
		else {
			this.money.text = ("$" + this.getMoney());
		}
	}

	private setBagText() {
		var _self__ = this;
		var valueDown: Function = null;
		var typeDown: Function = null;
		valueDown = function () {

			function itemSort(param1: iData.iItem.Equipment, param2: iData.iItem.Equipment): number {
				if (param1.getMoney() < param2.getMoney()) {
					return 1;
				}
				if (param1.getMoney() > param2.getMoney()) {
					return -1;
				}
				return 0;
			};
			iGlobal.Player.itemList.sort(itemSort);
			_self__.updateList();
			_self__.updateBagText();
		};
		typeDown = function () {
			function itemSort(a: iData.iItem.Equipment, b: iData.iItem.Equipment): number {
				if (a.sortWeight < b.sortWeight) {
					return -1;
				}
				if (a.sortWeight > b.sortWeight) {
					return 1;
				}
				return 0;
			};
			iGlobal.Player.itemList.sort(itemSort);
			// _self__.panel.update();
			_self__.updateBagText();
		};
		// var bag: egret.Sprite = new iPanel.iCell.BasicCell(200, 40);
		// this.addChild(bag);
		// bag.x = 0;
		// bag.y = 0;
		// this.textBag.width = 200;
		this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
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

	public updateBagText(param1: egret.Event = null) {
		this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
	}

	public addOneCell() {
		var _self__ = this;
		var onDown: Function = null;
		onDown = function () {
			_self__.setSelectedCell(this);
			console.log(this);
		};
		var cell: EquipmentItem = new EquipmentItem(iGlobal.Player.itemList[iGlobal.Player.itemList.length - 1]);
		this.itemsGroup.addChild(cell);
		cell.y = (iGlobal.Player.itemList.length - 1) * this.Gap;
		// this.buttonGroup.addButton(cell);
		cell.downFunction = onDown;
		this.equipmentItems.push(cell);
	}

	public updateList() {
		for (let i = 0; i < this.itemsGroup.numChildren; i++) {
			let equipmentItem = this.itemsGroup.getChildAt(i) as EquipmentItem;
			equipmentItem.y = i * this.Gap;
		}
		// this.removeList();
		// var _self__ = this;
		// var onDown: Function = null;
		// onDown = function () {
		// 	_self__.setSelectedCell(this);
		// 	console.log(this);
		// };
		// this.itemsGroup.removeChildren();
		// let idx = 0;
		// iGlobal.Player.itemList.forEach((itemData) => {
		// 	var cell: EquipmentItem = new EquipmentItem(itemData);
		// 	this.itemsGroup.addChild(cell);
		// 	cell.y = idx++ * this.Gap;
		// 	cell.downFunction = onDown;
		// })
	}

	public removeList() {
		for (let i = this.itemsGroup.numChildren - 1; i >= 0; i--) {
			let equipmentItem = this.itemsGroup.getChildAt(i) as EquipmentItem;
			equipmentItem.remove();
		}

	}


	private setSelectedCell(select: EquipmentItem) {
		var _self__ = this;
		this.selectCell = select;
		this.onItemChange();
		// _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Change));
	}

	private setForge() {
		var _self__ = this;
		// var autoDown: Function = null;
		// var autoUp: Function = null;
		// var soundsDown: Function = null;
		// var soundsUp: Function = null;
		// var onDown: Function = null;
		// autoDown = function (): any {
		// 	_self__.autoEnhance = true;
		// };
		// autoUp = function (): any {
		// 	_self__.autoEnhance = false;
		// };
		// soundsDown = function (): any {
		// 	iGlobal.Global.sound_toggle = true;
		// };
		// soundsUp = function (): any {
		// 	iGlobal.Global.sound_toggle = false;
		// };
		// onDown = function (): any {
			if (!_self__.selectCell) {
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
			if (_self__.autoBox.selected && _self__.selectCell.equip.level < _loc1_) {
				while (_self__.selectCell.equip.level < _loc1_) {
					if (<any>!_self__.selectCell) {
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
		// 	this["setBefore"]();
		// 	// iGlobal.Player.save();
		// };
		var forging: Function = function () {
			var _loc2_: number = (0);
			var _loc3_: number = (0);
			// var _loc4_: flash.Sound = <any>null;
			if (!_self__.selectCell) {
				return;
			}
			iGlobal.Player.loseMoney(_self__.getMoney());
			var _loc1_: boolean = false;
			if (Math.random() * 100 < _self__.getSuccessRate()) {
				_self__.selectCell.equip.levelup();
				iData.iPlayer.TitleList.updateTitleInfo("forge", _self__.selectCell.equip.level);
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
						if (_self__.selectCell.equip.level < 7) {
							_self__.selectCell.equip.setLevel(0);
						}
						else {
							_loc1_ = true;
						}
					}
				}
				else if (_loc2_ > 9) {
					if (Math.random() * 100 < _loc3_) {
						_self__.selectCell.equip.setLevel(_self__.selectCell.equip.level - 1);
					}
					else if (_self__.selectCell.equip.level < 5) {
						_self__.selectCell.equip.setLevel(0);
					}
					else {
						_loc1_ = true;
					}
				}
				else if (_loc2_ > 5) {
					if (Math.random() * 100 < _loc3_) {
						_self__.selectCell.equip.setLevel(0);
					}
					else if (_self__.selectCell.equip.level < 3) {
						_self__.selectCell.equip.setLevel(0);
					}
					else {
						_loc1_ = true;
					}
				}
				else if (_loc2_ > 1) {
					if (_self__.selectCell.equip.level < 1) {
						_self__.selectCell.equip.setLevel(0);
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
			if (!_loc1_) {
				// _self__.selectCell.update();
				_self__.onItemChange();
				MainScene.allInfoPanel.addText("你获得了" + _self__.selectCell.equip.getNameHTML() + "<font color=\'" + _self__.selectCell.equip.getColor+ _self__.selectCell.equip + "\'>+" + _self__.selectCell.equip.level + "!");
			}
			else {
				if (_self__.selectCell.equip.level > 8 || _self__.selectCell.equip.quality >= 4) {
					if (iGlobal.Global.sound_toggle) {
						// _loc4_ = new yell_sound();
						// _loc4_.play();
					}
				}
				iGlobal.Player.removeItem(_self__.selectCell.equip);
				MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>强化</font>" + _self__.selectCell.equip.getNameHTML() + "<font color=\'" + _self__.selectCell.equip.getColor+ _self__.selectCell.equip+ "\'>+" + _self__.selectCell.equip.level + 1 + " <font color=\'#ff4040\'>失败. 物品消!</font>");
				_self__.selectCell = null;
		// 		_self__.panel.update();
				_self__.onItemChange();
				_self__.updateBagText();
			}
		};
		// // var c: iPanel.iCell.BasicCell = new iPanel.iCell.BasicCell(200, 135);
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

	public addOneItem() {
		this.addOneCell();
		this.updateBagText();
	}

	private getSuccessRate(): number {
		var level: number = (this.selectCell.equip.level + 1);
		var rate: number = iGlobal.Player.luck / 20 + Math.pow(Math.E, -level / 5) * 100 + iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
		rate = (rate * 100 >> 0) / 100;
		if (rate > 100 - level * 3) {
			rate = 100 - level * 3;
		}
		return rate;
	}

	private getMoney(): number {
		var money: number = (this.selectCell.equip.getMoney() * Math.pow(1.2, this.selectCell.equip.level + 1));
		return money;
	}

}