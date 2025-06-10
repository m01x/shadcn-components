"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
      variant="outline"
      onClick={() =>
        toast("Toast haciendo pop-up!", {
          description: `Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM`,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>

    <Button
      variant="outline"
      onClick={() =>
        toast.success("Cambios guardados!", {
          description: `Sunday, December ${new Date().getFullYear()}, 2023 at 9:00 AM`,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
    </div>
  );
}
