// src/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Bu fonksiyon, hem koşullu class'ları (clsx) birleştirir
// hem de Tailwind çakışmalarını (twMerge) çözer.
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}