var mobiledetectscript = document.createElement('script');
mobiledetectscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.2/mobile-detect.min.js';
document.body.appendChild(mobiledetectscript);

(function(name,path,ctx){ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}})
('KeenTracking', 'https://cdn.jsdelivr.net/npm/keen-tracking@4/dist/keen-tracking.min.js', this);

KeenTracking.ready(function(){
  const md = new MobileDetect(window.navigator.userAgent);
  // for Node.js example go https://github.com/hgoebl/mobile-detect.js#nodejs--express
  if (md.is('bot')) {
    return false;
  }

  const client = new Keen({
    projectId: '5eceadf9bbe2e462977a018f',
    writeKey: 'f787944c2686d42ed0f0e8f190cd46f131bcfa310f3c3d151db48c22e839b69f30dab4fcf60c40e6acc3e1fd7a7b2864b6bf7239fc0bd41f39476b4a6c29a2ee4d2794d4b7008784b49d0b750ccce1588f130f060915c33786e3073d97e8e713'
  });

  client.extendEvents(function(){
    return {
      tech: {
        device_type: md.tablet() ? 'tablet' : md.mobile() ? 'mobile' : 'desktop'
      }
      /* Custom properties for all events */
    };
  });

  client.initAutoTracking({

    // record on page load
    recordPageViews: true,
    // OR
    // record on leaving the page - this ways you will get the time spent on this page
    recordPageViewsOnExit: true,

    recordScrollState: true, // see how far people scrolled

    recordClicks: true, // record clicks on A links
    recordClicksPositionPointer: false, // record pointer position for clicks
    
    // FORMS
    recordFormSubmits: true,
    ignoreDisabledFormFields: false,
    ignoreFormFieldTypes: ['password'],

    // GDPR related options
    collectIpAddress: false, // default
    collectUuid: true, // default

    // share UUID cookies across subdomains
    shareUuidAcrossDomains: false, // default

    // catchError: myCustomErrorHandler

    //Track HTML elements views
    recordElementViews: true // see if an element was seen

  });
});
