(function(window, document, alias) {
	var attachEvent = 'attachEvent',
		addEventListener = 'addEventListener',
		readyEvent = 'DOMContentLoaded';
			
	if( !document[addEventListener] )
		addEventListener = document[attachEvent] ?
			(readyEvent = 'onreadystatechange')
			&& attachEvent : '';
				
	window[alias] = function(f) {
		/in/.test(document.readyState) ? 
			!addEventListener ? 
				setTimeout(function() { window[alias](f); }, 9) 
				: document[addEventListener](readyEvent, f, false)
			: f();
	};
}(window, document, 'domReady'));