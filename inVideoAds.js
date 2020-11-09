var inVideoAds = inVideoAds || {};

inVideoAds = {
    playerType: null,
    playerState: null,
    objectPlayer: null,
    player: null,
    htmlAdObject: null,
    expireAdFor: 2,
    expiredAd: false,
    playOnClose: true,
    playerStates: {PLAY: 'PLAY', PAUSE: 'PAUSE', END: 'END', IDLE: 'IDLE'},
    
    htmlAd: function() {
      var openInNewTab = true;
      
      if (inVideoAdOptions.openInNewTab !== undefined) {
         openInNewTab = inVideoAdOptions.openInNewTab;
      }
      
      return `<div class="in-video-ad" style="display: none; position: absolute; transform: translate3d(-50%,-50%,0); z-index: 100; text-align: center;">
                  <p style="position: absolute; text-align: left; bottom: 100%; margin:0; font-family: sans-serif; background: rgba(0, 0, 0, 0.47); width: 100%; padding: 7px 5px; box-sizing: border-box; color: #fff;font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">${inVideoAdOptions.title}</p>
                  <a class="close" href="javascript:void(0)" style="position: absolute; bottom: 102.8%; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; right: 5px; color: #fff; text-decoration: none; font-family: sans-serif; z-index: 10;">Close</a>
                  <a href="${inVideoAdOptions.clickUrl}" target="${openInNewTab ? '_blank' : '_self'}">
                      <img src="${inVideoAdOptions.imageUrl}"/>
                  </a>
              </div>`; 
    },
    initAd: function() {
        inVideoAds.htmlAdObject = $(inVideoAds.htmlAd());
        inVideoAds.objectPlayer.parent().css('position', 'relative');
        inVideoAds.htmlAdObject.css(inVideoAds.adPosition());
        inVideoAds.objectPlayer.before(inVideoAds.htmlAdObject);

        $('.close', inVideoAds.htmlAdObject).on('click', function() {
            inVideoAds.hideAd();
            
            if (inVideoAds.playOnClose === true) {
                inVideoAds[inVideoAds.playerType].play();
            }
        });
    },
    showAd: function() {
        if (inVideoAds.htmlAdObject === null || inVideoAds.expiredAd === true) {
            inVideoAds.initAd();
            inVideoAds.htmlAdObject.show();

            setTimeout(function() {
                inVideoAds.expiredAd = true;
            }, inVideoAds.expireAdFor * 1000 * 60);
        } else {
            inVideoAds.htmlAdObject.show();
        }
    },
    hideAd: function() {
        inVideoAds.htmlAdObject.hide();
    },
    reinitAd: function() {
        if (inVideoAds.htmlAdObject) {
            inVideoAds.htmlAdObject.css(inVideoAds.adPosition());
        }
    },
    adPosition: function() {
        var playerTop = inVideoAds.objectPlayer.height() / 2;
        var playerLeft = inVideoAds.objectPlayer.width() / 2;

        if (inVideoAds.isIeBrowser() === true && inVideoAds.ieVersion() < 10) {
            var adTop = inVideoAdOptions.height / 2;
            var adLeft = inVideoAdOptions.width / 2;
            return {
                top: (playerTop > adTop) ? playerTop - adTop : adTop,
                left: (playerLeft > adLeft) ? playerLeft - adLeft : adLeft
            };
        } else {
            return {
                top: inVideoAds.objectPlayer.position().top + playerTop,
                left: inVideoAds.objectPlayer.position().left + playerLeft
            };
        }
    },
    isIeBrowser: function() {
        return (navigator.appName === 'Microsoft Internet Explorer');
    },
    ieVersion: function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
    },
    adDimensions: function() {
        return {
            width: inVideoAdOptions.width,
            height: inVideoAdOptions.height
        };
    }
};

inVideoAds.flowplayer = {
    init: function () {
        inVideoAds.player.bind('resume', function () {
            inVideoAds.playerState = inVideoAds.playerStates.PLAY;
            inVideoAds.hideAd();
        });

        inVideoAds.player.bind('pause', function () {
            inVideoAds.playerState = inVideoAds.playerStates.PAUSE;
            inVideoAds.showAd();
        });

        inVideoAds.player.bind('finish', function () {
            inVideoAds.playerState = inVideoAds.playerStates.END;
            inVideoAds.showAd();
        });

        inVideoAds.player.bind('ready', function () {
            if (flowplayer().playing === false) {
                inVideoAds.playerState = inVideoAds.playerStates.PAUSE;
                inVideoAds.showAd();
            }
        });

        inVideoAds.objectPlayer = $(inVideoAds.objectPlayer);
    },
    play: function () {
        inVideoAds.player.play();
    }
};

if (inVideoAds.player === null && typeof flowplayer === 'function') {
    inVideoAds.playerType = 'flowplayer';
    
    flowplayer(function(player, fPlayer) {
        inVideoAds.player = player;
        inVideoAds.objectPlayer = (typeof fPlayer[0] !== 'undefined') ? fPlayer[0] : fPlayer;
        inVideoAds.flowplayer.init();
    });
}

inVideoAds.html5 = {
    init: function () {
        inVideoAds.player.bind('play', function () {
            inVideoAds.playerState = inVideoAds.playerStates.PLAY;
            inVideoAds.hideAd();
        });
        
        inVideoAds.player.bind('pause', function () {
            inVideoAds.playerState = inVideoAds.playerStates.PAUSE;
            inVideoAds.showAd();
        });
        
        inVideoAds.player.bind('ended', function () {
            inVideoAds.playerState = inVideoAds.playerStates.PAUSE;
            inVideoAds.showAd();
        });
        
        if (!inVideoAds.player.playing) {
            inVideoAds.playerState = inVideoAds.playerStates.PAUSE;
            inVideoAds.showAd();
        }
    },
    play: function () {
       inVideoAds.objectPlayer.get(0).play();
    }
}

if (inVideoAds.playerType === null && $('video').length) {
   inVideoAds.playerType = 'html5';
   inVideoAds.player = $('video').first();
   inVideoAds.objectPlayer = $('video').first();
   inVideoAds.html5.init();
}

$(window).resize(function() {
    inVideoAds.reinitAd();
});
