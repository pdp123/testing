import React, { useState } from 'react';
import { searchTracks } from './jamendoService';
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  HStack,
  Text,
  Image,
} from '@chakra-ui/react';
import './Search.css'

const Search = () => {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);

  const handleSearch = async () => {
    const results = await searchTracks(query);
    setTracks(results);
  };

  return (
    <Box p={5}>
      <Heading size={"4xl"} mb={4} textAlign="center" color="#C5CEEC">
        Search Music
      </Heading>
      <Heading>I'm a Heading</Heading>
      <Text size={"4xl"}>Hi this is 4xl text</Text>
      <HStack mb={4} spacing={4} justifyContent="center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for music"
          size="md"
          width="400px"
          p={"5px"}
          color={"black"}
          backgroundColor={"#C5CEEC  "}
          rounded={"5px"}
        />
        <div class="search-box">
          <button class="btn-search"><i class="fas fa-search"></i></button>
          <input type="text" class="input-search" placeholder="Type to Search..." />
        </div>
        <Button color="#C5CEEC" onClick={handleSearch}>
          Search
        </Button>
      </HStack>

      <VStack spacing={4}>
        {tracks.map((track) => (
          <Box
            key={track.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
            maxW="600px"
          >
            <HStack spacing={4}>
              <Box>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src={track.album_image}
                  alt={`${track.name} cover`}
                />
              </Box>
              <VStack align="start" spacing={2}>
                <Text fontSize="lg" fontWeight="bold" color="teal.600">
                  {track.name}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {track.artist_name}
                </Text>
                <audio controls style={{ width: '100%' }}>
                  <source src={track.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Search;
