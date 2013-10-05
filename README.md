#Mini DOM Ready

This code was inspired by Justin Diaz and [the smallest DOM ready code ever](http://www.dustindiaz.com/smallest-domready-ever).

However, I fealt a duty to sacrifice a few bytes for the sake of leveraging native browser capabilities whenever possible.  I am fairly pleased with the result.  By default we create a global `domReady` method which should work exactly like the jQuery syntax:

```
//     $(function() { … });
//jQuery(function() { … });
domReady(function() { … });
```

You can even define your own method name in case you don't like the name "domReady". For example, you could change `domReady` to `blah`, then you could write the following code:

```
blah(function() { 
	alert("I'm not very good at naming functions.");
});
```

###Why is this useful?

Because you *should* be loading jQuery (and other scripts) at the very bottom of the page, immediately before the closing `</body>` tag.  However, when using a CMS you might need to render some inline code which should execute on DOM ready… but jQuery hasn't loaded yet!  So instead of writing the following:

```
$(function() {
	$('.slider').Swipe();
});
```

… you would instead write:

```
domReady(function() {
	$('.slider').Swipe();
});
```

**IMPORTANT** You can rename "domReady" to a dollar sign `$` or `jQuery`, which would allow for a seamless way to use jQuery before it's even loaded.  HOWEVER, you must load jQuery **synchronously BEFORE DOM ready** This means you must use a `<script>` tag at the bottom of the page (or `document.write`).  Feel free to contact me if you have problems.  Please spend more than 5 minutes trying to figure it out on your own.
 