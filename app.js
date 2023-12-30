var arr = [
    {dp : "https://i.pinimg.com/564x/2c/6d/1a/2c6d1a461cae4546fdeadda558590104.jpg", story : "https://i.pinimg.com/564x/8b/2f/a7/8b2fa7bc9417af2a275033dca4087a5f.jpg"},
    {dp : "https://i.pinimg.com/564x/d5/ce/99/d5ce996399ca23e428d3b73fc424ec90.jpg", story : "https://i.pinimg.com/564x/a5/9d/7b/a59d7b1317c896297ebdc36196587c3f.jpg"},
    {dp : "https://i.pinimg.com/564x/79/a6/03/79a603268bf2bd1a53c984929c15cfac.jpg", story : "https://i.pinimg.com/564x/99/b3/4a/99b34af8d852fe32ca3cd44fa09846a5.jpg"},
    {dp : "https://i.pinimg.com/564x/3b/40/92/3b4092b12862386fc28cb5a7a183eeee.jpg", story : "https://i.pinimg.com/564x/5b/55/62/5b5562efcd064359bcde6c77ba5b8752.jpg"} 
    ]

 var storys = document.querySelector("#storys")
    var clutter = ""
    arr.forEach(function(elem,idx){
        clutter +=  `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
    })

   storys.innerHTML = clutter

   storys.addEventListener("click", function(dets){
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function (){
    document.querySelector("#full-screen").style.display = "none"
   }, 2000)
   });

