import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ImageAvatar = () => {
  return (
    <Avatar className="h-auto w-full">
      <AvatarImage src="https://avatars.githubusercontent.com/u/98723501?v=4" />
      <AvatarFallback>WS</AvatarFallback>
    </Avatar>
  );
};

export { ImageAvatar };
