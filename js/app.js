(function(){

	var settings = {
		channel: 'OmniBot',
		publish_key: 'pub-c-08f167b9-9f7c-4836-817a-dc1aec9c406b',
		subscribe_key: 'sub-c-23afba32-6a44-11e5-a5be-02ee2ddab7fe'
	};

	var pubnub = PUBNUB(settings);

	var xval = document.getElementById('xval');
	var yval = document.getElementById('yval');
	
	function publishUpdate(data) {
		pubnub.publish({
			channel: settings.channel, 
			message: data
		});
	}

	// UI EVENTS

	xval.addEventListener('change', function(e){
		publishUpdate({item: 'xval', xval: +this.value});
	}, false);

	yval.addEventListener('change', function(e){
		publishUpdate({item: 'yval', yval: +this.value});
	}, false);

})();
