//
//  source.cpp
//  Lab 13
//
//  Created by Quin’darius Lyles-Woods on 11/29/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//
#include "priority_queue.hpp"
#include <stdio.h>
int main(){
   
    priority_queue<int> *q = new priority_queue<int>();

    //insert element in queue

    q->push(3);

    q->push(10);

    q->push(1);

    q->push(30);

    q->push(8);

    q->push(9);

    q->push(16);

    q->push(13);

    std::cout << "max priority element: " << q->top() << std::endl;

    q->pop();

    std::cout << "max priority element: " << q->top() << std::endl;

    std::cout << "size of priority queue: " << q->size() << std::endl;




    }


}
