<?php

/*
Plugin Name: Zero
Plugin URI: https://www.julienledoux.fr
Description: Tuto OpenClassRoom sur la création de plugin
Version: 0.1
Author: Julien Ledoux
Author URI: https://www.julienledoux.fr
License: JulienCorp
*/


 
/* Modifie le title en objet */


/*add_filter('pre_get_document_title', 'change_the_title');

function change_the_title() {
    return 'Plugin Titre';
}*/


/** 
 * Register new status
 * Tutorial: http://www.sellwithwp.com/woocommerce-custom-order-status-2/
**/
function register_awaiting_shipment_order_status() {
    register_post_status( 'wc-awaiting-shipment', array(
        'label'                     => 'Awaiting shipment',
        'public'                    => true,
        'exclude_from_search'       => false,
        'show_in_admin_all_list'    => true,
        'show_in_admin_status_list' => true,
        'label_count'               => _n_noop( 'Awaiting shipment <span class="count">(%s)</span>', 'Awaiting shipment <span class="count">(%s)</span>' )
    ) );
}
add_action( 'init', 'register_awaiting_shipment_order_status' );

// Add to list of WC Order statuses
function add_awaiting_shipment_to_order_statuses( $order_statuses ) {

    $new_order_statuses = array();

    // add new order status after processing
    foreach ( $order_statuses as $key => $status ) {

        $new_order_statuses[ $key ] = $status;

        if ( 'wc-processing' === $key ) {
            $new_order_statuses['wc-awaiting-shipment'] = 'Awaiting shipment';
        }
    }

    return $new_order_statuses;
}
add_filter( 'wc_order_statuses', 'add_awaiting_shipment_to_order_statuses' );