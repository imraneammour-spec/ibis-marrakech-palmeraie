"use client";
import { useState } from "react";
import { hotel } from "@/data/hotel";
export function BookingBar() { const [notice, setNotice] = useState(""); return <form id="book" className="booking" onSubmit={(event) => { event.preventDefault(); window.location.assign(hotel.bookingUrl); }}><label>Check-in<input type="date" name="check-in" /></label><label>Check-out<input type="date" name="check-out" /></label><label>Guests<select defaultValue="2"><option>1 guest</option><option>2 guests</option><option>3 guests</option></select></label><label>Rooms<select defaultValue="1"><option>1 room</option><option>2 rooms</option></select></label><button className="button" type="submit">Check availability</button>{notice && <p className="bookingNotice" role="status">{notice}</p>}</form>; }
