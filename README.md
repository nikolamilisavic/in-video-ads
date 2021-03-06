## In Video Ads
This library can be used for display ads/ banners in videos. Depends only on jQuery.
In order to use this library all what you need to do is to include plugin and create inVideoAdOptions object with configuration properties.
Library will detect video and inject banner by respecting player states (PLAY, PAUSE, END).

## Configuration properties
- title: Presents text which will be shown above the banner
- clickUrl: Presents target URL where user will be redirected after clicking on banner
- imageUrl: Presents URL of image which will be shown as banner
- openInNewTab: Defines should we open link in new or same tab. Default value is true.
- width: Defines image width
- height: Defines image height

## Usage example

```js
<script type="text/javascript">
    var inVideoAdOptions = {
        width: 300,
        height: 250,
        title: 'Advertising',
        clickUrl: 'https://example.com',
        imageUrl: '../assets/images/300x250.gif',
    };
</script>

<script src="../inVideoAds.js"></script>
```

## Supported players
- Flowplayer
- Kernel player
- HTML5 player

For more details please look at examples directory.
