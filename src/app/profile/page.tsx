"use client";

import { useEffect, useState } from "react";
import { ProtectedShell } from "@/components/ProtectedShell";
import { UserAvatar } from "@/components/UserAvatar";
import { api } from "@/lib/api";
import { User } from "@/types";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    void api
      .getProfile()
      .then(setUser)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "Ошибка загрузки")
      )
      .finally(() => setLoading(false));
  }, []);

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
        }}
      >
        {/* Glow */}
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

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
          
          {/* HERO */}
          <div style={{ paddingTop: 60, marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00c8e0",
                boxShadow: "0 0 8px #00c8e0"
              }} />
              <span style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(0,200,224,0.8)"
              }}>
                Профиль
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700 }}>
              Личный{" "}
              <span style={{
                background: "linear-gradient(90deg, #1a6fff, #00c8e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                кабинет
              </span>
            </h1>

            <p style={{
              color: "rgba(200,218,255,0.55)",
              maxWidth: 500,
              marginTop: 10
            }}>
              Управление аккаунтом и просмотр персональной информации.
            </p>
          </div>

          {/* STATES */}
          {loading && <div className="card">Загрузка...</div>}
          {error && <div className="card">{error}</div>}

          {/* PROFILE */}
          {user && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr",
                gap: 24,
              }}
            >
              {/* LEFT */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 24,
                  padding: 24,
                  backdropFilter: "blur(12px)",
                  textAlign: "center",
                }}
              >
                <UserAvatar
                  name={user.login || user.email}
                  avatarUrl={user.avatarUrl}
                  size={110}
                />

                <h2 style={{ marginTop: 16, fontSize: 20 }}>
                  {user.login || "Пользователь"}
                </h2>

                <div style={{ color: "rgba(200,218,255,0.5)", fontSize: 14 }}>
                  {user.email}
                </div>

                <div style={{
                  marginTop: 14,
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(37,99,235,0.2)",
                  border: "1px solid rgba(37,99,235,0.4)",
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  {user.role}
                </div>
              </div>

              {/* RIGHT */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 24,
                  padding: 24,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3 style={{ marginBottom: 20 }}>Информация</h3>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}>
                  {[
                    ["ID", user.id],
                    ["Логин", user.login || "—"],
                    ["Email", user.email],
                    ["Роль", user.role],
                    ["Аватар", user.avatarUrl || "fallback"],
                  ].map(([label, value]) => (
                    <div key={label} style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 14,
                      padding: 14,
                    }}>
                      <div style={{ fontSize: 12, color: "rgba(200,218,255,0.4)" }}>
                        {label}
                      </div>
                      <div style={{ fontSize: 14, marginTop: 4 }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedShell>
  );
}