document.addEventListener('DOMContentLoaded', function () {
    const terminalBody = document.getElementById('terminal-body');
    const terminalContent = document.getElementById('terminal-content');
    const commandInput = document.getElementById('command-input');
    let isRoot = false; // Estado de la sesión actual (false = no root, true = root)
    const defaultPrompt = 'hacking@Hacklab:~$';
    const rootPrompt = 'root@Hacklab:~#';
    const defaultColor = '#00FF00'; // Verde
    const rootColor = '#FF0000'; // Rojo

    commandInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            commandInput.value = '';

            executeCommand(command);
        }
    });

    function executeCommand(command) {
        // Crear un div para la salida del comando
        const output = document.createElement('div');
        output.classList.add('command-output');
        // Ejecutar el comando y generar la salida correspondiente
        switch (command.toLowerCase()) {
            case '':
                break;
            case 'help':
                output.innerHTML = "<div>Comandos disponibles:</div>" +
                    "<div>- help: Muestra la lista de comandos disponibles.</div>" +
                    "<div>- clear: Limpia la pantalla.</div>" +
                    "<div>- cat: Leer archivos.</div>" +
                    "<div>- ls: Listar contenido.</div>" +
                    "<div>- cd: Para moverte de directorios.</div>" +
                    "<div>- python3: Para ejecutar archivos '.py' u otros comandos.</div>" +
                    "<div>- sudo su: Cambia al usuario root.</div>" +
                    "<div>- sudo -l: Muestra los privilegios del usuario actual.</div>";
                break;
            case 'ls':
                output.innerHTML = "<div>user.txt</div>" +
                    "<div>.bashrc</div>" +
                    "<div>ssh</div>" +
                    "<div>.bash_history</div>" +
                    "<div>volver_inicio.sh</div>" +
                    "<div>ctfs.py</div>" +
                    "<div>hacking_community.txt</div>";
                break;
            case 'cat user.txt':
                output.innerHTML = "<div>RXN0YSBlcyBsYSBmbGFnIGRlbCB1c3Vhcmlv</div>";
                break;
            case 'cat .bashrc':
                output.innerHTML = "<div>No tienes permisos para abrir este fichero</div>";
                break;
            case 'cat hacking_community.txt':
                output.innerHTML = "<div>Sigueme en youtube: https://www.youtube.com/channel/UCTYFCMrN3NLa70bmpjRB--g</div>";
                break;
            case 'cd ..':
                output.innerHTML = "<div>Has cambiado de directorio con exito</div>";
                break;
            case 'cd ../':
                output.innerHTML = "<div>Has cambiado de directorio con exito</div>";
                break;
            case './volver_inicio.sh':
                output.innerHTML = "<div>Llendo al inicio</div>";
                // Redireccionar a un archivo HTML específico
                window.location.href = './index.html';
                break;
            case 'python3 ctfs.py':
                output.innerHTML = "<div>Llendo a los CTF's</div>";
                // Redireccionar a un archivo HTML específico
                window.location.href = './ctfs.html';
                break;
            case 'cat /etc/shadow':
                output.innerHTML = "<div>Que intentabas hacer... ;D</div>";
                break;
            case 'cat /etc/passwd':
                output.innerHTML = "<div>root:x:0:0:root:/root:/usr/bin/zsh</div>" +
                    "<div>daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin</div>" +
                    "<div>bin:x:2:2:bin:/bin:/usr/sbin/nologin</div>" +
                    "<div>sys:x:3:3:sys:/dev:/usr/sbin/nologin</div>" +
                    "<div>sync:x:4:65534:sync:/bin:/bin/sync</div>" +
                    "<div>games:x:5:60:games:/usr/games:/usr/sbin/nologin</div>" +
                    "<div>man:x:6:12:man:/var/cache/man:/usr/sbin/nologin</div>" +
                    "<div>lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin</div>" +
                    "<div>mail:x:8:8:mail:/var/mail:/usr/sbin/nologin</div>" +
                    "<div>news:x:9:9:news:/var/spool/news:/usr/sbin/nologin</div>" +
                    "<div>uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin</div>" +
                    "<div>proxy:x:13:13:proxy:/bin:/usr/sbin/nologin</div>" +
                    "<div>www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin</div>" +
                    "<div>backup:x:34:34:backup:/var/backups:/usr/sbin/nologin</div>" +
                    "<div>list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin</div>" +
                    "<div>irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin</div>" +
                    "<div>_apt:x:42:65534::/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin</div>" +
                    "<div>systemd-timesync:x:992:992:systemd Time Synchronization:/:/usr/sbin/nologin</div>" +
                    "<div>messagebus:x:100:102::/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>tss:x:101:104:TPM software stack,,,:/var/lib/tpm:/bin/false</div>" +
                    "<div>strongswan:x:102:65534::/var/lib/strongswan:/usr/sbin/nologin</div>" +
                    "<div>tcpdump:x:103:105::/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>usbmux:x:104:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin</div>" +
                    "<div>sshd:x:105:65534::/run/sshd:/usr/sbin/nologin</div>" +
                    "<div>dnsmasq:x:106:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin</div>" +
                    "<div>avahi:x:107:108:Avahi mDNS daemon,,,:/run/avahi-daemon:/usr/sbin/nologin</div>" +
                    "<div>speech-dispatcher:x:108:29:Speech Dispatcher,,,:/run/speech-dispatcher:/bin/false</div>" +
                    "<div>pulse:x:109:109:PulseAudio daemon,,,:/run/pulse:/usr/sbin/nologin</div>" +
                    "<div>lightdm:x:110:111:Light Display Manager:/var/lib/lightdm:/bin/false</div>" +
                    "<div>saned:x:111:114::/var/lib/saned:/usr/sbin/nologin</div>" +
                    "<div>polkitd:x:991:991:User for polkitd:/:/usr/sbin/nologin</div>" +
                    "<div>rtkit:x:112:115:RealtimeKit,,,:/proc:/usr/sbin/nologin</div>" +
                    "<div>colord:x:113:116:colord colour management daemon,,,:/var/lib/colord:/usr/sbin/nologin</div>" +
                    "<div>nm-openvpn:x:114:117:NetworkManager OpenVPN,,,:/var/lib/openvpn/chroot:/usr/sbin/nologin</div>" +
                    "<div>nm-openconnect:x:115:118:NetworkManager OpenConnect plugin,,,:/var/lib/NetworkManager:/usr/sbin/nologin</div>" +
                    "<div>_galera:x:116:65534::/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>mysql:x:117:120:MariaDB Server,,,:/nonexistent:/bin/false</div>" +
                    "<div>stunnel4:x:990:990:stunnel service system account:/var/run/stunnel4:/usr/sbin/nologin</div>" +
                    "<div>_rpc:x:118:65534::/run/rpcbind:/usr/sbin/nologin</div>" +
                    "<div>geoclue:x:119:122::/var/lib/geoclue:/usr/sbin/nologin</div>" +
                    "<div>Debian-snmp:x:120:123::/var/lib/snmp:/bin/false</div>" +
                    "<div>sslh:x:121:124::/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>ntpsec:x:122:127::/nonexistent:/usr/sbin/nologin</div>" +
                    "<div>redsocks:x:123:128::/var/run/redsocks:/usr/sbin/nologin</div>" +
                    "<div>rwhod:x:124:65534::/var/spool/rwho:/usr/sbin/nologin</div>" +
                    "<div>_gophish:x:125:130::/var/lib/gophish:/usr/sbin/nologin</div>" +
                    "<div>iodine:x:126:65534::/run/iodine:/usr/sbin/nologin</div>" +
                    "<div>miredo:x:127:65534::/var/run/miredo:/usr/sbin/nologin</div>" +
                    "<div>statd:x:128:65534::/var/lib/nfs:/usr/sbin/nologin</div>" +
                    "<div>redis:x:129:131::/var/lib/redis:/usr/sbin/nologin</div>" +
                    "<div>postgres:x:130:132:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash</div>" +
                    "<div>mosquitto:x:131:133::/var/lib/mosquitto:/usr/sbin/nologin</div>" +
                    "<div>inetsim:x:132:134::/var/lib/inetsim:/usr/sbin/nologin</div>" +
                    "<div>_gvm:x:133:136::/var/lib/openvas:/usr/sbin/nologin</div>" +
                    "<div>hacking:x:1000:1000:,,,:/home/hacking:/usr/bin/zsh</div>" +
                    "<div>opensmtpd:x:134:138:OpenSMTPD Daemon,,,:/var/lib/opensmtpd/empty:/usr/sbin/nologin</div>" +
                    "<div>opensmtpq:x:135:139:OpenSMTPD queue user,,,:/var/lib/opensmtpd/empty:/usr/sbin/nologin</div>";
                break;
            case 'clear':
                clearTerminal();
                break;
            case 'sudo su':
                if (!isRoot) {
                    isRoot = true;
                    setPrompt(rootPrompt, rootColor);
                }
                output.textContent = "¡Ahora eres root!";
                break;
            case 'sudo -l':
                output.innerHTML = "<div>Matching Defaults entries for hacking on Hacklab:</div>" +
                    "<div>User hacking may run the following commands on Hacklab:</div>" +
                    "<div>env_reset, mail_badpass, secure_path = /usr/local / sbin\: /usr/local / bin\: /usr/sbin\: /usr/bin\: /sbin\:/bin, use_pty</div>" +
                    "<br>" +
                    "<div>(ALL : ALL) ALL</div>";
                break;
            case 'exit':
                if (isRoot) {
                    isRoot = false;
                    setPrompt(defaultPrompt, defaultColor);
                }
                output.textContent = "Sesión root finalizada.";
                break;
            default:
                output.textContent = "Orden" + ' ' + "«" + command + "»" + ' ' + "no encontrada.";
                break;
        }
        // Si el comando no es "clear", agregar el div del comando ejecutado al contenido de la terminal
        if (command.toLowerCase() !== 'clear') {
            const commandDiv = document.createElement('div');
            commandDiv.textContent = getPrompt() + ' ' + command;
            terminalContent.appendChild(commandDiv);
        }

        // Agregar la salida del comando al contenido de la terminal
        terminalContent.appendChild(output);

        // Agregar un salto de línea al final de cada comando
        terminalContent.appendChild(document.createElement('br'));

        scrollToBottom();
    }

    function clearTerminal() {
        // Limpiar la pantalla sin mostrar el prompt de que se escribió
        terminalContent.innerHTML = '';

        scrollToBottom();
    }

    function scrollToBottom() {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function setPrompt(prompt, color) {
        const promptElement = document.getElementById('prompt');
        promptElement.textContent = prompt;
        promptElement.style.color = color;
    }

    function getPrompt() {
        return isRoot ? rootPrompt : defaultPrompt;
    }
});
