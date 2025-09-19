interface CaseCardProps {
	img: string;
	figcaption: string;
	year: string;
	title: string;
	description: string;
}

export default function CaseCard(props: CaseCardProps) {
	return (
		<div className="case-card">
			<div className="header-case-card">
				<img src={props.img} alt={`logo ${props.figcaption}`} />
				<figcaption>{props.figcaption}</figcaption>
			</div>
			<div className="case-card-core">
				<p className="year">{props.year}</p>
				<h3>{props.title}</h3>
				<p className="case-content">{props.description}</p>
			</div>
		</div>
	);
}
