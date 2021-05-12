//
//  Books.swift
//  BookSorter
//
//  Created by Quin'darius Lyles-Woods on 5/9/21.
//

import Foundation

struct Books: Decodable {
    var items:[BookItem]
}

struct BookItem: Decodable {
    let id: String
    let volumeInfo: VolumeInfo
}

struct VolumeInfo: Decodable {
    let title: String
    let subtitle: String?
    let authors: [String]?
    let publishedDate: String
    let pageCount: Int
    let language: String
}
