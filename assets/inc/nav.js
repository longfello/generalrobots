
	var url = window.location.href;
	var pathname = new URL(url).pathname;

	var menu = {
								"/product":		"Product",
								"/timeline":	"Timeline",
								"/careers":		"Careers",
							}

/*						
	var preNav = `
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="./favicons/favicon-32x32.png" alt="" width="24" height="24" class="d-inline-block align-text-top me-2">
      General Robots
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex justify-content-center">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">`;
	
	var postNav = `

</div>
      </div>
    </div>
  </div>

`;

							
export function navBar() {

	var navBarHTML = "";
	
	for (var key in menu) {
  	var option = (key==pathname) ? '<b>'+ menu[key] + '</b>' : menu[key];
  	navBarHTML += '<a class="nav-link" href="' + key + '">' + option  + '</a>';
	}

	var navBar = document.createElement('nav');
	
  navBar.innerHTML = preNav + navBarHTML + postNav;
  navBar.className = 'navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom';

	document.body.insertBefore(navBar, document.body.firstChild);
}
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
