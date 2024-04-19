const post = JSON.parse(localStorage.getItem('userdata')) || [  ]
const body =document.querySelector("body")
// this is the dark mode button
let mode="dark";

const button = document.getElementById("button") 
button.addEventListener("click",function(){
    if (mode==="dark") { 
        mode="light"
body.setAttribute("class","dark")        
} else{
    mode="dark" 
    body.setAttribute("class","light")        
    }
} )

// this is action apon the submit button 
let username;
let subject;
let content;
// console log input after blog post 
document.getElementById("submit").onclick = function(){
    username = document.getElementById("User").value;
    subject = document.getElementById("Sub").value;
    content = document.getElementById("Content").value.trim();
    console.log(username, subject, content); 

    if(username && subject && content){
        const user = {
          username, 
          subject,
          content,
        };
        post.push(user)
        localStorage.setItem('userdata', JSON.stringify(post));
        window.location.href="blog.html"
        
    } else{
        alert ("plese fill out form")
    }
    

}

