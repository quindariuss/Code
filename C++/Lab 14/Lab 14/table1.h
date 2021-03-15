//
//  table1.h
//  Lab 14
//
//  Created by Quin’darius Lyles-Woods on 12/12/19.
//  Copyright © 2019 Quin’darius Lyles-Woods. All rights reserved.
//
#ifndef TABLE1_H
#define TABLE1_H
#include <cstdlib>    // Provides size_t

namespace main_savitch_12A
{
	template <class RecordType>
	class table
	{
	public:
		// MEMBER CONSTANT -- See Appendix E if this fails to compile.
		static const std::size_t CAPACITY = 811;
		// CONSTRUCTOR
		table();
		// MODIFICATION MEMBER FUNCTIONS
		void insert(const RecordType& entry);
		void remove(int key);
		// CONSTANT MEMBER FUNCTIONS
		bool is_present(int key) const;
		void find(int key, bool& found, RecordType& result) const;
		std::size_t size() const { return used; }
	private:
		// MEMBER CONSTANTS -- These are used in the key field of special records.
		static const int NEVER_USED = -1;
		static const int PREVIOUSLY_USED = -2;
		// MEMBER VARIABLES
		RecordType data[CAPACITY];//hashtable
		std::size_t used;
		// HELPER FUNCTIONS
		std::size_t hash(int key) const;
		std::size_t double_Hashing(int key, int i) const;
		std::size_t quadratic_hashing(int key, int i)const;
		std::size_t next_index(std::size_t index) const;

		void find_index(int key, bool& found, std::size_t& index) const;
		bool never_used(std::size_t index) const;
		bool is_vacant(std::size_t index) const;
	};
}

#include "table1.template" // Include the implementation.

#endif // TABLE1_H

