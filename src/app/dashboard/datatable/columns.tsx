"use client"

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data"
import { ColumnDef, SortDirection, Row, FilterFn } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon, ChevronUpIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner";


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


const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: string, addMeta: (meta: any) => void) => {
    
    filterValue = filterValue.toLowerCase();
    if ( row.original.email.includes(filterValue) ) {
        return true;
    }

    if ( row.original.clientName.includes(filterValue) ) {
        return true;
    }

    if ( row.original.status.includes(filterValue) ) {
        return true;
    }

    return false;
}

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {

    if (isSorted === "asc") {
        return <ChevronUpIcon className="h-4 w-4" />;
    }

    if (isSorted === "desc") {
        return <ChevronDownIcon className="h-4 w-4" />;
    }

    return null;

}


export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
        cell: ({ row }) => {
            const status = row.getValue('status') as StatusKey

            return <Badge variant={dataStatus[status]} capitalize>{row.getValue("status")}</Badge>
        },
    },
    {
        accessorKey: "email",
        filterFn: myCustomFilterFn,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
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
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(payment.id);
                                toast("Payment ID copied to clipboard", {
                                    position: "top-right",
                                })
                            }}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]