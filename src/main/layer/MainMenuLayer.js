/**
 * 主场景菜单显示层
 */
var MainMenuLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		
		var size = cc.winSize;
		// 添加开始游戏按钮
		var startItem = new cc.MenuItemFont("菜单层",this.startAction,this);
		startItem.attr({
			x: size.width/2,
			y: size.height/2,
			anchorX: 0.5,
			anchorY: 0.5
		});
		var menu = new cc.Menu(startItem);
		menu.x = 0;
		menu.y = 0;
		this.addChild(menu, 1);
		
		return true;
	}
});