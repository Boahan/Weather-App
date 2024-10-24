
# Weather App - Next.js, React, Clerk, Tailwind CSS, and OpenWeatherMap API.

<img width="946" alt="mainpage" src="https://github.com/user-attachments/assets/c5609a91-7f74-450f-8c1a-3cd57c40e9db">

This project is a simple weather application built using *HTML*, **CSS**, and **JavaScript**. It fetches real-time weather information from the **OpenWeather API** and displays it based on the user's current location or a manually searched city.

## Key Features
- **Automatic Location Detection**: When the app is loaded, it automatically requests the user's location using the **Geolocation API** and shows weather details based on it.
- **Manual Search**: Users can search for the weather information of any city in the world.
- **Current Weather**: Displays details like temperature, weather conditions, wind speed, humidity, and more.
- **Responsive Design**: The app is built to work smoothly across various devices with a responsive design.
- **Toggle Units**: Users can toggle between Celsius and Fahrenheit for temperature display.

## Functionalities

### For Users:
- **Location-based Weather**: On load, the app requests access to the user's location and fetches weather details accordingly. If denied, users can manually search for their city's weather.
- **City Search**: Allows users to search for weather in any city around the world.
- **Weather Details**: Displays the current temperature, weather condition, humidity, wind speed, and other relevant data.
- **Toggle Units**: Easily switch between Celsius and Fahrenheit temperature units.

## Snapshots

### Home:
<img width="811" alt="homepage" src="https://github.com/user-attachments/assets/7ecdfb01-0117-4660-9808-ac461ba8de02">

### Light Mode:
<img width="840" alt="LightTheme" src="https://github.com/user-attachments/assets/30e9fc03-d1d9-4be7-9e55-e8533bbe260a">

### SignUp:
<img width="929" alt="Signup" src="https://github.com/user-attachments/assets/6eb91df6-fab6-4ef3-94d6-359ad8e46917">

### Authentication:
<img width="959" alt="Authentication" src="https://github.com/user-attachments/assets/2f57bed8-8e81-416a-ba10-2b2e1f8694b5">

### Search City:
<img width="823" alt="SearchCity" src="https://github.com/user-attachments/assets/332af9ef-caa0-4f02-840b-e389505d953a">

### DashBoard:
<img width="929" alt="dashboardpage" src="https://github.com/user-attachments/assets/538e7e72-61f4-45be-9f0f-64fd392530f8">

## Project Setup

Since this is a basic HTML, CSS, and JavaScript project, there are no complex dependencies. You just need to clone the repository and open the `index.html` file in your browser.

### Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project folder**:
   ```bash
   cd weather-app
   ```

3. **Run the project**:  
   Simply open the `index.html` file in your preferred browser. No need to run any server.


## Prerequisites

- A Clerk account
- An OpenWeather API key
- Node.js and npm installed

## Setup Instructions

### Step 1: Set Up OpenWeather API

1. **Create an OpenWeather Account**  
   Go to [OpenWeather](https://openweathermap.org/api) and sign up.

2. **Generate an API Key**  
   After signing up, generate an API key.

3. **Add the API Key to Your JavaScript File**  
   In your JavaScript file where you will be making API calls, add the following code:
   ```javascript
   const apiKey = '<your_openweather_api_key>';


### OR
## Environment Variables

Create a `.env` file in the root of your project directory:

And copy content of requirements.txt to the `.env` file.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeather API (for fetching weather data)
- **Geolocation**: The browser's built-in **Geolocation API** is used to get the user's current location.

## Deployment

The application is deployed on **Vercel**. Live Link: [https://your-weather-app.github.io]

## Contact

If you have any questions or want to contribute, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/shaswat-gusain-2924a324a) or via [Email](mailto:shaswatgusain1@gmail.com).

---
