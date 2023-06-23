export default function ChildLoader() {
  return (
    <div className="box-container ">
      <div className="box bg-primary-container rounded-b-xl flex-col">
        <div className="animate-pulse pt-10">
          <div className="flex gap-2 w-full">
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2" />
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2 flex-1" />
          </div>
          <div className="flex gap-2">
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2 flex-1" />
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2" />
          </div>
          <div className="mt-10 bg-gray-200 h-[300px] rounded-md mb-2" />
        </div>
      </div>
    </div>
  );
}
