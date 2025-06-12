"use client"

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


/*Como ejercicio vamos a colocarle condicionales al mensaje que aparece en "Status" , de la siguiente forma.

pending: "secondary",
processing: "info",
success: "success",
failed: "destructive",

*/

type StatusKey = "pending" | "processing" | "success" | "failed";
type StatusColor = "secondary" | "info" | "success" | "destructive";

const dataStatus: Record<StatusKey, StatusColor> = {
  pending: "secondary",
  processing: "info",
  success: "success",
  failed: "destructive"
};



export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue('status') as StatusKey
            
            return <Badge variant={dataStatus[status]} capitalize>{row.getValue("status")}</Badge>
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "clientName",
        header: "Client name",
    },
]