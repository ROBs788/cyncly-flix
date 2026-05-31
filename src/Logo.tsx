export default function Logo() {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://w3.org"
      style={{ marginRight: '8px', verticalAlign: 'middle' }}
    >
      {/* Círculo com efeito de borda gradiente ou sólida */}
      <circle cx="12" cy="12" r="10" stroke="#0070f3" strokeWidth="2" />
      {/* Ícone de triângulo interno (Play) */}
      <path d="M10 8.5V15.5L15.5 12L10 8.5Z" fill="#0070f3" />
    </svg>
  );
}
