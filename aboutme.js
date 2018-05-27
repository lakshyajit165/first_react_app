import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class About extends Component{

	render(){

		return(
			<div className='about-body'>
				<Grid className = 'about-grid'>
					<Cell col={12}>
						<h2>About Me</h2>
						<img 
							src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
							alt='avatar'
							style={{height:'250px'}}
						/>
					</Cell>
				</Grid>	
						<Grid className="demo-grid-1">
					        <Cell col={3}></Cell>
					        <Cell col={6} className='about-para'>

					        	<p className='about-content'>
								<i className='left-quote fa fa-quote-left' aria-hidden='true'/>	
								It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
								as opposed to using 'Content here, content here', making it look like readable English. 
								<i className='right-quote fa fa-quote-right' aria-hidden='true'/>	
								</p>	

					        </Cell>
					        <Cell col={3}></Cell>
    					</Grid>
						
						
					
				
			</div>
			)

	}
}
export default About;