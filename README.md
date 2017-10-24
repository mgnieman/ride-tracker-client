This is the front-end repo

Link to back-end repo: https://github.com/mgnieman/ride-tracker-api
Deployed GitHub site: https://mgnieman.github.io/ride-tracker-client/
Deployed Heroku site: https://ridetrackermn.herokuapp.com/

What the app does and how it works:
This app allows users to enter information from bicycle rides: date, distance & duration.  The information is stored in a database.  Users can add, update, edit & delete rides.

Technologies Used:  JavaScript, jQuery, API, AJAX

Wireframes - https://imgur.com/a/waKC9

User stories:
- As a signed-in user, I want to add/create a ride to my list of rides - including [date, distance, time, avg. speed] so that I can track my cycling progress.
- As a signed-in user, I want to view my full list of rides so that I can see if I've gotten faster over over time.
- As a signed-in user, I want to be able to edit/update a ride - either [date, distance, time, or avg. speed] so that I can fix an error with one or two fields.
- As a signed-in user, I want to delete a ride so that I can fix a row that is completely wrong and re-enter the info later.

Future Enhancements:
- Add an "Average Speed" column, calculated with Distance & Duration
- Link to a table called Routes, which stores user-provided route names
- Allow users to sort data from previous rides by week/month/time-since-chosen-date in order to:
  - view total distance ridden for chosen periods of time
  - compare avg. times & speeds for chosen periods of time
  - compare avg. times & speeds for given routes

Development story:
10.20
- Worked on authorization - sign up gave me a lot of trouble but eventually got help figuring out that I needed a function for `addHandlers` in `index.js`.  It's 4:24pm and I finally have sign-up, sign-in, change-password & sign-out all working correctly.

10.22
- Add buttons - "Add Ride" & "Clear Ride" and initial setup for handlebars.

10.23
- Added a form to add ride info (date, distance & duration) and updated the CREATE method to add the data to my resource.
- Added Delete buttons next to each ride entry
- Added an Edit button which, when selected, causes an edit form to display

10.24
- Add an "Update" button, which initiates user changes
- Added logic to clear forms after submit
- Fixed random bugs
- Deployed to prod.
