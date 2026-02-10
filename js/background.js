// Manifest V3 Service Worker
// The extension icon now shows on all YouTube pages (via host_permissions).
// The popup validates whether the user is on an actual playlist page.

chrome.runtime.onInstalled.addListener(() => {
    console.log('YouTube Playlist Search extension installed/updated');
});
