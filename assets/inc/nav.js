
	var url = window.location.href;
	var pathname = new URL(url).pathname;

	var menu = {
								"/product":		"Product",
								"/pitch":	"Pitch",
								/* "/traction": "Traction", */
							}

/*						
	"/careers":		"Careers",
*/

export function navBar() {

	var navBarHTML = "";
	
	for (var key in menu) {
  	
  	var option = menu[key];
  	
  	if (key==pathname) {
  		option = '<b>'+ menu[key] + '</b>';
  		document.title = menu[key] + " - General Robots";
  	}
  	
  	navBarHTML += '<a class="nav-link" href="' + key + '">' + option  + '</a>';
	}

	var navBar = document.getElementById('navbar-nav');
  navBar.innerHTML = navBarHTML;
}
