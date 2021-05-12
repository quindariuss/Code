//
//  ContentView.swift
//  BookSorter
//
//  Created by Quin'darius Lyles-Woods on 5/9/21.
//

import SwiftUI
import CodeScanner

var bookTitle = "Title"


struct ContentView: View {

    


    
    @State private var isShowingScanner = false
    @State var bookAuthor = "Author"
    
    func handleScan(result: Result<String, CodeScannerView.ScanError>) {
       self.isShowingScanner = false
        switch result {
        case .success(let code):
            let details = code.components(separatedBy: "\n")
           print("\(details)")
            BookSearch().getBookInfo(isbn: "\(details)")
    
        case .failure(let error):
            print("\(error)")
        }
    }
    
    var body: some View {
        VStack {
            Text("\(bookTitle)")
            Button("Scan") {
                self.isShowingScanner = true
            }
        }.sheet(isPresented: $isShowingScanner) {
            CodeScannerView(codeTypes: [.qr, .ean8, .ean13], simulatedData: "Paul Hudson\npaul@hackingwithswift.com", completion: self.handleScan)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}



protocol URLQueryParameterStringConvertible {
    var queryParameters: String {get}
}

extension Dictionary : URLQueryParameterStringConvertible {
  
    var queryParameters: String {
        var parts: [String] = []
        for (key, value) in self {
            let part = String(format: "%@=%@",
                String(describing: key).addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!,
                String(describing: value).addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)!)
            parts.append(part as String)
        }
        return parts.joined(separator: "&")
    }
    
}

extension URL {
  
    func appendingQueryParameters(_ parametersDictionary : Dictionary<String, String>) -> URL {
        let URLString : String = String(format: "%@?%@", self.absoluteString, parametersDictionary.queryParameters)
        return URL(string: URLString)!
    }
}

class BookSearch {
    
    
    func getBookInfo(isbn: String) {
        
        let sessionConfig = URLSessionConfiguration.default

        /* Create session, and optionally set a URLSessionDelegate. */
        let session = URLSession(configuration: sessionConfig, delegate: nil, delegateQueue: nil)

        /* Create the Request:
            Request (GET https://www.googleapis.com/books/v1/volumes)
            */

        guard var URL = URL(string: "https://www.googleapis.com/books/v1/volumes") else {return}
        let URLParams = [
            "q": "\(isbn)",
        ]
        URL = URL.appendingQueryParameters(URLParams)
        var request = URLRequest(url: URL)
        request.httpMethod = "GET"

        /* Start a new Task */
        let task = session.dataTask(with: request, completionHandler: { (data: Data?, response: URLResponse?, error: Error?) -> Void in
            if (error == nil) {
                // Success
                let statusCode = (response as! HTTPURLResponse).statusCode
                print("URL Session Task Succeeded: HTTP \(statusCode)")
                guard let jsondata = data else {return}
                do {
                    let bookData = try JSONDecoder().decode(Books.self, from: jsondata)
                    print(bookData.items[0].volumeInfo.title)
                    bookTitle = ("\(bookData.items[0].volumeInfo.title)")
                }
                catch{
                    print("\(error)")
                }
            }
            else {
                // Failure
                print("URL Session Task Failed: %@", error!.localizedDescription);
            }
        })
        task.resume()
        session.finishTasksAndInvalidate()
    }
}
