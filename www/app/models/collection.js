mobi.models.Collection = Ext.regModel('Collection', {
	fields: [
		{name: "title", type: "string"},
		{name: "_id", type: "int"}
	],
	idProperty: "_id",
	associations: [
	        {type: 'hasMany', model: 'Collect', name: 'collects', primaryKey:"_id", storeConfig: {id: "mobi-collects-store"}}
	],
	proxy: {
		 type: 'rest', //NOT AJAX!!!
		 url: '/db/collections?title=only',
		 reader:{
			type: 'json'
		 }	
    }
});

var store = new Ext.data.Store({
    model: 'Collection',
	storeId: 'collection-store'
})

