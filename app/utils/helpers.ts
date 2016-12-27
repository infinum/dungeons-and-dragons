export function sleep(duration: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
