import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';

const SongCard = ({ song }) => {
    return (
        <Box
            className="outer-box"
            w="20rem"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            // bg="white"
            boxShadow="md"
            p={"10px"}
            m={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            h="30rem" // Set a fixed height for the card
            rounded={"15px"}
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                transform: "scale(1.05)"
            }}

        >
            <Image src={song.image} alt={`${song.name} cover`} borderRadius="md" />
            <VStack spacing={3} flexGrow={1} justifyContent="space-between">
                <Box textAlign="center" overflow="hidden">
                    <Text fontSize="xl" color="#68BEF0" fontWeight="bold" noOfLines={2}>
                        {song.name}
                    </Text>
                    <Text fontSize="md" color="#68BEF0" noOfLines={2}>
                        {song.artist_name}
                    </Text>
                </Box>
                <audio controls style={{ width: '100%' }}>
                    <source src={song.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </VStack>
        </Box>
    );
};

export default SongCard;
