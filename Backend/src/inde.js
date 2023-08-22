const montoPrestamo = 300000;
const tasaInteres = 7.714;
const plazosPrestamo = 4;
const abonoCapital = 0;

const tablaAmortizacion = calcularTablaAmortizacion(montoPrestamo, tasaInteres, plazosPrestamo, abonoCapital);

function calcularTablaAmortizacion(prestamo, tasa, plazos, abonoCapital = 0) {
    const tasaDecimal = tasa / 100;
    const factor = Math.pow(1 + tasaDecimal, plazos);
    const cuota = (prestamo * tasaDecimal * factor) / (factor - 1);
    
    let saldoPendiente = prestamo;
    const tabla = [];
    
    for (let i = 1; i <= plazos; i++) {
        const interes = saldoPendiente * tasaDecimal;
        const principal = cuota - interes + abonoCapital;
        saldoPendiente -= principal;
        
        tabla.push({
            mes: i,
            cuota: cuota.toFixed(2),
            interes: interes.toFixed(2),
            principal: principal.toFixed(2),
            abonoCapital: abonoCapital.toFixed(2),
            saldoPendiente: saldoPendiente.toFixed(2)
        });
    }
    
    return tabla;
    
}



console.log("Tabla de Amortización:");
console.log("----------------------------------------------------------------------------");
console.log("| Mes |   Cuota   | Interés | Principal | Abono Capital | Saldo Pendiente |");
console.log("----------------------------------------------------------------------------");
tablaAmortizacion.forEach(item => {
    console.log(`❤️ ${item.mes.toString().padStart(3)} ❤️ ${item.cuota.toString().padStart(9)} ❤️ ${item.interes.toString().padStart(7)} ❤️ ${item.principal.toString().padStart(9)} ❤️ ${item.abonoCapital.toString().padStart(12)} ❤️ ${item.saldoPendiente.toString().padStart(15)} ❤️`);
  });
console.log("----------------------------------------------------------------------------");
