# Sustancias Puras y Cambios de Fase

_Parte del curso FIS1523 - Termodinámica_

## Introducción

Una **sustancia pura** es aquella que tiene una composición química homogénea e invariable en todas sus partes. Las sustancias puras son fundamentales en termodinámica porque sus propiedades y comportamiento pueden describirse de manera precisa mediante ecuaciones de estado y diagramas de fase.

## Sustancias Puras

### Definición y Características

Una sustancia pura es aquella que tiene una composición química fija en todas partes. Puede existir en diferentes fases (sólido, líquido, gas), pero su composición química sigue siendo la misma en cada fase.

```
Características clave:
┌────────────────────────────────┐
│ • Composición química constante│
│ • Propiedades homogéneas       │
│ • Sin reacciones químicas      │
└────────────────────────────────┘
```

| Ejemplos de Sustancias Puras | Fórmula Química |
| ---------------------------- | --------------- |
| Agua                         | H₂O             |
| Dióxido de carbono           | CO₂             |
| Nitrógeno                    | N₂              |
| Oxígeno                      | O₂              |

> 💡 **Nota**: Una mezcla de gases como el aire puede tratarse como una sustancia pura siempre que no haya cambio de fase y la composición permanezca constante.

## Fases de una Sustancia Pura

Una sustancia pura puede existir en tres fases principales:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   SÓLIDO    │    │   LÍQUIDO   │    │     GAS     │
│             │    │             │    │             │
│ Moléculas   │    │ Moléculas   │    │ Moléculas   │
│ fijas en    │ ↔  │ cercanas    │ ↔  │ muy         │
│ posición    │    │ con movi-   │    │ separadas   │
│             │    │ miento libre│    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### Características de cada fase

| Fase    | Forma     | Volumen    | Compresibilidad | Ordenamiento molecular |
| ------- | --------- | ---------- | --------------- | ---------------------- |
| Sólido  | Definida  | Definido   | Muy baja        | Alto (cristalino)      |
| Líquido | Adaptable | Definido   | Baja            | Medio (cercano)        |
| Gas     | Adaptable | Expandible | Alta            | Bajo (aleatorio)       |

## Cambios de Fase

Los cambios de fase son transformaciones físicas donde una sustancia cambia de una fase a otra. Estos cambios ocurren a temperatura constante (para una presión dada) y requieren transferencia de energía en forma de calor.

### Tipos de cambios de fase

```
                     Sublimación
                   ↗           ↘
              SÓLIDO ←→ LÍQUIDO ←→ GAS
                   ↘           ↗
                  Deposición
        Fusión ↑↓ Solidificación   Vaporización ↑↓ Condensación
```

| Cambio de Fase | Dirección        | Absorbe/Libera Calor |
| -------------- | ---------------- | -------------------- |
| Fusión         | Sólido → Líquido | Absorbe              |
| Solidificación | Líquido → Sólido | Libera               |
| Vaporización   | Líquido → Gas    | Absorbe              |
| Condensación   | Gas → Líquido    | Libera               |
| Sublimación    | Sólido → Gas     | Absorbe              |
| Deposición     | Gas → Sólido     | Libera               |

> La vaporización puede ocurrir como:
>
> - **Ebullición**: En toda la masa del líquido cuando alcanza su temperatura de ebullición.
> - **Evaporación**: En la superficie libre del líquido a cualquier temperatura.

## Calor Latente

El calor latente es la energía necesaria para cambiar de fase una sustancia sin cambiar su temperatura. Se expresa en unidades de energía por masa (kJ/kg).

```
Temperatura (°C)
    ^
100 |              ********
    |             *
    |            *
    |           *
    |          *
    |         *
 0  |********
    +--------------------------> Tiempo
       Fase   Cambio  Fase  Cambio  Fase
      Sólida  Fusión Líquida Vapor  Gas

      Calor    Calor   Calor
    Sensible  Latente Sensible
```

### Valores típicos para el agua (a presión atmosférica)

| Cambio de Fase | Calor Latente (kJ/kg) | Temperatura (°C) |
| -------------- | --------------------- | ---------------- |
| Fusión         | 334                   | 0                |
| Vaporización   | 2257                  | 100              |

## Propiedades importantes durante los cambios de fase

### Punto de saturación

Una sustancia se encuentra en estado de **saturación** cuando coexisten dos fases en equilibrio.

```
┌───────────────────┐    ┌───────────────────┐
│ Líquido Saturado  │    │  Vapor Saturado   │
│                   │    │                   │
│ Punto donde el    │    │ Punto donde el    │
│ líquido comienza  │    │ vapor comienza    │
│ a vaporizarse     │    │ a condensarse     │
└───────────────────┘    └───────────────────┘
```

### Punto triple y punto crítico

- **Punto triple**: Estado donde las tres fases (sólido, líquido y vapor) coexisten en equilibrio. Para el agua ocurre a 0.01°C y 0.6113 kPa.

- **Punto crítico**: Estado donde las fases líquida y vapor se vuelven indistinguibles. Por encima del punto crítico no existe distinción entre líquido y gas. Para el agua el punto crítico ocurre a 374°C y 22.064 MPa.

## Ejemplos prácticos

### Ejemplo 1: Cálculo de energía en cambios de fase

**Problema**: Calcular la energía necesaria para convertir 2 kg de hielo a -10°C en vapor a 120°C a presión atmosférica.

**Solución**: Necesitamos considerar cinco etapas:

1. Calentamiento del hielo de -10°C a 0°C
2. Fusión del hielo a 0°C
3. Calentamiento del agua de 0°C a 100°C
4. Vaporización del agua a 100°C
5. Sobrecalentamiento del vapor de 100°C a 120°C

**Cálculos**:

- Q₁ = m·c_hielo·ΔT = 2 kg × 2.1 kJ/(kg·°C) × 10°C = 42 kJ
- Q₂ = m·h_fusión = 2 kg × 334 kJ/kg = 668 kJ
- Q₃ = m·c_agua·ΔT = 2 kg × 4.18 kJ/(kg·°C) × 100°C = 836 kJ
- Q₄ = m·h_vaporización = 2 kg × 2257 kJ/kg = 4514 kJ
- Q₅ = m·c_vapor·ΔT = 2 kg × 1.86 kJ/(kg·°C) × 20°C = 74.4 kJ

**Total**: Q = Q₁ + Q₂ + Q₃ + Q₄ + Q₅ = 42 + 668 + 836 + 4514 + 74.4 = 6134.4 kJ

### Ejemplo 2: Temperatura durante cambio de fase

**Problema**: ¿Por qué la temperatura permanece constante durante un cambio de fase a pesar de que se está añadiendo calor?

**Respuesta**: Durante un cambio de fase, la energía añadida se utiliza para romper los enlaces entre las moléculas en lugar de aumentar su energía cinética (temperatura). Esta energía se almacena como energía potencial en la nueva estructura molecular, y sólo cuando se completa el cambio de fase, la adición de más calor resulta en un aumento de temperatura.

## Resumen

- **Sustancia pura**: Material con composición química homogénea e invariable
- **Fases**: Sólido, líquido y gas (diferentes estados de la materia)
- **Cambios de fase**: Transformaciones físicas entre estados a temperatura constante
- **Calor latente**: Energía necesaria para cambiar de fase sin cambiar temperatura
- **Puntos clave**: Punto triple (coexistencia de tres fases) y punto crítico (desaparición de distinción líquido-gas)

---

## Enlaces a otros temas relacionados

- [Diagramas de Fase](diagramas_fase.md)
- [Tablas de Propiedades](tablas_propiedades.md)
- [Ecuación de Gas Ideal](gas_ideal.md)

## Referencias

- Cengel, Y. A. (2012). Termodinámica, séptima edición. Secciones 3.1, 3.2 y 3.3
- Notas del curso FIS1523 (1-2025)
