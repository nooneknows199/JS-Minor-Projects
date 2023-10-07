var iStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var con = document.querySelector(".card")
var love = document.querySelector("i")

let flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
        iStatus.innerHTML = "Friends"
        iStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag++
    }
    else{
        iStatus.innerHTML = "Stranger"
        iStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag--
    } 
})


// Heart (like button like instagram)
con.addEventListener("dblclick",function(){
    love.style.transform = "translate(-20%,-20%) scale(1)"
    love.style.color = "red"
    love.style.opacity = 0.8

    setTimeout(function(){
        love.style.opacity = 0;
    },1000);
});

