"use client";

import React, { use, useState } from "react";

export default function CalculoForm(){
  
    const [nombreCompleto, setNombreCompleto] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Form send...");
    }

    return(
        <form onSubmit={handleSubmit}>
           
        <label className="block">
            <span className="text-sm font-medium">Nombres completos del Cliente</span>
            
            <input 
                type="text" 
                id="nombre_completo" 
                name="nombre_completo" 
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                 placeholder="Juan Peréz"
                autoComplete="name"
                className="mt-1 block w-full rounded border px-3 py-2"
                required 
            />
        </label>

        <button type="submit">Send Data</button>
        </form>
    )
}
