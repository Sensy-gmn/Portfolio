"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, MailPlus } from "lucide-react";
import { Button } from "./ui/button";

export default function ProfileText() {
  return (
    <div className="max-w-md md:max-w-md justify-center flex flex-col">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            Développeur Full Stack
          </CardTitle>
          <CardDescription className="text-lg md:text-xl">
            Bonjour, Je suis Alexandre Goumain.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-lg">
            Développeur full stack curieux et très motivé, J&apos;aime apprendre
            de nouvelles choses et les mettre en pratique.
          </p>
        </CardContent>
        <CardFooter className="flex flex-row justify-between gap-2 mr-4">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alexandre-goumain/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <p className="text-xs font-bold">linkedin</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/Sensy-gmn", "_blank")
                }
              >
                <Github className="w-6 h-6" />
              </Button>
              <p className="text-xs font-bold">github</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  window.open("mailto:alexandre26goumain@gmail.com", "_blank")
                }
              >
                <MailPlus className="w-6 h-6" />
              </Button>
              <p className="text-xs font-bold">mail</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
