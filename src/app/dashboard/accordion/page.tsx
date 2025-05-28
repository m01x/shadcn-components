import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const mockData = [
  {
    id:"item-1",
    question:"Is it accessible?",
    answer:"Yes. It adheres to the WAI-ARIA design pattern."
  },
  {id:"item-2",
    question:"Is it styled?",
    answer:"Yes. It comes with default styles that matches the other components' aesthetic."
  },
  {id:"item-3",
    question:"Is it animated?",
    answer:"Yes. It's animated by default, but you can disable it if you prefer."
  },
  {id:"item-4",
    question:"Where are them?",
    answer:"answer none.."
  }
];

export default function Page() {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {
          mockData.map((item) => 
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
               {item.answer}
              </AccordionContent>
            </AccordionItem>
          )
        }
    </Accordion>
    </div>
  );
}
