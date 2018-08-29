<?php
	require 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/SMTP.php';
	require 'PHPMailer/src/Exception.php';
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	class Mailer {
		public function sendSubscriptionEmails($email) {
			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
			    //Server settings
			    $mail->SMTPDebug = false;                             // Disable verbose debug output
			    $mail->isSMTP();                                      // Set mailer to use SMTP
			    $mail->Host = getenv('EMAIL_HOST');   		 		  // Specify main server
			    $mail->SMTPAuth = true;                               // Enable SMTP authentication
			    $mail->Username = getenv('EMAIL_UNAME');              // Username
			    $mail->Password = getenv('EMAIL_PASS');               // Password    			 
			    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
			    $mail->Port = getenv('EMAIL_PORT');                   // TCP port to connect to
			    //Recipients
			    $mail->setFrom('iankelleher92@gmail.com', 'ClimbingVan.com');
			    $mail->addAddress($email);              
			    $mail->addReplyTo('iankelleher92@gmail.com', 'Information');
			   
			    //Content
			    $mail->isHTML(true);                                  // Set email format to HTML
			    $mail->Subject = 'Thank you for subscribing to ClimbingVan.com!';
			    $mail->Body = 	"<div>
				    			    Hi Partner,
										<br /><br />
									thanks for expressing an interest in ClimbingVan.
										<br /><br />
									Now that you have, we will send you updates about our progress - we know you are as excited as us for our launch.
										<br /><br />
									Your ClimbingVan Crew,
										<br /><br />
									Stefan & Conor
										<br /><br />
									<img src='public/images/slogo.png'/>
								</div>";

								echo $mail->Body;
			    $mail->send();

			    $mail->clearAddresses();              
			    $mail->addAddress('iankelleher92@gmail.com');              
			    $mail->isHTML(false);                                  // Set email format to HTML
			    $mail->Subject = 'New ClimbingVan.com subscriber!';
			    $mail->Body = $email." has just subscribed and has been added to the database.";
			    $mail->send();
			} catch (Exception $e) {
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			}
		}	
	}
?>
