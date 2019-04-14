export default function ToggleGrid(props) {
  const { className, onClickHandler = () => {}, text } = props;  
  return (
    <button
      className={ className } 
      onClick={ onClickHandler } 
    >
    { text }
    </button>
  )
}

// ToggleGrid.displayName = 'ToggleGrid';
