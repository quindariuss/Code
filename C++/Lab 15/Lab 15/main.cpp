//
//  main.cpp
//  Lab 15
//
//  Created by Quin’darius Lyles-Woods on 12/11/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <iostream>
using namespace std;

template <class X>

void heapify(X arr[], int n, int i)
{
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    
    if (l < n && arr[l] > arr[largest])
        largest = l;

    
    if (r < n && arr[r] > arr[largest])
        largest = r;

    
    if (largest != i)
    {
        swap(arr[i], arr[largest]);

       
        heapify(arr, n, largest);
    }
}

template <class X>
void test_heapsort(X arr[], int n)
{
    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    
    for (int i=n-1; i>=0; i--)
    {
        // Move current root to end
        swap(arr[0], arr[i]);

       
        heapify(arr, i, 0);
    }
}

 template <class X>

void test_sorted(X arr[], int n)
{
    for (int i=0; i<n; ++i)
        cout << arr[i] << " ";
    cout << "\n";
}


int main()
{
    srand(time(NULL));
    int arr[5];
    for (int i = 0; i < 5; i++)
    {
        arr[i] = rand();
    }
    int n = sizeof(arr)/sizeof(arr[0]);
    cout << "Int array is \n";
    test_sorted(arr, n);
    test_heapsort(arr, n);

    cout << "Int Sorted array is \n";
    test_sorted(arr, n);

}
