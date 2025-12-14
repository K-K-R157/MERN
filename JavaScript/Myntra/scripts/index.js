let bagItems;

onload();

function onload(){
    let bagItemsElement=localStorage.getItem('bagItems');
    bagItems=bagItemsElement ? JSON.parse(bagItemsElement):[];
    displayItemsOnHomepage();
    displayBagIcon();

}

function addToBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else
        bagItemCountElement.style.visibility = 'hidden';
}

function displayItemsOnHomepage(){
    let innerhtml='';
    let itemsContainerElement=document.querySelector('.items-container');

    if(!itemsContainerElement)
            return;

    items.forEach(item=>{
        innerhtml+=`
                <div class="item-container">
                    <image class="item-image" src="${item.image}"></image>
                    <div class="rating">
                        ${item.rating.stars}⭐|${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                </div>`
    });

    itemsContainerElement.innerHTML=innerhtml;
}



// item={
//     item_image:"images/1.jpg",
//     rating:{
//         star:4.5,
//         count:1400
//     },
//     company:'Carlton London',
//     item_name:'Rhodium-Plated CZ Floral Studs',

//     price:{
//         current_price:'RS 606',
//         original_price:'RS 1045',
//         discount:'(42% OFF)'
//     },

// }



// itemsContainerElement.innerHTML=`
//             <div class="item-container">
//                 <image class="item-image" src="${item.item_image}"></image>
//                 <div class="rating">
//                     ${item.rating.star}⭐|${item.rating.count}
//                 </div>
//                 <div class="company-name">${item.company}</div>
//                 <div class="item-name">${item.item_name}</div>
//                 <div class="price">
//                     <span class="current-price">${item.price.current_price}</span>
//                     <span class="original-price">${item.price.original_price}</span>
//                     <span class="discount">${item.price.discount}</span>
//                 </div>
//                 <button class="btn-add-bag">Add to Bag</button>
//             </div>`;
