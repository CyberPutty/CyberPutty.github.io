
var $currentProject=$('#currentProject');
var $prevProject=$('#prevProject');
var $nextProject=$('#nextProject');
var $projectNote=$('#projectNote');
var $projectTitle=$('#projectTitle');
var $link=$('#link');

var carousel=[];


console.log(carousel[carousel.length-1]);
document.addEventListener('DOMContentLoaded', function(){
  fetch("https://raw.githubusercontent.com/CyberPutty/CyberPutty.github.io/master/scripts/carousel.json").then(response=> response.json()).then(function(d){
  
   carousel=d.items;
   setCarousel();
  });
});
function setCarousel(){
  var first= carousel[0];
  var last= carousel[carousel.length-1];
  forward();
  // initialize
  var current;
  var index;
  var prev;
  var next;
$('#forward').on('click',function(){
  
forward();
});
$('#back').on('click',function(){
  
back();
});

  function forward(){
   
      index=carousel.indexOf(current);
     if(index<carousel.length-1 ) {
     current=carousel[index+1];
     prev=carousel[index];
     next=carousel[index+2];
     }
     else{
       current=first;
     prev=last;
     next=carousel[1];
     }
       $currentProject.attr({
  alt: current+"project",
  src:current.img
  });
  if(prev){
    $prevProject.attr({
    alt: prev+"project",
    src:prev.img
    });
 
  }
  else{

    $prevProject.attr({
      alt: last+"project",
      src: last.img
      });
  }
  if(next)
  {
    $nextProject.attr({
      alt: next+"project",
      src:next.img
      });
     
     }
     else{
      $nextProject.attr({
        alt: first+"project",
        src: first.img
        });
     }
  
   
     $link.attr('href', current.link)
     $projectTitle.text(current.name);
     $projectNote.text(current.notes);
  }

  function back(){
      index=carousel.indexOf(current);
     if(index>0) {
     current=carousel[index-1];
     prev=carousel[index-2];
     next=carousel[index];
     }
     else{
      current=last;
    prev=carousel[carousel.length-2];
    next=first;
    }
       $currentProject.attr({
  alt: current+"project",
  src:current.img
  });
  if(prev){
    $prevProject.attr({
    alt: prev+"project",
    src:prev.img
    });
 
  }
  else{

    $prevProject.attr({
      alt: last+"project",
      src: last.img
      });
  }
  if(next)
  {
    $nextProject.attr({
      alt: next+"project",
      src:next.img
      });
     
     }
     else{
      $nextProject.attr({
        alt: first+"project",
        src: first.img
        });
      }
    $link.attr('href', current.link)
    $projectTitle.text(current.name);
    $projectNote.text(current.notes);
       
  }



}


$('.hamburger').on('click',function(){
  $('.nav ul').toggleClass('toggleMenu');
  $('.break').html('<hr/>');
  $('.row').toggleClass('hamMenu');
  $('.hamcontainer img').toggleClass('hide');
  $('ul').append(" <div id='toggleClose'><hr/><a><li id='close'>close</li></a><div>");
  $('#close').bind('click', function(){
    $('.hamcontainer img').toggleClass('hide');
    $('.nav ul').toggleClass('toggleMenu');
    $('.row').toggleClass('hamMenu');
    $('#toggleClose').remove();

  });

});

function screenWidth(x) {
  if (x.matches) { // If media query matches
  $('.nav ul').removeClass('toggleMenu');
  $('.break').html('|');
  $('.row').removeClass('hamMenu');
  $('.hamcontainer img').removeClass('hide');
  } 
}

var x = window.matchMedia("(min-width: 950px)");
screenWidth(x); // Call listener function at run time
x.addListener(screenWidth); // Attach listener function on state changes