/**
 * 主场景
 */
var MainLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		var size = cc.winSize;
		
		//添加一个背景
		var bg = new cc.Sprite(res.background_png);
		bg.getContentSize().width;
		bg.setScale(size.width, size.height);
		this.addChild(bg, -1, 0);
		
		var menuLayer = new MainMenuLayer();
		this.addChild(menuLayer, 0, 1);

		var actLayer = new MainActivityLayer();
		this.addChild(actLayer);
		
		return true;
	}
});


var MainScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var size = cc.winSize;
		
		var mainLayer = new MainLayer();
		this.addChild(mainLayer);
	}
});
