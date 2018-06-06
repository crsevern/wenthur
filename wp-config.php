<?php
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
define('DB_NAME', 'wenthur');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'nK(7c|[$jE!~3`5ey:rqklk=3K7?qvbw`KEROl7MLvHWGknd9ubj8SBOd Li+RD=');
define('SECURE_AUTH_KEY',  '5-NTvzj4* =q(X{pNr1YzYLz1v]~1y>sgo34UlFrCuiBC&:|ZW];qpk;f*tdKAv.');
define('LOGGED_IN_KEY',    'S/&sDspeBr*l]9`#.%#F$2ayiR)%c4Z$qx}AQ+)nWXiwa7m!ex[jk(5.F5zJDWl+');
define('NONCE_KEY',        'S7Jc5EzL&E~fH>7l7nt7|XC9:4f{>{82kftn>g16 U7zbAXle~0o`%~`XWp+.HX:');
define('AUTH_SALT',        '`PD;hP>z>XH;8nW(`GXhw#$wy2yAAJSts5eTZLNl0Ex1%d81r!iLT+SH[.XshC&T');
define('SECURE_AUTH_SALT', 'D*>|R>Qy{<}cYQ#)H?[.uD.u=t0PH|y|7*pa3Mdo7C^*=H5u[xb5A8r2S<NEnV_w');
define('LOGGED_IN_SALT',   'w(5d=e5CE%P|W%g?626Nea_,1:bK$YG6|~oR~f;0g0)s~@!VOXF<,UF8%wCEf!c1');
define('NONCE_SALT',       'mMN!;0;Cf1`Drh}1Un]mYWCbuHb8wGwfrP+_6v;aj=obC.*A>>z4d*x6YB8v>A{P');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

@ini_set( 'upload_max_size' , '20M' );
@ini_set( 'post_max_size', '13M');
@ini_set( 'memory_limit', '15M' );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
