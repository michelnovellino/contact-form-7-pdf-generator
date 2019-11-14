<?php
/**
* Plugin Name: Contact Form Pdf Generator
* Plugin URI: http://michelnovellino.com
* Description: generador de pdf a partir de formulario
* Version: 1.0
* Author: Michel Novellino
* Author URI: http://michelnovellino.com
**/
    
add_action('wp_enqueue_scripts', 'qg_enqueue');
function qg_enqueue() {
        wp_enqueue_script(
        'pdfmakecdn',
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.60/pdfmake.min.js'
    );
            wp_enqueue_script(
        'pdfmakefonts',
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.60/vfs_fonts.js'
    );
               wp_enqueue_script(
        'momentjs',
        'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js'
    );
    wp_enqueue_script(
        'qgjs',
        plugin_dir_url(__FILE__).'js/script.js'
    );
}