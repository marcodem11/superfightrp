import { rolesPermissions } from "../data/content";

export default function RolesMatrix() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <table className="min-w-full text-left text-sm text-slate-200">
        <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
          <tr>
            <th className="pb-3 pr-4">Ruolo</th>
            <th className="pb-3 pr-4">Cosa puo fare</th>
            <th className="pb-3">Comandi associati</th>
          </tr>
        </thead>
        <tbody>
          {rolesPermissions.matrix.map((row) => (
            <tr key={row.role} className="border-t border-white/10 align-top">
              <td className="py-3 pr-4 font-semibold text-novaWhite">{row.role}</td>
              <td className="py-3 pr-4">{row.can}</td>
              <td className="py-3 text-neonBlue">{row.commands}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
