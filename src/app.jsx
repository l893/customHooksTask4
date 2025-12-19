import { useViewportSize } from './hooks';

export const App = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      <div>
        <p>
          Width: {width}px, Height: {height}px
        </p>
      </div>
    </>
  );
};
