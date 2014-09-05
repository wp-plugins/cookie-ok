<?php
/*
Plugin Name: Cookie OK
Plugin URI: http://status301.net/wordpress-plugins/cookie-ok/
Description: Add the CookieOK script to your site.
Author: RavanH, Digital Morphosis
Version: 0.5
Author URI: http://cookieok.eu/
*/

// Set js variables in footer
function cookieok_print_vars(){
		echo '
<script type="text/javascript">
	var _cookieOK = {accepted:false, showDecline:false, declined:false};
	var _cookieOKcss = "'.plugin_dir_url(__FILE__).'css/cookieok-green.min.css";
	var _cookieOKpos = "top";
	var _cookieOKintro = "On 26 May 2011, the rules about cookies on websites changed. This site uses cookies. We have already set cookies which are essential for the operation of this site.";
	var _cookieOKaccept = "I accept additional cookies from this site used to support optional features of the site or to gather anonymous usage statistics we use to improve the site";
</script>
'; // original stylesheet http://cookieok.eu/bar/css/cookieok.css
}
add_action('wp_footer', 'cookieok_print_vars');

// Enqueue scripts
function cookieok_enqueue_scripts(){
	wp_enqueue_script('jquery-cookie',plugins_url('/js/jquery.cookie-1.4.1.min.js', __FILE__), array('jquery'), '1.4.1', true);
	wp_enqueue_script('cookieok',plugins_url('/js/cookieok.min.js', __FILE__), array('jquery'), '0.5', true);
}
add_action('wp_enqueue_scripts', 'cookieok_enqueue_scripts');
