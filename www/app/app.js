Ext.regApplication({
    name: 'mobi',
    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});

/*




var collectionsList = new Ext.dataView({
	store: new Ext.data.Store({
		model: 'Collection',
		proxy: {
			type: 'ajax',
			url: 'localhost:8000/collections?title=only',
			reader:{
				type: 'json',
				root: 'collections'
			}		
		}
	}),
	tpl: new Ext.XTemplate(
		'<tpl for=".">',
			'<div>',
				'<h2>{title}</h2>',
			'</div>',
		'</tpl>'	
	),
	fullscreen: true
});
*/