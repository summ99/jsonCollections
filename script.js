

let contentGridElement = document.getElementById('photoGrid');
let jsonData = [
  {"item" : "Portable Water Flosser", "picture" : "https://images-na.ssl-images-amazon.com/images/I/716bob5yDeL._SL1500_.jpg",
  "giftPrice" : "$33.50", "link" : "https://www.amazon.com/gp/product/B07DQSC9B5/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1"},
  {"item" : "Gudetama Mug", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51659Rx6M3L._AC_SL1063_.jpg",
  "giftPrice" : "$25.50", "link" : "https://www.amazon.com/gp/product/B01LWZABWH/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"},
  {"item" : "Cold Brew Iced Coffee Maker", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71ijVZ%2BPQ8L._AC_SL1500_.jpg",
  "giftPrice" : "$35.99", "link" : "https://www.amazon.com/gp/product/B06Y27W76B/ref=ox_sc_saved_title_6?smid=A3LZ63F7KIBVIM&psc=1"},
  {"item" : "Beer-infused Hot Sauce", "picture" : "https://images-na.ssl-images-amazon.com/images/I/919Az-BspvL._SL1500_.jpg",
  "giftPrice" : "$24.99", "link" : "https://www.amazon.com/Beer-infused-Variety-Sriracha-Serrano-Chipotle/dp/B01KSD9JKU/ref=sr_1_2?crid=36I60PNSHH1PK&dchild=1&keywords=beer+infused+hot+sauce&qid=1605203433&s=grocery&sprefix=beer+infu%2Cgrocery%2C153&sr=1-2"},
  {"item" : "Fresh Lip Balm Set", "picture" : "https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw4ed94886/Products/Packshots/H00005772_Packshot_H20_Set06A_Box_silo.png?sw=1000&sh=1000&bgcolor=F5FAFD&sfrm=png",
  "giftPrice" : "$45.00", "link" : "https://www.fresh.com/us/sugar-lip-bestsellers-tin-H00005772.html"},
  {"item" : "Desk Tree Lamp", "picture" : "https://images-na.ssl-images-amazon.com/images/I/6146FfaBW6L._AC_SL1500_.jpg",
  "giftPrice" : "$21.99", "link" : "https://www.amazon.com/gp/product/B07R1MNVRW/ref=ox_sc_saved_title_3?smid=A3DQS5N2DCQ8I1&psc=1"},
  {"item" : "Pimple Patches", "picture" : "https://cdn.accentuate.io/4529262592042/5730294759466/2020_Hero_Maskne_InHand-v1600362309191.jpg?1200x1200",
  "giftPrice" : "$23.00", "link" : "https://www.herocosmetics.us/products/maskne-bundle"},
  {"item" : "Terrarium Candles", "picture" : "https://www.uncommongoods.com/images/items/49500/49575_1_640px.jpg",
  "giftPrice" : "$25.00", "link" : "https://www.uncommongoods.com/product/terrarium-candle"},
  {"item" : "Cheeseboard with Knives", "picture" : "https://www.uncommongoods.com/images/items/40100/40120_1_640px.jpg",
  "giftPrice" : "$42.00", "link" : "https://www.uncommongoods.com/product/compact-swivel-cheese-board-with-knives"},
  {"item" : "Smart Alarm", "picture" : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6335/6335321cv11d.jpg",
  "giftPrice" : "$39.99", "link" : "https://www.bestbuy.com/site/lenovo-smart-clock-with-google-assistant-gray/6335321.p?skuId=6335321"},
  {"item" : "Foldable Laptop Stand", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51PGbqguIYL._AC_SL1000_.jpg",
  "giftPrice" : "$25.99", "link" : "https://www.amazon.com/dp/B07TB6BFH9/ref=twister_B085BZW5K8?_encoding=UTF8&psc=1"},
  {"item" : " Label Maker Machine", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51n8IOS6f1L._AC_SL1200_.jpg",
  "giftPrice" : "$36.99", "link" : "https://www.amazon.com/gp/product/B088JTD1PZ/ref=ox_sc_saved_title_7?smid=A2RBDYEF3QTW9A&psc=1"},
  {"item" : "Avocado Multi-Tool", "picture" : "https://www.uncommongoods.com/images/items/50200/50222_2_640px.jpg",
  "giftPrice" : "$15.00", "link" : "https://www.uncommongoods.com/product/avocado-multi-tool"},
  {"item" : "Countertop Citrus Juicer", "picture" : "https://www.uncommongoods.com/images/items/48400/48410_1_640px.jpg",
  "giftPrice" : "$90.00", "link" : "https://www.uncommongoods.com/product/countertop-citrus-juicer"},
  {"item" : "Paint-by-Shadows Kit", "picture" : "https://www.uncommongoods.com/images/items/52200/52267_1_640px.jpg",
  "giftPrice" : "$45.00", "link" : "https://www.uncommongoods.com/product/paint-by-shadows-kit"},
  {"item" : "Gardenia Bonsai Tree", "picture" : "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_29036_30PA_01ec.jpg?quality=80&auto=webp&optimze={medium}",
  "giftPrice" : "$69.99", "link" : "https://www.harryanddavid.com/h/flowers-plants/plants-garden/29036?ref=hd_gsc_pla_nontm_desktop_flowers_plants&utm_medium=CPC&utm_source=google&utm_campaign=hd_gsc_pla_nontm_desktop_flowers_plants&gclid=CjwKCAiA17P9BRB2EiwAMvwNyMYiT3eK8BcWCszwUpjcCZSJQouHq5ZbGqck-OU-zmMlHx8IR3dmPBoCuycQAvD_BwE"},
  {"item" : "3 Month Bokksu Gift Box", "picture" : "https://cdn.shopify.com/s/files/1/1083/2612/products/Bokksu_WelcomeBokksu_Open_OnTan_db5746d0-3556-4ca3-a820-5dc720518c25_1200x1200.jpg?v=1600801724",
  "giftPrice" : "$44.95", "link" : "https://www.bokksu.com/products/gift-classic-bokksu"},
  {"item" : "Weighted Sleep Eye Mask", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71oye%2BQ1XHL._AC_SL1500_.jpg",
  "giftPrice" : "$32.00", "link" : "https://www.amazon.com/Patented-Blocking-Sleeping-Relaxation-Microbeads/dp/B07X7K11C7/ref=pd_bxgy_img_2/137-8355708-6396528?_encoding=UTF8&pd_rd_i=B07X7K11C7&pd_rd_r=9e4e02b0-a3fa-42ca-9d0f-93040f38892d&pd_rd_w=tFdig&pd_rd_wg=T8098&pf_rd_p=ce6c479b-ef53-49a6-845b-bbbf35c28dd3&pf_rd_r=B0N4N93M4SDPSZZRQCEZ&psc=1&refRID=B0N4N93M4SDPSZZRQCEZ"},
  {"item" : "3 in 1 Charging Stand", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71h%2BLPZ2AGL._AC_SL1500_.jpg",
  "giftPrice" : "$25.92", "link" : "https://www.amazon.com/dp/B07P9LTLJY?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.s.10236297[src|[ch|[lt|"},

]
createElement(jsonData);

function createElement(incomingJSON){
  for (var i = 0; i < incomingJSON.length; i++) {
    index = i;
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundcolor = "#eee";
    newContentElement.classList.add('contentItem');

    //create imgs of the gift ideas
    let newContentPic = document.createElement("IMG");
    newContentPic.classList.add("giftImg");
    newContentPic.src = incomingJSON[i]['picture'];
    newContentElement.appendChild(newContentPic);

    //create h4 with item name
    let newContentName = document.createElement("H4");
    newContentName.classList.add('contentName');
    newContentName.innerText = incomingJSON[i]['item'];
    newContentElement.appendChild(newContentName);


    let newContentPrice = document.createElement("P");
    newContentPrice.classList.add('contentPrice');
    newContentPrice.innerText =  incomingJSON[i]['giftPrice'];
    newContentElement.appendChild(newContentPrice);

    let newLinkButton = document.createElement("BUTTON");
    newLinkButton.classList.add('linkButtons');
    newLinkButton.addEventListener("click", function(){ newLinkButton.location.href = incomingJSON[i]['link']});
    newContentElement.appendChild(newLinkButton);
    //newLinkButton.href = incomingJSON[i]['link'];


    contentGridElement.appendChild(newContentElement);
  }

}
