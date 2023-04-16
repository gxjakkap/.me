export default function TechStackGrid({techStackDataArray}){
    return (
      <div className="mt-10 grid grid-cols-2 gap-6 sm:mt-12 sm:grid-cols-3 md:mt-16 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        {techStackDataArray.map(techData => (
          <div key={techData.name} className="card bg-base-100 shadow-xl">
            <div className="card-body mt-0 items-center pb-1 text-center">
              <h2 className="card-title">{ techData.name }</h2>
            </div>
            <figure className="px-2 pb-5 pt-2">
              <picture>
                <img src={techData.image} alt={`${techData.name}'s icon`} className="mx-auto h-16 w-16 rounded-xl" />
              </picture>
            </figure>
          </div>
        ))}
      </div>
      )
}

export function TechStackGridForProjectPage({techStackDataArray}){
  return (
    <div className="mt-1 grid grid-cols-2 gap-6 sm:mt-9 sm:grid-cols-3 md:mt-12 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {techStackDataArray.map(techData => (
          <div key={techData.name} className="card bg-base-100 shadow-xl">
            <div className="card-body mt-0 items-center pb-1 text-center">
              <h2 className="card-title">{ techData.name }</h2>
            </div>
            <figure className="px-2 pb-5 pt-2">
              <picture>
                <img src={techData.image} alt={`${techData.name}'s icon`} className="mx-auto h-16 w-16 rounded-xl" />
              </picture>
            </figure>
          </div>
        ))}
      </div>
    )
}