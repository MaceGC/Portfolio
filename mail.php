<?php 
$retour = mail('maceo.guicherd@gmail.com', 'Message depuis le portfolio',$_POST['message'], '');
if ($retour){
    echo '<p>Votre message a bien été envoyé.</php>';
}
?>