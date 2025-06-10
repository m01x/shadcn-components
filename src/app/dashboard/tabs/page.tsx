
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Tab2 } from "./ui/tab2";

export default function Tab1() {
  return (
     <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab1/>
        </TabsContent>
        <TabsContent value="password">
          <Tab2/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
