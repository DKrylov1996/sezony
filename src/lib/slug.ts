export function createSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0400-\u04ff\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
