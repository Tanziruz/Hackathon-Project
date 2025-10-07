import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

interface Props {
  text: string;
}

const TooltipCustom = ({ text }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <div
            className="h-4 w-4 bg-white rounded-full cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-white text-black text-sm p-2 rounded-lg shadow-md max-w-[90vw] break-words text-center"
        >
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipCustom;
