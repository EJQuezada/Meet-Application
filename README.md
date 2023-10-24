# Meet-Application
Meet is an application that uses React based tech stack to get a list of events hosted by city or in all cities.

## About

Meet App allows users to search for a city and get a list of events hosted in that city (or events in all cities). One chart shows how many events will take place in that city on upcoming days and another visualizes the popularity of event genres in the form of a pie chart. It is a progressive web application built with React using test-driven development (TDD) technique. The app works offline and it can be installed on both mobile devices and computers. Serverless functions are used(AWS Lambda) for the authorization server which generates authorization token(OAuth 2 token) needed in order to access the Google Calendar API and get events data. Scatter chart and pie chart are implemented to visualize data using the recharts library.

## Tech Stack
* React Native; 
* Recharts; 
* AWS Lamda; 
* serverless; 
* Jest;
* cucumber-jest; 
* Puppeteer; 
* Atatus;

## Features
* The following are main features from this application:
  1) Receive and send messages,
  2) Filter events by city,
  3) Show/hide event details,
  4) Specify number of events,
  5) Use app while offline, and
  6) Data visualization;
* Serverless functions deployed using AWS Lambda;
* Performs Oauth and accesses Google Calender API via serverless functions;
* React Recharts visualization library;
* Jest test scripting for unit and integration testing;
* Enzyme for shallow rendering unit tests;
* Enzyme for full rendering integration tests;
* Puppeteer for user acceptance and end-to-end testing;
* Progressive Web Application.

## Set up
* Run application by
    1) going to https://ejquezada.github.io/Meet-Application/
    2) sign in with Google account for authentication and authorization
    3) select city or start with default settings

