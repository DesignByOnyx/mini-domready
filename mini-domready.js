(function(window, document, alias) {
	var attachEvent = 'attachEvent',
		addEventListener = 'addEventListener',
		readyEvent = 'DOMContentLoaded';
			
	if( !document[addEventListener] )
		addEventListener = document[attachEvent] ?
			(readyEvent = 'onreadystatechange')
			&& attachEvent : 0;
				
	window[alias] = function(f) {
		/in/.test(document.readyState) ? 
			addEventListener ? 
				document[addEventListener](readyEvent, f, false)
				: setTimeout(function() { window[alias](f); }, 9) 
			: f();
	};
}(window, document, 'domReady'));
