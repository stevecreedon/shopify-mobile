Ext.regModel('Collection', {
	fields: [
		{name: "title", type: "string"},
		{name: "_id", type: "int"}
	],
	idProperty: "_id",
	associations: [
	        {type: 'hasMany', model: 'Collect', name: 'collects', primaryKey:"_id", storeConfig: {id: "mobi-collects-store"}}
	],
	proxy: {
		 type: 'ajax',
		 url: '/db/collections?title=only',
		 reader:{
			type: 'json'
		 }	
    }
});


mobi.stores.collections = new Ext.data.Store({
       // We provide an id for the store so it's easy to debug.
       // You can pull it up in the console with
       // Ext.getStore('store_tp');
       id: 'mobi-collections-store',
       // State the model to which we want to be bound
       model: 'Collection'
})