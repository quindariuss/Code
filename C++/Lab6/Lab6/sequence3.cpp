//
//  sequence3.cpp
//  Lab6
//
//  Created by Quin’darius Lyles-Woods on 9/28/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <stdio.h>
#include <assert.h>
#include "sequence3.h"
namespace main_savitch_5
{

inline sequence::sequence()
{
head_ptr = NULL;
tail_ptr = NULL;
precursor = NULL;
cursor = head_ptr;
many_nodes = 0;
}

inline sequence::sequence(const sequence& source)
{
int pos = 1;
for(cursor = source.head_ptr; cursor != source.cursor; cursor = cursor -> link())
{
pos++;
}
list_copy(source.head_ptr,head_ptr,tail_ptr);
cursor = list_locate(head_ptr, (size_t) pos);
if(pos == 1)
{
precursor = NULL;
}
else
{
precursor = list_locate(head_ptr, (size_t) pos - 1);
}
many_nodes = source.many_nodes;
}

inline sequence::~sequence()
{
many_nodes = 0;
list_clear(head_ptr);
}

inline void sequence::start()
{
cursor = head_ptr;
}

inline void sequence::advance()
{
assert(is_item());
precursor = cursor;
cursor = cursor -> link();
}

inline void sequence::insert(const value_type &entry)
{
if(head_ptr == NULL)
{
list_head_insert(head_ptr, entry);
cursor = head_ptr;
precursor = NULL;
}
else if(cursor == NULL || cursor == head_ptr)
{
list_head_insert(head_ptr, entry);
cursor = head_ptr;
}
else
{
list_insert(precursor, entry);
cursor = precursor -> link();
}
many_nodes++;
}

inline void sequence::attach(const value_type &entry)
{
   if(head_ptr == NULL){
          list_head_insert(tail_ptr, entry);
      }
    
    
}

inline void sequence:: operator =(const sequence &source)
{
  
if (this == &source)
{
return;
}
list_clear(head_ptr);
many_nodes = 0;
int index = 1;

for(cursor = source.head_ptr; cursor != source.cursor; cursor = cursor -> link())
{
index++;
}
list_copy(source.head_ptr, head_ptr, tail_ptr);
cursor = list_locate(head_ptr, (size_t) index);

if(index == 1)
{
precursor = NULL;
}
else
{
precursor = list_locate(head_ptr, (size_t) index - 1);
}
many_nodes = source.many_nodes;
}

inline void sequence::remove_current()
{
//Implement this function
}

inline sequence::value_type sequence::current() const
{
assert(is_item());
return cursor -> data();
}

}

