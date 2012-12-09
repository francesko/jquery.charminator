# jQuery.charminator

jQuery.charminator is a plugin that lets you make awesome text randomization visual effects.
Let's say you have a span with some text:

> <span>text</span>

Suppose now that you want to have an animation where the text appears letter by letter.
Moreover the new letter appearing has a cool randomization effect, changing quickly
random chars taken from a set of letters you give as parameters (or the whole alphabet by default).
You can also turn off the progressive behavior and get random strings of your original text size
rolling over your eyes for the duration and number of times you wish.
And of course you can also pass a complete callback to do some stuff once the animation is over.

Here you will find a test for the plugin:

http://francescomacri.net/projects/jquery-charminator/test.html

### Example

> $('#yourelement-id').charminator({
>		chars: ['a','b','c','d'], //set of chars to use for randomization - default: lowercased alphabet
>		duration: 15, 			  //ms a letter stays before being changed - default: 15 
>		iterations: 30,			  //number of letter changes - default: 50
>		progressive: true,		  //turn on/off progressive behaviour - default: true
>		complete: function() {	  //callback - default: undefined
>			alert('callback!');
>		}
> });

All parameters are optional. Whenever a parameter is missing, default values apply.

Note that this plugin works better with monospaced font families as
the size of all letters are the same (this avoids flickering of the text
when changing quickly from one letter to another).<br/><br/>

### DISCLAIMER
As of version 0.0.1 the html content of the element you are passing
is flatten, meaning that elements you use the plugin with MUST contain only
text and not other html childnodes if you don't want undesired effects (this may change
in a close future).