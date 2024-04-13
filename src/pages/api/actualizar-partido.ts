import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
    const data = await request.formData();
    const local = data.get("inputLlaveLocal");
    const gol_local = data.get("inputGolLocal");
    const visita = data.get("inputLlaveVisita");
    const gol_visita = data.get("inputGolVisita");
    const llave = data.get("inputLlave");
    const resultado = (gol_local !== null && gol_visita !== null) ? gol_local > gol_visita ? local : gol_local < gol_visita ? visita : '900' : null;

    console.log(resultado)

    // if (!gol_local || !gol_visita) {
    //     return new Response("Falta rellanar algunos campos", { status: 400 });
    // }

    // const { data:partido, error } = await supabase.from('partido')
    // .update({ PAR_GOL_LOCAL: gol_local, PAR_GOL_VISITA: gol_visita, PAR_RESULTADO: resultado })
    // .eq('PAR_ID', llave)
    // .select()
            

    // if (error) {
    //     return new Response(error.message, { status: 500 });
    // }

    return redirect('/admin/dashboard')
};