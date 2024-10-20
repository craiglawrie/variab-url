async function redirect(details) {
    if (details.frameId !== 0) return; // top level frame only; behavior only targets bookmarks, links, etc

    const storageValue = await chrome.storage.local.get();

    let url = details.url;
    url = decodeURI(url);
    url = url.replace("{{v}}", storageValue["variab-url"]);
    url = encodeURI(url);

    chrome.tabs.update(details.tabId, {url: url});
}

const filter = {
    url: [{
        urlContains: "{{v}}"
    }]
};

chrome.webNavigation.onBeforeNavigate.addListener(redirect, filter);
