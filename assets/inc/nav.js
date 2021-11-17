
	var url = window.location.href;
	var pathname = new URL(url).pathname;

	var menu = {
								"/product":		"Product",
								"/timeline":	"Timeline",
								"/careers":		"Careers",
								"/support":		"Support",
							}
	
document.write(`

<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom">
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
      <div class="navbar-nav">

`);

for (var key in menu) {
  var option = (key==pathname) ? '<b>'+ menu[key] + '</b>' : menu[key];
  document.write('<a class="nav-link" href="' + key + '">' + option  + '</a>');
}

document.write(`

</div>
      </div>
    </div>
  </div>
</nav>

`);
