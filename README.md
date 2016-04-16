# Integration CMB2-qTranslate

**Contributors:**      [jmarceli](https://github.com/jmarceli)  
**Tags:**              cmb2, qtranslate, integration, translation  
**Tested with:**       CMB2 (2.1.0), qTranslate X (3.4.5), Wordpress (4.3.0)   
**Current version**    0.1.1  
**License:**           GPLv2 or later  
**License URI:**       [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)  

## Description

CMB2-qTranslate is Wordpress plugin for CMB2 and qTranslate X integration. Adds language switch buttons above selected CMB2 fields to make content translatable.

## Supported CMB2 field types:

* input
* textarea
* wysiwyg
* repeatable field groups

In order to make field translatable add `.cmb2-qtranslate` class to it. For non-WYSIWYG fields you may prefer to use `data-cmb2-qtranslate` which is also supported (since 0.0.3 version).

## Usage example

#### WYSIWYG field:

    $field1 = $cmb_demo2->add_field( array(
      'name' => __( 'SECOND Text', $this->plugin_slug ),
      'desc' => __( 'field description (optional)', $this->plugin_slug ),
      'id' => $prefix . $this->plugin_slug . '_second_text',
      'class' => 'cmb2',
      'type' => 'wysiwyg',
      'options' => array(
        'editor_class' => 'cmb2-qtranslate'
      )
    ) );

#### Other fields:

    $field2 = $cmb_demo->add_field( array(
      'name' => __( 'Text Small', $this->plugin_slug ),
      'desc' => __( 'field description (optional)', $this->plugin_slug ),
      'id' => $prefix . $this->plugin_slug . '_textsmall',
      'class' => 'cmb2',
      'type' => 'text',
      'attributes' => array(
        'class' => 'cmb2-qtranslate'
      )
    ) );

    // You may also use data-attributes instead of class to trigger qTranslate for the field
    // however it is not supported by WYSIWYG field (Wordpress limitation)

    $field2 = $cmb_demo->add_field( array(
      'name' => __( 'Text Small', $this->plugin_slug ),
      'desc' => __( 'field description (optional)', $this->plugin_slug ),
      'id' => $prefix . $this->plugin_slug . '_textsmall',
      'class' => 'cmb2',
      'type' => 'text',
      'attributes' => array(
        'data-cmb2-qtranslate' => true
      )
    ) );

Detailed info about field creation could be found in CMB2 project documentation (https://github.com/WebDevStudios/CMB2/wiki).

## Usage on custom Theme Options Page

See https://github.com/qTranslate-Team/qtranslate-x/wiki/Custom-page-(plugin)-integration

You should define at least one form field in `$admin-config` array to trigger qTranslate LSB on your custom Theme Options Page. In other case you will end up with not working LSB. It happens because by default qTranslate is available only on specific pages: content pages, general options and maybe some others, but not your custom page (if you will create one).

## Requirements/Dependencies
* CMB2 (https://pl.wordpress.org/plugins/cmb2/)
* qTranslateX (https://pl.wordpress.org/plugins/qtranslate-x/)

## Contribution
All contributions are welcome.

1. Fork it ( https://github.com/jmarceli/Gekosale2/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## Links
* [Github project page](https://github.com/jmarceli/CMB2-qTranslate)

## Installation

If installing the plugin from wordpress.org:

1. Upload the entire `cmb2_qtranslate/` directory to the `/wp-content/plugins/` directory.
2. Activate CMB2-qTranslate through the 'Plugins' menu in WordPress.

If including the library in your plugin or theme:

1. Place the `cmb2_qtranslate/` directory inside of your theme or plugin.
2. Enqueue JavaScript file `dist/scripts/main.js` with  `wp_enqueue_script` function

## Changelog

### 0.0.3

* add support for `data-cmb2-qtranslate`

### 0.0.1

* first release

## TODO

* support for more field types from CMB2
