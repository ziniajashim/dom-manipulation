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

//task 2b
function changeBGcolor(Event){
    var body = document.getElementsByTagName('body')[0]
    if(event.target.innerText == "Red"){
        body.style.backgroundColor = 'red';
    }
    if(event.target.innerText == "Green"){
        body.style.backgroundColor = 'green';
    }
}

/* Task 4 using jQuery */
