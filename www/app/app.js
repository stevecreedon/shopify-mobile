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
    launch: function() {
        this.views.viewport = new this.views.Viewport();
		this.controllers.collections.index();
    }
});
