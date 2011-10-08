Ext.regApplication({
	tabletStartupScreen: '/images/phone_startup.png',
    phoneStartupScreen: '/images/phone_startup.png',
    name: 'mobi',
    defaultTarget: 'mobi-viewport',
    launch: function() {
		
	   Ext.namespace("mobi.models");
	   Ext.namespace("mobi.controllers");
	   Ext.namespace("mobi.views");
	   	
	   this.viewport = new mobi.views.Viewport({
	        application: this
	    });
	
	   this.mask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
	   
		Ext.dispatch({
            controller: 'collections',
            action    : 'index'
        })
	}	
});




