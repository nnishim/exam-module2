import React from 'react'

function Loading() {
	return (
		<>
			<div className="loader_container">
				<div className='loader'>
					<img src="/img/loading.svg" alt="" />
				</div>
			</div>
			<style jsx>
        {`
          .loader_container{
						display: flex;
						align-items: center;
						justify-content: center;
						height: 550px;
						position: relative;
					}
					.loader{
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
					}
        `}
      </style>
		</>
	)
}

export default Loading