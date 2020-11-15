
let kitchenGridElement = document.getElementById('photoGrid1');
let personalGridElement = document.getElementById('photoGrid2');
let homeGridElement = document.getElementById('photoGrid3');
let funGridElement = document.getElementById('photoGrid4');
let gadgetGridElement = document.getElementById('photoGrid5');
//personal, kitchen, home, gadget, fun
let jsonData = [
  {"category": "personal", "item" : "Portable Water Flosser", "picture" : "https://images-na.ssl-images-amazon.com/images/I/716bob5yDeL._SL1500_.jpg",
  "giftPrice" : "$33.50", "link" : "https://www.amazon.com/gp/product/B07DQSC9B5/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1"},
  {"category": "kitchen", "item" : "Gudetama Mug", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51659Rx6M3L._AC_SL1063_.jpg",
  "giftPrice" : "$25.50", "link" : "https://www.amazon.com/gp/product/B01LWZABWH/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"},
  {"category": "kitchen", "item" : "Cold Brew Iced Coffee Maker", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71ijVZ%2BPQ8L._AC_SL1500_.jpg",
  "giftPrice" : "$35.99", "link" : "https://www.amazon.com/gp/product/B06Y27W76B/ref=ox_sc_saved_title_6?smid=A3LZ63F7KIBVIM&psc=1"},
  {"category": "kitchen", "item" : "Beer-infused Hot Sauce", "picture" : "https://images-na.ssl-images-amazon.com/images/I/919Az-BspvL._SL1500_.jpg",
  "giftPrice" : "$24.99", "link" : "https://www.amazon.com/Beer-infused-Variety-Sriracha-Serrano-Chipotle/dp/B01KSD9JKU/ref=sr_1_2?crid=36I60PNSHH1PK&dchild=1&keywords=beer+infused+hot+sauce&qid=1605203433&s=grocery&sprefix=beer+infu%2Cgrocery%2C153&sr=1-2"},
  {"category": "personal", "item" : "Fresh Lip Balm Set", "picture" : "https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw4ed94886/Products/Packshots/H00005772_Packshot_H20_Set06A_Box_silo.png?sw=1000&sh=1000&bgcolor=F5FAFD&sfrm=png",
  "giftPrice" : "$45.00", "link" : "https://www.fresh.com/us/sugar-lip-bestsellers-tin-H00005772.html"},
  {"category": "home", "item" : "Desk Tree Lamp", "picture" : "https://images-na.ssl-images-amazon.com/images/I/6146FfaBW6L._AC_SL1500_.jpg",
  "giftPrice" : "$21.99", "link" : "https://www.amazon.com/gp/product/B07R1MNVRW/ref=ox_sc_saved_title_3?smid=A3DQS5N2DCQ8I1&psc=1"},
  {"category": "personal", "item" : "Pimple Patches", "picture" : "https://cdn.accentuate.io/4529262592042/5730294759466/2020_Hero_Maskne_InHand-v1600362309191.jpg?1200x1200",
  "giftPrice" : "$23.00", "link" : "https://www.herocosmetics.us/products/maskne-bundle"},
  {"category": "home", "item" : "Terrarium Candles", "picture" : "https://www.uncommongoods.com/images/items/49500/49575_1_640px.jpg",
  "giftPrice" : "$25.00", "link" : "https://www.uncommongoods.com/product/terrarium-candle"},
  {"category": "kitchen", "item" : "Cheeseboard with Knives", "picture" : "https://www.uncommongoods.com/images/items/40100/40120_1_640px.jpg",
  "giftPrice" : "$42.00", "link" : "https://www.uncommongoods.com/product/compact-swivel-cheese-board-with-knives"},
  {"category": "gadget", "item" : "Smart Alarm", "picture" : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6335/6335321cv11d.jpg",
  "giftPrice" : "$39.99", "link" : "https://www.bestbuy.com/site/lenovo-smart-clock-with-google-assistant-gray/6335321.p?skuId=6335321"},
  {"category": "gadget", "item" : "Foldable Laptop Stand", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51PGbqguIYL._AC_SL1000_.jpg",
  "giftPrice" : "$25.99", "link" : "https://www.amazon.com/dp/B07TB6BFH9/ref=twister_B085BZW5K8?_encoding=UTF8&psc=1"},
  {"category": "gadget", "item" : " Label Maker Machine", "picture" : "https://images-na.ssl-images-amazon.com/images/I/51n8IOS6f1L._AC_SL1200_.jpg",
  "giftPrice" : "$36.99", "link" : "https://www.amazon.com/gp/product/B088JTD1PZ/ref=ox_sc_saved_title_7?smid=A2RBDYEF3QTW9A&psc=1"},
  {"category": "kitchen", "item" : "Avocado Multi-Tool", "picture" : "https://www.uncommongoods.com/images/items/50200/50222_2_640px.jpg",
  "giftPrice" : "$15.00", "link" : "https://www.uncommongoods.com/product/avocado-multi-tool"},
  {"category": "kitchen", "item" : "Countertop Citrus Juicer", "picture" : "https://www.uncommongoods.com/images/items/48400/48410_1_640px.jpg",
  "giftPrice" : "$90.00", "link" : "https://www.uncommongoods.com/product/countertop-citrus-juicer"},
  {"category": "fun", "item" : "Paint-by-Shadows Kit", "picture" : "https://www.uncommongoods.com/images/items/52200/52267_1_640px.jpg",
  "giftPrice" : "$45.00", "link" : "https://www.uncommongoods.com/product/paint-by-shadows-kit"},
  {"category": "home", "item" : "Gardenia Bonsai Tree", "picture" : "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_29036_30PA_01ec.jpg?quality=80&auto=webp&optimze={medium}",
  "giftPrice" : "$69.99", "link" : "https://www.harryanddavid.com/h/flowers-plants/plants-garden/29036?ref=hd_gsc_pla_nontm_desktop_flowers_plants&utm_medium=CPC&utm_source=google&utm_campaign=hd_gsc_pla_nontm_desktop_flowers_plants&gclid=CjwKCAiA17P9BRB2EiwAMvwNyMYiT3eK8BcWCszwUpjcCZSJQouHq5ZbGqck-OU-zmMlHx8IR3dmPBoCuycQAvD_BwE"},
  {"category": "fun", "item" : "3 Month Bokksu Gift Box", "picture" : "https://cdn.shopify.com/s/files/1/1083/2612/products/Bokksu_WelcomeBokksu_Open_OnTan_db5746d0-3556-4ca3-a820-5dc720518c25_1200x1200.jpg?v=1600801724",
  "giftPrice" : "$44.95", "link" : "https://www.bokksu.com/products/gift-classic-bokksu"},
  {"category": "home", "item" : "Weighted Sleep Mask", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71oye%2BQ1XHL._AC_SL1500_.jpg",
  "giftPrice" : "$32.00", "link" : "https://www.amazon.com/Patented-Blocking-Sleeping-Relaxation-Microbeads/dp/B07X7K11C7/ref=pd_bxgy_img_2/137-8355708-6396528?_encoding=UTF8&pd_rd_i=B07X7K11C7&pd_rd_r=9e4e02b0-a3fa-42ca-9d0f-93040f38892d&pd_rd_w=tFdig&pd_rd_wg=T8098&pf_rd_p=ce6c479b-ef53-49a6-845b-bbbf35c28dd3&pf_rd_r=B0N4N93M4SDPSZZRQCEZ&psc=1&refRID=B0N4N93M4SDPSZZRQCEZ"},
  {"category": "gadget", "item" : "3 in 1 Charging Stand", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71h%2BLPZ2AGL._AC_SL1500_.jpg",
  "giftPrice" : "$25.92", "link" : "https://www.amazon.com/dp/B07P9LTLJY?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.s.10236297[src|[ch|[lt|"},
  {"category": "personal", "item" : "Aira Facial Steamer", "picture" : "https://cdn.shopify.com/s/files/1/0971/3082/products/Aira-Render-Angle-3-RoseGold_2_041d6dc6-433d-4be3-9941-2b8036cfbb7c_1800x1800.jpg?v=1598458637",
  "giftPrice" : "$41.99", "link" : "https://www.vanityplanet.com/products/aira-ionic-facial-steamer?variant=31229394747494"},
  {"category": "fun", "item" : "Compressable Pillow", "picture" : "https://m.media-amazon.com/images/I/81ggH32ecQL._AC_SL1500_.jpg",
  "giftPrice" : "$24.95", "link" : "https://www.amazon.com/Therm-Rest-Compressible-Backpacking-Airplanes/dp/B01MQLSI1M?ref_=ast_sto_dp"},
  {"category": "fun", "item" : "Second Thoughts Game", "picture" : "https://target.scene7.com/is/image/Target/GUEST_98878d4b-e547-4a97-9d9d-0a9f65e0df0e?fmt=webp&wid=1400&qlt=80",
  "giftPrice" : "$17.99", "link" : "https://www.target.com/p/second-thoughts-game/-/A-79396321#lnk=sametab"},
  {"category": "home", "item" : "Diffuser", "picture" : "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMC54TY_00_m?&wid=1200&height=1500",
  "giftPrice" : "$97.00", "link" : "https://www.neimanmarcus.com/p/campo-beauty-diffuser-prod230210081?childItemId=NMC54TY_"},
  {"category": "fun", "item" : "That's What She Said Game", "picture" : "https://target.scene7.com/is/image/Target/GUEST_c3b23897-3d5c-481a-8cd6-f9b21cb7718a?fmt=webp&wid=1400&qlt=80",
  "giftPrice" : "$24.99", "link" : "https://www.target.com/p/that-s-what-she-said-game/-/A-51093164#lnk=sametab"},
  {"category": "personal", "item" : "L'occitane Advent Calendar", "picture" : "https://images-na.ssl-images-amazon.com/images/I/81cWuN1NdwL._SL1500_.jpg",
  "giftPrice" : "$74.00", "link" : "https://www.loccitane.com/en-us/signature-advent-calendar-10CACLA20.html"},
  {"category": "home", "item" : "Cooluli Mini Fridge", "picture" : "https://m.media-amazon.com/images/I/71yOIE-CqrL._AC_SL1500_.jpg",
  "giftPrice" : "$49.99", "link" : "https://www.amazon.com/Cooluli-Fridge-Electric-Cooler-Warmer/dp/B01G7IL476?ref_=Oct_s9_apbd_otopr_hd_bw_bjv5lz&pf_rd_r=DN59FEP4FN2D1N65B1NR&pf_rd_p=6ee80d68-08c1-5197-96ef-d4c7538083ab&pf_rd_s=merchandised-search-10&pf_rd_t=BROWSE&pf_rd_i=678542011&th=1"},
  {"category": "kitchen", "item" : "De'Longhi Compact Grill", "picture" : "https://images.crateandbarrel.com/is/image/Crate/DelonghiLvnzCmpctAllDyGrllAVS19/$web_pdp_main_carousel_zoom_high$/201113084438/DelonghiLvnzCmpctAllDyGrllAVS19.jpg",
  "giftPrice" : "$79.99", "link" : "https://www.crateandbarrel.com/delonghi-livenza-compact-all-day-grill/s228894"},
  {"category": "home", "item" : "Geo Planter with Stand", "picture" : "https://images.crateandbarrel.com/is/image/Crate/AaroPlanterWMedStandSHF19/$web_pdp_main_carousel_high$/190425132341/aaro-medium-geo-planter-with-stand.jpg",
  "giftPrice" : "$47.96", "link" : "https://www.crateandbarrel.com/aaro-medium-geo-planter-with-stand/s279452"},
  {"category": "kitchen", "item" : "Air Fryer", "picture" : "https://images-na.ssl-images-amazon.com/images/I/710zjb4dFiL._AC_SL1500_.jpg",
  "giftPrice" : "$43.99", "link" : "https://www.amazon.com/BELLA-Electric-Removable-Dishwasher-Basket/dp/B01KI0Q1UY?ref_=ast_sto_dp"},
  {"category": "personal", "item" : "Electric Toothbrush", "picture" : "https://i5.walmartimages.com/asr/abb19024-057b-4c6d-9995-b7655433a111.085b4016ee6f91abcec19958844b7254.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
  "giftPrice" : "$99.95", "link" : "https://www.walmart.com/ip/Philips-Sonicare-ProtectiveClean-6100-Whitening-Rechargeable-Electric-Toothbrush-with-Pressure-Sensor-and-Intensity-Settings-Pastel-Pink-HX6871-49/214082355"},
  {"category": "fun", "item" : "The Office Pillow Cover", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71qfdonlUuL._AC_SL1001_.jpg",
  "giftPrice" : "$11.99", "link" : "https://www.amazon.com/cygnus-Office-Reversible-Decorative-Pillowcase/dp/B07WTW7T8K/ref=sr_1_14?dchild=1&keywords=the+office&qid=1605302996&sr=8-14"},
  {"category": "fun", "item" : "Tortilla Blanket", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71O8qk9St3L._AC_SL1500_.jpg",
  "giftPrice" : "$20.99", "link" : "https://www.amazon.com/mermaker-Burritos-Tortilla-Realistic-Blanket-4/dp/B07QX3YJLH?ref_=ast_sto_dp"},
  {"category": "fun", "item" : "Fish Sandals", "picture" : "https://m.media-amazon.com/images/I/81TEjXDT7rL._AC_SX615_SY462_.jpg",
  "giftPrice" : "$23.99", "link" : "https://www.amazon.com/Coddies-Flops-Unisex-Slippers-Sandals/dp/B07CT4WJ71?ref_=ast_sto_dp"},
  {"category": "home", "item" : "Balance Ball Chair", "picture" : "https://images-na.ssl-images-amazon.com/images/I/91U8YwNXF5L._AC_SL1500_.jpg",
  "giftPrice" : "$69.98", "link" : "https://www.amazon.com/Gaiam-Classic-Balance-Ball-Chair/dp/B0007VB4NE?ref_=ast_sto_dp"},
  {"category": "gadget", "item" : "Smart Mug", "picture" : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367424_rd.jpg;maxHeight=640;maxWidth=550",
  "giftPrice" : "$99.99", "link" : "https://www.bestbuy.com/site/ember-temperature-control-smart-mug-10-oz-black/6367424.p?skuId=6367424&ref=212&loc=1&extStoreId=2518&ref=212&loc=1&gclid=Cj0KCQiA-rj9BRCAARIsANB_4ACWR3rDWKxy3b31VHVV0hcx2jYa77eDKXUJuJ6X8jqgUN4TyzH1QKQaAjq9EALw_wcB&gclsrc=aw.ds"},
  {"category": "gadget", "item" : "Phone Sanitizer", "picture" : "https://www.uncommongoods.com/images/items/25100/251420000006_1_640px.jpg",
  "giftPrice" : "$80.00", "link" : "https://www.uncommongoods.com/product/phonesoap-smartphone-sanitizer?gclid=Cj0KCQiA-rj9BRCAARIsANB_4ABJdbxJV2HQdlFuWwJ5bhbkoc_Iyzp2y7ZmlRRPJ6KHroZBPWlqJW4aAohBEALw_wcB#251420000006?country=US&utm_source=google%20surfaces&utm_medium=organic&aw_cid=418702497&aw_aid=23036126097&aw_dev=c&aw_loc=9004357&aw_key=&aw_mtype=&aw_net=g&aw_ad=89994005337&aw_pos=&aw_shopid=251420000006&aw_prod_partid=740773990747"},
  {"category": "gadget", "item" : "Amazon Echo", "picture" : "https://images-na.ssl-images-amazon.com/images/I/61nZdjOorpL._AC_SL1000_.jpg",
  "giftPrice" : "$99.99", "link" : "https://www.amazon.com/All-New-Echo-4th-Gen/dp/B07XKF5RM3?tag=p00935-20&ascsubtag=00n8LC8VxINiV65felsHNu4"},
  {"category": "gadget", "item" : "Mobile Gaming Controller", "picture" : "https://images-na.ssl-images-amazon.com/images/I/71yPYnmNMRL._SL1500_.jpg",
  "giftPrice" : "$69.99", "link" : "https://www.amazon.com/PowerA-XP5-X-Bluetooth-Controller-Mobile-Gaming/dp/B08F6H8TBD?tag=p00935-20&ascsubtag=07guKYbpryTIt9mCi8P9cnF&th=1"},
  {"category": "personal", "item" : "Teeth Whitening Kit", "picture" : "https://target.scene7.com/is/image/Target/GUEST_d9d74cd0-9f7d-4385-9bad-cb67d640b77e?wid=488&hei=488&fmt=pjpeg",
  "giftPrice" : "$48.00", "link" : "https://shopismile.com/collections/frontpage/products/deluxe-home-teeth-whitening-system"},
  {"category": "personal", "item" : "Bathbomb Set", "picture" : "https://www.lushusa.com/dw/image/v2/BDMQ_PRD/on/demandware.static/-/Sites-lushcosmetics-export/default/dwb1bbed68/images/product/60401_b.jpg?sw=1600&sh=1600",
  "giftPrice" : "$75.95", "link" : "o"},
]

function createElement(incomingJSON){
  for (let i = 0; i < incomingJSON.length; i++) {

    let newContentElement = document.createElement("DIV");
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
    newLinkButton.innerText = "Shop Now";
    newLinkButton.addEventListener("click", function(){ window.location = incomingJSON[i]['link'];});
    newContentElement.appendChild(newLinkButton);

    if (incomingJSON[i]['category'] == 'kitchen'){
      kitchenGridElement.appendChild(newContentElement);
    }
    else if(incomingJSON[i]['category'] == 'home'){
      homeGridElement.appendChild(newContentElement);
    }
    else if(incomingJSON[i]['category'] == 'personal'){
      personalGridElement.appendChild(newContentElement);
    }
    else if
    (incomingJSON[i]['category'] == 'fun'){
      funGridElement.appendChild(newContentElement);
    }
    else {gadgetGridElement.appendChild(newContentElement)}
  //  kitchenGridElement.appendChild(newContentElement);
  }

}
createElement(jsonData);
