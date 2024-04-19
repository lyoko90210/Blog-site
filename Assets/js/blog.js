// Get the mode button
const posts = JSON.parse(localStorage.getItem("userdata")) || []   

const user = document.getElementById("username")

const modebutton = document.getElementById("button");

// Define the initial mode
let mode = "dark";

// Add event listener to toggle dark mode when the button is clicked
modebutton.addEventListener("click", function() {
    if (mode === "dark") {
        mode = "light";
        document.body.setAttribute("class", "dark");
    } else {
        mode = "dark";
        document.body.setAttribute("class", "light");
    }
});

function renderBlogs(){
    for(let i=0; i < posts.length; i++ ){
        const blog = posts [i]
        console.log (blog) 
    
        const p = document.createElement("p")
        p.textContent = blog.username + " "+blog.subject + " " +blog.content  

        user.append(p)
       
    }
}
renderBlogs()



