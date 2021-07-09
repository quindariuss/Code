const fs = require("fs");
file =
  "/Volumes/Untitled/Users/quin/Documents/Code/Javascript/genmockdata/data.json";

var json = `        {
  "_id": "60e8258f06b57c3372777270",
  "id": "60e8258f06b57c3372777270",
  "userId": "60e1bf4f231b0b39e200a3d4",
  "generatedAddress": "60e22c5c1e0f822e8248fb27",
  "fromAddress": "nytdirect@nytimes.com",
  "fromName": "The New York Times",
  "subject": "The Morning: Biden’s new push",
  "faviconUrl": "https://throttlehq.com/images/favicons/nytimes.com.ico",
  "isRead": false,
  "subscriptionUrl": "https://www.nytimes.com/newsletters",
  "subscriptionHostname": "nytimes.com",
  "sharedReadCount": 0,
  "isShared": false,
  "previewUrl": "/email/60e8258f06b57c3372777270/preview.jpeg",
  "categoryName": null,
  "categoryId": null,
  "createdAt": "2021-07-09T10:31:43.930Z",
  "createdAtLocalFormatted": "July 9th 2021, 6:31:43 am",
  "toAddress": "wv73xfovxr4rew0ik2@thrttl.com",
  "isCatchAllAddress": false
},
{
  "_id": "60e8055e1e0f822e82495ebc",
  "id": "60e8055e1e0f822e82495ebc",
  "userId": "60e1bf4f231b0b39e200a3d4",
  "generatedAddress": "60e22d1e06b57c3372770d06",
  "fromAddress": "noreply@sidebar.io",
  "fromName": "Sidebar",
  "subject": "Tabs in HTML, RTL.WTF, Markers, Pairing Fonts, Astro",
  "faviconUrl": "https://throttlehq.com/images/favicons/sidebar.io.svg",
  "isRead": false,
  "subscriptionUrl": "https://sidebar.io/",
  "subscriptionHostname": "sidebar.io",
  "sharedReadCount": 0,
  "isShared": false,
  "previewUrl": "/email/60e8055e1e0f822e82495ebc/preview.jpeg",
  "categoryName": null,
  "categoryId": null,
  "createdAt": "2021-07-09T08:14:22.725Z",
  "createdAtLocalFormatted": "July 9th 2021, 4:14:22 am",
  "toAddress": "yr2g9ovrxr4rew0ik2@thrttl.com",
  "isCatchAllAddress": false
}`;

var topoffile = `{
    "pageInfo": {
      "current": 1,
      "previous": null,
      "next": 2,
      "count": 2,
      "itemCount": 1
    },
    "readingList": [
      {
        "date": "Today, Friday July 9",
        "emails": [`;

var contents = "";

for (index = 0; index < 1000; index++) {
  contents = contents.concat(json);
}

var endoffile = `]
}
]
}`;
console.log({ topoffile });
var filedata;
contents = contents.concat(json);
console.log({ contents });

const readfile = async (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  });
};

function writefile(file, content) {
  fs.writeFile(file, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("success");
  });
}

var completefile = topoffile + contents + endoffile;
readfile(file);

console.log({ completefile });

writefile(file, completefile);
