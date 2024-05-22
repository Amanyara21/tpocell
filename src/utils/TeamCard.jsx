import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export const TeamCard = ({ member }) => (
    <div className="team-lead">
        <img loading="lazy" src={member.photo} className="image" />
        <hr />
        <h2 className="name">{member.name}</h2>
        <h2 className="name name1">{member.position}</h2>
        <hr />
        <div className="ourteam">{member.description}</div>
        <hr />
        <div className="ourlogo gap-16">
            <a href={member.linkedin} className="ourdiv">
                <FaLinkedin color="#a6720b" className="w-10 h-10 hover:w-12 hover:h-12"/>
            </a>
            <a href={`mailto:${member.email}`} className="ourdiv">
                <FaEnvelope color="#a6720b" className="w-10 h-10 hover:w-12 hover:h-12"/>
            </a>
        </div>
    </div>
);
