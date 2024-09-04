import { patchData } from "../lib/http.request"

export function Column(item) {
    const column = document.createElement('div')
    const tasks = document.createElement('div')
    const title = document.createElement('h2')
    const add_card = document.createElement('button')

    column.classList.add('column')
    title.innerHTML = item.title
    tasks.classList.add('tasks')
    add_card.classList.add('add-card')
    add_card.innerHTML = "+ Добавить карточку"


    column.append(title, tasks, add_card)

    column.ondragenter = (e) => { };
    column.ondragover = (e) => e.preventDefault();
    column.ondragleave = (e) => { };
    column.ondrop  = async (e) => {
        const selected = document.getElementById("active");
        tasks.append(selected);
        selected.removeAttribute("id");
        // PATCH писать здесь КОД
        await patchData("/tasks/" + selected.dataset.id, { status: item.status });

    };

    add_card.onclick = () => {
        const dialog = document.querySelector('dialog')

        dialog.showModal()
    }

    return column
}