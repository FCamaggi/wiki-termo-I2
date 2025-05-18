# Factor de Compresibilidad

## Introducción

El **factor de compresibilidad**, también conocido como **factor Z**, es un parámetro adimensional que cuantifica la desviación del comportamiento de un gas real respecto al comportamiento de un gas ideal. Este factor es fundamental para corregir las predicciones de la ecuación de gas ideal y obtener resultados más precisos en condiciones donde la idealidad no es una aproximación adecuada.

## Definición del Factor de Compresibilidad

El factor de compresibilidad (Z) se define como la relación entre el volumen molar real de un gas y el volumen molar que tendría si fuera un gas ideal, bajo las mismas condiciones de presión y temperatura:

$$Z = \frac{v_{real}}{v_{ideal}} = \frac{Pv_{real}}{RT}$$

Donde:
- Z es el factor de compresibilidad [adimensional]
- vreal es el volumen específico real del gas [m³/kg]
- videal es el volumen específico ideal del gas [m³/kg]
- P es la presión [Pa]
- R es la constante específica del gas [J/(kg·K)]
- T es la temperatura absoluta [K]

## Interpretación del Factor Z

- **Z = 1**: El gas se comporta como un gas ideal.
- **Z > 1**: El gas tiene un volumen real mayor que el predicho por el modelo ideal. Esto ocurre típicamente a bajas presiones o altas temperaturas, donde las fuerzas repulsivas entre moléculas predominan.
- **Z < 1**: El gas tiene un volumen real menor que el predicho por el modelo ideal. Esto suele ocurrir a presiones moderadas, donde las fuerzas atractivas entre moléculas son significativas.

![Factor de Compresibilidad](/home/fcamaggi/code/Termo/Termodinamica/_page_42_Figure_0.jpeg)

## Ecuación de Estado para Gases Reales

La ecuación de estado para un gas real utilizando el factor de compresibilidad es:

$$PV = ZnRT$$

O en términos de volumen específico:

$$Pv = ZRT$$

Esta forma permite corregir la ecuación del gas ideal para acercarse al comportamiento real de los gases.

## Principio de Estados Correspondientes

El **Principio de Estados Correspondientes** establece que todos los gases, cuando se comparan a las mismas condiciones reducidas (relativas a sus propiedades críticas), muestran aproximadamente el mismo factor de compresibilidad y, por tanto, un comportamiento similar.

### Propiedades Reducidas

Las propiedades reducidas son relaciones adimensionales que comparan las propiedades actuales del gas con sus propiedades críticas:

- **Presión reducida**: $P_r = \frac{P}{P_c}$
- **Temperatura reducida**: $T_r = \frac{T}{T_c}$
- **Volumen específico reducido**: $v_r = \frac{v}{v_c}$

Donde Pc, Tc y vc son la presión crítica, temperatura crítica y volumen específico crítico del gas, respectivamente.

## Diagrama de Compresibilidad Generalizado

El **diagrama de compresibilidad generalizado** es una herramienta gráfica que muestra la relación entre el factor de compresibilidad (Z) y las propiedades reducidas (Pr y Tr). Este diagrama permite estimar el factor Z para casi cualquier gas, conociendo únicamente sus propiedades críticas y su estado actual.

![Diagrama de Compresibilidad](/home/fcamaggi/code/Termo/Termodinamica/_page_42_Figure_0.jpeg)

### Características del Diagrama

- Las curvas en el diagrama representan temperaturas reducidas (Tr) constantes.
- El eje horizontal representa la presión reducida (Pr).
- El eje vertical representa el factor de compresibilidad (Z).
- El lugar donde todas las curvas se aproximan a Z = 1 corresponde a gases en condiciones de baja presión (comportamiento ideal).
- La región donde Z < 1 muestra el dominio de las fuerzas atractivas entre moléculas.
- La región donde Z > 1 indica el predominio de las fuerzas repulsivas.

### Uso del Diagrama de Compresibilidad

Para utilizar el diagrama:

1. Calcular Pr y Tr para el gas en cuestión.
2. Localizar el punto correspondiente en el diagrama.
3. Leer el valor de Z en ese punto.
4. Aplicar la ecuación de estado corregida: Pv = ZRT.

## Propiedades Críticas de Gases Comunes

| Gas             | Fórmula | Temperatura Crítica (K) | Presión Crítica (MPa) | Factor de Compresibilidad Crítico |
|-----------------|---------|-------------------------|------------------------|-----------------------------------|
| Aire            | -       | 132.5                   | 3.77                   | 0.283                             |
| Nitrógeno       | N₂      | 126.2                   | 3.39                   | 0.290                             |
| Oxígeno         | O₂      | 154.6                   | 5.04                   | 0.288                             |
| Dióxido de carbono | CO₂  | 304.1                   | 7.38                   | 0.274                             |
| Vapor de agua   | H₂O     | 647.3                   | 22.09                  | 0.230                             |
| Metano          | CH₄     | 190.6                   | 4.60                   | 0.288                             |
| Etano           | C₂H₆    | 305.4                   | 4.88                   | 0.285                             |
| Propano         | C₃H₈    | 370.0                   | 4.25                   | 0.281                             |

## Ecuaciones de Estado para Gases Reales

Existen varias ecuaciones de estado que intentan modelar el comportamiento de gases reales. Estas ecuaciones pueden considerarse como formas de expresar el factor de compresibilidad en términos de las propiedades del gas.

### 1. Ecuación de Van der Waals

Una de las primeras y más conocidas ecuaciones para gases reales:

$$\left(P + \frac{a}{v^2}\right)(v - b) = RT$$

Donde:
- a es un parámetro que cuantifica las fuerzas atractivas entre moléculas
- b es un parámetro relacionado con el volumen ocupado por las moléculas

Los parámetros a y b están relacionados con las propiedades críticas:

$$a = \frac{27R^2T_c^2}{64P_c}$$

$$b = \frac{RT_c}{8P_c}$$

### 2. Ecuación de Redlich-Kwong

Una mejora a la ecuación de Van der Waals:

$$P = \frac{RT}{v - b} - \frac{a}{T^{0.5}v(v + b)}$$

### 3. Ecuación Virial

Una expansión en series de potencias del factor de compresibilidad:

$$Z = 1 + \frac{B(T)}{v} + \frac{C(T)}{v^2} + ...$$

donde B(T), C(T), etc., son los coeficientes viriales que dependen de la temperatura.

## Aplicaciones del Factor de Compresibilidad

### 1. Diseño de Procesos Industriales

El factor de compresibilidad es crucial en el diseño de:
- Compresores y turbinas de gas
- Sistemas de transporte y almacenamiento de gases
- Plantas criogénicas
- Procesos petroquímicos

### 2. Cálculos Termodinámicos Precisos

- Determinación precisa de propiedades de gases (densidad, entalpía, entropía)
- Cálculo de eficiencias de ciclos termodinámicos
- Predicción del comportamiento de mezclas de gases

### 3. Simulación de Reservorios

- En la industria del petróleo y gas para predecir el comportamiento de hidrocarburos

## Limitaciones del Factor de Compresibilidad

1. **Aproximación generalizada**: El principio de estados correspondientes es una aproximación y no siempre proporciona resultados precisos para todos los gases.

2. **Gases polares**: Los gases con moléculas polares (como el agua) pueden desviarse significativamente del comportamiento predicho por los diagramas generalizados.

3. **Condiciones extremas**: A presiones muy altas o temperaturas muy bajas, incluso los modelos corregidos pueden ser insuficientes.

## Resumen

- El factor de compresibilidad (Z) cuantifica la desviación del comportamiento de un gas real respecto al gas ideal.
- Z = 1 para gases ideales, Z > 1 cuando predominan fuerzas repulsivas, y Z < 1 cuando dominan fuerzas atractivas.
- El principio de estados correspondientes permite usar diagramas generalizados para estimar Z conociendo solo las propiedades críticas del gas.
- La ecuación de estado corregida Pv = ZRT permite cálculos más precisos para gases reales.
- Existen varias ecuaciones de estado más complejas (Van der Waals, Redlich-Kwong, virial) que intentan modelar el comportamiento de gases reales.

## Ejemplos Prácticos

**Ejemplo 1**: Determinar el volumen específico del metano a 10 MPa y 200°C utilizando el factor de compresibilidad.

**Solución**:
1. Convertimos la temperatura a Kelvin: T = 200 + 273.15 = 473.15 K
2. Calculamos las propiedades reducidas:
   - Pr = P/Pc = 10 MPa / 4.6 MPa = 2.17
   - Tr = T/Tc = 473.15 K / 190.6 K = 2.48
3. Del diagrama de compresibilidad, para Pr = 2.17 y Tr = 2.48, estimamos Z ≈ 1.15
4. Calculamos el volumen específico:
   - R(metano) = 518.3 J/(kg·K)
   - v = ZRT/P = 1.15 × 518.3 × 473.15 / (10 × 10⁶) = 0.0281 m³/kg

**Ejemplo 2**: El nitrógeno a 150 K y 5 MPa tiene un volumen específico de 0.0015 m³/kg. Calcular su factor de compresibilidad y comparar con el valor de un diagrama generalizado.

**Solución**:
1. R(nitrógeno) = 296.8 J/(kg·K)
2. Z = Pv/(RT) = 5 × 10⁶ × 0.0015 / (296.8 × 150) = 0.168
3. Calculamos las propiedades reducidas:
   - Pr = P/Pc = 5 MPa / 3.39 MPa = 1.47
   - Tr = T/Tc = 150 K / 126.2 K = 1.19
4. Del diagrama, para Pr = 1.47 y Tr = 1.19, el valor aproximado es Z ≈ 0.17, lo que concuerda bien con el valor calculado.

---

## Enlaces a otros temas relacionados
- [Ecuación de Estado de Gas Ideal](4_Gas_Ideal.md)
- [Análisis de Energía en Sistemas Cerrados](6_Sistemas_Cerrados.md)
- [Primera Ley de la Termodinámica y Procesos Termodinámicos](7_Primera_Ley.md)

## Referencias
- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.7
- Notas del curso FIS1523 (1-2025)
