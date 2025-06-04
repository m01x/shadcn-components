'use client';

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Page() {

  const [terms, setTerms] = useState(false)
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        id="terms-2"
        checked={terms}
        onCheckedChange={(value: boolean) => setTerms(value)}
      />
      <div className="grid gap-2">
        <Label htmlFor="terms-2">Accept terms and conditions</Label>
        <p className="text-muted-foreground text-sm">
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
        {
          terms ? (
            <Badge>Excelente fofura, gracias!</Badge>
          ) : (
            <Badge variant="destructive">Cuidado, no ha aceptado los terminos 💀</Badge>
          )
        }

      </div>
    </div>
  );
}
