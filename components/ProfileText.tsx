"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, MailPlus, Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function ProfileText() {
  return (
    <div className="max-w-sm md:max-w-md justify-center flex flex-col">
      <Card>
        <CardHeader>
          <CardTitle>Développeur Full Stack</CardTitle>
          <CardDescription>Bonjour, Je suis Alexandre Goumain.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Je suis un développeur full stack curieux et très motivé.
            J&apos;aime apprendre de nouvelles choses et les mettre en pratique.
          </p>
        </CardContent>
        <CardFooter className="flex flex-row justify-between gap-2 mr-4">
          <Button>
            Voir plus
            <Plus className="ml-3 w-4 h-4" />
          </Button>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/alexandre-goumain/",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://github.com/Sensy-gmn", "_blank")
              }
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("mailto:alexandre26goumain@gmail.com", "_blank")
              }
            >
              <MailPlus className="w-4 h-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
