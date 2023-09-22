# IT Crowd - Junior React Native Coding Challenge - NewsApp
Hi! This is a coding challenge for IT Crowd. I created a news application that:

- Displays real-time news using a news API (I used NewsAPI from newsapi.org ✓)
- The application should display a list of news articles. (done ✓)
- Allow users to touch an article to view more details and save favorite articles in a favorites section. (done ✓)

## Application Optional Features
NewsApp has the following optional features:

- Implement the solution using TypeScript: ✓
- Allows users to search for news by keyword:
  NewsApp shows the first 7 results found. ✓
- **Redux-toolkit** to manage application state:
  Used for general news, searched news and favourites news. ✓
- **RTK Query** to manage API calls and data:
  Used for fetching NewsAPI. ✓
- Implement smooth animations or transitions when switching views or hiding elements:
  I created a HOC that adds a fade animation to Home and FavScreen using Animated native API.
- Use **React Navigation** for screen navigation:
  Used Bottom Tab Navigator with Stack Navigators to navigate between general/searched news and favourites news.

## Most relevant libraries
- React Navigation
  Added Native Stack Navigator and Bottom Tab Navigator. In order to install this library I had to install: react-native-safe-area-context, screens and native.

- React-native-vector-icons
  This library was used for adding pretty icons from oblador.github.io/react-native-vector-icons/.
  It enhances UI experience.

- React-native-dotenv (devDependency)
  Used for adding news api key as an env var

- React-native-uuid
  Used for adding an ID to each newsData (General news data, favourite news data and searched news data). This allows NewsApp to identify and check if general news orsearched news are already added to favourites.

- React-redux & @reduxjs/toolkit
  Used for state managing in general news data, favourite news data and searched news data.

## Technologies Used
- React Native
- Typescript
- Redux-toolkit
- RTK Query

## How to initialize app in debug mode
To initialize this application, you have to install dependencies using:
- yarn install

After your dependencies installation, you have to add your api key into your .env file:
- Create .env file at root project location and write your api key:
  NEWS_APIKEY=your_api_key

Then initialize the app with:
- yarn android

## How to build an apk release
Before this, please make sure you have your api key into your .env file.
For an .apk release, you have to build it inside android folder:

- cd /news_app/android
- ./gradlew assembleRelease

Find your .apk file using
- cd /news_app/android/app/build/outputs/apk/release








