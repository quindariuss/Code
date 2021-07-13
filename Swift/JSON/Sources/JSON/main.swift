import Foundation

struct Request: Codable {
let pageInfo: PageInfo?
let readingList: [ReadingList]?
}
struct PageInfo:Codable {
let current: Int?
let previous: Int?
let next: Int?
let count: Int?
let itemCount: Int?
}

struct ReadingList:Codable {
let date: String?
let emails: [Email]?
}

struct Email: Codable {
let id: String?
let emailid: String?
let userId: String?
let generatedAddress: String?
let fromAddress: String?
let fromName: String?
let subject: String?
let faviconUrl: String?
let isRead: Bool?
let subscriptionUrl: String?
let subscriptionHostname: String?
let sharedReadCount: Int?
let isShared: Bool?
let previewUrl: String?
let categoryName: Int?
let categoryId: Int?
let createdAt: String?
let createdAtLocalFormatted: String?
let toAddress: String?
let isCatchAllAddress: Bool?
}



let JSON = """
{
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
	  "emails": [
		{
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
		}
	  ]
	}
  ]
}
"""

let jsonData = JSON.data(using: .utf8)!
let data: Request = try! JSONDecoder().decode(Request.self, from: jsonData)

print(data.readingList)