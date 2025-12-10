export default function SimpleSelect({ changeAlgorithm }) {

  const handleChange = (e) => {
    changeAlgorithm(parseInt(e.target.value));
  };

  return (
    <select
      className="px-3 py-2 bg-slate-900/60 text-white border border-slate-700 rounded-md focus:ring-2 focus:ring-indigo-300"
      onChange={handleChange}
    >
      <option value={0}>FCFS</option>
      <option value={1}>SJF</option>
      <option value={2}>Priority Scheduling</option>
      <option value={3}>Round Robin</option>
    </select>
  );
}
