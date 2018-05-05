var reactRecipe={
img: "./images/reactRecipeBox.png",
name: "React Recipe Box",
notes: "Recipe Box Using React and Local Storage",
link: "https://codepen.io/Cyberputty/full/qxGBYZ/"

};
var reactLeaderBoard={
  img:"./images/ReactLeaderBoard.png",
  name:"React Leader Board",
  notes:"Leader board using react.",
  link: "https://codepen.io/Cyberputty/full/YejGov/"

};
var dungeonCrawler={
             img:"./images/dungeonCrawler.png",
             name:"Dungeon Crawler React",
             notes:"A dungeon crawler using react and vanilla javascript, all floors randomly generated",
             link:"https://codepen.io/Cyberputty/full/XEagwd/",
}
var pomodoro={
             img:"./images/Pomodoro.png",
             name:"Pomodoro Timer",
             notes:"A Pomodoro Timer with task list. Drag and drop is utilized to provide one list for brainstorming and one for whatever your currently working on.",
             link:"https://codepen.io/Cyberputty/full/NXjRgX/"
              };
              
var ticTacToe={
             img:"./images/Tic-Tac-Toe.png",
             name:"Tic Tac Toe",
             notes:"The challenge for this was to create the AI logic and a game loop.",
             link: "https://codepen.io/Cyberputty/full/QaPwzo/"};
var simon={
             img:"./images/Simon.png",
             name:"Simon",
             notes:"Simon the classic memory game,all vanilla css and javascript",
             link:"https://codepen.io/Cyberputty/full/aqdOWy/"
            };
var twitch={
             img:"./images/TwitchApp.png",
             name:"Twitch Notifications",
             notes:"App using Twitch API for notifications.",
             link:"https://codepen.io/Cyberputty/full/wydGdM/"};
var gameOfLife={
            img:"./images/GameOfLife.png",
            name:"Conway's Game of Life",
            notes:"Mathematician Conway's Game of Life: Simulates cell life and death over generations.",
            link:"https://codepen.io/Cyberputty/full/XEjQqW/"
}
var barchart={
            img: "./images/barchart.png",
            name: "D3.js Barchart",
            notes: "Uses GDP dataset",
            link: "https://codepen.io/Cyberputty/full/vRarVX/"
}
var scatterplot={
            img: "./images/scatterplot.png",
            name: "D3.js Scatterplot",
            notes: "scatterplot using dataset from alpe d'huez on doping in professional cycling",
            link: "https://codepen.io/Cyberputty/full/pVRjKQ/"        
}
var heatmap={
            img: "./images/heatmap.png",
            name: "D3.js Heatmap",
            notes: "Heatmap using dataset for global land surface tempurature",
            link: "https://codepen.io/Cyberputty/full/BxWWWx/"
}




var $currentProject=$('#currentProject');
var $prevProject=$('#prevProject');
var $nextProject=$('#nextProject');
var $projectNote=$('#projectNote');
var $projectTitle=$('#projectTitle');
var $link=$('#link');

var carousel=[gameOfLife,dungeonCrawler,reactRecipe,twitch,pomodoro,ticTacToe,simon,reactLeaderBoard,scatterplot,barchart,heatmap];
var first= carousel[0];
var last= carousel[carousel.length-1];
forward();
// initialize
var current;
var index;
var prev;
var next;

console.log(carousel[carousel.length-1]);

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