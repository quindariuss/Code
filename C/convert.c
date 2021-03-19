#include <stdio.h>
#include <string.h>

int main()
{
char conversion[100];
int type;
char temp[] = "temp";
printf("List of Avalible Conversions:\n");
printf("Type 1 and <Enter> for Fahrenhiet to Celcius");
scanf("%s", conversion);
if(strcmp(conversion, temp) == 0)
{
printf("You have choosen temp converter");
}
}
