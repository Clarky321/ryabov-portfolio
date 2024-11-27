"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "Number Phone"
    },
    {
        icon: <FaEnvelope />,
        title: "Phone",
        description: "youremail@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Addess",
        description: "Code Corner, Tech Town 13579"
    },
]

export default function Contact() {
    return (
        <div className="container mx-auto py-6">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent-hover">Будем работать вместе</h3>
                        <p className="text-white/80">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque, cumque soluta omnis consequatur ratione nihil iste quae quod modi numquam,
                            voluptatem aperiam est, fugit porro laudantium! Corrupti, officia a. Nam!
                        </p>
                        {/* input */}
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                            <Input type="firstname" placeholder="Имя" />
                            <Input type="lastname" placeholder="Фамилия" />
                            <Input type="email" placeholder="Почта" />
                            <Input type="phone" placeholder="Номер телефона" />
                        </div>
                        {/* textarea */}
                        <Textarea
                            className="h-[200px]"
                            placeholder="Напиши своё сообщение здесь"
                        />
                        {/* btn */}
                        <Button size="md" className="max-w-40">
                            Отправить
                        </Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    info
                </div>
            </div>
        </div>
    )
}