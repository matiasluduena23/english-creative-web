import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ChevronRight } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { CardInfoSchema } from "@/lib/definitions";
import type { z } from "zod";
import bullet from "@/assets/BulletIcon.svg";
type CardInfo = z.infer<typeof CardInfoSchema>;

export function InfoDialog({ card }: { card: CardInfo }) {
  const { title, info, time } = card;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 py-3 px-8 bg-[#23746B] rounded-sm hover:opacity-80">
          <span>More Info</span>
          <ArrowRight className="text-background" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[425px] bg-darkGreen text-background">
        <DialogHeader>
          <DialogTitle className="text-2xl ">{title}</DialogTitle>
          <p className="opacity-80">{time}</p>
        </DialogHeader>
        <div className="grid gap-4 ">
          <div className="">
            <h3 className="font-semibold mb-2">English Coaching</h3>
            <ul>
              {info.couching.map((item, index) => (
                <li key={index} className="flex items-center gap-1">
                  <CheckIcon className="w-4 text-background" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="">
            <h3 className="flex items-center font-semibold mb-2">
              Español <ChevronRight className="w-4 pt-1" /> English Translation
            </h3>
            <ul>
              {info.translation.map((item, index) =>
                typeof item === "string" ? (
                  <li key={index} className="flex items-center gap-1">
                    <CheckIcon className="w-4 text-background" />
                    <p>{item}</p>
                  </li>
                ) : (
                  <li key={index}>
                    <div className="flex items-center gap-1">
                      <CheckIcon className="w-4 text-background" />
                      <p>{item.id}</p>
                    </div>
                    <ol className="ml-8">
                      {item.data.map((option, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <img
                            src={bullet.src}
                            alt="icon"
                            className="w-2 mt-1"
                          />{" "}
                          {option}
                        </li>
                      ))}
                    </ol>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
