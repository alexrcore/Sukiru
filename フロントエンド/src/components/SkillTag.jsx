export function SkillTag({ label, onClick, state }) {
  const colors = {
    selected: {
      border: 'border-purple-700',
      text: 'text-purple-700',
      bg: 'bg-purple-700/10',
    },
    optional: {
      border: 'border-green-700',
      text: 'text-green-700',
      bg: 'bg-green-700/10',
    },
    missing: {
      border: 'border-red-700',
      text: 'text-red-700',
      bg: 'bg-red-700/10',
    },
  }[state] || {
    border: 'border-dark-smoke',
    text: '',
    bg: 'bg-void/80',
  }

  return (
    <button className={`${colors.border} ${colors.bg} py-1 px-4 border-2 rounded-xl transition-transform duration-200 hover:scale-105`} onClick={onClick}>
      <p className={colors.text}>{label}</p>
    </button>
  )
}
