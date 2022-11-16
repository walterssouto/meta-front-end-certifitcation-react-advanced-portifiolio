import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Walters!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
//personal photo https://avatars.githubusercontent.com/u/56978845?v=4
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack> 
      <Avatar name={greeting} src="https://github.com/walterssouto.png" />
      <Heading>{greeting} </Heading>
      <Heading>{bio1} </Heading>
      <Heading>{bio2} </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
