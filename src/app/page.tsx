"use client";
import Link from "next/link";
import { ProtectedShell } from "@/components/ProtectedShell";

const features = [
  { title: "Навигация", text: "Удобный доступ ко всем разделам системы через единый интерфейс." },
  { title: "Карта водоёмов", text: "Просмотр объектов с геолокацией и детальной информацией." },
  { title: "Аналитика данных", text: "Визуализация параметров: pH, минерализация, солёность и другие." },
  { title: "Фильтрация", text: "Анализ показателей по временным периодам и параметрам." },
  { title: "Профиль", text: "Управление аккаунтом и просмотр пользовательских данных." },
  { title: "Система", text: "Оптимизированный интерфейс без лишних функций — только нужное." },
];

const cards = [
  { label: "Геоданные", title: "Интерактивная карта", sub: "Навигация по водоёмам и выбор объектов", href: "/water-bodies", icon: "🗺" },
  { label: "Пользователь", title: "Аккаунт", sub: "Доступ к персональным данным и настройкам", href: "/profile", icon: "👤" },
  { label: "Аналитика", title: "Графики", sub: "Анализ показателей воды и динамики изменений", href: "/analytics", icon: "📊" }, // ← поменяй href
];

export default function HomePage() {
  return (
    <ProtectedShell>
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)", color: "#e8f0ff", fontFamily: "'Outfit', sans-serif", padding: "0 24px 60px" }}>
        
        {/* Ambient orbs */}
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,111,255,0.15), transparent)", top: -150, left: -150, filter: "blur(60px)" }} />
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,200,224,0.1), transparent)", bottom: 0, right: -100, filter: "blur(60px)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", paddingTop: 64, marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00c8e0", display: "inline-block", boxShadow: "0 0 8px #00c8e0" }} />
                <span style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,200,224,0.8)", fontWeight: 500 }}>Водные ресурсы</span>
              </div>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Обзор{" "}
                <span style={{ background: "linear-gradient(90deg, #1a6fff, #00c8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  системы
                </span>
              </h1>
              <p style={{ fontSize: 16, color: "rgba(200,218,255,0.55)", maxWidth: 480, lineHeight: 1.7 }}>
                Интеллектуальная платформа мониторинга водных ресурсов с визуализацией и аналитикой данных в реальном времени.
              </p>
            </div>
            <Link href="/water-bodies" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 14,
              background: "linear-gradient(135deg, #1a6fff, #0d4fd4)",
              color: "#fff", fontWeight: 600, fontSize: 15,
              textDecoration: "none", letterSpacing: "-0.01em",
              boxShadow: "0 0 40px rgba(26,111,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              transition: "all 0.2s",
              marginTop: 8,
            }}>
              Открыть карту →
            </Link>
          </div>

          {/* KPI Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
            {cards.map((c) => (
              <Link key={c.title} href={c.href} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "28px 28px 24px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  position: "relative",
                  overflow: "hidden",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(26,111,255,0.1)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(26,111,255,0.35)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{ position: "absolute", top: 20, right: 20, fontSize: 28, opacity: 0.6 }}>{c.icon}</div>
                  <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,200,224,0.7)", fontWeight: 500, marginBottom: 10 }}>{c.label}</div>
                  <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(200,218,255,0.5)", lineHeight: 1.5 }}>{c.sub}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Features Block */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 24,
            padding: "40px 40px 36px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 3, height: 22, borderRadius: 2, background: "linear-gradient(180deg, #1a6fff, #00c8e0)" }} />
              <h2 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>Основные возможности</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {features.map((f) => (
                <div key={f.title} style={{
                  padding: "20px 20px 18px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a6fff", marginBottom: 12, boxShadow: "0 0 6px rgba(26,111,255,0.6)" }} />
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, letterSpacing: "-0.01em" }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(200,218,255,0.5)", lineHeight: 1.6 }}>{f.text}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </ProtectedShell>
  );
}