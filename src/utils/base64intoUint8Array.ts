export function base64intoUint8Array(base64: string): Uint8Array {
  const uiArray = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  return uiArray;
}