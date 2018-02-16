<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'woo');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|fdKqyMkK4z@0):nV)D;bKa>4:yd^o|MgI2aGo-Q`&<$uwcvYHBQC,Qi4kw$U9#o');
define('SECURE_AUTH_KEY',  'mgia@4OTT:.9;rQPMl3s6/n~Wn3_82y~((DxH[4v>Wc~Z|~AJ27tW28JEGW<OdTl');
define('LOGGED_IN_KEY',    '},k2hK/M[9c c9`b@F8eILi.w#/^)Mk</f]7m{ULv;Do!hUTXf-wI-N:@z{+)sPV');
define('NONCE_KEY',        '],y7A~D0;: ;;%V,@wJi,_m 3MwwjJp(l52h*`a8_>;OC5w42_2Y2)*&FLMO9(@m');
define('AUTH_SALT',        '>AlMD@*6e J.5,h&OXpBK-,@6u_bN#Qm$s5yiB%iV_,HI}!}jfyZOn;T2M=:&!*h');
define('SECURE_AUTH_SALT', 'T92pLV`)c*Z8o;ZD~R;bj>L_k%#j@bXgvDIA*hdv|~)N?O]:hTDAN(*@VeJh+xb4');
define('LOGGED_IN_SALT',   'vc]fqmnBchk-lhHl!o}{Y?~d5soAt`dhJ,KZ9&dNZ#[X1T?3mXzWU/!y)]vcl0&M');
define('NONCE_SALT',       'y}2XmN|C*,%tR]:{KCaG3YHX)&]T@t3DK%[n9)q+rtB?W_FrX^!9D^@MTu.xKX5^');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');