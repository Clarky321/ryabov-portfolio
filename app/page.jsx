import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="h-full">
    <Avatar>
      <AvatarImage src="./avatars.png" alt="@shadcn" />
      <AvatarFallback>СР</AvatarFallback>
    </Avatar>
    </div>
  )
}