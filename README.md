# Road Trip Weather Planner

##Description
Creating an application to help people with properly dressing for their road trips across the united states. When I search for a location then it will get added onto a list with the weather suggestion. 

##APIs
- Weather
- Google Maps

##User Story 
As a road tripper

I want to know the weather of the places that are along my road trip

so that i can properly pack my bags with the appropriate outfits

##Rough Breakdown of Tasks
- folder structure enforcement (everything should be lined up the same way, structurally within our data files)
- wireframe sketch of application design
- pseudocode to get idea of the inner workings 
- look into various css stylings and create html skeleton
- build code
- error checking
- presentation prep

##Acceptance Criteria

GIVEN a road trip weather planner
WHEN I search for a city at a specific timeframe
THEN I am presented with the weather conditions for the specified days and that city and it is added to my road trip AND depending on the temp range I will view a list of possible outfit items to wear
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I add a city to my road trip planner 
THEN I can also view the distance and time it'll take to drive between locations 

##MVP

In order to meet the requirements of having two seperate API's we are going to build an application that allows you to start planning a roadtrip that includes details about distance, time of travel, and the weather conditions for the total of days you plan to stay that include clothing suggestions to pack appropiate clothing. Each item that is added should appear on a list that our user can switch around and or click to then view the weather conditions and adjust how many days they will spend in that location. When a user first types a location then can enter the city 

- when a user first starts on this website they will be presented with a landing start page that will describe how it works and will also have a start button that will take the user to the next page
- the following page will be the roadtrip weather planner and it will first contain a date entry for when this trip will start and then two textboxes, the first to enter the current location and the second to enter the name of the city/place the user would like to travel to and right next to it should be an entry for the amount of days they would like to be there for, a save button, and finally there will be a plus button that will be attached to the last item of the roadtrip so that when it is clicked another textbox and duration entry appear and will then have attached the plus button (the plus button should only appear once on the page)
- in between each item that is added to this road trip will be seperate variables displaying the total time of travel from point A to B as well as the amount of distance it will take from each point
- once the save button is selected then we will conduct some error checking to ensure that a valid city was entered as well as a valid entry for the duration, once everything is valid then we will promptly display on the right hand side the geographical location of that city, the weather conditions during the calculated dates in the trip, and clothing suggestions all along with a new variable inbetween specifying the distance of miles and duration of travel
- each item within this road trip will be able to move and recalculate its distance variables and everytime you click on an item in the list then you will be presented again with all of its info for your road trip 

google search: "free" mapping api 







