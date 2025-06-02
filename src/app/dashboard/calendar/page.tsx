"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Page() {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

    const smallDate = date?.toLocaleString("es-ES", {
      weekday: "short",
      day: "numeric",
      month: "short"
    })

/**
 * TODO: fixear el layout... pongale cariño mijo!
 */

  return (
    <div className="flex-col sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        disabled={ (date) => date.getDate()===0 || date.getDate()===6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        disabled={(date) => date > new Date() }
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border shadow-sm"
      />
    <div>
      <h1 className="text-3xl">Información</h1>
      <div className="border-b"></div>
      <p> { smallDate } </p>
      <p> { multipleDates?.map((date)=> date.toLocaleDateString()).join(", ") } </p>
    </div>
    </div>
  );
}
