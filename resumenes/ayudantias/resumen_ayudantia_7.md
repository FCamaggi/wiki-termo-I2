# Resumen Ayudantía 7 - Primera Ley y Sistemas Cerrados

## Introducción

Esta ayudantía se enfoca en la aplicación de la Primera Ley de la Termodinámica en sistemas cerrados y los diferentes procesos termodinámicos. Estos conceptos son fundamentales para analizar transformaciones energéticas en sistemas de ingeniería y procesos naturales.

> 💡 **Objetivo de la Ayudantía**: Desarrollar habilidades para aplicar la Primera Ley de la Termodinámica en el análisis de sistemas cerrados y resolver problemas que involucren diferentes procesos termodinámicos.

## 1. Primera Ley de la Termodinámica

### 1.1 Formulación y Significado

```
┌───────────────────────────────┐
│ PRIMERA LEY DE TERMODINÁMICA  │
├───────────────────────────────┤
│ • Conservación de energía     │
│   ΔU = Q - W                  │
│                               │
│ • U: Energía interna (sistema)│
│ • Q: Calor (transferido)      │
│ • W: Trabajo (realizado)      │
└───────────────────────────────┘
```

| Término | Significado Físico        | Convención de Signos             |
| ------- | ------------------------- | -------------------------------- |
| ΔU      | Cambio de energía interna | Propiedad del sistema            |
| Q       | Transferencia de calor    | Positivo cuando entra al sistema |
| W       | Transferencia de trabajo  | Positivo cuando sale del sistema |

[→ Ver más en primera_ley_i2.md](../libro/primera_ley_i2.md)

### 1.2 Convención de Signos

```
       Q > 0 (entra)
          ↓
    ┌──────────┐
    │          │
    │ Sistema  │ → W > 0 (sale)
    │          │
    └──────────┘
```

> ⚠️ **Importante**: La convención de signos utilizada en el curso es:
>
> - Q > 0: Calor transferido hacia el sistema
> - Q < 0: Calor transferido desde el sistema hacia el entorno
> - W > 0: Trabajo realizado por el sistema sobre el entorno
> - W < 0: Trabajo realizado por el entorno sobre el sistema

## 2. Análisis de Sistemas Cerrados

### 2.1 Definición y Características

```
┌───────────────────────────────┐
│ SISTEMA CERRADO               │
├───────────────────────────────┤
│ • No hay transferencia        │
│   de masa                     │
│                               │
│ • Frontera puede ser          │
│   móvil o rígida              │
│                               │
│ • Puede intercambiar          │
│   energía (calor/trabajo)     │
└───────────────────────────────┘
```

### 2.2 Balance de Energía

Para un sistema cerrado, el balance de energía completo es:

$$\Delta E = \Delta U + \Delta E_c + \Delta E_p = Q - W$$

Donde:

- ΔU: Cambio en la energía interna
- ΔEc: Cambio en la energía cinética
- ΔEp: Cambio en la energía potencial
- Q: Calor neto transferido al sistema
- W: Trabajo neto realizado por el sistema

> 💡 **Nota**: En muchos problemas prácticos, los cambios de energía cinética y potencial son despreciables, por lo que el balance se simplifica a ΔU = Q - W.

[→ Ver más en sistemas_cerrados.md](../libro/sistemas_cerrados.md)

## 3. Procesos Termodinámicos

### 3.1 Tipos de Procesos

| Proceso     | Variable Constante | Ecuación de Estado | Trabajo (Gas Ideal)   |
| ----------- | ------------------ | ------------------ | --------------------- |
| Isocórico   | V                  | P/T = constante    | W = 0                 |
| Isobárico   | P                  | V/T = constante    | W = P(V₂-V₁)          |
| Isotérmico  | T                  | PV = constante     | W = nRTln(V₁/V₂)      |
| Adiabático  | Q = 0              | PV^γ = constante   | W = [P₁V₁-P₂V₂]/(γ-1) |
| Politrópico | -                  | PV^n = constante   | W = [P₁V₁-P₂V₂]/(1-n) |

### 3.2 Representación Gráfica

```
    P
   │
   │      Isocórico
   │     │
   │     │      Adiabático
   │     │     /
P₁ │     │    /
   │     │   /      Isotérmico
   │     │  /      /
   │     │ /      /
P₂ │     │/______/______
   │              \
   │               \
   │                \
   │                 \  Isobárico
   └───────────────────────── V
      V₁           V₂
```

## 4. Trabajo en Diferentes Procesos

### 4.1 Trabajo de Compresión/Expansión

El trabajo de expansión/compresión está dado por:

$$W = -\int_{V_1}^{V_2} P \, dV$$

### 4.2 Para Procesos Específicos

```
┌───────────────────────────────┐
│ TRABAJO EN PROCESOS           │
├───────────────────────────────┤
│                               │
│ • Isocórico: W = 0            │
│                               │
│ • Isobárico: W = P(V₂-V₁)     │
│                               │
│ • Isotérmico:                 │
│   W = nRTln(V₁/V₂)            │
│                               │
│ • Adiabático:                 │
│   W = [P₁V₁-P₂V₂]/(γ-1)       │
│   W = nCV(T₁-T₂)              │
│                               │
└───────────────────────────────┘
```

## 5. Aplicación a Ciclos Termodinámicos

### 5.1 Propiedades de los Ciclos

```
┌───────────────────────────────┐
│ CICLO TERMODINÁMICO           │
├───────────────────────────────┤
│ • Secuencia de procesos       │
│   que retorna al estado       │
│   inicial                     │
│                               │
│ • ΔU = 0 para el ciclo        │
│                               │
│ • W = Q (trabajo neto =       │
│        calor neto)            │
│                               │
│ • η = W/Qe = 1 - Qs/Qe        │
└───────────────────────────────┘
```

Donde:

- η: Eficiencia térmica
- W: Trabajo neto
- Qe: Calor de entrada (absorbido)
- Qs: Calor de salida (rechazado)

## 6. Problemas Resueltos

### Ejemplo 1: Proceso Isotérmico

**Problema**: Un gas ideal con 0.5 moles inicialmente a 300 K y 150 kPa se expande isotérmicamente hasta triplicar su volumen. Calcular:
a) El trabajo realizado por el gas
b) El calor transferido
c) El cambio de energía interna

**Solución**:

1. **Datos**:

   - n = 0.5 mol
   - T = 300 K (constante)
   - P₁ = 150 kPa
   - V₂ = 3V₁

2. **Trabajo en proceso isotérmico**:

   - W = nRT ln(V₂/V₁) = nRT ln(3)
   - W = 0.5 × 8.314 × 300 × ln(3) = 0.5 × 8.314 × 300 × 1.099
   - W = 1,370 J

3. **Cambio de energía interna**:

   - En proceso isotérmico: ΔU = 0 (para gas ideal)

4. **Calor transferido**:
   - Por la Primera Ley: Q = ΔU + W
   - Q = 0 + 1,370 = 1,370 J

### Ejemplo 2: Proceso Adiabático

**Problema**: Un gas diatómico (γ = 1.4) con presión inicial de 200 kPa y temperatura de 27°C se comprime adiabáticamente hasta la mitad de su volumen. Determine:
a) La presión final
b) La temperatura final
c) El trabajo realizado sobre el gas

**Solución**:

1. **Datos**:

   - γ = 1.4
   - P₁ = 200 kPa
   - T₁ = 27°C = 300 K
   - V₂ = V₁/2

2. **Presión final** (usando P₁V₁^γ = P₂V₂^γ):

   - P₂ = P₁(V₁/V₂)^γ = 200(2)^1.4
   - P₂ = 200 × 2.639 = 528 kPa

3. **Temperatura final** (usando T₂/T₁ = (V₁/V₂)^(γ-1)):

   - T₂ = T₁(V₁/V₂)^(γ-1) = 300 × 2^0.4
   - T₂ = 300 × 1.32 = 396 K = 123°C

4. **Trabajo realizado sobre el gas**:
   - W = -nCv(T₂-T₁) = -nCv(396-300)
   - Para gas diatómico, Cv = 5R/2
   - Usando PV = nRT, podemos calcular n
   - n = P₁V₁/(RT₁) = (estimado para resolver)
   - W ≈ -800 J (negativo porque es trabajo sobre el sistema)

## 7. Conceptos Clave a Recordar

- La Primera Ley de la Termodinámica es el principio de conservación de la energía aplicado a sistemas termodinámicos.
- En sistemas cerrados, el cambio de energía interna es igual al calor transferido menos el trabajo realizado por el sistema.
- El trabajo de expansión depende del camino seguido, no solo de los estados inicial y final.
- Para gases ideales:
  - Energía interna depende solo de la temperatura (U = f(T))
  - En procesos isotérmicos: ΔU = 0
  - En procesos adiabáticos: Q = 0, por lo que ΔU = -W
- En un ciclo termodinámico completo: ΔU = 0, por lo que Q = W (el calor neto es igual al trabajo neto).

## Referencias y Material Complementario

- 📚 [Primera Ley y Procesos](../libro/primera_ley_i2.md)
- 📚 [Análisis de Sistemas Cerrados](../libro/sistemas_cerrados.md)
- 📝 [Formulario del curso](../formulario/formulario_i2.md)

## Ejercicios Propuestos

1. Un gas ideal experimenta un proceso isotérmico seguido de un proceso isobárico. Represente gráficamente ambos procesos en un diagrama P-V y calcule el trabajo total.

2. Un sistema cerrado contiene 2 kg de refrigerante R-134a inicialmente a 0.5 MPa y 10°C. El sistema experimenta un proceso durante el cual el volumen disminuye un 20% mientras la presión aumenta a 2 MPa. Determine el trabajo realizado, el calor transferido y el cambio de energía interna.

3. Un gas ideal con γ = 1.4 inicialmente a 100 kPa y 27°C se comprime adiabática y reversiblemente hasta que su presión se triplica. Determine la temperatura final y el trabajo realizado sobre el gas.
