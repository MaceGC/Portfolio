<?php 
$retour = mail('maceo.guicherd@gmail.com', 'Message depuis le portfolio de '.$_POST['Nom'],$_POST['message'].' \n pour répondre : '.$_POST['Mail'], '');
if ($retour){
    echo '<p>Votre message a bien été envoyé.</php>';
}
?>