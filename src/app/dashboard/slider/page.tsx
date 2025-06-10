"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function Page() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10,20]);
  return (
    <div>
      <span>Valor del slide { sliderValue }</span>
      <Slider
      defaultValue={[sliderValue]}
      max={100}
      step={1}
      onValueChange={(value)=> setSliderValue(value[0])}
    />

    <span>Valor del slide { rangeValue.join(",") }</span>
      <Slider
      defaultValue={rangeValue}
      max={100}
      step={1}
      onValueChange={setRangeValue}
    />
    </div>
  );
}
