import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Avatars() {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-accent rounded-full shadow-lg overflow-hidden">
      <Avatar>
        <AvatarImage src="/image/photos.png" alt="Profile picture" />
        <AvatarFallback>СР</AvatarFallback>
      </Avatar>
    </div>
  );
}