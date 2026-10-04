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
          className="block text-[11px] font-bold uppercase tracking-wider text-[#0F172A] font-label"
        >
          {label} {required && <span className="text-[#2563EB] ml-0.5">*</span>}
        </label>
        {required && (
          <span className="text-[10px] text-[#64748B] font-medium">Required</span>
        )}
      </div>

      <div className="relative group">
        {Icon && !isTextArea && (
          <div className="absolute left-3.5 top-3 text-[#64748B] group-focus-within:text-[#2563EB] transition-colors pointer-events-none">
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
            className={`w-full px-4 py-3 text-xs border rounded-xl bg-[#FAFCFF] text-[#0F172A] placeholder-[#94A3B8] transition-all focus:bg-white focus:outline-none resize-none font-body ${
              error
                ? 'border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 bg-[#FEF2F2]'
                : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 shadow-xs'
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
            className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-4 py-2.5 text-xs border rounded-xl bg-[#FAFCFF] text-[#0F172A] placeholder-[#94A3B8] transition-all focus:bg-white focus:outline-none font-body ${
              error
                ? 'border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 bg-[#FEF2F2]'
                : 'border-[#E2E8F0] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 shadow-xs'
            } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          />
        )}
      </div>

      {error && (
        <p id={errorId} className="text-[11px] text-[#DC2626] font-medium flex items-center gap-1.5 pt-0.5 animate-in fade-in duration-150">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] inline-block shrink-0"></span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
