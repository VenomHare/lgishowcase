import './../src/styles/display.css'
const Basics = () => {
    return (<div className='basichead' id='basics'>
        <h2 className='basicTitle'>Basics</h2>
        <div className="basicdetails">
            Welcome to the basics section, where you will learn the fundamentals of Smackdown! Here Comes the Pain. Whether it's the essential controls or the information on the types of matches you can participate in that you fancy, you have come to the right place.
        </div>
        <h3 className='basicSubTitle'>Basic Controls</h3>
        <div className='blockcontainer'>

            <div className='basicBlock'>
                <h3 className='head3'>In the Ring</h3>
                <div>Control Superstar - Directional Buttons or Left Analog Stick</div>
                <div>
                    Run - Triangle
                </div>
                <div>

                    Initiate Grapple - Circle + Directional Button
                </div>
                <div>
                    Power Grapple - Circle + Up
                </div>
                <div>

                    Submission Grapple - Circle + Down
                </div>
                <div>

                    Signature Grapple - Circle + Left
                </div>
                <div>

                    Quick Grapple - Circle + Right
                </div>
                <div>

                    Perform Grapple Move (after grapple initiated) - Circle + Directional
                </div>
                <div>

                    Perform Strike Move (after grapple initiated) - X + Directional
                </div>
                <div>

                    Striking Attack - X
                </div>
                <div>

                    Irish Whip - Circle
                </div>
                <div>

                    Counter Striking Attack - L2
                </div>
                <div>

                    Counter Grapple Attack - R2
                </div>
                <div>

                    Counter Smackdown! Move - L2 + R2
                </div>
                <div>

                    Taunt - Right Analog Stick
                </div>
                <div>

                    Pin (adversary on mat) - Circle + Down
                </div>
                <div>

                    Layeth the Smackdown! (only when Smackdown! meter is full) - L1
                </div>
                <div>

                    Second Finisher (if superstar has multiple finishers in same situation) - L1 + Directional
                </div>
                <div>

                    Pick up weapon or object - Square
                </div>
                <div>

                    Action (enter/exit ring, cage, onto table, etc) - Triangle + Directional toward object
                </div>
                <div>

                    Change Focus - R1
                </div>
                <div>
                    Pause - Start
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Facing Adversary</h3>
                <div>
                    Irish Whip - Circle
                </div>
                <div>

                    Striking Attacks - X / X + Directional
                </div>
                <div>

                    Grapple Attacks (min. damage) - Circle / Circle + Directional
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Behind Adversary</h3>
                <div>
                    Irish Whip - Circle

                </div>
                <div>

                    Fake Irish Whip - Circle, Square
                </div>
                <div>

                    Rear Grapple Attacks (min. damage) - Circle / Circle + Directional
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Adversary on Mat</h3>
                <div>
                    Lift adversary into Grapple - Circle

                </div>
                <div>

                    Pin adversary - Circle + Down
                </div>
                <div>

                    Break your own pin - Square
                </div>
                <div>

                    Upper body grapple attacks - Circle + Directional
                </div>
                <div>

                    Lower body grapple attacks - Circle + Directional
                </div>
                <div>

                    Lift adversary (facing adversary's back) - Circle + Circle
                </div>
                <div>

                    Striking Attacks - X / X + Left or Right / X + Down or Up
                </div>
                <div>

                    Drag Adversary - Hold Circle
                </div>
                <div>

                    Running Ground Strike - Triangle + Circle + X
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Turnbuckle/Ropes</h3>
                <div>

                    Enter/Exit Ring - Square + Directional toward ropes
                </div>
                <div>

                    Climb Turnbuckle - Triangle + Directional toward corner
                </div>
                <div>

                    Dismount Turnbuckle - Square
                </div>
                <div>

                    Rope Attack (adversary on ropes) - Circle + Directional
                </div>
                <div>

                    Irish Whip to Ropes - Circle + Directional toward ropes
                </div>
                <div>

                    Adversary's Back to Turnbuckle - Circle + Up, Down, Left, or Right
                </div>
                <div>

                    Adversary Facing Turnbuckle - Circle + Up, Down, Left, or Right
                </div>
                <div>

                    Adversary Sitting on Turnbuckle - Circle + Up, Down, Left, or Right
                </div>
                <div>

                    Remove Turnbuckle - Square + Directional toward turnbuckle
                </div>
                <div>

                    Tag Team Turnbuckle Attacks (in tag team's corner while adversary is against turnbuckle) - Circle + Up, Down, Left, or Right
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Running Maneuvers</h3>
                <div>
                    Running Grapple (toward adversary's face/back) - Triangle, Circle + Directional
                </div>
                <div>

                    Running Strike - Triangle, X + Directional
                </div>
                <div>

                    Counter Irish Whip- R2 while at ropes
                </div>

            </div>
            <div className="basicBlock">
                <h3 className="head3">High-Flying Maneuvers</h3>
                <div>
                    Diving Attacks - X / X + Left, Right, Up, or Down

                </div>
                <div>

                    Counter High-Flying Moves - L2
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Weapon Attacks</h3>
                <div>

                    Get weapon from under apron - Circle + Directional toward center of apron
                </div>
                <div>

                    Pick Up/Drop Weapon - Square
                </div>
                <div>

                    Weapon Grapple - X + Up or Down
                </div>

                <div>

                    Weapon Strike - X + Left or Right
                </div>
                <div>

                    Running Weapon Attack - Triangle + Directional toward adversary, strike adversary w/ X button
                </div>
                <div>

                    Weapon Special - L1 while holding a chair
                </div>
                <div>

                    Throw Weapon - Circle
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Tag Team Maneuvers</h3>
                <div>
                    Get on outside of apron - Square + Directional toward corner

                </div>
                <div>

                    Call for Tag on apron - Square
                </div>
                <div>

                    Tag Partner - Square + Directional toward partner
                </div>
                <div>

                    Call in Partner - Right Analog Stick
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Ladder Match Maneuvers</h3>
                <div>
                    Pick up Ladder - Square (near ladder)

                </div>
                <div>

                    Stand Ladder - Square (while holding ladder)
                </div>
                <div>

                    Place Ladder in Turnbuckle - Square + Directional toward turnbuckle
                </div>
                <div>

                    Climb Ladder - Square + Directional
                </div>
                <div>

                    Diving Attack - X (while standing on ladder)
                </div>
                <div>

                    Reach for Belt - Circle (while standing on ladder)
                </div>
                <div>

                    Jump for Belt - Circle + Directional (while standing on ladder)
                </div>
                <div>

                    Climb Down Ladder - Square (while standing on ladder)
                </div>
                <div>

                    Knock Ladder Over - Square (standing near ladder)
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Table Match Maneuvers</h3>
                <div>
                    Pick up Table - Square (near table)

                </div>
                <div>

                    Stand Table - Square (while holding table)
                </div>
                <div>

                    Place Table in Turnbuckle - Square + Directional toward turnbuckle
                </div>
                <div>

                    Throw Adversary onto Table - Hold table and press Up or Down + X
                </div>
                <div>

                    Grapple Adversary through Table - Circle (standing on table w/adversary)
                </div>
                <div>

                    Climb onto Table - Triangle (run toward table)
                </div>
                <div>

                    Dive from Table Attack - X (while standing on table w/o adversary)
                </div>
                <div>

                    Recover - Directional buttons (repeatedly)
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Cage Match/ Hell in a Cell Maneuvers</h3>
                <div>
                    Climb Cage - Square + Directional (toward cage)

                </div>
                <div>

                    Climb Cell - Triangle
                </div>
                <div>

                    Dive from Cage Attack - X (on top of cage)
                </div>
                <div>

                    Push adversary off of Cage (Hell in a Cell) - Circle (near edge of top of cage)
                </div>
                <div>

                    Open cage door - Triangle + Directional button
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Bra-and-Panties Match Maneuvers</h3>
                <div>

                    Remove garments - Circle + Down (from behind, adversary groggy, or on ground)
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Special Referee Maneuvers</h3>
                <div>
                    Count Pin - Square (during pin fall)

                </div>
                <div>

                    Count Ring Out - Square (during Ring Out)
                </div>
                <div>

                    Count Disqualification - Square (during weapon attack)
                </div>
                <div>

                    Count Give Up - Square (during submission)
                </div>
            </div>
            <div className="basicBlock">
                <h3 className="head3">Elimination Chamber Maneuvers</h3>
                <div>
                    Climb Chamber Wall - Square + Directional toward wall

                </div>
                <div>

                    Climb on top of Chamber - Square + Directional while on turnbuckle
                </div>
                <div>

                    Perform Diving Attack - X while hanging on chamber wall
                </div>
                <div>

                    Pull down Adversary - Circle while adversary hangs on wall
                </div>
            </div>
        </div>
        <h2 className='basicSubTitle'>Match Type</h2>
        <div className="blockcontainer">

            <div className="basicBlock">
                <h3 className="head3">  Tag Match</h3>
                <div>

                    Win Conditions - Pin Fall, Submission, or Disqualification
                </div>
                <div>

                    Description: Two Teams of two take on one another for the glory!
                </div>

            </div>
            <div className="basicBlock">
                <h3 className="head3">Handicap Match</h3>
                <div>

                    Win Conditions - Pin Fall, Submission, or Disqualification
                </div>
                <div>

                    Description - One Superstar must face two, or sometimes even three opponents at once! Scary!
                </div>
            </div>
            <div className="basicBlock"><h3 className="head3">
                Hardcore Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Royal Rumble

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Survival Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Three Stages of Hell

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Bra & Panties Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Cage Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Elimination Chamber Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Elimination Tag Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                First Blood Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Hell in a Cell Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Ironman Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Ladder Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Last Man Standing Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Lumber Jack Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Slobber Knocker Match

            </h3></div>


            <div className="basicBlock"><h3 className="head3">
                Special Referee Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                Submission Match

            </h3></div>

            <div className="basicBlock"><h3 className="head3">
                Table Match

            </h3></div>
            <div className="basicBlock"><h3 className="head3">
                TLC Match

            </h3></div>
        </div>

    </div>)
}

export default Basics