/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
//Task 2a
var textBtn = document.getElementById('textBtn2')
textBtn.addEvenListener('click',function(){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = "Hello World"
    task2.appendChild(paragraph)
})



/* Task 4 using jQuery */
