import React from 'react'
import { createRoot } from 'react-dom/client'
const element = document.getElementById('react')
const root = createRoot(element!)
root.render(<h1>Привет, мир!</h1>)
