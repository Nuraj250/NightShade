chrome.storage.sync.get("darkModeEnabled", (data) => {
    if (data.darkModeEnabled) {
      document.documentElement.classList.add("dark-theme");
    }
  });
  