/**
 * 主场景
 */

var MainScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var menuLayer = new MainMenuLayer();
		this.addChild(menuLayer, 0, 1);
	}
});
