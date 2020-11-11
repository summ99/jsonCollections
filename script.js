

let contentGridElement = document.getElementById('photoGrid');
let jsonData = [
  {"Item": "Waterpik Portable Water Flosser", "Picture": "waterpik.jpg", "Gift Price": "$33.50"},
  {"Item": "Gudetama Mug", "Picture": "gudetama.jpg", "Gift Price": "$25.50"},
  {"Item": "Cold Brew Iced Coffee Maker", "Picture": "coffeemaker.jpg", "Gift Price": "$35.99"},
  {"Item": "Beer-infused Hot Sauce", "Picture": "hotsauce.jpg", "Gift Price": "$24.99"},
  {"Item": "Fresh Lip Balm Set", "Picture": "lipbalms.png", "Gift Price": "$45.00"},
  {"Item": "Desk Tree Lamp", "Picture": "lmap.jpg", "Gift Price": "$21.99"},
  {"Item": "Pimple Patches", "Picture": "patches.jpg", "Gift Price": "$23.00"},
  {"Item": "Terrarium Candles", "Picture": "candles.jpg", "Gift Price": "$25.00"},
  {"Item": "Compact Cheeseboard with Knives", "Picture": "cheese.jpg", "Gift Price": "$42.00"},
  {"Item": "Smart Alarm", "Picture": "alarm.jpg", "Gift Price": "$39.99"},
  {"Item": "Foldable Laptop Stand", "Picture": "stand.jpg", "Gift Price": "$25.99"},
]
function createElement(incomingJSON){
  //create whole item div
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');
  newContentElement.style.backgroundcolor = "#eee";

  let newContentName = document.createElement("H4");
  newContentName.classList.add('contentName');
  newContentName.innerText = incomingJSON['Item'];
  newContentElement.appendChild(newContentName);

  let newContentPic = document.createElement("IMG");
  newContentPic.classList.add("giftImg");
  newContentPic.src = incomingJSON['Picture'];
  newContentElement.appendChild(newContentPic);

  contentGridElement.appendChild(newContentElement);
}

createElement(jsonData);
