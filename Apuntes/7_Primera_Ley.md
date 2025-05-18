# Primera Ley de la Termodinámica y Procesos Termodinámicos

## Introducción

La **Primera Ley de la Termodinámica** es uno de los principios más fundamentales de la física. Representa la aplicación del principio de conservación de la energía a sistemas termodinámicos, estableciendo que la energía no puede ser creada ni destruida, solo transformada de una forma a otra. En este apunte, exploraremos la Primera Ley, los diferentes tipos de procesos termodinámicos, y cómo se aplica a ciclos termodinámicos.

## Primera Ley de la Termodinámica

### Enunciado Formal

La Primera Ley de la Termodinámica establece que el cambio en la energía interna de un sistema cerrado es igual a la suma del calor transferido al sistema y el trabajo realizado sobre el sistema:

$$\Delta U = Q + W$$

Donde:
- ΔU es el cambio en la energía interna del sistema [J]
- Q es el calor transferido al sistema [J]
- W es el trabajo realizado sobre el sistema [J]

> **Nota sobre la convención de signos**: En este apunte utilizamos la convención donde W > 0 significa trabajo realizado sobre el sistema. Esta es la convención utilizada comúnmente en física. Sin embargo, en ingeniería termodinámica a menudo se usa la convención contraria donde W > 0 significa trabajo realizado por el sistema, lo que da lugar a la ecuación ΔU = Q - W.

### Importancia y Significado

La Primera Ley:
- Establece que la energía total del universo es constante
- Prohíbe la creación o destrucción de energía
- Proporciona un método para contabilizar la energía en procesos termodinámicos
- Es independiente del camino o proceso seguido, ya que la energía interna es una función de estado

## Energía Interna (U)

La **energía interna** representa la suma de todas las energías microscópicas dentro de un sistema, principalmente:

- Energía cinética traslacional, rotacional y vibracional de moléculas
- Energía potencial asociada con fuerzas intermoleculares
- Energía de enlaces químicos
- Energía nuclear

Para un gas ideal, la energía interna depende únicamente de la temperatura:

$$U = \frac{3}{2}nRT \text{ (gas monoatómico ideal)}$$
$$U = \frac{5}{2}nRT \text{ (gas diatómico ideal, a temperatura ambiente)}$$

Donde:
- n es el número de moles
- R es la constante universal de los gases
- T es la temperatura absoluta

## Calor (Q)

El **calor** es la energía que se transfiere debido a una diferencia de temperatura. Características importantes:

- No es una propiedad del sistema, sino energía en tránsito
- La transferencia ocurre siempre de mayor a menor temperatura
- Se considera positivo cuando fluye hacia el sistema
- Se mide en joules (J) o calorías (cal), donde 1 cal = 4.184 J

La cantidad de calor necesaria para cambiar la temperatura de un objeto está dada por:

$$Q = mc\Delta T$$

Donde:
- m es la masa
- c es el calor específico
- ΔT es el cambio de temperatura

## Trabajo (W)

El **trabajo** es la energía transferida cuando una fuerza mueve un objeto a lo largo de una distancia. En termodinámica, el trabajo más común es el trabajo de expansión/compresión (trabajo P-V):

$$W = -\int_{V_1}^{V_2} P dV$$

Donde:
- P es la presión
- V es el volumen
- El signo negativo indica que cuando el sistema se expande (dV > 0), realiza trabajo sobre el entorno (W < 0 según nuestra convención)

### Otras formas de trabajo:
- Trabajo eléctrico: W = VIt (voltaje × corriente × tiempo)
- Trabajo de eje: W = τθ (torque × ángulo de rotación)
- Trabajo de estiramiento: W = ∫Fdx (fuerza × distancia)

## Procesos Termodinámicos

Un **proceso termodinámico** describe la transformación de un sistema de un estado de equilibrio a otro. Los procesos más importantes son:

### 1. Proceso Isocórico (Volumen Constante)

![Proceso Isocórico](/home/fcamaggi/code/Termo/Termodinamica/_page_55_Figure_0.jpeg)

- Volumen constante: ΔV = 0
- No hay trabajo de expansión: W = 0
- Primera Ley se reduce a: ΔU = Q
- Para un gas ideal: Q = nCv·ΔT

### 2. Proceso Isobárico (Presión Constante)

![Proceso Isobárico](/home/fcamaggi/code/Termo/Termodinamica/_page_54_Figure_0.jpeg)

- Presión constante: ΔP = 0
- Trabajo: W = -P·ΔV
- Primera Ley: ΔU = Q - P·ΔV
- Para un gas ideal: Q = nCp·ΔT

### 3. Proceso Isotérmico (Temperatura Constante)

![Proceso Isotérmico](/home/fcamaggi/code/Termo/Termodinamica/_page_54_Figure_0.jpeg)

- Temperatura constante: ΔT = 0
- Para un gas ideal: ΔU = 0 (ya que U depende solo de T)
- Primera Ley: Q = W
- Para un gas ideal: W = -nRT·ln(V₂/V₁)

### 4. Proceso Adiabático (Sin Transferencia de Calor)

![Proceso Adiabático](/home/fcamaggi/code/Termo/Termodinamica/_page_55_Figure_0.jpeg)

- No hay transferencia de calor: Q = 0
- Primera Ley: ΔU = W
- Para un gas ideal: W = nCv(T₂-T₁)
- Relación presión-volumen: PV^γ = constante, donde γ = Cp/Cv

### Comparación de Procesos

| Proceso | Constante | Ecuación de Estado | Trabajo (Gas Ideal) | Calor (Gas Ideal) |
|---------|-----------|-------------------|---------------------|-------------------|
| Isocórico | V | P/T = constante | W = 0 | Q = nCvΔT |
| Isobárico | P | V/T = constante | W = -PΔV = -nRΔT | Q = nCpΔT |
| Isotérmico | T | PV = constante | W = -nRT·ln(V₂/V₁) | Q = -W |
| Adiabático | Q = 0 | PV^γ = constante | W = nCv(T₁-T₂) | Q = 0 |

## Ciclos Termodinámicos

Un **ciclo termodinámico** es una serie de procesos termodinámicos que comienzan y terminan en el mismo estado. Los ciclos son fundamentales en dispositivos como motores térmicos, refrigeradores y bombas de calor.

### Propiedades de los Ciclos:
- ΔU = 0 para todo el ciclo (ya que el estado inicial y final son idénticos)
- El trabajo neto es igual al calor neto: W = Q
- La eficiencia térmica se define como: η = W/Qin = 1 - Qout/Qin

### Ciclos Termodinámicos Comunes:

1. **Ciclo de Carnot**: Ciclo ideal compuesto por dos procesos isotérmicos y dos adiabáticos. Tiene la máxima eficiencia posible entre dos temperaturas.

2. **Ciclo Otto**: Utilizado en motores de combustión interna con encendido por chispa (gasolina).

3. **Ciclo Diesel**: Utilizado en motores de combustión interna con encendido por compresión.

4. **Ciclo Rankine**: Utilizado en plantas de energía de vapor para generar electricidad.

## Proceso Adiabático en Gases Ideales

El proceso adiabático merece especial atención ya que es fundamental en muchos dispositivos prácticos como compresores, turbinas y motores.

### Ecuaciones para un proceso adiabático en un gas ideal:

1. **Relación presión-volumen**: PV^γ = constante

2. **Relación temperatura-volumen**: TV^(γ-1) = constante

3. **Relación temperatura-presión**: T·P^((1-γ)/γ) = constante

### Trabajo en un Proceso Adiabático:

Para un gas ideal, el trabajo en un proceso adiabático reversible es:

$$W = \frac{P_1V_1 - P_2V_2}{\gamma - 1} = \frac{nR(T_1 - T_2)}{\gamma - 1}$$

### Cambio de Temperatura:

$$\frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{\gamma-1} = \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$$

## Aplicaciones de la Primera Ley y Procesos Termodinámicos

### 1. Motores de Combustión Interna
- El ciclo Otto (gasolina) y el ciclo Diesel involucran compresión adiabática, adición de calor, expansión adiabática y rechazo de calor.
- La eficiencia depende de la relación de compresión y el tipo de combustible.

### 2. Plantas de Energía
- El ciclo Rankine utiliza procesos isobáricos (caldera y condensador) y adiabáticos (turbina y bomba).
- La eficiencia puede mejorarse mediante recalentamiento, regeneración y aumento de la temperatura máxima.

### 3. Sistemas de Refrigeración y Aire Acondicionado
- Funcionan como ciclos inversos, transfiriendo calor desde un espacio frío a uno caliente.
- Requieren trabajo de entrada para mover calor "cuesta arriba" (de menor a mayor temperatura).

### 4. Compresores y Turbinas
- Los procesos de compresión y expansión ideales son adiabáticos reversibles.
- La eficiencia isentrópica compara el rendimiento real con el ideal.

## Resumen de Ecuaciones Clave

1. **Primera Ley**: ΔU = Q + W

2. **Calor específico a volumen constante**: Cv = (∂U/∂T)v

3. **Calor específico a presión constante**: Cp = (∂H/∂T)p

4. **Relación entre calores específicos**: Cp - Cv = R (para gases ideales)

5. **Trabajo en diferentes procesos**:
   - Isocórico: W = 0
   - Isobárico: W = -P·ΔV
   - Isotérmico (gas ideal): W = -nRT·ln(V₂/V₁)
   - Adiabático (gas ideal): W = nCv(T₁-T₂)

6. **Relaciones para procesos adiabáticos en gases ideales**:
   - PV^γ = constante
   - TV^(γ-1) = constante
   - T·P^((1-γ)/γ) = constante

## Ejemplos Resueltos

**Ejemplo 1**: Un gas ideal monoatómico (γ = 5/3) con n = 2 moles inicialmente a 300 K y 1 bar se comprime isotérmicamente hasta un volumen mitad del inicial. Luego se expande adiabáticamente hasta su volumen original. Calcular:
a) El trabajo neto realizado por el gas
b) El calor neto intercambiado
c) La temperatura final

**Solución**:

Estado 1: T₁ = 300 K, P₁ = 1 bar, V₁ = nRT₁/P₁ = 2·8.314·300/10⁵ = 0.04989 m³
Estado 2: T₂ = 300 K, V₂ = V₁/2 = 0.02494 m³, P₂ = P₁·(V₁/V₂) = 2 bar

a) Trabajo en el proceso isotérmico (1→2):
   W₁₂ = -nRT·ln(V₂/V₁) = -2·8.314·300·ln(0.5) = +3458 J (trabajo sobre el gas)

   Relación para el proceso adiabático (2→3):
   T₃/T₂ = (V₂/V₃)^(γ-1) = (V₂/V₁)^(γ-1) = (0.5)^(2/3) = 0.63
   T₃ = 0.63·300 = 189 K

   Trabajo en el proceso adiabático (2→3):
   W₂₃ = nCv(T₂-T₃) = n·(3R/2)·(T₂-T₃) = 2·(3·8.314/2)·(300-189) = +2786 J

   Trabajo neto: Wnet = W₁₂ + W₂₃ = -3458 + (-2786) = -6244 J (trabajo realizado por el entorno)

b) Calor neto:
   Q₁₂ = W₁₂ (isotérmico) = -3458 J
   Q₂₃ = 0 (adiabático)
   Qnet = Q₁₂ + Q₂₃ = -3458 J

c) La temperatura final es T₃ = 189 K

**Ejemplo 2**: Un sistema contiene 1 kg de agua inicialmente como líquido saturado a 200 kPa. Se calienta a presión constante hasta que alcanza estado de vapor sobrecalentado a 400°C. Calcular el calor transferido y el trabajo realizado.

**Solución**:
(Para este ejemplo, necesitaríamos usar tablas de vapor de agua, pero lo resolveremos conceptualmente)

Estado 1: Agua líquida saturada a 200 kPa
- T₁ = Tsat(200 kPa) ≈ 120°C
- v₁ = vf(200 kPa) ≈ 0.00106 m³/kg
- h₁ = hf(200 kPa) ≈ 504 kJ/kg

Estado 2: Vapor sobrecalentado a 200 kPa y 400°C
- v₂ ≈ 2.2 m³/kg
- h₂ ≈ 3263 kJ/kg

Calor transferido: q = h₂ - h₁ = 3263 - 504 = 2759 kJ/kg

Trabajo realizado: w = P(v₂ - v₁) = 200 × (2.2 - 0.00106) = 440 kJ/kg

---

## Enlaces a otros temas relacionados
- [Análisis de Energía en Sistemas Cerrados](6_Sistemas_Cerrados.md)
- [Proceso Adiabático en Gas Ideal](8_Proceso_Adiabatico.md)
- [Primera Ley sin Flujo Másico](15_Primera_Ley_Sin_Flujo.md)

## Referencias
- Halliday, D., Resnick, R. and Walker, J. (2014) Fundamentals of Physics. 10th Edition, Wiley and Sons, New York. Sección 18.5.
- Cengel, Y. A. (2012). Termodinámica, séptima edición.
- Notas del curso FIS1523 (1-2025)
