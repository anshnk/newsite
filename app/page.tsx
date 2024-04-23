import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[350px] h-[380px] relative">
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
            <p className="text-sm font-bold border-b-2">Frameworks, Languages, and Platforms:</p>
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
    </div>
  );
}