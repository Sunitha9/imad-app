//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }
        //not yet done
    };
    //make the request
    request.open('GET','http://u900ssunitha.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit button

var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    //create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take action
            if(request.status===200){
               //make a request to th server and send the name
    
    //capture a list of names and render it as a list
    var names =request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0; i<names.length; i++){
      list +='<li>'+names[i] +'</li>';
      
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
                
            }
        }
        //not yet done
    };
    //make the request
    var nameInput=document.getElementById('name');
var name=nameInput.value;
    request.open('GET','http://u900ssunitha.imad.hasura-app.io/counter/submit-name?name'+name,true);
    request.send(null);
    
   
};
