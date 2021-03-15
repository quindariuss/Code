//
//  main.cpp
//  Pointers
//
//  Created by Quin’darius Lyles-Woods on 10/17/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <iostream>
using namespace std;

#define LOG(x) cout << x << endl

int main(){
    
    char* buffer = new char[8];     //creating a new char on the heap
    
    memset(buffer,0,8);             //fills a block of memory
    
    
    char** bob = &buffer;           // a pointer to the memory address of another pointer
    
    LOG(bob);
    
    int var = 8;
    int* ptr = &var;
    *ptr = 10;
    LOG(var);
    cin.get();
}
