class AllInfoOutterPanel extends OutterPanel {
	public constructor() {
		super(345, 355);
	}

	protected setInnerPanel() {
		this.innerPanel = new AllInfoInnerPanel();
		this.viewport = this.innerPanel;
	}
}