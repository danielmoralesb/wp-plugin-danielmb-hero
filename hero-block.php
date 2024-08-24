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
    // Register the editor style
    // wp_register_style("hero-block-editor", plugin_dir_url(__FILE__) . "css/editor.css", array(), filemtime(plugin_dir_path(__FILE__) . 'css/editor.css'));

    // Register the front-end style
    wp_register_style("hero-block", plugin_dir_url(__FILE__) . "css/style.css", array(), filemtime(plugin_dir_path(__FILE__) . 'css/style.css'));

    // Register the editor script
    wp_register_script("hero-block-editor", plugin_dir_url(__FILE__) . "build/index.js", array("wp-blocks", "wp-editor", "wp-components"));

    // Register the block type and associate the scripts and styles
    register_block_type("hero-block/hero-block", array(
        'editor_script' => 'hero-block-editor',
        'editor_style' => 'hero-block-editor',
        'style' => 'hero-block',
    ));
}
add_action('init', 'hero_block_register_block');
