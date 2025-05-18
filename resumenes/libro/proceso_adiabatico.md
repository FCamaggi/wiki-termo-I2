# Proceso Adiabático en Gas Ideal

_Parte del curso FIS1523 - Termodinámica_

## Introducción

Un **proceso adiabático** es aquel en el que no hay transferencia de calor entre el sistema y su entorno (Q = 0). Estos procesos son fundamentales en termodinámica y tienen numerosas aplicaciones prácticas en ingeniería, desde motores de combustión interna hasta compresores y turbinas. En este documento nos centraremos específicamente en el comportamiento de gases ideales durante procesos adiabáticos.

## Características de un Proceso Adiabático

### Definición y Condiciones

Un proceso se considera adiabático cuando:

- El sistema está térmicamente aislado (Q = 0)
- El proceso ocurre tan rápidamente que no hay tiempo suficiente para la transferencia de calor
- El sistema está rodeado por un aislante térmico perfecto

```
       Q = 0
  ┌─────────────┐
  │             │
  │             │
  │  Sistema    │ → W
  │             │
  │             │
  └─────────────┘
    Aislamiento
     térmico
```

### Diferencia con Otros Procesos

| Proceso    | Definición                 | Condición matemática |
| ---------- | -------------------------- | -------------------- |
| Adiabático | Sin transferencia de calor | Q = 0                |
| Isotérmico | Temperatura constante      | T = constante        |
| Isobárico  | Presión constante          | P = constante        |
| Isocórico  | Volumen constante          | V = constante        |

> 💡 **Nota**: Un proceso puede ser simultáneamente adiabático e isotérmico solo si no hay trabajo involucrado (W = 0), lo que implica que ΔU = 0.

## Primera Ley en Procesos Adiabáticos

### Aplicación de la Primera Ley

Para un proceso adiabático, la primera ley de la termodinámica se simplifica a:

$$\Delta U = -W$$

Para gases ideales, el cambio en energía interna es:

$$\Delta U = mc_v\Delta T$$

Donde:

- m es la masa del gas [kg]
- cv es el calor específico a volumen constante [J/(kg·K)]
- ΔT es el cambio de temperatura [K]

### Relación con el Trabajo

Para un proceso adiabático:

$$W = -mc_v\Delta T = -mc_v(T_2 - T_1)$$

- Si W > 0 (expansión), entonces T₂ < T₁ (el gas se enfría)
- Si W < 0 (compresión), entonces T₂ > T₁ (el gas se calienta)

## Ecuaciones para Procesos Adiabáticos en Gases Ideales

### Relación Presión-Volumen

Para un gas ideal en un proceso adiabático:

$$PV^{\gamma} = \text{constante}$$

Donde γ (gamma) es la relación de calores específicos:

$$\gamma = \frac{c_p}{c_v}$$

### Relaciones entre Variables de Estado

| Relación | Ecuación                        |
| -------- | ------------------------------- |
| P-V      | P₁V₁^γ = P₂V₂^γ                 |
| T-V      | T₁V₁^(γ-1) = T₂V₂^(γ-1)         |
| T-P      | T₁P₁^((1-γ)/γ) = T₂P₂^((1-γ)/γ) |

### Valores de γ para Diferentes Gases

| Tipo de Gas | Valor de γ | Ejemplos         |
| ----------- | ---------- | ---------------- |
| Monoatómico | 5/3 ≈ 1.67 | He, Ar, Ne       |
| Diatómico   | 7/5 = 1.4  | O₂, N₂, H₂, aire |
| Poliatómico | 4/3 ≈ 1.33 | CO₂, H₂O (vapor) |

## Trabajo en Procesos Adiabáticos

### Cálculo del Trabajo

Para un gas ideal en un proceso adiabático, el trabajo puede calcularse como:

$$W = \frac{P_1V_1 - P_2V_2}{\gamma - 1} = \frac{nR(T_1 - T_2)}{\gamma - 1} = \frac{mc_v(T_1 - T_2)}{(1 - \gamma)/(\gamma - 1)}$$

### Trabajo para Diferentes Procesos

```
      P
       │
       │
       │
       │  Adiabático (PV^γ = cte)
       │   │
       │   │
       │    ╲
       │     ╲
       │      ╲
       │       ╲     Isotérmico (PV = cte)
       │        ╲
       └─────────────────── V
```

Para el mismo cambio de volumen, el trabajo realizado en un proceso adiabático difiere del trabajo en un proceso isotérmico.

## Aplicaciones de Procesos Adiabáticos

### 1. Motores de Combustión Interna

En el ciclo Otto (motores de gasolina):

- Compresión: Proceso aproximadamente adiabático
- Expansión: Proceso aproximadamente adiabático tras la combustión

```
   P
    │    ┌───┐
    │   /│   │\
    │  / │   │ \
    │ /  │   │  \
    │/   └───┘   \
    └──────────────── V
    Compresión    Expansión
   adiabática    adiabática
```

### 2. Compresores

La compresión en compresores rápidos es aproximadamente adiabática, lo que resulta en:

- Temperatura final más alta que en compresión isotérmica
- Mayor trabajo requerido que en compresión isotérmica

### 3. Turbinas y Expansores

- La expansión rápida de gases en turbinas es aproximadamente adiabática
- Disminución de temperatura durante la expansión

### 4. Fenómenos Atmosféricos

- El movimiento vertical de masas de aire en la atmósfera sigue aproximadamente un proceso adiabático
- Explica la formación de nubes y precipitación

## Eficiencia en Procesos Adiabáticos

### Compresión Adiabática vs Isotérmica

La compresión isotérmica requiere menos trabajo que la adiabática para el mismo cambio de volumen:

```
      P
       │          Adiabático
       │         /
       │        /
       │       /
       │      /
       │     /  Isotérmico
       │    /
       │   /
       │  /
       │ /
       │/
       └─────────────────── V
```

- Compresión por etapas con enfriamiento intermedio se aproxima al proceso isotérmico
- Mejora la eficiencia en compresores industriales

## Ejemplos Prácticos

### Ejemplo 1: Compresión Adiabática

**Problema**: Un gas ideal diatómico (γ = 1.4) a 300 K y 100 kPa se comprime adiabáticamente hasta que su volumen se reduce a 1/4 del original. Calcular:
a) La presión final
b) La temperatura final
c) El trabajo realizado sobre el gas

**Solución**:

1. Datos:
   - T₁ = 300 K
   - P₁ = 100 kPa
   - V₂ = V₁/4
   - γ = 1.4
2. Presión final:
   - P₂ = P₁(V₁/V₂)^γ = 100 × (4)^1.4 = 100 × 8.28 = 828 kPa
3. Temperatura final:
   - T₂ = T₁(V₁/V₂)^(γ-1) = 300 × (4)^0.4 = 300 × 1.74 = 522 K
4. Trabajo (sobre el gas, por lo tanto negativo):
   - W = [P₁V₁ - P₂V₂]/(γ-1)
   - Para calcular el valor exacto necesitaríamos conocer el volumen o la masa del gas

### Ejemplo 2: Expansión Adiabática Libre

**Problema**: 0.2 kg de aire (considerado como gas ideal con γ = 1.4, cv = 718 J/kg·K) a 500 kPa y 400 K se expande adiabáticamente hasta 100 kPa. Calcular:
a) La temperatura final
b) El trabajo realizado por el gas

**Solución**:

1. Datos:
   - P₁ = 500 kPa, P₂ = 100 kPa
   - T₁ = 400 K
   - m = 0.2 kg
   - γ = 1.4, cv = 718 J/kg·K
2. Temperatura final:
   - T₂ = T₁(P₂/P₁)^((γ-1)/γ) = 400 × (100/500)^(0.4/1.4) = 400 × (0.2)^0.286 = 400 × 0.685 = 274 K
3. Trabajo realizado por el gas:
   - W = mcv(T₁-T₂) = 0.2 × 718 × (400-274) = 0.2 × 718 × 126 = 18,094 J = 18.1 kJ

## Resumen

```
┌───────────────────────────────────────┐
│ PROCESO ADIABÁTICO: PUNTOS CLAVE      │
├───────────────────────────────────────┤
│ • Definición: Q = 0                   │
│                                       │
│ • Relación P-V: PV^γ = constante      │
│                                       │
│ • Relaciones:                         │
│   - T₂/T₁ = (V₁/V₂)^(γ-1)             │
│   - T₂/T₁ = (P₂/P₁)^((γ-1)/γ)         │
│                                       │
│ • Primera Ley: W = -ΔU = -mcvΔT       │
│                                       │
│ • Aplicaciones clave:                 │
│   - Motores de combustión             │
│   - Compresores                       │
│   - Turbinas                          │
└───────────────────────────────────────┘
```

> 💡 **Consejo de estudio**: Al resolver problemas de procesos adiabáticos, es fundamental recordar que PV^γ = constante y entender que el trabajo realizado está directamente relacionado con el cambio de temperatura.

---

## Enlaces a otros temas relacionados

- [Gas Ideal](gas_ideal.md)
- [Primera Ley](primera_ley_i2.md)
- [Sistemas Cerrados](sistemas_cerrados.md)
- [Factor de Compresibilidad](compresibilidad.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición.
- Halliday, D., Resnick, R. and Walker, J. (2014) Fundamental of Physics. 10th Edition, Sección 19.9
- Notas del curso FIS1523 (1-2025)
