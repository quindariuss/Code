//
//  figure 5.cpp
//  Assignment 4
//
//  Created by Quin’darius Lyles-Woods on 10/16/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <stdio.h>

//Pre-condition: head_ptr is the head pointer of a linked list.
size_t list_length(const node* head_ptr)
{
    const node *cursor;
    size_t answer;
    // initially size = 0
    
    answer = 0;
    // starting loop and till cursor reaches the end
    for(cursor = head_ptr; cursor != NULL; cursor = cursor->link())
        ++answer;
    return answer;
}
//Post-Condition: The value returned is the number of nodes in the linked list
