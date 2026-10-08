import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

export function Medium({ size = 24, strokeWidth: _strokeWidth, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><circle cx="6.77" cy="12" r="6.77" /><ellipse cx="17.58" cy="12" rx="3.386" ry="6.373" /><ellipse cx="22.81" cy="12" rx="1.19" ry="5.71" /></svg>;
}

export function Linkedin({ size = 24, strokeWidth: _strokeWidth, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.77 1.2-1.77 2.45v4.73H9.54V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.55 1.96 3.55 4.5v5.28Z" /></svg>;
}

export function Github({ size = 24, strokeWidth: _strokeWidth, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.09c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.01-.12-.28-.51-1.43.11-2.97 0 0 .94-.3 3.1 1.15a10.83 10.83 0 0 1 5.64 0c2.15-1.45 3.09-1.15 3.09-1.15.62 1.54.23 2.69.11 2.97.72.78 1.16 1.78 1.16 3.01 0 4.32-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.07c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" /></svg>;
}
