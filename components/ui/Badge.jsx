const colors = {
  'In Progress': 'bg-blue-100 text-blue-600',
  'Complete': 'bg-green-100 text-green-600',
  'Pending': 'bg-yellow-100 text-yellow-600',
}

export default function Badge({ status }) {
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium ${colors[status] || 'bg-gray-200 text-gray-700'}`}>
      {status}
    </span>
  )
}
