export default function YouTube({ videoId, width = 560, height = 315 }) {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
    />
  );
}

