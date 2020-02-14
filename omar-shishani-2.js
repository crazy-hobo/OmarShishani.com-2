let OS_on;
let fadeCompleted = false;
function runslide_O() {
  $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500, function(){
  	fadeCompleted = true; 
  });
};
function runslide_S() {
	fadeCompleted = false;
  $('.OS-S').fadeOut(1500).fadeIn(1500);
};
$('.OS_css_container_div').on('mouseenter', function() {
	if (fadeCompleted === true) {
	runslide_S();
	runslide_O();
	}
	else {
		return;
	}
});
$('.OS_css_container_div').on('click', function() {
	if (fadeCompleted === true) {
	runslide_S();
	runslide_O();
	}
	else {
		return;
	}
});

document.onload = runslide_O_load(), runslide_S_load();
function runslide_O_load() {
  $('.OS-O').fadeIn(2000);
};
function runslide_S_load() {
  $('.OS-S').delay(1500).fadeIn(2000, function(){
  	fadeCompleted = true;
  });
};