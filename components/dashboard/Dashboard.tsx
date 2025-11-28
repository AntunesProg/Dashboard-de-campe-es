'use client'

import { useState } from 'react'
import dataset from '@/data/dataset.json'

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<any | null>(null)

  const filtered = dataset.filter(item =>
    item.apiname.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Teste do JSON</h2>

      <input
        type="text"
        placeholder="Buscar apiname"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: 8, marginBottom: 12, width: 240 }}
      />

      {filtered.map((item, i) => (
        <div
          key={i}
          onClick={() => setSelected(item)}
          style={{
            cursor: 'pointer',
            padding: 6,
            background: '#000000',
            marginBottom: 6
          }}
        >
          {item.apiname}
        </div>
      ))}

      {selected && (
        <div style={{ marginTop: 20 }}>
          <h3>Selecionado</h3>
          <p>apiname: {selected.apiname}</p>
        </div>
      )}
    </div>
  )
}
