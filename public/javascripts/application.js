// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
mobi = {
	growl: function(message){$.growlUI('mobi', message);},
	growlError: function(message){$.growlUI('mobi', message);},
	index: {
		initCollectionPublishBoxes: function(){
			$(".publish_collection").change(function(){
				mobi.index.togglePublish($(this).val(), this.checked);
			})
		},
		togglePublish: function(id, publish){
			$.ajax({
				type: 'PUT',
				url: '/shop_owners/collections/' + id,
				data: 'collection[mobile]=' + publish,
				success: function(data){ mobi.growl(data); },
				failure: function(data){ mobi.growlError("Sorry, something went wrong, please try again") }
			})
		}
	}
}
