import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useConsentStore = create(
  persist(
    (set) => ({
      analytics: false,
      marketing: false,
      preferences: false,
      hasConsented: false,

      setConsent: (type, value) =>
        set((state) => ({
          [type]: value,
          hasConsented: true,
        })),

      setAllConsent: (analytics, marketing, preferences) =>
        set({
          analytics,
          marketing,
          preferences,
          hasConsented: true,
        }),

      acceptAll: () =>
        set({
          analytics: true,
          marketing: true,
          preferences: true,
          hasConsented: true,
        }),

      rejectAll: () =>
        set({
          analytics: false,
          marketing: false,
          preferences: false,
          hasConsented: true,
        }),
    }),
    {
      name: 'consent-storage',
      version: 1,
    }
  )
);
