import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Avatars() {
  return (
    <div className="flex justify-end"> {/* Аватар находится справа */}
      {/* <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-accent rounded-full shadow-lg overflow-hidden"> */}
      <div className="">
        <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 rounded-full shadow-lg overflow-hidden">
          <AvatarImage
            src="/image/photos.png"
            alt="Profile picture"
            className="object-cover w-full h-full" // Обеспечиваем правильное заполнение
          />
          <AvatarFallback className="text-lg font-bold">СР</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}