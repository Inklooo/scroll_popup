// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
window.addEventListener("scroll", () => {
  if (scrollY > 5) {
    navbar.style.height = 50 + "px";
  } else{
    navbar.style.height = 90 + "px"
  }
});

// Faire apparaitre l'image de la partie improvise
window.addEventListener("scroll", () =>{
  if (scrollY >= 200) {
    imgImprovise.style.opacity = 1
    imgImprovise.style.transform = "translate(0px)";
  }
});

// Faire apparaitre la popup quand on est en bas du site
window.addEventListener("scroll", () =>{
  if (scrollY === 1402) {
    popup.style.opacity = 1
    popup.style.transform = "translate(0px)";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours
popup.addEventListener("click", () =>{
  popup.style.close;
});
