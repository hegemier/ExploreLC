(function(window, document){"use strict";var app_url=getDsmAppUrl();

// loading animation
var el = document.getElementsByClassName('sk-fb-event')[0];
if(el==undefined){
     var el = document.getElementsByClassName('dsm-fb-event')[0];
     if(el==undefined){ el = document.getElementsByClassName('sk-ww-facebook-page-events-grid')[0]; }

     if(el!=undefined){ el.className = "sk-fb-event"; }
}

if(el!=undefined){
     el.innerHTML = "<div class='first_loading_animation' style='text-align:center !important; width:100% !important;'><img src='" + app_url + "images/ripple.svg' class='loading-img' style='width:auto !important; margin:0 auto !important; border:none !important; text-align:center !important; float:none !important;' /></div>";
}

// load css
console.log(app_url);
loadCssFile(app_url + "libs/js/swiper/swiper.min.css");
loadCssFile(app_url + "libs/js/swiper/swiper.css?v=ranndomchars");
loadCssFile(app_url + "embed/libs/js/magnific-popup/magnific-popup.css");
loadCssFile(app_url + "embed/facebook-events/widget_css.php");
loadCssFile(app_url + "libs/css/tingle.css?v=7");
loadCssFile("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
loadCssFile("https://api.tiles.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.css");
loadCssFile(app_url + "embed/libs/js/flatpickr/flatpickr.min.css");

/******** Load jQuery if not present *********/
// if (window.jQuery === undefined || window.jQuery.fn.jquery !=='2.2.0') {
if (window.jQuery === undefined) {

     var script_tag = document.createElement('script');
     script_tag.setAttribute("type", "text/javascript");
     script_tag.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
     script_tag.setAttribute("defer", "");

     // chck if script is ready
     if (script_tag.readyState) {
     script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
               scriptLoadHandler();
          }
     };
     }

     // if not, load the script
     else{
          script_tag.onload = scriptLoadHandler;
     }

     // Try to find the head, otherwise default to the documentElement
     (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
}

// The jQuery version on the window is the one we want to use
else{
     jQuery = window.jQuery;
     scriptLoadHandler();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler(){
     loadScript(app_url + "embed/libs/js/magnific-popup/jquery.magnific-popup.js", function(){
          loadScript(app_url + "embed/libs/js/custom.js", function(){
                    loadScript(app_url + "libs/js/tingle.js", function(){
                         loadScript("https://api.tiles.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.js", function(){
                              loadScript(app_url + "libs/js/swiper/swiper.min.js", function(){



                                   initializePlugin();


                              });
                         });
                    });
          });
     });

}


function getUpcomingRecurredEvents(sk_fb_event,val){

	// this is the template used in event item ang popup

   var event_item = "";
   var merge_recurring_events = getDsmSetting(sk_fb_event, "merge_recurring_events");
   if(val.recurring_event_date_times && merge_recurring_events == 1){
	   var recurred_events = val.recurring_event_date_times;
	   jQuery.each(recurred_events, function(key, recurred_val){
		   var show_more = "show_more_false";
		   if(key == 0 || key == 1 || key == 2){
			   show_more = "";
		   }

			   event_item+="<div class='"+show_more+" sk-m-r-15px d-flex'>";
			   		var is_visible = key == 0 ? "" : "hidden";

				   	event_item += "<div><i class='fa fa-calendar-o "+ is_visible + "'></i> </div>";

				   	var start_time = recurred_val.start_time=="11:59 am" ? "" : recurred_val.start_time;
				   	if(recurred_val.start_date==recurred_val.end_date){
					   event_item+=recurred_val.start_date;
					   event_item+=getDsmSetting(sk_fb_event, "show_day_text")==1 ? ", " + recurred_val.start_day : "";
					   event_item+=" @ " + start_time;

					   if (getDsmSetting(sk_fb_event, "show_end_date_time") == 1 && recurred_val.end_time && recurred_val.end_time != "Nov 30, -0001") {
						   event_item += " - " + recurred_val.end_time;
					   }

				   }

				   else{
					   event_item+=recurred_val.start_date;
					   event_item+=getDsmSetting(sk_fb_event, "show_day_text")==1 && recurred_val.start_day ? ", " + recurred_val.start_day : "";
					   event_item+=" @ " + start_time;

					   if(getDsmSetting(sk_fb_event, "show_end_date_time") == 1 && recurred_val.end_date && recurred_val.end_date!="Nov 30, -0001" && recurred_val.end_time_raw!="0000-00-00 00:00:00"){
						   event_item+= " - " + recurred_val.end_date;
						   event_item+=getDsmSetting(sk_fb_event, "show_day_text")==1 ? ", " + recurred_val.end_day : "";
						   event_item += " @ " + recurred_val.end_time;
					   }
				   }
				event_item+="</div>";

	   });

	   if(val.recurring_event_date_times.length > 2 && merge_recurring_events == 1){
		   event_item += "<div style='padding-left:20px;'>(<a href='javascript::void(0);' class='read-more-btn recurring-event-link' ";
		   event_item += "data-event-id='" + val.eid + "' ";
		   event_item += "data-embed-id='" + getDsmEmbedId(sk_fb_event) + "' ";
		   event_item += "data-location=\"" + val.location + "\" ";
		   event_item += "data-lati='" + val.event_lati + "' ";
		   event_item += "data-longi='" + val.event_longi + "' ";
		   event_item += ">";
		   event_item += sk_fb_event.find('.recurring_event_text').text();
		   event_item += "</a>)</div>";
	   }
	   if(recurred_events.length>3){
		   event_item += "<div class='sk-m-r-15px d-flex'><div style='display: inline-block;'><a class='more-desc'>Show more</a></div></div>";
	   }
   }
   else{

	   	event_item+="<div class='d-flex'>";
		event_item += "<div><i class='fa fa-calendar-o'></i></div>";
		event_item += "<div class='icon_text'>";
	   	var start_time = val.start_time == "11:59 am" ? "" : " @ " + val.start_time;



		   	if (val.start_date == val.end_date) {
		   		event_item += val.start_date;
			   event_item += sk_fb_event.find('.show_day_text').text() == 1 ? ", " + val.start_day : "";

			   event_item += val.start_time ? start_time : " @ <a href='https://www.facebook.com/" + val.eid + "' target='_blank'>View time on Facebook</a>";

			   if (getDsmSetting(sk_fb_event, "show_end_date_time") == 1 && val.end_time && val.end_time != "Nov 30, -0001") {
				   event_item += " - " + val.end_time;
			   }
		   	} else {
			   event_item += val.start_date;
			   event_item += sk_fb_event.find('.show_day_text').text() == 1 ? ", " + val.start_day : "";

			   event_item += val.start_time ? start_time : " @ <a href='https://www.facebook.com/" + val.eid + "' target='_blank'>View time on Facebook</a>";

			   if (getDsmSetting(sk_fb_event, "show_end_date_time") == 1 && val.end_date && val.end_time != "Nov 30, -0001" && val.end_date != "Nov 30, -0001" && val.end_time_raw != "0000-00-00 00:00:00") {
				   event_item += " - " + val.end_date;
				   event_item += sk_fb_event.find('.show_day_text').text() == 1 ? ", " + val.end_day : "";
				   event_item += " @ " + val.end_time;
			   }
		   	}

	   event_item += "</div>";
	   event_item+="</div>";
   }

   return event_item;
}

function isScriptAlreadyIncluded(src) {
   var scripts = document.getElementsByTagName("script");
   var x = 0;
   for (var i = 0; i < scripts.length; i++) {
	   if (scripts[i].getAttribute('src') == src) {
		   x++;
	   }
   }
   return x;
}

function loadScript(url, callback) {

   /* Load script from url and calls callback once it's loaded */
   var scriptTag = document.createElement('script');

   scriptTag.setAttribute("type", "text/javascript");
   scriptTag.setAttribute("src", url);
   scriptTag.setAttribute("defer", "");

   if (typeof callback !== "undefined") {
	   if (scriptTag.readyState) {

		   /* For old versions of IE */
		   scriptTag.onreadystatechange = function () {
			   if (this.readyState === 'complete' || this.readyState === 'loaded') { callback(); }
		   };
	   }

	   else { scriptTag.onload = callback; }
   }

   (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
}

// load css file
function loadCssFile(filename) {

   var fileref = document.createElement("link");
   fileref.setAttribute("rel", "stylesheet");
   fileref.setAttribute("type", "text/css");
   fileref.setAttribute("href", filename);

   if (typeof fileref != "undefined") {
	   document.getElementsByTagName("head")[0].appendChild(fileref)
   }
}

//get translated month
function getTranslatedMonth(month,dd,yyyy){
   var sk_fb_event = jQuery('.sk-fb-event');
   var date        = month + ' ' + dd + ', ' + yyyy;

   if(getDsmSetting(sk_fb_event,'translation') == "English - UK"){
	   date        = ordinal_suffix_of(parseInt(dd)) + ' ' +  month  + ' ' +yyyy;
   }

   if(getDsmSetting(sk_fb_event,'translation') == "Danish"){
	   date        = dd + ' ' +  month.substring(0,3)  + ' ' +yyyy;
   }


   return date;
}

// get date today ymd
function getTodayMonthDayCommaYear(selected_date) {

   var today = new Date(selected_date);
   var dd = today.getDate();
   var yyyy = today.getFullYear();
   var mm = today.getMonth();

   mm = mm + 1;

   if (dd < 10) { dd = '0' + dd }
   var month = getFullMonthName(mm);

   return getTranslatedMonth(month,dd,yyyy);
}

// get date today ymd
function getTodayYmd() {

   var today = new Date();

   var timezone = jQuery('.sk-fb-event').find('.timezone').text();

   if(timezone){
	   try{
		   var timezone_date = new Date().toLocaleString("en-US", {timeZone: timezone});
		   today = new Date(timezone_date);
	   }

	   catch(err){
		   console.log("Invalid timezone.");
	   }
   }

   var dd = today.getDate();
   var mm = today.getMonth() + 1; //January is 0!
   var yyyy = today.getFullYear();

   if (dd < 10) { dd = '0' + dd }
   if (mm < 10) { mm = '0' + mm }

   return yyyy + '-' + mm + '-' + dd;
}

function getDsmAppUrl() {

   // auto detect live and dev version
   var scripts = document.getElementsByTagName("script");
   var scripts_length = scripts.length;
   var search_result = -1;
   var app_url = "";

   for (var i = 0; i < scripts_length; i++) {
	   var src_str = scripts[i].getAttribute('src');

	   if (src_str != null) {
		   search_result = src_str.search("embed/facebook-events/widget");

		   // app-dev found if greater than or equal to 1
		   if (search_result >= 1) {
			   var src_arr = src_str.split("embed/facebook-events/widget");
			   app_url = src_arr[0];

			   // replace if displaysocialmedia.com
			   app_url = app_url.replace("displaysocialmedia.com", "sociablekit.com");
		   }
	   }
   }

   return app_url;
}

function getDsmEmbedId(sk_fb_event) {
   var embed_id = sk_fb_event.attr('embed-id');
   if (embed_id == undefined) {
	   embed_id = sk_fb_event.attr('data-embed-id');
   }

   return embed_id;
}

function getDsmSetting(sk_fb_event, key) {
   return sk_fb_event.find("." + key).text();
}



function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

	//Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

function initializePlugin(){

     // localize jquery
     $ = jQuery = window.jQuery.noConflict(true);

     // initialize pop up plugin
     initManificPopupPlugin(jQuery);



     // call main() to render events
     main();

 }

 // make widget responsive
function mediaQueryJs(jQuery, sk_fb_event){
    sk_fb_event.css('width','100%');
    var sk_fb_event_width=sk_fb_event.width();
    if(sk_fb_event_width<=412){
        sk_fb_event.find('.events-select').css({
            'display' : 'block',
        });

        sk_fb_event.find('.sk-fb-event .sk-calendar-tbl-holder').css({
            'overflow-x' : 'scroll',
        });
    }

    // mobile btn menu
    if(sk_fb_event_width<=430){
        sk_fb_event.find('.sk_fb_events_options_btn').css({
            'display' : 'block',
        });

        sk_fb_event.find('.default_hidden').css({
            'display' : 'block',
        });
        if(localStorage.getItem("user_searched") == 0){
            sk_fb_event.find('.sk_fb_events_options').css({
                'display' : 'none',
            });
        }

        sk_fb_event.find('.events-tabs, .sk_fb_event_tab_option').css({
            'width' : '100%',
        });
    }

    else if(sk_fb_event_width<=500){
        sk_fb_event.find('.sk_fb_events_options_btn').css({
            'display' : 'none',
        });

        sk_fb_event.find('.sk_fb_events_options').css({
            'display' : 'block',
        });
    }

    else {
        sk_fb_event.find('.sk_fb_events_options_btn').css({
            'display' : 'none',
        });

        sk_fb_event.find('.sk_fb_events_options').css({
            'display' : 'block',
        });
    }


}

function makeLayoutResponsive(jQuery, sk_fb_event){

    mediaQueryJs(jQuery, sk_fb_event);

    var show_type=localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

    // get container width
    var sk_fb_event_width=sk_fb_event.width();

    // ========================= control bar

    var container_sk_ww_search_events_width="100%";
    var container_sk_ww_calendar_navigation_width="100%";
    var events_tabs_width="100%";
    var next_month_btn_margin_right="0px";
    var tab_option_display="none"
    var apply_all_tab_border_radius=1;
    var sk_fb_event_item_display="none";
    var day_event_count_display="block";
    var day_event_text_display="block";
    var sk_ww_fb_events_date_picker_align = "center";

     sk_fb_event.find('.sk-cal-btn').css({
        'width' : '37px',
    });

    sk_fb_event.find('.sk-cal-btn,.sk_ww_search_events,.sk_fb_event_tab_option,.sk_ww_fb_events_date_picker').css({
        'height' : '36px',
    });

     // smartphones, iPhone, portrait 480x320 phones
    if(sk_fb_event_width<=320){
        day_event_text_display="none";
    }

    // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
    else if(sk_fb_event_width<=481){
        day_event_text_display="none";
    }

    // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
    // else if(sk_fb_event_width<=720){

    // }

    // tablet, landscape iPad, lo-res laptops ands desktops
    else if(sk_fb_event_width <= 700){

        sk_fb_event.find('.sk-cal-btn').css({
            'width' : '20px',
        });

        sk_fb_event.find('.sk-cal-btn,.sk_ww_search_events,.sk_fb_event_tab_option,.sk_ww_fb_events_date_picker').css({
            'height' : '33px',
        });



        container_sk_ww_search_events_width="27%";
        container_sk_ww_calendar_navigation_width="auto";
        events_tabs_width="auto";
        next_month_btn_margin_right="10px";
        tab_option_display="block";
        apply_all_tab_border_radius=0;
        sk_fb_event_item_display="block";
        day_event_count_display="none";
        sk_ww_fb_events_date_picker_align = "center";
    }

    // tablet, landscape iPad, lo-res laptops ands desktops
    else if(sk_fb_event_width<=961){
        container_sk_ww_search_events_width="25%";
        container_sk_ww_calendar_navigation_width="auto";
        events_tabs_width="auto";
        next_month_btn_margin_right="10px";
        tab_option_display="block";
        apply_all_tab_border_radius=0;
        sk_fb_event_item_display="block";
        day_event_count_display="none";
        sk_ww_fb_events_date_picker_align = "center";
    }

    // big landscape tablets, laptops, and desktops
    else if(sk_fb_event_width<=1025){
        container_sk_ww_search_events_width="25%";
        container_sk_ww_calendar_navigation_width="auto";
        events_tabs_width="auto";
        next_month_btn_margin_right="10px";
        tab_option_display="block";
        apply_all_tab_border_radius=0;
        sk_fb_event_item_display="block";
        day_event_count_display="none";
        sk_ww_fb_events_date_picker_align = "center";
    }

    // hi-res laptops and desktops
    else if(sk_fb_event_width<=1281){
        container_sk_ww_search_events_width="28%";
        container_sk_ww_calendar_navigation_width="auto";
        events_tabs_width="auto";
        next_month_btn_margin_right="10px";
        tab_option_display="block";
        apply_all_tab_border_radius=0;
        sk_fb_event_item_display="block";
        day_event_count_display="none";
        sk_ww_fb_events_date_picker_align = "center";
    }

    // wider screen
    else if(sk_fb_event_width>1281){
        container_sk_ww_search_events_width="28%";
        container_sk_ww_calendar_navigation_width="auto";
        events_tabs_width="auto";
        next_month_btn_margin_right="10px";
        tab_option_display="block";
        apply_all_tab_border_radius=0;
        sk_fb_event_item_display="block";
        day_event_count_display="none";
        sk_ww_fb_events_date_picker_align = "center";
    }

    sk_fb_event.find('.container_sk_ww_calendar_navigation').css({ 'width' : container_sk_ww_calendar_navigation_width });
    sk_fb_event.find('.container_sk_ww_search_events').css({ 'width' : container_sk_ww_search_events_width });
    sk_fb_event.find('.events-tabs, .sk_fb_event_tab_option').css({ 'width' : events_tabs_width });
    sk_fb_event.find('.sk-cal-next-month').css({ 'margin-right' : next_month_btn_margin_right });
    sk_fb_event.find('.tab-masonry-events, .tab-grid-events, .tab-export-calendar').css({ 'display' : tab_option_display });
    sk_fb_event.find('.sk-fb-event-item').css({ 'display' : sk_fb_event_item_display });
    sk_fb_event.find('.sk_cal_day_event_count').css({ 'display' : day_event_count_display });
    sk_fb_event.find('.sk_cal_day_event_count .sk_cal_day_event_text').css({ 'display' : day_event_text_display });
    sk_fb_event.find('.sk_ww_fb_events_date_picker').css({ 'text-align' : sk_ww_fb_events_date_picker_align });

    if(getDsmSetting(sk_fb_event, "show_masonry_view")==0){ sk_fb_event.find('.tab-masonry-events').hide(); }
    if(getDsmSetting(sk_fb_event, "show_grid_view")==0){ sk_fb_event.find('.tab-grid-events').hide(); }
    if(getDsmSetting(sk_fb_event, "show_export_calendar_button")==0){ sk_fb_event.find('.tab-export-calendar').hide(); }
    if(getDsmSetting(sk_fb_event, "show_date_picker")==0){
        sk_fb_event.find('.container_sk_ww_calendar_navigation').hide();
        sk_fb_event.find('.sk_ww_fb_events_date_picker').attr('type', 'hidden');
    }

    if(apply_all_tab_border_radius==1){
        sk_fb_event.find('.events-tabs .sk_fb_event_tab_option').css({
             'border-radius' : getDsmSetting(sk_fb_event, "tab_border_radius") + 'px',
        });
    }

    else{
        sk_fb_event.find('.events-tabs .sk_fb_event_tab_option').css({ 'border-radius' : '0px', });

        // apply radius to first and last button only
        sk_fb_event.find('.events-tabs .sk_fb_event_tab_option:visible:first').css({
             'border-top-left-radius' : getDsmSetting(sk_fb_event, "tab_border_radius") + 'px',
             'border-bottom-left-radius' : getDsmSetting(sk_fb_event, "tab_border_radius") + 'px'
        });

        sk_fb_event.find('.events-tabs .sk_fb_event_tab_option:visible:last').css({
             'border-top-right-radius' : getDsmSetting(sk_fb_event, "tab_border_radius") + 'px',
             'border-bottom-right-radius' : getDsmSetting(sk_fb_event, "tab_border_radius") + 'px'
        });
    }

    if(getDsmSetting(sk_fb_event, "search_bar_full_width")==1){ container_sk_ww_search_events_width="100%"; }


    // ========================= if list layout
    if(show_type=="list"){

        sk_fb_event.find('.grid-item-facebook-event').css({
            'width' : '100%'
        });

         // change height to normal
        sk_fb_event.css({'height' : 'auto'});

        var sk_fb_event_thumb_section_width = "100%";
        var sk_fb_event_thumb_section_width_image = "100%";
        var sk_fb_event_initial_details_section_width= "100%";
        var sk_fb_event_initial_details_section_float="none";
        var sk_fb_event_title_margin="8px";
        var cal_day_event_display="block";
        var tabs_width="";
        var event_single_item_event_btn_width="auto";

        var sk_fb_event_initial_details_section_margin_left="0px";

        // smartphones, iPhone, portrait 480x320 phones
        if(sk_fb_event_width<=320){
            cal_day_event_display="none";
            tabs_width="100%";
            event_single_item_event_btn_width="100%";
        }

        // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
        else if(sk_fb_event_width<=481){
            cal_day_event_display="none";
            tabs_width="100%";
            event_single_item_event_btn_width="100%";
        }

        // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones
        else if(sk_fb_event_width<=720){
            cal_day_event_display="none";

            if(sk_fb_event.find('.sk-fb-event-thumb-section').length){
                 sk_fb_event_thumb_section_width = getDsmSetting(sk_fb_event,"image_width") +"%";
                 sk_fb_event_thumb_section_width_image = "100%";
                sk_fb_event_initial_details_section_width= 100 - getDsmSetting(sk_fb_event,"image_width") - 2 + "%";
                sk_fb_event_initial_details_section_float="left";
            }
            sk_fb_event_initial_details_section_margin_left="10px";
        }

        // tablet, landscape iPad, lo-res laptops ands desktops
        else if(sk_fb_event_width<=961){
            cal_day_event_display="none";

            if(sk_fb_event.find('.sk-fb-event-thumb-section').length){
                sk_fb_event_thumb_section_width = getDsmSetting(sk_fb_event,"image_width") +"%";
                sk_fb_event_thumb_section_width_image = "100%";
                sk_fb_event_initial_details_section_width= 100 - getDsmSetting(sk_fb_event,"image_width") - 2 + "%";
                sk_fb_event_initial_details_section_float="left";
            }
            sk_fb_event_title_margin="0";
            sk_fb_event_initial_details_section_margin_left="10px";
        }

        // big landscape tablets, laptops, and desktops
        else if(sk_fb_event_width<=1025){
            if(sk_fb_event.find('.sk-fb-event-thumb-section').length){
                sk_fb_event_thumb_section_width = getDsmSetting(sk_fb_event,"image_width") +"%";
                sk_fb_event_thumb_section_width_image = "100%";
                sk_fb_event_initial_details_section_width= 100 - getDsmSetting(sk_fb_event,"image_width") - 2 + "%";
                sk_fb_event_initial_details_section_float="left";
            }
            sk_fb_event_title_margin="0";
            sk_fb_event_initial_details_section_margin_left="10px";

        }

        // hi-res laptops and desktops
        else if(sk_fb_event_width<=1281){
            if(sk_fb_event.find('.sk-fb-event-thumb-section').length){
                sk_fb_event_thumb_section_width = getDsmSetting(sk_fb_event,"image_width") +"%";
                sk_fb_event_thumb_section_width_image = "100%";
                sk_fb_event_initial_details_section_width= 100 - getDsmSetting(sk_fb_event,"image_width") - 2 + "%";
                sk_fb_event_initial_details_section_float="left";
            }
            sk_fb_event_title_margin="0";
            sk_fb_event_initial_details_section_margin_left="10px";
        }

        // wider screen
        else if(sk_fb_event_width>1281){
             if(sk_fb_event.find('.sk-fb-event-thumb-section').length){
                sk_fb_event_thumb_section_width = getDsmSetting(sk_fb_event,"image_width") +"%";
                sk_fb_event_thumb_section_width_image = "100%";
                sk_fb_event_initial_details_section_width= 100 - getDsmSetting(sk_fb_event,"image_width") - 2 + "%";
                sk_fb_event_initial_details_section_float="left";
            }

            sk_fb_event_title_margin="0";
            sk_fb_event_initial_details_section_margin_left="10px";
        }

        // ========= CHANGE CSS VALUES ===============
        sk_fb_event.find('.title').css({ 'margin-top' : sk_fb_event_title_margin });
        sk_fb_event.find('.sk-fb-event-thumb-section').css({ 'width' : sk_fb_event_thumb_section_width });
        sk_fb_event.find('.photo-thumb').css({ 'width' : sk_fb_event_thumb_section_width_image });
        sk_fb_event.find('.sk-fb-event-initial-details-section').css({
             'width' : sk_fb_event_initial_details_section_width,
             'float' : sk_fb_event_initial_details_section_float
         });
        sk_fb_event.find('.cal-day-event').css({ 'display' : cal_day_event_display });
        sk_fb_event.find('.event-single-item .event-btn').css({ 'width' : event_single_item_event_btn_width });
        sk_fb_event.find('.sk-fb-event-initial-details-section').css({ 'margin-left' : sk_fb_event_initial_details_section_margin_left });

    }

    // ========================= if grid or masonry layout
    else{

        var sizer_width=33.3;

        // set based on current container
        if(sk_fb_event_width<=320 && getDsmSetting(sk_fb_event, "column_count")!=1){ sizer_width=100; }
        else if(sk_fb_event_width<=481 && getDsmSetting(sk_fb_event, "column_count")!=1){ sizer_width=100; }
        else if(sk_fb_event_width<=720 && getDsmSetting(sk_fb_event, "column_count")!=1){ sizer_width=50; }

        // follow the setting
        else{
            if(getDsmSetting(sk_fb_event, "column_count")==1){ sizer_width=100; }
            else if(getDsmSetting(sk_fb_event, "column_count")==2){ sizer_width=50; }
            else if(getDsmSetting(sk_fb_event, "column_count")==3){ sizer_width=33.3; }
            else if(getDsmSetting(sk_fb_event, "column_count")==4){ sizer_width=24.95; }
        }

        sk_fb_event.find('.grid-facebook-event .sk_fb_events_col, .grid_sk_upcoming_events .sk_fb_events_col, .grid_sk_past_events .sk_fb_events_col, .grid_sk_search_events .sk_fb_events_col').css({
             'width' : sizer_width + '%'
        });

        sk_fb_event.find('.sk-fb-event-initial-details-section, .read-more-btn, .get-tickets-btn, .sk-fb-event-thumb-section, .photo-thumb, .event-single-item .event-details .event-btns a').css({
             'width' : '100%'
        });

         // if grid layout, force each item to be the same height
        if(show_type=="grid" || show_type=="slider"){

            if(getDsmSetting(sk_fb_event, "show_full_image") == 1 && getDsmSetting(sk_fb_event, "show_image") == 1){
                var imgs = sk_fb_event.find('.sk-fb-event-thumb-section img');
                var len = imgs.length;
                if(len == 0 || imgs.prop('complete')){
                    setEventFeedHeight(show_type, sk_fb_event);
                }

                var counter = 0;
                [].forEach.call( imgs, function( img ) {
                    img.addEventListener( 'load', function() {
                        counter++;
                        if ( counter == len ) {
                            setEventFeedHeight(show_type, sk_fb_event);
                        }
                    }, false );
                });
            }
            else{
                setEventFeedHeight(show_type, sk_fb_event);
            }

        }
    }

     // fix date picker width
    var container_sk_ww_calendar_navigation_current_width=sk_fb_event.find(".container_sk_ww_calendar_navigation").width();
    var container_sk_ww_search_events_width=sk_fb_event.find(".container_sk_ww_search_events").width();
    if(container_sk_ww_calendar_navigation_width != "100%"){
        container_sk_ww_calendar_navigation_current_width = container_sk_ww_search_events_width;
    }

    var sk_cal_prev_month_btn_width=sk_fb_event.find(".sk-cal-prev-month").outerWidth(true);
    var sk_cal_next_month_btn_width=sk_fb_event.find(".sk-cal-next-month").outerWidth(true);



    var sk_ww_fb_events_date_picker_width=+container_sk_ww_calendar_navigation_current_width - +(+sk_cal_next_month_btn_width + +sk_cal_next_month_btn_width);

    var search_box_width_current = 0;
    var search_box_width  = sk_fb_event.find(".container_sk_ww_search_events").attr('style');

    if(search_box_width){
        search_box_width_current = search_box_width.match(/\d/g).join("");
    }


    if(search_box_width_current == 100){
        var sk_ww_search_events_width = sk_fb_event.find('.sk_ww_search_events').innerWidth() + 3;
        var button_total_width = sk_cal_prev_month_btn_width + sk_cal_next_month_btn_width;
        sk_ww_fb_events_date_picker_width = parseInt(sk_ww_search_events_width - button_total_width);

    }
    if(sk_ww_fb_events_date_picker_width < 140){
        sk_ww_fb_events_date_picker_width = "140px";
    }

    if(sk_fb_event_width <= 450){
        sk_ww_fb_events_date_picker_width = "79%";
    }

    else if(sk_fb_event_width <= 650){
        sk_ww_fb_events_date_picker_width = "75px";
    }

    else if(sk_fb_event_width <= 880){
        sk_ww_fb_events_date_picker_width = "97px";
    }

    sk_fb_event.find('.sk_ww_fb_events_date_picker').css({ 'width' : sk_ww_fb_events_date_picker_width });

}
function setEventFeedHeight(show_type, sk_fb_event){
    var thisH = 0;
    var maxHeight = 0;
    sk_fb_event.find(".event-single-item").each(function(){
        thisH = jQuery(this).height();
        if (thisH > maxHeight) { maxHeight = thisH; }
    });
    sk_fb_event.find(".event-single-item").height(maxHeight);
    if(show_type == "slider"){
        skLayoutSliderArrowUI(sk_fb_event);
    }

}function showCalendar(sk_fb_event) {
    // bring back calendar tab text
    sk_fb_event.find(".tab-calendar-events").html(getDsmSetting(sk_fb_event, "calendar_tab_text"));

    // show / hide contents (not tabs)
    sk_fb_event.find(".sk-upcoming-events").css({ 'display': 'none' });
    sk_fb_event.find(".sk-past-events").css({ 'display': 'none' });
    sk_fb_event.find(".sk-calendar-events").css({ 'display': 'block' });
}

function renderCalendar(jQuery, sk_fb_event) {
    var htmlContent = "";
    var FebNumberOfDays = "";
    var counter = 1;

    var selected_date = localStorage.getItem("sk_fb_events_selected_date");
    var dateNow = new Date(selected_date);

    var month = +dateNow.getMonth();
    var nextMonth = +month + +1; // +1 is used to match up the current month with the correct start date.
    var prevMonth = +month - +1;
    var day = dateNow.getDate();
    var year = dateNow.getFullYear();

    // get events of the month
    var embed_id = getDsmEmbedId(sk_fb_event);
    var search_term = localStorage.getItem("search_term");
    var predefined_search_keyword = getDsmSetting(sk_fb_event, "predefined_search_keyword");

    var json_url = app_url + "embed/facebook-events/widget_month_json.php?embed_id=" + embed_id + "&month=" + (month + 1) + "&year=" + year;
    if (search_term != "") {
        json_url = app_url + "embed/facebook-events/widget_month_search_json.php?embed_id=" + embed_id + "&month=" + (month + 1) + "&year=" + year + "&search_term=" + search_term;
    }
    else if (predefined_search_keyword != "") {
        json_url = app_url + "embed/facebook-events/widget_month_search_json.php?embed_id=" + embed_id + "&month=" + (month + 1) + "&year=" + year + "&search_term=" + predefined_search_keyword;
    }

    // get settings and events of the month
    jQuery.getJSON(json_url, function (data) {
        initializeFlatpickr(sk_fb_event, selected_date);
        makeLayoutResponsive(jQuery, sk_fb_event);

        // push events from facebook
        var start_date_arr = new Array();
        jQuery.each(data.events, function (key, val) {
            if(val.multi_event_end_time_raw!='1111-00-00 00:00:00'){
                start_date_arr.push(val['start_date_ymd']);
            }
            // getUpcomingRecurredEvents(sk_fb_event,val.eid,val.event_time_id,val.start_date_time);
        });

        // show calendar view
        showCalendar(sk_fb_event);

        //Determing if February (28,or 29)
        if (month == 1) {
            if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
                FebNumberOfDays = 29;
            }
            else { FebNumberOfDays = 28; }
        }

        // names of months and week days.
        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var dayPerMonth = ["31", FebNumberOfDays, "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

        // days in previous month and next one, and day of week.
        var currentMonthName = monthNames[month];
        var currentMonthFirstDate = new Date(currentMonthName + ' 1,' + year);

        var today = getTodayYmd();

        // ===== BUILD ALL <TD>S NEEDED FOR CALENDAR BODY =====
        // if day starts on monday
        if (getDsmSetting(sk_fb_event, "start_calendar_on_monday") == "1") {



            dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            currentMonthFirstDateDayIndex = currentMonthFirstDate.getDay();

            var dayIndex2 = currentMonthFirstDateDayIndex; // 1
            var numOfDays = dayPerMonth[month]; // 31

            // this leave a white space for days of pervious month.
            var empty_day = 1;

            if (currentMonthFirstDateDayIndex == 0) {
                while (empty_day <= 6) {
                    htmlContent += "<td class='monthPre'></td>"; // empty day td
                    empty_day++; // increase empty day count
                }
            } else {
                while (empty_day < currentMonthFirstDateDayIndex) {
                    htmlContent += "<td class='monthPre'></td>"; // empty day td
                    empty_day++; // increase empty day count
                }
            }

            // loop to build the calander body.
            while (counter <= numOfDays) { // 1 <= 31 days

                // when to start new line.
                if (dayIndex2 == 1) {
                    htmlContent += "</tr>"; // end row
                    htmlContent += "<tr>"; // start row
                }

                if (dayIndex2 > 6) {
                    dayIndex2 = 0;
                }

                // highlight if day has event/s
                var sk_month_text = (month + 1) > 9 ? (month + 1) : "0" + (month + 1);
                var sk_day_text = counter > 9 ? counter : "0" + counter;
                var sk_current_day = year + "-" + sk_month_text + "-" + sk_day_text;

                if (today == sk_current_day) {
                    sk_day_text = "<div class='sk_fb_events_calendar_today'>" + sk_day_text + "</div>";
                }
                else{
                    sk_day_text = "<div class='sk_fb_events_calendar_spacer'>" + sk_day_text + "</div>";
                }

                if (jQuery.inArray(sk_current_day, start_date_arr) !== -1) {

                    var timezone = "Europe/London";

                    // cell with event
                    htmlContent += "<td class='sk-cal-highlight-day' ";
                    htmlContent += "data-fb-page-id='" + getDsmSetting(sk_fb_event, "fb_page_id") + "' data-date-selected='" + sk_current_day + "' ";
                    htmlContent += "data-timezone='" + timezone + "' data-embed-id='" + embed_id + "'>";

                    // shown on desktop, laptop and screens big enough to display event text
                    htmlContent += "<div class='cal-day-number'>" + sk_day_text + "</div>";

                    var cal_day_event_count = 0;
                    jQuery.each(data.events, function (key, val) {
                        if (val['start_date_ymd'] == sk_current_day) {
                            cal_day_event_count++;
                            htmlContent += "<div class='sk-fb-event-item sk-m-0' sk_fb_event_searchable='yes'>";

                            htmlContent += "<div class='cal-day-event' ";

                            htmlContent += "data-location='" + val.location + "' ";
                            htmlContent += "data-event_time_id='" + val.event_time_id + "' ";
                            htmlContent += "data-lati='" + val.event_lati + "' ";
                            htmlContent += "data-longi='" + val.event_longi + "' ";

                            htmlContent += "data-event-id='" + val['event_id'] + "' ";
                            htmlContent += "data-embed-id='" + embed_id + "'>";
                            if (getDsmSetting(sk_fb_event, "show_event_image_on_calendar") == 1) {
                                htmlContent += "<img src='" + val['event_image'] + "' style='width:100%;' />";
                            }
                            htmlContent += val['name'];
                            htmlContent += "</div>";

                            htmlContent += "<div class='event-more-details'>";
                                htmlContent += getPopUpHtml(val, sk_fb_event);
                            htmlContent += "</div>";

                            htmlContent += "</div>";
                        }
                    });



                    // event count, shown on small smartphone screen
                    if (cal_day_event_count > 0) {
                        var events_text = cal_day_event_count == 1 ? "event" : "events";
                        htmlContent += "<div class='sk_cal_day_event_count' style='overflow:hidden;'>"
                            + "<span style='float:left; margin-right:3px;' class='sk_cal_day_event_number'>" + cal_day_event_count + "</span> "
                            + "<span style='float:left;' class='sk_cal_day_event_text'>" + events_text + "</span>"
                            + "</div>";



                        htmlContent += getCalendarDatePopUpContent(sk_fb_event, sk_current_day, data);

                    }

                    htmlContent += "</td>";
                } else {

                    // cell without event
                    htmlContent += "<td class='sk-cal-empty-day'>";
                    htmlContent += "<div class='cal-day-number'>" + sk_day_text + "</div>";
                    htmlContent += "</td>";
                }

                dayIndex2++;
                counter++;
            }
        }

        // if day starts on sunday
        else {

            var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var currentMonthFirstDateDayIndex = currentMonthFirstDate.getDay(); // Sunday is 0, Monday is 1, and so on.

            var dayIndex2 = currentMonthFirstDateDayIndex == -1 ? 0 : currentMonthFirstDateDayIndex; // 1
            var numOfDays = dayPerMonth[month]; // 31

            // this leave a white space for days of pervious month.
            while (currentMonthFirstDateDayIndex > 0) {
                htmlContent += "<td class='monthPre'></td>";
                currentMonthFirstDateDayIndex--; // used in next loop. // 1 if may 2017 ... 4,3,2,1 if jun 2017
            }

            // loop to build the calander body.
            while (counter <= numOfDays) { // 1 <= 31 days

                // When to start new line.
                if (dayIndex2 > 6) { // if 1 > 6, start new line or calendar row
                    dayIndex2 = 0;

                    // end row
                    htmlContent += "</tr>";

                    // start row
                    htmlContent += "<tr>";
                }

                // highlight if day has event/s
                var sk_month_text = (month + 1) > 9 ? (month + 1) : "0" + (month + 1);
                var sk_day_text = counter > 9 ? counter : "0" + counter;
                var sk_current_day = year + "-" + sk_month_text + "-" + sk_day_text;

                if (today == sk_current_day) {
                    sk_day_text = "<div class='sk_fb_events_calendar_today'>" + sk_day_text + "</div>";
                }
                else{
                    sk_day_text = "<div class='sk_fb_events_calendar_spacer'>" + sk_day_text + "</div>";
                }

                if (jQuery.inArray(sk_current_day, start_date_arr) !== -1) {

                    var timezone = "Europe/London";

                    // cell with event
                    htmlContent += "<td class='sk-cal-highlight-day' ";
                    htmlContent += "data-fb-page-id='" + getDsmSetting(sk_fb_event, "fb_page_id") + "' data-date-selected='" + sk_current_day + "' ";
                    htmlContent += "data-timezone='" + timezone + "' data-embed-id='" + embed_id + "'>";

                    // shown on desktop, laptop and screens big enough to display event text
                    htmlContent += "<div class='cal-day-number'>" + sk_day_text + "</div>";

                    var cal_day_event_count = 0;
                    var temp_eids = [];
                    jQuery.each(data.events, function (key, val) {
                        if (val['start_date_ymd'] == sk_current_day && val.multi_event_end_time_raw != '1111-00-00 00:00:00') {

                            cal_day_event_count++;
                            htmlContent += "<div class='sk-fb-event-item sk-m-0'>";

                            htmlContent += "<div class='cal-day-event' ";
                            htmlContent += "data-event-id='" + val['event_id'] + "' ";

                            htmlContent += "data-event_time_id='" + val.event_time_id + "' ";
                            htmlContent += "data-location='" + val.location + "' ";
                            htmlContent += "data-lati='" + val.event_lati + "' ";
                            htmlContent += "data-longi='" + val.event_longi + "' ";

                            htmlContent += "data-embed-id='" + embed_id + "'>";
                            if (getDsmSetting(sk_fb_event, "show_event_image_on_calendar") == 1) {
                                htmlContent += "<img src='" + val['event_image'] + "' style='width:100%;' />";
                            }
                            htmlContent += val['name'];
                            htmlContent += "</div>";

                            htmlContent += "<div class='event-more-details'>";
                                htmlContent += getPopUpHtml(val, sk_fb_event);
                            htmlContent += "</div>";
                            htmlContent += "</div>";
                        }
                    });

                    // event count, shown on small smartphone screen
                    if (cal_day_event_count > 0) {
                        var events_text = cal_day_event_count == 1 ? "event" : "events";
                        htmlContent += "<div class='sk_cal_day_event_count' style='overflow:hidden;'>"
                            + "<span style='float:left; margin-right:3px;'  class='sk_cal_day_event_number'>" + cal_day_event_count + "</span> "
                            + "<span style='float:left;' class='sk_cal_day_event_text'>" + events_text + "</span>"
                            + "</div>";

                        htmlContent += getCalendarDatePopUpContent(sk_fb_event, sk_current_day, data);
                    }

                    htmlContent += "</td>";
                } else {

                    // cell without event
                    htmlContent += "<td class='sk-cal-empty-day'>";
                    htmlContent += "<div class='cal-day-number'>" + sk_day_text + "</div>";
                    htmlContent += "</td>";
                }

                dayIndex2++;
                counter++;
            }

        }

        // ===== START BUILDING WHOLE CALENDAR =====
        var calendarBody = "<div class='display-none'>Calendar View Loaded</div>";
        calendarBody += "<div class='sk_fb_events_month_view_title'></div>";
        calendarBody += "<div class='sk-calendar-tbl-holder'>";
        calendarBody += "<table class='sk-calendar-tbl'>";

        calendarBody += "<tr class='dayNames'>";
        jQuery.each(dayNames, function (index, value) {
            calendarBody += "<td>" + translateDayName(value, sk_fb_event) + "</td>";
        });
        calendarBody += "</tr>";

        calendarBody += "<tr>";
        calendarBody += htmlContent;
        calendarBody += "</tr>";

        calendarBody += "</table>";
        calendarBody += "<div class='sk-cal-date-now display-none'>" + year + "-" + (month + 1) + "-" + day + "</div>";
        calendarBody += "<div class='calendar-date-events sk_fb_events_white_pop_up mfp-hide'></div>";

        // set the content of div
        sk_fb_event.find(".sk-calendar-events").html(calendarBody);

        // display month year label
        var month_name_text = currentMonthName;
        if (getDsmSetting(sk_fb_event, "translation") == "English - US") { month_name_text = getFullMonthName(month + 1); }
        if (getDsmSetting(sk_fb_event, "translation") == "Swedish") { month_name_text = getFullMonthSwedish(month + 1); }
        sk_fb_event.find(".sk_fb_events_month_view_title").html(month_name_text + " " + year);

        // hide loading image
        sk_fb_event.find('.first_loading_animation').hide();

        // change calendar style
        sk_fb_event.find(".sk-calendar-tbl-holder table td, .sk-calendar-tbl-holder table th").css({
            'backgroundColor': getDsmSetting(sk_fb_event, "details_bg_color"),
            'color': getDsmSetting(sk_fb_event, "details_font_color")
        });

        sk_fb_event.find(".sk-cal-btn, .cal-day-event, .sk_fb_events_calendar_today, .sk_cal_day_event_count").css({
            'backgroundColor': getDsmSetting(sk_fb_event, "button_bg_color"),
            'color': getDsmSetting(sk_fb_event, "button_text_color")
        });

        sk_fb_event.find(".sk-cal-empty-day, .sk-cal-highlight-day, .monthPre, .dayNames td").css({
            'border-bottom': '2px solid ' + getDsmSetting(sk_fb_event, "button_bg_color")
        });

        sk_fb_event.find(".cal-day-event, .sk_cal_day_event_count").css({
            'border': '2px solid ' + getDsmSetting(sk_fb_event, "cal_event_item_border_color")
        });

        sk_fb_event.find('.sk-cal-prev-month').html("<i class='fa fa-chevron-left'></i>");
        sk_fb_event.find('.sk-cal-next-month').html("<i class='fa fa-chevron-right'></i>");

        sk_fb_event.find('.container_sk_ww_search_events').show();
        sk_fb_event.find(".container_sk_ww_calendar_navigation").show();

        // watermark
        calendarBody += getSociableKITBranding(sk_fb_event, "Facebook page events <i class='fa fa-bolt'></i> by SociableKIT", "facebook page events");


        // change tab colors
        applyTabColors(jQuery, "month", sk_fb_event);
        applyCustomUi(jQuery, sk_fb_event);

        jQuery('.sk-fb-event .sk-cal-btn').removeClass('default_hidden');
        jQuery('.sk_ww_fb_events_date_picker').removeClass('default_hidden');
        jQuery('.sk_ww_search_events').removeClass('default_hidden');
        jQuery('.sk_ww_search_icon').removeClass('default_hidden');
    });
}function getCalendarDatePopUpContent(sk_fb_event, sk_current_day, data){

	var htmlContent = "";

	// pop up content
	htmlContent += "<div class='sk-cal-pop-up-content sk-cal-pop-up-content-" + sk_current_day + " sk_fb_events_white_pop_up mfp-hide'>";
	jQuery.each(data.events, function (key, val) {

		if (val['start_date'] == sk_current_day) {

			htmlContent += getPopUpHtml(val, sk_fb_event);

		}
	});
	htmlContent += "</div>";

	return htmlContent;
}function translateMonthName(eng_month_name, sk_fb_event){
     var month_name = "";

     if(eng_month_name=="JAN"){ month_name=getDsmSetting(sk_fb_event, "jan"); }
     else if(eng_month_name=="FEB"){ month_name=getDsmSetting(sk_fb_event, "feb"); }
     else if(eng_month_name=="MAR"){ month_name=getDsmSetting(sk_fb_event, "mar"); }
     else if(eng_month_name=="APR"){ month_name=getDsmSetting(sk_fb_event, "apr"); }
     else if(eng_month_name=="MAY"){ month_name=getDsmSetting(sk_fb_event, "may"); }
     else if(eng_month_name=="JUN"){ month_name=getDsmSetting(sk_fb_event, "jun"); }
     else if(eng_month_name=="JUL"){ month_name=getDsmSetting(sk_fb_event, "jul"); }
     else if(eng_month_name=="AUG"){ month_name=getDsmSetting(sk_fb_event, "aug"); }
     else if(eng_month_name=="SEP"){ month_name=getDsmSetting(sk_fb_event, "sep"); }
     else if(eng_month_name=="OCT"){ month_name=getDsmSetting(sk_fb_event, "oct"); }
     else if(eng_month_name=="NOV"){ month_name=getDsmSetting(sk_fb_event, "nov"); }
     else if(eng_month_name=="DEC"){ month_name=getDsmSetting(sk_fb_event, "dec"); }

     return month_name;
 }

 function translateDayName(eng_day_name, sk_fb_event){
     var day_name = "";

     if(eng_day_name=="Sun"){ day_name=getDsmSetting(sk_fb_event, "sun"); }
     else if(eng_day_name=="Mon"){ day_name=getDsmSetting(sk_fb_event, "mon"); }
     else if(eng_day_name=="Tue"){ day_name=getDsmSetting(sk_fb_event, "tue"); }
     else if(eng_day_name=="Wed"){ day_name=getDsmSetting(sk_fb_event, "wed"); }
     else if(eng_day_name=="Thu"){ day_name=getDsmSetting(sk_fb_event, "thu"); }
     else if(eng_day_name=="Fri"){ day_name=getDsmSetting(sk_fb_event, "fri"); }
     else if(eng_day_name=="Sat"){ day_name=getDsmSetting(sk_fb_event, "sat"); }

     return day_name;
 }


 function getFullMonthName(eng_month_name){
     var month_name = "";

     if(eng_month_name=="JAN" || eng_month_name=="01"){ month_name="January"; }
     else if(eng_month_name=="FEB" || eng_month_name=="02"){ month_name="February"; }
     else if(eng_month_name=="MAR" || eng_month_name=="03"){ month_name="March"; }
     else if(eng_month_name=="APR" || eng_month_name=="04"){ month_name="April"; }
     else if(eng_month_name=="MAY" || eng_month_name=="05"){ month_name="May"; }
     else if(eng_month_name=="JUN" || eng_month_name=="06"){ month_name="June"; }
     else if(eng_month_name=="JUL" || eng_month_name=="07"){ month_name="July"; }
     else if(eng_month_name=="AUG" || eng_month_name=="08"){ month_name="August"; }
     else if(eng_month_name=="SEP" || eng_month_name=="09"){ month_name="September"; }
     else if(eng_month_name=="OCT" || eng_month_name=="10"){ month_name="October"; }
     else if(eng_month_name=="NOV" || eng_month_name=="11"){ month_name="November"; }
     else if(eng_month_name=="DEC" || eng_month_name=="12"){ month_name="December"; }

     return month_name;
 }


 function getFullMonthSwedish(eng_month_name){

     var month_name = eng_month_name;

    if(eng_month_name=="JAN" || eng_month_name=="01"){ month_name="JAN"; }
    else if(eng_month_name=="FEB" || eng_month_name=="02"){ month_name="FEB"; }
    else if(eng_month_name=="MAR" || eng_month_name=="03"){ month_name="MARS"; }
    else if(eng_month_name=="APR" || eng_month_name=="04"){ month_name="APR"; }
    else if(eng_month_name=="MAY" || eng_month_name=="05"){ month_name="MAJ"; }
    else if(eng_month_name=="JUN" || eng_month_name=="06"){ month_name="JUN"; }
    else if(eng_month_name=="JUL" || eng_month_name=="07"){ month_name="JUL"; }
    else if(eng_month_name=="AUG" || eng_month_name=="08"){ month_name="AUG"; }
    else if(eng_month_name=="SEP" || eng_month_name=="09"){ month_name="SEP"; }
    else if(eng_month_name=="OCT" || eng_month_name=="10"){ month_name="OKT"; }
    else if(eng_month_name=="NOV" || eng_month_name=="11"){ month_name="NOV"; }
    else if(eng_month_name=="DEC" || eng_month_name=="12"){ month_name="DEC"; }

    return month_name;
 }




 function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}function skFbEventsShowFallbackImage(sk_fb_event){
     var embed_id = getDsmEmbedId(sk_fb_event);

     sk_fb_event.find(".photo-thumb").each(function() {

       var photo_thumb=jQuery(this);
       var bg = photo_thumb.css('background-image');
       bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");

       // check if image url redirects
       var xhr = new XMLHttpRequest();
       xhr.open('GET', bg, true);

       xhr.onreadystatechange = function () {

         // if it redirects, show fallback image
         if (this.readyState == 4 && this.status == 200) {
           var result_url = xhr.responseURL;
           if(result_url.indexOf('static.xx') !== -1){ //true

             // temporary fix
             if(embed_id==20304 || embed_id==20309){
               var fallback_img_url=app_url + "images/fallback_images/13466.jpg";
               photo_thumb.css('background-image', 'url("' + fallback_img_url + '")');
               photo_thumb.closest('.grid-item-facebook-event').find('.event-more-details .sk-event-details .sk_event_image_bg .read-one-event-img').attr('src', fallback_img_url);
             }

           }
         }
       };

       xhr.send();

     });
   }function renderEvents(jQuery, sk_fb_event,sk_cal_clicked) {

	var show_type = localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));
	var selected_date = localStorage.getItem("sk_fb_events_selected_date");
	var search_term = localStorage.getItem("search_term");

	var show_container = ".sk-upcoming-events";
	var hide_container = ".sk-past-events, .sk-search-events-results";

	var embed_id = getDsmEmbedId(sk_fb_event);
	var json_url = "";

	// check if there's a predefined search keyword
	var predefined_search_keyword = getDsmSetting(sk_fb_event, "predefined_search_keyword");



	json_url = app_url + "embed/facebook-events/widget_events_json.php?embed_id=" + embed_id + "&show=" + show_type + "&selected_date=" + selected_date + "&sk_cal_clicked=" + sk_cal_clicked + "&search_term=" + search_term;



	// containers
	injectBasicHtml(jQuery, sk_fb_event);

	// get events
	jQuery.getJSON(json_url, function (data) {
		// bring back tab text
		sk_fb_event.find(".tab-grid-events").html(getDsmSetting(sk_fb_event, "upcoming_events_tab_text"));
		sk_fb_event.find(".tab-list-events").html("List");

		// hide loading image
		sk_fb_event.find('.first_loading_animation').hide();
		// hide controls

		// one event
		var event_item = "";

		// mark events as loaded
		event_item += "<div class='sk_fb_events_grid_view_title'></div>";

		// if no events data
		if (data.message == "load failed") {

			sk_fb_event.html(data.instructions);
		}

		// if no upcoming events data
		else if (data.message == "No Data Found" ) {

			var show_past_if_no_upcoming = localStorage.getItem("sk_fb_events_show_past_if_no_upcoming");
			if (getDsmSetting(sk_fb_event, "show_past_if_no_upcoming_events") == 1 && show_past_if_no_upcoming == 1) {

				setTimeout(
					function () {
						var past_event_date_url = app_url + "embed/facebook-events/widget_get_past_event_date.php?embed_id=" + embed_id;
						jQuery.getJSON(past_event_date_url, function (data) {
							localStorage.setItem("sk_fb_events_selected_date", data.past_date);
							localStorage.setItem("sk_fb_events_show_past_if_no_upcoming", 0);
							renderEvents(jQuery, sk_fb_event, true);
						});
					}, 3000);
			}

			event_item += "<div class='no_events_found'>" + getDsmSetting(sk_fb_event, "no_upcoming_events_text") + "</div>";
		}

		// if there are events data
		else {

			var event_counter = 0;
			var post_count = getDsmSetting(sk_fb_event, 'post_count');
			var grid_items_html = "";

			event_item += "<div class='grid-facebook-event grid_sk_upcoming_events sk_fb_event_items_holder'>";

			if (show_type == 'slider') {

				grid_items_html += "<div class='sk_fb_events_next_page_url' style='display:none;'>" + data.page_info.next_page_url + "</div>";
				grid_items_html += renderSliderSkGoogleCalendar(sk_fb_event, data);


			} else {
				var temp_eid = "";
				jQuery.each(data.events, function (key, val) {
					var grid_item = getEventItem_SK(sk_fb_event, val);

					// event_item+=grid_item;
					grid_items_html += grid_item;
					event_counter++;

					temp_eid = val.eid;
				});
			}
			event_item += "</div>";

			// show 'load more' button if there's next page
			event_item += "<div class='sk_fb_events_load_more_btn_container'>";
			event_item += "<div class='sk_fb_events_next_page_url' style='display:none;'>" + data.page_info.next_page_url + "</div>";

			if (data.page_info.next_page_url != "" && getDsmSetting(sk_fb_event, "show_load_more_button") == 1 && show_type !== 'slider') {
				event_item += "<button class='sk_fb_events_load_more_btn' data-show='" + show_type + "'>" + getDsmSetting(sk_fb_event, "load_more_posts_text") + "</button>";
			}

			if (getDsmSetting(sk_fb_event, "show_bottom_follow_button") == 1) {
				event_item += "<button type='button' class='sk_fb_events_bottom_follow_btn' onclick=\"window.open('https://www.facebook.com/" + getDsmSetting(sk_fb_event, "fb_page_id") + "/');\">";
				event_item += "<i class='fa fa-facebook-official' aria-hidden='true'></i> " + getDsmSetting(sk_fb_event, "like_us_on_facebook_text");
				event_item += "</button>";
			}
			event_item += "</div>";
		}

		// watermark
		event_item += getSociableKITBranding(sk_fb_event, "Facebook page events <i class='fa fa-bolt'></i> by SociableKIT", "facebook page events");

		// show / hide container
		sk_fb_event.find(show_container).css({ 'display': 'block' });
		sk_fb_event.find(hide_container).css({ 'display': 'none' });

		// hide calendar view
		sk_fb_event.find(".sk-calendar-events").css({ 'display': 'none' });

		// show navigation and search
		sk_fb_event.find(".container_sk_ww_calendar_navigation").show();
		sk_fb_event.find('.container_sk_ww_search_events').show();

		// if failed to show events
		if (data.message == 'event load failed') {

			// remove tabs
			sk_fb_event.find('.sk_fb_events_options').hide();

			// show error message
			var sk_error_message = "";
			sk_error_message += "<ul class='sk_error_message'>";
			sk_error_message += "<li>Unable to load Facebook page events.</li>";
			sk_error_message += "<li>Make sure your <a href='https://www.sociablekit.com/get-find-facebook-page-id/' target='_blank'>Facebook page ID</a> is correct.</li>";
			sk_error_message += "<li>Make sure your Facebook page or pages (host and co-hosts) and Facebook events was set to public.</li>";
			sk_error_message += "<li>'Public' means there are no age or country restrictions on your Facebook pages.</li>";
			sk_error_message += "<li>If you need help, <a href='https://www.sociablekit.com/support' target='_blank'>contact support here</a>.</li>";
			sk_error_message += "</ul>";

			sk_fb_event.find(show_container).html(sk_error_message);
			sk_fb_event.find(".first_loading_animation").hide();
			applyTabColors(jQuery, show_type, sk_fb_event);

		}

		// show events to user
		else {
			// change html
			sk_fb_event.find(show_container).html(event_item);

			// next and prev date buttons
			sk_fb_event.find('.sk-cal-prev-month').html("<i class='fa fa-chevron-left'></i>");
			sk_fb_event.find('.sk-cal-next-month').html("<i class='fa fa-chevron-right'></i>");

			// empty current container and add event items to hidden container
			sk_fb_event.find('.grid_sk_upcoming_events').empty();
			sk_fb_event.find('.sk_fb_events_temp_event_items_holder').empty();
			// jQuery('.sk_fb_events_temp_event_items_holder').hide();
			sk_fb_event.find('.sk_fb_events_temp_event_items_holder').html(grid_items_html);

			initializeFlatpickr(sk_fb_event, selected_date);
			// set events from date
			if (getDsmSetting(sk_fb_event, "show_events_from_text") == 1) {
				var events_from_text = getDsmSetting(sk_fb_event, "events_from_text") + " " + data.selected_date;
				sk_fb_event.find(".sk_fb_events_grid_view_title").text(events_from_text);
			}

			applyMasonry(sk_fb_event);
			applyTabColors(jQuery, show_type, sk_fb_event);
			applyCustomUi(jQuery, sk_fb_event);
			jQuery('.sk-fb-event .sk-cal-btn').removeClass('default_hidden');
			jQuery('.sk_ww_fb_events_date_picker').removeClass('default_hidden');
			jQuery('.sk_ww_search_events').removeClass('default_hidden');
			jQuery('.sk_ww_search_icon').removeClass('default_hidden');
		}

	});

}

function getEventItem_SK(sk_fb_event, val) {
	var event_item = "";
	event_item += "<div class='grid-item-facebook-event'>";
	event_item += "<div class='grid-content'>";

	// event_item+="<div class='sk-fb-event-item' sk_fb_event_searchable='yes'>";

	event_item += "<div class='event-single-item'>";
	if (getDsmSetting(sk_fb_event, "show_image") == 1) {
		event_item += "<div url='https://www.facebook.com/" + val.eid + "' class='sk-fb-event-thumb-section padding-0'>";

		if (getDsmSetting(sk_fb_event, "show_date_badge") == 1) {
			event_item += "<div class='date-month'>";
			event_item += "<span class='date'>" + val.badge_day + "</span>";
			event_item += "<span class='month'>" + translateMonthName(val.badge_month, sk_fb_event) + "</span>";
			event_item += "</div>";
		}

		var link_start = "";
		var link_end = "";
		if(getDsmSetting(sk_fb_event, "open_details_on_facebook") == 1){
			link_start = "<a href='https://www.facebook.com/" + val.eid + "' target='_blank'>";
			link_end = "</a>";
		}

		if(val.pic_big != ""){
			if (getDsmSetting(sk_fb_event, "show_full_image") == 1){
				event_item += link_start + "<img src='" + val.pic_big + "' class='sk-w-100-pct bp-lt-bs-100' />" + link_end;
			}
			else {
				event_item += link_start + "<div class='photo-thumb' style=\"background-image: url('" + val.pic_big + "');\"></div>" + link_end;
			}
		}

		event_item += "</div>";
	}

	event_item += "<div class='sk-fb-event-initial-details-section event-details'>";

	if(getDsmSetting(sk_fb_event, "show_event_title") == 1){
		event_item += "<h2 class='title sk_ww_fb_events_title'>";
		event_item += val.name;
		event_item += "</h2>";
	}
	event_item += "<div style='color: " + getDsmSetting(sk_fb_event, "details_font_color") +" !important;' class='tag sk_ww_fb_events_date_time sk_ww_fb_events_date_time_"+val.event_time_id+" '>";
		if(getDsmSetting(sk_fb_event, "show_event_schedule") == 1)
			event_item += getUpcomingRecurredEvents(sk_fb_event,val);
		// event_item += "<i class='fa fa-calendar-o'></i> " + val.start_date + " @ " + val.start_time;

	event_item += "</div>";

	if (sk_fb_event.find('.show_location').text() == 1 && val.location) {
		if (sk_fb_event.find('.show_venue_only').text() == 1 && (val.event_venue != "" && val.event_venue != undefined)){
			val.location = val.event_venue;
		}

		event_item += "<div class='tag sk_ww_fb_events_location d-flex'>";
		event_item += "<div><i class='fa fa-map-o'></i></div><div class='map_icon_text_space'>" + val.location + "</div>";
		event_item += "</div>";
	}

	if (sk_fb_event.find('.show_hosted_by').text() == 1 && (val.host_id || val.host_link)) {
		event_item += "<div class='tag sk_ww_fb_events_hosted_by d-flex'>";
		event_item += "<div><i class='fa fa-circle-o'></i></div>";
		event_item += "<span class='location_icon_text_space'>" + sk_fb_event.find('.hosted_by_text').text() + " ";
		if (val.host_link) {
			event_item += "<a href='" + val.host_link + "' target='_blank'>" + val.host_name + "</a>";
		} else {
			event_item += "<a href='https://www.facebook.com/" + val.host_id + "/' target='_blank'>" + val.host_name + "</a>";
		}
		event_item += "</span>";
		event_item += "</div>";
	}

	if (sk_fb_event.find('.show_description').text() == 1 && val.description) {
		// limit char base on customer setting, if 0 value, dont limit
		var character_limit = sk_fb_event.find('.character_limit').text();
		var new_description = val.description.length > character_limit && character_limit != 0 ? val.description.substr(0, character_limit) +"..." : val.description;

		event_item += "<div class='tag sk_ww_fb_events_hosted_by d-flex'>";
		event_item += "<div><i class='fa fa-file-text-o'></i></div>";
		event_item += "<div>" + new_description + "</div>";
		event_item += "</div>";
	}

	// 'read more' and 'get tickets' buttons
	event_item += "<div class='tag event-btns'>";

	// popup details holder
	event_item += "<div class='event-details-popup' style='display:none;'";
	event_item += "data-event-id='" + val.eid + "' ";
	event_item += "data-embed-id='" + getDsmEmbedId(sk_fb_event) + "' ";
	event_item += "data-location=\"" + val.location + "\" ";
	event_item += "data-lati='" + val.event_lati + "' ";
	event_item += "data-longi='" + val.event_longi + "' ";
	event_item += ">";
	event_item += sk_fb_event.find('.read_more_text').text();
	event_item += "</div>";

	if (sk_fb_event.find('.show_read_more_button').text() == 1) {

		// open on a facebook link
		if (getDsmSetting(sk_fb_event, "open_details_on_facebook") == 1) {
			event_item += "<a href='https://www.facebook.com/" + val.eid + "' target='_blank' class='event-btn margin-right-1em'>";
			event_item += sk_fb_event.find('.read_more_text').text();
			event_item += "</a>";
		}

		// open on a pop up
		else {

			event_item += "<a href='javascript::void(0);' class='event-btn margin-right-1em read-more-btn' ";
			event_item += "data-event-id='" + val.eid + "' ";
			event_item += "data-embed-id='" + getDsmEmbedId(sk_fb_event) + "' ";
			event_item += "data-location=\"" + val.location + "\" ";
			event_item += "data-lati='" + val.event_lati + "' ";
			event_item += "data-longi='" + val.event_longi + "' ";
			event_item += ">";
			event_item += sk_fb_event.find('.read_more_text').text();
			event_item += "</a>";

			var start_time_text = "";
			if (val.start_time) {
				start_time_text = " " + val.start_time;
			} else {
				start_time_text = " <a href='https://www.facebook.com/" + val.eid + "' target='_blank'>View time on Facebook</a>";
			}

		}
	}

	if (sk_fb_event.find('.show_add_to_gcal_button').text() == 1) {
		// add to google calendar button
		event_item += "<a class='event-btn margin-right-1em add_to_google_calendar_btn' href=\"https://calendar.google.com/calendar/r/eventedit?";
		event_item += "text=" + encodeURI(val.name);
		event_item += "&dates=" + encodeURI(val.gcal_dates);
		event_item += "&details=" + encodeURI("For details, link here: https://facebook.com/" + val.eid);
		event_item += "&location=" + encodeURI(val.location);
		event_item += "&sf=true";
		event_item += "\" target='_blank'>";
		event_item += "Add to Google Calendar";
		event_item += "</a>";
	}

	if (sk_fb_event.find('.show_get_tickets_button').text() == 1) {
		if (val.ticket_uri != "") {
			event_item += "<a href='" + val.ticket_uri + "' class='event-btn get-tickets-btn' target='_blank'>";
			event_item += sk_fb_event.find('.get_tickets_text').text();
			event_item += "</a>";
		}
		else if (sk_fb_event.find('.default_tickets_link').text() != "") {
			event_item += "<a href='" + sk_fb_event.find('.default_tickets_link').text() + "' class='event-btn get-tickets-btn' target='_blank'>";
			event_item += sk_fb_event.find('.get_tickets_text').text();
			event_item += "</a>";
		}

	}
	event_item += "</div>";

	event_item += "</div>"; // END col-md-7 event-details
	event_item += "</div>"; // END row event-single-item

	event_item += "<div class='event-more-details'>";
		event_item += getPopUpHtml(val, sk_fb_event);
	event_item += "</div>";

	// event_item+="</div>"; // END sk-fb-event-item

	event_item += "</div>"; // END grid-item
	event_item += "</div>"; // END grid-item-facebook-event

	// apply google data structure
	jQuery('head').append('<script type="application/ld+json">' + val.google_data_structure_json + '</script>');

	return event_item;
	}

	// inject basic html
	function injectBasicHtml(jQuery, sk_fb_event) {

	// append tabs and containers if it does not yet exist in the dom
	if (sk_fb_event.find(".events-tabs").length == 0) {

		// tabs
		var basic_html = "";

		// if show menu button on mobile was check
		if (getDsmSetting(sk_fb_event, "show_date_picker") == 1
		) {
			basic_html += "<div class='sk_fb_events_options_btn default_hidden'><button class='mobile-btn-menu'>";
			basic_html += "<i class='fa fa-bars' aria-hidden='true'></i> Menu";
			basic_html += "</button></div>";
		}


		basic_html += "<div class='sk_fb_events_options'>";
		basic_html += "<div class='events-tabs'>";

		basic_html += "<div class='sk_fb_event_tab_option tab-list-events'></div>";
		basic_html += "<div class='sk_fb_event_tab_option tab-masonry-events'></div>";
		basic_html += "<div class='sk_fb_event_tab_option tab-grid-events'></div>";
		basic_html += "<div class='sk_fb_event_tab_option tab-slider-events'></div>";
		basic_html += "<div class='sk_fb_event_tab_option tab-calendar-events'></div>";

		// export calendar option
		var embed_id = getDsmEmbedId(sk_fb_event);

		basic_html += "<div class='sk_fb_event_tab_option tab-export-calendar'></div>";

		if (getDsmSetting(sk_fb_event, "show_states_dropdown") == 1) {
			// basic_html+=sk_fb_event.find(".u_states").html();
		}

		basic_html += "<div class='sk_ww_fb_page_events_export_options sk_fb_events_white_pop_up mfp-hide'>";
		basic_html += "<div class='sk_ww_fb_page_events_export_info'>";

		basic_html += exportTranslation(sk_fb_event, embed_id);

		basic_html += "</div>";

		basic_html += "</div>";

		basic_html += "</div>";
		basic_html += "</div>";
		basic_html += "</div>";

		basic_html += "<div class='container_sk_ww_calendar_navigation'>";

		if (getDsmSetting(sk_fb_event, "show_date_buttons") == 1) {
			basic_html += "<button class='default_hidden sk-cal-btn sk-cal-prev-month'>";
			basic_html += "<i class='fa fa-chevron-left' aria-hidden='true'></i>";
			basic_html += "</button>";
		}

		var date_picker_style = getDsmSetting(sk_fb_event, "show_date_picker") == 1 ? "" : "display:none !important;";
		basic_html += "<input type='text' class='default_hidden sk_ww_fb_events_date_picker' value='' style='" + date_picker_style + "' />";

		if (getDsmSetting(sk_fb_event, "show_date_buttons") == 1) {
			basic_html += "<button class='default_hidden sk-cal-btn sk-cal-next-month'>";
			basic_html += "<i class='fa fa-chevron-right' aria-hidden='true'></i>";
			basic_html += "</button>";
		}
		basic_html += "</div>";

		// search box
		if (getDsmSetting(sk_fb_event, "show_search_box") == 1) {
			basic_html += "<div class='container_sk_ww_search_events'>";
			basic_html += "<div class='container_sk_ww_input_and_icon'>";
			basic_html += "<form class='sk_ww_search_events_form'>";
			basic_html += "<input type='text' class='default_hidden sk_ww_search_events' ";
			basic_html += "placeholder=\"" + getDsmSetting(sk_fb_event, "search_events_text") + "\" value='' />";
			basic_html += "<i class='default_hidden fa fa-search sk_ww_search_icon' aria-hidden='true'></i>";
			basic_html += "<form>";
			basic_html += "</div>";
			basic_html += "<div class='sk_ww_search_no_upcoming_events' style='display:none;'>No upcoming events found. Try another keyword. Remove the keyword to show available events.</div>";
			basic_html += "<div class='sk_ww_search_no_past_events' style='display:none;'>No past events found. Try another keyword. Remove the keyword to show available events.</div>";
			basic_html += "</div>";
		}

		basic_html += "</div>";

		// events container
		basic_html += "<div class='sk-events sk-upcoming-events' style='display:none;'></div>";
		basic_html += "<div class='sk-events sk-calendar-events' style='display:none;'></div>";

		sk_fb_event.append(basic_html);
	}
}

function exportTranslation(sk_fb_event, embed_id){
    var export_calendar_url = app_url + "embed/facebook-events/widget_export_calendar.php?embed_id=" + embed_id;
	var export_calendar_webcal_url = export_calendar_url.replace("https://www.", "webcal://");
    var basic_html = "";
    var translation = getDsmSetting(sk_fb_event, 'translation');
    switch(translation) {
        case "Swedish":
            basic_html += "<div class='sk_fb_events_export_tab_title'>Exportera till Google-kalender</div>";

            basic_html += "<div class='container_sk_fb_events_export_tabs'>";
            basic_html += "<div class='sk_fb_events_export_tab sk_fb_events_export_tab_active' data-clicked-tab='download'>Ladda ner</div>";
            basic_html += "<div class='sk_fb_events_export_tab' data-clicked-tab='subscribe'>Prenumerera</div>";
            basic_html += "</div>";

            basic_html += "<div class='container_sk_fb_events_export_tab_content'>";

            basic_html += "<div class='sk_fb_events_export_tab_content sk_export_to_download' style='display:block;'>";

            basic_html += "Skaffa en kopia av vår aktuella evenemangskalender. ";
            basic_html += "Följ nedan enkla steg:<br /><br />";

            basic_html += "<b>Skapa ny kalender</b><br />";
            basic_html += "1. Ladda ner kalenderfilen här: <a href='" + export_calendar_url + "'>";
            basic_html += "ICS-fil";
            basic_html += "</a>.<br />";
            basic_html += "2. Öppna din <a href='https://calendar.google.com' target='_blank'>Google-kalender</a>.<br />";
            basic_html += "3. Se fältet \"Andra kalendrar\" på vänster sida.<br />";
            basic_html += "4. Klicka på plus (+)-ikonen > välj \"Skapa ny kalender\".<br />";
            basic_html += "5. Ange '" + getDsmSetting(sk_fb_event, "name") + "' som kalendernamn.<br />";
            basic_html += "6. Klicka på knappen \"Skapa kalender\".<br />";
            basic_html += "7. När du har skapat kalender, klicka på tillbaka-knappen.<br /><br />";

            basic_html += "<b>Importera kalender</b><br />";
            basic_html += "1. Se fältet \"Andra kalendrar\" på vänster sida.<br />";
            basic_html += "2. Klicka på plus (+)-ikonen > välj \"Importera\".<br />";
            basic_html += "3. Välj den ICS-fil som du laddade ner tidigare.<br />";
            basic_html += "4. Välj kalendernamnet som du skapade tidigare.<br />";
            basic_html += "5. Klicka på \"Importera\".<br />";
            basic_html += "6. Klar!";

            basic_html += "</div>";

            basic_html += "<div class='sk_fb_events_export_tab_content sk_export_to_subscribe'>";

            basic_html += "Få våra uppdateringar automatiskt. ";
            basic_html += " Följ nedan enkla steg: <br /><br />";

            basic_html += "<b>Lägg till kalender-URL</b><br />";
            basic_html += "1. Öppna din <a href='https://calendar.google.com' target='_blank'>Google-kalender</a>.<br />";
            basic_html += "2. Se fältet \"Andra kalendrar\" på vänster sida.<br />";
            basic_html += "3. Klicka på plus (+)-ikonen > välj \"Från webbadress\".<br />";
            basic_html += "4. Kopiera och klistra in följande länk i fältet \"Från webbadress\":<br /><b>" + export_calendar_webcal_url + "</b><br />";
            basic_html += "5. Klicka på knappen \"Lägg till kalender\". Laddningen kan ta 2-3 minuter.<br />";
            basic_html += "6. Uppdatera Google-kalendern efter 2-3 minuter.<br />";
            basic_html += "7. Se vänster sida om din kalender laddades.<br /><br />";
            break;
        default:
            basic_html += "<div class='sk_fb_events_export_tab_title'>Export to Google Calendar</div>";

            basic_html += "<div class='container_sk_fb_events_export_tabs'>";
            basic_html += "<div class='sk_fb_events_export_tab sk_fb_events_export_tab_active' data-clicked-tab='download'>Download</div>";
            basic_html += "<div class='sk_fb_events_export_tab' data-clicked-tab='subscribe'>Subscribe</div>";
            basic_html += "</div>";

            basic_html += "<div class='container_sk_fb_events_export_tab_content'>";

            basic_html += "<div class='sk_fb_events_export_tab_content sk_export_to_download' style='display:block;'>";

            basic_html += "Get a copy of our current events calendar. ";
            basic_html += "Follow the simple steps below.<br /><br />";

            basic_html += "<b>Create New Calendar</b><br />";
            basic_html += "1. Download the calendar file here: <a href='" + export_calendar_url + "'>";
            basic_html += "ICS File";
            basic_html += "</a>.<br />";
            basic_html += "2. Open your <a href='https://calendar.google.com' target='_blank'>Google Calendar</a>.<br />";
            basic_html += "3. On the left side, see \"Add friend's calendar\" field.<br />";
            basic_html += "4. Click the plus (+) icon > click \"New calendar\" option.<br />";
            basic_html += "5. Enter '" + getDsmSetting(sk_fb_event, "name") + "' as calendar name.<br />";
            basic_html += "6. Click the \"Create calendar\" button.<br />";
            basic_html += "7. Once created, click the back button.<br /><br />";

            basic_html += "<b>Import Calendar</b><br />";
            basic_html += "1. On the left side, see \"Add friend's calendar\" field.<br />";
            basic_html += "2. Click the plus (+) icon > click \"Import\" option.<br />";
            basic_html += "3. Select the ICS file we downloaded earlier.<br />";
            basic_html += "4. Select the calendar name we created earlier.<br />";
            basic_html += "5. Click 'Import' button.<br />";
            basic_html += "6. Done!";

            basic_html += "</div>";

            basic_html += "<div class='sk_fb_events_export_tab_content sk_export_to_subscribe'>";

            basic_html += "Receive our event updates automatically. ";
            basic_html += "Follow all the simple steps below.<br /><br />";

            basic_html += "<b>Add Calendar URL</b><br />";
            basic_html += "1. Open your <a href='https://calendar.google.com' target='_blank'>Google calendar</a>.<br />";
            basic_html += "2. On the left side, see \"Add friend's calendar\" field.<br />";
            basic_html += "3. Click the plus (+) icon > click \"From URL\" option.<br />";
            basic_html += "4. On \"URL of calendar\" field, copy and paste the following link:<br /><b>" + export_calendar_webcal_url + "</b><br />";
            basic_html += "5. Click 'Add Calendar' button. Loading will take 2-3 minutes.<br />";
            basic_html += "6. After 2-3 minutes, refresh Google calendar.<br />";
            basic_html += "7. See the left side if your calendar was loaded.<br /><br />";
    }
    return basic_html;
}function applyMasonry(sk_fb_event){
     var show_type=localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

     if(show_type=="slider"){

       applySliderLayout(sk_fb_event);

       return;
     }
     // apply new content
     var new_html=sk_fb_event.find('.sk_fb_events_temp_event_items_holder').html();
     sk_fb_event.find('.grid_sk_upcoming_events').html(new_html);

     // if grid or masonry layout or slider
     if(show_type=="grid" || show_type=="masonry" || show_type=="slider"){

         // arrange masonry
         var totalRows = getDsmSetting(sk_fb_event, "column_count");
         var sk_fb_event_width=sk_fb_event.width();
         if(sk_fb_event_width<=320){ totalRows=1; }
         else if(sk_fb_event_width<=481){ totalRows=1; }
         else if(sk_fb_event_width<=720){ totalRows=2; }

         var itemCol = 0, newCol='';
         for(var rowCount = 0; rowCount < totalRows; rowCount++){
             newCol = document.createElement('div');
             newCol.className = 'sk_fb_events_col';
             sk_fb_event.find('.grid_sk_upcoming_events').append(newCol);
         }

         var grid_item_length=sk_fb_event.find('.grid_sk_upcoming_events .grid-item-facebook-event').length;
         for(var itemCount = 0; itemCount < grid_item_length; itemCount++){

             var grid_item_first_element=sk_fb_event.find(".grid_sk_upcoming_events .grid-item-facebook-event:eq(0)");
             sk_fb_event.find(".grid_sk_upcoming_events .sk_fb_events_col:eq(" + itemCol + ")").append(grid_item_first_element);

             if(itemCol < totalRows - 1){ itemCol++;  }
             else{ itemCol = 0; }
         }
     }

     // if list layout
     else{

     }
 }//slider view
function renderSliderSkGoogleCalendar(sk_fb_event,data){
    var post_items = "";
    var arrow_color = getDsmSetting(sk_fb_event, "arrow_color");
    post_items+=  "<div style='padding-top: 40px;' id='sk_facebook_event_slider' class='swiper-container swiper-layout-slider'>";

    if(data.page_info.next_page_url != ""){

        post_items+="<button type='button' class='swiper-button-next ' style='pointer-events: all;'>";
            post_items+="<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>";
        post_items+="</button>";
    }
        post_items+="<button type='button' class='swiper-button-next-trigger display-none' style='pointer-events: all;'>";
        post_items+="<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>";
        post_items+="</button>";
        post_items+="<button type='button' class='swiper-button-prev' style='pointer-events: all;'>";
        post_items+="<i class='mfp-arrow mfp-arrow-left' aria-hidden='true'></i>";
        post_items+="</button>";
        post_items+=  "<div class='swiper-wrapper'>";
            post_items += "<div class='swiper-slide'>";
                post_items+="<div class='sk_facebook_event_slider_holder'>";
                    var temp_eids = [];
                    jQuery.each(data.events, function(key, val){
                        if(!temp_eids.includes(val.eid)){
                            post_items+="<div class='sk_fb_events_col'>";
                            post_items+=getEventItem_SK(sk_fb_event, val);
                            post_items+="</div>";
                            temp_eids.push(val.eid);
                        }
                    });
                post_items+="</div>";
            post_items+="</div>";

            //for autoplay
            if(data.page_info.next_page_url!="" && getDsmSetting(sk_fb_event, "autoplay") == 1){
                for(var i = 2; i <= data.page_info.pages ; i++){
                    var base_url = data.page_info.base_url + i;
                    post_items += "<div class='swiper-slide'>";
                          post_items+="<div class='sk_facebook_event_slider_holder page-"+i+"'>";
                          getAutoplaySlider(sk_fb_event,base_url);
                        post_items+="</div>";
                    post_items+="</div>";
                }
            }
        post_items+="</div>";

        // this div is the storage of solution settings autoplay make sure it is inside the swiper container
        // reason: website having more than 1 slider in web page

        post_items+="<div class='is_auto_play' style='display:none;'>"+data.page_info.is_auto_play+"</div>";

    post_items+="</div>";

    return post_items;
}
function getAutoplaySlider(sk_fb_event,base_url){

    var json_url = base_url;
    jQuery.getJSON(json_url, function(data){
        var html_item = "";
        jQuery.each(data.events, function(key, val){
            html_item+="<div class='sk_fb_events_col'>";
            html_item+=getEventItem_SK(sk_fb_event, val);
            html_item+="</div>";
        });

        sk_fb_event.find('.page-'+data.page_info.current_page).html(html_item);
        applyCustomUi(jQuery, sk_fb_event);
        applySliderLayout(sk_fb_event,'next_load');
    });
}
function skLayoutSliderSetting(sk_fb_event){
    jQuery('.swiper-container').each(function(index, element){

        // get the autoplay value of the solution
        var is_auto_play = jQuery(element).find('.is_auto_play').text();

        // set slider settings value
        var delay = getDsmSetting(sk_fb_event, "delay") * 1000;
        var autoplay = is_auto_play == 1 ? { delay: delay} : false;
        var loop     = is_auto_play == 1 ? true : false;
        // initiate settings
        var swiper = new Swiper(jQuery(element), {
            loop: loop,
            autoplay: autoplay,
            navigation: {
                nextEl: '.swiper-button-next-trigger',
                prevEl: '.swiper-button-prev',
            },

        });

        sk_fb_event.find(element).find('.swiper-button-next').click({swiper:swiper,sk_fb_event:sk_fb_event},skLayoutSliderNextClickEvent);
        sk_fb_event.find(element).find('.swiper-button-prev').click({swiper:swiper,sk_fb_event:sk_fb_event},skLayoutSliderPrevClickEvent);
    });
}
function clickEventSlider(sk_fb_event)
{
    var clicker = sk_fb_event.find('.swiper-button-next-trigger');
    var next_page = sk_fb_event.find('.sk_fb_events_next_page_url').text();
    var next_slide=sk_fb_event.find('.swiper-slide-next').text();
    if(next_page == "" && next_slide == ""){
        sk_fb_event.find('.swiper-layout-slider .swiper-button-next').css('visibility','hidden')
    }
    else{
        sk_fb_event.find('.swiper-layout-slider .swiper-button-next').css('visibility','visible')
    }
    skLayoutSliderArrowUI(sk_fb_event);
}
function skLayoutSliderPrevClickEvent(event)
{
    clickEventSlider(event.data.sk_fb_event);
    event.data.sk_fb_event.find('.swiper-button-next').html("<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>");
}
function skLayoutSliderNextClickEvent(event){

    var sk_fb_event = event.data.sk_fb_event;
    var swiper = event.data.swiper;

    var next_page=sk_fb_event.find('.sk_fb_events_next_page_url').text();
    var json_url = next_page;
    var next_btn = jQuery(this);
    var current_icon = next_btn.html();
    var text = sk_fb_event.find(".swiper-layout-slider .swiper-slide-next").text();
    if(text == "" && next_page !="")
    {
        jQuery.getJSON(json_url, function(data){
            var post_items = "";
            post_items+="<div class='sk_facebook_event_slider_holder'>";
                jQuery.each(data.events, function(key, val){
                    post_items+="<div class='sk_fb_events_col'>";
                    post_items+=getEventItem_SK(sk_fb_event, val);
                    post_items+="</div>";
                });
            post_items+="</div>";

            event.preventDefault();
            swiper.appendSlide('<div class="swiper-slide swiper-slide-next"></div>');
            sk_fb_event.find('.swiper-slide-next').html(post_items);
            next_btn.html(current_icon);
            sk_fb_event.find('.sk_fb_events_next_page_url').text(data.page_info.next_page_url);
            sk_fb_event.find('.swiper-button-next-trigger').removeClass('swiper-button-disabled').removeAttr('aria-disabled');
            sk_fb_event.find('.swiper-button-next-trigger').click();
            if(data.page_info.next_page_url == ""){
                sk_fb_event.find('.swiper-layout-slider .swiper-button-next').css('visibility','hidden')
            }

            applyCustomUi(jQuery, sk_fb_event);
            applySliderLayout(sk_fb_event,'next_load');
        });
    }
    else
    {
        sk_fb_event.find('.swiper-button-next-trigger').click();
        clickEventSlider(sk_fb_event);
        next_btn.html(current_icon);
    }
}
function sliderLayoutFeedItem(sk_fb_event){
    var new_html=sk_fb_event.find('.sk_fb_events_temp_event_items_holder').html();
    sk_fb_event.find('.sk_fb_events_temp_event_items_holder').html("");
    sk_fb_event.find('.grid_sk_upcoming_events').html(new_html);
}

function applySliderLayout(sk_fb_event){
    var count_swiper = sk_fb_event.find('.swiper-slide-active').length;
    if(count_swiper == 0){
         sliderLayoutFeedItem(sk_fb_event);
         skLayoutSliderSetting(sk_fb_event);
    }
}
function skLayoutSliderArrowUI(sk_fb_event){
    var arrow_background_color = getDsmSetting(sk_fb_event, "arrow_background_color");
    var arrow_color = getDsmSetting(sk_fb_event, "arrow_color");
    var arrow_opacity = getDsmSetting(sk_fb_event, "arrow_opacity");
    // Apply Opacity
    jQuery(".swiper-button-next,.swiper-button-prev")
        .mouseover(function(){
            jQuery(this).css({
              "opacity":"1"
            });

        }).mouseout(function(){
            jQuery(this).css({
              "opacity":"1"
            });
    });
    var h = sk_fb_event.find(".swiper-slide-active .sk_fb_events_col").height();

    // Get the height
    var feed_h = sk_fb_event.find('.swiper-slide-active .sk_facebook_event_slider_holder').innerHeight();
    // Solution for image cutting
    sk_fb_event.find(".swiper-wrapper,.swiper-slide-active").css({
        "height":feed_h  +"px"
    });

    sk_fb_event.css("width","100%");
    // position button to center
    var feed_h_2 = feed_h / 2;
    sk_fb_event.find(".swiper-button-prev,.swiper-button-next").css({
        "opacity": "1",
        "background-color":"transparent"
    });

    sk_fb_event.find(".swiper-button-next").css({
        "right": "-23px"
    });

    sk_fb_event.find(".swiper-button-prev").css({
        "left": "-22px"
    });

    // button reposition
    sk_fb_event.find(".swiper-button-prev,.swiper-button-next").css({
        "top":feed_h_2 +"px",
        "right":parseFloat(sk_fb_event.find(".space_between_images").text())*2 +"px"
    });
}function applyCustomUi(jQuery, sk_fb_event){
    skFbEventsShowFallbackImage(sk_fb_event);

    // change height to normal
    sk_fb_event.css({'height' : 'auto'});

    // tab titles
    sk_fb_event.find('.tab-grid-events').text(getDsmSetting(sk_fb_event, "grid_view_text"));
    sk_fb_event.find('.tab-masonry-events').text(getDsmSetting(sk_fb_event, "masonry_view_text"));
    sk_fb_event.find('.tab-list-events').text(getDsmSetting(sk_fb_event, "list_view_text"));
    sk_fb_event.find('.tab-calendar-events').text(getDsmSetting(sk_fb_event, "month_view_text"));
    sk_fb_event.find('.tab-export-calendar').html(getDsmSetting(sk_fb_event, "export_calendar_text"));

    sk_fb_event.find('.tab-slider-events').html("Slider");

    // show / hide tabs
    if(getDsmSetting(sk_fb_event, "show_list_view")==0){ sk_fb_event.find('.tab-list-events').hide(); }
    if(getDsmSetting(sk_fb_event, "show_masonry_view")==0){ sk_fb_event.find('.tab-masonry-events').hide(); }
    if(getDsmSetting(sk_fb_event, "show_grid_view")==0){ sk_fb_event.find('.tab-grid-events').hide(); }
    if(getDsmSetting(sk_fb_event, "show_month_view")==0){ sk_fb_event.find('.tab-calendar-events').hide(); }
    if(getDsmSetting(sk_fb_event, "show_export_calendar_button")==0){ sk_fb_event.find('.tab-export-calendar').hide(); }
    if(getDsmSetting(sk_fb_event, "show_slider_view")==0){ sk_fb_event.find('.tab-slider-events').hide(); }


    // change css based on customization settings
    // fonts
    sk_fb_event.css({
        'font-family' : getDsmSetting(sk_fb_event, "font_family"),
        'background-color' : getDsmSetting(sk_fb_event, "list_bg_color"),
        'color' : getDsmSetting(sk_fb_event, "feed_font_color")
    });

    var arrow_background_color = getDsmSetting(sk_fb_event, "arrow_background_color");
    var arrow_color = getDsmSetting(sk_fb_event, "arrow_color");
    var arrow_opacity = getDsmSetting(sk_fb_event, "arrow_opacity");

    var css = ".mfp-arrow-right:before { border-left: 27px solid "+arrow_background_color+" !important; }";
    css+=".fp-arrow-right:before {border-left: 27px solid "+arrow_background_color+" !important;}.mfp-arrow:after {border-top-width: 13px;border-bottom-width: 13px;top: 8px;}";
    css+=".mfp-arrow-right:after {opacity: "+arrow_opacity+"; border-left: 17px solid "+arrow_color+" !important;margin-left: 39px!important;}";
    css+=".mfp-arrow-left:after {opacity: "+arrow_opacity+"; border-right: 17px solid "+arrow_color+" !important;margin-left: 31px!important;}";
    css+=".mfp-arrow-left:before {margin-left: 25px!important;border-right: 27px solid "+arrow_background_color+" !important;}";
    css+=".swiper-button-prev, .swiper-button-next{border: none !important;}";

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    jQuery(".more-desc").click(function () {
        var el = this;
        if(el.innerText == "Show more"){
            el.innerText = "Show less";
            jQuery(".tingle-modal-box__content").find(".show_more_false").addClass("show_more_true");
            jQuery(".tingle-modal-box__content").find(".show_more_false").removeClass("show_more_false");
            jQuery(".complete-desc").css({'display':'block'});
        }
        else{
            el.innerText = "Show more";
            jQuery(".tingle-modal-box__content").find(".show_more_true").addClass("show_more_false");
            jQuery(".tingle-modal-box__content").find(".show_more_true").removeClass("show_more_true");
            jQuery(".complete-desc").css({'display':'none'});
        }
    });

    // event title
    if(getDsmSetting(sk_fb_event, "title_all_caps")==1){
        sk_fb_event.find('.title').css({
            'color' : getDsmSetting(sk_fb_event, "title_font_color"),
            'font-size' : getDsmSetting(sk_fb_event, "title_font_size") + 'px',
            'font-family' : getDsmSetting(sk_fb_event, "font_family"),
            'line-height' : getDsmSetting(sk_fb_event, "title_line_height") + 'px',
            'text-transform' : 'uppercase'
        });
    }
    else{
        sk_fb_event.find('.title').css({
            'color' : getDsmSetting(sk_fb_event, "title_font_color"),
            'font-size' : getDsmSetting(sk_fb_event, "title_font_size") + 'px',
            'font-family' : getDsmSetting(sk_fb_event, "font_family"),
            'line-height' : getDsmSetting(sk_fb_event, "title_line_height") + 'px'
        });
    }

    sk_fb_event.find('.sk_fb_events_grid_view_title,.no_events_found').css({
        'color' : getDsmSetting(sk_fb_event, "feed_font_color")
    });
     // datepicker style
    sk_fb_event.find('.sk_ww_fb_events_date_picker').css({
        'color' : getDsmSetting(sk_fb_event, "date_picker_font_color"),
        'background-color' : getDsmSetting(sk_fb_event, "date_picker_background")
    });

    // calendar view go button
    sk_fb_event.find('.sk_fb_event_cal_btn_select').css({
        'color' : getDsmSetting(sk_fb_event, "details_font_color")
    });

    // event details section
    sk_fb_event.find('.sk-fb-event-initial-details-section').css({
        'padding' : getDsmSetting(sk_fb_event, "event_details_padding") + 'px'
    });

    // image height
    sk_fb_event.find('.sk-fb-event-thumb-section .photo-thumb').css({
        'height' : getDsmSetting(sk_fb_event, "image_height") + 'px'
    });

    //month_year_alignment
    var month_year_alignment = getDsmSetting(sk_fb_event, "month_year_alignment");

    sk_fb_event.find('.sk_fb_events_month_view_title').css({
        'text-align' : month_year_alignment,
         'padding-right' : month_year_alignment=='right' ? "10px" : '',
    });

    // event detail font size
    if(getDsmSetting(sk_fb_event, "details_all_caps")==1){
         sk_fb_event.find('.event-single-item .tag span').css({
             'font-size' : getDsmSetting(sk_fb_event, "details_font_size") + 'px',
             'color' : getDsmSetting(sk_fb_event, "details_font_color"),
             'text-transform' : 'uppercase'
         });
    }else{
         sk_fb_event.find('.event-single-item .tag span').css({
             'font-size' : getDsmSetting(sk_fb_event, "details_font_size") + 'px',
             'color' : getDsmSetting(sk_fb_event, "details_font_color")
         });
         sk_fb_event.find('.event-single-item .tag').css({
             'font-size' : getDsmSetting(sk_fb_event, "details_font_size") + 'px',
             'color' : getDsmSetting(sk_fb_event, "details_font_color")
         });
    }

    sk_fb_event.find('.event-single-item .tag').css({
         'line-height' : getDsmSetting(sk_fb_event, "details_line_height") + 'px',
         'letter-spacing' : getDsmSetting(sk_fb_event, "letter_spacing") + 'px',
    });

    // details bg color
    sk_fb_event.find('.event-single-item').css({
        'background-color' : getDsmSetting(sk_fb_event, "details_bg_color")
    });

    // icons
    sk_fb_event.find('.event-single-item .fa').css({
        'color' : getDsmSetting(sk_fb_event, "details_icons_color")
    });

    // hide icons
    if(getDsmSetting(sk_fb_event, "show_box_shadow")==0){
        sk_fb_event.find('.grid-content').css({'-webkit-box-shadow' : 'none', '-moz-box-shadow' : 'none', 'box-shadow' : 'none'});
    }

    // hide icons
    if(getDsmSetting(sk_fb_event, "show_icons")==0){
        sk_fb_event.find('.sk-fb-event-item .fa, .event-single-item .fa').css({ 'display' : 'none' });
        sk_fb_event.find('.event-single-item .tag span').css({ 'margin' : '0 20px 0 0' });
    }

    // .sk-fb-event-item
    sk_fb_event.find('.sk-fb-event-item, .sk_powered_by').css({ 'margin-bottom' : getDsmSetting(sk_fb_event, "space_between_events") + 'px' });

    // date badge
    if(getDsmSetting(sk_fb_event, "date_badge_position")=="Inner Left"){
         sk_fb_event.find('.date-month').css({
             'top' : '10px'
         });
    }

    else if(getDsmSetting(sk_fb_event, "date_badge_position")=="Right"){
        sk_fb_event.find('.date-month').css({
             'right' : '10px',
             'left' : 'inherit'
        });
    }

     else if(getDsmSetting(sk_fb_event, "date_badge_position")=="Inner Right"){
         sk_fb_event.find('.date-month').css({
             'right' : '10px',
             'top' : '10px',
             'left' : 'inherit'
         });
     }

    // links
    sk_fb_event.find('.event-single-item a').css({ 'color' : getDsmSetting(sk_fb_event, "details_link_color") });

    // link hover
    sk_fb_event.find('.event-single-item a').hover(function(){
         jQuery(this).css({ 'color' : getDsmSetting(sk_fb_event, "details_link_hover_color") });
    }, function(){
         jQuery(this).css({ 'color' : getDsmSetting(sk_fb_event, "details_link_color") });
    });

    // button
    sk_fb_event.find('.event-single-item .event-btn, .sk_fb_events_load_more_btn, .sk_fb_events_bottom_follow_btn').css({
         'background-color' : getDsmSetting(sk_fb_event, "button_bg_color"),
         'border' : '1px solid ' + getDsmSetting(sk_fb_event, "button_bg_color"),
         'color' : getDsmSetting(sk_fb_event, "button_text_color"),
         'font-size' : getDsmSetting(sk_fb_event, "details_font_size") + 'px',
         'font-family' : getDsmSetting(sk_fb_event, "font_family"),
         'border-radius' : getDsmSetting(sk_fb_event, "button_border_radius") + 'px'
    });

    // button hover
    sk_fb_event.find('.event-single-item .event-btn, .sk_fb_events_load_more_btn, .sk_fb_events_bottom_follow_btn').hover(function(){
         jQuery(this).css({
             'background-color' : getDsmSetting(sk_fb_event, "button_hover_bg_color"),
             'border' : '1px solid ' + getDsmSetting(sk_fb_event, "button_hover_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "button_hover_text_color")
         });

    }, function(){
         jQuery(this).css({
             'background-color' : getDsmSetting(sk_fb_event, "button_bg_color"),
             'border' : '1px solid ' + getDsmSetting(sk_fb_event, "button_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "button_text_color"),
             'font-size' : getDsmSetting(sk_fb_event, "details_font_size") + 'px',
             'font-family' : getDsmSetting(sk_fb_event, "font_family")
         });
    });

    // next prev button
    sk_fb_event.find('.sk-cal-btn,.mobile-btn-menu').css({
         'background-color' : getDsmSetting(sk_fb_event, "button_bg_color"),
         'color' : getDsmSetting(sk_fb_event, "button_text_color")
    });

    // next prev button hover
    sk_fb_event.find('.sk-cal-btn').hover(function(){
         jQuery(this).css({
             'background-color' : getDsmSetting(sk_fb_event, "button_hover_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "button_hover_text_color")
         });
    }, function(){
         jQuery(this).css({
             'background-color' : getDsmSetting(sk_fb_event, "button_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "button_text_color")
         });
    });


    // date badge
    sk_fb_event.find('.event-single-item .date-month .date').css({
         'background-color' : getDsmSetting(sk_fb_event, "badge_day_bg_color"),
         'color' : getDsmSetting(sk_fb_event, "badge_day_text_color"),
         'border-top-left-radius' : getDsmSetting(sk_fb_event, "badge_border_radius") + 'px',
         'border-top-right-radius' : getDsmSetting(sk_fb_event, "badge_border_radius") + 'px'
    });

    // month badge
    sk_fb_event.find('.event-single-item .date-month .month').css({
         'background-color' : getDsmSetting(sk_fb_event, "badge_month_bg_color"),
         'color' : getDsmSetting(sk_fb_event, "badge_month_text_color"),
         'border-bottom-left-radius' : getDsmSetting(sk_fb_event, "badge_border_radius") + 'px',
         'border-bottom-right-radius' : getDsmSetting(sk_fb_event, "badge_border_radius") + 'px'
    });

    // event detail font size
    sk_fb_event.find('.event-more-details').css({
         'font-size' : (parseFloat(getDsmSetting(sk_fb_event, "details_font_size")) - parseFloat(1)) + 'px',
         'border-left' : '1px solid ' + getDsmSetting(sk_fb_event, "details_bg_color"),
         'border-right' : '1px solid ' + getDsmSetting(sk_fb_event, "details_bg_color"),
         'border-bottom' : '1px solid ' + getDsmSetting(sk_fb_event, "details_bg_color")
    });


    skCalendarViewTableSpacing(jQuery, sk_fb_event);
    applyPopUpUi(jQuery, sk_fb_event);

    // states drop down
    sk_fb_event.find('.sk_fb_event_u_states').css({ 'display' : 'inline' });

    // margin bottom of event items
    sk_fb_event.find('.grid-item-facebook-event').css({ 'margin-bottom' : getDsmSetting(sk_fb_event, "space_between_events") + 'px' });

    // apply custom css
    jQuery('head').append('<style type="text/css">' + getDsmSetting(sk_fb_event, "custom_css")  + '</style>');

     // make list layout responsive
    mediaQueryJs(jQuery, sk_fb_event);
    makeLayoutResponsive(jQuery, sk_fb_event);

    if(jQuery(document).width() <= 441)
        jQuery('.sk_ww_fb_events_date_picker').width(jQuery(document).width()-128);
}

function applyTabColors(jQuery, show_type, sk_fb_event){

    if(show_type=='grid'){

        sk_fb_event.find('.tab-grid-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "tab_text_color")
        });

        sk_fb_event.find('.tab-list-events, .tab-masonry-events, .tab-calendar-events, .tab-export-calendar,.tab-slider-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "inactive_tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "inactive_tab_text_color")
        });
    }

    else if(show_type=='masonry'){

        sk_fb_event.find('.tab-masonry-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "tab_text_color")
        });

        sk_fb_event.find('.tab-list-events, .tab-grid-events, .tab-calendar-events, .tab-export-calendar,.tab-slider-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "inactive_tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "inactive_tab_text_color")
        });
    }

    else if(show_type=='list'){
         sk_fb_event.find('.tab-list-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "tab_text_color")
         });

         sk_fb_event.find('.tab-masonry-events, .tab-grid-events, .tab-calendar-events, .tab-export-calendar,.tab-slider-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "inactive_tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "inactive_tab_text_color")
         });
    }

    else if(show_type=='month'){
         sk_fb_event.find('.tab-calendar-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "tab_text_color")
         });

         sk_fb_event.find('.tab-list-events, .tab-grid-events, .tab-masonry-events, .tab-export-calendar,.tab-slider-events').css({
             'background-color' : getDsmSetting(sk_fb_event, "inactive_tab_bg_color"),
             'color' : getDsmSetting(sk_fb_event, "inactive_tab_text_color")
         });
    }

    else if(show_type=='slider'){

       sk_fb_event.find('.tab-slider-events').css({
           'background-color' : getDsmSetting(sk_fb_event, "tab_bg_color"),
           'color' : getDsmSetting(sk_fb_event, "tab_text_color")
       });

       sk_fb_event.find('.tab-calendar-events, .tab-list-events, .tab-grid-events, .tab-masonry-events, .tab-export-calendar').css({
           'background-color' : getDsmSetting(sk_fb_event, "inactive_tab_bg_color"),
           'color' : getDsmSetting(sk_fb_event, "inactive_tab_text_color")
       });
    }

    // show tabs
    sk_fb_event.find('.events-tabs').show();
}

function skCalendarViewTableSpacing(jQuery, sk_fb_event){

    var month_view_border_spacing = getDsmSetting(sk_fb_event, "month_view_border_spacing");
    sk_fb_event.find('.sk-calendar-tbl').attr('style','border-spacing: '+month_view_border_spacing+'px !important;');
}
 function applyPopUpUi(jQuery, sk_fb_event){

    jQuery('.mfp-content').css({
         'font-family' : getDsmSetting(sk_fb_event, "font_family"),
         'font-size' : getDsmSetting(sk_fb_event, "details_font_size") + 'px'
    });

    jQuery('.mfp-close').css({
         'display' :"block",
    });

    sk_fb_event.find('.sk_ww_fb_events_date_time').find('div.sk-m-r-15px').hide();
    sk_fb_event.find('.sk_ww_fb_events_date_time').find('div.sk-m-r-15px:lt(3)').show();
    sk_fb_event.find('.sk_ww_fb_events_date_time').find('.sk-m-r-15px span').attr('style','margin-left:4px;');
    sk_fb_event.find('.sk_ww_fb_events_date_time').find('.sk-m-r-15px span:first').attr('style','color : ' + getDsmSetting(sk_fb_event, "details_font_color"));


    sk_fb_event.find('.sk_fb_event_popup_time').find('a.read-more-btn').closest('div').remove();
    sk_fb_event.find('.sk_fb_event_popup_time').find('.sk-m-r-15px span').attr('style','margin-left:20px;');
    sk_fb_event.find('.sk_fb_event_popup_time').find('.sk-m-r-15px:first span').attr('style','margin-left:8px;');
}

function initializeFlatpickr(sk_fb_event, selected_date){
    if(typeof flatpickr==="undefined"){

        sk_fb_event.find(".sk_ww_fb_events_date_picker").val(selected_date);
    }

    else{

        var start_day_number = 0;

        var week_short_had   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var week_long_had    = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
        var month_short_hand = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var month_long_hand  =  ['January', 'Feburuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var dateFormat = sk_fb_event.find(".date_format").text();
        if(dateFormat){
            dateFormat = dateFormat.replace('jS','J');
        }
        if(sk_fb_event.find(".translation").text() == "Swedish"){

            week_short_had   = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
            week_long_had    = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
            month_short_hand = ['Jan', 'Feb', 'Mars', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
            month_long_hand  =  ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
        }

        if(sk_fb_event.find('.start_calendar_on_monday').text() == 1 ){
            start_day_number = 1;
        }


        flatpickr(".sk_ww_fb_events_date_picker", {
            defaultDate: selected_date,
            allowInput: true,
            format: dateFormat,
            altFormat: dateFormat,
            altInput: true,
            locale: {
                firstDayOfWeek: start_day_number,
                weekdays: {
                    shorthand: week_short_had,
                    longhand: week_long_had
                },
                months: {
                  shorthand: month_short_hand ,
                  longhand: month_long_hand
                },
            },

            onOpen: function(selectedDates, dateStr, instance){
                jQuery('.flatpickr-calendar').css({
                    'font-family' : getDsmSetting(sk_fb_event, "font_family")
                });
            }
        });
    }
}    function main(){

     // manipulate page using jQuery
     jQuery(document).ready(function($){
        localStorage.setItem("user_searched", "0");
         jQuery('.sk-fb-event').each(function() {
             // vars
             var sk_fb_event=jQuery(this);
             var embed_id = getDsmEmbedId(sk_fb_event);

             // update views
             jQuery.getJSON(app_url + "embed/update_views.php?embed_id=" + embed_id, function(data){});

             // change height to be more than current window
             var new_sk_fb_event_width=jQuery(window).height() + 100;
             sk_fb_event.height(new_sk_fb_event_width);

             // get current url
             var current_url=encodeURIComponent(window.location.href);

             // get settings
             var json_url=app_url + "embed/facebook-events/widget_settings_json.php?embed_id=" + embed_id + "&current_url=" + current_url;

             jQuery.getJSON(json_url, function(data){

             // load google font
             var web_safe_fonts = [
               "Inherit", "Impact, Charcoal, sans-serif", "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
               "Century Gothic, sans-serif", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "Verdana, Geneva, sans-serif",
               "Copperplate, 'Copperplate Gothic Light', fantasy", "'Courier New', Courier, monospace", "Georgia, Serif"
             ];

             var is_font_included = web_safe_fonts.indexOf(data.font_family);
             if(is_font_included<0){ loadCssFile("https://fonts.googleapis.com/css?family=" + data.font_family); }

                 var data_settings = data;

                 if(data.show_feed==false){

                     sk_fb_event.prepend(data.message);
                     sk_fb_event.find('.loading-img').hide();
                     sk_fb_event.find('.first_loading_animation').hide();
                 }

                 else{

                     // save some settings in html
                     var settings_html="";

                     // settings for easy access
                     // loop through settings from SociableKITserver
                     settings_html+="<div style='display:none;' class='display-none sk-settings'>";
                         jQuery.each(data, function(key, value){
                             settings_html+="<div class='" + key + "'>" + value + "</div>";

                         });

                         // all u.states
                         var u_states="<select class='sk_fb_event_u_states'>";
                             u_states+="<option value='0'>Select state...</option>";
                             jQuery.each(data.states, function(key, value){
                                 u_states+="<option value='" + value + "'>" + value + "</option>";
                             });
                         u_states+="</select>";
                         // settings_html+="<div class='u_states'>" + u_states + "</div>";

                     settings_html+="</div>";
                     settings_html+="<div style='display:none;' class='sk_fb_events_temp_event_items_holder'></div>";

                     if(sk_fb_event.find('.sk-settings').length){

                     }else{
                       sk_fb_event.prepend(settings_html);
                     }

                     // empty search term on first load
                     localStorage.setItem("search_term", "");

                     // set date today as selected date
                     var date_today=getTodayYmd();

                     // special case
                     if(embed_id==10845){ date_today="2014-12-15"; }
                     else if(embed_id==10815){ date_today="2017-11-11"; }

                     localStorage.setItem("sk_fb_events_selected_date", date_today);

                     // needed to prevent infitinte loop
                     localStorage.setItem("sk_fb_events_show_past_if_no_upcoming", 1);

                     // empty settings
                     settings_html="";

                     // get hashtag
                     if(window.location.hash=="#calendar"){
                         // load calendar

                         injectBasicHtml(jQuery, sk_fb_event);
                         renderCalendar(jQuery, sk_fb_event);
                     }

                     else{

                         // grid view
                         if(data.default_view=='list'){
                             localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event) , "list");
                             renderEvents(jQuery, sk_fb_event, false);
                         }

                         // list view
                         else if(data.default_view=='masonry'){
                             localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event) , "masonry");
                             renderEvents(jQuery, sk_fb_event, false);
                         }

                         // grid view
                         else if(data.default_view=='grid'){
                             localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event) , "grid");
                             renderEvents(jQuery, sk_fb_event, false);
                         }
                         // slider
                         else if(data.default_view=='slider'){

                           localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event) , "slider");
                           renderEvents(jQuery, sk_fb_event, false);

                         }
                         // month view
                         else if(data.default_view=='month'){
                             // load calendar
                             injectBasicHtml(jQuery, sk_fb_event);
                             localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "month");
                             renderCalendar(jQuery, sk_fb_event);
                         }

                         // default to list view
                         else{
                             localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "list");
                             renderEvents(jQuery, sk_fb_event, false);
                         }
                     }
                 }
             });



         });

         jQuery(document).on('click', '.swiper-button-next', function(){
            jQuery(this).find('i').attr("class","fa fa-spinner fa-pulse fa-1x fa-fw");
            var orig_top = jQuery(this).css('top').replace("px","");
            jQuery(this).css({"right":"30px", "top":orig_top-20+"px"});
            jQuery(this).css({"color":"black"});
            setTimeout(function(){
                jQuery('.swiper-button-next').css({"right":"-20px"});
                jQuery(this).find('i').attr("class","mfp-arrow mfp-arrow-right");
            },100);
        });

        jQuery(document).on('click', '.device_btn, #expand', function(){
            // applyMasonry(jQuery('.sk-fb-event'));
            applyCustomUi(jQuery, jQuery('.sk-fb-event'));
            // mediaQueryJs(jQuery, jQuery('.sk-fb-event'));
        });

         // resize elements in real time
         jQuery(window).resize(function() {

             jQuery('.sk-fb-event').each(function() {
                 var sk_fb_event=jQuery(this);
                 applyMasonry(sk_fb_event);
                 applyCustomUi(jQuery, sk_fb_event);
                 mediaQueryJs(jQuery, sk_fb_event);
                 console.log("change")
             });
         });

        jQuery(document).on('click', '.mobile-btn-menu', function () {
        if(jQuery(this).find('i.fa-bars').length>0){
            var el = jQuery(this).find('i.fa-bars');
            el.removeClass("fa-bars");
            el.addClass("fa-close");
        }else{
            var el = jQuery(this).find('i.fa-close');
            el.removeClass("fa-close");
            el.addClass("fa-bars");
        }
});

jQuery(document).on('click', '.sk_fb_events_export_tab', function () {

    // clicked element
    var sk_fb_events_export_tab = jQuery(this);

    // highlight tab
    sk_fb_events_export_tab.closest('.container_sk_fb_events_export_tabs')
        .find('.sk_fb_events_export_tab').removeClass('sk_fb_events_export_tab_active');
    sk_fb_events_export_tab.addClass('sk_fb_events_export_tab_active');

    // show tab content
    var clicked_tab = sk_fb_events_export_tab.attr('data-clicked-tab');

    // hide all content
    jQuery('.sk_fb_events_export_tab_content').hide();

    // show one content
    jQuery('.sk_export_to_' + clicked_tab).show();

});

jQuery(document).on('click', '.sk-fb-event .sk_fb_events_load_more_btn', function () {

    var sk_fb_events_load_more_btn = jQuery(this);
    var show_type = sk_fb_events_load_more_btn.attr('data-show');
    var sk_fb_event = sk_fb_events_load_more_btn.closest('.sk-fb-event');;
    var next_page_url = sk_fb_events_load_more_btn.closest('.sk_fb_events_load_more_btn_container').find('.sk_fb_events_next_page_url').text();
    var event_item = "";
    var show_type = localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

    sk_fb_events_load_more_btn.html(getDsmSetting(sk_fb_event, "loading_text"));
    jQuery.getJSON(next_page_url, function (data) {

        jQuery.each(data.events, function (key, val) {
            event_item += getEventItem_SK(sk_fb_event, val);
        });

        applyMasonry(sk_fb_event);

        // if list layout
        if (show_type == "list") {
            var new_html = sk_fb_event.find('.sk_fb_events_temp_event_items_holder').append(event_item);
        }

        // if grid / masonry layout
        else {
            var new_html = sk_fb_event.find('.sk_fb_events_temp_event_items_holder').append(event_item);
        }

        applyMasonry(sk_fb_event);

        // if there is next page, show load more btn again
        if (data.page_info.next_page_url) {

            // set next page
            sk_fb_events_load_more_btn.closest('.sk_fb_events_load_more_btn_container')
                .find('.sk_fb_events_next_page_url').text(data.page_info.next_page_url);

            // show button text
            sk_fb_events_load_more_btn.html(getDsmSetting(sk_fb_event, "load_more_posts_text"));
        }

        // hide the button
        else { sk_fb_events_load_more_btn.hide(); }

        // custom ui
        applyCustomUi(jQuery, sk_fb_event);
    });
});


jQuery(document).on('click', '.sk-fb-event .sk_cal_day_event_count, .sk-fb-event .cal-day-number, .sk-fb-event .cal-day-event', function(e){

	var sk_cal_highlight_day = jQuery(this);
	var sk_fb_event = sk_cal_highlight_day.closest('.sk-fb-event');
	var clicked_element = sk_cal_highlight_day;
	var content_src = clicked_element.closest('.sk-cal-highlight-day').find('.sk_fb_events_white_pop_up');
	if(content_src.length ==0){
		return;
	}

	if(sk_cal_highlight_day.closest('.sk-cal-highlight-day').find('.sk-fb-event-item').length){
		showPopUp(jQuery, content_src, clicked_element, sk_fb_event);
	}
});

jQuery(document).on('click', '.sk-fb-event .sk-cal-prev-month', function () {
	var sk_fb_event = jQuery(this).closest('.sk-fb-event');
	sk_fb_event.find('.sk-cal-prev-month').html("<i class='fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

	// get selected date
	var from = sk_fb_event.find(".sk_ww_fb_events_date_picker").val().split("-");

	var year = from[0];
	var month = from[1];
	var day = from[2];


	var new_year = year;
	var new_month = +month - +1;

	if (month == 1) {
		new_year = +year - +1;
		new_month = 12;
	}

	new_month = new_month < 10 ? "0" + new_month : new_month;

	// prev month
	var prev_month_formatted = new_year + '-' + new_month + '-02';
	localStorage.setItem("sk_fb_events_selected_date", prev_month_formatted);

	// display events
	if (localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event)) == "month") { renderCalendar(jQuery, sk_fb_event); }

	else {
		// last paremeter must be true if sk-cal-month-next/prev was clicked : this will be used for cached
		renderEvents(jQuery, sk_fb_event, true);
	}
});

jQuery(document).on('click', '.sk-fb-event .sk-cal-next-month', function () {
	var sk_fb_event = jQuery(this).closest('.sk-fb-event');
	sk_fb_event.find('.sk-cal-next-month').html("<i class='fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

	// get selected date
	// var from = sk_fb_event.find(".sk_ww_fb_events_date_picker").val().split("-");
	var from = localStorage.getItem("sk_fb_events_selected_date").split("-");
	var year = from[0];
	var month = from[1];
	var day = from[2];

	var new_year = year;
	var new_month = +month + +1;

	if (month == 12) {
		new_year = +year + +1;
		new_month = 1;
	}

	new_month = new_month < 10 ? "0" + new_month : new_month;

	// next month
	var next_month_formatted = new_year + '-' + new_month + '-02';

	localStorage.setItem("sk_fb_events_selected_date", next_month_formatted);

	// display events
	if (localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event)) == "month") { renderCalendar(jQuery, sk_fb_event); }

	else {
		// last paremeter must be true if sk-cal-month-next/prev was clicked : this will be used for cached
		renderEvents(jQuery, sk_fb_event, true);
	}
});

// trigger when 'grid' tab was clicked
jQuery(document).on('click', '.sk-fb-event .tab-grid-events', function () {

	// vars
	var tab_upcoming_events = jQuery(this);
	var sk_fb_event = tab_upcoming_events.closest('.sk-fb-event');

	// tabs
	var current_width = tab_upcoming_events.width();
	tab_upcoming_events.width(current_width);
	tab_upcoming_events.html("<i class='sk_cbar_loading_icon fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

	localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "grid");
	renderEvents(jQuery, sk_fb_event, false);
});

// trigger when 'masonry' tab was clicked
jQuery(document).on('click', '.sk-fb-event .tab-masonry-events', function () {

	// vars
	var tab_upcoming_events = jQuery(this);
	var sk_fb_event = tab_upcoming_events.closest('.sk-fb-event');

	// tabs
	var current_width = tab_upcoming_events.width();
	tab_upcoming_events.width(current_width);
	tab_upcoming_events.html("<i class='sk_cbar_loading_icon fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

	localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "masonry");
	renderEvents(jQuery, sk_fb_event, true);
});


// trigger when 'list' tab was clicked
jQuery(document).on('click', '.sk-fb-event .tab-list-events', function () {

	var tab_list_events = jQuery(this);
	var sk_fb_event = tab_list_events.closest('.sk-fb-event');

	// tabs
	var current_width = tab_list_events.width();
	tab_list_events.width(current_width);
	tab_list_events.html("<i class='sk_cbar_loading_icon fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

	localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "list");
	renderEvents(jQuery, sk_fb_event, true);

});

// trigger when 'calendar events' tab was clicked
jQuery(document).on('click', '.sk-fb-event .tab-calendar-events', function () {


	// set show type

	// check if a calendar is already loaded
	var tab_calendar_events = jQuery(this);
	var sk_fb_event = tab_calendar_events.closest('.sk-fb-event');

	localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "month");

	if (getDsmSetting(sk_fb_event, "open_calendar_in_new_tab") == 1) {
		var embed_id = getDsmEmbedId(sk_fb_event);
		var go_to_url = app_url + "embed/" + embed_id + "#calendar";
		window.open(go_to_url, '_blank');

	} else {

		// display calendar events
		var current_width = tab_calendar_events.width();
		tab_calendar_events.width(current_width);
		tab_calendar_events.html("<i class='sk_cbar_loading_icon fa fa-spinner fa-pulse fa-1x fa-fw'></i>");
		renderCalendar(jQuery, sk_fb_event);

	}
});

// trigger when 'calendar events' tab was clicked
jQuery(document).on('click', '.sk-fb-event .tab-export-calendar', function () {
	// var sk_fb_event=jQuery(this).closest('.sk-fb-event');
	// var embed_id=getDsmEmbedId(sk_fb_event);
	// document.location.href = app_url + "embed/facebook-events/widget_export_calendar.php?embed_id=" + embed_id;

	var read_more_btn = jQuery(this);
	var sk_fb_event = read_more_btn.closest('.sk-fb-event');
	var content_src = sk_fb_event.find(".sk_ww_fb_page_events_export_options");

	showPopUp(jQuery, content_src, read_more_btn, sk_fb_event);
});

// trigger when 'sliding' tab was clicked
jQuery(document).on('click', '.sk-fb-event .tab-slider-events', function () {

	// vars
	var tab_upcoming_events = jQuery(this);
	var sk_fb_event = tab_upcoming_events.closest('.sk-fb-event');

	// tabs
	var current_width = tab_upcoming_events.width();
	tab_upcoming_events.width(current_width);
	tab_upcoming_events.html("<i class='fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

	localStorage.setItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event), "slider");
	renderEvents(jQuery, sk_fb_event, true);
});

// trigger when 'read more' button was clicked
jQuery(document).on('click', '.sk-fb-event .sk-fb-event-thumb-section', function () {

	var clicked_element = jQuery(this).closest('.grid-item-facebook-event').find('.event-details-popup');
	var sk_fb_event = clicked_element.closest('.sk-fb-event');
	var content_src = clicked_element.closest('.grid-item-facebook-event').find('.sk_fb_events_white_pop_up');

	if(jQuery(".open_details_on_facebook").text() != 1)
		showPopUp(jQuery, content_src, clicked_element, sk_fb_event);
	else
		window.open(jQuery(this).attr("url"), '_blank');
	return false;
});

jQuery(document).on('click', '.sk-fb-event .read-more-btn', function () {

	var clicked_element = jQuery(this);
	var sk_fb_event = clicked_element.closest('.sk-fb-event');
	var content_src = clicked_element.closest('.grid-item-facebook-event').find('.sk_fb_events_white_pop_up');

	showPopUp(jQuery, content_src, clicked_element, sk_fb_event);
	return false;
});
// trigger when 'mobile-btn-menu' button was clicked
jQuery(document).on('click', '.sk_fb_events_options_btn .mobile-btn-menu', function () {

	jQuery(".sk_fb_events_options").toggle();
});jQuery(document).on('change', '.sk-fb-event .sk_ww_fb_events_date_picker', function(){
     var sk_ww_fb_events_date_picker=jQuery(this);
     var sk_fb_event=sk_ww_fb_events_date_picker.closest('.sk-fb-event');;
     var selected_date=sk_ww_fb_events_date_picker.val();

     localStorage.setItem("sk_fb_events_selected_date", selected_date);
     sk_fb_event.find('.tab-grid-events').html("<i class='fa fa-spinner fa-pulse fa-1x fa-fw'></i>");

     // read show type
     var show_type=localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

     // searhc result for calendar view
     if(show_type=="month"){ renderCalendar(jQuery, sk_fb_event); }

     // search results for list view
     else{
        // last paremeter must be true if sk-cal-month-next/prev was clicked : this will be used for cached
        renderEvents(jQuery, sk_fb_event, true);
    }
 });

 jQuery(document).on('change', '.sk_fb_event_u_states', function(){

     var state_dropdown = jQuery(this);
     var selected_state = state_dropdown.find(":selected").val();
     var sk_fb_event = state_dropdown.closest('.sk-fb-event');

     // reset
     if(selected_state==0){
         renderEvents(jQuery, sk_fb_event, false);
     }

     // show events with the selected state keyword
     else{
         var sk_ww_search_events = sk_fb_event.find('.sk_ww_search_events');
         jQuery('.sk_ww_search_events').val(selected_state);
         showSearchResults(jQuery, sk_ww_search_events);
     }

 });
         jQuery(document).on('submit', '.sk-fb-event .sk_ww_search_events_form', function(){
             localStorage.setItem("user_searched", "1");
             var sk_ww_search_events=jQuery(this).find(".sk_ww_search_events");
             var sk_fb_event=sk_ww_search_events.closest('.sk-fb-event');
             var search_term=sk_ww_search_events.val()!=undefined ? sk_ww_search_events.val().toLowerCase() : "";
             localStorage.setItem("search_term", search_term);

             // read show type
             var show_type=localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

             // searhc result for calendar view
             if(show_type=="month"){ renderCalendar(jQuery, sk_fb_event); }

             // search results for list view
             else{ renderEvents(jQuery, sk_fb_event, false); }

             return false;
         });

         jQuery(document).on('keyup', '.sk-fb-event .sk_ww_search_events', function(){
             localStorage.setItem("user_searched", "1");
             var sk_ww_search_events=jQuery(this);
             var sk_fb_event=sk_ww_search_events.closest('.sk-fb-event');

             if(sk_ww_search_events.val()==""){
                 localStorage.setItem("search_term", "");

                 // read show type
                 var show_type=localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

                 // searhc result for calendar view
                 if(show_type=="month"){ renderCalendar(jQuery, sk_fb_event); }

                 // search results for list view
                 else{ renderEvents(jQuery, sk_fb_event, false); }
             }
         });

     }); // end document ready

 }function initializeGoogleMap(event_id, latitude, longitude, formatted_address) {
    var sk_fb_event = jQuery('.sk-fb-event');
    var show_location_text = getDsmSetting(sk_fb_event, "show_location_text");


    if(jQuery("#gmap_canvas_" + event_id).length && latitude && longitude){
        var coordinates = [longitude  , latitude ];
        mapboxgl.accessToken = 'pk.eyJ1IjoibmluamF6aGFpIiwiYSI6ImNqdjA3ZzNubjFnaXY0NHBwODAxaHRvbmsifQ.Gvu_vMWflKRgBJjzI7o5mw';
        var map = new mapboxgl.Map({
            container: "gmap_canvas_" + event_id, // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: coordinates, // starting position [lng, lat]
            zoom: 17 // starting zoom
        });
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());

        var pin_image = "https://i0.wp.com/www.sociablekit.com/wp-content/uploads/2019/05/map-marker.png?resize=64%2C64&ssl=1";
        map.on('load', function() {
            map.loadImage(pin_image, function(error, image) {
                if (error) throw error;
                map.addImage('red_mark', image);
                // set popup
                if(show_location_text == 1){
                    var popup = new mapboxgl.Popup({
                        closeButton: false,
                        offset: 25,
                        closeOnClick: false})
                    .setText(formatted_address)
                    .setLngLat(coordinates)
                    .addTo(map);
                }


                // create the marker
                var el = document.createElement('div');
                el.id = 'marker';
                new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .addTo(map);
                map.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": coordinates
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "red_mark",
                        "icon-size": 0.50
                    }
                });
            });
        });


     }else{

     }
 }function getPopUpHtml(event, sk_fb_event) {

    var html = "";
    html +="<div class='sk-event-details-" + event.eid + " sk_fb_events_white_pop_up mfp-hide sk-event-details'>";

        // format html for event details
        html += "<div class='sk-event-details sk-event-details-" + event.event_time_id + "'>";

        if (getDsmSetting(sk_fb_event, "show_image_pop_up") == 1 && event.pic_big != "") {
            html += "<div class='sk_event_image_bg'>";
            html += "<img src='" + event.pic_big + "' class='read-one-event-img sk-w-100-pct' />";
            html += "</div>";
        }

        html += "<div style='color: " + getDsmSetting(sk_fb_event, "pop_up_font_color") + "; background-color: " + getDsmSetting(sk_fb_event, "pop_up_bg_color") + ";' class='sk_fb_events_pop_html_event_details'>";

        html += "<div style='background-color: transparent !important; color: " + getDsmSetting(sk_fb_event, "pop_up_font_color") + ";' class='read-one-event-title'>" + event.name + "</div>";

        html += "<div class='padding-8px-0'>";
            html += "<div class='col-md-12'>";

            if (event.host_name) {
                html += "<span class='sk-m-r-15px'><i class='fa fa-circle-o'></i><div class='icon_text' style='display: inline;'>" + getDsmSetting(sk_fb_event, "hosted_by_text") + " <a href='" + event.host_link + "' target='_blank' target='_blank'>" + event.host_name + "</a></div></span>";
            }

            if (event.ticket_uri != "") {
                html += "<i class='fa fa-ticket'></i> ";
                html += "<a href='" + event.ticket_uri + "' target='_blank'>";
                html += getDsmSetting(sk_fb_event, "get_tickets_text");
                html += "</a> ";
            }


            var event_ticket = event.ticket_price ? event.ticket_price.replace('Tickets','') : "";
            if (event_ticket) {

                html += "&nbsp;&nbsp; <i class='fa fa-money'></i> ";
                html += "<a href='" + event.ticket_uri + "' target='_blank'>";
                html += event.ticket_price;
                html += "</a>";
            }
            html += "</div>";
        html += "</div>";
        html += "<div class='padding-8px-0'>";

            // the content on this will be came from utilities getUpcomingRecurredEvents function with this class
            html += "<div class='col-md-12  sk_fb_event_popup_time sk_fb_event_popup_time_" + event.event_time_id + "'>";

                html += getUpcomingRecurredEvents(sk_fb_event,event);


            html += "</div>";
        html += "</div>";
        if (event.description != "Not available." && event.description != "") {
            html += "<div class='padding-8px-0'>";
            html += "<div class='col-md-12 sk-fb-event-description d-flex'><i class='fa fa-sticky-note-o'></i> <div class='align_icon_text icon_text'>" + linkify(event.description) + "</div></div>";
            html += "</div>";
        }

        if (getDsmSetting(sk_fb_event, "show_map") == 1 && event.event_lati != "" && event.event_longi != "" && event.location) {

            html += "<div class='padding-8px-0'>";
            html += "<div class='col-md-12 d-flex'><i class='fa fa-map-o'></i> <div class='align_icon_text'>" + event.location + "</div></div>";
            html += "</div>";

            html += "<div class='padding-8px-0'>";
            html += "<div class='col-md-12'>";
            html += "<div id='gmap_canvas_" + event.eid + "' style='width:100%; height:320px; color: black !important;'></div>";
            html += "</div>";
            html += "</div>";
        }

        else {
            if (event.location) {
                html += "<div class='padding-8px-0'>";
                var isContains = event.location.indexOf("<a href=") > -1;
                if (isContains) {
                    // render 'view location on facebook' link
                    html += "<div class='col-md-12'><i class='fa fa-map-o'></i> " + event.location + "</div>";
                } else {
                    html += "<div class='col-md-12'><a href='https://maps.google.com/maps?q=" + event.location + "' target='_blank'>";
                    html += "<i class='fa fa-map-o'></i> " + event.location + "";
                    html += "</a></div>";
                }
                html += "</div>";
            }
        }



        html += "<div class='padding-8px-0'>";
        html += "<div class='col-md-12'><i class='fa fa-facebook-official'></i> <a href='https://www.facebook.com/events/" + event.eid + "/' target='_blank'>" + getDsmSetting(sk_fb_event, "view_on_facebook_text") + "</a></div>";
        html += "</div>";

        html += "</div>";
        html += "<div class='sk_events_separator'></div>";
        html += "</div>";

    html += "</div>";

    return html;
}

function showPopUp(jQuery, content_src, clicked_element, sk_fb_event) {
    var html_content = "";
    jQuery.each(content_src,function(index, value){
        html_content += jQuery(value).html();
    });

    var modalBigContent = new tingle.modal({
        onOpen: function() {
        },
        onClose: function() {
            jQuery('.tingle-modal').remove();
            jQuery('body').removeClass('tingle-enable');
        }
    });
    modalBigContent.setContent(html_content);
    modalBigContent.open();


    // detect show map
        var show_map_on_pop_up = false;
        if (getDsmSetting(sk_fb_event, "show_map") == 1 && event_lati != "" && event_longi != "") {
            show_map_on_pop_up = true;
        }

        // if number in calendar view was clicked
        if (
            clicked_element.hasClass('cal-day-number') ||
            clicked_element.hasClass('sk_cal_day_event_count')
        ) {
            //loop in events
            jQuery(content_src).find('.sk-event-details').show();
            var parent_element = clicked_element.parent();
            var cal_day_events = parent_element.find(".cal-day-event");

            if (show_map_on_pop_up == true) {
                jQuery(cal_day_events).each(function (i, element) {
                    var element_obj = jQuery(element);

                    var event_id = element_obj.attr("data-event-id");
                    var event_location = element_obj.attr("data-location");
                    var event_lati = element_obj.attr("data-lati");
                    var event_longi = element_obj.attr("data-longi");

                    initializeGoogleMap(event_id, event_lati, event_longi, event_location);
                });
            }
        }

        // if single event in month view was clicked
        else if (clicked_element.hasClass('cal-day-event')) {

            //show only the selected event
            var event_time_id = clicked_element.attr('data-event_time_id');
            jQuery('.tingle-modal-box').find('.sk-event-details').hide();
            jQuery('.tingle-modal-box').find('.sk-event-details-' + event_time_id).show()

            var event_id = clicked_element.attr("data-event-id");
            var event_location = clicked_element.attr("data-location");
            var event_lati = clicked_element.attr("data-lati");
            var event_longi = clicked_element.attr("data-longi");

            if (show_map_on_pop_up == true) { initializeGoogleMap(event_id, event_lati, event_longi, event_location); }
        }

        // if read more button on list or grid or masonry view was clicked
        else if (clicked_element.hasClass('read-more-btn')) {

            // show google map
            var event_id = clicked_element.attr("data-event-id");
            var event_location = clicked_element.attr("data-location");
            var event_lati = clicked_element.attr("data-lati");
            var event_longi = clicked_element.attr("data-longi");
            if (show_map_on_pop_up == true) { initializeGoogleMap(event_id, event_lati, event_longi, event_location); }
        }

        else if (
            clicked_element.hasClass('sk_cal_day_event_count') ||
            clicked_element.hasClass('sk_cal_day_event_text') ||
            clicked_element.hasClass('sk_cal_day_event_number')
        ) {
            //show all event in selected date
            jQuery(content_src).children().show();

            //loop in events
            var parent_element = clicked_element.closest('td');
            var cal_day_events = parent_element.find(".cal-day-event");

            jQuery(cal_day_events).each(function (i, element) {
                var element_obj = jQuery(element);

                var event_id = element_obj.attr("data-event-id");
                var event_location = element_obj.attr("data-location");
                var event_lati = element_obj.attr("data-lati");
                var event_longi = element_obj.attr("data-longi");
                if (show_map_on_pop_up == true) { initializeGoogleMap(event_id, event_lati, event_longi, event_location); }
            });

        }

        else {

            var event_time_id = clicked_element.closest('td').find('.cal-day-event').attr('data-event_time_id');
            jQuery(content_src).find('.sk-event-details-' + event_time_id).show();

            // show google map
            var event_id = clicked_element.attr("data-event-id");
            var event_location = clicked_element.attr("data-location");
            var event_lati = clicked_element.attr("data-lati");
            var event_longi = clicked_element.attr("data-longi");
            if (show_map_on_pop_up == true) { initializeGoogleMap(event_id, event_lati, event_longi, event_location); }
        }
        // apply custom ui
        applyCustomUi(jQuery, sk_fb_event);
        // apply custom css popup
        if(jQuery(document).width() <= 441){
            jQuery('.tingle-modal__close').css({
                "right" : "0px",
                "float" : "right",
                "left" : "auto",
                "position" : "absolute",
                "top" : "20px",
                "background-color" : "transparent",
                "width" : "60px"
            });
            jQuery(".tingle-modal__closeLabel").css({"display":"none"});
        }else{
            jQuery('.tingle-modal__close').css({
                "right" : $(".tingle-modal-box")[0].offsetLeft+18,
                "position" : "absolute",
                "top" : "60px"
            });
        }

        $('.tingle-modal-box__content').css({
            "padding" : "4rem 1rem"
        });
}function showSearchResults(jQuery, sk_fb_event){

     var show_type=localStorage.getItem("sk_fb_events_show_type"+getDsmEmbedId(sk_fb_event));

     // primary vars
     var embed_id=getDsmEmbedId(sk_fb_event);
     var search_term=localStorage.getItem("search_term");

     // render upcoming events if search term is empty
     if(search_term==""){
         // empty
         renderEvents(jQuery, sk_fb_event, false);
     }

     // show search results if search term is not empty
     else{

         var selected_date=localStorage.getItem("sk_fb_events_selected_date");
         var json_url=app_url + "embed/facebook-events/widget_events_search_json.php?embed_id=" + embed_id + "&search_term=" + search_term
                     + "&show_type=" + show_type + "&selected_date=" + selected_date;

         // get events
         jQuery.getJSON(json_url, function(data){

             // bring back tab text
             sk_fb_event.find(".tab-grid-events").html(getDsmSetting(sk_fb_event, "upcoming_events_tab_text"));

             // hide loading image
             sk_fb_event.find('.first_loading_animation').hide();

             // one event
             var event_item="";

             // no events found
             if(data.events==""){

                 event_item+="<div class='no_events_found'>";
                     event_item+="No events found.";
                 event_item+="</div>";
             }

             // show events
             else{
                 var event_counter=0;
                 var post_count=getDsmSetting(sk_fb_event, 'post_count');

                 jQuery.each(data.events, function(key, val){
                     event_item+=getEventItem_SK(sk_fb_event, val);
                     event_counter++;
                 });

                 // change next page url and show 'load more' button if there's next page
                 if(data.page_info.next_page_url!=""){
                     sk_fb_event.find('.sk_fb_events_next_page_url').text(data.page_info.next_page_url);
                     sk_fb_event.find('.sk_fb_events_load_more_btn').show();
                 }

                 // hide load more button
                 else{ sk_fb_event.find('.sk_fb_events_load_more_btn').hide(); }
             }

             // watermark
             event_item+=getSociableKITBranding(sk_fb_event, "Facebook page events <i class='fa fa-bolt'></i> by SociableKIT", "facebook page events");

             // show search results container
             sk_fb_event.find('.grid_sk_upcoming_events').empty();
             sk_fb_event.find('.sk_fb_events_temp_event_items_holder').empty();
             sk_fb_event.find('.sk_fb_events_temp_event_items_holder').html(event_item);

             applyMasonry(sk_fb_event);
             applyCustomUi(jQuery, sk_fb_event);
             applyTabColors(jQuery, show_type, sk_fb_event);

         });
     }
 }}(window, document));
// ========== start flatpickr
/* flatpickr v4.5.2, @license MIT */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.flatpickr = factory());
}(this, (function () { 'use strict';

    var pad = function pad(number) {
      return ("0" + number).slice(-2);
    };
    var int = function int(bool) {
      return bool === true ? 1 : 0;
    };
    function debounce(func, wait, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      var timeout;
      return function () {
        var context = this,
            args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = window.setTimeout(function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
      };
    }
    var arrayify = function arrayify(obj) {
      return obj instanceof Array ? obj : [obj];
    };

    var do_nothing = function do_nothing() {
      return undefined;
    };

    var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
      return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
    };
    var revFormat = {
      D: do_nothing,
      F: function F(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
      },
      G: function G(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      H: function H(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      J: function J(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      K: function K(dateObj, amPM, locale) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
      },
      M: function M(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
      },
      S: function S(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      U: function U(_, unixSeconds) {
        return new Date(parseFloat(unixSeconds) * 1000);
      },
      W: function W(dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      },
      Y: function Y(dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
      },
      Z: function Z(_, ISODate) {
        return new Date(ISODate);
      },
      d: function d(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      h: function h(dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
      },
      i: function i(dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
      },
      j: function j(dateObj, day) {
        dateObj.setDate(parseFloat(day));
      },
      l: do_nothing,
      m: function m(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      n: function n(dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
      },
      s: function s(dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
      },
      w: do_nothing,
      y: function y(dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
      }
    };
    var tokenRegex = {
      D: "(\\w+)",
      F: "(\\w+)",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "(\\w+)",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "(\\w+)",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})"
    };
    var formats = {
      Z: function Z(date) {
        return date.toISOString();
      },
      D: function D(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
      },
      F: function F(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
      },
      G: function G(date, locale, options) {
        return pad(formats.h(date, locale, options));
      },
      H: function H(date) {
        return pad(date.getHours());
      },
      J: function J(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
      },
      K: function K(date, locale) {
        return locale.amPM[int(date.getHours() > 11)];
      },
      M: function M(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
      },
      S: function S(date) {
        return pad(date.getSeconds());
      },
      U: function U(date) {
        return date.getTime() / 1000;
      },
      W: function W(date, _, options) {
        return options.getWeek(date);
      },
      Y: function Y(date) {
        return date.getFullYear();
      },
      d: function d(date) {
        return pad(date.getDate());
      },
      h: function h(date) {
        return date.getHours() % 12 ? date.getHours() % 12 : 12;
      },
      i: function i(date) {
        return pad(date.getMinutes());
      },
      j: function j(date) {
        return date.getDate();
      },
      l: function l(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
      },
      m: function m(date) {
        return pad(date.getMonth() + 1);
      },
      n: function n(date) {
        return date.getMonth() + 1;
      },
      s: function s(date) {
        return date.getSeconds();
      },
      w: function w(date) {
        return date.getDay();
      },
      y: function y(date) {
        return String(date.getFullYear()).substring(2);
      }
    };

    var english = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      months: {
        shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function ordinal(nth) {
        var s = nth % 100;
        if (s > 3 && s < 21) return "th";

        switch (s % 10) {
          case 1:
            return "st";

          case 2:
            return "nd";

          case 3:
            return "rd";

          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year"
    };

    var createDateFormatter = function createDateFormatter(_ref) {
      var _ref$config = _ref.config,
          config = _ref$config === void 0 ? defaults : _ref$config,
          _ref$l10n = _ref.l10n,
          l10n = _ref$l10n === void 0 ? english : _ref$l10n;
      return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;

        if (config.formatDate !== undefined) {
          return config.formatDate(dateObj, frmt, locale);
        }

        return frmt.split("").map(function (c, i, arr) {
          return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
        }).join("");
      };
    };
    var createDateParser = function createDateParser(_ref2) {
      var _ref2$config = _ref2.config,
          config = _ref2$config === void 0 ? defaults : _ref2$config,
          _ref2$l10n = _ref2.l10n,
          l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
      return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date) return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
          var format = givenFormat || (config || defaults).dateFormat;
          var datestr = String(date).trim();

          if (datestr === "today") {
            parsedDate = new Date();
            timeless = true;
          } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
            parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
            var matched,
                ops = [];

            for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
              var token = format[i];
              var isBackSlash = token === "\\";
              var escaped = format[i - 1] === "\\" || isBackSlash;

              if (tokenRegex[token] && !escaped) {
                regexStr += tokenRegex[token];
                var match = new RegExp(regexStr).exec(date);

                if (match && (matched = true)) {
                  ops[token !== "Y" ? "push" : "unshift"]({
                    fn: revFormat[token],
                    val: match[++matchIndex]
                  });
                }
              } else if (!isBackSlash) regexStr += ".";

              ops.forEach(function (_ref3) {
                var fn = _ref3.fn,
                    val = _ref3.val;
                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
              });
            }

            parsedDate = matched ? parsedDate : undefined;
          }
        }

        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
          config.errorHandler(new Error("Invalid date provided: " + date_orig));
          return undefined;
        }

        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
      };
    };
    function compareDates(date1, date2, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      if (timeless !== false) {
        return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
      }

      return date1.getTime() - date2.getTime();
    }
    var getWeek = function getWeek(givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      var week1 = new Date(date.getFullYear(), 0, 4);
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    };
    var isBetween = function isBetween(ts, ts1, ts2) {
      return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
      DAY: 86400000
    };

    var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
    var defaults = {
      _disable: [],
      _enable: [],
      allowInput: false,
      altFormat: "F j, Y",
      altInput: false,
      altInputClass: "form-control input",
      animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
      ariaDateFormat: "F j, Y",
      clickOpens: true,
      closeOnSelect: true,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: false,
      enable: [],
      enableSeconds: false,
      enableTime: false,
      errorHandler: function errorHandler(err) {
        return typeof console !== "undefined" && console.warn(err);
      },
      getWeek: getWeek,
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: false,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: false,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: undefined,
      prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: false,
      showMonths: 1,
      static: false,
      time_24hr: false,
      weekNumbers: false,
      wrap: false
    };

    function toggleClass(elem, className, bool) {
      if (bool === true) return elem.classList.add(className);
      elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
      var e = window.document.createElement(tag);
      className = className || "";
      content = content || "";
      e.className = className;
      if (content !== undefined) e.textContent = content;
      return e;
    }
    function clearNode(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    }
    function findParent(node, condition) {
      if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
      return undefined;
    }
    function createNumberInput(inputClassName, opts) {
      var wrapper = createElement("div", "numInputWrapper"),
          numInput = createElement("input", "numInput " + inputClassName),
          arrowUp = createElement("span", "arrowUp"),
          arrowDown = createElement("span", "arrowDown");
      numInput.type = "text";
      numInput.pattern = "\\d*";
      if (opts !== undefined) for (var key in opts) {
        numInput.setAttribute(key, opts[key]);
      }
      wrapper.appendChild(numInput);
      wrapper.appendChild(arrowUp);
      wrapper.appendChild(arrowDown);
      return wrapper;
    }

    if (typeof Object.assign !== "function") {
      Object.assign = function (target) {
        if (!target) {
          throw TypeError("Cannot convert undefined or null to object");
        }

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _loop = function _loop() {
          var source = args[_i];

          if (source) {
            Object.keys(source).forEach(function (key) {
              return target[key] = source[key];
            });
          }
        };

        for (var _i = 0; _i < args.length; _i++) {
          _loop();
        }

        return target;
      };
    }

    var DEBOUNCED_CHANGE_MS = 300;

    function FlatpickrInstance(element, instanceConfig) {
      var self = {
        config: Object.assign({}, flatpickr.defaultConfig),
        l10n: english
      };
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
      self._handlers = [];
      self._bind = bind;
      self._setHoursFromDate = setHoursFromDate;
      self._positionCalendar = positionCalendar;
      self.changeMonth = changeMonth;
      self.changeYear = changeYear;
      self.clear = clear;
      self.close = close;
      self._createElement = createElement;
      self.destroy = destroy;
      self.isEnabled = isEnabled;
      self.jumpToDate = jumpToDate;
      self.open = open;
      self.redraw = redraw;
      self.set = set;
      self.setDate = setDate;
      self.toggle = toggle;

      function setupHelperFunctions() {
        self.utils = {
          getDaysInMonth: function getDaysInMonth(month, yr) {
            if (month === void 0) {
              month = self.currentMonth;
            }

            if (yr === void 0) {
              yr = self.currentYear;
            }

            if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
            return self.l10n.daysInMonth[month];
          }
        };
      }

      function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();

        if (self.selectedDates.length || self.config.noCalendar) {
          if (self.config.enableTime) {
            setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
          }

          updateValue(false);
        }

        setCalendarWidth();
        self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (!self.isMobile && isSafari) {
          positionCalendar();
        }

        triggerEvent("onReady");
      }

      function bindToInstance(fn) {
        return fn.bind(self);
      }

      function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
          window.requestAnimationFrame(function () {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";

            if (self.daysContainer !== undefined) {
              var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
              self.daysContainer.style.width = daysWidth + "px";
              self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
              self.calendarContainer.style.removeProperty("visibility");
              self.calendarContainer.style.removeProperty("display");
            }
          });
        }
      }

      function updateTime(e) {
        if (self.selectedDates.length === 0) return;

        if (e !== undefined && e.type !== "blur") {
          timeWrapper(e);
        }

        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();

        if (self._input.value !== prevValue) {
          self._debouncedChange();
        }
      }

      function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
      }

      function military2ampm(hour) {
        switch (hour % 24) {
          case 0:
          case 12:
            return 12;

          default:
            return hour % 12;
        }
      }

      function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
            minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
            seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

        if (self.amPM !== undefined) {
          hours = ampm2military(hours, self.amPM.textContent);
        }

        var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

        if (limitMaxHours) {
          var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
        }

        if (limitMinHours) {
          var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
          if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
        }

        setHours(hours, minutes, seconds);
      }

      function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }

      function setDefaultHours() {
        var hours = self.config.defaultHour;
        var minutes = self.config.defaultMinute;
        var seconds = self.config.defaultSeconds;

        if (self.config.minDate !== undefined) {
          var min_hr = self.config.minDate.getHours();
          var min_minutes = self.config.minDate.getMinutes();
          hours = Math.max(hours, min_hr);
          if (hours === min_hr) minutes = Math.max(min_minutes, minutes);
          if (hours === min_hr && minutes === min_minutes) seconds = self.config.minDate.getSeconds();
        }

        if (self.config.maxDate !== undefined) {
          var max_hr = self.config.maxDate.getHours();
          var max_minutes = self.config.maxDate.getMinutes();
          hours = Math.min(hours, max_hr);
          if (hours === max_hr) minutes = Math.min(max_minutes, minutes);
          if (hours === max_hr && minutes === max_minutes) seconds = self.config.maxDate.getSeconds();
        }

        setHours(hours, minutes, seconds);
      }

      function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
          self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }

        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
      }

      function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);

        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
          changeYear(year);
        }
      }

      function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach(function (ev) {
          return bind(element, ev, handler, options);
        });
        if (element instanceof Array) return element.forEach(function (el) {
          return bind(el, event, handler, options);
        });
        element.addEventListener(event, handler, options);

        self._handlers.push({
          element: element,
          event: event,
          handler: handler,
          options: options
        });
      }

      function onClick(handler) {
        return function (evt) {
          evt.which === 1 && handler(evt);
        };
      }

      function triggerChange() {
        triggerEvent("onChange");
      }

      function bindEvents() {
        if (self.config.wrap) {
          ["open", "close", "toggle", "clear"].forEach(function (evt) {
            Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
              return bind(el, "click", self[evt]);
            });
          });
        }

        if (self.isMobile) {
          setupMobile();
          return;
        }

        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
          if (self.config.mode === "range") onMouseOver(e.target);
        });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static) bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "click", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
        bind(window.document, "focus", documentClick, {
          capture: true
        });

        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "mousedown", onClick(self.open));
        }

        if (self.daysContainer !== undefined) {
          bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
          bind(self.monthNav, ["keyup", "increment"], onYearInput);
          bind(self.daysContainer, "mousedown", onClick(selectDate));
        }

        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
          var selText = function selText(e) {
            return e.target.select();
          };

          bind(self.timeContainer, ["increment"], updateTime);
          bind(self.timeContainer, "blur", updateTime, {
            capture: true
          });
          bind(self.timeContainer, "mousedown", onClick(timeIncrement));
          bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
          if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
            return self.secondElement && self.secondElement.select();
          });

          if (self.amPM !== undefined) {
            bind(self.amPM, "mousedown", onClick(function (e) {
              updateTime(e);
              triggerChange();
            }));
          }
        }
      }

      function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

        try {
          if (jumpTo !== undefined) {
            self.currentYear = jumpTo.getFullYear();
            self.currentMonth = jumpTo.getMonth();
          }
        } catch (e) {
          e.message = "Invalid date supplied: " + jumpTo;
          self.config.errorHandler(e);
        }

        self.redraw();
      }

      function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
      }

      function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
      }

      function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;

        if (!self.config.noCalendar) {
          fragment.appendChild(buildMonthNav());
          self.innerContainer = createElement("div", "flatpickr-innerContainer");

          if (self.config.weekNumbers) {
            var _buildWeeks = buildWeeks(),
                weekWrapper = _buildWeeks.weekWrapper,
                weekNumbers = _buildWeeks.weekNumbers;

            self.innerContainer.appendChild(weekWrapper);
            self.weekNumbers = weekNumbers;
            self.weekWrapper = weekWrapper;
          }

          self.rContainer = createElement("div", "flatpickr-rContainer");
          self.rContainer.appendChild(buildWeekdays());

          if (!self.daysContainer) {
            self.daysContainer = createElement("div", "flatpickr-days");
            self.daysContainer.tabIndex = -1;
          }

          buildDays();
          self.rContainer.appendChild(self.daysContainer);
          self.innerContainer.appendChild(self.rContainer);
          fragment.appendChild(self.innerContainer);
        }

        if (self.config.enableTime) {
          fragment.appendChild(buildTime());
        }

        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

        if (self.config.inline || self.config.static) {
          self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

          if (self.config.inline) {
            if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
          }

          if (self.config.static) {
            var wrapper = createElement("div", "flatpickr-wrapper");
            if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
            wrapper.appendChild(self.element);
            if (self.altInput) wrapper.appendChild(self.altInput);
            wrapper.appendChild(self.calendarContainer);
          }
        }

        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
      }

      function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true),
            dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

        if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
          self.todayDateElem = dayElement;
          dayElement.classList.add("today");
          dayElement.setAttribute("aria-current", "date");
        }

        if (dateIsEnabled) {
          dayElement.tabIndex = -1;

          if (isDateSelected(date)) {
            dayElement.classList.add("selected");
            self.selectedDateElem = dayElement;

            if (self.config.mode === "range") {
              toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
              toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
              if (className === "nextMonthDay") dayElement.classList.add("inRange");
            }
          }
        } else {
          dayElement.classList.add("disabled");
        }

        if (self.config.mode === "range") {
          if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }

        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
          self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }

        triggerEvent("onDayCreate", dayElement);
        return dayElement;
      }

      function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
      }

      function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;

        for (var m = startMonth; m != endMonth; m += delta) {
          var month = self.daysContainer.children[m];
          var startIndex = delta > 0 ? 0 : month.children.length - 1;
          var endIndex = delta > 0 ? month.children.length : -1;

          for (var i = startIndex; i != endIndex; i += delta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
          }
        }

        return undefined;
      }

      function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;

        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
          var month = self.daysContainer.children[m];
          var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
          var numMonthDays = month.children.length;

          for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
            var c = month.children[i];
            if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
          }
        }

        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
      }

      function focusOnDay(current, offset) {
        var dayFocused = isInView(document.activeElement || document.body);
        var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) return self._input.focus();
        if (!dayFocused) return focusOnDayElem(startElem);
        getNextAvailableDay(startElem, offset);
      }

      function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(month),
            days = window.document.createDocumentFragment(),
            isMultiMonth = self.config.showMonths > 1,
            prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
            nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth,
            dayIndex = 0;

        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
          days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }

        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
          days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }

        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
          days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }

        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
      }

      function buildDays() {
        if (self.daysContainer === undefined) {
          return;
        }

        clearNode(self.daysContainer);
        if (self.weekNumbers) clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();

        for (var i = 0; i < self.config.showMonths; i++) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }

        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;

        if (self.config.mode === "range" && self.selectedDates.length === 1) {
          onMouseOver();
        }
      }

      function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement = createElement("span", "cur-month");
        var yearInput = createNumberInput("cur-year", {
          tabindex: "-1"
        });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) yearElement.setAttribute("data-min", self.config.minDate.getFullYear().toString());

        if (self.config.maxDate) {
          yearElement.setAttribute("data-max", self.config.maxDate.getFullYear().toString());
          yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }

        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
          container: container,
          yearElement: yearElement,
          monthElement: monthElement
        };
      }

      function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);

        for (var m = self.config.showMonths; m--;) {
          var month = buildMonth();
          self.yearElements.push(month.yearElement);
          self.monthElements.push(month.monthElement);
          self.monthNav.appendChild(month.container);
        }

        self.monthNav.appendChild(self.nextMonthNav);
      }

      function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
          get: function get() {
            return self.__hidePrevMonthArrow;
          },
          set: function set(bool) {
            if (self.__hidePrevMonthArrow !== bool) {
              toggleClass(self.prevMonthNav, "disabled", bool);
              self.__hidePrevMonthArrow = bool;
            }
          }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
          get: function get() {
            return self.__hideNextMonthArrow;
          },
          set: function set(bool) {
            if (self.__hideNextMonthArrow !== bool) {
              toggleClass(self.nextMonthNav, "disabled", bool);
              self.__hideNextMonthArrow = bool;
            }
          }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
      }

      function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
        self.hourElement.setAttribute("data-step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("data-step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("data-min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("data-max", self.config.time_24hr ? "23" : "12");
        self.minuteElement.setAttribute("data-min", "0");
        self.minuteElement.setAttribute("data-max", "59");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

        if (self.config.enableSeconds) {
          self.timeContainer.classList.add("hasSeconds");
          var secondInput = createNumberInput("flatpickr-second");
          self.secondElement = secondInput.getElementsByTagName("input")[0];
          self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
          self.secondElement.setAttribute("data-step", self.minuteElement.getAttribute("data-step"));
          self.secondElement.setAttribute("data-min", self.minuteElement.getAttribute("data-min"));
          self.secondElement.setAttribute("data-max", self.minuteElement.getAttribute("data-max"));
          self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
          self.timeContainer.appendChild(secondInput);
        }

        if (!self.config.time_24hr) {
          self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
          self.amPM.title = self.l10n.toggleTitle;
          self.amPM.tabIndex = -1;
          self.timeContainer.appendChild(self.amPM);
        }

        return self.timeContainer;
      }

      function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

        for (var i = self.config.showMonths; i--;) {
          var container = createElement("div", "flatpickr-weekdaycontainer");
          self.weekdayContainer.appendChild(container);
        }

        updateWeekdays();
        return self.weekdayContainer;
      }

      function updateWeekdays() {
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.concat();

        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
          weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }

        for (var i = self.config.showMonths; i--;) {
          self.weekdayContainer.children[i].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
        }
      }

      function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
          weekWrapper: weekWrapper,
          weekNumbers: weekNumbers
        };
      }

      function changeMonth(value, is_offset) {
        if (is_offset === void 0) {
          is_offset = true;
        }

        var delta = is_offset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;

        if (self.currentMonth < 0 || self.currentMonth > 11) {
          self.currentYear += self.currentMonth > 11 ? 1 : -1;
          self.currentMonth = (self.currentMonth + 12) % 12;
          triggerEvent("onYearChange");
        }

        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
      }

      function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) {
          triggerChangeEvent = true;
        }

        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;

        if (self.config.enableTime === true) {
          setDefaultHours();
        }

        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
      }

      function close() {
        self.isOpen = false;

        if (!self.isMobile) {
          self.calendarContainer.classList.remove("open");

          self._input.classList.remove("active");
        }

        triggerEvent("onClose");
      }

      function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");

        for (var i = self._handlers.length; i--;) {
          var h = self._handlers[i];
          h.element.removeEventListener(h.event, h.handler, h.options);
        }

        self._handlers = [];

        if (self.mobileInput) {
          if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
          self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
          if (self.config.static && self.calendarContainer.parentNode) {
            var wrapper = self.calendarContainer.parentNode;
            wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

            if (wrapper.parentNode) {
              while (wrapper.firstChild) {
                wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
              }

              wrapper.parentNode.removeChild(wrapper);
            }
          } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }

        if (self.altInput) {
          self.input.type = "text";
          if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
          delete self.altInput;
        }

        if (self.input) {
          self.input.type = self.input._type;
          self.input.classList.remove("flatpickr-input");
          self.input.removeAttribute("readonly");
          self.input.value = "";
        }

        ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
          try {
            delete self[k];
          } catch (_) {}
        });
      }

      function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
        return self.calendarContainer.contains(elem);
      }

      function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
          var isCalendarElement = isCalendarElem(e.target);
          var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
          var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
          var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
            return elem.contains(e.target);
          });

          if (lostFocus && isIgnored) {
            self.close();

            if (self.config.mode === "range" && self.selectedDates.length === 1) {
              self.clear(false);
              self.redraw();
            }
          }
        }
      }

      function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        var newYearNum = newYear,
            isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;

        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
          self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
          self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }

        if (isNewYear) {
          self.redraw();
          triggerEvent("onYearChange");
        }
      }

      function isEnabled(date, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }

        var dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        var bool = self.config.enable.length > 0,
            array = bool ? self.config.enable : self.config.disable;

        for (var i = 0, d; i < array.length; i++) {
          d = array[i];
          if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
            var parsed = self.parseDate(d, undefined, true);
            return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
          } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }

        return !bool;
      }

      function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
        return false;
      }

      function onKeyDown(e) {
        var isInput = e.target === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;

        if (e.keyCode === 13 && isInput) {
          if (allowInput) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            return e.target.blur();
          } else self.open();
        } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
          var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

          switch (e.keyCode) {
            case 13:
              if (isTimeObj) updateTime();else selectDate(e);
              break;

            case 27:
              e.preventDefault();
              focusAndClose();
              break;

            case 8:
            case 46:
              if (isInput && !self.config.allowInput) {
                e.preventDefault();
                self.clear();
              }

              break;

            case 37:
            case 39:
              if (!isTimeObj) {
                e.preventDefault();

                if (self.daysContainer !== undefined && (allowInput === false || isInView(document.activeElement))) {
                  var _delta = e.keyCode === 39 ? 1 : -1;

                  if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                    changeMonth(_delta);
                    focusOnDay(getFirstAvailableDay(1), 0);
                  }
                }
              } else if (self.hourElement) self.hourElement.focus();

              break;

            case 38:
            case 40:
              e.preventDefault();
              var delta = e.keyCode === 40 ? 1 : -1;

              if (self.daysContainer && e.target.$i !== undefined) {
                if (e.ctrlKey) {
                  changeYear(self.currentYear - delta);
                  focusOnDay(getFirstAvailableDay(1), 0);
                } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
              } else if (self.config.enableTime) {
                if (!isTimeObj && self.hourElement) self.hourElement.focus();
                updateTime(e);

                self._debouncedChange();
              }

              break;

            case 9:
              if (!isTimeObj) {
                self.element.focus();
                break;
              }

              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];

                if (target !== undefined) {
                  e.preventDefault();
                  target.focus();
                } else {
                  self.element.focus();
                }
              }

              break;

            default:
              break;
          }
        }

        if (self.amPM !== undefined && e.target === self.amPM) {
          switch (e.key) {
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[0];
              setHoursFromInputs();
              updateValue();
              break;

            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
              self.amPM.textContent = self.l10n.amPM[1];
              setHoursFromInputs();
              updateValue();
              break;
          }
        }

        triggerEvent("onKeyDown", e);
      }

      function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("disabled"))) return;
        var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
            initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
            rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
            rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime()),
            lastDate = self.daysContainer.lastChild.lastChild.dateObj.getTime();
        var containsDisabled = false;
        var minRange = 0,
            maxRange = 0;

        for (var t = rangeStartDate; t < lastDate; t += duration.DAY) {
          if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
          }
        }

        for (var m = 0; m < self.config.showMonths; m++) {
          var month = self.daysContainer.children[m];
          var prevMonth = self.daysContainer.children[m - 1];

          var _loop = function _loop(i, l) {
            var dayElem = month.children[i],
                date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

            if (outOfRange) {
              dayElem.classList.add("notAllowed");
              ["inRange", "startRange", "endRange"].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              return "continue";
            } else if (containsDisabled && !outOfRange) return "continue";

            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
              dayElem.classList.remove(c);
            });

            if (elem !== undefined) {
              elem.classList.add(hoverDate < self.selectedDates[0].getTime() ? "startRange" : "endRange");

              if (month.contains(elem) || !(m > 0 && prevMonth && prevMonth.lastChild.dateObj.getTime() >= timestamp)) {
                if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
              }
            }
          };

          for (var i = 0, l = month.children.length; i < l; i++) {
            var _ret = _loop(i, l);

            if (_ret === "continue") continue;
          }
        }
      }

      function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
      }

      function open(e, positionElement) {
        if (positionElement === void 0) {
          positionElement = self._positionElement;
        }

        if (self.isMobile === true) {
          if (e) {
            e.preventDefault();
            e.target && e.target.blur();
          }

          if (self.mobileInput !== undefined) {
            self.mobileInput.focus();
            self.mobileInput.click();
          }

          triggerEvent("onOpen");
          return;
        }

        if (self._input.disabled || self.config.inline) return;
        var wasOpen = self.isOpen;
        self.isOpen = true;

        if (!wasOpen) {
          self.calendarContainer.classList.add("open");

          self._input.classList.add("active");

          triggerEvent("onOpen");
          positionCalendar(positionElement);
        }

        if (self.config.enableTime === true && self.config.noCalendar === true) {
          if (self.selectedDates.length === 0) {
            self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), false);
            setDefaultHours();
            updateValue();
          }

          if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
            setTimeout(function () {
              return self.hourElement.select();
            }, 50);
          }
        }
      }

      function minMaxDateSetter(type) {
        return function (date) {
          var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
          var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

          if (dateObj !== undefined) {
            self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
          }

          if (self.selectedDates) {
            self.selectedDates = self.selectedDates.filter(function (d) {
              return isEnabled(d);
            });
            if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
            updateValue();
          }

          if (self.daysContainer) {
            redraw();
            if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
            self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
          }
        };
      }

      function parseConfig() {
        var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
        var userConfig = Object.assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
          get: function get() {
            return self.config._enable;
          },
          set: function set(dates) {
            self.config._enable = parseDateRules(dates);
          }
        });
        Object.defineProperty(self.config, "disable", {
          get: function get() {
            return self.config._disable;
          },
          set: function set(dates) {
            self.config._disable = parseDateRules(dates);
          }
        });
        var timeMode = userConfig.mode === "time";

        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
          formats$$1.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }

        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
          formats$$1.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }

        Object.defineProperty(self.config, "minDate", {
          get: function get() {
            return self.config._minDate;
          },
          set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
          get: function get() {
            return self.config._maxDate;
          },
          set: minMaxDateSetter("max")
        });

        var minMaxTimeSetter = function minMaxTimeSetter(type) {
          return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i");
          };
        };

        Object.defineProperty(self.config, "minTime", {
          get: function get() {
            return self.config._minTime;
          },
          set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
          get: function get() {
            return self.config._maxTime;
          },
          set: minMaxTimeSetter("max")
        });

        if (userConfig.mode === "time") {
          self.config.noCalendar = true;
          self.config.enableTime = true;
        }

        Object.assign(self.config, formats$$1, userConfig);

        for (var i = 0; i < boolOpts.length; i++) {
          self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        }

        HOOKS.filter(function (hook) {
          return self.config[hook] !== undefined;
        }).forEach(function (hook) {
          self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        for (var _i = 0; _i < self.config.plugins.length; _i++) {
          var pluginConf = self.config.plugins[_i](self) || {};

          for (var key in pluginConf) {
            if (HOOKS.indexOf(key) > -1) {
              self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
            } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
          }
        }

        triggerEvent("onParseConfig");
      }

      function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = Object.assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({
          config: self.config,
          l10n: self.l10n
        });
      }

      function positionCalendar(customPositionElement) {
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
          return acc + child.offsetHeight;
        }, 0),
            calendarWidth = self.calendarContainer.offsetWidth,
            configPos = self.config.position.split(" "),
            configPosVertical = configPos[0],
            configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
            inputBounds = positionElement.getBoundingClientRect(),
            distanceFromBottom = window.innerHeight - inputBounds.bottom,
            showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = top + "px";

        if (!rightMost) {
          self.calendarContainer.style.left = left + "px";
          self.calendarContainer.style.right = "auto";
        } else {
          self.calendarContainer.style.left = "auto";
          self.calendarContainer.style.right = right + "px";
        }
      }

      function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        updateNavigationCurrentMonth();
        buildDays();
      }

      function focusAndClose() {
        self._input.focus();

        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
          setTimeout(self.close, 0);
        } else {
          self.close();
        }
      }

      function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();

        var isSelectable = function isSelectable(day) {
          return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
        };

        var t = findParent(e.target, isSelectable);
        if (t === undefined) return;
        var target = t;
        var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
          var selectedIndex = isDateSelected(selectedDate);
          if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
          if (self.selectedDates.length === 2) self.clear(false);
          self.selectedDates.push(selectedDate);
          if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
          });
        }
        setHoursFromInputs();

        if (shouldChangeMonth) {
          var isNewYear = self.currentYear !== selectedDate.getFullYear();
          self.currentYear = selectedDate.getFullYear();
          self.currentMonth = selectedDate.getMonth();
          if (isNewYear) triggerEvent("onYearChange");
          triggerEvent("onMonthChange");
        }

        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (self.config.enableTime) setTimeout(function () {
          return self.showTimeInput = true;
        }, 50);
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else self.selectedDateElem && self.selectedDateElem.focus();
        if (self.hourElement !== undefined) setTimeout(function () {
          return self.hourElement !== undefined && self.hourElement.select();
        }, 451);

        if (self.config.closeOnSelect) {
          var single = self.config.mode === "single" && !self.config.enableTime;
          var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

          if (single || range) {
            focusAndClose();
          }
        }

        triggerChange();
      }

      var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays]
      };

      function set(option, value) {
        if (option !== null && typeof option === "object") Object.assign(self.config, option);else {
          self.config[option] = value;
          if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
            return x();
          });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
        }
        self.redraw();
        jumpToDate();
        updateValue(false);
      }

      function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array) dates = inputDate.map(function (d) {
          return self.parseDate(d, format);
        });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
          switch (self.config.mode) {
            case "single":
            case "time":
              dates = [self.parseDate(inputDate, format)];
              break;

            case "multiple":
              dates = inputDate.split(self.config.conjunction).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            case "range":
              dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                return self.parseDate(date, format);
              });
              break;

            default:
              break;
          }
        } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = dates.filter(function (d) {
          return d instanceof Date && isEnabled(d, false);
        });
        if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }

      function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) {
          triggerChange = false;
        }

        if (format === void 0) {
          format = self.config.dateFormat;
        }

        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
      }

      function parseDateRules(arr) {
        return arr.slice().map(function (rule) {
          if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
            return self.parseDate(rule, undefined, true);
          } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
            from: self.parseDate(rule.from, undefined),
            to: self.parseDate(rule.to, undefined)
          };

          return rule;
        }).filter(function (x) {
          return x;
        });
      }

      function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
          get: function get() {
            return self._showTimeInput;
          },
          set: function set(bool) {
            self._showTimeInput = bool;
            if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
            self.isOpen && positionCalendar();
          }
        });
      }

      function setupInputs() {
        self.input = self.config.wrap ? element.querySelector("[data-input]") : element;

        if (!self.input) {
          self.config.errorHandler(new Error("Invalid input element specified"));
          return;
        }

        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;

        if (self.config.altInput) {
          self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
          self._input = self.altInput;
          self.altInput.placeholder = self.input.placeholder;
          self.altInput.disabled = self.input.disabled;
          self.altInput.required = self.input.required;
          self.altInput.tabIndex = self.input.tabIndex;
          self.altInput.type = "text";
          self.input.setAttribute("type", "hidden");
          if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }

        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
      }

      function setupMobile() {
        var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

        if (self.selectedDates.length > 0) {
          self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }

        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";

        try {
          if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {}

        bind(self.mobileInput, "change", function (e) {
          self.setDate(e.target.value, false, self.mobileFormatStr);
          triggerEvent("onChange");
          triggerEvent("onClose");
        });
      }

      function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
      }

      function triggerEvent(event, data) {
        if (self.config === undefined) return;
        var hooks = self.config[event];

        if (hooks !== undefined && hooks.length > 0) {
          for (var i = 0; hooks[i] && i < hooks.length; i++) {
            hooks[i](self.selectedDates, self.input.value, self, data);
          }
        }

        if (event === "onChange") {
          self.input.dispatchEvent(createEvent("change"));
          self.input.dispatchEvent(createEvent("input"));
        }
      }

      function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
      }

      function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
          if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
        }

        return false;
      }

      function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
      }

      function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach(function (yearElement, i) {
          var d = new Date(self.currentYear, self.currentMonth, 1);
          d.setMonth(self.currentMonth + i);
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
          yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
      }

      function getDateStr(format) {
        return self.selectedDates.map(function (dObj) {
          return self.formatDate(dObj, format);
        }).filter(function (d, i, arr) {
          return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
        }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
      }

      function updateValue(triggerChange) {
        if (triggerChange === void 0) {
          triggerChange = true;
        }

        if (self.selectedDates.length === 0) return self.clear(triggerChange);

        if (self.mobileInput !== undefined && self.mobileFormatStr) {
          self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        }

        self.input.value = getDateStr(self.config.dateFormat);

        if (self.altInput !== undefined) {
          self.altInput.value = getDateStr(self.config.altFormat);
        }

        if (triggerChange !== false) triggerEvent("onValueUpdate");
      }

      function onMonthNavClick(e) {
        e.preventDefault();
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);

        if (isPrevMonth || isNextMonth) {
          changeMonth(isPrevMonth ? -1 : 1);
        } else if (self.yearElements.indexOf(e.target) >= 0) {
          e.target.select();
        } else if (e.target.classList.contains("arrowUp")) {
          self.changeYear(self.currentYear + 1);
        } else if (e.target.classList.contains("arrowDown")) {
          self.changeYear(self.currentYear - 1);
        }
      }

      function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown",
            input = e.target;

        if (self.amPM !== undefined && e.target === self.amPM) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        var min = parseFloat(input.getAttribute("data-min")),
            max = parseFloat(input.getAttribute("data-max")),
            step = parseFloat(input.getAttribute("data-step")),
            curValue = parseInt(input.value, 10),
            delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        var newValue = curValue + step * delta;

        if (typeof input.value !== "undefined" && input.value.length === 2) {
          var isHourElem = input === self.hourElement,
              isMinuteElem = input === self.minuteElement;

          if (newValue < min) {
            newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
            if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
          } else if (newValue > max) {
            newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
            if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
          }

          if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
            self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
          }

          input.value = pad(newValue);
        }
      }

      init();
      return self;
    }

    function _flatpickr(nodeList, config) {
      var nodes = Array.prototype.slice.call(nodeList);
      var instances = [];

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        try {
          if (node.getAttribute("data-fp-omit") !== null) continue;

          if (node._flatpickr !== undefined) {
            node._flatpickr.destroy();

            node._flatpickr = undefined;
          }

          node._flatpickr = FlatpickrInstance(node, config || {});
          instances.push(node._flatpickr);
        } catch (e) {
          console.error(e);
        }
      }

      return instances.length === 1 ? instances[0] : instances;
    }

    if (typeof HTMLElement !== "undefined") {
      HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
      };

      HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
      };
    }

    var flatpickr = function flatpickr(selector, config) {
      if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
      return _flatpickr([selector], config);
    };

    flatpickr.defaultConfig = defaults;
    flatpickr.l10ns = {
      en: Object.assign({}, english),
      default: Object.assign({}, english)
    };

    flatpickr.localize = function (l10n) {
      flatpickr.l10ns.default = Object.assign({}, flatpickr.l10ns.default, l10n);
    };

    flatpickr.setDefaults = function (config) {
      flatpickr.defaultConfig = Object.assign({}, flatpickr.defaultConfig, config);
    };

    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;

    if (typeof jQuery !== "undefined") {
      jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
      };
    }

    Date.prototype.fp_incr = function (days) {
      return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };

    if (typeof window !== "undefined") {
      window.flatpickr = flatpickr;
    }

    return flatpickr;

})));
// ========== end flatpickr
