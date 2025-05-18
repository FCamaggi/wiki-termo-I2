# Ecuación de Estado de Gas Ideal

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La **ecuación de estado de gas ideal** es una de las relaciones más importantes y ampliamente utilizadas en termodinámica. Proporciona una aproximación matemática simple del comportamiento de muchos gases reales bajo ciertas condiciones y sirve como base para el desarrollo de modelos más complejos.

## Definición y Forma Básica

```
┌───────────────────────────────────────┐
│     ECUACIÓN DE ESTADO DE GAS IDEAL   │
│                                       │
│               PV = nRT                │
│                                       │
│ Donde:                                │
│  P = Presión [Pa]                     │
│  V = Volumen [m³]                     │
│  n = Cantidad de sustancia [mol]      │
│  R = Constante universal [J/(mol·K)]  │
│  T = Temperatura absoluta [K]         │
└───────────────────────────────────────┘
```

La ecuación de estado de gas ideal relaciona cuatro variables termodinámicas: presión (P), volumen (V), cantidad de sustancia (n) y temperatura absoluta (T) mediante la expresión:

$$PV = nRT$$

Para aplicaciones de ingeniería, es común expresar la ecuación en términos de la masa (m) utilizando la masa molar (M):

$$PV = \frac{m}{M}RT$$

O en términos del volumen específico (v = V/m):

$$Pv = \frac{R}{M}T = RT$$

Donde:

- v es el volumen específico [m³/kg]
- R = R/M es la constante específica del gas [J/(kg·K)]

## Constante R de Diferentes Gases

La constante específica de un gas (R) depende de su masa molar:

$$R = \frac{R_{universal}}{M}$$

Donde:

- R_universal = 8.314 J/(mol·K)
- M = masa molar [kg/kmol]

| Gas                | Fórmula | Masa Molar (kg/kmol) | R [J/(kg·K)] |
| ------------------ | ------- | -------------------- | ------------ |
| Aire               | -       | 28.97                | 287.0        |
| Nitrógeno          | N₂      | 28.01                | 296.8        |
| Oxígeno            | O₂      | 32.00                | 259.8        |
| Hidrógeno          | H₂      | 2.016                | 4124.2       |
| Dióxido de carbono | CO₂     | 44.01                | 188.9        |
| Vapor de agua      | H₂O     | 18.02                | 461.5        |
| Helio              | He      | 4.003                | 2077.1       |

## Suposiciones del Modelo de Gas Ideal

```
┌───────────────────────────────────────┐
│     SUPUESTOS DEL GAS IDEAL           │
│                                       │
│  1. Moléculas puntuales               │
│     (sin volumen propio)              │
│                                       │
│  2. Sin fuerzas intermoleculares      │
│     (excepto en colisiones)           │
│                                       │
│  3. Colisiones perfectamente          │
│     elásticas                         │
│                                       │
│  4. Movimiento molecular aleatorio    │
│                                       │
│  5. Energía interna puramente         │
│     cinética                          │
└───────────────────────────────────────┘
```

El modelo de gas ideal se basa en varias suposiciones:

1. **Las moléculas son puntuales**: El volumen ocupado por las propias moléculas es despreciable comparado con el volumen total del gas.

2. **No hay fuerzas intermoleculares**: Las interacciones entre moléculas son despreciables excepto durante colisiones elásticas de corta duración.

3. **Colisiones elásticas**: Las colisiones entre moléculas y con las paredes del recipiente son perfectamente elásticas (conservan energía cinética).

4. **Movimiento aleatorio**: Las moléculas se mueven en direcciones aleatorias con velocidades variables.

5. **La energía interna es puramente cinética**: Toda la energía interna es debida al movimiento traslacional de las moléculas.

## Limitaciones de la Ecuación de Gas Ideal

La ecuación de gas ideal es una aproximación que funciona mejor bajo ciertas condiciones:

```
Mejores condiciones para aplicar gas ideal:
            ╱|     |
           ╱ |     | Gases reales se aproximan
P baja    ╱  |     | a comportamiento ideal
         ╱   |     |
        ╱    |     |
       ╱     |     |
──────╱──────┼─────┼───────>
      T baja T alta       Temperatura
```

| Condición                       | Aplicabilidad del modelo        |
| ------------------------------- | ------------------------------- |
| Bajas presiones                 | Excelente (< 1 atm)             |
| Altas temperaturas              | Buena (T >> T_condensación)     |
| Baja densidad                   | Buena (moléculas muy separadas) |
| Punto crítico                   | Pobre                           |
| Altas presiones                 | Pobre                           |
| Bajas temperaturas              | Pobre (cerca de condensación)   |
| Gases con interacciones fuertes | Pobre                           |

## Aplicaciones de la Ecuación de Gas Ideal

### 1. Cálculos de Densidad

La densidad (ρ) de un gas ideal se puede calcular como:

$$\rho = \frac{m}{V} = \frac{P}{RT}$$

### 2. Procesos con Gases Ideales

```
┌─────────────────────────────────────────┐
│    PROCESOS CON GASES IDEALES           │
├─────────────┬───────────────────────────┤
│  PROCESO    │       RELACIÓN            │
├─────────────┼───────────────────────────┤
│ Isotérmico  │  PV = constante           │
│             │                           │
│ Isobárico   │  V/T = constante          │
│             │                           │
│ Isocórico   │  P/T = constante          │
│             │                           │
│ Adiabático  │  PV^γ = constante         │
│             │  donde γ = cp/cv          │
└─────────────┴───────────────────────────┘
```

Para un proceso donde un gas ideal cambia de un estado 1 a un estado 2:

- **Proceso isotérmico (T constante)**: $PV = constante$ o $\frac{P_2V_2}{P_1V_1} = 1$

- **Proceso isobárico (P constante)**: $\frac{V_2}{V_1} = \frac{T_2}{T_1}$

- **Proceso isocórico (V constante)**: $\frac{P_2}{P_1} = \frac{T_2}{T_1}$

- **Proceso adiabático (sin transferencia de calor)**: $PV^\gamma = constante$ o $\frac{P_2V_2^\gamma}{P_1V_1^\gamma} = 1$, donde γ = cp/cv es el coeficiente de expansión adiabática.

### 3. Mezclas de Gases Ideales

Para mezclas de gases ideales, existen dos leyes importantes:

#### Ley de Dalton de las presiones parciales

```
┌───────────────────────────────┐
│ MEZCLA DE GASES               │
│                               │
│     Ptotal = P₁ + P₂ + P₃     │
│                               │
│      P₁       P₂       P₃      │
│   ┌─────┐  ┌─────┐  ┌─────┐   │
│   │ Gas │  │ Gas │  │ Gas │   │
│   │  1  │  │  2  │  │  3  │   │
│   │     │  │     │  │     │   │
│   └─────┘  └─────┘  └─────┘   │
└───────────────────────────────┘
```

La presión total de una mezcla de gases es igual a la suma de las presiones parciales de sus componentes:

$$P_{total} = \sum_{i} P_i$$

donde Pi es la presión parcial del componente i.

#### Ley de Amagat de los volúmenes parciales

El volumen total de una mezcla de gases es igual a la suma de los volúmenes parciales de sus componentes:

$$V_{total} = \sum_{i} V_i$$

donde Vi es el volumen parcial del componente i.

## Energía Interna y Entalpía de un Gas Ideal

Para un gas ideal, la energía interna (u) y la entalpía (h) son funciones únicamente de la temperatura:

$$u = u(T)$$
$$h = h(T) = u(T) + RT$$

Esto significa que los cambios en estas propiedades dependen solo del cambio de temperatura:

$$\Delta u = c_v \Delta T$$
$$\Delta h = c_p \Delta T$$

Donde:

- cv es el calor específico a volumen constante [J/(kg·K)]
- cp es el calor específico a presión constante [J/(kg·K)]
- ΔT es el cambio de temperatura [K]

Para un gas ideal, estos calores específicos se relacionan mediante:

$$c_p - c_v = R$$

## Calores Específicos de Gases Ideales

Los calores específicos de un gas ideal pueden considerarse constantes para pequeños rangos de temperatura, pero en general varían con la temperatura.

La relación entre calores específicos se define como:

$$\gamma = \frac{c_p}{c_v}$$

```
┌───────────────────────────────────────┐
│  VALORES DE γ PARA GASES COMUNES      │
├───────────────┬───────────────────────┤
│ Tipo de gas   │ Valor de γ = cp/cv    │
├───────────────┼───────────────────────┤
│ Monoatómico   │ 5/3 ≈ 1.67            │
│ (He, Ar)      │                       │
│               │                       │
│ Diatómico     │ 7/5 = 1.4             │
│ (O₂, N₂, H₂)  │                       │
│               │                       │
│ Poliatómico   │ 4/3 ≈ 1.33            │
│ (CO₂, H₂O)    │                       │
└───────────────┴───────────────────────┘
```

## Ejemplos Prácticos

### Ejemplo 1: Cálculo del volumen específico

**Problema**: Calcular el volumen específico del aire a 25°C y 200 kPa, considerándolo como gas ideal.

**Solución**:

- T = 25°C + 273.15 = 298.15 K
- P = 200 kPa = 200,000 Pa
- R (aire) = 287 J/(kg·K)

Usando la ecuación de gas ideal:
$v = \frac{RT}{P} = \frac{287 \times 298.15}{200,000} = 0.428 \, \text{m}^3/\text{kg}$

### Ejemplo 2: Cálculo de presión

**Problema**: Una masa de 0.5 kg de nitrógeno (N₂) ocupa un volumen de 0.2 m³ a una temperatura de 300 K. Determine la presión del gas asumiendo comportamiento ideal.

**Solución**:

- m = 0.5 kg
- V = 0.2 m³
- T = 300 K
- R (N₂) = 296.8 J/(kg·K)

Usando la ecuación de gas ideal:
$P = \frac{mRT}{V} = \frac{0.5 \times 296.8 \times 300}{0.2} = 222,600 \, \text{Pa} = 222.6 \, \text{kPa}$

### Ejemplo 3: Proceso isotérmico

**Problema**: Un gas ideal se comprime isotérmicamente a 400 K desde una presión de 100 kPa y un volumen de 0.5 m³ hasta un volumen final de 0.2 m³. Calcule la presión final y el trabajo realizado sobre el gas.

**Solución**:

- Proceso isotérmico: $P_1V_1 = P_2V_2$
- $P_2 = P_1 \times \frac{V_1}{V_2} = 100 \times \frac{0.5}{0.2} = 250 \, \text{kPa}$

Para calcular el trabajo:
$W = \int P dV = nRT \ln\frac{V_2}{V_1} = P_1V_1 \ln\frac{V_2}{V_1} = 100 \times 0.5 \times \ln\frac{0.2}{0.5} = -45.8 \, \text{kJ}$

El signo negativo indica trabajo realizado sobre el gas.

## Resumen

```
┌───────────────────────────────────────┐
│ ECUACIÓN DE GAS IDEAL: PUNTOS CLAVE   │
├───────────────────────────────────────┤
│ • PV = nRT  o  Pv = RT                │
│                                       │
│ • Mejor aproximación a:               │
│   - Presiones bajas                   │
│   - Temperaturas altas                │
│                                       │
│ • Para un gas ideal:                  │
│   - u = u(T) solamente                │
│   - h = h(T) solamente                │
│   - cp - cv = R                       │
│                                       │
│ • Procesos importantes:               │
│   - Isotérmico: PV = cte              │
│   - Isobárico: V/T = cte              │
│   - Isocórico: P/T = cte              │
│   - Adiabático: PV^γ = cte            │
└───────────────────────────────────────┘
```

> 💡 **Consejo de Estudio**: La ecuación de gas ideal es fundamental para resolver problemas termodinámicos. Dominar su aplicación en diferentes procesos te dará herramientas poderosas para el análisis de sistemas gaseosos.

---

## Enlaces a otros temas relacionados

- [Sustancias Puras](sustancias_puras.md)
- [Factor de Compresibilidad](compresibilidad.md)
- [Análisis de Sistemas Cerrados](sistemas_cerrados.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.6
- Notas del curso FIS1523 (1-2025)
