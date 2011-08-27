mobi.controllers.collections = {
	index: function(){
		mobi.stores.collections.load();
		return mobi.views.fetchCollectionsList()
	}
}