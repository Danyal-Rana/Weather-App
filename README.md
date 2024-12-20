# Weather App 🌦️  
Made with ❤️ by [Danyal Rana](https://mdrana.com)

## Introduction
The Weather App is an interactive web application that allows users to view the current weather and a 5-day forecast for any city. Built using JavaScript, HTML, and CSS, the app fetches real-time data from the OpenWeather API. It features a clean, responsive UI with options to toggle temperature units, view search history, and see weather-specific background images.

---

## Project Structure
The project is organized with a modular structure, separating logic and functionality into individual files for easy maintenance.

```plaintext
Weather-App/
├── index.html                   # Main HTML file
├── src/
│   ├── style.css                # Combined CSS for global and component-specific styles
│   ├── js/
│   │   ├── app.js               # Initializes the app, adds event listeners
│   │   ├── api/                 # Contains API-related logic
│   │   │   └── weatherApi.js    # Fetches weather and forecast data from the OpenWeather API
│   │   ├── components/          # Contains components for displaying weather data
│   │   │   ├── currentWeather.js # Renders current weather information
│   │   │   ├── forecast.js      # Renders the weather forecast
│   │   │   └── searchHistory.js # Displays the search history
│   │   ├── utils/               # Utility functions used throughout the app
│   │   │   ├── dateUtils.js     # Handles date-related utilities (e.g., getting the day of the week)
│   │   │   └── weatherUtils.js  # Helper functions for weather data (e.g., formatting temperature)
│   │
│   └── images/                  # Contains background images and icons for different weather types
│
└── README.md                    # Project information and setup instructions
```

---

## UI Inspiration
This project’s UI design was inspired by the [Weather Website Design](https://www.figma.com/community/file/1288147890001374433/weather-website) on Figma.

---

## Features
- **Current Weather and 5-Day Forecast**: Check real-time weather and view a detailed 5-day forecast.
- **Temperature Unit Toggle**: Easily switch between Celsius and Fahrenheit.
- **Search History**: Access previous searches for quick weather checks.
- **Adaptive Backgrounds**: Background images change based on weather conditions.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Installation and Setup
Follow these steps to run the Weather App on your local machine.

### 1. Clone the Repository
   ```bash
   git clone https://github.com/Danyal-Rana/Weather-App.git
   ```

### 2. Navigate to the Project Directory
   ```bash
   cd Weather-App
   ```

### 3. Open the Project in Your Preferred Code Editor

### 4. Add Your API Key
   - Go to `src/js/api.js`.
   - Replace `YOUR_API_KEY` with your API key from [OpenWeather](https://openweathermap.org/api).

### 5. Start a Local Server
   - To view the project locally, you need to run a local server. You can use the **Live Server** extension in **VS Code** for a quick setup:
     1. Install the **Live Server** extension in VS Code.
     2. Right-click on `index.html` in VS Code and select **Open with Live Server**.

### 6. Open `index.html` in Your Browser
   - Once the local server is running, open your browser and navigate to the address provided by the server. If you’re using **Live Server**, the address is usually `http://localhost:5500` or another port number.
   - You should now see your project running in the browser.

---

## Usage
1. **Enter a City**: Type a city name into the search bar and press "Search" to fetch the weather data.
2. **Toggle Temperature Units**: Click on the temperature unit toggle to switch between Celsius and Fahrenheit.
3. **View Search History**: Click "View History" to display a list of your previously searched cities. Click on a city in the history list to quickly load its weather data.

---

## Technologies Used
- **HTML5** and **CSS3** for layout and styling.
- **JavaScript (ES6 Modules)** for application logic and functionality.
- **OpenWeather API** for real-time weather data.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Acknowledgments
- **Weather Data**: Weather data is powered by the free API service provided by [OpenWeather](https://openweathermap.org/).
- **UI Inspiration**: The design was inspired by the [Weather Website Design](https://www.figma.com/community/file/1288147890001374433/weather-website) on Figma.
- **Images**: Background images are sourced from [Unsplash](https://unsplash.com).

---

## Contact
For questions or feedback, feel free to contact [Danyal Rana](https://mdrana.com).
```
Happy Coding :)
