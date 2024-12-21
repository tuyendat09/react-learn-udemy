import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return (
    <dialog ref={modal} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stop the timer with <strong>X second left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
