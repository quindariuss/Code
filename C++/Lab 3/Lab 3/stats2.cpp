//
//  stats2.cpp
//  Lab 3
//
//  Created by Quin’darius Lyles-Woods on 9/7/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <stdio.h>
#include "stats2.h"

using namespace std;

statistician :: statistician(){
    count = 0;
    total = 0;
    tinyest = 0;
    largest = 0;
}

void statistician::next(double r){
    if(count == 0){
        total = r;
        tinyest = r;
        largest = r;
    }
    else {
        total = total + r;
        if(r > largest){
            largest = r;
        }
        if(r < tinyest){
            tinyest = r;
        }
    }
    count++;
}

void statistician::reset(){
    count = 0;
    total = 0;
    tinyest = 0;
    largest = 0;
}

int statistician::length()const{
    return count;
}

double statistician::sum()const{
    return total;
}

double statistician::mean()const{
    if(count > 0){
        return (total / count);
    }
    else return 0;
}

double statistician::minimum()const{
    return tinyest;
}

double statistician::maximum()const{
    return largest;
}

statistician operator + (const statistician& s1, const statistician& s2){
    double s1_sum,s2_sum;
    
    // Computing the sum of the statistician class variable
    
    s1_sum = s1.sum();
    s2_sum = s2.sum();
    
    statistician sumOf;
    
    sumOf.next(s1.sum());
    sumOf.next(s2.sum());
    
    return sumOf;
}

statistician operator * (double scale,const statistician& s){
    
    double s_total = s.total;
    double s_tinyest = s.tinyest;
    double s_largest = s.largest;
    
    statistician mulOf;
    mulOf.count = s.count;
    mulOf.total = s_total * scale;
    mulOf.tinyest = s_tinyest * scale;
    mulOf.largest = s_largest * scale;
    
    return mulOf;
}

bool operator ==(const statistician& s1, const statistician& s2){
 
    
    if (s1.length() == s2.length())
    {
        return true;
    }
    else
    {
        return false;
    }
}

