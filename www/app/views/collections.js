mobi.views.renderCollectionsList = function(){	
	return new mobi.views.Collection.ListPanel();
}

mobi.views.Collection = {
	key: "collections-view"
}

mobi.views.Collection.List = Ext.extend(Ext.List, {
    itemTpl: mobi.views.collectionInnerListItemTpl(),
    itemCls: 'mobi-collection-item',
    listeners: {
        itemtap: function (list, index, element, event) {
            // Grab a reference the record.
            var record = list.getRecord(element);
            mobi.controllers.collects.index(record);
        }
    }
});

mobi.views.Collection.ListPanel = Ext.extend(Ext.Panel, {
	id: 'collections-view',
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        // Note, you can pass in not only some text, but also a block of HTML, including a base64 encoded image.
        title: 'mobi'
    }],
    items: [
        // The TeagramLists is made up of a collection of TeagramInnerLists, defined above.
        new mobi.views.Collection.List({
             store: Ext.StoreMgr.getByKey(mobi.models.Collection.store_key)
        })
    ]
});
