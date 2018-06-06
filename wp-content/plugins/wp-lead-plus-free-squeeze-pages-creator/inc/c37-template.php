<?php
/**
 * Template Name: WP Lead Plus X Template
 * @package WP Lead Plus X
 */
	$pageID       = get_the_ID();
	$pageSettings = json_decode(get_post_meta($pageID, C37LPManager::C37_LP_META_PAGE_SETTINGS, true));
    $codes = $pageSettings->modelsJSON->page->codes;
    $pageCSSObject = $pageSettings->modelsJSON->page->cssStyle;
    $pageJSON = $pageSettings->modelsJSON->page;

?>

<!DOCTYPE html>
<html>
	<head>
        <?php wp_head(); ?>

		<meta charset="UTF-8">
		<?php
		if (isset($codes->experimentCode))
		{
			echo rawurldecode($codes->experimentCode);
		}


		if (isset($pageSettings->webFonts))
		{
			foreach($pageSettings->webFonts as $font)
			{
				echo rawurldecode($font);
			}
		}
		?>

		<title><?php echo get_the_title(); ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- include the css rules here-->
		<style>
			html, body {
				padding: 0 !important;
				margin: 0 !important;
                background-color: transparent !important;
                min-height: 100% !important;
                height: 100%;
			}

            #wpadminbar{
                display: none;
            }

            .c37-page-container {
                margin: 0;
                padding: 0;
                min-height: 100%;
                overflow: auto;
            }

		</style>

        <!--   style for page     -->

		<style>

			<?php
				if (isset($codes->customCSSCode))
				echo rawurldecode($codes->customCSSCode);
			 ?>
		</style>


<!--	Tracking code	-->
		<?php
		if (isset($pageSettings->modelsJSON->page->codes->trackingCode))
		{
			echo rawurldecode($pageSettings->modelsJSON->page->codes->trackingCode);
		}
		?>

		<?php
		if (get_post_type() == 'core37_lp' || get_post_type() == 'core37_lp_template')
		{
			echo '<meta name="robots" content="noindex, nofollow" />';
		}
		 ?>
		<?php
            //print page settings in JSON here
//			echo C37LPManager::getPageSettingsJSON($pageID);
		?>

        <?php
        //print meta codes here(meta desc, meta title og:... meta tags)
        if (isset($codes->metaCode))
            echo rawurldecode($codes->metaCode);
        ?>


	</head>

	<body data-page-id="<?php echo $pageID; ?>">
    <div class="c37-page-container" id="page-<?php echo $pageSettings->modelsJSON->page->cssID; ?>">
	<?php
	if (isset($codes->afterBodyOpening))
	{
		echo rawurldecode($codes->afterBodyOpening);
	}

//		$post = get_post($pageID);
//		echo do_shortcode(rawurldecode($post->post_content));
    echo do_shortcode(C37LPManager::getPageHTML($pageID));
	?>
<!--	Popup, if any -->
	<?php echo  C37LPManager::getPopupByElementsActions($pageID); ?>

	<script>
		<?php echo 'var ajaxurl = "' . admin_url('admin-ajax.php') . '";'; ?>
	</script>

	<script>
		<?php
            echo "var elementsActions = elementsActions || {};  elementsActions['". $pageJSON->cssID ."'] = ". json_encode((($pageSettings->elementsActions)));
            ?>
	</script>

	<?php
	if (isset($codes->beforeBodyClosing))
	{
		echo rawurldecode($codes->beforeBodyClosing);
	}
	?>
	<script>
		jQuery(function(){


			<?php


			if ( isset($pageSettings->simpleCountdown) && is_object($pageSettings->simpleCountdown))
			{

//				echo "(function(_){ ";
				echo "var countdown = " . json_encode($pageSettings->simpleCountdown) . ";";
                echo "console.log('countdown', countdown);";
				echo "_.each(countdown, function(v, k, o){
                console.log('starting countdoing');
				var clock = o[k];

				var second = 1000,
	            minute = second * 60,
	            hour = minute * 60,
	            day = hour * 24;

                var distance = 0;

				var element = jQuery('#' + clock['editingElementID']);
				console.log(element);
				var days = jQuery(element).find('.simple-countdown-days .cd-number').first();
				var hours = jQuery(element).find('.simple-countdown-hours .cd-number').first();
				var minutes = jQuery(element).find('.simple-countdown-minutes .cd-number').first();
				var seconds = jQuery(element).find('.simple-countdown-seconds .cd-number').first();

				var futureDate;
		        if (clock['type'] == 'countAmount')
		        {
		            distance = (parseInt(clock['days']) * 3600 * 24 +
				                parseInt(clock['hours']) * 3600+
				                parseInt(clock['minutes']) * 60 +
				                parseInt(clock['seconds'])) * 1000;
		        } else
		        {
		            distance = new Date(clock['date']) - new Date().getTime();
		        }

		        var interval = setInterval(function() {
					   distance -= 1000;

		               if (distance >=0)
		               {
							days.html(Math.floor(distance / (day)) < 10 ? \"0\" + Math.floor(distance / (day)) : Math.floor(distance / (day)));
		                   hours.html(Math.floor((distance % (day)) / (hour)) < 10 ? \"0\" + Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour)));
		                   minutes.html(Math.floor((distance % (hour)) / (minute)) < 10 ? \"0\" + Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute)) );
		                   seconds.html(Math.floor((distance % (minute)) / second) < 10 ? \"0\" + Math.floor((distance % (minute)) / second) : Math.floor((distance % (minute)) / second));

		                } else {
		                clearInterval(interval);
		                     if (clock['action'] == 'open-url')
		                     {
		                          window.open(clock['actionValue']);
		                     } else if (clock['action'] == 'exec-code')
		                     {
		                        eval(decodeURIComponent(clock['actionValue']));
		                     }


		                }
		                


		            }, second);

				})";


//				echo " })(_)";

			}


			?>

		});

	</script>
    </div>
    <?php wp_footer() ?>
	</body>

</html>