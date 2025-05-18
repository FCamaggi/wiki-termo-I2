# Ecuación de Estado de Gas Ideal

## Introducción

La **ecuación de estado de gas ideal** es una de las relaciones más importantes y ampliamente utilizadas en termodinámica. Proporciona una aproximación matemática simple del comportamiento de muchos gases reales bajo ciertas condiciones y sirve como base para el desarrollo de modelos más complejos.

## Definición y Forma Básica

La ecuación de estado de gas ideal relaciona cuatro variables termodinámicas: presión (P), volumen (V), cantidad de sustancia (n) y temperatura absoluta (T) mediante la expresión:

$$PV = nRT$$

Donde:
- P es la presión absoluta [Pa]
- V es el volumen [m³]
- n es la cantidad de sustancia [mol]
- R es la constante universal de los gases [8.314 J/(mol·K)]
- T es la temperatura absoluta [K]

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

Algunos valores comunes de la constante R para gases de interés:

| Gas            | Fórmula | Masa Molar (kg/kmol) | R [J/(kg·K)] |
|----------------|---------|----------------------|--------------|
| Aire           | -       | 28.97                | 287.0        |
| Nitrógeno      | N₂      | 28.01                | 296.8        |
| Oxígeno        | O₂      | 32.00                | 259.8        |
| Hidrógeno      | H₂      | 2.016                | 4124.2       |
| Dióxido de carbono | CO₂  | 44.01                | 188.9        |
| Vapor de agua  | H₂O     | 18.02                | 461.5        |
| Helio          | He      | 4.003                | 2077.1       |

## Suposiciones del Modelo de Gas Ideal

El modelo de gas ideal se basa en varias suposiciones:

1. **Las moléculas son puntuales**: El volumen ocupado por las propias moléculas es despreciable comparado con el volumen total del gas.

2. **No hay fuerzas intermoleculares**: Las interacciones entre moléculas son despreciables excepto durante colisiones elásticas de corta duración.

3. **Colisiones elásticas**: Las colisiones entre moléculas y con las paredes del recipiente son perfectamente elásticas (conservan energía cinética).

4. **Movimiento aleatorio**: Las moléculas se mueven en direcciones aleatorias con velocidades variables.

5. **La energía interna es puramente cinética**: Toda la energía interna es debida al movimiento traslacional de las moléculas.

## Limitaciones de la Ecuación de Gas Ideal

La ecuación de gas ideal es una aproximación que funciona mejor bajo ciertas condiciones:

1. **Bajas presiones**: A presiones cercanas a la atmosférica o inferiores.
2. **Altas temperaturas**: Temperaturas significativamente por encima del punto de condensación del gas.
3. **Baja densidad**: Estados donde las moléculas están muy separadas entre sí.

El modelo falla notablemente en:
- Condiciones cercanas al punto crítico
- Altas presiones
- Bajas temperaturas (cerca del punto de condensación)
- Para gases con fuertes interacciones moleculares

## Aplicaciones de la Ecuación de Gas Ideal

### 1. Cálculos de Densidad

La densidad (ρ) de un gas ideal se puede calcular como:

$$\rho = \frac{m}{V} = \frac{P}{RT}$$

### 2. Procesos con Gases Ideales

Para un proceso donde un gas ideal cambia de un estado 1 a un estado 2:

- **Proceso isotérmico (T constante)**: $PV = constante$ o $\frac{P_2V_2}{P_1V_1} = 1$

- **Proceso isobárico (P constante)**: $\frac{V_2}{V_1} = \frac{T_2}{T_1}$

- **Proceso isocórico (V constante)**: $\frac{P_2}{P_1} = \frac{T_2}{T_1}$

- **Proceso adiabático (sin transferencia de calor)**: $PV^\gamma = constante$ o $\frac{P_2V_2^\gamma}{P_1V_1^\gamma} = 1$, donde γ = cp/cv es el coeficiente de expansión adiabática.

### 3. Mezclas de Gases Ideales

Para mezclas de gases ideales, existen dos leyes importantes:

#### Ley de Dalton de las presiones parciales
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

Valores típicos de γ para algunos gases comunes:
- Gases monoatómicos (He, Ar): γ ≈ 1.67
- Gases diatómicos (O₂, N₂, H₂): γ ≈ 1.4
- Gases poliatómicos (CO₂, H₂O): γ ≈ 1.3

## Resumen de Ecuaciones Clave

1. **Ecuación de estado de gas ideal**: $PV = nRT$ o $Pv = RT$

2. **Densidad de un gas ideal**: $\rho = \frac{P}{RT}$

3. **Relación entre calores específicos**: $c_p - c_v = R$ y $\gamma = \frac{c_p}{c_v}$

4. **Energía interna y entalpía**: $\Delta u = c_v \Delta T$ y $\Delta h = c_p \Delta T$

5. **Trabajo en un proceso de expansión/compresión**: $W = \int P dV$

## Ejemplos Prácticos

**Ejemplo 1**: Calcular el volumen específico del aire a 25°C y 200 kPa, considerándolo como gas ideal.

**Solución**:
- T = 25°C + 273.15 = 298.15 K
- P = 200 kPa = 200,000 Pa
- R (aire) = 287 J/(kg·K)

Usando la ecuación de gas ideal:
$v = \frac{RT}{P} = \frac{287 \times 298.15}{200,000} = 0.428 \, \text{m}^3/\text{kg}$

**Ejemplo 2**: Una masa de 0.5 kg de nitrógeno (N₂) ocupa un volumen de 0.2 m³ a una temperatura de 300 K. Determine la presión del gas asumiendo comportamiento ideal.

**Solución**:
- m = 0.5 kg
- V = 0.2 m³
- T = 300 K
- R (N₂) = 296.8 J/(kg·K)

Usando la ecuación de gas ideal:
$P = \frac{mRT}{V} = \frac{0.5 \times 296.8 \times 300}{0.2} = 222,600 \, \text{Pa} = 222.6 \, \text{kPa}$

**Ejemplo 3**: Un gas ideal se comprime isotérmicamente a 400 K desde una presión de 100 kPa y un volumen de 0.5 m³ hasta un volumen final de 0.2 m³. Calcule la presión final y el trabajo realizado sobre el gas.

**Solución**:
- Proceso isotérmico: $P_1V_1 = P_2V_2$
- $P_2 = P_1 \times \frac{V_1}{V_2} = 100 \times \frac{0.5}{0.2} = 250 \, \text{kPa}$
- Trabajo: $W = \int P dV = nRT \ln\frac{V_2}{V_1} = P_1V_1 \ln\frac{V_2}{V_1} = 100 \times 0.5 \times \ln\frac{0.2}{0.5} = -45.8 \, \text{kJ}$

---

## Enlaces a otros temas relacionados
- [Sustancias Puras y Cambios de Fase](1_Sustancias_Puras.md)
- [Factor de Compresibilidad](5_Factor_Compresibilidad.md)
- [Análisis de Energía en Sistemas Cerrados](6_Sistemas_Cerrados.md)

## Referencias
- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.6
- Notas del curso FIS1523 (1-2025)
