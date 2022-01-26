function loadNUSLibproxy() {
  location.href='http://libproxy1.nus.edu.sg/login?url='+location.href;
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: loadNUSLibproxy
  });
});
