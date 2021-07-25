const input = document.querySelector(".input-item")
const button = document.querySelector(".input-btn");
const list = document.querySelector(".list");
const el = document.getElementsByTagName('li');
const close = document.querySelector("#close");
const listNode = document.getElementById('list_node');


class List {
    constructor(){
        this.array = []
    }

    
// var listArray = this.array;
    createItem () {
        var text = input.value;
        this.array.push(text);
        return text;
        // if (this.array.length > 0){
        //     var ID = this.array.indexOf(this.array[this.array.length-1]) + 1;
        //     console.log(ID);
        // } else {
        //     var ID = 0;
        // };
        
    }

    deleteItem = (id, arr) => {
        if (arr.length > 0){
            var IdArray = arr.map(function(el) {
                return arr.indexOf(el) + 1;
                })
            } else {
                return -1;
            };
        var idIndex = IdArray.indexOf(id)
        
        if (id !== -1){
            arr.splice(idIndex, 1);
            
        }
    }
}
const newItem = new List();
var addListItem = () => {
    
    newItem.createItem();
    return newItem
}
var deleteListItem = () => {
    var item = document.querySelector('#item');
    console.log(item.innerText);
    // newItem = new List();
    console.log(newItem.array)
    var newID = newItem.array.indexOf(item.innerText) + 1;
    console.log(newID);
    newItem.deleteItem(newID, newItem.array);
}
var cntrlDeleteItem = function(event){
    deleteListItem()
    // var item = document.querySelector('#item');
    // console.log(item.innerText);
    // newItem = new List();
    // console.log(newItem.array)
    // var newID = newItem.array.indexOf(item.innerText) + 1;
    // console.log(newID);
    // deleteItem(newID);
    if (item){
        var el = document.getElementById('close').parentElement;
        el.parentElement.removeChild(el);
        console.log(el);
        // var el = document.getElementById('close').parentElement;
    }
}
    

var renderUIList = () => {
    if (input.value !== '') {
        const markup = `<li id="item"><i class="fas fa-check"></i>${input.value}<i id="close" class="fa fa-close"></i></li>`
        list.insertAdjacentHTML('beforeend', markup);
        input.value = "" ;
    }
}
var listControl = () => {
    
    addListItem();
    renderUIList();
}
button.addEventListener("click", listControl);
list.addEventListener("click", cntrlDeleteItem);
