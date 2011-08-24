Ext.regModel('Product', {
	fields: [
		{name: "title", type: "string"},
		{name: "body_html", type: "string"},
		{name: "price", type: "float"},
		{name: "image_url", type: "string"}
	],
	proxy: {
	        type: 'rest',
	        url : '/db/products',
	        root: ""
	}
});