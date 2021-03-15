//
//  assignment.cpp
//  Lab 8
//
//  Created by Quin’darius Lyles-Woods on 10/14/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <stdio.h>
#include "node1.h"
using namespace std;

void printData(node* head, const node::value_type& x,
const node::value_type& y);

int main()
{
node* p = new node(2);
p->set_link(new node(5));
p->link()->set_link(new node(7));
p->link()->link()->set_link(new node(9));
p->link()->link()->link()->set_link(new node(11));

printData(p, 5, 9);

return 0;
}


void printData(node* head, const node::value_type& x,
const node::value_type& y)
{
node* firstx = NULL;

while (head != NULL && firstx == NULL)
{
if (head->data() == x)
firstx = head;
head = head->link();
}

while (firstx != NULL)
{
cout << firstx->data() << " ";
if (firstx->data() == y)
break;
firstx = firstx->link();
}
cout << endl;
}
