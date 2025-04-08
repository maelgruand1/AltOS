document.addEventListener("DOMContentLoaded", () => {
    // Bouton launcher
    const launcherBtn = document.getElementById("launcher-btn");
    const launcherModal = document.getElementById("launcher-modal");
    const closeLauncher = document.getElementById("close-launcher");

    launcherBtn?.addEventListener("click", () => {
        launcherModal.classList.add("show");
    });

    closeLauncher?.addEventListener("click", () => {
        launcherModal.classList.remove("show");
    });

    launcherModal?.addEventListener("click", (event) => {
        if (event.target === launcherModal) {
            launcherModal.classList.remove("show");
        }
    });

    // Terminal
    const terminalBtn = document.getElementById("terminal-btn");
    const terminal = document.getElementById("terminal");
    const closeTerminal = document.getElementById("close-terminal");

    terminalBtn?.addEventListener("click", () => {
        terminal.style.display = "flex";
    });

    closeTerminal?.addEventListener("click", () => {
        terminal.style.display = "none";
    });

    // Fenêtre Ven (Text-Editor)
    const venBtn = document.getElementById("ven-btn"); // Récupérer le bouton Ven

    const closeVenBtn = document.getElementById("closeVen");

    // Fonction pour afficher la fenêtre Ven
    function openVenEditor() {
        console.log("Ouverture de Ven"); // Vérifie dans la console
        ven.style.display = "block";
    }

    // Fonction pour cacher la fenêtre Ven
    function closeVenEditor() {
        console.log("Fermeture de Ven"); // Vérifie dans la console
        ven.style.display = "none";
    }

    // Ajouter un gestionnaire d'événements au bouton Ven (optionnel mais recommandé)
    venBtn?.addEventListener("click", openVenEditor);

    // Les gestionnaires onclick sont déjà dans le HTML, mais si vous préférez les gérer ici :
    closeVenBtn?.addEventListener("click", closeVenEditor);
});