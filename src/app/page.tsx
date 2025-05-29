import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="text-red-500 flex flex-col items-center justify-center h-screen">
      <h1>Hello World</h1>
      <Button>Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
    </div>
  );
}
