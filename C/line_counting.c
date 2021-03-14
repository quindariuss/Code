#include <stdio.h>

int main() {
	int count;
	int newline = 0;
	int blank = 0; 
	int tab = 0;
	while((count = getchar()) != EOF)
	{
		if(count == '\n')
		{
			++newline;
		}
		if(count == '\t')
		{
			++tab;
		}
		if(count == ' ')
		{
			++blank;
		}
	}
	printf("You have: %d lines\n", newline);
	printf("You have: %d tab\n", tab);
	printf("You have: %d blank\n", blank);
}
