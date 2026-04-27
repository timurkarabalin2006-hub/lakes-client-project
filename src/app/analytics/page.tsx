"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "01", ph: 7.2, mineral: 120 },
  { date: "02", ph: 7.4, mineral: 140 },
  { date: "03", ph: 7.1, mineral: 160 },
  { date: "04", ph: 7.3, mineral: 150 },
  { date: "05", ph: 7.6, mineral: 170 },
  { date: "06", ph: 7.5, mineral: 180 },
  { date: "07", ph: 7.7, mineral: 200 },
];

export default function WaterChart() {
  return (
    <div
      style={{
        width: "100%",
        height: 360,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 20,
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 14, color: "rgba(0,200,224,0.7)" }}>
          Петропавловск
        </div>
        <div style={{ fontSize: 18, fontWeight: 600 }}>
          Качество воды (7 дней)
        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" />

          <XAxis
            dataKey="date"
            stroke="rgba(200,218,255,0.4)"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            stroke="rgba(200,218,255,0.4)"
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              background: "#0a1628",
              border: "1px solid rgba(100,160,255,0.2)",
              borderRadius: 10,
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="ph"
            stroke="#00c8e0"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="mineral"
            stroke="#1a6fff"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}