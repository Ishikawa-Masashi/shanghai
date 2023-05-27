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
import * as React from 'react';

type Props = { isOpen: boolean; onClose: () => void };

export function Information(props: Props) {
  const { isOpen, onClose } = props;
  // const { onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        closeOnOverlayClick
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color="white" bg="rgb(7,82,78)" onClick={onClose}>
          <DrawerCloseButton />
          <DrawerHeader>情報</DrawerHeader>

          <DrawerBody>
            Copyright © 2022 Ishikawa Masashi. All Rights Reserved.
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
