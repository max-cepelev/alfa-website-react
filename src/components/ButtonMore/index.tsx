import React from 'react'
// import './buttonMore.scss'

export default function ButtonMore({ title }: { title: string }) {
  return (
    <button type="submit" className="button-more _icon-arrow">
      {title}
    </button>
  )
}
