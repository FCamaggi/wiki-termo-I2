# Diagramas de Fase Pv, Tv y PT

## Introducción

Los **diagramas de fase** son representaciones gráficas que muestran cómo varían las propiedades físicas de una sustancia pura cuando cambia su estado termodinámico. Estos diagramas son herramientas fundamentales para visualizar y entender el comportamiento de las sustancias puras bajo diferentes condiciones de presión, temperatura y volumen específico.

## Tipos de Diagramas de Fase

### 1. Diagrama T-v (Temperatura - Volumen específico)

El diagrama T-v representa la relación entre la temperatura y el volumen específico (v = 1/ρ = V/m) de una sustancia pura.

![Diagrama T-v](/home/fcamaggi/code/Termo/Termodinamica/_page_29_Figure_0.jpeg)

#### Características principales:

- **Región de líquido comprimido**: A la izquierda de la curva de saturación de líquido.
- **Región de vapor sobrecalentado**: A la derecha de la curva de saturación de vapor.
- **Región de mezcla líquido-vapor**: Entre las curvas de saturación líquido y vapor.
- **Líneas isotérmicas**: Horizontales en la región de mezcla (temperatura constante durante el cambio de fase).
- **Punto crítico**: Punto donde terminan las curvas de saturación y desaparece la distinción entre líquido y vapor.

#### Comportamiento en la región de mezcla:

En la región de mezcla líquido-vapor, a presión constante, un aumento de volumen específico sin cambio de temperatura implica un incremento en la fracción de vapor (calidad).

### 2. Diagrama P-v (Presión - Volumen específico)

El diagrama P-v muestra la relación entre la presión y el volumen específico de una sustancia.

![Diagrama P-v](/home/fcamaggi/code/Termo/Termodinamica/_page_31_Figure_0.jpeg)

#### Características principales:

- **Isotermas**: Líneas de temperatura constante que muestran cómo varía la presión con el volumen específico.
- **Región de mezcla**: Zona donde las isotermas son horizontales (presión constante durante el cambio de fase).
- **Punto crítico**: Punto donde la isoterma crítica tiene un punto de inflexión horizontal.
- **Líneas de calidad constante**: Líneas que representan una fracción específica de vapor en la mezcla líquido-vapor.

#### Comportamiento de las isotermas:

- **En región líquida**: Las isotermas son casi verticales debido a la baja compresibilidad de los líquidos.
- **En región de vapor**: Las isotermas se aproximan al comportamiento de un gas ideal a bajas presiones.
- **Por encima del punto crítico**: Las isotermas varían continuamente sin mostrar tramos horizontales.

### 3. Diagrama P-T (Presión - Temperatura)

El diagrama P-T, también llamado diagrama de fases, muestra las condiciones de presión y temperatura bajo las cuales existen las diferentes fases de una sustancia.

![Diagrama P-T](/home/fcamaggi/code/Termo/Termodinamica/_page_32_Figure_6.jpeg)

#### Características principales:

- **Línea de fusión**: Separa las fases sólida y líquida.
- **Línea de vaporización**: Separa las fases líquida y gaseosa.
- **Línea de sublimación**: Separa las fases sólida y gaseosa.
- **Punto triple**: Punto donde las tres líneas se encuentran y coexisten las tres fases.
- **Punto crítico**: Punto donde termina la línea de vaporización.

#### Regiones:
- Cada región representa una fase específica (sólido, líquido o gas).
- Las líneas representan estados donde dos fases coexisten en equilibrio.
- En el punto triple, las tres fases coexisten en equilibrio.

## La superficie P-v-T

Los diagramas bidimensionales que hemos visto son en realidad proyecciones de una superficie tridimensional P-v-T que representa completamente el comportamiento termodinámico de una sustancia pura.

![Superficie P-v-T](/home/fcamaggi/code/Termo/Termodinamica/_page_33_Figure_0.jpeg)

Esta superficie muestra cómo las tres variables termodinámicas (presión, volumen específico y temperatura) se relacionan entre sí. Los diagramas P-v, T-v y P-T son simplemente proyecciones de esta superficie en los planos correspondientes.

## Propiedades de Cambio de Fase a partir de los Diagramas

### Calor latente

El calor latente de vaporización puede visualizarse en un diagrama P-v como el área bajo la isoterma en la región de cambio de fase (multiplicada por T).

### Relación de Clausius-Clapeyron

Esta relación describe cómo varía la presión de saturación con la temperatura:

$$\frac{dP}{dT} = \frac{h_{fg}}{T(v_g - v_f)}$$

Donde:
- $h_{fg}$ es el calor latente de vaporización
- $v_g$ es el volumen específico del vapor saturado
- $v_f$ es el volumen específico del líquido saturado
- $T$ es la temperatura

## Regiones Especiales en los Diagramas de Fase

### Región de líquido subenfriado (comprimido)

Estado donde el líquido está a una temperatura menor que la temperatura de saturación para una presión dada, o a una presión mayor que la presión de saturación para una temperatura dada.

### Región de vapor sobrecalentado

Estado donde el vapor está a una temperatura mayor que la temperatura de saturación para una presión dada.

### Fluido supercrítico

Estado donde la sustancia está por encima de su punto crítico. En este estado, no existe distinción entre líquido y gas, y la sustancia tiene propiedades intermedias entre ambos.

## Aplicaciones de los Diagramas de Fase

Los diagramas de fase son fundamentales para:

1. **Diseño de ciclos termodinámicos**: Como ciclos de potencia de vapor, refrigeración y bombas de calor.
2. **Procesos industriales**: Destilación, extracción supercrítica, licuefacción de gases, etc.
3. **Predicción de cambios de fase**: Determinación de condiciones donde ocurren cambios de fase.
4. **Análisis de comportamiento de sustancias**: Estudio de propiedades bajo diferentes condiciones.

## Resumen

Los diagramas de fase son herramientas visuales poderosas que permiten:
- Identificar las fases y estados de una sustancia bajo diferentes condiciones de P, v y T.
- Predecir los cambios de fase y las propiedades asociadas.
- Analizar procesos termodinámicos de manera gráfica.
- Entender la interrelación entre las propiedades termodinámicas.

## Ejemplos prácticos

**Ejemplo 1**: Determine el estado del agua (fase) a 500 kPa y 150°C utilizando el diagrama de fase P-T.

**Solución**: A 500 kPa, la temperatura de saturación del agua es aproximadamente 152°C. Como 150°C es menor que la temperatura de saturación, el agua estará en estado de líquido comprimido (ligeramente por debajo de la saturación).

**Ejemplo 2**: En un diagrama P-v, describa la trayectoria de un proceso donde el agua se calienta desde 20°C y 100 kPa hasta vapor sobrecalentado a 300°C y 200 kPa.

**Solución**: La trayectoria seguiría estos pasos:
1. Calentamiento del líquido comprimido (línea casi vertical)
2. Vaporización a presión constante (línea horizontal)
3. Sobrecalentamiento del vapor (línea que se curva hacia la derecha)
4. Expansión isobárica hasta la presión final (línea que desciende)

---

## Enlaces a otros temas relacionados
- [Sustancias Puras y Cambios de Fase](1_Sustancias_Puras.md)
- [Tablas de Propiedades, Entalpía y Calidad](3_Tablas_Propiedades.md)
- [Ecuación de Estado de Gas Ideal](4_Gas_Ideal.md)

## Referencias
- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.4
- Notas del curso FIS1523 (1-2025)
