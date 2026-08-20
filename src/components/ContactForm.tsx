"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const subject = String(values.get("subject") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();
    if (!name) { setNotice("Enter your full name."); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { setNotice("Enter a valid email address."); return; }
    if (!subject) { setNotice("Enter a subject."); return; }
    if (!message) { setNotice("Enter a message."); return; }
    setNotice("Message delivery is not configured yet. Please call or email the hotel directly.");
  }
  return <form id="contact-form" className="contactForm" noValidate onSubmit={submit}><div className="contactFormGrid"><label>Full name<input name="name" autoComplete="name" /></label><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" /></label><label>Subject<input name="subject" /></label></div><label>Message<textarea name="message" rows={5} /></label><button className="button" type="submit">Send message</button>{notice && <p className="formNotice" role="alert">{notice}</p>}</form>;
}
