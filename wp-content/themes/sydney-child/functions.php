<?php
/**
 * Sydney child functions
 *
 */


/**
 * Enqueues the parent stylesheet. Do not remove this function.
 *
 */
function sydney_child_enqueue() {
    
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}
add_action('wp_enqueue_scripts', 'sydney_child_enqueue');

/* CUSTOM FUNCTIONS */

function sydney_child_widgets_init()
{
    if (defined('SITEORIGIN_PANELS_VERSION')) {
        register_widget('Sydney_Child_Facts');
        register_widget('Sydney_Child_Portfolio');
        register_widget('Sydney_Child_Portfolio_With_Details');
        register_widget('Sydney_Child_Employees');
        register_widget('Sydney_Child_Services');
        register_widget('Sydney_Child_Services_With_Details');
    }
}
add_action('widgets_init', 'sydney_child_widgets_init');

/**
 * Load the front page widgets.
 */
if (defined('SITEORIGIN_PANELS_VERSION')) {
    require get_stylesheet_directory() . "/widgets/fp-child-facts.php";
    require get_stylesheet_directory() . "/widgets/fp-child-portfolio.php";
    require get_stylesheet_directory() . "/widgets/fp-child-portfolio-with-details.php";
    require get_stylesheet_directory() . "/widgets/fp-child-employees.php";
    require get_stylesheet_directory() . "/widgets/fp-child-services.php";
    require get_stylesheet_directory() . "/widgets/fp-child-services-with-details.php";
}