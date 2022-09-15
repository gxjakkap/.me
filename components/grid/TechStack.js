export default function TechStackGrid({techStackDataArray}){
    return (
      <div className="grid grid-cols-2 gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {techStackDataArray.map(techData => (
          <div key={techData.name} className="card bg-base-100 dark:bg-gray-800 shadow-xl">
            <div className="card-body pb-1 mt-0 items-center text-center">
              <h2 className="card-title">{ techData.name }</h2>
            </div>
            <figure className="px-2 pt-2 pb-5">
              <picture>
                <img src={techData.image} alt={`${techData.name}'s icon`} className="rounded-xl w-16 h-16 mx-auto" />
              </picture>
            </figure>
          </div>
        ))}
      </div>
      )
}

export function TechStackGridForProjectPage({techStackDataArray}){
  return (
    <div className="grid grid-cols-2 gap-6 mt-1 sm:mt-9 md:mt-13 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {techStackDataArray.map(techData => (
          <div key={techData.name} className="card bg-base-100 dark:bg-gray-800 shadow-xl">
            <div className="card-body pb-1 mt-0 items-center text-center">
              <h2 className="card-title">{ techData.name }</h2>
            </div>
            <figure className="px-2 pt-2 pb-5">
              <picture>
                <img src={techData.image} alt={`${techData.name}'s icon`} className="rounded-xl w-16 h-16 mx-auto" />
              </picture>
            </figure>
          </div>
        ))}
      </div>
    )
}