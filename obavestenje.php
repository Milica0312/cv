<?php
require_once 'include/db.php';
require_once 'include/functions.php';

$allowed_params = allowed_post_params(['ime', 'email', 'poruka', 'submit']);
// niz sadrzi dozvoljene maksimalne duzine za sva polja
$fields_lengths = ['ime' => 64, 'email'=>256, 'poruka' => 256];


// provera da li su polja odgovoarajuce duzine
foreach ($fields_lengths as $field => $length) {
    if (!has_length($_POST[$field], ['min' => 0, 'max' => $length])) {
        header('Location: greska.html');
        die();
    }
}

try {

    // Priprema upita za unos podataka u bazu
    $prep = $db->prepare("INSERT INTO forma (ime, email, poruka) VALUES(:ime, :email, :poruka)");
    $prep->bindParam(':ime', $ime);
	$prep->bindParam(':email', $email);
    $prep->bindParam(':poruka', $poruka);

    $ime = isset($allowed_params['ime']) ? $allowed_params['ime'] : "";
	$email = isset($allowed_params['email']) ? $allowed_params['email'] : "";
    $poruka = isset($allowed_params['poruka']) ? $allowed_params['poruka'] : "";	

    // izvrsavanja upita
    $rez = $prep->execute();
} catch (PDOException $e) {
    echo 'greska kod upita';
   
}
// Ukoliko je upis u bazu uspesan, salje se mejl korisnuku i klijentu o uspesnoj prijavi
if ($rez) {
   
    $emailod = "$email";
    $email_to = 'milicapavlovic0312@gmail.com'; // treba da bude  'organictest@organic.milica-pavlovic.com';
    $subject = "cv kontakt forma";
    $headers = "From: $emailod\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $email_message = "Kontakt forma " . "<br>";

    $email_message .= "Ime: $ime " . "<br>";
    $email_message .= "Poruka: $poruka " . "<br>";

if (mail($email_to, $subject, $email_message, $headers)) {
	$htmltable = "Thanks for the question. Expect response within 24 hours.";
	echo $htmltable;
} else {
	echo 'greska kod slanja mail f';
die();
}   
} else {
    echo 'greska kod emaila-dva';
    die();
}


	
?>
