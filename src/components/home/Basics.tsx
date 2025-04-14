import { useEffect } from 'react'

interface MatchType {
    winConditions?: string;
    description?: string;
}

const Basics = () => {
    useEffect(() => {
        // Add animation order to blocks
        const blocks = document.querySelectorAll('[data-basic-block]')
        blocks.forEach((block, index) => {
            if (block instanceof HTMLElement) {
                block.style.setProperty('--animation-order', index.toString())
            }
        })
    }, [])

    // const renderBasicBlock = (title: string, controls: string[]) => (
    //     <div data-basic-block className="border-2 border-red-600 bg-red-600/10 h-fit p-[1svw] rounded-[15px] text-left inline-block w-full mb-2.5 box-border shadow-[0_0_10px_0px_rgba(220,38,38,0.3)] transition-all duration-300 ease-in-out animate-[fadeInUp_0.6s_ease-out_backwards] backdrop-blur-sm hover:translate-y-[-5px] hover:shadow-[0_5px_20px_rgba(220,38,38,0.3)] hover:bg-white/[0.03]">
    //         <h3 className="text-center text-2xl mb-4 pb-2 border-b-2 border-red-600">{title}</h3>
    //         {controls.map((control, index) => (
    //             <div key={index} className="relative font-Poppins p-2 my-3 rounded transition-all duration-200 hover:bg-white/[0.08] hover:pl-4 before:content-[''] before:block before:absolute before:w-[5px] before:h-[5px] before:bg-white before:rounded-full before:top-[30%] before:left-[-2%] before:transition-all before:duration-200 before:shadow-[0_0_5px_rgba(220,38,38,0.3)] hover:before:scale-150 hover:before:bg-red-600">
    //                 {control}
    //             </div>
    //         ))}
    //     </div>
    // )

    const basicControls = {
        "In the Ring": [
            "Control Superstar - Directional Buttons or Left Analog Stick",
            "Run - Triangle",
            "Initiate Grapple - Circle + Directional Button",
            "Power Grapple - Circle + Up",
            "Submission Grapple - Circle + Down",
            "Signature Grapple - Circle + Left",
            "Quick Grapple - Circle + Right",
            "Perform Grapple Move - Circle + Directional",
            "Perform Strike Move - X + Directional",
            "Striking Attack - X",
            "Irish Whip - Circle",
            "Counter Striking Attack - L2",
            "Counter Grapple Attack - R2",
            "Counter Smackdown! Move - L2 + R2",
            "Taunt - Right Analog Stick",
            "Pin (adversary on mat) - Circle + Down",
            "Layeth the Smackdown! - L1",
            "Second Finisher - L1 + Directional",
            "Pick up weapon or object - Square",
            "Action - Triangle + Directional toward object",
            "Change Focus - R1",
            "Pause - Start"
        ],
        "Facing Adversary": [
            "Irish Whip - Circle",
            "Striking Attacks - X / X + Directional",
            "Grapple Attacks (min. damage) - Circle / Circle + Directional"
        ],
        "Behind Adversary": [
            "Irish Whip - Circle",
            "Fake Irish Whip - Circle, Square",
            "Rear Grapple Attacks - Circle / Circle + Directional"
        ],
        "Adversary on Mat": [
            "Lift adversary into Grapple - Circle",
            "Pin adversary - Circle + Down",
            "Break your own pin - Square",
            "Upper body grapple attacks - Circle + Directional",
            "Lower body grapple attacks - Circle + Directional",
            "Lift adversary (facing adversary's back) - Circle + Circle",
            "Striking Attacks - X / X + Left or Right / X + Down or Up",
            "Drag Adversary - Hold Circle",
            "Running Ground Strike - Triangle + Circle + X"
        ],
        "Turnbuckle/Ropes": [
            "Enter/Exit Ring - Square + Directional toward ropes",
            "Climb Turnbuckle - Triangle + Directional toward corner",
            "Dismount Turnbuckle - Square",
            "Rope Attack (adversary on ropes) - Circle + Directional",
            "Irish Whip to Ropes - Circle + Directional toward ropes",
            "Adversary's Back to Turnbuckle - Circle + Up, Down, Left, or Right",
            "Adversary Facing Turnbuckle - Circle + Up, Down, Left, or Right",
            "Adversary Sitting on Turnbuckle - Circle + Up, Down, Left, or Right",
            "Remove Turnbuckle - Square + Directional toward turnbuckle",
            "Tag Team Turnbuckle Attacks - Circle + Up, Down, Left, or Right"
        ],
        "Running Maneuvers": [
            "Running Grapple (toward adversary's face/back) - Triangle, Circle + Directional",
            "Running Strike - Triangle, X + Directional",
            "Counter Irish Whip - R2 while at ropes"
        ],
        "High-Flying Maneuvers": [
            "Diving Attacks - X / X + Left, Right, Up, or Down",
            "Counter High-Flying Moves - L2"
        ],
        "Weapon Attacks": [
            "Get weapon from under apron - Circle + Directional toward center of apron",
            "Pick Up/Drop Weapon - Square",
            "Weapon Grapple - X + Up or Down",
            "Weapon Strike - X + Left or Right",
            "Running Weapon Attack - Triangle + Directional toward adversary, strike adversary w/ X button",
            "Weapon Special - L1 while holding a chair",
            "Throw Weapon - Circle"
        ],
        "Tag Team Maneuvers": [
            "Get on outside of apron - Square + Directional toward corner",
            "Call for Tag on apron - Square",
            "Tag Partner - Square + Directional toward partner",
            "Call in Partner - Right Analog Stick"
        ],
        "Ladder Match Maneuvers": [
            "Pick up Ladder - Square (near ladder)",
            "Stand Ladder - Square (while holding ladder)",
            "Place Ladder in Turnbuckle - Square + Directional toward turnbuckle",
            "Climb Ladder - Square + Directional",
            "Diving Attack - X (while standing on ladder)",
            "Reach for Belt - Circle (while standing on ladder)",
            "Jump for Belt - Circle + Directional (while standing on ladder)",
            "Climb Down Ladder - Square (while standing on ladder)",
            "Knock Ladder Over - Square (standing near ladder)"
        ],
        "Table Match Maneuvers": [
            "Pick up Table - Square (near table)",
            "Stand Table - Square (while holding table)",
            "Place Table in Turnbuckle - Square + Directional toward turnbuckle",
            "Throw Adversary onto Table - Hold table and press Up or Down + X",
            "Grapple Adversary through Table - Circle (standing on table w/adversary)",
            "Climb onto Table - Triangle (run toward table)",
            "Dive from Table Attack - X (while standing on table w/o adversary)",
            "Recover - Directional buttons (repeatedly)"
        ],
        "Cage Match/ Hell in a Cell Maneuvers": [
            "Climb Cage - Square + Directional (toward cage)",
            "Climb Cell - Triangle",
            "Dive from Cage Attack - X (on top of cage)",
            "Push adversary off of Cage (Hell in a Cell) - Circle (near edge of top of cage)",
            "Open cage door - Triangle + Directional button"
        ],
        "Bra-and-Panties Match Maneuvers": [
            "Remove garments - Circle + Down (from behind, adversary groggy, or on ground)"
        ],
        "Special Referee Maneuvers": [
            "Count Pin - Square (during pin fall)",
            "Count Ring Out - Square (during Ring Out)",
            "Count Disqualification - Square (during weapon attack)",
            "Count Give Up - Square (during submission)"
        ],
        "Elimination Chamber Maneuvers": [
            "Climb Chamber Wall - Square + Directional toward wall",
            "Climb on top of Chamber - Square + Directional while on turnbuckle",
            "Perform Diving Attack - X while hanging on chamber wall",
            "Pull down Adversary - Circle while adversary hangs on wall"
        ]
    }

    const matchTypes: Record<string, MatchType> = {
        "Tag Match": {
            winConditions: "Pin Fall, Submission, or Disqualification",
            description: "Two Teams of two take on one another for the glory!"
        },
        "Handicap Match": {
            winConditions: "Pin Fall, Submission, or Disqualification",
            description: "One Superstar must face two, or sometimes even three opponents at once! Scary!"
        },
        "Hardcore Match": { description: "No rules, no disqualifications! Use any weapon you can find!" },
        "Royal Rumble": { description: "30 Superstars enter, one wins! Throw your opponents over the top rope to eliminate them." },
        "Survival Match": { description: "Team vs Team elimination match. Last team standing wins!" },
        "Three Stages of Hell": { description: "Best 2 out of 3 matches, each with different rules!" },
        "Bra & Panties Match": { description: "Strip your opponent to win!" },
        "Cage Match": { description: "Escape the cage or make your opponent submit to win!" },
        "Elimination Chamber Match": { description: "6 Superstars, 4 in pods. Last one standing wins!" },
        "Elimination Tag Match": { description: "Tag team match where members must be eliminated to win!" },
        "First Blood Match": { description: "Make your opponent bleed to win!" },
        "Hell in a Cell Match": { description: "Locked inside a massive steel structure. No escape!" },
        "Ironman Match": { description: "Most falls in the time limit wins!" },
        "Ladder Match": { description: "Climb the ladder to grab the prize hanging above!" },
        "Last Man Standing Match": { description: "Knock out your opponent for a 10 count to win!" },
        "Lumber Jack Match": { description: "Ring surrounded by other Superstars who throw you back in!" },
        "Slobber Knocker Match": { description: "Endless opponents until you can't continue!" },
        "Special Referee Match": { description: "A special guest referee controls the match!" },
        "Submission Match": { description: "Victory only by submission!" },
        "Table Match": { description: "Put your opponent through a table to win!" },
        "TLC Match": { description: "Tables, Ladders, and Chairs are all legal!" }
    }

    return (
        <div className="font-Jost bg-nav-background text-white my-[10svh] py-[5svh] px-[1svw] flex flex-col items-center animate-[fadeIn_0.8s_ease-in-out]" id="basics">
            <h2 className="text-4xl p-[1svw] animate-[slideDown_0.6s_ease-out] drop-shadow-[0_0_10px_rgba(220,38,38,0.3)] text-red-600">Basics</h2>
            
            <div className="w-[70svw] m-[1%] text-xl leading-relaxed p-6 rounded-lg bg-gray-800/50 animate-[fadeIn_0.8s_ease-in-out_0.3s_backwards] shadow-[inset_0_0_15px_rgba(0,0,0,0.2)] border border-red-600/20">
                Welcome to the basics section, where you will learn the fundamentals of Smackdown! Here Comes the Pain. Whether it's the essential controls or the information on the types of matches you can participate in that you fancy, you have come to the right place.
            </div>

            <h3 className="text-2xl text-red-600 animate-[slideDown_0.6s_ease-out] my-6 drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]">Basic Controls</h3>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-[1svw] w-[75svw] mx-auto my-2.5">
                {Object.entries(basicControls).map(([title, controls], blockIndex) => (
                    <div 
                        key={title}
                        data-basic-block 
                        className="border-2 border-red-600 bg-red-600/10 h-fit p-[1svw] rounded-[15px] text-left inline-block w-full mb-2.5 box-border shadow-[0_0_10px_0px_rgba(220,38,38,0.3)] transition-all duration-300 ease-in-out backdrop-blur-sm hover:translate-y-[-5px] hover:shadow-[0_5px_20px_rgba(220,38,38,0.3)] hover:bg-white/[0.03]"
                        style={{
                            animation: `fadeInUp 0.6s ease-out backwards`,
                            animationDelay: `${blockIndex * 0.1}s`
                        }}
                    >
                        <h3 className="text-center text-2xl mb-4 pb-2 border-b-2 border-red-600">{title}</h3>
                        {controls.map((control, index) => (
                            <div 
                                key={index} 
                                className="group relative font-Poppins p-2 pl-6 my-3 rounded transition-all duration-200 cursor-pointer
                                    hover:bg-white/[0.08] hover:pl-8 active:scale-[0.98] active:bg-red-600/20
                                    before:content-[''] before:block before:absolute before:w-[6px] before:h-[6px] before:bg-red-600/50 
                                    before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-2 
                                    before:transition-all before:duration-200 before:shadow-[0_0_5px_rgba(220,38,38,0.3)] 
                                    hover:before:scale-150 hover:before:bg-red-600 
                                    after:content-[''] after:block after:absolute after:w-0 after:h-[2px] after:bg-red-600/50
                                    after:bottom-0 after:left-6 after:transition-all after:duration-300
                                    hover:after:w-[calc(100%-1.5rem)] group-hover:after:bg-red-600"
                                style={{
                                    animation: `scaleIn 0.3s ease-out backwards`,
                                    animationDelay: `${(blockIndex * 0.1) + (index * 0.05)}s`
                                }}
                            >
                                {control}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl text-red-600 animate-[slideDown_0.6s_ease-out] my-6 drop-shadow-[0_0_8px_rgba(220,38,38,0.3)]">Match Types</h2>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-[1svw] w-[75svw] mx-auto my-2.5">
                {Object.entries(matchTypes).map(([type, details], index) => (
                    <div 
                        key={type} 
                        data-basic-block 
                        className="border-2 border-red-600 bg-red-600/10 h-fit p-[1svw] rounded-[15px] text-left inline-block w-full mb-2.5 box-border shadow-[0_0_10px_0px_rgba(220,38,38,0.3)] transition-all duration-300 ease-in-out backdrop-blur-sm hover:translate-y-[-5px] hover:shadow-[0_5px_20px_rgba(220,38,38,0.3)] hover:bg-white/[0.03]"
                        style={{
                            animation: `fadeInUp 0.6s ease-out backwards`,
                            animationDelay: `${index * 0.1}s`
                        }}
                    >
                        <h3 className="text-center text-2xl mb-4 pb-2 border-b-2 border-red-600">{type}</h3>
                        {details.winConditions && (
                            <div 
                                className="group relative text-sm text-gray-300 mb-2 p-2 pl-6 rounded transition-all duration-200 cursor-pointer
                                    hover:bg-white/[0.08] hover:pl-8 active:scale-[0.98] active:bg-red-600/20
                                    before:content-[''] before:block before:absolute before:w-[6px] before:h-[6px] before:bg-red-600/50 
                                    before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-2 
                                    before:transition-all before:duration-200 before:shadow-[0_0_5px_rgba(220,38,38,0.3)] 
                                    hover:before:scale-150 hover:before:bg-red-600"
                                style={{
                                    animation: `scaleIn 0.3s ease-out backwards`,
                                    animationDelay: `${(index * 0.1) + 0.2}s`
                                }}
                            >
                                <span className="text-red-500 font-semibold">Win Conditions:</span> {details.winConditions}
                            </div>
                        )}
                        {details.description && (
                            <div 
                                className="group relative text-sm text-gray-400 p-2 pl-6 rounded transition-all duration-200 cursor-pointer
                                    hover:bg-white/[0.08] hover:pl-8 active:scale-[0.98] active:bg-red-600/20
                                    before:content-[''] before:block before:absolute before:w-[6px] before:h-[6px] before:bg-red-600/50 
                                    before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-2 
                                    before:transition-all before:duration-200 before:shadow-[0_0_5px_rgba(220,38,38,0.3)] 
                                    hover:before:scale-150 hover:before:bg-red-600"
                                style={{
                                    animation: `scaleIn 0.3s ease-out backwards`,
                                    animationDelay: `${(index * 0.1) + 0.3}s`
                                }}
                            >
                                {details.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Basics