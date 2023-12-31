const addBtn = document.querySelector("#addBtn")
const main = document.querySelector(".main") 

addBtn.addEventListener('click', function(){
    addNote()
})

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea")
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data))
    }   
}

const addNote = (text = "") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
            <div class="toolbar">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash-alt"></i>
            </div>
            <textarea>${text}</textarea>
    `;
    // Delete Note 
    note.querySelector(".trash").addEventListener(
        "click" , function(){
            note.remove()
            saveNotes()
        }
    )
    // Save Note
    note.querySelector(".save").addEventListener(
        "click" , function(){
            saveNotes()
        }
    )
    // Auto Save Note
    note.querySelector("textarea").addEventListener(
        "focusout" , function(){
            saveNotes()
        }
    )
    // Add Note
    main.appendChild(note);
    saveNotes()
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addNote()
        }
        else{
            lsNotes.forEach(
                (lsNote) =>{
                    addNote(lsNote)
                }
            )
        }  
    }
)()
