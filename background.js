const chatGPTUrl = 'https://chat.openai.com/chat?model=gpt-4';

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: chatGPTUrl });
});
