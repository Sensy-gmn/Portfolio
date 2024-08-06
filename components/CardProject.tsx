import {
  ExternalLink,
  Github,
  Linkedin,
  MailPlus,
  PhoneCall,
} from "lucide-react";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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
              Développement d&apos;un site e-commerce de cigarette éléctronique
              <br />
              <br />
              <span className="font-bold">Fonctionnalités :</span>
              <ul>
                <li>créer un compte</li>
                <li>consulter les produits disponibles</li>
                <li>ajouter des produits à son panier</li>
                <li>les supprimer de son panier</li>
                <li>passer une commande</li>
                <li>consulter son panier</li>
                <li>consulter ses commandes</li>
                <li>modifier ses informations personnelles</li>
                <li>modifier ses mot de passe</li>
                <li>supprimer son compte</li>
              </ul>
              <br />
              <span className="font-bold">Administration :</span>
              <ul>
                <li>consulter les commandes</li>
                <li>statistiques clés</li>
                <li>ajouter des produits</li>
                <li>modifier des produits</li>
                <li>supprimer des produits</li>
              </ul>
              <br />
              Front-end client en cours de développement.
            </CardDescription>
            <div className="flex flex-wrap gap-2">
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
          <CardFooter className="bottom-0">
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/big-vape"
                target="_blank">
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
              l&apos;utilisation de la base de données MySQL. application web de
              recettes de cuisine avec possibilité de :
              <ul>
                <li>créer un compte</li>
                <li>consulter les recettes disponibles</li>
                <li>ajouter des recettes à sa liste de favoris</li>
                <li>les supprimer de sa liste de favoris</li>
                <li>ajouter des étapes de préparation avec des ingrédients</li>
              </ul>
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-500 w-fit font-light">
                HTML - TWIG
              </Badge>
              <Badge className="bg-gray-500 w-fit font-light">Bootstrap</Badge>
              <Badge className="bg-gray-500 w-fit font-light">Symfony</Badge>
              <Badge className="bg-gray-500 w-fit font-light">PHP</Badge>
            </div>
          </CardContent>
          <CardFooter className="">
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/symfony-crud"
                target="_blank">
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
              développement disponibles sur mon GitHub.
              <br />
              Déploiement sur Vercel.
            </CardDescription>
            <div className="flex flex-wrap gap-2">
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
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/portfolio"
                target="_blank">
                lien
                <ExternalLink className="ml-4 h-4 w-4" />
              </Link>
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
              <span className="font-bold">Fonctionnalités :</span>
              <br />
              <br />
              <ul>
                <li>créer un compte</li>
                <li>consulter les jeux disponibles</li>
                <li>les ajouter à sa liste de jeux favoris</li>
                <li>les supprimer de sa liste de jeux favoris</li>
              </ul>
              <br />
              <span className="font-bold">Administration :</span>
              <br />
              <br />
              ajout, modification et suppression des jeux.
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-500 w-fit font-light">HTML</Badge>
              <Badge className="bg-gray-500 w-fit font-light">Bootstrap</Badge>
              <Badge className="bg-gray-500 w-fit font-light">JavaScript</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link
                href="https://github.com/Sensy-gmn/videogames"
                target="_blank">
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
            <Button>Me contacter</Button>
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
                    target="_blank">
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
                    target="_blank">
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
      </div>
    </main>
  );
}
