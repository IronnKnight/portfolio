const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 3;

const requests = new Map<string, number[]>();

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = requests.get(ip) ?? [];

  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  recent.push(now);
  requests.set(ip, recent);

  return { success: true, remaining: MAX_REQUESTS - recent.length };
}
