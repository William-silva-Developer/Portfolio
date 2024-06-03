import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ImageAvatar = () => {
  return (
    <Avatar className="h-52 w-52">
      <AvatarImage src="https://avatars.githubusercontent.com/u/98723501?v=4" />
      <AvatarFallback>WS</AvatarFallback>
    </Avatar>
  );
};

export { ImageAvatar };
