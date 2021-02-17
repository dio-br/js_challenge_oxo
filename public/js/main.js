// structure js
let oxo = document.querySelector('#oxo')
const msg = document.querySelector("h2")
let element = document.querySelectorAll(".case")
let recommencer = document.querySelector("#recommencer")
let jeuEnCours = true
let joueur1 = "X"
let jeu = ["","","","","","","","","",]
let condition  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// gagnant 
const gagner = ()=>
    `le joueur ${joueur1} a gagné`

// egaliter
const egaliter = () => 
    `Egaliter`

// tour de joueur 
const tourJouer = () =>  
    `c'est au tour du joueur ${joueur1}`

// le titre h2 en bas 
msg.innerHTML = tourJouer()


// obtenir l'index de chaque case en cliquant  
element.forEach(el => 
    el.addEventListener('click', intClickcase)
    )

function intClickcase(){
    const indexCase = parseInt(this.dataset.index)
    if (jeu[indexCase] !== "" || !jeuEnCours) {
        return
    }
    jeu[indexCase] = joueur1
    this.innerHTML = joueur1

    verfication()
}

// fonction pour verifier les conditions 
function verfication(){
    let tourGa = false
    
    for(let conditionVictoire of condition){
        let val1 = jeu[conditionVictoire[0]]
        let val2 = jeu[conditionVictoire[1]]
        let val3 = jeu[conditionVictoire[2]]
        if (val1 === '' || val2 === '' || val3 === '') {
            continue
        }
        if (val1 === val2 && val2 === val3) {
            tourGa = true
            break
        }
    }
    if (tourGa) {
        msg.innerHTML = gagner()
        jeuEnCours = false
        return
    }

    if (!jeu.includes("")) {
        msg.innerHTML = egaliter()
        jeuEnCours = false 
        return
    }

    joueur1 = joueur1 === 'X' ? "O" : 'X'
    msg.innerHTML = tourJouer()
}

// fonction pour le btn 
let refaire = () => {
    joueur1 = "X"
    jeuEnCours = true
    jeu = ["","","","","","","","","",]
    msg.innerHTML = tourJouer()
    element.forEach(el => 
        el.innerHTML = ""
        )
}
// btn recommencer 
recommencer.addEventListener("click", refaire)