import { FaEnvelope } from "react-icons/fa"

export const TeacherCard = ({teacher}) => {
    return (
        <div className="teacher">
            <img loading="lazy" src={teacher.photo} className="photo def" />
            <div className="name tcname">{teacher.name}</div>
            <div className="name1 tcdep">{teacher.department}</div>
            <a href={`mailto:${teacher.email}`} className="ourdiv">
                <FaEnvelope color="#a6720b" className="w-10 h-10 m-auto mb-4 hover:w-12 hover:h-12" />
            </a>
        </div>
    )
}