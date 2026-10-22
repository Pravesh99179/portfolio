import { useEffect, useState } from "react";
import { profile } from "../content/site";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: profile.timeZone,
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export default function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time className="clock" dateTime={now.toISOString()}>
      Delhi, {format.format(now)}
    </time>
  );
}
