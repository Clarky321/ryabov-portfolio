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
        <div>Contact page</div>
    )
}