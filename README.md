# useViewportSize

React хук для отслеживания текущих размеров окна браузера.
Автоматически обновляет значения при изменении размеров viewport.

## Быстрый старт

```javascript
import { useViewportSize } from './hooks/useViewportSize';

function App() {
  const { width, height } = useViewportSize();

  return (
    <div>
      Размер окна: {width} × {height}px
    </div>
  );
}
```

## Примеры использования

### Адаптивный рендеринг

```javascript
const { width } = useViewportSize();

if (width < 768) {
  return <MobileView />;
} else if (width < 1024) {
  return <TableView />;
} else {
  return <DesktopView />;
}
```

## Отслеживание изменений

```javascript
useEffect(() => {
  console.log(`Окно изменилось: ${width}×${height}`);
}, [width, height]);
```

## API

### useViewportSize()

Возвращает объект с полями:

- `width` (number) — ширина viewport в пикселях
- `height` (number) — высота viewport в пикселях

### Особенности

- Значения обновляются при изменении размеров окна
- Поддерживается изменение ориентации на мобильных
- Используется `Math.floor()` для целых чисел

## Когда использовать

- Динамическое изменение стилей
- Логирование изменений размеров окна
