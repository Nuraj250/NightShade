document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
  
    // Load saved dark mode preference
    chrome.storage.sync.get("darkModeEnabled", (data) => {
      toggle.checked = data.darkModeEnabled || false;
      updateDarkMode(data.darkModeEnabled);
    });
  
    // Listen for toggle changes
    toggle.addEventListener("change", () => {
      const enabled = toggle.checked;
      chrome.storage.sync.set({ darkModeEnabled: enabled });
      updateDarkMode(enabled);
    });
  
    // Update dark mode on the current tab
    function updateDarkMode(enabled) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (isDarkMode) => {
            if (isDarkMode) {
              document.documentElement.classList.add("dark-theme");
            } else {
              document.documentElement.classList.remove("dark-theme");
            }
          },
          args: [enabled],
        });
      });
    }
  });
  