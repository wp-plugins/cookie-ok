=== Cookie OK ===
Contributors: RavanH, Digital Morphosis
Tags: cookie, cookies, eu cookie law
Requires at least: 2.9
Tested up to: 3.4.2
Stable tag: 0.2

Simply add the CookieOK script to your site to comply with the new EU cookie law.

== Description ==

http://www.youtube.com/watch?v=arWJA0jVPAc

This plugins places a notification above each page about cookie usage on your site through the CookieOK script by [Digital Morphosis](http://cookieok.eu/).

Stricly speaking, this might not be seen as a full compliance with the EU law 'to the letter' because that would mean either disabling large parts of your WordPress site or simply blocking visitors from browsing your site until they approve cookie usage. In both cases, your site will become very user unfriendly. 

Therefore, this plugin is designed to be less obtrusive than others. Visitors will see a small band above each page with a notice about cookies being used which they can accept, after which they will not see the notification any more. But even if they ignore the message, they will still be able to browse your site. Nobody will be blocked at any time.

http://www.youtube.com/watch?v=9hLmX9FX2KA

[Video by Silktide](http://silktide.com/cookielaw/resources/video)

**NOTES**

This plugin does not create a possibility for users to disapprove of cookies and continue browsing your site _without_ them. It simply is impossible to create a generic server side method to prevent cookies. Besides WordPress's own cookies (left when a visitor comments or logs in), there are just too many plugins out there that all place their specific cookies. Visitor stats, social media buttons, embedded Youtube or other media, Gravatar hover cards, chat widgets or buttons, fancy sliders, big menus or other web 2.0 effects, multi-language plugins, adverts... The list goes on and on so even if it is possible in particlular cases, it would be just silly to attempt this for all sites.

Currently, there are no configuration options. The cookie notification is a fixed generic message in English only. The notification bar appears at the top with a green background color. Future versions will get a configurable message, multi-lingual support and some styling options.


== Installation ==

= Wordpress =

Quick installation: [Install now](http://coveredwebservices.com/wp-plugin-install/?plugin=cookie-ok) !

 &hellip; OR &hellip;

Go to that slick **Plugins > Add New** back-end page and search for "cookie ok".

 &hellip; OR &hellip;

Follow these steps:

 1. Download archive.

 2. Upload the zip file via the Plugins > Add New > Upload page &hellip; OR &hellip; unpack and upload with your favourite FTP client to the /plugins/ folder.

 3. Activate the plugin on the Plug-ins page.

Done!

= Wordpress MU / WordPress 3+ in Multi Site mode =

Same as above but do a **Network Activate** to activate the cookie notification on each site on your network. No database tables are created or manipulated and no activation hook needs to be run for it to function with default settings. The plugin can also work from the **/mu-plugins/** folder where it runs quietly in the background without bothering any blog owner with new options pages or the need for special knowledge about it. Just upload the complete package content under the /cookie-ok/ directory to /mu-plugins/.


== Screenshots ==

1. Example of the cookie notice bar on http://cookieok.eu


== Upgrade Notice ==

= 0.2 =
Compatibility with other plugins that use jQuery. 


== Changelog ==

= 0.2 =

* use WordPress internal jQuery library
* seperate jQuery Cookie extension

= 0.1 =

* initial plugin as created by Digital Morphosis and hosted on http://cookieok.eu
