const butInstall = document.getElementById('buttonInstall');
const buttInstall = document.getElementById('buttonInstall');

buttInstall.addEventListener("click", () => {
    console.log("tinkerbell")
})
// Logic for installing the PWA
//  Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("promptDeffered")
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false)
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    
    if(!promptEvent) {
        console.log("buttonClicked")
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("app Installed")
    window.deferredPrompt = null;
});
