import React from 'react'

const EducationAccord = ({
  collapseId,
  headerId,
  degName,
  description,
  year,
}) => {
  return (
    <>
      <div class='accordion' id='accordionExample'>
        <div class='accordion-item'>
          <h2 class='accordion-header' id={`${headerId}`}>
            <button
              class='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#${collapseId}`}
              aria-expanded='true'
              aria-controls={`${collapseId}`}
            >
              {degName}
            </button>
          </h2>
          <div
            id={`${collapseId}`}
            class='accordion-collapse collapse'
            aria-labelledby={`#${headerId}`}
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              {description}
              <br />
              <small className='text-muted'>{year}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationAccord
