# Proceso Adiabático en Gas Ideal

## Introducción

Un **proceso adiabático** es aquel en el que no hay transferencia de calor entre el sistema y su entorno. Estos procesos son fundamentales en termodinámica y tienen numerosas aplicaciones prácticas, desde el funcionamiento de motores de combustión interna hasta la compresión en turbomaquinaria y fenómenos atmosféricos. En este apunte, nos concentraremos específicamente en el comportamiento de los gases ideales durante procesos adiabáticos.

## Características de un Proceso Adiabático

Un proceso se considera adiabático cuando:

- El sistema está térmicamente aislado de su entorno (Q = 0)
- El proceso ocurre tan rápidamente que no hay tiempo para transferencia de calor
- El sistema está rodeado por un aislante perfecto

![Proceso Adiabático](/home/fcamaggi/code/Termo/Termodinamica/_page_55_Figure_0.jpeg)

### Diferencia entre proceso adiabático y proceso isotérmico:

- **Proceso adiabático**: No hay transferencia de calor (Q = 0)
- **Proceso isotérmico**: La temperatura permanece constante (ΔT = 0)

Un proceso puede ser adiabático e isotérmico simultáneamente solo si no se realiza trabajo (W = 0), lo que implica que ΔU = 0.

## Primera Ley de la Termodinámica en Procesos Adiabáticos

Para un proceso adiabático, la primera ley de la termodinámica se simplifica a:

$$\Delta U = W$$

Donde:
- ΔU es el cambio en la energía interna del sistema
- W es el trabajo realizado sobre el sistema

Esto significa que en un proceso adiabático, cualquier trabajo realizado sobre el sistema aumenta directamente su energía interna, y cualquier trabajo realizado por el sistema disminuye su energía interna.

## Ecuaciones para Gases Ideales en Procesos Adiabáticos

### Relación Presión-Volumen

Para un gas ideal en un proceso adiabático reversible, la relación entre presión y volumen está dada por:

$$PV^\gamma = \text{constante}$$

Donde γ (gamma) es el coeficiente de expansión adiabática o razón de calores específicos:

$$\gamma = \frac{C_p}{C_v}$$

### Relaciones Adicionales

De la ecuación $PV^\gamma = \text{constante}$, podemos derivar las siguientes relaciones para un proceso adiabático entre estados 1 y 2:

$$\frac{P_2}{P_1} = \left(\frac{V_1}{V_2}\right)^\gamma$$

$$\frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{\gamma-1} = \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}}$$

$$\frac{P_2}{P_1} = \left(\frac{T_2}{T_1}\right)^{\frac{\gamma}{\gamma-1}}$$

## Trabajo en un Proceso Adiabático Reversible

Para un gas ideal en un proceso adiabático reversible, el trabajo se puede calcular como:

$$W = \frac{P_1V_1 - P_2V_2}{\gamma-1} = \frac{nR(T_1-T_2)}{\gamma-1} = \frac{C_v(T_1-T_2)}{m}$$

Donde:
- W es el trabajo por unidad de masa [J/kg]
- P es la presión [Pa]
- V es el volumen [m³]
- γ es la razón de calores específicos
- n es el número de moles
- R es la constante universal de los gases [J/(mol·K)]
- T es la temperatura absoluta [K]
- Cv es el calor específico a volumen constante [J/(kg·K)]
- m es la masa [kg]

## Valores de γ para Diferentes Gases

El valor de γ depende de la estructura molecular del gas:

| Tipo de Gas | Ejemplos | γ (aproximado) |
|-------------|----------|----------------|
| Monoatómico | He, Ar, Ne | 5/3 ≈ 1.67 |
| Diatómico | O₂, N₂, H₂, aire | 7/5 = 1.4 |
| Poliatómico | CO₂, H₂O, CH₄ | 4/3 ≈ 1.33 |

El valor de γ está relacionado con los grados de libertad (f) de las moléculas a través de la relación:

$$\gamma = \frac{f+2}{f}$$

Donde:
- Para gases monoatómicos: f = 3 (solo traslación en 3D)
- Para gases diatómicos: f = 5 (traslación + rotación)
- Para gases poliatómicos: f ≥ 6 (traslación + rotación + vibración)

## Proceso Adiabático vs. Otros Procesos

### Comparación en un Diagrama P-V

![Comparación de procesos](/home/fcamaggi/code/Termo/Termodinamica/_page_54_Figure_0.jpeg)

En un diagrama P-V, la curva de un proceso adiabático es más empinada que la de un proceso isotérmico, lo que refleja que cuando un gas se comprime adiabáticamente, su temperatura aumenta, y cuando se expande adiabáticamente, su temperatura disminuye.

### Comparación de Ecuaciones

| Proceso | Constante | Ecuación | Trabajo (Gas Ideal) | Cambio de Energía Interna |
|---------|-----------|----------|---------------------|---------------------------|
| Adiabático | Q = 0 | PV^γ = constante | W = nCV(T1 - T2) | ΔU = W |
| Isotérmico | T | PV = constante | W = nRT ln(V1/V2) | ΔU = 0 |
| Isobárico | P | V ∝ T | W = -P(V2 - V1) | ΔU = nCV(T2 - T1) |
| Isocórico | V | P ∝ T | W = 0 | ΔU = nCV(T2 - T1) |

## Aplicaciones de los Procesos Adiabáticos

### 1. Motores de Combustión Interna

En los motores de gasolina (ciclo Otto) y diésel, las etapas de compresión y expansión son aproximadamente adiabáticas debido a la velocidad del proceso.

![Ciclo Otto](/home/fcamaggi/code/Termo/Termodinamica/_page_55_Figure_0.jpeg)

La eficiencia térmica del ciclo Otto está directamente relacionada con la relación de compresión (r) según:

$$\eta = 1 - \frac{1}{r^{\gamma-1}}$$

### 2. Compresores y Turbinas

Los procesos en compresores y turbinas son idealmente adiabáticos y reversibles (isentrópicos). La eficiencia isentrópica compara el rendimiento real con el ideal.

### 3. Procesos Atmosféricos

El movimiento vertical de masas de aire en la atmósfera es aproximadamente adiabático, lo que explica por qué la temperatura disminuye con la altura (gradiente adiabático seco ≈ -9.8°C/km).

### 4. Ondas Sonoras

La propagación del sonido en gases implica compresiones y expansiones adiabáticas rápidas.

## Análisis Matemático del Proceso Adiabático

### Derivación de la Relación PV^γ = constante

Para un proceso adiabático (dQ = 0), la primera ley de la termodinámica establece:

$$dU = dW = -PdV$$

Para un gas ideal, dU = nCvdT y la ecuación de estado es PV = nRT.

Diferenciando la ecuación de estado:
$$PdV + VdP = nRdT$$

Despejando dT:
$$dT = \frac{PdV + VdP}{nR}$$

Sustituyendo en dU:
$$nC_v \left(\frac{PdV + VdP}{nR}\right) = -PdV$$

$$\frac{C_v}{R}(PdV + VdP) = -PdV$$

$$\frac{C_v}{R}VdP = -PdV\left(\frac{C_v}{R}+1\right)$$

Considerando que Cp - Cv = R, o Cp/Cv = 1 + R/Cv = γ:

$$\frac{C_v}{R}VdP = -PdV\frac{C_p}{R}$$

$$VdP = -\frac{C_p}{C_v}PdV = -\gamma PdV$$

$$\frac{dP}{P} + \gamma\frac{dV}{V} = 0$$

Integrando:
$$\ln P + \gamma \ln V = \ln C$$

Lo que nos da:
$$PV^\gamma = C \text{ (constante)}$$

## Ejemplos Resueltos

**Ejemplo 1**: Un gas ideal diatómico (γ = 1.4) con volumen inicial de 2 litros, presión inicial de 200 kPa y temperatura inicial de 300 K es comprimido adiabáticamente hasta un volumen de 0.5 litros. Calcular:
a) La presión final
b) La temperatura final
c) El trabajo realizado sobre el gas

**Solución**:
a) Usando $P_2 = P_1 \left(\frac{V_1}{V_2}\right)^\gamma$:
   $P_2 = 200 \text{ kPa} \times \left(\frac{2 \text{ L}}{0.5 \text{ L}}\right)^{1.4} = 200 \times 4^{1.4} = 200 \times 6.96 = 1392 \text{ kPa}$

b) Usando $\frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{\gamma-1}$:
   $T_2 = 300 \text{ K} \times \left(\frac{2 \text{ L}}{0.5 \text{ L}}\right)^{0.4} = 300 \times 4^{0.4} = 300 \times 1.74 = 522 \text{ K}$

c) Trabajo por mol:
   $W = \frac{nR(T_1-T_2)}{\gamma-1} = \frac{nR(300-522)}{0.4} = -nR \times \frac{222}{0.4} = -555nR \text{ J}$
   
   Para calcular n, usamos la ecuación de gas ideal:
   $n = \frac{PV}{RT} = \frac{200 \times 10^3 \times 2 \times 10^{-3}}{8.314 \times 300} = 0.00160 \text{ mol}$
   
   Por lo tanto:
   $W = -555 \times 0.00160 \times 8.314 = -7.38 \text{ J}$
   
   El trabajo realizado sobre el gas es +7.38 J (el signo cambia porque estamos calculando el trabajo sobre el gas, no el trabajo hecho por el gas).

**Ejemplo 2**: Un globo meteorológico contiene 1 m³ de helio (γ = 5/3) a 20°C y presión atmosférica (101.3 kPa). Si el globo asciende adiabáticamente hasta una altura donde la presión es 50 kPa, calcular:
a) El volumen final del globo
b) La temperatura final del helio
c) El trabajo realizado por el helio durante la expansión

**Solución**:
a) Usando $V_2 = V_1 \left(\frac{P_1}{P_2}\right)^{1/\gamma}$:
   $V_2 = 1 \text{ m}^3 \times \left(\frac{101.3 \text{ kPa}}{50 \text{ kPa}}\right)^{3/5} = 1 \times (2.026)^{0.6} = 1 \times 1.533 = 1.533 \text{ m}^3$

b) Usando $\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}}$:
   $T_2 = 293 \text{ K} \times \left(\frac{50 \text{ kPa}}{101.3 \text{ kPa}}\right)^{\frac{2/3}{5/3}} = 293 \times (0.4934)^{0.4} = 293 \times 0.7566 = 221.7 \text{ K}$

c) Trabajo:
   $W = \frac{P_1V_1 - P_2V_2}{\gamma-1}$
   $W = \frac{101.3 \times 10^3 \times 1 - 50 \times 10^3 \times 1.533}{5/3-1} = \frac{101300 - 76650}{2/3} = \frac{24650}{0.667} = 36,957 \text{ J}$
   
   El helio realiza un trabajo de 36.96 kJ durante la expansión.

## Resumen

- **Proceso adiabático**: Q = 0 (no hay transferencia de calor)
- **Ecuación característica para gas ideal**: PV^γ = constante
- **Relación temperatura-volumen**: TV^(γ-1) = constante
- **Relación temperatura-presión**: TP^((1-γ)/γ) = constante
- **Trabajo**: W = [P₁V₁ - P₂V₂]/(γ-1) = nCv(T₁-T₂)
- **Cambio de energía interna**: ΔU = nCv(T₂-T₁) = -W
- **Aplicaciones**: motores, compresores, turbinas, procesos atmosféricos

---

## Enlaces a otros temas relacionados
- [Primera Ley de la Termodinámica y Procesos Termodinámicos](7_Primera_Ley.md)
- [Análisis de Energía en Sistemas Cerrados](6_Sistemas_Cerrados.md)
- [Ecuación de Estado de Gas Ideal](4_Gas_Ideal.md)

## Referencias
- Halliday, D., Resnick, R. and Walker, J. (2014) Fundamentals of Physics. 10th Edition, Wiley and Sons, New York. Sección 19.9.
- Cengel, Y. A. (2012). Termodinámica, séptima edición.
- Notas del curso FIS1523 (1-2025)
