import React, { Component } from 'react';

import './video.css';

export default class Video extends Component {

	state = {
		pause: this.props.pause
	}

	togglePlay() {
    if (this.state.pause) {
      this.video.pause()
    } else {
      this.video.play()
    }
  }

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.pause !== prevState.pause){
			return {pause: nextProps.pause}
		}
		return null;
	}

	componentDidUpdate() {
		this.togglePlay()
	}

	setRef = element => {
		this.video = element
	}

	render() {
		const {handleLoadedMetaData, handleTimeUpdate, handleSeeking, handleSeeked} = this.props;
		return(
			<div className="Video">
				<video
					autoPlay={this.props.autoplay}
					src={this.props.src}
					ref={this.setRef}
					onLoadedMetadata={handleLoadedMetaData}
					onTimeUpdate={handleTimeUpdate}
					onSeeking={handleSeeking}
					onSeeked={handleSeeked}
				/>
			</div>
		)
	}
}