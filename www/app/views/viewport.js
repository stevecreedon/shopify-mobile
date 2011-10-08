mobi.views.Viewport = Ext.extend(Ext.Panel, {
    id: 'mobi-viewport',
    fullscreen: true,
    layout: 'card',
    initComponent: function() {
		var me = this;
        mobi.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
