import React from 'react'
// import { withRouter } from 'next/router'
import "../styles/styles.scss"
import ToggleGrid from '../components/ToggleGrid'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: true,
    };
    this.onToggleGrid = this.onToggleGrid.bind(this);
  }

  onToggleGrid() {
    this.setState(prevState => ({
      isGrid: !prevState.isGrid
    }));
  }

  render() {
    const { isGrid } = this.state;
    return (
      <div>
        <ToggleGrid
          className='button'
          onClickHandler={ this.onToggleGrid}
          text={ isGrid ? "Grid view" : "Single view"}
          />
        <main className={ isGrid ? "container" : "container single"}>
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
        </main>
      </div>
    )
  }
}

export default App;
