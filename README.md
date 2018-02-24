<h1>Weather forecast app</h1>
<p>A small single-page app that displays 5 days weather forecast for the city requested by user or taken from user's geolocation.</p>
<p><a href="https://olga-orlova-weather-app.herokuapp.com/" />Live demo on heroku</a></p>
<p>Once selected, city, forecast data and user settings (metric/imperial units) are saved to local storage. The updated forecast will be fetched in the background.<br />
The app is responsive, adapted for mobile screens.</p>
<h2>Technologies</h2>
<ul>
  <li><b>react + redux</b> for managing & displaying the data</li>
  <li><b>react-router-dom + react-router-redux</b> for navigating between the 2 pages of the app</li>
  <li><b>openweather-apis</b> for making calls to Openweathermap API</li>
  <li><b>city-reverse-geocoder</b> for converting user's geolocation into "city name, country code" format</li>
  <li><b>react-toggle-switch</b> for creating the UI toggle switch component</li>
  <li><b>moment.js</b> for determining & formatting the current time</li>
  <li><b>webpack</b> for bundling</li>
</ul>
<h2>How to run</h2>
<ul>
  <li><code>git clone</code> this awesome repo</li>
  <li><code>npm install</code></li>
  <li><code>npm run build && npm run start:dev</code></li>
  <li><code>localhost:3000</code> will automatically open in your default browser</li>
</ul>
