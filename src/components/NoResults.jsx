// assets
import { noResults } from '../assets';

export default function NoResults({ extraMessages }) {
  return (
    <div className="flex max-md:flex-col gap-2 items-center justify-center bg-primary rounded-md border-2 border-primary-error p-5">
      <img src={noResults} alt="no_results" className="w-[150px]" />
      <div className="text-primary flex flex-col gap-4">
        <p className="font-semibold text-lg">There is no results for your search. You may try:</p>
        <ol className="list-disc pl-10">
          {extraMessages?.map((message) => <li>{ message}</li>)}
          <li>Change filters</li>
          <li>Check your network</li>
        </ol>
      </div>
    </div>
  );
}
