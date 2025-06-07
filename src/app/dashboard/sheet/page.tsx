"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

//as const le indico , mediante TS , que estos elementos son un arreglo que NO VA A CAMBIAR.
const SHEET_SLIDES = ['top', 'right', 'bottom', 'left'] as const;

export default function Page() {

  const [open, setOpen] = useState(false)
  return (
    <>
    <div className="grid grid-cols-2 gap-3">
      <Button onClick={()=>setOpen(true)}>Custom Abrir</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
    <div className="bg-sky-100 grid grid-cols-4 mt-5">
      {
        SHEET_SLIDES.map((posicion)=>(
          <Sheet key={posicion}>
            <SheetTrigger className="border-2 border-red-400 m-2">Open {posicion}</SheetTrigger>
            <SheetContent side={posicion}>
              <SheetHeader>
                <SheetTitle>Estamos probando la posicion {posicion} </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. Please read this blablabla plis!!⚠️
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ))
      }
    </div>
    </>
  );
}
