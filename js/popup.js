import spinner from './objects/spinner.js';
import playlistID from './data/playlistID.js';
import populatePopup from './functions/populatePopup.js';
import fetchBtn from './elements/fetchBtn.js';

window.videos = [];

function showError(message) {
    document.body.innerHTML = `
        <div class='error'>${message}</div>
    `;
    console.error(message);
}

(async function() {
    try {
        if (!playlistID) {
            showError("Please navigate to a YouTube playlist page to use this extension.");
            return;
        }

        if (playlistID == "WL") {
            showError("Watch Later playlist is inaccessible due to privacy concerns. Thank you for understanding.");
            return;
        }

        await spinner.wrapAround(populatePopup);
    } catch(err) {
        console.error('Extension error:', err);
        showError(err.message || String(err));
    }
})();
