import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          borderRadius: 128,
          background: "linear-gradient(145deg, #07314a 0%, #0e6ba8 55%, #22c5c5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle radial highlight */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(70,207,214,0.45) 0%, transparent 70%)",
          }}
        />
        {/* Wave underline accent */}
        <div
          style={{
            position: "absolute",
            bottom: 96,
            left: 80,
            right: 80,
            height: 6,
            borderRadius: 3,
            background: "rgba(70,207,214,0.7)",
          }}
        />
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 220,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-8px",
            lineHeight: 1,
            position: "relative",
          }}
        >
          CK
        </span>
      </div>
    ),
    { ...size }
  );
}
