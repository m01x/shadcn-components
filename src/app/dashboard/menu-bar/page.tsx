"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";


export default function Page() {
  return (
    <div>
      <Menubar className="print:hidden">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem
              onClick={() => {
                setTimeout(()=>{
                  print();
                },100);
              }}
            >
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <h3 className="font-bold mb-4 mt-2">💡Intenta File - Print</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti earum fuga debitis corrupti maxime. Asperiores, aperiam consequuntur illo voluptatem totam nostrum quidem nihil officia rerum provident temporibus, perferendis quae sint architecto ab. Rem veritatis, expedita non architecto culpa perspiciatis, dicta mollitia velit ratione ab eum labore optio sed blanditiis autem deserunt qui vitae exercitationem debitis quo alias provident? Sed necessitatibus dignissimos corporis illo dolore voluptatibus consequuntur labore laudantium beatae odit officia ea, libero dolorem aliquid quis similique modi magnam! Aspernatur, maiores et voluptatibus nulla eos provident debitis modi quidem cumque corrupti autem non amet. Dolorem, officiis unde illum tenetur deleniti consequuntur aut a mollitia, provident temporibus culpa, soluta earum expedita veniam excepturi alias amet rerum officia ducimus molestiae laborum eum recusandae quia! Excepturi voluptatibus fugit, laboriosam voluptas ea delectus enim eaque debitis eligendi explicabo incidunt repellat porro necessitatibus, eum asperiores. Suscipit recusandae assumenda veritatis consequatur laborum nemo, obcaecati et ipsum tempore magni, dolores beatae vero rerum, quidem nihil officiis? Quos consequuntur nobis assumenda sit laboriosam beatae dolore totam ullam, exercitationem repellendus, quia quae molestias deleniti eum voluptas rerum, odio odit ad in et labore aliquid optio doloribus ea! Dolorum asperiores minima labore mollitia aperiam fuga, iste quas suscipit! Hic officiis molestiae fuga eos illum consequatur nemo? Maxime possimus distinctio fugiat, rem deserunt ipsam, officia repudiandae pariatur alias exercitationem amet blanditiis esse dolorum sit fugit. Aliquid quas odit alias reiciendis minima atque sunt similique numquam maxime, pariatur perspiciatis quia est dolor consequuntur fuga error esse facere sequi quod delectus laboriosam? Quas officiis corrupti, et voluptate ea distinctio iste recusandae ipsum beatae amet dolorum ad obcaecati deleniti nostrum, ducimus consequuntur! Aut accusamus rem et distinctio dolores qui libero labore dolor dolorem? Officia unde sit quis qui saepe vitae minima. Rem optio maxime minima facilis beatae. Quos minus iusto quaerat exercitationem nulla.</p>
    </div>
  );
}
