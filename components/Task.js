// get columns 
// create columns 

import { deleteData } from "../lib/http.request"

// querySelector columns
// get tasks 
// create tasks



export function Task(item){
    const card = document.createElement('div')
    const task = document.createElement('div')
    const title = document.createElement('h2')
    const trash = document.querySelector('.trash-bin')

    task.draggable = true
    task.setAttribute("data-id", item.id);
    task.classList.add('task') 
    card.classList.add('card')

    title.innerHTML = item.title
    card.innerHTML = item.description
    
    task.append(title,card)

    task.ondragstart = () => {
		setTimeout(() => {
			task.classList.add("hide");
		}, 0);
		task.id = "active";

        trash.classList.remove('hidden')
        trash.classList.add('show')
	};
	task.ondragend = () => {
        task.classList.remove("hide");

        trash.classList.remove('show')
        trash.classList.add('hidden')
	};
    trash.ondrop = async (e) => {
        const selected = document.getElementById("active");
        await deleteData("/tasks/" + selected.dataset.id, { task });
        selected.remove()
    }
    trash.ondragover = (e) =>{
        e.preventDefault()
    }
    return task

}
