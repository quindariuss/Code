#include <stdio.h>

int main(){
int fahrenheit, celsius;
int lower, upper, step;

lower = 0;
upper = 300; 
step = 20; 

fahrenheit = lower; 
printf("Fahrenheit\t Celcius\n");
while (fahrenheit <= upper){
celsius = 5 * (fahrenheit - 32) / 9;
printf("%d\t\t%d\n", fahrenheit, celsius);
fahrenheit += step; 
}
celsius = lower;
printf("Celcius\t\tFahrenheit\n");

while (celsius <= upper){
fahrenheit = celsius * 9/5 + 32;
printf("%d\t\t%d\n", celsius,fahrenheit);
celsius += step;

}
return 0;
}
