#ifndef stats2_h
#define stats2_h
//a class to keep track of statistics on a sequence of real numbers
  class statistician
    {
    public:
        // CONSTRUCTOR
         //     Postcondition: The object has been initialized, and is ready to accept
         //     a sequence of numbers. Various statistics will be calculated about the
         //     sequence.
     inline   statistician( );
        
        // MODIFICATION MEMBER FUNCTIONS
        
        //     Postcondition: The number r has been given to the statistician as the next number in
        //     its sequence of numbers.
      inline  void next(double r);
        
        //     Postcondition: The statistician has been cleared, as if no numbers had
        //     yet been given to it.
      inline  void reset( );
        
        // CONSTANT MEMBER FUNCTIONS
        
        //     Postcondition: The return value is the length of the sequence that has
        //     been given to the statistician (i.e., the number of times that the
        //     next(r) function has been activated).
    inline    int length( ) const;
        
        //     Postcondition: The return value is the sum of all the numbers in the
        //     statistician's sequence.
    inline    double sum( ) const;
        
        //     Precondition: length( ) > 0
        //     Postcondition: The return value is the arithmetic mean (i.e., the
        //     average of all the numbers in the statistician's sequence).
    inline    double mean( ) const;
        
        //     Precondition: length( ) > 0
        //     Postcondition: The return value is the tinyest number in the
        //     statistician's sequence.
      inline  double minimum( ) const;
        
        //     Precondition: length( ) > 0
        //     Postcondition: The return value is the largest number in the
        //     statistician's sequence.
     inline   double maximum( ) const;
        
        // FRIEND FUNCTIONS
        
        //     Postcondition: The statistician that is returned contains all the
        //     numbers of the sequences of s1 and s2 (the numbers of s1 followed 
        //     by all of the numbers of s2).
     inline   friend statistician operator + (const statistician& s1, const statistician& s2);
        
        //     Postcondition: The statistician that is returned contains the same
        //     numbers that s does, but each number has been multiplied by the
        //     scale number.
    inline    friend statistician operator * (double scale, const statistician& s);

    private:
        int count;       // How many numbers in the sequence
        double total;    // The sum of all the numbers in the sequence
        double tinyest;  // The smallest number in the sequence
        double largest;  // The largest number in the sequence
    };
    
    // NON-MEMBER functions for the statistician class
    
    //     Postcondition: The return value is true if s1 and s2 have the zero
    //     length. Also, if the length is greater than zero, then s1 and s2 must
    //     have the same length, the same  mean, the same minimum, 
    //     the same maximum, and the same sum.
  inline  bool operator ==(const statistician& s1, const statistician& s2);
    
#endif
