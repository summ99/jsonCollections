

let contentGridElement = document.getElementById('photoGrid');
let jsonData = [
  {"item" : "Portable Water Flosser", "picture" : "https://images-na.ssl-images-amazon.com/images/I/716bob5yDeL._SL1500_.jpg", "giftPrice" : "$33.50"},
  {"item" : "Gudetama Mug", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51659Rx6M3L._AC_SL1063_.jpg", "giftPrice" : "$25.50"},
  {"item" : "Cold Brew Iced Coffee Maker", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71ijVZ%2BPQ8L._AC_SL1500_.jpg", "giftPrice" : "$35.99"},
  {"item" : "Beer-infused Hot Sauce", "picture" : "https://images-na.ssl-images-amazon.com/images/I/919Az-BspvL._SL1500_.jpg", "giftPrice" : "$24.99"},
  {"item" : "Fresh Lip Balm Set", "picture" : "https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw4ed94886/Products/Packshots/H00005772_Packshot_H20_Set06A_Box_silo.png?sw=1000&sh=1000&bgcolor=F5FAFD&sfrm=png", "giftPrice" : "$45.00"},
  {"item" : "Desk Tree Lamp", "picture" : "https://images-na.ssl-images-amazon.com/images/I/6146FfaBW6L._AC_SL1500_.jpg", "giftPrice" : "$21.99"},
  {"item" : "Pimple Patches", "picture" : "https://cdn.accentuate.io/4529262592042/5730294759466/2020_Hero_Maskne_InHand-v1600362309191.jpg?1200x1200", "giftPrice" : "$23.00"},
  {"item" : "Terrarium Candles", "picture" : "https://www.uncommongoods.com/images/items/49500/49575_1_640px.jpg", "giftPrice" : "$25.00"},
  {"item" : "Cheeseboard with Knives", "picture" : "https://www.uncommongoods.com/images/items/40100/40120_1_640px.jpg", "giftPrice" : "$42.00"},
  {"item" : "Smart Alarm", "picture" : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6335/6335321cv11d.jpg", "giftPrice" : "$39.99"},
  {"item" : "Foldable Laptop Stand", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51PGbqguIYL._AC_SL1000_.jpg", "giftPrice" : "$25.99"},
  {"item" : " Label Maker Machine", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51n8IOS6f1L._AC_SL1200_.jpg", "giftPrice" : "$36.99"},
  {"item" : "Avocado Multi-Tool", "picture" : "https://www.uncommongoods.com/images/items/50200/50222_2_640px.jpg", "giftPrice" : "$15.00"},
  {"item" : "Countertop Citrus Juicer", "picture" : "https://www.uncommongoods.com/images/items/48400/48410_1_640px.jpg", "giftPrice" : "$90.00"},
  {"item" : "Paint-by-Shadows Kit", "picture" : "https://www.uncommongoods.com/images/items/52200/52267_1_640px.jpg", "giftPrice" : "$45.00"},
  {"item" : "Gardenia Bonsai Tree", "picture" : "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_29036_30PA_01ec.jpg?quality=80&auto=webp&optimze={medium}", "giftPrice" : "$69.99"},
  {"item" : "Bokksu Gift Box", "picture" : "https://cdn.shopify.com/s/files/1/1083/2612/products/Bokksu_WelcomeBokksu_Open_OnTan_db5746d0-3556-4ca3-a820-5dc720518c25_1200x1200.jpg?v=1600801724", "giftPrice" : "$44.95"},
  {"item" : "Weighted Sleep Eye Mask", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71oye%2BQ1XHL._AC_SL1500_.jpg", "giftPrice" : "$32.00"},

]
createElement(jsonData);

function createElement(incomingJSON){
  for (var i = 0; i < incomingJSON.length; i++) {
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundcolor = "#eee";
    newContentElement.classList.add('contentItem');

    //create h4 with item name
    let newContentName = document.createElement("H4");
    newContentName.classList.add('contentName');
    newContentName.innerText = incomingJSON[i]['item'] + " " + incomingJSON[i]['giftPrice'];
    newContentElement.appendChild(newContentName);

    //create imgs of the gift ideas
    let newContentPic = document.createElement("IMG");
    newContentPic.classList.add("giftImg");
    newContentPic.src = incomingJSON[i]['picture'];
    newContentElement.appendChild(newContentPic);

    contentGridElement.appendChild(newContentElement);

  }

}
