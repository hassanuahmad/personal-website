<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){

  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  try {

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'example@gmail.com'; //email to use as your SMTP
    $mail->Password = 'password'; //enter the email's password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->setFrom($email, $name);
    $mail->addAddress('example@gmail.com'); //enter the email you want to send the emails to

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "<h3>Name : $name <br>Subject: $subject <br>Email : $email <br>Phone : $phone <br>Message : $message</h3>";
    $mail->send();

    $alert = '<div class="alert-success">
                <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e) {
      $alert = '<div class="alert-error">
                  <span>'.$e->getMessage().'</span>
                </div>';
    }
}

header("Location: contact.html");

?>