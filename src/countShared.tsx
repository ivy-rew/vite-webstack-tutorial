
function SharedButton({count=0, clicked}) {
    return (
      <button onClick={clicked}>
        Clicked {count} times
      </button>
    );
}

export default SharedButton