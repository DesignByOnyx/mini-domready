#Mini DOM Ready

This code was inspired by Justin Diaz and [the smallest DOM ready code ever](http://www.dustindiaz.com/smallest-domready-ever).

However, I fealt a duty to sacrifice a few bytes for the sake of leveraging native browser capabilities whenever possible.  I am fairly pleased with the result.  By default we create a global `domReady` method which should work exactly like the jQuery syntax:

```
//     $(function() { … });
//jQuery(function() { … });
domReady(function() { … });
```

You can even define your own method name in case you don't like the name "domReady".  Just replace "domReady" with your own name.  For example, you could change `domReady` to `blah`, then you could write the following code:

```
blah(function() { 
	alert("I'm not very good at naming functions.");
});
```