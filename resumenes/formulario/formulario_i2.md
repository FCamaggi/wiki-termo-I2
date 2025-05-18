# Formulario Interrogación 2 - FIS1523

## Primer Semestre 2025

### Sustancias Puras y Cambios de Fase

- **Calor latente**:
  - Fusión (hielo): $h_{fusión} = 334 \text{ kJ/kg}$
  - Vaporización (agua): $h_{vaporización} = 2257 \text{ kJ/kg}$
- **Cambio de fase a presión constante**:
  - $Q = m \cdot h_{latente}$

### Tablas de Propiedades

- **Cálculo de propiedades en mezcla líquido-vapor**:

  - $v = v_f + x \cdot (v_g - v_f)$
  - $u = u_f + x \cdot (u_g - u_f)$
  - $h = h_f + x \cdot (h_{fg})$
  - $s = s_f + x \cdot (s_g - s_f)$

- **Calidad de vapor**:
  - $x = \frac{m_{vapor}}{m_{total}} = \frac{v - v_f}{v_g - v_f} = \frac{h - h_f}{h_g - h_f}$

### Gas Ideal

- **Ecuación de estado**:
  - $PV = nRT$
  - $Pv = RT$
- **Constante universal de los gases**:
  - $R_{universal} = 8.314 \text{ J/(mol·K)}$
- **Constantes específicas para gases comunes [J/(kg·K)]**:
  - Aire: $R = 287$
  - Nitrógeno (N₂): $R = 297$
  - Oxígeno (O₂): $R = 260$
  - Dióxido de carbono (CO₂): $R = 189$
  - Vapor de agua (H₂O): $R = 462$

### Factor de Compresibilidad

- **Definición**:

  - $Z = \frac{Pv}{RT}$

- **Propiedades reducidas**:
  - $T_r = \frac{T}{T_c}$
  - $P_r = \frac{P}{P_c}$

### Relaciones para Gases Ideales

- **Calores específicos**:
  - $c_p - c_v = R$
  - $\gamma = \frac{c_p}{c_v}$
- **Valores de γ para gases**:

  - Monoatómico (He, Ar): $\gamma = 1.67$
  - Diatómico (O₂, N₂, H₂): $\gamma = 1.4$
  - Poliatómico (CO₂, H₂O): $\gamma = 1.33$

- **Relaciones de energía**:
  - $\Delta u = c_v \Delta T$
  - $\Delta h = c_p \Delta T$

### Primera Ley de la Termodinámica

- **Sistemas cerrados**:

  - $\Delta U = Q - W$
  - $\Delta E = \Delta U + \Delta E_c + \Delta E_p = Q - W$

- **Convención de signos**:
  - $Q > 0$: Calor hacia el sistema
  - $W > 0$: Trabajo del sistema

### Trabajo en Procesos

- **Isobárico (P = constante)**:

  - $W = P(V_2 - V_1)$

- **Isocórico (V = constante)**:

  - $W = 0$

- **Isotérmico (T = constante)**:

  - $W = nRT\ln(\frac{V_2}{V_1}) = nRT\ln(\frac{P_1}{P_2})$

- **Adiabático (Q = 0)**:
  - $W = \frac{P_1V_1 - P_2V_2}{\gamma - 1} = \frac{nR(T_1 - T_2)}{\gamma - 1} = -\Delta U$

### Relaciones para Procesos con Gases Ideales

- **Isobárico (P = constante)**:

  - $\frac{V_2}{V_1} = \frac{T_2}{T_1}$
  - $Q = mc_p(T_2 - T_1) = \Delta H$

- **Isocórico (V = constante)**:

  - $\frac{P_2}{P_1} = \frac{T_2}{T_1}$
  - $Q = mc_v(T_2 - T_1) = \Delta U$

- **Isotérmico (T = constante)**:

  - $P_1V_1 = P_2V_2$
  - $Q = W$

- **Adiabático (Q = 0)**:
  - $P_1V_1^{\gamma} = P_2V_2^{\gamma}$
  - $T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1}$
  - $T_1P_1^{\frac{1-\gamma}{\gamma}} = T_2P_2^{\frac{1-\gamma}{\gamma}}$
  - $\frac{T_2}{T_1} = (\frac{P_2}{P_1})^{\frac{\gamma-1}{\gamma}} = (\frac{V_1}{V_2})^{\gamma-1}$

### Eficiencia

- **Eficiencia térmica**:

  - $\eta_{th} = \frac{W_{neto}}{Q_{entrada}} = 1 - \frac{Q_{salida}}{Q_{entrada}}$

- **Coeficiente de desempeño (refrigeración)**:
  - $COP = \frac{Q_L}{W_{entrada}}$
