const popupContainerSelector = 'ytmusic-popup-container';
const popupContainer = document.querySelector(popupContainerSelector);

if (popupContainer) {
    console.log(`${popupContainerSelector} found.`);

    const observer = new MutationObserver(() => {
        const continueLinkSelector ='ytmusic-you-there-renderer button';
        const continueLink = popupContainer.querySelector(continueLinkSelector);
    
        if (continueLink) {
            continueLink.click();
            console.log('Successfully clicked.');
        } else {
            console.warn(`${continueLinkSelector} not found`);
            console.warn(popupContainer.outerHTML);
        }
    });

    observer.observe(popupContainer, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    });
} else {
    console.warn(`${popupContainerSelector} not found.`);
    console.warn(document.body.outerHTML);
}
