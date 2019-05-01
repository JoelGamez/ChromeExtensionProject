

var nkjv = '114';
var nlt = '116';
var msg = '97'

function getNkjv(info,tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  
      url: "https://www.bible.com/search/bible?q=" + info.selectionText + '&category=bible&version_id=' + nkjv
    });
}

function getMsg(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://www.bible.com/search/bible?q=" + info.selectionText + '&category=bible&version_id=' + msg
  });
}

function getNlt(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://www.bible.com/search/bible?q=" + info.selectionText + '&category=bible&version_id=' + nlt
  });
}
  
  chrome.contextMenus.create({
    title: "%s in Scripture", 
    id: "verse",
    contexts:["selection"], 
   
  });

  chrome.contextMenus.create({
    title: "NKJV",
    parentId: "verse",
    contexts:["selection"],
    onclick: getNkjv
   
   
  });

  chrome.contextMenus.create({
    title: "NLT",
    parentId: "verse",
    contexts:["selection"],
    onclick: getNlt
  });

  chrome.contextMenus.create({
    title: "MSG",
    parentId: "verse",
    contexts:["selection"],
    onclick: getMsg
  });


 