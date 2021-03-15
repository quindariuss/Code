//
//  heap.hpp
//  Lab 13
//
//  Created by Quin’darius Lyles-Woods on 11/29/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//


//heap.h



#ifndef _HEAP_H_

#define _HEAP_H_

#include <iostream>

#include <vector>

// This class implements an unbounded max heap.

// class invariant: heap property is satisfied for a max heap

template <typename T>

class heap

{

public:

heap();

// postcondition: empty heap has been created

unsigned int size() const;

// postcondition: number of elements in a heap has been returned

bool is_empty() const;

// postcondtion: returned whether the heap is empty

void insert(const T& item);

// postcondition: item has been added

void remove();

// precondition: heap is not empty

// postcondition: largest item has been removed from the heap

T max() const;

// precondition: heap is not empty

// postcondition: copy of largest element in the heap has been returned

T& max();

// precondition: heap is not empty

// postcondition: access to largest element in the heap has been returned

void MaxHeapify(int i); //heapify the vector

private:

std::vector<T> v;

unsigned int max_child(unsigned int index) const;

// precondition: element at index has children

// postcondition: index of the larger child has been returned

// if there is only 1 child - index of that child has been returned

};

#endif // _HEAP_H_

template<typename T>

inline heap<T>::heap()

{

}

template<typename T>

inline unsigned int heap<T>::size() const

{

return v.size();

}

template<typename T>

inline bool heap<T>::is_empty() const

{

return v.size() == 0;

}

template<typename T>

inline void heap<T>::insert(const T & item)

{

v.push_back(item);

int i = v.size() - 1;

while (i != 0 && v[(i-1)/2] < v[i])

{

T temp = v[i];

v[i] = v[(i-1)/2];

v[(i - 1) / 2] = temp;

i = (i-1)/2;

}

}

template<typename T>

inline void heap<T>::remove()

{

v[0] = v[size() - 1];

auto it = v.end()-1;

v.erase(it);

MaxHeapify(0);

}

template<typename T>

inline void heap<T>::MaxHeapify(int i)

{

int l = 2 * i + 1;

int r = 2 * i + 2;

int largest = i;

if (l < size() && v[l] > v[i])

largest = l;

if (r < size() && v[r] > v[largest])

largest = r;

if (largest != i)

{

T temp = v[i];

v[i] = v[largest];

v[largest] = temp;

MaxHeapify(largest);

}

}

template<typename T>

inline T heap<T>::max() const

{

if (!is_empty())

return v[0];

}

template<typename T>

inline T & heap<T>::max()

{

if (!this->is_empty())

return v[0];

}

template<typename T>

inline unsigned int heap<T>::max_child(unsigned int index) const

{

if (size() == 1)

return v[0];

else {

int l = 2 * index + 1;

int r = 2 * index + 2;

int largest = index;

if (l < size() && v[l] > v[index])

largest = l;

if (r < size() && v[r] > v[largest])

largest = r;

return v[largest];

}

}
