import * as React from 'react';

import { Box, Center, CenterProps, Flex, Heading } from '@chakra-ui/react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

type Props = { isOpen?: boolean };

export const Menu = (props: Props) => {
  const { isOpen = false, ...rest } = props;

  const { onOpen, onClose } = useDisclosure();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Center>Menu</Center>
        </DrawerHeader>

        <DrawerBody padding="0">
          {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}

          <Button w="full" onClick={onClose}>
            Cancel
          </Button>
          {/* <Input placeholder="Type here..." /> */}
        </DrawerBody>

        <DrawerFooter>
          {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
