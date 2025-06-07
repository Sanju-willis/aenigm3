// src\utils\tracking.ts
// utils/tracking.ts
export function generateEventId() {
  return `ev-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

export function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}