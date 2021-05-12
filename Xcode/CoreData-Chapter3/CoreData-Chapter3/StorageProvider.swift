//
//  StorageProvider.swift
//  CoreData-Chapter3
//
//  Created by Quin'darius Lyles-Woods on 4/30/21.
//

import Foundation
import CoreData

class StorageProvider
{
     static var standard = StorageProvider()
    let persistentContainer : NSPersistentContainer
    
    init() {
        ValueTransformer.setValueTransformer(UIImageTransformer(), forName: NSValueTransformerName("UIImageTransformer"))
        persistentContainer = NSPersistentContainer(name: "Model")
    }
}
