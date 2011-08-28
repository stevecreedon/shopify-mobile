// This is the list item inside in the main list.  It is created for every record in the model, or simply
// each item in the array returned from the Instagram API.

mobi.views.renderCollectsList = function(collection){
	var items = [new mobi.views.Collect.List({store: collection.collectsStore})];
	var id = mobi.views.Collect.key(collection)
	return new mobi.views.Collect.ListPanel({id: id, items: items});
}

mobi.views.Collect = {
	key: function(collection){return 'collects-view-' + collection.data._id;},
	ListPanel: Ext.extend(Ext.Panel, {
    	layout: 'fit',
    	dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: 'mobi',
 		items:  [{ ui: 'back', text: 'Back' }],
        	defaults: { handler: function (btn, evt) {mobi.controllers.collections.index({direction: 'right'});}}
    	}]
	}),
	List: Ext.extend(Ext.List, {

	    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
	    itemTpl: mobi.views.collectionProductsInnerListItemTpl(),

	    // The class name associated with each InnerList item.  We can style using this as the root CSS class for
	    // all styles inside the InnerList items.
	    itemCls: 'mobi-collection-item',

	    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
	    //plugins: [{
	    //    ptype: 'pullrefresh'
	    //}],

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

	})
}

