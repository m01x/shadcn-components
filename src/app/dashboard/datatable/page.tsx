import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function fetchData(){

  return payments;
}
export default async function Page() {

  const data = await fetchData();
  return (
    <div>
      <pre>
        <DataTable columns={columns} data={data} />
      </pre>
    </div>
  );
}
