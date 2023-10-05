export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div>
			<h3
				className="text-3xl mb-3 leading-snug"
				dangerouslySetInnerHTML={{ __html: title }}
			></h3>

			<div
				className="text-lg leading-relaxed mb-4"
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
		</div>
	);
}
