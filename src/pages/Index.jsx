import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 bg-red-500"> {/* Added bg-red-500 here */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to Your Application</CardTitle>
            <CardDescription>This is a bare-bones structure you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Start by modifying this component or adding new ones.</p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of feature 1 goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of feature 2 goes here.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>Brief description of your company or application goes here.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Main St, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-2">Stay updated with our latest news</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="mr-2" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 My Application. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary"><Twitter size={24} /></a>
              <a href="#" className="hover:text-primary"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;