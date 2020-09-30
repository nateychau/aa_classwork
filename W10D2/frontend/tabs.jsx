import React from 'react';

class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        return (
            <div className="tab-header">
                <ul className= "tab-list">
                    {this.props.tabs.map( (tab, idx) => {
                        return <h1 className='tab' onClick={() => this.setState({selectedIndex: idx})} key = {idx}>{tab.title}</h1>
                    })}
                    <article className='tab-content'>{this.props.tabs[this.state.selectedIndex].content}</article>
                </ul>
            </div>
        )
    }
}




export default Tabs;