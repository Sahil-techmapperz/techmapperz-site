'use client';

import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import moment from 'moment';
import Image from 'next/image';

const SearchPosts = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (search) {
      setSearching(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/search/${search}`
        );
        const result = await response.json();
        console.log(result);
        setSearchResults(result);
        setSearching(false);
      } catch (err) {
        console.error("Failed to fetch posts", err);
        setSearching(false);
      }
    }
  };

  return (
    <div className="mb-8 p-4 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Search Here</h1>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          placeholder="Search by title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="md" colorScheme="gray" variant="link" fontSize="xl" onClick={handleSearch}>
            <AiOutlineSearch />
          </Button>
        </InputRightElement>
      </InputGroup>
      {searching && <h1 className="mt-4">Searching...</h1>}
      <div className="mt-4">
       {searchResults.length > 0 && <h1 className="text-xl font-bold">Search Results</h1>}
        {searchResults.length > 0 && (
          searchResults.map((result) => (
            <div key={result._id} className="mb-4">
              <Link href={`/article/${result._id}`} className="text-lg font-semibold cursor-pointer">
                {result.title}
              </Link>
              <div className="flex items-center mt-2">
                <img src={result.images[0]} alt={result.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div className="flex flex-col">
                  <span className="text-gray-500">{moment(result.created_at).format('YYYY-MM-DD')}</span>
                  <p className="text-sm">{result.content.slice(0, 100) + "..."}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPosts;
