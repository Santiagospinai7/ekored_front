export default function CardMenu({ title, image }) {
  return (
    <>
      <div className="shadow bg-white dark:bg-slate-900 px-6 py-4 rounded-lg">
        <div className="container-fluid">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                  {image}
                </div>
              </div>
              {/* round border and green background color and inside the title */}
              <div className="mx-8">
                <button className="dashboard-button px-8 py-1 rounded-xl">
                  <h5 className="text-xl font-bold">{title}</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
