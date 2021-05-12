//
//  DataProvider.swift
//  Data
//
//  Created by Quin'darius Lyles-Woods on 4/29/21.
//

import CoreData

class Data
{
    let pcon : NSPersistentContainer
    init() {
        pcon = NSPersistentContainer(name: "Data")
        
        pcon.loadPersistentStores(completionHandler:
        {
          description, error in
            if let error = error
            {
                fatalError("fuck:\(error)")
            }
        }
        )
    }
  
}

public extension Data {
  func saveBook(named name: String) {
    let book = Book(context: persistentContainer.viewContext)
    book.name = name

    do {
      try persistentContainer.viewContext.save()
      print("Book saved succesfully")
    } catch {
      persistentContainer.viewContext.rollback()
      print("Failed to save book: \(error)")
    }
  }
}


public extension Data {
  func getAllBooks() -> [Book] {
    let fetchRequest: NSFetchRequest<Book> = Book.fetchRequest()

    do {
      return try persistentContainer.viewContext.fetch(fetchRequest)
    } catch {
      print("Failed to fetch books: \(error)")
      return []
    }
  }
}

public extension Data {
  func deleteBook(_ book: Book) {
    persistentContainer.viewContext.delete(book)

    do {
      try persistentContainer.viewContext.save()
    } catch {
      persistentContainer.viewContext.rollback()
      print("Failed to save context: \(error)")
    }
  }

  func updateBook(_ book: Book) {
    do {
      try persistentContainer.viewContext.save()
    } catch {
      persistentContainer.viewContext.rollback()
      print("Failed to save context: \(error)")
    }
  }
}
