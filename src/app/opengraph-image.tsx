import { ImageResponse } from "next/og";

export const alt = "Flux — See what’s left after the bills";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#EDE9E3",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            height: 6,
            width: 160,
            background: "#EBF5EE",
            borderRadius: 4,
          }}
        />
        <div
          style={{
            marginTop: 36,
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9A9188",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          Personal payday planner
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 64,
            lineHeight: 1.08,
            color: "#1C1814",
            letterSpacing: "-0.04em",
            maxWidth: 780,
          }}
        >
          See exactly what’s left after every bill is paid.
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 36,
              color: "#2B7A50",
              letterSpacing: "-0.04em",
            }}
          >
            Flux
          </div>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E0DAD3",
              borderRadius: 24,
              padding: "22px 28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9A9188",
                fontFamily: "sans-serif",
                fontWeight: 700,
              }}
            >
              Cushion after bills
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 40,
                color: "#2B7A50",
                letterSpacing: "-0.04em",
              }}
            >
              NGN 972,500
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
