function loadNUSLibproxy() {
  location.href='http://libproxy1.nus.edu.sg/login?url='+location.href;
}

chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.update(tab.id,{url:'http://libproxy1.nus.edu.sg/login?url='+tab.url});
});
