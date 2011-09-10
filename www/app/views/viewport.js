mobi.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    id: 'mobi-viewport',
    fullscreen: true,
    layout: 'card',
    // Now, we initialize it.
    initComponent: function() {
		var me = this;
        mobi.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
