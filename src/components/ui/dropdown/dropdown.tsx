import clsx from 'clsx';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from '../button';


type DropdownItem = {
  label: string;
  icon?: ReactNode;
  className?: string;
  onSelect: () => void;
};

type DropdownProps = {
  trigger: ReactNode;
  items: DropdownItem[];
};

export const Dropdown = ({ trigger, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          className={clsx(
            'absolute right-0 top-full mt-1 bg-modal-bg text-fg shadow-lg',
            'rounded-md z-150  p-2',
          )}
        >
          {items.map((item, idx) => (
            <Button
              key={idx}
              variant="ghost"
              className={clsx("w-full justify-start gap-2", item.className)}
              onClick={() => {
                item.onSelect();
                setIsOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
