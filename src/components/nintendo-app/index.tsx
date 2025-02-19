export default function NintendoApp() {
  const handleTouchStart = () => {
    alert("You touched the box!");
  };

  return (
    <div>
      <button
        onTouchStart={handleTouchStart}
        onClick={handleTouchStart}
        style={{
          fontSize: "10rem",
        }}
      >
        Hello
      </button>
    </div>
  );
}
