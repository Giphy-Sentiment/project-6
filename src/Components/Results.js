import React from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Results(props) {
	const scrollToButton = () => {
		scroller.scrollTo("timeline", {
			duration: 1000,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};

	
	return (
		<section className="results" name="results" id="results">
			<div className="wrapper">
				<p>Choose a <span className="specialStyling">GIF</span> that best suits your current emotion:</p>
				<ul className="resultsList">
					{props.arrSlice.map((obj, index) => {
						return (
							<li key={index} className="card">
								<div className="overlay">+</div>
								<img src={obj.url} alt={obj.title} onClick={(e) => {
									props.onSelect(e)
									scrollToButton()}} />
							</li>
						);
					})}
				</ul>
				<div className="regenerateContents">
					<p>Don't like what you see?</p>
					<button onClick={props.handleClick}>Regenerate</button>
				</div>
			</div>
		</section>
	);
}

export default Results;
