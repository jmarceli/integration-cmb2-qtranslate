=== Integration-CMB2-qTranslate ===
Contributors: jmarceli
Donate link: http://grzegorowski.com/
Tags: cmb2, qtranslate, qtranslatex, integration
Requires at least: 4.0
Tested up to: 4.3
Stable tag: 0.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

CMB2 and qTranslate X integration.

== Description ==

CMB2-qTranslate is Wordpress plugin for CMB2 and qTranslate X integration. Adds language switch buttons above selected CMB2 fields to make content translatable.

## Supported CMB2 field types:

* input
* textarea
* wysiwyg
* repeatable field groups

In order to make field translatable add `.cmb2-qtranslate` class to it.

== Usage example ==

## WYSIWYG field:

    > $field1 = $cmb_demo2->add_field( array(
    >   'name' => __( 'SECOND Text', $this->plugin_slug ),
    >   'desc' => __( 'field description (optional)', $this->plugin_slug ),
    >   'id' => $prefix . $this->plugin_slug . '_second_text',
    >   'class' => 'cmb2',
    >   'type' => 'wysiwyg',
    >   'options' => array(
    >     'editor_class' => 'cmb2-qtranslate'
    >   )
    > ) );

## Other fields:

    > $field2 = $cmb_demo->add_field( array(
    >   'name' => __( 'Text Small', $this->plugin_slug ),
    >   'desc' => __( 'field description (optional)', $this->plugin_slug ),
    >   'id' => $prefix . $this->plugin_slug . '_textsmall',
    >   'class' => 'cmb2',
    >   'type' => 'text',
    >   'attributes' => array(
    >     'class' => 'cmb2-qtranslate'
    >   )
    > ) );

Detailed info about field creation could be found in CMB2 project documentation (https://github.com/WebDevStudios/CMB2/wiki).

== Requirements/Dependencies ==

* CMB2 (https://pl.wordpress.org/plugins/cmb2/)
* qTranslateX (https://pl.wordpress.org/plugins/qtranslate-x/)

== Links ==

* [Github project page](https://github.com/jmarceli/CMB2-qTranslate)

== Installation ==

If installing the plugin from wordpress.org:

1. Upload the entire `integration_cmb2_qtranslate/` directory to the `/wp-content/plugins/` directory.
2. Activate CMB2-qTranslate through the 'Plugins' menu in WordPress.

If including the library in your plugin or theme:

1. Place the `integration_cmb2_qtranslate/` directory inside of your theme or plugin.
2. Enqueue JavaScript file `dist/scripts/main.js` with  `wp_enqueue_script` function

== Frequently Asked Questions ==

* none at the moment

== Upgrade Notice ==

* this is first release

== Changelog ==

= 0.0.1 =

* first release
