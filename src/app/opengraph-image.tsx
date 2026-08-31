import { ImageResponse } from "next/og";

export const alt = "Haikal Hilmi — Data & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #030712 0%, #1f2937 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}
        >
          <div style={{ color: "#9ca3af", display: "flex", fontSize: 30 }}>
            Data Engineering · Software Engineering
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: "-3px",
              marginTop: 24,
            }}
          >
            Haikal Hilmi
          </div>
          <div
            style={{
              color: "#d1d5db",
              display: "flex",
              fontSize: 38,
              lineHeight: 1.35,
              marginTop: 20,
            }}
          >
            Scalable data pipelines, cloud systems, and production-ready web
            products.
          </div>
        </div>
      </div>
    ),
    size
  );
}
