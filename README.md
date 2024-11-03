# NightShade 🌙

**NightShade** is a minimalistic dark theme extension designed to provide a comfortable, eye-friendly browsing experience. With NightShade, you can easily switch between light and dark modes, making late-night browsing more enjoyable and reducing strain on your eyes.

## Features
- **Universal Dark Mode**: Applies a consistent dark theme across all websites.
- **Simple Toggle**: Quickly enable or disable dark mode through the extension's popup.
- **User Preferences**: Saves your dark mode preference for a seamless experience across sessions.

## Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle at the top right).
4. Click **Load unpacked** and select the folder containing NightShade.

## Usage
1. Click the NightShade icon in the toolbar.
2. Use the toggle switch to enable or disable dark mode.
3. NightShade remembers your preference for future browsing sessions.

## File Structure
```
nightshade/
├── manifest.json        # Extension metadata and permissions
├── popup.html           # Popup with dark mode toggle
├── popup.js             # JavaScript to handle toggle and store preferences
├── content.js           # Injects dark theme based on preference
├── dark-theme.css       # CSS styles for dark mode
└── icon.png             # NightShade icon
```

## Contributing
Feel free to fork this repository, open issues, or submit pull requests to improve NightShade.

## License
This project is licensed under the MIT License.
