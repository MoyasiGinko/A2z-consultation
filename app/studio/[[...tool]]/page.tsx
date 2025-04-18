// app/studio/[[...index]]/page.tsx
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full items-center justify-center">
      {/* Overlay that blocks interaction with elements underneath */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Modal content container */}
      <div className="relative h-full w-full overflow-hidden bg-black md:h-[100%] md:w-[100%] md:shadow-xl">
        <NextStudio config={config} />
      </div>
    </div>
  );
}

// Instructions for creating a .env.local file
/*
# This sets Sanity Studio to render in a contained way
NEXT_PUBLIC_SANITY_STUDIO_MODE=contained
*/
