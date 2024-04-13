import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const data = await request.formData();
    const local:FormDataEntryValue | null  = data.get("inputLocal");
    const visita:FormDataEntryValue | null  = data.get("inputVisita");
    let gol_local:FormDataEntryValue | null  = data.get("inputGolLocal");
    let gol_visita:FormDataEntryValue | null = data.get("inputGolVisita");
    const fecha_fut:FormDataEntryValue | null  = data.get("inputFechaFut");
    const temporada:FormDataEntryValue | null = data.get("inputTemporada")
    const date:FormDataEntryValue | null = data.get("inputFecha")
    const resultado = (gol_local !== null && gol_visita !== null) ? gol_local > gol_visita ? local : gol_local < gol_visita ? visita : '900' : null;

    if (!local || !visita || !fecha_fut) {
        return new Response("Falta rellanar algunos campos", { status: 400 });
    }
    if(!gol_local && !gol_visita){
        gol_local = null;
        gol_visita = null;
    }
    
    const { data:partido, error } = await supabase.from('partido')
    .insert([
      { PAR_LOCAL: local, PAR_VISITA: visita, PAR_GOL_LOCAL: gol_local, PAR_GOL_VISITA: gol_visita, PAR_FECHA: date, PAR_FECHA_FUT: fecha_fut, PAR_RESULTADO: gol_local, PAR_TEMP: temporada },
    ])
    .select()

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    return redirect('/admin/dashboard')
};