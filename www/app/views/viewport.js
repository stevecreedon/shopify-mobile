mobi.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'card',
    // Now, we initialize it.
    initComponent: function() {

        // Create new instance of the our TeagramLists component.
        mobi.views.collectionsList = new mobi.views.CollectionsList();
        //mobi.views.collectionProductsList = new mobi.views.CollectionProductsList();

        // Let's add our view to the Viewport.
        // This is defined in the "views" folder under its respective name.
        Ext.apply(this, {
            items: [
                mobi.views.collectionsList
            ]
        });


        // Similar to calling "super" in languages like Java.  Kicks off initialization in parent classes.
        mobi.views.Viewport.superclass.initComponent.apply(this, arguments);

    }

});