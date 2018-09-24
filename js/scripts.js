console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var tooltip = document.getElementById('tool-tip');
var word = document.getElementById('more-info');

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '150px';
  content.style.opacity = '.1';
});

closeBtn.addEventListener('click', function(){
  console.log('close clicked');
  mobileNav.style.width = '0px';
  content.style.opacity = '1';
});

word.addEventListener('mouseenter', function(event){
  console.log('hover');
  tooltip.style.opacity = '1';
  var x = event.pageX;     // Get the horizontal coordinate
  var y = event.pageY;     // Get the vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log('x');
});
