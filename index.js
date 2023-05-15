document.getElementsByClassName("addTaskBtn")
.forEach(btn => btn.addEventListener('click')
,e=>e.target.classList.toggle("hidden"));