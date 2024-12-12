"use client";

import { InlineWidget } from 'react-calendly';

const CalendlyEmbed = ({ url }) => {
	return (
	<div style={{ height: '700px' }}>
		<InlineWidget url={url} />
	</div>
	);
};

export default CalendlyEmbed;
	