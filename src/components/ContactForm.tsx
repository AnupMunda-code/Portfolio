"use client";

import { useState } from "react";

// Get a free access key at https://web3forms.com (enter your email, no account
// needed). Paste it here and the form will send messages straight to your inbox.
const WEB3FORMS_ACCESS_KEY = "30396d68-affe-4133-939f-67ff9c4ac761";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from your portfolio");
    data.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-accent/40 bg-card p-8">
        <p className="text-xl font-bold gradient-text">Message sent! ✓</p>
        <p className="mt-2 text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <input type="text" name="name" required placeholder="Your name" className={field} />
        <input type="email" name="email" required placeholder="Your email" className={field} />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Your message"
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-foreground px-8 py-4 font-medium text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-accent3">{error}</p>
      )}
    </form>
  );
}
