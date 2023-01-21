import { TitleSectionText } from "./styles";

interface TitleProps {
  content: string;
}

export function TitleSection({ ...props }: TitleProps) {
  return <TitleSectionText>{props.content}</TitleSectionText>;
}
