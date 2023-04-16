import { GraduationCaps, Location, Calendar } from "../svgs/educationicons"
export default function EducationGrid({educationDataArray}){
    return (
      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {educationDataArray.map(education => (
            <div key={education.id} className="rounded-xl bg-white p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                { education.name }
              </h3>
              <ul className="mt-3 space-y-1 text-gray-500 md:text-lg">
                <li className="flex items-center">
                  <GraduationCaps className="h-5 w-5 text-indigo-600" />
                  <p className="ml-2"><a href={education.institutionWebsite} target="_blank" rel="noreferrer">{ education.institution }</a></p>
                </li>
                <li className="flex items-center">
                  <Location className="h-5 w-5 text-indigo-600" />
                  <p className="ml-2">{ education.place }</p>
                </li>
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  <p className="ml-2">{ education.timespan }</p>
                </li>
              </ul>
            </div>
          ))
        }
      </div>
      
    )
  }