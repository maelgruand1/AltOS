// Récupérer les éléments du DOM
const terminalBtn = document.getElementById("terminal-btn");
const terminal = document.getElementById("terminal");
const closeTerminal = document.getElementById("close-terminal");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

let username = "Utilisateur AltOS";
const ven = document.getElementById("ven");

// Ouvrir le terminal
terminalBtn.addEventListener("click", () => {
    terminal.style.display = "flex";
    terminalInput.focus();
});

// Fermer le terminal
closeTerminal.addEventListener("click", () => {
    terminal.style.display = "none";
});

// Fonction pour exécuter la commande dans le terminal
terminalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire

        const command = terminalInput.value.trim(); // Supprimer les espaces vides autour de la commande
        if (command === "") return; // Ne rien faire si la commande est vide

        // Afficher la commande entrée
        terminalOutput.innerHTML += `<p><span style="color: #00FF00;">$ ${command}</span></p>`;

        // Logique de traitement de la commande
        if (command === "hello") {
            terminalOutput.innerHTML += "<p>Hello user AltOS</p>";

        } else if (command === "clear") {
            terminalOutput.innerHTML = ""; // Effacer l'écran du terminal

        } else if (command === "help") {
            terminalOutput.innerHTML += "<p>Voici les commandes disponibles :</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>hello</span> - Affiche un message de bienvenue.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>clear</span> - Efface l'écran du terminal.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>date</span> - Affiche la date et l'heure actuelle.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>whoami</span> - Affiche le nom d'utilisateur actuel.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>echo [texte]</span> - Affiche le texte fourni.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>createUser [nom]</span> - Crée un nouvel utilisateur.</p>";

        } else if (command === "date") {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString(); // Affiche la date et l'heure locale
            terminalOutput.innerHTML += `<p>La date et l'heure actuelles sont : ${formattedDate}</p>`;

        } else if (command === "whoami") {
            terminalOutput.innerHTML += `<p>Nom d'utilisateur : ${username}</p>`;

        } else if (command.startsWith("echo ")) {
            const message = command.slice(5); // Récupérer le texte après "echo "
            terminalOutput.innerHTML += `<p>${message}</p>`; // Afficher le message dans le terminal

        } else if (command.startsWith("createUser ")) {
            const name = command.slice(11); // Récupérer le nom de l'utilisateur
            username = name;
            terminalOutput.innerHTML += `<p>User "${name}" created successfully.</p>`;

        } else {
            terminalOutput.innerHTML += "<p>Commande inconnue. Tapez 'help' pour la liste des commandes.</p>";
        }

        // Effacer le champ de saisie et scroller vers le bas
        terminalInput.value = "";
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});
