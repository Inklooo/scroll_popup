// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
window.addEventListener("scroll", () => {
  if (scrollY > 5) {
    navbar.style.height = 60 + "px";
  } else{
    navbar.style.height = 90 + "px"
  }
});





// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
