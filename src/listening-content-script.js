const popupContainer = document.querySelector('ytmusic-popup-container');

if (popupContainer) {
    console.log('ytmusic-popup-container found.');

    const observer = new MutationObserver(() => {
        const continueLink = popupContainer.querySelector('ytmusic-you-there-renderer a');
    
        if (continueLink) {
            continueLink.click();
        }
    });

    observer.observe(popupContainer, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    });
} else {
    console.log('ytmusic-popup-container not found.');
}
