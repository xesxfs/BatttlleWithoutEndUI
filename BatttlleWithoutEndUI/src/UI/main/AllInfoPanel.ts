class AllInfoPanel extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}
	private list:Array<eui.Label>;

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init(){
		this.list=[];
	}

	public addText(info:string){

	}
	
}