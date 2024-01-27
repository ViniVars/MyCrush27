import {
  Flex,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
   Stack,
  DrawerContent,
  DrawerCloseButton,
  Icon,
    CloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
} from '@chakra-ui/react';

import { Link, useNavigation } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


const ListHeader = ({ children }) => {

  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}
export default function NavBar() {
  const navigate = useNavigate()
   function click(){
        
     navigate("/contact")
   }
  const { isOpen, onOpen, onClose } = useDisclosure();

  const flexStyles = {
   
    px: 4,
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "none", // Set boxShadow to none explicitly
  };


  return (
    <>
      <Flex bg={'#FF4E4C'} position={'fixed'} width={'100%'}{...flexStyles} >
        <IconButton
      icon={<HamburgerIcon fontSize="24px" />} // Adjust fontSize for the icon size
      onClick={onOpen}
      variant="ghost"
      height={12} // Increase the height to change the overall button size
      width={12} // Increase the width to change the overall button size
      color="current"
      aria-label="Menu"
    />
        <Box
         
         w={{ base: '100%', md: '1000px' }} // Adjust the width for mobile and larger screens
      h={{ base: '100px', md: '150px' }} // Adjust the height for mobile and larger screens
          margin={4}
          background={`url(${"https://firebasestorage.googleapis.com/v0/b/anits-fest.appspot.com/o/finalbro.svg?alt=media&token=e3b404c6-809a-4185-9982-39cbbc4d9812"})`}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        >
        </Box>
    <Button
          display={{ base: 'none', md: 'inline-flex' }}
          bg="black"
          color="white"
          marginLeft={4}
          onClick={click}
          _hover={{ bg: 'gray.800' }}
          rounded="full"
        >
          Beta Tester
        </Button>
      </Flex>

 <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay>
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader bg={'#FF4E4C'}>Menu</DrawerHeader>
      <DrawerBody bg={'#FF4E4C'}>
        {/* Replace these Box components with your actual navigation links */}
       
        <Stack align={'flex-start'}>
  <ListHeader>Support</ListHeader>
  <Link to="/help-center">Help Center</Link>
  <Link to="/terms-of-service">Terms of Service</Link>
  <Link to="/privacy-policy">Privacy Policy</Link>
   <ListHeader>Company</ListHeader>
  <Link to="/about">About</Link>
    <Link to={"/blogs"}>Company Blogs</Link>
  <Link to="/careers">Careers</Link>
  <Link to="/contact">Contact</Link>
    <ListHeader>Follow Us</ListHeader>
  <a href="https://twitter.com/gossylovesyou">Twitter</a>
  <a href="https://www.instagram.com/gossylovesyou/">Instagram</a>
  <a href="https://www.linkedin.com/company/gossy-the-perfect-social-app/about/?viewAsMember=true">LinkedIn</a>

</Stack>
        
      </DrawerBody>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>

    </>
  );
}
