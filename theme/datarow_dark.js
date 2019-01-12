ace.define("ace/theme/datarow_dark",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

    exports.isDark = true;
    exports.cssClass = "datarow_dark";
    exports.cssText = ".datarow_dark .ace_gutter {\
    background: #12191d;\
    color: #4C5A61\
    }\
    .datarow_dark .ace_print-margin {\
    width: 1px;\
    background: #232323\
    }\
    .datarow_dark {\
    background-color: #12191d;\
    color: #d4d4d4;\
    -webkit-font-smoothing: antialiased\
    }\
    .datarow_dark .ace_cursor {\
    color: #A7A7A7\
    }\
    .datarow_dark .ace_marker-layer .ace_selection {\
    background: #30404D\
    }\
    .datarow_dark.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #141414;\
    }\
    .datarow_dark .ace_marker-layer .ace_step {\
    background: rgb(102, 82, 0)\
    }\
    .datarow_dark .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid rgba(255, 255, 255, 0.25)\
    }\
    .datarow_dark .ace_marker-layer .ace_active-line {\
    background: rgba(255, 255, 255, 0.031)\
    }\
    .datarow_dark .ace_gutter-active-line {\
    background-color: rgba(255, 255, 255, 0.031)\
    }\
    .datarow_dark .ace_marker-layer .ace_selected-word {\
    border: 1px solid rgba(221, 240, 255, 0.20)\
    }\
    .datarow_dark .ace_invisible {\
    color: rgba(255, 255, 255, 0.25)\
    }\
    .datarow_dark .ace_keyword,\
    .datarow_dark .ace_meta {\
    color: #48AFF0\
    }\
    .datarow_dark .ace_constant,\
    .datarow_dark .ace_constant.ace_character,\
    .datarow_dark .ace_constant.ace_character.ace_escape,\
    .datarow_dark .ace_constant.ace_other,\
    .datarow_dark .ace_heading,\
    .datarow_dark .ace_markup.ace_heading,\
    .datarow_dark .ace_support.ace_constant {\
    color: #B6D94C\
    }\
    .datarow_dark .ace_invalid.ace_illegal {\
    color: #F8F8F8;\
    background-color: rgba(86, 45, 86, 0.75)\
    }\
    .datarow_dark .ace_invalid.ace_deprecated {\
    text-decoration: underline;\
    font-style: italic;\
    color: #D2A8A1\
    }\
    .datarow_dark .ace_support {\
    color: #9B859D\
    }\
    .datarow_dark .ace_fold {\
    background-color: #AC885B;\
    border-color: #F8F8F8\
    }\
    .datarow_dark .ace_support.ace_function {\
    color: #FFB366\
    }\
    .datarow_dark .ace_list,\
    .datarow_dark .ace_markup.ace_list,\
    .datarow_dark .ace_storage {\
    color: #F9EE98\
    }\
    .datarow_dark .ace_entity.ace_name.ace_function,\
    .datarow_dark .ace_meta.ace_tag,\
    .datarow_dark .ace_variable {\
    color: #AC885B\
    }\
    .datarow_dark .ace_string {\
    color: #EB532D\
    }\
    .datarow_dark .ace_string.ace_regexp {\
    color: #E9C062\
    }\
    .datarow_dark .ace_comment {\
    font-style: italic;\
    color: #5F5A60\
    }\
    .datarow_dark .ace_variable {\
    color: #7587A6\
    }\
    .datarow_dark .ace_xml-pe {\
    color: #494949\
    }\
    .datarow_dark .ace_indent-guide {\
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\
    }";
    
    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
    });                (function() {
                        ace.acequire(["ace/theme/datarow_dark"], function(m) {
                            if (typeof module == "object" && typeof exports == "object" && module) {
                                module.exports = m;
                            }
                        });
                    })();
                