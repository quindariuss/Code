//
//  main.cpp
//  Lab 9
//
//  Created by Quin’darius Lyles-Woods on 10/23/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include "stackPair.hpp"
#include <iostream>

using namespace std;

int main() {
    stackPair<int> sp;

    cout << "stack_pair created with front end A & back end B." << endl;
    cout << "Is A empty? " << sp.is_empty_a() << endl;
    cout << "Is B empty? " << sp.is_empty_b() << endl;
    cout << "print stack_pair: " << endl;
    sp.print_stack_pair();
    cout << '\n';


    for (int i = 1; i <= 15; i++) {
           sp.push_a(i);
       }
       cout << "A size: " << sp.size_a() << endl;
       cout << "print stack_pair: " << endl;
       sp.print_stack_pair();
       std::cout << '\n';
    cout << "Capacity: " << stackPair<int>::CAPACITY << endl;
    cout << "Push 15 items into A..." << endl;
   


    cout << "Push 15 items into B to fill stack_pair..." << endl;
    for (int i = 30; i > 15; i--) {
        sp.push_b(i);
    }
    cout << "B size: " << sp.size_b() << endl;
    cout << "print stack_pair: " << endl;
    sp.print_stack_pair();
    std::cout << '\n';

    cout << "Popping from A returns " << sp.pop_a() << endl;
       cout << "A size: " << sp.size_a() << endl;

    cout << "A full? " << sp.is_full_a() << endl;
    cout << "B full? " << sp.is_full_b() << endl;

   
    cout << "print stack_pair: " << endl;
    sp.print_stack_pair();
    std::cout << '\n';


    return 0;
}
