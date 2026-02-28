export default function MistBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden scale-x-[-1]">
      {/* Base mist */}
      <div className="mist-gradient" />

      {/* Directional light */}
      <div className="mist-light" />

      {/* Grain */}
      <div className="mist-noise" />
    </div>
  );
}