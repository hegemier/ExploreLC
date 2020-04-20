.sk_ww_search_events_form{ margin: 0 0 5px 0; }
.sk_cbar_loading_icon{ margin-top:10px; }
.sk-fb-event * { box-sizing: border-box; }
.d-flex{
    display: flex;
}

.flexible {
  flex: 1 0 auto;
  background-color: blue;
}

.hidden{
    visibility:hidden;
}

.sk_fb_event_tab_option{ margin-bottom:3px; }
.flatpickr-current-month span.cur-month:hover{ background:#ffffff !important; }
.sk_ww_fb_events_date_picker{
    float:left;
    padding:0px 10px !important;
    box-sizing:border-box;
    border:2px solid #888888 !important;
    outline:0;
    display: inline !important;
    margin:0 !important;
    width: 100px;
    height:36px;
    line-height:36px;
    font-size: 14px !important;
    text-align: center;
}
.container_sk_ww_calendar_navigation{
    float:left;
    display:none;
    margin-bottom:3px;
    position:relative;
}

.sk_fb_events_view_title,
.sk_fb_events_grid_view_title,
.sk_fb_events_list_view_title,
.sk_fb_events_month_view_title
{
    font-size: 23px;
    width:100%;
    margin: 0px 5px 5px 5px;
    font-weight:bold;
}

.dayNames td{ text-align:left !important; }

.sk_fb_events_calendar_today{
    display:inline-block; background-color:blue; color:white; padding:5px; border-radius:50%;
}

.sk_fb_events_calendar_spacer{
    display:inline-block; padding:5px; border-radius:50%;
}

.sk_fb_event_items_holder{
    overflow:hidden;
    width:100%;
}

.grid-facebook-event .sk_post_img,
.grid_sk_upcoming_events .sk_post_img,
.grid_sk_past_events .sk_post_img,
.grid_sk_search_events .sk_post_img
{ width:100%; }

.grid-facebook-event .sk_link_img,
.grid_sk_upcoming_events .sk_link_img,
.grid_sk_past_events .sk_link_img,
.grid_sk_search_events .sk_link_img
{ padding:0 1px; }


/* ---- grid ---- */
.grid-facebook-event,
.grid_sk_upcoming_events,
.grid_sk_past_events,
.grid_sk_search_events
{
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.grid-facebook-event .sk_fb_events_col,
.grid_sk_upcoming_events .sk_fb_events_col,
.grid_sk_past_events .sk_fb_events_col,
.grid_sk_search_events .sk_fb_events_col
{
    float: left;
    width: 25%;
}

.grid-facebook-event .sk_fb_events_col .grid-item-facebook-event,
.grid_sk_upcoming_events .sk_fb_events_col .grid-item-facebook-event,
.grid_sk_past_events  .sk_fb_events_col .grid-item-facebook-event,
.grid_sk_search_events .sk_fb_events_col .grid-item-facebook-event
{
   display: block;
   margin: 0;
   padding: 0;
   margin-bottom:5px;
}


/* clearfix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-item-facebook-event a{ text-decoration:none !important; }

/* ---- grid-item-facebook-event ---- */

.grid-sizer-facebook-event,
.grid-item-facebook-event,
.grid_sizer_sk_upcoming_events,
.grid_sizer_sk_past_events
{
    width: 100%;
    overflow:hidden;
}

.grid-item-facebook-event {
  padding:0px;
  height:auto;
  overflow:hidden;
  text-align: left;
}

.grid-item-facebook-event--width2 { width:  40%; }
.grid-item-facebook-event--width3 { width:  60%; }

.grid-item-facebook-event--height2 { height: 200px; }
.grid-item-facebook-event--height3 { height: 260px; }
.grid-item-facebook-event--height4 { height: 360px; }

.grid-content{
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15) inset, 0 3px 6px rgba(0, 0, 0, .1);
    padding:1px;
    overflow:hidden;
    padding: 0px !important;
    margin: 5px !important;
}

.sk_fb_events_pop_html_event_details{
    padding:8px 20px 10px 20px; display:block; background-color:#ffffff;
}

.sk_fb_events_load_more_btn_container{
    width:100%;
    margin:15px 5px 5px 5px !important;
    overflow:hidden;
}

.sk_fb_events_load_more_btn,
.sk_fb_events_bottom_follow_btn{
    display: block;
    float:left;
    padding:8px;
    background-color:#435b77;
    color:#fff;
    border:none;
    border-radius:3px;
    cursor: pointer;
    margin-right:5px;
}

.sk-cal-pop-up-content{
    background-color:#ffffff;
}

.sk-cal-pop-up-content-item{
    display:block;
    overflow:hidden;
    width:100%;
    background-color: #fff;
    margin-bottom: 18px;
}

.sk-cal-pop-up-content-item-name{
    padding:8px 0;
    font-weight:bold;
    font-size:18px;
}

.sk-cal-pop-up-content-item-tickets,
.sk-cal-pop-up-content-item-date-time,
.sk-cal-pop-up-content-item-location,
.sk-cal-pop-up-content-item-fb-link{
    padding:8px 0px;
    font-size:16px;
}

.sk_fb_event_u_states{
    padding: 9px;
    border-radius: 3px;
    display:none;
}

.select_month_year_content{
    padding:15px !important;
    width: 300px !important;
}

.select_month_year_content select{
    padding: 10px !important;
    color: #555555;
    display: inline !important;
    width: auto !important;
}

.select_month_year_content .sk_fb_event_cal_btn_select{
    padding: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.select_month_year_content div{

}

.select_month_year{
    cursor:pointer;
}

.sk_error_message{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding: 20px 45px;
    line-height: 30px;
    background-color: #1972f5;
    color: #ffffff;
    border-radius: 3px;
}

.sk_error_message a{
    color:#ffffff !important;
    text-decoration:underline !important;
}

.sk_powered_by{
    text-align:center;
    padding:5px;
}

.sk_powered_by a{
    text-decoration:none;
    padding:5px;
    background-color:#000000;
    color:#ffffff;
    border-radius: 3px;
}

.sk_fb_events_export_tab_content{
display:none;
width: 100%;
float: none;
overflow: hidden;
padding-top: 20px;
}

.sk_fb_events_export_tab_content_shown{
display:block !important;
}

.sk_fb_events_export_tab{
padding:8px 10px;
float:left;
border:thin solid #555555;
border-radius:3px;
margin-right:10px;
cursor:pointer;
}

.sk_fb_events_export_tab_active{
background-color:#555555;
color:#ffffff;
}

.sk_fb_events_export_tab_title {
    font-size: 22px;
    text-align: left;
    font-weight: bold;
    background-color: #ffffff;
    margin-bottom: 20px;
}

.sk_ww_fb_page_events_export_options{
    background-color:#ffffff;
}

.sk_ww_fb_page_events_export_info{
padding:20px;
overflow:hidden;
background-color:#ffffff !important;
}

.sk_fb_events_options_btn{
    overflow:hidden;
    margin: 0px 5px 10px 2px;
}

.sk_fb_events_options_btn .mobile-btn-menu{
    width:100%;

    border-radius: 5px;
    padding: 0px !important;
    cursor: pointer;
    font-size:13px;
    height:45px !important;
    margin:5px 2px;

}

.sk_fb_events_options{
    overflow:hidden;
    margin: 0 5px;
    padding-top: 5px;
}

.sk_ww_search_icon{

}

.sk_ww_search_button{
    width:45px;
    border: none;
    padding: 0px !important;
    cursor: pointer;
    font-size:13px;
    margin-top:0 !important;
    margin-bottom:0 !important;

    float:left;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-left: 1px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;

}
.sk_ww_search_events{
    padding:8px;
    padding-right:25px;
    text-overflow:ellipsis;
    width:100%;
    box-sizing:border-box;
    border-top-left-radius:3px;
    border-bottom-left-radius:3px;
    border:2px solid #888888 !important;
    outline:0;
    display: inline !important;
    margin:0 !important;
    height:36px;
    font-size: 14px !important;
}

.container_sk_ww_search_events{
    display:none;
    box-sizing: border-box;
    float:left;
    position:relative;
    margin-right:10px;
    margin-bottom:3px;
}

.container_sk_ww_input_and_icon{
    box-sizing: border-box;
    position:relative;
}

.sk_ww_search_no_upcoming_events,
.sk_ww_search_no_past_events{ margin:10px 0 0 0; }

.mt13px{ margin-top:13px !important; }

.sk_event_image_bg{
    background-color:#ffffff;
    width:100%;
}

body .mfp-close-btn-in .mfp-close {
    color: #ffffff;
    background-color: #000000;
    top: 4px;
    right: 3px;
    font-size: 20px;
    width: 30px;
    height: 30px;
    line-height: 27px;
    text-align: center;
}

.sk_cal_day_event_count{
    border:thin solid #ffffff;
    font-size: 14px;
    display:none;
    padding:2px;
    border: thin solid #03A9F4;
    border-radius:3px;
}

.sk_events_separator{
    height:20px;
    background-color:rgba(255,255,255,0)
}

.sk-fb-event .no_events_found{
    padding: 13px 10px;
    margin: 35px 5px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}

.sk-w-100-pct{ width:100% !important; }
.sk-m-r-15px{ margin-right:25px; }
.sk-m-l-15px{ margin-left:25px; }
.sk-m-0{ margin:0 !important; }

.sk_trial_ended_message{
    text-align:center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 30px;
    background-color: #1972f5;
    color: #ffffff;
    padding: 20px 45px;
    border-radius: 3px;
}

.sk_trial_ended_message a{
    color:#ffffff !important;
    font-weight:bold;
}

.mfp-inline-holder .mfp-content, .mfp-ajax-holder .mfp-content{
color:#222222;
}

.mfp-container:before{
    display:initial !important;
}

.sk-fb-event .sk-calendar-tbl-holder .cal-day-number{
    font-weight:bold;
    font-size:18px;
    margin-bottom:10px;
    text-align:right;
}

.sk-fb-event .sk-calendar-tbl-holder .cal-day-event{
    margin:5px 0;
    border: thin solid #ffffff;
    padding: 3px 5px;
    border-radius: 3px;
    text-align:left !important;
    font-size:13px;
    line-height:18px;
    font-weight: 400;
    border:thin solid #03A9F4;
}

.sk-fb-event .sk-calendar-tbl-holder .cal-day-event:hover{
text-decoration:underline;
}

.sk-fb-event .calendar-date-events{ display:none; }
.sk-fb-event .sk-cal-highlight-day{
    cursor:pointer;
    vertical-align: top;
}

.sk-fb-event .sk-cal-empty-day{
    vertical-align: top;
}

.sk-fb-event .sk-calendar-tbl{ display:table; background-color:transparent !important; }
.sk-fb-event .sk-cal-btn{
    border: none;
    padding: 0px !important;
    cursor: pointer;
    width:38px;
    font-size:13px;
    height:36px;
    margin-top:0 !important;
    margin-bottom:0 !important;
}

.sk-fb-event .p-8px{ padding:8px; }
.sk-fb-event .m-t-10px{ margin-top:10px; }

.sk-fb-event .sk-watermark {
    position: relative;
    overflow: hidden;
    background-color: #4885ed;
    color: #ffffff;
    width: 100%;
    text-align: center;
    z-index: 999;
    margin-bottom: 5px;
    padding:3px;
}

.sk-fb-event .sk-watermark a{
    color:#ffffff;
    text-decoration:none;
}

.sk-fb-event .sk-watermark a:hover{

}

.sk-fb-event .sk-watermark .sk-powered-by{
    cursor:pointer;
    font-weight:bold;
}

.sk-fb-event .sk-watermark .sk-learn{
    cursor:pointer;
    font-weight:bold;
    text-transform:uppercase;
}

.sk-fb-event .sk-watermark img{
    width: 70px;
    position: absolute;
    bottom: 0px;
}

.sk-fb-event .sk-month-year{
    font-size: 20px;
    line-height: 35px;
    text-align:center;
}

.sk-upcoming-events,
.sk-past-events,
.sk-calendar-events,
.sk-clicked-date-events,
.sk-search-events-results{
    display:none;
    margin-top:0px;
    margin-bottom:20px;
    overflow:hidden;
    box-sizing: border-box;
}

.sk-calendar-events{ padding:0; }
.sk-cal-prev-month{
    float:left;
    margin-right:2px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    margin-right: 1px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
.sk-cal-next-month{
    float:left;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-left: 1px;
    margin-right:10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.sk-upcoming-events .img-loader,
.sk-past-events .img-loader,
.sk-calendar-events .img-loader{
    padding: 15px 0;
    margin: 0 auto;
    display: block;
    text-align:center;
}

.sk-fb-event .title{
    color:#ffffff;
    font-size:25px;
    line-height:50px;
    text-decoration: none;
    font-weight:bold;
    margin:0;
    display:inline-block;
}

.sk_fb_events_white_pop_up{
    position: relative;
    padding: 0;
    width: auto;
    max-width: 610px;
    margin: 20px auto;
    overflow:hidden;
    background-color:transparent;
}

.sk_fb_events_white_pop_up a{
    color:#1565c0;
    text-decoration:none;
}

.sk_fb_events_white_pop_up a:hover{
    text-decoration:underline;
}

.sk-fb-event .tab-grid-events,
.sk-fb-event .tab-list-events,
.sk-fb-event .tab-masonry-events,
.sk-fb-event .tab-calendar-events,
.sk-fb-event .tab-export-calendar,
.sk-fb-event .tab-slider-events{
    padding:0 8px !important;
    line-height: 36px;
    cursor: pointer;
    float:left;
    margin-left: 1px;
    width: auto;
    text-align:center;
    box-sizing: border-box;
    font-size:15px;
    height:36px;
}

.sk-fb-event-item{
    /* margin:15px 10px 0px 10px; */
    margin:0;
    overflow:hidden;
}

.display-none{ display:none; }

.event-list{
    margin: 15px 0 80px 0;
    overflow: hidden;
    padding:0;
}

.event-more-details{
    border-left:1px solid #1c1c27;
    border-right:1px solid #1c1c27;
    border-bottom:1px solid #1c1c27;
    display:none;
    background-color: #ffffff;
}

.event-more-details img{
    display:block; margin:0 auto;
}

.event-more-details .more-details-map{ margin:0; width:100%; }

.event-more-details a{ color:rgb(52,128,220); text-decoration:none; }
.event-more-details a:hover{ color:rgb(52,128,220); text-decoration:underline; }

.m-b-20px{
    margin-bottom: 20px;
}

.sk-event-details{

}
.sk-event-details a{ color:rgb(52,128,220); text-decoration:none; }
.sk-event-details a:hover{ color:rgb(52,128,220); text-decoration:underline; }

.sk-event-details-text{
width:100%; margin:10px 0 0 0;
}

.view-border{
    border:thin solid red;
}

.photo-thumb {
    width: 300px;
    height: 200px;
    cursor: pointer;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}

.read-one-event-title{
    font-size: 22px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    background-color:#ffffff;
}

.read-one-event-details{
    margin:0; padding:0 18px 10px 18px;
    background-color:#ffffff;
}

.event-single-item {
    background-color:#1c1c27;
    width:100%;
    margin:0 0 0 0 !important;
    display:block;
    overflow:hidden;
}

.event-single-item .date-month {
    position: absolute;
    left: 10px;
    top: 10px;
    max-width: 80px;
    height: 90px;
    padding: 0;
    width: 50px;
}

.event-single-item .date {
    position: relative;
    z-index: 1;
    display: block;
    text-align: center;
    height: 40px;
    width: 100%;
    line-height: 40px;
    font-weight: 800;
    font-size: 18px;
    background: #a08854;
    color: #ffffff;
    padding: 0;
}

.event-single-item .month {
    position: relative;
    z-index: 20;
    padding-top: 0;
    text-align: center;
    display: block;
    background: #2c1c24;
    color: #ffffff;
    height: 20px;
    width: 100%;
    line-height: 20px;
    text-transform: uppercase;
    padding: 0;
    font-size: 15px !important;
}

.event-header{
    margin:0 0 2em 0;
}

.padding-0{
    padding:0;
}

body .event-single-item h2 a {
    color:#ffffff;
    font-size:25px;
    text-decoration: none;
    font-weight:bold;

}

.event-single-item h2 a:hover {
    color:ebff00;
}

.event-single-item .tag{
    margin:0;
    font-size:16px;
}


.event-single-item .fa,.sk-event-details .fa{
    padding-right: 5px;
    color:#9c8b69;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.event-single-item .event-btns{
    overflow: hidden;
    display: block;
}

.event-single-item .event-btn {
    padding: 3px 10px;
    border-radius: 3px;
    text-decoration: none;
    margin:5px 10px 0 0 !important;
    background-color:#a08854;
    border: 1px solid #a08854;
    color:#ffffff;
    cursor:pointer;
}

.event-single-item .event-btn:hover {
    border: 1px solid #ffffff;
    background-color:#ffffff;
    color:#000000;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.event-single-item .event-details .event-btns a{
    color:#ffffff;
    box-sizing: border-box;
    text-align: center;
    display:block;
    float: left;
}

.event-single-item .event-btns a:hover{
    color:#000000;
}

.event-single-item a {
    // color:#ac8d68;
    text-decoration:none;
}

.event-single-item a:hover,
.event-single-item a:focus {
    // color: #ffffff;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.padding-8px-0{
    padding:8px 0;
    overflow:hidden;
}

.events-select{
    display:none;
}

.events-tabs{
    display:block;
    padding:0;
    overflow:hidden;
    text-align:left;
    float:right;
}

.fb-page-like-box{
    padding:1em 0 0 0;
}

.sk_ww_fb_events_location {
    letter-spacing:0px !important;
}
/* small screen */
@media (max-width: 412px) {
    .swiper-wrapper{
        height: auto !important;
    }
    
    .events-select{
        display:block;
    }
    
    .events-tabs{
        display:none;
    }
    
    
    .sk-fb-event .sk-calendar-tbl-holder{
        overflow-x:scroll;
    }

    .sk_fb_events_options{
        margin-top: -17px !important;
    }
}


.read-one-event-img{
    max-width:100%;
    display:block;
    margin:0 auto;
}




/* ===================== calendar ===================== */
.sk-fb-event table {
    width:100%;
    background-color:#1c1c27;
    color:#f1f1f1;
    border-collapse: separate !important;
    border-spacing: 8px  !important;
}

.sk-fb-event table td{
    padding:8px 3px;
    width:14%;
}

.calendar-day-head{
    font-weight:bold;
    text-align:center;
}

.month-navigation{
    margin:0 0 1em 0;
    overflow:hidden;
}

.month-navigation a{
    background-color:#a08854;
    border: 1px solid #a08854;
    color:#ffffff;
}

.month-navigation a:hover{
    border: 1px solid #ffffff;
    color:#000000;
    background-color:#ffffff;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.calendar-day a{
    text-decoration:none;
}

.day-active{
    background-color:#a08854;
    border: 1px solid #a08854;
    font-weight:bold;
    color:#ffffff;
}

.day-active:hover{
    border: 1px solid #ffffff;
    background-color:#ffffff;
    color:#000000;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.day-number{
    width: 100%;
    height: 5em;
    line-height: 5em;
    text-align: center;
}

.nav-tabs > li.active > a{
    background-color: #a08854;
    border: 1px solid #a08854;
    color:#ffffff;
}

.nav-tabs > li.active > a:hover{
    background-color: #777772;
    border: 1px solid #777772;
    color:#ffffff;
}

.nav-tabs > li > a:hover{
    background-color: #777772;
    border: 1px solid #777772;
    color:#ffffff;
}

.sk-fb-event-thumb-section{
    position:relative;
    float:left;
    width:300px;
    overflow:hidden;
}

.sk-fb-event-thumb-section img{
    border:none !important;
    padding:0 !important;
    height:auto;
    cursor: pointer;
}

.sk-fb-event-initial-details-section{
    overflow:hidden;
    float:left;
    width: 56%;
    padding: 0 2%;
    text-align:left;
    box-sizing: border-box;
}

.sk-fb-event-initial-details-section .fa{
    margin-top:3px;
}

.sk-fb-event{
    display: block;
}

.sk_facebook_event_slider_holder{
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

// fixed full image
.bp-lt-bs-100{
    background-position: left top;
    background-size: 100% 100%;
}

.default_hidden{
    display: none;
}


/* small screen */
@media (width < 430px) { 
    .sk_fb_events_options_btn {
        display:block !important;
    }
    .events-tabs{
        width: 100% !important;
    }
    .sk_fb_event_tab_option{
        width: 100% !important;
    }
    .sk_fb_event_tab_option {
        width: 100% !important;
    }
    .sk_fb_events_options {
        display:block !important;
    }
}

.tingle-modal--visible{
  z-index: 999999 !important;
}

.align_icon_text{
    margin-top: -4px;
}

.show_more_false{
    display: none !important;
}

.show_more_true{
    display: flex !important;
}

.more-desc:hover{
    text-decoration: none !important;
}

.more-desc{
    margin-left: 22px;
    cursor: pointer !important;
}