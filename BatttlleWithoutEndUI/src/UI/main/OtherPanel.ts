class OtherPanel extends eui.Component implements eui.UIComponent {
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

	public itemWindow: ItemWindow;
	public equipWindow: EquipWindow;
	public petWindow: PetWindow;
	public systemWindow: SystemWindow;
	public titleWindow: TitleWindow;
	public skillWindow: SkillWindow;
	public otherWindow: OtherWindow;
	public window: eui.Component;
	private array: Array<Function>;

	private init() {
		this.removeChildren();
		this.array = new Array<Function>();
		this.setFunction();
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


