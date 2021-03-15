//
//  figure 5_6.cpp
//  Assignment 4
//
//  Created by Quin’darius Lyles-Woods on 10/16/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <stdio.h>
//Pre-condition: head_ptr is the head pointer of a linked list.
void list_head_insert(node*& head_ptr, const node::value_type&entry){
    head_ptr = new node(entry, head_ptr);
}
//Post-condition: A new node containing the given entry has been added at the head of the linked list; head_ptr not points to the head of the new longer linked list. NOTE: If there is insuffienct dynamic memory for a new node the bad alloc is thrown before changing the list.
