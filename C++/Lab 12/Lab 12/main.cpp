//
//  main.cpp
//  Lab 12
//
//  Created by Quin’darius Lyles-Woods on 11/29/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//


# include <iostream>

# include <cstdlib>

#define MAX 20

using namespace std;

/*

* Node Declaration

*/

struct TreeNode

{

int key;

struct TreeNode *left;

struct TreeNode *right;

struct TreeNode *parent;

}*root;

/*

* Class Declaration

*/

class BST

{

public:

void insert(TreeNode *, TreeNode *);

void inOrder(TreeNode *);

BST()

{

root = NULL;

}

};

/*

* main() Contains Menu

*/

int main()

{

int start, end;

int choice, num;

BST bst;

TreeNode *temp;

//Menu

while (1)

{

cout << endl << "-----------------" << endl;

cout << "Operations on BST" << endl;

cout << "-----------------" << endl;

cout << "1.Insert Element " << endl;

cout << "2. in order traversal" << endl;

cout << "3. Exit" << endl;

cout << "Enter your choice : ";

cin >> choice;

//Start Switch case

switch (choice)

{

//Insert the element

case 1:

temp = new TreeNode;

cout << "Enter the number to be inserted : ";

cin >> temp->key;

bst.insert(root, temp);

break;

//Display the elements in sorted order.

case 2:

cout << "elements in sorted order are:" << endl;

bst.inOrder(root);

cout << endl;

break;

case 3:

exit(1);

default:

cout << "Wrong choice" << endl;

}

}

}

/*

* Inserting Element into the Tree

*/

void BST::insert(TreeNode *tree, TreeNode *newnode)

{

//Initially tree is empty.

//Add the node as root node.

if (root == NULL)

{

root = new TreeNode;

root->key = newnode->key;

root->left = NULL;

root->right = NULL;

cout << "Root Node is Added" << endl;

return;

}

//If the element is repeated.

if (tree->key == newnode->key)

{

cout << "Element already in the tree" << endl;

return;

}

//New element is less than the node in tree

//Insert in the left subtree

if (tree->key > newnode->key)

{

if (tree->left != NULL)

{

insert(tree->left, newnode);

}

else

{

tree->left = newnode;

(tree->left)->left = NULL;

(tree->left)->right = NULL;

cout << "Node Added To Left" << endl;

return;

}

}

//New element is greater than the node in tree

//Insert in the right subtree

else

{

if (tree->right != NULL)

{

insert(tree->right, newnode);

}

else

{

tree->right = newnode;

(tree->right)->left = NULL;

(tree->right)->right = NULL;

cout << "Node Added To Right" << endl;

return;

}

}

}

/*

* Display Tree elements in sorted order

*/

void BST::inOrder(TreeNode *ptr)

{

if(ptr != NULL)

{

inOrder(ptr->left);

cout << ptr->key;

//if(ptr->left!= NULL && ptr->right != NULL)

cout <<" " ;

inOrder(ptr->right);

}

}
