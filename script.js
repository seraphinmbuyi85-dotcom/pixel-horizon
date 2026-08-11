const dark = document.getElementById("darkMode");

if (dark) {
    dark.onclick = () => {
        document.body.classList.toggle("dark");
    };
}

const topBtn = document.getElementById("top");

window.onscroll = () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function envoyerWhatsApp() {

    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    let message = document.getElementById("message").value;

    if (nom === "" || telephone === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    let numero = "243904401158";

    let texte = `Bonjour Pixel Horizon,

Nom : ${nom}

Téléphone : ${telephone}

Message :
${message}`;

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texte);

    window.open(url, "_blank");
}


