# Análisis de Energía en Sistemas Cerrados

_Parte del curso FIS1523 - Termodinámica_

## Introducción

Un **sistema cerrado** o **masa de control** es un sistema termodinámico que no permite la transferencia de masa a través de sus fronteras, pero sí permite la transferencia de energía en forma de calor y trabajo. El análisis energético de estos sistemas es fundamental para comprender y diseñar procesos termodinámicos en aplicaciones de ingeniería.

## Conceptos Fundamentales

### Definición de Sistema Cerrado

```
        Energía (calor, trabajo)
              ↕
┌─────────────────────────────┐
│                             │
│        SISTEMA CERRADO      │
│                             │
│ • No hay transferencia      │
│   de masa                   │
│ • Masa constante            │
│ • Volumen puede variar      │
│                             │
└─────────────────────────────┘
        Frontera definida
```

**Características principales**:

- Masa constante
- Frontera bien definida que puede ser fija o móvil
- Intercambio de energía a través de las fronteras
- No hay flujo de masa entrante o saliente

### Formas de Energía en un Sistema Cerrado

La energía total de un sistema cerrado puede expresarse como:

$$E = U + E_c + E_p$$

Donde:

- E = energía total [J]
- U = energía interna [J]
- Ec = energía cinética = ½mv² [J]
- Ep = energía potencial = mgh [J]

## Trabajo en Sistemas Cerrados

### Trabajo de Frontera Móvil (Trabajo PV)

El trabajo realizado cuando el volumen de un sistema cambia debido al movimiento de una frontera se calcula como:

$$W = \int_{V_1}^{V_2} P \, dV$$

Donde:

- W es el trabajo [J]
- P es la presión en la frontera [Pa]
- dV es el diferencial de volumen [m³]

#### Convención de signos:

- W > 0: Trabajo realizado por el sistema sobre el entorno (expansión)
- W < 0: Trabajo realizado por el entorno sobre el sistema (compresión)

### Trabajo para Distintos Procesos

| Tipo de Proceso               | Condición      | Expresión del Trabajo   |
| ----------------------------- | -------------- | ----------------------- |
| Isobárico (P = constante)     | P = P₀         | W = P₀(V₂ - V₁)         |
| Isotérmico (T = constante)    | PV = constante | W = nRT ln(V₂/V₁)       |
| Politrópico (PVⁿ = constante) | n ≠ 1          | W = (P₂V₂ - P₁V₁)/(1-n) |
| Isocórico (V = constante)     | V₁ = V₂        | W = 0                   |

### Otros Tipos de Trabajo

1. **Trabajo de eje (shaft work)**: Trabajo mecánico transferido a través de un eje giratorio.
2. **Trabajo eléctrico**: Energía transferida por movimiento de cargas eléctricas.
3. **Trabajo de resorte**: W = ½k(x₁² - x₂²)
4. **Trabajo de tensión superficial**: W = σdA

## Primera Ley para Sistemas Cerrados

La Primera Ley de la Termodinámica aplicada a sistemas cerrados establece:

$$\Delta E = Q - W$$

O, en forma extendida:

$$\Delta U + \Delta E_c + \Delta E_p = Q - W$$

Donde:

- ΔE es el cambio en la energía total del sistema [J]
- Q es el calor transferido al sistema [J]
- W es el trabajo realizado por el sistema [J]

> **Nota sobre convenciones**: En este documento seguimos la convención termodinámica donde Q > 0 significa calor transferido al sistema y W > 0 significa trabajo realizado por el sistema.

### Casos Especiales

1. **Sistema en reposo sin cambio de elevación**: ΔEc = 0, ΔEp = 0

   $$\Delta U = Q - W$$

2. **Proceso adiabático**: Q = 0

   $$\Delta U = -W$$

3. **Ciclo termodinámico**: ΔU = 0 (estado final = estado inicial)

   $$Q = W$$

## Análisis de Procesos Específicos

### Proceso a Volumen Constante

```
P
│    │
│    │
│    │
│    │
└──────── V
    V₁=V₂
```

- W = 0 (no hay cambio de volumen)
- ΔU = Q (todo el calor aumenta la energía interna)
- Q = mcvΔT (para gases ideales)

### Proceso a Presión Constante

```
P
│────────
│
│
│
└──────── V
```

- W = P(V₂ - V₁)
- ΔU = Q - W
- Q = mcpΔT (para gases ideales)
- ΔH = Q (el cambio de entalpía iguala al calor transferido)

### Cambio de Fase a Presión Constante

```
T
│             ┌────
│            /
│  ┌────────┘
│  │
└──┴───────── t
   Cambio
   de fase
```

- Durante el cambio de fase: T = constante
- Q = m·hfg (calor latente de cambio de fase)
- W = P(V₂ - V₁)

## Calores Específicos

Los calores específicos cv y cp son propiedades fundamentales que relacionan el cambio de temperatura con la transferencia de calor:

- **A volumen constante**: cv = (∂u/∂T)v [J/(kg·K)]
- **A presión constante**: cp = (∂h/∂T)p [J/(kg·K)]

Para gases ideales:

- cp - cv = R
- γ = cp/cv (relación de calores específicos)

## Ejemplos Prácticos

### Ejemplo 1: Calentamiento de un gas en un cilindro rígido

**Problema**: 2 kg de nitrógeno (N₂) inicialmente a 20°C se calientan hasta 200°C en un cilindro rígido. El calor específico a volumen constante del nitrógeno es 0.743 kJ/(kg·K). Calcular el calor transferido y el cambio en la energía interna.

**Solución**:

1. Dados:
   - m = 2 kg
   - cv = 743 J/(kg·K)
   - ΔT = 200 - 20 = 180 K
   - Volumen constante → W = 0
2. Cálculo:
   - Q = mcvΔT = 2 × 743 × 180 = 267,480 J = 267.48 kJ
   - Como W = 0, entonces ΔU = Q = 267.48 kJ

### Ejemplo 2: Expansión isotérmica de un gas ideal

**Problema**: Un gas ideal se expande isotérmicamente de 0.1 m³ a 0.3 m³ a una temperatura de 300 K. La presión inicial es 500 kPa. Calcular el trabajo realizado y el calor transferido.

**Solución**:

1. Datos:
   - T = 300 K (constante)
   - V₁ = 0.1 m³, V₂ = 0.3 m³
   - P₁ = 500 kPa
   - P₁V₁ = P₂V₂ = nRT
2. Cálculo:
   - W = P₁V₁ln(V₂/V₁) = 500,000 × 0.1 × ln(3) = 54,930 J = 54.93 kJ
   - Para un proceso isotérmico de un gas ideal: ΔU = 0
   - Por la Primera Ley: Q = W + ΔU = 54.93 + 0 = 54.93 kJ

## Eficiencia Energética

La eficiencia de un dispositivo o sistema se define generalmente como:

$$\eta = \frac{\text{Salida deseada}}{\text{Entrada requerida}}$$

Para sistemas de potencia:
$$\eta_{potencia} = \frac{W_{neto}}{Q_{entra}}$$

Para sistemas de refrigeración:
$$COP = \frac{Q_{absorbido}}{W_{entrada}}$$

## Resumen

```
┌───────────────────────────────────────┐
│ ANÁLISIS ENERGÉTICO: PUNTOS CLAVE     │
├───────────────────────────────────────┤
│ • Sistema cerrado: masa constante,    │
│   pero permite intercambio de energía │
│                                       │
│ • Primera Ley: ΔU = Q - W             │
│                                       │
│ • Trabajo de frontera: W = ∫P·dV      │
│                                       │
│ • Procesos importantes:               │
│   - Isocórico: W = 0, ΔU = Q         │
│   - Isobárico: W = PΔV, ΔH = Q       │
│   - Isotérmico: ΔU = 0, Q = W        │
│   - Adiabático: Q = 0, ΔU = -W       │
└───────────────────────────────────────┘
```

> 💡 **Consejo de estudio**: Para resolver problemas de sistemas cerrados, identifique primero el tipo de proceso y aplique la forma apropiada de la Primera Ley.

---

## Enlaces a otros temas relacionados

- [Primera Ley](primera_ley_i2.md)
- [Gas Ideal](gas_ideal.md)
- [Factor de Compresibilidad](compresibilidad.md)
- [Proceso Adiabático](proceso_adiabatico.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición. Secciones 4-1 a 4-5
- Notas del curso FIS1523 (1-2025)
