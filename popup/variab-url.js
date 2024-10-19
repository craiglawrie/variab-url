window.addEventListener("load", async () => {
    const element = document.getElementById("variable-value");
    var storageValue = await chrome.storage.local.get();

    element.value = storageValue["variab-url"];
    element.addEventListener("change", (event) => {
        chrome.storage.local.set({ "variab-url": event.target.value })
    });
});
