import { Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

import ContactForm from './ContactForm';

export default function Example() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-[#1dc071] rounded-lg shadow-inner">
        Contact Me
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 150 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="flex justify-center items-center flex-col bg-[#1F372B] mx-8"
      >
        <DialogHeader
          className="text-white text-[1rem] font-epilogue w-4/5 text-center"
        >
          If you have an application you are interested in developing, a feature that you need built
          or a project that needs coding. I’d love to help with it
        </DialogHeader>
        <DialogBody divider className="w-full md:w-3/6">
          <ContactForm />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 bg-red-400 rounded-md text-white hover:bg-red-600"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
