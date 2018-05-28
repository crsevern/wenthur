<?php

class Sydney_Child_Facts extends WP_Widget
{

// constructor
  public function __construct()
  {
    $widget_ops = array('classname' => 'sydney_facts_widget', 'description' => __('Show your visitors some facts about your company.', 'sydney'));
    parent::__construct(false, $name = __('Sydney Child FP: Facts', 'sydney'), $widget_ops);
    $this->alt_option_name = 'sydney_child_facts_widget';
  }
	
	// widget form creation
  function form($instance)
  {

		// Check values
		$title = isset($instance['title']) ? esc_attr($instance['title']) : '';
    $fact_one_primary = isset($instance['fact_one_primary']) ? esc_attr($instance['fact_one_primary']) : '';
    $fact_one_secondary = isset($instance['fact_one_secondary']) ? esc_attr($instance['fact_one_secondary']) : '';
    $fact_one_max = isset($instance['fact_one_max']) ? esc_html($instance['fact_one_max']) : '';
    $fact_one_icon = isset($instance['fact_one_icon']) ? esc_html($instance['fact_one_icon']) : '';
		$fact_two_primary = isset($instance['fact_two_primary']) ? esc_attr($instance['fact_two_primary']) : '';
		$fact_two_secondary = isset($instance['fact_two_secondary']) ? esc_attr($instance['fact_two_secondary']) : '';
    $fact_two_max = isset($instance['fact_two_max']) ? esc_html($instance['fact_two_max']) : '';
    $fact_two_icon = isset($instance['fact_two_icon']) ? esc_html($instance['fact_two_icon']) : '';
		$fact_three_primary = isset($instance['fact_three_primary']) ? esc_attr($instance['fact_three_primary']) : '';
		$fact_three_secondary = isset($instance['fact_three_secondary']) ? esc_attr($instance['fact_three_secondary']) : '';
    $fact_three_max = isset($instance['fact_three_max']) ? esc_html($instance['fact_three_max']) : '';
    $fact_three_icon = isset($instance['fact_three_icon']) ? esc_html($instance['fact_three_icon']) : '';
    ?>
	<p>
	<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
	</p>

	<!-- fact one -->
	<p>
	<label for="<?php echo $this->get_field_id('fact_one_primary'); ?>"><?php _e('First fact primary text', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_one_primary'); ?>" name="<?php echo $this->get_field_name('fact_one_primary'); ?>" type="text" value="<?php echo $fact_one_primary; ?>" />
	</p>
	<p>
	<label for="<?php echo $this->get_field_id('fact_one_secondary'); ?>"><?php _e('First fact secondary text', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_one_secondary'); ?>" name="<?php echo $this->get_field_name('fact_one_secondary'); ?>" type="text" value="<?php echo $fact_one_secondary; ?>" />
	</p>

	<p>
	<label for="<?php echo $this->get_field_id('fact_one_max'); ?>"><?php _e('First fact value', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_one_max'); ?>" name="<?php echo $this->get_field_name('fact_one_max'); ?>" type="text" value="<?php echo $fact_one_max; ?>" />
	</p>

	<p>
	<label for="<?php echo $this->get_field_id('fact_one_icon'); ?>"><?php _e('First fact icon', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_one_icon'); ?>" name="<?php echo $this->get_field_name('fact_one_icon'); ?>" type="text" value="<?php echo $fact_one_icon; ?>" />
	</p>

	<!-- fact two -->
	<p>
	<label for="<?php echo $this->get_field_id('fact_two_primary'); ?>"><?php _e('Second fact primary text', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_two_primary'); ?>" name="<?php echo $this->get_field_name('fact_two_primary'); ?>" type="text" value="<?php echo $fact_two_primary; ?>" />
	</p>
	<p>
	<label for="<?php echo $this->get_field_id('fact_two_secondary'); ?>"><?php _e('Second fact secondary text', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_two_secondary'); ?>" name="<?php echo $this->get_field_name('fact_two_secondary'); ?>" type="text" value="<?php echo $fact_two_secondary; ?>" />
	</p>

	<p>
	<label for="<?php echo $this->get_field_id('fact_two_max'); ?>"><?php _e('Second fact value', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_two_max'); ?>" name="<?php echo $this->get_field_name('fact_two_max'); ?>" type="text" value="<?php echo $fact_two_max; ?>" />
	</p>

	<p>
	<label for="<?php echo $this->get_field_id('fact_two_icon'); ?>"><?php _e('Second fact icon', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_two_icon'); ?>" name="<?php echo $this->get_field_name('fact_two_icon'); ?>" type="text" value="<?php echo $fact_two_icon; ?>" />
	</p>	

	<!-- fact three -->
	<p>
	<label for="<?php echo $this->get_field_id('fact_three_primary'); ?>"><?php _e('Third fact primary text', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_three_primary'); ?>" name="<?php echo $this->get_field_name('fact_three_primary'); ?>" type="text" value="<?php echo $fact_three_primary; ?>" />
	</p>
	<p>
	<label for="<?php echo $this->get_field_id('fact_three_secondary'); ?>"><?php _e('Third fact secondary text', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_three_secondary'); ?>" name="<?php echo $this->get_field_name('fact_three_secondary'); ?>" type="text" value="<?php echo $fact_three_secondary; ?>" />
	</p>

	<p>
	<label for="<?php echo $this->get_field_id('fact_three_max'); ?>"><?php _e('Third fact value', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_three_max'); ?>" name="<?php echo $this->get_field_name('fact_three_max'); ?>" type="text" value="<?php echo $fact_three_max; ?>" />
	</p>

	<p>
	<label for="<?php echo $this->get_field_id('fact_three_icon'); ?>"><?php _e('Third fact icon', 'sydney'); ?></label>
	<input class="widefat" id="<?php echo $this->get_field_id('fact_three_icon'); ?>" name="<?php echo $this->get_field_name('fact_three_icon'); ?>" type="text" value="<?php echo $fact_three_icon; ?>" />
	</p>

	<?php

}

	// update widget
function update($new_instance, $old_instance)
{
  $instance = $old_instance;
  $instance['title'] = strip_tags($new_instance['title']);
  $instance['fact_one_primary'] = strip_tags($new_instance['fact_one_primary']);
  $instance['fact_one_secondary'] = strip_tags($new_instance['fact_one_secondary']);
  $instance['fact_one_max'] = strip_tags($new_instance['fact_one_max']);
  $instance['fact_one_icon'] = strip_tags($new_instance['fact_one_icon']);
	$instance['fact_two_primary'] = strip_tags($new_instance['fact_two_primary']);
	$instance['fact_two_secondary'] = strip_tags($new_instance['fact_two_secondary']);
  $instance['fact_two_max'] = strip_tags($new_instance['fact_two_max']);
  $instance['fact_two_icon'] = strip_tags($new_instance['fact_two_icon']);
	$instance['fact_three_primary'] = strip_tags($new_instance['fact_three_primary']);
	$instance['fact_three_secondary'] = strip_tags($new_instance['fact_three_secondary']);
  $instance['fact_three_max'] = strip_tags($new_instance['fact_three_max']);
  $instance['fact_three_icon'] = strip_tags($new_instance['fact_three_icon']);

  return $instance;
}
		
	// display widget
function widget($args, $instance)
{
  if (!isset($args['widget_id'])) {
    $args['widget_id'] = $this->id;
  }
  extract($args);

  $title = (!empty($instance['title'])) ? $instance['title'] : '';
  $title = apply_filters('widget_title', $title, $instance, $this->id_base);
  $fact_one_primary = isset($instance['fact_one_primary']) ? esc_attr($instance['fact_one_primary']) : '';
  $fact_one_secondary = isset($instance['fact_one_secondary']) ? esc_attr($instance['fact_one_secondary']) : '';
  $fact_one_max = isset($instance['fact_one_max']) ? esc_html($instance['fact_one_max']) : '';
  $fact_one_icon = isset($instance['fact_one_icon']) ? esc_html($instance['fact_one_icon']) : '';
	$fact_two_primary = isset($instance['fact_two_primary']) ? esc_attr($instance['fact_two_primary']) : '';
	$fact_two_secondary = isset($instance['fact_two_secondary']) ? esc_attr($instance['fact_two_secondary']) : '';
  $fact_two_max = isset($instance['fact_two_max']) ? esc_html($instance['fact_two_max']) : '';
  $fact_two_icon = isset($instance['fact_two_icon']) ? esc_html($instance['fact_two_icon']) : '';
	$fact_three_primary = isset($instance['fact_three_primary']) ? esc_attr($instance['fact_three_primary']) : '';
	$fact_three_secondary = isset($instance['fact_three_secondary']) ? esc_attr($instance['fact_three_secondary']) : '';
  $fact_three_max = isset($instance['fact_three_max']) ? esc_html($instance['fact_three_max']) : '';
  $fact_three_icon = isset($instance['fact_three_icon']) ? esc_html($instance['fact_three_icon']) : '';

  echo $args['before_widget'];
  ?>

		<?php if ($title) echo $before_title . $title . $after_title; ?>

		<?php if ($fact_one_primary != '') : ?>
		<div class="col-md-4 col-sm-12">
			<div class="roll-counter">
				<img class="fact-icon" src="<?php echo $fact_one_icon; ?>">
				<div class="fact-text">
					<div class="numb-count" data-from="0" data-to="<?php echo $fact_one_max; ?>" data-speed="2000" data-waypoint-active="yes"><?php echo $fact_one_max; ?></div>
					<div class="fact-name">
						<div class="primary-name"><?php echo $fact_one_primary; ?></div>
						<div class="secondary-name"><?php echo $fact_one_secondary; ?></div>
					</div>
				</div>
			</div>
		</div>
		<?php endif; ?>
		<?php if ($fact_two_primary != '') : ?>
		<div class="col-md-4 col-sm-12">
			<div class="roll-counter">
				<img class="fact-icon" src="<?php echo $fact_two_icon; ?>">
				<div class="fact-text">
					<div class="numb-count" data-from="0" data-to="<?php echo $fact_two_max; ?>" data-speed="2000" data-waypoint-active="yes"><?php echo $fact_two_max; ?></div>
					<div class="fact-name">
						<div class="primary-name"><?php echo $fact_two_primary; ?></div>
						<div class="secondary-name"><?php echo $fact_two_secondary; ?></div>
					</div>
				</div>
			</div>
		</div>
		<?php endif; ?>
		<?php if ($fact_three_primary != '') : ?>
		<div class="col-md-4 col-sm-12">
			<div class="roll-counter">
				<img class="fact-icon" src="<?php echo $fact_three_icon; ?>">
				<div class="fact-text">
					<div class="numb-count" data-from="0" data-to="<?php echo $fact_three_max; ?>" data-speed="2000" data-waypoint-active="yes"><?php echo $fact_three_max; ?></div>
					<div class="fact-name">
						<div class="primary-name"><?php echo $fact_three_primary; ?></div>
						<div class="secondary-name"><?php echo $fact_three_secondary; ?></div>
					</div>
				</div>
  		</div>
		</div>
		<?php endif; ?>

	<?php
echo $args['after_widget'];

}

}