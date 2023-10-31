import React from 'react'

const ProgressBar = ({ title, color, percentage }) => {
  return (
    <div className='my-3'>
      <label htmlFor='' className='text-muted mb-1'>
        {title}
      </label>
      <div class='progress'>
        <div
          class={`progress-bar bg-${color}`}
          role='progressbar'
          style={{ width: `${percentage}%` }}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
