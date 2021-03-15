//
//  priority_queue.hpp
//  Lab 13
//
//  Created by Quin’darius Lyles-Woods on 11/29/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//



#ifndef _PRIORITY_QUEUE_H

#define _PRIORITY_QUEUE_H

#include "heap.hpp"

template <typename T>

class priority_queue

{

public:

priority_queue();

// postcondition: empty priority_queue has been created

void pop();

// precondition: priority_queue is not emtpy

// postcondition: highest priority item has been removed

void push(const T& item);

// postcondition: item has been inserted

bool empty() const;

// postcondition: returned whether priority queue is empty

unsigned int size() const;

// postcondition: returned number of items in the priority queue

T top() const;

// precondition: priority queue is not empty

// postcondition: copy of highest priority item has been returned

private:

heap<T> h;

};

#endif // _PRIORITY_QUEUE_H

template<typename T>

inline priority_queue<T>::priority_queue()

{

}

template<typename T>

inline void priority_queue<T>::pop()

{

if (!empty())

h.remove();

}

template<typename T>

inline void priority_queue<T>::push(const T & item)

{

h.insert(item);

}

template<typename T>

inline bool priority_queue<T>::empty() const

{

return h.size() == 0;

}

template<typename T>

inline unsigned int priority_queue<T>::size() const

{

return h.size();

}

template<typename T>

inline T priority_queue<T>::top() const

{

if (!empty()) {

return h.max();

}


