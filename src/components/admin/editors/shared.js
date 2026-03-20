"use client";

export function Field({ label, value, onChange, multiline = false }) {
  const cls =
    "w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none";
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      {multiline ? (
        <textarea rows={3} className={cls} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type="text" className={cls} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

export function EditorCard({ title, children, onRemove }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
        {onRemove && (
          <button onClick={onRemove} className="text-xs text-red-400 hover:text-red-300 transition-colors ml-4 shrink-0">
            Remove
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export function SaveButton({ saved, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
        saved ? "bg-green-600 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white"
      }`}
    >
      {saved ? "Saved!" : "Save Changes"}
    </button>
  );
}
