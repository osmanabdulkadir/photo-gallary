var prev = document.getElementById("prev");

var next = document.getElementById("next")

var arr = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/6.jpeg", "images/9.jpeg","images/7.jpeg", "images/8.jpeg", "images/10.jpeg", "images/11.jpeg", "images/12.jpeg", "images/14.jpeg" ]

var i = 0;

prev.addEventListener("click", function(){
    i--;
   if(i < 0){
       i = arr.length - 1;
   }
    document.getElementById("image").src = arr[i];

});

next.addEventListener("click", function(){
    i++;
    if(i > arr.length - 1){
        i = 0;
    }

    document.getElementById("image").src = arr[i];

})