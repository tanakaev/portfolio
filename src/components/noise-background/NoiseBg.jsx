import { useEffect, useRef, memo } from "react";
import styles from "../../assets/styles/NoiseBg.module.css";

const NoiseBackground = memo(({ pixelSize = 0.5 }) => {
  const canvasRef = useRef(null);
  const imageDataRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId;

    const animate = () => {
      const imageData =
        imageDataRef.current ||
        context.createImageData(canvas.width, canvas.height);
      imageDataRef.current = imageData;
      const { data } = imageData;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.floor(Math.random() * 256);
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.putImageData(imageData, 0, 0);
      context.scale(pixelSize / 100, pixelSize / 100);
      context.drawImage(canvas, 0, 0);
      context.scale(100 / pixelSize, 100 / pixelSize);

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.noise_bg}
      width={100}
      height={100}
    />
  );
});

export default NoiseBackground;
