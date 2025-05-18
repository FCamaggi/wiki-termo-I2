# Tablas de Propiedades, Entalpía y Calidad

## Introducción

Las **tablas de propiedades termodinámicas** son herramientas fundamentales que proporcionan valores de diversas propiedades de sustancias puras bajo diferentes condiciones. Estas tablas permiten determinar con precisión el estado termodinámico de una sustancia y facilitan los cálculos en análisis de procesos y sistemas termodinámicos.

## Propiedades Termodinámicas Fundamentales

Antes de profundizar en las tablas, es importante entender las propiedades termodinámicas clave:

### 1. Propiedades Físicas Básicas
- **Presión (P)**: Fuerza por unidad de área [kPa, MPa, bar, atm]
- **Temperatura (T)**: Medida de la energía cinética promedio [°C, K]
- **Volumen específico (v)**: Volumen por unidad de masa [m³/kg]
- **Densidad (ρ)**: Masa por unidad de volumen [kg/m³]

### 2. Propiedades Energéticas
- **Energía interna (u)**: Energía asociada al movimiento molecular [kJ/kg]
- **Entalpía (h)**: Suma de la energía interna y el producto de presión por volumen (h = u + Pv) [kJ/kg]
- **Entropía (s)**: Medida del desorden molecular [kJ/(kg·K)]

## La Entalpía y su Importancia

La **entalpía** es una propiedad termodinámica particularmente útil en procesos a presión constante y en el análisis de flujos de energía.

### Definición de Entalpía

La entalpía (h) se define como:

$$h = u + Pv$$

Donde:
- u es la energía interna específica [kJ/kg]
- P es la presión [kPa]
- v es el volumen específico [m³/kg]

### Importancia de la Entalpía

1. **Procesos a presión constante**: El cambio de entalpía es igual al calor transferido en procesos a presión constante.
   
   $$\Delta h = q_p \text{ (para procesos a presión constante)}$$

2. **Análisis de flujo**: La entalpía es crucial en el análisis energético de sistemas con flujo.

3. **Cambios de fase**: La entalpía facilita el cálculo de la energía transferida durante cambios de fase.

## Estados de Saturación

### Líquido Saturado y Vapor Saturado

![Estados de Saturación](/home/fcamaggi/code/Termo/Termodinamica/_page_34_Figure_1.jpeg)

- **Líquido saturado**: Estado donde el líquido está a punto de comenzar a vaporizarse. En las tablas, se denota con el subíndice **f** (de "fluid").

- **Vapor saturado**: Estado donde el vapor está a punto de comenzar a condensarse. En las tablas, se denota con el subíndice **g** (de "gas").

### Tablas de Saturación

Las tablas de saturación contienen propiedades de líquidos y vapores saturados, organizadas típicamente de dos formas:

1. **Tablas basadas en temperatura**: Las propiedades se tabulan a diferentes temperaturas de saturación.
   
   Por ejemplo, para el agua a 100°C (saturación), se pueden encontrar Psat, vf, vg, uf, ug, hf, hg, sf, sg.

2. **Tablas basadas en presión**: Las propiedades se tabulan a diferentes presiones de saturación.
   
   Por ejemplo, para el agua a 101.325 kPa (presión atmosférica), se pueden encontrar Tsat, vf, vg, uf, ug, hf, hg, sf, sg.

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

La **calidad de vapor (x)** es una propiedad que indica la fracción másica de vapor en una mezcla líquido-vapor saturada.

$$x = \frac{m_{vapor}}{m_{total}} = \frac{m_{vapor}}{m_{liquido} + m_{vapor}}$$

![Calidad de Vapor](/home/fcamaggi/code/Termo/Termodinamica/_page_36_Figure_0.jpeg)

- **x = 0**: Líquido saturado (100% líquido)
- **0 < x < 1**: Mezcla líquido-vapor
- **x = 1**: Vapor saturado (100% vapor)

### Cálculo de Propiedades en Mezclas Líquido-Vapor

Para cualquier propiedad específica (y) en una mezcla líquido-vapor:

$$y = y_f + x \cdot y_{fg} = y_f + x \cdot (y_g - y_f)$$

Donde:
- y puede ser v, u, h, o s
- yf es el valor de la propiedad para el líquido saturado
- yg es el valor de la propiedad para el vapor saturado
- x es la calidad

#### Ejemplos específicos:

1. **Volumen específico**: $v = v_f + x \cdot v_{fg}$
2. **Energía interna**: $u = u_f + x \cdot u_{fg}$
3. **Entalpía**: $h = h_f + x \cdot h_{fg}$
4. **Entropía**: $s = s_f + x \cdot s_{fg}$

## Tablas de Vapor Sobrecalentado

Las tablas de vapor sobrecalentado contienen propiedades del vapor a temperaturas superiores a la temperatura de saturación para una presión dada.

![Vapor Sobrecalentado](/home/fcamaggi/code/Termo/Termodinamica/_page_40_Picture_0.jpeg)

Estas tablas están organizadas por presión, y para cada presión, se listan propiedades (v, u, h, s) a diferentes temperaturas superiores a la temperatura de saturación.

## Tablas de Líquido Comprimido

Las tablas de líquido comprimido (o subenfriado) contienen propiedades del líquido a presiones superiores a la presión de saturación para una temperatura dada.

Estas tablas son menos extensas que las de vapor sobrecalentado debido a que las propiedades del líquido varían menos significativamente con la presión.

## Uso Práctico de las Tablas

### 1. Determinación del Estado Termodinámico

Para determinar el estado completo de una sustancia, generalmente necesitamos conocer dos propiedades independientes:

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
3. Usando la tabla de vapor sobrecalentado a 500 kPa, interpolamos si es necesario para encontrar la entalpía a 200°C.

## Aplicaciones de las Tablas de Propiedades

Las tablas de propiedades son fundamentales para:

1. **Análisis de ciclos de potencia**: Ciclos Rankine, ciclos combinados, etc.
2. **Diseño de sistemas de refrigeración y aire acondicionado**
3. **Cálculos de transferencia de calor**
4. **Diseño de intercambiadores de calor**
5. **Análisis de procesos en industrias químicas y petroquímicas**

## Conclusiones

Las tablas de propiedades termodinámicas son herramientas esenciales que proporcionan información precisa sobre el comportamiento de sustancias bajo diferentes condiciones. La comprensión de cómo utilizar estas tablas, junto con conceptos como entalpía y calidad, permite realizar análisis termodinámicos rigurosos y diseñar sistemas energéticos eficientes.

## Ejemplos resueltos

**Ejemplo 1**: Determinar la entalpía del agua que se encuentra como vapor saturado a 2 MPa.

**Solución**: De las tablas de saturación a 2 MPa, encontramos hg = 2799.5 kJ/kg.

**Ejemplo 2**: Calcular la calidad de una mezcla agua-vapor si su volumen específico es 0.055 m³/kg a 500 kPa.

**Solución**: 
1. A 500 kPa: vf = 0.001093 m³/kg y vg = 0.3748 m³/kg
2. Usando la fórmula de calidad para volumen específico:
   $v = v_f + x \cdot (v_g - v_f)$
   $0.055 = 0.001093 + x \cdot (0.3748 - 0.001093)$
   $x = \frac{0.055 - 0.001093}{0.3748 - 0.001093} = 0.144$
3. La calidad de la mezcla es 0.144 o 14.4%.

**Ejemplo 3**: Determine la energía necesaria para calentar 2 kg de agua desde 20°C y 100 kPa hasta vapor sobrecalentado a 300°C y 2 MPa.

**Solución**: Necesitamos calcular la diferencia de entalpías y multiplicar por la masa:
1. Estado inicial: líquido comprimido a 20°C (aproximadamente h₁ = 84 kJ/kg)
2. Estado final: vapor sobrecalentado a 300°C y 2 MPa (h₂ = 2992 kJ/kg)
3. Energía necesaria = m(h₂ - h₁) = 2 kg × (2992 - 84) kJ/kg = 5816 kJ

---

## Enlaces a otros temas relacionados
- [Sustancias Puras y Cambios de Fase](1_Sustancias_Puras.md)
- [Diagramas de Fase](2_Diagramas_Fase.md)
- [Ecuación de Estado de Gas Ideal](4_Gas_Ideal.md)

## Referencias
- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.5
- Notas del curso FIS1523 (1-2025)
