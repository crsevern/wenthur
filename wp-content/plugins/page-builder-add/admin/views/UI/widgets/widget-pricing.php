<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="tabs" style="width: 99%;">
  <ul class="tab-links">
    <li style="margin: 0;" class="active"><a href="#pricing_cf1" class="tab_link">Pricing Content</a></li>
    <li style="margin: 0;"><a href="#pricing_cf2" class="tab_link">Button</a></li>
    <li style="margin: 0;" ><a href="#pricing_cf3" class="tab_link">Style Options</a></li>
  </ul>
<div class="tab-content" style="box-shadow:none;">
	<div id="pricing_cf1" class="tab active" style="width: 99%;">
        <br>
        <br>
        <label> Header Text</label>
        <input type="text" class="pbPricingHeaderText" style="width: 200px;">
        <br><br><br><br><hr><br><br>
        <p>Pricing Content</p>
        <br>
          <?php 
          $settings = array('media_buttons'=> true,'pbPricingContent','tinymce' => true, 'editor_height' => 425);
          wp_editor(" ","pbPricingContent",$settings); ?>
	</div>
  <div id="pricing_cf2" class="tab" style="background: #fff; padding:20px 10px 20px 25px; width: 99%;">
        <div id="pricingbtn-gen" class="pbp_form">
          <label>Button Text :</label>
          <input type="text" class="pricingbtnText" style="width: 250px;" placeholder="Button Text">
          <br><br><br><br><hr><br>
          <label>Button Link :</label>
          <input type="URL" class="pricingbtnLink" placeholder="Link URL">
          <br><br><br><hr><br>
          <label>Open Link :</label>
          <select class="pricingbtnBlankAttr" id="pricingbtnBlankAttr">
            <option value="_self">Same Tab</option>
            <option value="_blank">New Tab</option>
          </select>
          <br><br><hr><br>
          <label>Set Height: </label>
          <input type="number" class="pricingbtnHeight">
          <br><br><hr><br>
          <label>Set width: </label>
          <input type="number" class="pricingbtnWidth">
          <br><br><hr><br>
          <label>Button Background Color :</label>
          <input type="text" class="color-picker_btn_two pricingbtnBgColor" id="pricingbtnBgColor" value='#333333'>
          <br><br><hr><br>
          <label>Button Hover Color :</label>
          <input type="text" class="color-picker_btn_two pricingbtnHoverBgColor" id="pricingbtnHoverBgColor" data-alpha='true' value='#333333'>
          <br><br><hr><br>
          <label>Button Text Color :</label>
          <input type="text" class="color-picker_btn_two pricingbtnTextColor" id="pricingbtnTextColor">
          <br><br><hr><br>
          <label>Button Font size : </label>
          <input type="number" class="pricingbtnFontSize">
          <br><br><hr><br>
          <label>Border Width: </label>
          <input type="number" class="pricingbtnBorderWidth">
          <br><br><hr><br>
          <label>Border Color: </label>
          <input type="text" class="color-picker_btn_two pricingbtnBorderColor" id="pricingbtnBorderColor" value='#ffffff'>
          <br><br><hr><br>
          <label>Border Radius: </label>
          <input type="number" class="pricingbtnBorderRadius" max="100" min="0">
          <br><br><hr><br>
          <label>Button Alignment :</label>
          <select class="pricingbtnButtonAlignment" id="pricingbtnButtonAlignment">
            <option value="default">Default</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="center">Center</option>
          </select>
          <br><br><hr><br><br>
        </div>
        <br>
        <br>
  </div>
	<div id="pricing_cf3" class="tab" style="background: #fff; padding:20px 10px 20px 25px; width: 99%;">
        <label>Header Text Color</label>
        <input type="text" class="color-picker_btn_two pbPricingHeaderTextColor" id="pbPricingHeaderTextColor" >
        <br><br><hr><br>
        <label>Header Background Color</label>
        <input type="text" class="color-picker_btn_two pbPricingHeaderBgColor" id="pbPricingHeaderBgColor" >
        <br><br><hr><br>
        <label> Header Text Size</label>
        <input type="number" class="pbPricingHeaderTextSize">
        <br><br><hr><br>
        <label> Container Border Width</label>
        <input type="number" class="pbPricingBorderWidth">
        <br><br><hr><br>
        <label> Container Border Color</label>
        <input type="text" class="color-picker_btn_two pbPricingBorderColor" id="pbPricingBorderColor" value=''>
        <br><br><hr><br>
        <label> Button Section Background Color</label>
        <input type="text" class="color-picker_btn_two pbPricingButtonSectionBgColor" id="pbPricingButtonSectionBgColor" value=''>
        <br><br><hr><br><br>

	</div>
</div>
</div>