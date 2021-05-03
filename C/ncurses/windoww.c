#include <ncurses.h>

int main()
{
initscr();
int height, width, start_y, start_x;
height = 10;
width = 20;
start_y = start_x = 10;

WINDOW * win = newwin(height,width, start_y, start_x);
refresh();

box(win, 0, 0);
wprintw(win, "This is my box");
wrefresh(win);

int c = getch();
}
