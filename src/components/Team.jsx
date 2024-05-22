import { TeamCard } from "@/utils/TeamCard"
import teamData from "../assets/data/team.json"
export const Team = () => {
    return (
        <section className="cropper-sub2">
            <h2 className="heading-primary--main white-head3" id="ot">Our Team</h2>
            <div className="team-lead-main">
                {teamData.map((member, index) => (
                    <TeamCard member={member} key={index} />
                ))}
            </div>
        </section>
    )
}