async function redirect(details) {
    let url = details.url;
    if (!url.includes('{{v}}')) return;

    const storageValue = await chrome.storage.local.get();

    url = decodeURI(url);
    url = url.replace("{{v}}", storageValue["variab-url"]);
    url = encodeURI(url);

    chrome.tabs.update(details.tabId, {url: url});
}

chrome.webNavigation.onBeforeNavigate.addListener(redirect);
