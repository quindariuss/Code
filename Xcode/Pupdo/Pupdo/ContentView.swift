//
//  ContentView.swift
//  Pupdo
//
//  Created by Quin'darius Lyles-Woods on 4/30/21.
//

import SwiftUI

struct ContentView: View {
    let pupname = "Octavia"
    let trick = "sit"
    @State var pass: Double = 0
    @State var fail: Double = 0
    @State var tricks: [String] = []
    @State var trickname = ""
    
    var body: some View {
        TabView
        {
            VStack
            {
                Text("Training")
                Spacer()
                Text("Octavia")
                Text("Trick One")
                Spacer()
                HStack
                {
                    Button("Pass")
                    {
                        print("pass")
                    }
                    Spacer()
                    Button("Fail")
                    {
                        print("fail")
                    }
                }.padding()
            }
            .tabItem
            {
                Text("Train")
            }
            VStack
            {
                Text("Octavia's")
                Text("Tricks")
                TextField("", text: $trickname)
                List
                {
                  Text("Trick One")
                  Text("Trick Two")
                  Text("Trick Three")
                }
            }
            .tabItem
            {
                Text("Tricks")
            }
            VStack
            {
                Text("Puppy Progress")
             
                    
                List
                {
                    Text("puppy one")
                    Text("puppy two")
                    Text("puppy three")
                }
                RoundedRectangle(cornerSize: CGSize(width: 20, height: 20)).padding()
            }
            .tabItem
            {
                Text("Progress")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ContentView()
        }
    }
}
