interface InfosCardProps {
	h4: string;
	p: string;
}

export default function InfosCard(props: InfosCardProps) {
	return (
		<div className="card">
			<h4>{props.h4}</h4>
			<p>{props.p}</p>
		</div>
	);
}
