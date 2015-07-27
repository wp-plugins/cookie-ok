<?php
/*
Plugin Name: Cookie OK
Plugin URI: http://status301.net/wordpress-plugins/cookie-ok/
Description: Add the CookieOK script to your site.
Author: RavanH, Digital Morphosis
Version: 0.6
Author URI: http://cookieok.eu/
*/

// Set js variables in footer
function cookieok_print_vars(){
		echo '
<script type="text/javascript">
	var _cookieOK = {accepted:false, showDecline:false, declined:false};
	var _cookieOKcss = "'.plugin_dir_url(__FILE__).'css/cookieok-green.min.css";
	var _cookieOKpos = "bottom";
	var _cookieOKintro = "We use cookies - small text files stored by your browser - to personalise content and ads, to provide social media features and to analyse traffic. Information about your use of our site is shared with our social media, advertising and analytics partners. If you wish to block either third-party or all cookies, please <a href=http://www.wikihow.com/Disable-Cookies target=_blank>adjust your browser cookie settings</a>. Normal use of this site implies acceptance of these cookies.";
	var _cookieOKaccept = "I understand.";
</script>
'; // original stylesheet http://cookieok.eu/bar/css/cookieok.css
}
add_action('wp_footer', 'cookieok_print_vars');

// Enqueue scripts
function cookieok_enqueue_scripts(){
	wp_enqueue_script('jquery-cookie',plugins_url('/js/jquery.cookie-1.4.1.min.js', __FILE__), array('jquery'), '1.4.1', true);
	wp_enqueue_script('cookieok',plugins_url('/js/cookieok.min.js', __FILE__), array('jquery'), '0.6', true);
}
add_action('wp_enqueue_scripts', 'cookieok_enqueue_scripts');
