# Tablas de Propiedades, Entalpía y Calidad

_Parte del curso FIS1523 - Termodinámica_

## Introducción

Las **tablas de propiedades termodinámicas** son herramientas fundamentales que proporcionan valores de diversas propiedades de sustancias puras bajo diferentes condiciones. Estas tablas permiten determinar con precisión el estado termodinámico de una sustancia y facilitan los cálculos en análisis de procesos y sistemas termodinámicos.

## Propiedades Termodinámicas Fundamentales

Antes de profundizar en las tablas, es importante comprender las propiedades termodinámicas clave:

```
┌───────────────────────────────┐
│ PROPIEDADES TERMODINÁMICAS    │
├───────────────────────────────┤
│ • Propiedades Físicas Básicas │
│   - Presión (P)               │
│   - Temperatura (T)           │
│   - Volumen específico (v)    │
│   - Densidad (ρ)              │
│                               │
│ • Propiedades Energéticas     │
│   - Energía interna (u)       │
│   - Entalpía (h)              │
│   - Entropía (s)              │
└───────────────────────────────┘
```

| Propiedad          | Símbolo | Unidades SI | Significado físico                       |
| ------------------ | ------- | ----------- | ---------------------------------------- |
| Presión            | P       | Pa, kPa     | Fuerza por unidad de área                |
| Temperatura        | T       | K, °C       | Medida de energía cinética promedio      |
| Volumen específico | v       | m³/kg       | Volumen por unidad de masa               |
| Densidad           | ρ       | kg/m³       | Masa por unidad de volumen               |
| Energía interna    | u       | kJ/kg       | Energía asociada al movimiento molecular |
| Entalpía           | h       | kJ/kg       | u + Pv (energía total disponible)        |
| Entropía           | s       | kJ/(kg·K)   | Medida del desorden molecular            |

## La Entalpía y su Importancia

### Definición de Entalpía

La entalpía (h) se define como:

$$h = u + Pv$$

Donde:

- u es la energía interna específica [kJ/kg]
- P es la presión [kPa]
- v es el volumen específico [m³/kg]

### Importancia de la Entalpía

```
┌─────────────────────────────┐
│ IMPORTANCIA DE LA ENTALPÍA  │
├─────────────────────────────┤
│ 1. En procesos a presión    │
│    constante:               │
│    q_p = Δh                 │
│                             │
│ 2. Análisis de flujo:       │
│    Clave en balance         │
│    energético               │
│                             │
│ 3. Cambios de fase:         │
│    Facilita cálculos        │
└─────────────────────────────┘
```

1. **Procesos a presión constante**: El cambio de entalpía es igual al calor transferido en procesos a presión constante.

   $$\Delta h = q_p \text{ (para procesos a presión constante)}$$

2. **Análisis de flujo**: La entalpía es crucial en el análisis energético de sistemas con flujo.

3. **Cambios de fase**: La entalpía facilita el cálculo de la energía transferida durante cambios de fase.

## Estados de Saturación

```
                     CURVA DE SATURACIÓN
                           ┌───┐
Presión                    │   │
   ^                       │   │
   │                       │   │
   │                      ╱│   │╲
   │                     ╱ │   │ ╲
   │                    ╱  │   │  ╲
   │                   ╱   │   │   ╲
   │  LÍQUIDO         ╱    │   │    ╲         VAPOR
   │  COMPRIMIDO     ╱     │   │     ╲    SOBRECALENTADO
   │                ╱      │   │      ╲
   │               ╱       │   │       ╲
   │              ╱        │   │        ╲
   │             ╱         │   │         ╲
   └────────────┼──────────┼───┼──────────┼──────> Temperatura
             T_comp      T_sat          T_vapor
```

### Líquido Saturado y Vapor Saturado

- **Líquido saturado**: Estado donde el líquido está a punto de comenzar a vaporizarse. En las tablas, se denota con el subíndice **f** (de "fluid").

- **Vapor saturado**: Estado donde el vapor está a punto de comenzar a condensarse. En las tablas, se denota con el subíndice **g** (de "gas").

### Tablas de Saturación

Las tablas de saturación contienen propiedades de líquidos y vapores saturados, organizadas típicamente de dos formas:

| Tipo de Tabla         | Organización                  | Contenido Típico                     |
| --------------------- | ----------------------------- | ------------------------------------ |
| Basada en temperatura | Por temperatura de saturación | Psat, vf, vg, uf, ug, hf, hg, sf, sg |
| Basada en presión     | Por presión de saturación     | Tsat, vf, vg, uf, ug, hf, hg, sf, sg |

Ejemplo de una tabla de saturación simplificada (agua):

| T (°C) | P (kPa) | vf (m³/kg) | vg (m³/kg) | hf (kJ/kg) | hg (kJ/kg) |
| ------ | ------- | ---------- | ---------- | ---------- | ---------- |
| 0.01   | 0.6113  | 0.001000   | 206.14     | 0.01       | 2501.3     |
| 20     | 2.339   | 0.001002   | 57.79      | 83.96      | 2538.1     |
| 50     | 12.35   | 0.001012   | 12.03      | 209.3      | 2592.1     |
| 100    | 101.3   | 0.001044   | 1.673      | 419.1      | 2676.1     |
| 150    | 475.8   | 0.001091   | 0.3928     | 632.2      | 2746.5     |
| 200    | 1554    | 0.001156   | 0.1274     | 852.4      | 2797.2     |

### Interpretación de las Tablas de Saturación

En estas tablas:

- El subíndice **f** se refiere al **líquido saturado**
- El subíndice **g** se refiere al **vapor saturado**
- El subíndice **fg** se refiere a la **diferencia entre vapor saturado y líquido saturado** (es decir, el cambio durante la vaporización)

Por ejemplo:

- $h_{fg} = h_g - h_f$ (calor latente de vaporización)
- $v_{fg} = v_g - v_f$ (cambio de volumen específico durante la vaporización)

## Calidad de Vapor y Mezclas Líquido-Vapor

### Concepto de Calidad

```
        Líquido                            Vapor
        Saturado                           Saturado
          (f)                                (g)
           │                                  │
           │                                  │
           ▼                                  ▼
      ┌─────────────────────────────────────────┐
      │░░░░░░░░░░░░░░░░░░░░░░█████████████████░│
      │░░░░░░░░░░░░░░░░░░░░░░█████████████████░│
      │░░░░░░░░░░░░░░░░░░░░░░█████████████████░│
      └─────────────────────────────────────────┘
           ◄───────────────────►◄─────────────►
              Líquido (1-x)       Vapor (x)

            Estado de mezcla con calidad x
```

La **calidad de vapor (x)** es una propiedad que indica la fracción másica de vapor en una mezcla líquido-vapor saturada.

$$x = \frac{m_{vapor}}{m_{total}} = \frac{m_{vapor}}{m_{liquido} + m_{vapor}}$$

- **x = 0**: Líquido saturado (100% líquido)
- **0 < x < 1**: Mezcla líquido-vapor
- **x = 1**: Vapor saturado (100% vapor)

### Cálculo de Propiedades en Mezclas Líquido-Vapor

Para cualquier propiedad específica (y) en una mezcla líquido-vapor:

$$y = y_f + x \cdot y_{fg} = y_f + x \cdot (y_g - y_f)$$

| Propiedad          | Ecuación para mezcla |
| ------------------ | -------------------- |
| Volumen específico | v = vf + x · vfg     |
| Energía interna    | u = uf + x · ufg     |
| Entalpía           | h = hf + x · hfg     |
| Entropía           | s = sf + x · sfg     |

## Tablas de Vapor Sobrecalentado

Las tablas de vapor sobrecalentado contienen propiedades del vapor a temperaturas superiores a la temperatura de saturación para una presión dada.

Ejemplo simplificado (vapor de agua sobrecalentado a P = 200 kPa):

| T (°C)     | v (m³/kg) | h (kJ/kg) | s [kJ/(kg·K)] |
| ---------- | --------- | --------- | ------------- |
| Tsat=120.2 | 0.8857    | 2706.3    | 7.1296        |
| 150        | 1.0035    | 2776.6    | 7.2822        |
| 200        | 1.1554    | 2875.5    | 7.5081        |
| 250        | 1.3009    | 2975.3    | 7.7101        |
| 300        | 1.4428    | 3077.3    | 7.8945        |

## Tablas de Líquido Comprimido

Las tablas de líquido comprimido (o subenfriado) contienen propiedades del líquido a presiones superiores a la presión de saturación para una temperatura dada.

## Uso Práctico de las Tablas

### 1. Determinación del Estado Termodinámico

Para determinar el estado completo de una sustancia, generalmente necesitamos conocer dos propiedades independientes:

```
                    DIAGRAMA P-T
Presión
   ^
   │       Líquido          Punto crítico
   │     comprimido            ●
   │         │               ╱
   │         │              ╱
   │         │             ╱
   │         │            ╱
   │         │           ╱
   │         │          ╱
   │         │         ╱
   │         ▼        ╱   Vapor sobrecalentado
   │     ────────────
   │
   └─────────────────────────> Temperatura
```

- Si conocemos T y P:

  - Si T > Tsat a esa P: Vapor sobrecalentado
  - Si T = Tsat a esa P: Saturación (necesitamos una tercera propiedad para determinar la calidad)
  - Si T < Tsat a esa P: Líquido comprimido

- Si conocemos P y v:
  - Si vf < v < vg: Mezcla líquido-vapor (podemos calcular la calidad)
  - Si v > vg: Vapor sobrecalentado
  - Si v < vf: Líquido comprimido

### 2. Interpolación

A menudo, necesitamos interpolar entre valores tabulados. La interpolación lineal es una técnica común:

$$y = y_1 + \frac{y_2 - y_1}{x_2 - x_1} \cdot (x - x_1)$$

### 3. Ejemplo Práctico

**Problema**: Determinar la entalpía del agua a 500 kPa y 200°C.

**Solución**:

1. A 500 kPa, la temperatura de saturación es aproximadamente 152°C.
2. Como 200°C > 152°C, estamos en la región de vapor sobrecalentado.
3. De la tabla de vapor sobrecalentado a 500 kPa, interpolamos si es necesario:

| P = 500 kPa | v (m³/kg) | h (kJ/kg) | s [kJ/(kg·K)] |
| ----------- | --------- | --------- | ------------- |
| Tsat=152°C  | 0.3749    | 2748.1    | 6.8213        |
| 200°C       | 0.4249    | 2855.8    | 7.0611        |
| 250°C       | 0.4749    | 2961.0    | 7.2679        |

Por tanto, h = 2855.8 kJ/kg a 500 kPa y 200°C.

## Ejercicios Resueltos

### Ejemplo 1: Determinación de la entalpía

**Problema**: Determinar la entalpía del agua que se encuentra como vapor saturado a 2 MPa.

**Solución**: De las tablas de saturación a 2 MPa (T≈212.4°C), encontramos hg = 2799.5 kJ/kg.

### Ejemplo 2: Cálculo de calidad

**Problema**: Calcular la calidad de una mezcla agua-vapor si su volumen específico es 0.055 m³/kg a 500 kPa.

**Solución**:

1. A 500 kPa: vf = 0.001093 m³/kg y vg = 0.3748 m³/kg
2. Usando la fórmula de calidad para volumen específico:

   $v = v_f + x \cdot (v_g - v_f)$

   $0.055 = 0.001093 + x \cdot (0.3748 - 0.001093)$

   $x = \frac{0.055 - 0.001093}{0.3748 - 0.001093} = 0.144$

3. La calidad de la mezcla es 0.144 o 14.4%.

### Ejemplo 3: Proceso de calentamiento

**Problema**: Determine la energía necesaria para calentar 2 kg de agua desde 20°C y 100 kPa hasta vapor sobrecalentado a 300°C y 2 MPa.

**Solución**:

1. Estado inicial: líquido comprimido a 20°C (aproximadamente h₁ = 84 kJ/kg)
2. Estado final: vapor sobrecalentado a 300°C y 2 MPa (h₂ = 2992 kJ/kg)
3. Energía necesaria = m(h₂ - h₁) = 2 kg × (2992 - 84) kJ/kg = 5816 kJ

## Resumen

```
┌───────────────────────────────────────┐
│ PUNTOS CLAVE                          │
├───────────────────────────────────────┤
│ • Las tablas de propiedades son       │
│   fundamentales para análisis         │
│   termodinámico                       │
│                                       │
│ • La entalpía (h = u + Pv) es crucial │
│   para cálculos de transferencia      │
│   de energía                          │
│                                       │
│ • La calidad (x) determina la         │
│   proporción de vapor en una mezcla   │
│                                       │
│ • Para determinar el estado completo: │
│   - Necesitamos dos propiedades       │
│   - Usar tablas apropiadas según      │
│     la región                         │
│                                       │
│ • La interpolación permite obtener    │
│   valores entre los datos tabulados   │
└───────────────────────────────────────┘
```

> 💡 **Consejo**: Familiarízate con la estructura y uso de las tablas. Son herramientas indispensables para resolver problemas termodinámicos de manera eficiente.

---

## Enlaces a otros temas relacionados

- [Sustancias Puras](sustancias_puras.md)
- [Diagramas de Fase](diagramas_fase.md)
- [Ecuación de Gas Ideal](gas_ideal.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.5
- Tablas de propiedades termodinámicas del curso FIS1523 (1-2025)
