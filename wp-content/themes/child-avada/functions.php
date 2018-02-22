<?php
/**
** activation theme
**/
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

/*add_filter( 'woocommerce_loop_add_to_cart_link', 'change_add_to_cart_loop' );

function change_add_to_cart_loop( $product ) {
    global $product; // this may not be necessary as it should have pulled the object in already

    return '<a href="' . esc_url( $product->get_permalink( $product->id ) ) . '">Détails</a>';
}*/

