import ReleaseCard from "./releaseCard";

export default function Release(){
    return(
        <>
            <div className="release">
                <span className="header">Recent Release</span>
                <div className="container">
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>

                </div>
            </div>
        </>
    )
}
