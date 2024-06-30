import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SelectPost } from "@/server/database/schema";
import { HandIcon, UsersIcon } from "lucide-react";

export default function ProjectCard({ project }: { project: SelectPost }) {
  return (
    <Card className="bg-background shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground p-6">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <HandIcon className="w-5 h-5" />
          <span>React, Node.js, MongoDB</span>
        </div>
        <div className="flex items-center gap-2">
          <UsersIcon className="w-5 h-5" />
          <div className="flex -space-x-2">
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U4</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U5</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/20 p-4">
        <Button variant="link" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
