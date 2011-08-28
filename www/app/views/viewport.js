mobi.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'card',
    // Now, we initialize it.
    initComponent: function() {
        mobi.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
