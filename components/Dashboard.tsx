"use client";

import {
  Github,
  Linkedin,
  MailPlus,
  Menu,
  PhoneCall,
  Sunrise,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col">
      <header className="top-0 flex h-16 md:mx-auto items-center gap-4 border-b bg-background px-6 ">
        <nav className="hidden flex-col gap-6 text-xl font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground whitespace-nowrap text-2xl"
          >
            Accueil
          </Link>

          <Link
            href="/assets/CV_2024.pdf"
            className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap text-2xl"
            download="CV Alexandre Goumain"
          >
            CV
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap text-2xl"
              >
                contact
              </Link>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Moyens de contact</DialogTitle>
                <DialogDescription>
                  Choisissez une methode de contact ci-dessous.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Button variant="outline" asChild>
                    <Link
                      href="https://www.linkedin.com/in/alexandre-goumain/"
                      target="_blank"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Sensy-gmn" target="_blank">
                      <Github className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href="mailto:alexandre26goumain@gmail.com"
                      target="_blank"
                    >
                      <MailPlus className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="tel:+33643294346" target="_blank">
                      <PhoneCall className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="icon" className="">
            <Sunrise
              className="w-6 h-6"
              onClick={() => {
                document.body.classList.toggle("dark");
              }}
            />
          </Button>
        </nav>

        {/* mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="hover:text-foreground text-2xl">
                Accueil
              </Link>

              <Link
                href="/assets/CV_2024.pdf"
                className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap text-2xl"
                download="CV Alexandre Goumain"
              >
                CV
              </Link>

              <Dialog>
                <DialogTrigger asChild>
                  <Link
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap text-2xl"
                  >
                    contact
                  </Link>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Moyens de contact</DialogTitle>
                    <DialogDescription>
                      Choisissez une methode de contact ci-dessous.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Button variant="outline" asChild>
                        <Link
                          href="https://www.linkedin.com/in/alexandre-goumain/"
                          target="_blank"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link
                          href="https://github.com/Sensy-gmn"
                          target="_blank"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link
                          href="mailto:alexandre26goumain@gmail.com"
                          target="_blank"
                        >
                          <MailPlus className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="tel:+33643294346" target="_blank">
                          <PhoneCall className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="outline" size="icon" className="">
                <Sunrise
                  className="w-6 h-6"
                  onClick={() => {
                    document.body.classList.toggle("dark");
                  }}
                />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
