<?php

header("Access-Control-Allow-Origin: *");
header("content-type: Application/json");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{		
	// set response code - 200 OK  NOTE: Please try to use smtp method

	// http_response_code(200);
	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->SMTPDebug = 0;
	//Ask for HTML-friendly debug output
	$mail->Debugoutput = 'html';
	
	//Set the hostname of the mail server
	$mail->Host = "smtp.gmail.com";
	
	//Set the SMTP port number - likely to be 25, 465 or 587
	$mail->Port = 25;
	
	//Whether to use SMTP authentication
	$mail->SMTPAuth = true;
	
	//Use SSL or TLS
	$mail->SMTPSecure = "ssl";
	
	//Username to use for SMTP authentication
	$mail->Username = "j.dioqueono@gmail.com";
	
	//Password to use for SMTP authentication
	$mail->Password = "jandepriolo123";
	

	$subject = $_POST['subject'];
	$to = $mail->Username;
	$from = $_POST['email'];

	// data

	$msg = $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";


	// echo json_encode( $_POST );

	if (empty($_POST)) {
		// Set a 200 (okay) response code.
		echo '<script type="text/javascript">
			alert("wew");
		</script>';
		// http_response_code(200);

		} else {
		// Set a 500 (internal server error) response code.
		echo '<script type="text/javascript">
		alert("");
	</script>';
		

		}

		echo "sent";
	}
  else
	{

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

