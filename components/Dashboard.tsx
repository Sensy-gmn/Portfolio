"use client";

import { Menu, Sunrise } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-6">
        <nav className="hidden flex-col gap-6 text-xl font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            Accueil
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            à propos
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            projets
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            CV
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
          >
            contact
          </Link>

          <Button variant="outline" size="icon" className="">
            <Sunrise
              className=""
              onClick={() => {
                document.body.classList.toggle("dark");
              }}
            />
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="hover:text-foreground">
                Accueil
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                à propos
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                projets
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                CV
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
