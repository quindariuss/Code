#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <pthread.h>
#include <unistd.h> 

void *threader (void *vargp)
{
int i; 
	
	printf("starting thread");
	sleep(1);
	for(i = 1; i < 500000000; i++)
	{
		
	}
	return NULL;
}

int main()
{

pthread_t thread;



int i; 
clock_t start = clock();
pthread_create(&thread, NULL, threader, NULL);
pthread_join(thread, NULL);

	for(i = 1; i < 500000000; i++)
	{
		
	}
	
clock_t end = clock();

double time = (double)(end - start)/ CLOCKS_PER_SEC;
printf("%f", time);
return 0;
}