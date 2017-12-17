module Tool {
	export class MyEvent extends egret.Event {
		public static Change:string;
		public static Update:string;
		public static MyScroll:string;

		public constructor(param1:string)
		{
			super(param1);
		}

	}
}

Tool.MyEvent.Change = "change";
Tool.MyEvent.Update = "myupdate";
Tool.MyEvent.MyScroll = "myScroll";
// flash.extendsClass("tool.MyEvent","egret.Event")
