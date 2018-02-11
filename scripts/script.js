var pomodoro={
             img:"Pomodoro_pn6lhf.png",
             name:"Pomodoro Timer",
             notes:"A Pomodoro Timer with task list. Drag and drop is utilized to provide one list for brainstorming and one for whatever your currently working on",
             link:"https://codepen.io/Cyberputty/full/NXjRgX/",
              };
              
var ticTacToe={
             img:"Tic-Tac-Toe_gu8rqv.png",
             name:"Tic Tac Toe",
             notes:"The challenge for this assignment was to create the computer's logic and have the program call itself to evaluate winning conditions",
             link: "https://codepen.io/Cyberputty/full/QaPwzo/"};
var simon={
             img:"Simon_jeetxy.png",
             name:"Simon",
             notes:"Simon the classic memory game, the visuals are entirely css. Converts to and from string id's to randomize using numbers rather than index",
             link:"https://codepen.io/Cyberputty/full/aqdOWy/"};
var $currentProject=$('#currentProject');
var $projectNote=$('#projectNote');
var $projectTitle=$('#projectTitle');
var $link=$('#link');
var carousel=[simon,ticTacToe,pomodoro];
forward();
var current= carousel[0];
var index;
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
     }
       $currentProject.attr({
  alt: current+"project",
  src:"http://res.cloudinary.com/duytlootx/image/upload/v1518017748/"+current.img
  });
    $link.attr('href', current.link)
     $projectTitle.text(current.name);
    $projectNote.text(current.notes);
  }

  function back(){
      index=carousel.indexOf(current);
     if(index>0) {
     current=carousel[index-1];
     }
       $currentProject.attr({
  alt: current+"project",
  src:"http://res.cloudinary.com/duytlootx/image/upload/v1518017748/"+current.img
  });
    $link.attr('href', current.link)
    $projectTitle.text(current.name);
    $projectNote.text(current.notes);
       
  }