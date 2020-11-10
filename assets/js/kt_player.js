/* SWFObject v2.2 <http://code.google.com/p/swfobject/>
   is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

function kt_player(c_id, s, w, h, f, p) {
	var c = document.getElementById(c_id);
	if (!c) {
		return null;
	}
	var wc = w, hc = h, p_id = c_id + '_internal';
	if (typeof w != 'string' || !w.endsWith('%')) {
		wc += 'px';
	}
	if (typeof h != 'string' || !h.endsWith('%')) {
		hc += 'px';
	}

	try {
		c.style.width = wc;
		c.style.height = hc;
		c.style.overflow = 'hidden';
		c.style.position = 'relative';
		c.style.background = '#000';
	} catch (error) {}

	if (f['protect_block']) {
		var i = document.createElement('iframe');
		i.height = '1px';
		i.width = '1px';
		i.id = 'ads_iframe';
		i.className = 'ads-iframe';
		i.src = f['protect_block'] + '?advertising_id=' + Math.random();
		i.style.position = 'absolute';
		i.style.left = '-10px';
		i.style.top = '-10px';
		document.body.appendChild(i);

		setTimeout(function() {
			if (i.style.display == 'none' || i.style.display == 'hidden' || i.style.visibility == 'hidden' || i.offsetWidth < 1) {
				c.innerHTML = f['protect_block_html'];
				if (c.textContent || c.innerText) {
					c.innerHTML = c.textContent || c.innerText;
				}
				c.style.visibility = 'visible';
			} else {
				delete f['protect_block'];
				delete f['protect_block_html'];
				kt_player(c_id, s, w, h, f, p);
			}
			document.body.removeChild(i);
		}, 100);
		return;
	}

	if (!p) {
		p = {};
	}
	if (!p['wmode']) {
		p['wmode'] = 'transparent';
	}
	if (!p['bgcolor']) {
		p['bgcolor']='000000';
	}
	if (swfobject.hasFlashPlayerVersion('9.124.0')) {
		for (var flashvar in f) {
			if (flashvar=='float_src' || flashvar=='timeline_screens_url') {
				if (f[flashvar].indexOf('?') >= 0) {
					f[flashvar] += '&';
				} else {
					f[flashvar] += '?';
				}
				f[flashvar] += 'referer=' + encodeURIComponent(document.referrer);
			}
			f[flashvar] = encodeURIComponent(f[flashvar]);
		}
		if (document.referrer) {
			f['iframe_referer'] = encodeURIComponent(document.referrer)
		}
		f['internal_id'] = p_id;
		c.innerHTML = '<div id="' + p_id + '"></div>';
		swfobject.embedSWF(s, p_id, w, h, '9.124.0', 'expressInstall.swf', f, p, {'id': p_id, 'name': p_id});
		c.style.visibility = 'visible';
		return _kt_player_wrapper(c, p_id, f, s);
	}

	var video_url = f['video_url'];
	if (f['video_html5_url']) {
		video_url = f['video_html5_url'];
	}
	var preview_url = f['preview_url'];
	var mp4_support = false;
	if (video_url && (video_url.indexOf('.mp4') > 0)) {
		mp4_support = true;
	}

	var html5_support = false;
	var video = document.createElement('VIDEO');
	if (video && video.canPlayType) {
		if (mp4_support) {
			if (video.canPlayType('video/mp4')) {
				html5_support = true;
			}
		}
	}
	if (f['disable_html5'] == 'true') {
		html5_support = false;
	}

	var player_folder = '';
	if (s.lastIndexOf('/') > 0) {
		player_folder = s.substring(0, s.lastIndexOf('/')) + '/';
	}
	if (html5_support) {
		video.id = p_id;
		video.preload = 'none';
		video.src = video_url;
		video.poster = preview_url;
		video.style.width = wc;
		video.style.height = hc;
		video.controls = 'controls';
		if (f['disable_time_display'] == 'true') {
			video.controls = false;
		}
		c.innerHTML = '';
		c.appendChild(video);

		var lastPlayTime = '0';
		_kt_player_attach_event(video, 'playing', function() {
			_kt_player_event_handler(p_id, 'ktVideoStarted');
		});
		_kt_player_attach_event(video, 'pause', function() {
			_kt_player_event_handler(p_id, 'ktVideoPaused');
		});
		_kt_player_attach_event(video, 'ended', function() {
			_kt_player_event_handler(p_id, 'ktVideoFinished');
		});
		_kt_player_attach_event(video, 'timeupdate', function() {
			if (video.currentTime.toFixed(0) != lastPlayTime) {
				lastPlayTime = video.currentTime.toFixed(0);
				_kt_player_event_handler(p_id, 'ktVideoProgress', lastPlayTime);
				if (f['sec'] && parseInt(f['sec']) > 0 && (lastPlayTime >= parseInt(f['sec']))) {
					video.pause();
					video.currentTime = 0;
					_kt_player_event_handler(p_id, 'ktVideoFinished');
				}
			}
		});
	} else if (mp4_support) {
		video = document.createElement('A');
		video.id = p_id;
		video.style.display = 'block';
		video.href = video_url;
		video.style.width = wc;
		video.style.height = hc;

		c.innerHTML = '';
		c.appendChild(video);

		if (preview_url) {
			var poster = document.createElement('IMG');
			poster.style.width = wc;
			poster.style.height = hc;
			poster.src = preview_url;
			poster.style.border = '0';
			video.appendChild(poster);
		}

		video.appendChild(_kt_player_create_play_btn(player_folder + 'btn_play.png', c));
	}
	c.style.visibility = 'visible';
	var player = _kt_player_wrapper(c, p_id, f, s);
	_kt_player_event_handler(p_id, 'ktPlayerLoaded', null);
	return player;
}

function _kt_player_create_play_btn(u, c) {
	var b = document.createElement('IMG');
	b.style.position = 'absolute';
	b.style.border = '0';
	b.style.cursor = 'pointer';
	b.onload = function() {
		b.style.margin = '-' + b.height / 2 + 'px 0 0 -' + b.width / 2 + 'px';
		b.style.left = '50%';
		b.style.top = '50%';
	};
	b.src = u;
	return b;
}


function _kt_player_event_handler(p_id, event, param1) {
	if (_KT_PLAYERS[p_id]) {
		if (event == 'ktPlayerLoaded') {
			_KT_PLAYERS[p_id].loaded();
			try {
				if (typeof window['kt_player_loaded'] == 'function') {
					window['kt_player_loaded'](_KT_PLAYERS[p_id]);
				}
			} catch (e) {}
		}
		return _KT_PLAYERS[p_id].handle(event, param1);
	}
	return '';
}

function _kt_player_attach_event(e, et, l) {
	if (e.addEventListener) {
		e.addEventListener(et, l, false);
	} else if (e.attachEvent) {
		e.attachEvent('on' + et, l);
	} else {
		e['on' + et] = l;
	}
}

function _kt_player_wrapper(c, p_id, f, s)
{
	var wrapper = {
		_listeners: {},
		_player: null,

		container: function() {
			return c
		},

		loaded: function() {
			if (!this._player) {
				this._player = document.getElementById(p_id);
			}
		},

		listen: function(event, callack) {
			if (!this._listeners[event]) {
				this._listeners[event] = [];
			}
			this._listeners[event].push(callack);
		},

		handle: function(event, param1) {
			if (this._listeners[event]) {
				for (var i = 0; i < this._listeners[event].length; i++) {
					if (typeof this._listeners[event][i] == 'function') {
						try {
							var r = this._listeners[event][i](param1);
							if (typeof r == 'string') {
								return r;
							}
						} catch (e) {}
					}
				}
			}
			return '';
		},

		play: function(video) {
			if (!this._player) {return;}
			if (!video) {
				if (typeof this._player['jsPlay'] == 'function') {
					this._player['jsPlay']();
				} else if (typeof this._player['play'] == 'function') {
					this._player['play']();
				} else if (this._player['href']) {
					window.location = this._player['href'];
				}
			} else {
				if (typeof this._player['jsPlayNew'] == 'function') {
					this._player['jsPlayNew'](video);
				} else if (typeof this._player['play'] == 'function') {
					this._player.src = video;
					this._player['play']();
				} else if (this._player['href']) {
					window.location = video;
				}
			}
		},

		pause: function() {
			if (!this._player) {return;}
			if (typeof this._player['jsPause'] == 'function') {
				this._player['jsPause']();
			} else if (typeof this._player['pause'] == 'function') {
				this._player['pause']();
			}
		},

		skip_preroll: function() {
			if (!this._player) {return;}
			if (typeof this._player['jsSkipPreRoll'] == 'function') {
				this._player['jsSkipPreRoll']();
			}
		},

		skip_postroll: function () {
			if (!this._player) {return;}
			if (typeof this._player['jsSkipPostRoll'] == 'function') {
				this._player['jsSkipPostRoll']();
			}
		}
	};

	function show_centered(what, adaptive) {
		if (what.parentNode != wrapper.container()) {
			wrapper.container().appendChild(what);
		}

		what.style.position = 'absolute';
		what.style.display = 'block';
		if (adaptive) {
			adaptive = adaptive.split('x');
			var width = 100, height = 100;
			if (adaptive.length >= 2 && adaptive[0] > 0 && adaptive[1] > 0) {
				width = parseInt(adaptive[0]);
				height = parseInt(adaptive[1]);
			}
			what.style.left = ((100 - width) / 2) + '%';
			what.style.top = ((100 - height) / 2) + '%';
			what.style.width = width + '%';
			what.style.height = height + '%';
		} else {
			what.style.margin = '-' + what.offsetHeight / 2 + 'px 0 0 -' + what.offsetWidth / 2 + 'px';
			what.style.left = '50%';
			what.style.top = '50%';
		}
	}

	function find_child(parent, styleClass) {
		if (!parent) {return null;}
		if (parent.tagName.toLowerCase() == 'iframe') {
			try {
				parent = parent.contentWindow.document;
			} catch (e) {}
		}
		var childs = parent.getElementsByTagName('*');
		for (var i = 0; i < childs.length; i++) {
			var classes = childs[i].className.split(' ');
			for (var j = 0; j < classes.length; j++) {
				if (classes[j].indexOf(styleClass) === 0) {
					return childs[i];
				}
			}
		}
		return null;
	}

	var html_ads = {};
	var html_ads_last_event = null;
	var html_ads_adaptive = {};
	var html_pre_roll_interval = null;

	function configure_ad_on(ad, events) {
		if (!ad || !events) {
			return;
		}
		if (f[ad]) {
			var html_ad = document.getElementById(f[ad]);
			if (html_ad) {
				for (var i = 0; i < events.length; i++) {
					html_ads[events[i]] = html_ad;
				}
			}
		} else if (f[ad.substring(0, ad.length - 3)]) {
			var iframe = document.createElement('IFRAME');
			iframe.style.position = 'absolute';
			iframe.style.display = 'block';
			iframe.style.left = '10000px';
			iframe.style.top = '10000px';
			iframe.frameBorder = 0;
			iframe.width = 1;
			iframe.height = 1;
			iframe.scrolling = 'no';
			iframe.onload = function() {
				iframe.style.width = iframe.contentWindow.document.getElementById('_iframe_content').offsetWidth + 'px';
				iframe.style.height = iframe.contentWindow.document.getElementById('_iframe_content').offsetHeight + 'px';
				if (iframe.offsetLeft != 10000 && html_ads_last_event) {
					show_ad_on(html_ads_last_event);
				}
				_kt_player_attach_event(iframe.contentWindow.document, 'click', function(e) {
					var event = e ? e : window.event;
					var target = event.srcElement ? event.srcElement : event.target;
					while (target) {
						if (target.href && target.className.indexOf('kt-api-btn-start') < 0 && target.className.indexOf('kt-api-btn-skip') < 0) {
							var img = new Image();
							img.src = iframe.src + '&track_click=true';
							break;
						}
						target = target.parentNode;
					}
				})
			};
			var iurl = decodeURIComponent(f[ad.substring(0, ad.length - 3)]) + '&referer=' + encodeURIComponent(document.referrer);
			if (s.indexOf('force_embed') >= 0)
			{
				iurl += '&embed=true';
			}
			iframe.src = iurl;
			c.appendChild(iframe);

			var size = f[ad.substring(0, ad.length - 3) + '_adaptive'];
			for (var i = 0; i < events.length; i++) {
				html_ads[events[i]] = iframe;
				if (size) {
					html_ads_adaptive[events[i]] = size;
				}
			}
		}
	}

	configure_ad_on('adv_start_html_id', ['ktPlayerLoaded', 'ktVideoStopped', 'ktVideoFinished', 'ktPostRollFinished']);
	configure_ad_on('adv_pre_html_id', ['ktPreRollStarted']);
	configure_ad_on('adv_post_html_id', ['ktPostRollStarted']);
	configure_ad_on('adv_pause_html_id', ['ktVideoPaused']);

	function show_ad_on(event) {
		html_ads_last_event = event;
		for (var prop in html_ads) {
			html_ads[prop].style.position = 'absolute';
			html_ads[prop].style.left = '10000px';
			html_ads[prop].style.top = '10000px';
			html_ads[prop].style.margin = '';
		}
		if (html_ads[event]) {
			var btn_close = find_child(html_ads[event], 'kt-api-btn-start');
			if (btn_close) {
				btn_close.onclick = function() {
					wrapper.play();
					return false;
				};
			}

			show_centered(html_ads[event], html_ads_adaptive[event]);
			if (html_ads[event].src && html_ads[event].src.indexOf('http') === 0) {
				var img = new Image();
				img.src = html_ads[event].src + '&track_view=true';
			}
			if (event == 'ktPreRollStarted') {
				var time = find_child(html_ads[event], 'kt-api-time-left');
				if (time) {
					var adDuration = f['adv_pre_duration'];
					if (adDuration) {
						var timeValueEnd = new Date().getTime() + adDuration * 1000;
						time.innerHTML = parseInt(adDuration);
						if (html_pre_roll_interval) {
							clearInterval(html_pre_roll_interval);
						}
						html_pre_roll_interval = setInterval(function() {
							var timeLeft = (timeValueEnd - new Date().getTime()) / 1000;
							if (timeLeft < 1) {
								timeLeft = 0;
							}
							time.innerHTML = Math.round(timeLeft);
						}, 1000);
					}
				}

				var btn_skip = find_child(html_ads[event], 'kt-api-btn-skip');
				if (btn_skip) {
					btn_skip.onclick = function() {
						wrapper.skip_preroll();
						return false;
					};
				}
			} else if (event == 'ktPostRollStarted') {
				var btn_skip = find_child(html_ads[event], 'kt-api-btn-skip');
				if (btn_skip) {
					btn_skip.onclick = function() {
						wrapper.skip_postroll();
						return false;
					};
				}
			}
		}
	}

	var events = ['ktPlayerLoaded', 'ktVideoStarted', 'ktVideoPaused', 'ktVideoFinished', 'ktVideoStopped', 'ktPreRollStarted', 'ktPreRollFinished', 'ktPostRollStarted', 'ktPostRollFinished'];
	function createListener(i) {
		return function() {
			setTimeout(function() {
				show_ad_on(events[i]);
			}, 0);
		}
	}

	for (var i = 0; i < events.length; i++) {
		wrapper.listen(events[i], createListener(i));
	}

	_KT_PLAYERS[p_id] = wrapper;
	return wrapper;
}

var _KT_PLAYERS = {};
