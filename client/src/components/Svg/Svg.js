import React from 'react';

function SVG() {
	return (

		<div class="svglogo">
			<div class="centered"><div class="neon">Coder Arcade</div></div>

			<svg>
				<defs>

					<filter id="stroke">
						<feMorphology operator="dilate" radius="1"
							in="SourceGraphic" result="outside" />
						<feMorphology operator="dilate" radius="2"
							in="outside" result="thickened" />
						<feComposite operator="out" in2="SourceGraphic" in="thickened" result="stroke" />

					</filter>

					<filter id="inner-glow" >
						<feFlood flood-color="#e10b8d" />
						<feComposite in2="SourceAlpha" operator="out" />
						<feGaussianBlur stdDeviation="0.5" result="blur" />
						<feComposite operator="atop" in2="SourceGraphic" />

					</filter>

					<filter id="outer-glow" >

						<feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />


						<feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />


						<feFlood flood-color="#db0273" result="glowColor" />


						<feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />


						<feMerge>
							<feMergeNode in="softGlow_colored" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>

					</filter>

					<filter id="outer-glow1" >

						<feMorphology operator="dilate" radius="20" in="SourceAlpha" result="thicken" />


						<feGaussianBlur in="thicken" stdDeviation="25" result="blurred" />


						<feFlood flood-color="#C0722C" result="glowColor" />


						<feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />


						<feMerge>
							<feMergeNode in="softGlow_colored" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>

					</filter>
				</defs>


			</svg>
		</div>
	)
};
export default SVG;