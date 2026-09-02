"use client";

import { useRef, useState } from "react";

type FormMsg = { type: "success" | "error"; text: string };

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [msg, setMsg] = useState<FormMsg | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9+\-\s]{7,15}$/;

    if (!name || !email || !phone || !message) {
      setMsg({ type: "error", text: "Please fill in all fields before submitting." });
      return;
    }
    if (!emailPattern.test(email)) {
      setMsg({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    if (!phonePattern.test(phone)) {
      setMsg({ type: "error", text: "Please enter a valid phone number." });
      return;
    }

    setMsg({
      type: "success",
      text: `Thanks, ${name.split(" ")[0]}! Your message has been received. Our team will get back to you shortly.`,
    });
    form.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />
      </div>

      <div className="field">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue="General Inquiry">
          <option>General Inquiry</option>
          <option>Jockey Products</option>
          <option>First Cry Products</option>
          <option>Store Timings &amp; Directions</option>
          <option>Feedback</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Write your message here..." required />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Send Message
      </button>

      {msg && <div className={`form-msg ${msg.type}`}>{msg.text}</div>}
    </form>
  );
}
