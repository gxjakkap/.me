import { GraduationCaps, Location, Calendar } from "../svgs/educationicons"
export default function EducationGrid({educationDataArray}){
    return (
      <div className="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {educationDataArray.map(education => (
            <div key={education.id} className="p-4 bg-white shadow-md rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                { education.name }
              </h3>
              <ul className="mt-3 space-y-1 text-gray-500 md:text-lg">
                <li className="flex items-center">
                  <GraduationCaps className="w-5 h-5 text-indigo-600" />
                  <p className="ml-2"><a href={education.institutionWebsite} target="_blank" rel="noreferrer">{ education.institution }</a></p>
                </li>
                <li className="flex items-center">
                  <Location className="w-5 h-5 text-indigo-600" />
                  <p className="ml-2">{ education.place }</p>
                </li>
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <p className="ml-2">{ education.timespan }</p>
                </li>
              </ul>
            </div>
          ))
        }
      </div>
      
    )
  }