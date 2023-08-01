import React from 'react'

export default function Button(props: string) {
  return (
    <button className="btn custom-btn">{props.text}</button>
  )
}
