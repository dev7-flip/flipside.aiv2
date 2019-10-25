<?php
define('WP_CACHE', true);
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fdcci3_react' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '123456' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'M,QxIbZ&@%/&.sd&cT@y3sl%BwS4I?@lZqXJT|e|6q(c8a.u#o`R.TJc^mU/!o$9' );
define( 'SECURE_AUTH_KEY',  'ouARz#E2cr mw7nwQ]T<xp%&A*l`@~U)`WY}4oDe5|OdGkG 4<0y}XK>Wr4^5|x0' );
define( 'LOGGED_IN_KEY',    ',+&AIKPK/~mG)Hy%G+IK /qkS=X.qpG@OON3,k]nZ&@CE~HlcV-XwC.^`rX.PNKX' );
define( 'NONCE_KEY',        'M<zv&!#Mg5s}`WoUV|xK[KlX;o:}!mi^C^|AHYI)<;WBg<ut>Ht_mO3x`;77skdm' );
define( 'AUTH_SALT',        '.Ejt](w!!oQaWP[Ll$b+&e<YZ|X=F?7K]/KC!~xA=f*R6`2|oQ:?b@x8Eh^fpoaj' );
define( 'SECURE_AUTH_SALT', 'E|4;v2?|(iDJDvV*S;f]T82N({=F{,YvCM&Pmk 5`^6H4ApUbT%86]+:~J$a-t+U' );
define( 'LOGGED_IN_SALT',   'Ly</c2Tf(x]<TVG ?WI+G:[?N~_DbQ%U(Qy#UR{qBoGKM:qFL}(P[ZtR`Zeop$&c' );
define( 'NONCE_SALT',       'HXv<~NM[6eeI#|0tw7<&joCL^*jrA)9^AhRN@lW]g)?vo?mayWY;Q:B}EtG$V/Lo' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
