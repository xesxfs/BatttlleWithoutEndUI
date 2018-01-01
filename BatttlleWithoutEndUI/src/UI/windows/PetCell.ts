class PetCell extends eui.Component implements eui.UIComponent {
	public constructor(pet: iData.iPet.Pet) {
		super();
		this.pet = pet;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.init();
	}
	public pet: iData.iPet.Pet;
	public text: eui.Label;
	public equipButton: eui.Button;
	public moneyButton: eui.Button;


	private init() {
		// this.be_mc = new (<any>flash.getDefinitionByName("pet_" + this.pet.mc_name))();
		// this.before.addChild(this.be_mc);
		// this.be_mc.width = 30;
		// this.be_mc.height = 30;
		// this.be_mc.x = 10;
		// this.be_mc.y = 10;
		// this.af_mc = new (<any>flash.getDefinitionByName("pet_" + this.pet.mc_name))();
		// this.after.addChild(this.af_mc);
		// this.af_mc.width = 30;
		// this.af_mc.height = 30;
		// this.af_mc.x = 10;
		// this.af_mc.y = 10;
		// this.af_mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		// this.text = iGlobal.Global.getTextField(20);
		// this.text.width = 120;
		this.text.textFlow = iGlobal.Global.htmlParse.parse(this.pet.realName);
		if (this.pet.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parse(this.text.text + (" Lv." + this.pet.level));
		}
		// this.addChild(this.text);
		// this.text.x = 50;
		// this.text.y = 10;
		this.setEquipButton();
		this.setMoneyButton();
		// this.infoWindow = new iPanel.iScene.iPanel.iWindow.iPet.PetInfoWindow(this.pet);
	}
	protected setEquipButton() {
		var _self__ = this;
		var equipDown: Function = null;
		equipDown = function () {
			iGlobal.Player.removePet(_self__.pet);
			iGlobal.Player.setPet(_self__.pet);
			// _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
		};
		// var equipButton: iPanel.iCell.EquipButton = new iPanel.iCell.EquipButton("equip");
		// this.addChild(equipButton);
		// equipButton.x = 150;
		// equipButton.y = 15;
		// equipButton.downFunction = equipDown;
	}

	protected setMoneyButton() {
		var _self__ = this;
		var moneyDown: Function = null;
		moneyDown = function () {
			iGlobal.Player.removePet(_self__.pet);
			// _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
		};
		// var moneyButton: iPanel.iCell.EquipButton = new iPanel.iCell.EquipButton("money");
		// this.addChild(moneyButton);
		// moneyButton.x = 172;
		// moneyButton.y = 15;
		// moneyButton.downFunction = moneyDown;
	}

	public update() {
		// this.infoWindow.draw(0, 0);
		this.text.textFlow = iGlobal.Global.htmlParse.parse(this.pet.realName);
		if (this.pet.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parse(this.text.text + (" Lv." + this.pet.level));
		}
	}

}