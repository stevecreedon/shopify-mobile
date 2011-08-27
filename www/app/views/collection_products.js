// This is the list item inside in the main list.  It is created for every record in the model, or simply
// each item in the array returned from the Instagram API.

mobi.views.productsListPanelId = function(collection){
	return 'collection_products_' + collection.data._id;
}


mobi.views.createProductsListPanel = function(collection){
	
	
	mobi.views.CollectionProductsList = Ext.extend(Ext.List, {

	    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
	    itemTpl: mobi.views.collectionProductsInnerListItemTpl(),

	    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
	    // all styles inside the InnerList items.
	    itemCls: 'mobi-collection-item',

	    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
	    plugins: [{
	        ptype: 'pullrefresh'
	    }],

	    // Bind our listeners to the each InnerList item.
	    // On itemtap, we grab the current record so we can create the full size image overlay.
	    // We added a loading animation while the image is downloaded so the user knows what's going on.
		listeners: {
	        itemtap: function (list, index, element, event) {
	            // Grab a reference the record.
	            var record = list.getRecord(element);
	            mobi.views.fetchProduct(collection_id, record.raw.product_id);
	        }
	    }

	});

    var tapHandler = function (btn, evt) {
	    mobi.views.viewport.getLayout().setActiveItem(mobi.views.collectionsList, {type: 'slide', direction: 'right'});
	}
	
	// Main Panel component.
	// This panel contains a docked toolbar at the top and then its items are all instances 
	// of the TeagramInnerList component defined above.
	mobi.views.CollectionProductsListPanel = Ext.extend(Ext.Panel, {
		id: mobi.views.productsListPanelId(collection),
	    layout: 'fit',
	    dockedItems: [{
	        xtype: 'toolbar',
	        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
	        title: 'mobi',
	 		items:  [{ ui: 'back', text: 'Back' }],
	        defaults: { handler: tapHandler }
	    }],
	    items: [
	        new mobi.views.CollectionProductsList({store: collection.collectsStore})
	    ]
	});
	
	return new mobi.views.CollectionProductsListPanel();
}