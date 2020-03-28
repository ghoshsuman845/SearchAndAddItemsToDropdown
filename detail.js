function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add(event) {
    var task = document.getElementById('task').value;
    if (event.keyCode === 9) {
        event.preventDefault();
        var todos = get_todos();
        todos.push(task);
        localStorage.setItem('todo', JSON.stringify(todos));
     
        show();
       
       }
   
 
    return false;
}
 
// function remove() {
//     var id = this.getAttribute('id');
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));
 
//     show();
 
//     return false;
// }
 
function show() {
    var todos = get_todos();
 
    var html = '<ul class="list-group" id="listItem">';
    for(var i=0; i<todos.length; i++) {
        html += '<li class="list-group-item" style="height:45px;width:87%;margin: 11px 17px;border-radius:0px;border: 1px solid #ddd;">'+ 
        '<a class="dropdown-item" style="width: 117%;margin: -11px -19px;height:41px;padding: 8px 22px;" href="#">'
         + todos[i] ;
        };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    
    ul = document.getElementById("listItem");
    console.log(ul);
    
    li = ul.getElementsByTagName("li");
    console.log(li);
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a);
        
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            
            a.style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
 
document.getElementById('add').addEventListener('keyup', add);
show();