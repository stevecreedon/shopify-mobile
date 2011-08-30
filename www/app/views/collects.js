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
	    itemTpl: mobi.views.collectionProductsInnerListItemTpl(),
	    itemCls: 'mobi-collection-item',
		listeners: {
	        itemtap: function (list, index, element, event) {
	            // Grab a reference the record.
	            var collect = list.getRecord(element);
				var collection = Ext.StoreMgr.getByKey("collections-store").getById(collect.get("collection_id"));
	            
	            var model = new mobi.models.Product({_id: collect.get("product_id")}, null);
		        collect.getProduct({
					 records: [model],
					 success: function(product, operation){ mobi.controllers.products.show({product: product, collection: collection})}
				});
	             
	           
	        }
	    }
	})
}

new mobi.ux.LoadRecord(123)