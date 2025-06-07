"use client";

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-[250px]">
      <InputOTP 
        maxLength={4}
        value={ value }
        onChange={(value) => setValue(value)}
      >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      {/* <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup> */}
    </InputOTP>
    <div className="mt-5">
      <Badge variant={"info"}>{value}</Badge>
    </div>
    </div>
  );
}
