// adding item to the list
const input = document.querySelector(".input-item")
const button = document.querySelector(".input-btn");
const list = document.querySelector(".list");
// const el = document.getElementsByTagName('li');
const close = document.querySelector("#close");
const listNode = document.getElementById('list_node');
const list_item = document.querySelector('#item');

var List = function(id, item){
    this.id = id;
    this.item = item;
    // this.array = []
    
}
var ID;
var listArray = [];
var IdArray = [];
List.prototype.getItem = function(){
    
    if (input.value == ''){
        alert('Please input an item in the list')
    } else {
        text = input.value;
        listArray.push(text);
        console.log(listArray.length);
        window.localStorage.setItem("items", JSON.stringify(listArray));
        const storage = JSON.parse(window.localStorage.getItem('items'));
        if (storage) {
            listArray = storage;
        }
        }
    }

var newItem = new List();
var addItem = () => {
    newItem.getItem();
    } 
  
    
var deleteItem = (id) => {
    if (listArray.length > 0){
        IdArray = listArray.map(function(el) {
            return listArray.indexOf(el);
            })
        } else {
            return -1;
        };
    idIndex = IdArray.indexOf(id)
    
    if (id !== -1){
        listArray.splice(idIndex, 1);
        console.log(listArray);
    }
    window.localStorage.setItem("items", JSON.stringify(listArray));
    const storage = JSON.parse(window.localStorage.getItem('likes'));
    if (storage) {
        listArray = storage;
    }
}

var cntrlDeleteItem = function(event){
    var el = event.target.parentElement;
    console.log(el.innerText);

    // var item = document.getElementById('close').parentElement;
    // console.log(item.innerText);
    // var itemId = el.id;
    // var spiltId = itemId.split("-");
    var entry = document.getElementsByTagName('li');
    
    var newArray = [];
    for (var i = 0; i < entry.length;  i++ ){
        entry[i].setAttribute('id', 'item' + '-' + i);
        newArray.push(entry[i].innerText)
    }; 
    console.log(newArray);
    var newID = newArray.indexOf(el.innerText);
    console.log(newID);
    deleteItem(newID);
   
    // var el = document.querySelector(`#item-${newID}`);
    var el = event.target.parentElement;
    el.parentElement.removeChild(el);
    console.log(el);

    }

          
var renderUIList = () => {
    if (input.value !== '') {
        const markup = `<li><i class="fas fa-check"></i>${input.value}<i id="close-0" class="fa fa-close"></i></li>`
        list.insertAdjacentHTML('beforeend', markup);
        input.value = "" ;
    }
}

var persistData = () => {
    localStorage.setItem("items", JSON.stringify(this.likes));
}
var listControl = () => {
    addItem();
    renderUIList();
}

const myfunction = (event) => {
    var el = event.target.parentElement;
    console.log(el);
}

button.addEventListener("click", listControl);
list.addEventListener("click", cntrlDeleteItem);



// list.addEventListener("click", myfunction);

