import React from 'react'
import ImageView from '../ImageView'
import Config from '../../config/config';

interface Props {
    className?: string;
}

const TicketCreation: React.FC<Props> = ({ className }) => {
    return (
        <div className={`p-8 text-[var(--purchase-main-text)] font-[var(--font)] animate-[fadeIn_0.4s_ease-out] ${className}`}>
            <h2 className="text-3xl font-semibold text-center mb-8 text-[var(--purchase-main-text)]">
                How to Buy a Pack
            </h2>
            
            {/* Step blocks with hover animations */}
            <div className="space-y-8">
                {/* Step 1 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300 animate-[fadeIn_0.4s_ease-out]">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 1: Join the Discord Server
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                        <div className="space-y-2">
                            <p>1. Click on <strong className="text-[var(--purchase-highlight-text)] font-semibold">Join Server</strong> Button for joining Discord Server.</p>
                            <p>2. Click the link, and if prompted, log into your Discord account.</p>
                            <p>3. Click <strong className="text-[var(--purchase-highlight-text)] font-semibold">"Accept Invite"</strong> to join the server.</p>
                        </div>
                        <ImageView 
                            imageURL={Config.JoinDiscordImage} 
                            alt="join discord" 
                            classname="max-w-[300px] rounded-lg border-2 border-white/20" 
                        />
                    </div>
                </div>

                {/* Step 2 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 2: Read Server Rules and Guidelines
                    </h3>
                    <div className="space-y-4">
                        <p>1. Navigate to the <span className="bg-[#5865F2]/20 text-[#7289da] px-2 py-0.5 rounded font-mono text-sm">#rules</span> or <span className="bg-[#5865F2]/20 text-[#7289da] px-2 py-0.5 rounded font-mono text-sm">#welcome</span> channel.</p>
                        <p>2. Read through the server rules and verify your account if required.</p>
                        <ImageView 
                            imageURL={Config.VerifyImage} 
                            alt="verify" 
                            classname="max-w-[300px] rounded-lg" 
                        />
                    </div>
                </div>

                {/* Step 3 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 3: Locate the Ticket Creation Channel
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                        <ImageView 
                            imageURL={Config.LocateChannelImage} 
                            alt="locate channel" 
                            classname="max-w-[300px] rounded-lg border-2 border-white/20" 
                        />
                        <div>
                            <p>1. Look for a channel named <span className="bg-[#5865F2]/20 text-[#7289da] px-2 py-0.5 rounded font-mono text-sm">#create-ticket</span></p>
                        </div>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 4: Open a Ticket
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                        <div className="space-y-2">
                            <p>1. In the <span className="bg-[#5865F2]/20 text-[#7289da] px-2 py-0.5 rounded font-mono text-sm">#create-ticket</span> channel, you will encounter a message from <span className="bg-[#5865F2]/20 text-[#7289da] px-2 py-0.5 rounded font-mono text-sm">@Ticket Tool B0III</span></p>
                            <p>2. Select an option <strong className="text-[var(--purchase-highlight-text)] font-semibold">Buy a Pack</strong> from a dropdown menu.</p>
                            <p>3. New Ticket will be created.</p>
                        </div>
                        <ImageView 
                            imageURL={Config.CreateImage} 
                            alt="Create Ticket" 
                            classname="max-w-[300px] rounded-lg border-2 border-white/20" 
                        />
                    </div>
                </div>

                {/* Step 5 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 5: Enter the Ticket Channel
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                        <ImageView 
                            imageURL={Config.OpenTicketImage} 
                            alt="Open Ticket" 
                            classname="max-w-[300px] rounded-lg border-2 border-white/20" 
                        />
                        <div className="space-y-2">
                            <p>1. Once your ticket is created, the bot will automatically generate a private channel visible only to you and the support team (e.g., <span className="bg-[#5865F2]/20 text-[#7289da] px-2 py-0.5 rounded font-mono text-sm">#ticket-1234</span>).</p>
                            <p>2. Click on the newly created channel in the server sidebar to enter it.</p>
                        </div>
                    </div>
                </div>

                {/* Step 6 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 6: Provide Details in the Ticket
                    </h3>
                    <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                        <div className="space-y-4">
                            <p>1. Introduce yourself (e.g., "<strong className="text-[var(--purchase-highlight-text)] font-semibold">Hi, I'd like to purchase a pack.</strong>").</p>
                            <p>2. Mention the <strong className="text-[var(--purchase-highlight-text)] font-semibold">name of the pack</strong> you want to buy:</p>
                            <p><em>Example:</em> "I'd like to buy the '<strong className="text-[var(--purchase-highlight-text)] font-semibold">Limited Edition Pack</strong>.'"</p>
                            <p>3. Attach your <strong className="text-[var(--purchase-highlight-text)] font-semibold">PayPal payment receipt</strong> or <strong className="text-[var(--purchase-highlight-text)] font-semibold">screenshot</strong> of the payment:</p>
                            <ul className="ml-6 mt-2 space-y-2 list-disc">
                                <li>Click the <strong className="text-[var(--purchase-highlight-text)] font-semibold">"+"</strong> icon at the bottom of the text box.</li>
                                <li>Select <strong className="text-[var(--purchase-highlight-text)] font-semibold">"Upload a File"</strong> and choose the screenshot of your PayPal receipt.</li>
                                <li>Add a short message if needed, like "<strong className="text-[var(--purchase-highlight-text)] font-semibold">Here is my PayPal receipt for the pack purchase.</strong>"</li>
                            </ul>
                        </div>
                        <ImageView 
                            imageURL={Config.TicketViewImage} 
                            alt="Ticket View" 
                            classname="max-w-[300px] rounded-lg border-2 border-white/20" 
                        />
                    </div>
                </div>

                {/* Step 7 */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 7: Wait for a Response
                    </h3>
                    <div className="space-y-2">
                        <p>1. The support team or server staff will review your ticket.</p>
                        <p>2. They may ask follow-up questions or provide the pack details.</p>
                        <p>3. Respond promptly to any questions they ask.</p>
                    </div>
                </div>

                {/* Step 8 */}
                {/* <div className="mb-8 p-4 rounded-lg bg-white/5 hover:bg-white/8 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-[var(--purchase-main-text)] pb-2 border-b border-white/10">
                        Step 8: Close the Ticket
                    </h3>
                    <div className="space-y-4">
                        <p>1. Once your issue is resolved, the bot or staff may close the ticket.</p>
                        <p>2. If you're prompted to close it yourself, follow these steps:</p>
                        <ul className="ml-6 mt-2 space-y-2 list-disc">
                            <li>React to a bot message with an emoji like 🛑 or ❌.</li>
                            <li>Or click the <strong className="text-[var(--purchase-highlight-text)] font-semibold">"Close Ticket"</strong> button if available.</li>
                        </ul>
                        <ImageView 
                            imageURL={Config.CloseTicketImage} 
                            alt="Close Ticket" 
                            classname="max-w-[300px] rounded-lg" 
                        />
                    </div>
                </div> */}
            </div>
        </div>
    )
}



export default TicketCreation