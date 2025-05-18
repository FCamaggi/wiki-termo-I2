# Factor de Compresibilidad

_Parte del curso FIS1523 - Termodinámica_

## Introducción

El **factor de compresibilidad** o **factor Z** es un parámetro adimensional que cuantifica la desviación del comportamiento de un gas real respecto al comportamiento ideal. Este factor es esencial para corregir la ecuación de gas ideal y realizar cálculos más precisos en condiciones donde los gases reales se alejan del comportamiento ideal.

## Definición y Significado Físico

### Definición Formal

$$Z = \frac{v_{real}}{v_{ideal}} = \frac{Pv_{real}}{RT}$$

Donde:

- Z es el factor de compresibilidad [adimensional]
- vreal es el volumen específico real del gas [m³/kg]
- videal es el volumen específico ideal del gas [m³/kg]
- P es la presión [Pa]
- R es la constante específica del gas [J/(kg·K)]
- T es la temperatura absoluta [K]

### Interpretación del Factor Z

```
      Factor Z
        ^
   2.0 |                Gases reales
        |                    Z > 1
        |              (Comportamiento
        |                 repulsivo)     ↗ T alta
   1.5 |                     ↗       ↗
        |                  ↗      ↗
        |               ↗     ↗
Z = 1.0 |-------------↗-↗---------------> P reducida
        |           ↙   ↘
        |        ↙       ↘
   0.5 |     ↙            ↘    Z < 1
        |  ↙                (Comportamiento
        | ↙                    atractivo)
   0.0 +--------------------------------
```

- **Z = 1**: El gas se comporta como un gas ideal.
- **Z > 1**: El volumen real es mayor que el ideal (fuerzas repulsivas dominantes).
- **Z < 1**: El volumen real es menor que el ideal (fuerzas atractivas dominantes).

## Gráficos de Compresibilidad Generalizada

### Principio de Estados Correspondientes

El principio de estados correspondientes establece que todos los gases exhiben aproximadamente el mismo factor de compresibilidad cuando se comparan a las mismas condiciones de temperatura y presión reducidas.

#### Propiedades Reducidas

- **Temperatura reducida**: $T_r = \frac{T}{T_c}$
- **Presión reducida**: $P_r = \frac{P}{P_c}$

Donde:

- $T_c$ es la temperatura crítica del gas
- $P_c$ es la presión crítica del gas

### Gráfico de Compresibilidad Generalizada

El gráfico de compresibilidad generalizada representa el factor Z como función de la presión reducida $P_r$ para diferentes valores de temperatura reducida $T_r$.

> 💡 **Nota**: Este gráfico permite estimar el factor de compresibilidad para casi cualquier gas, conociendo solo sus propiedades críticas y las condiciones de operación.

## Aplicaciones del Factor de Compresibilidad

### Ecuación de Estado para Gases Reales

$$PV = ZnRT$$

O, en términos del volumen específico:

$$Pv = ZRT$$

### Corrección del Volumen Específico

$$v_{real} = Z \cdot v_{ideal} = Z \cdot \frac{RT}{P}$$

### Cálculo de Propiedades Termodinámicas

El factor Z afecta al cálculo de propiedades termodinámicas como:

- Energía interna
- Entalpía
- Entropía
- Trabajo de compresión/expansión

## Factores que Afectan la Compresibilidad

| Condición       | Efecto en Z           | Comportamiento             |
| --------------- | --------------------- | -------------------------- |
| P → 0           | Z → 1                 | Se aproxima a gas ideal    |
| T → ∞           | Z → 1                 | Se aproxima a gas ideal    |
| T ≈ Tc y P ≈ Pc | Z ≈ 0.27              | Punto crítico (universal)  |
| T < Tc y P alta | Z aumenta rápidamente | Repulsión molecular domina |
| P moderada      | Z puede ser < 1       | Atracción molecular domina |

## Ecuaciones de Estado para Gases Reales

### Ecuación de Van der Waals

$$(P + \frac{a}{v^2})(v - b) = RT$$

Donde:

- a es el parámetro de atracción
- b es el volumen excluido por las moléculas

### Ecuación Virial

$$Z = 1 + \frac{B(T)}{v} + \frac{C(T)}{v^2} + ...$$

Donde B(T), C(T), etc., son coeficientes viriales que dependen de la temperatura.

## Ejemplos Prácticos

### Ejemplo 1: Cálculo del volumen específico real

**Problema**: Calcular el volumen específico del metano a 10 MPa y 300 K, sabiendo que su factor de compresibilidad en estas condiciones es Z = 0.84.

**Solución**:

1. Datos:
   - P = 10 MPa = 10×10⁶ Pa
   - T = 300 K
   - R(metano) = 518.3 J/(kg·K)
   - Z = 0.84
2. Usando la ecuación para gases reales:
   $v_{real} = \frac{ZRT}{P} = \frac{0.84 \times 518.3 \times 300}{10 \times 10^6} = 0.0130$ m³/kg

### Ejemplo 2: Determinación del factor Z usando propiedades reducidas

**Problema**: El nitrógeno tiene Tc = 126.2 K y Pc = 3.39 MPa. Determinar su factor de compresibilidad a 100 K y 6 MPa.

**Solución**:

1. Calcular propiedades reducidas:
   - Tr = 100/126.2 = 0.79
   - Pr = 6/3.39 = 1.77
2. Con estos valores, consultando el gráfico de compresibilidad generalizada se obtendría Z ≈ 0.70

## Resumen

```
┌───────────────────────────────────────┐
│ FACTOR DE COMPRESIBILIDAD: CONCEPTOS  │
│ CLAVE                                │
├───────────────────────────────────────┤
│ • Z = Pv/RT                           │
│                                       │
│ • Z = 1: comportamiento ideal         │
│ • Z > 1: predomina repulsión          │
│ • Z < 1: predomina atracción          │
│                                       │
│ • El principio de estados             │
│   correspondientes permite usar       │
│   un gráfico generalizado             │
│                                       │
│ • Pv = ZRT es la ecuación corregida   │
│   para gases reales                   │
└───────────────────────────────────────┘
```

> 💡 **Consejo de estudio**: El factor de compresibilidad es crucial para entender el comportamiento de gases a altas presiones y bajas temperaturas. Practique la lectura del gráfico generalizado y la interpretación física del factor Z.

---

## Enlaces a otros temas relacionados

- [Gas Ideal](gas_ideal.md)
- [Sustancias Puras](sustancias_puras.md)
- [Análisis de Sistemas Cerrados](sistemas_cerrados.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición. Sección 3-7
- Notas del curso FIS1523 (1-2025)
