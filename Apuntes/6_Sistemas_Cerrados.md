# Análisis de Energía en Sistemas Cerrados

## Introducción

Un **sistema cerrado**, también conocido como masa de control, es un sistema que no permite la transferencia de masa a través de sus fronteras, pero sí permite la transferencia de energía en forma de calor y trabajo. El análisis de energía en sistemas cerrados es fundamental en termodinámica y proporciona las bases para entender procesos como expansión, compresión, calentamiento y enfriamiento en dispositivos y ciclos termodinámicos.

## Trabajo Realizado por una Frontera Móvil

### Concepto de Trabajo en Sistemas con Frontera Móvil

![Trabajo de frontera móvil](/home/fcamaggi/code/Termo/Termodinamica/_page_46_Figure_4.jpeg)

Cuando un sistema cerrado cambia su volumen debido al movimiento de una frontera, se realiza trabajo. Este trabajo, a menudo llamado **trabajo P-V** o **trabajo de frontera móvil**, se calcula como:

$$W = \int_{V_1}^{V_2} P \, dV$$

Donde:
- W es el trabajo realizado [J]
- P es la presión en la frontera [Pa]
- V es el volumen del sistema [m³]
- V₁ y V₂ son los volúmenes inicial y final, respectivamente

#### Convención de signos:
- **W > 0**: Trabajo realizado por el sistema sobre los alrededores (expansión)
- **W < 0**: Trabajo realizado por los alrededores sobre el sistema (compresión)

### Trabajo en Procesos Específicos

#### 1. Proceso a Presión Constante (Isobárico)

En un proceso donde la presión permanece constante, el trabajo se reduce a:

$$W = P(V_2 - V_1) = P \Delta V$$

![Trabajo isobárico](/home/fcamaggi/code/Termo/Termodinamica/_page_46_Figure_4.jpeg)

Este trabajo está representado por el área bajo la curva en un diagrama P-V, que en este caso es un rectángulo.

#### 2. Proceso con Variación Lineal de Presión

Si la presión varía linealmente con el volumen según P = P₁ + (P₂-P₁)(V-V₁)/(V₂-V₁), el trabajo es:

$$W = \frac{1}{2}(P_1 + P_2)(V_2 - V_1)$$

Esto representa el área de un trapecio en el diagrama P-V.

#### 3. Proceso Politrópico

Un proceso politrópico sigue la relación:

$$PV^n = \text{constante}$$

Donde n es el exponente politrópico.

El trabajo para un proceso politrópico es:

$$W = \frac{P_2V_2 - P_1V_1}{1-n} \quad \text{(para } n \neq 1 \text{)}$$

Los casos especiales incluyen:
- **n = 0**: Proceso isobárico (presión constante)
- **n = 1**: Proceso isotérmico (temperatura constante)
- **n = γ**: Proceso adiabático (sin transferencia de calor)
- **n = ∞**: Proceso isocórico (volumen constante, W = 0)

![Procesos politrópicos](/home/fcamaggi/code/Termo/Termodinamica/_page_47_Figure_0.jpeg)

#### 4. Proceso Isotérmico en un Gas Ideal

Para un gas ideal en un proceso isotérmico (T = constante), el trabajo es:

$$W = \int_{V_1}^{V_2} P \, dV = \int_{V_1}^{V_2} \frac{mRT}{V} \, dV = mRT \ln\left(\frac{V_2}{V_1}\right) = P_1V_1 \ln\left(\frac{V_2}{V_1}\right)$$

#### 5. Proceso Adiabático en un Gas Ideal

Para un gas ideal en un proceso adiabático (PVᵏ = constante), el trabajo es:

$$W = \frac{P_2V_2 - P_1V_1}{1-k} = \frac{mR(T_2 - T_1)}{1-k}$$

Donde k = cp/cv es la relación de calores específicos.

## Balance de Energía en Sistemas Cerrados

### Primera Ley de la Termodinámica para Sistemas Cerrados

La primera ley de la termodinámica establece que la energía total de un sistema aislado es constante. Para un sistema cerrado que intercambia calor y trabajo con sus alrededores, el balance de energía es:

$$\Delta E = Q - W$$

Donde:
- ΔE es el cambio en la energía total del sistema [J]
- Q es el calor transferido al sistema [J]
- W es el trabajo realizado por el sistema [J]

### Energía Total de un Sistema

La energía total de un sistema se compone de varias formas:

$$E = U + KE + PE$$

Donde:
- U es la energía interna [J]
- KE es la energía cinética [J]
- PE es la energía potencial [J]

En términos específicos (por unidad de masa):

$$e = u + \frac{V^2}{2} + gz$$

Donde:
- e es la energía total específica [J/kg]
- u es la energía interna específica [J/kg]
- V es la velocidad [m/s]
- g es la aceleración gravitatoria [m/s²]
- z es la altura [m]

### Balance de Energía para un Proceso

Para un proceso donde un sistema cerrado cambia de un estado 1 a un estado 2:

$$(E_2 - E_1) = Q - W$$

O en forma más detallada:

$$\left[ (U_2 + KE_2 + PE_2) - (U_1 + KE_1 + PE_1) \right] = Q - W$$

Para sistemas donde los cambios en energía cinética y potencial son despreciables:

$$U_2 - U_1 = Q - W$$

En términos de propiedades específicas:

$$m(u_2 - u_1) = Q - W$$

## Calores Específicos

### Definiciones de Calor Específico

El **calor específico** es la cantidad de energía necesaria para elevar la temperatura de una unidad de masa de una sustancia en un grado.

Hay dos calores específicos principales:

1. **Calor específico a volumen constante (cv)**: Energía requerida por unidad de masa para elevar la temperatura en un grado mientras el volumen permanece constante.

   $$c_v = \left( \frac{\partial u}{\partial T} \right)_v$$

2. **Calor específico a presión constante (cp)**: Energía requerida por unidad de masa para elevar la temperatura en un grado mientras la presión permanece constante.

   $$c_p = \left( \frac{\partial h}{\partial T} \right)_p$$

Donde h es la entalpía específica, definida como h = u + Pv.

### Relación entre Calores Específicos

Para cualquier sustancia, los calores específicos están relacionados por:

$$c_p - c_v = T\left( \frac{\partial P}{\partial T} \right)_v \left( \frac{\partial v}{\partial T} \right)_p$$

Para un gas ideal, esta relación se simplifica a:

$$c_p - c_v = R$$

Donde R es la constante específica del gas.

## Energía Interna y Entalpía de Gases Ideales

### Energía Interna de un Gas Ideal

Para un gas ideal, la energía interna es función únicamente de la temperatura:

$$u = u(T)$$

El cambio en la energía interna para un gas ideal es:

$$\Delta u = u_2 - u_1 = \int_{T_1}^{T_2} c_v(T) \, dT$$

Si cv es constante:

$$\Delta u = c_v(T_2 - T_1) = c_v \Delta T$$

### Entalpía de un Gas Ideal

De manera similar, la entalpía de un gas ideal es función únicamente de la temperatura:

$$h = h(T)$$

El cambio en la entalpía para un gas ideal es:

$$\Delta h = h_2 - h_1 = \int_{T_1}^{T_2} c_p(T) \, dT$$

Si cp es constante:

$$\Delta h = c_p(T_2 - T_1) = c_p \Delta T$$

## Relaciones de Calores Específicos para Gases Ideales

La relación de calores específicos (k o γ) se define como:

$$k = \gamma = \frac{c_p}{c_v}$$

El valor de k depende del tipo de gas:
- Gases monoatómicos (He, Ar): k ≈ 1.67
- Gases diatómicos (O₂, N₂, H₂): k ≈ 1.4
- Gases poliatómicos (CO₂, H₂O): k ≈ 1.3

### Calores Específicos y Teoría Cinética

La teoría cinética de los gases relaciona los calores específicos con los grados de libertad moleculares:

$$c_v = \frac{f}{2}R$$

Donde f es el número de grados de libertad:
- Gases monoatómicos: f = 3 (traslación en 3D)
- Gases diatómicos: f = 5 (traslación + rotación)
- Gases poliatómicos: f ≥ 6 (traslación + rotación + vibración)

## Análisis de Procesos Específicos

### 1. Proceso Isocórico (Volumen Constante)

En un proceso a volumen constante:
- El trabajo de frontera móvil es cero: W = 0
- El cambio de energía interna se debe únicamente al calor transferido: ΔU = Q
- Para un gas ideal: Q = mcvΔT

### 2. Proceso Isobárico (Presión Constante)

En un proceso a presión constante:
- El trabajo es W = PΔV
- El cambio de entalpía es igual al calor transferido: ΔH = Q
- Para un gas ideal: Q = mcpΔT

### 3. Proceso Isotérmico (Temperatura Constante)

En un proceso isotérmico:
- No hay cambio en la energía interna para un gas ideal: ΔU = 0
- El calor transferido es igual al trabajo realizado: Q = W
- Para un gas ideal: Q = W = mRT ln(V₂/V₁) = mRT ln(P₁/P₂)

### 4. Proceso Adiabático (Sin Transferencia de Calor)

En un proceso adiabático:
- No hay transferencia de calor: Q = 0
- El cambio de energía interna es igual al negativo del trabajo: ΔU = -W
- Para un gas ideal en un proceso adiabático reversible: PVᵏ = constante y TVᵏ⁻¹ = constante

## Resumen de Ecuaciones Clave

1. **Trabajo de frontera móvil**: $W = \int_{V_1}^{V_2} P \, dV$

2. **Primera Ley de la Termodinámica**: $\Delta E = Q - W$

3. **Balance de energía para sistemas cerrados**: $\Delta U = Q - W$ (cuando ΔKE y ΔPE son despreciables)

4. **Cambio de energía interna (gas ideal)**: $\Delta U = mc_v\Delta T$

5. **Cambio de entalpía (gas ideal)**: $\Delta H = mc_p\Delta T$

6. **Relación entre calores específicos**: $c_p - c_v = R$ (para gas ideal)

7. **Procesos politrópicos**: $PV^n = \text{constante}$

8. **Proceso adiabático reversible (gas ideal)**: $PV^k = \text{constante}$, $T_2/T_1 = (V_1/V_2)^{k-1} = (P_2/P_1)^{(k-1)/k}$

## Ejemplos Prácticos

**Ejemplo 1**: Un gas ideal con cv = 0.718 kJ/(kg·K) y cp = 1.005 kJ/(kg·K) se comprime adiabáticamente de 100 kPa y 300 K a 500 kPa. Determinar la temperatura final y el trabajo realizado por unidad de masa.

**Solución**:
1. Calculamos k = cp/cv = 1.005/0.718 = 1.4
2. Para un proceso adiabático de gas ideal: T₂/T₁ = (P₂/P₁)^((k-1)/k)
   T₂ = 300 × (500/100)^(0.4/1.4) = 300 × (5)^(0.286) = 300 × 1.624 = 487.2 K
3. El trabajo por unidad de masa es w = cv(T₁ - T₂)
   w = 0.718 × (300 - 487.2) = -134.4 kJ/kg (negativo porque es trabajo realizado sobre el gas)

**Ejemplo 2**: 2 kg de aire a 150 kPa y 27°C se calientan a presión constante hasta 127°C. Determine el calor transferido, el trabajo realizado y el cambio en la energía interna. Considere cp = 1.005 kJ/(kg·K) y cv = 0.718 kJ/(kg·K) para el aire.

**Solución**:
1. ΔT = 127 - 27 = 100 K
2. Calor transferido: Q = mcp·ΔT = 2 × 1.005 × 100 = 201 kJ
3. Cambio en la energía interna: ΔU = mcv·ΔT = 2 × 0.718 × 100 = 143.6 kJ
4. Trabajo realizado: W = Q - ΔU = 201 - 143.6 = 57.4 kJ

---

## Enlaces a otros temas relacionados
- [Primera Ley de la Termodinámica y Procesos Termodinámicos](7_Primera_Ley.md)
- [Proceso Adiabático en Gas Ideal](8_Proceso_Adiabatico.md)
- [Energía y sus Formas](14_Energia.md)

## Referencias
- Cengel, Y. A. (2012). Termodinámica, séptima edición. Secciones 4.1-4.5
- Notas del curso FIS1523 (1-2025)
