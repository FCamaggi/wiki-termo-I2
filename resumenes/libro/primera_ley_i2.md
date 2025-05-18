# Primera Ley de la Termodinámica y Procesos

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La **Primera Ley de la Termodinámica** representa el principio de conservación de la energía aplicado a sistemas termodinámicos. Establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra. Entender este principio fundamental y los diversos procesos termodinámicos es esencial para analizar sistemas de potencia, refrigeración, y otros dispositivos de ingeniería.

## Primera Ley de la Termodinámica

### Formulación Matemática

Para un sistema cerrado, la Primera Ley establece que:

$$\Delta E = Q - W$$

Donde:

- ΔE es el cambio en la energía total del sistema [J]
- Q es el calor transferido al sistema [J]
- W es el trabajo realizado por el sistema [J]

La energía total incluye todas las formas de energía:

$$E = U + E_c + E_p$$

Para la mayoría de los análisis en sistemas estacionarios sin cambios de energía cinética o potencial:

$$\Delta U = Q - W$$

Donde U es la energía interna del sistema.

### Convención de Signos

```
       Q > 0 (entra)
          ↓
    ┌──────────┐
    │          │
    │ Sistema  │ → W > 0 (sale)
    │          │
    └──────────┘
```

- **Calor (Q)**:
  - Q > 0: Calor transferido hacia el sistema
  - Q < 0: Calor transferido desde el sistema hacia el entorno
- **Trabajo (W)**:
  - W > 0: Trabajo realizado por el sistema sobre el entorno
  - W < 0: Trabajo realizado por el entorno sobre el sistema

> 💡 **Nota importante**: En algunos textos se utiliza la convención contraria para el trabajo. Es crucial verificar la convención utilizada al resolver problemas.

## Ciclos Termodinámicos

Un **ciclo termodinámico** es una secuencia de procesos termodinámicos que devuelve el sistema a su estado inicial. Al finalizar el ciclo:

- ΔU = 0 (la energía interna vuelve a su valor inicial)
- Q = W (todo el calor neto se convierte en trabajo neto o viceversa)

### Clasificación de Ciclos

1. **Ciclos de potencia**: Convierten calor en trabajo (Q > 0, W > 0)
   - Ejemplos: Ciclo de Carnot, Ciclo Otto, Ciclo Diesel
2. **Ciclos de refrigeración**: Utilizan trabajo para transferir calor de un cuerpo frío a uno caliente (Q < 0, W < 0)
   - Ejemplos: Ciclo de refrigeración por compresión de vapor, Ciclo de refrigeración por absorción

### Eficiencia Térmica

Para ciclos de potencia, la eficiencia térmica es:

$$\eta_{th} = \frac{W_{neto}}{Q_{entra}} = 1 - \frac{Q_{sale}}{Q_{entra}}$$

## Procesos Termodinámicos

```
       P
        │
        │
   P₁   │     2
        │    /│
        │   / │
        │  /  │
   P₂   │ /   │
        │/    │
        1─────3──── V
       V₁     V₂
```

### 1. Proceso Isocórico (V = constante)

```
P
│    │
│    │
│    │
│    │
└──────────── V
```

- Volumen constante: V₁ = V₂
- Trabajo: W = 0 (no hay cambio de volumen)
- Primera Ley: ΔU = Q
- Para gases ideales: Q = mcvΔT
- Ejemplo: Calentamiento de un gas en un recipiente rígido

### 2. Proceso Isobárico (P = constante)

```
P
│────────
│
│
│
└──────────── V
```

- Presión constante: P₁ = P₂
- Trabajo: W = P(V₂ - V₁)
- Para gases ideales: Q = mcpΔT
- Relación con entalpía: Q = ΔH (a presión constante)
- Ejemplo: Calentamiento de un gas con un pistón libre

### 3. Proceso Isotérmico (T = constante)

```
P
│
│   ─────
│
│
└──────────── V
```

- Temperatura constante: T₁ = T₂
- Para gases ideales: PV = constante
- Trabajo: W = nRTln(V₂/V₁) = nRTln(P₁/P₂)
- Primera Ley: Q = W (no hay cambio en la energía interna)
- Ejemplo: Compresión lenta con transferencia de calor

### 4. Proceso Adiabático (Q = 0)

```
P
│
│   ──┘
│
│
└──────────── V
```

- No hay transferencia de calor: Q = 0
- Primera Ley simplificada: ΔU = -W
- Para gases ideales: PV^γ = constante, donde γ = cp/cv
- Trabajo: W = (P₁V₁ - P₂V₂)/(γ-1) = cv(T₁ - T₂)
- Ejemplo: Compresión rápida en un cilindro aislado

### 5. Proceso Politrópico (PV^n = constante)

- Relación general: PV^n = constante
- Casos especiales:
  - n = 0: Proceso isobárico
  - n = 1: Proceso isotérmico
  - n = γ: Proceso adiabático
  - n = ∞: Proceso isocórico
- Trabajo: W = (P₁V₁ - P₂V₂)/(1-n)

## Relaciones para Gases Ideales

### Relaciones de Temperatura

| Proceso    | Relación de Temperaturas                  |
| ---------- | ----------------------------------------- |
| Isocórico  | P₂/P₁ = T₂/T₁                             |
| Isobárico  | V₂/V₁ = T₂/T₁                             |
| Isotérmico | T₂ = T₁                                   |
| Adiabático | T₂/T₁ = (V₁/V₂)^(γ-1) = (P₂/P₁)^((γ-1)/γ) |

### Calores Específicos

Para gases ideales:

- cp - cv = R (constante específica del gas)
- γ = cp/cv (relación de calores específicos)

## Aplicaciones Prácticas

### Ejemplo 1: Proceso Isotérmico

**Problema**: Un gas ideal ocupa 2 L a 300 K y 200 kPa, y se comprime isotérmicamente hasta 0.5 L. Calcular:
a) La presión final
b) El trabajo realizado sobre el gas
c) El calor transferido

**Solución**:

1. Datos:
   - V₁ = 2 L = 0.002 m³
   - V₂ = 0.5 L = 0.0005 m³
   - T = 300 K (constante)
   - P₁ = 200 kPa = 200,000 Pa
2. Para un proceso isotérmico: P₁V₁ = P₂V₂
   - P₂ = P₁(V₁/V₂) = 200,000 × (0.002/0.0005) = 800,000 Pa = 800 kPa
3. Trabajo: W = P₁V₁ln(V₁/V₂) = 200,000 × 0.002 × ln(4) = 554.5 J
   - Como el gas se comprime, W = -554.5 J (trabajo realizado sobre el gas)
4. Como es isotérmico: ΔU = 0
5. Por la Primera Ley: Q = ΔU + W = 0 + (-554.5) = -554.5 J
   - El calor transferido sale del sistema.

### Ejemplo 2: Proceso Adiabático

**Problema**: Un gas ideal con γ = 1.4 está inicialmente a 300 K y 100 kPa. Se comprime adiabáticamente hasta que su volumen se reduce a la mitad. Calcular:
a) La presión final
b) La temperatura final
c) El trabajo realizado

**Solución**:

1. Datos:
   - γ = 1.4
   - T₁ = 300 K
   - P₁ = 100 kPa
   - V₂ = V₁/2
2. Para un proceso adiabático: P₁V₁^γ = P₂V₂^γ
   - P₂ = P₁(V₁/V₂)^γ = 100 × (2)^1.4 = 100 × 2.639 = 263.9 kPa
3. Temperatura: T₂/T₁ = (V₁/V₂)^(γ-1)
   - T₂ = T₁(V₁/V₂)^(γ-1) = 300 × (2)^0.4 = 300 × 1.32 = 396 K
4. Trabajo: W = (P₁V₁ - P₂V₂)/(γ-1) = nR(T₁ - T₂)/(1-γ) = cv(T₁ - T₂)
   - Como el gas se comprime, W es negativo. El cálculo exacto requeriría conocer la masa o número de moles.

## Resumen

```
┌───────────────────────────────────────┐
│ PRIMERA LEY Y PROCESOS: PUNTOS CLAVE  │
├───────────────────────────────────────┤
│ • Primera Ley: ΔU = Q - W             │
│                                       │
│ • Procesos importantes:               │
│   - Isocórico: V = cte, W = 0         │
│   - Isobárico: P = cte, W = PΔV       │
│   - Isotérmico: T = cte, PV = cte     │
│   - Adiabático: Q = 0, PV^γ = cte     │
│                                       │
│ • Ciclos termodinámicos: ΔU = 0       │
│   - Potencia: Q > 0, W > 0            │
│   - Refrigeración: Q < 0, W < 0       │
│                                       │
│ • Para gases ideales:                 │
│   - cp - cv = R                       │
│   - γ = cp/cv                         │
└───────────────────────────────────────┘
```

> 💡 **Consejo de estudio**: Al resolver problemas, identifique primero qué tipo de proceso es y aplique las ecuaciones correspondientes. Siempre verifique sus respuestas utilizando la Primera Ley.

---

## Enlaces a otros temas relacionados

- [Sistemas Cerrados](sistemas_cerrados.md)
- [Gas Ideal](gas_ideal.md)
- [Proceso Adiabático](proceso_adiabatico.md)
- [Tablas de Propiedades](tablas_propiedades.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición.
- Halliday, D., Resnick, R. and Walker, J. (2014) Fundamental of Physics. 10th Edition, Sección 18.5
- Notas del curso FIS1523 (1-2025)
