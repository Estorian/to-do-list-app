
function newItem(){

//javascript
//1. Adding a new item to the list of items:
  let list = $('#list');
  let li = $('<li></li>');
  let textInput = document.createTextNode($('#input').val());
  console.log(textInput);
  li.append(textInput);
  console.log(li);

  if ($('#input').val() === '') {
    alert("You must write something!");
  } else {
    list.append(li);
    console.log('added to list');
    console.log(list);
  }

 //2. Crossing out an item from the list of items:
  li.on('dblclick', function (){
    li.toggleClass('strike');
  });

 //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');  //document.createElement('crossOutButton');
 	li.append(crossOutButton);

 	crossOutButton.on('click', function() {
    li.hide()
  });
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

 // 4. Reordering the items:
   $('#list').sortable();
   $('input').val('');
}

$('#input').keypress(function(e) {
  if (e.keyCode == '13') {
    e.preventDefault();
    newItem();
    $('#input').val('');
  }
});
