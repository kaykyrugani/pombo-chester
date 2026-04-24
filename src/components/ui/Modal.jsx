function Modal({ title, children, isOpen = false, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__panel">
        <button className="modal__close" type="button" onClick={onClose} aria-label="Fechar">
          Fechar
        </button>
        {title ? <h2 id="modal-title">{title}</h2> : null}
        {children}
      </div>
    </div>
  )
}

export default Modal
