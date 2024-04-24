import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <Card className="w-[350px] h-[380px] relative m-2">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="/Icon.png" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
                <span className="ml-2">anshnk</span>
              </div>
            </CardTitle>
            <CardDescription>Top Glizzy Gamer | Huh whar guh?</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-sm font-bold border-b-2">Projects:</p>
              <ul className="list-disc list-inside">
                <li>Ephemeral</li>
                <li>validOS</li>
                <li>Anycode</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold border-b-2 mb-2">
                Frameworks, Languages, and Platforms:
              </p>
              <ul className="list-disc list-inside">
                <li>NextJS</li>
                <li>Javascript</li>
                <li>HTML</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="absolute bottom-0 left-0">
            <span className="text-xs text-gray-500">The GC got leaked :(</span>
          </CardFooter>
          <CardFooter className="absolute bottom-0 right-0">
            <Button>
              <Link href="mailto:ansh@anshnk.dev">Email</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] h-[380px] relative m-2">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <Avatar></Avatar>
                <span className="ml-2 text-right">Skibidi Services</span>
              </div>
            </CardTitle>
            <CardDescription className="text-right">
              Services I Host: (Words are clickable)
            </CardDescription>
          </CardHeader>
          <CardContent className="text-right">
            <a href="https://cdn.anshnk.dev">CDN</a><br />
            <a href="https://status.anshnk.dev">Status</a><br />
            <a href="https://blog.anshnk.dev">Blog</a><br />
            <a href="https://anshnk.dev">Website</a><br />
          </CardContent>

          <CardFooter className="absolute bottom-0 right-0">
            <span className="text-xs text-gray-500">2nd card epic</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
