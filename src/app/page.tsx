import ProjectCard from "./_components/project-card";
import { getAllPosts } from "./actions";

export default async function Component() {
  const posts = await getAllPosts();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-muted/40 py-8 px-6">
        <div className="container mx-auto">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <ProjectCard key={post.id} project={post} />
              ))}
            </div>
          </section>
          {/* <section>
            <h2 className="text-xl font-bold mb-4">Browse Projects</h2>
            <div className="bg-background rounded-lg shadow p-6">
              <form className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <Input
                    type="search"
                    placeholder="Search projects..."
                    className="w-full"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <FilterIcon className="w-5 h-5" />
                      Filters
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      Open Projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      In Progress Projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Completed Projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>React</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Node.js</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Python</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Angular</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Vue.js</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </form>
              <div className="space-y-4">
                <Card className="bg-background shadow-lg rounded-lg overflow-hidden">
                  <CardHeader className="bg-primary text-primary-foreground p-6">
                    <CardTitle>Project E</CardTitle>
                    <CardDescription>
                      A project that requires React, Node.js, and MongoDB
                      skills.
                    </CardDescription>
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
                        <Avatar className="w-8 h-8 border-2 border-background">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>U6</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-8 h-8 border-2 border-background">
                          <AvatarImage src="/placeholder-user.jpg" />
                        </Avatar>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
}
