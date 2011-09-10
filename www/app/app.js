Ext.setup({
    tabletStartupScreen: '/images/phone_startup.png',
    phoneStartupScreen : '/images/phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false
});

Ext.regApplication({
	tabletStartupScreen: '/images/phone_startup.png',
    phoneStartupScreen : '/images/phone_startup.png',
    name: 'mobi',
    defaultTarget: 'mobi-viewport',
    launch: function() {
		
	   Ext.namespace("mobi.models");
	   Ext.namespace("mobi.controllers");
	   Ext.namespace("mobi.views");	
		
	   this.viewport = new mobi.views.Viewport({
	        application: this
	    });
	   
		Ext.dispatch({
            controller: 'collections',
            action    : 'index'
        })
	}	
});

mobi.ux = {
	LoadRecord: function(id){
		this.id = id;
		this.getId = function(){
			return this.id;
		}
	}
}
