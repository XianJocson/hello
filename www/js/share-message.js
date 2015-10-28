// JavaScript Document

share('My message',
      'PhoneGap share plugin',
      'https://www.google.nl/images/srpr/logo4w.png',
      'http://www.x-services.nl')
	  
 
shareViaFacebook('Message via Facebook',
                 null,
                 null,
                 console.log('share ok'), // success callback
                 function(errormsg){alert(errormsg)}) // error callback
 
shareVia('com.apple.social.sinaweibo' // for options, see the repo
         'Message via Weibo on iOS',
         null,
         null,
         console.log('share ok'), // success callback
         function(errormsg){alert(errormsg)}) // error callback
