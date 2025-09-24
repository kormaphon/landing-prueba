"use client";

import React, { useState } from "react";

export default function CalculoForm(){
   

    interface FormErrors{
        cliente?: string,
        producto?: string,
        precio?: string,
        cantidad?: string
    }

    type Cotizacion = {
        cliente: string;
        productoNombre: string;
        precio: number;
        cantidad: number;
        subtotal: number;
    }


    const [nombreCompleto, setNombreCompleto] = useState("");
    const [productoId, setProductoId] = useState("");
    const [precio,setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState<number>(1);
    const [cotizacion, setCotizacion] = useState<Cotizacion | null> (null);
    const [errors, SetErrors] = useState<FormErrors>({});
    


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
        
        const prod = productos.find(p => p.id === productoId);
        const productoNombre = prod  ? prod.nombre : "-";
        const subtotal = precio * cantidad;
        
        setCotizacion({
            cliente: nombreCompleto,
            productoNombre,
            precio,
            cantidad,
            subtotal,
        });

    }


    //validaciones


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


        <label className="block">
            <span className="text-sm font-medium">Precio del producto:</span>   
            <input 
                type="number" 
                id="precio" 
                name="precio" 
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
                placeholder="Juan Peréz"
                autoComplete="name"
                className="mt-1 block w-full rounded border px-3 py-2"
                min="0"
                required 
            />
        </label>

    
    <label className="block mt-4">
        <span className="text-sm font-medium">Cantidad</span>
        <input 
            type="number"
            id="cantidad"
            name="cantidad"
            value={cantidad === 0 ? "" : cantidad}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                setCantidad(e.target.value === "" ? 0 : Math.floor(Number(e.target.value)))
            }
             min="1"
             step="1"
             placeholder="1"
             className="mt-1 block w-full rounded border px-3 py-2"
             required
        />     
    </label>


       <button
         type="submit"
         className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
        >
                Generar cotización
        </button>

        {cotizacion && (
                <div className="mt-8 rounded-lg border bg-white p-6 shadow">
                <h2 className="text-xl font-bold mb-4 text-blue-600">📄 Cotización</h2>

                <p><span className="font-medium">Cliente:</span> {cotizacion.cliente}</p>
                <p><span className="font-medium">Producto:</span> {cotizacion.productoNombre}</p>
                <p><span className="font-medium">Precio unitario:</span> ${cotizacion.precio}</p>
                <p><span className="font-medium">Cantidad:</span> {cotizacion.cantidad}</p>
                <hr className="my-3" />
                <p className="text-lg font-semibold text-green-600">
                Subtotal: ${cotizacion.subtotal}
                </p>
         </div>
)}


    </form>
    )
}
