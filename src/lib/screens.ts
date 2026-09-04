export const DEVICE = { width: 1290, height: 2796 } as const;
export const DEVICE_SHORT = { width: 1080, height: 1920 } as const;

export const hero = {
  mov: "/videos/hero.mov",
  webm: "/videos/hero.webm",
  poster: "/videos/hero-poster.png",
} as const;

export const screens = {
  home: "/screens/home.png",
  homeEspresso: "/screens/home-espresso.png",
  timeline: "/screens/timeline.png",
  plan: "/screens/plan.png",
  next: "/screens/next.png",
  welcome: "/screens/welcome.png",
  settings: "/screens/settings.png",
  currency: "/screens/currency.png",
  faceId: "/screens/face-id.png",
} as const;

const SHORT_SCREENS = new Set<string>([
  screens.timeline,
  screens.plan,
  screens.next,
]);

export function screenSize(src: string) {
  return SHORT_SCREENS.has(src) ? DEVICE_SHORT : DEVICE;
}
