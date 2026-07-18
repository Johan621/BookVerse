"use client";

import * as React from "react";
import { PriceEstimator } from "@/components/dashboard/price/PriceEstimator";

export default function PriceEstimatorPage() {
  return (
    <section className="flex flex-col items-center min-min-h-screen p-8">
      <PriceEstimator />
    </section>
  );
}
