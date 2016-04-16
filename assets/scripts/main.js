(function($){

  // Prevents from loading twice
	var loaded = false;

  // jQuery selector for qTranslate enabled fields
  // data-qtranslate attribute would be better but wp_editor (WYSIWYG) doesn't 
  // support custom data attributes
  var qt_selector = '.cmb2-qtranslate,[data-cmb2-qtranslate]';

  // Selectors for field types supported by plugin
  // unsupported fields will display JS alert with info
  var field_types = ['input', 'textarea'];

  // field_types ready for jQuery selectors
  var fields_selector = field_types.join(',');

  // selector for cmb field type wrapper
  // to which language switch buttons will be prepended
  var cmb2_field_wrapper_class = '.cmb-td';

  var cmb2qtranslate = {
    qTranslateInitMetabox: function($meta_box) {
      var form = $meta_box.closest('form').get(0);
      // all meta box fields
      var $fields = $meta_box.find(qt_selector);

      // make elements which doesn't match qt_selector untranslatable
      // (because wysiwygs are translatable by default)
      $meta_box.find('.qtranxs-translatable').each(function() {
        // second condition is for matching wysiwyg which is followed by textarea elements
        if ( $(this).is(qt_selector) || $(this).nextAll(qt_selector).length ) return;

        qTranslateConfig.qtx.removeContentHook(this);
        // because class name may be duplicated which is
        // not handled by qTranslate plugin (e.g. wysiwyg)
        $(this).removeClass('qtranxs-translatable');
      });

      // check each field
      $fields.each( function(index, field) {
        var $field = $(field);

        // check if field type is supported by qTranslate integration
        if (!$field.is(fields_selector)) {
          alert("Translation for selected CMB2 field #" + $field.attr('id') + " is not supported. Supported fields are: " + field_types.join(', '));
          return;
        }

        // reinitialize qTranslate if it is not initializated 
        if ( !qTranslateConfig.qtx.hasContentHook(field.id) ) {
          qTranslateConfig.qtx.refreshContentHook(field);
        }

        // create Language Switch Buttons
        var langSwitchWrap = cmb2qtranslate.createSetOfLSB();
        // add switch buttons before each multilanguage input
        $field.closest(cmb2_field_wrapper_class).prepend(langSwitchWrap);
      });
    },
    // creates Language Switch Buttons
    // function copied from qTranslate-x plugin
    // (I didn't find any API/hook for that)
    createSetOfLSB: function() {
      var langSwitchWrap=qtranxj_ce('ul', {className: qTranslateConfig.lsb_style_wrap_class});
      var langs=qTranslateConfig.language_config;
      if(!qTranslateConfig.tabSwitches) qTranslateConfig.tabSwitches={};
      for(var lang in langs)
      {
        var lang_conf = langs[lang];
        var flag_location=qTranslateConfig.flag_location;
        var tabSwitch=qtranxj_ce ('li', {lang: lang, className: 'qtranxs-lang-switch', onclick: qTranslateConfig.qtx.switchActiveLanguage }, langSwitchWrap );
        qtranxj_ce('img', {src: flag_location+lang_conf.flag}, tabSwitch);
        qtranxj_ce('span', {innerHTML: lang_conf.name}, tabSwitch);
        if ( qTranslateConfig.activeLanguage == lang )
          tabSwitch.classList.add(qTranslateConfig.lsb_style_active_class);
        if(!qTranslateConfig.tabSwitches[lang]) qTranslateConfig.tabSwitches[lang] = [];
        qTranslateConfig.tabSwitches[lang].push(tabSwitch);
      }
      return langSwitchWrap;
    },
    // operations performed when new CMB2 repeatable row is initialized
    initNewRow: function(event, row) {
      // because row is not added with qTranslate addContentHook()
      // it has to be manually cleared before reinitialization
      var langs=qTranslateConfig.language_config;
      var $row = $(row);
      for (var lang in langs) {
        if (langs.hasOwnProperty(lang)) {
          // remove each lang input
          $row.find('input[name="[' + lang + ']"][type=hidden]').remove();
        }
      }
      // remove hidden separator value
      $row.find('input[name="[qtranslate-separator]"][type=hidden]').remove();
      // remove inactive language switch buttons
      $row.find('.qtranxs-lang-switch-wrap').remove();
      cmb2qtranslate.qTranslateInitMetabox($row);
    }
  };

  // initialize CMB2 qTranslate integration after window is loaded
	$(window).load(function() {
    //return;
    // TODO: it works ... just add LSBS and don't do anything else

		// Prevent from being triggered again
		if (loaded) {
			return;
		}

		loaded = true;

		// Only proceed if qTranslate is loaded
		if (typeof qTranslateConfig != 'object' || typeof qTranslateConfig.qtx != 'object') {
      console.log('ERROR: qTranslate JS NOT LOADED!');
			return;
		}

    // loop through all meta boxes
    CMB2.metabox().each(function() {
      var $meta_box = $(this);
      cmb2qtranslate.qTranslateInitMetabox($meta_box);

      //
      // REPEATABLE GROUPS SUPPORT
      // 
      
      // get repeatable group
      var $repeatGroup = $meta_box.find('.cmb-repeatable-group');

      // if metabox has repeatable group
      if ( $repeatGroup.length ) {
         // listen to add row event
        $repeatGroup.on( 'cmb2_add_row', cmb2qtranslate.initNewRow );
        // remove row is handled by CMB2, (probably) no need for any action
      }
   });
	});
})(jQuery);
