const input = document.querySelector(".input-item")
const button = document.querySelector(".input-btn");
const list = document.querySelector(".list");
const el = document.getElementsByTagName('li');
const close = document.querySelector("#close");
const listNode = document.getElementById('list_node');

var List = function(){
    var listArray = [];

    
    return {
        addItem : function(){
            if (input.value == ''){
                alert('Please input an item in the list')
            } else {
                var text = input.value;
                console.log(input.value);
                listArray.push(text);
                console.log(listArray.length);
                if (listArray.length > 0){
                    var ID = listArray.indexOf(listArray[listArray.length-1]) + 1;
                    console.log(ID);
                } else {
                    var ID = 0;
                };
                
            };
        },
    
        deleteItem : function (id) {
            if (listArray.length > 0){
                var IdArray = listArray.map(function(el) {
                    return listArray.indexOf(el) + 1;
                    })
                } else {
                    return -1;
                };
            var idIndex = IdArray.indexOf(id)
            
            if (id !== -1){
                listArray.splice(idIndex, 1);
                
            }
    }
}
    
    
}
var newItem = new List();
var addListItem = () => {
    newItem.addItem();
    
}
var renderUIList = () => {
    if (input.value !== '') {
        const markup = `<li id="item"><i class="fas fa-check"></i>${input.value}<i id="close" class="fa fa-close"></i></li>`
        list.insertAdjacentHTML('beforeend', markup);
        input.value = "" ;
    }
} 
var cntrlDeleteItem = function(event){
    var item = document.querySelector('#item');
    console.log(item.innerText);
    console.log(newItem.listArray);
    var newID = newItem.listArray.indexOf(item.innerText) + 1;
    console.log(newID);
    newItem.deleteItem(newID);
    if (item){
        var el = document.getElementById('close').parentElement;
        el.parentElement.removeChild(el);
        console.log(el);
    }
}
var listControl = () => {
    addListItem();
    renderUIList();
}
button.addEventListener("click", listControl);
list.addEventListener("click", cntrlDeleteItem);
