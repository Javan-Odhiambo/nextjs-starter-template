'use client'
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center" >
      <Button onClick={() => alert("It works!!")} >Test button</Button>
    </main>
  );
}
