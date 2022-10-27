let textarea=document.getElementById("text");
textarea.addEventListener('input',function(){
    var currtext=this.value;
  
  document.getElementById("char").innerHTML=currtext.length;
   currtext=currtext.trim();
   let words=currtext.split(" ");
   let cleanlist=words.filter(function(el){
       return el!="";
   });
   document.getElementById("word").innerHTML=cleanlist.length;

});