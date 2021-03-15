//
//  main.cpp
//  Log Class
//
//  Created by Quin’darius Lyles-Woods on 10/31/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//

#include <iostream>
class Log
{
private:
    int m_LogLevel;
public:
    void SetLevel(int level){
        m_LogLevel = level;
    }
    void Warn(const char* message){
        std::cout<<"[WARNING]"<<message;
    }
    void Error(const char* message){
        std::cout<<"[ERROR]"<<message;
    }
    void Info(const char* message){
        std::cout<<"[INFO]"<<message;
    }
};


int main(int argc, const char * argv[]) {

    
    return 0;
}
