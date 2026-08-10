import { ImageResponse } from "next/og";

import { getProject } from "@/content/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const project = getProject("frontpet");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#131313",
          color: "#EDEDED",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3B82F6",
          }}
        >
          Case Study
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 24 }}>
          {project?.title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#A1A1A1", marginTop: 24 }}>
          {project?.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
