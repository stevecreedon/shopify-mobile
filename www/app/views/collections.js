mobi.views.ShopPanel = Ext.extend(Ext.Panel, {
	layout: 'fit',
	html: 'welcome'
})

mobi.views.fetchCollectionsList = function(){
	return mobi.views.createCollectionsList();
}

mobi.views.createCollectionsList = function(){
	
	// This is the list item inside in the main list.  It is created for every record in the model, or simply
	// each item in the array returned from the Instagram API.
	mobi.views.CollectionsList = Ext.extend(Ext.List, {

	    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
	    itemTpl: mobi.views.collectionInnerListItemTpl(),

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
	            mobi.views.fetchProductsList(record.raw._id);

	        }
	    }

	});


	// Main Panel component.
	// This panel contains a docked toolbar at the top and then its items are all instances 
	// of the TeagramInnerList component defined above.
	mobi.views.CollectionsListPanel = Ext.extend(Ext.Panel, {
		id: 'collections_list',
	    layout: 'fit',
	    dockedItems: [{
	        xtype: 'toolbar',
	        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
	        title: 'mobi'
	    }],
	    items: [
	        // The TeagramLists is made up of a collection of TeagramInnerLists, defined above.
	        new mobi.views.CollectionsList({
	                   store: new Ext.data.Store({
	                       // We provide an id for the store so it's easy to debug.
	                       // You can pull it up in the console with
	                       // Ext.getStore('store_tp');
	                       id: 'mobi_collections',
	                       // State the model to which we want to be bound, namely, TeagramPhoto (defined in models/TeagramPhoto.js)
	                       model: 'Collection',
	                       // Fire off a request when the page loads.  Here is why we don't *need* a controller for this simple view.
	                       autoLoad: true,
	                       proxy: {

							 type: 'ajax',
							 url: 'http://mobi.co.uk/db/collections?title=only',
							 reader:{
								type: 'json',
							 }	

	                       }
	                   })
	               })
	    ]
	});
	
	return new mobi.views.CollectionsListPanel();	
}

