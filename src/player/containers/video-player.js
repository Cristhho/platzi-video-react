import React, { Component } from 'react';
import {connect} from 'react-redux';

import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import Controls from '../components/controls';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {

	state = {
		pause: !this.props.autoplay,
		duration: 0,
		currentTime: 0,
		loading: false,
		volume: 0.5,
		lastVolume: 0.5
	}

	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}

	componentDidMount() {
		this.setState({
			pause: !this.props.autoplay
		})
	}

	handleLoadedMetaData = (event) => {
		this.video = event.target;
		this.video.volume = this.state.volume
		this.setState({
			duration: this.video.duration
		})
	}

	handleTimeUpdate = (event) => {
		this.setState({
			currentTime: this.video.currentTime
		})
	}

	leftPad = (number) => {
		const pad = '00';
		return pad.substring(0, pad.length - number.length) + number;
	}

	formatedTime = (secs) => {
		const minutos = parseInt(secs / 60, 10);
		const segundos = parseInt(secs % 60, 10);
		return `${minutos} : ${this.leftPad(segundos.toString())}`;
	}

	handleProgressChange = (event) => {
		this.video.currentTime = event.target.value;
	}

	handleSeeking = (event) => {
		this.setState({
			loading: true
		})
	}
	handleSeeked = (event) => {
		this.setState({
			loading: false
		})
	}

	handleVolumeChange = (event) => {
		const volume = event.target.value;
		this.video.volume = volume;
		this.setState({
			lastVolume: this.video.volume,
			volume: this.video.volume
		})
	}
	handleVolumeToggle = (event) => {
		const volume = this.video.volume === 0 ? this.state.lastVolume : 0;
		this.setState({
			lastVolume: this.video.volume,
			volume: volume
		})
		this.video.volume = volume
	}

	handleFullScreenClick = (event) => {
		if(!window.fullScreen) {
			this.player.requestFullscreen();
		} else {
			document.mozCancelFullScreen();
		}
	}

	setRef = (element) => {
		this.player = element;
	}

	render() {
		return(
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title
					title={this.props.media.get('title')}
				/>
				<Controls>
					<PlayPause
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<ProgressBar
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}
					/>
					<Timer
						currentTime={this.formatedTime(this.state.currentTime)}
						duration={this.formatedTime(this.state.duration)}
					/>
					<Volume
						volume={this.state.volume}
						handleVolumeToggle={this.handleVolumeToggle}
						handleVolumeChange={this.handleVolumeChange}
					/>
					<FullScreen
						handleFullScreenClick={this.handleFullScreenClick}
					/>
				</Controls>
				<Spinner
					active={this.state.loading}
				/>
				<Video
					autoplay={this.props.autoplay}
					pause={this.state.pause}
          src={this.props.media.get('src')}
          handleLoadedMetaData={this.handleLoadedMetaData}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
				/>
			</VideoPlayerLayout>
		)
	}
}

function mapStateToProps(state, props) {
	return{
		media: state.get('data').get('entities').get('media').get(props.id)
	}
}

export default connect(mapStateToProps)(VideoPlayer);