//
//  main.cpp
//  Classes
//
//  Created by Quin’darius Lyles-Woods on 10/24/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <iostream>
#define log(x) std :: cout << x << endl;

class Player{
public:
    int x, y, speed;
};

struct PlayerOne{
    int x, y, speed;
};
int main(int argc, const char * argv[]) {
    Player bob;
    bob.speed = 3;
    bob.x = 1;
    bob.y = 4;
    
    PlayerOne bobby;
    bobby.speed = 6;
    bobby.x = 3;
    bobby.y =3;
}

