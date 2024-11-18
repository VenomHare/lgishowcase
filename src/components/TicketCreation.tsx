import React from 'react'
import { CloseTicketImage, CreateImage, JoinDiscordImage, LocateChannelImage, OpenTicketImage, TicketViewImage, VerifyImage } from '../../config/config'
import ImageView from './ImageView'

const TicketCreation:React.FC<{className?:string}> = ({className}) => {
    return (
        <>
            <div className={`ticket-details ${className}`}>
            <div className="ticket-creation-title">How to Buy a Pack</div>
                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 1: Join the Discord Server
                    </div>
                    <div className="ticket-step-detail flex-space-around">
                        <div>
                            <p>1. Click on <strong>Join Server</strong> Button for joining Discord Server.</p>
                            <p>2. Click the link, and if prompted, log into your Discord account.</p>
                            <p>3. Click <strong>"Accept Invite"</strong> to join the server.</p>
                        </div>
                        <ImageView imageURL={JoinDiscordImage} alt="join discord" classname='joindcimg border-2-w' />
                    </div>
                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 2: Read Server Rules and Guidelines
                    </div>
                    <div className="ticket-step-detail">
                        <p>1. Navigate to the <span className='dctag'>#rules</span> or <span className='dctag'>#welcome</span> channel.</p>
                        <p>2. Read through the server rules and verify your account if required.</p>
                    </div>
                    <ImageView imageURL={VerifyImage} alt="verify-ImageView" />
                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 3: Locate the Ticket Creation Channel
                    </div>
                    <div className="ticket-step-detail flex-space-around">
                        <ImageView imageURL={LocateChannelImage} alt="locate channel" classname='border-2-w' />
                        <div>
                            <div className='w-100'>
                                <p>1. Look for a channel with a named  <div className='dctag'>#create-ticket</div></p>
                            </div>
                            {/* <p>2. Read the pinned message or instructions in this channel. It may explain how to create a ticket.</p> */}
                        </div>
                    </div>
                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 4: Open a Ticket
                    </div>
                    <div className="ticket-step-detail flex-space-around">
                        <div>
                            <p>1. In the <span className='dctag'>#create-ticket</span> channel, you will encounter a message from <span className='dctag'>@Ticket Tool B0III</span> </p>
                            <p>2. Select an option  <strong>Buy a Pack</strong> from a dropdown menu.</p>
                            <p>3. New Ticket will be created.</p>
                        </div>
                        <ImageView imageURL={CreateImage} alt="Create Ticket Image"  classname='openTicketImg border-2-w '/>
                    </div>

                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title ">
                        Step 5: Enter the Ticket Channel
                    </div>
                    <div className="ticket-step-detail flex-space-around">
                        <ImageView imageURL={OpenTicketImage} alt="Open Ticket Image"  classname='openTicketImg border-2-w'/>
                        <div>
                            <p>1. Once your ticket is created, the bot will automatically generate a private channel visible only to you and the support team (e.g., <span className='dctag'>#ticket-1234</span>).</p>
                            <p>2. Click on the newly created channel in the server sidebar to enter it.</p>
                        </div>
                    </div>
                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 6: Provide Details in the Ticket
                    </div>
                    <div className="ticket-step-detail flex-space-around">
                        <div>
                            <p>1. Introduce yourself (e.g., "<strong>Hi, I’d like to purchase a pack.</strong>").</p>
                            <p>2. Mention the <strong>name of the pack</strong> you want to buy:</p>
                            <p><em>Example:</em> "I’d like to buy the '<strong>Limited Edition Pack</strong>.'"</p>
                            <p>3. Attach your <strong>PayPal payment receipt</strong> or <strong>screenshot</strong> of the payment:</p>
                            <ul>
                                <li>Click the <strong>“+”</strong> icon at the bottom of the text box.</li>
                                <li>Select <strong>"Upload a File"</strong> and choose the screenshot of your PayPal receipt.</li>
                                <li>Add a short message if needed, like "<strong>Here is my PayPal receipt for the pack purchase.</strong>"</li>
                            </ul>
                        </div>
                        <ImageView imageURL={TicketViewImage} alt="Ticket View Image" classname=' openTicketImg border-2-w' />
                    </div>
                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 7: Wait for a Response
                    </div>
                    <div className="ticket-step-detail">
                        <p>1. The support team or server staff will review your ticket.</p>
                        <p>2. They may ask follow-up questions or provide the pack details.</p>
                        <p>3. Respond promptly to any questions they ask.</p>
                    </div>
                </div>

                <div className="ticket-step-block">
                    <div className="ticket-step-title">
                        Step 8: Close the Ticket
                    </div>
                    <div className="ticket-step-detail">
                        <p>1. Once your issue is resolved, the bot or staff may close the ticket.</p>
                        <p>2. If you're prompted to close it yourself, follow these steps:</p>
                        <ul>
                            <li>React to a bot message with an emoji like 🛑 or ❌.</li>
                            <li>Or click the <strong>“Close Ticket”</strong> button if available.</li>
                        </ul>
                    </div>
                    <ImageView  imageURL={CloseTicketImage} alt="verify-ImageView" />
                </div>

            </div>
        </>
    )
}

export default TicketCreation