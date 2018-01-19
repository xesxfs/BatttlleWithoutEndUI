class OtherPanel extends egret.Sprite {

	public itemWindow: ItemWindow;
	public equipWindow: EquipWindow;
	public petWindow: PetWindow;
	public systemWindow: SystemWindow;
	public titleWindow: TitleWindow;
	public skillWindow: SkillWindow;
	public otherWindow: OtherWindow;
	public window:egret.DisplayObjectContainer;
	private array: Array<Function>;
	public constructor() {
		super();
		var buttonGroup: ButtonGroup = new ButtonGroup();
		var list: Array<any> = ["item", "equip", "pet", "skill", "title", "system", "info"];
		var list2: Array<any> = ["背包", "装备", "宠物", "技能", "称号", "设置", "其他"];
		var i: number = (0);
		var cell: ButtonCell = null;
		while (i < list.length) {
			cell = new MenuButton("before_" + list[i], "after_" + list[i], list2[i]);
			cell.y = i * 40;
			cell.x = -40;
			this.addChild(cell);
			buttonGroup.addButton(cell);
			// this.array.push(cell);
			i++;
		}
		this.init();
		this.setFunction();
	}

	private init() {
		this.itemWindow = new ItemWindow();
		this.equipWindow = new EquipWindow();
		this.petWindow = new PetWindow();
		this.skillWindow = new SkillWindow();
		this.titleWindow = new TitleWindow();
		this.systemWindow = new SystemWindow();
		this.otherWindow = new OtherWindow();
		this.array = new Array<Function>();
		this.setFunction();
		var bg: egret.Sprite = new BasicCell(200, 540);
		this.addChildAt(bg, 0);
	}

	private setFunction() {
		var _self__ = this;
		var addWindow0: Function = null;
		var addWindow1: Function = null;
		var addWindow2: Function = null;
		var addWindow3: Function = null;
		var addWindow4: Function = null;
		var addWindow5: Function = null;
		var addWindow6: Function = null;
		addWindow0 = function () {
			removeWindow();
			_self__.window = _self__.itemWindow;
			addWindow();
		};
		addWindow1 = function () {
			removeWindow();
			_self__.window = _self__.equipWindow;
			addWindow();
		};
		addWindow2 = function () {
			removeWindow();
			_self__.window = _self__.skillWindow;
			addWindow();
		};
		addWindow3 = function () {
			removeWindow();
			_self__.window = _self__.titleWindow;
			addWindow();
		};
		addWindow4 = function () {
			removeWindow();
			_self__.window = _self__.systemWindow;
			addWindow();
		};
		addWindow5 = function () {
			removeWindow();
			_self__.window = _self__.petWindow;
			addWindow();
		};
		addWindow6 = function () {
			removeWindow();
			_self__.window = _self__.otherWindow;
			addWindow();
		};
		var removeWindow: Function = function () {
			if (_self__.window) {
				_self__.removeChild(_self__.window);
			}
		};
		var addWindow: Function = function () {
			_self__.addChild(_self__.window);
			_self__.window.y = 40;
		};
		this.array[0] = addWindow0;
		this.array[1] = addWindow1;
		this.array[2] = addWindow2;
		this.array[3] = addWindow3;
		this.array[4] = addWindow4;
		this.array[5] = addWindow5;
		this.array[6] = addWindow6;
	}

	public onSelect(downIndex: number) {
		if (downIndex >= 0 && downIndex < this.array.length) {
			this.array[downIndex]();
		}
	}

}


