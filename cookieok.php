<?php
/*
Plugin Name: Cookie OK
Plugin URI: http://status301.net/wordpress-plugins/cookie-ok/
Description: Add the CookieOK script to your site.
Author: RavanH, Digital Morphosis
Version: 0.3
Author URI: http://digital-morphosis.com
*/

function cookieok_enqueue_scripts(){
	wp_enqueue_script('jquery-cookie',plugins_url('/js/jquery.cookie.js', __FILE__), array('jquery'), '1.3', true);
	wp_enqueue_script('cookieok',plugins_url('/js/cookieok.js', __FILE__), array('jquery'), '0.2', true);
}
add_action('wp_enqueue_scripts', 'cookieok_enqueue_scripts');

