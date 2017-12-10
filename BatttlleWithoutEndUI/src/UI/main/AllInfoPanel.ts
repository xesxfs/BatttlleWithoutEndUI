class AllInfoPanel extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}
	private list:Array<eui.Label>;
	private textGroup:eui.Group;
	private originHeight:number;

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
		this.originHeight=this.textGroup.height;
	}

	public addText(info:string){
	
		let date =new Date();
		let time ="["+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"]";
		let txtLab=new eui.Label(time+info);
		txtLab.textColor=0x000000
		this.textGroup.addChild(txtLab);
		this.list.push(txtLab);
		this.tidy();

	}

	private tidy(){
		let length =this.list.length;
		let i=0;
		while(i<length){
			this.list[i].x=10;
			this.list[i].y=i*this.list[i].height+20;
			console.log("this.list[i].y:",this.list[i].y);
			i++;
		}
		if(length>21){
			this.textGroup.y-=30;
			console.log("this.textGroup.y",this.textGroup.y);
		}
		console.log("list:",length);
	}
	
}