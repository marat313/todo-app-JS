const input = document.querySelector('.input')
const addBtn = document.querySelector('.addBtn')
const todo = document.querySelector('.todo')
const todoUl = document.querySelector('.todo-ul')

addBtn.addEventListener('click', addTodo)
todoUl.addEventListener('click', delTodo)


const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () =>{
  document.body.classList.toggle('dark');
});


function addTodo(e){
    e.preventDefault()

    const liBox = document.createElement('div')
    liBox.classList.add('liBox') 

    const newLi = document.createElement('li')
    newLi.classList.add('newLi')

    const trashBtn = document.createElement('div')
    trashBtn.classList.add('trash-btn')
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    const doneBtn = document.createElement('div')
    doneBtn.classList.add('done-btn')
    doneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>'

    if(input.value === ''){
        return false
    } else {
        newLi.innerText = input.value
    }
    input.value = ''


    doneBtn.addEventListener('click', doneLi)
    function doneLi() {
        liBox.classList.toggle('done-todo')
    }

    todoUl.appendChild(liBox)
    liBox.appendChild(newLi)
    liBox.appendChild(trashBtn)
    liBox.appendChild(doneBtn)
}

 function delTodo(e){
    const item = e.target
    if(item.parentElement.classList[0] === 'trash-btn') {
        const todo = item.parentElement.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', e => {
            todo.remove()
        })
    }
}
