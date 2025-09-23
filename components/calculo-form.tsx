"use client";

import React, { use, useState } from "react";

export default function CalculoForm(){
   
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [productoId, setProductoId] = useState("");

    const productos = [
        { id: "compresor3hp", nombre: "Compresor de Aire 3HP" },
        { id: "bomba2pulg", nombre: "Bomba Centrífuga 2\"" },
        { id: "motor5hp", nombre: "Motor Eléctrico 5HP" },
        { id: "valvula2pulg", nombre: "Válvula de Bola 2\"" },
        { id: "filtro_ind", nombre: "Filtro de Agua Industrial" },
        { id: "generador5kw", nombre: "Generador 5kW" },
        { id: "taladro_banco", nombre: "Taladro de Banco" },
        { id: "soldadora200a", nombre: "Soldadora Inverter 200A" },
        { id: "hidrolavadora", nombre: "Hidrolavadora Industrial" },
        { id: "caldera50l", nombre: "Caldera 50L" },
    ];

   
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

        <label className="block-mt-4">
            <span className="text-sm font-meidum">Selecciona el producto a cotizar:</span>
            <select 
                name="producto"
                id="producto"
                value={productoId}
                onChange={(e) => setProductoId(e.target.value)}
                className="mt-1 block w-full rounded border px-3 py-2 bg-white"
                required>
                <option value="" disabled>— Elige una opción —</option>
                { productos.map( (p) => 
                    <option key={p.id} value={p.id}>
                        {p.nombre}
                    </option>
                )}
            </select>
        </label>


        <button type="submit">Send Data</button>
    </form>
    )
}
