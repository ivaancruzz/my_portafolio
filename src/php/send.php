<?php
use PHPMailer\PHPMailer\PHPMailer;
require  'PHPMailer.php';
require  'SMTP.php';

function validateForm( ){
    $is_valid = true;

    foreach( $_POST as $data ){
        if( $data == "" || !filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL ) ){
            $is_valid = false;
        }
    }

    return $is_valid;
}


if($_POST) {
    if( !validateForm() ) { 
        echo 'error_altered';
    }
    else{

        $host = ''
        $username = ''
        $password = ''       

        $name = ucwords(filter_var( $_POST['name'], FILTER_SANITIZE_STRING  ));
        $email = filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL  );
        $subject = filter_var( $_POST['subject'], FILTER_SANITIZE_STRING  );
        $message = filter_var( $_POST['msg'], FILTER_SANITIZE_STRING  );

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->Host = $host;
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = $username;
        $mail->Password = $password;
    
        $mail->setFrom('Desde el email..', 'De...');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('ivannicolascruz01@gmail.com', 'Ivan Nicolas Cruz');
        $mail->Subject = $subject;
        $mail->Body = $message;

        //$mail->addAttachment('test.txt');
        if (!$mail->send()) {
            echo 'error_500';
        } else {
            echo 'ok';
        }   



    }
    
} else {
    echo('no post ');
}
?>