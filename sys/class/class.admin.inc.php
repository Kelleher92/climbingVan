<?php
	class Admin extends DB_Connect{
		private $_saltLength = 7;

		public function __construct($db = NULL, $saltLength = NULL) {
			parent::__construct($db);
			$this->ROOT = $_SERVER['SERVER_NAME'];
			if(is_int($saltLength)) {
				$this->_saltLength = $saltLength;
			}
		}

		public function recordEmail($email) {
			if($_POST['action'] != 'recordEmail') {
				return "Invalid action supplied for recordEmail.";
			}

			$email = $this->sanitizeValue($email);
			
			$res = new Response_Obj();
		
			if($this->isUniqueForSubscribers('email', $email)) {
				$query ="INSERT INTO subscribers". "(email, time) ";
				$values = "values ('$email', now())";

				try {
				    $this->getDb()->beginTransaction();
				    $this->getDb()->exec($query . $values);		
				    $this->getDb()->commit();

				    $mh = new Mailer();
				    $mh->sendVerificationEmail($email);

				    $res->responseCode = 200;
				    $res->message = "Subscription was successful. Check your inbox!";
			    }
				catch(PDOException $e) {
				    $this->getDb()->rollback();
				    $res->responseCode = 400;
				    $res->message = "Error: " . $e->getMessage();
			    }
			}
			else {
				$res->responseCode = 400;
				$res->message = "The e-mail address you used was already subscribered. Please try again with another!";
			}		

			return $res;	
		}

		public function sanitizeValue($val) {
			if(empty($val)) return '';

			return htmlentities(strip_tags(trim($val)), ENT_QUOTES);
		}

		public function isUniqueForSubscribers($field, $value) {
			$sql = "SELECT 
				`email` 
				from
				`subscribers` 
				where ". $field ."=". "'".$value. "'";

			return empty($this->query($sql));
		}

		public function query($q) {
			try {
				$stmt = $this->db->prepare($q);
				$stmt->execute();
				$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
				$stmt->closeCursor();
				return $results;
			} catch (Exception $e) {
				die ($e->getMessage());
			}
		}
	}
?>