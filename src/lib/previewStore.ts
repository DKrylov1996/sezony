import type { HomeContent } from '@/lib/homeContent';

export type PreviewData = {
  title?: string;
  shortDescription?: string;
  fullDescription?: string;
  location?: string | null;
  year?: number | null;
  tags?: string[];
  coverImage?: string;
  galleryImages?: string[];
};

type PreviewEntry = {
  data: PreviewData;
  expiresAt: number;
};

const previewStore = new Map<string, PreviewEntry>();
const DEFAULT_TTL_MS = 10 * 60 * 1000;
const homePreviewStore = new Map<string, PreviewEntry>();

function cleanupExpired(now: number) {
  for (const [key, entry] of previewStore.entries()) {
    if (entry.expiresAt <= now) {
      previewStore.delete(key);
    }
  }
  for (const [key, entry] of homePreviewStore.entries()) {
    if (entry.expiresAt <= now) {
      homePreviewStore.delete(key);
    }
  }
}

export function setPreviewData(data: PreviewData, ttlMs = DEFAULT_TTL_MS) {
  const now = Date.now();
  cleanupExpired(now);
  const key = crypto.randomUUID();
  previewStore.set(key, { data, expiresAt: now + ttlMs });
  return key;
}

export function getPreviewData(key: string) {
  const entry = previewStore.get(key);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    previewStore.delete(key);
    return null;
  }
  return entry.data;
}

export function setHomePreviewData(data: HomeContent, ttlMs = DEFAULT_TTL_MS) {
  const now = Date.now();
  cleanupExpired(now);
  const key = crypto.randomUUID();
  homePreviewStore.set(key, { data, expiresAt: now + ttlMs });
  return key;
}

export function getHomePreviewData(key: string) {
  const entry = homePreviewStore.get(key);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    homePreviewStore.delete(key);
    return null;
  }
  return entry.data;
}
