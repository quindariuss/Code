#include <iostream>
#include "stats.h"
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