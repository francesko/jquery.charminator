// jQuery.charminator - 0.0.1
//
// Copyright 2012, Francesco Macri http://francescomacri.net
// Released under the WTFPL license 
// http://sam.zoy.org/wtfpl/
//
// This program is free software. It comes without any warranty, to
// the extent permitted by applicable law. You can redistribute it
// and/or modify it under the terms of the Do What The Fuck You Want
// To Public License, Version 2, as published by Sam Hocevar. See
// http://sam.zoy.org/wtfpl/COPYING for more details.
//
// Date: Sat Dec 8 20:52:00 2012 -0600
(function($, undefined) {
	$.fn.charminator = function(options) {
		var defaults = {
			chars: '0123456789abcdefghijklmnopqrstuvwyz'.split(''),
			duration: 15,
			iterations: 50,
			progressive: false,
			complete: undefined
		},
		opts = $.extend({}, defaults, options);
		elCnt = this.length;

		return this.each(function() {
			var end = $(this).html(),
				roll = function($el, iters, end, cb) {
					if(iters === opts.iterations) {
						$el.html(end);
						if(opts.progressive) {
							return (cb)?cb():undefined;
						}
						elCnt--;
						return ((elCnt===0)?((cb)?cb():undefined):undefined);
					} else {
						next = (function(i) {
							var random = '',
								len = opts.chars.length;
							while(i--) {  
								random += opts.chars[Math.floor(Math.random()*len)];	
							}
							return random;
						}(end.length));
						$el.html(next);
						return setTimeout(function() {
							roll($el,iters+1, end, cb);
						}, opts.duration);
					}
				};
			
			if(opts.progressive) {
				$(this).html('');
				var self = this,
					chars = end.split(''),
					progRoll = function(i, cb) {
						if(i >= chars.length) {
							$(self).html($(self).text());
							elCnt = elCnt-1;
							return ((elCnt===0)?((cb)?cb():undefined):undefined);
						} else {
							var span = $('<span>'+chars[i]+'</span>');
							$(self).append(span);
							roll($(span), 0, chars[i], function() {
								progRoll(i+1, cb);
							});
						}
					};
				return progRoll(0, opts.complete);
			} 
			return roll($(this), 0, end, opts.complete);	
		});
	};
})(jQuery);