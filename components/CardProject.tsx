import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function CardProject() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8">
        {/* Projet 1 */}
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-bold text-2xl">Big-vape</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-start gap-2">
            <CardDescription>
              Développement d&apos;un site vitrine e-commerce de cigarette
              éléctronique - panneau d&apos;administration bien avancé -
              front-end client en cours de développement.
            </CardDescription>
            <div className="">
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                TypeScript
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                React
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                Next.js
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                Kinde
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                Prisma
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                UI-Shadcn
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                Tailwind CSS
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                Node.js
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/big-vape"
                target="_blank"
              >
                lien
                <ExternalLink className="ml-4 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Projet 2 */}
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-bold text-2xl">Symfony - CRUD</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-start gap-2">
            <CardDescription>
              Première application web en Symfony, un CRUD complet avec
              l&apos;utilisation de la base de données MySQL. applocation web de
              recettes de cuisine avec possibilité de créer un compte, de
              consulter les recettes disponibles, de les ajouter à sa liste de
              recettes favoris et de les supprimer de sa liste de recettes
              favoris et d&apos;y ajouter des étapes de préparation avec des
              ingrédients.
            </CardDescription>
            <div className="">
              <Badge className="bg-gray-500 w-fit font-light">
                HTML - TWIG
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light">Bootstrap</Badge>
              <Badge className="bg-gray-500 w-fit font-light">Symfony</Badge>
              <Badge className="bg-gray-500 w-fit font-light">PHP</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/symfony-crud"
                target="_blank"
              >
                lien
                <ExternalLink className="ml-4 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Projet 3 */}
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-bold text-2xl">
              Portfolio actuel
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-start gap-2">
            <CardDescription>
              Accès au portfolio ainsi qu&apos;aux projets en cours de
              développement disponibles sur mon GitHub. Déploiement sur Vercel.
            </CardDescription>
            <div className="">
              <Badge className="bg-gray-500 w-fit font-light">TypeScript</Badge>
              <Badge className="bg-gray-500 w-fit font-light">React</Badge>
              <Badge className="bg-gray-500 w-fit font-light">Next.js</Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                UI-Shadcn
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light whitespace-nowrap">
                Tailwind CSS
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button>
              lien
              <ExternalLink className="ml-4 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Projet 4 */}
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-bold text-2xl">
              Bibliothèque de Jeux
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-start gap-2">
            <CardDescription>
              possibilité de créer un compte, de consulter les jeux disponibles,
              de les ajouter à sa liste de jeux favoris et de les supprimer de
              sa liste de jeux favoris. <br />
              Administration du site : ajout, modification et suppression des
              jeux.
            </CardDescription>
            <div className="">
              <Badge className="bg-gray-500 w-fit font-light">HTML</Badge>
              <Badge className="bg-gray-500 w-fit font-light">Bootstrap</Badge>
              <Badge className="bg-gray-500 w-fit font-light">JavaScript</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/videogames"
                target="_blank"
              >
                lien
                <ExternalLink className="ml-4 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Formulaire de contact</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Formulaire de contact</DialogTitle>
              <DialogDescription>
                Remplissez le formulaire ci-dessous.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  nom :
                </Label>
                <Input id="name" value="nom" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  prenom :
                </Label>
                <Input id="username" value="prenom" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  email :
                </Label>
                <Input id="email" value="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 mt-4">
                <Label htmlFor="message" className="text-right">
                  message :
                </Label>
                <Textarea id="message" value="message" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Envoyer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
