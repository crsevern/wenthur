function sendGlobalRowDataToDb(globalRowAttrToSet,askGlobalRowName){

  globalRowAttrToSet['globalRowTitle'] = askGlobalRowName;
  
  var encodedglobalRowAttrToSet = JSON.stringify(globalRowAttrToSet);

  jQuery.ajax({
      url: admURL+'/admin-ajax.php?action=ulpb_insert_global_row_content&POPB_GRI_Nonce='+shortCodeRenderWidgetNO,
      method: 'post',
      data:  encodedglobalRowAttrToSet,
      contentType: "application/json",
      success: function(result){
        jQuery('.globalRowRetrievedPostID').val(result);
      },
      async:false
  });


}

function getGlobalRowDataFromDb(globalRowID){
  jQuery.ajax({
      url: admURL+'/admin-ajax.php?action=ulpb_get_global_row_content&POPB_GRG_Nonce='+shortCodeRenderWidgetNO,
      method: 'post',
      data:{  globalRowID:globalRowID },
      success: function(result){
        jQuery('.globalRowRetrievedAttributes').val(result);
      },
      async:false
  });

}

function subscribeFormWidgetRender(this_widget){
            var formLayout = this_widget['formLayout'];
            var showNameField = this_widget['showNameField'];
            var successAction = this_widget['successAction'];
            var successURL = this_widget['successURL'];
            var successMessage = this_widget['successMessage'];
            var formBtnText = this_widget['formBtnText'];
            var formBtnHeight = this_widget['formBtnHeight'];
            var formBtnWidth = this_widget['formBtnWidth'];
            var formBtnBgColor = this_widget['formBtnBgColor'];
            var formBtnColor = this_widget['formBtnColor'];
            var formBtnHoverBgColor = this_widget['formBtnHoverBgColor'];
            var formBtnFontSize = this_widget['formBtnFontSize'];
            var formBtnBorderWidth = this_widget['formBtnBorderWidth'];
            var formBtnBorderColor = this_widget['formBtnBorderColor'];
            var formBtnBorderRadius = this_widget['formBtnBorderRadius'];

            formBtnFontFamily = ' ';
            if (typeof(this_widget['formBtnFontFamily']) != 'undefined') {
              var formBtnFontFamily = this_widget['formBtnFontFamily'];
            }
            formSuccessMessageColor = '#333';
            if (typeof(this_widget['formSuccessMessageColor']) != 'undefined') {
              var formSuccessMessageColor = this_widget['formSuccessMessageColor'];
            }

            formBtnHeightTablet = ' '; formBtnHeightMobile = ' '; formBtnFontSizeTablet = ' '; formBtnFontSizeMobile = ' ';
            if (typeof(this_widget['formBtnHeightTablet']) != 'undefined') {
              var formBtnHeightTablet = this_widget['formBtnHeightTablet'];
              var formBtnHeightMobile = this_widget['formBtnHeightMobile'];

              var formBtnFontSizeTablet = this_widget['formBtnFontSizeTablet'];
              var formBtnFontSizeMobile = this_widget['formBtnFontSizeMobile'];
            }

              formbtnIcon = ''; formbtnIconBefore = ''; formbtnIconAfter = ''; formbtnIconAnimation = '';
              if (typeof(this_widget['formbtnSelectedIcon']) != 'undefined') {
                formbtnSelectedIcon = this_widget['formbtnSelectedIcon'];
                formbtnIconPosition = this_widget['formbtnIconPosition'];
                formbtnIconAnimation = this_widget['formbtnIconAnimation'];
                formbtnIconGap = this_widget['formbtnIconGap'];

                if (formbtnSelectedIcon != '') {
                  if (formbtnIconPosition == 'before') {
                    formbtnIconGap = 'margin-right:'+formbtnIconGap+'px;';
                  }else{
                    formbtnIconGap = 'margin-left:'+formbtnIconGap+'px;';
                  }
                  formbtnIcon = '<i style="'+formbtnIconGap+'" class="fa '+formbtnSelectedIcon+'"></i>';
                }else{
                  formbtnIcon = '';
                }

                if (formbtnIconPosition == 'before') {
                  formbtnIconBefore = formbtnIcon;
                  formbtnIconAfter = '';
                }else{
                  formbtnIconAfter = formbtnIcon;
                  formbtnIconBefore = '';
                }
              }

            var formLayoutAction = " ";
            var formFieldWidth = '60%';
            var formButtonWidth = '30%';
            if (showNameField  == 'block'){ formFieldWidth = '35%' }
            if (showNameField  == 'block' && formLayout  == 'inline' ){ showNameField = 'inline-block'; formButtonWidth = '25%'}
            if (formLayout  == 'stacked') { formLayoutAction = "<br>"; formFieldWidth = '99.9%';formButtonWidth = '99.9%'; }

            var inputNameStyles = "display:"+showNameField+"; width:"+formFieldWidth+"; padding: "+formBtnHeight+"px 5px; font-size:"+formBtnFontSize+"px;";
            var inputEmailStyles = "width:"+formFieldWidth+"; padding: "+formBtnHeight+"px 5px; font-size:"+formBtnFontSize+"px;";
            var inputButtonStyles = "width:"+formButtonWidth+"; padding: "+formBtnHeight+"px "+'5px'+"; font-size:"+formBtnFontSize+"px; background:"+formBtnBgColor+"; color:"+formBtnColor+"; border: "+formBtnBorderWidth+"px solid "+formBtnBorderColor+" !important; border-radius: "+formBtnBorderRadius+"px !important;  font-family:"+formBtnFontFamily.replace(/\+/g, ' ')+";   ";

            var this_widget_form_inputName = "<input type='text'  placeholder='Your name' style='"+inputNameStyles+"' >"+formLayoutAction;
            var this_widget_form_inputEmail = "<input type='text' placeholder='Your e-mail' style='"+inputEmailStyles+"' >"+formLayoutAction;
            var this_widget_form_inputSubmit = "<button type='submit'  style='"+inputButtonStyles+"' class='btnField' disabled> "+formbtnIconBefore+" "+formBtnText+" "+formbtnIconAfter+" </button>";

            var uniqueFormId = 'pbSubscribe'+Math.floor((Math.random() * 2000) + 100);
            var this_widget_form = "<form id='"+uniqueFormId+"'> "+this_widget_form_inputName+" "+this_widget_form_inputEmail+" "+this_widget_form_inputSubmit+" </form>";

            var currWidgetDefaultResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-l') ) { "+

              "  jQuery('#"+uniqueFormId+" input, #"+uniqueFormId+" button').animate({'font-size':'"+formBtnFontSize+"px',  'padding-top':'"+formBtnHeight+"px', 'padding-bottom':'"+formBtnHeight+"px',  }); "+
              

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-l' ) { "+

              "  jQuery('#"+uniqueFormId+" input, #"+uniqueFormId+" button').animate({'font-size':'"+formBtnFontSize+"px',  'padding-top':'"+formBtnHeight+"px', 'padding-bottom':'"+formBtnHeight+"px',  }); "+
              
              "}"+
              " "+
              '</script> ';

            var currWidgetTabletResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-m') ) { "+

              "  jQuery('#"+uniqueFormId+" input, #"+uniqueFormId+" button').animate({'font-size':'"+formBtnFontSizeTablet+"px',  'padding-top':'"+formBtnHeightTablet+"px', 'padding-bottom':'"+formBtnHeightTablet+"px',  }); "+
              

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-m' ) { "+

              "  jQuery('#"+uniqueFormId+" input, #"+uniqueFormId+" button').animate({'font-size':'"+formBtnFontSizeTablet+"px',  'padding-top':'"+formBtnHeightTablet+"px', 'padding-bottom':'"+formBtnHeightTablet+"px',  }); "+
              
              "}"+
              " "+
              '</script> ';

            var currWidgetMobileResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-s') ) { "+

              "  jQuery('#"+uniqueFormId+" input, #"+uniqueFormId+" button').animate({'font-size':'"+formBtnFontSizeMobile+"px',  'padding-top':'"+formBtnHeightMobile+"px', 'padding-bottom':'"+formBtnHeightMobile+"px',  }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-s' ) { "+

              "  jQuery('#"+uniqueFormId+" input, #"+uniqueFormId+" button').animate({'font-size':'"+formBtnFontSizeMobile+"px',  'padding-top':'"+formBtnHeightMobile+"px', 'padding-bottom':'"+formBtnHeightMobile+"px',  }); "+
              
              "}"+
              " "+
              '</script> ';

              var thisRenderredWidget = {
                WidgetHtml: this_widget_form,
                WidgetScript: currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive,
              }
            return thisRenderredWidget;
}
function postsSliderWidgetRender(this_widget_postsSlider){

  var psAutoplay = this_widget_postsSlider['psAutoplay'];
  var psSlideDelay = this_widget_postsSlider['psSlideDelay'];
  var psSlideLoop = this_widget_postsSlider['psSlideLoop'];
  var psSlideTransition = this_widget_postsSlider['psSlideTransition'];
  var psPostsNumber = this_widget_postsSlider['psPostsNumber'];
  var psDots = this_widget_postsSlider['psDots'];
  var psArrows = this_widget_postsSlider['psArrows'];
  var psFtrImage = this_widget_postsSlider['psFtrImage'];
  var psFtrImageSize = this_widget_postsSlider['psFtrImageSize'];
  var psExcerpt = this_widget_postsSlider['psExcerpt'];
  var psReadMore = this_widget_postsSlider['psReadMore'];
  var psMoreLinkText = this_widget_postsSlider['psMoreLinkText'];
  var psHeadingSize = this_widget_postsSlider['psHeadingSize'];
  var psTextAlignment = this_widget_postsSlider['psTextAlignment'];
  var psBgColor = this_widget_postsSlider['psBgColor'];
  var psTxtColor = this_widget_postsSlider['psTxtColor'];
  var psHeadingTxtColor = this_widget_postsSlider['psHeadingTxtColor'];
  var psPostType = this_widget_postsSlider['psPostType'];
  var psPostsOrderBy = this_widget_postsSlider['psPostsOrderBy'];
  var psPostsOrder = this_widget_postsSlider['psPostsOrder'];
  var psPostsFilterBy = this_widget_postsSlider['psPostsFilterBy'];
  var psFilterValue = this_widget_postsSlider['psFilterValue'];

  function PShexToRGB(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
  }

  switch(psFtrImageSize){
    case 'thumbnail':
    psFtrImageSizes = '150x150';
    break;
    case 'medium':
    psFtrImageSizes = '300x200';
    break;
    case 'large':
    psFtrImageSizes = '750x500';
    break;
    default:
    psFtrImageSizes = '750x700';
    break;
  }

  if (psDots == 'false') {
    psDots = 'none';
  }
  if (psArrows == 'false') {
    psArrows = 'none';
  }

  var DotColor = PShexToRGB(psBgColor, -40);
  var PSliderHeading = '<h3 style="color:'+psHeadingTxtColor+'; font-size:'+psHeadingSize+'px; text-align:'+psTextAlignment+'; ">Hello World!</h3>';
  var PSliderReadMore = '<a  style="display:'+psReadMore+';"> '+psMoreLinkText+' </a>';
  var PSliderExcerpt = '<p style="display:'+psExcerpt+'; text-align:'+psTextAlignment+';color:'+psTxtColor+'; font-size:'+((psHeadingSize/2)+1)+'px;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '+PSliderReadMore+'</p>';
  var PSliderFtrImage = '<br style="display:'+psFtrImage+';"><img src="http://placehold.it/'+psFtrImageSizes+'" style="display:'+psFtrImage+';"><br style="display:'+psFtrImage+';">';
  var PSliderDots = '<br style="display:'+psDots+';"><br style="display:'+psDots+';"><div style="display:'+psDots+'; margin:0 auto; width:10px; height:10px; border-radius:100px; background:'+DotColor+';"></div>';
  var PSliderArrows = '<br style="display:'+psArrows+';"><div style="display:'+psArrows+'; margin:0 auto;" ><span class="dashicons dashicons-arrow-left-alt2" style="color:'+DotColor+'; margin:5px; font-size:40px;"></span> <span class="dashicons dashicons-arrow-right-alt2" style="color:'+DotColor+'; margin:5px; font-size:40px;"></span> </div>';


  var PSlider = '<div style="background:'+psBgColor+'; text-align:'+psTextAlignment+'; width:95%; margin: 0 auto; padding:0.1% 0 2% 0;">'+PSliderFtrImage+PSliderHeading+PSliderExcerpt+PSliderDots+PSliderArrows+'</div>';

              var thisRenderredWidget = {
                WidgetHtml: PSlider,
                WidgetScript: ' ',
              }
  return thisRenderredWidget;

}

function cardWidgetRender(this_widget_card){

  var pbSelectedCardIcon = this_widget_card['pbSelectedCardIcon'];
  var pbCardIconSize = this_widget_card['pbCardIconSize'];
  var pbCardIconRotation = this_widget_card['pbCardIconRotation'];
  var pbCardIconColor = this_widget_card['pbCardIconColor'];
  var pbCardTitleColor = this_widget_card['pbCardTitleColor'];
  var pbCardTitleSize = this_widget_card['pbCardTitleSize'];
  var pbCardDescColor = this_widget_card['pbCardDescColor'];
  var pbCardDescSize = this_widget_card['pbCardDescSize'];
  var pbCardTitle = this_widget_card['pbCardTitle'];
  var pbCardDesc = this_widget_card['pbCardDesc'];

  pbWidgetCardId = 'pb_card_'+Math.floor((Math.random() * 2000) + 100);

  var currCardWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+pbCardTitleSize+"px',}); "+
        "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+pbCardDescSize+"px',}); "+
        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+pbCardTitleSize+"px',}); "+
        "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+pbCardDescSize+"px',}); "+
        
        "}"+
        " "+
        '</script> ';


      currCardWidgetResponsiveScripts = '\n' + currCardWidgetDefaultResponsive;
      if (typeof( this_widget_card['pbCardTitleSizeTablet']) !== 'undefined' ) {

        var currCardWidgetDefaultResponsiveTablet  = ''+
          '<script>'+
          "jQuery('.responsiveBtn').live('click',function(){"+
          " if (jQuery(this).hasClass('rbt-m') ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeTablet']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeTablet']+"px',}); "+
          "}"+
          
          " });"+
          "var currentVPS = jQuery('.currentViewPortSize').val();"+
          "if ( currentVPS == 'rbt-m' ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeTablet']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeTablet']+"px',}); "+
          
          "}"+
          " "+
          '</script> ';

        var currCardWidgetDefaultResponsiveMobile  = ''+
          '<script>'+
          "jQuery('.responsiveBtn').live('click',function(){"+
          " if (jQuery(this).hasClass('rbt-s') ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeMobile']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeMobile']+"px',}); "+
          "}"+
          
          " });"+
          "var currentVPS = jQuery('.currentViewPortSize').val();"+
          "if ( currentVPS == 'rbt-s' ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeMobile']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeMobile']+"px',}); "+
          
          "}"+
          " "+
          '</script> ';

        currCardWidgetResponsiveScripts = '\n' + currCardWidgetDefaultResponsive + '\n' + currCardWidgetDefaultResponsiveTablet + '\n' + currCardWidgetDefaultResponsiveMobile;

      }

  var cardWidgetIconStyles = 'transform: rotate('+pbCardIconRotation+ 'deg); color:'+pbCardIconColor+'; font-size:'+pbCardIconSize+'px;';

  var cardWidgetIcon = '<i class="'+pbSelectedCardIcon+'" style="'+cardWidgetIconStyles+'" ></i>';

  var cardWidgetHeading = '<h2 style="color:'+pbCardTitleColor+'; font-size:'+pbCardTitleSize+'px !important;">'+pbCardTitle+'</h2>';

  var cardWidgetDesc = '<p style="color:'+pbCardDescColor+'; font-size:'+pbCardDescSize+'px;">'+pbCardDesc+'</p>';

  var cardWidgetHTML = '<div style="text-align:center;padding:3%;" id="'+pbWidgetCardId+'">'+cardWidgetIcon + cardWidgetHeading + cardWidgetDesc+'</div>';

  var thisRenderredWidget = {
    WidgetHtml: cardWidgetHTML,
    WidgetScript: currCardWidgetResponsiveScripts,
  }

  return thisRenderredWidget;
}

function testimonialWidgetRender(this_widget_testimonial, j, this_column ,this_column_type){

  var tsAuthorName = this_widget_testimonial['tsAuthorName'];
  var tsJob = this_widget_testimonial['tsJob'];
  var tsCompanyName = this_widget_testimonial['tsCompanyName'];
  var tsTestimonial = this_widget_testimonial['tsTestimonial'];
  var tsUserImg = this_widget_testimonial['tsUserImg'];
  var tsImageShape = this_widget_testimonial['tsImageShape'];
  var tsIconColor = this_widget_testimonial['tsIconColor'];
  var tsIconSize = this_widget_testimonial['tsIconSize'];
  var tsTextColor = this_widget_testimonial['tsTextColor'];
  var tsTextSize = this_widget_testimonial['tsTextSize'];
  var tsTestimonialColor = this_widget_testimonial['tsTestimonialColor'];
  var tsTestimonialSize = this_widget_testimonial['tsTestimonialSize'];
  var tsTextAlignment = this_widget_testimonial['tsTextAlignment'];

  var iconHTML = '<i class="fa fa-quote-left" style="border:2px solid '+tsIconColor+'; padding:15px; font-size:'+tsIconSize+'px; color:'+tsIconColor+'; text-align:center; margin:5px 0 5px 0; border-radius:'+tsImageShape+'; "></i>';

  if (tsUserImg !== '') {
    var imgHTMLCenter = '<img src='+tsUserImg+' style="width:25%; height:25%; border-radius:'+tsImageShape+';"    />';
    var imgHTMLLeft = '<img src='+tsUserImg+' style="width:55%; height:25%; border-radius:'+tsImageShape+';"    />';
    var imgArea = 'visible';
  } else{
    imgHTMLCenter = ''; imgHTMLLeft = '';
    var imgArea = 'none';
  }

  var authorNameEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' data-fieldName='tsAuthorName'></div>";
  var authorNameWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+tsAuthorName+' </div>'+authorNameEditingSaveTriggerBtn;


  var authorInfoEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' data-fieldName='tsCompanyName'></div>";
  var authorInfoWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+tsCompanyName+' </div>'+authorInfoEditingSaveTriggerBtn;

  var testimonialTextEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' data-fieldName='tsTestimonial'></div>";
  var testimonialTextWrapped = '<div id="widgetInlineEditor"  style="color:'+tsTestimonialColor+'; font-size:'+tsTestimonialSize+'px ;"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+tsTestimonial+' </div>'+testimonialTextEditingSaveTriggerBtn;

  var authorName = '<p style="color:'+tsTextColor+'; font-size:'+tsTextSize+'px;"> '+authorNameWrapped+' </p>';


  var authorinfo =  '<p style="color:'+tsTextColor+'; font-size: calc(3 - '+tsTextSize+'px);" >'+tsJob+', '+authorInfoWrapped+'</p>';

  var testimonialText = '<p style="color:'+tsTestimonialColor+'; font-size:'+tsTestimonialSize+'px ;" >'+testimonialTextWrapped+'</p>';



  var testimonialCardHTMLCenter = '<div style="text-align:center; padding:3% 1% 3% 1%;"> '+iconHTML+' <br> <br>   '+imgHTMLCenter+' '+testimonialText+' <b>'+authorName+'</b> '+authorinfo+'</div>';

  var testimonialCardHTMLLeft = '<div style="padding:3% 1% 3% 1%; text-align:center;"> <div style="width:30%; display:inline-block; text-align:center; display:'+imgArea+'; ">'+imgHTMLLeft+' </div>   <div style="width:69%; display:inline-block; text-align:left;">'+testimonialText+' <b>'+authorName+'</b> '+authorinfo+'</div> </div>';

  var testimonialCardHTMLRight = '<div style="padding:3% 1% 3% 1%; text-align:center;"> <div style="width:69%; display:inline-block; text-align:left; margin-left:2%; ">'+testimonialText+' <b>'+authorName+'</b> '+authorinfo+' </div> <div style="width:28%; display:inline-block; text-align:center; display:'+imgArea+'; ">'+imgHTMLLeft+' </div>   </div>';

  if (tsTextAlignment == 'center') {
    testimonialCardHTML = testimonialCardHTMLCenter;
  } else if (tsTextAlignment == 'left'){
    testimonialCardHTML = testimonialCardHTMLLeft;
  } else if (tsTextAlignment == 'right'){
    testimonialCardHTML = testimonialCardHTMLRight;
  } else{
    testimonialCardHTML = testimonialCardHTMLCenter;
  }

  var thisRenderredWidget = {
    WidgetHtml: testimonialCardHTML,
    WidgetScript: '',
  }
  return thisRenderredWidget;
}

function shortCodeWidgetRender(this_widget_shortcode){
  var shortCodeInput = this_widget_shortcode['shortCodeInput'];
  shortCodeInput = shortCodeInput.replace(/['"]+/g, '');
  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">Content Here!</div>"';

  shortCodeScript = '<script type="text/javascript">(function(jQuery){ var submit_URl=admURL+"admin-ajax.php?action=ulpb_loadShortcode_content&POPB_Shortcode_nonce="+shortCodeRenderWidgetNO; var result=" ";jQuery.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+shortCodeInput+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>';

  var thisRenderredWidget = {
    WidgetHtml: shortCodeContent,
    WidgetScript: shortCodeScript,
  }
  return thisRenderredWidget;
}

function countDownWidgetRender(this_widget_countdown){

  var pbCountDownDate = this_widget_countdown['pbCountDownDate'];
  var pbCountDownLabel = this_widget_countdown['pbCountDownLabel'];
  var pbCountDownColor = this_widget_countdown['pbCountDownColor'];
  var pbCountDownLabelColor = this_widget_countdown['pbCountDownLabelColor'];
  var pbCountDownTextSize = this_widget_countdown['pbCountDownTextSize'];
  var pbCountDownLabelTextSize = this_widget_countdown['pbCountDownLabelTextSize'];

  pbCountDownType = 'fixed' , pbCountDownNumberBgColor = 'transparent', pbCountDownHGap = 1, pbCountDownHGapTablet = 1, pbCountDownHGapMobile = 1, pbCountDownVGap = ''; pbCountDownNumberBorderRadius = ''; pbCountDownVGapTablet = ''; pbCountDownVGapMobile = '';
  if ( typeof(this_widget_countdown['pbCountDownType'])!='undefined' ) {
    pbCountDownType = this_widget_countdown['pbCountDownType'];
    pbCountDownNumberBgColor = this_widget_countdown['pbCountDownNumberBgColor'];
    pbCountDownHGap = this_widget_countdown['pbCountDownHGap'];
    if (this_widget_countdown['pbCountDownHGap'] == '' && this_widget_countdown['pbCountDownHGap'] == null) {
      pbCountDownHGap = 1;
    }
    pbCountDownHGapTablet = this_widget_countdown['pbCountDownHGapTablet'];
    pbCountDownHGapMobile = this_widget_countdown['pbCountDownHGapMobile'];
    pbCountDownVGap = (parseInt(this_widget_countdown['pbCountDownVGap']) / 2);
    pbCountDownVGapTablet = (parseInt(this_widget_countdown['pbCountDownVGapTablet']) / 2);
    pbCountDownVGapMobile = (parseInt(this_widget_countdown['pbCountDownVGapMobile']) / 2);

    pbCountDownNumberBorderRadius = this_widget_countdown['pbCountDownNumberBorderRadius'];
  }

  if (pbCountDownType == 'evergreen') {
    pbCountDownDateDays = this_widget_countdown['pbCountDownDateDays'];
    pbCountDownDateHours = this_widget_countdown['pbCountDownDateHours'];
    pbCountDownDateMins = this_widget_countdown['pbCountDownDateMins'];
    pbCountDownDateSecs = this_widget_countdown['pbCountDownDateSecs'];

    // set 0
      if (pbCountDownDateDays == '') {
        pbCountDownDateDays = 0;
      }
      if (pbCountDownDateHours == '') {
        pbCountDownDateHours = 0;
      }
      if (pbCountDownDateMins == '') {
        pbCountDownDateMins = 0;
      }
      if (pbCountDownDateSecs == '') {
        pbCountDownDateSecs = 0;
      }
    var todaysDate = new Date();
    todaysDate.setDate(todaysDate.getDate() + parseInt(pbCountDownDateDays));
    var dd = todaysDate.getDate();
    var mm = todaysDate.getMonth() + 1;
    var y = todaysDate.getFullYear();

    var someFormattedDate = y + '/'+ mm + '/'+ dd;
    pbCountDownDate = someFormattedDate+" "+pbCountDownDateHours+":"+pbCountDownDateMins+":"+pbCountDownDateSecs;
  }

  pbCountDownHGapWidth = (24.5- parseInt(pbCountDownHGap) );
  pbCountDownHGapWidthTablet = (24.5- parseInt(pbCountDownHGapTablet) );
  pbCountDownHGapWidthMobile = (24.5- parseInt(pbCountDownHGapMobile) );

  pbCountDownLabelTextSizeTablet = ''; pbCountDownLabelTextSizeMobile = '';
  pbCountDownTextSizeTablet = ''; pbCountDownTextSizeMobile = '';
  if (typeof(this_widget_countdown['pbCountDownLabelTextSizeTablet']) !== 'undefined' ) {
    pbCountDownLabelTextSizeTablet = this_widget_countdown['pbCountDownLabelTextSizeTablet'];
    pbCountDownLabelTextSizeMobile = this_widget_countdown['pbCountDownLabelTextSizeMobile'];

    pbCountDownTextSizeTablet = this_widget_countdown['pbCountDownTextSizeTablet'];
    pbCountDownTextSizeMobile = this_widget_countdown['pbCountDownTextSizeMobile'];
  }

  pbCountDownLabelFontFamily = ''; pbCountDownNumberFontFamily = '';
  if (typeof(this_widget_countdown['pbCountDownLabelFontFamily']) !== 'undefined' ) {
    pbCountDownLabelFontFamily = this_widget_countdown['pbCountDownLabelFontFamily'];
    pbCountDownNumberFontFamily = this_widget_countdown['pbCountDownNumberFontFamily'];
  }

    numberBlockStyles = " width: "+pbCountDownHGapWidth+"%; margin-right:"+pbCountDownHGap+"%; background:"+pbCountDownNumberBgColor+"; border-radius:"+pbCountDownNumberBorderRadius+"px ;";

    if (pbCountDownDate != '') {
      if ( typeof(this_widget_countdown['pbCountDownTimezone']) != 'undefined' ) {
        if (this_widget_countdown['pbCountDownTimezone'] != '') {
          pbCountDownDate = moment.tz(pbCountDownDate,this_widget_countdown['pbCountDownTimezone'] );
          pbCountDownDate = pbCountDownDate.format('YYYY/MM/DD HH:mm:ss');
        }
      }
    }

  hideDays = 'inline-block';  hideHours = 'inline-block'; hideMinutes = 'inline-block';  hideSeconds = 'inline-block'; 
  daysText = 'DAYS'; hoursText= 'HOURS'; minutesText = 'MINUTES'; secondsText = 'SECONDS';
  if (typeof(this_widget_countdown['daysText']) !== 'undefined' ) {
    if (this_widget_countdown['daysText'] != '') {
      daysText = this_widget_countdown['daysText'];
    }
    if (this_widget_countdown['hoursText'] != '') {
      hoursText = this_widget_countdown['hoursText'];
    }
    if (this_widget_countdown['minutesText'] != '') {
      minutesText = this_widget_countdown['minutesText'];
    }
    if (this_widget_countdown['secondsText'] != '') {
      secondsText = this_widget_countdown['secondsText'];
    }

    if (this_widget_countdown['hideDays'] != '' && this_widget_countdown['hideDays'] != null) {
      hideDays = this_widget_countdown['hideDays'];
    }
    if (this_widget_countdown['hideHours'] != '' && this_widget_countdown['hideHours'] != null) {
      hideHours = this_widget_countdown['hideHours'];
    }
    if (this_widget_countdown['hideMinutes'] != '' && this_widget_countdown['hideMinutes'] != null) {
      hideMinutes = this_widget_countdown['hideMinutes'];
    }
    if (this_widget_countdown['hideSeconds'] != '' && this_widget_countdown['hideSeconds'] != null) {
      hideSeconds = this_widget_countdown['hideSeconds'];
    }
  }



  var countDownId = 'pb_countDown-'+Math.floor((Math.random() * 2000) + 100);
  var countDownScript = " <script> jQuery('#"+countDownId+"').countdown('"+pbCountDownDate+"', function(event) {  if (hideDays == 'none') { totalHours = event.offset.totalDays * 24 + event.offset.hours; } else { totalHours =  event.offset.hours; if (totalHours < 10) { totalHours = '0'+totalHours; } }   if (hideHours == 'none') { totalMins = totalHours * 60 + event.offset.minutes; } else { totalMins =  event.offset.minutes;  if (totalMins < 10) { totalMins = '0'+totalMins; } }       jQuery(this).html(event.strftime('' +'<div style=\"width: 100%; letter-spacing:2.5px; \"> <div class=\" numberBlock \" style=\" display:"+hideDays+"; "+numberBlockStyles+" \"><p class=\"countDownNumbers\"  > %D </p> <p class=\"countDownLabels\">"+daysText+"</p></div>  <div class=\" numberBlock \" style=\" display:"+hideHours+"; "+numberBlockStyles+" \"><p class=\"countDownNumbers\" > '+totalHours+' </p> <p class=\"countDownLabels\">"+hoursText+"</p></div><div class=\" numberBlock \" style=\" display:"+hideMinutes+"; "+numberBlockStyles+" \"><p class=\"countDownNumbers\" > '+totalMins+' </p> <p class=\"countDownLabels\">"+minutesText+"</p></div><div class=\" numberBlock \" style=\" display:"+hideSeconds+"; "+numberBlockStyles+" \"><p class=\"countDownNumbers\" > %S </p> <p class=\"countDownLabels\">"+secondsText+"</p></div> </div>' )); });  </script> ";

  var countDownContainer = "<div id="+countDownId+" class='popb_countDown' style='text-align:center; padding:2% 3%;'></div>";

  var currWidgetDefaultStyles = '<style>'+
    '#'+countDownId+' .countDownLabels{  font-size:'+pbCountDownLabelTextSize+'px; margin-top:'+pbCountDownVGap+'px; margin-bottom:'+pbCountDownVGap+'px; color:'+pbCountDownLabelColor+'; display:'+pbCountDownLabel+'; line-height:0; font-family:'+pbCountDownLabelFontFamily.replace(/\+/g, ' ')+'; }' +
    '#'+countDownId+' .countDownNumbers{ margin-top:'+pbCountDownVGap+'px; margin-bottom:'+pbCountDownVGap+'px;   font-size:'+pbCountDownTextSize+'px; color:'+pbCountDownColor+'; line-height:0; font-family:'+pbCountDownNumberFontFamily.replace(/\+/g, ' ')+'; }' +
  +'</style>';


  var currWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+countDownId+" .numberBlock').css({'width':'"+pbCountDownHGapWidth+"%', 'margin-right':'"+pbCountDownHGap+"%',  }); "+

        "  jQuery('#"+countDownId+" .countDownLabels').css({'font-size':'"+pbCountDownLabelTextSize+"px', 'margin-top':'"+pbCountDownVGap+"px', 'margin-bottom':'"+pbCountDownVGap+"px', }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').css({'font-size':'"+pbCountDownTextSize+"px', 'margin-top':'"+pbCountDownVGap+"px', 'margin-bottom':'"+pbCountDownVGap+"px', }); } "+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+countDownId+" .numberBlock').css({'width':'"+pbCountDownHGapWidth+"%', 'margin-right':'"+pbCountDownHGap+"%',  }); "+

        "  jQuery('#"+countDownId+" .countDownLabels').css({'font-size':'"+pbCountDownLabelTextSize+"px', 'margin-top':'"+pbCountDownVGap+"px', 'margin-bottom':'"+pbCountDownVGap+"px', }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').css({'font-size':'"+pbCountDownTextSize+"px', 'margin-top':'"+pbCountDownVGap+"px', 'margin-bottom':'"+pbCountDownVGap+"px',}); "+
        
        "}"+
        " "+
        '</script> ';

  var currWidgetTabletResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

        "  jQuery('#"+countDownId+" .numberBlock').css({'width':'"+pbCountDownHGapWidthTablet+"%', 'margin-right':'"+pbCountDownHGapTablet+"%',  }); "+

        "  jQuery('#"+countDownId+" .countDownLabels').css({'font-size':'"+pbCountDownLabelTextSizeTablet+"px',  'margin-top':'"+pbCountDownVGapTablet+"px', 'margin-bottom':'"+pbCountDownVGapTablet+"px' }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').css({'font-size':'"+pbCountDownTextSizeTablet+"px', 'margin-top':'"+pbCountDownVGapTablet+"px', 'margin-bottom':'"+pbCountDownVGapTablet+"px'}); } "+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+

        "  jQuery('#"+countDownId+" .numberBlock').css({'width':'"+pbCountDownHGapWidthTablet+"%', 'margin-right':'"+pbCountDownHGapTablet+"%',  }); "+

        "  jQuery('#"+countDownId+" .countDownLabels').css({'font-size':'"+pbCountDownLabelTextSizeTablet+"px',  'margin-top':'"+pbCountDownVGapTablet+"px', 'margin-bottom':'"+pbCountDownVGapTablet+"px' }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').css({'font-size':'"+pbCountDownTextSizeTablet+"px',  'margin-top':'"+pbCountDownVGapTablet+"px', 'margin-bottom':'"+pbCountDownVGapTablet+"px'}); "+
        
        "}"+
        " "+
        '</script> ';

        var resposiveScripts = currWidgetDefaultResponsive;

  var currWidgetMobileResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

        "  jQuery('#"+countDownId+" .numberBlock').css({'width':'"+pbCountDownHGapWidthMobile+"%', 'margin-right':'"+pbCountDownHGapMobile+"%',  }); "+

        "  jQuery('#"+countDownId+" .countDownLabels').css({'font-size':'"+pbCountDownLabelTextSizeMobile+"px',  'margin-top':'"+pbCountDownVGapMobile+"px', 'margin-bottom':'"+pbCountDownVGapMobile+"px'}); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').css({'font-size':'"+pbCountDownTextSizeMobile+"px', 'margin-top':'"+pbCountDownVGapMobile+"px', 'margin-bottom':'"+pbCountDownVGapMobile+"px' }); } "+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+

        "  jQuery('#"+countDownId+" .numberBlock').css({'width':'"+pbCountDownHGapWidthMobile+"%', 'margin-right':'"+pbCountDownHGapMobile+"%',  }); "+

        "  jQuery('#"+countDownId+" .countDownLabels').css({'font-size':'"+pbCountDownLabelTextSizeMobile+"px', 'margin-top':'"+pbCountDownVGapMobile+"px', 'margin-bottom':'"+pbCountDownVGapMobile+"px' }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').css({'font-size':'"+pbCountDownTextSizeMobile+"px',  'margin-top':'"+pbCountDownVGapMobile+"px', 'margin-bottom':'"+pbCountDownVGapMobile+"px'}); "+
        
        "}"+
        " "+
        '</script> ';

        var resposiveScripts = currWidgetDefaultResponsive;

    var resposiveScripts = currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive;

    var thisRenderredWidget = {
      WidgetHtml: countDownScript + countDownContainer + currWidgetDefaultStyles,
      WidgetScript: resposiveScripts,
    }
  return thisRenderredWidget;

}

function imageSliderWidgetRender(this_widget_imageSlider){

  pbSliderImagesURL = this_widget_imageSlider['pbSliderImagesURL'];
  pbSliderContent = this_widget_imageSlider['pbSliderContent'];
  pbSliderAuto = this_widget_imageSlider['pbSliderAuto'];
  pbSliderDelay = this_widget_imageSlider['pbSliderDelay'];
  pbSliderPager = this_widget_imageSlider['pbSliderPager'];
  pbSliderNav = this_widget_imageSlider['pbSliderNav'];
  pbSliderRandom = this_widget_imageSlider['pbSliderRandom'];
  pbSliderPause = this_widget_imageSlider['pbSliderPause'];
  

  if (typeof(this_widget_imageSlider['pbSliderHeight']) == 'undefined') {
    pbSliderHeight = '400';
    pbSliderHeightUnit = 'px';
  }else{
    pbSliderHeight = this_widget_imageSlider['pbSliderHeight'];
    pbSliderHeightUnit = this_widget_imageSlider['pbSliderHeightUnit'];
  }
  if (typeof(this_widget_imageSlider['pbSliderContent']) == 'undefined') {
    contentSlider = false;
  }else{
    contentSlider = true;
  }

  pbImageSliderUniqueId = 'pb_imageSlider-'+Math.floor((Math.random() * 2000) + 100);

  pbSliderContainer =  "<div class='rslides_container' style='min-height:100px;'> <ul class='rslides' id='"+pbImageSliderUniqueId+"'>";
  
  pbSliderAllSlides = '';
  jQuery.each(pbSliderImagesURL,function(index, val){

    pbSliderPrevSlides = pbSliderAllSlides;
    

    if (contentSlider == false) {imageSlideContent = ''; 
    } else{

      pbSlideContent = pbSliderContent[index];
      imageSlideHeading = '';  imageSlideDesc = ''; imageSlideButton = '';
      if (pbSlideContent['imageSlideHeading'] != '') {
        imageSlideHeading = "<h2>"+pbSlideContent['imageSlideHeading']+"</h2>";
      }

      if (pbSlideContent['imageSlideDesc'] != '') {
        imageSlideDesc = "<p>"+ pbSlideContent['imageSlideDesc'] +"</p>";
      }

      if (pbSlideContent['imageSlideButtonText'] != '') {
        imageSlideButton = "<a href="+pbSlideContent['imageSlideButtonURL']+" target='_blank'> <button disabled>"+pbSlideContent['imageSlideButtonText']+"</button> </a>";

      }
      
      imageSlideContent = "<div class='popb_slide_content'>"+imageSlideHeading+" "+imageSlideDesc+"  "+imageSlideButton+"   </div>";
    }
    

    pbSliderThisSlide = "<li> <div class='popb_slideContainer' style='background:url("+val+"); width: 100%;height:"+pbSliderHeight+pbSliderHeightUnit+";background-size: cover; background-repeat: no-repeat;background-position: center;'> "+imageSlideContent+"  </div> </li>";
    pbSliderAllSlides = pbSliderPrevSlides +  pbSliderThisSlide;
  });

  pbSliderContainerClose = "</ul> </div>";

  pbSliderScript = "<script>  jQuery(function() {  jQuery('#"+pbImageSliderUniqueId+"').responsiveSlides({  auto:  "+pbSliderAuto+",  speed: 500,             timeout:  "+pbSliderDelay+",  pager:  "+pbSliderPager+",            nav:  "+pbSliderNav+",               random:  "+pbSliderRandom+",            pause:  "+pbSliderPause+",        namespace: 'pb-centeredSlider',  });   });   </script>";

  if (contentSlider == false){ 
    pbSliderStyling = '';
  }else{

    slideHeadingStyles = this_widget_imageSlider['slideHeadingStyles'];
    slideDescStyles = this_widget_imageSlider['slideDescStyles'];
    slideButtonStyles = this_widget_imageSlider['slideButtonStyles'];
    pbSliderContentBgColor = this_widget_imageSlider['pbSliderContentBgColor'];

    slideHeadingBold = ''; slideHeadingItalic = ''; slideHeadingUnderlined = '';
    if (slideHeadingStyles['slideHeadingBold'] == true) { slideHeadingBold = 'bold'; }
    if (slideHeadingStyles['slideHeadingItalic'] == true) { slideHeadingItalic = 'italic'; }
    if (slideHeadingStyles['slideHeadingUnderlined'] == true) { slideHeadingUnderlined = 'underline'; }


    if (typeof(slideHeadingStyles['slideHeadingFontFamily']) != 'undefined') {
      slideHeadingFontFamily = slideHeadingStyles['slideHeadingFontFamily'];
    } else{
      slideHeadingFontFamily = ' none';
    }

    if (typeof(slideDescStyles['slideDescFontFamily']) != 'undefined') {
      slideDescFontFamily = slideDescStyles['slideDescFontFamily'];
    } else{
      slideDescFontFamily = ' none';
    }

    if (typeof(slideButtonStyles['slideButtonBtnFontFamily']) != 'undefined') {
      slideButtonBtnFontFamily = slideButtonStyles['slideButtonBtnFontFamily'];
    } else{
      slideButtonBtnFontFamily = ' none';
    }

    pbSliderHeadingStyles = ''
    +'color:'+slideHeadingStyles['slideHeadingColor']+';'
    +'font-size:'+slideHeadingStyles['slideHeadingSize']+'px;'
    +' letter-spacing:'+slideHeadingStyles['slideHeadingLetterSpacing']+'px;'
    +' line-height:'+slideHeadingStyles['slideHeadingLineHeight']+'px;'
    +' font-family:'+slideHeadingFontFamily.replace(/\+/g, ' ')+';'
    +' font-weight:'+slideHeadingBold+';'
    +' font-style:'+slideHeadingItalic+';'
    +'  text-decoration:'+slideHeadingUnderlined+';';


    slideDescBold = ''; slideDescItalic = ''; slideDescUnderlined = '';
    if (slideDescStyles['slideDescBold'] == true) { slideDescBold = 'bold'; }
    if (slideDescStyles['slideDescItalic'] == true) { slideDescItalic = 'italic'; }
    if (slideDescStyles['slideDescUnderlined'] == true) { slideDescUnderlined = 'underline'; }

    pbSliderDescStyles = ''
    +'color:'+slideDescStyles['slideDescColor']+';'
    +'font-size:'+slideDescStyles['slideDescSize']+'px;'
    +' letter-spacing:'+slideDescStyles['slideDescLetterSpacing']+'px;'
    +' line-height:'+slideDescStyles['slideDescLineHeight']+'px;'
    +' font-family:'+slideDescFontFamily.replace(/\+/g, ' ')+';'
    +' font-weight:'+slideDescBold+';'
    +' font-style:'+slideDescItalic+';'
    +'  text-decoration:'+slideDescUnderlined+';';

    pbSliderBtnStyles = ''
      +'padding:'+slideButtonStyles['slideButtonBtnHeight']+'px 5px;'
      +'width: '+slideButtonStyles['slideButtonBtnWidth']+'px;'
      +'background:'+slideButtonStyles['slideButtonBtnBgColor']+';'
      +'background-color:'+slideButtonStyles['slideButtonBtnBgColor']+';'
      +'color:'+slideButtonStyles['slideButtonBtnColor']+';'
      +'font-size:'+slideButtonStyles['slideButtonBtnFontSize']+'px;'
      +'font-family:'+slideButtonBtnFontFamily.replace(/\+/g, ' ')+';'
      +'letter-spacing:'+slideButtonStyles['slideButtonBtnFontLetterSpacing']+'px;'
      +'border-width:'+slideButtonStyles['slideButtonBtnBorderWidth']+'px;'
      +'border-color:'+slideButtonStyles['slideButtonBtnBorderColor']+'px;'
      +'border-radius:'+slideButtonStyles['slideButtonBtnBorderRadius']+'px;'
      +'border-style:solid;';

    pbSliderStyling = '<style> #'+pbImageSliderUniqueId+' .popb_slide_content{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align:center; background:'+pbSliderContentBgColor+'; padding:3% 6%;} \n' 
    + '#'+pbImageSliderUniqueId+' .popb_slide_content h2{ '+pbSliderHeadingStyles+'  } \n'
    + '#'+pbImageSliderUniqueId+' .popb_slide_content p{ '+pbSliderDescStyles+'  }'
    + '#'+pbImageSliderUniqueId+' .popb_slide_content button{ '+pbSliderBtnStyles+'  } \n'
    +'</style>'+'\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+slideHeadingFontFamily+'|'+slideDescFontFamily+'|'+slideButtonBtnFontFamily+'">';

  }

    
  currWidgetDefaultResponsive = ''; currWidgetTabletResponsive= ''; currWidgetMobileResponsive = '';
  if (typeof(this_widget_imageSlider['pbSliderHeightTablet']) != 'undefined') {

    var currWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

          "jQuery('#"+pbImageSliderUniqueId+"').animate({'height':'"+pbSliderHeight+pbSliderHeightUnit+"',}); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content h2').animate({'font-size':'"+slideHeadingStyles['slideHeadingSize']+"px', 'letter-spacing':'"+slideHeadingStyles['slideHeadingLetterSpacing']+"px', 'line-height':'"+slideHeadingStyles['slideHeadingLineHeight']+"px' , }); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content p').animate({'font-size':'"+slideDescStyles['slideDescSize']+"px', 'letter-spacing':'"+slideDescStyles['slideDescLetterSpacing']+"px', 'line-height':'"+slideDescStyles['slideDescLineHeight']+"px' , }); "+

          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content button').animate({'font-size':'"+slideButtonStyles['slideButtonBtnFontSize']+"px', 'letter-spacing':'"+slideButtonStyles['slideButtonBtnFontLetterSpacing']+"px', 'padding':'"+slideButtonStyles['slideButtonBtnHeight']+"px 5px' ,  'width':'"+slideButtonStyles['slideButtonBtnWidth']+"px' ,}); "+
        
        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "jQuery('#"+pbImageSliderUniqueId+"').animate({'height':'"+pbSliderHeight+pbSliderHeightUnit+"',}); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content h2').animate({'font-size':'"+slideHeadingStyles['slideHeadingSize']+"px', 'letter-spacing':'"+slideHeadingStyles['slideHeadingLetterSpacing']+"px', 'line-height':'"+slideHeadingStyles['slideHeadingLineHeight']+"px' , }); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content p').animate({'font-size':'"+slideDescStyles['slideDescSize']+"px', 'letter-spacing':'"+slideDescStyles['slideDescLetterSpacing']+"px', 'line-height':'"+slideDescStyles['slideDescLineHeight']+"px' , }); "+

          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content button').animate({'font-size':'"+slideButtonStyles['slideButtonBtnFontSize']+"px', 'letter-spacing':'"+slideButtonStyles['slideButtonBtnFontLetterSpacing']+"px', 'padding':'"+slideButtonStyles['slideButtonBtnHeight']+"px 5px' ,  'width':'"+slideButtonStyles['slideButtonBtnWidth']+"px' ,}); "+
        
        "}"+
        " "+
        '</script> ';

    var currWidgetTabletResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

          "jQuery('#"+pbImageSliderUniqueId+"').animate({'height':'"+this_widget_imageSlider['pbSliderHeightTablet']+this_widget_imageSlider['pbSliderHeightUnitTablet']+"',}); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content h2').animate({'font-size':'"+slideHeadingStyles['slideHeadingSizeTablet']+"px', 'letter-spacing':'"+slideHeadingStyles['slideHeadingLetterSpacingTablet']+"px', 'line-height':'"+slideHeadingStyles['slideHeadingLineHeightTablet']+"px' , }); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content p').animate({'font-size':'"+slideDescStyles['slideDescSizeTablet']+"px', 'letter-spacing':'"+slideDescStyles['slideDescLetterSpacingTablet']+"px', 'line-height':'"+slideDescStyles['slideDescLineHeightTablet']+"px' , }); "+

          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content button').animate({'font-size':'"+slideButtonStyles['slideButtonBtnFontSizeTablet']+"px', 'letter-spacing':'"+slideButtonStyles['slideButtonBtnFontLetterSpacingTablet']+"px', 'padding':'"+slideButtonStyles['slideButtonBtnHeightTablet']+"px 5px' ,  'width':'"+slideButtonStyles['slideButtonBtnWidthTablet']+"px' ,}); "+
        
        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+

          "jQuery('#"+pbImageSliderUniqueId+"').animate({'height':'"+this_widget_imageSlider['pbSliderHeightTablet']+this_widget_imageSlider['pbSliderHeightUnitTablet']+"',}); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content h2').animate({'font-size':'"+slideHeadingStyles['slideHeadingSizeTablet']+"px', 'letter-spacing':'"+slideHeadingStyles['slideHeadingLetterSpacingTablet']+"px', 'line-height':'"+slideHeadingStyles['slideHeadingLineHeightTablet']+"px' , }); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content p').animate({'font-size':'"+slideDescStyles['slideDescSizeTablet']+"px', 'letter-spacing':'"+slideDescStyles['slideDescLetterSpacingTablet']+"px', 'line-height':'"+slideDescStyles['slideDescLineHeightTablet']+"px' , }); "+

          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content button').animate({'font-size':'"+slideButtonStyles['slideButtonBtnFontSizeTablet']+"px', 'letter-spacing':'"+slideButtonStyles['slideButtonBtnFontLetterSpacingTablet']+"px', 'padding':'"+slideButtonStyles['slideButtonBtnHeightTablet']+"px 5px' ,  'width':'"+slideButtonStyles['slideButtonBtnWidthTablet']+"px' ,}); "+
        
        "}"+
        " "+
        '</script> ';

    var currWidgetMobileResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

          "jQuery('#"+pbImageSliderUniqueId+"').animate({'height':'"+this_widget_imageSlider['pbSliderHeightMobile']+this_widget_imageSlider['pbSliderHeightUnitMobile']+"',}); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content h2').animate({'font-size':'"+slideHeadingStyles['slideHeadingSizeMobile']+"px', 'letter-spacing':'"+slideHeadingStyles['slideHeadingLetterSpacingMobile']+"px', 'line-height':'"+slideHeadingStyles['slideHeadingLineHeightMobile']+"px' , }); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content p').animate({'font-size':'"+slideDescStyles['slideDescSizeMobile']+"px', 'letter-spacing':'"+slideDescStyles['slideDescLetterSpacingMobile']+"px', 'line-height':'"+slideDescStyles['slideDescLineHeightMobile']+"px' , }); "+

          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content button').animate({'font-size':'"+slideButtonStyles['slideButtonBtnFontSizeMobile']+"px', 'letter-spacing':'"+slideButtonStyles['slideButtonBtnFontLetterSpacingMobile']+"px', 'padding':'"+slideButtonStyles['slideButtonBtnHeightMobile']+"px 5px' ,  'width':'"+slideButtonStyles['slideButtonBtnWidthMobile']+"px' ,}); "+
        
        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+

          "jQuery('#"+pbImageSliderUniqueId+"').animate({'height':'"+this_widget_imageSlider['pbSliderHeightMobile']+this_widget_imageSlider['pbSliderHeightUnitMobile']+"',}); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content h2').animate({'font-size':'"+slideHeadingStyles['slideHeadingSizeMobile']+"px', 'letter-spacing':'"+slideHeadingStyles['slideHeadingLetterSpacingMobile']+"px', 'line-height':'"+slideHeadingStyles['slideHeadingLineHeightMobile']+"px' , }); "+
          
          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content p').animate({'font-size':'"+slideDescStyles['slideDescSizeMobile']+"px', 'letter-spacing':'"+slideDescStyles['slideDescLetterSpacingMobile']+"px', 'line-height':'"+slideDescStyles['slideDescLineHeightMobile']+"px' , }); "+

          "jQuery('#"+pbImageSliderUniqueId+" .popb_slide_content button').animate({'font-size':'"+slideButtonStyles['slideButtonBtnFontSizeMobile']+"px', 'letter-spacing':'"+slideButtonStyles['slideButtonBtnFontLetterSpacingMobile']+"px', 'padding':'"+slideButtonStyles['slideButtonBtnHeightMobile']+"px 5px' ,  'width':'"+slideButtonStyles['slideButtonBtnWidthMobile']+"px' ,}); "+
        
        "}"+
        " "+
        '</script> ';

  }
  

  var thisRenderredWidget = {
    WidgetHtml: pbSliderContainer  +  pbSliderAllSlides  +   pbSliderContainerClose   + pbSliderStyling,
    WidgetScript: pbSliderScript + currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive,
  }
  return  thisRenderredWidget;

}



function progressBarWidgetRender(this_widget_progressBar){

  pbProgressBarTitle = this_widget_progressBar['pbProgressBarTitle'];
  pbProgressBarPrecentage = this_widget_progressBar['pbProgressBarPrecentage'];
  pbProgressBarText = this_widget_progressBar['pbProgressBarText'];
  pbProgressBarDisplayPrecentage = this_widget_progressBar['pbProgressBarDisplayPrecentage'];
  pbProgressBarTitleColor = this_widget_progressBar['pbProgressBarTitleColor'];
  pbProgressBarTextColor = this_widget_progressBar['pbProgressBarTextColor'];
  pbProgressBarColor = this_widget_progressBar['pbProgressBarColor'];
  pbProgressBarBgColor = this_widget_progressBar['pbProgressBarBgColor'];
  pbProgressBarTitleSize = this_widget_progressBar['pbProgressBarTitleSize'];
  pbProgressBarHeight = this_widget_progressBar['pbProgressBarHeight'];
  pbProgressBarTextSize = this_widget_progressBar['pbProgressBarTextSize'];
  
  if (typeof(this_widget_progressBar['pbProgressBarTextFontFamily']) != 'undefined') {
    pbProgressBarTextFontFamily = this_widget_progressBar['pbProgressBarTextFontFamily'];
  } else{
    pbProgressBarTextFontFamily = ' none';
  }

  if (pbProgressBarDisplayPrecentage !== '%') {
    pbProgressBarDisplayPrecentage = '';
  }
  pbProgressBarUniqueId = 'pb_progressBar_'+Math.floor((Math.random() * 2000) + 100);

  pbProgressBarHTML = '<p style="font-size:'+pbProgressBarTitleSize+'px; color:'+pbProgressBarTitleColor+';line-height:0; font-family:'+pbProgressBarTextFontFamily.replace(/\+/g, ' ')+',arial,sans-serif; " >'+pbProgressBarTitle+'</p><div id='+pbProgressBarUniqueId+' style="background-color:'+pbProgressBarBgColor+'; height:'+pbProgressBarHeight+'px; position:relative;"> <div style="position:absolute; top:'+pbProgressBarHeight/2+'px; line-height:0; color:'+pbProgressBarTextColor+'; font-size:'+pbProgressBarTextSize+'px; left:2%; font-family:'+pbProgressBarTextFontFamily.replace(/\+/g, ' ')+',arial,sans-serif; ">'+pbProgressBarText+'</div>  <div class="progressBarNumber" style="position:absolute;left:'+(pbProgressBarPrecentage-4)+'%; top:'+pbProgressBarHeight/2+'px; line-height:0; color:'+pbProgressBarTextColor+'; font-size:'+pbProgressBarTextSize+'px; font-family:'+pbProgressBarTextFontFamily.replace(/\+/g, ' ')+',arial,sans-serif; "></div>   </div>';

  pbProgressBarScript = '<script> var thisProgressBar_'+pbProgressBarUniqueId+' = jQuery( "#'+pbProgressBarUniqueId+'" ); var progressNumber_'+pbProgressBarUniqueId+' = jQuery("#'+pbProgressBarUniqueId+'  .progressBarNumber");   thisProgressBar_'+pbProgressBarUniqueId+'.progressbar({ value: 0, change: function(){ progressNumber_'+pbProgressBarUniqueId+'.text(thisProgressBar_'+pbProgressBarUniqueId+'.progressbar("value")+ "'+pbProgressBarDisplayPrecentage+'");   progressNumber_'+pbProgressBarUniqueId+'.css("left",thisProgressBar_'+pbProgressBarUniqueId+'.progressbar("value")-10 + "%");   }   }); function '+pbProgressBarUniqueId+'_pb_progress() { var val = thisProgressBar_'+pbProgressBarUniqueId+'.progressbar( "value" ) || 0;  thisProgressBar_'+pbProgressBarUniqueId+'.progressbar( "value", val + 1 );  if ( val <= '+(pbProgressBarPrecentage -2)+' ) { setTimeout( '+pbProgressBarUniqueId+'_pb_progress, 20 ); } } setTimeout( '+pbProgressBarUniqueId+'_pb_progress, 1000 );  </script>    <style> #'+pbProgressBarUniqueId+' .ui-progressbar-value{background-color:'+pbProgressBarColor+' !important; } </style>  ' + '\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+pbProgressBarTextFontFamily+'">';
  


  pbProgressBarHTMLContainer = pbProgressBarHTML;
  var thisRenderredWidget = {
    WidgetHtml: pbProgressBarHTMLContainer,
    WidgetScript: pbProgressBarScript,
  }
  return thisRenderredWidget;
}

function pricingWidgetRender(this_widget_pricing){
  pbPricingHeaderText = this_widget_pricing['pbPricingHeaderText'];
  pbPricingContent = this_widget_pricing['pbPricingContent'];
  pbPricingHeaderTextColor = this_widget_pricing['pbPricingHeaderTextColor'];
  pbPricingHeaderBgColor = this_widget_pricing['pbPricingHeaderBgColor'];
  pbPricingHeaderTextSize = this_widget_pricing['pbPricingHeaderTextSize'];
  pbPricingBorderWidth = this_widget_pricing['pbPricingBorderWidth'];
  pbPricingBorderColor = this_widget_pricing['pbPricingBorderColor'];
  pricingbtnText = this_widget_pricing['pricingbtnText'];
  pricingbtnLink = this_widget_pricing['pricingbtnLink'];
  pricingbtnTextColor = this_widget_pricing['pricingbtnTextColor'];
  pricingbtnFontSize = this_widget_pricing['pricingbtnFontSize'];
  pricingbtnBgColor = this_widget_pricing['pricingbtnBgColor'];
  pricingbtnWidth = this_widget_pricing['pricingbtnWidth'];
  pricingbtnHeight = this_widget_pricing['pricingbtnHeight'];
  pricingbtnHoverBgColor = this_widget_pricing['pricingbtnHoverBgColor'];
  pricingbtnBlankAttr = this_widget_pricing['pricingbtnBlankAttr'];
  pricingbtnBorderColor = this_widget_pricing['pricingbtnBorderColor'];
  pricingbtnBorderWidth = this_widget_pricing['pricingbtnBorderWidth'];
  pricingbtnBorderRadius = this_widget_pricing['pricingbtnBorderRadius'];
  pricingbtnButtonAlignment = this_widget_pricing['pricingbtnButtonAlignment'];
  pbPricingButtonSectionBgColor = this_widget_pricing['pbPricingButtonSectionBgColor'];

  if (pbPricingHeaderText !== '') {
    var pricingHeader = '<div class="pb_prcingHeader" style="color:'+pbPricingHeaderTextColor+'; background:'+pbPricingHeaderBgColor+'; font-size:'+pbPricingHeaderTextSize+'px; width:100%; text-align:center; padding:30px 0 35px 0; border-bottom:1px solid '+pbPricingBorderColor+';"> <b>'+pbPricingHeaderText+'</b> </div>';
  } else{
    pricingHeader = '';
  }
    
  if (pricingbtnLink !== '') {
    var pricingButton = "<br><div class='wdt-this_column_type' style='text-align:"+pricingbtnButtonAlignment+"; padding:20px 0 40px 0; background:"+pbPricingButtonSectionBgColor+";'><a href='"+pricingbtnLink+"' style='text-decoration:none !important;' target='' > <button style='color:"+pricingbtnTextColor+" !important;font-size:"+pricingbtnFontSize+"px !important; background: "+pricingbtnBgColor+" !important; background-color: "+pricingbtnBgColor+" !important; padding: "+pricingbtnHeight+"px "+pricingbtnWidth+"px !important; border: "+pricingbtnBorderWidth+"px solid "+pricingbtnBorderColor+" !important; border-radius: "+pricingbtnBorderRadius+"px !important;' disabled >"+pricingbtnText+"</button></a></div>";
  }else{
    pricingButton = '';
  }

  var pricingContainer = '<div class="pb_pricingContainer"  style="border:'+pbPricingBorderWidth+'px solid '+pbPricingBorderColor+'; border-radius:5px; box-shadow:0px 0px 10px '+pbPricingBorderColor+';"> '+pricingHeader+' <div>'+pbPricingContent+'</div> '+pricingButton+' </div>';

  var thisRenderredWidget = {
    WidgetHtml: pricingContainer,
    WidgetScript: '',
  }

  return thisRenderredWidget;
}

function imgCarouselWidgetRender(this_widget_img_carousel){

  pbImgCarouselAutoplay = this_widget_img_carousel['pbImgCarouselAutoplay'];
  pbImgCarouselDelay = this_widget_img_carousel['pbImgCarouselDelay'];
  imgCarouselSlideLoop = this_widget_img_carousel['imgCarouselSlideLoop'];
  imgCarouselSlideTransition = this_widget_img_carousel['imgCarouselSlideTransition'];
  imgCarouselPagination = this_widget_img_carousel['imgCarouselPagination'];
  pbImgCarouselNav = this_widget_img_carousel['pbImgCarouselNav'];
  imgCarouselSlidesURL = this_widget_img_carousel['imgCarouselSlidesURL'];

  pbImgCarouselUniqueId = 'pb_imgCarousel_'+Math.floor((Math.random() * 2000) + 100);

  pbCarouselAllSlides = '';
  jQuery.each(imgCarouselSlidesURL,function(index, val){
    pbSliderPrevSlides = pbCarouselAllSlides;
    pbSliderThisSlide = "<div class='carouselSingleSlide'> <img src='"+val+"' alt='slideImg' style='width:100%;' ></div>";
    pbCarouselAllSlides = pbSliderPrevSlides +  pbSliderThisSlide;
  });


  pbCarouselScript = "<script> jQuery('#"+pbImgCarouselUniqueId+"').owlCarousel({   singleItem: false,  autoPlay : "+pbImgCarouselAutoplay+",   stopOnHover : true,   navigation: "+pbImgCarouselNav+" ,    paginationSpeed : "+pbImgCarouselDelay+"00,   goToFirstSpeed : "+pbImgCarouselDelay+"00,    autoHeight : true,    slideSpeed : "+pbImgCarouselDelay+"000,   transitionStyle: '"+imgCarouselSlideTransition+"',    pagination : "+imgCarouselPagination+",   paginationNumbers: false,   navigationText : ['<span class=\"dashicons dashicons-arrow-left-alt2\" > </span>', '<span class=\"dashicons dashicons-arrow-right-alt2\" > </span>'], theme: 'pbOwl-theme', baseClass: 'pbOwl-carousel' ,  }); </script>";

  pbCarouselSlidesWrapper = '<div  id='+pbImgCarouselUniqueId+' class="pbOwl-carousel">' +pbCarouselAllSlides+ '</div>';

  var thisRenderredWidget = {
    WidgetHtml: pbCarouselSlidesWrapper,
    WidgetScript: pbCarouselScript,
  }
  return thisRenderredWidget ;
}

function wooCommerceWidgetRender(this_widget_wooCommerceProducts){

  var wooProductsColumn = this_widget_wooCommerceProducts['wooProductsColumn'];
  var wooProductsCount = this_widget_wooCommerceProducts['wooProductsCount'];
  var wooProductsCategories = this_widget_wooCommerceProducts['wooProductsCategories'];
  //var wooProductsTags = this_widget_wooCommerceProducts['wooProductsTags'];
  var wooProductsOrderBy = this_widget_wooCommerceProducts['wooProductsOrderBy'];
  var wooProductsOrder = this_widget_wooCommerceProducts['wooProductsOrder'];

  var generateWooProductsShortcode = '[products columns="'+wooProductsColumn+'" per_page="'+wooProductsCount+'" orderby="'+wooProductsOrderBy+'" order="'+wooProductsOrder+'" ]';

  if (wooProductsCategories !== '') {
    var generateWooProductsShortcode = '[product_category columns="'+wooProductsColumn+'" per_page="'+wooProductsCount+'" orderby="'+wooProductsOrderBy+'" order="'+wooProductsOrder+'" category="'+wooProductsCategories+'" ]';
  }

  if (wooProductsOrderBy == 'popularity') {
    var generateWooProductsShortcode = '[best_selling_products columns="'+wooProductsColumn+'" per_page="'+wooProductsCount+'" orderby="'+wooProductsOrderBy+'" order="'+wooProductsOrder+'" category="'+wooProductsCategories+'" ]';
  }

  generateWooProductsShortcode = generateWooProductsShortcode.replace(/['"]+/g, '');
  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">Content Here!</div>'
  shortCodeScript = '<script type="text/javascript">(function(jQuery){ var submit_URl=admURL+"admin-ajax.php?action=ulpb_loadShortcode_content&POPB_Shortcode_nonce="+shortCodeRenderWidgetNO; var result=" ";jQuery.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+generateWooProductsShortcode+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>';

  var thisRenderredWidget = {
    WidgetHtml: shortCodeContent,
    WidgetScript: shortCodeScript,
  }
  return thisRenderredWidget;
}

function navigationMenuWidgetRender(this_column_menu_content){

  var menuName = this_column_menu_content['menuName'];
  var menuStyle = this_column_menu_content['menuStyle'];
  var menuColor = this_column_menu_content['menuColor'];

  if (typeof(this_column_menu_content['pbMenuFontFamily']) != 'undefined') {
    pbMenuFontFamily = this_column_menu_content['pbMenuFontFamily'];
  } else{
    pbMenuFontFamily = ' none';
  }

  if (typeof(this_column_menu_content['pbMenuFontHoverColor']) != 'undefined') {
    pbMenuFontHoverColor = this_column_menu_content['pbMenuFontHoverColor'];
  } else{
    pbMenuFontHoverColor = '';
  }
  if (typeof(this_column_menu_content['pbMenuFontHoverBgColor']) != 'undefined') {
    pbMenuFontHoverBgColor = this_column_menu_content['pbMenuFontHoverBgColor'];
  } else{
    pbMenuFontHoverBgColor = '';
  }
  if (typeof(this_column_menu_content['pbMenuFontSize']) != 'undefined') {
    pbMenuFontSize = this_column_menu_content['pbMenuFontSize'];
  } else{
    pbMenuFontSize = '';
  }

  var logoURL = jQuery('.pageLogoUrl ').val();

  
  this_widget_nav_shortcode = "[pb_samlple_nav pb_menu='"+menuName+"'    pb_logo_url='"+logoURL+"' menucolor='"+menuColor+"'  menu_class='"+menuStyle+"' menu_font='"+pbMenuFontFamily.replace(/\+/g, ' ')+"' menu_fonthovercolor='"+pbMenuFontHoverColor+"' menu_fonthoverbgcolor='"+pbMenuFontHoverBgColor+"' menu_fontsize='"+pbMenuFontSize+"' ]";


  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">nav menu!</div>';
  var shortCodeScript = '<script type="text/javascript">(function(jQuery){ var submit_URl=admURL+"admin-ajax.php?action=ulpb_loadShortcode_content&POPB_Shortcode_nonce="+shortCodeRenderWidgetNO; var result=" ";jQuery.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+this_widget_nav_shortcode+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>'+ '\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+pbMenuFontFamily+'">';

  var thisRenderredWidget = {
    WidgetHtml: shortCodeContent,
    WidgetScript: shortCodeScript,
  }
  return thisRenderredWidget;
}

function iconListWidgetRender(this_widget){

  iconListLineHeight = this_widget['iconListLineHeight'];
  iconListAlignment = this_widget['iconListAlignment'];
  iconListIconSize = this_widget['iconListIconSize'];
  iconListIconColor = this_widget['iconListIconColor'];
  iconListTextSize = this_widget['iconListTextSize'];
  iconListTextIndent = this_widget['iconListTextIndent'];
  iconListTextColor = this_widget['iconListTextColor'];
  iconListItemLinkOpen = this_widget['iconListItemLinkOpen'];
  iconListComplete = this_widget['iconListComplete'];

  iconListTextFontFam  = '';
  if (typeof(this_widget['iconListTextFontFamily']) != 'undefined') {
    iconListTextFontFam = this_widget['iconListTextFontFamily'];
    iconListTextFontFamily = this_widget['iconListTextFontFamily'].replace(/\+/g, ' ');
  }
  iconListIconSizeTablet = ''; iconListIconSizeMobile = '';
  iconListTextSizeTablet = ''; iconListTextSizeMobile = '';
  iconListTextIndentTablet = ''; iconListTextIndentMobile = '';
  if (typeof(this_widget['iconListIconSizeTablet']) != 'undefined') {
    iconListIconSizeTablet = this_widget['iconListIconSizeTablet'];
    iconListIconSizeMobile = this_widget['iconListIconSizeMobile'];

    iconListTextSizeTablet = this_widget['iconListTextSizeTablet'];
    iconListTextSizeMobile = this_widget['iconListTextSizeMobile'];

    iconListTextIndentTablet = this_widget['iconListTextIndentTablet'];
    iconListTextIndentMobile = this_widget['iconListTextIndentMobile'];
  }

  pbIconListAllItems = '';
  jQuery.each(iconListComplete,function(index, val){

    pbThisListIcon = '<i class="fa '+val['iconListItemIcon']+'"></i>';
    if (val['iconListItemLink'] !== '') {
      pbThisListItemLinkOpen = '<a href='+val['iconListItemLink']+' target="_blank" >';
      pbThisListItemLinkClose = '</a>'
    } else{
      pbThisListItemLinkOpen = '';
      pbThisListItemLinkClose = '';
    }
    pbListPrevItem = pbIconListAllItems;
    pbListThisItem = pbThisListItemLinkOpen+ " <li> "+pbThisListIcon+"  <span>"+val['iconListItemText']+"</span>  </li> " + pbThisListItemLinkClose;
    pbIconListAllItems = pbListPrevItem +  pbListThisItem;
  });

  pbIconListUniqueId = 'pb_IconList_'+Math.floor((Math.random() * 2000) + 100);


  pbIconListUniqueStyles = ' <style> #'+pbIconListUniqueId+' { line-height:'+iconListLineHeight+'px; text-align:'+iconListAlignment+'; text-decoration:none; }  #'+pbIconListUniqueId+' li i { font-size:'+iconListIconSize+'px; color:'+iconListIconColor+';  } #'+pbIconListUniqueId+' li span { font-size:'+iconListTextSize+'px; color:'+iconListTextColor+';  margin-left:'+iconListTextIndent+'px; font-family:'+iconListTextFontFamily+'; }  #'+pbIconListUniqueId+' a { text-decoration:none; } </style>  ' + '\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+iconListTextFontFam+'">';

  var currWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSize+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSize+"px', 'margin-left':'"+iconListTextIndent+"px', }); "+


        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSize+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSize+"px', 'margin-left':'"+iconListTextIndent+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  var currWidgetTabletResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeTablet+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeTablet+"px', 'margin-left':'"+iconListTextIndentTablet+"px', }); "+


        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeTablet+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeTablet+"px', 'margin-left':'"+iconListTextIndentTablet+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  var currWidgetMobileResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeMobile+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeMobile+"px', 'margin-left':'"+iconListTextIndentMobile+"px', }); "+


        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeMobile+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeMobile+"px', 'margin-left':'"+iconListTextIndentMobile+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  pbIconListItemContainer = '<ul id='+pbIconListUniqueId+' > '+pbIconListAllItems+' </ul>';

  var thisRenderredWidget = {
    WidgetHtml: pbIconListItemContainer + pbIconListUniqueStyles,
    WidgetScript: currWidgetDefaultResponsive+currWidgetTabletResponsive+currWidgetMobileResponsive,
  }
  return thisRenderredWidget;
}

function formBuilderWidgetRender(this_widget){

  widgetPbFbFormFeilds = this_widget['widgetPbFbFormFeilds'];
  widgetPbFbFormFeildOptions = this_widget['widgetPbFbFormFeildOptions'];
  widgetPbFbFormSubmitOptions = this_widget['widgetPbFbFormSubmitOptions'];

  formBuilderFieldSize = 'pbField-'+widgetPbFbFormFeildOptions['formBuilderFieldSize'];
  pbFormAllFields = [];

  formBuilderFieldVGap = ''; formBuilderFieldHGap = '2.5'; 
  if (typeof(widgetPbFbFormFeildOptions['formBuilderFieldVGap']) != 'undefined') {
    
    if (widgetPbFbFormFeildOptions['formBuilderFieldVGap'] != '') {
      formBuilderFieldVGap = widgetPbFbFormFeildOptions['formBuilderFieldVGap'];
    }
    if (widgetPbFbFormFeildOptions['formBuilderFieldHGap'] != '') {
      formBuilderFieldHGap = widgetPbFbFormFeildOptions['formBuilderFieldHGap'];
    }
  }

  formBuilderBtnVGap = ''; formBuilderBtnHGap = '';
  if (typeof(widgetPbFbFormSubmitOptions['formBuilderBtnVGap']) != 'undefined') {
    
    if (widgetPbFbFormSubmitOptions['formBuilderBtnVGap'] != '') {
      formBuilderBtnVGap = widgetPbFbFormSubmitOptions['formBuilderBtnVGap'];
    }
    if (widgetPbFbFormSubmitOptions['formBuilderBtnHGap'] != '') {
      formBuilderBtnHGap = widgetPbFbFormSubmitOptions['formBuilderBtnHGap'];
    }
  }
  pbFormBuilderUniqueIdBtn = Math.floor((Math.random() * 2000) + 100);
  formBuilderbtnIcon = '';formBuilderbtnIconBefore = '';formBuilderbtnIconAfter = '';formBuilderbtnIconAnimation = ''; formBuilderbtnIconHoverAnimationScript = '';
  if (typeof (widgetPbFbFormSubmitOptions['formBuilderbtnSelectedIcon']) != 'undefined') {
    formBuilderbtnSelectedIcon = widgetPbFbFormSubmitOptions['formBuilderbtnSelectedIcon'];
    formBuilderbtnIconPosition = widgetPbFbFormSubmitOptions['formBuilderbtnIconPosition'];
    formBuilderbtnIconAnimation = widgetPbFbFormSubmitOptions['formBuilderbtnIconAnimation'];
    formBuilderbtnIconGap = widgetPbFbFormSubmitOptions['formBuilderbtnIconGap'];
    if (formBuilderbtnSelectedIcon != '') {
      if (formBuilderbtnIconPosition == 'before') {
        formBuilderbtnIconGap = 'margin-right:' + formBuilderbtnIconGap + 'px;';
      } else {
        formBuilderbtnIconGap = 'margin-left:' + formBuilderbtnIconGap + 'px;';
      }
      formBuilderbtnIcon = '<i style="' + formBuilderbtnIconGap + '" class="fa ' + formBuilderbtnSelectedIcon + ' btnIcon-'+pbFormBuilderUniqueIdBtn+'"></i>';

      if (formBuilderbtnIconAnimation != '') {
        formBuilderbtnIconHoverAnimationScript = " <script>"+
          "jQuery('.form-btn-"+pbFormBuilderUniqueIdBtn+"').mouseenter(function(){"+
            "jQuery('.btnIcon-"+pbFormBuilderUniqueIdBtn+"').addClass('animated "+formBuilderbtnIconAnimation+"').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',function(){ "+
                "jQuery('.btnIcon-"+pbFormBuilderUniqueIdBtn+"').removeClass('animated "+formBuilderbtnIconAnimation+"') "+
            "}); "+
          "});"+
          "</script> " ;
      }

    } else {
      formBuilderbtnIcon = '';
    }
    if (formBuilderbtnIconPosition == 'before') {
      formBuilderbtnIconBefore = formBuilderbtnIcon;
      formBuilderbtnIconAfter = '';
    } else {
      formBuilderbtnIconAfter = formBuilderbtnIcon;
      formBuilderbtnIconBefore = '';
    }
  }

  jQuery.each(widgetPbFbFormFeilds, function(index, val){
    thisFieldOptions = val['thisFieldOptions'];

    var thisFieldAttr = 'style="width:99%;  "  placeholder="'+thisFieldOptions['fbFieldPlaceHolder']+'" required="'+thisFieldOptions['fbFieldRequired']+'"  id="fieldID-'+index+'" ' ;
    var multiFieldStyleAttr = 'style="margin-right:25px; display:'+thisFieldOptions['displayFieldsInline']+'; line-height:2em; font-size:16px; "';

    switch (val['fbFieldType']) {
      case 'textarea':
           pbThisFormField = '<textarea rows="'+thisFieldOptions['fbtextareaRows']+'" name="textareaField'+index+'" '+thisFieldAttr+' class="pbFormField  '+formBuilderFieldSize+'" ></textarea>';
      break;
      case 'radio':

           multiOptionFieldValues = thisFieldOptions['multiOptionFieldValues'].split('\n');
           allRadioItems = '';

           for (var i =0; i< multiOptionFieldValues.length; i++) {
             thisRadioLabel = '<label for="fieldID-'+index+'-'+i+'">'+multiOptionFieldValues[i]+'</label>';
             thisRadioItem = '<span '+multiFieldStyleAttr+'>  <input type="radio" name="radioField'+index+'" id="fieldID-'+index+'-'+i+'" value="'+multiOptionFieldValues[i]+'" > ' +thisRadioLabel+ ' </span>';
             
             prevRadioFields = allRadioItems;
             allRadioItems = prevRadioFields +  thisRadioItem;
           }
           pbThisFormField = allRadioItems;

      break;
      case 'checkbox':
           multiOptionFieldValues = thisFieldOptions['multiOptionFieldValues'].split('\n');
           allRadioItems = '';

           for (var i =0; i< multiOptionFieldValues.length; i++) {
             thisRadioLabel = '<label for="fieldID-'+index+'-'+i+'">'+multiOptionFieldValues[i]+'</label>';
             thisRadioItem = '<span '+multiFieldStyleAttr+'>  <input type="checkbox" name="checkField'+index+'" id="fieldID-'+index+'-'+i+'" value="'+multiOptionFieldValues[i]+'" > ' +thisRadioLabel+ ' </span>';
             
             prevRadioFields = allRadioItems;
             allRadioItems = prevRadioFields +  thisRadioItem;
           }
           pbThisFormField = allRadioItems;
      break;
      case 'select':
           multiOptionFieldValues = thisFieldOptions['multiOptionFieldValues'].split('\n');
           allRadioItems = '';

           for (var i =0; i< multiOptionFieldValues.length; i++) {

             thisRadioItem = '<option  value="'+multiOptionFieldValues[i]+'" > '+multiOptionFieldValues[i]+' </option> ';
             
             prevRadioFields = allRadioItems;
             allRadioItems = prevRadioFields +  thisRadioItem;
           }


           pbThisFormField = '<select name="selectField'+index+'" id="fieldID-'+index+'"  '+thisFieldAttr+' class="pbFormField  '+formBuilderFieldSize+'">'+ allRadioItems +'</select>';  
      break;
      default: 
           pbThisFormField = '<input type="'+val['fbFieldType']+'" name="inputField'+index+'" '+thisFieldAttr+' class="pbFormField  '+formBuilderFieldSize+'" >';
      break;
    } //switch end

      pbThisFormFieldLabel = '<label for="fieldID-'+index+'" class="pbFormLabel"> '+thisFieldOptions['fbFieldLabel']+' </label>';
      pbThisFormFieldWrapped =  '<div style="width:'+(thisFieldOptions['fbFieldWidth']-3)+'%; margin-right:'+formBuilderFieldHGap+'%; margin-top:'+formBuilderFieldVGap+'%; display:inline-block;">' + pbThisFormFieldLabel+'\n <br> '+pbThisFormField +'</div>';

      pbFormPrevFields = pbFormAllFields;
      pbFormAllFields = pbFormPrevFields +  pbThisFormFieldWrapped;

  } ); //each loop end

  formBuilderBtnFontFamily = ' '; formBuilderFieldFontFamily = ' ';
  if (typeof(widgetPbFbFormSubmitOptions['formBuilderBtnFontFamily']) != 'undefined' ) {
    if (widgetPbFbFormSubmitOptions['formBuilderBtnFontFamily'] != '') {
      var formBuilderBtnFontFamily = widgetPbFbFormSubmitOptions['formBuilderBtnFontFamily'];
    }
  }
  if (typeof(widgetPbFbFormFeildOptions['formBuilderFieldFontFamily']) != 'undefined') {
    if (widgetPbFbFormFeildOptions['formBuilderFieldFontFamily'] != '') {
      var formBuilderFieldFontFamily = widgetPbFbFormFeildOptions['formBuilderFieldFontFamily'];
    }
  }

  pbFormBuilderSubmitStyles = ' style=" width:100%; background:'+widgetPbFbFormSubmitOptions['formBuilderBtnBgColor']+'; color:'+widgetPbFbFormSubmitOptions['formBuilderBtnColor']+'; font-size:'+widgetPbFbFormSubmitOptions['formBuilderBtnFontSize']+'px;  border:'+widgetPbFbFormSubmitOptions['formBuilderBtnBorderWidth']+'px solid '+widgetPbFbFormSubmitOptions['formBuilderBtnBorderColor']+'; border-radius:'+widgetPbFbFormSubmitOptions['formBuilderBtnBorderRadius']+'px; font-family:'+formBuilderBtnFontFamily.replace(/\+/g, ' ')+', helvetica, arial; " ';
  buttonMargin = '2% 2.5% 2% 0';
  if (widgetPbFbFormSubmitOptions['formBuilderBtnAlignment'] == 'center') {
    calcMargin = 50 - (widgetPbFbFormSubmitOptions['formBuilderBtnWidth']/2);
    buttonMargin = '2% 2.5% 2% '+calcMargin+'%';
  } else if(widgetPbFbFormSubmitOptions['formBuilderBtnAlignment'] == 'right') {
    calcMargin = 100 -(widgetPbFbFormSubmitOptions['formBuilderBtnWidth']);
    buttonMargin = '2% 2.5% 2% '+calcMargin+'%';
  }
  pbFormBuilderSubmit = '<div style="text-align:'+widgetPbFbFormSubmitOptions['formBuilderBtnAlignment']+';  width:'+(widgetPbFbFormSubmitOptions['formBuilderBtnWidth']-3)+'%; margin:'+buttonMargin+'; margin-left:'+formBuilderBtnHGap+'%; margin-top:'+formBuilderBtnVGap+'%;  display:inline-block;">  <button '+pbFormBuilderSubmitStyles+' class="pbField-'+widgetPbFbFormSubmitOptions['formBuilderBtnSize']+' pbFieldBtn  form-btn-'+pbFormBuilderUniqueIdBtn+'" disabled="disabled"> '+formBuilderbtnIconBefore+' '+widgetPbFbFormSubmitOptions['formBuilderBtnText']+'  '+formBuilderbtnIconAfter+' </button> </div>';


  pbFormBuilderUniqueId = 'pb_FormBuilder_'+Math.floor((Math.random() * 2000) + 100);

  pbFormBuilderWrapper = '<form id="'+pbFormBuilderUniqueId+'" > '+pbFormAllFields+'   '+pbFormBuilderSubmit+' </form>';

  pbFormBuilderStylesID = '#'+pbFormBuilderUniqueId;

  pbThisFormBuilderStyles = '<style>  '+pbFormBuilderStylesID+' .pbFormField {   background:'+widgetPbFbFormFeildOptions['formBuilderFieldBgColor']+';  color:'+widgetPbFbFormFeildOptions['formBuilderFieldColor']+'; border:'+widgetPbFbFormFeildOptions['formBuilderFieldBorderWidth']+'px solid '+widgetPbFbFormFeildOptions['formBuilderFieldBorderColor']+'; border-radius:'+widgetPbFbFormFeildOptions['formBuilderFieldBorderRadius']+'px; font-family:'+formBuilderFieldFontFamily.replace(/\+/g, ' ')+', helvetica, arial; }           '+pbFormBuilderStylesID+' .pbFormLabel{ font-size:'+widgetPbFbFormFeildOptions['formBuilderLabelSize']+'px; color:'+widgetPbFbFormFeildOptions['formBuilderLabelColor']+'; display:'+widgetPbFbFormFeildOptions['formBuilderFieldLabelDisplay']+'; line-height:3em; } '+pbFormBuilderStylesID+' button:hover { background:'+widgetPbFbFormSubmitOptions['formBuilderBtnHoverBgColor']+' !important; color:'+widgetPbFbFormSubmitOptions['formBuilderBtnHoverTextColor']+' !important; }  </style>' + '<link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+formBuilderBtnFontFamily+'">  <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+formBuilderFieldFontFamily+'">';

        formBuilderLabelSize = widgetPbFbFormFeildOptions['formBuilderLabelSize'];
        formBuilderBtnFontSize = widgetPbFbFormSubmitOptions['formBuilderBtnFontSize'];
        if (typeof(widgetPbFbFormFeildOptions['formBuilderLabelSizeTablet']) != 'undefined') {
          formBuilderLabelSizeTablet = widgetPbFbFormFeildOptions['formBuilderLabelSizeTablet'];
          formBuilderLabelSizeMobile = widgetPbFbFormFeildOptions['formBuilderLabelSizeMobile'];

          formBuilderBtnFontSizeTablet = widgetPbFbFormSubmitOptions['formBuilderBtnFontSizeTablet'];
          formBuilderBtnFontSizeMobile = widgetPbFbFormSubmitOptions['formBuilderBtnFontSizeMobile'];
        }else{
          formBuilderLabelSizeTablet = '';
          formBuilderLabelSizeMobile = '';
          formBuilderBtnFontSizeTablet = '';
          formBuilderBtnFontSizeMobile = '';
        }

          var currWidgetDefaultResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-l') ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSize+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSize+"px', }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-l' ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSize+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSize+"px', }); "+
              
              "}"+
              " "+
              '</script> ';

          var currWidgetTabletResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-m') ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeTablet+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeTablet+"px', }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-m' ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeTablet+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeTablet+"px', }); "+
              
              "}"+
              " "+
              '</script> ';

          var currWidgetMobileResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-s') ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeMobile+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeMobile+"px', }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-s' ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeMobile+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeMobile+"px', }); "+
              
              "}"+
              " "+
              '</script> ';

  var thisRenderredWidget = {
    WidgetHtml: pbFormBuilderWrapper + '\n '+ pbThisFormBuilderStyles + '\n',
    WidgetScript: currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive + formBuilderbtnIconHoverAnimationScript,
  }
  return  thisRenderredWidget;

}
function textWidgetRender(this_widget_text,widgetStyling){

  widgetTextContent = this_widget_text['widgetTextContent'];
  widgetTextAlignment = this_widget_text['widgetTextAlignment'];
  widgetTextTag = this_widget_text['widgetTextTag'];
  widgetTextColor = this_widget_text['widgetTextColor'];
  widgetTextSize = this_widget_text['widgetTextSize'];
  widgetTextWeight = this_widget_text['widgetTextWeight'];
  widgetTextTransform = this_widget_text['widgetTextTransform']; 

  if (typeof(this_widget_text['widgetTextFamily']) != 'undefined') {
    widgetTextFamily = this_widget_text['widgetTextFamily'];
  } else{
    widgetTextFamily = ' none';
  }

  if (typeof(this_widget_text['widgetTextLineHeight']) != 'undefined') {
    widgetTextLineHeight = this_widget_text['widgetTextLineHeight'];
  } else{
    widgetTextLineHeight = '';
  }

  if (typeof(this_widget_text['widgetTextSpacing']) != 'undefined') {
    widgetTextSpacing = this_widget_text['widgetTextSpacing'];
  } else{
    widgetTextSpacing = '';
  }

  widgetTextAlignmentTablet = widgetTextAlignment; widgetTextAlignmentMobile = widgetTextAlignment;
  if (typeof(this_widget_text['widgetTextAlignment']) != 'undefined' ) {
    widgetTextAlignmentTablet = this_widget_text['widgetTextAlignmentTablet'];
    widgetTextAlignmentMobile = this_widget_text['widgetTextAlignmentMobile'];
  }

  pbWidgetTextId = 'pb_text_'+Math.floor((Math.random() * 2000) + 100);

  var currTextWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+widgetTextSize+"px', 'line-height':'"+widgetTextLineHeight+"em', 'letter-spacing':'"+widgetTextSpacing+"px', 'text-align':'"+widgetTextAlignment+"',   }); }"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+widgetTextSize+"px', 'line-height':'"+widgetTextLineHeight+"em', 'letter-spacing':'"+widgetTextSpacing+"px', 'text-align':'"+widgetTextAlignment+"',});"+
        
        "}"+
        " "+
        '</script> ';

  var currTextWidgetResponsiveScripts = '\n' + currTextWidgetDefaultResponsive;
  if (typeof(this_widget_text['widgetTextSizeTablet']) != 'undefined') {

    if (this_widget_text['widgetTextSizeTablet'] == '') {
      this_widget_text['widgetTextSizeTablet'] = widgetTextSize;
    }
    if (this_widget_text['widgetTextSizeMobile'] == '') {
      this_widget_text['widgetTextSizeMobile'] = widgetTextSize;
    }
    var currTextWidgetResponsiveTablet  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeTablet']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightTablet']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingTablet']+"px', 'text-align':'"+widgetTextAlignmentTablet+"',});  }"+
        
        "});"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+
        
        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeTablet']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightTablet']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingTablet']+"px', 'text-align':'"+widgetTextAlignmentTablet+"',});"+
        
        "}"+
        " "+
        '</script> ';

    var currTextWidgetResponsiveMobile  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeMobile']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightMobile']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingMobile']+"px', 'text-align':'"+widgetTextAlignmentMobile+"', });  }"+
        
        "});"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+
        
        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeMobile']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightMobile']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingMobile']+"px',  'text-align':'"+widgetTextAlignmentMobile+"', });"+
        
        "}"+
        " "+
        '</script> ';

        currTextWidgetResponsiveScripts = '\n' + currTextWidgetDefaultResponsive + '\n' + currTextWidgetResponsiveTablet + '\n' + currTextWidgetResponsiveMobile;
  }


  

  widgetTextBold = ''; widgetTextItalic = ''; widgetTextUnderlined = '';
    if (this_widget_text['widgetTextBold'] == true) { widgetTextBold = 'bold'; }
    if (this_widget_text['widgetTextItalic'] == true) { widgetTextItalic = 'italic'; }
    if (this_widget_text['widgetTextUnderlined'] == true) { widgetTextUnderlined = 'underline'; }

  var textWidgetContentStyles = 'text-align:'+widgetTextAlignment+'; color:'+widgetTextColor+'; font-size:'+widgetTextSize+'px; font-weight:'+widgetTextWeight+'; text-transform:'+widgetTextTransform+';  font-family:'+widgetTextFamily.replace(/\+/g, ' ')+',sans-serif; font-weight:'+widgetTextBold+'; font-style:'+widgetTextItalic+'; text-decoration:'+widgetTextUnderlined+'; line-height:'+widgetTextLineHeight+'em;  letter-spacing:'+widgetTextSpacing+'px; '+widgetStyling+' ';
  textWidgetContentHTML = '';
  lineBreakTag = '';

  textWidgetContentHTML = widgetTextContent.replace(/\n/g, "<br>");
  
  textWidgetContentComplete = '<'+widgetTextTag+' id="'+pbWidgetTextId+'" style="'+textWidgetContentStyles+'"> '+textWidgetContentHTML+' </'+widgetTextTag+'> '+'\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+widgetTextFamily+'">';

  var thisRenderredWidget = {
    WidgetHtml: textWidgetContentComplete,
    WidgetScript: currTextWidgetResponsiveScripts,
  }
  return thisRenderredWidget;

}



function embededVideoRender(this_widget_widgetEmbedVideo){

  widgetEvidVideoType = this_widget_widgetEmbedVideo['widgetEvidVideoType'];
  widgetEvidVideoLink = this_widget_widgetEmbedVideo['widgetEvidVideoLink'];
  widgetEvidVideoAutoplay = this_widget_widgetEmbedVideo['widgetEvidVideoAutoplay'];
  widgetEvidVideoPlayerControls = this_widget_widgetEmbedVideo['widgetEvidVideoPlayerControls'];
  widgetEvidVideoTitle = this_widget_widgetEmbedVideo['widgetEvidVideoTitle'];
  widgetEvidVideoSuggested = this_widget_widgetEmbedVideo['widgetEvidVideoSuggested'];
  widgetEvidImageOverlay = this_widget_widgetEmbedVideo['widgetEvidImageOverlay']; 
  widgetEvidImageUrl = this_widget_widgetEmbedVideo['widgetEvidImageUrl'];
  widgetEvidImageIcon = this_widget_widgetEmbedVideo['widgetEvidImageIcon'];
  widgetEvidImageLightbox = this_widget_widgetEmbedVideo['widgetEvidImageLightbox'];
  widgetEvidImageIconColor = this_widget_widgetEmbedVideo['widgetEvidImageIconColor'];

  widgetEvidPlayerId = 'POPB_player'+Math.floor((Math.random() * 2000) + 100);

  if (widgetEvidVideoAutoplay == 'true') {
      widgetEvidVideoAutoplay = 1;
    }else{
      widgetEvidVideoAutoplay = 0;
    }

    if (widgetEvidVideoPlayerControls == 'true') {
      widgetEvidVideoPlayerControls = 1;
    }else{
      widgetEvidVideoPlayerControls = 0;
    }

    if (widgetEvidVideoSuggested == 'true') {
      widgetEvidVideoSuggested = 1;
    }else{
      widgetEvidVideoSuggested = 0;
    }

    if (widgetEvidVideoTitle == 'true') {
      widgetEvidVideoTitle = 1;
    }else{
      widgetEvidVideoTitle = 0;
    }

  if (widgetEvidVideoType == 'youtube') {


    if (widgetEvidImageOverlay == 'true') {
      widgetEvidVideoAutoplay = 1;
    }


    function embededyoutube_parser(url){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }

    widgetEvidVideoLink =  embededyoutube_parser(widgetEvidVideoLink);


    videoIframeURL = "https://www.youtube.com/embed/"+widgetEvidVideoLink+"?autoplay="+widgetEvidVideoAutoplay+"&amp;rel="+widgetEvidVideoSuggested+"&amp;showinfo="+widgetEvidVideoTitle+"&amp;controls="+widgetEvidVideoPlayerControls;

    thumbImageScript = '';
    if (widgetEvidImageOverlay == 'true' ) {
      thumbnailVidIframe = '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> ';

      thumbnailVidIframe = thumbnailVidIframe.replace(/"/g, "'");
      thumbImageScript = '<script>'+
        'jQuery("#thumbImage_'+widgetEvidPlayerId+'").click(function(){'+
          'jQuery("#'+widgetEvidPlayerId+'").html("'+thumbnailVidIframe+'");'+
          'jQuery(this).remove();'+
        '}); '+
      '</script>';
      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; cursor:pointer;" >  <div id="thumbImage_'+widgetEvidPlayerId+'" > <i class="fa fa-play" style="color:'+widgetEvidImageIconColor+';font-size:100px;z-index:1;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 10px solid '+widgetEvidImageIconColor+';padding: 35px 45px;border-radius: 200px; display:'+widgetEvidImageIcon+'; "></i> <img style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  src="'+widgetEvidImageUrl+'"> </div> </div> \n'+thumbImageScript;

    } else{

      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%;  padding-top: 25px; height: 0;" > <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> </div>';

    }

  } else if(widgetEvidVideoType == 'vimeo'){

    if (widgetEvidImageOverlay == 'true') {
      widgetEvidVideoAutoplay = 1;
    }

    embededVimeo_url_parser = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

    var embededVimeo_urlMatch = widgetEvidVideoLink.match(embededVimeo_url_parser);

    if (embededVimeo_urlMatch) {
      embededVimeo_url = embededVimeo_urlMatch[3];
    }else{
      embededVimeo_url = 'Not Valid URL';
    }

    videoIframeURL = "https://player.vimeo.com/video/"+embededVimeo_url+"?autoplay="+widgetEvidVideoAutoplay+"&amp;rel="+widgetEvidVideoSuggested+"&amp;title="+widgetEvidVideoTitle;

    if (widgetEvidImageOverlay == 'true' ) {
      thumbnailVidIframe = '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> ';

      thumbnailVidIframe = thumbnailVidIframe.replace(/"/g, "'");
      thumbImageScript = '<script>'+
        'jQuery("#thumbImage_'+widgetEvidPlayerId+'").click(function(){'+
          'jQuery("#'+widgetEvidPlayerId+'").html("'+thumbnailVidIframe+'");'+
          'jQuery(this).remove();'+
        '}); '+
      '</script>';
      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; cursor:pointer;" >  <div id="thumbImage_'+widgetEvidPlayerId+'" > <i class="fa fa-play" style="color:'+widgetEvidImageIconColor+';font-size:100px;z-index:1;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 10px solid '+widgetEvidImageIconColor+';padding: 35px 45px;border-radius: 200px; display:'+widgetEvidImageIcon+'; "></i> <img style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  src="'+widgetEvidImageUrl+'"> </div> </div> \n';

    } else{

      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%;  padding-top: 25px; height: 0;" > <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> </div>';

    }

    


  }

  var thisRenderredWidget = {
    WidgetHtml: POPBVideoIframeContainer,
    WidgetScript: thumbImageScript,
  }
  return thisRenderredWidget;

}


// asdasd
function completeWidgetRender(this_column_widgets_array_C, j, this_column, rowID, thisColFontsToLoad){
          var this_column_widgets_array_current = this_column_widgets_array_C;
          var this_column_type = this_column_widgets_array_current['widgetType'];
          var widgetStyling = this_column_widgets_array_current['widgetStyling'];

          var widgetMtop = this_column_widgets_array_current['widgetMtop'];
          var widgetMleft = this_column_widgets_array_current['widgetMleft'];
          var widgetMbottom = this_column_widgets_array_current['widgetMbottom'];
          var widgetMright = this_column_widgets_array_current['widgetMright'];

          var widgetPtop = this_column_widgets_array_current['widgetPtop'];
          var widgetPleft = this_column_widgets_array_current['widgetPleft'];
          var widgetPbottom = this_column_widgets_array_current['widgetPbottom'];
          var widgetPright = this_column_widgets_array_current['widgetPright'];

          var widgetBgColor = this_column_widgets_array_current['widgetBgColor'];
          isAnimateTrue = $('.isAnimateTrue').val();
          animateWidgetId = $('.animateWidgetId').val();
          if (this_column_widgets_array_current['widgetAnimation'] != 'undefined') {
            if (isAnimateTrue == 'animate' && parseInt(animateWidgetId) == j) {
              var widgetAnimation = ' animated '+this_column_widgets_array_current['widgetAnimation'];
              
              $('.isAnimateTrue').val('');
            }else{
              var widgetAnimation = '';
            }
          }else{ 
            var widgetAnimation = '';
          }

          var allResponsiveScripts = '';
          var widgetBorderWidth = this_column_widgets_array_current['widgetBorderWidth'];
          var widgetBorderStyle = this_column_widgets_array_current['widgetBorderStyle'];
          var widgetBorderColor = this_column_widgets_array_current['widgetBorderColor'];
          var widgetBoxShadowH = this_column_widgets_array_current['widgetBoxShadowH'];
          var widgetBoxShadowV = this_column_widgets_array_current['widgetBoxShadowV'];
          var widgetBoxShadowBlur = this_column_widgets_array_current['widgetBoxShadowBlur'];
          var widgetBoxShadowColor = this_column_widgets_array_current['widgetBoxShadowColor'];

          widgetBorderRadius = '';
          if (typeof( this_column_widgets_array_current['widgetBorderRadius']) != 'undefined' ) {
            var widgetBorderRadius = this_column_widgets_array_current['widgetBorderRadius'];
          }


          switch (this_column_type) {
            case 'wigt-WYSIWYG':
              
              var this_column_editor = this_column_widgets_array_current['widgetWYSIWYG'];
              var this_column_editor_content = this_column_editor['widgetContent'];
              this_column_content = this_column_editor_content;
              contentAlign = 'none';
              break;
            case 'wigt-img':
              var this_column_img_content = this_column_widgets_array_current['widgetImg'];
              var imgUrl  = this_column_img_content['imgUrl'];
              var imgSize = this_column_img_content['imgSize'];
              var imgAlignment = this_column_img_content['imgAlignment'];
              var uniqueImgId = 'pb_img'+Math.floor((Math.random() * 2000) + 100);

              imgCustomSize = ''; imgWidgetDefaultResponsive = ''; imgWidgetTabletResponsive = ''; imgWidgetMobileResponsive= ''; 
              if (imgSize == 'custom') {
                  if (this_column_img_content['imgSizeCustomWidth'] != "undefined") {
                    imgSizeCustomWidth = this_column_img_content['imgSizeCustomWidth'];
                  }
                  if (this_column_img_content['imgSizeCustomHeight'] != "undefined") {
                    imgSizeCustomHeight = this_column_img_content['imgSizeCustomHeight'];
                  }

                  var imgCustomSize = 'width:'+imgSizeCustomWidth+'px; height:'+imgSizeCustomHeight+'px;';

                  if (typeof(this_column_img_content['imgSizeCustomWidthTablet']) != 'undefined' ) {
                    var imgWidgetDefaultResponsive  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-l') ) { "+

                      "  jQuery('#"+uniqueImgId+" img').animate({'width':'"+this_column_img_content['imgSizeCustomWidth']+"px', 'height':'"+this_column_img_content['imgSizeCustomHeight']+"px' }); "+

                      "}"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-l' ) { "+

                      "  jQuery('#"+uniqueImgId+" img').animate({'width':'"+this_column_img_content['imgSizeCustomWidth']+"px', 'height':'"+this_column_img_content['imgSizeCustomHeight']+"px' }); "+
                      "}"+
                      " "+
                      '</script> ';
                    var imgWidgetTabletResponsive  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-m') ) { "+

                      "  jQuery('#"+uniqueImgId+" img').animate({'width':'"+this_column_img_content['imgSizeCustomWidthTablet']+"px', 'height':'"+this_column_img_content['imgSizeCustomHeightTablet']+"px' }); "+

                      "}"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-m' ) { "+

                      "  jQuery('#"+uniqueImgId+" img').animate({'width':'"+this_column_img_content['imgSizeCustomWidthTablet']+"px', 'height':'"+this_column_img_content['imgSizeCustomHeightTablet']+"px' }); "+
                      "}"+
                      " "+
                      '</script> ';
                    var imgWidgetMobileResponsive  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-s') ) { "+

                      "  jQuery('#"+uniqueImgId+" img').animate({'width':'"+this_column_img_content['imgSizeCustomWidthTablet']+"px', 'height':'"+this_column_img_content['imgSizeCustomHeightTablet']+"px' }); "+

                      "}"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-m' ) { "+

                      "  jQuery('#"+uniqueImgId+" img').animate({'width':'"+this_column_img_content['imgSizeCustomWidthTablet']+"px', 'height':'"+this_column_img_content['imgSizeCustomHeightTablet']+"px' }); "+
                      "}"+
                      " "+
                      '</script> ';
                  }

              }

              var this_column_img = "<div style='text-align:"+imgAlignment+";'><img src="+imgUrl+" style=' "+imgCustomSize+" "+widgetStyling+" ' class='ftr-img-"+this_column+" img-"+imgSize+" '> </div>";

              if (this_column_img_content['imgLightBox'] != "undefined") {
                imgLightBox = this_column_img_content['imgLightBox'];
                if (imgLightBox == 'true') {
                  
                  var this_column_img = "<div class='pb_img_thumbnail'  id='"+uniqueImgId+"' style='text-align:"+imgAlignment+";'> <img src="+imgUrl+" style=' "+imgCustomSize+" "+widgetStyling+" ' class='ftr-img-"+this_column+" img-"+imgSize+" '> </div>                          <div class='pb_single_img_lightbox' id='pb_lightbox"+uniqueImgId+"'> <img src='"+imgUrl+"'> </div> <br> ";
                } else{
                  var this_column_img = "<div id='"+uniqueImgId+"' style='text-align:"+imgAlignment+";'><img src="+imgUrl+" style='text-align:"+imgAlignment+"; "+imgCustomSize+" "+widgetStyling+" ' class='ftr-img-"+this_column+" img-"+imgSize+" '> </div>";
                }
              }

              imgWidgetDefaultResponsiveAligment = ''; imgWidgetTabletResponsiveAligment = ''; imgWidgetMobileResponsiveAligment = '';
              if (typeof(this_column_img_content['imgAlignmentTablet']) != 'undefined' ) {

                var imgWidgetDefaultResponsiveAligment  = ''+
                  '<script>'+
                  "jQuery('.responsiveBtn').live('click',function(){"+
                  " if (jQuery(this).hasClass('rbt-l') ) { "+

                  "  jQuery('#"+uniqueImgId+"').css({'text-align':'"+this_column_img_content['imgAlignment']+"' }); "+

                  "}"+
                  
                  " });"+
                  "var currentVPS = jQuery('.currentViewPortSize').val();"+
                  "if ( currentVPS == 'rbt-l' ) { "+

                  "  jQuery('#"+uniqueImgId+"').css({'text-align':'"+this_column_img_content['imgAlignment']+"' }); "+
                  "}"+
                  " "+
                  '</script> ';

                var imgWidgetTabletResponsiveAligment  = ''+
                    '<script>'+
                    "jQuery('.responsiveBtn').live('click',function(){"+
                    " if (jQuery(this).hasClass('rbt-m') ) { "+

                    "  jQuery('#"+uniqueImgId+"').css({'text-align':'"+this_column_img_content['imgAlignmentTablet']+"' }); "+

                    "}"+
                    
                    " });"+
                    "var currentVPS = jQuery('.currentViewPortSize').val();"+
                    "if ( currentVPS == 'rbt-m' ) { "+

                    "  jQuery('#"+uniqueImgId+"').css({'text-align':'"+this_column_img_content['imgAlignmentTablet']+"' }); "+
                    "}"+
                    " "+
                    '</script> ';

                var imgWidgetMobileResponsiveAligment  = ''+
                    '<script>'+
                    "jQuery('.responsiveBtn').live('click',function(){"+
                    " if (jQuery(this).hasClass('rbt-s') ) { "+

                    "  jQuery('#"+uniqueImgId+"').css({'text-align':'"+this_column_img_content['imgAlignmentMobile']+"' }); "+

                    "}"+
                    
                    " });"+
                    "var currentVPS = jQuery('.currentViewPortSize').val();"+
                    "if ( currentVPS == 'rbt-m' ) { "+

                    "  jQuery('#"+uniqueImgId+"').css({'text-align':'"+this_column_img_content['imgAlignmentMobile']+"' }); "+
                    "}"+
                    " "+
                    '</script> ';
              }

              var imgWidgetScripts = imgWidgetDefaultResponsiveAligment + imgWidgetTabletResponsiveAligment + imgWidgetMobileResponsiveAligment + imgWidgetDefaultResponsive + imgWidgetTabletResponsive + imgWidgetMobileResponsive;

              allResponsiveScripts = allResponsiveScripts + imgWidgetScripts;
              
              widgetStyling = ' ';
              this_column_content = this_column_img;
              contentAlign = 'none';
            break;
            case 'wigt-menu':
              //Column Menu Widget
              var this_column_menu_content = this_column_widgets_array_current['widgetMenu'];
              var pbMenuFontFamily = this_column_menu_content['pbMenuFontFamily'];
              
              var this_column_menu  = navigationMenuWidgetRender(this_column_menu_content);

              var thisWidgetFonts = '<link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+pbMenuFontFamily+'">';
              allResponsiveScripts = allResponsiveScripts + this_column_menu['WidgetScript'];
              this_column_content = this_column_menu['WidgetHtml'] + thisWidgetFonts;
              contentAlign = 'none';
              break;
            case 'wigt-btn-gen':
              //Button Widget
              var this_widget_btn = this_column_widgets_array_current['widgetButton'];
              var btnText = this_widget_btn['btnText'];
              var btnLink = this_widget_btn['btnLink'];
              var btnBgColor = this_widget_btn['btnBgColor'];
              var btnTextColor = this_widget_btn['btnTextColor'];
              var btnFontSize = this_widget_btn['btnFontSize'];
              var btnHoverBgColor = this_widget_btn['btnHoverBgColor'];
              var btnHoverTextColor = this_widget_btn['btnHoverTextColor'];
              var btnWidth = this_widget_btn['btnWidth'];
              var btnHeight = this_widget_btn['btnHeight'];
              var btnBlankAttr = this_widget_btn['btnBlankAttr'];
              var btnBorderColor = this_widget_btn['btnBorderColor'];
              var btnBorderWidth = this_widget_btn['btnBorderWidth'];
              var btnBorderRadius = this_widget_btn['btnBorderRadius'];
              var btnButtonAlignment = this_widget_btn['btnButtonAlignment'];
              pbWidgetBtnId = 'pb_btn_'+Math.floor((Math.random() * 2000) + 100);

              if (typeof(this_widget_btn['btnButtonFontFamily']) != 'undefined') {
                var btnButtonFontFamily = this_widget_btn['btnButtonFontFamily'];
              } else{
                var btnButtonFontFamily = 'none';
              }

              btnIcon = ''; btnIconBefore = ''; btnIconAfter = ''; btnIconAnimation = '';
              if (typeof(this_widget_btn['btnSelectedIcon']) != 'undefined') {
                btnSelectedIcon = this_widget_btn['btnSelectedIcon'];
                btnIconPosition = this_widget_btn['btnIconPosition'];
                btnIconAnimation = this_widget_btn['btnIconAnimation'];
                btnIconGap = this_widget_btn['btnIconGap'];

                if (btnSelectedIcon != '') {
                  if (btnIconPosition == 'before') {
                    btnIconGap = 'margin-right:'+btnIconGap+'px;';
                  }else{
                    btnIconGap = 'margin-left:'+btnIconGap+'px;';
                  }
                  btnIcon = '<i style="'+btnIconGap+'" class="fa '+btnSelectedIcon+'"></i>';
                }else{
                  btnIcon = '';
                }

                if (btnIconPosition == 'before') {
                  btnIconBefore = btnIcon;
                  btnIconAfter = '';
                }else{
                  btnIconAfter = btnIcon;
                  btnIconBefore = '';
                }
              }

              var btn_width = "padding: "+btnHeight+"px "+btnWidth+"px !important;";
              if (typeof(this_widget_btn['btnWidthPercent']) != 'undefined') {
                var btnWidthPercent = this_widget_btn['btnWidthPercent'];
                if (btnWidthPercent !== '') {
                  var btn_width = "padding: "+btnHeight+"px "+'5'+"px !important; width:"+btnWidthPercent+"%;";
                }
                
              } else{
                var btnWidthPercent = 'none';
              }

              var btnWidthUnit = '%';
              var btnWidthUnitTablet = '%';
              var btnWidthUnitMobile = '%';
              if (typeof(this_widget_btn['btnWidthUnit']) != 'undefined') {
                btnWidthUnit = this_widget_btn['btnWidthUnit'];
                btnWidthUnitTablet = this_widget_btn['btnWidthUnitTablet'];
                btnWidthUnitMobile = this_widget_btn['btnWidthUnitMobile'];
              }

              var btnTextEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' ></div>"; 

              btnTextWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" > '+btnIconBefore+' '+btnText+' '+btnIconAfter+' </div>'+btnTextEditingSaveTriggerBtn;

              var this_widget_btn_complete = "<br><div class='wdt-"+this_column_type+" parent-"+pbWidgetBtnId+"' style='text-align:"+btnButtonAlignment+";'> <button id='"+pbWidgetBtnId+"' style='color:"+btnTextColor+" !important;font-size:"+btnFontSize+"px !important; background: "+btnBgColor+" !important; background-color: "+btnBgColor+" !important;  border: "+btnBorderWidth+"px solid "+btnBorderColor+" !important; border-radius: "+btnBorderRadius+"px !important; font-family:"+btnButtonFontFamily.replace(/\+/g, ' ')+" ,sans-serif; "+btn_width+" ' disabled >   "+btnTextWrapped+"  </button></div> <style> #"+pbWidgetBtnId+":hover {background:"+btnHoverBgColor+" !important; color:"+btnHoverTextColor+" !important; transition: all .5s;}  </style>";

                  var currButtonWidgetDefaultResponsive  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-l') ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+btnFontSize+"px', 'width':'"+btnWidthPercent+btnWidthUnit+"', 'padding-top':'"+btnHeight+"px', 'padding-bottom':'"+btnHeight+"px', }); "+
                      "  jQuery('.parent-"+pbWidgetBtnId+"').css({'text-align':'"+btnButtonAlignment+"', });"+
                      " }"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      " if ( currentVPS == 'rbt-l' ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+btnFontSize+"px', 'width':'"+btnWidthPercent+btnWidthUnit+"', 'padding-top':'"+btnHeight+"px', 'padding-bottom':'"+btnHeight+"px', });"+
                      "  jQuery('.parent-"+pbWidgetBtnId+"').css({'text-align':'"+btnButtonAlignment+"', }); "+
                      
                      "}"+
                      " "+
                      '</script> ';

                  btnButtonAlignmentTablet = ''; btnButtonAlignmentMobile = '';
                  if (typeof(this_widget_btn['btnButtonAlignmentTablet']) != 'undefined') {
                    btnButtonAlignmentTablet = this_widget_btn['btnButtonAlignmentTablet'];
                    btnButtonAlignmentMobile = this_widget_btn['btnButtonAlignmentMobile'];
                  }
                  currButtonWidgetDefaultResponsiveTablet = '';
                  currButtonWidgetDefaultResponsiveMobile = '';
                  if (typeof(this_widget_btn['btnFontSizeTablet']) !== 'undefined') {
                    var currButtonWidgetDefaultResponsiveTablet  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-m') ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn['btnFontSizeTablet']+"px', 'width':'"+this_widget_btn['btnWidthPercentTablet']+btnWidthUnitTablet+"', 'padding-top':'"+this_widget_btn['btnHeightTablet']+"px', 'padding-bottom':'"+this_widget_btn['btnHeightTablet']+"px', }); "+
                      "  jQuery('.parent-"+pbWidgetBtnId+"').css({'text-align':'"+btnButtonAlignmentTablet+"', }); "+
                      "}"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-m' ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn['btnFontSizeTablet']+"px', 'width':'"+this_widget_btn['btnWidthPercentTablet']+btnWidthUnitTablet+"', 'padding-top':'"+this_widget_btn['btnHeightTablet']+"px', 'padding-bottom':'"+this_widget_btn['btnHeightTablet']+"px', }); "+
                      "  jQuery('.parent-"+pbWidgetBtnId+"').css({'text-align':'"+btnButtonAlignmentTablet+"', }); "+
                      "}"+
                      " "+
                      '</script> ';

                    var currButtonWidgetDefaultResponsiveMobile  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-s') ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn['btnFontSizeMobile']+"px', 'width':'"+this_widget_btn['btnWidthPercentMobile']+btnWidthUnitMobile+"', 'padding-top':'"+this_widget_btn['btnHeightMobile']+"px', 'padding-bottom':'"+this_widget_btn['btnHeightMobile']+"px', }); "+
                      "  jQuery('.parent-"+pbWidgetBtnId+"').css({'text-align':'"+btnButtonAlignmentMobile+"', }); "+
                      " }"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-s' ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn['btnFontSizeMobile']+"px', 'width':'"+this_widget_btn['btnWidthPercentMobile']+btnWidthUnitMobile+"', 'padding-top':'"+this_widget_btn['btnHeightMobile']+"px', 'padding-bottom':'"+this_widget_btn['btnHeightMobile']+"px', });"+
                      "  jQuery('.parent-"+pbWidgetBtnId+"').css({'text-align':'"+btnButtonAlignmentMobile+"', }); "+
                      
                      "}"+
                      " "+
                      '</script> ';

                  }

                  currButtonWidgetResponsiveScripts = '\n' + currButtonWidgetDefaultResponsive + '\n' + currButtonWidgetDefaultResponsiveTablet + '\n' + currButtonWidgetDefaultResponsiveMobile;
                  
                  allResponsiveScripts = allResponsiveScripts + currButtonWidgetResponsiveScripts;

                var thisWidgetFonts = '<link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+btnButtonFontFamily+'">';
                this_widget_btn_complete = this_widget_btn_complete + thisWidgetFonts;
              this_column_content = this_widget_btn_complete ;
            break;
            case 'wigt-pb-form':
              var this_widget_subscribeForm = this_column_widgets_array_current['widgetSubscribeForm'];
                var this_column_content = subscribeFormWidgetRender(this_widget_subscribeForm);
                allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
                this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-postSlider':
              var this_widget_postsSlider = this_column_widgets_array_current['widgetPBPostsSlider'];
              var postslider = postsSliderWidgetRender(this_widget_postsSlider);
                this_column_content = postslider;
                allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
                this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-video':
              var this_widget_widgetVideo = this_column_widgets_array_current['widgetVideo'];
              var videoWebM = this_widget_widgetVideo['videoWebM'];
              var videoMpfour = this_widget_widgetVideo['videoMpfour'];
              var videoThumb = this_widget_widgetVideo['videoThumb'];
              var vidAutoPlay = this_widget_widgetVideo['vidAutoPlay'];
              var vidLoop = this_widget_widgetVideo['vidLoop']; 
              var vidControls = this_widget_widgetVideo['vidControls'];

              var widgetVideoRender = "<video "+vidLoop+" muted "+vidAutoPlay+" poster='"+videoThumb+"' class='pbp_renderVideo video-js vjs-default-skin vjs-big-play-centered vjs-fluid' style='width:100%;' "+vidControls+"  data-setup='{}' ><source src='"+videoWebM+"' type='video/webm'><source src='"+videoMpfour+"' type='video/mp4'></video>"

                this_column_content = widgetVideoRender;
            break;
            case 'wigt-pb-icons':
              var this_widget_icons = this_column_widgets_array_current['widgetIcons'];
              var pbSelectedIcon = this_widget_icons['pbSelectedIcon'];
              var pbIconSize = this_widget_icons['pbIconSize'];
              var pbIconRotation = this_widget_icons['pbIconRotation'];
              var pbIconColor = this_widget_icons['pbIconColor'];

              var widgetIconStyles = 'transform: rotate('+pbIconRotation+ 'deg); color:'+pbIconColor+'; font-size:'+pbIconSize+'px;';
              var widgetIconRender = '<div style="text-align:center;"><i class="'+pbSelectedIcon+'" style="'+widgetIconStyles+'" ></i> </div>';

                this_column_content = widgetIconRender;
            break;
            case 'wigt-pb-counter':
              var this_widget_counter = this_column_widgets_array_current['widgetCounter'];
              var pbCounterID = 'pb_counter'+Math.floor((Math.random() * 2000) + 100);
              var counterStartingNumber = this_widget_counter['counterStartingNumber'];
              var counterEndingNumber = this_widget_counter['counterEndingNumber'];
              var counterNumberPrefix = this_widget_counter['counterNumberPrefix'];
              var counterNumberSuffix = this_widget_counter['counterNumberSuffix'];
              var counterAnimationTime = this_widget_counter['counterAnimationTime'];
              var counterTitle = this_widget_counter['counterTitle'];
              var counterTextColor = this_widget_counter['counterTextColor'];
              var counterTitleColor = this_widget_counter['counterTitleColor'];
              var counterNumberFontSize = this_widget_counter['counterNumberFontSize'];
              var counterTitleFontSize = this_widget_counter['counterTitleFontSize'];

              var counterScript =  "<script> jQuery('#"+pbCounterID+"').each(function () { var currElementCounter = jQuery(this); jQuery({ Counter: "+counterStartingNumber+" }).animate({ Counter: currElementCounter.text() }, { duration: "+counterAnimationTime+", easing: 'swing', step: function () { currElementCounter.text(Math.ceil(this.Counter)); }   });  }); </script>";

              var counterHTMLStyles = 'color:'+counterTextColor+'; font-size:'+counterNumberFontSize+'px;  line-height:1.5; text-align:center;';

              var counterTitleStyles = 'color:'+counterTitleColor+'; font-size:'+counterTitleFontSize+'px !important;  line-height:1.5; text-align:center;';

              var counterTitleHTML = '<div style="'+counterTitleStyles+'" >'+counterTitle+'</div>';

              var counterHTML = '<div style="'+counterHTMLStyles+'" >'+counterNumberPrefix+'<span id="'+pbCounterID+'">'+counterEndingNumber+'</span>'+counterNumberSuffix+' </div> '+counterTitleHTML;
              this_column_content = counterHTML + counterScript;
            break;
            case 'wigt-pb-audio':
              var this_widget_audio = this_column_widgets_array_current['widgetAudio'];
              var audioOgg = this_widget_audio['audioOgg'];
              var audioMpThree = this_widget_audio['audioMpThree'];
              var audioAutoPlay = this_widget_audio['audioAutoPlay'];
              var audioLoop = this_widget_audio['audioLoop'];
              var audioControls = this_widget_audio['audioControls'];

              var audioPlayerHTML = '<audio '+audioLoop+' '+audioControls+'  style="width:100%;" > <source src="'+audioOgg+'" type="audio/ogg"> <source src="'+audioMpThree+'" type="audio/mpeg"> Your browser does not support the audio player. </audio>';
              this_column_content = audioPlayerHTML;
            break; 
            case 'wigt-pb-cards':
              var this_widget_card = this_column_widgets_array_current['widgetCard'];
              this_column_content = cardWidgetRender(this_widget_card);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break; 
            case 'wigt-pb-testimonial':
              var this_widget_testimonial = this_column_widgets_array_current['widgetTestimonial'];
              this_column_content = testimonialWidgetRender(this_widget_testimonial, j, this_column ,this_column_type);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-shortcode':
              var this_widget_shortcode = this_column_widgets_array_current['widgetShortCode'];
              this_column_content = shortCodeWidgetRender(this_widget_shortcode);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-countdown': 
              var this_widget_countdown = this_column_widgets_array_current['widgetCowntdown'];
              this_column_content = countDownWidgetRender(this_widget_countdown);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-imageSlider': 
              var this_widget_imageSlider = this_column_widgets_array_current['widgetImageSlider'];
              this_column_content = imageSliderWidgetRender(this_widget_imageSlider);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-progressBar': 
              var this_widget_progressBar = this_column_widgets_array_current['widgetProgressBar'];

              var pbProgressBarTextFontFamily = this_widget_progressBar['pbProgressBarTextFontFamily'];

              var thisWidgetFonts = '<link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+pbProgressBarTextFontFamily+'">';
              this_column_content = progressBarWidgetRender(this_widget_progressBar);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'] + thisWidgetFonts;
            break;
            case 'wigt-pb-pricing':
              var this_widget_pricing = this_column_widgets_array_current['widgetPricing'];
              this_column_content = pricingWidgetRender(this_widget_pricing);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-imgCarousel':
              var this_widget_img_carousel = this_column_widgets_array_current['widgetImgCarousel'];
              this_column_content = imgCarouselWidgetRender(this_widget_img_carousel);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-wooCommerceProducts':
              var this_widget_wooCommerceProducts = this_column_widgets_array_current['widgetWooPorducts'];
              this_column_content = wooCommerceWidgetRender(this_widget_wooCommerceProducts);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-iconList':
              var this_widget_icon_list = this_column_widgets_array_current['widgetIconList'];
              this_column_content = iconListWidgetRender(this_widget_icon_list);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-spacer':
              var this_widget_spacer = this_column_widgets_array_current['widgetVerticalSpace'];
              pbWidgetSpacerId = 'pb_spacer_'+Math.floor((Math.random() * 2000) + 100);

              var currSpacerWidgetDefaultResponsive  = ''+
                '<script>'+
                "jQuery('.responsiveBtn').live('click',function(){"+
                " if (jQuery(this).hasClass('rbt-l') ) { "+

                "  jQuery('#"+pbWidgetSpacerId+"').animate({'height':'"+this_widget_spacer['widgetVerticalSpaceValue']+"px',}); "+
                "}"+
                
                " });"+
                "var currentVPS = jQuery('.currentViewPortSize').val();"+
                "if ( currentVPS == 'rbt-l' ) { "+

                "  jQuery('#"+pbWidgetSpacerId+"').animate({'height':'"+this_widget_spacer['widgetVerticalSpaceValue']+"px',}); "+
                
                "}"+
                " "+
                '</script> ';

                currSpacerWidgetResponsiveScripts = '\n' + currSpacerWidgetDefaultResponsive;
              if (typeof(this_widget_spacer['widgetVerticalSpaceValueTablet']) !== 'undefined') {
                  var currSpacerWidgetDefaultResponsiveTablet  = ''+
                    '<script>'+
                    "jQuery('.responsiveBtn').live('click',function(){"+
                    " if (jQuery(this).hasClass('rbt-m') ) { "+

                    "  jQuery('#"+pbWidgetSpacerId+"').animate({'height':'"+this_widget_spacer['widgetVerticalSpaceValueTablet']+"px',}); "+
                    "}"+
                    
                    " });"+
                    "var currentVPS = jQuery('.currentViewPortSize').val();"+
                    "if ( currentVPS == 'rbt-m' ) { "+

                    "  jQuery('#"+pbWidgetSpacerId+"').animate({'height':'"+this_widget_spacer['widgetVerticalSpaceValueTablet']+"px',}); "+
                    
                    "}"+
                    " "+
                    '</script> ';

                  var currSpacerWidgetDefaultResponsiveMobile  = ''+
                    '<script>'+
                    "jQuery('.responsiveBtn').live('click',function(){"+
                    " if (jQuery(this).hasClass('rbt-s') ) { "+

                    "  jQuery('#"+pbWidgetSpacerId+"').animate({'height':'"+this_widget_spacer['widgetVerticalSpaceValueMobile']+"px',}); "+
                    "}"+
                    
                    " });"+
                    "var currentVPS = jQuery('.currentViewPortSize').val();"+
                    "if ( currentVPS == 'rbt-s' ) { "+

                    "  jQuery('#"+pbWidgetSpacerId+"').animate({'height':'"+this_widget_spacer['widgetVerticalSpaceValueMobile']+"px',}); "+
                    
                    "}"+
                    " "+
                    '</script> ';

                  currSpacerWidgetResponsiveScripts = '\n' + currSpacerWidgetDefaultResponsive +'\n' + currSpacerWidgetDefaultResponsiveTablet + '\n' + currSpacerWidgetDefaultResponsiveMobile;
              }

              widgetSpacer = '<div id="'+pbWidgetSpacerId+'" style="height:'+this_widget_spacer['widgetVerticalSpaceValue']+'px ;"></div>';

              allResponsiveScripts = allResponsiveScripts + currSpacerWidgetResponsiveScripts;

              this_column_content = widgetSpacer;
            break;
            case 'wigt-pb-break':
              var this_widget_breaker = this_column_widgets_array_current['widgetBreaker'];

              widgetBreaker = '<div style=" padding:'+this_widget_breaker['widgetBreakerSpacing']+'px 0; text-align: '+this_widget_breaker['widgetBreakerAlignment']+' ; "> <span style=" border-top:'+this_widget_breaker['widgetBreakerWeight']+'px  '+this_widget_breaker['widgetBreakerStyle']+'   '+this_widget_breaker['widgetBreakerColor']+'; width:'+this_widget_breaker['widgetBreakerWidth']+'%; display:inline-block; line-height:0;" ></span> </div>';

              this_column_content = widgetBreaker;
            break;
            case 'wigt-pb-formBuilder':
              var this_widget_form_builder = this_column_widgets_array_current['widgetFormBuilder'];
              this_column_content = formBuilderWidgetRender(this_widget_form_builder);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-text':
              var this_widget_text = this_column_widgets_array_current['widgetText'];
              widgetTextFamily = this_widget_text['widgetTextFamily'];


                widgetTextContent = this_widget_text['widgetTextContent'];
                widgetTextAlignment = this_widget_text['widgetTextAlignment'];
                widgetTextTag = this_widget_text['widgetTextTag'];
                widgetTextColor = this_widget_text['widgetTextColor'];
                widgetTextSize = this_widget_text['widgetTextSize'];
                widgetTextWeight = this_widget_text['widgetTextWeight'];
                widgetTextTransform = this_widget_text['widgetTextTransform']; 

                if (typeof(this_widget_text['widgetTextFamily']) != 'undefined') {
                  widgetTextFamily = this_widget_text['widgetTextFamily'];
                } else{
                  widgetTextFamily = ' none';
                }

                if (typeof(this_widget_text['widgetTextLineHeight']) != 'undefined') {
                  widgetTextLineHeight = this_widget_text['widgetTextLineHeight'];
                } else{
                  widgetTextLineHeight = '';
                }

                if (typeof(this_widget_text['widgetTextSpacing']) != 'undefined') {
                  widgetTextSpacing = this_widget_text['widgetTextSpacing'];
                } else{
                  widgetTextSpacing = '';
                }

                widgetTextAlignmentTablet = widgetTextAlignment; widgetTextAlignmentMobile = widgetTextAlignment;
                if (typeof(this_widget_text['widgetTextAlignment']) != 'undefined' ) {
                  widgetTextAlignmentTablet = this_widget_text['widgetTextAlignmentTablet'];
                  widgetTextAlignmentMobile = this_widget_text['widgetTextAlignmentMobile'];
                }

                pbWidgetTextId = 'pb_text_'+Math.floor((Math.random() * 2000) + 100);

                var currTextWidgetDefaultResponsive  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-l') ) { "+

                      "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+widgetTextSize+"px', 'line-height':'"+widgetTextLineHeight+"em', 'letter-spacing':'"+widgetTextSpacing+"px', });"+
                      "  jQuery('#"+pbWidgetTextId+"').css({'text-align':'"+widgetTextAlignment+"', });"+

                      " }"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-l' ) { "+

                      "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+widgetTextSize+"px', 'line-height':'"+widgetTextLineHeight+"em', 'letter-spacing':'"+widgetTextSpacing+"px', });"+
                      "  jQuery('#"+pbWidgetTextId+"').css({'text-align':'"+widgetTextAlignment+"', });"+
                      
                      "}"+
                      " "+
                      '</script> ';

                var currTextWidgetResponsiveScripts = '\n' + currTextWidgetDefaultResponsive;
                if (typeof(this_widget_text['widgetTextSizeTablet']) != 'undefined') {

                  if (this_widget_text['widgetTextSizeTablet'] == '') {
                    this_widget_text['widgetTextSizeTablet'] = widgetTextSize;
                  }
                  if (this_widget_text['widgetTextSizeMobile'] == '') {
                    this_widget_text['widgetTextSizeMobile'] = widgetTextSize;
                  }
                  var currTextWidgetResponsiveTablet  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-m') ) { "+

                      "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeTablet']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightTablet']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingTablet']+"px',});  "+
                      "  jQuery('#"+pbWidgetTextId+"').css({'text-align':'"+widgetTextAlignmentTablet+"', });"+
                      "}"+
                      
                      "});"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-m' ) { "+
                      
                      "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeTablet']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightTablet']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingTablet']+"px',});"+
                      "  jQuery('#"+pbWidgetTextId+"').css({'text-align':'"+widgetTextAlignmentTablet+"', });"+
                      
                      "}"+
                      " "+
                      '</script> ';

                  var currTextWidgetResponsiveMobile  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-s') ) { "+

                      "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeMobile']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightMobile']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingMobile']+"px',});  "+
                      "  jQuery('#"+pbWidgetTextId+"').css({'text-align':'"+widgetTextAlignmentMobile+"', });"+

                      "}"+
                      
                      "});"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-s' ) { "+
                      
                      "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeMobile']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightMobile']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingMobile']+"px',});"+
                      "  jQuery('#"+pbWidgetTextId+"').css({'text-align':'"+widgetTextAlignmentMobile+"', });"+
                      
                      "}"+
                      " "+
                      '</script> ';

                      currTextWidgetResponsiveScripts = '\n' + currTextWidgetDefaultResponsive + '\n' + currTextWidgetResponsiveTablet + '\n' + currTextWidgetResponsiveMobile;
                }


                

                widgetTextBold = ''; widgetTextItalic = ''; widgetTextUnderlined = '';
                  if (this_widget_text['widgetTextBold'] == true) { widgetTextBold = 'bold'; }
                  if (this_widget_text['widgetTextItalic'] == true) { widgetTextItalic = 'italic'; }
                  if (this_widget_text['widgetTextUnderlined'] == true) { widgetTextUnderlined = 'underline'; }

                var textWidgetContentStyles = 'text-align:'+widgetTextAlignment+'; color:'+widgetTextColor+'; font-size:'+widgetTextSize+'px; font-weight:'+widgetTextWeight+'; text-transform:'+widgetTextTransform+';  font-family:'+widgetTextFamily.replace(/\+/g, ' ')+',sans-serif; font-weight:'+widgetTextBold+'; font-style:'+widgetTextItalic+'; text-decoration:'+widgetTextUnderlined+'; line-height:'+widgetTextLineHeight+'em;  letter-spacing:'+widgetTextSpacing+'px; '+widgetStyling+' ';
                textWidgetContentHTML = '';
                lineBreakTag = '';

                textWidgetContentHTML = widgetTextContent.replace(/\n/g, "<br>");
                
                textWidgetContentComplete = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" > <'+widgetTextTag+' id="'+pbWidgetTextId+'" style="'+textWidgetContentStyles+'"> '+textWidgetContentHTML+' </'+widgetTextTag+'> </div> '+'\n ';
                allResponsiveScripts = allResponsiveScripts + currTextWidgetResponsiveScripts;

                var thisWidgetFonts = '<link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+widgetTextFamily+'">';
              this_column_content = textWidgetContentComplete  + thisWidgetFonts;

              widgetStyling = ' ';
            break;
            case 'wigt-pb-embededVideo':
              var this_widget_widgetEmbedVideo = this_column_widgets_array_current['widgetEmbedVideo'];
              this_column_content = embededVideoRender(this_widget_widgetEmbedVideo);
              allResponsiveScripts = allResponsiveScripts + this_column_content['WidgetScript'];
              this_column_content = this_column_content['WidgetHtml'];
            break;
            case 'wigt-pb-popupClose':

              var this_widget_btn_close = this_column_widgets_array_current['widgetClosePopUp'];
              var closeBtnText = this_widget_btn_close['closeBtnText'];
              var closeBtnBgColor = this_widget_btn_close['closeBtnBgColor'];
              var closeBtnColor = this_widget_btn_close['closeBtnColor'];
              var closeBtnFontSize = this_widget_btn_close['closeBtnFontSize'];
              var closeBtnHoverBgColor = this_widget_btn_close['closeBtnHoverBgColor'];
              var closeBtnWidth = this_widget_btn_close['closeBtnWidth'];
              var closeBtnHeight = this_widget_btn_close['closeBtnHeight'];
              var closeBtnBlankAttr = this_widget_btn_close['closeBtnBlankAttr'];
              var closeBtnBorderColor = this_widget_btn_close['closeBtnBorderColor'];
              var closeBtnBorderWidth = this_widget_btn_close['closeBtnBorderWidth'];
              var closeBtnBorderRadius = this_widget_btn_close['closeBtnBorderRadius'];
              var closeBtnButtonAlignment = this_widget_btn_close['closeBtnButtonAlignment'];
              pbWidgetBtnId = 'pb_btn_'+Math.floor((Math.random() * 2000) + 100);

              closeBtnBold = ''; closeBtnItalic = ''; closeBtnUnderlined = '';
                  if (this_widget_btn_close['closeBtnBold'] == true) { closeBtnBold = 'bold'; }
                  if (this_widget_btn_close['closeBtnItalic'] == true) { closeBtnItalic = 'italic'; }
                  if (this_widget_btn_close['closeBtnUnderlined'] == true) { closeBtnUnderlined = 'underline'; }


              if (typeof(this_widget_btn_close['closeBtnButtonFontFamily']) != 'undefined') {
                var closeBtnButtonFontFamily = this_widget_btn_close['closeBtnButtonFontFamily'];
              } else{
                var closeBtnButtonFontFamily = 'none';
              }

              var closeBtn_width = "padding: "+closeBtnHeight+"px "+closeBtnWidth+"px !important;";
              if (typeof(this_widget_btn_close['closeBtnWidthPercent']) != 'undefined') {
                var closeBtnWidthPercent = this_widget_btn_close['closeBtnWidthPercent'];
                if (btnWidthPercent !== '') {
                  var closeBtn_width = "padding: "+closeBtnHeight+"px "+'5'+"px !important; width:"+closeBtnWidthPercent+"%;";
                }
                
              } else{
                var btnWidthPercent = 'none';
              }

              var closeBtnWidthUnit = '%';
              var closeBtnWidthUnitTablet = '%';
              var closeBtnWidthUnitMobile = '%';
              if (typeof(this_widget_btn_close['closeBtnWidthUnit']) != 'undefined') {
                closeBtnWidthUnit = this_widget_btn_close['closeBtnWidthUnit'];
                closeBtnWidthUnitTablet = this_widget_btn_close['closeBtnWidthUnitTablet'];
                closeBtnWidthUnitMobile = this_widget_btn_close['closeBtnWidthUnitMobile'];
              }

              var closeBtnTextEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' ></div>"; 

              closeBtnTextWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+closeBtnText+' </div>'+closeBtnTextEditingSaveTriggerBtn;

              var this_widget_btn_close_complete = "<div class='wdt-this_column_type' style='text-align:"+closeBtnButtonAlignment+";'> <button id='"+pbWidgetBtnId+"' style='color:"+closeBtnColor+" !important; font-weight:"+closeBtnBold+"; font-style:"+closeBtnItalic+"; text-decoration:"+closeBtnUnderlined+";  font-size:"+closeBtnFontSize+"px !important; background: "+closeBtnBgColor+" !important; background-color: "+closeBtnBgColor+" !important;  border: "+closeBtnBorderWidth+"px solid "+closeBtnBorderColor+" !important; border-radius: "+closeBtnBorderRadius+"px !important; font-family:"+closeBtnButtonFontFamily.replace(/\+/g, ' ')+" ,sans-serif; "+closeBtn_width+" ' disabled >"+closeBtnTextWrapped+"</button></div>";

                  var currButtonWidgetDefaultResponsive  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-l') ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+closeBtnFontSize+"px', 'width':'"+closeBtnWidthPercent+closeBtnWidthUnit+"', 'padding-top':'"+closeBtnHeight+"px', 'padding-bottom':'"+closeBtnHeight+"px', }); }"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      " if ( currentVPS == 'rbt-l' ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+closeBtnFontSize+"px', 'width':'"+closeBtnWidthPercent+closeBtnWidthUnit+"', 'padding-top':'"+closeBtnHeight+"px', 'padding-bottom':'"+closeBtnHeight+"px', });"+
                      
                      "}"+
                      " "+
                      '</script> ';

                  currButtonWidgetDefaultResponsiveTablet = '';
                  currButtonWidgetDefaultResponsiveMobile = '';
                  if (typeof(this_widget_btn_close['closeBtnFontSizeTablet']) !== 'undefined') {
                    var currButtonWidgetDefaultResponsiveTablet  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-m') ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn_close['closeBtnFontSizeTablet']+"px', 'width':'"+this_widget_btn_close['closeBtnWidthPercentTablet']+closeBtnWidthUnitTablet+"', 'padding-top':'"+this_widget_btn_close['closeBtnHeightTablet']+"px', 'padding-bottom':'"+this_widget_btn_close['closeBtnHeightTablet']+"px', }); }"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-m' ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn_close['closeBtnFontSizeTablet']+"px', 'width':'"+this_widget_btn_close['closeBtnWidthPercentTablet']+closeBtnWidthUnitTablet+"', 'padding-top':'"+this_widget_btn_close['closeBtnHeightTablet']+"px', 'padding-bottom':'"+this_widget_btn_close['closeBtnHeightTablet']+"px', }); "+
                      
                      "}"+
                      " "+
                      '</script> ';

                    var currButtonWidgetDefaultResponsiveMobile  = ''+
                      '<script>'+
                      "jQuery('.responsiveBtn').live('click',function(){"+
                      " if (jQuery(this).hasClass('rbt-s') ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn_close['closeBtnFontSizeMobile']+"px', 'width':'"+this_widget_btn_close['closeBtnWidthPercentMobile']+closeBtnWidthUnitMobile+"', 'padding-top':'"+this_widget_btn_close['closeBtnHeightMobile']+"px', 'padding-bottom':'"+this_widget_btn_close['closeBtnHeightMobile']+"px', }); }"+
                      
                      " });"+
                      "var currentVPS = jQuery('.currentViewPortSize').val();"+
                      "if ( currentVPS == 'rbt-s' ) { "+

                      "  jQuery('#"+pbWidgetBtnId+"').animate({'font-size':'"+this_widget_btn_close['closeBtnFontSizeMobile']+"px', 'width':'"+this_widget_btn_close['closeBtnWidthPercentMobile']+closeBtnWidthUnitMobile+"', 'padding-top':'"+this_widget_btn_close['closeBtnHeightMobile']+"px', 'padding-bottom':'"+this_widget_btn_close['closeBtnHeightMobile']+"px', });"+
                      
                      "}"+
                      " "+
                      '</script> ';

                  }

                  currButtonWidgetResponsiveScripts = '\n' + currButtonWidgetDefaultResponsive + '\n' + currButtonWidgetDefaultResponsiveTablet + '\n' + currButtonWidgetDefaultResponsiveMobile;
                  
                thisColFontsToLoad.push(closeBtnButtonFontFamily);

                this_widget_btn_close_complete = this_widget_btn_close_complete + "\n"+ currButtonWidgetResponsiveScripts;
              this_column_content = this_widget_btn_close_complete ;
            break;
            default:
              this_column_content = this_column_editor_content;
              contentAlign = 'none';
              break;
          }


          // Render widgets

          var widgetHandlesSameStyling  = 'width:25px; height:25px; float:left; padding:5px; display:none; cursor:pointer; z-index:99; position:absolute; text-align:center;';
          var widgetMoveHandle = "<div class='widgetMoveHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#494949; margin-left: 50px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+" '><span class='dashicons dashicons-move' style='color:#fff;' title='Move'></span></div>";
          
          var widgetDuplicateHandle = "<div class='widgetDuplicateHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#9DC45F; margin-left:85px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+"'><span class='dashicons dashicons-admin-page' style='color:#fff;' title='Duplicate Widget' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></span></div>";

          var widgetEditHandle = "<div class='widgetEditHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#9DC45F; margin-left:120px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+"' data-parentWidgetId='"+rowID+'-'+this_column+"' ><span class='dashicons dashicons-edit' style='color:#fff;' title='Edit Widget' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-parentWidgetId='"+rowID+'-'+this_column+"'  ></span></div>";

          var widgetDeleteHandle = "<div class='widgetDeleteHandle widgetHandle' style=' "+widgetHandlesSameStyling+" background:#e67e22; margin-left:155px;' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-overlay_id='widget-"+j+"'><span class='dashicons dashicons-trash' style='color:#fff;' title='Delete Widget' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></span></div>";

            displayWigetInline = 'block';
            if (typeof(this_column_widgets_array_current['widgetIsInline']) !== 'undefined'){
              if (this_column_widgets_array_current['widgetIsInline'] == 'true') {
                displayWigetInline = 'inline-block';
              }
            }

            widgetCustomClass = '';
            if (typeof(this_column_widgets_array_current['widgetCustomClass']) !== 'undefined'){
              var widgetCustomClass = this_column_widgets_array_current['widgetCustomClass'];
            }


          var this_widget_paddings = "padding:"+widgetPtop+"% "+widgetPright+"% "+widgetPbottom+"% "+widgetPleft+"%;";

          var this_widget_border_shadow = 'border: '+widgetBorderWidth+'px  '+widgetBorderStyle+' '+widgetBorderColor+'; border-radius:'+widgetBorderRadius+'px; box-shadow: '+widgetBoxShadowH+'px  '+widgetBoxShadowV+'px  '+widgetBoxShadowBlur+'px '+widgetBoxShadowColor+' ;  ';

          var widgBackgroundOptions = 'background:'+widgetBgColor+';';

          if (typeof(this_column_widgets_array_current['widgBgImg']) !== 'undefined') {
            thisWidgBgImg = this_column_widgets_array_current['widgBgImg'];
            if (thisWidgBgImg !== '') {
              widgBackgroundOptions = 'background: url('+thisWidgBgImg+') no-repeat center; background-size:cover;';
            }
          }

          if (typeof(this_column_widgets_array_current['widgBackgroundType']) !== 'undefined') {
            if (this_column_widgets_array_current['widgBackgroundType'] == 'gradient') {
              var widgGradient = this_column_widgets_array_current['widgGradient'];

              if (widgGradient['widgGradientType'] == 'linear') {
                widgBackgroundOptions = 'background: linear-gradient('+widgGradient['widgGradientAngle']+'deg, '+widgGradient['widgGradientColorFirst']+' '+widgGradient['widgGradientLocationFirst']+'%,'+widgGradient['widgGradientColorSecond']+' '+widgGradient['widgGradientLocationSecond']+'%);';
              }

              if (widgGradient['widgGradientType'] == 'radial') {
                widgBackgroundOptions = 'background: radial-gradient(at '+widgGradient['widgGradientPosition']+', '+widgGradient['widgGradientColorFirst']+' '+widgGradient['widgGradientLocationFirst']+'%,'+widgGradient['widgGradientColorSecond']+' '+widgGradient['widgGradientLocationSecond']+'%);';
              }
              
            }
          }

          var thisWidgHoverStyleTag = '';
          var thisWidgHoverOption = '';
          if (typeof(this_column_widgets_array_current['widgHoverOptions']) !== 'undefined') {
            var widgID = "widget_"+rowID+"_"+this_column+"_"+j;
            var widgHoverOptions = this_column_widgets_array_current['widgHoverOptions'];
            if (widgHoverOptions['widgBackgroundTypeHover'] == 'solid') {
              var thisWidgHoverOption = ' #'+widgID+':hover { background:'+widgHoverOptions['widgBgColorHover']+' !important; transition: all '+widgHoverOptions['widgHoverTransitionDuration']+'s; }';
            }
            if (widgHoverOptions['widgBackgroundTypeHover'] == 'gradient') {
              var widgGradientHover = widgHoverOptions['widgGradientHover'];

              if (widgGradientHover['widgGradientTypeHover'] == 'linear') {
                thisWidgHoverOption = ' #'+widgID+':hover { background: linear-gradient('+widgGradientHover['widgGradientAngleHover']+'deg, '+widgGradientHover['widgGradientColorFirstHover']+' '+widgGradientHover['widgGradientLocationFirstHover']+'%,'+widgGradientHover['widgGradientColorSecondHover']+' '+widgGradientHover['widgGradientLocationSecondHover']+'%) !important; transition: all '+widgHoverOptions['widgHoverTransitionDuration']+'s; }';
              }

              if (widgGradientHover['widgGradientTypeHover'] == 'radial') {

                thisWidgHoverOption = ' #'+widgID+':hover { background: radial-gradient(at '+widgGradientHover['widgGradientPositionHover']+', '+widgGradientHover['widgGradientColorFirstHover']+' '+widgGradientHover['widgGradientLocationFirstHover']+'%,'+widgGradientHover['widgGradientColorSecondHover']+' '+widgGradientHover['widgGradientLocationSecondHover']+'%) !important; transition: all '+widgHoverOptions['widgHoverTransitionDuration']+'s; }';
              }
            }

            widgetHoverAnimationScript = '';
            if (typeof(widgHoverOptions['widgetHoverAnimation']) !== 'undefined') {
              var widgetHoverAnimation = widgHoverOptions['widgetHoverAnimation'];
              if (widgetHoverAnimation != '') {
                widgetHoverAnimationScript = " <script>"
                +"jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').mouseenter(function(){"
                  +" jQuery(this).addClass('animated "+widgetHoverAnimation+"').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd',function(){ "
                      +"jQuery(this).removeClass('animated "+widgetHoverAnimation+"') "
                    +" }); "
                +"}); "
                +"</script> " ;
              }
            }
            thisWidgHoverStyleTag = '<style> '+thisWidgHoverOption+' </style> ' + widgetHoverAnimationScript;
          }


          var this_widget_styles = "'margin:"+widgetMtop+"% "+widgetMright+"% "+widgetMbottom+"% "+widgetMleft+"%; "+this_widget_paddings+" "+widgBackgroundOptions+"  "+this_widget_border_shadow+" display:"+displayWigetInline+";  "+widgetStyling+"'";

          var dragTriggerBtn = "<div class='widget-"+j+" draggableWidgets ' style='display:none' data-widg_row_id='"+rowID+"' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></div>";
          var draggedWidgDelTriggerBtn = "<div class='widget-"+j+" wdgt-dragRemove draggedRemove_"+rowID+"_"+this_column+"_widg_"+j+"' style='display:none'  data-widg_row_id='"+rowID+"' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' ></div>";

          var inlineEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' ></div>";


            if (j > 0) {
              var droppableAboveWidget = '';
            } else{
              var droppableAboveWidget = '<div class="droppableBelowWidget" style="width:100%;height:50px; display:none;" data-targetColId="'+rowID+'-'+this_column+'"  data-widgetIndex="'+j+'" ></div>';
            }
          

          var droppableBelowWidget = '<div class="droppableBelowWidget" style="width:100%;height:50px; display:none;" data-targetColId="'+rowID+'-'+this_column+'"  data-widgetIndex="'+(j+1)+'" ></div>';

          if (this_column_type == 'wigt-WYSIWYG') {
            thisWidgetID = "widget_"+rowID+"_"+this_column+"_"+j;
            
            this_column_content = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+this_column_content+' </div>';

          }

          var widgetIsInline = '';
          var widgetIsInlineTablet = '';
          var widgetIsInlineMobile = '';
          if (typeof(this_column_widgets_array_current['widgetIsInlineTablet']) !== 'undefined'){
            if (this_column_widgets_array_current['widgetIsInline'] == 'true') {
              widgetIsInline = 'inline-block';
              widgetIsInlineTablet = 'inline-block';
              widgetIsInlineMobile = 'inline-block';
            }
            if (this_column_widgets_array_current['widgetIsInlineTablet'] == 'true') {
              widgetIsInlineTablet = 'inline-block';
            }else if(this_column_widgets_array_current['widgetIsInlineTablet'] == 'false'){
              widgetIsInlineTablet = 'block';
            }
            if (this_column_widgets_array_current['widgetIsInlineMobile'] == 'true') {
              widgetIsInlineMobile = 'inline-block';
            }else if(this_column_widgets_array_current['widgetIsInlineMobile'] == 'false'){
              widgetIsInlineMobile = 'block';
            }
          }


          var widgHideOnDesktop ="'display':'"+displayWigetInline+"'", widgHideOnTablet = "'display':'"+displayWigetInline+"'", widgHideOnMobile = "'display':'"+displayWigetInline+"'";
          if (typeof(this_column_widgets_array_current['widgHideOnDesktop']) !== 'undefined' ) {
            if (this_column_widgets_array_current['widgHideOnDesktop'] == 'hide') {
              widgHideOnDesktop = "display:'none' ,";
            }

            if (this_column_widgets_array_current['widgHideOnTablet'] == 'hide') {
              widgHideOnTablet = "display:'none' ,";
            }
            if (this_column_widgets_array_current['widgHideOnMobile'] == 'hide') {
              widgHideOnMobile = "display:'none' ,";
            }
          }




          var currWidgetmarginDefault  = ''+
            '<script>'+
            "jQuery('.responsiveBtn').live('click',function(){"+
            " if (jQuery(this).hasClass('rbt-l') ) { "+
            "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin-top':'"+widgetMtop+"%', 'margin-bottom':'"+widgetMbottom+"%', 'margin-left':'"+widgetMleft+"%', 'margin-right':'"+widgetMright+"%', display:'"+widgetIsInline+"', "+widgHideOnDesktop+"});"+

            "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding-top':'"+widgetPtop+"%', 'padding-bottom':'"+widgetPbottom+"%', 'padding-left':'"+widgetPleft+"%', 'padding-right':'"+widgetPright+"%', });"+
            " }"+
            "});"+

            "var currentVPS = jQuery('.currentViewPortSize').val();"+
            "if ( currentVPS == 'rbt-l' ) { "+
            "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin-top':'"+widgetMtop+"%', 'margin-bottom':'"+widgetMbottom+"%', 'margin-left':'"+widgetMleft+"%', 'margin-right':'"+widgetMright+"%', display:'"+widgetIsInline+"',  "+widgHideOnDesktop+"});"+

            "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding-top':'"+widgetPtop+"%', 'padding-bottom':'"+widgetPbottom+"%', 'padding-left':'"+widgetPleft+"%', 'padding-right':'"+widgetPright+"%', });"+
            "}"+
            " "+
            '</script> ';


            currWidgetmarginTablet = '';
            var currWidgetmarginMobile = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-s') || jQuery(this).hasClass('rbt-m') ) { "+
              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin':'5px auto', });"+

              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding':'10px', });"+
              " }"+
              "});"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-s' || currentVPS == 'rbt-m' ) { "+
              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin':'0 auto', });"+

              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding':'10px', });"+
              "}"+
              " "+
              '</script> ';
          if (typeof(this_column_widgets_array_current['widgetMarginTablet']) !== 'undefined') {
            widgetPaddingTablet = this_column_widgets_array_current['widgetPaddingTablet'];
            widgetPaddingMobile = this_column_widgets_array_current['widgetPaddingMobile'];
            widgetMarginTablet = this_column_widgets_array_current['widgetMarginTablet'];
            widgetMarginMobile = this_column_widgets_array_current['widgetMarginMobile'];

            var currWidgetmarginTablet  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-m') ) { "+
              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin-top':'"+widgetMarginTablet['rMTT']+"%', 'margin-bottom':'"+widgetMarginTablet['rMBT']+"%', 'margin-left':'"+widgetMarginTablet['rMLT']+"%', 'margin-right':'"+widgetMarginTablet['rMRT']+"%', display:'"+widgetIsInlineTablet+"', "+widgHideOnTablet+"  });"+

              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding-top':'"+widgetPaddingTablet['rPTT']+"%', 'padding-bottom':'"+widgetPaddingTablet['rPBT']+"%', 'padding-left':'"+widgetPaddingTablet['rPLT']+"%', 'padding-right':'"+widgetPaddingTablet['rPRT']+"%', });"+
              " }"+
              "});"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-m' ) { "+
              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin-top':'"+widgetMarginTablet['rMTT']+"%', 'margin-bottom':'"+widgetMarginTablet['rMBT']+"%', 'margin-left':'"+widgetMarginTablet['rMLT']+"%', 'margin-right':'"+widgetMarginTablet['rMRT']+"%', display:'"+widgetIsInlineTablet+"', "+widgHideOnTablet+"  });"+

              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding-top':'"+widgetPaddingTablet['rPTT']+"%', 'padding-bottom':'"+widgetPaddingTablet['rPBT']+"%', 'padding-left':'"+widgetPaddingTablet['rPLT']+"%', 'padding-right':'"+widgetPaddingTablet['rPRT']+"%', });"+
              "}"+
              " "+
              '</script> ';

            var currWidgetmarginMobile  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){ "+
              " if (jQuery(this).hasClass('rbt-s') ) { "+
              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin-top':'"+widgetMarginMobile['rMTM']+"%', 'margin-bottom':'"+widgetMarginMobile['rMBM']+"%', 'margin-left':'"+widgetMarginMobile['rMLM']+"%', 'margin-right':'"+widgetMarginMobile['rMRM']+"%', display:'"+widgetIsInlineMobile+"', "+widgHideOnMobile+"  });"+

              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding-top':'"+widgetPaddingMobile['rPTM']+"%', 'padding-bottom':'"+widgetPaddingMobile['rPBM']+"%', 'padding-left':'"+widgetPaddingMobile['rPLM']+"%', 'padding-right':'"+widgetPaddingMobile['rPRM']+"%', });"+
              " }"+
              "});"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-s' ) { "+
              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'margin-top':'"+widgetMarginMobile['rMTM']+"%', 'margin-bottom':'"+widgetMarginMobile['rMBM']+"%', 'margin-left':'"+widgetMarginMobile['rMLM']+"%', 'margin-right':'"+widgetMarginMobile['rMRM']+"%', display:'"+widgetIsInlineMobile+"', "+widgHideOnMobile+" });"+

              "  jQuery('#widget_"+rowID+"_"+this_column+"_"+j+"').css({'padding-top':'"+widgetPaddingMobile['rPTM']+"%', 'padding-bottom':'"+widgetPaddingMobile['rPBM']+"%', 'padding-left':'"+widgetPaddingMobile['rPLM']+"%', 'padding-right':'"+widgetPaddingMobile['rPRM']+"%', });"+
              "}"+
              " "+
              '</script> ';
          }
          
         var  currWidgetResponsiveTriggerScripts = '\n' + currWidgetmarginDefault +'\n' + currWidgetmarginTablet +'\n' + currWidgetmarginMobile + '\n' + thisWidgHoverStyleTag;


          //Widget render container
          var thisRenderredWidgetHtml = "<div class='widget-"+j+" widget-Draggable   widgetType-"+this_column_type+ "  " + widgetCustomClass +"  "+widgetAnimation+"' style="+this_widget_styles+" data-wid_col_id='"+this_column+"' id='widget_"+rowID+"_"+this_column+"_"+j+"' data-widget_id='"+j+"' >"+widgetMoveHandle+" "+widgetDuplicateHandle+widgetEditHandle+widgetDeleteHandle+" "+droppableAboveWidget+" "+this_column_content+" "+droppableBelowWidget+"  "+dragTriggerBtn+ "  " + draggedWidgDelTriggerBtn+inlineEditingSaveTriggerBtn+  " <div id='thisRenderredWidgetScritps'></div> </div>";


          var thisRenderredWidgetScritps = currWidgetResponsiveTriggerScripts + allResponsiveScripts;

          var thisRenderredWidgetHtmlDefault = "<div class='widget-"+j+" widget-Draggable   widgetType-"+this_column_type+ "  " + widgetCustomClass +"  "+widgetAnimation+"' style="+this_widget_styles+" data-wid_col_id='"+this_column+"' id='widget_"+rowID+"_"+this_column+"_"+j+"' data-widget_id='"+j+"' >"+widgetMoveHandle+" "+widgetDuplicateHandle+widgetEditHandle+widgetDeleteHandle+" "+droppableAboveWidget+" "+this_column_content+" "+droppableBelowWidget+"  "+dragTriggerBtn+ "  " + draggedWidgDelTriggerBtn+inlineEditingSaveTriggerBtn+  " <div id='thisRenderredWidgetScritps'>"+thisRenderredWidgetScritps+"</div> </div>";
          /*
          var prevValATEW = $('.allTextEditableWidgetIds').val();
          if (this_column_type == 'wigt-WYSIWYG' || this_column_type == 'wigt-pb-text') {
            thisWidgetID = "widget_"+rowID+"_"+this_column+"_"+j;

            if (prevValATEW !== '') {
              prevValATEW == prevValATEW+',';
            }
            $('.allTextEditableWidgetIds').val(prevValATEW+thisWidgetID);

            $('.allTextEditableWidgetIds').trigger('change');
          }
          */

          $('#'+rowID+'-'+this_column + ' .widget-Draggable').mouseenter(function(ev){
            
            $(this).children('.widgetHandle').css('display','block');
          });
          $('#'+rowID+'-'+this_column + ' .widget-Draggable').mouseleave(function(){
            $('.widgetHandle').css('display','none');
          });

          var thisRenderredWidget = {
            WidgetHtml: thisRenderredWidgetHtml,
            WidgetScript: thisRenderredWidgetScritps,
            RenderredWidgetHtmlDefault: thisRenderredWidgetHtmlDefault,
          }

            return thisRenderredWidget;

}



