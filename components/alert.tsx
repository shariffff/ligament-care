import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '../lib/constants';
// style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"

export default function Alert({ preview }) {
	return (
		<div
		// className={cn('border-b', {
		//   'bg-accent-7 border-accent-7 text-white': preview,
		//   'bg-accent-1 border-accent-2': !preview,
		// })}
		>
			<div className="py-2 text-center text-sm">
				{preview ? (
					<>
						This is a page preview.{' '}
						<a
							href="/api/exit-preview"
							className="underline hover:text-cyan duration-200 transition-colors"
						>
							Click here
						</a>{' '}
						to exit preview mode.
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
