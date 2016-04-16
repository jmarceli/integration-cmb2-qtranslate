<?php

/**
 * The WordPress Plugin Boilerplate.
 *
 * A foundation off of which to build well-documented WordPress plugins that
 * also follow WordPress Coding Standards and PHP best practices.
 *
 * @package   CMB2-qTranslate
 * @author    Jan Grzegorowski <grzegorowski@gmail.com>
 * @license   GPL-2.0+
 * @link      http://grzegorowski.com
 * @copyright 2015 
 *
 * @wordpress-plugin
 * Plugin Name:       CMB2-qTranslate
 * Plugin URI:        http://github.com/jmarceli/cmb2-qtranslate
 * Description:       CMB2 qTranslate-X integration
Version:           0.0.6
 * Author:            Jan Grzegorowski
 * Author URI:        http://grzegorowski.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( !defined( 'WPINC' ) ) {
	die;
}


// load plugin
add_action( 'plugins_loaded', array( 'CMB2qTranslate', 'get_instance' ));


class CMB2qTranslate {

	/**
	 * Plugin version, used for cache-busting of style and script file references.
	 */
	const VERSION = '0.0.6';

	/**
	 * Unique identifier for your plugin.
	 */
	protected static $plugin_slug = 'cmb2_qtranslate';

	/**
	 * Unique identifier for your plugin.
	 */
	protected static $plugin_name = 'cmb2_qtranslate';

	/**
	 * Instance of this class.
	 */
	protected static $instance = null;

	/**
	 * Initialize the plugin by setting localization and loading public scripts
	 * and styles.
	 */
	private function __construct() {
    // Load JS and JS variables
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		//add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_js_vars' ) );
	}

	/**
	 * Return an instance of this class.
	 */
	public static function get_instance() {
		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Return the plugin slug.
	 */
	public function get_plugin_slug() {
		return self::$plugin_slug;
	}

	/**
	 * Return the plugin name.
	 */
	public function get_plugin_name() {
		return self::$plugin_name;
	}

	/**
	 * Return the version
	 */
	public function get_plugin_version() {
		return self::VERSION;
	}

	/**
	 * Register and enqueues public-facing JavaScript files.
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( $this->get_plugin_slug() . '-plugin-script', plugins_url( 'dist/scripts/main.js', __FILE__ ), array( 'jquery' ), self::VERSION );
	}

	/**
	 * Print the PHP var in the HTML of the frontend for access by JavaScript
	 */
	public function enqueue_js_vars() {
		//wp_localize_script( $this->get_plugin_slug() . '-plugin-script', 'm_js_vars', array(
			//'alert' => __( 'Hey! You have clicked the button!', $this->get_plugin_slug() )
				//)
		//);
	}
}
