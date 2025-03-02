let add_btn = document.getElementById("add-btn");
let main_element = document.getElementsByTagName("main")[0];

add_btn.addEventListener("click", () => {
    /* Created elements for form */
    let form_container = document.createElement("div");
    let label_header_input = document.createElement("label");
    let task_header_input = document.createElement("input");
    let label_textarea = document.createElement("label");
    let desc_textarea = document.createElement("textarea");
    let blur_effect = document.createElement("div");
    let importance_label = document.createElement("label");
    let importance_section = document.createElement("section");
    let importance_radio1 = document.createElement("input");
    let importance_radio2 = document.createElement("input");
    let importance_radio3 = document.createElement("input");

    /* classNames for created elements*/
    blur_effect.className = "blur-effect";
    form_container.className = "task-form";
    label_header_input.className = "label-header-input";
    task_header_input.className = "task-header-input";
    label_textarea.className = "label-textarea";
    desc_textarea.className = "desc-textarea";
    importance_label.className = "importance-label";
    importance_section.className = "importance-section";
    importance_radio1.className = "radio-input";


    blur_effect.style.display = "block";
    label_header_input.innerText = "Enter title (required)";
    task_header_input.required = "required"
    label_textarea.innerText = "Please write a description(optional)";
    desc_textarea.cols = 44;
    desc_textarea.rows = 6;
    importance_label.innerText = "Importance";
    importance_radio1.type = "radio";
    importance_radio2.type = "radio";
    importance_radio3.type = "radio";
    importance_radio1.value = "High";
    importance_radio2.value = "Middle";
    importance_radio3.value = "Low";
    importance_radio1.name = "option"
    importance_radio2.name = "option"
    importance_radio3.name = "option"





    main_element.appendChild(blur_effect);
    main_element.appendChild(form_container);
    form_container.appendChild(label_header_input).appendChild(task_header_input);
    form_container.appendChild(label_textarea).appendChild(desc_textarea);
    form_container.appendChild(importance_label).appendChild(importance_section);
    importance_section.appendChild(importance_radio1);
    importance_section.appendChild(importance_radio2);
    importance_section.appendChild(importance_radio3);

    console.log("clicked");
})