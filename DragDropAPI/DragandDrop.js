function addDragAndDropHandlers(){
    var items = document.getElementById('itemList'),
    shoppingCart = document.getElementById('shoppingCart'),
    itemList = document.getElementsByClassName('item'),
    sum= 0,
    totalPrice = document.getElementById('price');

    for(var i=0;i<itemList.length;i++){
        itemList[i].addEventListener("dragstart",function(ev){
            ev.dataTransfer.setData("Text",this.getAttribute('id'));
        })
    }

    items.addEventListener("dragover",function(ev){
        ev.preventDefault();
    })

    items.addEventListener("drop",function(ev){
        var itemId = ev.dataTransfer.getData("Text"),
        domEleValue = parseInt(document.getElementById(itemId).getAttribute('value'));

        //(document.getElementById(itemId)).parentNode.getAttribute('id')

        if(ev.target.getAttribute('id') == "itemList" && (document.getElementById(itemId)).parentNode.getAttribute('id')!== "itemList"){
            ev.target.appendChild(document.getElementById(itemId));
            sum-=domEleValue;
            totalPrice.innerHTML = sum;
            console.log(ev.target);
        }

        else if (ev.target.parentNode.getAttribute('id') === "itemList" && (document.getElementById(itemId)).parentNode.getAttribute('id')!== "itemList"){
            ev.target.parentNode.appendChild(document.getElementById(itemId));
            sum-=domEleValue;
            totalPrice.innerHTML = sum;
        }

    })

    shoppingCart.addEventListener("dragover",function(ev){
        ev.preventDefault();
    })

    shoppingCart.addEventListener("drop",function(ev){
        ev.preventDefault();
        var itemId = ev.dataTransfer.getData("Text");
        if(ev.target.getAttribute('id') == "shoppingCart" && (document.getElementById(itemId)).parentNode.getAttribute('id')!== "shoppingCart"){
            ev.target.appendChild(document.getElementById(itemId));
            var domEleValue = parseInt(document.getElementById(itemId).getAttribute('value'));
            sum+=domEleValue;
            totalPrice.innerHTML = sum;
        }
    })
}