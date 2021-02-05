var form = document.getElementById('addForm');

var itemList = document.getElementById('items');


var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    // convert text to lowercase

    var text = e.target.value.toLowerCase();

    // console.log(text)
    var items = itemList.getElementsByTagName('li');
    console.log(items);

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';

        }else{
            item.style.display = 'none';
        }
    })

}

// form submit event

form.addEventListener('submit', addItem);
//delete event

itemList.addEventListener('click', removeItem);

function removeItem(e){

    if(e.target.classList.contains('delete')){
        // console.log(1);
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function addItem(e){
    e.preventDefault();
    console.log(1);

    var newItem = document.getElementById('item').value;

    // create new li eliment

    var li = document.createElement('li');
    //add class

    li.className = 'list-group-item';
    //add text node with input value

    li.appendChild(document.createTextNode(newItem)  );


    var deleteBtn = document.createElement('button');
    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //aapend textnode

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);


    itemList.appendChild(li);

}