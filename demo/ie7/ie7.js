/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'thinline\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-off': '&#xe631;',
		'icon-tags': '&#xe600;',
		'icon-tag': '&#xe601;',
		'icon-book': '&#xe602;',
		'icon-volume-up': '&#xe603;',
		'icon-volume-off': '&#xe604;',
		'icon-volume-down': '&#xe605;',
		'icon-qrcode': '&#xe606;',
		'icon-lock': '&#xe607;',
		'icon-list-alt': '&#xe608;',
		'icon-headphones': '&#xe609;',
		'icon-flag': '&#xe60a;',
		'icon-barcode': '&#xe60b;',
		'icon-repeat': '&#xe60c;',
		'icon-refresh': '&#xe60d;',
		'icon-play-circle': '&#xe60e;',
		'icon-inbox': '&#xe60f;',
		'icon-zoom-out': '&#xe610;',
		'icon-zoom-in': '&#xe611;',
		'icon-user': '&#xe612;',
		'icon-upload': '&#xe613;',
		'icon-trash': '&#xe614;',
		'icon-time': '&#xe615;',
		'icon-th': '&#xe616;',
		'icon-th-list': '&#xe617;',
		'icon-th-large': '&#xe618;',
		'icon-star': '&#xe619;',
		'icon-star-empty': '&#xe61a;',
		'icon-signal': '&#xe61b;',
		'icon-search': '&#xe61c;',
		'icon-road': '&#xe61d;',
		'icon-remove': '&#xe61e;',
		'icon-plus': '&#xe61f;',
		'icon-pencil': '&#xe620;',
		'icon-ok': '&#xe621;',
		'icon-off2': '&#xe622;',
		'icon-music': '&#xe623;',
		'icon-minus': '&#xe624;',
		'icon-home': '&#xe625;',
		'icon-heart': '&#xe626;',
		'icon-heart-empty': '&#xe627;',
		'icon-glass': '&#xe628;',
		'icon-film': '&#xe629;',
		'icon-file': '&#xe62a;',
		'icon-euro': '&#xe62b;',
		'icon-envelope': '&#xe62c;',
		'icon-download': '&#xe62d;',
		'icon-cog': '&#xe62e;',
		'icon-cloud': '&#xe62f;',
		'icon-asterisk': '&#xe630;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
