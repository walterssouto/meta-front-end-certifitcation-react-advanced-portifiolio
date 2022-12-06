import { Box, Divider, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack>

      <Heading> {title} </Heading>
      <Image src={imageSrc} /> 
      <Box
        bgColor="#fff" 
        position="relative" 
        top="-10px" 
        color="#000"
        padding="10px"
        borderBottomRightRadius="8px"
        borderBottomLeftRadius="8px"
        cursor="pointer"
      >
      <Text marginBottom="1rem">
      {description}
      </Text>
      
      <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x"  /></Text>
      </Box>
    </VStack>)
      

  
};

export default Card;
