class StringCell extends BasicCell {
	private size: number = 0;
	public w: number = 0;
	public textField: egret.TextField;
	public constructor(text: string, width: number = 100, size: number = 16) {
		super(0, 0);
		this.size = size;
		this.w = width;
		this.textField = iGlobal.Global.getTextField(size);
		this.addChild(this.textField);
		this.setText(text);
		this.touchChildren = false;
		this.touchEnabled = false;
	}

	public setText(text: string) {
		var _loc2_: number = 0;
		this.graphics.clear();
		if (this.contains(this.textField)) {
			this.removeChild(this.textField);
		}
		this.textField = iGlobal.Global.getTextField(this.size);
		this.addChild(this.textField);
		this.textField.width = this.w + 100;
		this.textField.text = text;
		this.textField.width = this.textField.textWidth + 6;
		if (this.textField.width > this.w) {
			this.removeChild(this.textField);
			_loc2_ = 1;
			while (_loc2_ < this.size) {
				this.textField = iGlobal.Global.getTextField(this.size - _loc2_);
				this.textField.width = this.w + 100;
				this.textField.text = text;
				this.textField.width = this.textField.textWidth + 6;
				if (this.textField.width < this.w) {
					break;
				}
				_loc2_++;
			}
			this.addChild(this.textField);
		}
	}
}