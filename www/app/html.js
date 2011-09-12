Ext.namespace("mobi.html");		

mobi.html.img = function(src, size){
	return "<img height=\"240\" src='" + mobi.html.shopifyImage(src,"medium") + "'/>"
}

mobi.html.shopifyImage = function(url, size){
	return url.replace(/\.jpg/,"_" + size + ".jpg").replace(/\.png/,"_" + size + ".png")
}