<?php
	$DB_ACCESS = array();

	/**
	 * server name
	 */
	// $DB_ACCESS['DB_HOST'] = 'localhost';
	$DB_ACCESS['DB_HOST'] = getenv('DB_HOST');
	
	/**
	 * username
	 */
	// $DB_ACCESS['DB_USER'] = 'root';
	$DB_ACCESS['DB_USER'] = getenv('DB_USER');

	/**
	 * password
	 */
	// $DB_ACCESS['DB_PASS'] = '';
	$DB_ACCESS['DB_PASS'] = getenv('DB_PASS');

	/**
	 * database name
	 */
	// $DB_ACCESS['DB_NAME'] = 'climbingVan';
	$DB_ACCESS['DB_NAME'] = getenv('DB_NAME');

?>
