let task_form = document.querySelector(".blur-effect");
let add_btn = document.getElementById("add-btn");



add_btn.addEventListener("click", () => {

    task_form.style.display = "flex";
    console.log("clicked");
})

// verileri almak için

let task_title = document.querySelector(".task-header-input");
let task_description = document.querySelector(".desc-textarea");
let radio_inputs = document.getElementsByClassName("radio-input");
let create_task_btn = document.querySelector(".create-btn");

let todos = []

// bir todo ekler
create_task_btn.addEventListener("click", (e) => {
    e.preventDefault();
    add_todo()
    console.log(todos)
    todo_list_render()
})

//todo'da bir arama yapar
let search_input = document.querySelector("#search-input")

search_input.addEventListener('input', (e) => {
    const search_todos = todos.filter((todo) => {
        return todo.task_title.includes(search_input.value);
    });
    todo_list_render(search_todos)
});

// bir todo siler
let todo_list = document.querySelector(".todo-list");

todo_list.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-close')) {
        e.stopPropagation();
        const filtered_todos = todos.filter((todo) => {
            return todo.task_id != e.target.parentElement.getAttribute('task_id');
        });
        todos = filtered_todos
        todo_list_render(todos)
    }
});

const add_todo = () => {
    let isTitleEmpty = true, isSelectedRadio = false;

    let selected_radio;

    if (task_title.value !== "") {
        isTitleEmpty = false;
    }

    for (const radio of radio_inputs) {
        if (radio.checked) {
            isSelectedRadio = true;
            selected_radio = radio.value;
        }
    }

    // array'a bir todo ekler
    if (isTitleEmpty === false && isSelectedRadio === true) {
        todos.push({
            task_title: task_title.value,
            task_description: task_description.value.trim(),
            task_importance: selected_radio,
            isCompleted: false
        })

        // form elemanlarının değerlerini sıfırlar
        reset_popup();

    }

    else {
        console.log("Title veya önem derecesi seçilmemiş / düzenlenecek burası")
    }
}

const reset_popup = () => {
    isTitleEmpty = true, isSelectedRadio = false
    task_title.value = "";
    task_description.value = "";
    for (const radio of radio_inputs) {
        if (radio.checked) {
            radio.checked = false;
        }
    }
    task_form.style.display = "none";
    search_input.value = "";
}


// todoları listeler
const todo_list_render = () => {

    let todo_list = document.querySelector(".todo-list");
    todo_list.innerHTML = " ";

    for (const todo of todos) {
        let todo_list_item = document.createElement("div");
        todo_list.appendChild(todo_list_item);
        todo_list_item.className = "todo-list-item";

        //checkbox ekler
        let isCompletedCheckBox = document.createElement("input");
        isCompletedCheckBox.classList.add("isCompletedCheckBox");
        isCompletedCheckBox.type = "checkbox";
        isCompletedCheckBox.name = "option"
        isCompletedCheckBox.value = todo_list_item;
        todo_list_item.appendChild(isCompletedCheckBox);

        //Todo başlığı ekler
        let todo_title_div = document.createElement("div");
        todo_title_div.classList.add("todo_title_div");
        todo_title_div.innerHTML = todo.task_title;
        todo_list_item.appendChild(todo_title_div);

        // 
        let task_title_checkbox = document.createElement("span");
        task_title_checkbox.className = "task-title-checkbox-span";
        todo_list_item.appendChild(task_title_checkbox);
        task_title_checkbox.appendChild(isCompletedCheckBox);
        task_title_checkbox.appendChild(todo_title_div);

        //Todo açıklaması ekler
        let todo_desc_p = document.createElement("p");
        todo_desc_p.classList.add("todo_desc_p");
        todo_desc_p.innerHTML = todo.task_description;
        todo_list_item.appendChild(todo_desc_p);
        todo_desc_p.className = "todo-desc-p";

        //Todo önem derecesi ekler
        let todo_importance = document.createElement("div");
        todo_importance.classList.add("todo_importance");
        todo_importance.innerHTML = todo.task_importance;

        //Todo edit icon ekler
        let edit_icon = document.createElement("i");
        edit_icon.classList.add("fa", "fa-edit");

        //Todo remove icon ekler
        let remove_icon = document.createElement("i");
        remove_icon.classList.add("fa", "fa-close");


        // 3 öğeyi sağa koymak için spana attım
        let importance_icons = document.createElement("span");
        importance_icons.className = "importance-icons-span";
        todo_list_item.appendChild(importance_icons);
        importance_icons.appendChild(todo_importance);
        importance_icons.appendChild(edit_icon);
        importance_icons.appendChild(remove_icon);
    }

    let complete_btn = document.getElementsByClassName(".complete-btn")[0];

    complete_btn.addEventListener("click", () => {
        let checkboxes = document.querySelectorAll('.todo_list_item input[type="checkbox"]');
        let selectedValues = Array.from(checkboxes).filter(checkbox => checked).map(checkbox => checkbox.value);

        console.log(selectedValues);
    })

}

