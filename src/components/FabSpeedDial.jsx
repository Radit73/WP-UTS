import { useState } from 'react';

const defaultItems = [
  { icon: '\uD83D\uDCE4', label: 'Upload Foto' },
  { icon: '\uD83E\uDE84', label: 'Buat Story' },
  { icon: '\uD83D\uDDD3\uFE0F', label: 'Jadwalkan' },
];

export const SpeedDial = ({
  items = defaultItems,
  variant = 'accent',
  className = '',
  closedIcon = '+',
  openedIcon = '\u00D7',
  onSelect = () => {},
} = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <div className={`sm-speed-dial ${isOpen ? 'is-open' : ''} ${className}`.trim()}>
      <button
        type="button"
        className={`sm-fab sm-fab--${variant}`}
        onClick={toggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {isOpen ? openedIcon : closedIcon}
      </button>
      <div className="sm-speed-dial__menu" aria-hidden={!isOpen}>
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            className="sm-chip-action"
            onClick={() => {
              onSelect(item);
              close();
            }}
          >
            <span className="sm-chip-action__icon" aria-hidden>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedDial;
