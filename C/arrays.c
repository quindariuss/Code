#include <stdio.h>

int main()
{
	int character, i, new_white, new_other;
	int new_digit[10];

	new_white = new_other = 0; 

	for (i = 0; i < 10; ++i)
	{
	new_digit[i] = 0;
	}
	while((character = getchar()) != EOF)
	{
		if(c >= '0' && character <= '9')
		{
		++new_digit[character- '0'];
		}
		else if (character == ' ' || character == '\n' || character == '\t')
		{
		else 
		{
		++new_other;
		}
		}
	}
}
