<?php

/**
 * Services widget
 *
 * @package Sydney
 */

class Sydney_Child_Services extends WP_Widget
{

	public function __construct()
	{
		$widget_ops = array('classname' => 'sydney_services_widget', 'description' => __('Show what services you are able to provide.', 'sydney'));
		parent::__construct(false, $name = __('Sydney Child FP: Services', 'sydney'), $widget_ops);
		$this->alt_option_name = 'sydney_child_services_widget';
	}

	function form($instance)
	{
		$title = isset($instance['title']) ? esc_attr($instance['title']) : '';
		$number = isset($instance['number']) ? intval($instance['number']) : -1;
		$category = isset($instance['category']) ? esc_attr($instance['category']) : '';
		$see_all = isset($instance['see_all']) ? esc_url_raw($instance['see_all']) : '';
		$see_all_text = isset($instance['see_all_text']) ? esc_html($instance['see_all_text']) : '';
		$content_excerpt = isset($instance['content_excerpt']) ? esc_attr($instance['content_excerpt']) : '';
		?>

		<p><?php _e('In order to display this widget, you must first add some services from your admin area.', 'sydney'); ?></p>
		<p>
		<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title', 'sydney'); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
		</p>
		<p><label for="<?php echo $this->get_field_id('number'); ?>"><?php _e('Number of services to show (-1 shows all of them):', 'sydney'); ?></label>
		<input id="<?php echo $this->get_field_id('number'); ?>" name="<?php echo $this->get_field_name('number'); ?>" type="text" value="<?php echo $number; ?>" size="3" /></p>
			<p><label for="<?php echo $this->get_field_id('see_all'); ?>"><?php _e('The URL for your button [In case you want a button below your services block]', 'sydney'); ?></label>
		<input class="widefat custom_media_url" id="<?php echo $this->get_field_id('see_all'); ?>" name="<?php echo $this->get_field_name('see_all'); ?>" type="text" value="<?php echo $see_all; ?>" size="3" /></p>	
			<p><label for="<?php echo $this->get_field_id('see_all_text'); ?>"><?php _e('The text for the button [Defaults to <em>See all our services</em> if left empty]', 'sydney'); ?></label>
		<input class="widefat custom_media_url" id="<?php echo $this->get_field_id('see_all_text'); ?>" name="<?php echo $this->get_field_name('see_all_text'); ?>" type="text" value="<?php echo $see_all_text; ?>" size="3" /></p>
		<p><label for="<?php echo $this->get_field_id('category'); ?>"><?php _e('Enter the slug for your category or leave empty to show all services.', 'sydney'); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('category'); ?>" name="<?php echo $this->get_field_name('category'); ?>" type="text" value="<?php echo $category; ?>" size="3" /></p>
		<p><label for="<?php echo $this->get_field_id('content_excerpt'); ?>"><?php _e('Content to display:', 'sydney'); ?></label>
        <select name="<?php echo $this->get_field_name('content_excerpt'); ?>" id="<?php echo $this->get_field_id('content_excerpt'); ?>">		
			<option value="fullcontent" <?php if ('fullcontent' == $content_excerpt) echo 'selected="selected"'; ?>><?php echo __('Full content', 'sydney'); ?></option>
			<option value="excerpt" <?php if ('excerpt' == $content_excerpt) echo 'selected="selected"'; ?>><?php echo __('Excerpt', 'sydney'); ?></option>
       	</select>
    </p>   	
	<?php
	}

	function update($new_instance, $old_instance)
	{
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		$instance['number'] = strip_tags($new_instance['number']);
		$instance['see_all'] = esc_url_raw($new_instance['see_all']);
		$instance['see_all_text'] = strip_tags($new_instance['see_all_text']);
		$instance['category'] = strip_tags($new_instance['category']);
		$instance['content_excerpt'] = sanitize_text_field($new_instance['content_excerpt']);

		return $instance;
	}

	function widget($args, $instance)
	{
		if (!isset($args['widget_id'])) {
			$args['widget_id'] = $this->id;
		}
		extract($args);

		$title = (!empty($instance['title'])) ? $instance['title'] : '';
		$title = apply_filters('widget_title', $title, $instance, $this->id_base);
		$see_all = isset($instance['see_all']) ? esc_url($instance['see_all']) : '';
		$see_all_text = isset($instance['see_all_text']) ? esc_html($instance['see_all_text']) : '';
		$number = (!empty($instance['number'])) ? intval($instance['number']) : -1;
		if (!$number)
			$number = -1;
		$category = isset($instance['category']) ? esc_attr($instance['category']) : '';
		$content_excerpt = isset($instance['content_excerpt']) ? esc_html($instance['content_excerpt']) : 'fullcontent';

		$services = new WP_Query(array(
			'no_found_rows' => true,
			'post_status' => 'publish',
			'post_type' => 'services',
			'posts_per_page' => $number,
			'category_name' => $category
		));

		echo $args['before_widget'];

		if ($services->have_posts()) :
			?>
			<?php if ($title) echo $before_title . $title . $after_title; ?>

			<div class="services-container" data-services-effect="fadeInUp">
			<?php $index = 0; ?>
			<?php while ($services->have_posts()) : $services->the_post(); ?>
				<?php //Get the custom field values
					$index++;
					$content = get_post_field('post_content', get_the_ID());
				?>
				<div class="service fullwidth">
					<div class="service-item item">
						<a href="<?php echo the_permalink(get_the_ID()) ?>">
							<div class="service-pop-bg"></div>
							<div class="service-pop-wrap">
								<?php if (($index % 2) == 1) { ?>
									<div class="service-pop">
										<div class="service-title"><?php echo get_the_title(get_the_ID()); ?></div>
										<div class="service-content"><?php echo $content ?></div>
									</div>
									<div class="service-pop-edge"></div>
								<?php } else { ?>
									<div class="service-pop-edge"></div>
									<div class="service-pop">
										<div class="service-title"><?php echo get_the_title(get_the_ID()); ?></div>
										<div class="service-content"><?php echo $content ?></div>
									</div>
								<?php } ?>
							</div>
						</a>
						<div class="service-thumbnail" style="background-image: url(<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>)"></div>
					</div>
				</div>
			<?php endwhile; ?>
			</div>
	
			<?php if ($see_all != '') : ?>
				<a href="<?php echo esc_url($see_all); ?>" class="roll-button more-button">
					<?php if ($see_all_text) : ?>
						<?php echo $see_all_text; ?>
					<?php else : ?>
						<?php echo __('See all our services', 'sydney'); ?>
					<?php endif; ?>
				</a>
			<?php endif; ?>				
		<?php
		wp_reset_postdata();
		endif;
		echo $args['after_widget'];
	}

}