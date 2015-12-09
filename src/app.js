
var HelloWorldLayer = cc.Layer.extend({
    //开始菜单响应函数
    startAction:function(){
    	var scene = new MainScene();
    	cc.director.runScene(scene);
    },
    ctor:function () {
        this._super();
        var size = cc.winSize;
        // 添加开始游戏按钮
        var startItem = new cc.MenuItemFont("进入游戏",this.startAction,this);
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

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

