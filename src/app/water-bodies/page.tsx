"use client";

import { ProtectedShell } from "@/components/ProtectedShell";
import { WaterBodiesExplorer } from "@/components/WaterBodiesExplorer";

export default function WaterBodiesPage() {
  return (
    <ProtectedShell>
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #050d1a 0%, #081426 40%, #0d1f3c 100%)",
          padding: "0 24px 60px",
          color: "#e8f0ff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 🔵 Ambient glow */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              background:
                "radial-gradient(circle, rgba(26,111,255,0.15), transparent)",
              top: -120,
              left: -120,
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(0,200,224,0.1), transparent)",
              bottom: 0,
              right: -100,
              filter: "blur(60px)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* 🔥 HERO */}
          <div
            style={{
              paddingTop: 56,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00c8e0",
                  boxShadow: "0 0 8px #00c8e0",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(0,200,224,0.8)",
                }}
              >
                Водные ресурсы
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Озёра{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #1a6fff, #00c8e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                и водоёмы
              </span>
            </h1>

            <p
              style={{
                maxWidth: 520,
                color: "rgba(200,218,255,0.55)",
                lineHeight: 1.6,
              }}
            >
              Интерактивная карта с выбором водоёмов, геоданными и аналитикой.
              Используй карту или список для навигации.
            </p>
          </div>

          {/* 📦 CONTENT CARD */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: 28,
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <WaterBodiesExplorer />
          </div>
        </div>
      </div>
    </ProtectedShell>
  );
}