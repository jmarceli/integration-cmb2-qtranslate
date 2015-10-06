=== Integration-CMB2-qTranslate ===
Contributors: jmarceli
Donate link: http://grzegorowski.com/
Tags: cmb2, qtranslate, qtranslatex, integration
Requires at least: 4.0
Tested up to: 4.3
Stable tag: 0.0.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

CMB2 and qTranslate X integration.

== Description ==

CMB2-qTranslate is Wordpress plugin for CMB2 and qTranslate X integration. Adds language switch buttons above selected CMB2 fields to make content translatable.
For updated docs please refer to the Github project page [https://github.com/jmarceli/integration-cmb2-qtranslate](https://github.com/jmarceli/integration-cmb2-qtranslate).

**Supported CMB2 field types:**

* input
* textarea
* wysiwyg
* repeatable field groups

In order to make field translatable add `.cmb2-qtranslate` class to it. For non-WYSIWYG fields you may prefer to use `data-cmb2-qtranslate` which is also supported (since 0.0.3 version).

**Usage example**

**WYSIWYG field:**

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

**Other fields:**

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

    > // You may also use data-attributes instead of class to trigger qTranslate for the field
    > // however it is not supported by WYSIWYG field (Wordpress limitation)

    > $field2 = $cmb_demo->add_field( array(
    >  'name' => __( 'Text Small', $this->plugin_slug ),
    >  'desc' => __( 'field description (optional)', $this->plugin_slug ),
    >  'id' => $prefix . $this->plugin_slug . '_textsmall',
    >  'class' => 'cmb2',
    >  'type' => 'text',
    >  'attributes' => array(
    >    'data-cmb2-qtranslate' => true
    >  )
    > ) );



Detailed info about field creation could be found in CMB2 project documentation (https://github.com/WebDevStudios/CMB2/wiki).

**Usage on custom Theme Options Page:**

See https://github.com/qTranslate-Team/qtranslate-x/wiki/Custom-page-(plugin)-integration

You should define at least one form field in `$admin-config` array to trigger qTranslate LSB on your custom Theme Options Page. In other case you will end up with not working LSB. It happens because by default qTranslate is available only on specific pages: content pages, general options and maybe some others, but not your custom page (if you will create one).

**Requirements/Dependencies**

* CMB2 (https://pl.wordpress.org/plugins/cmb2/)
* qTranslateX (https://pl.wordpress.org/plugins/qtranslate-x/)

**Links**

* [Github project page](https://github.com/jmarceli/integration-cmb2-qtranslate)

== Installation ==

Install as usual from wordpress.org plugins page

**or**

1. Download Github repository

2. Upload the entire `integration_cmb2_qtranslate/` directory to the `/wp-content/plugins/` directory.
3. Activate CMB2-qTranslate through the 'Plugins' menu in WordPress.

**or**

1. Place the `integration_cmb2_qtranslate/` directory inside of your theme or plugin.
2. Enqueue JavaScript file `dist/scripts/main.js` with  `wp_enqueue_script` function

== Frequently Asked Questions ==

* none at the moment

== Upgrade Notice ==

* this is first release

== Changelog ==


= 0.0.4 =

* readme update

= 0.0.3 =

* add support for `data-cmb2-qtranslate`

= 0.0.2 =

* readme update

= 0.0.1 =

* first release
