"use client";

import { useState } from "react";

export function BookingBar() {
  const [notice, setNotice] = useState(""); const [checkIn, setCheckIn] = useState(""); const [checkOut, setCheckOut] = useState("");
  return <form id="book" className="booking" action="/book" method="get" onSubmit={(event) => { if (checkIn && checkOut && checkOut <= checkIn) { event.preventDefault(); setNotice("Check-out must be after check-in."); } }}><label>Check-in<input type="date" name="checkIn" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} /></label><label>Check-out<input type="date" name="checkOut" min={checkIn || undefined} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} /></label><label>Guests<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option></select></label><label>Rooms<select name="rooms" defaultValue="1"><option value="1">1 room</option><option value="2">2 rooms</option></select></label><button className="button" type="submit">Check availability</button>{notice && <p className="bookingNotice" role="alert">{notice}</p>}</form>;
}
