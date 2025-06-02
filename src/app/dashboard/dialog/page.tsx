//Se utilizan funcionalidades del browser, se obliga la renderizacion del lado cliente.

"use client";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ClipboardCheck } from "lucide-react"


export default function Page() {

  const onAlert = () => {
    navigator.clipboard.writeText("https://ui.shadcn.com/docs/installation");
    alert("Contenido copiado!");
    
  }
  return (
    <>
      <div className="grid grid-cols-2 mb-10">
        <h1 className="color-amber-400">Dialog - <a href="" className="underline decoration-pink-500">custom component</a></h1>
      </div>
      <div>
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Compartir Enlace</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3"
            onClick={() => onAlert()}
          >
            <ClipboardCheck/>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </>
  );
}
