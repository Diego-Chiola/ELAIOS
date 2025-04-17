import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPath(path: string): string {
  path = path.charAt(0) === '/' ? path.slice(1) : path;
  return import.meta.env.BASE_URL + path;
}
