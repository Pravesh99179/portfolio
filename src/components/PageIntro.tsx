import { useEffect, type ReactNode } from "react";

export default function PageIntro({ title, lede, docTitle }: { title: string; lede?: ReactNode; docTitle: string }) {
  useEffect(() => {
    document.title = `${docTitle}, Pravesh Agrawal`;
  }, [docTitle]);

  return (
    <header className="page-intro">
      <h1 className="display">{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}
