class SkillWindow extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	public combat:eui.Button;
	public magic:eui.Button;
	public passive:eui.Button;

	public combatScroller:eui.Scroller;
	public magicScroller:eui.Scroller;
	public passiveScroller:eui.Scroller;

	public panelsGroup:eui.Group;





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
		this.combat.addEventListener("touchTap",this.onCombat,this);
		this.passive.addEventListener("touchTap",this.onPassive,this);
		this.magic.addEventListener("touchTap",this.onMagic,this);
		this.removes();		

	}

	private onCombat(){
		this.removes();
		this.panelsGroup.addChild(this.combatScroller);
	}

	private onMagic(){
		this.removes();
		this.panelsGroup.addChild(this.magicScroller);
	}

	private onPassive(){
		this.removes();
		this.panelsGroup.addChild(this.passiveScroller);

	}

	private removes(){
		this.panelsGroup.removeChildren();
	}
	
}