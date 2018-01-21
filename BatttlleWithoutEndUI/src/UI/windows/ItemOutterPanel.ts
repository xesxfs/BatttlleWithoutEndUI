class ItemOutterPanel extends OutterPanel {
	public constructor() {
		super(360, 100);
	}

	public setInner() {
		this.innerPanle = new ItemInnerPanel();
		this.viewport = this.innerPanle;
	}
}