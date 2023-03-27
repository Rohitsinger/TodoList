const form = document.querySelector('form')
const input = document.getElementById('title')
const textArea = document.getElementById('description')
const btn = document.querySelector('button')
const container = document.querySelector('.container')

const task = localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")) :[];
showAllTask();
function showAllTask() {
    task.forEach((value,index)=>{
        const div = document.createElement('div')
        div.setAttribute("class","task")
        const innerDiv = document.createElement("div")
        div.append(innerDiv);

        const p = document.createElement('p')
        p.innerText = value.title;
        innerDiv.append(p)
        const span = document.createElement('span')
        span.innerText = value.description;
        innerDiv.append(span);

        const btn = document.createElement("button")
        btn.setAttribute("class", "deleteBtn")
        btn.innerText="-"
        btn.addEventListener("click",()=>{
            removeTasks();
            task.splice(index,1)
            localStorage.setItem("task",JSON.stringify(task) )
            showAllTask();
        })
        div.append(btn)
        container.append(div)

})
}

function removeTasks(){
   task.forEach(()=>{
    const div = document.querySelector(".task")
    div.remove()
   })
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  removeTasks()
  task.push({
    title:title.value,
    description:description.value
  })
  console.log(task);
  localStorage.setItem("task",JSON.stringify(task) )
  showAllTask()
}) 