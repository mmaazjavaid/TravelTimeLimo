import { globalStateController } from "@/state/global/globalStateController";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateFare(distance: number, isAustin: boolean) {
  if (distance < 0) throw new Error("Distance must be a non-negative number");

  const stepperValue = globalStateController.getValue('stepperForm');
  const { bookingInfo } = stepperValue;
  if (bookingInfo.type === "hourly") {
    return { suv: bookingInfo?.numberOfHours * 150, sedan: bookingInfo?.numberOfHours * 120 }
  }

  const fareBrackets = [
    { maxDistance: 9999, suv: 110, sedan: 85 },
    { maxDistance: 19999, suv: 120, sedan: 95 },
    { maxDistance: 29999, suv: 150, sedan: 130 },
    { maxDistance: 39999, suv: 170, sedan: 150 },
    { maxDistance: 49999, suv: 190, sedan: 170 },
    { maxDistance: 59999, suv: 210, sedan: 190 },
    { maxDistance: 69999, suv: 230, sedan: 210 },
    { maxDistance: 79999, suv: 250, sedan: 230 },
    { maxDistance: 89999, suv: 270, sedan: 250 },
    { maxDistance: 99999, suv: 290, sedan: 270 },
  ];


  const austinBrackets = [
    { maxDistance: 9999, suv: 110, sedan: 85 },
    { maxDistance: 19999, suv: 120, sedan: 95 },
    { maxDistance: 29999, suv: 130, sedan: 110 },
    { maxDistance: 39999, suv: 150, sedan: 130 },
    { maxDistance: 49999, suv: 170, sedan: 150 },
    { maxDistance: 59999, suv: 190, sedan: 170 },
    { maxDistance: 69999, suv: 210, sedan: 190 },
    { maxDistance: 79999, suv: 230, sedan: 210 },
    { maxDistance: 89999, suv: 250, sedan: 230 },
    { maxDistance: 99999, suv: 270, sedan: 250 },
  ];

  let fare;
  if (isAustin) {
    fare = austinBrackets.find(bracket => distance <= bracket.maxDistance);
  }
  else {
    fare = fareBrackets.find(bracket => distance <= bracket.maxDistance);
  }

  if (!fare) throw new Error("Distance exceeds supported range");

  return { suv: fare.suv, sedan: fare.sedan };
}

