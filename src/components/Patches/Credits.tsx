import {  Button, Modal, ModalBody, ModalFooter, ModalHeader, Tooltip } from "flowbite-react"
import { Info } from "lucide-react";
import { useState } from "react"
import { ModPack } from "../../types";

interface Props {
    mod: ModPack;
}

const Credits = ({mod}:Props) => {

    const [openModal, setOpenModal] = useState(false);


    return (
        <>
            <Tooltip content="Credits" placement="right">
                <span className="text-3xl cursor-pointer text-gray-500" role="button" onClick={() => setOpenModal(true)}><Info /></span>
            </Tooltip>
            <Modal show={openModal} size={"md"} onClose={() => setOpenModal(false)} color="red" >
                <ModalHeader className="bg-nav-background ">Credits</ModalHeader>
                <ModalBody className="bg-black-background ">
                    <div className="space-y-3 max-h-[60svh]">
                       {
                        mod.credits.map(s=><li className="">{s}</li>)
                       }
                    </div>
                </ModalBody>
                <ModalFooter className="lg:hidden">
                    <Button color={"red"} onClick={()=>setOpenModal(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Credits