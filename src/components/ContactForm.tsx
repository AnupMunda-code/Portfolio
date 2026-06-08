"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:anupmunda03@gmail.com?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
        />
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
        />
      </div>
      <textarea
        required
        rows={4}
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-foreground px-8 py-4 font-medium text-background transition-transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
    </form>
  );
}
