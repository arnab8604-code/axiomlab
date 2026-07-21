import { Suspense } from "react";
import Enquiry from "@/components/forms/service-enquiry";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Enquiry />
    </Suspense>
  );
}