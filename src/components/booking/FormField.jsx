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
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={inputId}
          className="block text-[11px] font-bold uppercase tracking-wider text-[#3a302a] font-label"
        >
          {label} {required && <span className="text-[#c2652a] ml-0.5">*</span>}
        </label>
        {required && (
          <span className="text-[10px] text-[#8c827a] font-medium">Required</span>
        )}
      </div>

      <div className="relative group">
        {Icon && !isTextArea && (
          <div className="absolute left-3.5 top-3 text-[#8c827a] group-focus-within:text-[#c2652a] transition-colors pointer-events-none">
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
            className={`w-full px-4 py-3 text-xs border rounded-xl bg-[#fdfbf7] text-[#3a302a] placeholder-[#a0968c] transition-all focus:bg-white focus:outline-none resize-none font-body ${
              error
                ? 'border-[#8c3c3c] focus:ring-2 focus:ring-[#8c3c3c]/20 bg-[#8c3c3c]/5'
                : 'border-[#d8d0c8]/80 focus:border-[#c2652a] focus:ring-2 focus:ring-[#c2652a]/20 shadow-xs'
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
            className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-4 py-2.5 text-xs border rounded-xl bg-[#fdfbf7] text-[#3a302a] placeholder-[#a0968c] transition-all focus:bg-white focus:outline-none font-body ${
              error
                ? 'border-[#8c3c3c] focus:ring-2 focus:ring-[#8c3c3c]/20 bg-[#8c3c3c]/5'
                : 'border-[#d8d0c8]/80 focus:border-[#c2652a] focus:ring-2 focus:ring-[#c2652a]/20 shadow-xs'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        )}
      </div>

      {error && (
        <p id={errorId} className="text-[11px] text-[#8c3c3c] font-medium flex items-center gap-1.5 pt-0.5 animate-in fade-in duration-150">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8c3c3c] inline-block shrink-0"></span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
