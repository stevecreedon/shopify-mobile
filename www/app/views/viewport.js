mobi.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'card',
    // Now, we initialize it.
    initComponent: function() {
	
        //Ext.StoreMgr.on("add", function(index, object, key){console.log(index);console.log(object);console.log(key);})        

        Ext.apply(this, {
            items: [
                mobi.controllers.collections.index()
            ]
        });

        // Similar to calling "super" in languages like Java.  Kicks off initialization in parent classes.
        mobi.views.Viewport.superclass.initComponent.apply(this, arguments);

    }

});