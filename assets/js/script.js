// Save reference to important DOM elements.
const formEl = document.querySelector("form");
const buttonContainer = document.querySelector("#btn-container");
const addStopBtn = document.querySelector("#add-stop-btn");
const resetBtn = document.querySelector("#reset-btn");
const saveBtn = document.querySelector("#save-btn");
const weatherForecastContainer = document.querySelector(".weather-forecast");

// Populate the list of autocomplete options for city input.
const getCityAutocomplete = function () {
    const options = {
        data: {
            "Abbeville": null, "Aberdeen": null, "Abilene": null, "Abingdon": null, "Abington": null, "Acoma": null, "Ada": null, "Adams": null, "Adrian": null, "Aiken": null, "Ajo": null, "Akron": null, "Alameda": null, "Alamogordo": null, "Alamosa": null, "Albany": null, "Albert Lea": null, "Albuquerque": null, "Alcoa": null, "Alexander City": null, "Alexandria": null, "Alhambra": null, "Aliquippa": null, "Allentown": null, "Alliance": null, "Alma": null, "Alpine": null, "Alta": null, "Alton": null, "Altoona": null, "Altus": null, "Alva": null, "Amana Colonies": null, "Amarillo": null, "Ambridge": null, "American Fork": null, "Americus": null, "Ames": null, "Amesbury": null, "Amherst": null, "Amsterdam": null, "Anaconda": null, "Anacortes": null, "Anadarko": null, "Anaheim": null, "Anchorage": null, "Andalusia": null, "Anderson": null, "Andersonville": null, "Andover": null, "Ann Arbor": null, "Annapolis": null, "Anniston": null, "Ansonia": null, "Antioch": null, "Apalachicola": null, "Appleton": null, "Arcadia": null, "Ardmore": null, "Arkadelphia": null, "Arkansas City": null, "Arkansas Post": null, "Arlington": null, "Arlington Heights": null, "Artesia": null, "Arthur": null, "Asbury Park": null, "Asheboro": null, "Asheville": null, "Ashland": null, "Ashtabula": null, "Aspen": null, "Astoria": null, "Atchison": null, "Athens": null, "Athol": null, "Atlanta": null, "Atlantic City": null, "Atmore": null, "Attleboro": null, "Auburn": null, "Augusta": null, "Aurora": null, "Austin": null, "Avondale": null, "Babylon": null, "Bainbridge": null, "Baker City": null, "Bakersfield": null, "Baltimore": null, "Bangor": null, "Bar Harbor": null, "Baraboo": null, "Barberton": null, "Barbourville": null, "Bardstown": null, "Barnstable": null, "Barre": null, "Barrington": null, "Barstow": null, "Bartlesville": null, "Bartow": null, "Bastrop": null, "Batavia": null, "Batesville": null, "Bath": null, "Baton Rouge": null, "Battle Creek": null, "Bay City": null, "Bay Saint Louis": null, "Bayonne": null, "Baytown": null, "Beacon": null, "Beatrice": null, "Beaufort": null, "Beaumont": null, "Beaverton": null, "Beckley": null, "Bedford": null, "Belen": null, "Belfast": null, "Belle Fourche": null, "Belle Glade": null, "Bellefontaine": null, "Belleville": null, "Bellevue": null, "Bellingham": null, "Bellows Falls": null, "Belmont": null, "Beloit": null, "Belvidere": null, "Bemidji": null, "Bend": null, "Bennington": null, "Benton": null, "Benton Harbor": null, "Berea": null, "Berkeley": null, "Berlin": null, "Bessemer": null, "Bethany": null, "Bethesda-Chevy Chase": null, "Bethlehem": null, "Beverly": null, "Beverly Hills": null, "Biddeford": null, "Big Spring": null, "Billings": null, "Biloxi": null, "Binghamton": null, "Birmingham": null, "Bisbee": null, "Bismarck": null, "Blackfoot": null, "Blairsville": null, "Bloomfield": null, "Bloomfield Hills": null, "Bloomington": null, "Bloomsburg": null, "Bluefield": null, "Blytheville": null, "Boca Raton": null, "Bogalusa": null, "Boise": null, "Bonners Ferry": null, "Boone": null, "Boonesborough": null, "Boonville": null, "Boothbay Harbor": null, "Bordentown": null, "Borger": null, "Bossier City": null, "Boston": null, "Boulder": null, "Boulder City": null, "Bound Brook": null, "Bountiful": null, "Bourne": null, "Bowie": null, "Bowling Green": null, "Boys Town": null, "Bozeman": null, "Bradenton": null, "Bradford": null, "Brainerd": null, "Braintree": null, "Branford": null, "Branson": null, "Brattleboro": null, "Brea": null, "Breckenridge": null, "Bremerton": null, "Bridgeport": null, "Bridgeton": null, "Brigham City": null, "Brighton": null, "Bristol": null, "Brockton": null, "Bronx": null, "Brookfield": null, "Brookings": null, "Brookline": null, "Brooklyn": null, "Brownsville": null, "Brunswick": null, "Bryan": null, "Buckhannon": null, "Buena Park": null, "Buffalo": null, "Burbank": null, "Burlington": null, "Burns": null, "Butte": null, "Cadillac": null, "Cahokia": null, "Cairo": null, "Calais": null, "Caldwell": null, "Calexico": null, "Calhoun": null, "Calistoga": null, "Calumet City": null, "Cambridge": null, "Camden": null, "Campbellsville": null, "Canon City": null, "Canton": null, "Canyon": null, "Cape Coral": null, "Cape Girardeau": null, "Cape May": null, "Carbondale": null, "Caribou": null, "Carlinville": null, "Carlisle": null, "Carlsbad": null, "Carmel": null, "Carrollton": null, "Carson City": null, "Carthage": null, "Casa Grande": null, "Casper": null, "Castine": null, "Catonsville": null, "Cedar City": null, "Cedar Falls": null, "Cedar Rapids": null, "Central City": null, "Central Falls": null, "Centralia": null, "Chadron": null, "Chambersburg": null, "Champaign": null, "Chandler": null, "Chanute": null, "Chapel Hill": null, "Charles City": null, "Charles Town": null, "Charleston": null, "Charlestown": null, "Charlevoix": null, "Charlotte": null, "Charlottesville": null, "Chattanooga": null, "Chautauqua": null, "Cheboygan": null, "Cheektowaga": null, "Chelmsford": null, "Chelsea": null, "Cherokee": null, "Chesapeake": null, "Chester": null, "Cheyenne": null, "Chicago": null, "Chicago Heights": null, "Chickasaw": null, "Chickasha": null, "Chico": null, "Chicopee": null, "Chillicothe": null, "Chula Vista": null, "Cicero": null, "Cincinnati": null, "Clanton": null, "Claremont": null, "Claremore": null, "Clarksburg": null, "Clarksdale": null, "Clarksville": null, "Clayton": null, "Clearfield": null, "Clearwater": null, "Cleburne": null, "Cleveland": null, "Cleveland Heights": null, "Clifton": null, "Climax": null, "Clinton": null, "Clovis": null, "Cocoa Beach": null, "Cocoa-Rockledge": null, "Cody": null, "Coeur d’Alene": null, "Coffeyville": null, "Cohasset": null, "Cohoes": null, "College Park": null, "College Station": null, "Collinsville": null, "Colorado Springs": null, "Columbia": null, "Columbus": null, "Compton": null, "Concord": null, "Coney Island": null, "Conneaut": null, "Connersville": null, "Conway": null, "Cookeville": null, "Cooperstown": null, "Coos Bay": null, "Coral Gables": null, "Cordova": null, "Corinth": null, "Corning": null, "Corona": null, "Coronado": null, "Corpus Christi": null, "Cortez": null, "Cortland": null, "Corvallis": null, "Corydon": null, "Costa Mesa": null, "Coulee Dam": null, "Council Bluffs": null, "Council Grove": null, "Coupeville": null, "Coventry": null, "Covington": null, "Cranford": null, "Cranston": null, "Crawfordsville": null, "Cripple Creek": null, "Crookston": null, "Crossett": null, "Crown Point": null, "Crystal City": null, "Cullman": null, "Culver City": null, "Cumberland": null, "Cushing": null, "Custer": null, "Cuyahoga Falls": null, "Dahlonega": null, "Dallas": null, "Dalton": null, "Daly City": null, "Danbury": null, "Danvers": null, "Danville": null, "Darien": null, "Darlington": null, "Dartmouth": null, "Davenport": null, "Davis": null, "Dayton": null, "Daytona Beach": null, "De Land": null, "De Smet": null, "Deadwood": null, "Dearborn": null, "Decatur": null, "Dedham": null, "Deerfield Beach": null, "Defiance": null, "DeKalb": null, "Del Rio": null, "Delaware": null, "Delray Beach": null, "Delta": null, "Deming": null, "Demopolis": null, "Denison": null, "Dennis": null, "Denton": null, "Denver": null, "Derby": null, "Derry": null, "Des Moines": null, "Des Plaines": null, "Detroit": null, "Devils Lake": null, "Dickinson": null, "Dillon": null, "Dixon": null, "Dodge City": null, "Dothan": null, "Douglas": null, "Dover": null, "Downey": null, "Dubuque": null, "Duluth": null, "Duncan": null, "Dunkirk": null, "Durango": null, "Durant": null, "Durham": null, "Duxbury": null, "Eagle Pass": null, "East Aurora": null, "East Chicago": null, "East Cleveland": null, "East Greenwich": null, "East Hampton": null, "East Hartford": null, "East Haven": null, "East Lansing": null, "East Liverpool": null, "East Moline": null, "East Orange": null, "East Point": null, "East Providence": null, "East Saint Louis": null, "Eastchester": null, "Eastham": null, "Easton": null, "Eastpointe": null, "Eastport": null, "Eau Claire": null, "Ecorse": null, "Edenton": null, "Edgartown": null, "Edinburg": null, "Edison": null, "Edmond": null, "Effingham": null, "El Centro": null, "El Cerrito": null, "El Dorado": null, "El Monte": null, "El Paso": null, "El Reno": null, "Elgin": null, "Elizabeth": null, "Elizabeth City": null, "Elizabethton": null, "Elizabethtown": null, "Elk City": null, "Elkhart": null, "Elkins": null, "Elko": null, "Elkton": null, "Ellensburg": null, "Ellsworth": null, "Elmhurst": null, "Elmira": null, "Elwood": null, "Ely": null, "Elyria": null, "Emmitsburg": null, "Emporia": null, "Enfield": null, "Englewood": null, "Enid": null, "Enterprise": null, "Ephrata": null, "Erie": null, "Escanaba": null, "Escondido": null, "Essex": null, "Estes Park": null, "Estherville": null, "Euclid": null, "Eufaula": null, "Eugene": null, "Eureka": null, "Evanston": null, "Evansville": null, "Eveleth": null, "Everett": null, "Excelsior Springs": null, "Exeter": null, "Fairbanks": null, "Fairfax": null, "Fairfield": null, "Fairhaven": null, "Fairmont": null, "Fall River": null, "Fallon": null, "Falls Church": null, "Falmouth": null, "Fargo": null, "Faribault": null, "Farmington": null, "Fayetteville": null, "Fergus Falls": null, "Ferguson": null, "Fernandina Beach": null, "Fillmore": null, "Findlay": null, "Fitchburg": null, "Fitzgerald": null, "Flagstaff": null, "Flint": null, "Florence": null, "Florissant": null, "Flushing": null, "Fond du Lac": null, "Fontana": null, "Forest Hills": null, "Forrest City": null, "Fort Benton": null, "Fort Collins": null, "Fort Dodge": null, "Fort Kent": null, "Fort Lauderdale": null, "Fort Lee": null, "Fort Morgan": null, "Fort Myers": null, "Fort Payne": null, "Fort Pierce": null, "Fort Scott": null, "Fort Smith": null, "Fort Valley": null, "Fort Walton Beach": null, "Fort Wayne": null, "Fort Worth": null, "Framingham": null, "Frankfort": null, "Franklin": null, "Frederick": null, "Fredericksburg": null, "Fredonia": null, "Freeport": null, "Fremont": null, "French Lick": null, "Fresno": null, "Fullerton": null, "Fulton": null, "Gadsden": null, "Gaffney": null, "Gainesville": null, "Galena": null, "Galesburg": null, "Gallatin": null, "Gallipolis": null, "Gallup": null, "Galveston": null, "Garden City": null, "Garden Grove": null, "Gardiner": null, "Garland": null, "Gary": null, "Gastonia": null, "Gatlinburg": null, "Geneva": null, "Genoa": null, "Georgetown": null, "Germantown": null, "Gettysburg": null, "Gila Bend": null, "Gillette": null, "Glassboro": null, "Glen Ellyn": null, "Glendale": null, "Glendive": null, "Glens Falls": null, "Glenview": null, "Glenwood Springs": null, "Globe": null, "Gloucester": null, "Gloversville": null, "Golden": null, "Goldfield": null, "Goldsboro": null, "Goliad": null, "Goshen": null, "Grafton": null, "Grand Forks": null, "Grand Haven": null, "Grand Island": null, "Grand Junction": null, "Grand Rapids": null, "Granite City": null, "Grants": null, "Grants Pass": null, "Grayling": null, "Great Barrington": null, "Great Bend": null, "Great Falls": null, "Great Neck": null, "Greeley": null, "Green Bay": null, "Green River": null, "Greenbelt": null, "Greeneville": null, "Greenfield": null, "Greensboro": null, "Greensburg": null, "Greenville": null, "Greenwich": null, "Greenwood": null, "Grenada": null, "Gretna": null, "Grinnell": null, "Grosse Pointe": null, "Groton": null, "Guilford": null, "Gulfport": null, "Gunnison": null, "Guntersville": null, "Guthrie": null, "Guymon": null, "Hackensack": null, "Haddonfield": null, "Hagerstown": null, "Haines": null, "Halifax": null, "Hallandale Beach": null, "Hamden": null, "Hamilton": null, "Hammond": null, "Hammondsport": null, "Hampton": null, "Hanalei": null, "Hancock": null, "Hannibal": null, "Hanover": null, "Harlan": null, "Harlem": null, "Harlingen": null, "Harmony": null, "Harpers Ferry": null, "Harrisburg": null, "Harrison": null, "Harrodsburg": null, "Hartford": null, "Hartsville": null, "Harwich": null, "Hastings": null, "Hattiesburg": null, "Haverhill": null, "Havre": null, "Hays": null, "Hayward": null, "Hazard": null, "Hazleton": null, "Heber City": null, "Helena": null, "Hempstead": null, "Henderson": null, "Herkimer": null, "Herrin": null, "Hershey": null, "Hialeah": null, "Hibbing": null, "Hickory": null, "High Point": null, "Highland Park": null, "Hillsboro": null, "Hillsborough": null, "Hilo": null, "Hingham": null, "Hinton": null, "Hobart": null, "Hobbs": null, "Hoboken": null, "Hodgenville": null, "Holdenville": null, "Holland": null, "Holly Springs": null, "Hollywood": null, "Holyoke": null, "Homer": null, "Homestead": null, "Honaunau": null, "Honesdale": null, "Honolulu": null, "Hood River": null, "Hope": null, "Hopewell": null, "Hopkinsville": null, "Hoquiam": null, "Hot Springs": null, "Houghton": null, "Houlton": null, "Houma": null, "Houston": null, "Hudson": null, "Hugo": null, "Huntington": null, "Huntington Beach": null, "Huntsville": null, "Huron": null, "Hutchinson": null, "Hyannis": null, "Hyattsville": null, "Hyde Park": null, "Idaho City": null, "Idaho Falls": null, "Ilion": null, "Independence": null, "Indiana": null, "Indianapolis": null, "Indianola": null, "Indio": null, "Inglewood": null, "Interlochen": null, "International Falls": null, "Iowa City": null, "Ipswich": null, "Iron Mountain": null, "Ironwood": null, "Irvine": null, "Irving": null, "Irvington": null, "Ishpeming": null, "Ithaca": null, "Jackson": null, "Jacksonville": null, "Jamestown": null, "Janesville": null, "Jasper": null, "Jeannette": null, "Jefferson City": null, "Jeffersonville": null, "Jersey City": null, "Jim Thorpe": null, "John Day": null, "Johnson City": null, "Johnstown": null, "Joliet": null, "Jonesboro": null, "Jonesborough": null, "Joplin": null, "Junction City": null, "Juneau": null, "Kahului": null, "Kalamazoo": null, "Kalispell": null, "Kanab": null, "Kaneohe": null, "Kankakee": null, "Kansas City": null, "Kapaa": null, "Kaskaskia": null, "Kawaihae": null, "Kearney": null, "Keene": null, "Kellogg": null, "Kelso": null, "Kennebunkport": null, "Kennewick": null, "Kenosha": null, "Kent": null, "Keokuk": null, "Ketchikan": null, "Kettering": null, "Kewanee": null, "Key West": null, "Keyser": null, "Kilgore": null, "Killeen": null, "Kingman": null, "Kingsport": null, "Kingston": null, "Kingsville": null, "Kinston": null, "Kirksville": null, "Kittery": null, "Kitty Hawk": null, "Klamath Falls": null, "Knoxville": null, "Kodiak": null, "Kokomo": null, "Kotzebue": null, "La Crosse": null, "La Grande": null, "La Grange": null, "La Habra": null, "La Junta": null, "La Salle": null, "Lackawanna": null, "Laconia": null, "Lafayette": null, "Laguna Beach": null, "Lahaina": null, "Laie": null, "Lake Charles": null, "Lake City": null, "Lake Forest": null, "Lake Geneva": null, "Lake Havasu City": null, "Lake Oswego": null, "Lake Placid": null, "Lake Wales": null, "Lakehurst": null, "Lakeland": null, "Lakeview": null, "Lakewood": null, "Lamar": null, "Lancaster": null, "Lander": null, "Lansing": null, "Laramie": null, "Laredo": null, "Largo": null, "Las Cruces": null, "Las Vegas": null, "Laurel": null, "Lawrence": null, "Lawton": null, "Layton": null, "Lead": null, "Leadville": null, "Leavenworth": null, "Lebanon": null, "Lehi": null, "Lenox": null, "Leominster": null, "Levittown": null, "Lewes": null, "Lewisburg": null, "Lewiston": null, "Lewistown": null, "Lexington": null, "Liberal": null, "Libertyville": null, "Lima": null, "Lincoln": null, "Lisle": null, "Litchfield": null, "Little Falls": null, "Little Rock": null, "Littleton": null, "Livermore": null, "Livingston": null, "Livonia": null, "Lock Haven": null, "Lockport": null, "Lodi": null, "Logan": null, "Lombard": null, "Lompoc": null, "Long Beach": null, "Long Branch": null, "Longmont": null, "Longview": null, "Lorain": null, "Los Alamos": null, "Los Angeles": null, "Louisville": null, "Loveland": null, "Lovington": null, "Lowell": null, "Lower Southampton": null, "Lubbock": null, "Lubec": null, "Ludington": null, "Ludlow": null, "Lufkin": null, "Lumberton": null, "Lynchburg": null, "Lynn": null, "Machias": null, "Mackinaw City": null, "Macomb": null, "Macon": null, "Madison": null, "Magnolia": null, "Malden": null, "Malibu": null, "Mamaroneck": null, "Manassas": null, "Manchester": null, "Mandan": null, "Manhattan": null, "Manistee": null, "Manitowoc": null, "Mankato": null, "Mansfield": null, "Manti": null, "Marblehead": null, "Marietta": null, "Marinette": null, "Marion": null, "Marlborough": null, "Marquette": null, "Marshall": null, "Martinez": null, "Martins Ferry": null, "Martinsburg": null, "Martinsville": null, "Marysville": null, "Maryville": null, "Mason City": null, "Massena": null, "Massillon": null, "Mattoon": null, "Mayfield": null, "Maysville": null, "McAlester": null, "McAllen": null, "McCook": null, "McKeesport": null, "McKinney": null, "McMinnville": null, "McPherson": null, "Meadville": null, "Medford": null, "Medicine Lodge": null, "Melbourne": null, "Memphis": null, "Menasha": null, "Menlo Park": null, "Menominee": null, "Mentor": null, "Merced": null, "Meriden": null, "Meridian": null, "Mesa": null, "Mesquite": null, "Mexico": null, "Miami": null, "Miami Beach": null, "Michigan City": null, "Middlebury": null, "Middlesboro": null, "Middletown": null, "Midland": null, "Midwest City": null, "Milan": null, "Milbank": null, "Miles City": null, "Milford": null, "Millburn": null, "Milledgeville": null, "Millville": null, "Milton": null, "Milwaukee": null, "Minden": null, "Mineola": null, "Minneapolis": null, "Minot": null, "Mishawaka": null, "Mission": null, "Missoula": null, "Mitchell": null, "Moab": null, "Mobile": null, "Mobridge": null, "Modesto": null, "Moline": null, "Monett": null, "Monmouth": null, "Monroe": null, "Monroeville": null, "Montclair": null, "Monterey": null, "Montgomery": null, "Monticello": null, "Montpelier": null, "Montrose": null, "Moore": null, "Moorhead": null, "Morehead City": null, "Morgan City": null, "Morganton": null, "Morgantown": null, "Morrilton": null, "Morristown": null, "Moscow": null, "Moses Lake": null, "Moundsville": null, "Mount Clemens": null, "Mount Holly": null, "Mount Pleasant": null, "Mount Vernon": null, "Mountain View": null, "Muncie": null, "Mundelein": null, "Murfreesboro": null, "Murray": null, "Muscatine": null, "Muskegon": null, "Muskogee": null, "Myrtle Beach": null, "Mystic": null, "Nacogdoches": null, "Nags Head": null, "Nahant": null, "Nampa": null, "Nanticoke": null, "Napa": null, "Naperville": null, "Naples": null, "Nappanee": null, "Narragansett": null, "Nashua": null, "Nashville": null, "Natchez": null, "Natchitoches": null, "Natick": null, "Naugatuck": null, "Nauvoo": null, "Nebraska City": null, "Needles": null, "Neenah": null, "Neosho": null, "Nephi": null, "New Albany": null, "New Bedford": null, "New Bern": null, "New Braunfels": null, "New Britain": null, "New Brunswick": null, "New Castle": null, "New Glarus": null, "New Harmony": null, "New Haven": null, "New Hope": null, "New Iberia": null, "New Kensington": null, "New London": null, "New Madrid": null, "New Market": null, "New Martinsville": null, "New Milford": null, "New Orleans": null, "New Paltz": null, "New Philadelphia": null, "New Rochelle": null, "New Smyrna Beach": null, "New Ulm": null, "New Windsor": null, "New York City": null, "Newark": null, "Newberg": null, "Newburgh": null, "Newburyport": null, "Newcastle": null, "Newport": null, "Newport Beach": null, "Newport News": null, "Newton": null, "Niagara Falls": null, "Niles": null, "Nogales": null, "Nome": null, "Norfolk": null, "Normal": null, "Norman": null, "Norris": null, "Norristown": null, "North Adams": null, "North Chicago": null, "North College Hill": null, "North Haven": null, "North Hempstead": null, "North Kingstown": null, "North Las Vegas": null, "North Little Rock": null, "North Platte": null, "Northampton": null, "Northfield": null, "Norton": null, "Norwalk": null, "Norwich": null, "Norwood": null, "Novato": null, "Nyack": null, "Oak Harbor": null, "Oak Park": null, "Oak Ridge": null, "Oakland": null, "Oberlin": null, "Ocala": null, "Ocean City": null, "Ocean Springs": null, "Oceanside": null, "Oconto": null, "Odessa": null, "Ogden": null, "Ogdensburg": null, "Oil City": null, "Ojai": null, "Oklahoma City": null, "Okmulgee": null, "Olathe": null, "Old Saybrook": null, "Olean": null, "Olympia": null, "Omaha": null, "Oneida": null, "Oneonta": null, "Ontario": null, "Opelika": null, "Opelousas": null, "Oraibi": null, "Orange": null, "Orangeburg": null, "Orderville": null, "Oregon": null, "Oregon City": null, "Orem": null, "Orlando": null, "Ormond Beach": null, "Orono": null, "Oroville": null, "Osawatomie": null, "Osceola": null, "Oshkosh": null, "Oskaloosa": null, "Ossining": null, "Oswego": null, "Ottawa": null, "Ottumwa": null, "Ouray": null, "Overland Park": null, "Owatonna": null, "Owensboro": null, "Oxford": null, "Oxnard": null, "Oyster Bay": null, "Ozark": null, "Pacific Grove": null, "Paducah": null, "Pagosa Springs": null, "Painesville": null, "Palatine": null, "Palatka": null, "Palm Bay": null, "Palm Beach": null, "Palm Springs": null, "Palmdale": null, "Palmer": null, "Palmyra": null, "Palo Alto": null, "Pampa": null, "Panama City": null, "Panguitch": null, "Paris": null, "Park City": null, "Park Forest": null, "Park Ridge": null, "Parkersburg": null, "Parma": null, "Parsippany–Troy Hills": null, "Pasadena": null, "Pascagoula": null, "Pasco": null, "Pass Christian": null, "Passaic": null, "Paterson": null, "Pauls Valley": null, "Pawhuska": null, "Pawtucket": null, "Payson": null, "Peabody": null, "Pecos": null, "Peekskill": null, "Pekin": null, "Pendleton": null, "Pensacola": null, "Peoria": null, "Perry": null, "Perth Amboy": null, "Peru": null, "Peshtigo": null, "Petaluma": null, "Peterborough": null, "Petersburg": null, "Petoskey": null, "Pharr": null, "Phenix City": null, "Philadelphia": null, "Philippi": null, "Phoenix": null, "Phoenixville": null, "Pierre": null, "Pine Bluff": null, "Pinehurst": null, "Pipestone": null, "Piqua": null, "Pittsburg": null, "Pittsburgh": null, "Pittsfield": null, "Plainfield": null, "Plains": null, "Plainview": null, "Plano": null, "Plattsburgh": null, "Plattsmouth": null, "Plymouth": null, "Pocatello": null, "Point Pleasant": null, "Point Roberts": null, "Pomona": null, "Pompano Beach": null, "Ponca City": null, "Pontiac": null, "Port Angeles": null, "Port Arthur": null, "Port Gibson": null, "Port Hueneme": null, "Port Huron": null, "Port Lavaca": null, "Port Orford": null, "Port Washington": null, "Portage": null, "Portales": null, "Portland": null, "Portsmouth": null, "Potsdam": null, "Pottstown": null, "Pottsville": null, "Poughkeepsie": null, "Powell": null, "Prairie du Chien": null, "Prescott": null, "Presque Isle": null, "Price": null, "Prichard": null, "Priest River": null, "Princeton": null, "Prineville": null, "Providence": null, "Provincetown": null, "Provo": null, "Pryor": null, "Pueblo": null, "Pullman": null, "Put-in-Bay": null, "Puyallup": null, "Queens": null, "Quincy": null, "Racine": null, "Raleigh": null, "Rancho Cucamonga": null, "Randolph": null, "Rantoul": null, "Rapid City": null, "Raton": null, "Rawlins": null, "Reading": null, "Red Bluff": null, "Red Cloud": null, "Red Wing": null, "Redding": null, "Redlands": null, "Redmond": null, "Redondo Beach": null, "Redwood City": null, "Reedsport": null, "Reno": null, "Rensselaer": null, "Renton": null, "Reston": null, "Revere": null, "Rexburg": null, "Rhinelander": null, "Richardson": null, "Richland": null, "Richmond": null, "Ridgewood": null, "Ripon": null, "River Forest": null, "Riverside": null, "Riverton": null, "Roanoke": null, "Rochester": null, "Rock Hill": null, "Rock Island": null, "Rock Springs": null, "Rockford": null, "Rockland": null, "Rockville": null, "Rocky Mount": null, "Rogers": null, "Rolla": null, "Rome": null, "Romney": null, "Roseburg": null, "Roselle": null, "Roseville": null, "Roswell": null, "Rotterdam": null, "Royal Oak": null, "Rugby": null, "Rumford": null, "Ruston": null, "Rutherford": null, "Rutland": null, "Rye": null, "Saco": null, "Sacramento": null, "Sag Harbor": null, "Saginaw": null, "Saint Albans": null, "Saint Augustine": null, "Saint Charles": null, "Saint Cloud": null, "Saint George": null, "Saint Ignace": null, "Saint Johnsbury": null, "Saint Joseph": null, "Saint Louis": null, "Saint Martinville": null, "Saint Marys City": null, "Saint Paul": null, "Saint Petersburg": null, "Sainte Genevieve": null, "Salem": null, "Salina": null, "Salinas": null, "Salisbury": null, "Sallisaw": null, "Salt Lake City": null, "San Angelo": null, "San Antonio": null, "San Bernardino": null, "San Clemente": null, "San Diego": null, "San Felipe": null, "San Fernando": null, "San Francisco": null, "San Gabriel": null, "San Jose": null, "San Juan Capistrano": null, "San Leandro": null, "San Luis Obispo": null, "San Marcos": null, "San Marino": null, "San Mateo": null, "San Pedro": null, "San Rafael": null, "San Simeon": null, "Sand Springs": null, "Sandusky": null, "Sandwich": null, "Sanford": null, "Santa Ana": null, "Santa Barbara": null, "Santa Clara": null, "Santa Clarita": null, "Santa Claus": null, "Santa Cruz": null, "Santa Fe": null, "Santa Monica": null, "Santa Rosa": null, "Sapulpa": null, "Saranac Lake": null, "Sarasota": null, "Saratoga Springs": null, "Saugus": null, "Sauk Centre": null, "Sault Sainte Marie": null, "Sausalito": null, "Savannah": null, "Scarborough": null, "Scarsdale": null, "Schenectady": null, "Scottsboro": null, "Scottsdale": null, "Scranton": null, "Searcy": null, "Seaside": null, "Seattle": null, "Sebring": null, "Sedalia": null, "Selma": null, "Seminole": null, "Seneca Falls": null, "Seward": null, "Seymour": null, "Shaker Heights": null, "Shamokin": null, "Sharon": null, "Shawnee": null, "Shawneetown": null, "Sheboygan": null, "Sheffield": null, "Shelby": null, "Shelbyville": null, "Shelton": null, "Shepherdstown": null, "Sheridan": null, "Sherman": null, "Shiprock": null, "Shreveport": null, "Sidney": null, "Sierra Vista": null, "Silver City": null, "Silver Spring": null, "Silverton": null, "Simi Valley": null, "Simsbury": null, "Sioux City": null, "Sioux Falls": null, "Sitka": null, "Skagway": null, "Skokie": null, "Smith Center": null, "Smyrna": null, "Socorro": null, "Somersworth": null, "Somerville": null, "Sonoma": null, "South Bend": null, "South Charleston": null, "South Hadley": null, "South Holland": null, "South Kingstown": null, "South Orange Village": null, "South Saint Paul": null, "South San Francisco": null, "Southampton": null, "Southington": null, "Spanish Fork": null, "Sparks": null, "Spartanburg": null, "Spearfish": null, "Spokane": null, "Spring Green": null, "Springfield": null, "Springville": null, "Stamford": null, "Starkville": null, "State College": null, "Staten Island": null, "Staunton": null, "Steamboat Springs": null, "Sterling": null, "Steubenville": null, "Stevens Point": null, "Stillwater": null, "Stockbridge": null, "Stockton": null, "Stonington": null, "Stony Brook": null, "Stony Point": null, "Stoughton": null, "Stratford": null, "Streator": null, "Stroudsburg": null, "Sturbridge": null, "Sturgeon Bay": null, "Sturgis": null, "Stuttgart": null, "Sudbury": null, "Suffolk": null, "Summersville": null, "Summit": null, "Sumter": null, "Sun Valley": null, "Sunbury": null, "Sunnyvale": null, "Superior": null, "Susanville": null, "Swarthmore": null, "Sweetwater": null, "Sylacauga": null, "Syracuse": null, "Tacoma": null, "Tahlequah": null, "Takoma Park": null, "Talladega": null, "Tallahassee": null, "Tamaqua": null, "Tampa": null, "Taos": null, "Tarpon Springs": null, "Tarrytown": null, "Taunton": null, "Telluride": null, "Tempe": null, "Temple": null, "Ten Sleep": null, "Terre Haute": null, "Tewksbury": null, "Texarkana": null, "Texas City": null, "The Dalles": null, "The Village": null, "Thermopolis": null, "Thibodaux": null, "Thousand Oaks": null, "Ticonderoga": null, "Tiffin": null, "Tillamook": null, "Titusville": null, "Tiverton": null, "Toccoa": null, "Toledo": null, "Tombstone": null, "Tonawanda": null, "Tooele": null, "Topeka": null, "Torrance": null, "Torrington": null, "Totowa": null, "Towson": null, "Traverse City": null, "Trenton": null, "Trinidad": null, "Troy": null, "Truro": null, "Truth or Consequences": null, "Tucson": null, "Tucumcari": null, "Tullahoma": null, "Tulsa": null, "Tupelo": null, "Turlock": null, "Tuscaloosa": null, "Tuscumbia": null, "Tuskegee": null, "Twin Falls": null, "Tyler": null, "Ukiah": null, "Union": null, "Union City": null, "Uniontown": null, "Urbana": null, "Utica": null, "Uvalde": null, "Vail": null, "Valdez": null, "Valdosta": null, "Vallejo": null, "Valley City": null, "Valparaiso": null, "Van Buren": null, "Vancouver": null, "Vandalia": null, "Venice": null, "Ventura": null, "Vermillion": null, "Vernal": null, "Vicksburg": null, "Victoria": null, "Victorville": null, "Vincennes": null, "Vineland": null, "Vinita": null, "Virden": null, "Virginia": null, "Virginia Beach": null, "Virginia City": null, "Visalia": null, "Wabash": null, "Waco": null, "Wahiawa": null, "Wahpeton": null, "Wailuku": null, "Waimea": null, "Walla Walla": null, "Wallingford": null, "Walnut Creek": null, "Walpi": null, "Walsenburg": null, "Warm Springs": null, "Warner Robins": null, "Warren": null, "Warrensburg": null, "Warwick": null, "Washington": null, "Waterbury": null, "Waterford": null, "Waterloo": null, "Watertown": null, "Waterville": null, "Watervliet": null, "Watkins Glen": null, "Watts": null, "Waukegan": null, "Waukesha": null, "Wausau": null, "Wauwatosa": null, "Waycross": null, "Wayne": null, "Waynesboro": null, "Weatherford": null, "Webster": null, "Webster City": null, "Weehawken": null, "Weirton": null, "Welch": null, "Wellesley": null, "Wellfleet": null, "Wellsburg": null, "Wenatchee": null, "West Allis": null, "West Bend": null, "West Bridgewater": null, "West Chester": null, "West Covina": null, "West Des Moines": null, "West Hartford": null, "West Haven": null, "West Lafayette": null, "West Memphis": null, "West New York": null, "West Orange": null, "West Palm Beach": null, "West Plains": null, "West Point": null, "West Seneca": null, "West Springfield": null, "Westerly": null, "Westfield": null, "Westminster": null, "Weston": null, "Westport": null, "Wethersfield": null, "Wewoka": null, "Weymouth": null, "Wheaton": null, "Wheeling": null, "White Plains": null, "White Springs": null, "White Sulphur Springs": null, "Whitman": null, "Whittier": null, "Wichita": null, "Wichita Falls": null, "Wickford": null, "Wilkes-Barre": null, "Williamsburg": null, "Williamson": null, "Williamsport": null, "Williamstown": null, "Willimantic": null, "Willingboro": null, "Williston": null, "Willmar": null, "Wilmette": null, "Wilmington": null, "Wilson": null, "Winchester": null, "Windham": null, "Window Rock": null, "Windsor": null, "Windsor Locks": null, "Winnemucca": null, "Winnetka": null, "Winona": null, "Winooski": null, "Winslow": null, "Winsted": null, "Winston-Salem": null, "Winter Haven": null, "Winter Park": null, "Wisconsin Dells": null, "Woburn": null, "Wood River": null, "Woodbridge": null, "Woodland": null, "Woods Hole": null, "Woodstock": null, "Woodward": null, "Woonsocket": null, "Wooster": null, "Worcester": null, "Worland": null, "Worthington": null, "Wyandotte": null, "Xenia": null, "Yakima": null, "Yankton": null, "Yazoo City": null, "Yellow Springs": null, "Yonkers": null, "Yorba Linda": null, "York": null, "Youngstown": null, "Ypsilanti": null, "Ysleta": null, "Yuba City": null, "Yuma": null, "Zanesville": null, "Zion": null
        },
        limit: 5,
        minLength: 1
    }
    const cityInputEl = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(cityInputEl, options);
}

// Create and render the select options for state input.
const handleStateOptions = function () {
    const stateSelectEl = document.querySelectorAll("select");

    const states = [
        "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ]

    for (let i = 0; i < stateSelectEl.length; i++) {
        const currentSelectEl = stateSelectEl[i];
        for (let j = 0; j < states.length; j++) {
            const currentState = states[j];
            const option = document.createElement("option");
            option.setAttribute("value", currentState);
            option.textContent = currentState;
            currentSelectEl.append(option);
        };
    }
    M.FormSelect.init(stateSelectEl);
};

// The insertInputRow function creates a new input row in the form.
const insertInputRow = function (event) {
    event.preventDefault();

    const inputRowEl = document.querySelectorAll("#input-row");

    const lastStopNum = parseInt(inputRowEl[inputRowEl.length - 1].children[0].innerText.substring(5));
    const newStopNum = lastStopNum + 1;

    const newInputRow = document.createElement("div");
    newInputRow.classList = "row";
    newInputRow.id = "input-row";
    newInputRow.innerHTML =
        `
<p>Stop ${newStopNum}</p>
<div class="input-field col s4">
    <label class="active" for="city-${newStopNum}">
        City:
    </label>
    <input class="autocomplete" type="text" name="city-${newStopNum}" placeholder="Enter city">
</div>
<div class="input-field col s4">
    <label class="active" for="state-${newStopNum}">
        State:
    </label>
    <select>
        <option value="" disabled selected>Choose state</option>
    </select>
</div>
<div class="input-field col s4">
    <label class="active" for="state-${newStopNum}">
        Length of Stay (day):
    </label>
    <input type="number" min="0" name="days-${newStopNum}" placeholder="How many days">
</div>
`
    formEl.insertBefore(newInputRow, buttonContainer);

    getCityAutocomplete();
}

// The resetForm function resets the form to its default format.
const resetForm = function (event) {
    event.preventDefault();

    formEl.innerHTML = "";
    formEl.innerHTML =
        `
<div class="row" id="input-row">
    <p>Departure Date</p>
    <div class="input-field col s12">
        <input id="departure-date" type="date" name="departure-date" class="validate">
    </div>
</div>

<div class="row" id="input-row">
    <p>Starting Point</p>
    <div class="input-field col s4">
        <label class="active" for="city-0">
            City:
        </label>
        <input class="autocomplete" type="text" name="city-0" placeholder="Enter city">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-0">
            State:
        </label>
        <select>
            <option value="" disabled selected>Choose state</option>
        </select>
    </div>
    <div class="input-field col s4">
        <label class="active" for="day-0">
            Length of Stay (day):
        </label>
        <input id="day" type="number" min="0" name="day-0" placeholder="How many days">
    </div>
</div>

<div class="row" id="input-row">
    <p>Stop 1</p>
    <div class="input-field col s4">
        <label class="active" for="city-1">
            City:
        </label>
        <input class="autocomplete" type="text" name="city-1" placeholder="Enter city">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-1">
            State:
        </label>
        <select>
            <option value="" disabled selected>Choose state</option>
        </select>
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-1">
            Length of Stay (day):
        </label>
        <input id="day" type="number" min="0" name="days-1" placeholder="How many days">
    </div>
</div>

<div class="row" id="btn-container">
    <button class="button" id="add-stop-btn">+ Add Stop</button>
    <button class="button" id="reset-btn">Reset Form</button>
    <button class="button" id="save-btn" type="submit">Save</button>
</div>
`
};

// The getCityWeather function requests weather information for each city from the third api.
const getCityWeather = async function (dateInputVal, cityInputVal, stateInputVal, dayInputVal, daySum, coordinate) {
    const dateObj = new Date(dateInputVal);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const numOfDays = parseInt(dayInputVal);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '30f72d6795msh68cc89a67fcb9e7p1c5c49jsn45bfacd7bd58',
            'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
        }
    };

    if (numOfDays === 0) {
        const dateForURL = dateObj.toISOString().split(".")[0];
        const requestURL = 'https://dark-sky.p.rapidapi.com/' + coordinate + ',' + dateForURL + '?units=uk2';

        const response = await fetch(requestURL, options);
        console.log(response);
        if (!response.ok) {
            console.error(error);
        };
        const data = await response.json();
        console.log(data);

        const tempMin = Math.round((data.daily.data[0].temperatureMin * 9 / 5) + 32);
        const tempMax = Math.round((data.daily.data[0].temperatureMax * 9 / 5) + 32);
        const humidity = data.daily.data[0].humidity * 100;
        const windSpeed = data.daily.data[0].windSpeed;

        weatherForecastContainer.innerHTML +=
            `
            <div id="result-row">
                <h6>${cityInputVal}, ${stateInputVal}</h6>
                <p>Date: ${formattedDate}</p>
                <ul id="result-list">
                    <li>Min Temperature: ${tempMin} ºF</li>
                    <li>Max Temperature: ${tempMax} ºF</li>
                    <li>Humidity: ${humidity}%</li>
                    <li>WindSpeed: ${windSpeed}mph</li>
                </ul>
            </div>
            `
    }
    else {
        weatherForecastContainer.innerHTML +=
            `
        <div id="result-row">
            <h6>${cityInputVal}, ${stateInputVal}</h6>
        </div>
        `

        const startDateObj = new Date(dateObj.setDate(dateObj.getDate() + parseInt(daySum)));

        for (let i = 0; i < numOfDays; i++) {
            const currentDateObj = new Date(startDateObj.setDate(startDateObj.getDate() + 1));
            const formattedDate = currentDateObj.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
            });

            const dateForURL = currentDateObj.toISOString().split(".")[0];
            const requestURL = 'https://dark-sky.p.rapidapi.com/' + coordinate + ',' + dateForURL + '?units=uk2';

            const response = await fetch(requestURL, options);
            console.log(response);
            if (!response.ok) {
                console.error(error);
            };
            const data = await response.json();
            console.log(data);

            const tempMin = Math.round((data.daily.data[0].temperatureMin * 9 / 5) + 32);
            const tempMax = Math.round((data.daily.data[0].temperatureMax * 9 / 5) + 32);
            const humidity = data.daily.data[0].humidity * 100;
            const windSpeed = data.daily.data[0].windSpeed;

            const resultRowEl = weatherForecastContainer.querySelectorAll("#result-row");
            const lastResultRow = resultRowEl[resultRowEl.length - 1];
            lastResultRow.innerHTML +=
                `
                <p>Date: ${formattedDate}</p>
                <ul id="result-list">
                <li>Min Temperature: ${tempMin} ºF</li>
                <li>Max Temperature: ${tempMax} ºF</li>
                <li>Humidity: ${humidity}%</li>
                <li>WindSpeed: ${windSpeed}mph</li>
                </ul>
                `
        }
    }
};

// The getCityCoordinates function fetches latitude and longitude coordinates of city.
const getCityCoordinates = async function (dateInputVal, cityInputVal, stateInputVal, dayInputVal, daySum) {
    const APIKey = "4ef3772979be6dce53798914fca77969";

    const requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInputVal + ',' + stateInputVal + ',US&appid=' + APIKey;

    const response = await fetch(requestUrl);
    console.log(response);
    if (!response.ok) {
        console.error(error);
    }
    const data = await response.json();
    console.log(data);

    const latCoord = data[0].lat;
    const lonCoord = data[0].lon;
    const coordinate = latCoord + ',' + lonCoord;
    await getCityWeather(dateInputVal, cityInputVal, stateInputVal, dayInputVal, daySum, coordinate);
};

// The handleSubmit function takes input values and triggers functions to fetch city coordinates and weather forecast data.
const handleSubmit = async function (event) {
    event.preventDefault();

    weatherForecastContainer.innerHTML = "";

    const dateInputVal = document.getElementById("departure-date").value
    const inputRowEl = document.querySelectorAll("#input-row");
    let daySum = 0;

    for (let i = 1; i < inputRowEl.length; i++) {
        if (i > 1) {
            const previousInputRow = inputRowEl[i - 1];
            daySum += parseInt(previousInputRow.getElementsByTagName("input")[2].value);
        }

        const currentInputRow = inputRowEl[i];
        const cityInputVal = currentInputRow.getElementsByTagName("input")[0].value;
        const stateInputVal = currentInputRow.getElementsByTagName("input")[1].value;
        const dayInputVal = currentInputRow.getElementsByTagName("input")[2].value;

        await getCityCoordinates(dateInputVal, cityInputVal, stateInputVal, dayInputVal, daySum);
    };
};

// The insertInputRow function is called when the add stop button is clicked.
addStopBtn.addEventListener("click", function (event) {
    insertInputRow(event);
    handleStateOptions();
});

// The resetForm function is called when the reset form button is clicked.
resetBtn.addEventListener("click", function (event) {
    resetForm(event);
    handleStateOptions();
});

// The handleSubmit function is called when the save button is clicked.
saveBtn.addEventListener("click", handleSubmit);

// Run autocomplete functionality for city input on page load.
document.addEventListener('DOMContentLoaded', getCityAutocomplete);

// Render select options for state input on page load.
handleStateOptions();