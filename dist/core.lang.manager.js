/*!
 * Language-Manager-JS v1.0.0 (http://usermyadmin.net/Language-Manager-JS)
 * Copyright 2015 EdificApps.
 * Licensed under MIT (https://github.com/edificapps/Language-Manager-JS/blob/master/LICENSE)
 *
 * Plug-in for jQuery 1.11.2 - 2.1.3 : Full testing.
 *
 */
$.fn.extend({
	lang: function (e) {	
		this.each(function(i, e) {
			h = $(e).html();
			var c = h;
			while(true){
				var p = c.match(/[\_]{2,2}@([\w-]{2,}):([\w-]{2,})+[\_]{2,2}/);
				if(p){
					c = c.substring(p.index+p[0].length, h.length);
					h = h.replace(p[0], $.language[p[1].toUpperCase()][p[2].toLowerCase()]);
				}else
					break;
			}
			$(e).html(h);
		});
	}
});