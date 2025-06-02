"use client"

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


export default function Page() {

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4 p-2">

     <AlertDialog 
      open={dialogOpen}
      onOpenChange={setDialogOpen}
      >
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() =>  console.log("Cancelar :OO Chris gae..")       
          }>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() =>  console.log("Continuar")
          }>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <Button onClick={() => setDialogOpen(true)}>Open button manually</Button>
    </AlertDialog>
          </div>
  );
}
