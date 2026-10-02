import React from 'react';

export default function FormField({
  id,
  label,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  isTextArea = false,
  rows = 3,
  icon: Icon,
  autoComplete
}) {
  const inputId = `booking-field-${id}`;
  const errorId = `booking-error-${id}`;

  return (
    <div className="space-y-1">
      <label
        htmlFor={inputId}
        className="block text-xs font-bold uppercase tracking-wider text-[#3a302a] font-label"
      >
        {label} {required && <span className="text-[#c2652a]">*</span>}
      </label>

      <div className="relative">
        {Icon && !isTextArea && (
          <div className="absolute left-3 top-2.5 text-[#605850] pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}

        {isTextArea ? (
          <textarea
            id={inputId}
            rows={rows}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`w-full px-3 py-2 text-xs border rounded-lg bg-[#f6f0e8] transition-colors focus:bg-white focus:outline-none resize-none font-body ${
              error
                ? 'border-[#8c3c3c] focus:border-[#8c3c3c] bg-[#8c3c3c]/5'
                : 'border-[#d8d0c8] focus:border-[#c2652a]'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`w-full ${Icon ? 'pl-9' : 'px-3'} pr-3 py-2 text-xs border rounded-lg bg-[#f6f0e8] transition-colors focus:bg-white focus:outline-none font-body ${
              error
                ? 'border-[#8c3c3c] focus:border-[#8c3c3c] bg-[#8c3c3c]/5'
                : 'border-[#d8d0c8] focus:border-[#c2652a]'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        )}
      </div>

      {error && (
        <p id={errorId} className="text-[11px] text-[#8c3c3c] font-medium flex items-center gap-1 mt-0.5">
          <span>•</span> {error}
        </p>
      )}
    </div>
  );
}
