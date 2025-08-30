# Dynamic Components - Angular v20 Project

Este proyecto demuestra la implementación de componentes **dumb** (presentacionales) y **smart** (contenedores) en Angular v20, siguiendo las mejores prácticas de arquitectura de componentes.

## 🏗️ Arquitectura del Proyecto

### Componentes Dumb (Presentacionales)
Los componentes dumb son responsables únicamente de la presentación y no contienen lógica de negocio:

1. **UserCard** (`/components/dumb/user-card/`)
   - Muestra información de usuario (nombre, email, rol, estado)
   - Emite eventos cuando se selecciona un usuario o cambia su estado
   - No maneja datos directamente, solo recibe inputs y emite outputs

2. **ProductCard** (`/components/dumb/product-card/`)
   - Muestra información de producto (nombre, descripción, precio, rating)
   - Emite eventos cuando se selecciona un producto o se agrega al carrito
   - Incluye indicadores visuales de stock y rating con estrellas

3. **NotificationBanner** (`/components/dumb/notification-banner/`)
   - Muestra notificaciones del sistema con diferentes tipos (success, warning, error, info)
   - Soporta auto-dismiss y marcado como leído
   - Emite eventos cuando se descarta o marca como leído

### Componente Smart (Contenedor)
El componente smart orquesta los componentes dumb y maneja toda la lógica de negocio:

1. **Dashboard** (`/components/smart/dashboard/`)
   - Coordina todos los componentes dumb
   - Maneja el estado de la aplicación (usuarios, productos, notificaciones, carrito)
   - Procesa eventos emitidos por los componentes dumb
   - Contiene datos mock para demostración

## 🎨 Características de Diseño

- **Diseño Consistente**: Utiliza CSS variables para colores, espaciado y tipografía
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Moderno**: Incluye animaciones, transiciones y efectos visuales
- **Accesible**: Cumple con estándares de accesibilidad web

## 🚀 Funcionalidades

### Gestión de Usuarios
- Visualización de usuarios con tarjetas informativas
- Cambio de estado activo/inactivo
- Selección de usuario para ver detalles
- Indicadores visuales de rol y estado

### Catálogo de Productos
- Grid de productos con información detallada
- Sistema de rating visual con estrellas
- Indicadores de stock disponible
- Funcionalidad de carrito de compras

### Sistema de Notificaciones
- Diferentes tipos de notificaciones (success, warning, error, info)
- Auto-dismiss para notificaciones de éxito
- Marcado como leído
- Animaciones de entrada y salida

### Dashboard Interactivo
- Estadísticas en tiempo real
- Layout responsive con grid system
- Integración fluida entre componentes

## 🛠️ Tecnologías Utilizadas

- **Angular v20.2.0** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **CSS Grid & Flexbox** - Layout moderno
- **CSS Variables** - Sistema de diseño consistente

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── dumb/
│   │   │   ├── user-card/
│   │   │   ├── product-card/
│   │   │   └── notification-banner/
│   │   └── smart/
│   │       └── dashboard/
│   ├── models/
│   │   ├── user.model.ts
│   │   ├── product.model.ts
│   │   └── notification.model.ts
│   ├── app.ts
│   ├── app.html
│   └── app.scss
├── styles.scss
└── main.ts
```

## 🚀 Cómo Ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

4. **Ejecutar tests:**
   ```bash
   npm test
   ```

## 🎯 Principios de Diseño Implementados

### Separación de Responsabilidades
- **Componentes Dumb**: Solo presentación, sin lógica de negocio
- **Componentes Smart**: Lógica de negocio y coordinación de componentes

### Reutilización
- Componentes modulares que pueden ser reutilizados en diferentes contextos
- Interfaces TypeScript bien definidas para props y eventos

### Mantenibilidad
- Código limpio y bien estructurado
- Estilos organizados con CSS variables
- Nomenclatura consistente

### Escalabilidad
- Arquitectura que permite agregar fácilmente nuevos componentes
- Sistema de diseño consistente y extensible

## 🔧 Personalización

### Colores
Los colores se pueden personalizar modificando las variables CSS en `src/styles.scss`:

```scss
:root {
  --primary-color: #3f51b5;
  --secondary-color: #ff9800;
  --success-color: #4caf50;
  --warning-color: #ff9800;
  --error-color: #f44336;
  --info-color: #2196f3;
}
```

### Espaciado
El sistema de espaciado se puede ajustar modificando las variables de spacing:

```scss
:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

## 📱 Responsive Design

El proyecto incluye breakpoints para diferentes tamaños de pantalla:
- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

## 🧪 Testing

El proyecto incluye archivos de test para cada componente:
- `*.spec.ts` - Tests unitarios con Jasmine
- `*.e2e-spec.ts` - Tests end-to-end

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, asegúrate de:
1. Seguir el estilo de código existente
2. Agregar tests para nuevas funcionalidades
3. Actualizar la documentación según sea necesario

---

**Desarrollado con ❤️ usando Angular v20**
