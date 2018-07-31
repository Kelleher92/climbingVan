<?php
	include_once dirname(dirname(__file__)).'/sys/core/init.inc.php';

	if($_POST['token'] === $_SESSION['token']) {

		$action = $_POST['action'];

		if($action === 'recordEmail') {
			$data = json_decode($_POST['data']);
			$admin = new Admin();
			$res = $admin->recordEmail($data->email);
			echo json_encode($res);
		} 

		else {
			throw new Exception('Invalid request');
		}
	
  	} else {
  		throw new Exception('Invalid token');
  	}
?>