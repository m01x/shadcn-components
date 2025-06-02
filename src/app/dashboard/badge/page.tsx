import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge>default</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge variant={"secondary"}>secondary</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"info"}>info</Badge>
      {
        //Ahora agregamos la propiedad custom capitalize!!
      }
      <Badge capitalize variant={"success"}>success</Badge>
    </div>
  );
}
