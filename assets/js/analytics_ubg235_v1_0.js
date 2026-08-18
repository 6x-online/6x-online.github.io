function loadGoogleAnalytics(id) {
    // Google tag (gtag.js)
    var firstScript= document.getElementsByTagName("script")[0];
    newScript= document.createElement("script");
    newScript.async= "";
    newScript.src= "https://www.googletagmanager.com/gtag/js?id="+ id;
    firstScript.parentNode.insertBefore(newScript, firstScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', id);
}

window.addEventListener("load", function() {
    if (navigator.webdriver) {
      console.log('Bot Browser');
      loadGoogleAnalytics("G-EQ4HXG747G");

    } else {
      console.log('Human Browser');
      loadGoogleAnalytics("G-EQ4HXG747G");
    }
});


(function () {
    const script = document.createElement('script');

    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5305579698272359';
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);
})();
