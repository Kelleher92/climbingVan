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
				    			    Hi there,
										<br /><br />
									Thanks for expressing your interest in ClimbingVan. Now that you have, we will send you updates about our progress - we know you are as excited as us for our launch.
										<br /><br />
									We would also love to know a little more about you. If you think you'd be a suitable partner for this exciting new service, simply reply to us here with your details - we would love to have a chat.
										<br /><br />
									Your ClimbingVan Crew,
										<br /><br />
									Stefan & Conor
								</div>";
			    $mail->send();

			    $mail->addAddress('iankelleher92@gmail.com');              
			    $mail->Subject = 'New ClimbingVan.com subscriber!';
			    $mail->Body = 	"<div>
									".$email." has just subscribed and has been added to the database.
			    				</div>";
			    $mail->send();
			} catch (Exception $e) {
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			}
		}	
	}
?>
