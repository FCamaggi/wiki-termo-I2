# Diagramas de Fase

_Parte del curso FIS1523 - Termodinámica_

## Introducción

Los **diagramas de fase** son representaciones gráficas que muestran cómo varían las propiedades físicas de una sustancia pura cuando cambia su estado termodinámico. Estos diagramas son herramientas fundamentales para visualizar y entender el comportamiento de las sustancias puras bajo diferentes condiciones de presión, temperatura y volumen específico.

## Tipos de Diagramas de Fase

### 1. Diagrama T-v (Temperatura - Volumen específico)

```
Temperatura
   ^
   │         Punto crítico
   │            ●
   │      ╱╲
   │     ╱  ╲    Vapor
   │    ╱    ╲   sobrecalentado
   │   ╱      ╲
   │  ╱        ╲
   │ ╱          ╲
   │╱ Líquido    ╲
   │ comprimido   ╲
   │               ╲
   └───────────────────> Volumen específico
```

#### Características principales:

- **Región de líquido comprimido**: A la izquierda de la curva de saturación de líquido.
- **Región de vapor sobrecalentado**: A la derecha de la curva de saturación de vapor.
- **Región de mezcla líquido-vapor**: Entre las curvas de saturación líquido y vapor.
- **Líneas isotérmicas**: Horizontales en la región de mezcla (temperatura constante durante el cambio de fase).
- **Punto crítico**: Punto donde terminan las curvas de saturación y desaparece la distinción entre líquido y vapor.

| Región del diagrama  | Características físicas             | Comportamiento                        |
| -------------------- | ----------------------------------- | ------------------------------------- |
| Líquido comprimido   | Alta densidad, baja compresibilidad | Incompresible                         |
| Región de mezcla     | Coexistencia de fases               | Isotérmico durante el cambio          |
| Vapor sobrecalentado | Baja densidad, alta compresibilidad | Similar a gas ideal a bajas presiones |

### 2. Diagrama P-v (Presión - Volumen específico)

```
Presión
   ^
   │   Líquido         Punto
   │   comprimido      crítico
   │                     ●
   │                   ╱  ╲
   │                  ╱    ╲
   │                 ╱      ╲
   │                ╱        ╲
   │   Isotermas   ╱          ╲
   │              ╱            ╲
   │             ╱              ╲
   │            ╱ Región         ╲   Vapor
   │           ╱  bifásica        ╲  sobrecalentado
   │          ╱                    ╲
   └──────────────────────────────────> Volumen específico
```

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

```
Presión (log)
   ^
   │              Punto crítico
   │                  ●
   │              ╱
   │  Sólido    ╱   Líquido
   │          ╱
   │        ╱
   │    ●╱
   │   ╱│
   │  ╱ │
   │ ╱  │
   │╱   │       Gas/Vapor
   │    │
   └────┼─────────────────> Temperatura
    Punto triple
```

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

```
    P
    ^
    │     /│
    │    / │
    │   /  │
    │  /   │
    │ /    │
    │/     │
    └──────┼───> T
           │
           v
           v
```

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

| Estado               | Definición                          | Ubicación en diagramas                |
| -------------------- | ----------------------------------- | ------------------------------------- |
| Líquido subenfriado  | Líquido a T < Tsat para una P dada  | Izquierda de la curva de saturación   |
| Líquido saturado     | Líquido a punto de vaporizar        | Sobre la curva de saturación líquida  |
| Vapor saturado       | Vapor a punto de condensar          | Sobre la curva de saturación de vapor |
| Vapor sobrecalentado | Vapor a T > Tsat para una P dada    | Derecha de la curva de saturación     |
| Fluido supercrítico  | Estado por encima del punto crítico | Sobre el punto crítico                |

## Aplicaciones de los Diagramas de Fase

Los diagramas de fase son fundamentales para:

```
┌───────────────────────────┐
│ APLICACIONES PRINCIPALES  │
├───────────────────────────┤
│ • Diseño de ciclos        │
│   termodinámicos          │
│                           │
│ • Procesos industriales   │
│   de separación           │
│                           │
│ • Predicción de cambios   │
│   de fase                 │
│                           │
│ • Análisis de             │
│   comportamiento de       │
│   sustancias              │
└───────────────────────────┘
```

1. **Diseño de ciclos termodinámicos**: Como ciclos de potencia de vapor, refrigeración y bombas de calor.
2. **Procesos industriales**: Destilación, extracción supercrítica, licuefacción de gases, etc.
3. **Predicción de cambios de fase**: Determinación de condiciones donde ocurren cambios de fase.
4. **Análisis de comportamiento de sustancias**: Estudio de propiedades bajo diferentes condiciones.

## Ejemplos prácticos

### Ejemplo 1: Determinación del estado físico

**Problema**: Determine el estado del agua (fase) a 500 kPa y 150°C utilizando el diagrama de fase P-T.

**Solución**:
A 500 kPa, la temperatura de saturación del agua es aproximadamente 152°C.

```
P (kPa)
   ^
   │
500├───────────● (500 kPa, 150°C)
   │         ╱
   │        ╱
   │       ╱
   │      ╱
   │     ╱ Línea de saturación
   │    ╱
   │   ╱
   │  ╱
   │ ╱
   │╱
   └─────────┬──────────> T (°C)
           152°C
```

Como 150°C es menor que la temperatura de saturación (152°C), el agua estará en estado de líquido comprimido (ligeramente por debajo de la saturación).

### Ejemplo 2: Trayectoria de un proceso

**Problema**: En un diagrama P-v, describa la trayectoria de un proceso donde el agua se calienta desde 20°C y 100 kPa hasta vapor sobrecalentado a 300°C y 200 kPa.

**Solución**: La trayectoria seguiría estos pasos:

```
P (kPa)
   ^
   │
200├────────────────────────────●
   │                           ╱ (200 kPa, 300°C)
   │                          ╱
   │                         ╱
100├───●───────────────────────
   │   │      ╱      │
   │   │     ╱       │
   │   │    ╱        │
   │   │   ╱         │
   │   │  ╱          │
   │   │ ╱           │
   └───┼─┼───────────┼───────> v
      v₁ v₂         v₃
```

1. Calentamiento del líquido comprimido (línea casi vertical) de (100 kPa, 20°C) a (100 kPa, Tsat ≈ 100°C)
2. Vaporización a presión constante (línea horizontal) de líquido saturado a vapor saturado
3. Sobrecalentamiento del vapor (línea que se curva hacia la derecha) a P constante hasta 300°C
4. Expansión isobárica hasta la presión final de 200 kPa (línea que desciende)

## Resumen

Los diagramas de fase son herramientas visuales poderosas que permiten:

- Identificar las fases y estados de una sustancia bajo diferentes condiciones de P, v y T.
- Predecir los cambios de fase y las propiedades asociadas.
- Analizar procesos termodinámicos de manera gráfica.
- Entender la interrelación entre las propiedades termodinámicas.

> 💡 **Consejo de estudio**: Practicar el trazado y la interpretación de procesos en diagramas P-v, T-v y P-T mejora significativamente la comprensión de los cambios de fase y comportamiento de las sustancias.

---

## Enlaces a otros temas relacionados

- [Sustancias Puras](sustancias_puras.md)
- [Tablas de Propiedades](tablas_propiedades.md)
- [Ecuación de Gas Ideal](gas_ideal.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3.4
- Notas del curso FIS1523 (1-2025)
