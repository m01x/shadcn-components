"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Loader2Icon, Terminal } from "lucide-react";

export default function Page() {

  const onClickBtn = () => {
    console.log('Wow, desde ShadCn');
  }
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={onClickBtn}>Click me</Button>
      <Button variant={"success"}>Click me</Button>
      <Button variant={"secondary"} size={"icon"} className="size-8">
        <ChevronRightIcon />
      </Button>
      <Button size="sm" disabled>
        <Loader2Icon className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
