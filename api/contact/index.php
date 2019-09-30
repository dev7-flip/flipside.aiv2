<?php
    require 'C:\Bitnami\wampstack-7.1.21-0\apache2\htdocs\rea\vendor\autoload.php';
    require_once 'htmlformat.php';

    header('Access-Control-Allow-Origin: *');  
    header('Content-Type: Application/Json');
   
    // Load Composer's autoloader
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    // Instantiation and passing `true` enables exceptions

    $postData = json_decode(file_get_contents("php://input"),true);
   

    
    if($postData){

   
        
        try {

            $mail = new PHPMailer;

            //Enable SMTP debugging. 
            $mail->SMTPDebug = 3;                               
            //Set PHPMailer to use SMTP.
            $mail->isSMTP();            
            //Set SMTP host name                          
            $mail->Host = "smtp.gmail.com";
            //Set this to true if SMTP host requires authentication to send email
            $mail->SMTPAuth = true;                          
            //Provide username and password     
            $mail->Username = "j.dioqueono@gmail.com";                 
            $mail->Password = "jandepriolo123";                           
            //If SMTP requires TLS encryption then set it
            //$mail->SMTPSecure = "tls";                           
            //Set TCP port to connect to 
            $mail->Port = 587;                                   
            $mail->Debugoutput = 'html';
            $mail->From = $postData['email'];
            $mail->FromName = $postData['name'];
            
            $mail->smtpConnect(
                array(
                    "ssl" => array(
                        "verify_peer" => false,
                        "verify_peer_name" => false,
                        "allow_self_signed" => true
                    )
                )
            );
            
            $mail->addAddress("dev7flip@gmail.com",$postData['name']);
            $mail->AddEmbeddedImage('../logo.png', 'flip_logo');
            $mail->isHTML(true);
            
            $mail->Subject = $postData['subject'];
            $format =  email($postData['name'],$postData['email'],$postData['subject'],$postData['message'],"cid:flip_logo");
            $mail -> Body = $format;
            $mail->AltBody = $postData['message'];
      
            
            if(!$mail->send()) 
            {
                echo json_encode(['sent'=>false,'message' => 'There is a problem sending you message, please try again later']);
            } 
            else 
            {
                echo json_encode(['sent'=>true,'message'=>'Thank you for contacting us']);
            }
            
        } catch (Exception $e) {
            echo json_encode(['sent'=>false,'message' => 'There is a problem sending you message, please try again later']);
        }
  
        
    }else{
        echo json_encode(['sent'=>false,'message' => 'Please fill all the form']);
    }

    