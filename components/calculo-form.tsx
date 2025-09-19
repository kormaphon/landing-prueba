"use client";

import React, { useState } from "react";

export default function CalculoForm(){
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form send...");
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">Send Data</button>
        </form>
    )
}
