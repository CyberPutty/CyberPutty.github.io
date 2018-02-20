var pomodoro={
             img:"./images/Pomodoro.png",
             name:"Pomodoro Timer",
             notes:"A Pomodoro Timer with task list. Drag and drop is utilized to provide one list for brainstorming and one for whatever your currently working on.",
             link:"https://codepen.io/Cyberputty/full/NXjRgX/",
              };
              
var ticTacToe={
             img:"./images/Tic-Tac-Toe.png",
             name:"Tic Tac Toe",
             notes:"The challenge for this was to create the AI logic and a game loop.",
             link: "https://codepen.io/Cyberputty/full/QaPwzo/"};
var simon={
             img:"./images/Simon.png",
             name:"Simon",
             notes:"Simon the classic memory game, the visuals are entirely css. Converts to and from string id's, generates random sequence per game.",
             link:"https://codepen.io/Cyberputty/full/aqdOWy/"};
var twitch={
             img:"./images/TwitchApp.png",
             name:"Twitch Notifications",
             notes:"App using Twitch API for notifications.",
             link:"https://codepen.io/Cyberputty/full/wydGdM/"};
var $currentProject=$('#currentProject');
var $prevProject=$('#prevProject');
var $nextProject=$('#nextProject');
var $projectNote=$('#projectNote');
var $projectTitle=$('#projectTitle');
var $link=$('#link');

var carousel=[simon,pomodoro,twitch,ticTacToe];
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