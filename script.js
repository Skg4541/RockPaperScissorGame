let a=Math.floor(Math.random()*3);
let b="";
let d=true;
if(a==0){
  b="R"
}
else if(a==1){
  b="P"
}
else{
  b="S"
}

while(d){
let c=prompt("Choose R for rock , P for paper or S for scissor")
  alert("Opponent Chose " + (b=="R"?"Rock":(b=="P"?"Paper":"Scissor")));

if((b=="R"&c=="P")||(b=="P"&c=="S")||(b=="S"&c=="R")){
  alert("You Won");
  break;
}
else if((c=="R"&b=="P")||(c=="P"&b=="S")||(c=="S"&b=="R")){
  alert("You Lost")
  break;
}
else{
  d= confirm("Dou you want to Continue ? ")
}
}

