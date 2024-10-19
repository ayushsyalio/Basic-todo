let globalId = 1

function makeasdone(todoId){
    const parent = document.getElementById(todoId)
    parent.children[2].innerHTML = "Done!"
}

function createchild(title, description, id){
    const child = document.createElement("div")
    
    const firstgrandparent = document.createElement("div1")
    firstgrandparent.innerHTML = title

    const secondgrandparent = document.createElement("div")
    secondgrandparent.innerHTML= description

    const thirdgarndparent = document.createElement("button")
    thirdgarndparent.innerHTML = "Mark as Done"
    thirdgarndparent.setAttribute("onclick", `makeasdone(${id})`)

    child.appendChild(firstgrandparent)
    child.appendChild(secondgrandparent)
    child.appendChild(thirdgarndparent)
    child.setAttribute("id", id)
    return child    

}

function addtodo(){
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const parent = document.getElementById("todos")

    parent.appendChild(createchild(title, description, globalId++))
}