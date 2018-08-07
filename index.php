<?php
	include_once './sys/core/init.inc.php';
?>

<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="theme-color" content="#1d263b">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no">
	    <title>ClimbingVan</title>
	    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
		<link rel="stylesheet" href="./public/css/lib/bootstrap.min.css">  
		<link rel="stylesheet" href="./public/css/global/global.css"> 
		<link rel="icon" href="public/images/logo.png">
	</head>

	<body>
		<section id="root"></section>
		
		<input id="session-token" type="hidden" value="<?php echo $_SESSION['token']; ?>"/>

		<script src="./public/js/home.js"></script>
	</body>
</html>