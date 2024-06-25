document.addEventListener("DOMContentLoaded", function () {
    const submenus = document.querySelectorAll("#menu .submenu");

    submenus.forEach(function (submenu) {
        submenu.parentElement.addEventListener("click", function (event) {
            event.preventDefault();
            const isSubmenuVisible = submenu.classList.contains("show");
            hideAllSubmenus();
            if (!isSubmenuVisible) {
                submenu.classList.add("show");
            }
        });
    });

    function hideAllSubmenus() {
        submenus.forEach(function (submenu) {
            submenu.classList.remove("show");
        });
    }

    const welcomeMessage = [
        "Welcome to SecuritiXplore. Select an option from the menu above:",
        "- ENUMERATION & EXPLOITATION",
        "- WEB VULNERABILITIES",
        "  - Command Injection",
        "  - CSRF (Cross Site Request Forgery)",
        "  - File Inclusion",
        "  - File Upload",
        "  - NoSQL Injection",
        "  - Path Traversal",
        "  - SQL Injection",
        "  - SSRF (Server Side Request Forgery)",
        "  - SSTI (Server Side Template Injection)",
        "  - XSS (Cross Site Scripting)",
        "  - XXE (XML External Entity)",
        "- ACTIVE DIRECTORY",
        "- POST EXPLOITATION",
        "  - REVERSE SHELL",
        "  - FILE TRANSFER",
        "- PRIVILEGE ESCALATION",
        "  - Linux Privilege Escalation",
        "  - Windows Privilege Escalation",
        "Type \"help\" for assistance."
    ];

    const terminalMessage = document.querySelector("#terminal .terminal-message");

    function typeWriter(message) {
        return new Promise(resolve => {
            let index = 0;
            const printChar = () => {
                if (index < message.length) {
                    terminalMessage.textContent += message[index];
                    index++;
                    setTimeout(printChar, 50);
                } else {
                    terminalMessage.dispatchEvent(new KeyboardEvent('keypress', { 'key': 'Enter' }));
                    resolve();
                }
            };
            printChar();
        });
    }

    async function writeWelcomeMessage() {
        for (let i = 0; i < welcomeMessage.length; i++) {
            await typeWriter(welcomeMessage[i]);
        }
    }

    writeWelcomeMessage();

    const contentItems = document.querySelectorAll(".content-item");

    // Oculta todos los elementos de contenido
    function hideAllContentItems() {
        contentItems.forEach(item => {
            item.style.display = "none";
        });
    }

    // Mostrar el elemento de contenido seleccionado
    function showContentItem(id) {
        const contentItem = document.getElementById(id);
        if (contentItem) {
            hideAllContentItems();
            contentItem.style.display = "block";
        }
    }

    // Agregar oyentes de eventos a los elementos del menú
    submenus.forEach(submenu => {
        submenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault(); // Evita que el enlace cambie la URL
                const targetId = link.getAttribute("href").substring(1);
                showContentItem(targetId);
            });
        });
    });
});
