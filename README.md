
# Weather App - Next.js, React, Clerk, Tailwind CSS, and OpenWeatherMap API.

<img width="946" alt="mainpage" src="https://github.com/user-attachments/assets/c5609a91-7f74-450f-8c1a-3cd57c40e9db">

This project is a weather application built using **NEXJ.JS**, **Tailwind CSS**, **Clerk** and **OpenWeatherMap API**. It fetches real-time weather information from the **OpenWeather API** and displays it based on the user's current location or a manually searched city.

## Key Features
- **Automatic Location Detection**: Fetches weather data using the Geolocation API based on the user’s current location.
- **Manual City Search**: Allows users to search for weather information in any city.
- **Weather Details**: Displays real-time weather conditions, including temperature, wind speed, humidity, etc.
- **Authentication**: Integrates with Clerk for secure user sign-up and login.
- **Triggers for Violations**: Users can set triggers for specific weather conditions (e.g., temperature thresholds, rain alerts) and receive notifications when conditions are violated.
- **Responsive Design**: Tailwind CSS ensures a seamless user experience across devices.
- **Toggle Units**: Easily switch between Celsius and Fahrenheit for temperature display.

## Functionalities

### For Users:
- **Location-based Weather**: Automatically fetches and displays weather information for the user's current location upon app load.
- **City Search**: Users can manually search for and view weather data for any city globally.
- **Trigger Alerts**: Users can set custom weather triggers (e.g., temperature thresholds) and receive alerts when conditions are met.
- **User Authentication**: Secured login and sign-up functionality powered by Clerk.
- **Unit Toggle**: Easily switch between Celsius and Fahrenheit temperature units.

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

### Threshold:
<img width="929" alt="dashboardpage" src="https://github.com/user-attachments/assets/538e7e72-61f4-45be-9f0f-64fd392530f8">


---

## Project Setup

To clone and run this project, follow these steps:

### Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project folder**:
   ```bash
   cd weather-app
   ```

3. **Install dependencies**:  
   Run the following command to install necessary packages:
   ```bash
   npm install
   ```

4. **Run the project**:  
   Start the development server:
   ```bash
   npm run dev
   ```
   Then, open your browser and go to `http://localhost:3000`.

## Prerequisites

- A **Clerk account** for authentication.
- An **OpenWeather API key** to fetch weather data.
- **Node.js** and **npm** installed on your local machine.

## Setup Instructions

### Step 1: Set Up OpenWeather API

1. **Create an OpenWeather Account**  
   Go to [OpenWeather](https://openweathermap.org/api) and sign up for an account.

2. **Generate an API Key**  
   After signing up, generate your API key from the OpenWeather dashboard.

3. **Add the API Key to Environment Variables**  
   In the root of your project, create a `.env` file and add the following:
   ```bash
   NEXT_PUBLIC_OPENWEATHER_API_KEY=<your_openweather_api_key>
   ```
   

### Step 2: Set Up Clerk for Authentication

1. **Create a Clerk Account**  
   Go to [Clerk.dev](https://clerk.dev) and sign up for an account.

2. **Create a `.env` File**  
   In the root of your project directory, create a `.env` file if it doesn't already exist.

3. **Add the Clerk Keys**  
   In your `.env` file, add the following keys:
   ```bash
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api_key>
   NEXT_PUBLIC_CLERK_API_KEY=<your_clerk_api_key>
   ```

4. **Add Other Required Environment Variables**  
   Ensure that you also include your OpenWeather API key and any other required environment variables. Your `.env` file should look like this:
   ```bash
   NEXT_PUBLIC_OPENWEATHER_API_KEY=<your_openweather_api_key>
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api_key>
   NEXT_PUBLIC_CLERK_API_KEY=<your_clerk_api_key>
   ```

---

### OR
## Environment Variables

Create a `.env` file in the root of your project directory:

And copy content of requirements.txt (provided within the codebase) to the `.env` file.

## Credentials for login

Email: dummy@123gmail.com

Password: dummu@123

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **API**: OpenWeather API (for fetching weather data)
- **Authentication**: Clerk for user sign-up and login
- **Geolocation**: The browser's built-in Geolocation API to fetch the user’s current location.

---

## Contact

If you have any questions or want to contribute, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/shaswat-gusain-2924a324a) or via [Email](mailto:shaswatgusain1@gmail.com).

---
