<?php 
        if(isset($_POST['message'])){
          $retour = mail('maceo.guicherd@gmail.com', 'Message depuis le portfolio de '.$_POST['Nom'],$_POST['message'].' \n pour répondre : '.$_POST['Mail'], '');
        if ($retour){
          echo '<p>Votre message a bien été envoyé.</php>';
        }
        }    
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Me contacter</title>
  <link rel="stylesheet" href="navBar.css">
  <link rel="stylesheet" href="footer.css">
  <link rel="stylesheet" href="contact.css">
</head>

<body>
  <header>
      <nav>
        <a href="index.html" class="nav-link">Accueil</a>
        <a href="Projet.html" class="nav-link">Projets</a>
        <a href="Competences.html" class="nav-link">Compétences</a>
      </nav>
  </header>
  <main>
    <div class="form-container">
      <h2>Envoyer moi un message</h2>
      <form method="post">
        <label >Nom</label>
        <input  name="Nom" placeholder="Votre nom" />

        <label name="Mail">Email</label>
        <input type="email" id="email" placeholder="email" />

        <label for="story">Message</label>

        <textarea id="message" name="message" rows="5" cols="33" placeholder="Votre Message..."></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </main>
  <footer class="footer">
    <div class="footer-content">
      <a href="contact.html">Envoyez moi un message</a>
      <a href="https://github.com/macegc"><i class="fa-brands fa-github"></i></i> Mon Github</a>
    </div>
  </footer>
</body>

</html>
