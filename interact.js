let dn = 0; 													//light/dark variable (Day Night)
let hour = new Date().getHours();								//get the hour of the day for the light/dark mode settings						
      console.log(hour); 
let date = document.getElementById('day');						//get the id 'day' from the HTML to replace the text with the date
let heading = document.querySelector('h1');						//get the h1 id and assign it to heading to call on later (change color)
let background = document.querySelector('body');				//get the body id and assign it to background to change later for the light/dark settings

//call todayDate() function
todayDate(); 

if (hour >= 18 || hour < 6) { 	
	dn = 1;			//assign 1 to dn for dark
	dayNight();		//call dayNight() function
} else {
	dn = 0;			//assign 0 to dn for light
}

//Change color of h1 based on the day of the week
let day = new Date().getDay();
let color;
console.log('Day: ' + day);

if (day == 0){
	document.getElementById('head').style.color='red';
} else if(day == 1){
	document.getElementById('head').style.color='orange';
} else if(day == 2){
	document.getElementById('head').style.color='#FFBF00'; //Darker yellow so it can still be seen
} else if(day == 3){
	document.getElementById('head').style.color='green';
} else if(day == 4){
	document.getElementById('head').style.color='blue';
} else if(day == 5){
	document.getElementById('head').style.color='#4B0082'; //Indigo hex code
} else if(day == 6){
	document.getElementById('head').style.color='violet';
} else if (dn == 0){
	document.getElementById('head').style.color='black';	//if in light mode, and there is an issue with the day of the week, will default to black
} else if (dn == 1){
	document.getElementById('head').style.color = 'white';	//if in dark mode, and there is an issue with the day of the week, will default to white
}




//---------------------FUNCTIONS----------------------------------------------------------------------------------------------------------

//Change color of text for Night Mode
function dayNight(){
	//heading.style.color = 'white';
	document.getElementById('container').style.color = 'white';
	document.getElementById('day').style.color = 'white';
	if (document.getElementById('bib') != null){
		document.getElementById('bib').style.color = 'white';
	}
	background.style.backgroundColor = 'black';
}

//Write the date in the footer
function todayDate() {
	let td = new Date();
	console.log('today is: ' + td);
	date.textContent = 'Today is: ' + td;
}













