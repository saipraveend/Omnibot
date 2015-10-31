(function(){

	var settings = {
		channel: 'Omnibot',
		publish_key: 'pub-c-0d652f8b-a119-48b8-b625-9953fdaf67bb',
		subscribe_key: 'sub-c-5b803346-6f22-11e5-b932-02ee2ddab7fe'
	};

	  PUBNUB_demo.subscribe({
          channel: 'Omnibot',
          message: function(m){console.log(m)},
          connect : publish
        });

	var pubnub = PUBNUB(settings);

	var xval = document.getElementById('xval');
	var yval = document.getElementById('yval');
	
	
	
	function publishUpdate(data) {
		pubnub.publish({
			channel: settings.channel, 
			message: data
		});
	}

	if (xval == 1) {
		data = {'direction': 'Right'}
		publishUpdate(data);
	}
	else if (xval == -1) {
		data = {'direction' : 'left'}
		publishUpdate(data);
	}
	else if (yval == 1) {
		data = {'direction' : 'up'}
		publishUpdate(data);
	}
	else if (yval == -1) {
		data = {'direction' : 'down'}
		publishUpdate(data);
	}

})();
