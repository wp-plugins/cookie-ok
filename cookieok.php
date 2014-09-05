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
	var _cookieOKcss = "http://cookieok.eu/bar/css/cookieok.css";
</script>
';
}
add_action('wp_footer', array(__CLASS__, 'cookieok_print_vars') );

// Enqueue scripts
function cookieok_enqueue_scripts(){
	wp_enqueue_script('jquery-cookie',plugins_url('/js/jquery.cookie-1.4.1.min.js', __FILE__), array('jquery'), '1.4.1', true);
	wp_enqueue_script('cookieok',plugins_url('/js/cookieok.js', __FILE__), array('jquery'), '0.5', true);
}
add_action('wp_enqueue_scripts', 'cookieok_enqueue_scripts');


