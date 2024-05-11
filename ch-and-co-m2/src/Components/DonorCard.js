
import { ReactComponent as MailSVG } from "../SVGs/mail.svg";
import { ReactComponent as TimeSVG } from "../SVGs/time.svg";
import { ReactComponent as JobSVG } from "../SVGs/job.svg";
import DeleteButton from "./DeleteButton";

function DonorCard({ currentCardSet, setCurrentCardSet, ...props }) {
	const handleDelete = () => {
		setCurrentCardSet(
			currentCardSet.filter((card) => card.email !== props.email)
		);
	};

	return (
		<div className="group/card h-max-content w-[600px] bg-white rounded-md shadow-lg flex flex-col p-4 gap-4">
			<div className="flex gap-6">
				<div className="flex flex-col w-full">
					<div className="flex justify-between">
						<h1 className="font-bold text-xl">{props.name}</h1>
						<DeleteButton function={handleDelete} group={"card"} />
					</div>
					<div className="flex gap-2">
						<MailSVG className="h-5 w-5" />
						<p>{props.email}</p>
					</div>

					<div className="flex gap-2">
						<JobSVG className="h-5 w-5" />
						<p>{props.tags.Type}</p>
					</div>

					<div className="flex gap-2">
						<TimeSVG className="h-5 w-5" />
						<p>{"Created " + props.creationTime}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonorCard;
