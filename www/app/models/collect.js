Ext.regModel('Collect', {
	fields: [
		{name: "product_title", type: "string"},
		{name: 'product_url', convert: function(value, record) {return mobi.views.shopifyImage(value, "thumb");}}
	]
});