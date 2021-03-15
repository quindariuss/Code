//
//  stackPair.hpp
//  Lab 9
//
//  Created by Quin’darius Lyles-Woods on 10/23/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#pragma once

#include <cstddef>

template<class T>
class stackPair {

public:

    typedef std::size_t size_type;
    static const size_type CAPACITY = 30;

    stackPair();

    T pop_a();
    T pop_b();

    void push_a(T item);
    void push_b(T item);

    size_type size_a() const;
    size_type size_b() const;

    bool is_empty_a() const;
    bool is_empty_b() const;

    bool is_full_a() const;
    bool is_full_b() const;

    void print_stack_pair() const;

private:

    T data[CAPACITY];
    size_type top_a;
    size_type top_b;

};

#include "stackPair.template"



