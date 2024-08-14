//creer une variable pour play once pour le popup
playOnce = true;


// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navbar.style.height = 50 + "px";
  } else{
    navbar.style.height = 90 + "px"
  }


// Faire apparaitre l'image de la partie improvise
// creer une variable pour stocker le niveau de scroll
//Window.scrollY est la valeur de du haut de la barre de scrolling
//on ajoute à ca la taille de la barre de scroll pour prendre la valeur en bas de celle ci
// document.body.offsetHeight est pour aller chercher la taille total du body
//donc srolling + barre de scrolling DIVISE par la taille total de scrolling du body

let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
  // Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  // Popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
