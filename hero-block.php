<?php

/**
 * Plugin Name: Hero Block
 * Description: A custom Gutenberg block for the hero section.
 * Version: 1.0.0
 * Author: Daniel Morales
 * Author URI: https://danielmb.com
 */

function hero_block_register_block()
{
    wp_register_script("hero-block-editor", plugin_dir_url(__FILE__) . "build/index.js", array("wp-blocks", "wp-editor", "wp-components"));
    register_block_type("hero-block/hero-block", array(
        'editor_script' => 'hero-block-editor',
        'editor_style' => 'hero-block-editor',
        'style' => 'hero-block',
    ));
}
add_action('init', 'hero_block_register_block');
